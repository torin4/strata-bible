import { AuthMenu } from "@/components/auth/AuthMenu";
import { Footer } from "@/components/nav/Footer";
import { ContinueReading } from "@/components/reader/ContinueReading";
import { WhatIsStrata } from "@/components/reader/WhatIsStrata";
import { COMING_SOON, PUBLISHED_BOOKS } from "@/content";
import { FREE_BOOK_ID, FREE_MOVEMENT_ID } from "@/lib/access";
import Link from "next/link";

// The intro / landing, ported from the proof's viewLanding: a centered veil with the
// STRATA wordmark, a thin gold rule, the tagline, then one card per published book,
// numbered in order, and anything announced but unwritten after them. (The genre fixtures
// stay reachable by direct URL for the renderer proof, but are not advertised here.)
const TAGLINE =
  "An illuminated reading of scripture, grounded in the history it grew out of.";
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function Home() {
  // The free sample belongs to one movement of one book rather than to every book, so the
  // "free to read" line is derived and appears on that card alone.
  const freeRange = PUBLISHED_BOOKS.find(
    (book) => book.id === FREE_BOOK_ID,
  )?.movements.find((movement) => movement.id === FREE_MOVEMENT_ID)?.range;

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
              className="logo-glow mx-auto mb-6 h-[72px] w-auto"
            />
            <div className="ml-[.42em] font-display text-[24px] font-semibold tracking-[.42em] text-gold-bright">
              STRATA
            </div>
            <div className="mx-auto mb-4 mt-[18px] h-px w-[46px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mx-auto max-w-[280px] font-body text-[15px] italic leading-[1.6] text-mist">
              {TAGLINE}
            </p>
          </div>

          {/* What STRATA is, for newcomers: the four layers named, with a path to the full
              vision. Signed out only, so it never competes with a returning reader's spot. */}
          <WhatIsStrata className="stagger mt-[42px]" />

          {/* The reader's bookmark, when they have one: pick up where they left off, above
              the books. Renders nothing signed out or before any reading. */}
          <ContinueReading className="stagger mt-[40px]" />

          {PUBLISHED_BOOKS.map((book, i) => (
            <Link
              key={book.id}
              href={`/book/${book.id}`}
              className="stagger group relative mt-[46px] block rounded-[18px] border border-line bg-gradient-to-b from-parchment/[0.035] to-parchment/[0.01] px-[22px] py-6 text-left transition duration-200 hover:-translate-y-0.5 hover:border-gold/45"
              style={{ animationDelay: `${0.18 + i * 0.06}s` }}
            >
              <span className="absolute right-[14px] top-3 font-display text-[10px] uppercase tracking-[.2em] text-gold">
                Book {ROMAN[i] ?? ""}
              </span>
              <div className="font-display text-[30px] font-medium leading-none text-gold-bright">
                {book.title}
              </div>
              {book.blurb ? (
                <div className="mb-2 mt-3 font-scripture text-[18px] italic leading-[1.4] text-parchment-2">
                  {book.blurb}
                </div>
              ) : null}
              {book.id === FREE_BOOK_ID && freeRange ? (
                <div className="mb-4 font-body text-[12px] italic leading-[1.5] text-mist-2">
                  {freeRange} is free to read, no account needed.
                </div>
              ) : (
                <div className="mb-4" />
              )}
              <div className="font-ui text-[12px] tracking-[.06em] text-lapis group-hover:text-parchment">
                Begin reading ›
              </div>
            </Link>
          ))}

          {COMING_SOON.map((book, i) => (
            <div
              key={book.id}
              className="stagger relative mt-4 rounded-[18px] border border-line bg-parchment/[0.012] px-[22px] py-5 text-left"
              style={{ animationDelay: ".26s" }}
            >
              <span className="absolute right-[14px] top-3 font-display text-[10px] uppercase tracking-[.2em] text-mist-2">
                Book {ROMAN[PUBLISHED_BOOKS.length + i] ?? ""}
              </span>
              <div className="font-display text-[24px] font-medium leading-none text-parchment-2">
                {book.title}
              </div>
              <div className="mb-3 mt-2.5 font-scripture text-[16px] italic leading-[1.4] text-mist">
                {book.blurb}
              </div>
              <div className="font-ui text-[11px] uppercase tracking-[.18em] text-gold/70">
                Coming soon
              </div>
            </div>
          ))}

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

        <Footer />
      </div>
    </main>
  );
}
