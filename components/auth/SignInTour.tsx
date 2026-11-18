"use client";

// "What is STRATA?" on the sign-in page: a quiet link under the card that scrolls down to a
// short tour (three screenshots, a heading and a line each), condensed from the product page
// at spdigitallabs.app/strata/. Presentational only; it never touches auth.

const TOUR_ID = "what-strata-does";
const TOP_ID = "signin-top";

const FEATURES = [
  {
    src: "/images/signin-home.jpg",
    alt: "Strata home screen with Genesis and Exodus.",
    title: "A library, read in movements",
    body: "Each book comes in short daily readings, grouped into movements that open with an introduction and end with a capstone, so you always know where you are in the story.",
  },
  {
    src: "/images/signin-history.jpg",
    alt: "A reading of Genesis 1 opening with the history layer about the Babylonian exile.",
    title: "The history behind every passage",
    body: "Every reading starts with who wrote the passage, when, and what was happening to the people who first heard it. Sources are named and scholars summed up in plain words.",
  },
  {
    src: "/images/signin-turn.jpg",
    alt: "The meaning and the turn layers of a reading, ending with a question to answer.",
    title: "Meaning, the turn, and your response",
    body: "Then what the passage has meant in every age, how it turns to speak to you today, and a question to answer in your own words. Open tensions are shown honestly, not tidied away.",
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
          What STRATA does
        </h2>
        <p className="mt-2 text-center font-body text-[13px] italic text-mist-2">
          Scripture grounded in the history it grew out of.
        </p>

        <ul className="mt-10 flex flex-col gap-12">
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
              <h3 className="mt-5 text-center font-display text-[17px] font-medium text-parchment">
                {f.title}
              </h3>
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
