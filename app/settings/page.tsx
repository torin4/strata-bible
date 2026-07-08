"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { BackLink } from "@/components/nav/BackLink";
import { PageTransition } from "@/components/nav/PageTransition";
import { useSettings } from "@/components/settings/SettingsProvider";
import { PLUS_PRICE, purchasableBooks } from "@/lib/pricing";
import { openPortal, startCheckout } from "@/lib/subscription";
import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const { user, loading, configured, signOutUser } = useAuth();
  const { settings, setCompanionEnabled } = useSettings();

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
        <div className="mb-6">
          <BackLink href="/" label="Home" />
        </div>

        <h1 className="mb-8 text-center font-display text-[28px] font-medium text-parchment">
          Profile &amp; settings
        </h1>

        <section className="rounded-[14px] border border-line bg-deep px-6 py-6">
          <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
            Account
          </h2>
          {!configured ? (
            <p className="font-body text-[14px] leading-[1.7] text-mist">
              Accounts are not configured yet.
            </p>
          ) : loading ? (
            <p className="font-body text-[14px] italic text-mist-2">Loading.</p>
          ) : user ? (
            <div className="flex items-center justify-between gap-4">
              <span className="truncate font-body text-[15px] italic text-parchment-2">
                {user.displayName || user.email || "Signed in"}
              </span>
              <button
                type="button"
                onClick={() => signOutUser()}
                className="shrink-0 font-ui text-[10px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <span className="font-body text-[14px] leading-[1.7] text-mist">
                Sign in to keep a journal and personalize the companion.
              </span>
              <Link
                href="/login"
                className="shrink-0 rounded-[10px] bg-gold px-4 py-2 font-ui text-[11px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
              >
                Sign in
              </Link>
            </div>
          )}
        </section>

        <PlusSection />

        <OwnedBooks />

        <section className="mt-5 rounded-[14px] border border-line bg-deep px-6 py-6">
          <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
            The companion
          </h2>
          <div className="flex items-start justify-between gap-5">
            <div>
              <div className="font-body text-[15px] text-parchment-2">
                AI companion
              </div>
              <p className="mt-1 font-body text-[13px] leading-[1.6] text-mist-2">
                On grounded readings, draws out the meaning, the turn, and a
                question. The reader stays whole with it off, and it never
                speaks until you ask.
              </p>
            </div>
            <Toggle
              on={settings.companionEnabled}
              disabled={!user}
              onChange={setCompanionEnabled}
              label="AI companion"
            />
          </div>
          {!user ? (
            <p className="mt-3 font-body text-[12px] italic text-mist-2">
              Sign in to change this.
            </p>
          ) : null}
        </section>
      </PageTransition>
    </main>
  );
}

const PLAN_LABEL: Record<"month" | "year", string> = {
  year: "Annual",
  month: "Monthly",
};

// The STRATA Plus section: subscription status and management, or the unlock. Hidden
// entirely until billing is configured. All real management (cancel, reactivate, change
// plan, update card, invoices) happens in the Stripe customer portal behind "Manage".
function PlusSection() {
  const { user } = useAuth();
  const { isPlus, subscribed, subscription, billingEnabled } =
    useSubscription();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!billingEnabled) return null;

  const run = (fn: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    fn().catch(() => {
      setError("Something went wrong. Please try again.");
      setBusy(false);
    });
  };

  const planName = subscription?.interval
    ? PLAN_LABEL[subscription.interval]
    : "Plus";
  const renewal = subscription?.currentPeriodEnd
    ? new Date(subscription.currentPeriodEnd).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="mt-5 rounded-[14px] border border-line bg-deep px-6 py-6">
      <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
        STRATA Plus
      </h2>
      {!user ? (
        <p className="font-body text-[14px] leading-[1.7] text-mist">
          Sign in to unlock STRATA Plus.
        </p>
      ) : subscribed ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-body text-[15px] text-parchment-2">
                STRATA Plus, {planName}
              </div>
              {renewal ? (
                <p className="mt-0.5 font-body text-[12.5px] italic text-mist-2">
                  {subscription?.cancelAtPeriodEnd
                    ? `Access until ${renewal}`
                    : `Renews ${renewal}`}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => run(openPortal)}
              disabled={busy}
              className="shrink-0 rounded-[10px] border border-gold/40 px-4 py-2 font-ui text-[11px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:bg-gold-soft disabled:opacity-50"
            >
              {busy ? "Opening" : "Manage"}
            </button>
          </div>
          {subscription?.cancelAtPeriodEnd ? (
            <p className="font-body text-[12.5px] italic leading-[1.6] text-mist">
              Your plan is set to cancel at the end of the period. You can
              reactivate it from Manage.
            </p>
          ) : null}
        </div>
      ) : isPlus ? (
        <p className="font-body text-[14px] leading-[1.7] text-mist">
          You have full access.
        </p>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <span className="font-body text-[14px] leading-[1.6] text-mist">
            Open every book and the companion. {PLUS_PRICE.annual} a year.
          </span>
          <button
            type="button"
            onClick={() => user && run(() => startCheckout(user.uid))}
            disabled={busy}
            className="shrink-0 rounded-[10px] bg-gold px-4 py-2 font-ui text-[11px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright disabled:opacity-50"
          >
            {busy ? "Opening" : "Unlock"}
          </button>
        </div>
      )}
      {error ? (
        <p
          role="alert"
          className="mt-3 font-body text-[13px] italic text-psyche"
        >
          {error}
        </p>
      ) : null}
    </section>
  );
}

// The reader's outright-owned books, shown as a small library with a link into each. Hidden
// until billing is on, and only when they own at least one.
function OwnedBooks() {
  const { owns, billingEnabled } = useSubscription();
  if (!billingEnabled) return null;
  const owned = purchasableBooks().filter((book) => owns(book.bookId));
  if (owned.length === 0) return null;
  return (
    <section className="mt-5 rounded-[14px] border border-line bg-deep px-6 py-6">
      <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
        Your books
      </h2>
      <ul className="flex flex-col gap-3">
        {owned.map((book) => (
          <li
            key={book.bookId}
            className="flex items-center justify-between gap-3"
          >
            <span className="font-body text-[15px] text-parchment-2">
              {book.title}
            </span>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-gold/40 bg-gold-soft px-[9px] py-1 font-ui text-[9.5px] font-semibold uppercase tracking-[.16em] text-gold-bright">
                Owned
              </span>
              <Link
                href={`/book/${book.bookId}`}
                className="font-ui text-[11px] uppercase tracking-[.14em] text-lapis transition-colors hover:text-parchment"
              >
                Read ›
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// A token-styled switch. Off sits left and dim; on slides right and gilds.
function Toggle({
  on,
  onChange,
  disabled,
  label,
}: {
  on: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!on)}
      className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors disabled:opacity-40 ${
        on ? "border-gold/50 bg-gold-soft" : "border-line bg-shell"
      }`}
    >
      <span
        className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-all ${
          on ? "left-[22px] bg-gold-bright" : "left-[3px] bg-mist-2"
        }`}
      />
    </button>
  );
}
