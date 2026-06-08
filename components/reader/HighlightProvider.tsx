"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import {
  type HighlightState,
  removeNote as removeNoteRemote,
  setHighlight,
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

interface HighlightContextValue {
  // Highlighting (and noting) is a signed-in feature. Signed out, `enabled` is false and
  // the verse wrapper renders plain text, so the reader stays fully usable without an account.
  enabled: boolean;
  has: (key: string) => boolean;
  getNote: (key: string) => string | undefined;
  toggle: (key: string) => void;
  saveNote: (key: string, text: string) => void;
  removeNote: (key: string) => void;
  // The verse whose action popover is open, if any. Held here so opening one verse's
  // popover closes another's, and any verse can read whether it is the active one.
  activeKey: string | null;
  setActiveKey: (key: string | null) => void;
}

const INERT: HighlightContextValue = {
  enabled: false,
  has: () => false,
  getNote: () => undefined,
  toggle: () => {},
  saveNote: () => {},
  removeNote: () => {},
  activeKey: null,
  setActiveKey: () => {},
};

const HighlightContext = createContext<HighlightContextValue | null>(null);

const EMPTY: HighlightState = { verses: new Set(), notes: new Map() };

// Subscribes to the signed-in reader's verse highlights and notes, and exposes optimistic
// mutators. Persistence lives in Firestore (see lib/highlights); this mirrors it into React.
export function HighlightProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [state, setState] = useState<HighlightState>(EMPTY);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setState(EMPTY);
      return;
    }
    return subscribeHighlights(user.uid, setState);
  }, [user]);

  const value = useMemo<HighlightContextValue>(() => {
    if (!user) return INERT;
    const { verses, notes } = state;
    return {
      enabled: true,
      activeKey,
      setActiveKey,
      has: (key) => verses.has(key),
      getNote: (key) => notes.get(key),
      // Optimistic flips, then persist. The snapshot listener reconciles the truth; a
      // failed write leaves things where the reader put them rather than flickering.
      toggle: (key) => {
        const on = !verses.has(key);
        setState((prev) => {
          const nextVerses = new Set(prev.verses);
          const nextNotes = new Map(prev.notes);
          if (on) {
            nextVerses.add(key);
          } else {
            nextVerses.delete(key);
            nextNotes.delete(key); // a note has no home without its highlight
          }
          return { verses: nextVerses, notes: nextNotes };
        });
        setHighlight(user.uid, key, on).catch(() => {});
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
    };
  }, [user, state, activeKey]);

  return (
    <HighlightContext.Provider value={value}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlights(): HighlightContextValue {
  return useContext(HighlightContext) ?? INERT;
}
