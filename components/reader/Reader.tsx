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
// previous/next reading at the ends. The capstone and close land after the last scene.
export function Reader({
  reading,
  closingMovement,
  closingBookCapstone,
  prev,
  next,
}: {
  reading: Reading;
  closingMovement?: Movement;
  closingBookCapstone?: CapstoneData;
  prev?: Adjacent;
  next?: Adjacent;
}) {
  const passages = reading.passages;
  const last = passages.length - 1;
  const [i, setI] = useState(0);

  // Restore a deep-linked scene (?s=) on mount, and reflect the current scene in the URL
  // without a navigation so a scene stays shareable.
  useEffect(() => {
    const s = Number.parseInt(
      new URLSearchParams(window.location.search).get("s") ?? "",
      10,
    );
    if (Number.isInteger(s) && s > 0 && s <= last) setI(s);
    // run once on mount
  }, [last]);

  useEffect(() => {
    const url =
      i === 0 ? window.location.pathname : `${window.location.pathname}?s=${i}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0 });
  }, [i]);

  const passage = passages[i];
  const isFirst = i === 0;
  const isLast = i === last;
  const genre = genreLabel(passages.map((p) => p.kind));

  // Each side of the nav has content if it steps to another scene, or crosses into an
  // adjacent reading. A lone reading with no neighbours shows no nav at all.
  const hasBack = !isFirst || Boolean(prev);
  const hasForward = !isLast || Boolean(next);

  return (
    <article>
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

      {reading.thread && isFirst ? <ThreadGloss text={reading.thread} /> : null}

      {/* Keyed on the scene index so each forward/back step rises in, not just the
          first paint. Crossing into an adjacent reading remounts the whole page. */}
      <div key={i} className="stagger">
        <Passage
          passage={passage}
          first
          bookId={reading.bookId}
          readingId={reading.id}
          readingTitle={reading.title}
        />

        {isLast && reading.closeEnd ? (
          <div className="mt-[30px] border-t border-line pt-[22px] font-body text-[14px] italic leading-[1.66] text-mist">
            {reading.closeEnd}
          </div>
        ) : null}

        {isLast && closingMovement?.capstone ? (
          <Capstone capstone={closingMovement.capstone} />
        ) : null}

        {isLast && closingBookCapstone ? (
          <Capstone capstone={closingBookCapstone} />
        ) : null}
      </div>

      {hasBack || hasForward ? (
        <nav className="mt-9 flex items-stretch justify-between gap-3 border-t border-line pt-5">
          <NavSlot
            align="left"
            label={
              isFirst
                ? prev?.title
                : `${passages[i - 1].label ?? "Previous"} · ${passages[i - 1].title}`
            }
            href={
              isFirst && prev ? `/read/${reading.bookId}/${prev.id}` : undefined
            }
            onClick={isFirst ? undefined : () => setI(i - 1)}
          />
          <NavSlot
            align="right"
            prominent
            label={
              isLast
                ? next?.title
                : `${passages[i + 1].label ?? "Next"} · ${passages[i + 1].title}`
            }
            href={
              isLast && next ? `/read/${reading.bookId}/${next.id}` : undefined
            }
            onClick={isLast ? undefined : () => setI(i + 1)}
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
