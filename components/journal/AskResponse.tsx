"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Link from "next/link";
import { useState } from "react";
import { JournalComposer } from "./JournalComposer";

// The response layer, inline under a passage's ask. A signed-in reader answers the ask
// straight into their journal, tagged with the reading it came from. Signed out, it
// offers a sign-in link; with no backend it renders nothing so the reader stays clean.
export function AskResponse({
  prompt,
  bookId,
  readingId,
  readingTitle,
  passageRef,
}: {
  prompt: string;
  bookId: string;
  readingId: string;
  readingTitle: string;
  passageRef: string;
}) {
  const { user, configured, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!configured || loading) return null;

  if (!user) {
    return (
      <Link
        href="/login"
        className="mt-3 inline-block font-ui text-[10px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
      >
        Sign in to respond
      </Link>
    );
  }

  if (saved) {
    return (
      <p className="mt-3 font-body text-[13px] italic text-mist">
        Saved to your journal.{" "}
        <Link href="/journal" className="text-gold-bright hover:underline">
          View
        </Link>
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 font-ui text-[10px] uppercase tracking-[.16em] text-gold transition-colors hover:text-gold-bright"
      >
        Write a response
      </button>
    );
  }

  return (
    <div className="mt-3">
      <JournalComposer
        autoFocus
        prompt={prompt}
        showPrompt={false}
        context={{ bookId, readingId, readingTitle, passageRef }}
        placeholder="Your response."
        onSaved={() => setSaved(true)}
      />
    </div>
  );
}
