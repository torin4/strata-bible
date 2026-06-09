import { PageTransition } from "@/components/nav/PageTransition";
import Link from "next/link";
import type { ReactNode } from "react";

// Shared frame for the policy pages: the wordmark, a title and date, the prose body, and a
// way back. Pages supply their own <h2>/<p> using the shared classes below.
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-shell px-4 py-10 sm:py-14">
      <PageTransition className="mx-auto max-w-[44rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>
        <h1 className="font-display text-[30px] font-medium text-parchment">
          {title}
        </h1>
        <p className="mt-1 font-ui text-[11px] uppercase tracking-[.16em] text-mist-2">
          Last updated {updated}
        </p>
        <div className="mt-8 flex flex-col gap-4 font-body text-[15px] leading-[1.7] text-parchment-2">
          {children}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
          >
            Back to the reader
          </Link>
        </div>
      </PageTransition>
    </main>
  );
}

// Section heading inside a legal page.
export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-[18px] font-medium text-parchment">
      {children}
    </h2>
  );
}
