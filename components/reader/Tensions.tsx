import type { Tension } from "@/lib/types";

// Where the canon argues with itself: a claim, the voice that pushes back, and where
// that counter-voice is found. This is the field that lets STRATA refuse to flatten
// Scripture into one voice.
export function Tensions({ tensions }: { tensions: Tension[] }) {
  return (
    <div className="mt-[18px] rounded-[12px] border border-psyche/[0.28] bg-psyche/[0.06] px-4 py-[14px]">
      <div className="mb-[11px] font-ui text-[9.5px] font-semibold uppercase tracking-[.18em] text-psyche">
        Where the canon argues back
      </div>
      {tensions.map((tension) => (
        <div key={tension.claim} className="mb-[12px] last:mb-0">
          <div className="font-scripture text-[16.5px] leading-[1.4] text-parchment">
            {tension.claim}
          </div>
          <div className="mt-[3px] font-body text-[13.5px] leading-[1.55] text-parchment-2">
            <span className="font-medium italic text-psyche">but</span>{" "}
            {tension.counter}{" "}
            <span className="ml-1 inline-block text-[12px] italic text-mist-2">
              {tension.where}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
