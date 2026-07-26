// Build the Ten Words reading (Exodus 20) and append it to the EXODUS array.
//
// The first published statute-cluster: kind statute-cluster, form list, items in `statutes`, and
// per-item annotation keyed by verse number. Scripture is materialised verbatim from the BSB
// lookup; only structure and authored prose are written by hand.
//
// Refuses to run twice. Usage: npx tsx scripts/build-ten-words.ts
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_EXODUS } from "@/content/bsb-exodus";

const q = (s: string) => JSON.stringify(s);
const R = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

function items(chapter: number, verses: number[], indent: string): string {
  return verses
    .map((n) => {
      const text = BSB_EXODUS[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at ${chapter}:${n}`);
      return `${indent}{ n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");
}

// Per-item annotation. `claims` marks a law that still makes a demand on the reader; `none-but`
// marks one that does not but is worth seeing. A note is a short gloss, with or without a chip.
interface Note {
  mode?: "claims" | "none-but";
  addr?: string;
  note?: string;
}
const TEN_WORDS_NOTES: Record<number, Note> = {
  3: {
    mode: "claims",
    addr: "Before me does not mean instead of me. It means in my presence, which is harder. The question is not whether you have replaced God but what else is standing in the room.",
  },
  7: {
    mode: "claims",
    addr: "This is about swearing by the name to make a lie stick, or acting in God's name for your own ends. Casual profanity is the least of what it covers.",
    note: "The Hebrew is closer to carrying the name emptily than to saying it rudely.",
  },
  8: {
    mode: "claims",
    addr: "The command is to stop, and it is addressed to the whole household including the servants and the foreigner. Nobody rests alone.",
    note: "The reason given here is creation. Deuteronomy gives a different one: because you were slaves in Egypt.",
  },
  12: {
    mode: "claims",
    addr: "Written for adults with ageing parents rather than for children, and attached to the length of a people's life in the land.",
  },
  13: {
    note: "The verb is ratsach, unlawful killing. It is not the word used for war or for judicial execution, which the same code goes on to prescribe.",
  },
  16: {
    note: "Courtroom language. This is perjury against a neighbour, in a system with no police and no forensics, where a false witness could end a life.",
  },
  17: {
    mode: "claims",
    addr: "The only one of the ten that legislates for what happens inside you, where no court could reach.",
    note: "Notice the list it appears in: house, wife, servants, ox. A wife is named among a man's property, which is the frame the command was written inside.",
  },
};

const ALTAR_NOTES: Record<number, Note> = {
  25: {
    mode: "none-but",
    addr: "No claim on you at all. Kept here because of what it says: a tool on the stone profanes it, so the altar has to be something nobody improved.",
  },
  26: {
    mode: "none-but",
    addr: "Also no claim on you, and worth seeing rather than skipping. The reason given is bodily exposure, which is the kind of plain physical concern a religion of temples and steps had to legislate for.",
  },
};

function noteOut(n: number, note: Note): string {
  const inner: string[] = [];
  if (note.mode && note.addr) {
    inner.push(
      `            addr: { mode: ${q(note.mode)}, text: ${q(note.addr)} },`,
    );
  }
  if (note.note) inner.push(`            note: ${q(note.note)},`);
  return `          ${n}: {\n${inner.join("\n")}\n          },`;
}

function perItemOut(notes: Record<number, Note>): string {
  const rows = Object.entries(notes)
    .map(([n, note]) => noteOut(Number(n), note))
    .join("\n");
  return `        perItem: {\n${rows}\n        },`;
}

const reading = `  {
    id: "ex-20",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 20",
    chapterIndex: 20,
    title: "The Ten Words",
    unitLabel: "Scene",
    thread: "Ten sentences, most of them short, spoken out of the fire to a people who have already agreed to them. The tradition calls them the ten words rather than the ten commandments, which is what the Hebrew says.",
    closeEnd: "The people ask for a mediator, and the rest of the book is Moses going up and coming back down.",
    passages: [
      {
        label: "One",
        ref: "20:1–17",
        kind: "statute-cluster",
        form: "list",
        title: "The ten words",
        statutes: [
${items(20, R(1, 17), "          ")}
        ],
${perItemOut(TEN_WORDS_NOTES)}
        ground: {
          kind: "historical",
          text: "They open not with a command but with a claim about what has already happened: I am the LORD your God, who brought you out of Egypt, out of the house of slavery. The obligations follow from the rescue rather than earning it. Two versions survive in the Bible, here and in Deuteronomy, and they differ, most visibly in the reason given for the sabbath. Neither was harmonised away.",
          src: "Childs · Propp · Meyers",
        },
        meaning:
          "The order matters. Four words about God, then one about parents, then five about the person next to you, and the whole thing is addressed to a single person, you, singular, standing in a crowd. What is being built is not a legal system, which comes in the next three chapters, but a shape for a free people: how to hold God, time, family, life, marriage, property and speech, in that order.",
        lenses: {
          theo: "The rescue comes first and the obligations second, which is the order the whole Bible keeps returning to. These are not the terms on which Israel was freed. They are what freedom is for.",
        },
      },
      {
        label: "Two",
        ref: "20:18–21",
        kind: "scene",
        form: "prose",
        title: "At a distance",
        verses: [
${items(20, R(18, 21), "          ")}
        ],
        ground: {
          kind: "historical",
          text: "The people see the thunder and the mountain smoking, and they stand far off and ask Moses to speak instead, because if God speaks to them directly they will die. Moses answers that the fear is the point and also that they should not be afraid, which is not quite a contradiction.",
          src: "Childs · Fretheim",
        },
        meaning:
          "They asked for the mediator. It was not imposed on them. Having heard ten sentences directly, they decided they would rather have them relayed, and the whole remaining shape of the book, a man going up and coming back down with the words, is the answer to a request the people made out of terror.",
        addr: {
          mode: "names",
          text: "You have probably wanted the thing at a distance too, relayed by someone else, in a form you could put down. Wanting it and dreading it at once is what this scene is made of.",
        },
        ask: "What have you asked to receive secondhand because firsthand felt like too much?",
      },
      {
        label: "Three",
        ref: "20:22–26",
        kind: "statute-cluster",
        form: "list",
        title: "The altar",
        statutes: [
${items(20, R(22, 26), "          ")}
        ],
${perItemOut(ALTAR_NOTES)}
        ground: {
          kind: "historical",
          text: "The first laws given after the ten are about how to build an altar, and they are almost aggressively plain: earth, or undressed stone, and no steps. Wherever God causes his name to be remembered, he will come and bless. No temple, no masonry, nothing a craftsman could take credit for.",
          src: "Propp · Childs",
        },
        meaning:
          "These make no claim on you, and they are here rather than left out because of what they refuse. Every other religion in the region built upward and built impressively. This one begins by ruling out the tooled stone and the staircase. The first architectural instruction Israel receives is a restriction on how much of the altar can be its own achievement.",
      },
    ],
  },`;

const PATH = "content/exodus.ts";
const file = readFileSync(PATH, "utf8");
if (file.includes('id: "ex-20"')) {
  console.error("ex-20 already present; refusing to append again.");
  process.exit(1);
}
const marker = "\n];\n";
const at = file.indexOf(marker);
if (at === -1) throw new Error("could not find the end of the EXODUS array");
writeFileSync(PATH, `${file.slice(0, at + 1)}${reading}${file.slice(at + 1)}`);
console.log(
  `Appended ex-20: 3 passages (2 statute-clusters, 1 scene), ${17 + 4 + 5} verses, ${Object.keys(TEN_WORDS_NOTES).length + Object.keys(ALTAR_NOTES).length} annotated items.`,
);
