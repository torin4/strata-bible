"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import {
  type HighlightState,
  highlightKeysInRange,
  removeNote as removeNoteRemote,
  setHighlights,
  setNote as setNoteRemote,
  subscribeHighlights,
} from "@/lib/highlights";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

// One verse, identified the way the renderer knows it (its key parts).
export interface VerseRef {
  readingId: string;
  passageRef: string;
  n: number;
}

// The verse or span whose action popover is open. A single verse is anchorN === otherN.
// anchorN is the verse the popover anchors to (the one the reader first tapped), so it
// always has an on-screen box to position against, whichever end of the span it is.
export interface ActiveSelection {
  readingId: string;
  passageRef: string;
  anchorN: number;
  otherN: number;
}

interface HighlightContextValue {
  // Highlighting (and noting) is a signed-in feature. Signed out, `enabled` is false and
  // the verse wrapper renders plain text, so the reader stays fully usable without an account.
  enabled: boolean;
  has: (key: string) => boolean;
  getNote: (key: string) => string | undefined;
  // Highlight (or clear) every real verse in [start, end]. A single verse is start === end.
  setRange: (
    readingId: string,
    passageRef: string,
    start: number,
    end: number,
    on: boolean,
  ) => void;
  saveNote: (key: string, text: string) => void;
  removeNote: (key: string) => void;
  // The open selection, and the in-progress "select to" anchor. Held here so opening one
  // verse closes another's popover, and any verse can read whether it is in the active span.
  active: ActiveSelection | null;
  pending: VerseRef | null;
  openVerse: (ref: VerseRef) => void; // open the single-verse popover
  beginRange: (ref: VerseRef) => void; // enter "select to" mode anchored at ref
  extendTo: (ref: VerseRef) => void; // complete the range at the tapped end verse
  cancel: () => void; // close the popover and drop any pending selection
}

const INERT: HighlightContextValue = {
  enabled: false,
  has: () => false,
  getNote: () => undefined,
  setRange: () => {},
  saveNote: () => {},
  removeNote: () => {},
  active: null,
  pending: null,
  openVerse: () => {},
  beginRange: () => {},
  extendTo: () => {},
  cancel: () => {},
};

const HighlightContext = createContext<HighlightContextValue | null>(null);

const EMPTY: HighlightState = { verses: new Set(), notes: new Map() };

// Subscribes to the signed-in reader's verse highlights and notes, and exposes optimistic
// mutators. Persistence lives in Firestore (see lib/highlights); this mirrors it into React.
export function HighlightProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [state, setState] = useState<HighlightState>(EMPTY);
  const [active, setActive] = useState<ActiveSelection | null>(null);
  const [pending, setPending] = useState<VerseRef | null>(null);

  useEffect(() => {
    if (!user) {
      setState(EMPTY);
      return;
    }
    return subscribeHighlights(user.uid, setState);
  }, [user]);

  // Escape leaves "select to" mode (the popover, when open, runs its own Escape handler).
  useEffect(() => {
    if (!pending) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPending(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pending]);

  const value = useMemo<HighlightContextValue>(() => {
    if (!user) return INERT;
    const { verses, notes } = state;
    return {
      enabled: true,
      active,
      pending,
      has: (key) => verses.has(key),
      getNote: (key) => notes.get(key),
      // Optimistic flips, then persist. The snapshot listener reconciles the truth; a failed
      // write leaves things where the reader put them rather than flickering.
      setRange: (readingId, passageRef, start, end, on) => {
        const keys = highlightKeysInRange(readingId, passageRef, start, end);
        if (keys.length === 0) return;
        setState((prev) => {
          const nextVerses = new Set(prev.verses);
          const nextNotes = new Map(prev.notes);
          for (const key of keys) {
            if (on) {
              nextVerses.add(key);
            } else {
              nextVerses.delete(key);
              nextNotes.delete(key); // a note has no home without its highlight
            }
          }
          return { verses: nextVerses, notes: nextNotes };
        });
        setHighlights(user.uid, keys, on).catch(() => {});
      },
      saveNote: (key, text) => {
        const trimmed = text.trim();
        setState((prev) => {
          const nextVerses = new Set(prev.verses);
          const nextNotes = new Map(prev.notes);
          if (trimmed) {
            nextVerses.add(key); // noting a verse highlights it
            nextNotes.set(key, trimmed);
          } else {
            nextNotes.delete(key);
          }
          return { verses: nextVerses, notes: nextNotes };
        });
        setNoteRemote(user.uid, key, trimmed).catch(() => {});
      },
      removeNote: (key) => {
        setState((prev) => {
          const nextNotes = new Map(prev.notes);
          nextNotes.delete(key);
          return { verses: prev.verses, notes: nextNotes };
        });
        removeNoteRemote(user.uid, key).catch(() => {});
      },
      openVerse: (ref) => {
        setPending(null);
        setActive({
          readingId: ref.readingId,
          passageRef: ref.passageRef,
          anchorN: ref.n,
          otherN: ref.n,
        });
      },
      beginRange: (ref) => {
        setActive(null);
        setPending(ref);
      },
      extendTo: (ref) => {
        // Complete the span when the end tap lands in the same passage as the anchor; a tap
        // in a different passage abandons the range and just opens that verse on its own.
        if (
          pending &&
          pending.readingId === ref.readingId &&
          pending.passageRef === ref.passageRef
        ) {
          setActive({
            readingId: ref.readingId,
            passageRef: ref.passageRef,
            anchorN: pending.n,
            otherN: ref.n,
          });
        } else {
          setActive({
            readingId: ref.readingId,
            passageRef: ref.passageRef,
            anchorN: ref.n,
            otherN: ref.n,
          });
        }
        setPending(null);
      },
      cancel: () => {
        setActive(null);
        setPending(null);
      },
    };
  }, [user, state, active, pending]);

  return (
    <HighlightContext.Provider value={value}>
      {children}
      {pending ? <RangeHint onCancel={() => setPending(null)} /> : null}
    </HighlightContext.Provider>
  );
}

// A fixed chip shown while the reader is picking the far end of a range. It does not cover
// the scripture (no backdrop), so the next verse tap is what sets the end.
function RangeHint({ onCancel }: { onCancel: () => void }) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-gold/30 bg-deep/95 px-4 py-2 shadow-2xl backdrop-blur">
        <span className="font-ui text-[10.5px] uppercase tracking-[.14em] text-parchment-2">
          Tap the last verse
        </span>
        <button
          type="button"
          onClick={onCancel}
          className="font-ui text-[10px] uppercase tracking-[.14em] text-mist transition-colors hover:text-gold-bright"
        >
          Cancel
        </button>
      </div>
    </div>,
    document.body,
  );
}

export function useHighlights(): HighlightContextValue {
  return useContext(HighlightContext) ?? INERT;
}
