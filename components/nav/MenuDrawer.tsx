"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { type LastRead, subscribeLastRead } from "@/lib/lastRead";
import Link from "next/link";
import { useEffect, useState } from "react";

// The app's primary navigation: a slide-out drawer opened from a fixed menu button on
// every page. Home, Journal, Continue reading (resumes a signed-in reader's last spot),
// and Profile & settings, with the account control pinned to the bottom.
export function MenuDrawer() {
  const { user, configured, signOutUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [lastRead, setLast] = useState<LastRead | null>(null);

  useEffect(() => {
    if (!user) {
      setLast(null);
      return;
    }
    return subscribeLastRead(user.uid, setLast);
  }, [user]);

  // While open: close on Escape and lock the page behind the drawer from scrolling.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  const continueHref = lastRead
    ? `/read/${lastRead.bookId}/${lastRead.readingId}`
    : "/read/genesis/gen-1";
  const continueSub = lastRead
    ? lastRead.span || lastRead.title
    : "Start at the beginning";

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-deep/70 text-mist backdrop-blur transition-colors hover:text-gold-bright"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1.5 4h12M1.5 7.5h12M1.5 11h12"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
        className={`fixed inset-0 z-40 cursor-default bg-shell/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-y-0 left-0 z-50 flex w-[272px] max-w-[82vw] flex-col border-r border-line bg-deep px-6 py-7 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright">
            STRATA
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-full text-mist-2 transition-colors hover:text-gold-bright"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2l10 10M12 2L2 12"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col">
          <DrawerLink href="/" label="Home" onNavigate={close} />
          <DrawerLink
            href="/find"
            label="Find a reading"
            sub="By what you’re carrying"
            onNavigate={close}
          />
          <DrawerLink href="/journal" label="Journal" onNavigate={close} />
          <DrawerLink
            href={continueHref}
            label="Continue reading"
            sub={continueSub}
            onNavigate={close}
          />
          <DrawerLink href="/about" label="About STRATA" onNavigate={close} />
          <div className="my-3 border-t border-line" />
          <DrawerLink
            href="/settings"
            label="Profile & settings"
            onNavigate={close}
          />
        </nav>

        <div className="mt-auto border-t border-line pt-5">
          {!configured ? null : user ? (
            <div className="flex flex-col gap-2">
              <span className="truncate font-body text-[13px] italic text-mist">
                {user.displayName || user.email || "Account"}
              </span>
              <button
                type="button"
                onClick={() => {
                  signOutUser();
                  close();
                }}
                className="self-start font-ui text-[10px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={close}
              className="font-ui text-[10px] uppercase tracking-[.16em] text-gold transition-colors hover:text-gold-bright"
            >
              Sign in
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}

function DrawerLink({
  href,
  label,
  sub,
  onNavigate,
}: {
  href: string;
  label: string;
  sub?: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group -mx-2 rounded-[10px] px-2 py-2.5 transition-colors hover:bg-parchment/[0.03]"
    >
      <span className="block font-display text-[16px] tracking-[.04em] text-parchment-2 group-hover:text-parchment">
        {label}
      </span>
      {sub ? (
        <span className="mt-0.5 block truncate font-body text-[12px] italic text-mist-2">
          {sub}
        </span>
      ) : null}
    </Link>
  );
}
