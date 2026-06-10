"use client";

import {
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { HighlightPopover } from "./HighlightPopover";
import { useHighlights } from "./HighlightProvider";

// Wraps a single verse's text. Signed out (or outside a provider) it returns the text
// untouched. Signed in, the verse becomes a tap target. A first tap opens the action
// popover (highlight on/off, note, explain) for that one verse; from there the reader can
// "Extend", after which the next verse tapped sets the far end of a range. A saved
// highlight shows the gold wash plus a bright underline; the verse the popover acts on, and
// every verse inside an active span, show the strongest treatment so the selection is plain.
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
  const {
    enabled,
    has,
    getNote,
    active,
    pending,
    openVerse,
    extendTo,
    cancel,
  } = useHighlights();
  const ref = useRef<HTMLSpanElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  // The verse this wrapper stands for, from its key (readingId|passageRef|n). A passageRef
  // can hold colons and dashes but never a "|", so the first and last separators are exact.
  const sep1 = vkey.indexOf("|");
  const sep2 = vkey.lastIndexOf("|");
  const readingId = vkey.slice(0, sep1);
  const passageRef = vkey.slice(sep1 + 1, sep2);
  const n = Number(vkey.slice(sep2 + 1));

  const samePassage =
    active?.readingId === readingId && active?.passageRef === passageRef;
  const lo = active ? Math.min(active.anchorN, active.otherN) : 0;
  const hi = active ? Math.max(active.anchorN, active.otherN) : -1;
  const inActiveSpan = Boolean(enabled && samePassage && n >= lo && n <= hi);
  // Only the anchor verse renders the popover, and it always has an on-screen box (it is the
  // verse the reader first tapped), so a span opened from either end still positions cleanly.
  const isAnchor = Boolean(enabled && samePassage && active?.anchorN === n);
  const isPending = Boolean(
    enabled &&
      pending?.readingId === readingId &&
      pending?.passageRef === passageRef &&
      pending?.n === n,
  );
  const saved = enabled && has(vkey);
  const noted = enabled && Boolean(getNote(vkey));

  // Capture the box when this verse becomes the popover's anchor, fresh each time, so a
  // selection completed after scrolling still opens against the verse's real position.
  useEffect(() => {
    if (isAnchor) setRect(ref.current?.getBoundingClientRect() ?? null);
  }, [isAnchor]);

  if (!enabled) return <>{children}</>;

  // A tap either sets the far end of an in-progress range, or opens this verse on its own.
  const activate = () => {
    if (pending) extendTo({ readingId, passageRef, n });
    else openVerse({ readingId, passageRef, n });
  };

  // Closing returns focus to the verse so a keyboard user lands back where they were.
  const close = () => {
    cancel();
    ref.current?.focus();
  };

  const wash = inActiveSpan
    ? "border-gold-bright bg-gold/[0.30]"
    : isPending
      ? "border-gold-bright/70 bg-gold/[0.14]"
      : saved
        ? "border-gold-bright/60 bg-gold/[0.16]"
        : "border-transparent hover:bg-parchment/[0.06]";

  return (
    <>
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isAnchor}
        aria-pressed={saved}
        aria-roledescription="highlightable verse"
        onClick={activate}
        onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            activate();
          }
        }}
        // The 2px bottom border is always present (transparent when idle) so toggling a
        // highlight never shifts the line; a saved or selected verse colors it gold-bright,
        // which stays legible on the near-black shell where a translucent fill cannot.
        className={`box-decoration-clone cursor-pointer rounded-[2px] border-b-2 transition-colors ${wash}`}
      >
        {children}
        {noted ? (
          <sup className="ml-[2px] inline-block h-[5px] w-[5px] rounded-full bg-gold-bright align-super" />
        ) : null}
      </span>
      {isAnchor && rect ? (
        <HighlightPopover
          readingId={readingId}
          passageRef={passageRef}
          startN={lo}
          endN={hi}
          anchor={rect}
          onClose={close}
        />
      ) : null}
    </>
  );
}
