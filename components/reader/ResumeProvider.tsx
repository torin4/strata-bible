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

// A resolved resume spot: book, reading, and scene, plus whether it is the manual pin. Used
// both for the continue target (which follows the reader) and for the bookmark target.
export interface ContinueTarget {
  bookId: string;
  readingId: string;
  scene: number;
  isBookmark: boolean;
}

interface ResumeValue {
  // The single spot "Continue reading" resumes, and a ready-made href to it (at its scene).
  // This follows the reader: it is the last reading opened, not the pinned bookmark.
  continueTarget: ContinueTarget | null;
  continueHref: string | null;
  // The manual bookmark as its own spot (null when none is placed), and a ready-made href to
  // it. Surfaces show this beside the continue target when the reader has wandered off the pin.
  bookmarkTarget: ContinueTarget | null;
  bookmarkHref: string | null;
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
  bookmarkTarget: null,
  bookmarkHref: null,
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
// positions, and resolves the "Continue reading" target (last read first) plus the pinned
// bookmark alongside it. Mounted high so the menu's "Continue", the home and book cards, the
// movement rows, and the reader's ribbon all read from one source. Signed out, nothing resumes.
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

    // The manual pin, kept on its own so surfaces can show it beside the continue target when
    // the two diverge. It stays put no matter where the reader wanders next.
    const bookmarkTarget: ContinueTarget | null = bookmark
      ? {
          bookId: bookmark.bookId,
          readingId: bookmark.readingId,
          scene: bookmark.scene,
          isBookmark: true,
        }
      : null;

    // Continue follows the reader: the last reading opened wins, so "Continue reading" always
    // points where they actually are. The bookmark is only the fallback for a reader who has
    // pinned a spot but not yet opened anything; otherwise it stands on its own, alongside.
    const lastTarget: ContinueTarget | null = lastRead
      ? {
          bookId: lastRead.bookId,
          readingId: lastRead.readingId,
          scene: sceneFor(lastRead.readingId),
          isBookmark: false,
        }
      : null;
    const continueTarget = lastTarget ?? bookmarkTarget;

    return {
      continueTarget,
      continueHref: continueTarget
        ? hrefFor(
            continueTarget.bookId,
            continueTarget.readingId,
            continueTarget.scene,
          )
        : null,
      bookmarkTarget,
      bookmarkHref: bookmarkTarget
        ? hrefFor(
            bookmarkTarget.bookId,
            bookmarkTarget.readingId,
            bookmarkTarget.scene,
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
