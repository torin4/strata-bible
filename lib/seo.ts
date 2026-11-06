import type { Metadata } from "next";

// Per-page social and canonical metadata. A page's openGraph/twitter block replaces the
// root's wholesale, so the preview image (app/opengraph-image.png) is restated here.
const PREVIEW = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "STRATA: an illuminated reading of scripture, grounded in the history it grew out of.",
};

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "STRATA",
      images: [PREVIEW],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [PREVIEW.url],
    },
  };
}
