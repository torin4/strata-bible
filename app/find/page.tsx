import { FindClient } from "@/components/find/FindClient";
import { BackLink } from "@/components/nav/BackLink";
import { PUBLISHED_BOOKS } from "@/content";
import { READING_THEMES, THEMES } from "@/content/themes";
import { type FindEntry, normalize } from "@/lib/find";
import Link from "next/link";

export const metadata = {
  title: "Find a reading, STRATA",
};

// Build the compact search index on the server from the full content, so the heavy
// readings never reach the browser; only titles, themes, the speaks-to line, and a
// normalized haystack are shipped to the client search.
function buildIndex(): FindEntry[] {
  const label = new Map(THEMES.map((t) => [t.key, t.label]));
  const entries: FindEntry[] = [];
  for (const book of PUBLISHED_BOOKS) {
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

  // Only offer a feeling that some published reading actually answers. A theme key can exist
  // ahead of the content using it, because a book is authored while still unpublished, and a
  // chip that always returns nothing reads as broken search rather than an empty shelf.
  const answered = new Set(entries.flatMap((entry) => entry.themes));
  const themes = THEMES.filter((theme) => answered.has(theme.key));

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
        <div className="mb-6">
          <BackLink href="/" label="Home" />
        </div>

        <FindClient entries={entries} themes={themes} />
      </div>
    </main>
  );
}
