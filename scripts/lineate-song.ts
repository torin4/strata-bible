// Lineate the Song at the sea (Exodus 15:1-21) per ADR 0001.
//
// Poetry is set with line breaks at the parallelism; the BSB lookup stays flat. The words here
// are never retyped: each verse is read from content/bsb-exodus.ts and a line break is inserted
// BEFORE each listed phrase. The script then asserts that collapsing the whitespace reproduces
// the BSB text exactly, so a lineation can never quietly change a word.
//
// Verses 19 and 20 are narrative framing rather than song, and stay unbroken on purpose.
//
// Safe to re-run: it reads the words from the BSB lookup rather than from the content file, so
// it is idempotent and cannot pick up a hand edit to a verse. It rewrites only the ex-15a verses
// block and leaves the apparatus around it alone. Kept rather than deleted because Psalms will
// need the same treatment, and because it is the executable record of how ADR 0001 was applied.
//
// Usage: npx tsx scripts/lineate-song.ts
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_EXODUS } from "@/content/bsb-exodus";

// verse -> phrases that begin a new line.
const BREAKS: Record<number, string[]> = {
  1: [
    "“I will sing",
    "for He is highly",
    "The horse and rider",
    "into the sea.",
  ],
  2: ["and He has become", "He is my God,", "my father’s God,"],
  3: ["the LORD is His name."],
  4: ["the finest of his officers"],
  5: ["they sank there"],
  6: ["Your right hand, O LORD, has shattered"],
  7: ["You unleashed", "it consumed them"],
  8: ["like a wall", "the depths congealed"],
  9: ["I will divide the spoils;", "I will draw my sword;"],
  10: ["and the sea covered them.", "They sank like lead"],
  11: ["Who is like You—majestic", "revered with praises"],
  12: ["and the earth swallowed"],
  13: ["with Your strength"],
  14: ["anguish will grip"],
  15: ["trembling will seize", "those who dwell in Canaan"],
  16: ["By the power of Your arm", "until Your people pass by"],
  // Not "the place, O LORD": it follows an em dash rather than a space, so breaking there
  // would insert whitespace the BSB does not have. A break may only replace an existing space.
  17: ["on the mountain", "the sanctuary, O Lord"],
  21: ["for He is highly exalted;", "the horse and rider"],
};

const flatten = (s: string) => s.replace(/\s+/g, " ").trim();

const lines: string[] = [];
for (let n = 1; n <= 21; n++) {
  const original = BSB_EXODUS[`15:${n}`];
  if (!original) throw new Error(`no BSB verse at 15:${n}`);

  let text = original;
  for (const phrase of BREAKS[n] ?? []) {
    const at = text.indexOf(phrase);
    if (at === -1)
      throw new Error(`15:${n}: break phrase not found: ${phrase}`);
    if (at === 0)
      throw new Error(`15:${n}: break at start of verse: ${phrase}`);
    // A line break may only take the place of an existing space. Breaking anywhere else adds
    // whitespace the BSB does not have, which is a change to the text however small it looks.
    if (!/\s/.test(text[at - 1])) {
      throw new Error(
        `15:${n}: "${phrase}" follows "${text[at - 1]}", not a space; pick another break`,
      );
    }
    text = `${text.slice(0, at).trimEnd()}\n${text.slice(at)}`;
  }

  // The whole point: lineation may add whitespace and nothing else.
  if (flatten(text) !== flatten(original)) {
    throw new Error(`15:${n}: lineation changed the text`);
  }
  lines.push(`          { n: ${n}, text: ${JSON.stringify(text)} },`);
}

// Splice into the ex-15a passage only.
const PATH = "content/exodus.ts";
const file = readFileSync(PATH, "utf8");
const start = file.indexOf('    id: "ex-15a",');
if (start === -1) throw new Error("ex-15a not found");
const versesOpen = file.indexOf("        verses: [\n", start);
const versesClose = file.indexOf("\n        ],", versesOpen);
if (versesOpen === -1 || versesClose === -1)
  throw new Error("verses block not found");

const before = file.slice(0, versesOpen + "        verses: [\n".length);
const after = file.slice(versesClose);
writeFileSync(PATH, before + lines.join("\n") + after);

const broken = lines.filter((l) => l.includes("\\n")).length;
console.log(
  `Lineated Exodus 15:1-21: ${broken} of 21 verses carry line breaks.`,
);
