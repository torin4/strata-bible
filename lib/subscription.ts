import { db } from "@/lib/firebase";
import {
  type Unsubscribe,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

// STRATA Plus billing. It is "on" only when a Stripe price is configured; until then the
// app stays fully open (nothing gated), so the reader and the owner can use everything
// before Stripe is live. Set NEXT_PUBLIC_STRIPE_PRICE_ID to the recurring price to launch.
export const STRIPE_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID ?? "";
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
export async function startCheckout(uid: string): Promise<void> {
  if (!db || !STRIPE_PRICE_ID) throw new Error("Billing is not configured.");
  const ref = await addDoc(
    collection(db, CUSTOMERS, uid, "checkout_sessions"),
    {
      price: STRIPE_PRICE_ID,
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
