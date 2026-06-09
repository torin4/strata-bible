"use client";

import { BOOK_OFFERS } from "@/lib/pricing";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Shown once when a reader returns from Stripe Checkout. STRATA Plus carries ?plus=welcome
// and introduces everything it opened; a single book carries ?book=<id> and confirms the
// purchase. Either way the marker is stripped from the URL so it never reappears.
const PLUS_UNLOCKED = [
  "The rest of Genesis, Abraham through Joseph",
  "Every book as it is published",
  "The companion on every reading",
];

export function PlusWelcome() {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<{ id: string; title: string } | null>(null);
  const primaryRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Keep Tab within the dialog while it is open, so focus cannot wander to the page behind
  // the backdrop.
  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const els = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), textarea, [href], [tabindex]:not([tabindex="-1"])',
    );
    if (!els || els.length === 0) return;
    const first = els[0];
    const last = els[els.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plus = params.get("plus") === "welcome";
    const bookId = params.get("book");
    if (!plus && !bookId) return;
    if (bookId) {
      setBook({ id: bookId, title: BOOK_OFFERS[bookId]?.title ?? "Your book" });
    }
    setOpen(true);
    params.delete("plus");
    params.delete("book");
    const qs = params.toString();
    window.history.replaceState(
      null,
      "",
      window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash,
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    primaryRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  const browseHref = book ? `/book/${book.id}` : "/book/genesis";

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default bg-shell/75 backdrop-blur-sm"
      />
      <dialog
        ref={dialogRef}
        open
        aria-modal="true"
        aria-labelledby="plus-welcome-title"
        onKeyDown={trapTab}
        className="stagger relative m-0 w-full max-w-[24rem] rounded-[18px] border border-gold/40 bg-deep px-7 py-8 text-center text-parchment shadow-2xl"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-mist transition-colors hover:text-gold-bright"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M2 2l10 10M12 2L2 12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>

        <div className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-[.22em] text-gold">
          {book ? "Purchased" : "STRATA Plus"}
        </div>
        <h2
          id="plus-welcome-title"
          className="font-display text-[26px] font-medium leading-[1.15] text-parchment"
        >
          {book ? `${book.title} is yours` : "You are in"}
        </h2>
        <p className="mx-auto mt-3 max-w-[20rem] font-body text-[14.5px] leading-[1.7] text-mist">
          {book
            ? "Yours to keep, with no time limit. The companion is part of STRATA Plus."
            : "Thank you for reading deeper. The whole strata of the book is open to you now."}
        </p>

        {book ? null : (
          <ul className="mx-auto mt-5 flex max-w-[19rem] flex-col gap-2 text-left">
            {PLUS_UNLOCKED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-body text-[14px] leading-[1.5] text-parchment-2"
              >
                <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-gold-bright" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <button
          ref={primaryRef}
          type="button"
          onClick={() => setOpen(false)}
          className="mt-6 w-full rounded-[10px] bg-gold px-5 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
        >
          Keep reading
        </button>
        <Link
          href={browseHref}
          onClick={() => setOpen(false)}
          className="mt-3 inline-block font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
        >
          {book ? `Open ${book.title} ›` : "Browse all of Genesis ›"}
        </Link>
      </dialog>
    </div>,
    document.body,
  );
}
