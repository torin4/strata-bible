// Build Exodus 35-40, the construction, and place it in the book.
//
// The reading's subject is the repetition. These six chapters restate the seven that preceded the
// golden calf almost word for word, with the verbs changed from you are to make into he made.
// Authoring both blocks at full apparatus would make a reader meet the same specifications twice;
// dropping the block would lose the end of the book. So the pairing is shown and argued instead.
//
// One passage per chapter, kept deliberately sparse in the middle: chapters 37 to 39 are the
// "here it is again" passages and the plainness is the point.
//
// Usage: npx tsx scripts/build-as-commanded.ts
import { BSB_EXODUS } from "@/content/bsb-exodus";
import { placeReadingInFile } from "./place-reading";

const q = (s: string) => JSON.stringify(s);
const verses = (chapter: number, ns: number[]) =>
  ns
    .map((n) => {
      const text = BSB_EXODUS[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at ${chapter}:${n}`);
      return `          { n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");

const reading = `  {
    id: "ex-35",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 35–40 (selected)",
    chapterIndex: 35,
    crossesChapters: true,
    title: "Just as the LORD had commanded",
    unitLabel: "Scene",
    thread: "Six chapters now repeat the seven that came before the calf, almost word for word, with one change: you are to make becomes he made. The book could have said they did everything as commanded in a single verse. It spends six chapters instead, and it spends them straight after the failure.",
    closeEnd: "A cloud settles on the tent, the glory fills it, and the man who built it cannot go in. That is the last thing the book says.",
    passages: [
      {
        label: "One",
        ref: "35:1–29 (selected)",
        kind: "scene",
        form: "prose",
        title: "Everyone whose heart moved them",
        verses: [
${verses(35, [21, 22, 29])}
        ],
        ground: {
          kind: "historical",
          text: "The materials are collected. Everyone whose heart moved them brought something: brooches, earrings, rings, ornaments, all of it gold, brought by men and women both, as a freewill offering. The list of what they hand over is close to the list of what they handed over in chapter 32.",
          src: "Propp · Meyers · Fretheim",
        },
        meaning:
          "Read this against the calf and it is the same people, the same gold and the same enthusiasm, pointed somewhere else. Nobody in the text draws the comparison for you. The earrings that became a calf a few chapters ago are now going into a tent, and the difference is not that the people have become reliable. It is that this time what they are giving to was specified in advance by somebody other than them.",
        addr: {
          mode: "names",
          text: "The energy that went into the wrong thing is usually the same energy the right thing needs. It does not have to be replaced, only aimed.",
        },
        ask: "What have you poured yourself into that was pointed at the wrong thing, and could the same effort go somewhere better?",
      },
      {
        label: "Two",
        ref: "36:3–7",
        kind: "scene",
        form: "prose",
        title: "More than enough",
        verses: [
${verses(36, [3, 5, 6, 7])}
        ],
        ground: {
          kind: "historical",
          text: "The craftsmen come to Moses with a problem nobody in scripture has before or since: the people are bringing more than is needed for the work. So Moses gives an order restraining them from bringing anything else, and the text says they were restrained from bringing more.",
          src: "Meyers · Propp",
        },
        meaning:
          "This is the only place in the Bible where generosity has to be stopped. It is a small joke and a serious one. The people who complained about water, complained about food, complained about meat, and built a calf out of impatience, now have to be told to stop giving. Nothing has been said to make them like this. They were simply given something specific to do.",
      },
      {
        label: "Three",
        ref: "37:1–25 (selected)",
        kind: "scene",
        form: "prose",
        title: "He made it",
        verses: [
${verses(37, [1, 6, 10, 17, 25])}
        ],
        ground: {
          kind: "historical",
          text: "Here is the repetition, plainly. Chapter 25 said: they are to construct an ark of acacia wood, two and a half cubits long, a cubit and a half wide. Chapter 37 says: Bezalel went on to construct the ark of acacia wood, two and a half cubits long, a cubit and a half wide. The same for the table, the lampstand and the incense altar. Same dimensions, same materials, same order, one word changed.",
          src: "Propp · Childs",
        },
      },
      {
        label: "Four",
        ref: "38:1–21 (selected)",
        kind: "scene",
        form: "prose",
        title: "The mirrors",
        verses: [
${verses(38, [1, 8, 21])}
        ],
        ground: {
          kind: "historical",
          text: "The altar, then the bronze basin, and one detail that appears nowhere in the instructions: the basin was made from the mirrors of the women who served at the entrance to the tent. Chapter 30 said make a bronze basin. It did not say what from. Then an inventory of the metal used, recorded like an account.",
          src: "Meyers · Propp",
        },
        meaning:
          "In six chapters of near-exact repetition, this is one of the few things that is new, and it is not a specification. It is a note about where the bronze came from. Somebody handed over the object they looked at themselves in, and the writer thought that was worth recording by name of donor rather than by weight. The inventory that follows counts everything in talents and shekels. This verse counts something the inventory cannot.",
      },
      {
        label: "Five",
        ref: "39:1–43 (selected)",
        kind: "scene",
        form: "prose",
        title: "As the LORD had commanded",
        verses: [
${verses(39, [1, 32, 42, 43])}
        ],
        ground: {
          kind: "historical",
          text: "The phrase just as the LORD had commanded Moses runs through this chapter like a refrain, seven times over in the making of the garments alone. Then the work is finished, and brought to Moses, and he inspects all of it and blesses them. The wording of that inspection deliberately echoes the end of the creation account: the work is finished, it is seen, it is blessed.",
          src: "Childs · Propp · Fretheim",
        },
        meaning:
          "This is where the repetition pays. The refrain is not filler; it is a verdict, repeated until it cannot be missed, that the instruction and the execution match. And it matters where the book puts it. Between the plans and the building comes the calf, so this chapter is the record that what was broken got rebuilt exactly to specification, down to the loops on the curtains. Other readings are available: scribal duplication, or a text meant to be recited aloud in worship rather than read. Neither of them explains why the duplicate block sits precisely on the far side of the failure.",
      },
      {
        label: "Six",
        ref: "40:17–38 (selected)",
        kind: "scene",
        form: "prose",
        title: "The cloud, and the glory",
        verses: [
${verses(40, [17, 33, 34, 35, 36, 37, 38])}
        ],
        ground: {
          kind: "historical",
          text: "It is set up on the first day of the first month of the second year, almost exactly a year after they left Egypt. Moses finishes the work. Then the cloud covers the tent and the glory fills it, and Moses cannot go in. The book ends with the arrangement for travel: when the cloud lifted they moved on, when it stayed they stayed, and it was fire by night, in the sight of all Israel.",
          src: "Propp · Childs · Meyers",
        },
        meaning:
          "The last thing that happens in Exodus is that the man who built the tent is shut out of it. Not punished, not rebuked; the place is simply too full. Everything he asked for in chapter 33 has arrived, and it arrives as something he cannot walk into. And then the book stops mid-journey, on an instruction about watching a cloud, which is the least conclusive ending available. A people who spent forty chapters learning that they were not going to be told the itinerary are left waiting to see whether tomorrow they travel or stay.",
        lenses: {
          theo: "It closes on presence rather than arrival. No land, no temple, no settled life. A tent, a cloud, and a people who will move when it moves.",
        },
        addr: {
          mode: "names",
          text: "You may know the version of getting what you asked for where it turns out to be larger than you can handle, and the version of guidance where all you are given is whether to move today.",
        },
        ask: "If the only direction you were given was stay or go, and only for today, could you live like that?",
      },
    ],
  },`;

placeReadingInFile("content/exodus.ts", reading, "ex-35", 35);
console.log("Placed ex-35: 6 scenes across chapters 35 to 40.");
