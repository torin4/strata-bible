"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { startCheckout } from "@/lib/subscription";
import Link from "next/link";
import { useState } from "react";

// The soft content wall. Shown in place of a locked reading. The free primeval history
// stays open; this invites the reader into STRATA Plus for the rest. Signed out, it sends
// them to sign in first (Stripe Checkout is tied to their account).
export function Paywall({ context }: { context?: string }) {
  const { user } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async () => {
    if (!user) return;
    setBusy(true);
    setError(null);
    try {
      await startCheckout(user.uid);
    } catch {
      setError("Could not open checkout just now. Please try again.");
      setBusy(false);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-[.22em] text-gold">
        STRATA Plus
      </div>
      <h2 className="font-display text-[24px] font-medium leading-[1.2] text-parchment">
        Continue the reading{context ? `: ${context}` : ""}
      </h2>
      <p className="mx-auto mt-3 max-w-[30rem] font-body text-[15px] leading-[1.7] text-mist">
        The primeval history, Genesis 1 to 11, is open to everyone. STRATA Plus
        opens the rest, Abraham, Jacob, Joseph, and every book to come, with the
        companion to draw out the meaning, the turn, and a question for each
        reading.
      </p>

      {!user ? (
        <Link
          href="/login"
          className="mt-6 inline-block rounded-[10px] bg-gold px-6 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
        >
          Sign in to continue
        </Link>
      ) : (
        <button
          type="button"
          onClick={subscribe}
          disabled={busy}
          className="mt-6 inline-block rounded-[10px] bg-gold px-6 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright disabled:opacity-50"
        >
          {busy ? "Opening checkout" : "Unlock STRATA Plus"}
        </button>
      )}

      {error ? (
        <p className="mt-4 font-body text-[13px] italic text-psyche">{error}</p>
      ) : null}

      <div className="mt-6">
        <Link
          href="/book/genesis"
          className="font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
        >
          Back to the free readings
        </Link>
      </div>
    </div>
  );
}
