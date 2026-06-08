"use client";

import type { ReactNode } from "react";
import { useHighlights } from "./HighlightProvider";

// Wraps a single verse's text. Signed out (or outside a provider) it returns the text
// untouched. Signed in, the verse becomes a tap target that toggles a gold wash, the
// state persisted per reader in Firestore. It is an inline button so it flows with the
// surrounding scripture and wraps across lines; box-decoration-clone carries the wash
// to each line fragment. A native button gives us Enter/Space and focus for free.
export function HighlightableVerse({
  vkey,
  children,
}: {
  vkey: string;
  children: ReactNode;
}) {
  const { enabled, has, toggle } = useHighlights();
  if (!enabled) return <>{children}</>;

  const on = has(vkey);
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={on ? "Remove highlight" : "Highlight verse"}
      onClick={() => toggle(vkey)}
      className={`box-decoration-clone inline cursor-pointer rounded-[2px] text-left align-baseline transition-colors ${
        on ? "bg-gold/[0.22]" : "hover:bg-parchment/[0.05]"
      }`}
    >
      {children}
    </button>
  );
}
