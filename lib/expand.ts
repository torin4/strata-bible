import { BSB_EXODUS } from "@/content/bsb-exodus";
import { BSB_GENESIS } from "@/content/bsb-genesis";
import type { Passage, Reading, Verse } from "@/lib/types";

// "Read the full text": a curated sitting shows selected verses of a passage, so
// verse numbers can skip (1:24–31 renders 24–28 then 31). This fills the gaps from the
// Berean Standard Bible (public domain), tagging each filled verse `omitted` so the reader
// renders it as revealable context, never as part of the authored sitting.
//
// The fill is deliberately narrow: only the gaps BETWEEN a passage's own first and last
// authored verse, within that passage's chapter. It never reaches past what the sitting
// spans, so it can't pull a neighboring reading's portion of a shared chapter (Genesis 2
// is split between the gen-1 sabbath scene and gen-2), and it never completes a chapter the
// sitting doesn't already draw from (Genesis 43, 44, 47, 49 stay untouched).

// The BSB text of one book, keyed "chapter:verse". Generated per book by
// scripts/build-bsb-book.mjs; server-only data, never imported into a client component.
type VerseLookup = Record<string, string>;

// The books whose full text is available to reveal, keyed by bookId. A book absent from this
// registry simply has no reveal: its readings pass through untouched, which is what every book
// but Genesis did before the registry existed. Adding a book is a generator run plus one entry.
// Typed as possibly-undefined on purpose: this repo does not set noUncheckedIndexedAccess, so
// without it the miss case below would look like dead code to the compiler and to a reader.
const BSB_BY_BOOK: Record<string, VerseLookup | undefined> = {
  genesis: BSB_GENESIS,
  exodus: BSB_EXODUS,
};

// The chapter a passage renders from. Range refs ("1:24–31", "42:6–24", "25:1–18") carry it
// explicitly and win; descriptive grounded refs ("Genesis 24 (selected)") fall back to the
// reading's chapterIndex. Returns null when neither yields a chapter.
function chapterOf(ref: string, fallback: number): number | null {
  const explicit = ref.match(/(\d+):/); // "…C:V…"
  if (explicit) return Number(explicit[1]);
  return Number.isFinite(fallback) ? fallback : null;
}

// Authored verse numbers ascend within a single chapter. A passage whose numbers don't
// ascend spans more than one chapter under one ref (Genesis 48–49: 48:14, then 49:7, 10, 33),
// where a bare `n` can't be attributed to a chapter — leave those unexpanded.
function ascending(verses: Verse[]): boolean {
  for (let i = 1; i < verses.length; i++) {
    if (verses[i].n <= verses[i - 1].n) return false;
  }
  return true;
}

function expandPassage(
  passage: Passage,
  chapterIndex: number,
  bsb: VerseLookup,
): Passage {
  // Only prose/poetry scripture carries a numbered verse range to fill; clusters (statutes,
  // sayings) don't, and Genesis has none regardless.
  if (passage.form === "list") return passage;
  const authored = passage.verses;
  if (!authored || authored.length < 2 || !ascending(authored)) return passage;

  const chapter = chapterOf(passage.ref, chapterIndex);
  if (chapter === null) return passage;

  const byNumber = new Map(authored.map((v) => [v.n, v]));
  const first = authored[0].n;
  const last = authored[authored.length - 1].n;

  const filled: Verse[] = [];
  let added = false;
  for (let n = first; n <= last; n++) {
    const own = byNumber.get(n);
    if (own) {
      filled.push(own);
      continue;
    }
    const text = bsb[`${chapter}:${n}`];
    if (text) {
      filled.push({ n, text, omitted: true });
      added = true;
    }
  }

  return added ? { ...passage, verses: filled } : passage;
}

// Return the reading with its passages' omitted verses filled in from its book's BSB text.
// A reading whose book has no registered lookup (the genre fixtures) passes through untouched.
export function expandReading(reading: Reading): Reading {
  const bsb = BSB_BY_BOOK[reading.bookId];
  if (!bsb) return reading;
  return {
    ...reading,
    passages: reading.passages.map((p) =>
      expandPassage(p, reading.chapterIndex, bsb),
    ),
  };
}
