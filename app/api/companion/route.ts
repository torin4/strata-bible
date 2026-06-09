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
  email?: string;
  stripeRole?: string;
}

// Confirm the caller is a real signed-in reader and recover what we need to authorize the
// draft: their email (for comped accounts) and their stripeRole custom claim (set by the
// Stripe extension for STRATA Plus). The public web API key verifies the ID token via
// Identity Toolkit, so no service-account secret is needed.
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
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      users?: Array<{ email?: string; customAttributes?: string }>;
    };
    const user = data.users?.[0];
    if (!user) return null;
    let stripeRole: string | undefined;
    try {
      stripeRole = (
        JSON.parse(user.customAttributes ?? "{}") as { stripeRole?: string }
      ).stripeRole;
    } catch {
      // no/invalid custom claims; treat as no role
    }
    return { email: user.email, stripeRole };
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
