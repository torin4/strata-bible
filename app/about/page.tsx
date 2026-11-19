import Link from "next/link";

// About STRATA: the vision and the origin. A quiet, authored page, no interactivity.
// The through-line: the book is whole as it is, and knowing its history enriches rather
// than threatens it. Scholars named here are the ones actually cited across the readings.
export const metadata = {
  title: "About STRATA",
  alternates: { canonical: "/about" },
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
            The Bible is a beautiful story as it is. I did not make STRATA to
            improve it, to defend it, or to argue it away. I made it to help
            people read the Bible the way it was actually made: as a library
            that many people wrote and gathered over many centuries, in real
            places and under real pressure.
          </p>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              A curated book
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              The Bible we hold today is a carefully curated book. Generations
              of people gathered its writings, weighed them, put them in order,
              and handed them down with enormous care, and the result is one of
              the great works that human beings have ever made. Nothing on this
              site questions that. STRATA starts from the book as we have it,
              and every reading stays close to it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              The history beneath it
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              But every page came from somewhere. Someone wrote it in a
              particular century, while carrying a particular grief, hope, or
              quarrel. When we know who those writers were and what they were
              living through, we do not lose anything in the text. We understand
              it better. The history behind a passage is often the key to what
              the writer meant, why he wrote it, and what he wanted it to do.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-mist">
              For a long time I felt that history as a threat, as though
              pointing out the places where different writers and sources were
              joined together might pull the whole thing apart. Scholars such as
              Robert Alter, Richard Elliott Friedman, Claus Westermann, John
              Walton, Mark S. Smith, Gerhard von Rad, and Carol Newsom, along
              with many others cited throughout these readings, have shown
              something closer to the reverse. Those joins are not damage. They
              show us generations of believers thinking out loud and arguing
              with one another over a very long time. When we see that history
              clearly, we usually find more meaning in the text, not less.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              The recurring image
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              There is a second way the history reaches into our own time.
              People have kept returning to some of these images long after the
              century that produced them. Many peoples have told stories of a
              world drawn out of chaos, a garden lost, a flood that destroys the
              world and makes it new, a brother wronged and later restored, or a
              person thrown into a pit who slowly climbs out. People kept
              telling these stories long after the world that first told them
              was gone. When a reading offers a second lens, I am following one
              of those patterns. I do not mean to reduce the text to psychology.
              I want to show why people have kept returning to an old image, and
              why it may still speak to you. I offer that lens quietly, beside
              the history and never in place of it.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-mist">
              Scholars such as Mircea Eliade, Joseph Campbell, and Northrop Frye
              spent their lives tracing these recurring images. The biblical
              writers did something similar themselves, because later writers
              took up the images of earlier ones and read them as patterns that
              would come back again.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              Why now
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-mist">
              Many readers today want to see how things were made, and I have
              tried to give them that. I did not build STRATA to prove the
              Christian story, and I did not build it to disprove it. I set the
              history beside the text in four layers, so that you can take in
              all of it at once. The first layer explains what a passage meant
              to its first readers. The second explains what it has meant in
              every age since. The third asks what it means for your life now,
              and the fourth gives you a question to answer in return.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-mist">
              For now, some readings have only the Bible text and a note on its
              history. On those readings the companion, STRATA's AI reading
              guide, can write the rest for you. Everything it writes is marked
              as written by the companion, because it is one way to read the
              passage and never the final word.
            </p>
          </section>

          <section className="border-l-2 border-gold/30 pl-5">
            <h2 className="mb-3 font-ui text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              How it came together
            </h2>
            <p className="font-body text-[15.5px] leading-[1.85] text-parchment-2">
              I began this on my own, during one of the hardest stretches of my
              life. Reading the Bible this way, slowly and without reaching for
              the tidy answer, was part of how I found my footing again, and by
              the time I finished I was on steadier ground. STRATA is what I
              needed in that season, and I made it in the hope that it will help
              someone else in theirs.
            </p>
          </section>

          <p className="border-t border-line pt-7 text-center font-scripture text-[18px] italic leading-[1.6] text-parchment-2">
            Every passage has four layers beneath it: history, meaning, the
            turn, and response. And through all of it, the book stays whole.
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
