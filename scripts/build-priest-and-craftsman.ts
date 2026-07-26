// Build Exodus 28-31, the priest and the craftsman, and place it in the book.
// Usage: npx tsx scripts/build-priest-and-craftsman.ts
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
    id: "ex-28",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 28–31 (selected)",
    chapterIndex: 28,
    crossesChapters: true,
    title: "The priest, and the craftsman",
    unitLabel: "Scene",
    thread: "Who wears the names, and who does the work. The clothing is specified in more detail than the furniture, and the first person in the Bible said to be filled with the Spirit of God turns out to be a metalworker.",
    closeEnd: "Then two tablets of stone, and the movement's long preparation is over.",
    passages: [
      {
        label: "One",
        ref: "28:1–38 (selected)",
        kind: "scene",
        form: "prose",
        title: "Names on his shoulders",
        verses: [
${verses(28, [2, 9, 11, 12, 29, 30, 36, 38])}
        ],
        ground: {
          kind: "historical",
          text: "The priest's clothing gets more specification than most of the furniture: an ephod, a breastpiece, a robe, a turban with a gold plate on it. Two onyx stones on the shoulders carry the names of the tribes, six and six, engraved as a gem-cutter engraves a seal. Twelve more stones sit on the breastpiece over his heart. In the fold of it are the Urim and Thummim, which were used to get a yes or a no from God and which nobody now can describe.",
          src: "Meyers · Propp · Childs",
        },
        meaning:
          "The garments are for glory and beauty, the text says, and then it says twice what they are actually for. Aaron carries the names of the tribes on his shoulders and over his heart whenever he goes in, as a continual memorial. The job is not to represent God to the people. It is to carry the people, by name, into the presence, on his body, and to bear the guilt of whatever they get wrong in the offering.",
        lenses: {
          theo: "The gold plate on his forehead reads holy to the LORD, and its stated purpose is so that the offerings will be accepted. Even the acceptance is arranged for in advance rather than earned on the day.",
        },
      },
      {
        label: "Two",
        ref: "29:1–46 (selected)",
        kind: "scene",
        form: "prose",
        title: "So that I may dwell among them",
        verses: [
${verses(29, [1, 4, 7, 44, 45, 46])}
        ],
        ground: {
          kind: "historical",
          text: "The ordination runs seven days: washing, dressing, anointing with oil, blood on the ear and thumb and toe, and a share of the meat. Then the chapter ends by saying what the whole apparatus is for, and it is the same sentence the instructions opened with. I will dwell among the Israelites and be their God, and they will know that I am the LORD their God who brought them out of Egypt.",
          src: "Propp · Meyers",
        },
        meaning:
          "The rescue is the reason given, at the end of the ordination as at the start of the plans. They will know that I am the LORD their God, who brought them out of Egypt, so that I might dwell among them. Everything in these four chapters, the stones, the oil, the seven days, exists to make an ordinary arrangement work: somebody has to be able to go in, on behalf of everybody else, without dying.",
      },
      {
        label: "Three",
        ref: "30:1–18 (selected)",
        kind: "scene",
        form: "prose",
        title: "The same for everyone",
        verses: [
${verses(30, [1, 11, 12, 15, 16, 18])}
        ],
        ground: {
          kind: "historical",
          text: "An incense altar, a bronze basin for washing, and in between them a census tax: half a shekel from every man counted, as a ransom for his life. The rich are not to give more and the poor are not to give less. The money goes to the service of the tent.",
          src: "Meyers · Propp",
        },
        meaning:
          "A flat rate in a code that elsewhere scales offerings to what a person can afford. Here the point is not affordability but equivalence: this payment stands for a life, and no life is worth more of it than another. The wealthiest man in the camp and the poorest put the same coin in, which is a small sentence with a long argument inside it.",
      },
      {
        label: "Four",
        ref: "31:1–18 (selected)",
        kind: "scene",
        form: "prose",
        title: "Bezalel",
        verses: [
${verses(31, [1, 2, 3, 4, 5, 6, 13, 17, 18])}
        ],
        ground: {
          kind: "historical",
          text: "God names the man who will build it. Bezalel son of Uri, of the tribe of Judah, and Oholiab with him, and skill given to every craftsman among them. Then the sabbath is restated, with the building of the sanctuary explicitly not exempt from it, and the section closes with two tablets of stone inscribed by the finger of God.",
          src: "Meyers · Propp · Fretheim",
        },
        meaning:
          "This is the first time in the Bible anyone is said to be filled with the Spirit of God, and he is not a prophet, a priest or a king. He is a man who works gold, stone and wood, and what he is filled with is skill, ability and knowledge in all kinds of crafts. Four chapters of specification end by saying that making things well is a gift of God's own Spirit, and then that even this work stops on the seventh day.",
        lenses: {
          theo: "The sabbath is restated here rather than anywhere else on purpose. The one project that could plausibly claim exemption, building God's own dwelling, is told to stop for a day like everything else.",
        },
        addr: {
          mode: "names",
          text: "If you make things, this passage says the skill is not incidental to your spiritual life and is not a distraction from it. And that it still stops on the seventh day, however urgent the work looks.",
        },
        ask: "What do you make, and have you ever thought of the skill in it as given rather than acquired?",
      },
    ],
  },`;

placeReadingInFile("content/exodus.ts", reading, "ex-28", 28);
console.log("Placed ex-28: 4 scenes across chapters 28 to 31.");
