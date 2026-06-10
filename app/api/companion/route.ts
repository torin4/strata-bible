import {
  CompanionUnconfiguredError,
  askAboutVerse,
  draftMiddle,
} from "@/lib/companion-server";
import { findReadingAnywhere } from "@/lib/content";
import { isPlusEntitled, lookupCaller } from "@/lib/server-auth";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

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

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "companion-unconfigured" },
      { status: 503 },
    );
  }

  const idToken = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const caller = idToken ? await lookupCaller(idToken) : null;
  if (!idToken || !caller) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: {
    task?: string;
    readingId?: unknown;
    passageRef?: unknown;
    verseN?: unknown;
    angle?: unknown;
    question?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }
  if (
    (body.task !== "draft-middle" && body.task !== "ask-verse") ||
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

  // The companion is STRATA Plus only (owning a single book does not unlock it), except on a
  // free reading, which any signed-in reader may draw. Same Plus gate as the content route.
  if (!(await isPlusEntitled(idToken, caller, found.reading))) {
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
    if (body.task === "ask-verse") {
      const angle =
        body.angle === "history" ||
        body.angle === "meaning" ||
        body.angle === "turn"
          ? body.angle
          : undefined;
      const question =
        typeof body.question === "string"
          ? body.question.trim().slice(0, 300)
          : undefined;
      if (typeof body.verseN !== "number" || (!angle && !question)) {
        return NextResponse.json({ error: "bad-request" }, { status: 400 });
      }
      const answer = await askAboutVerse(passage, body.verseN, {
        angle,
        question,
      });
      return NextResponse.json({ answer });
    }
    // draft-middle: falls back to authored content on the client if anything here fails.
    const layer = await draftMiddle(passage);
    return NextResponse.json(layer);
  } catch (err) {
    if (err instanceof CompanionUnconfiguredError) {
      return NextResponse.json(
        { error: "companion-unconfigured" },
        { status: 503 },
      );
    }
    console.error("companion request failed:", err);
    return NextResponse.json({ error: "draft-failed" }, { status: 500 });
  }
}
