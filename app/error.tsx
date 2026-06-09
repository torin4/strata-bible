"use client";

import Link from "next/link";
import { useEffect } from "react";

// A styled boundary for any uncaught client error inside a route, so a render bug lands on
// STRATA's surface with a way out, never Next's default error screen. The reader's core
// promise is that it does not break; this is the net under it.
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-shell px-4 text-center">
      <Link
        href="/"
        className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
      >
        STRATA
      </Link>
      <h1 className="mt-8 font-display text-[30px] font-medium text-parchment">
        Something broke in the reading
      </h1>
      <p className="mt-3 max-w-[28rem] font-body text-[15px] italic leading-[1.6] text-mist">
        A page did not load the way it should. Try again, or return to the
        start.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-block rounded-[10px] border border-gold/50 px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
        >
          Try again
        </button>
        <Link
          href="/"
          className="font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
        >
          Back to the start
        </Link>
      </div>
    </main>
  );
}
