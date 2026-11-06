import { BLOG_POSTS } from "@/content/blog";
import { isFreeReading } from "@/lib/access";
import { parseInline, postLinks, postReadings } from "@/lib/blog";
import { getReading } from "@/lib/content";
import { describe, expect, it } from "vitest";

const text = (post: (typeof BLOG_POSTS)[number]) =>
  post.body.flatMap((block) =>
    block.type === "list" ? block.items : [block.text],
  );

describe("blog", () => {
  it("slugs are unique and URL-safe", () => {
    const slugs = BLOG_POSTS.map((post) => post.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  // The blog must never surface paid content: every reading a post links to or lists is a
  // free one, and the only other internal link allowed is the Genesis book page.
  it("links only to free readings and the Genesis book page", () => {
    for (const post of BLOG_POSTS) {
      for (const href of postLinks(post)) {
        const reading = /^\/read\/([^/]+)\/([^/]+)$/.exec(href);
        if (reading) {
          const found = getReading(reading[1], reading[2]);
          expect(found, `${post.slug}: ${href} exists`).toBeDefined();
          expect(
            found && isFreeReading(found),
            `${post.slug}: ${href} is free`,
          ).toBe(true);
        } else {
          expect(href, `${post.slug}: unexpected link`).toBe("/book/genesis");
        }
      }
      expect(postReadings(post).length).toBe(post.readings.length);
    }
  });

  it("authored copy carries no em dashes", () => {
    for (const post of BLOG_POSTS) {
      const all = [post.title, post.dek, post.description, ...text(post)];
      for (const line of all) expect(line).not.toContain("—");
    }
  });

  it("posts are long-form", () => {
    for (const post of BLOG_POSTS) {
      const words = text(post).join(" ").split(/\s+/).length;
      expect(words).toBeGreaterThanOrEqual(900);
      expect(words).toBeLessThanOrEqual(1600);
    }
  });

  it("parses links and italics", () => {
    expect(
      parseInline("See [Genesis 1](/read/genesis/gen-1), *tehom*."),
    ).toEqual([
      { kind: "text", text: "See " },
      { kind: "link", text: "Genesis 1", href: "/read/genesis/gen-1" },
      { kind: "text", text: ", " },
      { kind: "em", text: "tehom" },
      { kind: "text", text: "." },
    ]);
  });
});
