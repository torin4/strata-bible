import { getAdjacent, getClosingMovement, getReading } from "@/lib/content";
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
    // gen-25a is the last Genesis reading; there is no next inside the book.
    expect(getAdjacent("genesis", "gen-25a").next).toBeUndefined();
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
});
