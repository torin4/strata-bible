// Content-density gate. STRATA grounds every passage in layers, but the apparatus
// (ground, meaning, lenses, symbols, misreading, tensions, turn, soft, ask, prayer) can
// outweigh the scripture it surrounds. This keeps that honest as the book grows.
//
//   - Ratio = apparatus words / scripture words, per passage.
//   - RATIO_TARGET is the figure the book actually reads at, NOT a distant failure ceiling.
//     Published Genesis measures about 1.56x overall. Exodus 1 was first written up against
//     a 2.5x ceiling: it passed every check and still read as wordy, because the reader was
//     getting half again as much commentary per line of scripture as the rest of the book
//     gives them. The gate now holds new work near the real norm instead of near the limit.
//   - Each held passage's ceiling is the HIGHER of RATIO_TARGET or its grandfathered baseline
//     (scripts/density-baseline.json). So the existing backlog cannot regress, and any NEW
//     passage is held to RATIO_TARGET, while CI stays green today. Trim a passage and re-run
//     with --update-baseline to ratchet its ceiling down.
//   - Books are held whether or not they are PUBLISHED. A book is authored long before it
//     ships, which is precisely when drift creeps in unnoticed. Only the genre proofs, which
//     are fixtures rather than books, stay informational.
//   - WARN  over RATIO_WARN: cleanup backlog, never fails CI.
//   - Tail-stack: Meaning followed by all three of turn + soft + ask — four beats circling
//     one insight. Reported as a count + list; never fails CI.
//
// Tune via env, e.g. `RATIO_TARGET=1.6 pnpm check-density`. Refresh the baseline:
// `pnpm check-density --update-baseline`.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { BOOKS } from "@/content";
import type { Passage } from "@/lib/types";

const RATIO_WARN = Number(process.env.RATIO_WARN ?? 1.5);
const RATIO_TARGET = Number(process.env.RATIO_TARGET ?? 1.8);
const TOLERANCE = 0.05; // rounding slack, so a baseline of 6.4 doesn't fail at 6.40001

// The books the gate holds: real books, whether or not they are published yet. Everything
// else in the catalog is a one-reading genre fixture proving the renderer, not authored work,
// and is reported for context only. Add a book id here when it starts being written.
const HELD_BOOKS = new Set(["genesis", "exodus"]);
const UPDATE = process.argv.includes("--update-baseline");
const BASELINE_PATH = fileURLToPath(
  new URL("./density-baseline.json", import.meta.url),
);

// Grandfathered ceilings: passageKey -> ratio, for passages currently over RATIO_TARGET.
function loadBaseline(): Record<string, number> {
  try {
    return JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  } catch {
    return {};
  }
}

const words = (s?: string): number => {
  if (!s) return 0;
  const clean = s
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return clean ? clean.split(" ").length : 0;
};

function scriptureWords(p: Passage): number {
  const verses = p.verses ?? p.statutes ?? p.sayings ?? [];
  return verses.reduce((n, v) => n + words(v.text), 0);
}

function apparatusWords(p: Passage): number {
  return (
    words(p.ground?.text) +
    words(p.meaning) +
    words(p.lenses?.theo) +
    words(p.lenses?.arch) +
    (p.symbols ?? []).reduce(
      (n, s) => n + words(s.image) + words(s.meant) + words(s.note),
      0,
    ) +
    words(p.misreading?.named) +
    words(p.misreading?.why) +
    (p.tensions ?? []).reduce(
      (n, t) => n + words(t.claim) + words(t.counter) + words(t.where),
      0,
    ) +
    words(p.addr?.text) +
    words(p.soft) +
    words(p.ask) +
    words(p.prayer?.text) +
    // Per-item annotation on a statute-cluster or saying-cluster: a chip on one law, a gloss on
    // another, all the way down the list. It is the bulk of what a reader reads on a page of
    // law, and until Exodus 19-24 no published passage carried any, so the omission never
    // showed. Counting it is what keeps the ratio honest for the most annotated pages in the
    // book, which are exactly the pages the 1.8x target was tightened to protect.
    Object.values(p.perItem ?? {}).reduce(
      (n, item) => n + words(item.addr?.text) + words(item.note),
      0,
    )
  );
}

// The redundant tail: Meaning present, then all three application beats.
function stacksTail(p: Passage): boolean {
  return (
    words(p.meaning) > 0 &&
    words(p.addr?.text) > 0 &&
    words(p.soft) > 0 &&
    words(p.ask) > 0
  );
}

interface Row {
  book: string;
  held: boolean;
  passage: string;
  scrip: number;
  appar: number;
  ratio: number;
  tail: boolean;
}

const rows: Row[] = [];
for (const book of BOOKS) {
  for (const reading of book.readings) {
    for (const p of reading.passages) {
      const scrip = scriptureWords(p);
      const appar = apparatusWords(p);
      rows.push({
        book: book.id,
        held: HELD_BOOKS.has(book.id),
        passage: `${reading.id} · ${p.label ? `${p.label} ` : ""}${p.title}`,
        scrip,
        appar,
        ratio: scrip ? appar / scrip : Number.POSITIVE_INFINITY,
        tail: stacksTail(p),
      });
    }
  }
}

const fmt = (r: Row) =>
  `  ${r.ratio.toFixed(1).padStart(5)}×  ${String(r.scrip).padStart(4)} scrip  ${String(r.appar).padStart(4)} appar  ${r.passage}`;

// --- Baseline handling -----------------------------------------------------------------
// Refresh mode: snapshot every held passage currently over RATIO_TARGET, then exit.
if (UPDATE) {
  const snapshot: Record<string, number> = {};
  for (const r of rows) {
    if (r.held && r.ratio > RATIO_TARGET) {
      snapshot[r.passage] = Math.round(r.ratio * 10) / 10;
    }
  }
  const ordered = Object.fromEntries(
    Object.entries(snapshot).sort((a, b) => b[1] - a[1]),
  );
  writeFileSync(BASELINE_PATH, `${JSON.stringify(ordered, null, 2)}\n`);
  console.log(
    `check-density: wrote baseline with ${Object.keys(ordered).length} grandfathered passage(s) to ${BASELINE_PATH}`,
  );
  process.exit(0);
}

const baseline = loadBaseline();

// A passage's ceiling is the higher of the global fail line or its grandfathered baseline.
const ceilingFor = (r: Row) => Math.max(RATIO_TARGET, baseline[r.passage] ?? 0);

// --- Failures: held passages over their (possibly grandfathered) ceiling ---------------
const failures = rows
  .filter((r) => r.held && r.ratio > ceilingFor(r) + TOLERANCE)
  .sort((a, b) => b.ratio - a.ratio);

// Grandfathered passages that have improved below their baseline: the baseline can ratchet.
const improved = rows.filter(
  (r) =>
    r.held && baseline[r.passage] && r.ratio < baseline[r.passage] - TOLERANCE,
);

// --- Warnings: held passages between the two ceilings -----------------------------------
const warnings = rows
  .filter((r) => r.held && r.ratio > RATIO_WARN && r.ratio <= RATIO_TARGET)
  .sort((a, b) => b.ratio - a.ratio);

// --- Tail-stack: held passages with all four beats -------------------------------------
const tailStacks = rows.filter((r) => r.held && r.tail);

const grandfathered = Object.keys(baseline).length;
console.log(
  `\ncheck-density: WARN over ${RATIO_WARN}×, FAIL over ${RATIO_TARGET}× (authored books; ${grandfathered} passage(s) grandfathered by baseline)\n`,
);

const heldRows = rows.filter((r) => r.held);
const pScrip = heldRows.reduce((n, r) => n + r.scrip, 0);
const pAppar = heldRows.reduce((n, r) => n + r.appar, 0);
const overFail = heldRows.filter((r) => r.ratio > RATIO_TARGET).length;
console.log(
  `authored: ${heldRows.length} passages · overall ${(pAppar / pScrip).toFixed(2)}× (${pAppar} apparatus / ${pScrip} scripture words)`,
);
console.log(
  `  over ${RATIO_WARN}×: ${warnings.length + overFail} · over ${RATIO_TARGET}×: ${overFail} · tail-stack (meaning+turn+soft+ask): ${tailStacks.length}\n`,
);

if (failures.length) {
  console.log(
    `FAIL — ${failures.length} passage(s) over ceiling (new, or worse than baseline):`,
  );
  for (const r of failures)
    console.log(`${fmt(r)}  (ceiling ${ceilingFor(r).toFixed(1)}×)`);
  console.log("");
}
if (improved.length) {
  console.log(
    `RATCHET — ${improved.length} grandfathered passage(s) now below baseline; run --update-baseline to lock the gain:`,
  );
  for (const r of improved)
    console.log(`${fmt(r)}  (baseline ${baseline[r.passage].toFixed(1)}×)`);
  console.log("");
}
if (warnings.length) {
  console.log(`WARN — ${warnings.length} passage(s) over ${RATIO_WARN}×:`);
  for (const r of warnings) console.log(fmt(r));
  console.log("");
}
if (tailStacks.length) {
  console.log(
    `TAIL — ${tailStacks.length} passage(s) stack meaning + turn + soft + ask (collapse to one closing move):`,
  );
  for (const r of tailStacks) console.log(`  ${r.passage}`);
  console.log("");
}

// Genre proofs, for context only.
const proofs = rows.filter((r) => !r.held);
if (proofs.length) {
  const byBook = new Map<string, Row[]>();
  for (const r of proofs) {
    const list = byBook.get(r.book) ?? [];
    list.push(r);
    byBook.set(r.book, list);
  }
  console.log("(genre proofs, informational — never fail CI)");
  for (const [book, rs] of byBook) {
    const s = rs.reduce((n, r) => n + r.scrip, 0);
    const a = rs.reduce((n, r) => n + r.appar, 0);
    console.log(
      `  ${book.padEnd(12)} ${(a / s).toFixed(1)}× over ${rs.length} passage(s)`,
    );
  }
  console.log("");
}

if (failures.length) {
  console.error(
    `check-density: FAILED — ${failures.length} authored passage(s) over ceiling. Trim the apparatus, or run --update-baseline if this is intentional.`,
  );
  process.exit(1);
}
console.log("check-density: passed.\n");
