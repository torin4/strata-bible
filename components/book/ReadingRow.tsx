"use client";

import { useResume } from "@/components/reader/ResumeProvider";
import { TIER_LABEL, genreLabel } from "@/lib/labels";
import type { Reading } from "@/lib/types";
import Link from "next/link";

// Small number words for the length signal; larger counts fall back to digits.
const NUMBER_WORD = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
] as const;

// "Seven days" / "One scene": how long a reading is, told before it is opened, in the
// reading's own unit. Data already on the object, so the signal costs nothing.
function lengthLabel(reading: Reading): string {
  const count = reading.passages.length;
  const unit = (reading.unitLabel ?? "Scene").toLowerCase();
  const word = NUMBER_WORD[count] ?? String(count);
  return `${word} ${count === 1 ? unit : `${unit}s`}`;
}

// What "Grounded" means, for the tier chip's tooltip and screen readers.
const GROUNDED_GLOSS =
  "This reading carries the text and its history. The companion can draw out the rest.";

// One reading in a movement's (or a book's) list. Links into the reader, resuming the scene
// the reader left off on when there is one (the marker tells them where they will land, so
// the jump past the first scene is never a surprise).
export function ReadingRow({
  bookId,
  reading,
}: { bookId: string; reading: Reading }) {
  const { bookmarkTarget, sceneFor, resumeHref } = useResume();
  const scene = sceneFor(reading.id);
  const isBookmark = bookmarkTarget?.readingId === reading.id;

  return (
    <li>
      <Link
        href={resumeHref(bookId, reading.id)}
        className="group flex items-baseline justify-between gap-3 px-4 py-3 transition-colors hover:bg-parchment/[0.02]"
      >
        <span className="flex flex-col">
          <span className="flex items-center gap-1.5">
            {isBookmark ? (
              <svg
                width="8"
                height="11"
                viewBox="0 0 9 12"
                aria-label="Your bookmark"
                role="img"
                className="shrink-0 text-gold"
              >
                <path
                  d="M1 1h7v10L4.5 8.2 1 11V1z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
            <span className="font-scripture text-[17px] text-parchment-2 group-hover:text-parchment">
              {reading.title}
            </span>
          </span>
          <span className="font-body text-[12px] italic text-mist-2">
            {reading.span} · {lengthLabel(reading)}
          </span>
          {scene > 0 ? (
            <span className="mt-1 font-ui text-[8.5px] uppercase tracking-[.16em] text-gold/80">
              Resume · {reading.unitLabel ?? "Scene"} {scene + 1} of{" "}
              {reading.passages.length}
            </span>
          ) : null}
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className="font-ui text-[8.5px] uppercase tracking-[.16em] text-lapis">
            {genreLabel(reading.passages.map((passage) => passage.kind))}
          </span>
          {/* Tooltip only here: an sr-only gloss inside every row's link would append the
              same two sentences to ~19 accessible names. The full gloss lives on the
              reading's own chip once opened. */}
          {reading.tier === "sitting" ? null : (
            <span
              title={GROUNDED_GLOSS}
              className="font-ui text-[8.5px] uppercase tracking-[.16em] text-mist-2"
            >
              {TIER_LABEL[reading.tier]}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}
