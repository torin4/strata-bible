import { isComped, isFreeReading } from "@/lib/access";
import {
  CompanionUnconfiguredError,
  draftMiddle,
} from "@/lib/companion-server";
import { findReadingAnywhere } from "@/lib/content";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

interface CallerInfo {
  uid: string;
  email?: string;
  stripeRole?: string;
}

// A best-effort in-memory rate limiter. It lives per serverless instance, so it is a
// backstop against the realistic abuse (a script hammering the endpoint to burn model
// tokens), not a distributed quota. A shared store (Upstash / Vercel KV) would make it
// authoritative across instances; that is the upgrade when traffic grows. Keyed by uid,
// and more loosely by client IP so many throwaway accounts behind one address still hit a
// ceiling.
const WINDOW_MS = 60_000;
const MAX_PER_UID = 6; // generous for a human drawing middles one at a time
const MAX_PER_IP = 30; // several readers can share an IP (school, office, NAT)
interface Hits {
  count: number;
  resetAt: number;
}
const uidHits = new Map<string, Hits>();
const ipHits = new Map<string, Hits>();

function rateLimited(
  map: Map<string, Hits>,
  key: string,
  max: number,
): boolean {
  const now = Date.now();
  // Opportunistically drop expired buckets so the maps cannot grow without bound.
  if (map.size > 5000) {
    for (const [k, h] of map) if (now > h.resetAt) map.delete(k);
  }
  const hit = map.get(key);
  if (!hit || now > hit.resetAt) {
    map.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (hit.count >= max) return true;
  hit.count++;
  return false;
}

function clientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Confirm the caller is a real signed-in reader and recover what we need to authorize the
// draft: their uid (rate-limit key), email (for comped accounts) and their stripeRole
// custom claim (set by the Stripe extension for STRATA Plus). The public web API key
// verifies the ID token via Identity Toolkit, so no service-account secret is needed.
async function lookupCaller(idToken: string): Promise<CallerInfo | null> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
        // Do not let a hung Identity Toolkit call ride the full maxDuration.
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

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "companion-unconfigured" },
      { status: 503 },
    );
  }

  const idToken = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const caller = idToken ? await lookupCaller(idToken) : null;
  if (!caller) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { task?: string; readingId?: unknown; passageRef?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }
  if (
    body.task !== "draft-middle" ||
    typeof body.readingId !== "string" ||
    typeof body.passageRef !== "string"
  ) {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  // Resolve the passage from authored content by id, ignoring any client-supplied text:
  // the model only ever sees canonical, bounded scripture, never an arbitrary payload.
  const found = findReadingAnywhere(body.readingId);
  const passage = found?.reading.passages.find(
    (p) => p.ref === body.passageRef,
  );
  if (!found || !passage) {
    return NextResponse.json({ error: "unknown-passage" }, { status: 404 });
  }

  // With billing on, the companion is STRATA Plus, except on a free reading (the primeval
  // sample) which any signed-in reader may draw. Plus is proven by the stripeRole claim
  // (set by the Stripe extension) or a comped account.
  const billingOn = Boolean(process.env.NEXT_PUBLIC_STRIPE_PRICE_ID);
  const entitled =
    !billingOn ||
    caller.stripeRole === "plus" ||
    isComped(caller.email) ||
    isFreeReading(found.reading);
  if (!entitled) {
    return NextResponse.json({ error: "plus-required" }, { status: 402 });
  }

  // Cap how fast a single reader (or IP) can spend model calls. The client already limits
  // free draws, but that gate is cosmetic; this is the server-side backstop against a
  // script looping the endpoint. Checked only now, so unauthorized/unknown requests never
  // consume a reader's budget.
  if (
    rateLimited(uidHits, caller.uid, MAX_PER_UID) ||
    rateLimited(ipHits, clientIp(req), MAX_PER_IP)
  ) {
    return NextResponse.json(
      { error: "rate-limited" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  try {
    // The draft falls back to authored content on the client if anything here fails.
    const layer = await draftMiddle(passage);
    return NextResponse.json(layer);
  } catch (err) {
    if (err instanceof CompanionUnconfiguredError) {
      return NextResponse.json(
        { error: "companion-unconfigured" },
        { status: 503 },
      );
    }
    console.error("companion draft-middle failed:", err);
    return NextResponse.json({ error: "draft-failed" }, { status: 500 });
  }
}
