import type { SymbolGloss } from "@/lib/types";

// For vision and oracle: each image paired with what it meant to the first audience,
// framed as resonances those readers could decode, not a timeless cipher.
export function Symbols({ symbols }: { symbols: SymbolGloss[] }) {
  return (
    <div className="mt-[18px] rounded-[12px] border border-lapis/25 bg-lapis/[0.05] px-4 py-[14px]">
      <div className="mb-[11px] font-ui text-[9.5px] font-semibold uppercase tracking-[.18em] text-lapis">
        What the images meant
      </div>
      {symbols.map((symbol) => (
        <div key={symbol.image} className="mb-[11px] last:mb-0">
          <div className="font-scripture text-[17px] leading-[1.2] text-gold-bright">
            {symbol.image}
          </div>
          <div className="mt-[2px] font-body text-[13.5px] leading-[1.55] text-parchment-2">
            {symbol.meant}
            {symbol.note ? (
              <span className="italic text-mist-2"> {symbol.note}</span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
