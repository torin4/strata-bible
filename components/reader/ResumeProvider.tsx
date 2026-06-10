"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { type LastRead, subscribeLastRead } from "@/lib/lastRead";
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
  // The reader's most recent spot (the bookmark), or null signed out / before any reading.
  lastRead: LastRead | null;
  // The saved scene index for a reading, or 0 when there is no spot to resume.
  sceneFor: (readingId: string) => number;
  // The href into a reading, carrying ?s= when there is a saved scene past the start. The
  // reader honors ?s= on first render, so resuming is flicker-free from any entry point.
  resumeHref: (bookId: string, readingId: string) => string;
}

const FALLBACK: ResumeValue = {
  lastRead: null,
  sceneFor: () => 0,
  resumeHref: (bookId, readingId) => `/read/${bookId}/${readingId}`,
};

const ResumeContext = createContext<ResumeValue | null>(null);

// Subscribes once to the signed-in reader's bookmark (where they left off) and per-reading
// resume positions, and hands out the scene and a ready-made href. Mounted high so the
// menu's "Continue", the home and book bookmark cards, and every movement row read from one
// source. Signed out, there is no bookmark and every spot is 0.
export function ResumeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [scenes, setScenes] = useState<Map<string, number>>(new Map());
  const [lastRead, setLastRead] = useState<LastRead | null>(null);

  useEffect(() => {
    if (!user) {
      setScenes(new Map());
      setLastRead(null);
      return;
    }
    const unScenes = subscribeScenes(user.uid, setScenes);
    const unLast = subscribeLastRead(user.uid, setLastRead);
    return () => {
      unScenes();
      unLast();
    };
  }, [user]);

  const value = useMemo<ResumeValue>(() => {
    const sceneFor = (readingId: string) => scenes.get(readingId) ?? 0;
    return {
      lastRead,
      sceneFor,
      resumeHref: (bookId, readingId) => {
        const scene = sceneFor(readingId);
        const base = `/read/${bookId}/${readingId}`;
        return scene > 0 ? `${base}?s=${scene}` : base;
      },
    };
  }, [scenes, lastRead]);

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}

export function useResume(): ResumeValue {
  return useContext(ResumeContext) ?? FALLBACK;
}
