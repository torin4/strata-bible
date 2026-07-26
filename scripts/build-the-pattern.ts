// Build Exodus 25-27, the tabernacle instructions, and place it in the book.
//
// Prose, not a statute-cluster: these chapters are continuous divine speech rather than a
// numbered code, and rendering specifications as law would imply the ark's dimensions claim a
// reader the way a commandment does. One passage per chapter, so every verse's chapter can be
// attributed and verified. Scripture materialised verbatim from the BSB lookup.
//
// Usage: npx tsx scripts/build-the-pattern.ts
import { BSB_EXODUS } from "@/content/bsb-exodus";
import { placeReadingInFile } from "./place-reading";

const q = (s: string) => JSON.stringify(s);

function verses(chapter: number, ns: number[]): string {
  return ns
    .map((n) => {
      const text = BSB_EXODUS[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at ${chapter}:${n}`);
      return `          { n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");
}

const reading = `  {
    id: "ex-25",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 25–27 (selected)",
    chapterIndex: 25,
    crossesChapters: true,
    title: "The pattern",
    unitLabel: "Scene",
    thread: "Forty days on the mountain, and what Moses is given is not more law. It is a set of building plans, in cubits, for a tent that can be carried.",
    closeEnd: "A lamp is to be kept burning from evening until morning, continually, which is the first standing duty anyone is given.",
    passages: [
      {
        label: "One",
        ref: "25:1–40 (selected)",
        kind: "scene",
        form: "prose",
        title: "So that I may dwell among them",
        verses: [
${verses(25, [2, 8, 9, 10, 11, 16, 17, 21, 22, 23, 30, 31, 40])}
        ],
        ground: {
          kind: "historical",
          text: "The materials come from a freewill offering, from everyone whose heart prompts him, and the list is what a people who had just been paid off by Egypt would actually have: gold, silver, bronze, dyed yarn, fine linen, acacia wood. Then the specifications, object by object. The ark first, then the table, then the lampstand, each in cubits, each with rings and poles so it can be carried.",
          src: "Propp · Meyers · Childs",
        },
        meaning:
          "The sentence the whole movement rests on is verse 8: make me a sanctuary, so that I may dwell among them. Everything after it is joinery in service of that. Notice what is being built and what is not. Not a temple, which is a building on a site, but a tent with poles through rings, designed from the first instruction to be taken down and carried. The God who has just refused to be seen arranges to be portable.",
        lenses: {
          theo: "The ark holds the tablets and the meeting happens above it, between two carved figures, over an empty space. The most sacred object in Israel is a box with the terms inside and nothing on top.",
        },
        addr: {
          mode: "names",
          text: "You know the difference between somebody visiting and somebody moving their things in. This is the second one, described in cubits.",
        },
        ask: "What would it change if presence were something arranged for rather than waited on?",
      },
      {
        label: "Two",
        ref: "26:1–33 (selected)",
        kind: "scene",
        form: "prose",
        title: "The tent, and the veil",
        verses: [
${verses(26, [1, 7, 15, 31, 33])}
        ],
        ground: {
          kind: "historical",
          text: "Ten linen curtains with cherubim worked into them, a covering of goat hair over that, upright acacia frames beneath, and a veil dividing the inside in two. Portable shrines of roughly this kind are known from Egypt and from nomadic peoples in the region, which makes the design less exotic than it reads and more like a familiar object put to a new use.",
          src: "Meyers · Propp",
        },
        meaning:
          "The veil is the point of the chapter. Having arranged to live among them, God then installs a curtain, and the innermost room is entered by one man once a year. Nearness and distance are being built into the same structure, in fabric, which is the same thing chapter 19 did with a fence around a mountain. The tabernacle does not resolve that tension. It houses it.",
      },
      {
        label: "Three",
        ref: "27:1–21 (selected)",
        kind: "scene",
        form: "prose",
        title: "The altar, and the lamp",
        verses: [
${verses(27, [1, 9, 20, 21])}
        ],
        ground: {
          kind: "historical",
          text: "Outside the tent, a bronze altar for burnt offerings, and around both a courtyard of linen hangings on posts, so the whole thing is a series of enclosures, each one nearer. The chapter ends with clear oil of pressed olives and an instruction that the lamp burn from evening until morning, continually, tended by Aaron and his sons.",
          src: "Propp · Meyers",
        },
        meaning:
          "The layout is an argument about access. Courtyard, then tent, then the room behind the veil, and each boundary is real. But the last instruction in the chapter is not about restriction at all. It is a light that has to be kept going all night, every night, by somebody who gets up to do it. The arrangement for God to live among these people turns out to require a person with a job.",
        addr: {
          mode: "names",
          text: "Most of what keeps anything alive is unglamorous and repeated: someone trims a wick in the dark so the light is still there in the morning.",
        },
        ask: "What are you tending that nobody sees, and what happens if you stop?",
      },
    ],
  },`;

placeReadingInFile("content/exodus.ts", reading, "ex-25", 25);
console.log("Placed ex-25: 3 scenes across chapters 25 to 27.");
