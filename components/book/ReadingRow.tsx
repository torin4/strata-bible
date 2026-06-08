import { TIER_LABEL, genreLabel } from "@/lib/labels";
import type { Reading } from "@/lib/types";
import Link from "next/link";

// One reading in a movement's (or a book's) list. Links into the reader.
export function ReadingRow({
  bookId,
  reading,
}: { bookId: string; reading: Reading }) {
  return (
    <li>
      <Link
        href={`/read/${bookId}/${reading.id}`}
        className="group flex items-baseline justify-between gap-3 px-4 py-3 transition-colors hover:bg-parchment/[0.02]"
      >
        <span className="flex flex-col">
          <span className="font-scripture text-[17px] text-parchment-2 group-hover:text-parchment">
            {reading.title}
          </span>
          <span className="font-body text-[12px] italic text-mist-2">
            {reading.span}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className="font-ui text-[8.5px] uppercase tracking-[.16em] text-lapis">
            {genreLabel(reading.passages.map((passage) => passage.kind))}
          </span>
          <span className="font-ui text-[8.5px] uppercase tracking-[.16em] text-mist-2">
            {TIER_LABEL[reading.tier]}
          </span>
        </span>
      </Link>
    </li>
  );
}
