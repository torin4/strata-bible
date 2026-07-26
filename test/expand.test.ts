import { getReading } from "@/lib/content";
import { expandReading } from "@/lib/expand";
import type { Reading, Verse } from "@/lib/types";
import { describe, expect, it } from "vitest";

// A minimal reading standing in for authored content, used to exercise a book whose readings
// don't exist yet. Exodus is registered in the lookup ahead of its content (the movement is
// authored in a later ticket), so this is the only way to prove the wiring now.
function stubReading(
  bookId: string,
  chapterIndex: number,
  verses: Verse[],
): Reading {
  return {
    id: `${bookId}-stub`,
    bookId,
    tier: "grounded",
    span: `stub ${chapterIndex}`,
    chapterIndex,
    title: "stub",
    passages: [
      {
        ref: `${chapterIndex}:${verses[0].n}–${verses[verses.length - 1].n}`,
        kind: "scene",
        form: "prose",
        title: "stub",
        verses,
      },
    ],
  };
}

// The passage carrying `ref` in an expanded reading.
function passage(readingId: string, ref: string) {
  const reading = getReading("genesis", readingId);
  if (!reading) throw new Error(`no reading ${readingId}`);
  const p = expandReading(reading).passages.find((p) => p.ref === ref);
  if (!p) throw new Error(`no passage ${ref} in ${readingId}`);
  return p;
}

const omitted = (verses: Verse[] = []) =>
  verses.filter((v) => v.omitted).map((v) => v.n);
const authored = (verses: Verse[] = []) =>
  verses.filter((v) => !v.omitted).map((v) => v.n);

describe("expandReading", () => {
  it("fills a gap inside a passage from the BSB, in order", () => {
    // Genesis 1:24–31 renders 24–28 then 31; the sitting skips 29–30.
    const p = passage("gen-1", "1:24–31");
    expect(omitted(p.verses)).toEqual([29, 30]);
    expect(p.verses?.map((v) => v.n)).toEqual([24, 25, 26, 27, 28, 29, 30, 31]);
    const v29 = p.verses?.find((v) => v.n === 29);
    expect(v29?.omitted).toBe(true);
    expect(v29?.text).toContain("every seed-bearing plant");
  });

  it("never reaches past the passage's own last verse", () => {
    // The gen-1 sabbath scene is 2:1–3, a contiguous run: nothing to fill, and it must not
    // pull the rest of chapter 2 (which belongs to the gen-2 sitting).
    const p = passage("gen-1", "2:1–3");
    expect(omitted(p.verses)).toEqual([]);
  });

  it("completes a grounded chapter between its first and last authored verse", () => {
    // Genesis 24 (selected) authors 2,3,4,12,14,15,19,67; the fill spans the gaps.
    const p = passage("gen-24", "Genesis 24 (selected)");
    expect(authored(p.verses)).toEqual([2, 3, 4, 12, 14, 15, 19, 67]);
    // Sampled: verses that were missing are now present and flagged omitted.
    for (const n of [5, 11, 13, 20, 40, 66]) {
      expect(p.verses?.find((v) => v.n === n)?.omitted, `v${n}`).toBe(true);
    }
    // Order is preserved and complete from 2 through 67.
    const nums = p.verses?.map((v) => v.n) ?? [];
    expect(nums[0]).toBe(2);
    expect(nums[nums.length - 1]).toBe(67);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
  });

  it("skips a passage whose verse numbers span two chapters (Genesis 48–49)", () => {
    // 48:14, then 49:7, 10, 33: numbers don't ascend, so a bare `n` can't be attributed to
    // a chapter. Leave it untouched rather than mis-fill.
    const p = passage("gen-48", "Genesis 48–49 (selected)");
    expect(omitted(p.verses)).toEqual([]);
  });

  it("excludes a chapter the sitting never draws from (Genesis 43)", () => {
    // gen-42 spans 42–44 but authors only 42 and 44; chapter 43 has no passage and stays out.
    const reading = getReading("genesis", "gen-42");
    if (!reading) throw new Error("no gen-42");
    const refs = expandReading(reading).passages.map((p) => p.ref);
    expect(refs.some((r) => r.startsWith("43"))).toBe(false);
  });

  it("leaves a book with no registered BSB lookup untouched", () => {
    const psalm = getReading("psalms", "ps-13");
    if (!psalm) throw new Error("no ps-13");
    expect(expandReading(psalm)).toBe(psalm);
  });

  it("fills from the book's own lookup, not Genesis's", () => {
    // Exodus 3:1–6 authoring 1, 2 and 6: the bush, with the gap filled from Exodus.
    const reading = stubReading("exodus", 3, [
      { n: 1, text: "Meanwhile, Moses was shepherding the flock" },
      { n: 2, text: "There the angel of the LORD appeared to him" },
      { n: 6, text: "Then He said, “I am the God of your father" },
    ]);
    const p = expandReading(reading).passages[0];
    expect(omitted(p.verses)).toEqual([3, 4, 5]);
    // The filled text is Exodus's, not the Genesis lookup's verse of the same number.
    expect(p.verses?.find((v) => v.n === 4)?.text).toContain(
      "God called out to him from within the bush",
    );
  });
});
