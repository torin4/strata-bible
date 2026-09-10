import type { Movement, Panel, Reading } from "@/lib/types";

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
          { n: 1, text: "This is the beginning of the gospel of Jesus Christ, the Son of God." },
          { n: 2, text: "As it is written in Isaiah the prophet: “Behold, I will send My messenger ahead of You, who will prepare Your way.”" },
          { n: 3, text: "“A voice of one calling in the wilderness, ‘Prepare the way for the Lord, make straight paths for Him.’”" },
          { n: 4, text: "John the Baptist appeared in the wilderness, preaching a baptism of repentance for the forgiveness of sins." },
          { n: 5, text: "People went out to him from all of Jerusalem and the countryside of Judea. Confessing their sins, they were baptized by him in the Jordan River." },
          { n: 6, text: "John was clothed in camel’s hair, with a leather belt around his waist. His food was locusts and wild honey." },
          { n: 7, text: "And he proclaimed: “After me will come One more powerful than I, the straps of whose sandals I am not worthy to stoop down and untie." },
          { n: 8, text: "I baptize you with water, but He will baptize you with the Holy Spirit.”" },
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
          { n: 9, text: "In those days Jesus came from Nazareth in Galilee and was baptized by John in the Jordan." },
          { n: 10, text: "As soon as Jesus came up out of the water, He saw the heavens breaking open and the Spirit descending on Him like a dove." },
          { n: 11, text: "And a voice came from heaven: “You are My beloved Son; in You I am well pleased.”" },
          { n: 12, text: "At once the Spirit drove Jesus into the wilderness," },
          { n: 13, text: "and He was there for forty days, being tempted by Satan. He was with the wild animals, and the angels ministered to Him." },
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
          { n: 14, text: "After the arrest of John, Jesus went into Galilee and proclaimed the gospel of God." },
          { n: 15, text: "“The time is fulfilled,” He said, “and the kingdom of God is near. Repent and believe in the gospel!”" },
          { n: 16, text: "As Jesus was walking beside the Sea of Galilee, He saw Simon and his brother Andrew. They were casting a net into the sea, for they were fishermen." },
          { n: 17, text: "“Come, follow Me,” Jesus said, “and I will make you fishers of men.”" },
          { n: 18, text: "And at once they left their nets and followed Him." },
          { n: 19, text: "Going on a little farther, He saw James son of Zebedee and his brother John. They were in a boat, mending their nets." },
          { n: 20, text: "Immediately Jesus called them, and they left their father Zebedee in the boat with the hired men and followed Him." },
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
    tier: "grounded",
    span: "Mark 1:21–45",
    chapterIndex: 1,
    title: "A day in Capernaum",
    passages: [
      {
        ref: "1:21–45",
        kind: "scene",
        form: "prose",
        title: "One day, and the leper",
        verses: [
          { n: 21, text: "Then Jesus and His companions went to Capernaum, and right away Jesus entered the synagogue on the Sabbath and began to teach." },
          { n: 22, text: "The people were astonished at His teaching, because He taught as one who had authority, and not as the scribes." },
          { n: 23, text: "Suddenly a man with an unclean spirit cried out in the synagogue:" },
          { n: 25, text: "But Jesus rebuked the spirit. “Be silent!” He said. “Come out of him!”" },
          { n: 27, text: "All the people were amazed and began to ask one another, “What is this? A new teaching with authority! He commands even the unclean spirits, and they obey Him!”" },
          { n: 29, text: "As soon as Jesus and His companions had left the synagogue, they went with James and John to the home of Simon and Andrew." },
          { n: 30, text: "Simon’s mother-in-law was sick in bed with a fever, and they promptly told Jesus about her." },
          { n: 31, text: "So He went to her, took her by the hand, and helped her up. The fever left her, and she began to serve them." },
          { n: 32, text: "That evening, after sunset, people brought to Jesus all the sick and demon-possessed," },
          { n: 34, text: "And He healed many who were ill with various diseases and drove out many demons. But He would not allow the demons to speak, because they knew who He was." },
          { n: 35, text: "Early in the morning, while it was still dark, Jesus got up and went out to a solitary place to pray." },
          { n: 37, text: "and when they found Him, they said, “Everyone is looking for You!”" },
          { n: 38, text: "But Jesus answered, “Let us go on to the neighboring towns so I can preach there as well, for that is why I have come.”" },
          { n: 40, text: "Then a leper came to Jesus, begging on his knees: “If You are willing, You can make me clean.”" },
          { n: 41, text: "Moved with compassion, Jesus reached out His hand and touched the man. “I am willing,” He said. “Be clean!”" },
          { n: 44, text: "“See that you don’t tell anyone. But go, show yourself to the priest and present the offering Moses prescribed for your cleansing, as a testimony to them.”" },
          { n: 45, text: "But the man went out and openly began to proclaim and spread the news. Consequently, Jesus could no longer enter a town in plain view, but He stayed out in solitary places. Yet people came to Him from every quarter." },
        ],
        ground: {
          kind: "historical",
          text: "One day, told as a single sequence. He teaches in the synagogue and the crowd notices that he speaks as though the authority is his own rather than borrowed from a teacher. An unclean spirit names him and is silenced, which begins a pattern that runs the length of the book. He heals in a house, and after sundown, when the sabbath has ended, the whole town is at the door. Before dawn he goes out alone, and when they find him he says they are going somewhere else. Then a leper, and the detail that matters is that he touched him. Under the purity laws the contact was supposed to run the other way.",
          src: "Marcus · Collins · France",
        },
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
