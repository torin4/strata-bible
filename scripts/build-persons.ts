// Build Exodus 21, persons and what they are worth, and insert it after the Ten Words.
//
// The hardest page in the book. The servant laws, the talion formula and the capital sentences
// are present in the text rather than selected around; per-item annotation marks them as law
// that does not bind the reader, beside laws that still do. Scripture is materialised verbatim
// from the BSB lookup. Refuses to run twice. Usage: npx tsx scripts/build-persons.ts
import { readFileSync, writeFileSync } from "node:fs";
import { BSB_EXODUS } from "@/content/bsb-exodus";

const q = (s: string) => JSON.stringify(s);
const R = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

function items(chapter: number, ns: number[]): string {
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
  const rows = Object.entries(notes)
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
  return `        perItem: {\n${rows}\n        },`;
}

const SERVANTS: Record<number, Note> = {
  2: {
    mode: "none-but",
    addr: "No claim on you, and the first thing the code legislates. Six years, then out, and out free rather than in debt. Set beside its neighbours this is a limit on a master. Set beside anything you would accept, it is still a man owning a man for six years.",
  },
  6: {
    note: "The ear pierced at the doorpost makes the choice to stay permanent and visible. The law provides for a servant who says he loves his master, and it also makes leaving cost him his wife and children if the master gave her to him, which is what verse 4 has just established.",
  },
  7: {
    mode: "none-but",
    addr: "This one is the hardest sentence in the chapter and it is not softened here. A daughter is sold, and she does not walk out at seven years the way a man does. What follows are conditions on her treatment, which is a protection and is not a release.",
  },
  11: {
    note: "If he fails to provide any of the three things owed her, she goes free with no money paid. The code protects her inside the arrangement. It does not question the arrangement.",
  },
};

const VIOLENCE: Record<number, Note> = {
  16: {
    mode: "claims",
    addr: "Still claims you, and worth noticing where it sits. Stealing a person and selling them is a capital crime in the same chapter that regulates owning one. The code draws a line at seizing a human being that it does not draw at holding one.",
  },
  20: {
    mode: "none-but",
    addr: "A master who beats a servant to death is punished. That is a real restraint, and rare among its contemporaries, where a slave was often simply property to be damaged.",
  },
  21: {
    mode: "none-but",
    addr: "And then this. If the servant survives a day or two there is no penalty, and the reason given is that the servant is the owner's property. There is no reading of that sentence which is not what it appears to be, and this app is not going to supply one.",
  },
  24: {
    mode: "none-but",
    addr: "Eye for eye is a ceiling, not a licence. In a world of blood feud where an injury could be answered by wiping out a family, the rule is that the penalty may not exceed the harm. It reads as savage and it was written to restrain savagery.",
  },
  26: {
    mode: "none-but",
    addr: "A servant blinded or losing a tooth goes free, which means an owner who injures one loses them entirely. The incentive runs the right way, and the fact that an incentive was needed tells you what it was needed against.",
  },
};

const OX: Record<number, Note> = {
  28: {
    note: "The ox is stoned and its meat may not be eaten, which treats the animal as bearing something like guilt rather than as a defective possession.",
  },
  32: {
    mode: "none-but",
    addr: "A free person killed by an ox brings a judgement about the owner's negligence. A servant killed by the same ox brings a fixed payment to the master, thirty shekels, and the servant's family is not mentioned. The chapter that began by limiting how long a man may be owned ends by pricing one.",
  },
};

const reading = `  {
    id: "ex-21",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 21 (selected)",
    chapterIndex: 21,
    title: "Persons, and what they are worth",
    unitLabel: "Scene",
    thread: "The case law begins with people rather than property, and the first person it deals with is a slave. This is the page of the Bible most readers would rather was not there.",
    closeEnd: "It ends with a person given a price in silver, in the same chapter that began by limiting how long one could be held.",
    passages: [
      {
        label: "One",
        ref: "21:1–11",
        kind: "statute-cluster",
        form: "list",
        title: "Six years, and the seventh",
        statutes: [
${items(21, R(1, 11))}
        ],
${perItemOut(SERVANTS)}
        ground: {
          kind: "historical",
          text: "The Covenant Code opens with slavery, which tells you what the ancient world took to be the first question of civil law. Comparison with the codes around it is genuinely two-sided. Israel's law caps a Hebrew servant's term at six years where its neighbours had no such limit, forbids sending them out empty-handed elsewhere in the canon, and makes injury to a servant a matter for the courts. It also assumes throughout that a person may be owned, and it treats a daughter differently from a son.",
          src: "Propp · Meyers · Childs",
        },
        misreading: {
          named:
            "These laws were just the times. Everyone had slaves, so there is nothing here to answer for.",
          why: "It is true that everyone had slaves, and it explains nothing that matters. The same chapter departs sharply from its neighbours in other places, making a master liable for a servant's eye, so the writers were plainly capable of legislating against the grain when they chose to. And the excuse proves too much: if a text is only ever as good as its era, it has nothing to say to any other era, including yours. The honest position is narrower and harder. This is a real limit placed on a real evil by people who did not abolish it, in a book that later turns the memory of slavery into an argument against oppression.",
        },
        meaning:
          "Read it as legislation rather than as endorsement and the shape becomes visible: it is a code restraining an institution it assumes. Six years and not forever. Provision owed to a woman sold into a household, and freedom if the provision fails. These are the moves of someone limiting a practice from inside it. That is worth seeing clearly, and it is not the same as the practice being fine, and the book itself will not let it be, because the same people go on to build their entire ethic of the outsider on having been slaves.",
      },
      {
        label: "Two",
        ref: "21:12–27",
        kind: "statute-cluster",
        form: "list",
        title: "Harm, and what it costs",
        statutes: [
${items(21, [12, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27])}
        ],
${perItemOut(VIOLENCE)}
        ground: {
          kind: "historical",
          text: "Case law: if a man does this, then this follows. The sequence runs from murder through striking a parent and kidnapping to injury in a brawl, and then to injury done to a servant. Capital sentences here are prescribed for things no modern legal system treats that way, including cursing a parent. The talion formula, eye for eye, appears three times in the Torah and is quoted more often than it is read.",
          src: "Childs · Propp · Meyers",
        },
        tensions: [
          {
            claim:
              "This is God's law, given at the mountain, and it regulates the ownership and beating of human beings.",
            counter:
              "The canon does not leave the page where it found it. Deuteronomy revisits the release law and orders the master to send a freed servant away supplied rather than empty-handed. Jeremiah treats a release that was granted and then revoked as covenant-breaking serious enough to bring judgement on the nation. And a principle surfaces in the gospels for a different law, that a concession was written in because of hardness of heart, which is the canon conceding that some of its own legislation is accommodation rather than ideal.",
            where: "Deuteronomy 15:12–15 · Jeremiah 34:8–22 · Matthew 19:8",
          },
        ],
        meaning:
          "Two things are true on this page at once and holding both is the whole work. A master who kills a servant is punished, which is not nothing and was not standard. And a master who beats one who survives is not punished, because the servant is his property, which is exactly as bad as it sounds. The code is neither a monster nor a model. It is an argument in progress, and the rest of the Bible is the argument continuing.",
      },
      {
        label: "Three",
        ref: "21:28–32",
        kind: "statute-cluster",
        form: "list",
        title: "The ox that gores",
        statutes: [
${items(21, R(28, 32))}
        ],
${perItemOut(OX)}
        ground: {
          kind: "historical",
          text: "The goring ox is the most discussed case in ancient law and versions of it appear in codes centuries older. The escalation is careful: an ox with no history is one thing, an ox already known to gore is another, and an owner who was warned and did nothing may himself be put to death. Liability turns on what the owner knew.",
          src: "Propp · Childs",
        },
        meaning:
          "The chapter ends by doing the arithmetic out loud. For a free person the case goes to judgement and the owner may pay with his life. For a servant it is thirty shekels to the master, a fixed rate, and the dead person's family does not appear in the sentence. Nothing is being hidden here. The code states what a person is worth when the person is owned, and it is the same book that opened with a God who heard slaves crying and came down.",
        addr: {
          mode: "claims",
          text: "Somewhere in the arrangements you live inside, a life has a number attached to it: an insurance table, a settlement figure, an acceptable rate. The instinct is to say we have moved past this page. The page is at least explicit about the number.",
        },
        ask: "Where does the system you benefit from put a price on a person, and do you know what it is?",
      },
    ],
  },`;

const PATH = "content/exodus.ts";
const file = readFileSync(PATH, "utf8");
if (file.includes('id: "ex-21"')) {
  console.error("ex-21 already present; refusing to append again.");
  process.exit(1);
}
// Insert immediately before the line that closes the EXODUS array, keeping that line intact.
// Slicing around the newline instead is what previously left the array closing as "},];".
const marker = "\n];\n";
const at = file.indexOf(marker);
if (at === -1) throw new Error("could not find the end of the EXODUS array");
writeFileSync(PATH, `${file.slice(0, at)}\n${reading}${file.slice(at)}`);
console.log("Appended ex-21: 3 statute-clusters, 28 statutes, 11 annotated.");
