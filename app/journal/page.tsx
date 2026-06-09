"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { JournalComposer } from "@/components/journal/JournalComposer";
import { JournalList } from "@/components/journal/JournalList";
import { PageTransition } from "@/components/nav/PageTransition";
import Link from "next/link";

export default function JournalPage() {
  const { user, loading, configured } = useAuth();

  return (
    <main className="min-h-screen bg-shell px-4 py-8 sm:py-12">
      <PageTransition className="mx-auto max-w-[40rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <h1 className="mb-8 text-center font-display text-[28px] font-medium text-parchment">
          Journal
        </h1>

        {!configured ? (
          <p className="text-center font-body text-[14px] leading-[1.7] text-mist">
            The journal is not configured yet.
          </p>
        ) : loading ? (
          <p className="text-center font-body text-[14px] italic text-mist-2">
            Loading.
          </p>
        ) : !user ? (
          <div className="rounded-[14px] border border-line bg-deep px-6 py-8 text-center">
            <p className="font-body text-[15px] leading-[1.7] text-parchment-2">
              Sign in to keep a journal. The reader stays open to everyone.
            </p>
            <Link
              href="/login"
              className="mt-5 inline-block rounded-[10px] bg-gold px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
            >
              Sign in
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="rounded-[14px] border border-line bg-deep px-5 py-5">
              <JournalComposer placeholder="Write an entry." />
            </div>
            <JournalList />
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
          >
            Back to the reader
          </Link>
        </div>
      </PageTransition>
    </main>
  );
}
