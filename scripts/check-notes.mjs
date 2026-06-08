#!/usr/bin/env node
// Finds commentary quotes that no longer match the BSB. Verse text IS the BSB now, so any
// curly-quoted phrase that is NOT a substring of the BSB must come from the commentary —
// either a stale scripture quote (fix) or a paraphrase/scholar phrase (leave). Reports
// candidates with their file/line for manual review. No writes.
import { readFileSync } from "node:fs";

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[‒-―]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

const bsb = norm(readFileSync("/tmp/bsb.txt", "utf8"));

for (const file of ["content/genesis.ts", "content/seed.ts"]) {
  const lines = readFileSync(file, "utf8").split("\n");
  console.log(`\n=== ${file} ===`);
  lines.forEach((line, i) => {
    // skip verse-text lines (those are BSB by definition)
    const isVerse =
      /\bn:\s*\d+,\s*text:/.test(line) || /^\s*n:\s*\d+,\s*$/.test(line);
    for (const m of line.matchAll(/“([^”]{4,})”/g)) {
      const phrase = m[1];
      const n = norm(phrase);
      // ignore very short or clearly non-scripture
      if (n.length < 6) continue;
      if (!bsb.includes(n) && !isVerse) {
        console.log(`  L${i + 1}: “${phrase}”`);
      }
    }
  });
}
