import { MODE_GLOSS } from "@/lib/labels";
import type { Address } from "@/lib/types";
import { ModeChip } from "./ModeChip";

// The third layer: how the passage addresses the reader now. The mode chip tells them
// in what way (names you, pray it, claims you, not yours but worth seeing, reframes).
// On a reading's first scene, `introduce` adds a one-line gloss under the header so a
// newcomer meets the term with its meaning; later scenes trust the reader has it.
export function TheTurn({
  addr,
  introduce,
}: {
  addr: Address;
  introduce?: boolean;
}) {
  return (
    <div className="mt-5">
      <div className="mb-[6px] flex items-center gap-2 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold-bright">
        <span className="h-[5px] w-[5px] rounded-full bg-gold-bright" />
        The turn
        <ModeChip mode={addr.mode} />
      </div>
      {introduce ? (
        <div className="mb-[6px] font-body text-[11px] italic text-mist-2">
          How the passage turns to address you now. {MODE_GLOSS[addr.mode]}.
        </div>
      ) : null}
      <div className="font-body text-[14.5px] leading-[1.66] text-parchment-2">
        {addr.text}
      </div>
    </div>
  );
}
