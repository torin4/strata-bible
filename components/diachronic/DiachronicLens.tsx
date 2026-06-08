"use client";

import type { DiachronicLayer, Siglum } from "@/content/diachronic";
import type { Verse } from "@/lib/types";
import { useState } from "react";

const SIGLUM: Record<Siglum, { label: string; chip: string; row: string }> = {
  J: {
    label: "J",
    chip: "border-lapis/50 bg-lapis/[0.1] text-lapis",
    row: "border-lapis/40 bg-lapis/[0.05]",
  },
  P: {
    label: "P",
    chip: "border-gold/50 bg-gold-soft text-gold-bright",
    row: "border-gold/40 bg-gold/[0.05]",
  },
  R: {
    label: "seam",
    chip: "border-line bg-parchment/[0.03] text-mist-2",
    row: "border-line bg-parchment/[0.02]",
  },
  // E and D are unused on the Flood but keep the map total.
  E: {
    label: "E",
    chip: "border-psyche/40 bg-psyche/[0.08] text-psyche",
    row: "border-psyche/40 bg-psyche/[0.05]",
  },
  D: {
    label: "D",
    chip: "border-parchment-edge/40 bg-parchment/[0.03] text-parchment-edge",
    row: "border-parchment-edge/40 bg-parchment/[0.02]",
  },
};

// The diachronic view of a woven passage: tap to pull the source strands apart. Opt-in
// and additive; the authored scripture above is untouched. A reconstruction, framed and
// caveated as one, never as the recovered original.
export function DiachronicLens({
  verses,
  layer,
}: { verses: Verse[]; layer: DiachronicLayer }) {
  const [open, setOpen] = useState(false);
  const [only, setOnly] = useState<Siglum | null>(null);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 flex items-baseline gap-2 font-ui text-[10px] uppercase tracking-[.18em] text-lapis transition-colors hover:text-gold-bright"
      >
        Read it in layers
        <span className="font-body text-[11px] normal-case italic tracking-normal text-mist-2">
          pull the woven sources apart
        </span>
      </button>
    );
  }

  return (
    <div className="mt-5 rounded-[12px] border border-lapis/25 bg-lapis/[0.04] px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <span className="font-ui text-[9.5px] font-semibold uppercase tracking-[.18em] text-lapis">
          The layers
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-ui text-[9.5px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
        >
          Close
        </button>
      </div>
      <p className="mt-2 font-body text-[13.5px] leading-[1.6] text-parchment-2">
        {layer.intro}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {layer.strands.map((strand) => {
          const active = only === strand.siglum;
          return (
            <button
              key={strand.siglum}
              type="button"
              onClick={() => setOnly(active ? null : strand.siglum)}
              className={`rounded-full border px-3 py-[5px] font-ui text-[10px] uppercase tracking-[.1em] transition-opacity ${SIGLUM[strand.siglum].chip} ${only && !active ? "opacity-40" : ""}`}
            >
              {SIGLUM[strand.siglum].label} · {strand.name}
            </button>
          );
        })}
        {only ? (
          <button
            type="button"
            onClick={() => setOnly(null)}
            className="font-ui text-[10px] uppercase tracking-[.14em] text-mist-2 transition-colors hover:text-gold-bright"
          >
            Show both
          </button>
        ) : null}
      </div>

      {only ? (
        <p className="mt-3 font-body text-[12.5px] italic leading-[1.55] text-mist">
          {layer.strands.find((s) => s.siglum === only)?.blurb}
        </p>
      ) : null}

      <div className="mt-4 flex flex-col gap-[6px]">
        {verses.map((verse) => {
          const sig = layer.attribution[verse.n] ?? "R";
          const dim = only !== null && sig !== only;
          return (
            <div
              key={verse.n}
              className={`flex gap-3 rounded-[8px] border-l-2 px-3 py-2 transition-opacity ${SIGLUM[sig].row} ${dim ? "opacity-25" : ""}`}
            >
              <span
                className={`mt-[3px] h-fit shrink-0 rounded-full border px-[7px] py-[2px] font-ui text-[8px] uppercase tracking-[.08em] ${SIGLUM[sig].chip}`}
              >
                {SIGLUM[sig].label}
              </span>
              <span className="font-scripture text-[16.5px] leading-[1.5] text-parchment">
                <span className="mr-[5px] align-super font-ui text-[9px] text-gold">
                  {verse.n}
                </span>
                {verse.text}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 border-t border-line pt-3">
        {layer.seams.map((seam) => (
          <p
            key={seam}
            className="mb-2 font-body text-[13px] leading-[1.6] text-parchment-2 last:mb-0"
          >
            {seam}
          </p>
        ))}
      </div>

      <p className="mt-3 font-body text-[11.5px] italic leading-[1.55] text-mist-2">
        {layer.caveat}
      </p>
      <p className="mt-2 font-body text-[11px] italic text-mist-2">
        {layer.sources}
      </p>
    </div>
  );
}
