import { getReading } from "@/lib/content";
import { expandReading } from "@/lib/expand";
import type { Verse } from "@/lib/types";
import { describe, expect, it } from "vitest";

// The passage carrying `ref` in an expanded reading.
function passageIn(bookId: string, readingId: string, ref: string) {
  const reading = getReading(bookId, readingId);
  if (!reading) throw new Error(`no reading ${readingId}`);
  const p = expandReading(reading).passages.find((p) => p.ref === ref);
  if (!p) throw new Error(`no passage ${ref} in ${readingId}`);
  return p;
}
const passage = (readingId: string, ref: string) =>
  passageIn("genesis", readingId, ref);

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
    // ex-7 authors 7:14, 17, 20–21, 24–25; the gaps come from the Exodus lookup.
    const p = passageIn("exodus", "ex-7", "7:14–25");
    expect(authored(p.verses)).toEqual([14, 17, 20, 21, 24, 25]);
    expect(omitted(p.verses)).toEqual([15, 16, 18, 19, 22, 23]);
    // Exodus 7:18, not Genesis 7:18 (which is the flood rising).
    expect(p.verses?.find((v) => v.n === 18)?.text).toContain(
      "The fish in the Nile will die",
    );
  });

  it("attributes each plague passage to its own chapter", () => {
    // The reading spans Exodus 7–11. One passage per chapter is what keeps the reveal working:
    // a single passage running 7:14 to 11:10 would have non-ascending numbers and fill nothing.
    const reading = getReading("exodus", "ex-7");
    if (!reading) throw new Error("no ex-7");
    const expanded = expandReading(reading);
    expect(expanded.passages).toHaveLength(5);
    for (const p of expanded.passages) {
      expect(
        omitted(p.verses).length,
        `${p.ref} reveals nothing`,
      ).toBeGreaterThan(0);
    }
    // Chapter 8's fill is chapter 8's text, not chapter 7's.
    const eight = expanded.passages.find((p) => p.ref === "8:1–19");
    expect(eight?.verses?.find((v) => v.n === 3)?.text).toContain("frogs");
  });

  it("leaves a whole-chapter Exodus reading with nothing to reveal", () => {
    // ex-5 authors all 23 verses of Exodus 5: a contiguous run, so the fill has no gap to close.
    const p = passageIn("exodus", "ex-5", "Exodus 5");
    expect(omitted(p.verses)).toEqual([]);
    expect(authored(p.verses)).toHaveLength(23);
  });

  it("an authored sitting's scenes each fill within their own verse range", () => {
    // ex-1 is split into three scenes over one chapter. Each is a contiguous run, so none of
    // them may reach into a neighbouring scene's verses to fill a gap it does not have.
    const reading = getReading("exodus", "ex-1");
    if (!reading) throw new Error("no ex-1");
    const expanded = expandReading(reading);
    expect(expanded.passages.map((p) => p.ref)).toEqual([
      "1:1–7",
      "1:8–14",
      "1:15–22",
    ]);
    for (const p of expanded.passages) {
      expect(omitted(p.verses), p.ref).toEqual([]);
    }
  });
});
