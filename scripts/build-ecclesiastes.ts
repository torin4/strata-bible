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

// Sayings render from the same BSB lookup as verses; the field name is what the renderer keys on.
const sayings = (chapter: number, ns: number[]) => verses(chapter, ns);

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

const CLOSING_POEM = [
  lineate(12, 1, ["in the days of your youth,", "and the years approach"]),
  lineate(12, 2, ["moon, and stars is darkened,"]),
  lineate(12, 3, [
    "of the house tremble and the strong men stoop,",
    "cease because they are few",
  ]),
  lineate(12, 4, ["to the street are shut", "at the sound of a bird"]),
  lineate(12, 5, [
    "and dangers of the road,",
    "the grasshopper loses its spring,",
  ]),
  lineate(12, 6, [
    "cord is snapped and the golden bowl is crushed,",
    "is shattered at the spring",
  ]),
  lineate(12, 7, ["to the ground from which it came"]),
  lineate(12, 8, ["says the Teacher."]),
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
  {
    id: "ecc-5",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 5",
    chapterIndex: 5,
    title: "Your lot",
    thread: "How to behave in a place of worship, which turns out to be mostly an instruction to say less. Then officials watching officials, money that will not fill anyone, and a man leaving exactly as he arrived.",
    closeEnd: "And then, for the fourth time, the same sentence. Eat, drink, find something in the work. Here he calls it a gift.",
    passages: [
      {
        ref: "5:1–7",
        kind: "argument",
        form: "prose",
        title: "Let your words be few",
        verses: [
${verses(5, range(1, 7))}
        ],
        ground: {
          kind: "historical",
          text: "The house of God is the temple, and this is advice about conduct inside it. A vow was a binding transaction: a person promised something to God in exchange for something they wanted, and the law treated a broken one seriously. The messenger in verse 6 is most likely a temple official who has come to collect. So this is practical guidance about a real institution and a real debt.",
          src: "Deuteronomy 23:21–23 · Fox · Seow",
        },
        meaning:
          "The whole passage is about talking too much, and it is the only religious instruction in the book. Go to listen rather than to perform. Do not make promises you will regret. And once you are in one, do not tell the official it was a mistake. God is in heaven and you are on earth, so let your words be few. That is not piety. It is a warning about the distance between what people say in a religious moment and what they are willing to do on the Tuesday afterwards.",
        lenses: {
          theo: "The one piece of worship advice in this book is to say less. Everywhere else it is sceptical about what people can know. Here it is sceptical about what they promise.",
        },
      },
      {
        ref: "5:8–17",
        kind: "argument",
        form: "prose",
        title: "Never satisfied",
        verses: [
${verses(5, range(8, 17))}
        ],
        ground: {
          kind: "historical",
          text: "Verse 8 describes a chain of officials, each watched by a higher one, which is the administration of a province inside an empire. It is offered as a reason not to be astonished by injustice rather than as a defence of it. Then the money: income that does not satisfy, goods that attract people to consume them, wealth that keeps its owner awake, and a fortune lost in a bad venture leaving a son with nothing.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the most practical stretch in the book and none of it has dated. A man who loves money is never satisfied by money. What you accumulate attracts people to consume it. The worker sleeps and the rich man does not. And at the centre, the accounting fact: he came naked and he leaves naked and takes nothing in his hands. That is not a moral about greed. It is stated flatly, and the paragraph around it is about what people do with entire lives in full knowledge of it.",
        lenses: {
          arch: "The thing acquired to produce security, which arrives and then has to be guarded, and takes the sleep it was bought to provide. (What you own, watching you.)",
        },
      },
      {
        ref: "5:18–20",
        kind: "argument",
        form: "prose",
        title: "This is his lot",
        verses: [
${verses(5, range(18, 20))}
        ],
        ground: {
          kind: "historical",
          text: "The word given as lot is a portion: the share assigned to a person, the way land or food is apportioned. It describes what somebody gets rather than what they earn, and it is the term this book reaches for whenever it stops arguing.",
          src: "Fox · Seow",
        },
        meaning:
          "Fourth time, and the wording is stronger than before. Not merely that there is nothing better, but that this is good and fitting; that the ability to enjoy what you have is itself given; and that a man occupied with the joy of his heart does not spend his days counting them. That last line is close to a definition of contentment, and it has been arrived at from the bleakest available direction.",
        addr: {
          mode: "claims",
          text: "You have probably been treating enjoyment as something earned first and permitted afterwards. This book puts it the other way round. The days are few, the enjoyment is the portion, and there is no version of this where you finish and then begin.",
        },
        ask: "What are you postponing until you have earned it?",
      },
    ],
  },
  {
    id: "ecc-6",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 6",
    chapterIndex: 6,
    title: "A stranger will enjoy them",
    thread: "The shortest chapter and the bleakest. A man given everything and denied the capacity to enjoy it, and a comparison with a stillborn child that the book does not soften.",
    closeEnd: "It ends on two questions nobody can answer, which is where the first half of the book stops.",
    passages: [
      {
        ref: "6:1–6",
        kind: "argument",
        form: "prose",
        title: "A stranger will enjoy them",
        verses: [
${verses(6, range(1, 6))}
        ],
        ground: {
          kind: "historical",
          text: "The affliction is precise, and it is the inverse of chapter five: not a man who lacks, but a man who has everything and is not given the capacity to enjoy it. The stillborn comparison uses a rhetorical form the ancient world knew. And the detail about not receiving a proper burial matters, because burial was the last thing a life could still get right.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The book has spent five chapters saying that enjoyment is the portion. Here it says the portion can be withheld, and it names God as the one withholding it, which is the most uncomfortable sentence in the chapter and is not softened. Then the comparison, which is meant to shock: a stillborn child, who never saw the sun and knew nothing, is better off than a man with a hundred children and a thousand years who could not enjoy any of it. He is not being provocative. He is measuring by his own standard, consistently, and that is where it comes out.",
      },
      {
        ref: "6:7–12",
        kind: "argument",
        form: "prose",
        title: "Better what the eye can see",
        verses: [
${verses(6, range(7, 12))}
        ],
        ground: {
          kind: "historical",
          text: "Verse 9 is a proverb, and it is the book's one piece of straightforward advice about wanting things: what is in front of you beats the wandering of appetite. The chapter then closes on two questions, which is how the first half of the book ends. Who knows what is good for a person, and who can say what comes after.",
          src: "Fox · Seow",
        },
        meaning:
          "The appetite line is the practical version of everything said so far about accumulation. All a man's labour is for his mouth, and the mouth is never filled. And the two closing questions are not rhetorical dressing. They are the position the book has been arguing toward since chapter one: nobody can tell you what is good, and nobody can tell you what comes after. The second half is written from inside that rather than out of it.",
        addr: {
          mode: "claims",
          text: "You are carrying an idea of the life you would enjoy, and it is not the one in front of you, and the comparison is doing steady damage to the one you have. Better what the eye can see, says the book, and it is not counselling modesty. It is being practical.",
        },
        ask: "What is actually in front of you, that you have been treating as the wrong version?",
      },
    ],
  },
  {
    id: "ecc-7",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 7",
    chapterIndex: 7,
    title: "Better than",
    thread: "A run of better-than sayings that recommend funerals over parties, and then the sentence that breaks the promise Proverbs makes.",
    closeEnd: "He set out to be wise and reports that it was beyond him. Then one thing he says he did find, which is about people rather than about the world.",
    passages: [
      {
        ref: "7:1–14 (selected)",
        kind: "saying-cluster",
        form: "list",
        title: "Better than",
        sayings: [
${sayings(7, [1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 14])}
        ],
        perItem: {
          1: {
            note: "The second half is the surprise. A good name outlasting you is a conventional saying. Your death being better than your birth is not.",
          },
          2: {
            note: "The reason given is not that grief improves you. It is that a funeral tells the truth about where this goes and a party does not.",
          },
          10: {
            addr: {
              mode: "claims",
              text: "Nostalgia is named here as a failure of wisdom rather than a harmless habit. Not because the past was bad, but because the comparison is unavailable to you and you are making it anyway.",
            },
          },
          13: {
            note: "The same image as chapter one, what is crooked cannot be straightened, and here it is put directly to God's account.",
          },
          14: {
            note: "The closest the book comes to naming its own method. Take the good day as good. On the bad one, consider that you were never given the pattern.",
          },
        },
        ground: {
          kind: "genre",
          text: "The better-than saying is a standard wisdom form and Ecclesiastes uses it more densely here than anywhere else. Proverbs uses it too. The difference is what this collection recommends: a house of mourning over a house of feasting, sorrow over laughter, the end of a thing over its beginning. Read as advice that sounds morbid. Read as a form it is doing what the form does, which is compare two goods and rank them.",
          src: "Fox · Seow · von Rad",
        },
        misreading: {
          named:
            "The book is recommending gloom: mourning over feasting, sorrow over laughter, a funeral over a party.",
          why: "The form compares two goods rather than condemning one, and the text gives its reason: death is the end of every man and the living should take it to heart. The house of mourning is recommended as information, not as a mood. And this is the same writer who has already told you four times to eat your bread and enjoy your work. He is not against the party. He is saying the party will not tell you anything and the funeral will.",
        },
        meaning:
          "The cluster's argument is that the unwelcome thing is usually the more useful one. A rebuke over a song. The end over the beginning. Patience over pride. And then verse 14, which is as close as this book comes to stating its method outright: be glad on the good day, and on the bad one consider that God made the one alongside the other, so that nobody can work out what is coming. That is not consolation. It is an instruction about where to put your attention on each kind of day.",
      },
      {
        ref: "7:15–29",
        kind: "argument",
        form: "prose",
        title: "Nothing to be found",
        verses: [
${verses(7, range(15, 29))}
        ],
        ground: {
          kind: "historical",
          text: "Verse 15 is a report of something seen rather than a theory advanced. Verses 16 and 17, advising against being overly righteous or overly wicked, have troubled readers for a very long time and have been read as counsel of moderation, as irony, and as advice about staying alive under an unpredictable regime. And verse 28 is among the hardest sentences in the book, on which more below.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Two hard things here, and the second is harder. The first is verse 15, the flat contradiction of what Proverbs promises, reported as an observation rather than argued as a position. The second is verses 26 to 28, where he writes of a woman as a snare and then reports finding one man in a thousand and not one woman among them all. That is misogyny, it is in the text, and it is not improved by explanation. What can be said is narrow and worth saying anyway: he attributes the search to a method he has just called a failure, he appears to be handling a saying that already existed, and the very next verse takes the charge off any category of person and puts it on mankind in general. None of that makes the sentence acceptable. It does show that the book does not rest on it.",
        tensions: [
          {
            claim:
              "A righteous man perishes in his righteousness and a wicked man lives long in his wickedness. He says he has seen both.",
            counter:
              "Proverbs, kept in the same collection, promises the opposite: the LORD does not let the righteous go hungry, and the fear of the LORD prolongs life. Job is built on the same wound from the other direction, one man's case instead of a survey.",
            where:
              "Ecclesiastes 7:15 · Proverbs 10:3 · Proverbs 10:27 · Job 1–2",
          },
        ],
        addr: {
          mode: "claims",
          text: "You have probably kept a private ledger in which doing the right thing is supposed to produce a result, and noticed that it does not always, and not said so out loud. This book says it out loud, inside the collection, and nothing catches fire.",
        },
        ask: "Where has the arrangement not paid out, and who have you not said that to?",
      },
    ],
  },
  {
    id: "ecc-8",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 8",
    chapterIndex: 8,
    title: "Nobody can find it out",
    thread: "How to survive a king, why a delayed sentence makes people bolder, and three separate admissions that nobody can find out what is going on.",
    closeEnd: "The wise man who claims to know is named specifically and disbelieved. That is the last word of the movement.",
    passages: [
      {
        ref: "8:1–9",
        kind: "argument",
        form: "prose",
        title: "Keep the king's command",
        verses: [
${verses(8, range(1, 9))}
        ],
        ground: {
          kind: "historical",
          text: "This is court advice, a recognised wisdom subject: how to behave in front of a ruler whose word is final and who does whatever he pleases. The counsel is practical and unheroic. Do not be in a hurry to leave his presence, do not join a bad cause, and remember that nobody has authority over the day of their death. Written in a province, about power that could not be appealed.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "There is no politics here in the sense of a programme, and it would be easy to read that as quietism. What the passage does is describe the position of somebody with no leverage and then tell them the truth about it. The king does as he likes. There is no discharge from that war. And then verse 9, which is the sentence underneath all of it: a man lords it over another man to his own harm. That is offered as an observation, with no expectation that stating it will change anything.",
        lenses: {
          arch: "Advice for the powerless that does not pretend they have power, and does not tell them their patience is a virtue. (How to stand in the room.)",
        },
      },
      {
        ref: "8:10–17",
        kind: "argument",
        form: "prose",
        title: "Nobody can find it out",
        verses: [
${verses(8, range(10, 17))}
        ],
        ground: {
          kind: "historical",
          text: "Verse 11 is social observation: when sentence is not carried out quickly, people grow bolder about doing wrong. Then the book does something it rarely does. It states the conventional position, that it will go well with those who fear God, and immediately reports the contrary evidence, that there are righteous men who get what the wicked deserve and wicked men who get what the righteous deserve.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the movement's title arriving. Three times in a few verses he says nobody can find it out: however hard a man labours to seek it he will not find it, and even if a wise man claims to know, he cannot find it. That last clause is aimed squarely at his own profession. He is not saying there is nothing to find. He is saying the search does not terminate, that anyone telling you they have finished it is wrong, and that this holds for the wise as much as for anybody. And then, for the fifth time, the permission: eat, drink, and be glad.",
        addr: {
          mode: "claims",
          text: "Somebody has explained your situation to you with confidence, and it did not fit, and you assumed the failure was yours for not seeing it their way. This book puts the wise man who claims to have it worked out in the same sentence as everybody else who cannot.",
        },
        ask: "Whose confident account of your life have you been deferring to?",
      },
    ],
  },
  {
    id: "ecc-9",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 9",
    chapterIndex: 9,
    title: "Go, eat your bread",
    thread: "One fate for everyone, the dead knowing nothing, and then, four verses later, the most direct instruction in the book. Go. Eat. Drink. Wear white. Love somebody. Work hard.",
    closeEnd: "A poor wise man saves a city and nobody remembers him. That is the last word on wisdom in this movement, and it is not a triumph.",
    passages: [
      {
        ref: "9:1–6",
        kind: "argument",
        form: "prose",
        title: "One fate",
        verses: [
${verses(9, range(1, 6))}
        ],
        ground: {
          kind: "historical",
          text: "The common fate is death, and the list of pairs it levels is deliberately provocative: righteous and wicked, clean and unclean, the one who sacrifices and the one who does not, the one who makes a vow and the one who refuses. Those are cultic categories, the distinctions that ordered religious life, and death is presented as indifferent to every one of them.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Verse 5 is the sentence that nearly kept this book out of the collection. The dead know nothing, have no further reward, and their memory is forgotten. There is no hedging anywhere in it. And verse 4 is the strangest consolation in Scripture: there is hope for anyone among the living, because a live dog is better than a dead lion. Dog was not an affectionate word in that world. He is saying that being alive and worthless beats being dead and magnificent, and he offers it as encouragement.",
        tensions: [
          {
            claim:
              "The dead know nothing and have no further reward, and their love and hate and envy have already vanished.",
            counter:
              "Later writing in the same collection refuses to leave it there, and the hope it grows is asserted rather than argued for. This book neither denies that hope nor makes room for it. It reports what can be seen under the sun, and stops.",
            where: "Ecclesiastes 9:5–6 · Daniel 12:2 · Isaiah 26:19",
          },
        ],
      },
      {
        ref: "9:7–12",
        kind: "argument",
        form: "prose",
        title: "Go, eat your bread",
        verses: [
${verses(9, range(7, 12))}
        ],
        ground: {
          kind: "historical",
          text: "The instructions are specific and physical: bread, wine, white garments, oil on the head, a wife, work done with force. White clothing and oil were what people wore to a feast rather than to an ordinary day, so the instruction is to dress for a celebration on a normal Tuesday. And the reason given is not that life is good. It is that in Sheol there is no work or planning or knowledge or wisdom.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the sentence the book exists for, and the order it arrives in is the argument. It comes immediately after the bleakest paragraph in the book, and its grounds are that paragraph. Not in spite of the one fate: because of it. The clause people miss is in the middle, that God has already approved your works, which removes the condition. You are not being told you may enjoy things once you have earned the right. Then verse 11 makes the same point from the other side: the race is not to the swift, and time and chance happen to all. Nothing here is deserved, including the good parts.",
        lenses: {
          theo: "The permission is granted rather than offered. He does not say you may. He says go. This is the only stretch of the book written in the imperative, which is worth noticing in twelve chapters that otherwise refuse to advise.",
        },
        addr: {
          mode: "claims",
          text: "You have been holding off on the ordinary pleasures until the situation resolves, and the situation is not going to resolve on the schedule you had in mind. This is not permission to enjoy yourself once things improve. It is an instruction to eat, today, on the grounds that the days are few.",
        },
        ask: "What have you been holding off on until things settle?",
      },
      {
        ref: "9:13–18",
        kind: "argument",
        form: "prose",
        title: "Nobody remembered that poor man",
        verses: [
${verses(9, range(13, 18))}
        ],
        ground: {
          kind: "historical",
          text: "A short parable with no names and no date: a small city, a great king, siege ramps, and a poor wise man who saved it. Whether it happened or is an example is not stated, and probably does not matter to the point being made.",
          src: "Fox · Seow",
        },
        meaning:
          "The story is told to praise wisdom and it ends by reporting that wisdom did not get paid. He saved the city and nobody remembered him, and the wisdom of a poor man is despised and his words go unheeded. Then, immediately after, the book says wisdom is better than weapons of war, and that one sinner destroys much good. Both are held at once. Wisdom works, and it is not rewarded, and the second fact is not allowed to cancel the first.",
      },
    ],
  },
  {
    id: "ecc-10",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 10",
    chapterIndex: 10,
    title: "A little folly",
    thread: "The lighter of the two collections: dead flies in the perfume, a snake that bites before it is charmed, and a bird that carries what you said in your own bedroom.",
    closeEnd: "It ends on the advice of somebody who has watched what happens to people who talk.",
    passages: [
      {
        ref: "10:1–20 (selected)",
        kind: "saying-cluster",
        form: "list",
        title: "A little folly",
        sayings: [
${sayings(10, [1, 2, 4, 8, 9, 10, 12, 14, 18, 19, 20])}
        ],
        perItem: {
          1: {
            note: "The image is the argument of the whole chapter. A little folly does not reduce wisdom proportionally. It contaminates the jar.",
          },
          10: {
            note: "The one piece of plain practical advice in the book: sharpen the axe. Skill is offered as a substitute for force.",
          },
          14: {
            note: "The refrain from chapter eight, dropped into a saying about people who talk too much. Nobody knows what is coming, and the fool multiplies words anyway.",
          },
          19: {
            addr: {
              mode: "claims",
              text: "This is not the cynicism it reads as. Money answering everything is an observation about what money does, made by a man who has already reported that it never satisfies anybody. Both are true, and you know both.",
            },
          },
          20: {
            note: "Advice from somebody who has watched what happens to people who talk. The bird carrying your words is proverbial, and the point is that a bedroom is not private.",
          },
        },
        ground: {
          kind: "genre",
          text: "The second and lighter collection, working differently from chapter seven's. Where those sayings compared two goods and ranked them, these mostly describe consequences: dig a pit and fall into it, breach a wall and meet a snake, quarry stone and be hurt by it. The form is observational rather than moral, and several of them are about work rather than about virtue.",
          src: "Fox · Seow · von Rad",
        },
        meaning:
          "The chapter reads as a grab-bag and has one argument running under it: small things are decisive. A few dead flies spoil the whole jar. A dull axe costs strength you did not need to spend. A word said in a bedroom travels. None of it is about grand failures of character. It is about the disproportionate cost of small carelessness, which is the observation of somebody who has watched competent people undone by things they did not think mattered.",
        addr: {
          mode: "claims",
          text: "Something small in your working life is costing you more than it should, and you have been treating it as beneath attention because the big things are handled. Sharpen the axe, says the book, which is the least spiritual sentence in Scripture and one of the most useful.",
        },
        ask: "What have you been leaving blunt?",
      },
    ],
  },
  {
    id: "ecc-11",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 11:1–12:8",
    chapterIndex: 11,
    crossesChapters: true,
    title: "Remember your Creator",
    thread: "Sow in the morning and the evening because you do not know which will take. Then the finest writing in the book: a house falling quietly into disrepair, which is a body.",
    closeEnd: "The last line returns the sentence the book opened with, closing the frame. Everything is vapour, and he has told you six times what to do about it.",
    passages: [
      {
        ref: "11:1–10",
        kind: "argument",
        form: "prose",
        title: "Cast your bread",
        verses: [
${verses(11, range(1, 10))}
        ],
        ground: {
          kind: "historical",
          text: "Casting bread on the waters has been read as maritime trade, as sowing grain on flooded ground, and as ordinary generosity; the image survives all three readings. Dividing a portion among seven or eight is risk-spreading, stated as such: you do not know what disaster may come. And the instruction to sow morning and evening is agricultural advice being used as a general argument about acting without information.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the practical conclusion of everything the book has established, and it is the opposite of paralysis. You cannot know which venture will succeed, so run more than one. You cannot read the weather, so stop watching it and sow. You do not understand how bones are formed in a womb and you will not understand the work of God either, so act anyway. Then the turn to a young man, told to rejoice and follow his heart and his eyes, with a clause attached about judgment that has been read as a later hand and reads just as well as this writer's own refusal to make it simple.",
        lenses: {
          arch: "The decision taken without the information that would have settled it, which is every decision anybody has ever actually made. (Sowing in weather you cannot read.)",
        },
      },
      {
        ref: "12:1–8",
        kind: "poem",
        form: "poetry",
        title: "Before the silver cord",
        verses: [
${CLOSING_POEM}
        ],
        ground: {
          kind: "genre",
          text: "The imagery is a household running down. The keepers of the house tremble, the strong men stoop, those grinding cease because they are few, the ones watching through windows see dimly, the doors to the street are shut. Then four broken things at a well: a silver cord, a golden bowl, a pitcher, a wheel. And the almond blossoming, the grasshopper losing its spring, the caper berry shrivelling.",
          src: "Fox · Seow · Alter",
        },
        misreading: {
          named:
            "The poem is a coded anatomy of old age: the keepers are the hands, the grinders are the teeth, the windows are the eyes.",
          why: "That decoding is ancient, ingenious, and mostly works, which is the problem. Read as a key the poem becomes a puzzle with a solution, and once you have the solution there is no reason to read it again. What is on the page is a great house in its last stage, the staff too few to keep it, the doors shut and the sound going out of it. That image does something the anatomy cannot. It makes the ending gradual, domestic and quiet, which is how it usually is.",
        },
        meaning:
          "The instruction is to remember now, and everything after it is the reason, laid out as one long before: before the light goes, before the house shuts, before the cord snaps and the pitcher goes at the spring. Then a line that is not despair but bookkeeping, the dust returning to the ground and the breath to God who gave it. And then the thesis again, word for word from chapter one, closing the frame. Nothing has been solved. Something has been recommended, six times.",
        addr: {
          mode: "claims",
          text: "You will be, at some point, a house with fewer people in it than it was built for. The book does not ask you to be brave about that. It asks you to remember now, while the light is still sweet, which is a thing that can only be done early.",
        },
        ask: "What do you want to be in the habit of, before the days come that you take no pleasure in?",
      },
    ],
  },
  {
    id: "ecc-12",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 12:9–14",
    chapterIndex: 12,
    title: "The epilogue",
    thread: "Six verses in a different voice, speaking about the Teacher from outside his own book, and closing on a sentence that lands like a door shutting.",
    closeEnd: "Whether that is a later hand making a dangerous book keepable, or the author signing his own work, is genuinely argued, and this app is not going to settle it for you.",
    passages: [
      {
        ref: "12:9–14",
        kind: "argument",
        form: "prose",
        title: "The whole duty of man",
        verses: [
${verses(12, range(9, 14))}
        ],
        ground: {
          kind: "historical",
          text: "The voice changes here. For twelve chapters the book has spoken as I; these six verses speak of the Teacher as he, describe his method from outside it, and address a reader as my son, which is the standard address of instruction literature.",
          src: "Fox · Seow · Longman · Barton",
        },
        meaning:
          "Two readings, both serious. On the first this is a later editor doing what the book needed to survive: framing twelve dangerous chapters with a summary orthodox enough to keep, which is why we have it at all. On the second it is the author signing his own work, and the judgment clause is consistent with the one he attached to the young man two chapters earlier. What is not in doubt is the effect. After twelve chapters of vapour, fear God and keep his commandments lands like a door closing on a room somebody had just opened a window in.",
        addr: {
          mode: "claims",
          text: "Somebody has summarised your situation for you in a sentence that was true and did not touch what you were actually asking about. This book keeps both: the summary, and the twelve chapters that will not fit inside it.",
        },
        ask: "What summary of your life is accurate and still does not describe it?",
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
  doorway: {
    kicker: "The second movement",
    title: "What cannot be found out",
    paragraphs: [
      "The first movement asked what a life adds up to and answered vapour, interrupting itself three times to say eat your bread anyway.",
      "What follows narrows. Money, worship, power, the man who has everything and cannot enjoy it, and then a long collection of sayings about what is better than what. It closes by admitting, three separate times, that nobody can find out what is actually being done under the sun, however confidently the wise claim to have looked.",
    ],
    nextMovementId: "not-found-out",
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

export const NOT_FOUND_OUT_MOVEMENT: Movement = {
  id: "not-found-out",
  index: 2,
  title: "What cannot be found out",
  range: "Ecclesiastes 5–8",
  throughline:
    "Money that will not fill anyone, a man denied the ability to enjoy what he has, a collection of sayings about what is better than what, and the repeated admission that nobody can find out what is done under the sun.",
  chapterStart: 5,
  chapterEnd: 8,
  situation: {
    kicker: "The ground beneath the search",
    title: "The situation",
    paragraphs: [
      "The world of chapter five is a province inside an empire. One official watched by a higher one, and higher ones over them, is the administrative reality of Persian-period Judah: a small territory whose taxes and decisions travelled a long way off. The book offers that chain as a reason not to be astonished by injustice, which is a bleak sort of realism rather than an endorsement of it.",
      "Money in that economy was silver by weight and land, not a number held somewhere safe. It was physical, on the premises and vulnerable, which is why the observation that a rich man cannot sleep is literal rather than figurative.",
      "Vows were binding transactions with a real institution. A person promised something to God in exchange for something wanted, and the law took a broken vow seriously. When the book says do not tell the messenger it was a mistake, the messenger is somebody who has come to collect.",
      "And the movement's title is the book's own claim, made three separate times in chapter eight. However hard a person works at it, and however confidently the wise say they have it, nobody can find out the work that is done under the sun. That is a limit on knowledge, stated by somebody who went and tried.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
  doorway: {
    kicker: "The third movement",
    title: "Eat your bread",
    paragraphs: [
      "Eight chapters of looking, and the finding is that the looking does not finish. What follows does not solve that. It stops trying.",
      "The last four chapters hold the bleakest sentence in the book and the most direct instruction in it, four verses apart. Then a second collection of sayings, a poem about a house falling into disrepair that is really about a body, and six verses in a different voice that somebody added at the end.",
    ],
    nextMovementId: "eat-your-bread",
  },
  capstone: {
    kicker: "The second movement · Ecclesiastes 5–8",
    title: "Nobody has finished looking",
    paragraphs: [
      "Four chapters narrowing from the shape of a life to the specifics of one. Money that will not fill anybody. A man given everything and denied the capacity to enjoy it. A collection of sayings that recommends the funeral over the party, for a stated reason. And a chapter of court advice for people with no leverage at all.",
      "What holds it together is the claim in the movement's title, made three times in the last chapter and aimed squarely at the writer's own profession: nobody can find out the work that is done under the sun, and even a wise man who says he has, cannot. That is not an argument for ignorance. It is an argument against people selling completion, and it is made by somebody who went and looked.",
      "And the permission has now landed five times in eight chapters, each time attached to the hardest sentence around it. By this point it is not an interruption of the argument. It is the conclusion the argument keeps producing.",
    ],
    sources: "Fox · Seow · Krüger",
  },
};

export const EAT_YOUR_BREAD_MOVEMENT: Movement = {
  id: "eat-your-bread",
  index: 3,
  title: "Eat your bread",
  range: "Ecclesiastes 9–12",
  throughline:
    "One fate for everyone, and then the most direct instruction in the book, four verses later. Go. Eat. Drink. Wear white. Love somebody. Do the work with your might, because the days are few.",
  chapterStart: 9,
  chapterEnd: 12,
  situation: {
    kicker: "The ground beneath the answer",
    title: "The situation",
    paragraphs: [
      "Sheol is not hell. In the Hebrew Bible it is the grave, the place of the dead, and it is characterised by inactivity rather than by punishment: no work, no planning, no knowledge, no wisdom. When this book says the dead know nothing, that is what it is describing, not making a claim about judgement, and the hope that grows later in the collection is a development rather than a correction.",
      "White garments and oil on the head were what people wore to a feast. Telling somebody to wear them always is telling them to dress for a celebration on an ordinary day, which is a stronger instruction than it looks in English.",
      "The permission that has appeared five times so far arrives here in the imperative, for the only time in the book. Go, eat, drink, let, enjoy, do. This is the one stretch of Ecclesiastes that gives orders.",
      "And the closing poem's imagery is drawn from a household. The keepers of the house tremble, the strong men stoop, the grinders cease because they are few, those looking through the windows grow dim, the door to the street is shut. Readers have decoded it line by line as an anatomy of aging, and it works as one. It also works simply as a house running down, which is what the poem actually describes.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
  capstone: {
    kicker: "The third movement · Ecclesiastes 9–12",
    title: "Go, and then the house shuts",
    paragraphs: [
      "The movement opens on the flattest statement of death in the collection and answers it four verses later with the only imperatives in the book. Go. Eat. Drink. Wear white. Love somebody. Do the work with your might. The grounds for the instruction are the sentence it follows, not a mitigation of it.",
      "Then the second collection of sayings, mostly about how small carelessness undoes competent people, and the practical conclusion drawn from twelve chapters of not knowing: you cannot read the weather, so sow in the morning and again in the evening, because you do not know which will take.",
      "And the closing poem, which is a house running down, with too few staff to keep it, the doors shut and the sound going out of it. It ends with the dust returning to the ground and the breath returning to God, and then the thesis again, word for word from chapter one. Nothing has been solved. Something has been recommended, six times.",
    ],
    sources: "Fox · Seow · Krüger",
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
// The book-level look-back, where the argument for the book's presence in the canon lives.
export const ECCLESIASTES_CAPSTONE: Capstone = {
  kicker: "The whole book · Ecclesiastes 1–12",
  title: "It is in the collection, and it says this",
  paragraphs: [
    "The most interesting fact about this book is that it is here at all. A text saying that the same fate comes to the righteous and the wicked, that the dead know nothing and have no further reward, that a man has no advantage over a beast, and that nobody can find out what is done under the sun, including the wise, was kept, copied, argued over and read aloud. Ancient discussion records the dispute plainly, on exactly the grounds a modern reader raises.",
    "It was not kept by being tamed, though the last six verses tried. The epilogue is orthodox and it is six verses long, and the twelve chapters in front of it are not adjusted to fit. Whatever the collection decided when it kept this book, it did not decide to make it agree.",
    "And what it claims is narrower than its reputation. Not that life is meaningless, which is a translator's word doing work the Hebrew does not do. Hevel is vapour: real, visible, and impossible to hold. Everything in these chapters is real and none of it stays, and the book is precise about the difference between those two things.",
    "It does not end in despair, because it never was despair. Six times in twelve chapters, always immediately after the hardest sentence in its paragraph, it stops and says the same thing. Eat your bread. Drink your wine. Wear white. Enjoy the work while your hand is still on it. Be with the person you love, all the days of your fleeting life. That is not offered as compensation and it is not offered as a distraction. It is offered as the portion, which is this book's word for what a person actually gets.",
  ],
  tensions: [
    {
      claim:
        "The conclusion of the matter is to fear God and keep his commandments, for this is the whole duty of man, and God will bring every deed into judgment.",
      counter:
        "The twelve chapters it is appended to say that one fate comes to the righteous and the wicked alike, that the dead know nothing, and that nobody can find out the work done under the sun. Whether the epilogue is a later hand making a dangerous book keepable, or the author signing his own, is argued and unsettled.",
      where: "Ecclesiastes 12:13\u201314 \u00b7 Ecclesiastes 9:2\u20135 \u00b7 Ecclesiastes 8:17",
    },
  ],
  sources: "Fox \u00b7 Seow \u00b7 Longman \u00b7 Kr\u00fcger \u00b7 Barton",
  ask: "This book was kept because somebody decided the collection needed a voice that would say all of it out loud. What are you not saying, that the people around you might need said?",
};
`;

writeFileSync("content/ecclesiastes.ts", file);
console.log(
  "Wrote content/ecclesiastes.ts: Ecclesiastes complete, twelve readings.",
);
