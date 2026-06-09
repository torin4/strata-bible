import { db } from "@/lib/firebase";
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

// Live "is this user on STRATA Plus", read from the subscriptions the extension syncs into
// Firestore from Stripe. We treat a single active or trialing subscription as Plus.
export function subscribePlus(
  uid: string,
  onChange: (active: boolean) => void,
): Unsubscribe {
  if (!db) {
    onChange(false);
    return () => {};
  }
  const q = query(
    collection(db, CUSTOMERS, uid, "subscriptions"),
    where("status", "in", ["active", "trialing"]),
  );
  return onSnapshot(
    q,
    (snap) => onChange(!snap.empty),
    () => onChange(false),
  );
}

// Start Stripe Checkout for STRATA Plus: write a checkout_sessions doc, wait for the
// extension to attach the hosted Checkout URL (or an error), then redirect the browser.
// Defaults to the annual price; pass the monthly price for the monthly plan.
export async function startCheckout(
  uid: string,
  price: string = STRIPE_PRICE_ID,
): Promise<void> {
  if (!db || !price) throw new Error("Billing is not configured.");
  const ref = await addDoc(
    collection(db, CUSTOMERS, uid, "checkout_sessions"),
    {
      price,
      allow_promotion_codes: true,
      success_url: window.location.href,
      cancel_url: window.location.href,
    },
  );
  await new Promise<void>((resolve, reject) => {
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data() as
        | { url?: string; error?: { message: string } }
        | undefined;
      if (data?.error) {
        unsub();
        reject(new Error(data.error.message));
      } else if (data?.url) {
        unsub();
        window.location.assign(data.url);
        resolve();
      }
    });
  });
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
