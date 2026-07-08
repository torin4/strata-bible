"use client";

import { useSettings } from "@/components/settings/SettingsProvider";
import { READER_SCALES } from "@/lib/settings";

// The in-reader text-size control: a small "A" to shrink and a large "A" to grow, stepping
// through the shared READER_SCALES set. Drives the same saved preference as the settings
// page, so the two never disagree. Sizes the reading text (scripture and layer prose), not
// the surrounding chrome.
export function ReaderSizeStepper() {
  const { settings, setReaderScale } = useSettings();

  const current = READER_SCALES.indexOf(
    settings.readerScale as (typeof READER_SCALES)[number],
  );
  const index = current < 0 ? READER_SCALES.indexOf(1) : current;
  const atMin = index <= 0;
  const atMax = index >= READER_SCALES.length - 1;

  const step = (delta: number) => {
    const next = Math.min(READER_SCALES.length - 1, Math.max(0, index + delta));
    setReaderScale(READER_SCALES[next]);
  };

  return (
    <fieldset
      aria-label="Reading text size"
      className="m-0 flex min-w-0 items-center gap-0.5 border-0 p-0"
    >
      <button
        type="button"
        onClick={() => step(-1)}
        disabled={atMin}
        aria-label="Smaller reading text"
        className="flex h-8 w-7 items-center justify-center rounded-[8px] font-scripture leading-none text-mist transition-colors hover:text-gold-bright disabled:opacity-30 disabled:hover:text-mist"
      >
        <span className="text-[12px]">A</span>
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        disabled={atMax}
        aria-label="Larger reading text"
        className="flex h-8 w-7 items-center justify-center rounded-[8px] font-scripture leading-none text-mist transition-colors hover:text-gold-bright disabled:opacity-30 disabled:hover:text-mist"
      >
        <span className="text-[17px]">A</span>
      </button>
    </fieldset>
  );
}
