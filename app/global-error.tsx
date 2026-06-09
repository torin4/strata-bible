"use client";

// The last-resort boundary: catches an error in the root layout itself, so it must render
// its own <html> and <body>. It pulls in the tokens and base styles directly, since the
// layout that normally provides them is the thing that failed.
import "@/styles/tokens.css";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center bg-shell px-4 text-center">
          <span className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright">
            STRATA
          </span>
          <h1 className="mt-8 font-display text-[30px] font-medium text-parchment">
            Something broke
          </h1>
          <p className="mt-3 max-w-[28rem] font-body text-[15px] italic leading-[1.6] text-mist">
            The app ran into an error it could not recover from on its own.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-7 inline-block rounded-[10px] border border-gold/50 px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
