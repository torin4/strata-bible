import { MODE_GLOSS, MODE_LABEL } from "@/lib/labels";
import type { AddrMode } from "@/lib/types";

// The gold address-mode chip. Used beside the turn and inside per-statute callouts. The
// title and sr-only gloss expand the shorthand for hover and screen readers; the visible
// expansion for touch readers lives in the turn's first-scene introduce line.
export function ModeChip({ mode }: { mode: AddrMode }) {
  return (
    <span
      title={MODE_GLOSS[mode]}
      className="rounded-full border border-gold/50 bg-gold-soft px-2 py-[3px] font-ui text-[8.5px] font-semibold uppercase tracking-[.16em] text-gold-bright"
    >
      {MODE_LABEL[mode]}
      <span className="sr-only">. {MODE_GLOSS[mode]}</span>
    </span>
  );
}
