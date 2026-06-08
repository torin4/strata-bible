import { Reader } from "@/components/reader/Reader";
import { BOOKS } from "@/content";
import {
  getAdjacent,
  getBook,
  getClosingMovement,
  getReading,
} from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

// Prerender every reading: server components for content, as the brief asks.
export function generateStaticParams() {
  return BOOKS.flatMap((book) =>
    book.readings.map((reading) => ({
      bookId: book.id,
      readingId: reading.id,
    })),
  );
}

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ bookId: string; readingId: string }>;
}) {
  const { bookId, readingId } = await params;
  const reading = getReading(bookId, readingId);
  if (!reading) notFound();

  const { prev, next } = getAdjacent(bookId, readingId);
  const closingMovement = getClosingMovement(bookId, reading);
  const book = getBook(bookId);

  return (
    <main className="min-h-screen bg-shell px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-[40rem]">
        <header className="mb-5 flex flex-col items-center gap-2">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
          {book ? (
            <Link
              href={`/book/${bookId}`}
              className="font-ui text-[10px] uppercase tracking-[.18em] text-mist-2 transition-colors hover:text-gold-bright"
            >
              &larr; {book.title}
            </Link>
          ) : null}
        </header>

        <div className="rounded-[20px] border border-line bg-deep px-6 py-8 sm:px-9 sm:py-10">
          <Reader reading={reading} closingMovement={closingMovement} />
        </div>

        <nav className="mt-6 flex items-stretch justify-between gap-3 font-ui text-[12px]">
          {prev ? (
            <Link
              href={`/read/${bookId}/${prev.id}`}
              className="group flex max-w-[45%] flex-col rounded-[11px] border border-line px-4 py-3 text-mist transition-colors hover:border-gold/40"
            >
              <span className="text-[9.5px] uppercase tracking-[.18em] text-mist-2">
                Previous
              </span>
              <span className="mt-1 text-parchment-2 group-hover:text-parchment">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/read/${bookId}/${next.id}`}
              className="group flex max-w-[45%] flex-col rounded-[11px] border border-line px-4 py-3 text-right text-mist transition-colors hover:border-gold/40"
            >
              <span className="text-[9.5px] uppercase tracking-[.18em] text-mist-2">
                Next
              </span>
              <span className="mt-1 text-parchment-2 group-hover:text-parchment">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="mt-5 text-center">
          <Link
            href={`/book/${bookId}`}
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
          >
            {book ? `All of ${book.title}` : "All readings"}
          </Link>
        </div>
      </div>
    </main>
  );
}
