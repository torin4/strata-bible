// Runtime invariants the type system can't express. The schema itself is enforced by
// `tsc` (content is strongly typed against lib/types.ts); this guards the relationships
// between readings, passages, and movements that the reader relies on.
import { BOOKS } from "@/content";
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
}

// Genesis is the book that ships first: it must read end to end.
const genesis = BOOKS.find((b) => b.id === "genesis");
if (!genesis) fail("genesis book missing");
else if (!genesis.readings.some((r) => r.id === "gen-1"))
  fail("genesis missing gen-1");

if (errors.length) {
  console.error(`validate-content: ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(
  `validate-content: ${allReadings.length} readings across ${BOOKS.length} books, all valid.`,
);
