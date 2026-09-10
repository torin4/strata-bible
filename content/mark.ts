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
          { n: 21, text: "Then Jesus and His companions went to Capernaum, and right away Jesus entered the synagogue on the Sabbath and began to teach." },
          { n: 22, text: "The people were astonished at His teaching, because He taught as one who had authority, and not as the scribes." },
          { n: 23, text: "Suddenly a man with an unclean spirit cried out in the synagogue:" },
          { n: 24, text: "“What do You want with us, Jesus of Nazareth? Have You come to destroy us? I know who You are—the Holy One of God!”" },
          { n: 25, text: "But Jesus rebuked the spirit. “Be silent!” He said. “Come out of him!”" },
          { n: 26, text: "At this, the unclean spirit threw the man into convulsions and came out with a loud shriek." },
          { n: 27, text: "All the people were amazed and began to ask one another, “What is this? A new teaching with authority! He commands even the unclean spirits, and they obey Him!”" },
          { n: 28, text: "And the news about Jesus spread quickly through the whole region of Galilee." },
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
          { n: 29, text: "As soon as Jesus and His companions had left the synagogue, they went with James and John to the home of Simon and Andrew." },
          { n: 30, text: "Simon’s mother-in-law was sick in bed with a fever, and they promptly told Jesus about her." },
          { n: 31, text: "So He went to her, took her by the hand, and helped her up. The fever left her, and she began to serve them." },
          { n: 32, text: "That evening, after sunset, people brought to Jesus all the sick and demon-possessed," },
          { n: 33, text: "and the whole town gathered at the door." },
          { n: 34, text: "And He healed many who were ill with various diseases and drove out many demons. But He would not allow the demons to speak, because they knew who He was." },
          { n: 35, text: "Early in the morning, while it was still dark, Jesus got up and went out to a solitary place to pray." },
          { n: 36, text: "Simon and his companions went to look for Him," },
          { n: 37, text: "and when they found Him, they said, “Everyone is looking for You!”" },
          { n: 38, text: "But Jesus answered, “Let us go on to the neighboring towns so I can preach there as well, for that is why I have come.”" },
          { n: 39, text: "So He went throughout Galilee, preaching in their synagogues and driving out demons." },
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
          { n: 40, text: "Then a leper came to Jesus, begging on his knees: “If You are willing, You can make me clean.”" },
          { n: 41, text: "Moved with compassion, Jesus reached out His hand and touched the man. “I am willing,” He said. “Be clean!”" },
          { n: 42, text: "And immediately the leprosy left him, and the man was cleansed." },
          { n: 43, text: "Jesus promptly sent him away with a stern warning:" },
          { n: 44, text: "“See that you don’t tell anyone. But go, show yourself to the priest and present the offering Moses prescribed for your cleansing, as a testimony to them.”" },
          { n: 45, text: "But the man went out and openly began to proclaim and spread the news. Consequently, Jesus could no longer enter a town in plain view, but He stayed out in solitary places. Yet people came to Him from every quarter." },
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
          { n: 1, text: "A few days later Jesus went back to Capernaum. And when the people heard that He was home," },
          { n: 2, text: "they gathered in such large numbers that there was no more room, not even outside the door, as Jesus spoke the word to them." },
          { n: 3, text: "Then a paralytic was brought to Him, carried by four men." },
          { n: 4, text: "Since they were unable to get to Jesus through the crowd, they uncovered the roof above Him, made an opening, and lowered the paralytic on his mat." },
          { n: 5, text: "When Jesus saw their faith, He said to the paralytic, “Son, your sins are forgiven.”" },
          { n: 6, text: "But some of the scribes were sitting there and thinking in their hearts," },
          { n: 7, text: "“Why does this man speak like this? He is blaspheming! Who can forgive sins but God alone?”" },
          { n: 8, text: "At once Jesus knew in His spirit that they were thinking this way within themselves. “Why are you thinking these things in your hearts?” He asked." },
          { n: 9, text: "“Which is easier: to say to a paralytic, ‘Your sins are forgiven,’ or to say, ‘Get up, pick up your mat, and walk’?" },
          { n: 10, text: "But so that you may know that the Son of Man has authority on earth to forgive sins...” He said to the paralytic," },
          { n: 11, text: "“I tell you, get up, pick up your mat, and go home.”" },
          { n: 12, text: "And immediately the man got up, picked up his mat, and walked out in front of them all. As a result, they were all astounded and glorified God, saying, “We have never seen anything like this!”" },
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
          { n: 13, text: "Once again Jesus went out beside the sea. All the people came to Him, and He taught them there." },
          { n: 14, text: "As He was walking along, He saw Levi son of Alphaeus sitting at the tax booth. “Follow Me,” He told him, and Levi got up and followed Him." },
          { n: 15, text: "While Jesus was dining at Levi’s house, many tax collectors and sinners were eating with Him and His disciples—for there were many who followed Him." },
          { n: 16, text: "When the scribes who were Pharisees saw Jesus eating with these people, they asked His disciples, “Why does He eat with tax collectors and sinners?”" },
          { n: 17, text: "On hearing this, Jesus told them, “It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners.”" },
          { n: 18, text: "Now John’s disciples and the Pharisees were often fasting. So people came to Jesus and asked, “Why don’t Your disciples fast like John’s disciples and those of the Pharisees?”" },
          { n: 19, text: "Jesus replied, “How can the guests of the bridegroom fast while He is with them? As long as He is with them, they cannot fast." },
          { n: 20, text: "But the time will come when the bridegroom will be taken from them; then they will fast." },
          { n: 21, text: "No one sews a patch of unshrunk cloth on an old garment. If he does, the new piece will pull away from the old, and a worse tear will result." },
          { n: 22, text: "And no one pours new wine into old wineskins. If he does, the wine will burst the skins, and both the wine and the wineskins will be ruined. Instead, new wine is poured into new wineskins.”" },
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
          { n: 23, text: "One Sabbath Jesus was passing through the grainfields, and His disciples began to pick the heads of grain as they walked along." },
          { n: 24, text: "So the Pharisees said to Him, “Look, why are they doing what is unlawful on the Sabbath?”" },
          { n: 25, text: "Jesus replied, “Have you never read what David did when he and his companions were hungry and in need?" },
          { n: 26, text: "During the high priesthood of Abiathar, he entered the house of God and ate the consecrated bread, which was lawful only for the priests. And he gave some to his companions as well.”" },
          { n: 27, text: "Then Jesus declared, “The Sabbath was made for man, not man for the Sabbath." },
          { n: 28, text: "Therefore, the Son of Man is Lord even of the Sabbath.”" },
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
          { n: 1, text: "Once again Jesus entered the synagogue, and a man with a withered hand was there." },
          { n: 2, text: "In order to accuse Jesus, they were watching to see if He would heal on the Sabbath." },
          { n: 3, text: "Then Jesus said to the man with the withered hand, “Stand up among us.”" },
          { n: 4, text: "And He asked them, “Which is lawful on the Sabbath: to do good or to do evil, to save life or to destroy it?” But they were silent." },
          { n: 5, text: "Jesus looked around at them with anger and sorrow at their hardness of heart. Then He said to the man, “Stretch out your hand.” So he stretched it out, and it was restored." },
          { n: 6, text: "At this, the Pharisees went out and began plotting with the Herodians how they might kill Jesus." },
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
