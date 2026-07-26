// Build Exodus 19, fire on the mountain, and append it to the EXODUS array.
//
// A narrative scene reading, the familiar path. Scripture materialised verbatim from the BSB
// lookup. Refuses to run twice. Usage: npx tsx scripts/build-sinai.ts
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_EXODUS } from "@/content/bsb-exodus";

const q = (s: string) => JSON.stringify(s);
const R = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

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
    id: "ex-19",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 19",
    chapterIndex: 19,
    title: "Fire on the mountain",
    unitLabel: "Scene",
    thread: "They are offered terms and accept them before they have heard what they are. Then the mountain is fenced, and what comes down it is fire, smoke and a sound that will not stop.",
    closeEnd: "The people are kept back, and Moses goes up. Everything after this arrives through him.",
    passages: [
      {
        label: "One",
        ref: "19:1–8",
        kind: "scene",
        form: "prose",
        title: "We will do everything",
        verses: [
${verses(19, R(1, 8))}
        ],
        ground: {
          kind: "historical",
          text: "Three months out of Egypt they camp in front of the mountain, and God's first words are not terms but a reminder: you saw what I did to Egypt, and I carried you on eagles' wings and brought you to myself. Only then the offer. If you keep the covenant you will be a treasured possession, a kingdom of priests, a holy nation. The whole earth is mine, it adds, which stops the choosing from meaning ownership of only one people.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "The people answer everything the LORD has spoken we will do, and they have not yet heard a single commandment. That is either faith or a kind of blindness and the book does not say which. What it does establish is the order: rescue, then relationship, then terms. Nothing here is a transaction in which obedience buys rescue. The rescue already happened, several chapters ago, while they were complaining.",
        lenses: {
          theo: "A kingdom of priests means the whole people, not a caste inside it. Whatever else the covenant does, it does not create a class of insiders with access and a class without.",
        },
        addr: {
          mode: "names",
          text: "You have said yes to something before knowing what it would ask, and meant it at the time. This scene does not treat that as foolish. It treats it as how most real commitments actually start.",
        },
        ask: "What did you agree to before you knew the terms, and would you agree again?",
      },
      {
        label: "Two",
        ref: "19:9–15",
        kind: "scene",
        form: "prose",
        title: "Do not touch the mountain",
        verses: [
${verses(19, R(9, 15))}
        ],
        ground: {
          kind: "historical",
          text: "Two days of preparation: wash your clothes, be ready, and do not go near the mountain or even touch its edge, on pain of death. The boundary is set by Moses at God's instruction, and it applies to everyone including the priests. The instruction to abstain from sex before the encounter belongs to the ritual purity of the period and is stated without explanation.",
          src: "Propp · Meyers",
        },
        meaning:
          "The fence is the strange part. A God who has just spent fifteen chapters closing the distance between himself and these people now puts a line around the mountain and posts a death penalty on it. Nearness and danger are being held together rather than resolved, and the book will keep doing that: the same presence that rescues is not safe to walk into casually.",
        lenses: {
          arch: "The holy place that must be approached on terms, prepared for, and not strolled into. (The threshold that is guarded.)",
        },
      },
      {
        label: "Three",
        ref: "19:16–25",
        kind: "scene",
        form: "prose",
        title: "The mountain in smoke",
        verses: [
${verses(19, R(16, 25))}
        ],
        ground: {
          kind: "historical",
          text: "On the third morning: thunder, a thick cloud, a very loud trumpet, and the whole camp trembling. The mountain is in smoke because the LORD descended on it in fire, it shakes violently, and the trumpet gets louder rather than fading. Then Moses speaks and God answers in thunder. The chapter ends with him sent back down to warn the people again not to break through.",
          src: "Childs · Propp",
        },
        meaning:
          "The description is of a volcano or a storm and it is trying to say something neither quite covers. What the writers reach for is a presence that the physical world cannot hold steady around: smoke, fire, shaking, a sound that keeps rising. Then the anticlimax, which is deliberate. In the middle of all that, God's message is go down and tell them again to stay back. The pyrotechnics are not the point. The words that follow are.",
        addr: {
          mode: "names",
          text: "Whatever you imagine an encounter with God would settle for you, this scene suggests it would mostly be frightening, and that the content would arrive afterward, in sentences, once you had stopped shaking.",
        },
        ask: "Do you actually want an encounter, or the reassurance you imagine would follow one?",
      },
    ],
  },`;

const PATH = "content/exodus.ts";
const file = readFileSync(PATH, "utf8");
if (file.includes('id: "ex-19"')) {
  console.error("ex-19 already present; refusing to append again.");
  process.exit(1);
}
// Array order is authored reading order, which drives adjacency, so chapter 19 goes BEFORE the
// Ten Words rather than at the end of the array.
const marker = '  {\n    id: "ex-20",';
const at = file.indexOf(marker);
if (at === -1)
  throw new Error("could not find the ex-20 reading to insert before");
writeFileSync(PATH, `${file.slice(0, at)}${reading}\n${file.slice(at)}`);
console.log("Inserted ex-19 before ex-20: 3 scenes, 25 verses.");
