import { AuthMenu } from "@/components/auth/AuthMenu";
import { BOOKS } from "@/content";
import Link from "next/link";

// The home: the books STRATA holds. Genesis ships first as a real book with movements;
// the six genre fixtures sit below it, each a single reading that proves the kind-aware
// renderer. Each book links to its movement view.
export default function Home() {
  return (
    <main className="min-h-screen bg-shell px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-[42rem]">
        <div className="mb-6 flex min-h-[16px] justify-end">
          <AuthMenu />
        </div>
        <header className="mb-10 text-center">
          <div className="font-display text-[18px] font-semibold tracking-[.32em] text-gold-bright">
            STRATA
          </div>
          <div className="mt-2 font-ui text-[11.5px] tracking-[.08em] text-mist-2">
            history · meaning · the turn · response
          </div>
        </header>

        <ul className="flex flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line bg-deep">
          {BOOKS.map((book) => {
            const readingCount = book.readings.length;
            const movementCount = book.movements.length;
            return (
              <li key={book.id}>
                <Link
                  href={`/book/${book.id}`}
                  className="group flex items-baseline justify-between gap-3 px-5 py-4 transition-colors hover:bg-parchment/[0.02]"
                >
                  <span className="font-display text-[19px] tracking-[.04em] text-parchment-2 group-hover:text-parchment">
                    {book.title}
                  </span>
                  <span className="shrink-0 font-ui text-[10px] uppercase tracking-[.14em] text-mist-2">
                    {readingCount} {readingCount === 1 ? "reading" : "readings"}
                    {movementCount > 0 ? ` · ${movementCount} mvt` : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
