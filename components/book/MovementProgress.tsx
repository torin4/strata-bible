"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { subscribeProgress } from "@/lib/progress";
import { useEffect, useState } from "react";

// A very low-profile bar under a movement summary: how many of its readings the signed-in
// reader has opened. Renders nothing when signed out, since there is no progress to track.
export function MovementProgress({ readingIds }: { readingIds: string[] }) {
  const { user } = useAuth();
  const [read, setRead] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setRead(new Set());
      return;
    }
    return subscribeProgress(user.uid, setRead);
  }, [user]);

  if (!user || readingIds.length === 0) return null;

  const done = readingIds.filter((id) => read.has(id)).length;
  const pct = Math.round((done / readingIds.length) * 100);

  return (
    <div
      className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-parchment/[0.08]"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-full bg-gold/70 transition-[width] duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
