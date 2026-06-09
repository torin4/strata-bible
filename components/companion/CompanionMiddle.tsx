"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { AskResponse } from "@/components/journal/AskResponse";
import { Ask } from "@/components/reader/Ask";
import { Layer } from "@/components/reader/Layer";
import { Lenses } from "@/components/reader/Lenses";
import { TheTurn } from "@/components/reader/TheTurn";
import { useSettings } from "@/components/settings/SettingsProvider";
import {
  type CompanionLayer,
  FREE_DRAW_LIMIT,
  generateMiddle,
  loadCachedMiddle,
  recordFreeDraw,
  subscribeFreeDraws,
} from "@/lib/companion";
import { startCheckout } from "@/lib/subscription";
import type { Passage } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";

type Phase = "checking" | "idle" | "drafting" | "done" | "error";

// The companion's additive middle for a grounded passage. The authored history and
// scripture are already shown; this draws out the meaning, the lenses, the turn, and a
// question. It is opt-in, cached, and never blocks the reader: with no backend, signed
// out, or on failure, the passage simply stays as its authored self.
export function CompanionMiddle({
  bookId,
  readingId,
  readingTitle,
  passage,
}: {
  bookId: string;
  readingId: string;
  readingTitle: string;
  passage: Passage;
}) {
  const { user, configured, loading } = useAuth();
  const { settings } = useSettings();
  const { isPlus } = useSubscription();
  const [phase, setPhase] = useState<Phase>("checking");
  const [layer, setLayer] = useState<CompanionLayer | null>(null);
  const [freeDraws, setFreeDraws] = useState(0);
  const [upgrading, setUpgrading] = useState(false);

  // A non-Plus reader's free-draw count (only matters once billing is on; with Plus the
  // companion is unlimited and this never runs).
  useEffect(() => {
    if (isPlus || !user) return;
    return subscribeFreeDraws(user.uid, setFreeDraws);
  }, [isPlus, user]);

  useEffect(() => {
    if (!user || !settings.companionEnabled) return;
    let active = true;
    setPhase("checking");
    loadCachedMiddle(readingId, passage)
      .then((cached) => {
        if (!active) return;
        if (cached) {
          setLayer(cached);
          setPhase("done");
        } else {
          setPhase("idle");
        }
      })
      .catch(() => active && setPhase("idle"));
    return () => {
      active = false;
    };
  }, [user, readingId, passage, settings.companionEnabled]);

  if (!configured || loading) return null;

  if (!user) {
    return (
      <div className="mt-5 border-t border-line pt-4">
        <p className="font-body text-[13px] italic leading-[1.6] text-mist-2">
          The deeper layers for this reading are not authored yet.{" "}
          <Link href="/login" className="text-gold-bright hover:underline">
            Sign in
          </Link>{" "}
          to let the companion draw them out.
        </p>
      </div>
    );
  }

  // Companion turned off in settings: the passage stays its authored self, nothing more.
  if (!settings.companionEnabled) return null;

  const draft = () => {
    setPhase("drafting");
    generateMiddle(readingId, passage)
      .then((result) => {
        setLayer(result);
        setPhase("done");
        // A free reader's taste is spent on a successful draw (the server also only lets
        // a non-Plus reader draw on a free reading).
        if (!isPlus && user) recordFreeDraw(user.uid).catch(() => {});
      })
      .catch(() => setPhase("error"));
  };

  const upgrade = () => {
    if (!user) return;
    setUpgrading(true);
    startCheckout(user.uid).catch(() => setUpgrading(false));
  };

  if (phase === "checking") return null;

  if (phase === "done" && layer) {
    return (
      <div className="mt-5 border-l-2 border-gold/30 pl-4">
        <div className="mb-1 font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold/80">
          Drawn out by the companion
        </div>
        <Layer variant="meaning" label="Meaning" text={layer.meaning} />
        {layer.lenses?.theo || layer.lenses?.arch ? (
          <Lenses lenses={layer.lenses} />
        ) : null}
        <TheTurn addr={layer.addr} />
        <Ask text={layer.ask} />
        <AskResponse
          prompt={layer.ask}
          bookId={bookId}
          readingId={readingId}
          readingTitle={readingTitle}
          passageRef={passage.ref}
        />
        <p className="mt-3 font-body text-[11px] italic text-mist-2">
          Drafted for you, not authored. One reading, not the final word.
        </p>
      </div>
    );
  }

  // A non-Plus reader who has spent their free draw is invited to upgrade instead.
  const outOfFreeDraws = !isPlus && freeDraws >= FREE_DRAW_LIMIT;

  return (
    <div aria-live="polite" className="mt-5 border-t border-line pt-4">
      {outOfFreeDraws ? (
        <>
          <p className="mb-2 font-body text-[13px] italic leading-[1.6] text-mist">
            You have used your free draw. STRATA Plus opens the companion on
            every reading.
          </p>
          <button
            type="button"
            disabled={upgrading}
            onClick={upgrade}
            className="rounded-[10px] bg-gold px-4 py-2.5 font-ui text-[11px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright disabled:opacity-50"
          >
            {upgrading ? "Opening checkout" : "Unlock STRATA Plus"}
          </button>
        </>
      ) : (
        <>
          {phase === "error" ? (
            <p className="mb-2 font-body text-[13px] italic text-psyche">
              The companion could not draft this just now.
            </p>
          ) : (
            <p className="mb-2 font-body text-[13px] italic leading-[1.6] text-mist">
              The history above is authored. Let the companion draw out the
              meaning, the turn, and a question for you.
            </p>
          )}
          <button
            type="button"
            disabled={phase === "drafting"}
            onClick={draft}
            className="rounded-[10px] border border-gold/40 bg-gold-soft px-4 py-2.5 font-ui text-[11px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:border-gold/[0.6] disabled:opacity-50"
          >
            {phase === "drafting"
              ? "Drawing it out"
              : "Draw out the deeper layers"}
          </button>
          {!isPlus ? (
            <p className="mt-2 font-body text-[11px] italic text-mist-2">
              One free draw, then STRATA Plus.
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
