"use client";

import type { Figure } from "@/lib/types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// A word in an authored note turned into a tap target: tapping opens the figure's image in a
// modal. Rendered inline (display:inline) so it flows and wraps with the surrounding prose,
// styled as a lapis glossary term with a small frame glyph to signal there is an image behind
// it. It always renders the label, so it degrades to plain text wherever it is not wired up.
export function FigureLink({
  figure,
  label,
}: {
  figure: Figure;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="inline cursor-pointer text-lapis underline decoration-dotted decoration-lapis/50 underline-offset-2 transition-colors hover:text-parchment hover:decoration-lapis"
      >
        {label}
        <svg
          width="9"
          height="9"
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="ml-[3px] inline-block align-[0.05em]"
        >
          <rect
            x="1.5"
            y="2.5"
            width="9"
            height="7"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <circle cx="4.5" cy="5" r="0.9" fill="currentColor" />
          <path
            d="M2 9l2.5-2.5 2 2 2-2.5 1.5 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <FigureLightbox figure={figure} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}

// The modal: the image centered on a dark veil, a top bar with a note toggle and a close, and
// the caption as a translucent band the reader can show or hide over the image. Closes on the
// veil, Escape, or the close control. A full-screen backdrop button takes the outside taps so
// the image and controls (which sit above it) never have to nest inside it.
function FigureLightbox({
  figure,
  onClose,
}: {
  figure: Figure;
  onClose: () => void;
}) {
  // The description starts visible so the reader sees it, and can be hidden to view the image
  // unobstructed, then brought back.
  const [showNote, setShowNote] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      // biome-ignore lint/a11y/useSemanticElements: a full-bleed lightbox veil, not the UA dialog box, whose default sizing and white background fight a full-screen overlay
      role="dialog"
      aria-modal="true"
      aria-label={figure.alt}
      className="fixed inset-0 z-[60] bg-deep/95 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />
      {/* The column floats above the backdrop; empty space passes taps through to it, while
          the controls and the image opt back in to receive their own. */}
      <div className="pointer-events-none relative flex h-full flex-col">
        <div className="pointer-events-auto flex items-center justify-between px-4 py-3">
          {figure.caption ? (
            <button
              type="button"
              onClick={() => setShowNote((v) => !v)}
              aria-pressed={showNote}
              className="rounded-full border border-line px-3 py-1.5 font-ui text-[10px] uppercase tracking-[.14em] text-parchment-2 transition-colors hover:border-gold/40 hover:text-parchment"
            >
              {showNote ? "Hide note" : "Show note"}
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-[8px] text-mist transition-colors hover:text-gold-bright"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M2 2l10 10M12 2L2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-5 pb-8">
          <div className="pointer-events-auto relative">
            <img
              src={figure.src}
              alt={figure.alt}
              className="max-h-[74vh] w-auto max-w-full rounded-[10px] border border-line"
            />
            {figure.caption && showNote ? (
              <div className="absolute inset-x-0 bottom-0 rounded-b-[10px] bg-deep/85 px-4 py-3 backdrop-blur-sm">
                <p className="font-body text-[13px] italic leading-[1.5] text-parchment-2">
                  {figure.caption}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
