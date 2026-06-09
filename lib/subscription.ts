import { db } from "@/lib/firebase";
import { bookForPriceId, bookOffer } from "@/lib/pricing";
import { getApp } from "firebase/app";
import {
  type Unsubscribe,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

// STRATA Plus billing. It is "on" only when a Stripe price is configured; until then the
// app stays fully open (nothing gated), so the reader and the owner can use everything
// before Stripe is live. Set NEXT_PUBLIC_STRIPE_PRICE_ID to the recurring price to launch.
export const STRIPE_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID ?? "";
export const STRIPE_PRICE_ID_MONTHLY =
  process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY ?? "";
export const billingEnabled = Boolean(STRIPE_PRICE_ID);

// Matches the Firebase "Run Payments with Stripe" extension's default customers collection.
const CUSTOMERS = "customers";

// The reader's active STRATA Plus subscription, as much as the settings page needs to show
// status and offer management. Null when there is no active subscription.
export interface PlusSubscription {
  status: string;
  interval: "month" | "year" | null;
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: number | null; // epoch ms
}

// Read a Firestore Timestamp-ish value into epoch ms, tolerating the few shapes the
// extension may write (Timestamp object, {seconds}, or a number).
function toMillis(value: unknown): number | null {
  if (!value) return null;
  if (typeof value === "number") return value;
  const v = value as { toMillis?: () => number; seconds?: number };
  if (typeof v.toMillis === "function") return v.toMillis();
  if (typeof v.seconds === "number") return v.seconds * 1000;
  return null;
}

// Live "is this user on STRATA Plus", read from the subscriptions the extension syncs into
// Firestore from Stripe. We treat a single active or trialing subscription as Plus.
export function subscribePlus(
  uid: string,
  onChange: (sub: PlusSubscription | null) => void,
): Unsubscribe {
  if (!db) {
    onChange(null);
    return () => {};
  }
  const q = query(
    collection(db, CUSTOMERS, uid, "subscriptions"),
    where("status", "in", ["active", "trialing"]),
  );
  return onSnapshot(
    q,
    (snap) => {
      if (snap.empty) {
        onChange(null);
        return;
      }
      // A reader can briefly hold more than one active subscription (e.g. a monthly then an
      // annual upgrade mid-period). Show the one that runs latest, not whichever Firestore
      // happened to return first, so the settings page reports the real renewal date.
      const doc = snap.docs.reduce((latest, candidate) => {
        const a = toMillis(candidate.data().current_period_end) ?? 0;
        const b = toMillis(latest.data().current_period_end) ?? 0;
        return a > b ? candidate : latest;
      });
      const data = doc.data() as Record<string, unknown>;
      const items = Array.isArray(data.items) ? data.items : [];
      const interval = (items[0] as { price?: { interval?: string } })?.price
        ?.interval;
      onChange({
        status: typeof data.status === "string" ? data.status : "active",
        interval: interval === "month" || interval === "year" ? interval : null,
        cancelAtPeriodEnd: Boolean(data.cancel_at_period_end),
        currentPeriodEnd: toMillis(data.current_period_end),
      });
    },
    () => onChange(null),
  );
}

// Write a checkout_sessions doc, wait for the extension to attach the hosted Checkout URL
// (or an error), then redirect the browser. Shared by the subscription and per-book flows.
async function runCheckout(
  uid: string,
  payload: Record<string, unknown>,
): Promise<void> {
  if (!db) throw new Error("Billing is not configured.");
  const ref = await addDoc(
    collection(db, CUSTOMERS, uid, "checkout_sessions"),
    payload,
  );
  await new Promise<void>((resolve, reject) => {
    // The extension attaches `url` (or `error`) asynchronously. If it is misconfigured or
    // slow, that write may never arrive, so bound the wait instead of hanging the UI on
    // "Opening checkout" forever.
    const timer = setTimeout(() => {
      unsub();
      reject(
        new Error("Checkout is taking too long to open. Please try again."),
      );
    }, 30000);
    const unsub = onSnapshot(
      ref,
      (snap) => {
        const data = snap.data() as
          | { url?: string; error?: { message: string } }
          | undefined;
        if (data?.error) {
          clearTimeout(timer);
          unsub();
          reject(new Error(data.error.message));
        } else if (data?.url) {
          clearTimeout(timer);
          unsub();
          window.location.assign(data.url);
          resolve();
        }
      },
      (err) => {
        clearTimeout(timer);
        unsub();
        reject(err);
      },
    );
  });
}

// Start Stripe Checkout for STRATA Plus (recurring). Defaults to the annual price; pass the
// monthly price for the monthly plan. Returns tagged so the welcome shows once on arrival.
export async function startCheckout(
  uid: string,
  price: string = STRIPE_PRICE_ID,
): Promise<void> {
  if (!price) throw new Error("Billing is not configured.");
  const successUrl = new URL(window.location.href);
  successUrl.searchParams.set("plus", "welcome");
  await runCheckout(uid, {
    price,
    allow_promotion_codes: true,
    success_url: successUrl.toString(),
    cancel_url: window.location.href,
  });
}

// Buy a single book outright (one-time). The bookId travels as metadata so the purchase can
// be matched back to the book, and the price itself is matched too.
export async function buyBook(uid: string, bookId: string): Promise<void> {
  const offer = bookOffer(bookId);
  if (!offer) throw new Error("This book is not for sale yet.");
  const successUrl = new URL(window.location.href);
  successUrl.searchParams.set("book", bookId);
  await runCheckout(uid, {
    mode: "payment",
    price: offer.priceId,
    metadata: { bookId },
    allow_promotion_codes: true,
    success_url: successUrl.toString(),
    cancel_url: window.location.href,
  });
}

// The books a reader owns outright, from their succeeded one-time payments. Ownership is
// matched on the price actually charged, never on client-supplied metadata: the bookId in
// metadata is written by the browser and could be forged to claim a pricier book for a
// cheaper charge, so it is display-only and not trusted here.
export function subscribeOwnedBooks(
  uid: string,
  onChange: (books: Set<string>) => void,
): Unsubscribe {
  if (!db) {
    onChange(new Set());
    return () => {};
  }
  const q = query(
    collection(db, CUSTOMERS, uid, "payments"),
    where("status", "==", "succeeded"),
  );
  return onSnapshot(
    q,
    (snap) => {
      const owned = new Set<string>();
      for (const doc of snap.docs) {
        const data = doc.data() as Record<string, unknown>;
        const prices = Array.isArray(data.prices) ? data.prices : [];
        for (const p of prices) {
          const priceId = (p as { price?: string })?.price;
          const book = priceId ? bookForPriceId(priceId) : null;
          if (book) owned.add(book);
        }
      }
      onChange(owned);
    },
    () => onChange(new Set()),
  );
}

// Region the Stripe extension's Cloud Functions are deployed to (its install default is
// us-central1); override if the extension was installed elsewhere.
const FUNCTIONS_REGION =
  process.env.NEXT_PUBLIC_STRIPE_FUNCTIONS_REGION ?? "us-central1";

// Open the Stripe Customer Portal (manage or cancel a subscription) via the extension's
// callable function, then redirect. Only meaningful for an actual subscriber.
export async function openPortal(): Promise<void> {
  if (!db) throw new Error("Billing is not configured.");
  const fn = httpsCallable<{ returnUrl: string }, { url: string }>(
    getFunctions(getApp(), FUNCTIONS_REGION),
    "ext-firestore-stripe-payments-createPortalLink",
  );
  const { data } = await fn({ returnUrl: window.location.href });
  window.location.assign(data.url);
}
