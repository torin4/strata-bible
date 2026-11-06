import { PostBody } from "@/components/blog/PostBody";
import { BackLink } from "@/components/nav/BackLink";
import { Footer } from "@/components/nav/Footer";
import { BLOG_POSTS } from "@/content/blog";
import {
  formatPostDate,
  getPost,
  postReadings,
  readingMinutes,
} from "@/lib/blog";
import { COMPANY } from "@/lib/company";
import { PREVIEW_IMAGE, jsonLd, pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Every post is prerendered; an unknown slug is a 404, never a runtime render.
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta(post.seoTitle, post.description, `/blog/${post.slug}`, {
    publishedTime: post.published,
    modifiedTime: post.updated,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${COMPANY.url}/blog/${post.slug}`;
  const readings = postReadings(post);
  const structured = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      image: `${COMPANY.url}${PREVIEW_IMAGE}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      inLanguage: "en",
      author: { "@type": "Organization", name: "STRATA", url: COMPANY.url },
      publisher: {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "STRATA", item: COMPANY.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${COMPANY.url}/blog`,
        },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-shell px-5 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structured) }}
      />
      <div className="mx-auto max-w-[40rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>
        <div className="mb-8">
          <BackLink href="/blog" label="All guides" />
        </div>

        <article>
          <header className="stagger" style={{ animationDelay: ".05s" }}>
            <div className="text-center font-ui text-[10px] uppercase tracking-[.24em] text-gold">
              <time dateTime={post.published}>
                {formatPostDate(post.published)}
              </time>{" "}
              · {readingMinutes(post)} min read
            </div>
            <h1 className="mx-auto mt-4 max-w-[24ch] text-balance text-center font-display text-[27px] font-medium leading-[1.22] text-parchment sm:text-[34px]">
              {post.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[32rem] text-center font-scripture text-[18px] italic leading-[1.5] text-parchment-2">
              {post.dek}
            </p>
            <div className="mx-auto mt-7 h-px w-[46px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </header>

          <div className="mt-9">
            <PostBody blocks={post.body} />
          </div>
        </article>

        <aside className="mt-12 rounded-[18px] border border-line bg-gradient-to-b from-parchment/[0.035] to-parchment/[0.01] px-[22px] py-6">
          <h2 className="font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
            Read it in STRATA
          </h2>
          <p className="mt-2 font-body text-[14px] italic leading-[1.6] text-mist-2">
            Genesis 1–11 is free to read, no account needed.
          </p>
          <ul className="mt-4 flex flex-col divide-y divide-line">
            {readings.map((reading) => (
              <li key={reading.id}>
                <Link
                  href={`/read/genesis/${reading.id}`}
                  className="group flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="min-w-0">
                    <span className="block font-ui text-[10px] uppercase tracking-[.16em] text-mist-2">
                      {reading.span}
                    </span>
                    <span className="mt-1 block font-scripture text-[19px] leading-[1.25] text-parchment-2 transition-colors group-hover:text-gold-bright">
                      {reading.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-ui text-[14px] text-lapis group-hover:text-parchment"
                  >
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book/genesis"
            className="mt-4 inline-block font-ui text-[12px] tracking-[.06em] text-lapis transition-colors hover:text-parchment"
          >
            All of Genesis ›
          </Link>
        </aside>

        <Footer />
      </div>
    </main>
  );
}
