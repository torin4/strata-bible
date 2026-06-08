"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useHighlights } from "./HighlightProvider";

const WIDTH = 252;
const MARGIN = 8;

// The action sheet that opens over a tapped verse: highlight on/off, and a note composer.
// Rendered in a portal and anchored to the verse's on-screen box with fixed positioning,
// so it never disturbs the inline flow of the scripture. Closes on outside tap, Escape,
// or scroll (the verse would slide out from under a fixed popover).
export function HighlightPopover({
  vkey,
  anchor,
  onClose,
}: {
  vkey: string;
  anchor: DOMRect;
  onClose: () => void;
}) {
  const { has, getNote, toggle, saveNote, removeNote } = useHighlights();
  const on = has(vkey);
  const existing = getNote(vkey) ?? "";
  const [composing, setComposing] = useState(false);
  const [text, setText] = useState(existing);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onScroll = () => onClose();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  // Clamp horizontally to the viewport; open upward when the verse sits low so a long
  // composer still fits. Upward placement anchors the popover's bottom to the verse top.
  const vw = window.innerWidth;
  const left = Math.min(Math.max(anchor.left, MARGIN), vw - WIDTH - MARGIN);
  const placeAbove = anchor.bottom > window.innerHeight - 220;
  const position = placeAbove
    ? { top: anchor.top - 6, transform: "translateY(-100%)" }
    : { top: anchor.bottom + 6 };

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default"
      />
      <div
        style={{ left, width: WIDTH, ...position }}
        className="fixed z-50 rounded-[12px] border border-line bg-deep p-2 shadow-2xl"
      >
        {composing ? (
          <div className="flex flex-col gap-2">
            <textarea
              // biome-ignore lint/a11y/noAutofocus: a composer opened by deliberate tap
              autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a note on this verse."
              rows={3}
              className="w-full resize-none rounded-[8px] border border-line bg-shell px-3 py-2 font-body text-[14px] leading-[1.5] text-parchment placeholder:text-mist-2 focus:border-gold/50 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              {existing ? (
                <button
                  type="button"
                  onClick={() => {
                    removeNote(vkey);
                    onClose();
                  }}
                  className="font-ui text-[10px] uppercase tracking-[.14em] text-mist-2 transition-colors hover:text-gold-bright"
                >
                  Delete note
                </button>
              ) : (
                <span />
              )}
              <div className="flex items-center gap-1">
                <PopButton label="Cancel" onClick={() => setComposing(false)} />
                <PopButton
                  primary
                  label="Save"
                  onClick={() => {
                    saveNote(vkey, text);
                    onClose();
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <PopButton
              label={existing ? "Edit note" : "Note"}
              onClick={() => setComposing(true)}
            />
            <PopButton
              label={on ? "Remove" : "Highlight"}
              onClick={() => {
                if (on) {
                  toggle(vkey);
                  onClose();
                } else {
                  toggle(vkey); // stay open so a note can follow the highlight
                }
              }}
            />
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-[8px] text-mist-2 transition-colors hover:text-gold-bright"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  d="M2 2l10 10M12 2L2 12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>,
    document.body,
  );
}

function PopButton({
  label,
  onClick,
  primary,
}: {
  label: string;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[8px] px-3 py-1.5 font-ui text-[11px] uppercase tracking-[.12em] transition-colors ${
        primary
          ? "bg-gold text-deep hover:bg-gold-bright"
          : "text-parchment-2 hover:bg-parchment/[0.05] hover:text-parchment"
      }`}
    >
      {label}
    </button>
  );
}
