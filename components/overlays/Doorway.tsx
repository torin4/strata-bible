import type { Doorway as DoorwayData } from "@/lib/types";

// The threshold between movements: a look-forward into what comes next. When the next
// movement is present on the page, its title anchors to it; when the next movement is
// not authored yet (e.g. Jacob), the look-forward still reads, without a dead link.
export function Doorway({
  doorway,
  nextHref,
}: {
  doorway: DoorwayData;
  nextHref?: string;
}) {
  return (
    <div className="mt-6 border-t border-line pt-5">
      <div className="font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-mist-2">
        {doorway.skicker}
      </div>
      <div className="mb-2 mt-1 font-display text-[18px] font-medium leading-[1.2] text-gold-bright">
        {nextHref ? (
          <a href={nextHref} className="transition-colors hover:text-gold">
            {doorway.title} &darr;
          </a>
        ) : (
          doorway.title
        )}
      </div>
      {doorway.paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-3 font-body text-[14px] leading-[1.66] text-mist last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
