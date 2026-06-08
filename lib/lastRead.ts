import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// Where a reader left off. Persisted in Firestore (per the storage rule, not localStorage)
// under the signing user, so the menu's "Continue reading" can resume across devices.
// Signed-out readers have no stored pointer; the menu falls back to the opening reading.
export interface LastRead {
  bookId: string;
  readingId: string;
  title: string;
  span: string;
}

function lastReadDoc(database: Firestore, uid: string) {
  return doc(database, "users", uid, "state", "lastRead");
}

export async function setLastRead(uid: string, value: LastRead): Promise<void> {
  if (!db) return;
  await setDoc(lastReadDoc(db, uid), {
    ...value,
    updatedAt: serverTimestamp(),
  });
}

// Live subscription to the user's last-read pointer. Returns a no-op unsubscribe when
// Firestore is not configured, and reports null until a pointer exists.
export function subscribeLastRead(
  uid: string,
  onChange: (value: LastRead | null) => void,
): Unsubscribe {
  if (!db) {
    onChange(null);
    return () => {};
  }
  return onSnapshot(
    lastReadDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : null;
      if (
        data &&
        typeof data.bookId === "string" &&
        typeof data.readingId === "string"
      ) {
        onChange({
          bookId: data.bookId,
          readingId: data.readingId,
          title: typeof data.title === "string" ? data.title : "",
          span: typeof data.span === "string" ? data.span : "",
        });
      } else {
        onChange(null);
      }
    },
    () => onChange(null),
  );
}
