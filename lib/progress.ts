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
