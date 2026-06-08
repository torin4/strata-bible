import { highlightKey } from "@/lib/highlights";
import type { ItemNote, Verse } from "@/lib/types";
import { HighlightableVerse } from "./HighlightableVerse";
import { ModeChip } from "./ModeChip";

// A statute-cluster or saying-cluster: numbered items, each optionally carrying a
// per-item address callout (a mode-chip + its claim on you) and/or a faint gloss note.
// `readingId`/`passageRef` key each item so a signed-in reader can highlight it.
export function ClusterList({
  items,
  perItem,
  readingId,
  passageRef,
}: {
  items: Verse[];
  perItem?: Record<number, ItemNote>;
  readingId: string;
  passageRef: string;
}) {
  return (
    <div className="mt-[6px]">
      {items.map((item) => {
        const annotation = perItem?.[item.n];
        return (
          <div key={item.n}>
            <div className="mb-[13px] flex gap-[11px]">
              <div className="min-w-[18px] pt-[5px] font-ui text-[10px] tracking-[.03em] text-gold">
                {item.n}
              </div>
              <div className="font-scripture text-[18px] leading-[1.55] text-parchment">
                <HighlightableVerse
                  vkey={highlightKey(readingId, passageRef, item.n)}
                >
                  {item.text}
                </HighlightableVerse>
              </div>
            </div>
            {annotation?.addr ? (
              <div
                className={`mt-[7px] rounded-[9px] px-3 py-[9px] font-ui text-[12px] leading-[1.5] ${
                  annotation.addr.mode === "none-but"
                    ? "border border-psyche/35 bg-psyche/[0.08] text-mist"
                    : "border border-gold/40 bg-gold-soft text-parchment"
                }`}
              >
                <ModeChip mode={annotation.addr.mode} />
                <span className="ml-2">{annotation.addr.text}</span>
              </div>
            ) : null}
            {annotation?.note ? (
              <div className="mt-[5px] border-l border-lapis/40 pl-[11px] font-body text-[12.5px] italic leading-[1.5] text-mist">
                {annotation.note}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
