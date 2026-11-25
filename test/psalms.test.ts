import { BSB_PSALMS } from "@/content/bsb-psalms";
import { PSALMS } from "@/content/psalms";
import { PSALMS_TEXT } from "@/content/psalms-text";
import { getAdjacent, getReading } from "@/lib/content";
import { describe, expect, it } from "vitest";

const passages = PSALMS.flatMap((r) => r.passages);
const chapterOf = (ref: string) => Number(ref.split(":")[0]);

describe("Psalms", () => {
  it("holds every BSB verse of the Psalter exactly once", () => {
    const seen = new Set<string>();
    for (const p of passages)
      for (const v of p.verses ?? []) {
        const key = `${chapterOf(p.ref)}:${v.n}`;
        expect(seen.has(key), key).toBe(false);
        seen.add(key);
      }
    expect(seen.size).toBe(Object.keys(BSB_PSALMS).length);
    expect(seen.size).toBe(2461);
  });

  it("lineates the poetry and splits each heading from verse 1", () => {
    const ps3 = getReading("psalms", "ps-3")?.passages[0];
    expect(ps3?.superscription).toBe(
      "A Psalm of David, when he fled from his son Absalom.",
    );
    expect(ps3?.verses?.[0].text).toBe(
      "O LORD, how my foes have increased!\nHow many rise up against me!",
    );
    // Selah stands on its own line.
    expect(ps3?.verses?.[1].text.split("\n").at(-1)).toBe("Selah");
    expect(
      Object.values(PSALMS_TEXT).filter((p) => p.superscription),
    ).toHaveLength(116);
  });

  it("breaks Psalm 136's refrain after the em dash without adding a space", () => {
    const v7 = PSALMS_TEXT[136].verses.find((v) => v.n === 7);
    expect(v7?.text).toBe(
      "He made the great lights—\nHis loving devotion endures forever.",
    );
    expect(BSB_PSALMS["136:7"]).toBe(
      "He made the great lights—His loving devotion endures forever.",
    );
  });

  it("reads 9–10 and 42–43 as single poems that cross a chapter", () => {
    for (const [id, a, b] of [
      ["ps-9", 9, 10],
      ["ps-42", 42, 43],
    ] as const) {
      const r = getReading("psalms", id);
      expect(r?.crossesChapters).toBe(true);
      expect(r?.passages.map((p) => chapterOf(p.ref))).toEqual([a, b]);
    }
    expect(getReading("psalms", "ps-10")).toBeUndefined();
    expect(getReading("psalms", "ps-43")).toBeUndefined();
  });

  it("sets Psalm 119 as 22 eight-verse stanzas over four readings", () => {
    const ids = ["ps-119a", "ps-119b", "ps-119c", "ps-119d"];
    const stanzas = ids.flatMap(
      (id) => getReading("psalms", id)?.passages ?? [],
    );
    expect(stanzas).toHaveLength(22);
    for (const s of stanzas) expect(s.verses).toHaveLength(8);
    expect(stanzas[0].title).toBe("Aleph");
    expect(stanzas[21].title).toBe("Taw");
    expect(getAdjacent("psalms", "ps-119a").next?.id).toBe("ps-119b");
  });

  it("authors all of Book I, with the spec's twelve sittings", () => {
    const bookOne = PSALMS.filter((r) => r.chapterIndex <= 41);
    expect(bookOne).toHaveLength(40);
    expect(bookOne.filter((r) => r.tier === "plain")).toEqual([]);
    expect(
      bookOne.filter((r) => r.tier === "sitting").map((r) => r.chapterIndex),
    ).toEqual([1, 2, 8, 13, 19, 22, 23, 27, 29, 30, 32, 39]);
    // A grounded psalm carries a ground note and a title of its own, not the BSB's.
    for (const r of bookOne) {
      expect(
        r.passages.every((p) => p.ground?.text),
        r.id,
      ).toBe(true);
      expect(r.title, r.id).not.toBe(PSALMS_TEXT[r.chapterIndex].title);
    }
  });

  it("places every reading in one of the Psalter's five books", () => {
    expect(PSALMS[0].id).toBe("ps-1");
    expect(PSALMS[PSALMS.length - 1].id).toBe("ps-150");
    expect(PSALMS).toHaveLength(151); // 150 psalms, two pairs joined, 119 in four
  });
});
