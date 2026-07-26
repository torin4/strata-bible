import { PUBLISHED_BOOKS } from "@/content";
import {
  getAdjacent,
  getBook,
  getClosingMovement,
  getMovement,
  getReading,
} from "@/lib/content";
import { describe, expect, it } from "vitest";

describe("content lib", () => {
  it("resolves Genesis 1", () => {
    expect(getReading("genesis", "gen-1")?.title).toBe("Creation");
  });

  it("adjacency follows span order within a book, not chapter math", () => {
    const { prev, next } = getAdjacent("genesis", "gen-2");
    expect(prev?.id).toBe("gen-1");
    expect(next?.id).toBe("gen-3");
  });

  it("the first reading has no previous", () => {
    expect(getAdjacent("genesis", "gen-1").prev).toBeUndefined();
  });

  it("does not navigate across book boundaries", () => {
    // The genuinely last reading in the book has no next, whatever it is as the
    // content grows; navigation never spills into another book.
    const readings = getBook("genesis")?.readings ?? [];
    const last = readings[readings.length - 1];
    expect(last).toBeDefined();
    expect(getAdjacent("genesis", last.id).next).toBeUndefined();
  });

  it("exposes one reading per genre fixture", () => {
    const fixtures: Array<[string, string]> = [
      ["psalms", "ps-13"],
      ["leviticus", "lev-19"],
      ["romans", "rom-7"],
      ["proverbs", "prov-10"],
      ["revelation", "rev-13"],
      ["job", "job-1"],
    ];
    for (const [bookId, readingId] of fixtures) {
      expect(
        getReading(bookId, readingId),
        `${bookId}/${readingId}`,
      ).toBeDefined();
    }
  });

  it("Job's reading closes its composite movement, surfacing the capstone", () => {
    const job = getReading("job", "job-1");
    expect(job).toBeDefined();
    const movement = job && getClosingMovement("job", job);
    expect(movement?.capstone?.title).toBe("No answer, and somehow enough");
  });

  it("a mid-movement Genesis reading does not surface a capstone", () => {
    const reading = getReading("genesis", "gen-3");
    expect(reading && getClosingMovement("genesis", reading)).toBeUndefined();
  });

  it("Exodus movement 1 holds its eleven readings, in authored order", () => {
    const readings = getBook("exodus")?.readings ?? [];
    expect(readings.map((r) => r.id)).toEqual([
      "ex-1",
      "ex-2",
      "ex-3",
      "ex-4",
      "ex-5",
      "ex-6",
      "ex-7",
      "ex-12",
      "ex-13",
      "ex-14",
      "ex-15a",
    ]);
  });

  it("Exodus adjacency runs the movement end to end without leaving the book", () => {
    // The plague reading spans five chapters, so next/prev must follow authored order rather
    // than chapter arithmetic: ex-7 is followed by ex-12, not by a chapter 8.
    expect(getAdjacent("exodus", "ex-7").next?.id).toBe("ex-12");
    expect(getAdjacent("exodus", "ex-12").prev?.id).toBe("ex-7");
    expect(getAdjacent("exodus", "ex-1").prev).toBeUndefined();
    expect(getAdjacent("exodus", "ex-15a").next).toBeUndefined();
  });

  it("every Exodus reading belongs to the one declared movement", () => {
    const book = getBook("exodus");
    expect(book?.movements.map((m) => m.id)).toEqual(["out-of-egypt"]);
    for (const reading of book?.readings ?? []) {
      expect(getMovement("exodus", reading)?.id, reading.id).toBe(
        "out-of-egypt",
      );
    }
  });

  it("Exodus movement 1 carries no doorway while movement 2 does not exist", () => {
    const movement = getBook("exodus")?.movements[0];
    expect(movement?.doorway).toBeUndefined();
  });

  it("the movement capstone closes on the Song, and nowhere else", () => {
    const song = getReading("exodus", "ex-15a");
    expect(song && getClosingMovement("exodus", song)?.capstone?.title).toBe(
      "The rescue, and the price on it",
    );
    // It is a movement look-back, not the book's. Mid-movement readings must not surface it,
    // and Exodus carries no book capstone until all forty chapters are authored.
    const mid = getReading("exodus", "ex-7");
    expect(mid && getClosingMovement("exodus", mid)).toBeUndefined();
    expect(getBook("exodus")?.capstone).toBeUndefined();
  });

  it("the capstone carries a tension that only surfaces across the whole movement", () => {
    const capstone = getBook("exodus")?.movements[0].capstone;
    expect(capstone?.tensions).toHaveLength(1);
    expect(capstone?.tensions?.[0].where).toContain("Amos 9:7");
  });

  it("Exodus is unpublished until the whole book is authored", () => {
    expect(getBook("exodus")?.published).toBeFalsy();
    expect(PUBLISHED_BOOKS.map((b) => b.id)).toEqual(["genesis"]);
  });

  it("an Exodus reading still awaiting authorship is grounded and empty", () => {
    // A reading may only become a sitting in the change that also authors its layers and tags
    // it in content/themes.ts, or the content validator fails. Everything not yet authored
    // stays grounded, with its middles left for the companion.
    const pending = (getBook("exodus")?.readings ?? []).filter(
      (r) => r.tier === "grounded",
    );
    expect(pending.length).toBeGreaterThan(0);
    for (const reading of pending) {
      for (const p of reading.passages) {
        expect(p.meaning, `${reading.id} ${p.ref}`).toBeUndefined();
        expect(p.addr, `${reading.id} ${p.ref}`).toBeUndefined();
        expect(p.ask, `${reading.id} ${p.ref}`).toBeUndefined();
      }
    }
  });

  it("the Song is set as lineated poetry, whole, with its turn marked", () => {
    // STRATA's first published poem. ADR 0001: authored poetry breaks at the parallelism while
    // the BSB lookup stays flat, and a poem is authored whole so a flat filled line can never
    // land beside a broken one.
    const reading = getReading("exodus", "ex-15a");
    const p = reading?.passages[0];
    expect(p?.kind).toBe("poem");
    expect(p?.form).toBe("poetry");
    expect(p?.inTextTurn).toBe(13);
    expect(p?.addr?.mode).toBe("pray");

    const verses = p?.verses ?? [];
    expect(verses.map((v) => v.n)).toEqual(
      Array.from({ length: 21 }, (_, i) => i + 1),
    );
    expect(verses.filter((v) => v.text.includes("\n")).length).toBeGreaterThan(
      15,
    );
    // Lineation adds whitespace and nothing else; the words stay the BSB's.
    const flat = (s: string) => s.replace(/\s+/g, " ").trim();
    const v3 = verses.find((v) => v.n === 3);
    expect(flat(v3?.text ?? "")).toBe(
      "The LORD is a warrior, the LORD is His name.",
    );
    expect(v3?.text).toContain("\n");
  });

  it("an authored Exodus sitting carries its layers on every scene", () => {
    const reading = getReading("exodus", "ex-1");
    expect(reading?.tier).toBe("sitting");
    expect(reading?.passages).toHaveLength(3);
    for (const p of reading?.passages ?? []) {
      expect(p.ground?.text, `${p.ref} ground`).toBeTruthy();
      expect(p.meaning, `${p.ref} meaning`).toBeTruthy();
    }
    // The turn makes a demand rather than naming, which is what the complicity theme rests on.
    const turns = (reading?.passages ?? [])
      .map((p) => p.addr?.mode)
      .filter(Boolean);
    expect(turns).toContain("claims");
    expect(turns).not.toContain("names");
  });
});
