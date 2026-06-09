import { Tensions } from "@/components/reader/Tensions";
import type { Capstone as CapstoneData } from "@/lib/types";

// The book-level look-back as a collapsible section on the book page, matching the
// movement accordion: closed by default, opening to the whole-book synthesis.
export function BookCapstone({ capstone }: { capstone: CapstoneData }) {
  return (
    <details className="group/movement overflow-hidden rounded-[14px] border border-gold/40 bg-gradient-to-b from-gold/10 to-gold/[0.03]">
      <summary className="flex cursor-pointer items-start gap-3 px-5 py-4">
        <span className="flex flex-col gap-1">
          <span className="font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
            {capstone.kicker}
          </span>
          <span className="font-display text-[20px] font-medium leading-[1.2] text-gold-bright">
            {capstone.title}
          </span>
        </span>
        <span className="ml-auto pt-1 text-[15px] text-gold/70 transition-transform group-open/movement:rotate-45 group-open/movement:text-gold">
          +
        </span>
      </summary>
      <div className="px-5 pb-5">
        {capstone.paragraphs.map((paragraph) => (
          <div
            key={paragraph}
            className="mb-3 font-body text-[14.5px] leading-[1.7] text-parchment-2"
          >
            {paragraph}
          </div>
        ))}
        {capstone.tensions ? <Tensions tensions={capstone.tensions} /> : null}
        {capstone.sources ? (
          <div className="mt-3 font-body text-[11px] italic text-mist-2">
            {capstone.sources}
          </div>
        ) : null}
        {capstone.ask ? (
          <div className="mt-4 border-t border-gold/30 pt-4">
            <div className="mb-2 font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
              One last question
            </div>
            <div className="font-scripture text-[17px] italic leading-[1.5] text-parchment">
              {capstone.ask}
            </div>
          </div>
        ) : null}
      </div>
    </details>
  );
}
