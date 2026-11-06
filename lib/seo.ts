import type { Metadata } from "next";

// Per-page social and canonical metadata. A page's openGraph/twitter block replaces the
// root's wholesale, so the preview image (app/opengraph-image.png) is restated here.
const PREVIEW = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "STRATA: an illuminated reading of scripture, grounded in the history it grew out of.",
};

// An article's dates, for pages that are articles (the blog) rather than app pages. Given,
// the Open Graph type becomes "article" and carries the publish and update times.
type ArticleDates = { publishedTime: string; modifiedTime?: string };

export function pageMeta(
  title: string,
  description: string,
  path: string,
  article?: ArticleDates,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "STRATA",
      images: [PREVIEW],
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [PREVIEW.url],
    },
  };
}

// The preview image's path, for structured data that names an image (the blog's Article).
export const PREVIEW_IMAGE = PREVIEW.url;

// Serialize structured data for a <script type="application/ld+json"> tag. "<" is escaped
// so no string inside the data can close the script element early.
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
