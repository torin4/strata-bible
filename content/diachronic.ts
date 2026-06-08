// A diachronic overlay: how scholars pull a woven passage back into its earlier source
// strands. Deliberately kept separate from the canonical schema (lib/types.ts) and the
// authored content, because this is a contested scholarly reading, not settled text. The
// displayed words stay the author's own translation in genesis.ts; only the attribution,
// the seams, and the framing live here, cited and caveated.
//
// The Flood (Genesis 7) is the showcase case of the Documentary model: two complete flood
// stories braided into one. Its J/P split is the least contested in the Torah. The exact
// seams are still debated, and a verse or two reads as the editor's join (marked R).

export type Siglum = "J" | "E" | "P" | "D" | "R";

export interface Strand {
  siglum: Siglum;
  name: string;
  blurb: string;
}

export interface DiachronicLayer {
  readingId: string;
  passageRef: string;
  intro: string;
  strands: Strand[];
  // verse number -> source. "R" marks a joining/disputed verse, not a strand.
  attribution: Record<number, Siglum>;
  seams: string[];
  caveat: string;
  sources: string;
}

const FLOOD: DiachronicLayer = {
  readingId: "gen-7",
  passageRef: "Genesis 7",
  intro:
    "Two flood stories, braided into one. Read closely and they show through each other: one pair of every animal, then seven pairs of the clean. Forty days of rain, then a hundred and fifty days of a cosmic deep.",
  strands: [
    {
      siglum: "J",
      name: "The Yahwist",
      blurb:
        "The older telling. God is the LORD, near and feeling. Seven pairs of the clean animals, rain for forty days and forty nights, and at the end the LORD shuts the door with his own hand.",
    },
    {
      siglum: "P",
      name: "The Priestly writer",
      blurb:
        "The later, ordered telling. God is God. Two of every kind, male and female, exact dates, the springs of the great deep and the windows of the heavens, the waters prevailing a hundred and fifty days.",
    },
  ],
  attribution: {
    1: "J",
    2: "J",
    3: "J",
    4: "J",
    5: "J",
    6: "P",
    7: "J",
    8: "R",
    9: "P",
    10: "J",
    11: "P",
    12: "J",
    13: "P",
    14: "P",
    15: "P",
    16: "P",
    17: "J",
    18: "P",
    19: "P",
    20: "P",
    21: "P",
    22: "J",
    23: "J",
    24: "P",
  },
  seams: [
    "The animals are counted twice, and differently. The Yahwist brings seven pairs of the clean animals and one pair of the rest (verses 2 to 3). The Priestly writer brings two of every kind, male and female (verses 9, 15). An editor kept both, and left verse 8 to reconcile them.",
    "The water comes from two places. In the Yahwist it simply rains, forty days and forty nights (4, 12, 17). In the Priestly account the flood is cosmic: the springs of the great deep burst open and the windows of the heavens are opened (11), and the waters prevail a hundred and fifty days (24).",
    "And the hands feel different. The Priestly writer dates the flood to the very day. The Yahwist ends on a line no accountant would write: then the LORD shut him in (16).",
  ],
  caveat:
    "One way scholars pull the threads apart, and the clearest case in the Torah. The exact seams are debated, and a few verses, like 8, read as the editor's join. This is a reconstruction, not a recovered original.",
  sources: "Wellhausen · Friedman, The Bible with Sources Revealed · Gunkel",
};

const DIACHRONIC: DiachronicLayer[] = [FLOOD];

export function getDiachronic(
  readingId: string,
  passageRef: string,
): DiachronicLayer | undefined {
  return DIACHRONIC.find(
    (d) => d.readingId === readingId && d.passageRef === passageRef,
  );
}
