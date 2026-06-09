// Per-book one-time purchases. A book can be bought outright (kept forever) or unlocked
// with STRATA Plus along with every other book and the companion. Books are priced in a
// few flat tiers by stature, not by length. A book is individually purchasable only if it
// has an offer with a Stripe price; otherwise it is reachable only through Plus.

export type BookTier = "major" | "standard" | "short";

// The storefront display price per tier. The actual charge is the Stripe price.
export const TIER_PRICE: Record<BookTier, string> = {
  major: "$14.99",
  standard: "$9.99",
  short: "$4.99",
};

// STRATA Plus display prices. The single source for the subscription prices shown across
// the paywall, pricing page, and settings; the actual charge is the Stripe price. Change a
// price here and it changes everywhere.
export const PLUS_PRICE = {
  annual: "$49",
  monthly: "$6.99",
} as const;

export interface BookOffer {
  title: string;
  tier: BookTier;
  priceId: string;
}

// Add a book by creating its one-time Stripe price and setting the env var here.
export const BOOK_OFFERS: Record<string, BookOffer> = {
  genesis: {
    title: "Genesis",
    tier: "major",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_GENESIS ?? "",
  },
};

// The books currently sold individually, for the storefront.
export function purchasableBooks(): {
  bookId: string;
  title: string;
  price: string;
}[] {
  return Object.entries(BOOK_OFFERS)
    .filter(([, offer]) => offer.priceId)
    .map(([bookId, offer]) => ({
      bookId,
      title: offer.title,
      price: TIER_PRICE[offer.tier],
    }));
}

// The offer for a book, or null if it is not sold individually (no configured price).
export function bookOffer(bookId: string): BookOffer | null {
  const offer = BOOK_OFFERS[bookId];
  return offer?.priceId ? offer : null;
}

export function bookPrice(bookId: string): string | null {
  const offer = bookOffer(bookId);
  return offer ? TIER_PRICE[offer.tier] : null;
}

// Which book a one-time price belongs to, for matching a payment back to a book.
export function bookForPriceId(priceId: string): string | null {
  for (const [bookId, offer] of Object.entries(BOOK_OFFERS)) {
    if (offer.priceId && offer.priceId === priceId) return bookId;
  }
  return null;
}
