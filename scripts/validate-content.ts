// Runtime invariants the type system can't express. The schema itself is enforced by
// `tsc` (content is strongly typed against lib/types.ts); this guards the relationships
// between readings, passages, and movements that the reader relies on.
import { BOOKS } from "@/content";
import { READING_THEMES } from "@/content/themes";
import { ascending, bsbForBook, chapterOf } from "@/lib/expand";
import type { Passage } from "@/lib/types";

const errors: string[] = [];
const fail = (message: string) => errors.push(message);

const allReadings = BOOKS.flatMap((book) => book.readings);

// Reading ids must be globally unique — routes and adjacency key off them.
const seen = new Set<string>();
for (const reading of allReadings) {
  if (seen.has(reading.id)) fail(`duplicate reading id: ${reading.id}`);
  seen.add(reading.id);
  if (reading.passages.length === 0) fail(`${reading.id}: no passages`);
}

// Each passage must carry the verses/items its form renders from.
function passageOk(p: Passage): string | null {
  if (p.form === "list") {
    return p.statutes?.length || p.sayings?.length
      ? null
      : "list form with no statutes or sayings";
  }
  return p.verses?.length ? null : `${p.form} form with no verses`;
}

for (const reading of allReadings) {
  for (const passage of reading.passages) {
    const problem = passageOk(passage);
    if (problem) fail(`${reading.id} · ${passage.ref}: ${problem}`);
  }
}

// Every movement's chapter range must actually contain readings, and a capstone-bearing
// movement must have a resolvable last reading (where its look-back renders).
for (const book of BOOKS) {
  for (const movement of book.movements) {
    const inRange = book.readings.filter(
      (r) =>
        r.chapterIndex >= movement.chapterStart &&
        r.chapterIndex <= movement.chapterEnd,
    );
    if (inRange.length === 0) {
      fail(
        `${book.id}/${movement.id}: chapter range ${movement.chapterStart}-${movement.chapterEnd} has no readings`,
      );
    }
  }

  // A doorway must lead somewhere real: nextMovementId resolves to a movement in the same
  // book (the next-movement overlay links off it, so a dangling id is a dead doorway).
  const movementIds = new Set(book.movements.map((m) => m.id));
  for (const movement of book.movements) {
    const next = movement.doorway?.nextMovementId;
    if (next && !movementIds.has(next)) {
      fail(
        `${book.id}/${movement.id}: doorway points at unknown movement "${next}"`,
      );
    }
  }
}

// The find index (content/themes.ts) must point at sittings that actually exist; theme
// keys themselves are already enforced by the ThemeKey union at compile time.
for (const id of Object.keys(READING_THEMES)) {
  const reading = allReadings.find((r) => r.id === id);
  if (!reading) fail(`READING_THEMES: unknown reading id "${id}"`);
  else if (reading.tier !== "sitting")
    fail(`READING_THEMES: "${id}" is tier ${reading.tier}, expected a sitting`);
}

// A sitting with no theme entry is invisible to /find. This has bitten before, so it is a
// hard failure: a new sitting must be tagged in content/themes.ts in the same change.
for (const reading of allReadings) {
  if (reading.tier === "sitting" && !READING_THEMES[reading.id])
    fail(
      `"${reading.id}" is a sitting but is not tagged in content/themes.ts, so it would be absent from /find`,
    );
}

// ---------------------------------------------------------------------------------------
// Scripture integrity. Every authored verse must be the Berean Standard Bible.
//
// STRATA must never ship a copyrighted translation, and the realistic way that rule breaks is
// not deliberate copying but a verse typed from memory that drifts toward another translation's
// phrasing, buried in a content file nobody proofreads line by line. This makes that a build
// failure rather than something a reader discovers.
//
// A verse may be TRIMMED: authored text that is a contiguous substring of the BSB verse is a
// deliberate editorial choice (Genesis 50:17 drops an opening clause). Those are reported, not
// failed. Text the BSB does not contain at all is a failure, which is the case that matters.
//
// A passage whose verse numbers don't ascend spans two chapters under one ref, so a bare verse
// number can't be attributed to a chapter. Those are unverifiable and are reported as such,
// using the same rule the reader's full-text fill uses, so the two can never disagree.
//
// Comparison collapses whitespace. Authored poetry carries line breaks at the parallelism where
// the BSB lookup holds one flat string (see ADR 0001), so a lineated verse is identical in every
// word and different in its whitespace. Collapsing makes lineation invisible here while leaving
// the words, and their order, fully enforced.
// ---------------------------------------------------------------------------------------

// Whitespace-insensitive comparison text: line breaks and runs of spaces become single spaces.
const flatten = (s: string) => s.replace(/\s+/g, " ").trim();

const abridged: string[] = [];
const unverifiable: string[] = [];
let versesChecked = 0;

for (const book of BOOKS) {
  const bsb = bsbForBook(book.id);
  if (!bsb) continue;
  for (const reading of book.readings) {
    for (const passage of reading.passages) {
      const verses =
        passage.verses ?? passage.statutes ?? passage.sayings ?? [];
      const chapter = chapterOf(passage.ref, reading.chapterIndex);
      if (!ascending(verses) || chapter === null) {
        if (verses.length)
          unverifiable.push(
            `${reading.id} · ${passage.ref} (${verses.length} verses span more than one chapter)`,
          );
        continue;
      }
      for (const verse of verses) {
        // Omitted verses are filled from this same lookup at render time, never authored.
        if (verse.omitted) continue;
        versesChecked++;
        const official = bsb[`${chapter}:${verse.n}`];
        if (official === undefined) {
          fail(
            `${reading.id} · ${passage.ref} v${verse.n}: no BSB verse at ${book.id} ${chapter}:${verse.n}`,
          );
          continue;
        }
        const want = flatten(official);
        const got = flatten(verse.text);
        if (want === got) continue;
        if (want.includes(got)) {
          abridged.push(`${reading.id} · ${passage.ref} v${verse.n}`);
          continue;
        }
        fail(
          `${reading.id} · ${passage.ref} v${verse.n}: authored text is not the BSB at ${book.id} ${chapter}:${verse.n}`,
        );
      }
    }
  }
}

// Genesis is the book that ships first: it must read end to end.
const genesis = BOOKS.find((b) => b.id === "genesis");
if (!genesis) fail("genesis book missing");
else if (!genesis.readings.some((r) => r.id === "gen-1"))
  fail("genesis missing gen-1");

// Scripture report: informational, never a failure. Both lists name places where a verse could
// not be proven identical to the BSB, so neither can hide.
if (abridged.length) {
  console.log(
    `validate-content: ${abridged.length} authored verse(s) trimmed from the BSB (deliberate edits, not failures):`,
  );
  for (const a of abridged) console.log(`  ${a}`);
}
if (unverifiable.length) {
  console.log(
    `validate-content: ${unverifiable.length} passage(s) unverifiable against the BSB (verse numbers cross a chapter under one ref):`,
  );
  for (const u of unverifiable) console.log(`  ${u}`);
}

if (errors.length) {
  console.error(`validate-content: ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(
  `validate-content: ${allReadings.length} readings across ${BOOKS.length} books, all valid.`,
);
console.log(
  `validate-content: ${versesChecked} authored verse(s) verified against the Berean Standard Bible.`,
);
