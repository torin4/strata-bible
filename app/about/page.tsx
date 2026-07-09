import Link from "next/link";

// About STRATA: the vision and the origin. A quiet, authored page, no interactivity.
// The through-line: the book stands on its own, and its history enriches rather than
// threatens it. Scholars named here are the ones actually cited across the readings.
export const metadata = {
  title: "About STRATA",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-shell px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-[40rem]">
        <header className="mb-10 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <div className="stagger" style={{ animationDelay: ".05s" }}>
          <div className="text-center font-ui text-[10px] uppercase tracking-[.24em] text-gold">
            The vision
          </div>
          <h1 className="mx-auto mt-4 max-w-[22ch] text-center font-display text-[30px] font-medium leading-[1.2] text-parchment sm:text-[34px]">
            Letting the book stand on its own
          </h1>
          <div className="mx-auto mt-7 mb-2 h-px w-[46px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <article className="stagger-children mt-8 flex flex-col gap-9">
          <p className="font-body text-[17px] leading-[1.8] text-parchment-2">
            The Bible is a beautiful story as it is. STRATA does not set out to
            improve it, or to defend it, or to argue it away. It sets out to
            read it the way it was actually made, as a library written and
            gathered across centuries, by many hands, in real places, under real
            pressure.
          </p>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              A curated book
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              What we hold today is a carefully curated book. It was gathered,
              weighed, ordered, and handed down with enormous care, and it
              stands on its own as one of the great works of human making. None
              of that is in question here. STRATA begins from the book as it is,
              and it stays close to it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              The history beneath it
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              But every page came from somewhere. Someone wrote it, in a
              particular century, carrying a particular grief, or hope, or
              quarrel. Knowing who they were, and what they were living through
              when they wrote, does not flatten the text. It opens it. The
              history behind a passage often turns out to be the key to what it
              means, why it was written, and what it was for.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-mist">
              For a long time that history felt like a threat, as though naming
              the seams might pull the whole thing apart. The work of scholars
              like Robert Alter, Richard Elliott Friedman, Claus Westermann,
              John Walton, Mark S. Smith, Gerhard von Rad, and Carol Newsom,
              among many others cited throughout these readings, has shown
              something closer to the reverse. The seams are not damage. They
              are the marks of a living tradition thinking out loud, and arguing
              with itself, across a very long time. Seen clearly, that history
              tends to enrich the meaning, not diminish it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              The recurring image
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              There is a second way the history reaches forward. Some of these
              images do not stay in their own century. A world drawn out of
              chaos, a garden lost, a flood that unmakes and remakes, a brother
              wronged and a brother restored, a descent into a pit and the long
              climb out of it, these recur across the stories of many peoples,
              and they keep their hold long after the world that first told them
              is gone. Where a reading opens a second lens, it is following one
              of those patterns, not to reduce the text to psychology, but to
              show how an old image goes on speaking, and why it can still find
              you. It is offered quietly, alongside the history and never in
              place of it.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-mist">
              Readers like Mircea Eliade, Joseph Campbell, and Northrop Frye
              spent their lives tracing these returns, and the Bible does the
              same from the inside, reading its own images forward as types that
              come back.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              Why now
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              We live in a moment that asks for transparency, and that is what
              STRATA tries to give. It does not set out to prove the Christian
              story, and it does not set out to disprove it. It lays the history
              down beside the text, in four layers, and lets you take in all of
              it at once. What a passage meant then. What it carries always. How
              it turns to address you now. And what it asks of you in return.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-mist">
              Some readings carry only the text and its history for now. There,
              the companion, STRATA's guided reader, can draw out the rest for
              you, and everything it drafts is marked as drafted, one reading
              and never the final word.
            </p>
          </section>

          <section className="border-l-2 border-gold/30 pl-5">
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              How it came together
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-parchment-2">
              I began this on my own, in one of the hardest stretches of my
              life. Reading the Bible this way, slowly, and without reaching for
              the tidy answer, was part of how I found my footing again. I
              finished it on steadier ground. STRATA is the thing I needed in
              that season, made in the hope that it finds someone else in
              theirs.
            </p>
          </section>

          <p className="border-t border-line pt-7 text-center font-scripture text-[18px] italic leading-[1.6] text-parchment-2">
            History, meaning, the turn, and response. Four layers beneath every
            passage, and the book left whole.
          </p>
        </article>

        <div className="mt-10 text-center">
          <Link
            href="/read/genesis/gen-1"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-lapis transition-colors hover:text-parchment"
          >
            Begin reading ›
          </Link>
        </div>
      </div>
    </main>
  );
}
