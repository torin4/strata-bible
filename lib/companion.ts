import { auth, db } from "@/lib/firebase";
import type { AddrMode, Passage } from "@/lib/types";
import {
  type Unsubscribe,
  doc,
  getDoc,
  increment,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// The companion's draft-middle output, merged over an authored passage at render time.
// Matches the output contract in companion-spec.md. Any missing piece falls back to the
// authored (here: blank) content; the reader never breaks without it.
export interface CompanionLayer {
  meaning: string;
  lenses?: { theo?: string; arch?: string };
  addr: { mode: AddrMode; text: string };
  ask: string;
}

// The taste: a reader without STRATA Plus gets this many companion draws inside the free
// primeval sample before the upgrade. Tracked per user; the server still enforces that
// non-Plus draws only happen on free readings.
export const FREE_DRAW_LIMIT = 1;

export function subscribeFreeDraws(
  uid: string,
  onChange: (used: number) => void,
): Unsubscribe {
  if (!db) {
    onChange(0);
    return () => {};
  }
  return onSnapshot(
    doc(db, "users", uid, "state", "companionUsage"),
    (snap) => {
      const n = snap.exists() ? snap.data().freeDraws : 0;
      onChange(typeof n === "number" ? n : 0);
    },
    () => onChange(0),
  );
}

export async function recordFreeDraw(uid: string): Promise<void> {
  if (!db) return;
  await setDoc(
    doc(db, "users", uid, "state", "companionUsage"),
    { freeDraws: increment(1) },
    { merge: true },
  );
}

// A cheap stable hash of the authored passage. If the scripture or ground changes, the
// hash changes and any cached draft is treated as stale (regenerated on next ask).
function hashAuthored(passage: Passage): string {
  const items = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  const basis = [
    passage.ref,
    passage.ground?.text ?? "",
    ...items.map((v) => `${v.n}:${v.text}`),
  ].join("|");
  let h = 5381;
  for (let i = 0; i < basis.length; i++)
    h = (Math.imul(33, h) + basis.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

function cacheKey(readingId: string, passageRef: string): string {
  return `${readingId}__${passageRef}__draft-middle`
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .slice(0, 240);
}

// A previously generated draft for this user, if one exists and is still current.
export async function loadCachedMiddle(
  readingId: string,
  passage: Passage,
): Promise<CompanionLayer | null> {
  const user = auth?.currentUser;
  if (!auth || !db || !user) return null;
  const snap = await getDoc(
    doc(db, "users", user.uid, "companion", cacheKey(readingId, passage.ref)),
  );
  if (!snap.exists()) return null;
  const data = snap.data();
  if (data.authoredHash !== hashAuthored(passage)) return null;
  return data.payload as CompanionLayer;
}

// Ask the companion to draft the middle for this passage, then cache it. The API key
// lives only on the server route; this call carries the user's Firebase ID token so the
// route can confirm a real signed-in reader before spending a model call.
export async function generateMiddle(
  readingId: string,
  passage: Passage,
): Promise<CompanionLayer> {
  const user = auth?.currentUser;
  if (!auth || !db || !user) throw new Error("Sign in to use the companion.");

  const idToken = await user.getIdToken();
  // Send only the identifiers, never the passage text. The route resolves the canonical
  // passage from authored content server-side, so no client-supplied text ever reaches
  // the model (closes a prompt-injection / payload-size vector).
  const res = await fetch("/api/companion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      task: "draft-middle",
      readingId,
      passageRef: passage.ref,
    }),
  });
  if (!res.ok) {
    throw new Error(
      res.status === 503
        ? "The companion is not configured yet."
        : res.status === 429
          ? "You have drawn a lot in a short time. Give it a minute."
          : "The companion could not draft this.",
    );
  }
  const layer = (await res.json()) as CompanionLayer;

  // Caching is best-effort: a failed write (e.g. rules not yet broadened) must not lose
  // the draft the reader just paid for.
  try {
    await setDoc(
      doc(db, "users", user.uid, "companion", cacheKey(readingId, passage.ref)),
      {
        payload: layer,
        authoredHash: hashAuthored(passage),
        task: "draft-middle",
        createdAt: serverTimestamp(),
      },
    );
  } catch {
    // ignore; the draft still renders, it just will not be cached for next time
  }
  return layer;
}

// Ask the companion about a single highlighted verse: an angle preset, or a free-text
// question. The route resolves the canonical verse from authored content (never client
// text) and is Plus-gated server-side, so a 402 means it needs STRATA Plus.
export async function askAboutVerse(
  readingId: string,
  passageRef: string,
  verseN: number,
  ask: { angle?: "history" | "meaning" | "turn"; question?: string },
): Promise<string> {
  const user = auth?.currentUser;
  if (!auth || !user) throw new Error("Sign in to ask the companion.");

  const idToken = await user.getIdToken();
  const res = await fetch("/api/companion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      task: "ask-verse",
      readingId,
      passageRef,
      verseN,
      angle: ask.angle,
      question: ask.question,
    }),
  });
  if (!res.ok) {
    if (res.status === 402) throw new Error("plus-required");
    if (res.status === 429)
      throw new Error("Too many questions just now. Give it a minute.");
    throw new Error("The companion could not answer this.");
  }
  const data = (await res.json()) as { answer: string };
  return data.answer;
}
