"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useResume } from "@/components/reader/ResumeProvider";
import { findReadingAnywhere } from "@/lib/content";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// The app's primary navigation: a slide-out drawer opened from a fixed menu button on
// every page. Home, Journal, Continue reading (resumes where the reader left off), and
// Profile & settings, with the account control pinned to the bottom.
export function MenuDrawer() {
  const { user, loading, configured, signOutUser } = useAuth();
  const { continueTarget, continueHref } = useResume();
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const DRAWER_ID = "nav-drawer";

  // While open: close on Escape, lock the page behind the drawer from scrolling, and move
  // focus to the close button so a keyboard user lands inside the drawer.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Keep Tab within the drawer while it is open (same pattern as HighlightPopover).
  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const els = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, [tabindex]:not([tabindex="-1"])',
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

  // Closing returns focus to the menu button it opened from.
  const close = () => {
    setOpen(false);
    openButtonRef.current?.focus();
  };

  // Continue follows the same target as the home card: where the reader left off, with a
  // placed bookmark only as the fallback. Title and span come from the content by id.
  const target = continueTarget
    ? findReadingAnywhere(continueTarget.readingId)
    : null;
  const continueTo = continueHref ?? "/read/genesis/gen-1";
  const resumeTitle = target?.reading.title || "Begin Genesis";
  const resumeSub = target
    ? target.reading.span || "Pick up where you left off"
    : "Start from the beginning";

  return (
    <>
      <button
        ref={openButtonRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={DRAWER_ID}
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
        ref={drawerRef}
        id={DRAWER_ID}
        aria-label="Menu"
        inert={!open}
        onKeyDown={trapTab}
        className={`fixed inset-y-0 left-0 z-50 flex w-[272px] max-w-[82vw] flex-col border-r border-line bg-deep px-6 py-7 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright">
            STRATA
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-full text-mist transition-colors hover:text-gold-bright"
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
          {/* Resume is the primary action, so it gets a card, not a row. */}
          <Link
            href={continueTo}
            onClick={close}
            className="group mb-4 block rounded-[12px] border border-gold/30 bg-gradient-to-b from-gold/[0.07] to-transparent px-4 py-3.5 transition-colors hover:border-gold/50"
          >
            <span className="font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold">
              Continue reading
            </span>
            <span className="mt-1 block truncate font-display text-[17px] leading-tight text-parchment">
              {resumeTitle}
            </span>
            <span className="mt-0.5 block truncate font-body text-[12px] italic text-mist-2">
              {resumeSub}
            </span>
          </Link>

          <DrawerLink href="/" label="Home" icon="home" onNavigate={close} />
          <DrawerLink
            href="/find"
            label="Find a reading"
            icon="find"
            onNavigate={close}
          />
          <DrawerLink
            href="/journal"
            label="Journal"
            icon="journal"
            onNavigate={close}
          />
          <DrawerLink
            href="/highlights"
            label="Your highlights"
            icon="highlights"
            onNavigate={close}
          />

          <div className="my-3 border-t border-line" />

          <DrawerLink
            href="/pricing"
            label="STRATA Plus"
            icon="plus"
            onNavigate={close}
          />
          <DrawerLink
            href="/about"
            label="About STRATA"
            icon="about"
            onNavigate={close}
          />
          <DrawerLink
            href="/settings"
            label="Profile & settings"
            icon="settings"
            onNavigate={close}
          />
        </nav>

        <div className="mt-auto border-t border-line pt-5">
          {!configured || loading ? null : user ? (
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
                className="self-start font-ui text-[10px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
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
  icon,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: IconName;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group -mx-2 flex items-center gap-3 rounded-[10px] px-2 py-2.5 transition-colors hover:bg-parchment/[0.03]"
    >
      <span className="shrink-0 text-mist-2 transition-colors group-hover:text-gold">
        <NavIcon name={icon} />
      </span>
      <span className="font-display text-[16px] tracking-[.04em] text-parchment-2 group-hover:text-parchment">
        {label}
      </span>
    </Link>
  );
}

type IconName =
  | "home"
  | "find"
  | "journal"
  | "highlights"
  | "plus"
  | "about"
  | "settings";

// Small line icons in the menu's stroke style (round caps, currentColor).
function NavIcon({ name }: { name: IconName }) {
  const props = {
    width: 17,
    height: 17,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;
  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="M2.5 8 8 3l5.5 5" />
          <path d="M4 7.5V13h8V7.5" />
        </svg>
      );
    case "find":
      return (
        <svg {...props}>
          <circle cx="7" cy="7" r="4.25" />
          <path d="M10.2 10.2 13.5 13.5" />
        </svg>
      );
    case "journal":
      return (
        <svg {...props}>
          <path d="M8 4.6C6.5 3.7 4 3.7 2.5 4.2v8c1.5-.5 4-.5 5.5.4" />
          <path d="M8 4.6c1.5-.9 4-.9 5.5-.4v8c-1.5-.5-4-.5-5.5.4" />
          <path d="M8 4.6v8" />
        </svg>
      );
    case "highlights":
      return (
        <svg {...props}>
          <path d="M4.5 2.75h7v10.5L8 10.9 4.5 13.25z" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M8 2.4l1.4 4.2 4.2 1.4-4.2 1.4L8 13.6l-1.4-4.2L2.4 8l4.2-1.4z" />
        </svg>
      );
    case "about":
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="5.75" />
          <path d="M8 7.3v3.4" />
          <path d="M8 5.1h.01" />
        </svg>
      );
    case "settings":
      return (
        <svg {...props}>
          <circle cx="8" cy="5.5" r="2.4" />
          <path d="M3.6 13c.4-2.4 2.3-3.7 4.4-3.7s4 1.3 4.4 3.7" />
        </svg>
      );
  }
}
