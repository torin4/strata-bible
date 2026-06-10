"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { subscribeScenes } from "@/lib/progress";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ResumeValue {
  // The saved scene index for a reading, or 0 when there is no spot to resume.
  sceneFor: (readingId: string) => number;
  // The href into a reading, carrying ?s= when there is a saved scene past the start. The
  // reader honors ?s= on first render, so resuming is flicker-free from any entry point.
  resumeHref: (bookId: string, readingId: string) => string;
}

const FALLBACK: ResumeValue = {
  sceneFor: () => 0,
  resumeHref: (bookId, readingId) => `/read/${bookId}/${readingId}`,
};

const ResumeContext = createContext<ResumeValue | null>(null);

// Subscribes once to the signed-in reader's per-reading resume positions and hands out the
// scene and a ready-made href. Mounted high so both the menu's "Continue" and every movement
// row can resume the exact scene the reader left off on. Signed out, every spot is 0.
export function ResumeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [scenes, setScenes] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    if (!user) {
      setScenes(new Map());
      return;
    }
    return subscribeScenes(user.uid, setScenes);
  }, [user]);

  const value = useMemo<ResumeValue>(() => {
    const sceneFor = (readingId: string) => scenes.get(readingId) ?? 0;
    return {
      sceneFor,
      resumeHref: (bookId, readingId) => {
        const scene = sceneFor(readingId);
        const base = `/read/${bookId}/${readingId}`;
        return scene > 0 ? `${base}?s=${scene}` : base;
      },
    };
  }, [scenes]);

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}

export function useResume(): ResumeValue {
  return useContext(ResumeContext) ?? FALLBACK;
}
