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
