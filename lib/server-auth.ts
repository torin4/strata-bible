import { isComped, isFreeReading } from "@/lib/access";
import { bookForPriceId, bookOffer } from "@/lib/pricing";
import type { Reading } from "@/lib/types";

// Server-side entitlement. The single source of truth for "may this caller see paid content",
// shared by the companion route and the reading-content route so the two gates never drift.
// No firebase-admin: the public web API key verifies the ID token via Identity Toolkit, and
// per-book ownership is read from the caller's OWN Stripe payments through Firestore REST under
// their token (security rules still apply), so nothing here trusts a client claim.

export interface CallerInfo {
  uid: string;
  email?: string;
  stripeRole?: string;
}

const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

function billingOn(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_STRIPE_PRICE_ID);
}

// Confirm the caller is a real signed-in reader and recover their uid (rate-limit key), email
// (comped accounts), and stripeRole custom claim (set by the Stripe extension for STRATA Plus).
export async function lookupCaller(
  idToken: string,
): Promise<CallerInfo | null> {
  if (!FIREBASE_API_KEY) return null;
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
        // Do not let a hung Identity Toolkit call ride the full function duration.
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      users?: Array<{
        localId?: string;
        email?: string;
        customAttributes?: string;
      }>;
    };
    const user = data.users?.[0];
    if (!user?.localId) return null;
    let stripeRole: string | undefined;
    try {
      stripeRole = (
        JSON.parse(user.customAttributes ?? "{}") as { stripeRole?: string }
      ).stripeRole;
    } catch {
      // no/invalid custom claims; treat as no role
    }
    return { uid: user.localId, email: user.email, stripeRole };
  } catch {
    return null;
  }
}

// Plus-level entitlement: an active STRATA Plus subscription, a comped account, or a free
// reading. Owning a single book does NOT count here, because the companion is Plus-only.
// (When billing is off, everything is open.) The stripeRole claim is the fast path; for a
// reader who just subscribed and whose ID token has not refreshed to carry the claim yet, we
// fall back to reading their synced subscription doc, so paid content works immediately after
// checkout with no forced re-login.
export async function isPlusEntitled(
  idToken: string,
  caller: CallerInfo,
  reading: Reading,
): Promise<boolean> {
  if (!billingOn()) return true;
  if (isComped(caller.email) || isFreeReading(reading)) return true;
  if (caller.stripeRole === "plus") return true;
  return hasActiveSubscription(idToken, caller.uid);
}

// Whether the caller may read this reading's authored content: Plus-level, OR they own the
// book outright. Ownership is verified from their succeeded Stripe payments, never the client.
export async function isReadingEntitled(
  idToken: string,
  caller: CallerInfo,
  reading: Reading,
): Promise<boolean> {
  if (await isPlusEntitled(idToken, caller, reading)) return true;
  // Not sold per-book, so ownership is impossible; skip the network read.
  if (!bookOffer(reading.bookId)) return false;
  return ownsBook(idToken, caller.uid, reading.bookId);
}

// True if the caller has an active or trialing STRATA Plus subscription, read from the docs
// the Stripe extension syncs into Firestore. Read under the caller's own token (own-read only
// by the rules), so it cannot be forged. The timing-independent backstop to the token claim.
async function hasActiveSubscription(
  idToken: string,
  uid: string,
): Promise<boolean> {
  if (!FIREBASE_PROJECT_ID) return false;
  try {
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/customers/${uid}/subscriptions`,
      {
        headers: { Authorization: `Bearer ${idToken}` },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) return false;
    const data = (await res.json()) as {
      documents?: Array<{ fields?: Record<string, FsValue> }>;
    };
    for (const doc of data.documents ?? []) {
      const status = doc.fields?.status?.stringValue;
      if (status === "active" || status === "trialing") return true;
    }
    return false;
  } catch {
    return false;
  }
}

// A minimal slice of the Firestore REST typed-value shape, enough to read a payment's status
// and the price IDs it charged.
interface FsValue {
  stringValue?: string;
  referenceValue?: string;
  arrayValue?: { values?: FsValue[] };
  mapValue?: { fields?: Record<string, FsValue> };
}

// True if the user has a succeeded one-time payment whose price maps to this book. Reads
// customers/{uid}/payments via Firestore REST with the caller's own ID token; the security
// rules (own-read only) are what make this safe without a service account.
async function ownsBook(
  idToken: string,
  uid: string,
  bookId: string,
): Promise<boolean> {
  if (!FIREBASE_PROJECT_ID) return false;
  try {
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/customers/${uid}/payments`,
      {
        headers: { Authorization: `Bearer ${idToken}` },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) return false;
    const data = (await res.json()) as {
      documents?: Array<{ fields?: Record<string, FsValue> }>;
    };
    for (const doc of data.documents ?? []) {
      const fields = doc.fields ?? {};
      if (fields.status?.stringValue !== "succeeded") continue;
      for (const entry of fields.prices?.arrayValue?.values ?? []) {
        // Each entry is a Firestore reference to the price doc (…/prices/price_…). Older
        // shape: a map carrying a price string or reference.
        const mapPrice = entry.mapValue?.fields?.price;
        const priceId =
          entry.referenceValue?.split("/").pop() ??
          mapPrice?.stringValue ??
          mapPrice?.referenceValue?.split("/").pop();
        if (priceId && bookForPriceId(priceId) === bookId) return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}
