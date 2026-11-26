// Generator: emit `content/psalms-text.ts`, the scripture of all 150 psalms, lineated and with
// each psalm's heading split from its first verse. Commentary never lives here; the authored
// readings in content/psalms.ts take their verses from this file.
//
// Two sources, with a strict division of labour:
//
//   WORDS come only from the Berean Standard Bible lookup, content/bsb-psalms.ts, which is the
//   same bereanbible.com/bsb.txt every other book uses. That lookup is flat (ADR 0001).
//
//   LINE BREAKS and HEADINGS come from the BSB's own USFM edition (ebible.org engbsb_usfm.zip,
//   public domain), where the translators set every psalm as poetry with \q1/\q2 lines and mark
//   each heading with \d. Its wording is an older revision of the BSB that differs in a handful
//   of verses ("hapless" for "helpless" at 10:10), so not one word is taken from it. Its line
//   positions are mapped onto the current BSB words by aligning the two word sequences.
//
// This amends ADR 0001 rather than contradicting it. The ADR rejected lineating at scale by
// encoding our own break rules in a generator, with no reader checking them. Here the breaks are
// the translators' own editorial lineation, so the judgement is theirs and is not mechanised by
// us. Spot-checked against Ecclesiastes 1, lineated by hand before this existed: the USFM breaks
// agree line for line, and are finer in a few places.
//
// Every verse is asserted, before anything is written: its words collapsed to single spaces must
// equal the BSB exactly, and for a verse 1 under a heading, heading + " " + verse must equal the
// BSB verse 1 exactly. A failure throws and nothing is emitted.
//
// Usage: npx tsx scripts/build-psalms-text.ts <path/to/20-PSAengbsb.usfm>
//   curl -sSL -o engbsb_usfm.zip https://ebible.org/Scriptures/engbsb_usfm.zip && unzip it
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_PSALMS } from "@/content/bsb-psalms";

const USFM = process.argv[2];
if (!USFM) {
  console.error(
    "Usage: npx tsx scripts/build-psalms-text.ts <20-PSAengbsb.usfm>",
  );
  process.exit(1);
}

// A line may break straight after an em dash where the BSB has no space ("the great lights—
// His loving devotion endures forever", Psalm 136). That break stands for no character at all,
// so it is removed rather than read as a space. scripts/validate-content.ts uses the same rule.
const flatten = (s: string) =>
  s.replace(/—\n/g, "—").replace(/\s+/g, " ").trim();
// Comparison key for one whitespace token: letters and digits only, case-folded, so that the
// alignment is about words and ignores the punctuation the two revisions disagree on.
const key = (t: string) => t.toLowerCase().replace(/[^a-z0-9]/g, "");

// ---- 1. Read the USFM into per-verse lines and per-psalm headings. ----------------------

const raw = readFileSync(USFM, "utf8")
  .replace(/\\f .*?\\f\*/gs, "") // footnotes
  .replace(/\\w ([^|\\]*)\|[^\\]*\\w\*/g, "$1"); // \w word|strong="H1234"\w*

type UVerse = string[]; // lines
const uverses = new Map<string, UVerse>();
const uheads = new Map<number, string>();
const acrostic = new Map<number, { before: number; letter: string }[]>();
const divisions: { chapter: number; label: string }[] = [];
// The BSB's own section title for each psalm ("Deliver Me, O LORD!"). Editorial, public domain,
// and used only as a working title until a psalm's reading is authored with its own.
const titles = new Map<number, string>();

let chapter = 0;
let verse = 0;
let newLine = true;
const marker = /\\([a-z]+[0-9]?)\s*/g;
let at = 0;
let tag = "";
const chunks: { tag: string; text: string }[] = [];
for (let m = marker.exec(raw); m; m = marker.exec(raw)) {
  chunks.push({ tag, text: raw.slice(at, m.index) });
  tag = m[1];
  at = m.index + m[0].length;
}
chunks.push({ tag, text: raw.slice(at) });

for (const { tag, text } of chunks) {
  const t = flatten(text);
  switch (tag) {
    case "c":
      chapter = Number.parseInt(t, 10);
      verse = 0;
      newLine = true;
      break;
    case "d":
      uheads.set(chapter, t);
      break;
    case "qa":
      acrostic.set(chapter, [
        ...(acrostic.get(chapter) ?? []),
        { before: verse + 1, letter: t },
      ]);
      break;
    case "ms1":
      divisions.push({ chapter, label: t });
      break;
    case "s1":
      if (!titles.has(chapter)) titles.set(chapter, t);
      break;
    case "q1":
    case "q2":
    case "qr":
    case "m":
    case "p":
    case "pmo":
    case "v": {
      let body = t;
      if (tag === "v") {
        const vm = body.match(/^(\d+)\s*(.*)$/s);
        if (!vm) throw new Error(`bad \\v in psalm ${chapter}: "${body}"`);
        verse = Number(vm[1]);
        body = vm[2];
        uverses.set(`${chapter}:${verse}`, []);
      } else newLine = true;
      if (!body || verse === 0) break;
      const lines = uverses.get(`${chapter}:${verse}`);
      if (!lines) break;
      if (newLine || lines.length === 0) lines.push(body);
      else lines[lines.length - 1] += ` ${body}`;
      newLine = false;
      break;
    }
    default:
      // \s1 section titles, \r cross references, \b stanza breaks, \mr, \mt1, \h, \toc, \id:
      // editorial apparatus that STRATA does not carry.
      break;
  }
}

// ---- 2. Map each verse's line breaks onto the BSB words. --------------------------------

// Longest common subsequence over comparison keys; returns usfm index -> bsb index for every
// matched word. Verses are short, so the quadratic table is trivially cheap.
function align(a: string[], b: string[]): Map<number, number> {
  const n = a.length;
  const m = b.length;
  const L = Array.from({ length: n + 1 }, () =>
    new Array<number>(m + 1).fill(0),
  );
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      L[i][j] =
        a[i] === b[j]
          ? L[i + 1][j + 1] + 1
          : Math.max(L[i + 1][j], L[i][j + 1]);
  const map = new Map<number, number>();
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) map.set(i++, j++);
    else if (L[i + 1][j] >= L[i][j + 1]) i++;
    else j++;
  }
  return map;
}

const revised: string[] = []; // verses where the two revisions differ in wording
const headDrift: string[] = []; // headings worded differently between the revisions

function lineate(ref: string, body: string, lines: string[]): string {
  // BSB tokens, each with the separator that precedes it: a space, or nothing where a word
  // follows an em dash directly. Splitting there lets a line break land after the dash.
  const btok: string[] = [];
  const bsep: string[] = [];
  for (const word of body.split(" ")) {
    const parts = word.split(/(?<=—)(?=\S)/);
    parts.forEach((part, k) => {
      bsep.push(btok.length === 0 ? "" : k === 0 ? " " : "");
      btok.push(part);
    });
  }
  const utok: string[] = [];
  const starts: number[] = []; // usfm word index at which each line after the first begins
  lines.forEach((line, li) => {
    if (li > 0) starts.push(utok.length);
    utok.push(
      ...line
        .split(/\s+/)
        .filter(Boolean)
        .flatMap((w) => w.split(/(?<=—)(?=\S)/)),
    );
  });
  const bk = btok.map(key);
  const uk = utok.map(key);
  const map = align(uk, bk);
  if (map.size !== uk.length || uk.length !== bk.length) revised.push(ref);
  // A line that starts at usfm word i starts in the BSB right after the last word before i
  // that both revisions share. Where a phrase was reworded, that keeps the break at its edge.
  const breaks = new Set<number>();
  for (const i of starts) {
    let p = i - 1;
    while (p >= 0 && !map.has(p)) p--;
    const j = p < 0 ? 0 : (map.get(p) as number) + 1;
    if (j > 0 && j < btok.length) breaks.add(j);
  }
  return btok.map((w, j) => (breaks.has(j) ? "\n" : bsep[j]) + w).join("");
}

interface Out {
  title: string;
  superscription?: string;
  verses: { n: number; text: string }[];
}
const out = new Map<number, Out>();

for (const [ref, official] of Object.entries(BSB_PSALMS)) {
  const [c, v] = ref.split(":").map(Number);
  const lines = uverses.get(ref);
  if (!lines?.length) throw new Error(`no USFM lines for Psalm ${ref}`);
  let body = flatten(official);
  let superscription: string | undefined;
  if (v === 1 && uheads.has(c)) {
    // The flat BSB glues the heading onto verse 1. The poem starts where the USFM's verse 1
    // starts: find its first four words in the BSB string, past the opening word.
    const first = flatten(lines.join(" "))
      .split(" ")
      .slice(0, 4)
      .map(key)
      .join(" ");
    const toks = body.split(" ");
    let split = -1;
    for (let k = 1; k < toks.length; k++) {
      if (
        toks
          .slice(k, k + 4)
          .map(key)
          .join(" ") === first
      ) {
        split = k;
        break;
      }
    }
    if (split < 0)
      throw new Error(`cannot split the heading from Psalm ${ref}`);
    superscription = toks.slice(0, split).join(" ");
    body = toks.slice(split).join(" ");
    const uh = uheads.get(c) as string;
    if (
      uh.split(/\s+/).map(key).join(" ") !==
      superscription.split(" ").map(key).join(" ")
    )
      headDrift.push(`${c}: BSB "${superscription}" | USFM "${uh}"`);
  }
  const text = lineate(ref, body, lines);
  // The gate: the words are the BSB's, and nothing else.
  if (flatten(text) !== body)
    throw new Error(`Psalm ${ref}: lineated words drifted from the BSB`);
  if (flatten(`${superscription ?? ""} ${text}`) !== flatten(official))
    throw new Error(`Psalm ${ref}: heading + verse is not the BSB verse`);
  const title = titles.get(c);
  if (!title) throw new Error(`no section title for Psalm ${c}`);
  const entry = out.get(c) ?? { title, verses: [] };
  if (superscription) entry.superscription = superscription;
  entry.verses.push({ n: v, text });
  out.set(c, entry);
}

if (out.size !== 150) throw new Error(`expected 150 psalms, got ${out.size}`);
for (const [c, e] of out) e.verses.sort((a, b) => a.n - b.n);

// ---- 3. Emit. ----------------------------------------------------------------------------

const q = (s: string) => JSON.stringify(s);
const body = [...out.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([c, e]) => {
    const head = e.superscription
      ? `\n    superscription: ${q(e.superscription)},`
      : "";
    const vs = e.verses
      .map((v) => `      { n: ${v.n}, text: ${q(v.text)} },`)
      .join("\n");
    return `  ${c}: {\n    title: ${q(e.title)},${head}\n    verses: [\n${vs}\n    ],\n  },`;
  })
  .join("\n");

const acro = [...(acrostic.get(119) ?? [])]
  .map((a) => `  { before: ${a.before}, letter: ${q(a.letter)} },`)
  .join("\n");

const file = `// GENERATED by scripts/build-psalms-text.ts — do not edit by hand.
// The Berean Standard Bible (BSB) text of all 150 psalms, public domain / CC0. Words are the
// flat lookup in content/bsb-psalms.ts, unchanged; line breaks and the split of each heading
// from verse 1 follow the BSB's own USFM edition. Every verse is asserted against the BSB by the
// generator, and again by scripts/validate-content.ts.
import type { Verse } from "@/lib/types";

export interface PsalmText {
  title: string; // the BSB's section title, a working title until the reading is authored
  superscription?: string; // the psalm's heading, which the flat BSB holds as the start of verse 1
  verses: Verse[];
}

export const PSALMS_TEXT: Record<number, PsalmText> = {
${body}
};

// The Hebrew letter that heads each eight-verse stanza of Psalm 119, an acrostic: in the
// Hebrew every line of a stanza begins with its letter. \`before\` is the stanza's first verse.
export const PSALM_119_LETTERS: { before: number; letter: string }[] = [
${acro}
];

// The five books of the Psalter, each opening at the psalm given.
export const PSALTER_DIVISIONS: { chapter: number; label: string }[] = ${JSON.stringify(divisions)};
`;

writeFileSync("content/psalms-text.ts", file);
console.log(
  `Wrote content/psalms-text.ts: ${out.size} psalms, ${Object.keys(BSB_PSALMS).length} verses, ` +
    `${[...out.values()].filter((e) => e.superscription).length} headings.`,
);
console.log(
  `Revisions differ in wording at ${revised.length} verse(s), breaks mapped by alignment:`,
);
console.log(`  ${revised.join(", ")}`);
if (headDrift.length) {
  console.log("Headings worded differently between revisions (BSB kept):");
  for (const h of headDrift) console.log(`  ${h}`);
}
