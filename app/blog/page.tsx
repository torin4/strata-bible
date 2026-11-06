import { Footer } from "@/components/nav/Footer";
import { BLOG_POSTS } from "@/content/blog";
import { formatPostDate, readingMinutes } from "@/lib/blog";
import { COMPANY } from "@/lib/company";
import { jsonLd, pageMeta } from "@/lib/seo";
import Link from "next/link";

// The blog index: study guides for people searching their way into Genesis. Static, one
// card per post, newest first, in the home page's card style.
export const metadata = pageMeta(
  "Bible study guides: Genesis in its ancient context | STRATA Blog",
  "Study guides for reading Genesis in its history: creation, Adam and Eve, Cain and Abel, Noah's flood, the Tower of Babel, and a small-group plan for Genesis 1–11.",
  "/blog",
);

export default function BlogIndexPage() {
  const breadcrumbs = {
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
    ],
  };

  return (
    <main className="min-h-screen bg-shell px-5 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }}
      />
      <div className="mx-auto max-w-[40rem]">
        <header className="mb-10 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <div className="stagger" style={{ animationDelay: ".05s" }}>
          <div className="text-center font-ui text-[10px] uppercase tracking-[.24em] text-gold">
            The blog
          </div>
          <h1 className="mx-auto mt-4 max-w-[22ch] text-center font-display text-[30px] font-medium leading-[1.2] text-parchment sm:text-[34px]">
            Reading Genesis in its world
          </h1>
          <p className="mx-auto mt-4 max-w-[34rem] text-center font-scripture text-[18px] italic leading-[1.5] text-parchment-2">
            Guides for studying the Bible with its history laid beside it, for
            readers on their own and for groups.
          </p>
          <div className="mx-auto mt-7 h-px w-[46px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <ul className="stagger-children mt-10 flex flex-col gap-4">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-[18px] border border-line bg-gradient-to-b from-parchment/[0.035] to-parchment/[0.01] px-[22px] py-6 transition duration-200 hover:-translate-y-0.5 hover:border-gold/45"
              >
                <div className="font-ui text-[10px] uppercase tracking-[.2em] text-gold">
                  {formatPostDate(post.published)} · {readingMinutes(post)} min
                  read
                </div>
                <h2 className="mt-3 font-display text-[21px] font-medium leading-[1.25] text-gold-bright sm:text-[23px]">
                  {post.title}
                </h2>
                <p className="mt-3 font-scripture text-[17px] italic leading-[1.45] text-parchment-2">
                  {post.dek}
                </p>
                <div className="mt-4 font-ui text-[12px] tracking-[.06em] text-lapis group-hover:text-parchment">
                  Read the guide ›
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/book/genesis"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-lapis transition-colors hover:text-parchment"
          >
            Genesis 1–11 is free to read ›
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  );
}
