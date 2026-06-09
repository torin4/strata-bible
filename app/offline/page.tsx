import Link from "next/link";

export const metadata = {
  title: "Offline, STRATA",
};

// The service worker serves this when a page is requested with no network and nothing
// cached. Readings you have already opened still load from the cache.
export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-shell px-4 text-center">
      <Link
        href="/"
        className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
      >
        STRATA
      </Link>
      <h1 className="mt-8 font-display text-[28px] font-medium text-parchment">
        You are offline
      </h1>
      <p className="mt-3 max-w-[26rem] font-body text-[15px] italic leading-[1.6] text-mist">
        A reading you opened before is still here. Reconnect to reach the rest
        of the book.
      </p>
      <Link
        href="/"
        className="mt-7 inline-block rounded-[10px] border border-gold/50 px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
      >
        Try again
      </Link>
    </main>
  );
}
