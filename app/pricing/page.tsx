"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { Footer } from "@/components/nav/Footer";
import { PageTransition } from "@/components/nav/PageTransition";
import { PLUS_PRICE, purchasableBooks } from "@/lib/pricing";
import {
  STRIPE_PRICE_ID,
  STRIPE_PRICE_ID_MONTHLY,
  buyBook,
  startCheckout,
} from "@/lib/subscription";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Only plans with a configured Stripe price are offered, so a half-configured billing
// setup (annual live, monthly not yet) never shows a button that throws at checkout.
const PLANS = [
  {
    key: "annual",
    name: "Annual",
    price: PLUS_PRICE.annual,
    period: "/year",
    note: "Best value, about $4 a month.",
    priceId: STRIPE_PRICE_ID,
    primary: true,
  },
  {
    key: "monthly",
    name: "Monthly",
    price: PLUS_PRICE.monthly,
    period: "/month",
    note: "Flexible, cancel anytime.",
    priceId: STRIPE_PRICE_ID_MONTHLY,
    primary: false,
  },
].filter((plan) => plan.priceId);

const INCLUDED = [
  "All of Genesis, beyond the free primeval history",
  "Every book as it is published",
  "The AI companion on every reading",
  "Your highlights, notes, and journal, synced",
];

export default function PricingPage() {
  const { user } = useAuth();
  const { isPlus, subscribed, billingEnabled } = useSubscription();
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const books = purchasableBooks();

  const buy = (priceId: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    setBusy(priceId);
    setError(null);
    startCheckout(user.uid, priceId).catch(() => {
      setError("Could not open checkout just now. Please try again.");
      setBusy(null);
    });
  };

  const buyTheBook = (bookId: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    setBusy(`book:${bookId}`);
    setError(null);
    buyBook(user.uid, bookId).catch(() => {
      setError("Could not open checkout just now. Please try again.");
      setBusy(null);
    });
  };

  return (
    <main className="min-h-screen bg-shell px-4 py-10 sm:py-14">
      <PageTransition className="mx-auto max-w-[46rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <div className="text-center">
          <div className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-[.22em] text-gold">
            STRATA Plus
          </div>
          <h1 className="font-display text-[32px] font-medium leading-[1.15] text-parchment">
            Read the whole strata
          </h1>
          <p className="mx-auto mt-3 max-w-[34rem] font-body text-[15px] leading-[1.7] text-mist">
            {billingEnabled
              ? "The primeval history, Genesis 1 to 11, is free to everyone. STRATA Plus opens the rest of the book, every book to come, and the companion that draws out the meaning, the turn, and a question for each reading."
              : "Right now the whole of Genesis and the companion are open to every reader, free, while the book finds its first readers. Subscriptions will come later, and the primeval history will always stay free."}
          </p>
        </div>

        {!billingEnabled ? (
          <div className="mx-auto mt-8 max-w-[28rem] rounded-[16px] border border-gold/40 bg-gold-soft px-6 py-6 text-center">
            <p className="font-body text-[15px] leading-[1.7] text-parchment-2">
              Everything is free right now. Read every chapter, keep your
              highlights and notes, and let the companion open each reading.
            </p>
            <Link
              href="/book/genesis"
              className="mt-4 inline-block font-ui text-[11px] uppercase tracking-[.16em] text-gold-bright transition-colors hover:text-gold"
            >
              Start reading ›
            </Link>
          </div>
        ) : subscribed || isPlus ? (
          <div className="mx-auto mt-8 max-w-[26rem] rounded-[16px] border border-gold/40 bg-gold-soft px-6 py-6 text-center">
            <p className="font-body text-[15px] leading-[1.7] text-parchment-2">
              You have STRATA Plus. Thank you for reading.
            </p>
            <Link
              href="/settings"
              className="mt-4 inline-block font-ui text-[11px] uppercase tracking-[.16em] text-gold-bright transition-colors hover:text-gold"
            >
              Manage in settings ›
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className={`flex flex-col rounded-[16px] border bg-deep px-6 py-6 ${
                  plan.primary ? "border-gold/45" : "border-line"
                }`}
              >
                <div className="font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
                  {plan.name}
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-[34px] font-medium text-parchment">
                    {plan.price}
                  </span>
                  <span className="font-body text-[14px] text-mist-2">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-1 font-body text-[13px] italic leading-[1.5] text-mist-2">
                  {plan.note}
                </p>
                {billingEnabled ? (
                  <button
                    type="button"
                    onClick={() => buy(plan.priceId)}
                    disabled={busy !== null}
                    className={`mt-5 rounded-[10px] px-4 py-3 font-ui text-[12px] uppercase tracking-[.14em] transition-colors disabled:opacity-50 ${
                      plan.primary
                        ? "bg-gold text-deep hover:bg-gold-bright"
                        : "border border-gold/40 text-gold-bright hover:bg-gold-soft"
                    }`}
                  >
                    {busy === plan.priceId
                      ? "Opening checkout"
                      : user
                        ? `Get ${plan.name}`
                        : "Sign in to subscribe"}
                  </button>
                ) : (
                  <div className="mt-5 rounded-[10px] border border-line px-4 py-3 text-center font-ui text-[11px] uppercase tracking-[.14em] text-mist-2">
                    Subscriptions open soon
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {error ? (
          <p
            role="alert"
            className="mt-4 text-center font-body text-[13px] italic text-psyche"
          >
            {error}
          </p>
        ) : null}

        <div className="mx-auto mt-10 max-w-[30rem]">
          <div className="mb-3 text-center font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
            What Plus opens
          </div>
          <ul className="flex flex-col gap-2">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-body text-[14.5px] leading-[1.6] text-parchment-2"
              >
                <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-gold-bright" />
                {item}
              </li>
            ))}
          </ul>
          {billingEnabled ? (
            <p className="mt-5 text-center font-body text-[12.5px] italic leading-[1.6] text-mist-2">
              Billed in US dollars through Stripe. Cancel anytime, and keep
              access through the period you have paid for.
            </p>
          ) : null}
        </div>

        {billingEnabled && !isPlus && books.length > 0 ? (
          <div className="mx-auto mt-12 max-w-[34rem]">
            <div className="mb-1 text-center font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              Or own a book
            </div>
            <p className="mb-4 text-center font-body text-[13px] italic leading-[1.6] text-mist-2">
              Buy a single book outright, yours to keep. The companion stays in
              Plus.
            </p>
            <ul className="flex flex-col gap-2">
              {books.map((book) => (
                <li
                  key={book.bookId}
                  className="flex items-center justify-between gap-3 rounded-[12px] border border-line bg-deep px-4 py-3"
                >
                  <span className="font-display text-[16px] tracking-[.02em] text-parchment-2">
                    {book.title}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-body text-[14px] text-mist">
                      {book.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => buyTheBook(book.bookId)}
                      disabled={busy !== null}
                      className="rounded-[10px] border border-gold/40 px-4 py-2 font-ui text-[11px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft disabled:opacity-50"
                    >
                      {busy === `book:${book.bookId}` ? "Opening" : "Own"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <Footer />
      </PageTransition>
    </main>
  );
}
