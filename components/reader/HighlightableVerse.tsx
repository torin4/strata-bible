"use client";

import { type KeyboardEvent, type ReactNode, useRef, useState } from "react";
import { HighlightPopover } from "./HighlightPopover";
import { useHighlights } from "./HighlightProvider";

// Wraps a single verse's text. Signed out (or outside a provider) it returns the text
// untouched. Signed in, the verse becomes a tap target: tapping opens an action popover
// (highlight on/off, note). A washed verse shows the gold background; a noted one carries
// a small gold marker.
//
// It is a <span role="button">, NOT a <button>: a real button is an atomic inline-block
// box, so in running prose each verse would be bumped onto its own line. A span flows and
// wraps as inline text, with role/tabindex/keyboard handlers keeping it operable.
// box-decoration-clone carries the wash to each wrapped line fragment.
export function HighlightableVerse({
  vkey,
  children,
}: {
  vkey: string;
  children: ReactNode;
}) {
  const { enabled, has, getNote, activeKey, setActiveKey } = useHighlights();
  const [anchor, setAnchor] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  if (!enabled) return <>{children}</>;

  const on = has(vkey);
  const noted = Boolean(getNote(vkey));
  const open = activeKey === vkey;

  const toggle = (rect: DOMRect) => {
    setAnchor(rect);
    setActiveKey(open ? null : vkey);
  };

  // Closing returns focus to the verse so a keyboard user lands back where they were.
  const close = () => {
    setActiveKey(null);
    ref.current?.focus();
  };

  return (
    <>
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-pressed={on}
        aria-roledescription="highlightable verse"
        onClick={(e) => toggle(e.currentTarget.getBoundingClientRect())}
        onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle(e.currentTarget.getBoundingClientRect());
          }
        }}
        // A translucent gold fill alone composites to muddy brown on the near-black shell,
        // so a saved highlight also carries a gold-bright underline, which stays legible on
        // black where a wash cannot. The actively-tapped verse (popover open) gets the
        // strongest treatment so it is unmistakable which verse the popover acts on. The
        // 2px bottom border is always present (transparent when idle) so toggling never
        // shifts the line.
        className={`box-decoration-clone cursor-pointer rounded-[2px] border-b-2 transition-colors ${
          open
            ? "border-gold-bright bg-gold/[0.30]"
            : on
              ? "border-gold-bright/60 bg-gold/[0.16]"
              : "border-transparent hover:bg-parchment/[0.06]"
        }`}
      >
        {children}
        {noted ? (
          <sup className="ml-[2px] inline-block h-[5px] w-[5px] rounded-full bg-gold-bright align-super" />
        ) : null}
      </span>
      {open && anchor ? (
        <HighlightPopover vkey={vkey} anchor={anchor} onClose={close} />
      ) : null}
    </>
  );
}
