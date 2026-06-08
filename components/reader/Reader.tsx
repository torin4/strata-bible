import { TIER_LABEL, genreLabel } from "@/lib/labels";
import type { Movement, Reading } from "@/lib/types";
import { Capstone } from "./Capstone";
import { Passage } from "./Passage";
import { SpanBanner } from "./SpanBanner";
import { ThreadGloss } from "./ThreadGloss";

// One Reading: the thing the user sits with. It can hold one passage or several. When
// the reading closes a movement that has a capstone, that look-back renders at the end
// (this is how a composite book like Job carries the meaning of the whole).
export function Reader({
  reading,
  closingMovement,
}: {
  reading: Reading;
  closingMovement?: Movement;
}) {
  const genre = genreLabel(reading.passages.map((passage) => passage.kind));

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

      {reading.crossesChapters ? <SpanBanner span={reading.span} /> : null}

      <h1 className="mt-[2px] font-display text-[26px] font-medium leading-[1.15] tracking-[.01em] text-parchment">
        {reading.title}
      </h1>

      {reading.thread ? <ThreadGloss text={reading.thread} /> : null}

      {reading.passages.map((passage, i) => (
        <Passage
          key={passage.ref}
          passage={passage}
          first={i === 0}
          bookId={reading.bookId}
          readingId={reading.id}
          readingTitle={reading.title}
        />
      ))}

      {reading.closeEnd ? (
        <div className="mt-[30px] border-t border-line pt-[22px] font-body text-[14px] italic leading-[1.66] text-mist">
          {reading.closeEnd}
        </div>
      ) : null}

      {closingMovement?.capstone ? (
        <Capstone capstone={closingMovement.capstone} />
      ) : null}
    </article>
  );
}
