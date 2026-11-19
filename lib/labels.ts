import type { AddrMode, GroundKind, PassageKind, Tier } from "@/lib/types";

// The ground layer's label is driven by ground.kind (see the kind-drives-display map).
export const GROUND_LABEL: Record<GroundKind, string> = {
  historical: "The history",
  setting: "The setting",
  occasion: "The occasion",
  genre: "What kind of writing this is",
};

// The chip shown beside the turn, telling the reader how the passage addresses them.
export const MODE_LABEL: Record<AddrMode, string> = {
  names: "names you",
  pray: "pray it",
  claims: "claims you",
  "none-but": "not binding · worth seeing",
  reframes: "reframes your present",
};

// Each mode's plain-sentence expansion: the chip's two-word label is the app's shorthand,
// and a newcomer should not have to decode it. Shown visibly in the turn's first-scene
// introduce line, and carried on the chip as a tooltip and screen-reader gloss.
export const MODE_GLOSS: Record<AddrMode, string> = {
  names: "The writer shows you something already true of your own life",
  pray: "The writer meant these words to be prayed, not only read",
  claims: "The writer asks something of how you live",
  "none-but": "You are not bound by this, but it is worth understanding",
  reframes: "The writer asks you to see your own time differently",
};

// The small per-passage kind chip in the passage header.
export const PASSAGE_KIND_LABEL: Record<PassageKind, string> = {
  scene: "narrative",
  poem: "poem",
  "statute-cluster": "law",
  "saying-cluster": "wisdom",
  argument: "argument",
  vision: "vision",
  oracle: "oracle",
};

export const TIER_LABEL: Record<Tier, string> = {
  sitting: "Sitting",
  grounded: "Grounded",
  plain: "Plain",
};

// The reading-level genre chip. The proof carried a hand-written genreLabel; here it
// is derived from the passage kinds so it stays correct as content grows. A reading
// that mixes kinds (Job) is Composite.
const GENRE_LABEL: Record<PassageKind, string> = {
  scene: "Narrative",
  poem: "Poetry",
  "statute-cluster": "Law",
  "saying-cluster": "Wisdom",
  argument: "Letter",
  vision: "Apocalyptic",
  oracle: "Prophecy",
};

export function genreLabel(kinds: PassageKind[]): string {
  const distinct = Array.from(new Set(kinds));
  if (distinct.length !== 1) return "Composite";
  return GENRE_LABEL[distinct[0]] ?? "Reading";
}
