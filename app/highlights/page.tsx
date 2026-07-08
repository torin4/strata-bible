"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { BackLink } from "@/components/nav/BackLink";
import { PageTransition } from "@/components/nav/PageTransition";
import {
  type HighlightGroup,
  groupHighlights,
  removeNote,
  setHighlight,
  setNote,
  subscribeHighlights,
} from "@/lib/highlights";
import Link from "next/link";
import { useEffect, useState } from "react";

// Every verse the reader has highlighted, grouped by reading, each a jump-back link to
// the scene it lives in, with its note shown and editable inline. A signed-in,
// Firestore-backed view; signed out it invites a sign-in, and the reader itself never
// depends on any of this.
export default function HighlightsPage() {
  const { user, loading, configured } = useAuth();
  const [groups, setGroups] = useState<HighlightGroup[] | null>(null);

  useEffect(() => {
    if (!user) {
      setGroups(null);
      return;
    }
    return subscribeHighlights(user.uid, ({ verses, notes }) => {
      // Newest reading first: groupHighlights preserves first-highlighted order, reverse
      // it so the reader's most recent marks sit at the top.
      setGroups(groupHighlights(verses, notes).reverse());
    });
  }, [user]);

  return (
    <main className="min-h-screen bg-shell px-4 py-8 sm:py-12">
      <PageTransition className="mx-auto max-w-[40rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>
        <div className="mb-6">
          <BackLink href="/" label="Home" />
        </div>

        <h1 className="mb-8 text-center font-display text-[28px] font-medium text-parchment">
          Your highlights
        </h1>

        {!configured ? (
          <p className="text-center font-body text-[14px] leading-[1.7] text-mist">
            Highlights are not configured yet.
          </p>
        ) : loading ? (
          <p className="text-center font-body text-[14px] italic text-mist-2">
            Loading.
          </p>
        ) : !user ? (
          <div className="rounded-[14px] border border-line bg-deep px-6 py-8 text-center">
            <p className="font-body text-[15px] leading-[1.7] text-parchment-2">
              Sign in to keep highlights. Tap any verse as you read to mark it,
              and add a note. The reader stays open to everyone.
            </p>
            <Link
              href="/login"
              className="mt-5 inline-block rounded-[10px] bg-gold px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
            >
              Sign in
            </Link>
          </div>
        ) : groups === null ? (
          <p className="text-center font-body text-[14px] italic text-mist-2">
            Loading.
          </p>
        ) : groups.length === 0 ? (
          <div className="rounded-[14px] border border-line bg-deep px-6 py-8 text-center">
            <p className="font-body text-[15px] leading-[1.7] text-parchment-2">
              No highlights yet. As you read, tap a verse to wash it gold, and
              it will collect here.
            </p>
            <Link
              href="/read/genesis/gen-1"
              className="mt-5 inline-block rounded-[10px] border border-gold/50 px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
            >
              Open the reader
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-7">
            {groups.map((group) => (
              <section key={group.readingId}>
                <Link
                  href={group.href}
                  className="group inline-flex items-baseline gap-2"
                >
                  <span className="font-display text-[17px] tracking-[.02em] text-parchment-2 transition-colors group-hover:text-parchment">
                    {group.readingTitle}
                  </span>
                  <span className="font-ui text-[10px] uppercase tracking-[.16em] text-mist transition-colors group-hover:text-gold-bright">
                    Open ›
                  </span>
                </Link>
                <ul className="mt-3 flex flex-col gap-3">
                  {group.verses.map((v) => (
                    <li
                      key={v.key}
                      className="rounded-[12px] border border-line bg-deep px-4 py-3"
                    >
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <span className="font-body text-[11px] italic text-mist-2">
                          {v.passageRef} · v.{v.n}
                        </span>
                        <button
                          type="button"
                          aria-label="Remove highlight"
                          onClick={() => {
                            if (!window.confirm("Remove this highlight?"))
                              return;
                            setHighlight(user.uid, v.key, false).catch(
                              () => {},
                            );
                          }}
                          className="inline-flex min-h-[44px] items-center font-ui text-[9.5px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
                        >
                          Remove
                        </button>
                      </div>
                      <Link href={v.href} className="block">
                        <p className="whitespace-pre-line font-scripture text-[17px] leading-[1.55] text-parchment transition-colors hover:text-parchment-2">
                          {v.text}
                        </p>
                      </Link>
                      <NoteBlock uid={user.uid} vkey={v.key} note={v.note} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </PageTransition>
    </main>
  );
}

// The note under a highlighted verse: shown when present, with inline edit, or an
// "Add note" affordance when absent. Writes straight to Firestore; the live subscription
// reflects the change back into the list.
function NoteBlock({
  uid,
  vkey,
  note,
}: {
  uid: string;
  vkey: string;
  note?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note ?? "");

  if (!editing) {
    return note ? (
      <div className="mt-2 border-t border-line pt-2">
        <p className="whitespace-pre-line font-body text-[13.5px] italic leading-[1.6] text-mist">
          {note}
        </p>
        <button
          type="button"
          onClick={() => {
            setText(note);
            setEditing(true);
          }}
          className="mt-1 inline-flex min-h-[44px] items-center font-ui text-[9.5px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
        >
          Edit note
        </button>
      </div>
    ) : (
      <button
        type="button"
        onClick={() => {
          setText("");
          setEditing(true);
        }}
        className="mt-2 inline-flex min-h-[44px] items-center gap-1 font-ui text-[9.5px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
      >
        <span aria-hidden="true">✎</span> Add note
      </button>
    );
  }

  return (
    <div className="mt-2 border-t border-line pt-2">
      <textarea
        // biome-ignore lint/a11y/noAutofocus: revealed by a deliberate edit tap
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note on this verse."
        rows={3}
        className="w-full resize-none rounded-[8px] border border-line bg-shell px-3 py-2 font-body text-[14px] leading-[1.5] text-parchment placeholder:text-mist-2 focus:border-gold/50 focus:outline-none"
      />
      <div className="mt-2 flex items-center justify-between">
        {note ? (
          <button
            type="button"
            onClick={() => {
              if (!window.confirm("Delete this note?")) return;
              removeNote(uid, vkey).catch(() => {});
              setEditing(false);
            }}
            className="inline-flex min-h-[44px] items-center font-ui text-[9.5px] uppercase tracking-[.14em] text-mist transition-colors hover:text-gold-bright"
          >
            Delete note
          </button>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="inline-flex min-h-[44px] items-center font-ui text-[10px] uppercase tracking-[.12em] text-parchment-2 transition-colors hover:text-parchment"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              setNote(uid, vkey, text).catch(() => {});
              setEditing(false);
            }}
            className="inline-flex min-h-[44px] items-center rounded-[8px] bg-gold px-3 font-ui text-[10px] uppercase tracking-[.12em] text-deep transition-colors hover:bg-gold-bright"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
