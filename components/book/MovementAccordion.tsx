import { Doorway } from "@/components/overlays/Doorway";
import { SituationPanel } from "@/components/overlays/SituationPanel";
import { readingsInMovement } from "@/lib/content";
import type { Movement } from "@/lib/types";
import { ReadingRow } from "./ReadingRow";

// The book's movements as an accordion. Each movement opens to its grounding situation,
// the readings that fall inside it, and the doorway forward to the next movement. The
// first movement is open by default. A doorway anchors to the next movement when it is
// present on the page.
export function MovementAccordion({
  bookId,
  movements,
}: {
  bookId: string;
  movements: Movement[];
}) {
  const sorted = [...movements].sort((a, b) => a.index - b.index);
  const present = new Set(sorted.map((movement) => movement.id));

  return (
    <div className="flex flex-col gap-3">
      {sorted.map((movement, i) => {
        const nextId = movement.doorway?.nextMovementId;
        const nextHref =
          nextId && present.has(nextId) ? `#movement-${nextId}` : undefined;
        return (
          <details
            key={movement.id}
            id={`movement-${movement.id}`}
            open={i === 0}
            className="group scroll-mt-4 overflow-hidden rounded-[14px] border border-line bg-deep"
          >
            <summary className="flex cursor-pointer items-start gap-3 px-5 py-4">
              <span className="flex flex-col gap-1">
                <span className="font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
                  Movement {movement.index} &middot; {movement.range}
                  {movement.composite ? " · composite" : ""}
                </span>
                <span className="font-display text-[20px] font-medium leading-[1.2] text-parchment">
                  {movement.title}
                </span>
                <span className="font-body text-[13.5px] italic leading-[1.55] text-mist">
                  {movement.throughline}
                </span>
              </span>
              <span className="ml-auto pt-1 text-[15px] text-mist-2 transition-transform group-open:rotate-45 group-open:text-gold">
                +
              </span>
            </summary>
            <div className="flex flex-col gap-4 px-5 pb-5">
              <SituationPanel panel={movement.situation} />
              <ul className="flex flex-col divide-y divide-line overflow-hidden rounded-[12px] border border-line">
                {readingsInMovement(bookId, movement).map((reading) => (
                  <ReadingRow
                    key={reading.id}
                    bookId={bookId}
                    reading={reading}
                  />
                ))}
              </ul>
              {movement.doorway ? (
                <Doorway doorway={movement.doorway} nextHref={nextHref} />
              ) : null}
            </div>
          </details>
        );
      })}
    </div>
  );
}
