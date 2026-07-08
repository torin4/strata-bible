"use client";

import { useResume } from "@/components/reader/ResumeProvider";
import { findReadingAnywhere, getMovement } from "@/lib/content";
import Link from "next/link";

// The bookmark-ribbon glyph, shared by the resume card and the secondary bookmark line.
function Ribbon({ className }: { className?: string }) {
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 1h7v10L4.5 8.2 1 11V1z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Where the reader left off, made visible: the continue card follows them (last reading
// opened), and the manual bookmark rides alongside as a distinct pin, shown only when it
// sits somewhere other than where they actually are. Used two ways. On home (no bookId) it
// shows the global spot, book name and all. On a book page (bookId given) it shows only when
// the spot is in this book, drops the book name, and scopes the bookmark line to this book
// too. Renders nothing signed out or before any reading.
export function ContinueReading({
  bookId,
  className,
}: {
  bookId?: string;
  className?: string;
}) {
  const { continueTarget, continueHref, bookmarkTarget, bookmarkHref } =
    useResume();
  if (!continueTarget || !continueHref) return null;
  if (bookId && continueTarget.bookId !== bookId) return null;

  const found = findReadingAnywhere(continueTarget.readingId);
  if (!found) return null;
  const { book, reading } = found;
  const movement = getMovement(book.id, reading);
  const scene = continueTarget.scene;
  const sceneCount = reading.passages.length;
  const showScene = scene > 0 && sceneCount > 1;
  const unit = reading.unitLabel ?? "Scene";

  // The place line: book then movement on home, movement alone inside a book, and the span
  // when a reading sits outside any movement (the genre fixtures).
  const place = movement
    ? `${bookId ? "" : `${book.title} · `}Movement ${movement.index}, ${movement.title}`
    : bookId
      ? reading.span
      : `${book.title} · ${reading.span}`;

  // The manual bookmark, shown beneath the card only when it is a different spot than where
  // the reader left off, and (inside a book) when it belongs to this book. The card follows
  // the reader; the pin stays put, so the two can diverge, and then both are worth showing.
  const showBookmark =
    !!bookmarkTarget &&
    !!bookmarkHref &&
    (bookmarkTarget.readingId !== continueTarget.readingId ||
      bookmarkTarget.scene !== continueTarget.scene) &&
    (!bookId || bookmarkTarget.bookId === bookId);
  const bookmarkFound = showBookmark
    ? findReadingAnywhere(bookmarkTarget.readingId)
    : null;

  return (
    <div className={className}>
      <Link
        href={continueHref}
        className="group block rounded-[16px] border border-gold/30 bg-gradient-to-b from-gold-soft to-parchment/[0.01] px-5 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-gold/55"
      >
        <div className="flex items-center gap-1.5">
          <Ribbon className="text-gold" />
          <span className="font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
            {continueTarget.isBookmark ? "Your bookmark" : "Continue reading"}
          </span>
        </div>

        <div className="mt-2 font-scripture text-[20px] leading-[1.2] text-parchment-2 group-hover:text-parchment">
          {reading.title}
        </div>

        <div className="mt-1 font-ui text-[10.5px] uppercase tracking-[.13em] text-mist-2">
          {place}
          {showScene ? (
            <>
              {" · "}
              {unit} {scene + 1} of {sceneCount}
            </>
          ) : null}
        </div>

        <div className="mt-3 font-ui text-[12px] tracking-[.06em] text-lapis group-hover:text-parchment">
          Resume ›
        </div>
      </Link>

      {bookmarkFound ? (
        <Link
          href={bookmarkHref as string}
          className="mt-2.5 flex items-center justify-center gap-1.5 text-mist transition-colors hover:text-gold-bright"
        >
          <Ribbon className="shrink-0 text-gold" />
          <span className="font-ui text-[10px] font-semibold uppercase tracking-[.16em] text-gold/80">
            Bookmark
          </span>
          <span className="min-w-0 truncate font-body text-[13px] italic">
            {bookmarkFound.reading.title}
          </span>
          <span className="font-ui text-[12px]" aria-hidden="true">
            ›
          </span>
        </Link>
      ) : null}
    </div>
  );
}
