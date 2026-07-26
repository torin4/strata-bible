// Build Exodus movement 2 (the road to the mountain, 15:22 to 18) and splice it into
// content/exodus.ts.
//
// Scripture is materialised verbatim from content/bsb-exodus.ts; only the structure, titles and
// authored prose below are written by hand, and none of that is scripture. The readings are
// appended to the end of the EXODUS array, which is the movement's authored order.
//
// Safe to re-run only while movement 2 has not been hand-edited: it appends, and refuses if the
// readings are already present. Usage: npx tsx scripts/build-movement-two.ts
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_EXODUS } from "@/content/bsb-exodus";

const R = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

interface Scene {
  label?: string;
  ref: string;
  chapter: number;
  verses: number[];
  title: string;
  ground: { kind: string; text: string; src: string };
  meaning: string;
  theo?: string;
  arch?: string;
  misreadingNamed?: string;
  misreadingWhy?: string;
  addrMode?: string;
  addrText?: string;
  ask?: string;
}
interface ReadingSpec {
  id: string;
  span: string;
  chapterIndex: number;
  title: string;
  movementId?: string;
  thread?: string;
  closeEnd?: string;
  scenes: Scene[];
}

const READINGS: ReadingSpec[] = [
  {
    id: "ex-15b",
    span: "Exodus 15:22–27",
    chapterIndex: 15,
    // Chapter 15 sits inside movement 1's range, so this reading claims movement 2 explicitly.
    // Same override the Genesis 25 seam uses between Abraham and Jacob.
    movementId: "road-to-the-mountain",
    title: "Bitter water",
    thread:
      "Three days past the singing, the water is undrinkable. The song and the complaint are six verses apart in the same chapter, and the book does not treat that as a contradiction.",
    closeEnd:
      "Then Elim, twelve springs and seventy palms, mentioned without comment and left behind.",
    scenes: [
      {
        ref: "15:22–27",
        chapter: 15,
        verses: R(22, 27),
        title: "Marah, and Elim",
        ground: {
          kind: "historical",
          text: "Three days into the wilderness of Shur with no water, and the first water they find cannot be drunk. Marah means bitter, and the Hebrew lets the place and the people share the word. A tree is thrown in and the water turns sweet. Then a statute is given, before Sinai and without ceremony, and it is about listening.",
          src: "Propp · Sarna",
        },
        meaning:
          "The distance between the song and the complaint is three days and six verses, and the book sets them next to each other without flinching. It is the same people and the same God. What changed is only that there is a new problem, and the last rescue does not carry over to cover it. Then twelve springs at Elim, noted in a single verse and not dwelt on, which is roughly how good stretches get recorded.",
        theo: "What is being tested is not whether they can bear thirst. It is whether the God who took them through the sea is still trusted when the next thing goes wrong, which is a different question and a harder one.",
        addrMode: "names",
        addrText:
          "You know the interval between relief and the next need, and how short it turns out to be. Three days is about right.",
        ask: "What did you come through recently, and how quickly did the next thirst arrive?",
      },
    ],
  },
  {
    id: "ex-16",
    span: "Exodus 16 (selected)",
    chapterIndex: 16,
    title: "Bread for the day",
    thread:
      "Hunger rewrites Egypt into a place of full pots. The answer is bread that cannot be stored, and a seventh day taught by the way the food behaves before it is ever commanded.",
    closeEnd:
      "They ate it for forty years, until the edge of a land they could farm.",
    scenes: [
      {
        label: "One",
        ref: "16:2–5",
        chapter: 16,
        verses: R(2, 5),
        title: "The pots of meat",
        ground: {
          kind: "historical",
          text: "A month out of Egypt, and the complaint is precise: if only we had died there, where we sat by pots of meat and ate our fill. Slaves did not sit by pots of meat. The answer is bread from the sky with a condition attached, a day's portion each day, and the text says outright that the condition is a test.",
          src: "Propp · Fretheim",
        },
        meaning:
          "The false memory is the interesting part. Hunger has quietly improved Egypt into somewhere worth going back to, and nobody in the crowd corrects it. God does not correct it either. The answer to a lie told out of need is not an argument but food, and the food comes with the one rule that will actually address the fear underneath: enough, daily, and no more.",
        addrMode: "names",
        addrText:
          "A hard present is very good at making a bad past look survivable, and the improvement happens without you noticing you have made it.",
        ask: "What are you remembering as better than it was, because now is hard?",
      },
      {
        label: "Two",
        ref: "16:11–21",
        chapter: 16,
        verses: R(11, 21),
        title: "What is it",
        ground: {
          kind: "historical",
          text: "Quail in the evening, and in the morning a fine flaky substance on the ground. They ask man hu, what is it, and the question becomes the name. It melts in the sun and it will not keep overnight. Every attempt to identify it with a desert plant or insect secretion has to account for why it stopped when they reached farmland.",
          src: "Sarna · Propp",
        },
        meaning:
          "Everyone gathered what they needed, and when it was measured the one who gathered much had nothing left over and the one who gathered little had no lack. Then the rule: leave none until morning. Some did, and it bred worms. The wilderness economy is built so that hoarding is not so much forbidden as impossible, and a people who had been worked for someone else's storehouses are being taught to live without one.",
        arch: "Provision that has to be received again each day and cannot be banked. (Daily bread.)",
        addrMode: "claims",
        addrText:
          "Some of what you are holding was given for a day and has been kept for a year, and the keeping of it is doing something to you. This passage is not against provision. It is against the storehouse as a way of not having to trust anyone.",
        ask: "What are you storing that was given to you for today?",
      },
      {
        label: "Three",
        ref: "16:22–31",
        chapter: 16,
        verses: [22, 23, 26, 27, 28, 29, 30, 31],
        title: "The seventh day",
        ground: {
          kind: "historical",
          text: "On the sixth day twice as much falls, and this time it keeps. Some go out on the seventh anyway and find nothing. Sabbath appears here, before Sinai and before any commandment, and it arrives as a fact about how the bread behaves rather than as a rule anyone is given.",
          src: "Meyers · Fretheim",
        },
        meaning:
          "Rest is taught before it is commanded, and it is taught by the food. The manna keeps on one day and rots on every other, so the week has a shape whether or not anyone approves of it. For people whose entire experience of time was a quota that never stopped, a day when gathering is pointless is not a restriction. It is the first evidence that they are no longer owned.",
        addrMode: "names",
        addrText:
          "You have probably tried to gather on the seventh day, and found nothing, and gone out again the next week to check.",
        ask: "What would have to be true for you to stop for a day without calculating the cost?",
      },
    ],
  },
  {
    id: "ex-17",
    span: "Exodus 17",
    chapterIndex: 17,
    title: "The rock, and Amalek",
    thread:
      "Thirst again, and this time the quarrel has a question under it: is the LORD among us or not. Then the first battle, won by a man who cannot hold his own arms up.",
    closeEnd:
      "The chapter ends on a vow of war in every generation, which later parts of the Bible will handle with visible discomfort.",
    scenes: [
      {
        label: "One",
        ref: "17:1–7",
        chapter: 17,
        verses: R(1, 7),
        title: "Massah and Meribah",
        ground: {
          kind: "historical",
          text: "No water at Rephidim. The people quarrel with Moses and he tells them they are testing God; he is close enough to being stoned to say so out loud. He is told to strike the rock at Horeb. The place keeps both names, Massah and Meribah, testing and quarrelling, and later writers return to it as the standing example of what not to do.",
          src: "Propp · Childs",
        },
        meaning:
          "The sentence the whole episode turns on is the one the narrator puts last: is the LORD among us or not. That is what the thirst is really asking, and it is the question the wilderness keeps asking in different forms for forty years. It is not answered with an argument. It is answered with water, which settles nothing permanently, which is why the question comes back.",
        theo: "The complaint is treated as serious and is answered, and it is also given a name that sticks as a warning. Both at once. Scripture is willing to meet a demand and to remember that it was a demand.",
        addrMode: "names",
        addrText:
          "Underneath most of your complaints about circumstances is a shorter question about whether anyone is actually there, and it usually goes unasked in those words.",
        ask: "What are you angry about that is really the question of whether God is here?",
      },
      {
        label: "Two",
        ref: "17:8–16",
        chapter: 17,
        verses: R(8, 16),
        title: "Held up",
        ground: {
          kind: "historical",
          text: "Amalek attacks, and the first battle in Israel's history is fought while Moses stands on a hill with the staff raised. When his hands are up they prevail, when they drop Amalek does. Aaron and Hur put a stone under him and hold his arms, one on each side, until sunset. The chapter closes on a vow of war with Amalek from generation to generation.",
          src: "Propp · Fretheim",
        },
        misreadingNamed:
          "The raised hands are a technique: hold the right posture and God is obliged to act.",
        misreadingWhy:
          "The detail the story insists on is that Moses cannot do it. His hands get heavy, he needs a rock to sit on and two men to hold him up, and the sun has to go down before it is over. Read as technique it is superstition and it does not even work, since the technique fails every time the man performing it gets tired. Read as it is written, it is a picture of a leader who is visibly not the source of anything, being held in position by other people.",
        meaning:
          "The victory is real and the man at the centre of it is propped up by his brother and a man we never hear from again. That is the whole image. Israel's first military success is staged so that nobody watching could mistake where the strength came from, least of all Moses, who spent the afternoon being carried.",
        addrMode: "names",
        addrText:
          "You have been in the position that required you to keep something up longer than you could, and whether it held depended on who was standing either side of you.",
        ask: "Who is currently holding your arms up, and have you told them?",
      },
    ],
  },
  {
    id: "ex-18",
    span: "Exodus 18",
    chapterIndex: 18,
    title: "Jethro",
    thread:
      "A foreign priest arrives, blesses Israel's God before Israel has a law, and then tells Moses that the way he is working is not good.",
    closeEnd:
      "Moses listens to him, does all of it, and sends him home to his own country.",
    scenes: [
      {
        label: "One",
        ref: "18:1–12",
        chapter: 18,
        verses: R(1, 12),
        title: "The priest of Midian",
        ground: {
          kind: "historical",
          text: "Jethro, priest of Midian, brings Moses' wife and two sons back to him at the mountain of God. He hears the whole account, says now I know that the LORD is greater than all gods, and brings a burnt offering. Aaron and all the elders of Israel come and eat bread with him in the presence of God.",
          src: "Propp · Meyers · Fretheim",
        },
        meaning:
          "The first person in this book to bless the God of Israel and offer sacrifice to him is not an Israelite. He is a Midianite priest, a professional of another religion, and the elders sit down and eat with him. This happens before Sinai, before the covenant, before a single law has been given. The book puts it there and adds no qualification at all.",
        theo: "Whatever the covenant at the mountain is going to mean, it arrives after a foreigner has already recognised this God and been welcomed at the table. The order of events is doing work.",
        addrMode: "names",
        addrText:
          "The recognition you were waiting for from inside your own circle may well arrive first from someone standing outside it, who owes you nothing.",
        ask: "Who outside your own people has seen something true about your life that the insiders missed?",
      },
      {
        label: "Two",
        ref: "18:13–27",
        chapter: 18,
        verses: R(13, 27),
        title: "What you are doing is not good",
        ground: {
          kind: "historical",
          text: "Jethro watches Moses judge the people from morning until evening and tells him plainly that what he is doing is not good, and that he will wear himself out along with everybody waiting. He proposes a structure: capable men who fear God and hate dishonest gain, set over thousands, hundreds, fifties and tens, with only the hard cases coming up. Moses listens and does all of it.",
          src: "Propp · Meyers",
        },
        meaning:
          "The correction does not come from God, and it does not come from Israel. It comes from a foreigner who watched for one day, and the text records without embarrassment that Moses simply took the advice. Notice the criterion for the men chosen: trustworthy, God-fearing, not on the take. Character, not expertise. And notice what it says about Moses, that the man who spoke with God at the bush could not see the flaw in his own working week until a visitor named it.",
        addrMode: "names",
        addrText:
          "There is something about how you work that an outsider would name in a day and that you have not been able to see in years, because you are inside it.",
        ask: "Who has told you plainly that what you are doing is not sustainable, and what did you do with it?",
      },
    ],
  },
];

// ---------------------------------------------------------------------------------------
const q = (s: string) => JSON.stringify(s);

function verseLines(chapter: number, verses: number[]): string {
  return verses
    .map((n) => {
      const text = BSB_EXODUS[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at ${chapter}:${n}`);
      return `          { n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");
}

function sceneOut(s: Scene): string {
  const parts: string[] = [];
  if (s.label) parts.push(`        label: ${q(s.label)},`);
  parts.push(`        ref: ${q(s.ref)},`);
  parts.push('        kind: "scene",');
  parts.push('        form: "prose",');
  parts.push(`        title: ${q(s.title)},`);
  parts.push(
    `        verses: [\n${verseLines(s.chapter, s.verses)}\n        ],`,
  );
  parts.push(
    `        ground: {\n          kind: ${q(s.ground.kind)},\n          text: ${q(s.ground.text)},\n          src: ${q(s.ground.src)},\n        },`,
  );
  if (s.misreadingNamed && s.misreadingWhy) {
    parts.push(
      `        misreading: {\n          named: ${q(s.misreadingNamed)},\n          why: ${q(s.misreadingWhy)},\n        },`,
    );
  }
  parts.push(`        meaning: ${q(s.meaning)},`);
  if (s.theo || s.arch) {
    const lens: string[] = [];
    if (s.theo) lens.push(`          theo: ${q(s.theo)},`);
    if (s.arch) lens.push(`          arch: ${q(s.arch)},`);
    parts.push(`        lenses: {\n${lens.join("\n")}\n        },`);
  }
  if (s.addrMode && s.addrText) {
    parts.push(
      `        addr: {\n          mode: ${q(s.addrMode)},\n          text: ${q(s.addrText)},\n        },`,
    );
  }
  if (s.ask) parts.push(`        ask: ${q(s.ask)},`);
  return `      {\n${parts.join("\n")}\n      },`;
}

function readingOut(r: ReadingSpec): string {
  const lines = [
    "  {",
    `    id: ${q(r.id)},`,
    '    bookId: "exodus",',
    '    tier: "sitting",',
    `    span: ${q(r.span)},`,
    `    chapterIndex: ${r.chapterIndex},`,
  ];
  if (r.movementId) lines.push(`    movementId: ${q(r.movementId)},`);
  lines.push(`    title: ${q(r.title)},`);
  lines.push('    unitLabel: "Scene",');
  if (r.thread) lines.push(`    thread: ${q(r.thread)},`);
  if (r.closeEnd) lines.push(`    closeEnd: ${q(r.closeEnd)},`);
  lines.push("    passages: [");
  lines.push(r.scenes.map(sceneOut).join("\n"));
  lines.push("    ],");
  lines.push("  },");
  return lines.join("\n");
}

const PATH = "content/exodus.ts";
const file = readFileSync(PATH, "utf8");
if (file.includes('id: "ex-15b"')) {
  console.error(
    "movement 2 readings already present; refusing to append again.",
  );
  process.exit(1);
}

// Append to the end of the EXODUS array, which is the book's authored reading order.
const marker = "\n];\n";
const at = file.indexOf(marker);
if (at === -1) throw new Error("could not find the end of the EXODUS array");

const block = READINGS.map(readingOut).join("\n");
writeFileSync(PATH, `${file.slice(0, at + 1)}${block}${file.slice(at + 1)}`);

const scenes = READINGS.reduce((n, r) => n + r.scenes.length, 0);
const verses = READINGS.reduce(
  (n, r) => n + r.scenes.reduce((m, s) => m + s.verses.length, 0),
  0,
);
console.log(
  `Appended movement 2: ${READINGS.length} readings, ${scenes} scenes, ${verses} verses.`,
);
