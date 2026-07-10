"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useResume } from "@/components/reader/ResumeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

// The ribbon a reader places to mark their spot. Filled when the bookmark sits on exactly
// this reading and scene; tap to place it here, tap again to clear. Signed out, the same
// ribbon is the invitation: it links to sign-in (returning here after), since keeping your
// place is the account's first gift. This is what makes "Continue reading" deliberate:
// wandering never moves it, only the ribbon does.
export function BookmarkButton({
  bookId,
  readingId,
  scene,
}: {
  bookId: string;
  readingId: string;
  scene: number;
}) {
  const { user, loading } = useAuth();
  const { isBookmarked, toggleBookmark } = useResume();
  const pathname = usePathname();
  if (loading) return null;

  if (!user) {
    return (
      <Link
        href={`/login?next=${encodeURIComponent(pathname)}`}
        aria-label="Sign in to keep your place"
        title="Sign in to keep your place"
        className="flex h-8 w-8 items-center justify-center rounded-[8px] text-mist transition-colors hover:text-gold-bright"
      >
        <RibbonGlyph placed={false} />
      </Link>
    );
  }

  const placed = isBookmarked(readingId, scene);

  return (
    <button
      type="button"
      aria-pressed={placed}
      aria-label={placed ? "Remove bookmark" : "Bookmark this spot"}
      title={placed ? "Bookmarked" : "Bookmark this spot"}
      onClick={() => toggleBookmark(bookId, readingId, scene)}
      className="flex h-8 w-8 items-center justify-center rounded-[8px] text-mist transition-colors hover:text-gold-bright"
    >
      <RibbonGlyph placed={placed} />
    </button>
  );
}

function RibbonGlyph({ placed }: { placed: boolean }) {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16" aria-hidden="true">
      <path
        d="M2 1.5h9v12.5L6.5 10.7 2 14V1.5z"
        fill={placed ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        className={placed ? "text-gold-bright" : ""}
      />
    </svg>
  );
}
