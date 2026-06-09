"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { PageTransition } from "@/components/nav/PageTransition";
import { useSettings } from "@/components/settings/SettingsProvider";
import Link from "next/link";

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
                className="shrink-0 font-ui text-[10px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
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
