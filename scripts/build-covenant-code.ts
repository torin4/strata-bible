// Build Exodus 22-23 (the outward-turning half of the Covenant Code) and Exodus 24 (the covenant
// sealed), and append both to the EXODUS array in reading order.
//
// One passage per chapter in the 22-23 reading, without exception: statute numbers spanning two
// chapters do not ascend, so the verse-integrity check would mark the passage unverifiable and
// skip it in silence, leaving the reading appearing to carry the BSB guarantee without having it.
//
// Scripture is materialised verbatim from the BSB lookup. Refuses to run twice.
// Usage: npx tsx scripts/build-covenant-code.ts
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_EXODUS } from "@/content/bsb-exodus";

const q = (s: string) => JSON.stringify(s);
const R = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

function rows(chapter: number, ns: number[]): string {
  return ns
    .map((n) => {
      const text = BSB_EXODUS[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at ${chapter}:${n}`);
      return `          { n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");
}

interface Note {
  mode?: "claims" | "none-but";
  addr?: string;
  note?: string;
}
function perItemOut(notes: Record<number, Note>): string {
  const body = Object.entries(notes)
    .map(([n, note]) => {
      const inner: string[] = [];
      if (note.mode && note.addr)
        inner.push(
          `            addr: { mode: ${q(note.mode)}, text: ${q(note.addr)} },`,
        );
      if (note.note) inner.push(`            note: ${q(note.note)},`);
      return `          ${n}: {\n${inner.join("\n")}\n          },`;
    })
    .join("\n");
  return `        perItem: {\n${body}\n        },`;
}

const CH22: Record<number, Note> = {
  18: {
    mode: "none-but",
    addr: "No claim on you, and it has a history that makes leaving it out dishonest. This sentence was read aloud at witch trials for centuries, in Europe and in New England, to justify killing mostly poor and mostly old women. The verse did not cause that. It was used for it, and pretending it is not here does nobody any good.",
  },
  21: {
    mode: "claims",
    addr: "Still claims you, and it is the hinge of the whole code. The reason given is not compassion in the abstract but memory: you were foreigners. The ethic is built out of what these people had been, which is why the movement had to go through Egypt before it could arrive here.",
  },
  22: {
    mode: "claims",
    addr: "The widow and the orphan are the standing test of a society in this literature, because they are the people with nobody to argue for them.",
  },
  25: {
    mode: "claims",
    addr: "Lending to the poor without interest, which is not a policy proposal but it is a claim: money owed by someone with nothing is not an ordinary investment.",
  },
  27: {
    mode: "claims",
    addr: "Take a cloak in pledge and give it back by sunset, because it is what he sleeps in. Then the reason, which is startling in a legal code: if he cries out to me, I will hear, for I am compassionate.",
    note: "The same verb for crying out that was used of Israel in Egypt. The poor man in your debt is now in the position Israel was in.",
  },
};

const CH23: Record<number, Note> = {
  2: {
    mode: "claims",
    addr: "Do not follow a crowd into wrongdoing, and do not shade your testimony to go along with the majority. Written for a world of village courts and just as applicable to a room where everyone has already agreed.",
  },
  3: {
    note: "And do not favour a poor man in his lawsuit either. The code protects the poor relentlessly everywhere else, and here it refuses to let sympathy bend a verdict. Impartiality cuts both ways or it is not impartiality.",
  },
  4: {
    mode: "claims",
    addr: "Your enemy's ox, wandering. You are to take it back to him. Not forgive him, not reconcile, just return the animal, which is a smaller and more doable thing than most instructions about enemies.",
  },
  9: {
    mode: "claims",
    addr: "Said twice in two chapters, and the second time with the reason sharpened: you know how it feels. Not you should imagine, but you know.",
  },
  11: {
    mode: "none-but",
    addr: "No claim on you unless you farm, and worth seeing for its logic. The land rests, and what grows untended is left for the poor to eat. Rest is legislated so that it produces food for someone who owns nothing.",
  },
  12: {
    mode: "claims",
    addr: "The sabbath again, and here the reason is not creation but the exhaustion of other people: so that your servant and the foreign resident may be refreshed. Your rest is meant to reach the people who work for you.",
  },
};

const covenantCode = `  {
    id: "ex-22",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 22–23 (selected)",
    chapterIndex: 22,
    crossesChapters: true,
    title: "The foreigner, the widow, the debtor",
    unitLabel: "Scene",
    thread: "The same code that regulated owning a person turns outward here, and grounds its treatment of the outsider in the memory of having been one.",
    closeEnd: "Rest is commanded twice, and both times the reason given is somebody else's tiredness.",
    passages: [
      {
        label: "One",
        ref: "22:1–27 (selected)",
        kind: "statute-cluster",
        form: "list",
        title: "You were foreigners",
        statutes: [
${rows(22, [1, 18, ...R(21, 27)])}
        ],
${perItemOut(CH22)}
        ground: {
          kind: "historical",
          text: "The code moves from property to persons with no visible seam: restitution for a stolen ox, then a capital sentence for sorcery, then the foreigner, the widow, the orphan and the debtor. Ancient codes elsewhere protect the vulnerable too, usually by royal decree as an act of the king's mercy. Here the obligation is grounded in the people's own history rather than in a ruler's generosity.",
          src: "Meyers · Propp · Childs",
        },
        meaning:
          "Read the reason clauses and the code's argument becomes visible. Do not oppress a foreigner, because you were foreigners. Give the cloak back, because he cries out and I hear. This is a legal document that keeps stopping to explain itself, and every explanation points back to Egypt. The ethic is not deduced from principles. It is remembered.",
      },
      {
        label: "Two",
        ref: "23:1–12 (selected)",
        kind: "statute-cluster",
        form: "list",
        title: "Justice, and the seventh year",
        statutes: [
${rows(23, [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12])}
        ],
${perItemOut(CH23)}
        ground: {
          kind: "historical",
          text: "A run of laws about testimony and courts, then the enemy's stray animal, then the seventh year and the seventh day. The sabbath year here is agricultural and its stated purpose is not piety: the land lies fallow so that the poor may eat what grows on it, and the wild animals get what is left after that.",
          src: "Meyers · Fretheim",
        },
        meaning:
          "Two things stand out from a code written three thousand years ago. It refuses to bend a verdict toward the poor, having spent chapters protecting them, because a court that favours anybody is not a court. And it makes rest an obligation you owe other people: the land rests so the poor eat, the week rests so your servant and the foreigner catch their breath. Rest here is not self-care. It is redistribution.",
        addr: {
          mode: "claims",
          text: "Your rest is legislated in this code for the sake of the people who work for you. Whatever you do with a day off, the question this page asks is whether anyone further down gets one because of it.",
        },
        ask: "Who gets to rest because of how you arrange your week, and who does not?",
      },
    ],
  },`;

const sealed = `  {
    id: "ex-24",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 24",
    chapterIndex: 24,
    title: "Blood on the people",
    unitLabel: "Scene",
    thread: "The terms are read aloud, agreed a second time, and then sealed in a way no modern reader finds comfortable. After which seventy men climb the mountain and have lunch.",
    closeEnd: "Moses goes up into the cloud for forty days, and the book leaves him there.",
    passages: [
      {
        label: "One",
        ref: "24:1–8",
        kind: "scene",
        form: "prose",
        title: "All that the LORD has spoken",
        verses: [
${rows(24, R(1, 8))}
        ],
        ground: {
          kind: "historical",
          text: "Moses writes the words down, builds an altar with twelve pillars, and has young men offer oxen. Half the blood goes against the altar and half is kept in basins. He reads the book aloud, the people answer that they will do it, and then he throws the blood over them and calls it the blood of the covenant. Treaty ratifications in this world involved a slaughtered animal and a ceremony binding both parties.",
          src: "Childs · Propp · Meyers",
        },
        meaning:
          "They agree three times in this movement, and this is the third and the most physical. It is not a signature. Blood from the same animals goes on the altar and on the people, which puts both parties in the same substance, and there is no way to be sprinkled and consider yourself uninvolved. Whatever else a covenant is here, it is not an arrangement you could later say you had not really entered.",
        lenses: {
          arch: "The bond sealed in blood rather than in words, so the parties cannot afterward claim the words were misunderstood. (What is cut cannot be uncut.)",
        },
        addr: {
          mode: "names",
          text: "You have agreed to things in a way that could be walked back, and to a few that could not. The difference is rarely in the words. It is in what was done at the time.",
        },
        ask: "What have you entered that you could not now claim you had not entered?",
      },
      {
        label: "Two",
        ref: "24:9–18",
        kind: "scene",
        form: "prose",
        title: "They saw God, and ate",
        verses: [
${rows(24, R(9, 18))}
        ],
        ground: {
          kind: "historical",
          text: "Seventy-four men go up: Moses, Aaron, two of his sons, and seventy elders. They see the God of Israel, with something like a pavement of sapphire under his feet, clear as the sky itself. The text says God did not raise his hand against them, which tells you what was expected. And they ate and drank. Then the cloud covers the mountain for six days and Moses is called into it for forty.",
          src: "Childs · Propp",
        },
        meaning:
          "This is the strangest paragraph in the movement and it is easy to skim. Seventy-four men see God and the narrator will not describe him, only what was under his feet, and then records that they had a meal. After nineteen chapters of a mountain nobody may touch, the covenant ends with a group of people eating in the presence of the thing that could kill them. The fence has not moved. What changed is that terms now exist.",
        lenses: {
          theo: "The meal is the point of the ceremony, not an anticlimax after it. Eating together is what parties to a covenant did, and it is the nearest this book has come to saying the distance is closed.",
        },
      },
    ],
  },`;

const PATH = "content/exodus.ts";
const file = readFileSync(PATH, "utf8");
if (file.includes('id: "ex-22"')) {
  console.error("ex-22 already present; refusing to append again.");
  process.exit(1);
}
// Insert immediately before the line that closes the EXODUS array, keeping that line intact.
const marker = "\n];\n";
const at = file.indexOf(marker);
if (at === -1) throw new Error("could not find the end of the EXODUS array");
writeFileSync(
  PATH,
  `${file.slice(0, at)}\n${covenantCode}\n${sealed}${file.slice(at)}`,
);
console.log("Appended ex-22 (2 clusters) and ex-24 (2 scenes).");
