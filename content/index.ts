import type { Capstone, Movement, Panel, Reading } from "@/lib/types";
import {
  EXODUS,
  EXODUS_CAPSTONE,
  EXODUS_INTRO,
  OUT_OF_EGYPT_MOVEMENT,
  ROAD_TO_THE_MOUNTAIN_MOVEMENT,
  THE_COVENANT_MOVEMENT,
  THE_PRESENCE_MOVEMENT,
} from "./exodus";
import {
  ABRAHAM_MOVEMENT,
  GENESIS,
  GENESIS_CAPSTONE,
  GENESIS_INTRO,
  JACOB_MOVEMENT,
  JOSEPH_MOVEMENT,
  PRIMEVAL_MOVEMENT,
} from "./genesis";
import { JOB_MOVEMENT, SEED } from "./seed";

// A book as the shell needs it: its readings (resolved by span), its movements, and
// optionally its book-level composition overlay ("how it was written"). No book has
// authored composition prose yet, so `composition` stays undefined rather than being
// fabricated; CompositionPanel renders only when it is present (parallel to how the
// grounded tier's meaning waits for the companion).
export interface BookEntry {
  id: string;
  title: string;
  subtitle?: string; // the book's one-line intro, shown under the title on its own page
  blurb?: string; // the poetic one-liner on the landing card, distinct from the subtitle
  heroImage?: string; // a top-of-page hero image (path under /public)
  readings: Reading[];
  movements: Movement[];
  composition?: Panel;
  capstone?: Capstone; // the book-level look-back over the whole arc
  published?: boolean; // surfaced on the landing and in /find; the genre proofs stay off
}

// A book announced but not yet authored: display-only, with no readings and no route.
export interface ComingSoon {
  id: string;
  title: string;
  blurb: string;
}

// Empty while nothing is announced. The landing renders these after the published books, so
// adding an entry here is all it takes to announce the next one.
export const COMING_SOON: ComingSoon[] = [];

// Genesis ships first as the real book. The seed fixtures are one reading per genre,
// grouped by their own bookId, purely to prove the kind-aware renderer end to end.
const SEED_TITLES: Record<string, string> = {
  psalms: "Psalms",
  leviticus: "Leviticus",
  romans: "Romans",
  proverbs: "Proverbs",
  revelation: "Revelation",
  job: "Job",
};

const SEED_MOVEMENTS: Record<string, Movement[]> = {
  job: [JOB_MOVEMENT],
};

function seedBooks(): BookEntry[] {
  const order: string[] = [];
  const byBook = new Map<string, Reading[]>();
  for (const reading of SEED) {
    if (!byBook.has(reading.bookId)) {
      byBook.set(reading.bookId, []);
      order.push(reading.bookId);
    }
    byBook.get(reading.bookId)?.push(reading);
  }
  return order.map((id) => ({
    id,
    title: SEED_TITLES[id] ?? id,
    readings: byBook.get(id) ?? [],
    movements: SEED_MOVEMENTS[id] ?? [],
  }));
}

export const BOOKS: BookEntry[] = [
  {
    id: "genesis",
    title: "Genesis",
    subtitle:
      "Four movements: the world, the family, the wrestler, the dreamer.",
    blurb: "In the beginning, and everything that breaks and is held after.",
    heroImage: "/images/genesis-intro.webp",
    readings: GENESIS,
    movements: [
      PRIMEVAL_MOVEMENT,
      ABRAHAM_MOVEMENT,
      JACOB_MOVEMENT,
      JOSEPH_MOVEMENT,
    ],
    composition: GENESIS_INTRO,
    capstone: GENESIS_CAPSTONE,
    published: true,
  },
  // Exodus, complete and published: forty chapters across four movements. The free sample is
  // still Genesis's primeval history and nothing here, so Exodus reads entirely under Plus.
  {
    id: "exodus",
    title: "Exodus",
    subtitle:
      "Four movements: out of Egypt, the road, the covenant, the presence.",
    blurb: "Out of Egypt, through the sea, to the mountain of fire.",
    readings: EXODUS,
    movements: [
      OUT_OF_EGYPT_MOVEMENT,
      ROAD_TO_THE_MOUNTAIN_MOVEMENT,
      THE_COVENANT_MOVEMENT,
      THE_PRESENCE_MOVEMENT,
    ],
    composition: EXODUS_INTRO,
    capstone: EXODUS_CAPSTONE,
    published: true,
  },
  // The genre fixtures stay in the catalog (their routes still prove the kind-aware
  // renderer) but are unpublished, so they do not surface on the landing or in /find.
  ...seedBooks(),
];

// Books shown to readers: the published ones. The genre proofs remain reachable by direct
// URL for development, just not advertised.
export const PUBLISHED_BOOKS: BookEntry[] = BOOKS.filter(
  (book) => book.published,
);
