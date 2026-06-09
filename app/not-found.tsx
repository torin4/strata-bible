import Link from "next/link";

// A styled 404 in the shell, so a bad URL lands on STRATA's surface, not Next's default
// white page. Reached when getBook / getReading miss, or any unknown route.
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-shell px-4 text-center">
      <Link
        href="/"
        className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
      >
        STRATA
      </Link>
      <h1 className="mt-8 font-display text-[30px] font-medium text-parchment">
        Not in the book
      </h1>
      <p className="mt-3 max-w-[28rem] font-body text-[15px] italic leading-[1.6] text-mist">
        This page is not part of the reading. The way back is through the
        doorway.
      </p>
      <Link
        href="/"
        className="mt-7 inline-block rounded-[10px] border border-gold/50 px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
      >
        Back to the start
      </Link>
    </main>
  );
}
