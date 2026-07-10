import { BeginReading } from "@/components/book/BeginReading";
import { MovementAccordion } from "@/components/book/MovementAccordion";
import { ReadingRow } from "@/components/book/ReadingRow";
import { FadeImage } from "@/components/media/FadeImage";
import { BackLink } from "@/components/nav/BackLink";
import { PageTransition } from "@/components/nav/PageTransition";
import { CompositionPanel } from "@/components/overlays/CompositionPanel";
import { ContinueReading } from "@/components/reader/ContinueReading";
import { BOOKS } from "@/content";
import {
  getBook,
  readingsInMovement,
  readingsOutsideMovements,
} from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BOOKS.map((book) => ({ bookId: book.id }));
}

// Per-book metadata: the book's own name and subtitle instead of the app-wide title.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string }>;
}): Promise<Metadata> {
  const { bookId } = await params;
  const book = getBook(bookId);
  if (!book) return {};
  const title = `${book.title} · STRATA`;
  const description =
    book.subtitle ??
    `${book.title}, read in four layers, grounded in the history it grew out of.`;
  // Restate the site defaults: a per-page openGraph/twitter block replaces the root's
  // wholesale, so og:image and siteName would silently vanish otherwise.
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "STRATA",
      images: ["/icons/icon-512.png"],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/icons/icon-512.png"],
    },
  };
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

  // The book's very first reading, for the new visitor's "Begin here" card: the first
  // reading of the first movement, or the first reading outright when there are none.
  const firstMovement = [...book.movements].sort(
    (a, b) => a.index - b.index,
  )[0];
  const firstReading =
    (firstMovement
      ? readingsInMovement(bookId, firstMovement)[0]
      : undefined) ?? book.readings[0];

  return (
    <main className="min-h-screen bg-shell pb-8 sm:pb-12">
      {book.heroImage ? (
        <div className="relative aspect-[688/384] max-h-[400px] w-full overflow-hidden">
          {/* Full-bleed decorative banner; the title is text over it. */}
          <FadeImage
            src={book.heroImage}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shell via-shell/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-6 text-center">
            <h1 className="font-display text-[34px] font-medium leading-none text-parchment sm:text-[42px]">
              {book.title}
            </h1>
            {book.subtitle ? (
              <p className="mx-auto mt-2 max-w-[34rem] font-body text-[14px] italic leading-[1.45] text-mist">
                {book.subtitle}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      <PageTransition className="mx-auto max-w-[42rem] px-4 pt-7 sm:pt-9">
        {book.heroImage ? null : (
          <>
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
          </>
        )}
        <div className="mb-5">
          <BackLink href="/" label="All books" />
        </div>
        <div className="mb-8 mt-2 text-center font-ui text-[11px] uppercase tracking-[.16em] text-mist-2">
          {readingCount} {readingCount === 1 ? "reading" : "readings"}
          {movementCount > 0
            ? ` · ${movementCount} ${movementCount === 1 ? "movement" : "movements, the acts of the book"}`
            : ""}
        </div>

        {/* The reader's bookmark within this book, when they have one: a quick way back to
            where they are. Renders nothing when their last spot is elsewhere. */}
        <ContinueReading bookId={book.id} className="mb-6" />

        {/* The new visitor's start: one obvious way into the first reading. Renders only
            when there is nothing to resume, so it never competes with the card above. */}
        {firstReading ? (
          <BeginReading
            bookId={book.id}
            readingId={firstReading.id}
            title={firstReading.title}
            span={firstReading.span}
            className="mb-6"
          />
        ) : null}

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
      </PageTransition>
    </main>
  );
}
