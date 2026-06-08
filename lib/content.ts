import { BOOKS, type BookEntry } from "@/content";
import type { Movement, Reading } from "@/lib/types";

const BOOK_BY_ID = new Map(BOOKS.map((book) => [book.id, book]));

export function getBook(bookId: string): BookEntry | undefined {
  return BOOK_BY_ID.get(bookId);
}

export function getReading(
  bookId: string,
  readingId: string,
): Reading | undefined {
  return getBook(bookId)?.readings.find((reading) => reading.id === readingId);
}

// Adjacency is the position in the book's authored reading list — its span order —
// never chapter arithmetic, because a span may cross chapter lines. Navigation stays
// inside one book.
export function getAdjacent(
  bookId: string,
  readingId: string,
): { prev?: Reading; next?: Reading } {
  const readings = getBook(bookId)?.readings ?? [];
  const i = readings.findIndex((reading) => reading.id === readingId);
  if (i === -1) return {};
  return { prev: readings[i - 1], next: readings[i + 1] };
}

// The movement a reading belongs to, located by chapterIndex against each movement's
// declared chapter range.
export function getMovement(
  bookId: string,
  reading: Reading,
): Movement | undefined {
  return getBook(bookId)?.movements.find(
    (movement) =>
      reading.chapterIndex >= movement.chapterStart &&
      reading.chapterIndex <= movement.chapterEnd,
  );
}

// The readings that fall inside a movement's chapter range, in span order.
export function readingsInMovement(
  bookId: string,
  movement: Movement,
): Reading[] {
  return (getBook(bookId)?.readings ?? []).filter(
    (reading) =>
      reading.chapterIndex >= movement.chapterStart &&
      reading.chapterIndex <= movement.chapterEnd,
  );
}

// Readings not covered by any movement — e.g. the single-reading genre fixtures, which
// have no movement structure. The book page lists these flat.
export function readingsOutsideMovements(bookId: string): Reading[] {
  const book = getBook(bookId);
  if (!book) return [];
  return book.readings.filter(
    (reading) =>
      !book.movements.some(
        (movement) =>
          reading.chapterIndex >= movement.chapterStart &&
          reading.chapterIndex <= movement.chapterEnd,
      ),
  );
}

// When a reading is the last one inside a movement that has a capstone, return that
// movement so the reader can close with its look-back. This is what makes a composite
// book (Job) carry the meaning of the whole in its capstone, not in any one reading.
export function getClosingMovement(
  bookId: string,
  reading: Reading,
): Movement | undefined {
  const movement = getMovement(bookId, reading);
  if (!movement?.capstone) return undefined;
  const inMovement = (getBook(bookId)?.readings ?? []).filter(
    (r) =>
      r.chapterIndex >= movement.chapterStart &&
      r.chapterIndex <= movement.chapterEnd,
  );
  const last = inMovement[inMovement.length - 1];
  return last?.id === reading.id ? movement : undefined;
}
