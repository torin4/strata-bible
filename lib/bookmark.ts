import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// The reader's deliberately placed bookmark: one spot they pinned with the ribbon, immune to
// where they wander next. Persisted in Firestore (per the storage rule, not localStorage)
// under the signing user. Distinct from lastRead, which simply follows the last reading
// opened; the bookmark is the manual one and takes precedence for "Continue reading".
export interface Bookmark {
  bookId: string;
  readingId: string;
  scene: number; // the scene index the ribbon was placed on
}

function bookmarkDoc(database: Firestore, uid: string) {
  return doc(database, "users", uid, "state", "bookmark");
}

export async function setBookmark(uid: string, value: Bookmark): Promise<void> {
  if (!db) return;
  await setDoc(bookmarkDoc(db, uid), {
    ...value,
    updatedAt: serverTimestamp(),
  });
}

export async function clearBookmark(uid: string): Promise<void> {
  if (!db) return;
  await deleteDoc(bookmarkDoc(db, uid));
}

// Live subscription to the reader's bookmark. Reports null when none is set, Firestore is
// unconfigured, or the read fails.
export function subscribeBookmark(
  uid: string,
  onChange: (bookmark: Bookmark | null) => void,
): Unsubscribe {
  if (!db) {
    onChange(null);
    return () => {};
  }
  return onSnapshot(
    bookmarkDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : null;
      if (
        data &&
        typeof data.bookId === "string" &&
        typeof data.readingId === "string" &&
        typeof data.scene === "number" &&
        Number.isInteger(data.scene)
      ) {
        onChange({
          bookId: data.bookId,
          readingId: data.readingId,
          scene: data.scene,
        });
      } else {
        onChange(null);
      }
    },
    () => onChange(null),
  );
}
