// Build content/ecclesiastes.ts: the book file, movement 1, and the readings authored so far.
//
// Book five, and the first published STRATA book that is not narrative. It needs three passage
// kinds the catalogue has never shipped: `poem` at more than one instance, `saying-cluster`, and
// `argument`. See .scratch/ecclesiastes/spec.md.
//
// One generator emitting the file whole, for the reason recorded in build-ruth.ts: flipping a
// grounded skeleton to a sitting is a replacement, and placeReading refuses an id already present.
//
// Usage: npx tsx scripts/build-ecclesiastes.ts
import { writeFileSync } from "node:fs";
import { BSB_ECCLESIASTES as E } from "@/content/bsb-ecclesiastes";

const q = (s: string) => JSON.stringify(s);
const flat = (s: string) => s.replace(/\s+/g, " ").trim();
const range = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

const verse = (chapter: number, n: number, indent = "          ") => {
  const text = E[`${chapter}:${n}`];
  if (text === undefined)
    throw new Error(`no BSB verse at Ecclesiastes ${chapter}:${n}`);
  return `${indent}{ n: ${n}, text: ${q(text)} },`;
};
const verses = (chapter: number, ns: number[], indent = "          ") =>
  ns.map((n) => verse(chapter, n, indent)).join("\n");

// Lineate a verse for `poetry` form by breaking AFTER each given substring (ADR 0001). The words
// are never retyped and never altered: the result is asserted identical to the BSB once whitespace
// is collapsed, so a bad marker throws here rather than shipping a corrupted verse.
const lineate = (chapter: number, n: number, breaks: string[]) => {
  const original = E[`${chapter}:${n}`];
  if (original === undefined)
    throw new Error(`no BSB verse at Ecclesiastes ${chapter}:${n}`);
  let out = original;
  for (const marker of breaks) {
    if (!out.includes(marker))
      throw new Error(`Ecclesiastes ${chapter}:${n}: no marker "${marker}"`);
    out = out.replace(marker, `${marker}\n`);
  }
  out = out.replace(/\n /g, "\n");
  if (flat(out) !== flat(original))
    throw new Error(
      `Ecclesiastes ${chapter}:${n}: lineation changed the words`,
    );
  return `          { n: ${n}, text: ${q(out)} },`;
};

const OPENING_POEM = [
  lineate(1, 1, ["the words of the Teacher,"]),
  lineate(1, 2, ["says the Teacher,", "“futility of futilities!"]),
  lineate(1, 3, ["from all his labor,"]),
  lineate(1, 4, ["Generations come and generations go,"]),
  lineate(1, 5, ["The sun rises and the sun sets;"]),
  lineate(1, 6, ["then turns northward;", "round and round it swirls,"]),
  lineate(1, 7, [
    "flow into the sea,",
    "the sea is never full;",
    "from which the streams come,",
  ]),
  lineate(1, 8, [
    "All things are wearisome,",
    "more than one can describe;",
    "is not satisfied with seeing,",
  ]),
  lineate(1, 9, ["What has been will be again,", "will be done again;"]),
  lineate(1, 10, ["“Look, this is new”?"]),
  lineate(1, 11, ["of those who came before,", "will not be remembered"]),
].join("\n");

const file = `import type { Movement, Panel, Reading } from "@/lib/types";

// Ecclesiastes, book five. Twelve chapters, 222 verses, and the first published book in this app
// that is not narrative. Three passage kinds run here that no published book has used before:
// \`poem\` at more than a single instance, \`saying-cluster\`, and \`argument\`.
//
// Three movements rather than four. The movement apparatus is sized for long books, and 222 verses
// sits between Ruth's 85 and Mark's 661. Chapters 1-4, 5-8 and 9-12 divide the book at its own
// hinges, the last of them at 9:7 where the argument turns.
//
// Poems are lineated at the parallelism and authored whole, per ADR 0001 and the validator rule
// that a lineated poem may not skip a verse. The line breaks are inserted by scripts/build-
// ecclesiastes.ts, which asserts the words are unchanged against the BSB before emitting.
//
// The scripture here was materialised verbatim from content/bsb-ecclesiastes.ts. Never retype a
// verse by hand, and never hand-edit this file: change the generator and re-run it.

export const ECCLESIASTES: Reading[] = [
  {
    id: "ecc-1",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 1",
    chapterIndex: 1,
    title: "Nothing new under the sun",
    thread: "The book opens by announcing its own conclusion, spends eleven lines setting a human life beside the sun and the sea, and then points out that nobody will remember you either.",
    closeEnd: "He is the wisest man in the story and he says the wisdom is the part that hurts. That is the last line of the chapter, and it is not a complaint.",
    passages: [
      {
        ref: "1:1–11",
        kind: "poem",
        form: "poetry",
        title: "Vapour of vapours",
        verses: [
${OPENING_POEM}
        ],
        ground: {
          kind: "genre",
          text: "The speaker calls himself Qoheleth, which the BSB gives as the Teacher. It is a role rather than a name, closer to the one who convenes an assembly. The Hebrew is late and carries Persian loanwords, placing the writing centuries after the Solomon the opening points at. And the key word, which the BSB gives as futility, is <b>hevel</b>. It means vapour, or breath. The thing you can see and cannot hold.",
          src: "Fox · Seow · Longman · Alter",
        },
        misreading: {
          named:
            "Nothing new under the sun is world-weary cynicism, the shrug of a man who has seen it all.",
          why: "The poem is not shrugging. It is describing a closed system, and every image in it is of something moving hard and arriving nowhere: generations coming and going, a sun that hurries back to where it started, wind circling, rivers pouring into a sea that never fills. That is not boredom, it is motion without accumulation, which is a far more unsettling claim. And the line the poem actually ends on is not about novelty at all. It is about being forgotten.",
        },
        meaning:
          "The book opens by asking what a person gains, and the word is commercial: what is the profit, after costs. The poem answers by setting a human life beside the earth, the sun, the wind and the sea, all of which outlast it and none of which arrive anywhere. Then the sting in the last verse, which is not about the world but about you. There is no remembrance of those who came before. He has moved from cosmology to the thing that actually frightens people in about ten lines.",
        lenses: {
          theo: "Nothing here is said against God, and God is not mentioned. That is the book's method. It starts from what anybody can see, and refuses to reach for a consolation it has not earned yet.",
        },
      },
      {
        ref: "1:12–18",
        kind: "argument",
        form: "prose",
        title: "I set my mind to seek",
        verses: [
${verses(1, range(12, 18))}
        ],
        ground: {
          kind: "historical",
          text: "He takes up the royal voice here and then abandons it: after chapter two the book never speaks as a king again, which is why most readers take the crown as a device rather than a claim. The method he describes is deliberate investigation. And the phrase for what he finds, a pursuit of the wind, is a chasing or a herding of something that cannot be herded.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The experiment is honest, and that is what makes the finding hard. He does not conclude that wisdom is worthless; later in the book he says plainly that wisdom beats folly the way light beats darkness. What he says here is narrower and worse. Understanding a thing does not fix it, and it costs. What is crooked cannot be straightened. With much wisdom comes much sorrow. That is not an argument against learning. It is a warning about what learning does not do.",
        addr: {
          mode: "claims",
          text: "You have wanted to understand a situation, on the working assumption that understanding it would give you some purchase on it. This book agrees that you can understand it, and tells you plainly that the purchase is not included.",
        },
        ask: "What are you still hoping to think your way out of?",
      },
    ],
  },
  {
    id: "ecc-2",
    bookId: "ecclesiastes",
    tier: "grounded",
    span: "Ecclesiastes 2",
    chapterIndex: 2,
    title: "The experiment",
    passages: [
      {
        ref: "2:1–26 (selected)",
        kind: "argument",
        form: "prose",
        title: "I denied myself nothing",
        verses: [
${verses(2, [1, 3, 4, 8, 10, 11, 13, 14, 17, 18, 22, 23, 24])}
        ],
        ground: {
          kind: "historical",
          text: "The experiment in full, and it is run in order: laughter and wine first, then building, gardens, pools, servants, herds, silver and gold, then wisdom itself, with a verdict recorded after each. The conclusion each time is the word from chapter one. And then, at the end, the first appearance of the sentence this book keeps returning to, that there is nothing better than to eat and drink and find enjoyment in one's work. It arrives in chapter two, long before most readers expect this book to offer anything at all.",
          src: "Fox · Seow · Krüger",
        },
      },
    ],
  },
];

// Movement 1. No doorway until movement 2 exists; no capstone until the movement completes.
export const UNDER_THE_SUN_MOVEMENT: Movement = {
  id: "under-the-sun",
  index: 1,
  title: "Under the sun",
  range: "Ecclesiastes 1–4",
  throughline:
    "A man with every resource available sets out to find what a life adds up to, and reports back honestly. The answer he keeps arriving at is vapour, and the first thing he does with it is tell you to eat your bread.",
  chapterStart: 1,
  chapterEnd: 4,
  situation: {
    kicker: "The ground beneath the sun",
    title: "The situation",
    paragraphs: [
      "Under the sun is the book's own phrase, used around thirty times, and it marks the boundary of the enquiry. It means the world as anyone can observe it, with no appeal to anything outside it. That is a deliberate limit rather than an oversight, and everything the book concludes is concluded inside it.",
      "Wisdom writing was an international trade. Egypt and Mesopotamia produced instruction texts and sceptical dialogues for centuries, and some of them sound startlingly like this one: a man arguing with his own soul about whether living is worth it, or a servant agreeing with every contradictory thing his master proposes. Israel's contribution sits inside that conversation rather than apart from it.",
      "And what Proverbs claims is the thing this book is testing. Proverbs offers a world that works: diligence produces plenty, righteousness produces long life, folly produces ruin. Ecclesiastes reports the exceptions and then refuses to treat them as exceptions. Job does the same from a different direction, with one man's case instead of a survey.",
      "The economic detail is real too. Chapter 5 describes officials watching officials, absentee owners, and wealth that cannot be slept on. That is the world of a small province inside a large empire, where the money and the decisions are made a long way off.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
};

// The book-level composition overlay.
export const ECCLESIASTES_INTRO: Panel = {
  kicker: "An introduction · Ecclesiastes 1–12",
  title: "The book that argues with the rest",
  paragraphs: [
    "Ecclesiastes is twelve chapters and 222 verses, and it is the strangest thing in the Hebrew Bible. It speaks in the first person, calls itself Qoheleth, which is a role rather than a name, and presents itself as a king in Jerusalem, which points at Solomon without ever saying the word. It abandons that pose after chapter two. Its Hebrew is late and carries Persian loanwords, which places the writing several centuries after any Solomon, most likely in the Persian period.",
    "What it says is why it is remarkable. That the dead know nothing and have no further reward. That a man has no advantage over a beast, since both go to the same place. That he has seen a righteous man perish in his righteousness and a wicked man live long in his wickedness. These are not marginal remarks made in passing. They are the argument, and they contradict things said elsewhere in the same collection.",
    "It nearly did not survive the cut. Ancient discussion records real dispute about whether it belonged, and the objection was exactly the one a modern reader raises: that it contradicts itself, and that it could be read as heresy. The six verses at the end, in a different voice, praising the Teacher from outside his own book and closing on fear God and keep his commandments, are widely read as the frame that made it keepable. Whether that is a later hand or the author signing his own work is genuinely argued.",
    "And it is not, in the end, a book about despair, however often it is quoted that way. Six times it stops to say the same thing. Eat your bread. Drink your wine. Enjoy your work. Be with the person you love. It grants that permission on the basis of the bleakness rather than in spite of it, which is a harder thing than optimism and a good deal more use.",
  ],
  timeline: [
    {
      tag: "c. 950 BCE",
      text: "Solomon, whom the opening verses point at without naming him.",
    },
    {
      tag: "c. 450–200 BCE",
      text: "The window most place the writing in, on the evidence of the language.",
    },
    {
      tag: "c. 200 BCE",
      text: "Ben Sira writes, and the wisdom tradition this book argues inside is well established.",
    },
    {
      tag: "100s CE",
      text: "Rabbinic discussion records real dispute over whether the book belonged in the collection at all.",
    },
  ],
  sources: "Fox · Seow · Longman · Krüger · Barton",
};
`;

writeFileSync("content/ecclesiastes.ts", file);
console.log(
  "Wrote content/ecclesiastes.ts: ecc-1 (poem + argument), ecc-2 (grounded).",
);
