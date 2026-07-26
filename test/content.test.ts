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

  it("Exodus holds its authored readings in order, across its movements", () => {
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
      "ex-15b",
      "ex-16",
      "ex-17",
      "ex-18",
      "ex-19",
      "ex-20",
      "ex-21",
    ]);
  });

  it("Exodus adjacency follows authored order and stays inside the book", () => {
    // The plague reading spans five chapters, so next/prev must follow authored order rather
    // than chapter arithmetic: ex-7 is followed by ex-12, not by a chapter 8.
    expect(getAdjacent("exodus", "ex-7").next?.id).toBe("ex-12");
    expect(getAdjacent("exodus", "ex-12").prev?.id).toBe("ex-7");
    expect(getAdjacent("exodus", "ex-1").prev).toBeUndefined();
    // Movement 3 has begun, so ex-18 now leads into it rather than ending the book.
    expect(getAdjacent("exodus", "ex-18").next?.id).toBe("ex-19");
    expect(getAdjacent("exodus", "ex-19").next?.id).toBe("ex-20");
    expect(getAdjacent("exodus", "ex-21").next).toBeUndefined();
  });

  it("every Exodus reading belongs to one of the declared movements", () => {
    const book = getBook("exodus");
    expect(book?.movements.map((m) => m.id)).toEqual([
      "out-of-egypt",
      "road-to-the-mountain",
      "the-covenant",
    ]);
    const ids = new Set(book?.movements.map((m) => m.id));
    for (const reading of book?.readings ?? []) {
      const movement = getMovement("exodus", reading)?.id;
      expect(movement, reading.id).toBeDefined();
      expect(ids.has(movement ?? ""), reading.id).toBe(true);
    }
  });

  it("the chapter 15 seam splits the Song from Marah across two movements", () => {
    // Both readings sit in chapter 15, which falls inside movement 1's range, so ex-15b claims
    // movement 2 with an explicit movementId. This is the one override in the book and it fails
    // silently if broken: the reading would simply be filed under the wrong movement.
    const book = getBook("exodus");
    const song = book?.readings.find((r) => r.id === "ex-15a");
    const marah = book?.readings.find((r) => r.id === "ex-15b");
    expect(song?.chapterIndex).toBe(15);
    expect(marah?.chapterIndex).toBe(15);
    expect(song?.movementId).toBeUndefined();
    expect(marah?.movementId).toBe("road-to-the-mountain");
    expect(song && getMovement("exodus", song)?.id).toBe("out-of-egypt");
    expect(marah && getMovement("exodus", marah)?.id).toBe(
      "road-to-the-mountain",
    );
    // Navigation still runs straight across the seam in authored order.
    expect(getAdjacent("exodus", "ex-15a").next?.id).toBe("ex-15b");
  });

  it("each Exodus movement closes on its own last reading", () => {
    const closing = (id: string) => {
      const r = getReading("exodus", id);
      return r && getClosingMovement("exodus", r)?.capstone?.title;
    };
    expect(closing("ex-15a")).toBe("The rescue, and the price on it");
    expect(closing("ex-18")).toBe("Learning to live on what arrives");
    // The reading straight after a capstone must not surface one of its own.
    expect(closing("ex-15b")).toBeUndefined();
  });

  it("movement 1 now has a doorway, and the last movement has none", () => {
    const movements = getBook("exodus")?.movements ?? [];
    const ids = new Set(movements.map((m) => m.id));
    expect(movements[0]?.doorway?.nextMovementId).toBe("road-to-the-mountain");
    expect(ids.has(movements[0]?.doorway?.nextMovementId ?? "")).toBe(true);
    // Whatever the last declared movement is, it points nowhere until the next one exists.
    expect(movements[movements.length - 1]?.doorway).toBeUndefined();
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

  it("the Ten Words render as law, with per-item annotation", () => {
    // The first published statute-cluster. Every other passage in the app is a narrative scene,
    // so this is the only content exercising the list form and per-item annotation outside the
    // unpublished fixtures.
    const reading = getReading("exodus", "ex-20");
    expect(reading?.tier).toBe("sitting");
    const cluster = reading?.passages.find((p) => p.ref === "20:1–17");
    expect(cluster?.kind).toBe("statute-cluster");
    expect(cluster?.form).toBe("list");
    // Items live in `statutes`, not `verses`, which is what the list form renders from.
    expect(cluster?.statutes?.length).toBe(17);
    expect(cluster?.verses).toBeUndefined();
    expect(Object.keys(cluster?.perItem ?? {}).length).toBeGreaterThan(0);
  });

  it("the covenant marks law that claims the reader apart from law that does not", () => {
    // The whole design of movement 3 rests on this distinction being drawn per item rather than
    // argued in prose, so both modes must actually be in use.
    const modes = (getBook("exodus")?.readings ?? [])
      .flatMap((r) => r.passages)
      .flatMap((p) => Object.values(p.perItem ?? {}))
      .map((item) => item.addr?.mode)
      .filter(Boolean);
    expect(modes).toContain("claims");
    expect(modes).toContain("none-but");
  });

  it("the servant laws are shown, not selected around, and marked as not binding", () => {
    // The commitment this movement was planned on. Exodus 21 keeps the verses a curated reading
    // would be tempted to drop, and marks them with the mode for law that makes no claim on the
    // reader. If a later edit quietly removes one, this fails.
    const reading = getReading("exodus", "ex-21");
    const shown = (reading?.passages ?? []).flatMap((p) =>
      (p.statutes ?? []).map((s) => s.n),
    );
    // 7: a daughter sold. 21: no penalty, since the servant is property. 32: a servant priced.
    for (const n of [7, 20, 21, 26, 32]) {
      expect(shown, `21:${n} must be present`).toContain(n);
    }
    const annotation = (n: number) =>
      (reading?.passages ?? [])
        .map((p) => p.perItem?.[n])
        .find((item) => item !== undefined);
    expect(annotation(7)?.addr?.mode).toBe("none-but");
    expect(annotation(21)?.addr?.mode).toBe("none-but");
    expect(annotation(32)?.addr?.mode).toBe("none-but");
    // And the contrast: kidnapping a person still claims the reader, in the same chapter.
    expect(annotation(16)?.addr?.mode).toBe("claims");
    // The dodge is named, and the canon is allowed to argue back.
    const misreadings = (reading?.passages ?? []).filter((p) => p.misreading);
    expect(misreadings).toHaveLength(1);
    const tensions = (reading?.passages ?? []).flatMap((p) => p.tensions ?? []);
    expect(tensions).toHaveLength(1);
    expect(tensions[0].where).toContain("Deuteronomy 15");
  });

  it("movement 3 is declared by chapter range, with no override and no doorway", () => {
    const book = getBook("exodus");
    const movement = book?.movements.find((m) => m.id === "the-covenant");
    expect(movement?.chapterStart).toBe(19);
    expect(movement?.chapterEnd).toBe(24);
    expect(movement?.doorway).toBeUndefined();
    expect(movement?.situation.paragraphs.length).toBeGreaterThan(0);
    const tenWords = getReading("exodus", "ex-20");
    expect(tenWords?.movementId).toBeUndefined();
    expect(tenWords && getMovement("exodus", tenWords)?.id).toBe(
      "the-covenant",
    );
  });

  it("the Exodus composition panel argues the history rather than ruling on it", () => {
    // One of only two places the evidentiary situation is stated. It must carry the mainstream
    // reconstruction AND the serious case for a historical core, both attributed, so a reader
    // meets a live argument instead of a verdict handed down.
    const panel = getBook("exodus")?.composition;
    expect(panel?.paragraphs.length).toBeGreaterThanOrEqual(3);
    const prose = panel?.paragraphs.join(" ") ?? "";
    expect(prose).toContain("Finkelstein");
    expect(prose).toContain("Hoffmeier");
    expect(panel?.sources).toBeTruthy();
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
