"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { setLastRead } from "@/lib/lastRead";
import { markRead } from "@/lib/progress";
import { useEffect } from "react";

// A render-less island on the reader page: when a signed-in reader opens a reading, it
// records the spot in Firestore so the menu's "Continue reading" can return here. Silent
// and best-effort, it never blocks or disturbs the reader.
export function LastReadTracker({
  bookId,
  readingId,
  title,
  span,
}: {
  bookId: string;
  readingId: string;
  title: string;
  span: string;
}) {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    setLastRead(user.uid, { bookId, readingId, title, span }).catch(() => {});
    markRead(user.uid, readingId).catch(() => {});
  }, [user, bookId, readingId, title, span]);

  return null;
}
