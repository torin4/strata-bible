import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// Which readings a reader has opened, for the per-movement progress bars. Persisted in
// Firestore under the signing user (per the storage rule, not localStorage). Signed out,
// there is no progress to show.
function progressDoc(database: Firestore, uid: string) {
  return doc(database, "users", uid, "state", "progress");
}

export async function markRead(uid: string, readingId: string): Promise<void> {
  if (!db) return;
  await setDoc(
    progressDoc(db, uid),
    { read: arrayUnion(readingId) },
    { merge: true },
  );
}

// Remember which scene the reader left off on within a reading, so the movement row and the
// menu's "Continue" can resume there. Stored as a map of readingId -> scene index on the
// same progress doc. A value of 0 means "no saved spot" (the reader finished, or never moved
// past the first scene), so the reader writes 0 once the final scene is reached.
export async function setScene(
  uid: string,
  readingId: string,
  scene: number,
): Promise<void> {
  if (!db) return;
  await setDoc(
    progressDoc(db, uid),
    { scene: { [readingId]: scene } },
    { merge: true },
  );
}

// Live subscription to the per-reading resume positions. Only spots past the first scene are
// reported (a 0 is "fresh"), so a consumer can treat any entry as a real place to resume.
export function subscribeScenes(
  uid: string,
  onChange: (scenes: Map<string, number>) => void,
): Unsubscribe {
  if (!db) {
    onChange(new Map());
    return () => {};
  }
  return onSnapshot(
    progressDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : null;
      const raw =
        data && typeof data.scene === "object" && data.scene ? data.scene : {};
      const scenes = new Map<string, number>();
      for (const [readingId, value] of Object.entries(raw)) {
        if (typeof value === "number" && Number.isInteger(value) && value > 0) {
          scenes.set(readingId, value);
        }
      }
      onChange(scenes);
    },
    () => onChange(new Map()),
  );
}

// Live subscription to the set of reading ids the user has opened.
export function subscribeProgress(
  uid: string,
  onChange: (read: Set<string>) => void,
): Unsubscribe {
  if (!db) {
    onChange(new Set());
    return () => {};
  }
  return onSnapshot(
    progressDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : null;
      const read = Array.isArray(data?.read) ? data.read : [];
      onChange(
        new Set(
          read.filter((x: unknown): x is string => typeof x === "string"),
        ),
      );
    },
    () => onChange(new Set()),
  );
}
