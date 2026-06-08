"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { AskResponse } from "@/components/journal/AskResponse";
import { Ask } from "@/components/reader/Ask";
import { Layer } from "@/components/reader/Layer";
import { Lenses } from "@/components/reader/Lenses";
import { TheTurn } from "@/components/reader/TheTurn";
import {
  type CompanionLayer,
  generateMiddle,
  loadCachedMiddle,
} from "@/lib/companion";
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
  const [phase, setPhase] = useState<Phase>("checking");
  const [layer, setLayer] = useState<CompanionLayer | null>(null);

  useEffect(() => {
    if (!user) return;
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
  }, [user, readingId, passage]);

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

  const draft = () => {
    setPhase("drafting");
    generateMiddle(readingId, passage)
      .then((result) => {
        setLayer(result);
        setPhase("done");
      })
      .catch(() => setPhase("error"));
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

  return (
    <div className="mt-5 border-t border-line pt-4">
      {phase === "error" ? (
        <p className="mb-2 font-body text-[13px] italic text-psyche">
          The companion could not draft this just now.
        </p>
      ) : (
        <p className="mb-2 font-body text-[13px] italic leading-[1.6] text-mist">
          The history above is authored. Let the companion draw out the meaning,
          the turn, and a question for you.
        </p>
      )}
      <button
        type="button"
        disabled={phase === "drafting"}
        onClick={draft}
        className="rounded-[10px] border border-gold/40 bg-gold-soft px-4 py-2.5 font-ui text-[11px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:border-gold/[0.6] disabled:opacity-50"
      >
        {phase === "drafting" ? "Drawing it out" : "Draw out the deeper layers"}
      </button>
    </div>
  );
}
