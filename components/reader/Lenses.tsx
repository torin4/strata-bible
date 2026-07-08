import type { Lenses as LensesData } from "@/lib/types";
import { Rich } from "./Rich";

// Two optional reading lenses as a closed-by-default accordion (native <details>):
// theological in gold, archetypal in violet. The reader never sees a lens open unless
// they tap it. The archetypal lens always appends its caveat line when opened.
export function Lenses({ lenses }: { lenses: LensesData }) {
  return (
    <div className="mt-[14px] flex flex-col gap-[10px]">
      {lenses.theo ? (
        <details className="group overflow-hidden rounded-[11px] border border-line bg-parchment/[0.02] open:border-gold/[0.28] open:bg-gold-soft">
          <summary className="flex cursor-pointer items-center gap-[9px] px-[14px] py-[11px]">
            <span className="rounded-full border border-gold/50 bg-gold-soft px-[11px] py-1 font-ui text-[9px] font-semibold uppercase tracking-[.18em] text-gold-bright">
              Theological
            </span>
            <span
              aria-hidden="true"
              className="ml-auto text-[15px] text-mist-2 transition-transform group-open:rotate-45 group-open:text-gold"
            >
              +
            </span>
          </summary>
          <div className="px-[14px] pb-[14px] font-body text-[length:calc(13.5px_*_var(--reader-scale,1))] leading-[1.62] text-parchment-2">
            <Rich text={lenses.theo} />
          </div>
        </details>
      ) : null}
      {lenses.arch ? (
        <details className="group overflow-hidden rounded-[11px] border border-line bg-parchment/[0.02] open:border-psyche/[0.28] open:bg-psyche/[0.07]">
          <summary className="flex cursor-pointer items-center gap-[9px] px-[14px] py-[11px]">
            <span className="rounded-full border border-psyche/40 bg-psyche/[0.08] px-[11px] py-1 font-ui text-[9px] font-semibold uppercase tracking-[.18em] text-psyche">
              Archetypal
            </span>
            <span
              aria-hidden="true"
              className="ml-auto text-[15px] text-mist-2 transition-transform group-open:rotate-45 group-open:text-gold"
            >
              +
            </span>
          </summary>
          <div className="px-[14px] pb-[14px] font-body text-[length:calc(13.5px_*_var(--reader-scale,1))] leading-[1.62] text-parchment-2">
            <Rich text={lenses.arch} />
            <span className="mt-2 block font-body text-[length:calc(10.5px_*_var(--reader-scale,1))] italic text-mist-2">
              One way to hear it, not the final word.
            </span>
          </div>
        </details>
      ) : null}
    </div>
  );
}
