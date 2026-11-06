import { BLOG_POSTS, type BlogPost } from "@/content/blog";
import { getReading } from "@/lib/content";
import type { Reading } from "@/lib/types";

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

// A post's related readings, resolved from Genesis. Unknown ids are dropped.
export function postReadings(post: BlogPost): Reading[] {
  return post.readings
    .map((id) => getReading("genesis", id))
    .filter((reading): reading is Reading => Boolean(reading));
}

// The two inline marks a post's text may carry: [label](href) and *italic*.
export type InlinePart =
  | { kind: "text"; text: string }
  | { kind: "link"; text: string; href: string }
  | { kind: "em"; text: string };

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*([^*]+)\*/g;

export function parseInline(text: string): InlinePart[] {
  const parts: InlinePart[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE)) {
    const at = match.index ?? 0;
    if (at > last) parts.push({ kind: "text", text: text.slice(last, at) });
    if (match[1] !== undefined && match[2] !== undefined) {
      parts.push({ kind: "link", text: match[1], href: match[2] });
    } else if (match[3] !== undefined) {
      parts.push({ kind: "em", text: match[3] });
    }
    last = at + match[0].length;
  }
  if (last < text.length) parts.push({ kind: "text", text: text.slice(last) });
  return parts;
}

// Every internal link a post makes, inline or in its related readings, for the free-only
// check in test/blog.test.ts.
export function postLinks(post: BlogPost): string[] {
  const texts = post.body.flatMap((block) =>
    block.type === "list" ? block.items : [block.text],
  );
  const inline = texts.flatMap((text) =>
    parseInline(text)
      .filter((part) => part.kind === "link")
      .map((part) => (part as { href: string }).href),
  );
  return [...inline, ...post.readings.map((id) => `/read/genesis/${id}`)];
}

// "2026-11-06" -> "November 6, 2026", fixed to UTC so the server's zone never shifts it.
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Rough reading time at ~230 words a minute.
export function readingMinutes(post: BlogPost): number {
  const words = post.body
    .flatMap((block) => (block.type === "list" ? block.items : [block.text]))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}
