import { BOOKS } from "@/content";
import { BOOK_OFFERS } from "@/lib/pricing";
import { describe, expect, it } from "vitest";

describe("book offers", () => {
  it("offers a book for sale only once it is published", () => {
    for (const [bookId, offer] of Object.entries(BOOK_OFFERS)) {
      const book = BOOKS.find((entry) => entry.id === bookId);
      expect(book, `${bookId} has an offer but no book`).toBeDefined();
      expect(
        !offer.unreleased,
        `${bookId}: unreleased must be set exactly while the book is unpublished`,
      ).toBe(Boolean(book?.published));
    }
  });
});
