import { BackLink } from "@/components/nav/BackLink";
import { PageTransition } from "@/components/nav/PageTransition";
import { LastReadTracker } from "@/components/reader/LastReadTracker";
import { LockedReader } from "@/components/reader/LockedReader";
import { Reader } from "@/components/reader/Reader";
import { BOOKS } from "@/content";
import { READING_THEMES } from "@/content/themes";
import { isFreeReading } from "@/lib/access";
import {
  getAdjacent,
  getBook,
  getClosingBookCapstone,
  getClosingMovement,
  getReading,
} from "@/lib/content";
import { expandReading } from "@/lib/expand";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Per-reading metadata, so search and shared links carry the reading's own name and its
// "speaks to" line instead of the app-wide title. This is the app's organic front door:
// someone searching a chapter should find the reading, titled as itself. The description
// mirrors the body's content gate: a gated reading only ever uses its speaksTo line
// (already public via /find and the paywall) or the generic sentence, never the authored
// thread, so the locked page's public head stays free of paid content. The openGraph and
// twitter blocks restate the site defaults, since a per-page block replaces the root's
// wholesale (og:image and siteName would silently vanish otherwise).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string; readingId: string }>;
}): Promise<Metadata> {
  const { bookId, readingId } = await params;
  const reading = getReading(bookId, readingId);
  if (!reading) return {};
  const gated = BILLING_ON && !isFreeReading(reading);
  const title = `${reading.title} · ${reading.span} · STRATA`;
  const description =
    READING_THEMES[readingId]?.speaksTo ??
    (gated ? undefined : reading.thread) ??
    `${reading.title}, ${reading.span}, read in four layers: the history, the meaning, the turn, and a response.`;
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

// Prerender every reading: server components for content, as the brief asks. For a gated
// reading the prerendered shell carries no authored content (see the gate below), so this
// stays a static page even when billing is on.
export function generateStaticParams() {
  return BOOKS.flatMap((book) =>
    book.readings.map((reading) => ({
      bookId: book.id,
      readingId: reading.id,
    })),
  );
}

// Billing is "on" only when a Stripe price is configured. Read directly from the env (rather
// than importing the client billing module) so this server component carries no client SDK.
const BILLING_ON = Boolean(process.env.NEXT_PUBLIC_STRIPE_PRICE_ID);

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ bookId: string; readingId: string }>;
}) {
  const { bookId, readingId } = await params;
  const reading = getReading(bookId, readingId);
  if (!reading) notFound();

  const { prev, next } = getAdjacent(bookId, readingId);
  const book = getBook(bookId);
  const prevMeta = prev ? { id: prev.id, title: prev.title } : undefined;
  const nextMeta = next ? { id: next.id, title: next.title } : undefined;

  // Gate a reading's authored content only when billing is on AND it is not part of the free
  // sample. A gated reading ships no paid content from the server: LockedReader shows the
  // paywall, and an entitled reader fetches the content from the authenticated route. With
  // billing off, everything renders server-side as before, fully usable signed out.
  const gated = BILLING_ON && !isFreeReading(reading);

  return (
    <main className="min-h-screen bg-shell px-4 py-8 sm:py-12">
      <PageTransition className="mx-auto max-w-[40rem]">
        <header className="mb-4 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>
        {book ? (
          <div className="mb-4">
            <BackLink href={`/book/${bookId}`} label={book.title} />
          </div>
        ) : null}

        <div className="rounded-[20px] border border-line bg-deep px-6 py-8 sm:px-9 sm:py-10">
          {gated ? (
            <LockedReader
              meta={{
                bookId,
                readingId,
                title: reading.title,
                span: reading.span,
              }}
              bookTitle={book?.title}
              prev={prevMeta}
              next={nextMeta}
            />
          ) : (
            <>
              <LastReadTracker
                bookId={bookId}
                readingId={readingId}
                title={reading.title}
                span={reading.span}
              />
              <Reader
                reading={expandReading(reading)}
                closingMovement={getClosingMovement(bookId, reading)}
                closingBookCapstone={getClosingBookCapstone(bookId, reading)}
                bookTitle={book?.title}
                isFree={isFreeReading(reading)}
                prev={prevMeta}
                next={nextMeta}
              />
            </>
          )}
        </div>
      </PageTransition>
    </main>
  );
}
