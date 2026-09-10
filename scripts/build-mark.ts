// Build content/mark.ts: the book file, movement 1, and the readings authored so far.
//
// One generator for the book, emitting the file whole, for the reason recorded in build-ruth.ts:
// flipping a grounded skeleton to a sitting is a replacement, and placeReading refuses an id that
// is already present. Later tickets that add readings which never existed as skeletons may place
// them instead.
// Four movements follow the book's architecture rather than its chapter numbers, and only the
// first is declared until movement 2 has readings (see .scratch/mark/spec.md).
//
// Usage: npx tsx scripts/build-mark.ts
import { writeFileSync } from "node:fs";
import { BSB_MARK } from "@/content/bsb-mark";

const q = (s: string) => JSON.stringify(s);
const verses = (chapter: number, ns: number[], indent = "          ") =>
  ns
    .map((n) => {
      const text = BSB_MARK[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at Mark ${chapter}:${n}`);
      return `${indent}{ n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");

const range = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

const file = `import type { Movement, Panel, Reading } from "@/lib/types";

// Mark, book four, and the first New Testament book in the app. Sixteen chapters, 673 verses
// that carry text, every passage a narrative scene.
//
// Five verse numbers in this book are empty in a modern critical text: 7:16, 9:44, 9:46, 11:26
// and 15:28, absent from the earliest manuscripts, where the BSB keeps the number and drops the
// words. That is why content/bsb-mark.ts was generated with 673 rather than the 678 a verse-count
// table gives, and why the generator's count assertion passed at 673.
//
// The book ends at 16:8. The longer ending is not authored as scripture; it is the subject of the
// book capstone. That decision is reversible and is recorded in the spec.
//
// Only movement 1 is declared, and it carries no doorway, until movement 2 has readings: the
// content validator fails an empty movement range and a doorway pointing at an unknown movement.
//
// The scripture here was materialised verbatim from content/bsb-mark.ts and is enforced by the
// verse-integrity invariant in scripts/validate-content.ts. Never retype a verse by hand.

export const MARK: Reading[] = [
  {
    id: "mark-1a",
    bookId: "mark",
    tier: "sitting",
    span: "Mark 1:1–20",
    chapterIndex: 1,
    title: "The beginning",
    unitLabel: "Scene",
    thread: "The earliest gospel starts with no birth, no genealogy and no childhood. It starts with a man in a desert who says he is not the point, and inside twenty verses four men have walked away from a working business.",
    closeEnd: "Nobody in the book has asked yet who he is. Before long it will be the only question anybody has, and almost nobody in these sixteen chapters will get it right.",
    passages: [
      {
        label: "One",
        ref: "1:1–8",
        kind: "scene",
        form: "prose",
        title: "A voice in the wilderness",
        verses: [
${verses(1, [1, 2, 3, 4, 5, 6, 7, 8])}
        ],
        ground: {
          kind: "historical",
          text: "No birth, no genealogy, no childhood. The book starts with a grown man in a desert. The quotation in verses 2 and 3 is credited to Isaiah and is actually two texts spliced together, a line from Malachi about a messenger sent ahead laid in front of a line from Isaiah about a voice in the wilderness. John's clothing is Elijah's, described the same way in 2 Kings, and his food is what the desert gives.",
          src: "Marcus · Collins · France",
        },
        misreading: {
          named:
            "The first sentence is a devotional opening, the sort of thing a religious book begins with.",
          why: "Both of its main words belonged to the empire. Gospel was the word for an official announcement out of Rome, a victory or the accession of an emperor, and son of God was a title Augustus used of himself. Mark puts both on a Galilean labourer the state is going to execute. Read as devotion it is pious throat-clearing. Read in its own century it is a sentence you could be arrested for.",
        },
        meaning:
          "Notice where he begins. Not in Bethlehem and not in eternity, but in a desert, with somebody else. John gets eight verses, and the man the book is about does not appear until verse nine. When he is announced, it is by someone whose whole speech is about not being the point. Mark is in a hurry everywhere else in this book. Here he waits.",
        lenses: {
          theo: "The wilderness is where this people has always been re-formed, and anyone who knew Isaiah 40 knew that the voice in it was announcing the end of an exile. The book opens by standing inside that sentence.",
        },
      },
      {
        label: "Two",
        ref: "1:9–13",
        kind: "scene",
        form: "prose",
        title: "The tearing",
        verses: [
${verses(1, [9, 10, 11, 12, 13])}
        ],
        ground: {
          kind: "historical",
          text: "He comes from Nazareth, a village of a few hundred. The Greek for what happens to the heavens is the word for tearing rather than opening, and Mark uses it once more in this book, at the temple curtain when he dies.",
          src: "Marcus · Collins",
        },
        meaning:
          "The wilderness gets two verses and no conversation. No bargaining over bread, no city wall, no kingdoms of the world: those belong to Matthew and Luke, written later, and most readers are remembering their scene rather than this one. Mark gives forty days, a tempter, wild animals nobody else mentions, and angels.",
        tensions: [
          {
            claim:
              "He goes into the river with everyone else, in a baptism the text has just called one for the forgiveness of sins.",
            counter:
              "The three gospels written after this one all handle that sentence carefully. Matthew has John try to refuse him, Luke reports it without putting John in the scene, and the fourth gospel drops the baptism.",
            where: "Matthew 3:13–15 · Luke 3:19–22 · John 1:29–34",
          },
        ],
      },
      {
        label: "Three",
        ref: "1:14–20",
        kind: "scene",
        form: "prose",
        title: "Follow Me",
        verses: [
${verses(1, [14, 15, 16, 17, 18, 19, 20])}
        ],
        ground: {
          kind: "historical",
          text: "John has been arrested, and that is when he starts. Kingdom, spoken in a province under Roman administration, is the word an empire uses of itself. And the men he calls are not destitute. Verse 20 leaves Zebedee in the boat with the hired men, which means a business with employees.",
          src: "Marcus · Bond · Horsley",
        },
        meaning:
          "There is no argument in this scene and no explanation. He walks past, says a few words, and they go. Mark does not tell us they had heard him before, or what they were weighing, because he is not interested in the decision. He is interested in what it costs, and that he gives you precisely: the nets, then the boat, then the father sitting in it.",
        lenses: {
          arch: "The summons that arrives while you are working and does not wait for you to finish the job. (Called off the boat.)",
        },
        addr: {
          mode: "names",
          text: "You have been walked past by something that asked for more than you had reason to give, and you have probably done the arithmetic afterward rather than at the time. What you left is always easier to name than why you went.",
        },
        ask: "What are you still holding on to, that you would have to put down before you could understand why?",
      },
    ],
  },
  {
    id: "mark-1b",
    bookId: "mark",
    tier: "sitting",
    span: "Mark 1:21–45",
    chapterIndex: 1,
    title: "A day in Capernaum",
    unitLabel: "Scene",
    thread: "One day, told without a gap in it. A synagogue, a house, the whole town at the door after dark, and a man before dawn trying to get out of the building he has just filled.",
    closeEnd: "He tells the man to say nothing. The man says everything, and the result is that Jesus can no longer walk into a town.",
    passages: [
      {
        label: "One",
        ref: "1:21–28",
        kind: "scene",
        form: "prose",
        title: "Authority",
        verses: [
${verses(1, range(21, 28))}
        ],
        ground: {
          kind: "historical",
          text: "A scribe taught by citing the chain of authorities behind him, and the crowd's word for this man is that he does not. The unclean spirit speaks before anyone else does, names him, and is told to be quiet. That silencing starts a pattern that runs the length of the book.",
          src: "Marcus · Collins · France",
        },
        misreading: {
          named:
            "The unclean spirits are either literal demons, or primitive superstition a modern reader should quietly skip past.",
          why: "Both readings stop the book. In this world, illness, madness and misfortune were understood as something having taken up residence where it did not belong, and people described what they saw in the vocabulary they had. You do not have to adopt that vocabulary to read the scene, which is a man screaming in a synagogue who is afterwards sitting quietly. It is also worth noticing how close that vocabulary runs to the language of occupation, in a book written for people whose country had something in it that did not belong.",
        },
        meaning:
          "Two things happen here and only one of them is a miracle. The crowd says <b>authority</b> twice, and what they mean is that he is not quoting anybody. And the first character in the book to say who he is, is the thing being thrown out. Not the crowd, not the scribes, not the men who just left their nets. The book keeps that arrangement for fifteen chapters.",
        lenses: {
          arch: "The one who names you correctly turns out to be the one you are in the middle of getting rid of. (Recognised by the wrong mouth.)",
        },
      },
      {
        label: "Two",
        ref: "1:29–39",
        kind: "scene",
        form: "prose",
        title: "The whole town at the door",
        verses: [
${verses(1, range(29, 39))}
        ],
        ground: {
          kind: "historical",
          text: "The house is Simon's, and the fever is dealt with in one sentence: he takes her hand and lifts her. The town waits until after sunset because that is when the sabbath ends and carrying a sick person stops being work. Then before dawn he goes out to a deserted place, and the word Mark uses for it is the same one he used for the wilderness John was preaching in.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "The pace is the argument. Synagogue, house, whole town at the door, and then a man getting up in the dark to be somewhere nobody is. When they find him, notice that Simon's sentence is a complaint dressed as news: everyone is looking for you. The answer is not to go back. It is to leave. Whatever this book thinks he came for, being wanted by a town is not it.",
        lenses: {
          theo: "The first thing he does after a day that worked is remove himself from it. Mark keeps putting him alone after a success, and every time, somebody comes to fetch him back.",
        },
      },
      {
        label: "Three",
        ref: "1:40–45",
        kind: "scene",
        form: "prose",
        title: "If You are willing",
        verses: [
${verses(1, range(40, 45))}
        ],
        ground: {
          kind: "historical",
          text: "Leprosy in Leviticus is a category of ritual impurity rather than one disease, and its consequence is exclusion: the person lives outside the camp, and contact passes the state on. Which is what makes verse 41 the sentence in the scene. He touched him. Under the law the uncleanness travels toward the clean person, not the other way. Then he sends him to a priest, because only a priest can certify that anything has changed.",
          src: "Leviticus 13–14 · Marcus · Collins",
        },
        meaning:
          "The man's line is not about ability. It is about willingness. He has been told, or has worked out for himself, that his condition is a verdict, and the only open question is whether anyone wants it lifted. The answer is two words and a hand. Then the joke Mark keeps making: the man is told to say nothing, says everything, and by the end the one who could not enter a town can go anywhere, and the one who could go anywhere cannot enter a town. They have changed places.",
        addr: {
          mode: "names",
          text: "You have probably decided somewhere that a thing about you is not only true but deserved, and stopped asking about it on those grounds. The man in this scene does not doubt the power. He doubts the willingness.",
        },
        ask: "What have you stopped asking for, because somewhere you decided you had it coming?",
      },
    ],
  },
  {
    id: "mark-2",
    bookId: "mark",
    tier: "sitting",
    span: "Mark 2:1–3:6",
    chapterIndex: 2,
    crossesChapters: true,
    title: "Five arguments",
    unitLabel: "Scene",
    thread: "Five arguments in a row, each closer to the bone than the last. At the end of the fifth, two groups who agree about nothing else agree that he has to die. Mark gets there by chapter three.",
    closeEnd: "The Pharisees and the Herodians go out together. It is the only thing in the book they ever do together.",
    passages: [
      {
        label: "One",
        ref: "2:1–12",
        kind: "scene",
        form: "prose",
        title: "Through the roof",
        verses: [
${verses(2, range(1, 12))}
        ],
        ground: {
          kind: "historical",
          text: "A village house had a flat roof of beams, brush and packed mud, reached by an outside stair and diggable by hand. Four men do real damage to somebody's house. What Jesus answers is <b>their</b> faith, plural, which in the sentence is the faith of the carriers rather than the man on the mat. And the blasphemy charge is not invented: forgiveness was God's to give, and the scribes are stating the ordinary position correctly.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "He is asked for nothing and gives something nobody requested. The man was brought for his legs. Then the argument, and notice its shape: he does not defend the claim, he demonstrates it, and he does it by proving the easier case. Anyone can say your sins are forgiven, because nobody can check. So he does the one that can be checked. The scribes are not being slow here. They have understood him exactly, which is why the temperature keeps rising for the rest of the chapter.",
        lenses: {
          theo: "Forgiveness arrives before the request and with no condition attached, and the first people to object are the ones who care most about God's prerogatives. Both halves of that recur.",
        },
      },
      {
        label: "Two",
        ref: "2:13–22",
        kind: "scene",
        form: "prose",
        title: "Eating with them",
        verses: [
${verses(2, range(13, 22))}
        ],
        ground: {
          kind: "historical",
          text: "A booth on the road by the lake collected tolls for Herod Antipas, and the locals who staffed them worked for the occupation's revenue. That is why the word arrives paired with sinners, and why nobody at that table has a reputation left to lose. Eating together was not a social nicety in that world. It was the public statement of who you counted as your own.",
          src: "Marcus · Bond · Horsley",
        },
        meaning:
          "The complaint is not about doctrine, it is about the guest list, which is where most complaints of this kind actually live. His answer is a doctor's, and it sounds generous until you notice that it concedes their category rather than disputing it. He is not saying these people are fine. He is saying that is where the work is. Then the images pile up and they are all about strain: a patch that tears the coat worse than the hole did, wine that splits the skin holding it. The problem is not the wine.",
        lenses: {
          arch: "The table as the actual statement, whatever is said anywhere else. (Known by who you eat with.)",
        },
      },
      {
        label: "Three",
        ref: "2:23–28",
        kind: "scene",
        form: "prose",
        title: "Made for man",
        verses: [
${verses(2, range(23, 28))}
        ],
        ground: {
          kind: "historical",
          text: "Picking grain by hand as you walked through a field was legal. The objection is that doing it on the sabbath turns it into harvesting. The story he cites is in 1 Samuel 21, and the priest there is Ahimelech, not Abiathar. Readers have noticed since antiquity, and both Matthew and Luke quietly drop the name when they retell it.",
          src: "1 Samuel 21:1–6 · Marcus · Collins",
        },
        meaning:
          "The principle is stated as flatly as anything in the book. The sabbath was made for the person, not the person for the sabbath. It is not an argument against the sabbath, which he keeps. It is an argument about what any rule is for, and it is the kind of sentence that sounds obvious right up until you apply it to a rule you are currently enforcing on somebody else.",
        tensions: [
          {
            claim:
              "The sabbath command is absolute. It is grounded in the creation account, and the law attaches death to profaning it.",
            counter:
              "Here it is made subordinate to the person it was given for, and the case is settled by appeal to a story in which the rule was broken and the man who broke it was David.",
            where: "Exodus 20:8–11 · Exodus 31:14–15 · 1 Samuel 21:1–6",
          },
        ],
      },
      {
        label: "Four",
        ref: "3:1–6",
        kind: "scene",
        form: "prose",
        title: "The withered hand",
        verses: [
${verses(3, range(1, 6))}
        ],
        ground: {
          kind: "historical",
          text: "They are watching to see whether he will heal, which means they already take it for granted that he can. A withered hand is not an emergency. The man could be treated tomorrow at no cost to anyone, and everyone in the room knows it, which is what makes the question a trap and the answer a decision. This is also the one place in the four gospels where the narrator says outright that he was angry, and Matthew and Luke both remove it.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "He does not need to do this today, and he does it in the middle of the room, having first made the man stand up where everyone can see him. The question he asks has no safe answer, and they give none. Then the sentence that closes the sequence: two groups who agree about nothing, the Pharisees and the Herodians, go out together and start planning how to kill him. Over a hand.",
        addr: {
          mode: "names",
          text: "The decision to do the decent thing on the inconvenient day is rarely about the decent thing. It is about whether you are willing to be seen deciding. He made the man stand up first.",
        },
        ask: "What are you waiting for a better day to do, and who is that timing actually for?",
      },
    ],
  },
];

// Movement 1. No doorway: movement 2 does not exist yet, and the content validator fails a
// doorway pointing at a movement it cannot resolve. No capstone until the movement completes.
export const THE_AUTHORITY_MOVEMENT: Movement = {
  id: "the-authority",
  index: 1,
  title: "The authority",
  range: "Mark 1:1–8:21",
  throughline:
    "A man arrives with no birth, no childhood and no genealogy, and starts giving orders that things obey. The crowds grow, the authorities decide by chapter three that he has to go, and nobody watching can say what they are looking at.",
  chapterStart: 1,
  chapterEnd: 8,
  situation: {
    kicker: "The ground beneath Galilee",
    title: "The situation",
    image: "/images/mark-authority.webp",
    paragraphs: [
      "Galilee was not governed from Rome directly. It was run by Herod Antipas, a client ruler who kept his position by keeping Rome satisfied, and who was building two cities, Sepphoris and Tiberias, out of the region's taxes while this story is set. The lake was a working fishery, licensed and taxed, and the collection apparatus of that system is what the book means when it says tax collectors. These are not villains in a morality tale. They are the visible end of an occupation's revenue.",
      "In this world, illness, madness and misfortune were widely understood as something having taken up residence where it did not belong. Reporting that accurately is not the same as endorsing it, and sneering at it makes the book unreadable. It is worth noticing how close the vocabulary of possession runs to the vocabulary of occupation, and that the book was written for people living under one.",
      "It was written for readers outside Judaism. It stops to explain Jewish handwashing custom to an audience that would not have known it, and it translates every Aramaic phrase it uses. The Greek is rough and fast, mostly in the present tense, and it says immediately more than forty times. Nobody has ever mistaken it for literary prose.",
      "And it was written into a war. The window most scholars give runs either side of the Jewish revolt against Rome and the destruction of the temple in 70. Whatever else it is, it is an account of a Galilean executed by the Roman state, written for people who were watching that same state level Jerusalem.",
    ],
    sources: "Marcus · Collins · Bond · Horsley",
  },
};

// The book-level composition overlay: how Mark was written, and how it ends.
export const MARK_INTRO: Panel = {
  kicker: "An introduction · Mark 1–16",
  title: "The book that stops mid-sentence",
  paragraphs: [
    "Mark is the earliest of the four gospels, and the other three knew it. Matthew and Luke both had it in front of them and used most of it, often word for word, which is the plainest reason to read this one first: it is the account the others were working from, before it was tidied. The Greek is rough and urgent, largely in the present tense, and the writer says immediately more than forty times.",
    "It is anonymous. The name comes from a tradition recorded early in the second century, quoted much later by Eusebius, which ties the book to Peter's preaching. The claim is old and it is contested, and nothing in the book itself names its author. What the book does show is its audience: it stops to explain Jewish custom and translates every Aramaic phrase, so it was not written for readers who already knew either.",
    "Then the ending, which almost no reader has had put to them plainly. The two oldest complete copies of this book stop at 16:8, with women running from an empty tomb and telling nobody, because they were afraid. The twelve verses printed after that in most Bibles are a later addition. Some manuscripts carry a different, shorter ending instead, and a few carry both. Five more verse numbers in this book, 7:16, 9:44, 9:46, 11:26 and 15:28, are empty for the same reason: the numbering was fixed before the earliest manuscripts were consulted, and the words in them were never in the earliest copies.",
    "None of that is a scandal being reported. It is in the footnotes of most study Bibles. What is unusual is being shown it while you read rather than after, and being left to notice what it does to the book. An account in which nobody recognises the man it is about, whose closest followers fail at every turn, and whose one clear statement of who he is comes from the officer running his execution, ends by refusing to finish.",
  ],
  timeline: [
    {
      tag: "c. 30 CE",
      text: "The events as the book arranges them: about a year in Galilee, and one week in Jerusalem.",
    },
    {
      tag: "66–70 CE",
      text: "The Jewish revolt against Rome, ending with the destruction of the temple.",
    },
    {
      tag: "c. 65–75 CE",
      text: "The window most place the writing in, which is what makes chapter 13 the argument it is.",
    },
    {
      tag: "Early 100s CE",
      text: "The tradition tying the book to Peter's preaching is recorded. It is old, and it is contested.",
    },
    {
      tag: "c. 80–90 CE",
      text: "Matthew and Luke are written, both using this book, both softening its portrait of the disciples.",
    },
    {
      tag: "300s CE",
      text: "Sinaiticus and Vaticanus, the oldest complete copies. Both stop at 16:8.",
    },
  ],
  sources: "Marcus · Collins · Bond · France · Ehrman",
};
`;

writeFileSync("content/mark.ts", file);
console.log("Wrote content/mark.ts: mark-1a, mark-1b, mark-2.");
