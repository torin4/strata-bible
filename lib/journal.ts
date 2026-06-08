import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

// A journal entry is a reader's response. It can answer a passage's ask (carrying the
// prompt and the reading it came from) or stand alone. Entries live under the signing
// user at users/{uid}/entries, which is also what the security rules key on.
export interface JournalEntry {
  id: string;
  text: string;
  prompt?: string;
  bookId?: string;
  readingId?: string;
  readingTitle?: string;
  passageRef?: string;
  createdAt: Date | null;
}

export interface NewEntry {
  text: string;
  prompt?: string;
  bookId?: string;
  readingId?: string;
  readingTitle?: string;
  passageRef?: string;
}

const CONTEXT_FIELDS = [
  "prompt",
  "bookId",
  "readingId",
  "readingTitle",
  "passageRef",
] as const;

function entriesCol(database: Firestore, uid: string) {
  return collection(database, "users", uid, "entries");
}

export async function addEntry(uid: string, entry: NewEntry): Promise<void> {
  if (!db) throw new Error("Firestore is not configured.");
  // Firestore rejects undefined values, so only attach the context fields that are set.
  const data: Record<string, unknown> = {
    text: entry.text.trim(),
    createdAt: serverTimestamp(),
  };
  for (const field of CONTEXT_FIELDS) {
    const value = entry[field];
    if (value) data[field] = value;
  }
  await addDoc(entriesCol(db, uid), data);
}

export async function deleteEntry(uid: string, entryId: string): Promise<void> {
  if (!db) throw new Error("Firestore is not configured.");
  await deleteDoc(doc(db, "users", uid, "entries", entryId));
}

// Live subscription to a user's entries, newest first. Returns a no-op unsubscribe when
// Firestore is not configured. Pending server timestamps are estimated so a just-saved
// entry sorts and dates correctly before the server confirms.
export function subscribeEntries(
  uid: string,
  onChange: (entries: JournalEntry[]) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  if (!db) {
    onChange([]);
    return () => {};
  }
  const entriesQuery = query(entriesCol(db, uid), orderBy("createdAt", "desc"));
  return onSnapshot(
    entriesQuery,
    (snapshot) => {
      onChange(
        snapshot.docs.map((entryDoc) => {
          const data = entryDoc.data({ serverTimestamps: "estimate" });
          const ts = data.createdAt;
          return {
            id: entryDoc.id,
            text: typeof data.text === "string" ? data.text : "",
            prompt: data.prompt,
            bookId: data.bookId,
            readingId: data.readingId,
            readingTitle: data.readingTitle,
            passageRef: data.passageRef,
            createdAt:
              ts && typeof ts.toDate === "function" ? ts.toDate() : null,
          };
        }),
      );
    },
    (error) => onError?.(error),
  );
}
