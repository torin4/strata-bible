"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { PageTransition } from "@/components/nav/PageTransition";
import {
  type HighlightGroup,
  groupHighlights,
  setHighlight,
  subscribeHighlights,
} from "@/lib/highlights";
import Link from "next/link";
import { useEffect, useState } from "react";

// Every verse the reader has highlighted, grouped by reading, each a jump-back link to
// the scene it lives in. A signed-in, Firestore-backed view; signed out it invites a
// sign-in, and the reader itself never depends on any of this.
export default function HighlightsPage() {
  const { user, loading, configured } = useAuth();
  const [groups, setGroups] = useState<HighlightGroup[] | null>(null);

  useEffect(() => {
    if (!user) {
      setGroups(null);
      return;
    }
    return subscribeHighlights(user.uid, (keys) => {
      // Newest reading first: groupHighlights preserves first-highlighted order, reverse
      // it so the reader's most recent marks sit at the top.
      setGroups(groupHighlights(keys).reverse());
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
              Sign in to keep highlights. Tap any verse as you read to mark it.
              The reader stays open to everyone.
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
                  <span className="font-ui text-[10px] uppercase tracking-[.16em] text-mist-2 transition-colors group-hover:text-gold-bright">
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
                            if (user) setHighlight(user.uid, v.key, false);
                          }}
                          className="font-ui text-[9.5px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
                        >
                          Remove
                        </button>
                      </div>
                      <Link href={v.href} className="block">
                        <p className="whitespace-pre-line font-scripture text-[17px] leading-[1.55] text-parchment transition-colors hover:text-parchment-2">
                          {v.text}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
          >
            Back to the reader
          </Link>
        </div>
      </PageTransition>
    </main>
  );
}
