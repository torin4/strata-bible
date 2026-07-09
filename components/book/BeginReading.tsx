"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useResume } from "@/components/reader/ResumeProvider";
import Link from "next/link";

// The new visitor's way in: a "Begin here" card pointing at the book's first reading, so
// the book page always has one obvious start. Shown only when there is nothing to resume
// (no bookmark, no last-read spot anywhere); a returning reader sees their ContinueReading
// card in this slot instead, so the two never both render. Gated on auth loading so it
// never flashes for a returning reader whose spot is still resolving.
export function BeginReading({
  bookId,
  readingId,
  title,
  span,
  className,
}: {
  bookId: string;
  readingId: string;
  title: string;
  span: string;
  className?: string;
}) {
  const { loading } = useAuth();
  const { continueTarget } = useResume();
  if (loading || continueTarget) return null;

  return (
    <Link
      href={`/read/${bookId}/${readingId}`}
      className={`group block rounded-[16px] border border-gold/30 bg-gradient-to-b from-gold-soft to-parchment/[0.01] px-5 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-gold/55 ${className ?? ""}`}
    >
      <div className="font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
        Begin here
      </div>
      <div className="mt-2 font-scripture text-[20px] leading-[1.2] text-parchment-2 group-hover:text-parchment">
        {title}
      </div>
      <div className="mt-1 font-ui text-[10.5px] uppercase tracking-[.13em] text-mist-2">
        {span}
      </div>
      <div className="mt-3 font-ui text-[12px] tracking-[.06em] text-lapis group-hover:text-parchment">
        Begin reading ›
      </div>
    </Link>
  );
}
