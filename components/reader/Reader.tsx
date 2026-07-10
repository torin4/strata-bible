"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/auth/SubscriptionProvider";
import { Paywall } from "@/components/billing/Paywall";
import { BookmarkButton } from "@/components/reader/BookmarkButton";
import { TIER_LABEL, genreLabel } from "@/lib/labels";
import { setScene } from "@/lib/progress";
import type { Capstone as CapstoneData, Movement, Reading } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Capstone } from "./Capstone";
import { Passage } from "./Passage";
import { ReaderSizeStepper } from "./ReaderSizeStepper";
import { SpanBanner } from "./SpanBanner";
import { ThreadGloss } from "./ThreadGloss";

interface Adjacent {
  id: string;
  title: string;
}

// What "Grounded" means, for the tier chip's tooltip and screen readers. The reading body
// says the same thing in place (see CompanionMiddle's empty-middle line).
const GROUNDED_GLOSS =
  "This reading carries the text and its history. The companion can draw out the rest.";

// One Reading, paginated a scene at a time. Each passage (a "scene") is its own screen
// with the four layers; the bottom nav steps scene to scene, then flows into the
// previous/next reading at the ends. When this is the last reading in the book, one more
// step past the final scene reaches the book's wrap-up, its own screen behind the nav.
export function Reader({
  reading,
  closingMovement,
  closingBookCapstone,
  bookTitle,
  isFree = true,
  prev,
  next,
}: {
  reading: Reading;
  closingMovement?: Movement;
  closingBookCapstone?: CapstoneData;
  bookTitle?: string;
  isFree?: boolean;
  prev?: Adjacent;
  next?: Adjacent;
}) {
  const passages = reading.passages;
  const last = passages.length - 1;
  const hasWrapup = Boolean(closingBookCapstone);
  const wrapupIndex = passages.length; // one scene past the last passage
  const maxScene = hasWrapup ? wrapupIndex : last;

  // Restore a deep-linked scene (?s=) on first render via a lazy initializer so the
  // component never flickers at scene 0. The typeof guard is required because Next
  // server-renders this component before window is available.
  const [i, setI] = useState(() => {
    if (typeof window === "undefined") return 0;
    const s = Number.parseInt(
      new URLSearchParams(window.location.search).get("s") ?? "",
      10,
    );
    return Number.isInteger(s) && s > 0 && s <= maxScene ? s : 0;
  });
  const { isPlus, owns } = useSubscription();
  const { user, loading: authLoading } = useAuth();
  const pathname = usePathname();
  // Read the user at write time without making auth a trigger: only a real scene step should
  // persist, never auth resolving under a reader sitting still.
  const userRef = useRef(user);
  userRef.current = user;
  // Skip persisting on the first render, so merely opening a reading (including a deep link
  // back to a saved scene) never overwrites the saved spot. Only stepping scenes writes.
  const mounted = useRef(false);

  // Reflect the current scene in the URL without a navigation so a scene stays shareable.
  useEffect(() => {
    const url =
      i === 0 ? window.location.pathname : `${window.location.pathname}?s=${i}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0 });

    // Persist where the reader is, so the movement and the menu can resume here. Reaching
    // the final scene resets the spot to 0, so a reading once finished opens fresh next time
    // and only a genuinely mid-stream reading resumes.
    if (mounted.current) {
      const u = userRef.current;
      if (u) setScene(u.uid, reading.id, i >= last ? 0 : i).catch(() => {});
    } else {
      mounted.current = true;
    }
  }, [i, last, reading.id]);

  // Soft content gate: a locked reading shows the paywall in place of the scenes. Free,
  // owning the book outright, or Plus all open it. Every hook above still runs, so this
  // early return obeys the rules of hooks.
  if (!isFree && !isPlus && !owns(reading.bookId)) {
    return (
      <Paywall
        bookId={reading.bookId}
        bookTitle={bookTitle}
        context={reading.title}
        readingId={reading.id}
      />
    );
  }

  const onWrapup = hasWrapup && i === wrapupIndex;
  const passage = passages[i];
  const isFirst = i === 0;
  const isLastPassage = i === last;
  const genre = genreLabel(passages.map((p) => p.kind));

  // Back steps to the previous scene, or crosses into the previous reading at the start,
  // or returns from the wrap-up to the final scene. Forward steps to the next scene, then
  // to the wrap-up (last reading) or the next reading, and stops at the wrap-up.
  const back = onWrapup
    ? { label: reading.title, onClick: () => setI(last) }
    : isFirst
      ? prev
        ? { label: prev.title, href: `/read/${reading.bookId}/${prev.id}` }
        : null
      : {
          label: `${passages[i - 1].label ?? "Previous"} · ${passages[i - 1].title}`,
          onClick: () => setI(i - 1),
        };

  const forward = onWrapup
    ? null
    : isLastPassage
      ? hasWrapup
        ? {
            label: `Look back over ${bookTitle ?? "the book"}`,
            onClick: () => setI(wrapupIndex),
          }
        : next
          ? { label: next.title, href: `/read/${reading.bookId}/${next.id}` }
          : null
      : {
          label: `${passages[i + 1].label ?? "Next"} · ${passages[i + 1].title}`,
          onClick: () => setI(i + 1),
        };

  return (
    <article className="relative">
      {/* Visually hidden live region: announces scene changes to screen readers. */}
      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {onWrapup
          ? `${bookTitle ?? "Book"} wrap-up`
          : passages.length > 1
            ? `${reading.unitLabel ?? "Scene"} ${i + 1} of ${passages.length}, ${passage?.title ?? reading.title}`
            : reading.title}
      </span>
      {/* The bookmark ribbon, top-right of the scene. Hidden on the wrap-up, which is not a
          spot to resume to. */}
      {onWrapup ? null : (
        <div className="absolute right-0 top-0 flex items-center gap-1">
          <ReaderSizeStepper />
          <BookmarkButton
            bookId={reading.bookId}
            readingId={reading.id}
            scene={i}
          />
        </div>
      )}
      {onWrapup ? null : (
        <>
          <div className="mb-[14px] flex flex-wrap items-center gap-2 pr-[104px]">
            {/* The tier chip only renders when it tells the reader something: "sitting" is
                the default fully-authored state, so it stays silent. "Grounded" carries a
                gloss, since the word alone reads as an editorial code. */}
            {reading.tier === "sitting" ? null : (
              <span
                title={GROUNDED_GLOSS}
                className="rounded-full border border-gold/50 bg-gold-soft px-[9px] py-1 font-ui text-[9.5px] font-semibold uppercase tracking-[.16em] text-gold-bright"
              >
                {TIER_LABEL[reading.tier]}
                <span className="sr-only">. {GROUNDED_GLOSS}</span>
              </span>
            )}
            <span className="rounded-full border border-lapis/40 bg-lapis/[0.08] px-[9px] py-1 font-ui text-[9.5px] font-semibold uppercase tracking-[.16em] text-lapis">
              {genre}
            </span>
            <span className="font-body text-[11px] italic tracking-[.06em] text-mist-2">
              {reading.span}
            </span>
          </div>

          {reading.crossesChapters && isFirst ? (
            <SpanBanner span={reading.span} />
          ) : null}

          <h1 className="mt-[2px] font-display text-[26px] font-medium leading-[1.15] tracking-[.01em] text-parchment">
            {reading.title}
          </h1>

          {passages.length > 1 ? (
            <div className="mt-2 font-ui text-[10px] uppercase tracking-[.2em] text-mist-2">
              {reading.unitLabel ?? "Scene"} {i + 1} of {passages.length}
            </div>
          ) : null}

          {reading.thread && isFirst ? (
            <ThreadGloss text={reading.thread} />
          ) : null}
        </>
      )}

      {/* Keyed on the scene so each forward/back step rises in; "wrapup" is its own key. */}
      <div key={onWrapup ? "wrapup" : i} className="stagger">
        {onWrapup ? (
          <>
            <div className="mb-4 font-ui text-[10px] uppercase tracking-[.22em] text-mist-2">
              {bookTitle ? `${bookTitle} · the wrap-up` : "The wrap-up"}
            </div>
            {closingBookCapstone ? (
              <Capstone capstone={closingBookCapstone} />
            ) : null}
          </>
        ) : (
          <>
            <Passage
              passage={passage}
              bookId={reading.bookId}
              readingId={reading.id}
              readingTitle={reading.title}
              isFree={isFree}
              firstScene={isFirst}
            />

            {!isLastPassage && reading.closeMid ? (
              <div className="mt-[26px] border-t border-line pt-[18px] text-center font-body text-[13px] italic leading-[1.6] text-mist-2">
                {reading.closeMid}
              </div>
            ) : null}

            {isLastPassage && reading.closeEnd ? (
              <div className="mt-[30px] border-t border-line pt-[22px] font-body text-[14px] italic leading-[1.66] text-mist">
                {reading.closeEnd}
              </div>
            ) : null}

            {isLastPassage && closingMovement?.capstone ? (
              <Capstone capstone={closingMovement.capstone} />
            ) : null}

            {/* The quiet case for an account, made once, at the reading's end: the moment
                a signed-out reader has just finished something worth returning to. */}
            {isLastPassage && !authLoading && !user ? (
              <p className="mt-[26px] border-t border-line pt-[18px] text-center font-body text-[13px] italic leading-[1.6] text-mist-2">
                <Link
                  href={`/login?next=${encodeURIComponent(pathname)}`}
                  className="text-lapis transition-colors hover:text-parchment"
                >
                  Sign in
                </Link>{" "}
                and STRATA keeps your place, your highlights, and your journal.
              </p>
            ) : null}
          </>
        )}
      </div>

      {back || forward ? (
        <nav className="mt-9 flex items-stretch justify-between gap-3 border-t border-line pt-5">
          <NavSlot
            align="left"
            label={back?.label}
            href={back?.href}
            onClick={back?.onClick}
          />
          <NavSlot
            align="right"
            prominent
            label={forward?.label}
            href={forward?.href}
            onClick={forward?.onClick}
          />
        </nav>
      ) : null}
    </article>
  );
}

// A single nav button: a real button for in-reading scene steps, a Link for crossing
// into the adjacent reading, or a disabled placeholder at the very ends.
function NavSlot({
  align,
  label,
  href,
  onClick,
  prominent,
}: {
  align: "left" | "right";
  label?: string;
  href?: string;
  onClick?: () => void;
  prominent?: boolean;
}) {
  if (!label) return <span className="max-w-[46%] flex-1" />;

  const arrow = align === "left" ? "‹" : "›";
  const body: ReactNode = (
    <span className={`flex flex-col ${align === "right" ? "text-right" : ""}`}>
      <span className="text-[9.5px] uppercase tracking-[.18em] text-mist-2">
        {align === "left" ? "Back" : "Continue"}
      </span>
      <span
        className={`mt-1 ${prominent ? "text-gold-bright group-hover:text-gold" : "text-parchment-2 group-hover:text-parchment"}`}
      >
        {align === "left" ? `${arrow} ${label}` : `${label} ${arrow}`}
      </span>
    </span>
  );

  const className =
    "group flex max-w-[46%] flex-1 rounded-[11px] border border-line px-4 py-3 font-ui text-[12px] transition-colors hover:border-gold/40";

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${align === "right" ? "justify-end" : ""}`}
      >
        {body}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${align === "right" ? "justify-end" : ""}`}
    >
      {body}
    </button>
  );
}
