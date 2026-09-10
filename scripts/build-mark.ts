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
  {
    id: "mark-3",
    bookId: "mark",
    tier: "sitting",
    span: "Mark 3:7–35",
    chapterIndex: 3,
    title: "Out of His mind",
    unitLabel: "Scene",
    thread: "The crowds get large enough to be a problem, he appoints twelve men, and then the two verdicts arrive: his family says he is mad, and the scribes say he is possessed.",
    closeEnd: "He answers by drawing the family again around whoever does the will of God, while his mother is standing in the road outside.",
    passages: [
      {
        label: "One",
        ref: "3:7–19",
        kind: "scene",
        form: "prose",
        title: "The twelve",
        verses: [
${verses(3, range(7, 19))}
        ],
        ground: {
          kind: "historical",
          text: "The places the crowd comes from include Tyre, Sidon and the far side of the Jordan, which is a way of saying the map is already larger than Galilee. He keeps a boat ready so he is not crushed. The unclean spirits go on naming him and go on being silenced, the pattern from chapter 1 still running. Then he appoints twelve, which is not a number anybody in that audience heard as arbitrary.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "Two things are set here that the rest of the book pays off. The twelve are appointed to be with him and to be sent out, in that order, so the being with comes first and most of what follows is them failing at it. And the list ends with the man who hands him over, named as such the moment he is introduced. Mark gives away the ending in a subordinate clause in chapter three and then carries straight on.",
        lenses: {
          theo: "Twelve is not a staffing decision. It is a claim about what is being started again, made by a man who has not yet been accused of anything and shortly will be accused of everything.",
        },
      },
      {
        label: "Two",
        ref: "3:20–30",
        kind: "scene",
        form: "prose",
        title: "Two verdicts",
        verses: [
${verses(3, range(20, 30))}
        ],
        ground: {
          kind: "historical",
          text: "Two verdicts arrive in one scene, and Mark puts one inside the other, which is his standard move: the family sets out, the scribes make their charge, the family arrives. The scribes have come down from Jerusalem, so the capital is now paying attention. Their accusation concedes that the exorcisms happen and disputes only the source, which is the shape most serious opposition takes.",
          src: "Marcus · Collins · France",
        },
        misreading: {
          named:
            "The unforgivable sin is a trap door, and a person might fall through it by accident or by having the wrong thought.",
          why: "Read what it is attached to. The sentence arrives immediately after men have watched someone set free and called it the work of the devil, and Mark adds the note himself: he said this because they were saying he had an unclean spirit. What is named is a settled determination to look straight at something good and call it evil. The anxiety this verse usually produces, in people afraid they have committed it, is close to evidence that they have not. The state being described does not worry about itself.",
        },
        meaning:
          "The family scene is the harshest thing any gospel says about them, and Matthew and Luke both drop it. His own people go out to seize him, and the verb is the one used elsewhere for making an arrest. Their explanation is that he is out of his mind, which is the kind thing to think. The scribes' is that he is possessed, which is not. Between them they cover the whole range of what people say about someone they cannot account for. He is ill, or he is dangerous.",
      },
      {
        label: "Three",
        ref: "3:31–35",
        kind: "scene",
        form: "prose",
        title: "Who are My mother and brothers?",
        verses: [
${verses(3, range(31, 35))}
        ],
        ground: {
          kind: "historical",
          text: "They do not come in. They stand outside and send word in, and the crowd sitting around him is what he gestures at when he answers. His family is outside the circle and strangers are inside it.",
          src: "Marcus · Collins",
        },
        meaning:
          "It is not a rejection of his family, and it is not the warm redefinition it usually gets read as either. It is a hard sentence delivered while his mother is standing in the road. Whoever does the will of God: the qualification is doing, not believing and not being related.",
        addr: {
          mode: "names",
          text: "The people who have known you longest are often the most certain that what you are doing now is a symptom. They are using the only category they have for it.",
        },
        ask: "Who has decided your direction is something to be managed rather than heard?",
      },
    ],
  },
  {
    id: "mark-4",
    bookId: "mark",
    tier: "sitting",
    span: "Mark 4",
    chapterIndex: 4,
    title: "Parables, and the storm",
    unitLabel: "Scene",
    thread: "He teaches from a boat, and what he teaches is that the teaching is meant to be difficult. Then the same evening, on the same water, the men who have had it all explained privately are terrified.",
    closeEnd: "They ask each other who this is. It is the question the whole book is built on, and nobody in the boat can answer it.",
    passages: [
      {
        label: "One",
        ref: "4:1–20",
        kind: "scene",
        form: "prose",
        title: "So that they may not perceive",
        verses: [
${verses(4, range(1, 20))}
        ],
        ground: {
          kind: "historical",
          text: "Sowing in that agriculture went before ploughing rather than after, so a man broadcasting seed across a path, rocky ground and thorns is not being careless. He is doing the job the way it was done. The quotation in verse 12 is Isaiah 6, from a passage where a prophet is told at the outset that his preaching will harden the people who hear it. And Mark's phrase for those outside is literal: outside is where the family was standing in the previous chapter.",
          src: "Isaiah 6:9–10 · Marcus · Collins",
        },
        misreading: {
          named:
            "The parables are homely illustrations, told to make hard ideas easy for ordinary people.",
          why: "This chapter says the opposite, in his own mouth, which is why most readers slide past verse 12. The stated purpose is that those outside may look and not see and hear and not understand, in case they should turn and be forgiven. Softening that into a teaching method loses what Mark is doing with it. Parables sort people, and the sorting is the point. Whether that reads as terrible or as merciful depends on what you think a person does with a story they cannot immediately cash out.",
        },
        meaning:
          "The parable is about failure, three quarters of it, and it is told to a crowd so large he has to get into a boat to be heard. Then he explains it privately to the twelve, which sets the rest of the book up: they are inside, they get the explanation, and by chapter eight they still do not understand. Notice what the explanation does not contain. There is no advice for the path, the rocks or the thorns. The soil is never asked to improve. What is promised is only that some of it lands, and that where it does the yield is out of all proportion to the loss.",
        lenses: {
          arch: "The word that goes out indiscriminately and mostly does not take, thrown by someone who keeps throwing it. (Sowing before you know the ground.)",
        },
      },
      {
        label: "Two",
        ref: "4:21–34",
        kind: "scene",
        form: "prose",
        title: "What a seed does at night",
        verses: [
${verses(4, range(21, 34))}
        ],
        ground: {
          kind: "historical",
          text: "Three short sayings and two seed parables. The seed growing secretly is unique to Mark; neither Matthew nor Luke keeps it. And the mustard seed is not literally the smallest seed anyone knew, which ancient readers understood as well as we do. It was a stock phrase for something proverbially tiny, the way we say a grain of sand.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "The two seed parables make the same argument from opposite ends. In the first a man scatters seed and then sleeps and rises, night and day, and it grows, and he does not know how. In the second the smallest thing in the proverb becomes the largest thing in the garden. Both are arguments against measuring where you happen to be standing. And both sit in a chapter that has just said plainly that most of what is sown fails, which stops either of them hardening into a promise.",
        lenses: {
          theo: "Verse 27 is the most restful sentence in the gospel. He sleeps and rises, night and day, and the seed sprouts and grows, and he does not know how. Whatever the kingdom is doing, it is not waiting for him to watch it.",
        },
      },
      {
        label: "Three",
        ref: "4:35–41",
        kind: "scene",
        form: "prose",
        title: "Who is this?",
        verses: [
${verses(4, range(35, 41))}
        ],
        ground: {
          kind: "historical",
          text: "The lake sits low in a ring of hills and squalls come down onto it fast, so the storm is local and unremarkable. What is not unremarkable is where he is: asleep on the cushion in the stern, the kind of detail an eyewitness account keeps and a legend does not. And the word he uses on the wind is the one he used on the unclean spirit in the synagogue. Be silent.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "Their complaint is not do something. It is do you not care. That is what people say when they already believe he could and are not sure he will, which is the leper's doubt from chapter one in a different mouth. And his question back is harder than it sounds, because they have just watched him do it and the thing he asks about is the fear. Then the sentence the book is built on, asked by the people closest to him, in a boat, in the dark. Who is this?",
        addr: {
          mode: "names",
          text: "You may have already decided that the silence means indifference. The people in the boat had a whole chapter of evidence behind them and still reached for that reading first.",
        },
        ask: "Where have you started reading a delay as proof that you are not cared about?",
      },
    ],
  },
  {
    id: "mark-5",
    bookId: "mark",
    tier: "sitting",
    span: "Mark 5",
    chapterIndex: 5,
    title: "Legion",
    unitLabel: "Scene",
    thread: "Three healings, and the first is the one this whole apparatus exists for. A man with a Roman military unit for a name, a herd going into the sea, and a town that asks the healer to leave.",
    closeEnd: "He tells them to tell nobody, and then tells them to give her something to eat, which is the most human sentence in the chapter.",
    passages: [
      {
        label: "One",
        ref: "5:1–20",
        kind: "scene",
        form: "prose",
        title: "My name is Legion",
        verses: [
${verses(5, range(1, 20))}
        ],
        ground: {
          kind: "historical",
          text: "This is Gentile territory, which is why there are pigs in it at all. The man lives among the tombs, has broken every chain put on him, and cuts himself with stones. Asked his name, he answers with a Roman military unit of several thousand men. The herd is about two thousand, and a boar was carried on the standards of the Tenth Legion, which garrisoned Judea in the years around when this book was written. They go down the bank into the sea and drown.",
          src: "Marcus · Horsley · Collins",
        },
        misreading: {
          named:
            "This is either a straight account of demon expulsion, or ancient credulity with nothing in it for a modern reader.",
          why: "Neither reading survives the details Mark chose. The name is a military unit. The herd is the size of a legion at strength. They beg not to be sent out of the country, and then go into the sea and drown, which is what the exodus did to an army and what everyone in that audience wanted done to Rome. And the town's response to a man restored is to ask the healer to leave, because what has just happened is more frightening than the arrangement they had. You do not have to settle the metaphysics to hear what is being said about occupation.",
        },
        meaning:
          "The quietly devastating line is the town's. A man they had been chaining is sitting there dressed and in his right mind, and they ask the one who did it to go. An arrangement everybody hates can still be the arrangement everybody is used to, and whoever breaks it is not thanked for it. Then the ending inverts the pattern the book has been building. Everywhere else he tells people to say nothing. Here, in Gentile country, he tells the man to go home and say everything.",
        lenses: {
          arch: "The one everybody has stopped trying to help, chained where the dead are kept, and a town's relief at having somewhere to put him. (The man outside the wall.)",
        },
      },
      {
        label: "Two",
        ref: "5:21–34",
        kind: "scene",
        form: "prose",
        title: "Who touched My clothes?",
        verses: [
${verses(5, range(21, 34))}
        ],
        ground: {
          kind: "historical",
          text: "One story goes inside another again. A synagogue official kneels in public, which costs him something in front of his colleagues, and then while his daughter is dying the account stops for a woman who has been bleeding twelve years. Under the purity laws that condition made her continuously unclean, and passed the state to whatever she touched. A crowded street is the last place she should be, and a stranger's cloak the last thing she should take hold of.",
          src: "Leviticus 15:25–27 · Marcus · Collins",
        },
        meaning:
          "Twelve years of her illness, twelve years of the girl's entire life, and Mark sets the two numbers side by side deliberately. She takes what she needs without asking, from behind, and the thing she most wanted to avoid, being known, is exactly what he insists on: he stops a dying child's rescue to make her say it out loud in front of everyone. That looks cruel until you see what she gets from it. She came for the cloak. She leaves having been called daughter, in public, in a street where nobody was supposed to touch her.",
        lenses: {
          theo: "He does not tell her that the touch worked because of anything he did. He tells her that her faith has healed her, which puts the thing she did furtively at the centre of the account and leaves it standing there.",
        },
      },
      {
        label: "Three",
        ref: "5:35–43",
        kind: "scene",
        form: "prose",
        title: "Talitha koum",
        verses: [
${verses(5, range(35, 43))}
        ],
        ground: {
          kind: "historical",
          text: "The news arrives while he is still speaking to the woman. The professional mourners are already at the house, which was normal and immediate. The words he speaks to the child are Aramaic, and Mark keeps them and then translates them, as he does throughout this gospel for readers who did not have the language. The last instruction in the scene is not about secrecy. It is to give her something to eat.",
          src: "Marcus · Collins · France",
        },
        meaning:
          "The delay caused by the woman is the reason the child is dead by the time he arrives, and Mark lets that stand without smoothing it over. Then he clears out everyone whose job was to grieve professionally, takes three men and two parents, and says four ordinary words to a child in her own language. Little girl, get up. Whatever else Mark is doing with the secrecy here, the thing he leaves in your hand is that after the miracle somebody had to remember she has not eaten.",
        addr: {
          mode: "names",
          text: "Two people needed him at once, and one of them was by any reasonable measure the more urgent. The book does not resolve that. It just refuses to let the less urgent one go unattended while it happens.",
        },
        ask: "Who is quietly waiting while you deal with the urgent thing, and what would it cost to stop?",
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
console.log(
  "Wrote content/mark.ts: mark-1a, mark-1b, mark-2, mark-3, mark-4, mark-5.",
);
