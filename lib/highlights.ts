import { findReadingAnywhere } from "@/lib/content";
import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// Verse highlights: a set of "readingId|passageRef|verse" keys the reader has marked.
// Persisted in Firestore under the signing user (per the storage rule, not localStorage).
// Signed out, nothing is stored or shown and the reader stays fully usable.
export function highlightKey(
  readingId: string,
  passageRef: string,
  n: number,
): string {
  return `${readingId}|${passageRef}|${n}`;
}

function highlightsDoc(database: Firestore, uid: string) {
  return doc(database, "users", uid, "state", "highlights");
}

export async function setHighlight(
  uid: string,
  key: string,
  on: boolean,
): Promise<void> {
  if (!db) return;
  await setDoc(
    highlightsDoc(db, uid),
    { verses: on ? arrayUnion(key) : arrayRemove(key) },
    { merge: true },
  );
}

export function subscribeHighlights(
  uid: string,
  onChange: (keys: Set<string>) => void,
): Unsubscribe {
  if (!db) {
    onChange(new Set());
    return () => {};
  }
  return onSnapshot(
    highlightsDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : null;
      const verses = Array.isArray(data?.verses) ? data.verses : [];
      onChange(
        new Set(
          verses.filter((x: unknown): x is string => typeof x === "string"),
        ),
      );
    },
    () => onChange(new Set()),
  );
}

// A highlight resolved against the content: enough to show the verse and jump back to it.
export interface ResolvedHighlight {
  key: string;
  bookId: string;
  readingId: string;
  readingTitle: string;
  passageRef: string;
  passageTitle: string;
  n: number;
  text: string;
  sceneIndex: number;
  href: string;
}

function parseHighlightKey(
  key: string,
): { readingId: string; passageRef: string; n: number } | null {
  // Split on the last two separators only — a passageRef ("Romans 7:14–25") never holds
  // a "|", and a readingId never does, so three parts is exact; bail otherwise.
  const parts = key.split("|");
  if (parts.length !== 3) return null;
  const n = Number.parseInt(parts[2], 10);
  if (!Number.isInteger(n)) return null;
  return { readingId: parts[0], passageRef: parts[1], n };
}

// Recover the verse a key points at. Returns null for a key whose reading, passage, or
// verse no longer exists (content can be re-authored under a reader's saved highlights),
// so a stale highlight is silently dropped from the view rather than crashing it.
export function resolveHighlight(key: string): ResolvedHighlight | null {
  const parsed = parseHighlightKey(key);
  if (!parsed) return null;
  const found = findReadingAnywhere(parsed.readingId);
  if (!found) return null;
  const { book, reading } = found;
  const sceneIndex = reading.passages.findIndex(
    (p) => p.ref === parsed.passageRef,
  );
  if (sceneIndex === -1) return null;
  const passage = reading.passages[sceneIndex];
  const verses = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  const verse = verses.find((v) => v.n === parsed.n);
  if (!verse) return null;
  return {
    key,
    bookId: book.id,
    readingId: reading.id,
    readingTitle: reading.title,
    passageRef: passage.ref,
    passageTitle: passage.title,
    n: parsed.n,
    text: verse.text,
    sceneIndex,
    href:
      sceneIndex === 0
        ? `/read/${book.id}/${reading.id}`
        : `/read/${book.id}/${reading.id}?s=${sceneIndex}`,
  };
}

// Resolved highlights grouped by reading, in the order the reader first highlighted into
// each reading, with each reading's verses in reading order (scene, then verse number).
export interface HighlightGroup {
  readingId: string;
  readingTitle: string;
  href: string;
  verses: ResolvedHighlight[];
}

export function groupHighlights(keys: Iterable<string>): HighlightGroup[] {
  const groups = new Map<string, HighlightGroup>();
  for (const key of keys) {
    const r = resolveHighlight(key);
    if (!r) continue;
    const group = groups.get(r.readingId);
    if (group) group.verses.push(r);
    else
      groups.set(r.readingId, {
        readingId: r.readingId,
        readingTitle: r.readingTitle,
        href: `/read/${r.bookId}/${r.readingId}`,
        verses: [r],
      });
  }
  for (const group of groups.values()) {
    group.verses.sort((a, b) => a.sceneIndex - b.sceneIndex || a.n - b.n);
  }
  return [...groups.values()];
}
