#!/usr/bin/env node
// Enforces hard rule 3: design tokens only, no literal color anywhere in components.
// Colors must come through the token-backed Tailwind classes (text-gold-bright,
// border-lapis/40, bg-gold-soft, ...). Non-color arbitrary values (text-[18.5px],
// tracking-[.22em]) are allowed — they carry the proof's exact typography and touch
// no color. Numeric HTML entities (&#10231;) are not color literals and are ignored.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["app", "components"];
const EXT = /\.(tsx?|jsx?)$/;

// A literal hex color not preceded by `&` (which would be an HTML numeric entity).
const HEX = /(?<!&)#[0-9a-fA-F]{3,8}\b/;
const FUNC = /\b(?:rgba?|hsla?|hwb|lab|lch|oklch|oklab)\(/;
const ARBITRARY_COLOR = /-\[(?:#|rgb|hsl|hwb|lab|lch|oklch|oklab)/i;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (EXT.test(entry)) out.push(full);
  }
  return out;
}

const violations = [];
for (const root of ROOTS) {
  let files;
  try {
    files = walk(root);
  } catch {
    continue;
  }
  for (const file of files) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const rule of [HEX, FUNC, ARBITRARY_COLOR]) {
        const match = rule.exec(line);
        if (match) {
          violations.push(
            `${file}:${i + 1}  ${match[0].trim()}  ->  ${line.trim()}`,
          );
          break;
        }
      }
    });
  }
}

if (violations.length) {
  console.error(
    "Literal colors found in components (use design tokens instead):\n",
  );
  for (const v of violations) console.error(`  ${v}`);
  process.exit(1);
}
console.log("tailwind-arbitrary: no literal colors in components.");
