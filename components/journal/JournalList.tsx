"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import {
  type JournalEntry,
  deleteEntry,
  subscribeEntries,
} from "@/lib/journal";
import Link from "next/link";
import { useEffect, useState } from "react";

function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// The signed-in user's entries, live. Each entry links back to the reading it answered,
// shows the prompt it responded to, and can be deleted.
export function JournalList() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<JournalEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    setError(null);
    return subscribeEntries(user.uid, setEntries, (e) =>
      setError(
        e.message.includes("permission")
          ? "Cannot read entries yet. The Firestore security rules may not be published."
          : "Could not load your journal.",
      ),
    );
  }, [user]);

  if (error) {
    return (
      <p className="font-body text-[14px] italic leading-[1.6] text-psyche">
        {error}
      </p>
    );
  }
  if (entries === null) {
    return <p className="font-body text-[14px] italic text-mist-2">Loading.</p>;
  }
  if (entries.length === 0) {
    return (
      <p className="font-body text-[14px] italic leading-[1.6] text-mist">
        No entries yet. Answer the ask at the end of a reading, or write
        something above.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="rounded-[12px] border border-line bg-deep px-5 py-4"
        >
          {entry.readingId && entry.bookId ? (
            <Link
              href={`/read/${entry.bookId}/${entry.readingId}`}
              className="font-ui text-[9.5px] uppercase tracking-[.16em] text-lapis transition-colors hover:text-gold-bright"
            >
              {entry.readingTitle || "Reading"}
              {entry.passageRef ? ` · ${entry.passageRef}` : ""}
            </Link>
          ) : null}
          {entry.prompt ? (
            <p className="mt-2 font-body text-[13px] italic leading-[1.55] text-mist-2">
              {entry.prompt}
            </p>
          ) : null}
          <p className="mt-2 whitespace-pre-wrap font-body text-[15px] leading-[1.66] text-parchment-2">
            {entry.text}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-ui text-[10px] uppercase tracking-[.12em] text-mist-2">
              {entry.createdAt ? formatDate(entry.createdAt) : "Saving"}
            </span>
            <button
              type="button"
              onClick={() => {
                if (user) deleteEntry(user.uid, entry.id).catch(() => {});
              }}
              className="font-ui text-[10px] uppercase tracking-[.14em] text-mist transition-colors hover:text-psyche"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
