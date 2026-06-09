"use client";

import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { isFreeMovement } from "@/lib/access";

// A small "Plus" chip on a movement the reader cannot open yet. Renders nothing when
// billing is off, when the movement is part of the free sample, or when the reader has
// Plus, so it only ever appears where it is true.
export function LockBadge({
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
    isFreeMovement(bookId, movementId) ||
    owns(bookId)
  ) {
    return null;
  }
  return (
    <span className="rounded-full border border-gold/50 bg-gold-soft px-[7px] py-[2px] font-ui text-[8.5px] font-semibold uppercase tracking-[.16em] text-gold-bright">
      Plus
    </span>
  );
}
