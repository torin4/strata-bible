"use client";

import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { isFreeMovement } from "@/lib/access";

// The counterpart of LockBadge: a small "Free" chip on the movement that is the free
// sample, so a visitor can see up front which part of the book is open. Renders nothing
// when billing is off, when the movement is not the free sample, or when the reader
// already has everything (Plus or owns the book), so it only ever appears where the
// distinction is real.
export function FreeBadge({
  bookId,
  movementId,
}: {
  bookId: string;
  movementId: string;
}) {
  const { isPlus, billingEnabled, owns } = useSubscription();
  if (
    !billingEnabled ||
    isPlus ||
    !isFreeMovement(bookId, movementId) ||
    owns(bookId)
  ) {
    return null;
  }
  return (
    <span className="rounded-full border border-lapis/40 bg-lapis/[0.08] px-[7px] py-[2px] font-ui text-[8.5px] font-semibold uppercase tracking-[.16em] text-lapis">
      Free
    </span>
  );
}
