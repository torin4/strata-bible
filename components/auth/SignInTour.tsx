"use client";

// "What is STRATA?" on the sign-in page: a quiet link under the card that scrolls down to a
// short tour (three screenshots, a heading and a line each), condensed from the product page
// at spdigitallabs.app/strata/. Presentational only; it never touches auth.

const TOUR_ID = "what-strata-does";
const TOP_ID = "signin-top";

const WHYS = [
  {
    title: "An AI companion",
    body: "Strata Plus adds a companion that drafts the meaning, turn and question.",
  },
  {
    title: "History comes first",
    body: "Each reading begins with who wrote it and when.",
  },
  {
    title: "Honest about tensions",
    body: "Strata shows open questions instead of tidying them away.",
  },
  {
    title: "A question for you",
    body: "Each reading ends with a question for you to answer.",
  },
  {
    title: "Free to start",
    body: "Genesis 1 to 11 is free to read without an account.",
  },
];

const FEATURES = [
  {
    src: "/images/signin-home.jpg",
    alt: "Strata home screen with Genesis and Exodus.",
    title: "A library, read in movements",
    body: "Daily readings are grouped into movements, each with an introduction and a capstone.",
  },
  {
    src: "/images/signin-history.jpg",
    alt: "A reading of Genesis 1 opening with the history layer about the Babylonian exile.",
    title: "History behind every passage",
    body: "Every reading opens by saying who wrote it and what was happening then.",
  },
  {
    src: "/images/signin-turn.jpg",
    alt: "The meaning and the turn layers of a reading, ending with a question to answer.",
    title: "Meaning, the turn, your response",
    body: "Then you see what it means, how it speaks to you, and a question to answer.",
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduce ? "instant" : "smooth",
    block: "start",
  });
  // Move keyboard focus with the view so Tab continues from the new place.
  el.focus({ preventScroll: true });
}

function Chevron({ up }: { up?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={up ? "rotate-180" : undefined}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const LINK_CLASS =
  "inline-flex items-center gap-1.5 font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright focus-visible:text-gold-bright";

export function SignInTourLink() {
  return (
    <div className="mt-5 text-center">
      <button
        type="button"
        onClick={() => scrollToId(TOUR_ID)}
        aria-controls={TOUR_ID}
        className={LINK_CLASS}
      >
        What is STRATA?
        <Chevron />
      </button>
    </div>
  );
}

export function SignInTour() {
  return (
    <section
      id={TOUR_ID}
      tabIndex={-1}
      aria-labelledby="what-strata-title"
      className="border-t border-line bg-shell px-5 py-14 focus:outline-none"
    >
      <div className="mx-auto max-w-[24rem]">
        <h2
          id="what-strata-title"
          className="text-center font-display text-[20px] font-medium text-parchment"
        >
          What is STRATA?
        </h2>
        <p className="mt-3 text-center font-display text-[17px] leading-[1.4] text-gold-bright">
          Read the Bible with its history.
        </p>
        <p className="mt-4 text-center font-body text-[14.5px] leading-[1.7] text-parchment-2">
          Every passage opens with its history and ends with a question for you.
        </p>

        <h3 className="mt-12 font-display text-[17px] font-medium text-parchment">
          Why STRATA
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {WHYS.map((w) => (
            <li
              key={w.title}
              className="rounded-[12px] border border-line border-l-2 border-l-gold/60 bg-deep px-4 py-3"
            >
              <h4 className="font-ui text-[13px] font-semibold tracking-[.02em] text-parchment">
                {w.title}
              </h4>
              <p className="mt-1 font-body text-[14px] leading-[1.65] text-mist">
                {w.body}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 font-display text-[17px] font-medium text-parchment">
          How it works
        </h3>
        <ul className="mt-8 flex flex-col gap-12">
          {FEATURES.map((f) => (
            <li key={f.title} className="flex flex-col items-center">
              <img
                src={f.src}
                alt={f.alt}
                width={390}
                height={844}
                loading="lazy"
                className="h-auto w-[13rem] rounded-[22px] border border-line"
              />
              <h4 className="mt-5 text-center font-display text-[17px] font-medium text-parchment">
                {f.title}
              </h4>
              <p className="mt-2 text-center font-body text-[14px] leading-[1.7] text-parchment-2">
                {f.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-5">
          <a
            href="https://spdigitallabs.app/strata/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border border-gold/40 bg-gold-soft px-5 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:border-gold/[0.6]"
          >
            Full details, plans and policies
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={() => scrollToId(TOP_ID)}
            className={LINK_CLASS}
          >
            <Chevron up />
            Back to sign in
          </button>
        </div>
      </div>
    </section>
  );
}

export { TOP_ID };
