import { AuthMenu } from "@/components/auth/AuthMenu";
import { Footer } from "@/components/nav/Footer";
import { BOOKS, COMING_SOON, PUBLISHED_BOOKS } from "@/content";
import Link from "next/link";

// The intro / landing, ported from the proof's viewLanding: a centered veil with the
// STRATA wordmark, a thin gold rule, the tagline, Genesis as the featured "Book I" card,
// and the next book announced as coming soon. (The genre fixtures stay reachable by direct
// URL for the renderer proof, but are no longer advertised here.)
const GENESIS_BLURB =
  "In the beginning, and everything that breaks and is held after.";
const TAGLINE =
  "An illuminated reading of scripture, grounded in the history it grew out of.";
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function Home() {
  const genesis = BOOKS.find((book) => book.id === "genesis");

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
