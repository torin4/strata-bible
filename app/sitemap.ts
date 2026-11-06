import { BOOKS } from "@/content";
import { isFreeReading } from "@/lib/access";
import { COMPANY } from "@/lib/company";
import type { MetadataRoute } from "next";

// Pages search engines should know about: the public pages, every published book, and the
// free readings. Paywalled readings are left out: their prerendered page carries no
// authored text (see the gate in app/read), so there is nothing for a search engine to read.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.url;
  const pages = [
    "",
    "/about",
    "/pricing",
    "/find",
    "/terms",
    "/privacy",
    "/refund-policy",
    "/legal-notice",
  ];
  const published = BOOKS.filter((book) => book.published);
  return [
    ...pages.map((path) => ({ url: `${base}${path}` })),
    ...published.map((book) => ({ url: `${base}/book/${book.id}` })),
    ...published.flatMap((book) =>
      book.readings
        .filter(isFreeReading)
        .map((reading) => ({ url: `${base}/read/${book.id}/${reading.id}` })),
    ),
  ];
}
