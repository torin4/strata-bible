"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { Paywall } from "@/components/billing/Paywall";
import { LastReadTracker } from "@/components/reader/LastReadTracker";
import { Reader } from "@/components/reader/Reader";
import type { Capstone, Movement, Reading } from "@/lib/types";
import { useEffect, useState } from "react";

interface Adjacent {
  id: string;
  title: string;
}

// The minimal, non-paid metadata the gated page is allowed to ship to the client: enough to
// label the page and render the paywall, but none of the authored interpretation.
export interface LockedMeta {
  bookId: string;
  readingId: string;
  title: string;
  span: string;
}

interface Content {
  reading: Reading;
  closingMovement?: Movement | null;
  closingBookCapstone?: Capstone | null;
}

// Renders a reading whose authored content is withheld from the page payload. A reader who is
// not entitled sees the paywall. An entitled reader (Plus, comped, or owns the book) fetches
// the content from the authenticated route and reads normally. The content never reaches a
// non-entitled client, so the paywall is real, not cosmetic.
export function LockedReader({
  meta,
  bookTitle,
  prev,
  next,
}: {
  meta: LockedMeta;
  bookTitle?: string;
  prev?: Adjacent;
  next?: Adjacent;
}) {
  const { user } = useAuth();
  const { isPlus, owns, loading } = useSubscription();
  const entitled = isPlus || owns(meta.bookId);

  const [content, setContent] = useState<Content | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: `attempt` is a manual retry trigger.
  useEffect(() => {
    if (!entitled || !user) return;
    let cancelled = false;
    setFailed(false);
    setContent(null);
    (async () => {
      try {
        const idToken = await user.getIdToken();
        const res = await fetch("/api/reading-content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            bookId: meta.bookId,
            readingId: meta.readingId,
          }),
        });
        if (!res.ok) throw new Error("content-unavailable");
        const data = (await res.json()) as Content;
        if (!cancelled) setContent(data);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [entitled, user, meta.bookId, meta.readingId, attempt]);

  // Hold a neutral space while subscription status resolves, so a paying reader never flashes
  // the paywall before their status loads.
  if (loading) return <ReaderPlaceholder />;
  if (!entitled) {
    return (
      <Paywall
        bookId={meta.bookId}
        bookTitle={bookTitle}
        context={meta.title}
      />
    );
  }
  if (failed) {
    return (
      <div className="py-8 text-center">
        <p className="font-body text-[15px] italic leading-[1.7] text-mist">
          This reading could not be loaded just now.
        </p>
        <button
          type="button"
          onClick={() => setAttempt((n) => n + 1)}
          className="mt-4 rounded-[10px] border border-gold/45 px-5 py-2.5 font-ui text-[11px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
        >
          Try again
        </button>
      </div>
    );
  }
  if (!content) return <ReaderPlaceholder />;

  return (
    <>
      <LastReadTracker
        bookId={meta.bookId}
        readingId={meta.readingId}
        title={meta.title}
        span={meta.span}
      />
      <Reader
        reading={content.reading}
        closingMovement={content.closingMovement ?? undefined}
        closingBookCapstone={content.closingBookCapstone ?? undefined}
        bookTitle={bookTitle}
        isFree={false}
        prev={prev}
        next={next}
      />
    </>
  );
}

// A quiet, content-free holding state while entitlement resolves or the content loads.
function ReaderPlaceholder() {
  return (
    <div
      className="flex min-h-[12rem] items-center justify-center"
      aria-live="polite"
    >
      <span className="font-body text-[14px] italic text-mist-2">Opening.</span>
    </div>
  );
}
