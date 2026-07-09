import { FreeBadge } from "@/components/billing/FreeBadge";
import { LockBadge } from "@/components/billing/LockBadge";
import { Doorway } from "@/components/overlays/Doorway";
import { SituationPanel } from "@/components/overlays/SituationPanel";
import { readingsInMovement } from "@/lib/content";
import type { Capstone, Movement } from "@/lib/types";
import { BookCapstone } from "./BookCapstone";
import { MovementProgress } from "./MovementProgress";
import { ReadingRow } from "./ReadingRow";

// The book's movements as an accordion. Each movement opens to its grounding situation,
// the readings that fall inside it, and the doorway forward to the next movement. The
// first movement starts open so a new visitor sees actual readings without guessing at
// the accordion; the rest start collapsed. A doorway anchors to the next movement when
// it is present on the page.
export function MovementAccordion({
  bookId,
  movements,
  bookCapstone,
}: {
  bookId: string;
  movements: Movement[];
  bookCapstone?: Capstone;
}) {
  const sorted = [...movements].sort((a, b) => a.index - b.index);
  const present = new Set(sorted.map((movement) => movement.id));
  // The book-level wrap-up lands at the end of the last movement: read the final
  // stretch, then look back over the whole book.
  const lastId = sorted[sorted.length - 1]?.id;

  return (
    <div className="flex flex-col gap-3">
      {sorted.map((movement) => {
        const nextId = movement.doorway?.nextMovementId;
        const nextHref =
          nextId && present.has(nextId) ? `#movement-${nextId}` : undefined;
        const readings = readingsInMovement(bookId, movement);
        return (
          <details
            key={movement.id}
            id={`movement-${movement.id}`}
            open={movement.id === sorted[0]?.id}
            className="group/movement scroll-mt-4 overflow-hidden rounded-[14px] border border-line bg-deep"
          >
            <summary className="cursor-pointer px-5 py-4">
              <div className="flex items-start gap-3">
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
                <span className="ml-auto flex items-center gap-2 pt-1">
                  <FreeBadge bookId={bookId} movementId={movement.id} />
                  <LockBadge bookId={bookId} movementId={movement.id} />
                  <span className="text-[15px] text-mist-2 transition-transform group-open/movement:rotate-45 group-open/movement:text-gold">
                    +
                  </span>
                </span>
              </div>
              <MovementProgress readingIds={readings.map((r) => r.id)} />
            </summary>
            <div className="flex flex-col gap-4 px-5 pb-5">
              <SituationPanel panel={movement.situation} />
              <ul className="flex flex-col divide-y divide-line overflow-hidden rounded-[12px] border border-line">
                {readings.map((reading) => (
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
              {movement.id === lastId && bookCapstone ? (
                <BookCapstone capstone={bookCapstone} />
              ) : null}
            </div>
          </details>
        );
      })}
    </div>
  );
}
