// Place an authored reading into a book's reading array, in chapter order.
//
// Every authoring generator used to hand-roll this, and the same defect shipped twice: the
// array's closing line collapsed to a stray `},];` because the insert sliced around the newline
// instead of before the closing line. It is valid TypeScript, so nothing failed, and content
// files are excluded from the formatter, so nothing tidied it. Both times it was caught by eye.
//
// The second hazard is ordering. Array order IS authored reading order and drives adjacency
// (see lib/content.ts), so a generator that blindly appends produces a wrong-order book the
// moment two readings are authored out of sequence. Placing by chapter index removes that,
// which is what makes two independent authoring tickets safe to run in either order.
//
// `placeReading` is pure so it can be tested. `placeReadingInFile` is the thin I/O wrapper
// generators actually call.
import { readFileSync, writeFileSync } from "node:fs";

interface Slot {
  id: string;
  chapterIndex: number;
  start: number;
}

// Every reading in a content file opens at four-space indent with its id. Movements sit at two
// spaces and per-item annotations at ten, so this indent belongs to readings alone.
function slots(file: string): Slot[] {
  const found: Slot[] = [];
  const idLine = /^ {4}id: "([^"]+)",$/gm;
  let match = idLine.exec(file);
  while (match !== null) {
    const openedAt = file.lastIndexOf("\n  {\n", match.index);
    if (openedAt === -1) {
      throw new Error(`could not find the block opening for ${match[1]}`);
    }
    const chapter = file
      .slice(match.index, match.index + 400)
      .match(/^ {4}chapterIndex: (\d+),$/m);
    if (!chapter) {
      throw new Error(`no chapterIndex found for ${match[1]}`);
    }
    found.push({
      id: match[1],
      chapterIndex: Number(chapter[1]),
      start: openedAt + 1,
    });
    match = idLine.exec(file);
  }
  return found;
}

/**
 * Return `file` with `block` placed among its readings, ordered by chapter.
 *
 * The block is inserted before the first reading of a later chapter, or immediately before the
 * line closing the array when there is none. The closing line is never sliced into.
 *
 * Throws if a reading with this id is already present, so re-running a generator cannot
 * silently duplicate content.
 */
export function placeReading(
  file: string,
  block: string,
  id: string,
  chapterIndex: number,
): string {
  if (file.includes(`    id: "${id}",`)) {
    throw new Error(`${id} is already present`);
  }
  const trimmed = block.replace(/\n+$/, "");

  const later = slots(file).find((slot) => slot.chapterIndex > chapterIndex);
  if (later) {
    return `${file.slice(0, later.start)}${trimmed}\n${file.slice(later.start)}`;
  }

  // No later chapter: go in last, immediately before the line that closes the array.
  const closing = file.indexOf("\n];\n");
  if (closing === -1) {
    throw new Error("could not find the line closing the reading array");
  }
  return `${file.slice(0, closing)}\n${trimmed}${file.slice(closing)}`;
}

/** Read, place, write. What a generator calls once it has built its block. */
export function placeReadingInFile(
  path: string,
  block: string,
  id: string,
  chapterIndex: number,
): void {
  writeFileSync(
    path,
    placeReading(readFileSync(path, "utf8"), block, id, chapterIndex),
  );
}
