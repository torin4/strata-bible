"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Link from "next/link";
import { Fragment } from "react";

// The newcomer's one-glance answer to "what is STRATA": the four layers named plainly,
// with a path into the fuller vision at /about. Shown only signed out, where the dash is
// the pitch. Signed in it renders nothing, so a returning reader's bookmark and the book
// stay the focus. This is the inverse of ContinueReading, which is signed-in only, so the
// two never both occupy the slot below the tagline. Gating on auth (not on a resolved
// bookmark) keeps it flicker free: it never flashes in and then collapses.
const LAYERS: Array<{ name: string; gloss: string }> = [
  { name: "History", gloss: "what it meant then" },
  { name: "Meaning", gloss: "what it carries always" },
  { name: "The turn", gloss: "how it addresses you now" },
  { name: "Response", gloss: "what it asks in return" },
];

export function WhatIsStrata({ className }: { className?: string }) {
  const { user, loading } = useAuth();
  if (loading || user) return null;

  return (
    <section
      className={`text-center ${className ?? ""}`}
      style={{ animationDelay: ".12s" }}
    >
      <div className="font-ui text-[10px] font-semibold uppercase tracking-[.24em] text-gold">
        Read in four layers
      </div>
      <div className="mx-auto mt-[18px] grid max-w-[320px] grid-cols-[1fr_auto_1fr] items-baseline gap-x-2.5 gap-y-2.5 font-body text-[15px] leading-[1.35]">
        {LAYERS.map((layer) => (
          <Fragment key={layer.name}>
            <span className="text-right text-parchment-2">{layer.name}</span>
            <span aria-hidden="true" className="text-gold/50">
              ·
            </span>
            <span className="text-left italic text-mist">{layer.gloss}</span>
          </Fragment>
        ))}
      </div>
      <Link
        href="/about"
        className="mt-[22px] inline-block font-ui text-[12px] tracking-[.06em] text-lapis transition-colors hover:text-parchment"
      >
        How STRATA reads ›
      </Link>
    </section>
  );
}
