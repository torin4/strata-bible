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

const TIME_POEM = [
  lineate(3, 1, ["To everything there is a season,"]),
  lineate(3, 2, ["a time to be born and a time to die,"]),
  lineate(3, 3, ["a time to kill and a time to heal,"]),
  lineate(3, 4, ["a time to weep and a time to laugh,"]),
  lineate(3, 5, ["a time to gather stones together,"]),
  lineate(3, 6, ["a time to count as lost,"]),
  lineate(3, 7, ["a time to tear and a time to mend,"]),
  lineate(3, 8, ["a time to love and a time to hate,"]),
].join("\n");

const file = `import type { Capstone, Movement, Panel, Reading } from "@/lib/types";

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
    tier: "sitting",
    span: "Ecclesiastes 2",
    chapterIndex: 2,
    title: "I denied myself nothing",
    thread: "He runs the experiment properly: pleasure, then building, then wealth, then wisdom itself, with a verdict recorded after each. Then he does the arithmetic on what happens to all of it afterwards.",
    closeEnd: "And then, with no transition at all, the first appearance of the sentence this book keeps coming back to. Eat, drink, and find something in the work.",
    passages: [
      {
        ref: "2:1–11",
        kind: "argument",
        form: "prose",
        title: "I denied myself nothing",
        verses: [
${verses(2, range(1, 11))}
        ],
        ground: {
          kind: "historical",
          text: "The list is a royal building programme as the ancient world understood one: houses, vineyards, gardens and parks, pools to water them, slaves born in the household, herds larger than anyone before him, silver and gold, singers. It reads like a royal inscription, the genre kings used to record their achievements, and it is imitating one on purpose. The difference is the last line, which no royal inscription ever carried.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is an experiment, not a confession. He says twice that his wisdom stayed with him throughout, which means he is not describing a man losing himself in pleasure. He is describing a man testing pleasure while taking notes. And he does not report that it failed to please him: his heart took delight in all his labour, and that was his reward. The verdict is not that it was not enjoyable. The verdict is that there was nothing to be gained. Nothing left over, nothing that accumulated.",
        lenses: {
          arch: "The achievement recorded in full, in the voice of the man who built it, ending on the sentence he did not expect to write. (The inscription that undercuts itself.)",
        },
      },
      {
        ref: "2:12–17",
        kind: "argument",
        form: "prose",
        title: "One event happens to both",
        verses: [
${verses(2, range(12, 17))}
        ],
        ground: {
          kind: "historical",
          text: "The comparison is not between wisdom and folly on their merits. He grants the merit immediately: wisdom exceeds folly as light exceeds darkness, and the wise man has eyes in his head. The argument is about what survives, and the term he lands on is the one he used of generations in chapter one. Both are forgotten.",
          src: "Fox · Seow",
        },
        meaning:
          "Here is the move the whole book turns on, made for the first time. He does not deny that wisdom is better. He denies that being better changes the outcome. The wise man and the fool both die and neither is remembered, and the sentence he arrives at is the bleakest in the chapter: so I hated life. It is worth noticing that he says it and then keeps going. This is a book that records the low point and continues to the next paragraph, which is a kind of honesty most consolation cannot manage.",
      },
      {
        ref: "2:18–26",
        kind: "argument",
        form: "prose",
        title: "The one who comes after",
        verses: [
${verses(2, range(18, 26))}
        ],
        ground: {
          kind: "historical",
          text: "The problem in this passage is inheritance. Everything he built goes to somebody who did not build it, and he has no way of knowing whether that person will be wise or a fool. In a world where a household's holdings were a family's entire security, that is a concrete anxiety rather than a philosophical one.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "He is not complaining that he has to die. He is complaining that the work will belong to somebody who did not do it and may not deserve it, which is a much more specific grievance and a far more familiar one. Then, at the end, with no transition, the first of this book's six permissions. There is nothing better than to eat and drink and find enjoyment in your work. It arrives in chapter two, immediately after a paragraph about hating everything, and he says it is from the hand of God. Both halves are meant.",
        addr: {
          mode: "claims",
          text: "You are working on something that will outlast your control of it, and be handed to somebody who did not build it and may not keep it well. The book does not tell you to mind less about that. It tells you to eat while you are still the one doing the work.",
        },
        ask: "What are you doing today that you are refusing to enjoy until you know it will last?",
      },
    ],
  },
  {
    id: "ecc-3",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 3",
    chapterIndex: 3,
    title: "A time for everything",
    thread: "The most quoted passage in the book, and half its pairs are things nobody wants. Then eternity in the human heart, and a sentence about beasts that has troubled readers for two thousand years.",
    closeEnd: "He asks who can bring a man to see what comes after him. It is a real question, and the book does not answer it.",
    passages: [
      {
        ref: "3:1–8",
        kind: "poem",
        form: "poetry",
        title: "A time for everything",
        verses: [
${TIME_POEM}
        ],
        ground: {
          kind: "genre",
          text: "Fourteen pairs, twenty-eight items, arranged as opposites. The form is a catalogue, a recognised wisdom device, and the arrangement is deliberate: the list opens on birth and death and closes on war and peace, so it begins and ends with the two things a person has least say in.",
          src: "Fox · Seow · Alter",
        },
        misreading: {
          named:
            "The poem is a consolation: everything has its proper season, so whatever you are in will pass.",
          why: "Read the list. A time to kill. A time to tear down. A time to hate. A time for war. Half of these are things nobody chooses and nobody wants, and the poem gives them exactly the same standing as being born, and dancing, and embracing. It is not saying your bad season will pass. It is saying the bad seasons are part of the arrangement, on the same footing as the good ones. The verse immediately after it asks what the worker gains from any of it. The comfort people take from this poem is real, and it is not what the poem is doing.",
        },
        meaning:
          "The poem's power is in what it does not say. There is no advice anywhere in it. It never tells you which time it currently is, or how you would know, which is the only thing a person in the middle of one actually wants. What it establishes is that the times are not yours, and that is the claim the rest of the chapter builds on.",
      },
      {
        ref: "3:9–15",
        kind: "argument",
        form: "prose",
        title: "Eternity in their hearts",
        verses: [
${verses(3, range(9, 15))}
        ],
        ground: {
          kind: "historical",
          text: "Verse 11 is among the hardest sentences in the book to translate, and the word given here as eternity has also been rendered world, ignorance, and a sense of past and future. What is not in doubt is the structure: something has been put into people that they cannot use to see the whole.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the closest the book comes to explaining its own predicament. Something in a person reaches for the whole shape of things, and the reach does not work: they cannot fathom what God has done from beginning to end. That is not ignorance, which could be fixed by finding out. It is a mismatch, built in. And what he draws from it is not despair. It is the second of the six permissions, arriving here exactly as it did in chapter two, immediately after the hardest sentence in the paragraph.",
      },
      {
        ref: "3:16–22",
        kind: "argument",
        form: "prose",
        title: "The same breath",
        verses: [
${verses(3, range(16, 22))}
        ],
        ground: {
          kind: "historical",
          text: "The word for breath here is the one used of the breath of life on the second page of Genesis, and the sentence is built so that men and beasts share it without distinction. Verse 21 then asks who knows whether one rises and the other goes down, which is a question rather than a denial, and the earliest readers argued about it in exactly those terms.",
          src: "Genesis 2:7 · Fox · Seow",
        },
        meaning:
          "He is not saying a human being is worth nothing. He is saying that on the evidence available under the sun the exit is the same, and that anybody claiming otherwise is claiming to know something they cannot see. That is a statement about the limits of the enquiry rather than a verdict about the world, and the book is careful with it: verse 21 is a question, not an answer. Then, for the third time in three chapters, the permission.",
        tensions: [
          {
            claim:
              "Man has no advantage over the animals. Both come from the dust and both return to it, and who knows whether one breath rises and the other goes down.",
            counter:
              "The first page of the same collection has a human being made in God's image and given charge of the animals, and later writing in it grows a hope this book will not assert.",
            where: "Ecclesiastes 3:19–21 · Genesis 1:26–28 · Daniel 12:2",
          },
        ],
        addr: {
          mode: "claims",
          text: "You have been told, and have probably said, that a hard stretch is a season and will pass. This book will not give you that. What it offers instead is the day in front of you, and permission to take it seriously while it is there.",
        },
        ask: "What is in front of you today that you are treating as an interruption?",
      },
    ],
  },
  {
    id: "ecc-4",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 4",
    chapterIndex: 4,
    title: "The tears of the oppressed",
    thread: "The cold eye turns outward for the first time. Not what a life adds up to, but what people do to each other, and what it costs to face it alone.",
    closeEnd: "A cord of three strands is not quickly broken. It is the warmest sentence in the book, and it is an argument from weakness rather than from hope.",
    passages: [
      {
        ref: "4:1–6",
        kind: "argument",
        form: "prose",
        title: "No comforter",
        verses: [
${verses(4, range(1, 6))}
        ],
        ground: {
          kind: "historical",
          text: "The phrase they had no comforter appears twice in the same verse, which is unusual, and is the writer leaning on it. The conclusion he then draws is the most extreme in the book: that the dead are better off than the living, and better still are those not yet born, who have not seen the evil done under the sun.",
          src: "Fox · Seow",
        },
        meaning:
          "This is the book at its coldest, and the cause is not despair about existence in general. It is oppression, specifically, and the detail he cannot get past is that there was nobody to comfort them. Not that there was no justice, though there is none here. That there was nobody there. Then the sudden turn to a handful with tranquillity, which sits oddly after it until you notice both halves are about the same thing: what people will do to each other to get more.",
      },
      {
        ref: "4:7–16",
        kind: "argument",
        form: "prose",
        title: "Two are better than one",
        verses: [
${verses(4, range(7, 16))}
        ],
        ground: {
          kind: "historical",
          text: "The man with no son and no brother is a specific figure rather than a mood: in that society the household was the unit of security, and a man alone had no claim on anybody. The examples that follow are practical, not sentimental. If one falls, the other lifts him. If two lie down together they keep warm. Two can resist an attacker.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the warmest passage in the book and it is built entirely on weakness. Not one word of it says that companionship is fulfilling. It says you will fall over, you will be cold, and somebody will come at you, and one person cannot manage any of the three. The cord of three strands is an argument from vulnerability, which makes it much harder to wave away than a sentiment would be. Then the chapter closes on a crowd that turns from an old king to a young one and will turn again, which is the same point about people made from the other side.",
        addr: {
          mode: "claims",
          text: "You have been managing something alone that is not meant to be managed alone, and you have probably filed that under strength. This book files it under exposure, and its argument is not that company is pleasant. It is that you will fall over.",
        },
        ask: "What are you carrying by yourself that a second person could simply take one end of?",
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
  capstone: {
    kicker: "The first movement · Ecclesiastes 1–4",
    title: "Vapour, and a handful with quiet",
    paragraphs: [
      "Four chapters, and the case is made. A closed system that goes nowhere. An experiment run with every resource available and reported honestly. A catalogue of times nobody controls. And the tears of people who had no comforter. The word that keeps landing is the one for vapour, and the honest way to hear it is not meaningless, which is a translator's word, but unholdable. Everything in these chapters is real, and none of it stays.",
      "What is easy to miss is that the answer is already here. Three times in four chapters he stops and says the same thing: eat, drink, find something in the work. It arrives in chapter two immediately after he says he hated life, and in chapter three immediately after he says nobody can see the whole. Each time it is attached to the bleakness rather than offered against it. This book does not cheer up. It hands you something to do.",
      "And the last thing the movement does is turn outward. Chapters one to three ask what a life adds up to. Chapter four asks what people do to each other, and answers with a man alone and a cord of three strands. That is not an argument that company is fulfilling. It is an argument that you will fall over.",
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
