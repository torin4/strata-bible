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
          { n: 7, text: "So Jesus withdrew with His disciples to the sea, accompanied by a large crowd from Galilee, Judea," },
          { n: 8, text: "Jerusalem, Idumea, the region beyond the Jordan, and the vicinity of Tyre and Sidon. The large crowd came to Him when they heard what great things He was doing." },
          { n: 9, text: "Jesus asked His disciples to have a boat ready for Him so that the crowd would not crush Him." },
          { n: 10, text: "For He had healed so many that all who had diseases were pressing forward to touch Him." },
          { n: 11, text: "And when the unclean spirits saw Him, they fell down before Him and cried out, “You are the Son of God!”" },
          { n: 12, text: "But He warned them sternly not to make Him known." },
          { n: 13, text: "Then Jesus went up on the mountain and called for those He wanted, and they came to Him." },
          { n: 14, text: "He appointed twelve of them, whom He designated as apostles, to accompany Him, to be sent out to preach," },
          { n: 15, text: "and to have authority to drive out demons." },
          { n: 16, text: "These are the twelve He appointed: Simon (whom He named Peter)," },
          { n: 17, text: "James son of Zebedee and his brother John (whom He named Boanerges, meaning “Sons of Thunder”)," },
          { n: 18, text: "Andrew, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot," },
          { n: 19, text: "and Judas Iscariot, who betrayed Jesus." },
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
          { n: 20, text: "Then Jesus went home, and once again a crowd gathered, so that He and His disciples could not even eat." },
          { n: 21, text: "When His family heard about this, they went out to take custody of Him, saying, “He is out of His mind.”" },
          { n: 22, text: "And the scribes who had come down from Jerusalem were saying, “He is possessed by Beelzebul,” and, “By the prince of the demons He drives out demons.”" },
          { n: 23, text: "So Jesus called them together and began to speak to them in parables: “How can Satan drive out Satan?" },
          { n: 24, text: "If a kingdom is divided against itself, it cannot stand." },
          { n: 25, text: "If a house is divided against itself, it cannot stand." },
          { n: 26, text: "And if Satan is divided and rises against himself, he cannot stand; his end has come." },
          { n: 27, text: "Indeed, no one can enter a strong man’s house to steal his possessions unless he first ties up the strong man. Then he can plunder his house." },
          { n: 28, text: "Truly I tell you, the sons of men will be forgiven all sins and blasphemies, as many as they utter." },
          { n: 29, text: "But whoever blasphemes against the Holy Spirit will never be forgiven; he is guilty of eternal sin.”" },
          { n: 30, text: "Jesus made this statement because they were saying, “He has an unclean spirit.”" },
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
          { n: 31, text: "Then Jesus’ mother and brothers came and stood outside. They sent someone in to summon Him," },
          { n: 32, text: "and a crowd was sitting around Him. “Look,” He was told, “Your mother and brothers are outside, asking for You.”" },
          { n: 33, text: "But Jesus replied, “Who are My mother and My brothers?”" },
          { n: 34, text: "Looking at those seated in a circle around Him, He said, “Here are My mother and My brothers!" },
          { n: 35, text: "For whoever does the will of God is My brother and sister and mother.”" },
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
          { n: 1, text: "Once again Jesus began to teach beside the sea, and such a large crowd gathered around Him that He got into a boat and sat in it, while all the people crowded along the shore." },
          { n: 2, text: "And He taught them many things in parables, and in His teaching He said," },
          { n: 3, text: "“Listen! A farmer went out to sow his seed." },
          { n: 4, text: "And as he was sowing, some seed fell along the path, and the birds came and devoured it." },
          { n: 5, text: "Some fell on rocky ground, where it did not have much soil. It sprang up quickly because the soil was shallow." },
          { n: 6, text: "But when the sun rose, the seedlings were scorched, and they withered because they had no root." },
          { n: 7, text: "Other seed fell among thorns, which grew up and choked the seedlings, and they yielded no crop." },
          { n: 8, text: "Still other seed fell on good soil, where it sprouted, grew up, and produced a crop—one bearing thirtyfold, another sixtyfold, and another a hundredfold.”" },
          { n: 9, text: "Then Jesus said, “He who has ears to hear, let him hear.”" },
          { n: 10, text: "As soon as Jesus was alone with the Twelve and those around Him, they asked Him about the parable." },
          { n: 11, text: "He replied, “The mystery of the kingdom of God has been given to you, but to those on the outside everything is expressed in parables," },
          { n: 12, text: "so that, ‘they may be ever seeing but never perceiving, and ever hearing but never understanding; otherwise they might turn and be forgiven.’”" },
          { n: 13, text: "Then Jesus said to them, “Do you not understand this parable? Then how will you understand any of the parables?" },
          { n: 14, text: "The farmer sows the word." },
          { n: 15, text: "Some are like the seeds along the path, where the word is sown. As soon as they hear it, Satan comes and takes away the word that was sown in them." },
          { n: 16, text: "Some are like the seeds sown on rocky ground. They hear the word and at once receive it with joy." },
          { n: 17, text: "But they themselves have no root, and they remain for only a season. When trouble or persecution comes because of the word, they quickly fall away." },
          { n: 18, text: "Others are like the seeds sown among the thorns. They hear the word," },
          { n: 19, text: "but the worries of this life, the deceitfulness of wealth, and the desire for other things come in and choke the word, and it becomes unfruitful." },
          { n: 20, text: "Still others are like the seeds sown on good soil. They hear the word, receive it, and produce a crop—thirtyfold, sixtyfold, or a hundredfold.”" },
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
          { n: 21, text: "Jesus also said to them, “Does anyone bring in a lamp to put it under a basket or under a bed? Doesn’t he set it on a stand?" },
          { n: 22, text: "For there is nothing hidden that will not be disclosed, and nothing concealed that will not be brought to light." },
          { n: 23, text: "If anyone has ears to hear, let him hear.”" },
          { n: 24, text: "He went on to say, “Pay attention to what you hear. With the measure you use, it will be measured to you, and even more will be added to you." },
          { n: 25, text: "For whoever has will be given more. But whoever does not have, even what he has will be taken away from him.”" },
          { n: 26, text: "Jesus also said, “The kingdom of God is like a man who scatters seed on the ground." },
          { n: 27, text: "Night and day he sleeps and wakes, and the seed sprouts and grows, though he knows not how." },
          { n: 28, text: "All by itself the earth produces a crop—first the stalk, then the head, then grain that ripens within." },
          { n: 29, text: "And as soon as the grain is ripe, he swings the sickle, because the harvest has come.”" },
          { n: 30, text: "Then He asked, “To what can we compare the kingdom of God? With what parable shall we present it?" },
          { n: 31, text: "It is like a mustard seed, which is the smallest of all seeds sown upon the earth." },
          { n: 32, text: "But after it is planted, it grows to be the largest of all garden plants and puts forth great branches, so that the birds of the air nest in its shade.”" },
          { n: 33, text: "With many such parables Jesus spoke the word to them, to the extent that they could understand." },
          { n: 34, text: "He did not tell them anything without using a parable. But privately He explained everything to His own disciples." },
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
          { n: 35, text: "When that evening came, He said to His disciples, “Let us cross to the other side.”" },
          { n: 36, text: "After they had dismissed the crowd, they took Jesus with them, since He was already in the boat. And there were other boats with Him." },
          { n: 37, text: "Soon a violent windstorm came up, and the waves were breaking over the boat, so that it was being swamped." },
          { n: 38, text: "But Jesus was in the stern, sleeping on the cushion. So they woke Him and said, “Teacher, don’t You care that we are perishing?”" },
          { n: 39, text: "Then Jesus got up and rebuked the wind and the sea. “Silence!” He commanded. “Be still!” And the wind died down, and it was perfectly calm." },
          { n: 40, text: "“Why are you so afraid?” He asked. “Do you still have no faith?”" },
          { n: 41, text: "Overwhelmed with fear, they asked one another, “Who is this, that even the wind and the sea obey Him?”" },
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
          { n: 1, text: "On the other side of the sea, they arrived in the region of the Gerasenes." },
          { n: 2, text: "As soon as Jesus got out of the boat, He was met by a man with an unclean spirit, who was coming from the tombs." },
          { n: 3, text: "This man had been living in the tombs and could no longer be restrained, even with chains." },
          { n: 4, text: "Though he was often bound with chains and shackles, he had broken the chains and shattered the shackles. Now there was no one with the strength to subdue him." },
          { n: 5, text: "Night and day in the tombs and in the mountains he kept crying out and cutting himself with stones." },
          { n: 6, text: "When the man saw Jesus from a distance, he ran and fell on his knees before Him." },
          { n: 7, text: "And he shouted in a loud voice, “What do You want with me, Jesus, Son of the Most High God? I beg You before God not to torture me!”" },
          { n: 8, text: "For Jesus had already declared, “Come out of this man, you unclean spirit!”" },
          { n: 9, text: "“What is your name?” Jesus asked. “My name is Legion,” he replied, “for we are many.”" },
          { n: 10, text: "And he begged Jesus repeatedly not to send them out of that region." },
          { n: 11, text: "There on the nearby hillside a large herd of pigs was feeding." },
          { n: 12, text: "So the demons begged Jesus, “Send us to the pigs, so that we may enter them.”" },
          { n: 13, text: "He gave them permission, and the unclean spirits came out and went into the pigs, and the herd of about two thousand rushed down the steep bank into the sea and drowned in the water." },
          { n: 14, text: "Those tending the pigs ran off and reported this in the town and countryside, and the people went out to see what had happened." },
          { n: 15, text: "When they came to Jesus, they saw the man who had been possessed by the legion of demons sitting there, clothed and in his right mind; and they were afraid." },
          { n: 16, text: "Those who had seen it described what had happened to the demon-possessed man and also to the pigs." },
          { n: 17, text: "And the people began to beg Jesus to leave their region." },
          { n: 18, text: "As He was getting into the boat, the man who had been possessed by the demons begged to go with Him." },
          { n: 19, text: "But Jesus would not allow him. “Go home to your own people,” He said, “and tell them how much the Lord has done for you, and what mercy He has shown you.”" },
          { n: 20, text: "So the man went away and began to proclaim throughout the Decapolis how much Jesus had done for him. And everyone was amazed." },
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
          { n: 21, text: "When Jesus had again crossed by boat to the other side, a large crowd gathered around Him beside the sea." },
          { n: 22, text: "A synagogue leader named Jairus arrived, and seeing Jesus, he fell at His feet" },
          { n: 23, text: "and pleaded with Him urgently, “My little daughter is near death. Please come and place Your hands on her, so that she will be healed and live.”" },
          { n: 24, text: "So Jesus went with him, and a large crowd followed and pressed around Him." },
          { n: 25, text: "And a woman was there who had suffered from bleeding for twelve years." },
          { n: 26, text: "She had borne much agony under the care of many physicians and had spent all she had, but to no avail. Instead, her condition had only grown worse." },
          { n: 27, text: "When the woman heard about Jesus, she came up through the crowd behind Him and touched His cloak." },
          { n: 28, text: "For she kept saying, “If only I touch His garments, I will be healed.”" },
          { n: 29, text: "Immediately her bleeding stopped, and she sensed in her body that she was healed of her affliction." },
          { n: 30, text: "At once Jesus was aware that power had gone out from Him. Turning to the crowd, He asked, “Who touched My garments?”" },
          { n: 31, text: "His disciples answered, “You can see the crowd pressing in on You, and yet You ask, ‘Who touched Me?’”" },
          { n: 32, text: "But He kept looking around to see who had done this." },
          { n: 33, text: "Then the woman, knowing what had happened to her, came and fell down before Him trembling in fear, and she told Him the whole truth." },
          { n: 34, text: "“Daughter,” said Jesus, “your faith has healed you. Go in peace and be free of your affliction.”" },
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
          { n: 35, text: "While He was still speaking, messengers from the house of Jairus arrived and said, “Your daughter is dead; why bother the Teacher anymore?”" },
          { n: 36, text: "But Jesus overheard their conversation and said to Jairus, “Do not be afraid; just believe.”" },
          { n: 37, text: "And He did not allow anyone to accompany Him except Peter, James, and John the brother of James." },
          { n: 38, text: "When they arrived at the house of the synagogue leader, Jesus saw the commotion and the people weeping and wailing loudly." },
          { n: 39, text: "He went inside and asked, “Why all this commotion and weeping? The child is not dead, but asleep.”" },
          { n: 40, text: "And they laughed at Him. After He had put them all outside, He took the child’s father and mother and His own companions, and went in to see the child." },
          { n: 41, text: "Taking her by the hand, Jesus said, “Talitha koum!” which means, “Little girl, I say to you, get up!”" },
          { n: 42, text: "Immediately the girl got up and began to walk around (she was twelve years old). And at once they were utterly astounded." },
          { n: 43, text: "Then Jesus gave strict orders that no one should know about this, and He told them to give her something to eat." },
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
