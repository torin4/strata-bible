import type { Capstone, Movement, Panel, Reading } from "@/lib/types";
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
  subtitle?: string; // the book's one-line intro, shown under the title
  readings: Reading[];
  movements: Movement[];
  composition?: Panel;
  capstone?: Capstone; // the book-level look-back over the whole arc
}

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
    readings: GENESIS,
    movements: [
      PRIMEVAL_MOVEMENT,
      ABRAHAM_MOVEMENT,
      JACOB_MOVEMENT,
      JOSEPH_MOVEMENT,
    ],
    composition: GENESIS_INTRO,
    capstone: GENESIS_CAPSTONE,
  },
  ...seedBooks(),
];
