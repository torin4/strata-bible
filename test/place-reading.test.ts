import { placeReading } from "@/scripts/place-reading";
import { describe, expect, it } from "vitest";

// The authoring helper gets a test where the BSB generator deliberately did not, because it is
// not one-shot codegen: every future authoring generator calls it, and its bug class has already
// shipped twice. A stray `},];` terminator is valid TypeScript that no formatter touches, since
// content files are excluded from the formatter, so nothing but a test will catch it.

const file = `import type { Reading } from "@/lib/types";

export const BOOK: Reading[] = [
  {
    id: "bk-1",
    bookId: "book",
    tier: "sitting",
    span: "Book 1",
    chapterIndex: 1,
    title: "First",
    passages: [],
  },
  {
    id: "bk-5",
    bookId: "book",
    tier: "sitting",
    span: "Book 5",
    chapterIndex: 5,
    title: "Fifth",
    passages: [],
  },
];
`;

const block = (id: string, chapter: number) => `  {
    id: "${id}",
    bookId: "book",
    tier: "sitting",
    span: "Book ${chapter}",
    chapterIndex: ${chapter},
    title: "New",
    passages: [],
  },`;

const ids = (source: string) =>
  [...source.matchAll(/^ {4}id: "([^"]+)",$/gm)].map((m) => m[1]);

describe("placeReading", () => {
  it("places a reading in chapter order, not at the end", () => {
    // The whole point: authored out of sequence, ordered correctly anyway.
    const out = placeReading(file, block("bk-3", 3), "bk-3", 3);
    expect(ids(out)).toEqual(["bk-1", "bk-3", "bk-5"]);
  });

  it("places a later chapter last", () => {
    const out = placeReading(file, block("bk-9", 9), "bk-9", 9);
    expect(ids(out)).toEqual(["bk-1", "bk-5", "bk-9"]);
  });

  it("places an earlier chapter first", () => {
    const out = placeReading(file, block("bk-0", 0), "bk-0", 0);
    expect(ids(out)).toEqual(["bk-0", "bk-1", "bk-5"]);
  });

  it("leaves the array's closing line intact", () => {
    // The defect this helper exists to prevent: `},];` on one line.
    for (const [id, chapter] of [
      ["bk-3", 3],
      ["bk-9", 9],
    ] as Array<[string, number]>) {
      const out = placeReading(file, block(id, chapter), id, chapter);
      expect(out, `${id}`).not.toContain("},];");
      expect(out, `${id}`).toContain("\n];\n");
      // Exactly one array terminator, and the file still ends cleanly.
      expect(out.match(/^\];$/gm)).toHaveLength(1);
    }
  });

  it("keeps the rest of the file byte-identical around the insert", () => {
    const out = placeReading(file, block("bk-9", 9), "bk-9", 9);
    expect(out.startsWith('import type { Reading } from "@/lib/types";')).toBe(
      true,
    );
    expect(out.replace(`${block("bk-9", 9)}\n`, "")).toBe(file);
  });

  it("refuses to place a reading that is already present", () => {
    expect(() => placeReading(file, block("bk-5", 5), "bk-5", 5)).toThrow(
      /already present/,
    );
  });

  it("places a reading sharing a chapter after the ones already there", () => {
    // Two readings can share a chapter across a movement seam, as chapter 15 does in Exodus.
    const out = placeReading(file, block("bk-1b", 1), "bk-1b", 1);
    expect(ids(out)).toEqual(["bk-1", "bk-1b", "bk-5"]);
  });
});
