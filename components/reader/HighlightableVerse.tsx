"use client";

import { type ReactNode, useRef, useState } from "react";
import { HighlightPopover } from "./HighlightPopover";
import { useHighlights } from "./HighlightProvider";

// Wraps a single verse's text. Signed out (or outside a provider) it returns the text
// untouched. Signed in, the verse becomes a tap target: tapping opens an action popover
// (highlight on/off, note). A washed verse shows the gold background; a noted one carries
// a small gold marker. It is an inline button so it flows with the surrounding scripture
// and wraps across lines; box-decoration-clone carries the wash to each line fragment.
export function HighlightableVerse({
  vkey,
  children,
}: {
  vkey: string;
  children: ReactNode;
}) {
  const { enabled, has, getNote, activeKey, setActiveKey } = useHighlights();
  const [anchor, setAnchor] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  if (!enabled) return <>{children}</>;

  const on = has(vkey);
  const noted = Boolean(getNote(vkey));
  const open = activeKey === vkey;

  // Closing returns focus to the verse so a keyboard user lands back where they were.
  const close = () => {
    setActiveKey(null);
    buttonRef.current?.focus();
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-pressed={on}
        aria-label={
          noted
            ? "Highlighted verse with a note, open actions"
            : on
              ? "Highlighted verse, open actions"
              : "Highlight verse"
        }
        onClick={(e) => {
          setAnchor(e.currentTarget.getBoundingClientRect());
          setActiveKey(open ? null : vkey);
        }}
        className={`box-decoration-clone inline cursor-pointer rounded-[2px] text-left align-baseline transition-colors ${
          on ? "bg-gold/[0.22]" : "hover:bg-parchment/[0.05]"
        }`}
      >
        {children}
        {noted ? (
          <sup className="ml-[2px] inline-block h-[5px] w-[5px] rounded-full bg-gold-bright align-super" />
        ) : null}
      </button>
      {open && anchor ? (
        <HighlightPopover vkey={vkey} anchor={anchor} onClose={close} />
      ) : null}
    </>
  );
}
