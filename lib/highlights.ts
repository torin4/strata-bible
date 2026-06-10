import { findReadingAnywhere } from "@/lib/content";
import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  arrayRemove,
  arrayUnion,
  deleteField,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// Verse highlights: "readingId|passageRef|verse" keys the reader has marked, plus an
// optional note per key. Both live in one Firestore doc under the signing user (per the
// storage rule, not localStorage): `verses` is the array that paints the wash, `notes`
// is a map of key -> note text. Signed out, nothing is stored or shown and the reader
// stays fully usable. A note never exists without its highlight.
export function highlightKey(
  readingId: string,
  passageRef: string,
  n: number,
): string {
  return `${readingId}|${passageRef}|${n}`;
}

// The verse numbers that actually exist in a passage, in order. Lets a range act only on
// real verses (a selection never invents a key for a verse that is not there).
export function versesInPassage(
  readingId: string,
  passageRef: string,
): number[] {
  const found = findReadingAnywhere(readingId);
  if (!found) return [];
  const passage = found.reading.passages.find((p) => p.ref === passageRef);
  if (!passage) return [];
  const items = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  return items.map((v) => v.n);
}

// The highlight keys for every real verse whose number falls in [start, end] (order
// independent). A single verse is the degenerate range start === end. Storage stays
// per-verse, so a range highlight is just many single-verse keys: backward compatible with
// existing data and with the journal, which reads single keys.
export function highlightKeysInRange(
  readingId: string,
  passageRef: string,
  start: number,
  end: number,
): string[] {
  const lo = Math.min(start, end);
  const hi = Math.max(start, end);
  return versesInPassage(readingId, passageRef)
    .filter((n) => n >= lo && n <= hi)
    .map((n) => highlightKey(readingId, passageRef, n));
}

// The live state of a reader's highlights: which verses are washed, and the note on each.
export interface HighlightState {
  verses: Set<string>;
  notes: Map<string, string>;
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
  if (on) {
    await setDoc(
      highlightsDoc(db, uid),
      { verses: arrayUnion(key) },
      { merge: true },
    );
    return;
  }
  // Removing a highlight drops its note too: a note has no home without its highlight.
  await setDoc(
    highlightsDoc(db, uid),
    { verses: arrayRemove(key), notes: { [key]: deleteField() } },
    { merge: true },
  );
}

// Set (or clear) a whole run of verse highlights in one write. Used by range selection:
// arrayUnion/arrayRemove both take many elements, so a span of verses is a single document
// update, not one per verse. Clearing a run also clears each verse's note (a note has no
// home without its highlight), mirroring the single-key setHighlight.
export async function setHighlights(
  uid: string,
  keys: string[],
  on: boolean,
): Promise<void> {
  if (!db || keys.length === 0) return;
  if (on) {
    await setDoc(
      highlightsDoc(db, uid),
      { verses: arrayUnion(...keys) },
      { merge: true },
    );
    return;
  }
  const clearedNotes: Record<string, ReturnType<typeof deleteField>> = {};
  for (const key of keys) clearedNotes[key] = deleteField();
  await setDoc(
    highlightsDoc(db, uid),
    { verses: arrayRemove(...keys), notes: clearedNotes },
    { merge: true },
  );
}

// Write (or clear) the note on a verse. Saving a note always highlights the verse, so a
// reader can note a plain verse in one step; saving empty text clears the note.
export async function setNote(
  uid: string,
  key: string,
  text: string,
): Promise<void> {
  if (!db) return;
  const trimmed = text.trim();
  if (!trimmed) {
    await removeNote(uid, key);
    return;
  }
  await setDoc(
    highlightsDoc(db, uid),
    { verses: arrayUnion(key), notes: { [key]: trimmed } },
    { merge: true },
  );
}

// Clear just the note, leaving the highlight in place.
export async function removeNote(uid: string, key: string): Promise<void> {
  if (!db) return;
  await setDoc(
    highlightsDoc(db, uid),
    { notes: { [key]: deleteField() } },
    { merge: true },
  );
}

export function subscribeHighlights(
  uid: string,
  onChange: (state: HighlightState) => void,
): Unsubscribe {
  if (!db) {
    onChange({ verses: new Set(), notes: new Map() });
    return () => {};
  }
  return onSnapshot(
    highlightsDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : null;
      const rawVerses = Array.isArray(data?.verses) ? data.verses : [];
      const verses = new Set(
        rawVerses.filter((x: unknown): x is string => typeof x === "string"),
      );
      const notes = new Map<string, string>();
      const rawNotes =
        data && typeof data.notes === "object" && data.notes ? data.notes : {};
      for (const [k, v] of Object.entries(rawNotes)) {
        if (typeof v === "string") notes.set(k, v);
      }
      onChange({ verses, notes });
    },
    () => onChange({ verses: new Set(), notes: new Map() }),
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
  note?: string;
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
export function resolveHighlight(
  key: string,
  note?: string,
): ResolvedHighlight | null {
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
    note,
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

export function groupHighlights(
  keys: Iterable<string>,
  notes?: Map<string, string>,
): HighlightGroup[] {
  const groups = new Map<string, HighlightGroup>();
  for (const key of keys) {
    const r = resolveHighlight(key, notes?.get(key));
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
