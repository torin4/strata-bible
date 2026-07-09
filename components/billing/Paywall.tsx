"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { READING_THEMES } from "@/content/themes";
import { PLUS_PRICE, bookPrice } from "@/lib/pricing";
import { buyBook, startCheckout } from "@/lib/subscription";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// The soft content wall, shown in place of a locked reading. Two ways through: own this
// book outright, or unlock everything (and the companion) with STRATA Plus. Signed out it
// shows the same two options with their prices, and the sign-in step carries the reader
// back to this reading (?next=), since checkout is tied to their account.
export function Paywall({
  bookId,
  bookTitle,
  context,
  readingId,
}: {
  bookId?: string;
  bookTitle?: string;
  context?: string;
  readingId?: string;
}) {
  const { user } = useAuth();
  const pathname = usePathname();
  const [busy, setBusy] = useState<null | "book" | "plus">(null);
  const [error, setError] = useState<string | null>(null);

  const buyBookId = bookId && bookPrice(bookId) ? bookId : null;
  const title = bookTitle ?? "this book";
  const loginHref = `/login?next=${encodeURIComponent(pathname)}`;
  // The reading's own "speaks to" line, when authored: a taste of what is behind the wall.
  const speaksTo = readingId ? READING_THEMES[readingId]?.speaksTo : undefined;

  const run = (kind: "book" | "plus", fn: () => Promise<void>) => {
    setBusy(kind);
    setError(null);
    fn().catch(() => {
      setError("Could not open checkout just now. Please try again.");
      setBusy(null);
    });
  };

  return (
    <div className="text-center">
      <div className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-[.22em] text-gold">
        Locked
      </div>
      <h2 className="font-display text-[24px] font-medium leading-[1.2] text-parchment">
        Continue the reading{context ? `: ${context}` : ""}
      </h2>
      {speaksTo ? (
        <p className="mx-auto mt-2 max-w-[28rem] font-scripture text-[16px] italic leading-[1.5] text-parchment-2">
          {speaksTo}
        </p>
      ) : null}
      <p className="mx-auto mt-3 max-w-[30rem] font-body text-[15px] leading-[1.7] text-mist">
        The primeval history, Genesis 1 to 11, is open to everyone. Own {title}{" "}
        on its own to keep, or unlock every book and the companion with STRATA
        Plus.
      </p>

      {!user ? (
        <div className="mx-auto mt-6 flex max-w-[22rem] flex-col gap-3">
          {buyBookId ? (
            <Link
              href={loginHref}
              className="rounded-[10px] bg-gold px-5 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
            >
              Own {title}, {bookPrice(buyBookId)}
            </Link>
          ) : null}
          <Link
            href={loginHref}
            className="rounded-[10px] border border-gold/45 px-5 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft"
          >
            STRATA Plus, {PLUS_PRICE.annual} a year
          </Link>
          <p className="font-body text-[12px] italic leading-[1.5] text-mist-2">
            {buyBookId
              ? "Own the book forever, or get every book, current and future, plus the companion."
              : "Every book, current and future, and the companion."}{" "}
            Sign in first, and you come back to this reading.
          </p>
        </div>
      ) : (
        <div className="mx-auto mt-6 flex max-w-[22rem] flex-col gap-3">
          {buyBookId ? (
            <button
              type="button"
              onClick={() => run("book", () => buyBook(user.uid, buyBookId))}
              disabled={busy !== null}
              className="rounded-[10px] bg-gold px-5 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright disabled:opacity-50"
            >
              {busy === "book"
                ? "Opening checkout"
                : `Own ${title}, ${bookPrice(buyBookId)}`}
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => run("plus", () => startCheckout(user.uid))}
            disabled={busy !== null}
            className="rounded-[10px] border border-gold/45 px-5 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft disabled:opacity-50"
          >
            {busy === "plus"
              ? "Opening checkout"
              : `STRATA Plus, ${PLUS_PRICE.annual} a year`}
          </button>
          <p className="font-body text-[12px] italic leading-[1.5] text-mist-2">
            {buyBookId
              ? "Own the book forever, or get every book, current and future, plus the companion."
              : "Every book, current and future, and the companion."}
          </p>
        </div>
      )}

      {error ? (
        <p
          role="alert"
          className="mt-4 font-body text-[13px] italic text-psyche"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex justify-center gap-5">
        <Link
          href="/pricing"
          className="font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
        >
          See all plans
        </Link>
        <Link
          href="/book/genesis"
          className="font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
        >
          Free readings
        </Link>
      </div>
    </div>
  );
}
