import type { Misreading as MisreadingData } from "@/lib/types";

// The single load-bearing misreading: name it, then say why it fails. Deliberately one
// per passage, never a pile of caveats.
export function Misreading({ misreading }: { misreading: MisreadingData }) {
  return (
    <div className="mt-[18px] rounded-[11px] border border-dashed border-parchment-edge/30 bg-parchment/[0.02] px-[15px] py-[13px]">
      <div className="mb-[7px] font-ui text-[9.5px] font-semibold uppercase tracking-[.18em] text-parchment-edge">
        A common misreading
      </div>
      <div className="font-body text-[length:calc(14px_*_var(--reader-scale,1))] italic leading-[1.5] text-mist">
        &ldquo;{misreading.named}&rdquo;
      </div>
      <div className="mt-[7px] font-body text-[length:calc(13.5px_*_var(--reader-scale,1))] leading-[1.6] text-parchment-2">
        <span className="mx-[6px] text-gold">&rarr;</span>
        {misreading.why}
      </div>
    </div>
  );
}
