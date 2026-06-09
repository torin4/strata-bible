import { highlightKey } from "@/lib/highlights";
import type { Verse } from "@/lib/types";
import { Fragment } from "react";
import { HighlightableVerse } from "./HighlightableVerse";

// Scripture rendering, kind-aware via `form`. Prose flows the verses into one block
// with superscript verse numbers; poetry breaks each verse into its own stanza, one
// line per "\n", and marks the single verse where the poem turns (inTextTurn).
// `readingId`/`passageRef` key each verse so a signed-in reader can highlight it.
export function Scripture({
  form,
  verses,
  inTextTurn,
  readingId,
  passageRef,
}: {
  form: "prose" | "poetry";
  verses: Verse[];
  inTextTurn?: number;
  readingId: string;
  passageRef: string;
}) {
  if (form === "poetry") {
    return (
      <div className="mt-[6px]">
        {verses.map((verse) => {
          const isTurn = inTextTurn === verse.n;
          return (
            <div key={verse.n} className="relative mb-[14px] flex gap-[10px]">
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
                {/* One inline highlight target per verse; lines break with <br> so the
                    wash can flow across them (a span cannot wrap block-level divs). */}
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
        })}
      </div>
    );
  }

  return (
    <p className="my-[6px] font-scripture text-[18.5px] leading-[1.74] text-parchment">
      {verses.map((verse, i) => (
        <Fragment key={verse.n}>
          {i > 0 ? " " : null}
          <span className="mr-[5px] align-super font-ui text-[9.5px] tracking-[.04em] text-gold">
            {verse.n}
          </span>
          <HighlightableVerse
            vkey={highlightKey(readingId, passageRef, verse.n)}
          >
            {verse.text}
          </HighlightableVerse>
        </Fragment>
      ))}
    </p>
  );
}
