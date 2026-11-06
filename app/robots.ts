import { COMPANY } from "@/lib/company";
import type { MetadataRoute } from "next";

// Crawl the public reading; keep crawlers out of a reader's own pages and the API.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/journal",
        "/highlights",
        "/settings",
        "/login",
        "/offline",
      ],
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
