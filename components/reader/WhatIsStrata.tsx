"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Link from "next/link";

// A plain, obvious way in for a newcomer: a "What is STRATA?" button that leads to the full
// vision at /about. Shown only signed out, where the dash is the pitch; signed in it renders
// nothing, so a returning reader's bookmark and the book stay the focus. Gating on auth (not
// a resolved bookmark) keeps it flicker free: it never flashes in and then collapses.
export function WhatIsStrata({ className }: { className?: string }) {
  const { user, loading } = useAuth();
  if (loading || user) return null;

  return (
    <div
      className={`text-center ${className ?? ""}`}
      style={{ animationDelay: ".12s" }}
    >
      <Link
        href="/about"
        className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold-soft px-6 py-3 font-ui text-[14px] font-medium tracking-[.04em] text-gold-bright transition-colors hover:border-gold/75"
      >
        What is STRATA?
        <span aria-hidden="true">›</span>
      </Link>
    </div>
  );
}
