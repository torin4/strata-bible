"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { setHighlight, subscribeHighlights } from "@/lib/highlights";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface HighlightContextValue {
  // Highlighting is a signed-in feature. Signed out, `enabled` is false and the verse
  // wrapper renders plain text, so the reader stays fully usable without an account.
  enabled: boolean;
  has: (key: string) => boolean;
  toggle: (key: string) => void;
}

const INERT: HighlightContextValue = {
  enabled: false,
  has: () => false,
  toggle: () => {},
};

const HighlightContext = createContext<HighlightContextValue | null>(null);

// Subscribes to the signed-in reader's verse highlights and exposes an optimistic toggle.
// Persistence lives in Firestore (see lib/highlights); this just mirrors it into React.
export function HighlightProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [keys, setKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setKeys(new Set());
      return;
    }
    return subscribeHighlights(user.uid, setKeys);
  }, [user]);

  const value = useMemo<HighlightContextValue>(() => {
    if (!user) return INERT;
    return {
      enabled: true,
      has: (key) => keys.has(key),
      // Optimistic flip, then persist. The snapshot listener reconciles the truth;
      // a failed write leaves the verse where the reader tapped it rather than flickering.
      toggle: (key) => {
        const on = !keys.has(key);
        setKeys((prev) => {
          const next = new Set(prev);
          if (on) next.add(key);
          else next.delete(key);
          return next;
        });
        setHighlight(user.uid, key, on).catch(() => {});
      },
    };
  }, [user, keys]);

  return (
    <HighlightContext.Provider value={value}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlights(): HighlightContextValue {
  return useContext(HighlightContext) ?? INERT;
}
