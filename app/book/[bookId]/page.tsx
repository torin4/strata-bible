import { MovementAccordion } from "@/components/book/MovementAccordion";
import { ReadingRow } from "@/components/book/ReadingRow";
import { PageTransition } from "@/components/nav/PageTransition";
import { CompositionPanel } from "@/components/overlays/CompositionPanel";
import { BOOKS } from "@/content";
import { getBook, readingsOutsideMovements } from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BOOKS.map((book) => ({ bookId: book.id }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;
  const book = getBook(bookId);
  if (!book) notFound();

  const orphans = readingsOutsideMovements(bookId);
  const readingCount = book.readings.length;
  const movementCount = book.movements.length;

  return (
    <main className="min-h-screen bg-shell px-4 py-8 sm:py-12">
      <PageTransition className="mx-auto max-w-[42rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <h1 className="text-center font-display text-[30px] font-medium text-parchment">
          {book.title}
        </h1>
        {book.subtitle ? (
          <p className="mx-auto mt-2 max-w-[34rem] text-center font-body text-[15px] italic leading-[1.5] text-mist">
            {book.subtitle}
          </p>
        ) : null}
        <div className="mb-8 mt-2 text-center font-ui text-[11px] uppercase tracking-[.16em] text-mist-2">
          {readingCount} {readingCount === 1 ? "reading" : "readings"}
          {movementCount > 0
            ? ` · ${movementCount} ${movementCount === 1 ? "movement" : "movements"}`
            : ""}
        </div>

        {book.composition ? (
          <div className="mb-6">
            <CompositionPanel panel={book.composition} />
          </div>
        ) : null}

        {movementCount > 0 ? (
          <MovementAccordion
            bookId={book.id}
            movements={book.movements}
            bookCapstone={book.capstone}
          />
        ) : null}

        {orphans.length > 0 ? (
          <ul className="flex flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line bg-deep">
            {orphans.map((reading) => (
              <ReadingRow key={reading.id} bookId={book.id} reading={reading} />
            ))}
          </ul>
        ) : null}

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
          >
            All books
          </Link>
        </div>
      </PageTransition>
    </main>
  );
}
