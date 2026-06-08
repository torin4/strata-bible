"use client";

import { TIER_LABEL, genreLabel } from "@/lib/labels";
import type { Capstone as CapstoneData, Movement, Reading } from "@/lib/types";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { Capstone } from "./Capstone";
import { Passage } from "./Passage";
import { SpanBanner } from "./SpanBanner";
import { ThreadGloss } from "./ThreadGloss";

interface Adjacent {
  id: string;
  title: string;
}

// One Reading, paginated a scene at a time. Each passage (a "scene") is its own screen
// with the four layers; the bottom nav steps scene to scene, then flows into the
// previous/next reading at the ends. When this is the last reading in the book, one more
// step past the final scene reaches the book's wrap-up, its own screen behind the nav.
export function Reader({
  reading,
  closingMovement,
  closingBookCapstone,
  bookTitle,
  prev,
  next,
}: {
  reading: Reading;
  closingMovement?: Movement;
  closingBookCapstone?: CapstoneData;
  bookTitle?: string;
  prev?: Adjacent;
  next?: Adjacent;
}) {
  const passages = reading.passages;
  const last = passages.length - 1;
  const hasWrapup = Boolean(closingBookCapstone);
  const wrapupIndex = passages.length; // one scene past the last passage
  const maxScene = hasWrapup ? wrapupIndex : last;
  const [i, setI] = useState(0);

  // Restore a deep-linked scene (?s=) on mount, and reflect the current scene in the URL
  // without a navigation so a scene stays shareable.
  useEffect(() => {
    const s = Number.parseInt(
      new URLSearchParams(window.location.search).get("s") ?? "",
      10,
    );
    if (Number.isInteger(s) && s > 0 && s <= maxScene) setI(s);
    // run once on mount
  }, [maxScene]);

  useEffect(() => {
    const url =
      i === 0 ? window.location.pathname : `${window.location.pathname}?s=${i}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0 });
  }, [i]);

  const onWrapup = hasWrapup && i === wrapupIndex;
  const passage = passages[i];
  const isFirst = i === 0;
  const isLastPassage = i === last;
  const genre = genreLabel(passages.map((p) => p.kind));

  // Back steps to the previous scene, or crosses into the previous reading at the start,
  // or returns from the wrap-up to the final scene. Forward steps to the next scene, then
  // to the wrap-up (last reading) or the next reading, and stops at the wrap-up.
  const back = onWrapup
    ? { label: reading.title, onClick: () => setI(last) }
    : isFirst
      ? prev
        ? { label: prev.title, href: `/read/${reading.bookId}/${prev.id}` }
        : null
      : {
          label: `${passages[i - 1].label ?? "Previous"} · ${passages[i - 1].title}`,
          onClick: () => setI(i - 1),
        };

  const forward = onWrapup
    ? null
    : isLastPassage
      ? hasWrapup
        ? {
            label: `Look back over ${bookTitle ?? "the book"}`,
            onClick: () => setI(wrapupIndex),
          }
        : next
          ? { label: next.title, href: `/read/${reading.bookId}/${next.id}` }
          : null
      : {
          label: `${passages[i + 1].label ?? "Next"} · ${passages[i + 1].title}`,
          onClick: () => setI(i + 1),
        };

  return (
    <article>
      {onWrapup ? null : (
        <>
          <div className="mb-[14px] flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-gold/50 bg-gold-soft px-[9px] py-1 font-ui text-[9.5px] font-semibold uppercase tracking-[.16em] text-gold-bright">
              {TIER_LABEL[reading.tier]}
            </span>
            <span className="rounded-full border border-lapis/40 bg-lapis/[0.08] px-[9px] py-1 font-ui text-[9.5px] font-semibold uppercase tracking-[.16em] text-lapis">
              {genre}
            </span>
            <span className="font-body text-[11px] italic tracking-[.06em] text-mist-2">
              {reading.span}
            </span>
          </div>

          {reading.crossesChapters && isFirst ? (
            <SpanBanner span={reading.span} />
          ) : null}

          <h1 className="mt-[2px] font-display text-[26px] font-medium leading-[1.15] tracking-[.01em] text-parchment">
            {reading.title}
          </h1>

          {passages.length > 1 ? (
            <div className="mt-2 font-ui text-[10px] uppercase tracking-[.2em] text-mist-2">
              Scene {i + 1} of {passages.length}
            </div>
          ) : null}

          {reading.thread && isFirst ? (
            <ThreadGloss text={reading.thread} />
          ) : null}
        </>
      )}

      {/* Keyed on the scene so each forward/back step rises in; "wrapup" is its own key. */}
      <div key={onWrapup ? "wrapup" : i} className="stagger">
        {onWrapup ? (
          <>
            <div className="mb-4 font-ui text-[10px] uppercase tracking-[.22em] text-mist-2">
              {bookTitle ? `${bookTitle} · the wrap-up` : "The wrap-up"}
            </div>
            {closingBookCapstone ? (
              <Capstone capstone={closingBookCapstone} />
            ) : null}
          </>
        ) : (
          <>
            <Passage
              passage={passage}
              first
              bookId={reading.bookId}
              readingId={reading.id}
              readingTitle={reading.title}
            />

            {isLastPassage && reading.closeEnd ? (
              <div className="mt-[30px] border-t border-line pt-[22px] font-body text-[14px] italic leading-[1.66] text-mist">
                {reading.closeEnd}
              </div>
            ) : null}

            {isLastPassage && closingMovement?.capstone ? (
              <Capstone capstone={closingMovement.capstone} />
            ) : null}
          </>
        )}
      </div>

      {back || forward ? (
        <nav className="mt-9 flex items-stretch justify-between gap-3 border-t border-line pt-5">
          <NavSlot
            align="left"
            label={back?.label}
            href={back?.href}
            onClick={back?.onClick}
          />
          <NavSlot
            align="right"
            prominent
            label={forward?.label}
            href={forward?.href}
            onClick={forward?.onClick}
          />
        </nav>
      ) : null}
    </article>
  );
}

// A single nav button: a real button for in-reading scene steps, a Link for crossing
// into the adjacent reading, or a disabled placeholder at the very ends.
function NavSlot({
  align,
  label,
  href,
  onClick,
  prominent,
}: {
  align: "left" | "right";
  label?: string;
  href?: string;
  onClick?: () => void;
  prominent?: boolean;
}) {
  if (!label) return <span className="max-w-[46%] flex-1" />;

  const arrow = align === "left" ? "‹" : "›";
  const body: ReactNode = (
    <span className={`flex flex-col ${align === "right" ? "text-right" : ""}`}>
      <span className="text-[9.5px] uppercase tracking-[.18em] text-mist-2">
        {align === "left" ? "Back" : "Continue"}
      </span>
      <span
        className={`mt-1 ${prominent ? "text-gold-bright group-hover:text-gold" : "text-parchment-2 group-hover:text-parchment"}`}
      >
        {align === "left" ? `${arrow} ${label}` : `${label} ${arrow}`}
      </span>
    </span>
  );

  const className =
    "group flex max-w-[46%] flex-1 rounded-[11px] border border-line px-4 py-3 font-ui text-[12px] transition-colors hover:border-gold/40";

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${align === "right" ? "justify-end" : ""}`}
      >
        {body}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${align === "right" ? "justify-end" : ""}`}
    >
      {body}
    </button>
  );
}
