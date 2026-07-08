import type { Capstone as CapstoneData } from "@/lib/types";
import { Tensions } from "./Tensions";

// The movement-level look-back. For a composite book this is where the thesis lives:
// the synthesis that supervenes on the parts, carrying the tensions that only resolve
// (or pointedly refuse to) at the level of the whole.
export function Capstone({ capstone }: { capstone: CapstoneData }) {
  return (
    <div className="mt-[30px] rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 to-gold/[0.03] px-5 py-[22px]">
      <div className="mb-2 font-ui text-[9.5px] font-semibold uppercase tracking-[.22em] text-gold">
        {capstone.kicker}
      </div>
      <div className="mb-[14px] font-display text-[21px] font-medium leading-[1.2] text-gold-bright">
        {capstone.title}
      </div>
      {capstone.paragraphs.map((paragraph) => (
        <div
          key={paragraph}
          className="mb-3 font-body text-[length:calc(14.5px_*_var(--reader-scale,1))] leading-[1.7] text-parchment-2"
        >
          {paragraph}
        </div>
      ))}
      {capstone.tensions ? <Tensions tensions={capstone.tensions} /> : null}
      {capstone.sources ? (
        <div className="mt-3 font-body text-[length:calc(11px_*_var(--reader-scale,1))] italic text-mist-2">
          {capstone.sources}
        </div>
      ) : null}
      {capstone.ask ? (
        <div className="mt-4 border-t border-gold/30 pt-4">
          <div className="mb-2 font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
            One last question
          </div>
          <div className="font-scripture text-[length:calc(17px_*_var(--reader-scale,1))] italic leading-[1.5] text-parchment">
            {capstone.ask}
          </div>
        </div>
      ) : null}
    </div>
  );
}
