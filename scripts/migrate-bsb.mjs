#!/usr/bin/env node
// One-off: re-base every reading's scripture text on the Berean Standard Bible (BSB,
// public domain / CC0). Reads the authoritative bsb.txt ("Book C:V\ttext", one verse per
// line), walks content/genesis.ts and content/seed.ts, and replaces only the `text:`
// value of each verse object, preserving all surrounding formatting and comments.
//
// Run dry first (prints every change + any misses), then with --write.
import { readFileSync, writeFileSync } from "node:fs";

const BSB_PATH = "/tmp/bsb.txt";
const WRITE = process.argv.includes("--write");
const TARGETS = ["content/genesis.ts", "content/seed.ts"];

// --- load BSB into "Book C:V" -> text ---------------------------------------
const bsb = new Map();
for (const line of readFileSync(BSB_PATH, "utf8").split("\n")) {
  const tab = line.indexOf("\t");
  if (tab === -1) continue;
  const ref = line.slice(0, tab).trim();
  const text = line.slice(tab + 1).trim();
  if (ref && text) bsb.set(ref, text);
}

const BOOK_MAP = {
  genesis: "Genesis",
  psalms: "Psalm",
  leviticus: "Leviticus",
  romans: "Romans",
  proverbs: "Proverbs",
  revelation: "Revelation",
  job: "Job",
};

// Job's composite passages span chapters, so the verse number alone is ambiguous; map
// each (normalized ref -> verse number -> chapter) by hand.
const OVERRIDE = {
  "Job 1-2": { 8: 1, 9: 1, 11: 1, 12: 1, 21: 1 },
  "Job 4-5": { 7: 4, 8: 4, 17: 5 },
  "Job 38-42": { 2: 38, 4: 38, 31: 38, 8: 40, 3: 42 },
};

const norm = (s) => s.replace(/[‒-―]/g, "-"); // any dash -> hyphen

function chapterFromRef(ref) {
  const n = norm(ref);
  const colon = n.match(/(\d+):/); // "1:1-5", "Leviticus 19:9-19", "Genesis 25:1-18"
  if (colon) return { chapter: Number(colon[1]) };
  const range = n.match(/(\d+)\s*-\s*(\d+)/); // chapter range, no colon -> multi-chapter
  if (range) return { multi: true, ref: n };
  const single = n.match(/(\d+)/); // "Genesis 7", "Psalm 13", "Job 27"
  if (single) return { chapter: Number(single[1]) };
  return { chapter: null };
}

function postProcess(key, text) {
  if (key === "Psalm 13:1") {
    return text.replace(/^For the choirmaster\.\s*A Psalm of David\.\s*/, "");
  }
  return text;
}

const escapeForSingleQuote = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");

const TOKEN =
  /(bookId:\s*')([a-z0-9-]+)(')|(ref:\s*')([^']+)(')|(\bn:\s*(\d+),)(\s*text:\s*')((?:\\.|[^'\\])*)(')/g;

let totalChanges = 0;
const misses = [];

for (const file of TARGETS) {
  const src = readFileSync(file, "utf8");
  let book = null;
  let ctx = { chapter: null };
  const samples = [];
  let count = 0;

  const out = src.replace(
    TOKEN,
    (
      m,
      _b1,
      bookId,
      _b3,
      _r1,
      ref,
      _r3,
      _nPrefix,
      vnum,
      textPre,
      oldText,
      q,
    ) => {
      if (bookId !== undefined) {
        book = BOOK_MAP[bookId] ?? null;
        return m;
      }
      if (ref !== undefined) {
        ctx = chapterFromRef(ref);
        return m;
      }
      // verse
      const n = Number(vnum);
      let chapter = ctx.chapter;
      if (ctx.multi) chapter = OVERRIDE[ctx.ref]?.[n];
      if (!book || !chapter) {
        misses.push(`${file}: ${book} ?:${n} (ref ctx ${JSON.stringify(ctx)})`);
        return m;
      }
      const key = `${book} ${chapter}:${n}`;
      const fresh = bsb.get(key);
      if (!fresh) {
        misses.push(`${file}: missing BSB "${key}"`);
        return m;
      }
      const next = postProcess(key, fresh);
      count++;
      if (samples.length < 6)
        samples.push(`  ${key}\n    -> ${next.slice(0, 90)}`);
      return `${_nPrefix}${textPre}${escapeForSingleQuote(next)}${q}`;
    },
  );

  totalChanges += count;
  console.log(`\n${file}: ${count} verses re-based`);
  console.log(samples.join("\n"));
  if (WRITE) writeFileSync(file, out);
}

console.log(`\n${WRITE ? "WROTE" : "DRY RUN"} — ${totalChanges} verses total`);
if (misses.length) {
  console.log(`\n!! ${misses.length} unresolved:`);
  for (const x of misses) console.log(`  ${x}`);
} else {
  console.log("All verses resolved to a BSB reference.");
}
