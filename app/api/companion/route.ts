import {
  CompanionUnconfiguredError,
  draftMiddle,
} from "@/lib/companion-server";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Confirm the caller is a real signed-in reader of this Firebase project before spending
// a model call. The public web API key is enough to verify an ID token via Identity
// Toolkit, so no service-account secret is needed.
async function verifyIdToken(idToken: string): Promise<boolean> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) return false;
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      },
    );
    if (!res.ok) return false;
    const data = (await res.json()) as { users?: unknown[] };
    return Array.isArray(data.users) && data.users.length > 0;
  } catch {
    return false;
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
  if (!idToken || !(await verifyIdToken(idToken))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { task?: string; passage?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }
  if (
    body.task !== "draft-middle" ||
    !body.passage ||
    typeof body.passage !== "object"
  ) {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  try {
    // The passage shape is validated structurally by the model schema; the draft falls
    // back to authored content on the client if anything here fails.
    const layer = await draftMiddle(
      body.passage as Parameters<typeof draftMiddle>[0],
    );
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
