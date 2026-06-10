"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import {
  type Bookmark,
  clearBookmark as clearBookmarkRemote,
  setBookmark as setBookmarkRemote,
  subscribeBookmark,
} from "@/lib/bookmark";
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

// Where "Continue reading" points: the manual bookmark if one is placed, otherwise the most
// recent reading opened. isBookmark lets a surface show which it is.
export interface ContinueTarget {
  bookId: string;
  readingId: string;
  scene: number;
  isBookmark: boolean;
}

interface ResumeValue {
  // The single spot "Continue reading" resumes, and a ready-made href to it (at its scene).
  continueTarget: ContinueTarget | null;
  continueHref: string | null;
  // The saved scene index for a reading, or 0 when there is no spot to resume.
  sceneFor: (readingId: string) => number;
  // The href into a reading at its own auto-saved scene (used by the movement rows). The
  // reader honors ?s= on first render, so resuming is flicker-free from any entry point.
  resumeHref: (bookId: string, readingId: string) => string;
  // Whether the ribbon at this exact reading and scene is the placed bookmark.
  isBookmarked: (readingId: string, scene: number) => boolean;
  // Place the bookmark at this spot, or clear it when it is already exactly here.
  toggleBookmark: (bookId: string, readingId: string, scene: number) => void;
}

const FALLBACK: ResumeValue = {
  continueTarget: null,
  continueHref: null,
  sceneFor: () => 0,
  resumeHref: (bookId, readingId) => `/read/${bookId}/${readingId}`,
  isBookmarked: () => false,
  toggleBookmark: () => {},
};

const ResumeContext = createContext<ResumeValue | null>(null);

function hrefFor(bookId: string, readingId: string, scene: number): string {
  const base = `/read/${bookId}/${readingId}`;
  return scene > 0 ? `${base}?s=${scene}` : base;
}

// Subscribes once to the signed-in reader's bookmark, last spot, and per-reading resume
// positions, and resolves the single "Continue reading" target (bookmark first). Mounted
// high so the menu's "Continue", the home and book bookmark cards, the movement rows, and
// the reader's ribbon all read from one source. Signed out, there is nothing to resume.
export function ResumeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [scenes, setScenes] = useState<Map<string, number>>(new Map());
  const [lastRead, setLastRead] = useState<LastRead | null>(null);
  const [bookmark, setBookmarkState] = useState<Bookmark | null>(null);

  useEffect(() => {
    if (!user) {
      setScenes(new Map());
      setLastRead(null);
      setBookmarkState(null);
      return;
    }
    const unScenes = subscribeScenes(user.uid, setScenes);
    const unLast = subscribeLastRead(user.uid, setLastRead);
    const unMark = subscribeBookmark(user.uid, setBookmarkState);
    return () => {
      unScenes();
      unLast();
      unMark();
    };
  }, [user]);

  const value = useMemo<ResumeValue>(() => {
    const sceneFor = (readingId: string) => scenes.get(readingId) ?? 0;

    // The bookmark wins; the last-read spot is the fallback so casual readers still resume.
    const continueTarget: ContinueTarget | null = bookmark
      ? {
          bookId: bookmark.bookId,
          readingId: bookmark.readingId,
          scene: bookmark.scene,
          isBookmark: true,
        }
      : lastRead
        ? {
            bookId: lastRead.bookId,
            readingId: lastRead.readingId,
            scene: sceneFor(lastRead.readingId),
            isBookmark: false,
          }
        : null;

    return {
      continueTarget,
      continueHref: continueTarget
        ? hrefFor(
            continueTarget.bookId,
            continueTarget.readingId,
            continueTarget.scene,
          )
        : null,
      sceneFor,
      resumeHref: (bookId, readingId) =>
        hrefFor(bookId, readingId, sceneFor(readingId)),
      isBookmarked: (readingId, scene) =>
        bookmark?.readingId === readingId && bookmark?.scene === scene,
      toggleBookmark: (bookId, readingId, scene) => {
        if (!user) return;
        const here =
          bookmark?.readingId === readingId && bookmark?.scene === scene;
        if (here) {
          setBookmarkState(null); // optimistic; the listener reconciles
          clearBookmarkRemote(user.uid).catch(() => {});
        } else {
          const next = { bookId, readingId, scene };
          setBookmarkState(next);
          setBookmarkRemote(user.uid, next).catch(() => {});
        }
      },
    };
  }, [scenes, lastRead, bookmark, user]);

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}

export function useResume(): ResumeValue {
  return useContext(ResumeContext) ?? FALLBACK;
}
