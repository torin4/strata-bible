"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";

// The account state in a page header: a Sign in link when signed out, or the current
// identity with a sign-out control when signed in. Renders nothing distracting while the
// auth state is resolving.
export function AuthMenu() {
  const { user, loading, configured, signOutUser } = useAuth();

  if (!configured) return null;

  if (loading) {
    return (
      <span className="font-ui text-[10px] uppercase tracking-[.16em] text-mist-2">
        &middot;&middot;&middot;
      </span>
    );
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="font-ui text-[10px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
      >
        Sign in
      </Link>
    );
  }

  return (
    <span className="flex items-center gap-3">
      <span className="hidden max-w-[160px] truncate font-body text-[12px] italic text-mist sm:inline">
        {user.displayName || user.email || "Account"}
      </span>
      <Link
        href="/journal"
        className="font-ui text-[10px] uppercase tracking-[.16em] text-gold transition-colors hover:text-gold-bright"
      >
        Journal
      </Link>
      <button
        type="button"
        onClick={() => signOutUser()}
        className="font-ui text-[10px] uppercase tracking-[.16em] text-mist-2 transition-colors hover:text-gold-bright"
      >
        Sign out
      </button>
    </span>
  );
}
