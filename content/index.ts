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
import {
  HANDED_OVER_MOVEMENT,
  MARK,
  MARK_CAPSTONE,
  MARK_INTRO,
  THE_AUTHORITY_MOVEMENT,
  THE_TEMPLE_MOVEMENT,
  THE_WAY_MOVEMENT,
} from "./mark";
import {
  EMPTY_MOVEMENT,
  RUTH,
  RUTH_CAPSTONE,
  RUTH_INTRO,
  THE_REDEEMER_MOVEMENT,
} from "./ruth";
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
    heroImage: "/images/exo-intro.webp",
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
  // Ruth, book three, published. Four chapters across two movements.
  //
  // The hero and the movement 1 banner are swapped from what their prompts intended. The image
  // generated as the hero came back a ruled triptych, which the full-bleed container crops badly:
  // it frames the washed-out centre panel between two dividers and cuts the figures in half. It
  // reads correctly at natural aspect inside a situation panel, and its subject (Moab, the valley,
  // Bethlehem) is what that panel is about, so it went there as ruth-moab.webp. The continuous
  // barley panorama became the hero. See .scratch/ruth/issues/07-images.md.
  {
    id: "ruth",
    title: "Ruth",
    subtitle: "Two movements: coming back empty, and the redeemer.",
    blurb:
      "A woman comes home with nothing, and a stranger will not leave her.",
    heroImage: "/images/ruth-intro.webp",
    readings: RUTH,
    movements: [EMPTY_MOVEMENT, THE_REDEEMER_MOVEMENT],
    composition: RUTH_INTRO,
    capstone: RUTH_CAPSTONE,
    published: true,
  },
  // Mark, book four, in progress, and the first New Testament book in the app. Sixteen chapters
  // across four movements; only movement 1 is declared, and only mark-1a is authored. The book
  // ends at 16:8. Unpublished until it is complete. See .scratch/mark/spec.md.
  {
    id: "mark",
    title: "Mark",
    subtitle:
      "Four movements: the authority, the way, the temple, handed over.",
    blurb: "The earliest gospel, and the one that stops mid-sentence.",
    heroImage: "/images/mark-intro.webp",
    readings: MARK,
    movements: [
      THE_AUTHORITY_MOVEMENT,
      THE_WAY_MOVEMENT,
      THE_TEMPLE_MOVEMENT,
      HANDED_OVER_MOVEMENT,
    ],
    composition: MARK_INTRO,
    capstone: MARK_CAPSTONE,
    published: false,
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
