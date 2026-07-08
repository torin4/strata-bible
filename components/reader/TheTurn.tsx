import type { Address } from "@/lib/types";
import { ModeChip } from "./ModeChip";

// The third layer: how the passage addresses the reader now. The mode chip tells them
// in what way (names you, pray it, claims you, not yours but worth seeing, reframes).
export function TheTurn({ addr }: { addr: Address }) {
  return (
    <div className="mt-5">
      <div className="mb-[6px] flex items-center gap-2 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold-bright">
        <span className="h-[5px] w-[5px] rounded-full bg-gold-bright" />
        The turn
        <ModeChip mode={addr.mode} />
      </div>
      <div className="font-body text-[length:calc(14.5px_*_var(--reader-scale,1))] leading-[1.66] text-parchment-2">
        {addr.text}
      </div>
    </div>
  );
}
