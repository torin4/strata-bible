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
  // Set while the book is still being written. An unreleased book is never offered for sale,
  // whether or not its price is configured. test/pricing.test.ts holds this in step with the
  // book's `published` flag in content/index.ts, which is not imported here because this
  // module ships to the browser and the catalog is large.
  unreleased?: boolean;
}

// Add a book by creating its one-time Stripe price and setting the env var here.
export const BOOK_OFFERS: Record<string, BookOffer> = {
  genesis: {
    title: "Genesis",
    tier: "major",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_GENESIS ?? "",
  },
  exodus: {
    title: "Exodus",
    tier: "major",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_EXODUS ?? "",
  },
  ruth: {
    title: "Ruth",
    tier: "short",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_RUTH ?? "",
  },
  mark: {
    title: "Mark",
    tier: "major",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_MARK ?? "",
  },
  ecclesiastes: {
    title: "Ecclesiastes",
    tier: "standard",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_ECCLESIASTES ?? "",
  },
  // Psalms is still being written. Remove `unreleased` when the book is published.
  psalms: {
    title: "Psalms",
    tier: "major",
    priceId: process.env.NEXT_PUBLIC_STRIPE_BOOK_PSALMS ?? "",
    unreleased: true,
  },
};

// The books currently sold individually, for the storefront.
export function purchasableBooks(): {
  bookId: string;
  title: string;
  price: string;
}[] {
  return Object.entries(BOOK_OFFERS)
    .filter(([, offer]) => offer.priceId && !offer.unreleased)
    .map(([bookId, offer]) => ({
      bookId,
      title: offer.title,
      price: TIER_PRICE[offer.tier],
    }));
}

// The offer for a book, or null if it is not sold individually (no configured price, or the
// book is not released yet).
export function bookOffer(bookId: string): BookOffer | null {
  const offer = BOOK_OFFERS[bookId];
  return offer?.priceId && !offer.unreleased ? offer : null;
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
