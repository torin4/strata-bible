import { FindClient } from "@/components/find/FindClient";
import { BOOKS } from "@/content";
import { READING_THEMES, THEMES } from "@/content/themes";
import { type FindEntry, normalize } from "@/lib/find";
import Link from "next/link";

export const metadata = {
  title: "Find a reading — STRATA",
};

// Build the compact search index on the server from the full content, so the heavy
// readings never reach the browser; only titles, themes, the speaks-to line, and a
// normalized haystack are shipped to the client search.
function buildIndex(): FindEntry[] {
  const label = new Map(THEMES.map((t) => [t.key, t.label]));
  const entries: FindEntry[] = [];
  for (const book of BOOKS) {
    for (const reading of book.readings) {
      const tagged = READING_THEMES[reading.id];
      if (!tagged) continue;
      const meanings = reading.passages.map((p) => p.meaning ?? "").join(" ");
      const turns = reading.passages.map((p) => p.addr?.text ?? "").join(" ");
      const labels = tagged.themes.map((k) => label.get(k) ?? "").join(" ");
      entries.push({
        id: reading.id,
        bookId: book.id,
        bookTitle: book.title,
        title: reading.title,
        span: reading.span,
        tier: reading.tier,
        themes: tagged.themes,
        speaksTo: tagged.speaksTo,
        haystack: normalize(
          [
            reading.title,
            tagged.speaksTo,
            labels,
            reading.thread ?? "",
            meanings,
            turns,
          ].join(" "),
        ),
      });
    }
  }
  return entries;
}

export default function FindPage() {
  const entries = buildIndex();

  return (
    <main className="min-h-screen bg-shell px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-[42rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <FindClient entries={entries} themes={THEMES} />

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
          >
            Back to the reader
          </Link>
        </div>
      </div>
    </main>
  );
}
