import { MODE_LABEL } from "@/lib/labels";
import type { AddrMode } from "@/lib/types";

// Each mode's plain-sentence expansion, for the tooltip and screen readers: the chip's
// two-word label is the app's shorthand, and a newcomer should not have to decode it.
const MODE_GLOSS: Record<AddrMode, string> = {
  names: "This passage names something in you",
  pray: "This passage is meant to be prayed, not only read",
  claims: "This passage makes a claim on how you live",
  "none-but": "Not addressed to you, but worth seeing",
  reframes: "This passage reframes your present",
};

// The gold address-mode chip. Used beside the turn and inside per-statute callouts.
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
