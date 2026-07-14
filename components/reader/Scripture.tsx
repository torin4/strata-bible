"use client";

import { highlightKey } from "@/lib/highlights";
import type { Verse } from "@/lib/types";
import { Fragment, useState } from "react";
import { HighlightableVerse } from "./HighlightableVerse";

// Scripture rendering, kind-aware via `form`. Prose flows the verses into one block
// with superscript verse numbers; poetry breaks each verse into its own stanza, one
// line per "\n", and marks the single verse where the poem turns (inTextTurn).
// `readingId`/`passageRef` key each authored verse so a signed-in reader can highlight it.
//
// A curated sitting can omit verses; those arrive tagged `omitted` (see lib/expand.ts) and
// render as revealable context, dimmed, never highlightable. Collapsed, a run of omitted
// verses is a faint inline marker the reader can tap; `showFull` (the reading's "Full text"
// toggle) reveals every run at once.
export function Scripture({
  form,
  verses,
  inTextTurn,
  readingId,
  passageRef,
  showFull = false,
}: {
  form: "prose" | "poetry";
  verses: Verse[];
  inTextTurn?: number;
  readingId: string;
  passageRef: string;
  showFull?: boolean;
}) {
  // Group the verse list into runs of authored verses and runs of omitted ones, preserving
  // order, so each omitted run becomes one collapsible gap.
  const groups = groupByOmission(verses);

  if (form === "poetry") {
    return (
      <div className="mt-[6px]">
        {groups.map((group, gi) =>
          group.omitted ? (
            <VerseGap
              // biome-ignore lint/suspicious/noArrayIndexKey: groups are a stable ordered partition
              key={`gap-${gi}`}
              verses={group.verses}
              showFull={showFull}
              layout="block"
            />
          ) : (
            group.verses.map((verse) => {
              const isTurn = inTextTurn === verse.n;
              return (
                <div
                  key={verse.n}
                  className="relative mb-[14px] flex gap-[10px]"
                >
                  {isTurn ? (
                    <span className="absolute -left-[2px] -top-[15px] font-ui text-[8.5px] uppercase tracking-[.18em] text-gold-bright">
                      the turn
                    </span>
                  ) : null}
                  <div className="min-w-[14px] pt-[7px] font-ui text-[9.5px] tracking-[.04em] text-gold">
                    {verse.n}
                  </div>
                  <div
                    className={`font-scripture text-[19px] leading-[1.62] text-parchment ${
                      isTurn
                        ? "-ml-[11px] pl-[11px] shadow-[inset_3px_0_0_var(--gold-soft)]"
                        : ""
                    }`}
                  >
                    <HighlightableVerse
                      vkey={highlightKey(readingId, passageRef, verse.n)}
                    >
                      {verse.text.split("\n").map((line, li) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: static list of lines within a verse
                        <Fragment key={li}>
                          {li > 0 ? <br /> : null}
                          {line}
                        </Fragment>
                      ))}
                    </HighlightableVerse>
                  </div>
                </div>
              );
            })
          ),
        )}
      </div>
    );
  }

  return (
    <p className="my-[6px] font-scripture text-[18.5px] leading-[1.74] text-parchment">
      {groups.map((group, gi) =>
        group.omitted ? (
          <VerseGap
            // biome-ignore lint/suspicious/noArrayIndexKey: groups are a stable ordered partition
            key={`gap-${gi}`}
            verses={group.verses}
            showFull={showFull}
            layout="inline"
          />
        ) : (
          group.verses.map((verse, vi) => (
            <Fragment key={verse.n}>
              {/* Space before every verse except the very first token of the block. */}
              {gi === 0 && vi === 0 ? null : " "}
              <span className="mr-[5px] align-super font-ui text-[9.5px] tracking-[.04em] text-gold">
                {verse.n}
              </span>
              <HighlightableVerse
                vkey={highlightKey(readingId, passageRef, verse.n)}
              >
                {verse.text}
              </HighlightableVerse>
            </Fragment>
          ))
        ),
      )}
    </p>
  );
}

type Group = { omitted: boolean; verses: Verse[] };

function groupByOmission(verses: Verse[]): Group[] {
  const groups: Group[] = [];
  for (const verse of verses) {
    const omitted = verse.omitted === true;
    const tail = groups[groups.length - 1];
    if (tail && tail.omitted === omitted) tail.verses.push(verse);
    else groups.push({ omitted, verses: [verse] });
  }
  return groups;
}

// A run of omitted verses. Collapsed, it is a faint tappable marker; expanded (locally or
// via the reading's "Full text" toggle) it renders the verses dimmed, marking them as the
// full text rather than the sitting. Never highlightable.
function VerseGap({
  verses,
  showFull,
  layout,
}: {
  verses: Verse[];
  showFull: boolean;
  layout: "inline" | "block";
}) {
  const [open, setOpen] = useState(false);
  const shown = open || showFull;
  const label = rangeLabel(verses);

  if (!shown) {
    // The reading-level toggle owns reveal when on; the per-gap marker only appears while
    // it is off, so the two controls never contradict each other on screen.
    const marker = (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Show verses ${label}, not included in this sitting`}
        className="mx-[3px] font-ui text-[10px] tracking-[.1em] text-mist-2 transition-colors hover:text-gold"
      >
        ···· {label} ····
      </button>
    );
    return layout === "block" ? (
      <div className="my-[10px] text-center">{marker}</div>
    ) : (
      marker
    );
  }

  if (layout === "block") {
    return (
      <div className="my-[6px]">
        {verses.map((verse) => (
          <div key={verse.n} className="mb-[12px] flex gap-[10px]">
            <div className="min-w-[14px] pt-[6px] font-ui text-[9.5px] tracking-[.04em] text-mist-2">
              {verse.n}
            </div>
            <div className="font-scripture text-[18px] leading-[1.6] text-mist">
              {verse.text.split("\n").map((line, li) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list of lines within a verse
                <Fragment key={li}>
                  {li > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Inline (prose): the omitted verses flow dimmed within the paragraph. Tapping the run
  // collapses it again, unless the reading-level toggle is holding it open.
  const body = verses.map((verse, i) => (
    <Fragment key={verse.n}>
      {i > 0 ? " " : null}
      <span className="mr-[5px] align-super font-ui text-[9.5px] tracking-[.04em] text-mist-2">
        {verse.n}
      </span>
      {verse.text}
    </Fragment>
  ));

  if (showFull) {
    return <span className="text-mist"> {body} </span>;
  }
  return (
    <button
      type="button"
      onClick={() => setOpen(false)}
      aria-label={`Hide verses ${label}`}
      className="text-left text-mist"
    >
      {" "}
      {body}{" "}
    </button>
  );
}

// "29", or "29–30" for a contiguous run (an en dash, matching the app's verse refs).
function rangeLabel(verses: Verse[]): string {
  const first = verses[0].n;
  const last = verses[verses.length - 1].n;
  return first === last ? `${first}` : `${first}–${last}`;
}
