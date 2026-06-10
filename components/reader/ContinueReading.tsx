"use client";

import { useResume } from "@/components/reader/ResumeProvider";
import { findReadingAnywhere, getMovement } from "@/lib/content";
import Link from "next/link";

// The reader's bookmark, made visible: where they left off, placed in the book and movement
// so they can see where they are, with a resume link to the exact scene. Used two ways. On
// home (no bookId) it shows the global last spot, book name and all. On a book page (bookId
// given) it shows only when the bookmark is in this book, and drops the book name since the
// page already is the book. Renders nothing signed out or before any reading.
export function ContinueReading({
  bookId,
  className,
}: {
  bookId?: string;
  className?: string;
}) {
  const { continueTarget, continueHref } = useResume();
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

  return (
    <Link
      href={continueHref}
      className={`group block rounded-[16px] border border-gold/30 bg-gradient-to-b from-gold-soft to-parchment/[0.01] px-5 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-gold/55 ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5">
        <svg
          width="9"
          height="12"
          viewBox="0 0 9 12"
          aria-hidden="true"
          className="text-gold"
        >
          <path
            d="M1 1h7v10L4.5 8.2 1 11V1z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
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
  );
}
