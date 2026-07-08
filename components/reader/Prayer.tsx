import type { Prayer as PrayerData } from "@/lib/types";

// The contemplative close to the turn: a prayer to pray, a line to sit with, or a phrase
// to carry. The companion to the ask, "or pray about it" beside "write something."
const LABEL: Record<PrayerData["mode"], string> = {
  pray: "A prayer",
  meditate: "A meditation",
  mantra: "A mantra",
};

export function Prayer({ prayer }: { prayer: PrayerData }) {
  return (
    <div className="mt-[18px] rounded-[12px] border border-gold/25 bg-gold-soft px-5 py-[18px] text-center">
      <div className="mb-2 font-ui text-[9px] font-semibold uppercase tracking-[.22em] text-gold">
        {LABEL[prayer.mode]}
      </div>
      <div className="font-scripture text-[length:calc(18px_*_var(--reader-scale,1))] italic leading-[1.6] text-parchment-2">
        {prayer.text}
      </div>
    </div>
  );
}
