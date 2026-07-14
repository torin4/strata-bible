import {
  getClosingBookCapstone,
  getClosingMovement,
  getReading,
} from "@/lib/content";
import { expandReading } from "@/lib/expand";
import { isReadingEntitled, lookupCaller } from "@/lib/server-auth";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Returns a reading's authored content (the four layers, plus the closing movement/book
// capstones) ONLY to a verified entitled reader. The prerendered page ships no paid content
// for a gated reading; the client fetches it here once, and the server re-checks entitlement
// so a forged request from a non-subscriber cannot pull the content.
export async function POST(req: NextRequest) {
  const idToken = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const caller = idToken ? await lookupCaller(idToken) : null;
  if (!idToken || !caller) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { bookId?: unknown; readingId?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }
  if (typeof body.bookId !== "string" || typeof body.readingId !== "string") {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  const reading = getReading(body.bookId, body.readingId);
  if (!reading) {
    return NextResponse.json({ error: "unknown-reading" }, { status: 404 });
  }

  if (!(await isReadingEntitled(idToken, caller, reading))) {
    return NextResponse.json({ error: "locked" }, { status: 403 });
  }

  return NextResponse.json({
    reading: expandReading(reading),
    closingMovement: getClosingMovement(body.bookId, reading) ?? null,
    closingBookCapstone: getClosingBookCapstone(body.bookId, reading) ?? null,
  });
}
