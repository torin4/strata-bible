import { getMovement } from "@/lib/content";
import type { Reading } from "@/lib/types";

// The free sample: the Primeval movement of Genesis (Genesis 1-11, creation through
// Babel). Everything past it is STRATA Plus. Kept as one rule so the free tier is easy to
// see and to move later.
export const FREE_BOOK_ID = "genesis";
export const FREE_MOVEMENT_ID = "primeval";

// A reading anyone can open without a subscription.
export function isFreeReading(reading: Reading): boolean {
  if (reading.bookId !== FREE_BOOK_ID) return false;
  return getMovement(reading.bookId, reading)?.id === FREE_MOVEMENT_ID;
}

// Whether a whole movement is part of the free sample (for lock badges on the book page).
export function isFreeMovement(bookId: string, movementId: string): boolean {
  return bookId === FREE_BOOK_ID && movementId === FREE_MOVEMENT_ID;
}

// Comped accounts: always treated as STRATA Plus, with no subscription (the owner, and
// any reviewers). Matched by email, case-insensitive. Kept here (no Firebase import) so
// both the client provider and the server companion route can check it.
const COMP_EMAILS = new Set(["torin2582@gmail.com"]);

export function isComped(email: string | null | undefined): boolean {
  return Boolean(email && COMP_EMAILS.has(email.toLowerCase()));
}
