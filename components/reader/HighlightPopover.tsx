"use client";

import { explainVerses, followUpVerses } from "@/lib/companion";
import { highlightKey, highlightKeysInRange } from "@/lib/highlights";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useHighlights } from "./HighlightProvider";

const WIDTH = 252;
const MARGIN = 8;

// The companion only explains a short selection; past this many verses it is hidden, so the
// model call stays bounded and the answer stays brief.
const EXPLAIN_MAX_VERSES = 6;

// The action sheet that opens over a tapped verse or selected span: highlight on/off, a note
// composer, Explain (a short companion reading), and on a single verse, Extend to start a
// range. Rendered in a portal and anchored to the verse's on-screen box with fixed
// positioning, so it never disturbs the inline flow of the scripture. It behaves as a modal
// dialog for the keyboard and screen reader: focus moves in on open, is trapped while open,
// and the caller returns it to the verse on close. Closes on outside tap, Escape, or scroll
// (but not while composing/asking).
export function HighlightPopover({
  readingId,
  passageRef,
  startN,
  endN,
  anchor,
  onClose,
}: {
  readingId: string;
  passageRef: string;
  startN: number;
  endN: number;
  anchor: DOMRect;
  onClose: () => void;
}) {
  const { has, getNote, setRange, saveNote, removeNote, beginRange } =
    useHighlights();

  // The real verses in the selection (range storage stays per-verse). A note attaches to the
  // first verse of the span, so it surfaces in the journal at the passage's natural place.
  const keys = highlightKeysInRange(readingId, passageRef, startN, endN);
  const count = keys.length;
  const isRange = endN > startN && count > 1;
  const startKey = highlightKey(readingId, passageRef, startN);
  const existing = getNote(startKey) ?? "";
  const allOn = count > 0 && keys.every((k) => has(k));
  const explainEligible = count > 0 && count <= EXPLAIN_MAX_VERSES;

  const [composing, setComposing] = useState(false);
  const [text, setText] = useState(existing);
  const panelRef = useRef<HTMLDialogElement>(null);

  const [asking, setAsking] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [askBusy, setAskBusy] = useState(false);
  const [askError, setAskError] = useState<string | null>(null);

  // One follow up to an explanation, capped at a single question. Once followAnswer lands,
  // the input is gone for this reading (re-running Explain clears it for a fresh one).
  const [followText, setFollowText] = useState("");
  const [followQuestion, setFollowQuestion] = useState<string | null>(null);
  const [followAnswer, setFollowAnswer] = useState<string | null>(null);
  const [followBusy, setFollowBusy] = useState(false);
  const [followError, setFollowError] = useState<string | null>(null);

  const runExplain = () => {
    setAskBusy(true);
    setAskError(null);
    setAnswer(null);
    setFollowText("");
    setFollowQuestion(null);
    setFollowAnswer(null);
    setFollowBusy(false);
    setFollowError(null);
    explainVerses(readingId, passageRef, startN, endN)
      .then((a) => {
        setAnswer(a);
        setAskBusy(false);
      })
      .catch((e: Error) => {
        setAskError(e.message === "plus-required" ? "plus" : e.message);
        setAskBusy(false);
      });
  };

  const runFollowUp = () => {
    const question = followText.trim();
    if (!question || !answer) return;
    setFollowBusy(true);
    setFollowError(null);
    setFollowQuestion(question);
    followUpVerses(readingId, passageRef, startN, endN, answer, question)
      .then((a) => {
        setFollowAnswer(a);
        setFollowBusy(false);
      })
      .catch((e: Error) => {
        setFollowError(
          e.message === "plus-required"
            ? "The companion is part of STRATA Plus."
            : "Could not answer that. Try again.",
        );
        setFollowBusy(false);
      });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    // Close when the verse scrolls away, but only while showing the toolbar. Once the
    // composer or the ask panel is open, the on-screen keyboard fires scroll/resize, and
    // closing then would make it impossible to write on a phone. (No resize listener for
    // the same reason: the keyboard's resize must not dismiss the composer.)
    const onScroll = () => {
      if (!composing && !asking) onClose();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [onClose, composing, asking]);

  // Move focus into the dialog on open so a keyboard user lands on the controls, not on
  // the obscured page behind. The composer's textarea takes focus itself via autoFocus.
  useEffect(() => {
    if (!composing) panelRef.current?.focus();
  }, [composing]);

  // Keep Tab within the dialog while it is open.
  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const els = panelRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), textarea, input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    );
    if (!els || els.length === 0) return;
    const first = els[0];
    const last = els[els.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (typeof document === "undefined") return null;

  // Clamp horizontally to the viewport; open upward when the verse sits low so a long
  // composer or answer still fits. Upward placement anchors the popover's bottom to the top.
  const vw = window.innerWidth;
  const left = Math.min(Math.max(anchor.left, MARGIN), vw - WIDTH - MARGIN);
  // Open toward whichever side of the verse has more room, and cap the height to that space
  // (the panel scrolls inside) so a loaded answer can never push the popover off-screen.
  const spaceBelow = window.innerHeight - anchor.bottom - 6 - MARGIN;
  const spaceAbove = anchor.top - 6 - MARGIN;
  const placeAbove = spaceAbove > spaceBelow;
  const maxHeight = placeAbove ? spaceAbove : spaceBelow;
  const position = placeAbove
    ? { top: anchor.top - 6, transform: "translateY(-100%)", maxHeight }
    : { top: anchor.bottom + 6, maxHeight };

  return createPortal(
    <>
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default"
      />
      {/* A non-modal <dialog> (we run our own backdrop + focus trap) so it can be pinned
          to the verse box; the element gives correct dialog semantics for free. */}
      <dialog
        ref={panelRef}
        open
        aria-modal="true"
        aria-label={
          isRange ? `Actions for verses ${startN} to ${endN}` : "Verse actions"
        }
        tabIndex={-1}
        onKeyDown={trapTab}
        style={{ left, width: WIDTH, ...position }}
        className="fixed z-50 m-0 max-w-none overflow-y-auto rounded-[12px] border border-line bg-deep p-2 text-parchment shadow-2xl focus:outline-none"
      >
        {composing ? (
          <div className="flex flex-col gap-2">
            <textarea
              // biome-ignore lint/a11y/noAutofocus: a composer opened by deliberate tap
              autoFocus
              aria-label={
                isRange
                  ? `Note on verses ${startN} to ${endN}`
                  : "Note on this verse"
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={
                isRange
                  ? "Write a note on this passage."
                  : "Write a note on this verse."
              }
              rows={3}
              className="w-full resize-none rounded-[8px] border border-line bg-shell px-3 py-2 font-body text-[14px] leading-[1.5] text-parchment placeholder:text-mist-2 focus:border-gold/50 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              {existing ? (
                <button
                  type="button"
                  onClick={() => {
                    removeNote(startKey);
                    onClose();
                  }}
                  className="font-ui text-[10px] uppercase tracking-[.14em] text-mist transition-colors hover:text-gold-bright"
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
                    // Noting a span highlights the whole span; the note lands on its first verse.
                    setRange(readingId, passageRef, startN, endN, true);
                    saveNote(startKey, text);
                    onClose();
                  }}
                />
              </div>
            </div>
          </div>
        ) : asking ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-1 pt-0.5">
              <span className="font-ui text-[9px] font-semibold uppercase tracking-[.18em] text-gold">
                {isRange ? "Explain this passage" : "Explain this verse"}
              </span>
              <button
                type="button"
                onClick={() => {
                  setAsking(false);
                  setAnswer(null);
                  setAskError(null);
                }}
                className="font-ui text-[9px] uppercase tracking-[.14em] text-mist transition-colors hover:text-gold-bright"
              >
                Done
              </button>
            </div>
            {askBusy ? (
              <output
                className="thinking-dots flex items-center gap-1 px-1 py-0.5"
                aria-label="Thinking"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-mist" />
                <span className="h-[5px] w-[5px] rounded-full bg-mist" />
                <span className="h-[5px] w-[5px] rounded-full bg-mist" />
              </output>
            ) : askError === "plus" ? (
              <p className="px-1 font-body text-[13px] leading-[1.5] text-mist">
                The companion is part of STRATA Plus.{" "}
                <Link
                  href="/pricing"
                  className="text-gold-bright transition-colors hover:text-gold"
                >
                  See plans ›
                </Link>
              </p>
            ) : askError ? (
              <p className="px-1 font-body text-[13px] italic text-psyche">
                {askError}{" "}
                <button
                  type="button"
                  onClick={runExplain}
                  className="not-italic text-gold-bright transition-colors hover:text-gold"
                >
                  Try again
                </button>
              </p>
            ) : answer ? (
              <div className="flex flex-col gap-2 px-1">
                <div>
                  <p className="whitespace-pre-line font-body text-[13.5px] leading-[1.6] text-parchment-2">
                    {answer}
                  </p>
                  <p className="mt-2 font-body text-[10.5px] italic leading-[1.5] text-mist-2">
                    Drawn for you, not the last word.
                  </p>
                </div>

                {/* One follow up. After it is answered the input is gone; the reader's
                    question and the reply read as a short, closed exchange. */}
                {followAnswer ? (
                  <div className="border-t border-line pt-2">
                    <p className="font-body text-[12.5px] italic leading-[1.5] text-mist">
                      {followQuestion}
                    </p>
                    <p className="mt-1.5 whitespace-pre-line font-body text-[13.5px] leading-[1.6] text-parchment-2">
                      {followAnswer}
                    </p>
                  </div>
                ) : followBusy ? (
                  <output
                    className="thinking-dots flex items-center gap-1 border-t border-line pt-2.5"
                    aria-label="Thinking"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-mist" />
                    <span className="h-[5px] w-[5px] rounded-full bg-mist" />
                    <span className="h-[5px] w-[5px] rounded-full bg-mist" />
                  </output>
                ) : (
                  <div className="border-t border-line pt-2">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        runFollowUp();
                      }}
                      className="flex items-center gap-1.5"
                    >
                      <input
                        type="text"
                        value={followText}
                        onChange={(e) => setFollowText(e.target.value)}
                        maxLength={500}
                        aria-label="Ask one follow up question"
                        placeholder="Ask one follow up"
                        className="min-w-0 flex-1 rounded-[8px] border border-line bg-shell px-2.5 py-1.5 font-body text-[13px] text-parchment placeholder:text-mist-2 focus:border-gold/50 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={!followText.trim()}
                        className="shrink-0 rounded-[8px] px-2.5 py-1.5 font-ui text-[10px] uppercase tracking-[.12em] text-gold-bright transition-colors hover:text-gold disabled:opacity-40"
                      >
                        Ask
                      </button>
                    </form>
                    {followError ? (
                      <p className="mt-1.5 font-body text-[12px] italic text-psyche">
                        {followError}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {/* A span shows its range; a saved note shows here on a plain tap, so the reader
                sees it without opening the editor. */}
            {isRange ? (
              <p className="px-1 pt-0.5 font-ui text-[9px] font-semibold uppercase tracking-[.18em] text-gold">
                Verses {startN}–{endN}
              </p>
            ) : null}
            {existing ? (
              <p className="whitespace-pre-line px-1 pt-1 font-body text-[13.5px] italic leading-[1.6] text-parchment-2">
                {existing}
              </p>
            ) : null}
            <div className="flex flex-wrap items-center gap-1">
              <PopButton
                label={existing ? "Edit note" : "Note"}
                onClick={() => {
                  setText(existing);
                  setComposing(true);
                }}
              />
              <PopButton
                label={allOn ? "Remove" : "Highlight"}
                onClick={() => {
                  if (allOn) {
                    setRange(readingId, passageRef, startN, endN, false);
                    onClose();
                  } else {
                    // Stay open so a note can follow the highlight.
                    setRange(readingId, passageRef, startN, endN, true);
                  }
                }}
              />
              {!isRange ? (
                <PopButton
                  label="Extend"
                  onClick={() =>
                    beginRange({ readingId, passageRef, n: startN })
                  }
                />
              ) : null}
              {explainEligible ? (
                <PopButton
                  label="Explain"
                  onClick={() => {
                    setAsking(true);
                    runExplain();
                  }}
                />
              ) : null}
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="ml-auto flex h-7 w-7 items-center justify-center rounded-[8px] text-mist transition-colors hover:text-gold-bright"
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
          </div>
        )}
      </dialog>
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
