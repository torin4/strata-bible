import { BSB_GENESIS } from "@/content/bsb-genesis";
import type { Passage, Reading, Verse } from "@/lib/types";

// "Read the full text": a curated Genesis sitting shows selected verses of a passage, so
// verse numbers can skip (1:24–31 renders 24–28 then 31). This fills the gaps from the
// Berean Standard Bible (public domain), tagging each filled verse `omitted` so the reader
// renders it as revealable context, never as part of the authored sitting.
//
// The fill is deliberately narrow: only the gaps BETWEEN a passage's own first and last
// authored verse, within that passage's chapter. It never reaches past what the sitting
// spans, so it can't pull a neighboring reading's portion of a shared chapter (Genesis 2
// is split between the gen-1 sabbath scene and gen-2), and it never completes a chapter the
// sitting doesn't already draw from (Genesis 43, 44, 47, 49 stay untouched).

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

function expandPassage(passage: Passage, chapterIndex: number): Passage {
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
    const text = BSB_GENESIS[`${chapter}:${n}`];
    if (text) {
      filled.push({ n, text, omitted: true });
      added = true;
    }
  }

  return added ? { ...passage, verses: filled } : passage;
}

// Return the reading with its Genesis passages' omitted verses filled in. Non-Genesis
// readings (the genre fixtures) pass through untouched — the BSB lookup only holds Genesis.
export function expandReading(reading: Reading): Reading {
  if (reading.bookId !== "genesis") return reading;
  return {
    ...reading,
    passages: reading.passages.map((p) =>
      expandPassage(p, reading.chapterIndex),
    ),
  };
}
