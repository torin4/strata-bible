import { AuthMenu } from "@/components/auth/AuthMenu";
import { Footer } from "@/components/nav/Footer";
import { BOOKS } from "@/content";
import Link from "next/link";

// The intro / landing, ported from the proof's viewLanding: a centered veil with the
// STRATA wordmark, a thin gold rule, the tagline, and Genesis as the featured "Book I"
// card. The six genre fixtures stay reachable in a de-emphasized block below, since the
// reader still needs them to prove the kind-aware renderer across genres.
const GENESIS_BLURB =
  "In the beginning, and everything that breaks and is held after.";
const TAGLINE =
  "An illuminated reading of scripture, grounded in the history it grew out of.";

export default function Home() {
  const genesis = BOOKS.find((book) => book.id === "genesis");
  const genres = BOOKS.filter((book) => book.id !== "genesis");

  return (
    <main className="min-h-screen bg-shell px-5 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[26rem] flex-col">
        <div className="flex min-h-[16px] justify-end">
          <AuthMenu />
        </div>

        <div className="flex flex-1 flex-col justify-center py-10 text-center">
          <div className="stagger" style={{ animationDelay: ".05s" }}>
            {/* Decorative mark; the STRATA wordmark below names it. */}
            <img
              src="/strata-logo.svg"
              alt=""
              width={58}
              height={72}
              className="mx-auto mb-6 h-[72px] w-auto"
            />
            <div className="ml-[.42em] font-display text-[24px] font-semibold tracking-[.42em] text-gold-bright">
              STRATA
            </div>
            <div className="mx-auto mb-4 mt-[18px] h-px w-[46px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mx-auto max-w-[280px] font-body text-[15px] italic leading-[1.6] text-mist">
              {TAGLINE}
            </p>
          </div>

          {genesis ? (
            <Link
              href={`/book/${genesis.id}`}
              className="stagger group relative mt-[46px] block rounded-[18px] border border-line bg-gradient-to-b from-parchment/[0.035] to-parchment/[0.01] px-[22px] py-6 text-left transition duration-200 hover:-translate-y-0.5 hover:border-gold/45"
              style={{ animationDelay: ".18s" }}
            >
              <span className="absolute right-[14px] top-3 font-display text-[10px] uppercase tracking-[.2em] text-gold">
                Book I
              </span>
              <div className="font-display text-[30px] font-medium leading-none text-gold-bright">
                {genesis.title}
              </div>
              <div className="mb-4 mt-3 font-scripture text-[18px] italic leading-[1.4] text-parchment-2">
                {GENESIS_BLURB}
              </div>
              <div className="font-ui text-[12px] tracking-[.06em] text-lapis group-hover:text-parchment">
                Begin reading ›
              </div>
            </Link>
          ) : null}

          <div
            className="stagger mt-6 text-center"
            style={{ animationDelay: ".32s" }}
          >
            <Link
              href="/journal"
              className="font-ui text-[12px] tracking-[.06em] text-lapis transition-colors hover:text-parchment"
            >
              Your notes ›
            </Link>
          </div>
        </div>

        {genres.length > 0 ? (
          <div className="stagger pb-2" style={{ animationDelay: ".46s" }}>
            <div className="mb-3 text-center font-ui text-[9.5px] uppercase tracking-[.22em] text-mist-2">
              Genre proofs · one reading each
            </div>
            <ul className="flex flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line bg-deep">
              {genres.map((book) => {
                const readingCount = book.readings.length;
                return (
                  <li key={book.id}>
                    <Link
                      href={`/book/${book.id}`}
                      className="group flex items-baseline justify-between gap-3 px-5 py-3 transition-colors hover:bg-parchment/[0.02]"
                    >
                      <span className="font-display text-[15px] tracking-[.04em] text-parchment-2 group-hover:text-parchment">
                        {book.title}
                      </span>
                      <span className="shrink-0 font-ui text-[9.5px] uppercase tracking-[.14em] text-mist-2">
                        {readingCount}{" "}
                        {readingCount === 1 ? "reading" : "readings"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <Footer />
      </div>
    </main>
  );
}
