// The STRATA blog: long-form study guides written for people searching their way into the
// Bible. Posts are typed data, rendered by components/blog/PostBody (Tailwind only scans app
// and components, so no class names live here).
//
// Inline text supports two marks, nothing more: [label](/path) for a link and *words* for
// italics. Posts link only into FREE readings (the primeval history, Genesis 1–11) and the
// Genesis book page; test/blog.test.ts enforces that, so no paid reading is ever surfaced
// here. Scripture quoted in posts is the Berean Standard Bible (public domain), as on the
// rest of the site. No em dashes in authored copy.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  // The <title> and og:title; leads with what people search for.
  seoTitle: string;
  description: string;
  // One line for the index card under the title.
  dek: string;
  // ISO dates (YYYY-MM-DD).
  published: string;
  updated?: string;
  // Free reading ids (Genesis 1–11) offered at the foot of the post.
  readings: string[];
  body: BlogBlock[];
};

const p = (text: string): BlogBlock => ({ type: "p", text });
const h2 = (text: string): BlogBlock => ({ type: "h2", text });
const list = (...items: string[]): BlogBlock => ({ type: "list", items });

const GENESIS_1_CONTEXT: BlogPost = {
  slug: "how-to-read-genesis-1-in-its-ancient-context",
  title: "How to read Genesis 1 in its ancient context",
  seoTitle: "How to read Genesis 1 in its ancient context | STRATA",
  description:
    "What Genesis 1 meant to its first readers: the Babylonian exile, the Enuma Elish, the dome of the sky, the image of God, and the Sabbath. A guide to the creation account in its own world.",
  dek: "Exiles in Babylon, a creation epic of war between gods, and the quiet answer Genesis gave.",
  published: "2026-11-06",
  readings: ["gen-1", "gen-2", "gen-9", "gen-11"],
  body: [
    p(
      "Most arguments about Genesis 1 today are about science. Was the world made in six days? How does the chapter fit with the age of the universe? Those are real questions for many readers, and people of faith answer them in different ways. They are also questions the chapter's first audience never asked. To hear Genesis 1 the way it was first heard, the place to start is the world it was written in, and the stories it was answering.",
    ),
    p(
      "This guide walks through that world one step at a time. It follows the same approach as STRATA's free [reading of Genesis 1](/read/genesis/gen-1), which sets the history beneath each day of creation before it asks what the passage means.",
    ),
    h2("Who wrote it, and when"),
    p(
      "Jewish and Christian tradition long credited the first five books of the Bible to Moses, and many readers still hold that view. Modern biblical scholarship, across a wide range of confessions, has mostly concluded that the Torah was assembled from several older sources over centuries. Genesis 1 is usually assigned to the source scholars call the Priestly writer, a circle of priests and scribes whose work took its final shape around the time of the Babylonian exile, in the sixth century BCE.",
    ),
    p(
      "That date matters. In 586 BCE the Babylonian army destroyed Jerusalem and its temple, and much of the city's leadership was taken east to Babylon. The people who shaped this chapter had lost their land, their king and their sanctuary. They were living inside the most powerful empire of their time, surrounded by its temples, its festivals and its account of how the world began.",
    ),
    h2("The story Babylon told"),
    p(
      "Babylon's great creation epic is known today by its opening words, *Enuma Elish*, \"when on high.\" It was probably composed in the late second millennium BCE, and it was recited during Babylon's New Year festival. In it, the world begins with two primordial waters, Apsu and Tiamat. Generations of gods are born, conflict breaks out, and the young god Marduk goes to war against Tiamat. He kills her, splits her body in two, and makes the sky from one half and the earth from the other. Humanity is then made from the blood of a defeated rebel god, so that people can carry the labor of the gods and the gods can rest. The poem closes by exalting Marduk and his city, Babylon.",
    ),
    p(
      'Set Genesis 1 beside that story and the differences stand out at once. There is water at the beginning of Genesis too: "darkness was over the surface of the deep" (Genesis 1:2). The Hebrew word for the deep, *tehom*, is related to the name Tiamat, both going back to a common Semitic word for the sea. In Genesis, though, the deep is simply water. It is no goddess, and it puts up no fight. There is no war at all. God speaks, and things come to be.',
    ),
    p(
      "Most scholars do not think Genesis 1 is a direct reply to one copy of one poem. The chapter draws on a picture of the world that the whole ancient Near East shared, and it reworks that picture in its own direction. The contrast with *Enuma Elish* is useful because it shows what the writers could have said, and chose to leave out.",
    ),
    h2("A world shaped like a house"),
    p(
      'Ancient readers pictured the world as a flat earth under a solid dome, with waters above the dome and waters below the earth. Genesis 1 uses that picture without apology. On the second day God makes an "expanse" to separate the waters above from the waters below, and the Hebrew word suggests something hammered out and firm. The chapter speaks in the cosmology of its time, the same way it speaks in Hebrew.',
    ),
    p(
      'Look at the order of the days and a design appears. Days one to three make spaces: light and dark, sky and sea, dry land. Days four to six fill those spaces in the same order: lights for the day and night, birds and fish for the sky and sea, animals and people for the land. The refrains ("And God said," "And it was so," "And God saw that it was good," "And there was evening, and there was morning") give the chapter the rhythm of a liturgy. It was written to be heard, and very likely to be recited.',
    ),
    p(
      "Some scholars go further. John Walton, for example, has argued that Genesis 1 describes the world being set up and given its functions, much as a temple was dedicated in the ancient world, with God taking up his rest in it on the seventh day. You do not have to accept every part of that argument to notice how much the chapter cares about order, place and purpose, and how little it says about materials or mechanics.",
    ),
    h2("The demoted sky"),
    p(
      'On the fourth day comes one of the chapter\'s quiet surprises. "God made two great lights: the greater light to rule the day and the lesser light to rule the night. And He made the stars as well" (Genesis 1:16). The ordinary Hebrew words for sun and moon are missing. In Babylon the sun and moon were gods, Shamash and Sin, and the stars were read closely for omens. Genesis declines to name them and gives them a job instead: to mark days, seasons and years. The stars, so central to Babylonian divination, get a single clause.',
    ),
    p(
      'The fifth day does something similar with "the great sea creatures" (Genesis 1:21). Elsewhere in the Hebrew Bible, in poems such as Psalm 74 and Isaiah 51, the same word names monsters of chaos that God subdues. Here they are simply animals God makes, blesses and calls good.',
    ),
    h2("The image of God"),
    p(
      'Then comes the line that has shaped more ethical thought than almost any other in the Bible: "So God created man in His own image; in the image of God He created him; male and female He created them" (Genesis 1:27).',
    ),
    p(
      "In Egypt and Mesopotamia, the language of being a god's image belonged above all to kings. The king stood for the god on earth and ruled in the god's name, and royal statues set up in conquered lands marked his authority there. Scholars such as J. Richard Middleton have argued that Genesis takes this royal title and gives it to every human being, male and female, with no rank attached. For a people living under a foreign king who claimed the favor of the gods, that was a striking thing to say. In *Enuma Elish* people were made to do the gods' heavy work. In Genesis they are made to represent God and to care for the world.",
    ),
    p(
      'The same idea returns after the flood, where the protection of human life rests on it: "for in His own image God has made mankind" (Genesis 9:6). STRATA\'s [reading of Genesis 9](/read/genesis/gen-9) follows that thread.',
    ),
    h2("Rest at the end of the week"),
    p(
      'The chapter does not end with humanity. It ends with the seventh day: "Then God blessed the seventh day and sanctified it, because on that day He rested from all the work of creation that He had accomplished" (Genesis 2:3). In Babylon\'s story the gods rest because humans have been made to work for them. In Genesis, God rests, and the day of rest is the first thing in the Bible called holy.',
    ),
    p(
      "For exiles with no temple, a holy day had a particular gift. It could be kept anywhere. The Jewish thinker Abraham Joshua Heschel wrote of the Sabbath as holiness built in time rather than in space, and the idea fits the setting of this chapter well. The sanctuary had been burned, and the week still had a seventh day.",
    ),
    h2("Then a second beginning"),
    p(
      'Read on into Genesis 2 and the style changes. From Genesis 2:4 the narrative uses a different name for God, "the LORD God," and tells a different kind of story, earthy and close, in which a human is shaped from dust before the plants and animals appear. Most scholars see an older account set beside the Priestly one, and the editors kept both. Reading them as two portraits that complement each other, rather than forcing them into one sequence, is one of the oldest habits of careful readers. STRATA\'s [reading of Genesis 2](/read/genesis/gen-2) takes up that second account.',
    ),
    h2("What this does for a reader today"),
    p(
      "Reading Genesis 1 in its ancient setting does not settle every modern question about it, and it is not meant to. What it does is let the chapter make its own claims. In a world where the powers overhead were feared, it says the sky is a calendar. In a world where kings alone bore a god's image, it says every person does. In a world where humans were made as labor for the gods, it says God made a good world and then stopped, and blessed the stopping.",
    ),
    p(
      "Those claims are still worth hearing. To go further, the free readings of [Genesis 1–11](/book/genesis) take each chapter in four layers: the history, the meaning, the turn toward your own life, and a question to answer. They end where the primeval history ends, at [Babel](/read/genesis/gen-11), which is the Hebrew name for Babylon, the city in whose shadow these chapters took shape.",
    ),
  ],
};

const SMALL_GROUP_GUIDE: BlogPost = {
  slug: "leading-a-small-group-study-of-genesis-1-11",
  title: "Leading a small-group study of Genesis 1–11",
  seoTitle: "Genesis 1–11 small-group Bible study: a six-week guide | STRATA",
  description:
    "A practical six-week plan for leading a small-group Bible study of Genesis 1–11: how to prepare, how to run each session, discussion questions, and how to handle the hard passages. Built on STRATA's free readings.",
  dek: "A six-week plan, discussion questions for every session, and a way through the hard passages.",
  published: "2026-11-06",
  readings: ["gen-1", "gen-3", "gen-4", "gen-6", "gen-9", "gen-11"],
  body: [
    p(
      "Genesis 1–11 is one of the best places to start a group Bible study, and one of the hardest to lead. The chapters are familiar enough that everyone arrives with opinions, and strange enough that a careful reading raises questions nobody expected: two creation accounts, ancestors who live for centuries, divine beings who take human wives, a flood that echoes older stories from ancient Iraq. A good leader does not need an answer to all of it. What helps most is a plan, some background, and a way of keeping the conversation honest and kind.",
    ),
    p(
      "This guide offers a six-week plan built around STRATA's readings of [Genesis 1–11](/book/genesis). Every reading in this part of Genesis is free, with no account needed, so everyone in the group can open the same page on their phone.",
    ),
    h2("How the readings are built"),
    p(
      "Each STRATA reading moves through four layers, and they map well onto the shape of a group session.",
    ),
    list(
      "*The history.* What the passage meant to its first readers: who wrote it, when, and what was happening around them.",
      "*The meaning.* What the passage carries beyond its first setting.",
      "*The turn.* How the passage addresses a reader now.",
      "*A response.* A question to answer, privately or aloud.",
    ),
    p(
      "A simple session can follow the same order. Read the text, set the history beside it, talk about what it means, and close with something personal. The history gives people a shared starting point that does not depend on where they stand theologically, and it often opens the text in ways a group would not reach on its own.",
    ),
    h2("Before the first meeting"),
    p(
      "Read all eleven chapters yourself in one sitting. They form a single movement, from creation to Babel, and any part of it is easier to lead once you have seen the shape of the whole. STRATA's [Genesis page](/book/genesis) sets out how the book was composed and the situation this first movement was written in, which makes good preparation.",
    ),
    p(
      "Decide in advance how the group will handle disagreement. In almost any group, some people will read Genesis 1–11 as history in the modern sense and others as theological narrative. Some will hold to Mosaic authorship, and others will be comfortable with the scholarly view that the text was woven from older sources. Name this in the first session. The aim is to hear what the text says and what it meant to its first audience, and people can do that together while holding different views about how it came to be. One ground rule helps: anyone may disagree with an idea, and nobody needs to win.",
    ),
    p(
      "Keep sessions to about an hour. Ask someone to read the passage aloud each week. Genesis was written to be heard, and reading it aloud slows everyone down.",
    ),
    h2("A six-week plan"),
    p(
      "*Week one: Genesis 1 and 2:1–3.* Start with the [creation account](/read/genesis/gen-1). Spend time on the setting: exiles in Babylon, living among a creation story in which the world was made through a war between gods. Then look at what Genesis does differently. Questions for discussion: What do you notice about how God creates? Why might it matter that the sun and moon are never named? What does it mean that every person, male and female, bears God's image? The chapter ends with rest, so what would it look like to treat rest as holy?",
    ),
    p(
      "*Week two: Genesis 2–3.* Read [the garden](/read/genesis/gen-2) and [the serpent](/read/genesis/gen-3) together. Point out that Genesis 2 tells a second creation story, with a different name for God and a different order of events, and let the group compare the two portraits. Questions: How is the human in Genesis 2 different from the human in Genesis 1? What is the limit in the garden, and why give a limit at all? In Genesis 3, what does the serpent actually say? Notice that God's first words after the taking are questions.",
    ),
    p(
      "*Week three: Genesis 4–5.* [Cain and Abel](/read/genesis/gen-4) is the Bible's first story of violence between people, and it repays slow reading. Then look briefly at [the genealogy of Genesis 5](/read/genesis/gen-5), whose long lifespans have parallels in ancient lists such as the Sumerian King List. Questions: Why might Cain's offering have been refused, and why does the text leave it unclear? What does God say to Cain before the murder? Why does God protect Cain afterward?",
    ),
    p(
      "*Week four: Genesis 6–8.* Read [the flood begins](/read/genesis/gen-6), [the flood](/read/genesis/gen-7) and [the waters recede](/read/genesis/gen-8). The history layer sets Genesis beside the older Mesopotamian flood stories, Atrahasis and the Epic of Gilgamesh, and the comparison makes for a lively session. Questions: What reason does Genesis give for the flood? What does God feel, according to Genesis 6:6? What turns the story around in Genesis 8:1? By the end, what has changed about the human heart, and what has stayed the same?",
    ),
    p(
      "*Week five: Genesis 9–10.* [Noah's covenant](/read/genesis/gen-9) is the first covenant God makes in the Bible, and it includes every living creature. Then comes the hardest passage in the series, Noah's drunkenness and the curse on Canaan (Genesis 9:20–27), which was misused for centuries to defend the enslavement of Black Africans. Address it directly. The curse falls on Canaan, the text says nothing about race or skin, and that reading has no support in it. [The table of nations](/read/genesis/gen-10) can be skimmed. Questions: What does God promise, and what does God ask in return? Why might the sign of the covenant be a bow? What does it say that the rescued man's story goes wrong so soon?",
    ),
    p(
      '*Week six: Genesis 11 and the whole movement.* Read [Babel](/read/genesis/gen-11). "Babel" is the Hebrew name for Babylon, so these chapters end at the very city in whose shadow they were shaped. Then step back and look at the pattern across all eleven chapters: a break, then a mercy, again and again, until Babel, where no mercy is named. Read Genesis 12:1–3 aloud as the answer that comes next. Questions: What did the builders want? How might the scattering be a mercy as well as a judgment? Looking back over six weeks, where did the pattern of break and mercy show up?',
    ),
    h2("Running a good discussion"),
    list(
      "*Ask open questions and wait.* Silence after a question usually means people are thinking. Count to ten before you rephrase.",
      "*Go back to the text.* When a discussion drifts, ask where people see that in the passage. It keeps the group anchored and gives quieter members a way in.",
      "*Let tensions stand.* Genesis 1–11 holds real tensions, such as the two creation accounts or the two counts of animals in the flood. Resist the urge to resolve them quickly. Asking why the editors kept both versions usually makes for a better conversation than explaining one away.",
      "*Separate the strange from the important.* Genesis 6:1–4, the sons of God and the Nephilim, can swallow a whole evening. Acknowledge that it is an old and puzzling fragment, and move on to what the chapter does next.",
      "*Keep the personal question optional.* The response layer can go deep. Invite people to answer silently or in writing if they would rather not share.",
    ),
    h2("Going further"),
    p(
      "Six weeks is a starting point. A group that wants more can slow down and spend two weeks on any chapter, since most of the readings divide naturally into scenes. The readings also name the scholars they draw on, among them Claus Westermann, Gerhard von Rad, Robert Alter, John Walton and Mark S. Smith, and a leader who wants deeper background can pick up any of them.",
    ),
    p(
      "Wherever your group lands, the effort is worth it. These are the only chapters in the Bible about everyone, before the story narrows to one family, and they raise questions any group can share: what people are for, why things go wrong, and what holds the world together when they do. Start with [Genesis 1](/read/genesis/gen-1).",
    ),
  ],
};

const FLOOD_STORIES: BlogPost = {
  slug: "noahs-flood-and-the-mesopotamian-flood-stories",
  title: "Noah's flood beside Atrahasis and Gilgamesh",
  seoTitle: "Noah's flood beside Atrahasis and Gilgamesh | STRATA",
  description:
    "How the flood story in Genesis 6–9 compares with the older Mesopotamian flood stories in Atrahasis and the Epic of Gilgamesh: what they share, and what Genesis changes.",
  dek: "What the flood story shares with its older neighbors, and the choices that make it different.",
  published: "2026-11-06",
  readings: ["gen-6", "gen-7", "gen-8", "gen-9"],
  body: [
    p(
      "In December 1872, George Smith, a self-taught Assyriologist working at the British Museum, read a paper to the Society of Biblical Archaeology in London. Among the clay tablets brought back from Nineveh he had found a Babylonian account of a great flood, with a man warned by a god, a boat, and birds sent out to look for dry land. The tablet belonged to what we now call the Epic of Gilgamesh, and its discovery changed how people read Genesis 6–9.",
    ),
    p(
      "More flood stories have come to light since, among them the Babylonian epic of Atrahasis and a Sumerian account whose hero is called Ziusudra. Some readers of Genesis find this unsettling. The comparison is worth making anyway, because it shows both how much Genesis shares with its neighbors and where it parts company with them. Those points of difference are some of the clearest windows we have into what the biblical writers wanted to say.",
    ),
    h2("The Mesopotamian flood stories"),
    p(
      "*Atrahasis* is known from copies made in the Old Babylonian period, in the first half of the second millennium BCE. It opens with the gods doing the hard labor of the world themselves, digging the rivers and canals, until the junior gods rebel. To relieve them, humans are created to take over the work. Humanity multiplies, and its noise disturbs the god Enlil. He sends plague, then drought and famine, and when these fail he resolves to wipe people out with a flood. The wise god Enki, bound by an oath not to reveal the plan, finds a way around it: he addresses the wall of a reed house so that the man Atrahasis can overhear. Atrahasis builds a boat and survives. After the flood the gods, who have gone hungry without human offerings, gather at his sacrifice, and new limits are placed on human birth.",
    ),
    p(
      "The flood story in the eleventh tablet of the Epic of Gilgamesh is a later retelling of the same tradition. There the survivor, Utnapishtim, tells his story to Gilgamesh, who has come looking for the secret of eternal life. The god Ea warns him through the wall of his reed house. He builds a vast boat, as wide as it is long, loads it with his family, craftsmen and animals, and rides out a storm so violent that the gods themselves are terrified and cower like dogs. When the boat grounds on a mountain, he sends out a dove, then a swallow, then a raven, and the raven does not come back. He offers a sacrifice, and the gods smell the sweet savor and crowd around it like flies. Afterward Utnapishtim and his wife are made like the gods and granted a life that does not end.",
    ),
    h2("What Genesis shares"),
    p(
      'The overlap with Genesis is extensive. In each, a divine decision is made to destroy humanity with a flood. One man is warned and told to build a great vessel and seal it with pitch. He brings his family and animals aboard. The waters cover the earth, the boat comes to rest on a mountain (in Genesis, "the mountains of Ararat," Genesis 8:4), birds are sent out to find land, and the survivor offers a sacrifice that the deity smells: "When the LORD smelled the pleasing aroma" (Genesis 8:21).',
    ),
    p(
      "Few scholars think Genesis copied Gilgamesh directly. The more common view is that a flood tradition was widely known across Mesopotamia and the lands around it, and that Israel's own storytellers knew a version of it. STRATA's [reading of Genesis 8](/read/genesis/gen-8) notes how close the birds and the sacrifice come to the Gilgamesh account.",
    ),
    h2("What Genesis changes"),
    p(
      '*The reason for the flood.* In Atrahasis, the gods are disturbed by human noise, which scholars have read variously as overpopulation, unrest, or simply the din of a crowded world. Genesis gives a moral reason, and gives it twice: "Now the earth was corrupt in the sight of God, and full of violence" (Genesis 6:11). The Hebrew word for violence, *hamas*, names the kind of brutality that began with Cain and spread from there. In Genesis the flood answers what people have done to one another and to the earth.',
    ),
    p(
      '*The feeling of God.* The Mesopotamian gods regret the flood afterward, in part because they have lost the people who fed them. In Genesis the grief comes first: "And the LORD regretted that He had made man on the earth, and He was grieved in His heart" (Genesis 6:6). The verdict on humanity is severe, and it is spoken by a God who is wounded by what the world has become.',
    ),
    p(
      '*One God.* In Mesopotamia the flood comes out of divine politics: one god decrees it, another works around it, a mother goddess laments it. In Genesis the same God judges, warns, saves and promises. There is no trick with a reed wall. God tells Noah plainly what is coming and speaks of a covenant before the rain begins: "But I will establish My covenant with you" (Genesis 6:18). It is the first time the word appears in the Bible.',
    ),
    p(
      '*The ending.* Utnapishtim\'s reward is to be lifted out of the human condition. Noah\'s ending is more ordinary, and more hopeful for everyone else. He steps off the ark into the same world, with the blessing first given at creation: "Be fruitful and multiply and fill the earth" (Genesis 9:1). And God makes a promise that reaches far beyond Noah: "Never again will all life be cut off by the waters of a flood" (Genesis 9:11).',
    ),
    h2("The bow in the clouds"),
    p(
      'The sign of that promise is the rainbow, but the Hebrew word, *qeshet*, is the ordinary word for a bow, the weapon. Many interpreters have seen in it the picture of a warrior hanging up his bow, turned away from the earth. The covenant is made with "every living creature" as well as with Noah, it asks nothing in return, and the text says the sign is there so that God will remember: "I will remember My covenant between Me and you" (Genesis 9:15). STRATA\'s [reading of Genesis 9](/read/genesis/gen-9) stays with that scene.',
    ),
    h2("Two voices in one story"),
    p(
      'Genesis has seams of its own. Read Genesis 6–8 slowly and the story seems to tell some things twice. Noah is told to bring two of every creature (Genesis 6:19), and then "seven pairs of every kind of clean animal" (Genesis 7:2). The rain falls "for forty days and forty nights" (Genesis 7:12), and the waters prevail "for 150 days" (Genesis 7:24). God is called "God" in some verses and "the LORD" in others.',
    ),
    p(
      'Since the nineteenth century, most critical scholars have explained this as two flood accounts, an older one usually assigned to the Yahwist and a later Priestly one, woven together by editors who kept both voices rather than choose between them. Other readers, including many traditional interpreters, read the details as one narrative with deliberate repetition, for example taking the extra clean animals as provision for the sacrifice at the end. Either way, the finished story has a careful shape. Gordon Wenham has argued that it is built as a mirror, rising to its midpoint at "But God remembered Noah" (Genesis 8:1) and then receding. STRATA\'s [reading of Genesis 7](/read/genesis/gen-7) sets out the two strands.',
    ),
    h2("The same heart"),
    p(
      'One detail in Genesis is easy to miss. Before the flood, the LORD sees "that every inclination of the thoughts of his heart was altogether evil all the time" (Genesis 6:5). After the flood, God says almost the same thing, and this time it is the reason for mercy: "Never again will I curse the ground because of man, even though every inclination of his heart is evil from his youth" (Genesis 8:21). The water has left human nature as it was. What has changed is God\'s resolve. Interpreters such as Gerhard von Rad have pointed to this as the theological center of the story: the world goes on because God has decided to bear with it.',
    ),
    p(
      "The next scene makes the point plainly. Noah plants a vineyard, gets drunk, and his family breaks apart (Genesis 9:20–27). It is an uncomfortable passage, and it was later misused to defend racial slavery through the so-called curse of Ham, a reading the text does not support: the curse falls on Canaan, and nothing in it concerns race. The flood washed the earth, and the human heart that came off the ark was the one that went on.",
    ),
    h2("Reading the flood today"),
    p(
      "People read the flood story in different ways. Some take it as a record of an event, some as an inspired retelling of a shared ancient tradition, and many hold a view somewhere between. The comparison with Atrahasis and Gilgamesh is useful from any of those starting points, because it shows the choices Genesis made. Its neighbors told of gods who needed human labor and could not agree among themselves. Genesis told of one God who grieved, judged, saved, and then promised to hold the world up from his own side.",
    ),
    p(
      "STRATA's free readings of [Genesis 6](/read/genesis/gen-6), [7](/read/genesis/gen-7), [8](/read/genesis/gen-8) and [9](/read/genesis/gen-9) take the flood a scene at a time, with the history beneath each passage and a question to close it. They sit within the free readings of [Genesis 1–11](/book/genesis), which end at [Babel](/read/genesis/gen-11).",
    ),
  ],
};

const GARDEN_OF_EDEN: BlogPost = {
  slug: "adam-and-eve-genesis-2-3-in-its-ancient-context",
  title: "Adam and Eve and the garden: Genesis 2–3 in its ancient context",
  seoTitle: "Adam and Eve and the garden: Genesis 2–3 in context | STRATA",
  description:
    "What the story of Adam and Eve in Genesis 2–3 meant to its first readers: the second creation account, the garden as a sanctuary, the serpent, the tree of knowledge, and how the idea of the fall came later.",
  dek: "Dust and breath, a garden with one limit, and a story about trust that later readers called the fall.",
  published: "2026-11-06",
  readings: ["gen-2", "gen-3", "gen-4"],
  body: [
    p(
      'The story of Adam and Eve may be the best known story in the Bible, and much of what people know about it comes from later retellings. There is no apple in Genesis. The serpent is never called Satan. The words "fall" and "original sin" do not appear. Each of those ideas has a history of its own, and some are deeply held parts of Jewish and Christian faith. Reading Genesis 2–3 on its own terms first leaves those traditions in place, and shows what they were built on.',
    ),
    p(
      "This guide follows STRATA's free readings of [the garden](/read/genesis/gen-2) and [the serpent](/read/genesis/gen-3), which set the history beneath each scene before asking what it means.",
    ),
    h2("A second creation story"),
    p(
      'The garden story begins at Genesis 2:4, right after the seven days of Genesis 1, and it reads very differently. God is now called "the LORD God." The order changes: a human is formed first, then the garden, then the animals, then the woman. The tone moves from liturgy to storytelling, close to the ground. Most scholars assign this account to a different source from Genesis 1, usually called the Yahwist, and generally consider it the older of the two, though its date is debated. The editors who gave Genesis its shape set the two accounts side by side and let each speak.',
    ),
    p(
      'The first scene turns on a pun. "Then the LORD God formed man from the dust of the ground and breathed the breath of life into his nostrils, and the man became a living being" (Genesis 2:7). The Hebrew word for the human is *adam*, and the word for the ground is *adamah*. The first person is an earthling, made of earth. Stories of humans shaped from clay were common in the ancient world. In the Babylonian epic of Atrahasis, people are made from clay mixed with the flesh and blood of a slain god. Genesis keeps the clay and adds the breath of God.',
    ),
    h2("A garden drawn like a temple"),
    p(
      '"Then the LORD God took the man and placed him in the Garden of Eden to cultivate and keep it" (Genesis 2:15). The two Hebrew verbs here appear together elsewhere in the Torah for the duties of the Levites who served at the tabernacle (Numbers 3:7–8). Scholars such as Gordon Wenham and John Walton have argued that the garden is drawn as a kind of sanctuary, a place where God is present, with the human as its gardener and keeper. Other details fit that picture. God walks in the garden, its entrance lies to the east like the entrance of the later tabernacle, and cherubim guard it, as carved cherubim would later guard the holiest room of the temple.',
    ),
    p(
      "The garden also sits on a real map. Two of its four rivers are the Tigris and the Euphrates (Genesis 2:14), the rivers of Mesopotamia. Eden is placed in the world its first listeners knew.",
    ),
    h2("One limit"),
    p(
      'The command is mostly permission: "You may eat freely from every tree of the garden, but you must not eat from the tree of the knowledge of good and evil" (Genesis 2:16–17). What "the knowledge of good and evil" means has long been debated. In Hebrew, naming two opposites can stand for everything between them, so it may point to knowledge of every kind. Many scholars read it more narrowly as the power to decide for oneself what is good and what is evil, a moral authority that belongs to God. On either reading the tree is a limit about trust.',
    ),
    p(
      'Then comes the first thing in the Bible called not good: "It is not good for the man to be alone" (Genesis 2:18). The word translated "helper" implies no lower rank, and elsewhere in the Hebrew Bible it is used of God helping Israel. The word traditionally rendered "rib" more often means "side," as in the side of a building or of the tabernacle. The man\'s first words on seeing the woman are the first poetry in the Bible: "This is now bone of my bones and flesh of my flesh" (Genesis 2:23).',
    ),
    h2("The serpent and the question"),
    p(
      '"Now the serpent was more crafty than any beast of the field that the LORD God had made" (Genesis 3:1). In Genesis 3 the serpent is an animal, a cunning one that speaks, as animals do in folk stories. Its identification with the devil comes from later Jewish and Christian writings, and in the New Testament the Book of Revelation (12:9) names the devil as the ancient serpent. Many readers hold that later reading as part of their faith. Genesis 3 itself keeps its attention on the conversation.',
    ),
    p(
      "The serpent's method is to recast the limit. \"Did God really say, 'You must not eat from any tree in the garden?'\" (Genesis 3:1). Then it promises, \"you will be like God, knowing good and evil\" (Genesis 3:5). The suggestion is that the one prohibition exists to keep the humans small. Read this way, the story places the root of the trouble in distrust, the thought that God's goodness comes with a catch.",
    ),
    h2("Eyes opened, and hiding"),
    p(
      'The fruit is never named. The apple came much later, probably helped along by a pun in Latin, where the words for "apple" and "evil" look alike. What the humans gain is exactly what was promised, open eyes, and the first thing they see is their own exposure: "they knew that they were naked; so they sewed together fig leaves and made coverings for themselves" (Genesis 3:7).',
    ),
    p(
      'Then God comes walking in the garden and calls out, "Where are you?" (Genesis 3:9). It is a question, and the scene that follows is a chain of questions and deflections. The man blames the woman, and in the same breath the God who gave her. The woman blames the serpent. Nobody owns what they did.',
    ),
    h2("The sentences and the exile"),
    p(
      'The consequences that follow answer questions every ancient listener would have asked. Why do snakes crawl? Why is childbirth so painful? Why does farming break the body? Why do we die? "For dust you are, and to dust you shall return" (Genesis 3:19). Many interpreters stress that the line about the man ruling over the woman (Genesis 3:16) describes a broken relationship and does not prescribe one. It belongs to the list of things that went wrong.',
    ),
    p(
      "Two Mesopotamian stories make a useful comparison. In the myth of Adapa, a wise man is offered the food and water of life by the gods, refuses them, and so loses his chance at immortality. In the Epic of Gilgamesh, the hero at last obtains a plant that restores youth, and a snake carries it off while he bathes. Ancient storytellers kept returning to the question of why humans, so close to the divine in some ways, still die. Genesis gives its own answer, in which the loss comes through a broken trust.",
    ),
    p(
      'God does not abandon the couple. "And the LORD God made garments of skin for Adam and his wife, and He clothed them" (Genesis 3:21). They leave the garden clothed, named and alive. The way back to the tree of life is guarded by cherubim, which in the ancient Near East were great winged guardian figures, nothing like the infants of later art.',
    ),
    h2("How the fall came to be"),
    p(
      "The rest of the Hebrew Bible seldom looks back to this story. The idea that it explains a universal human condition grew over centuries. The apostle Paul draws on Adam in Romans 5 to speak of sin and death entering the world through one man, and around the turn of the fifth century Augustine developed from Paul the doctrine of original sin that has shaped Western Christianity. Eastern Orthodox Christianity has generally spoken of an inherited mortality and a weakened nature rather than an inherited guilt. Jewish tradition has not read the story as a doctrine of inherited sin, and rabbinic thought speaks instead of an inclination to evil that every person must learn to master.",
    ),
    p(
      "These are real differences, and they matter to many readers. The story can be read alongside any of them. In its own words it is about a gift, a limit, a broken trust, and a God who still makes clothes for the people walking out of the gate.",
    ),
    h2("Reading on"),
    p(
      "The garden leads straight into the next story, where the breach between people and God becomes a breach between brothers. STRATA's free readings of [Genesis 2](/read/genesis/gen-2), [Genesis 3](/read/genesis/gen-3) and [Cain and Abel](/read/genesis/gen-4) take each scene in four layers, with the history first. They belong to the free readings of [Genesis 1–11](/book/genesis), which open with [the creation account](/read/genesis/gen-1).",
    ),
  ],
};

const CAIN_AND_ABEL: BlogPost = {
  slug: "cain-and-abel-genesis-4-explained",
  title: "Cain and Abel: what Genesis 4 says, and what it leaves unsaid",
  seoTitle: "Cain and Abel explained: Genesis 4 in context | STRATA",
  description:
    "The story of Cain and Abel in Genesis 4, read closely: why the offering was refused, sin crouching at the door, \"Am I my brother's keeper?\", the mark of Cain, and where Cain's wife came from.",
  dek: "Two offerings, a warning at the door, a question nobody wants to answer, and a mark that protects.",
  published: "2026-11-06",
  readings: ["gen-4", "gen-3", "gen-5"],
  body: [
    p(
      'The story of Cain and Abel runs to just sixteen verses (Genesis 4:1–16), and it has given the language some of its most lasting phrases: "Am I my brother\'s keeper?", "the mark of Cain", "east of Eden". It is the first story in the Bible set wholly outside the garden, and the first death in it is a killing. Read slowly, it is also one of the most carefully balanced stories in Genesis, with a warning before the crime, a question after it, and a protection laid over the guilty man.',
    ),
    p(
      "This guide follows STRATA's free [reading of Genesis 4](/read/genesis/gen-4), which sets the history beneath each scene.",
    ),
    h2("Two brothers and their names"),
    p(
      "\"With the help of the LORD I have brought forth a man,\" Eve says at Cain's birth (Genesis 4:1). The name Cain, *qayin*, sounds like the Hebrew verb she uses here, which can mean to get or to acquire. His brother's name, Abel, is *hevel*, the word for a breath or a vapor, the same word Ecclesiastes uses for everything that passes. The younger brother is named for something that does not last, and the story bears that out.",
    ),
    p(
      '"Now Abel was a keeper of sheep, while Cain was a tiller of the soil" (Genesis 4:2). The pairing of herder and farmer is old. Sumerian literature includes stories in which a shepherd and a farmer compete for favor, among them the contest between the shepherd god Dumuzi and the farmer god Enkimdu for the hand of the goddess Inanna. Genesis tells a far darker version of that rivalry.',
    ),
    h2("Why was Cain's offering refused?"),
    p(
      'Both brothers bring an offering. Cain brings "some of the fruit of the soil," and Abel brings "the best portions of the firstborn of his flock" (Genesis 4:3–4). "And the LORD looked with favor on Abel and his offering, but He had no regard for Cain and his offering" (Genesis 4:4–5).',
    ),
    p(
      "Genesis does not say why, and readers have filled the silence for a very long time. Some point to the difference in the gifts, the best of the flock set against simply some of the harvest. The New Testament's Letter to the Hebrews says Abel offered his sacrifice by faith (Hebrews 11:4), and the First Letter of John contrasts Cain's deeds with his brother's (1 John 3:12). Other readers think the silence is deliberate. Claus Westermann read the scene as an experience everyone meets sooner or later: favor in life is not shared out evenly, and no reason is given. On that reading, the story cares less about the cause of the slight than about what Cain does with it.",
    ),
    h2("Sin crouching at the door"),
    p(
      'The most important moment comes before the murder. "Why are you angry," the LORD says to Cain, "and why has your countenance fallen? If you do what is right, will you not be accepted? But if you refuse to do what is right, sin is crouching at your door; it desires you, but you must master it" (Genesis 4:6–7).',
    ),
    p(
      'The picture is of a predator waiting at a threshold. Scholars have long compared the Hebrew word for "crouching" with the Akkadian *rabisu*, a kind of demon thought to lurk at doorways. The closing words echo what was said to the woman in Genesis 3:16, "Your desire will be for your husband, and he will rule over you," now turned on sin itself. God meets Cain in the space between the feeling and the deed, names the danger, and tells him he can still master it. The warning is itself a kind of grace.',
    ),
    h2("The field"),
    p(
      '"Then Cain said to his brother Abel, \'Let us go out to the field.\' And while they were in the field, Cain rose up against his brother Abel and killed him" (Genesis 4:8). In the traditional Hebrew text, Cain\'s words are missing: the verse says Cain spoke to his brother, and then nothing follows. The words "Let us go out to the field" come from ancient versions such as the Greek Septuagint and the Samaritan Pentateuch, and many modern translations, the Berean Standard Bible among them, include them. Either way, the killing itself is told in a single clause.',
    ),
    h2("Am I my brother's keeper?"),
    p(
      'Then God asks a question, as in the garden. "Where is your brother Abel?" Cain replies, "I do not know! Am I my brother\'s keeper?" (Genesis 4:9). His question expects the answer no. A great deal of the rest of Scripture, from the law to the prophets, can be read as an answer of yes.',
    ),
    p(
      '"The voice of your brother\'s blood cries out to Me from the ground" (Genesis 4:10). The Hebrew word for blood here is plural. The Mishnah, an early collection of Jewish law, noticed this and read it as the blood of Abel together with all the descendants who would never be born to him. From it the Mishnah drew the teaching that to destroy a single life is to destroy a whole world (Mishnah Sanhedrin 4:5).',
    ),
    h2("The mark of Cain"),
    p(
      'Cain is sentenced to be "a fugitive and a wanderer on the earth" (Genesis 4:12), and he fears that whoever finds him will kill him. God answers with protection: "the LORD placed a mark on Cain, so that no one who found him would kill him" (Genesis 4:15). Cain settles "in the land of Nod, east of Eden" (Genesis 4:16), and Nod sounds like the Hebrew word for wandering.',
    ),
    p(
      "For centuries the mark of Cain was twisted into a brand of inferiority and used to support slavery and racial prejudice. The text gives that reading no support. It never says what the mark looked like, and it states its purpose plainly, to keep the guilty man alive. The first murderer is punished, and he is also shielded from the violence he set loose.",
    ),
    h2("Where did Cain's wife come from?"),
    p(
      "It is one of the most common questions about Genesis 4, and the text does not answer it. Cain fears other people, takes a wife and builds a city (Genesis 4:14–17), all in a world that seems already populated. Traditional interpreters often answered that Cain married a sister, since Genesis 5:4 says Adam had other sons and daughters, and the ancient Jewish book of Jubilees even gives her a name. Many modern scholars think the Cain story was first told on its own, in a world full of people, before it took its place after the garden. Neither answer touches the story's real concern, which is how violence enters a family and what God does about it.",
    ),
    h2("Two lines"),
    p(
      'The chapter closes with two families. Cain\'s descendants build the first city and give rise to herding, music and metalwork. Then Lamech, seventh in line from Adam, sings a boast: "If Cain is avenged sevenfold, then Lamech seventy-sevenfold" (Genesis 4:24). Vengeance has compounded. Many readers hear that boast reversed in the Gospels, when Jesus tells Peter to forgive seventy-seven times, as many translations render it (Matthew 18:22). Meanwhile another line begins with Seth, and the chapter ends quietly: "At that time men began to call upon the name of the LORD" (Genesis 4:26).',
    ),
    h2("Reading Genesis 4 today"),
    p(
      "Cain and Abel is short, and it holds a whole moral world: an unexplained disappointment, an anger that can still be mastered, a refusal to take responsibility, a victim whose blood will not stay quiet, and a God who both judges and protects. STRATA's free [reading of Genesis 4](/read/genesis/gen-4) takes the story a scene at a time. It follows [the serpent](/read/genesis/gen-3) and leads into the long genealogy of [Genesis 5](/read/genesis/gen-5), all within the free readings of [Genesis 1–11](/book/genesis).",
    ),
  ],
};

const TOWER_OF_BABEL: BlogPost = {
  slug: "tower-of-babel-historical-context",
  title: "The Tower of Babel in its historical context",
  seoTitle: "The Tower of Babel: Genesis 11 in historical context | STRATA",
  description:
    "What the Tower of Babel story in Genesis 11 meant to its first readers: Mesopotamian ziggurats, Babylon's great tower Etemenanki, the pun on Babel and confusion, and how the story closes Genesis 1–11.",
  dek: "Baked brick and bitumen, the ziggurats of Babylon, and a pun that renamed an empire.",
  published: "2026-11-06",
  readings: ["gen-11", "gen-10", "gen-1"],
  body: [
    p(
      'The story of the Tower of Babel is nine verses long (Genesis 11:1–9). It is the last story in the part of Genesis that tells of the whole human race, before the narrative narrows to Abraham and his family, and "babel" has passed into English as a word for a confusion of voices. It is also one of the most historically rooted stories in Genesis 1–11. The city, the building materials and the tower all point to a real place.',
    ),
    p(
      "This guide follows STRATA's free [reading of Genesis 11](/read/genesis/gen-11), which sets the history beneath each scene before asking what it means.",
    ),
    h2("The land of Shinar"),
    p(
      '"Now the whole world had one language and a common form of speech" (Genesis 11:1). People journey east and settle on "a plain in the land of Shinar" (Genesis 11:2), the Bible\'s name for Babylonia, in southern Mesopotamia. The previous chapter has already put Babylon there, as the first city of Nimrod\'s kingdom: "His kingdom began in Babylon, Erech, Accad, and Calneh, in the land of Shinar" (Genesis 10:10).',
    ),
    h2("Brick and bitumen"),
    p(
      '"Come, let us make bricks and bake them thoroughly." So they used brick instead of stone, and tar instead of mortar (Genesis 11:3). The narrator explains the materials as if to listeners who build with stone, as people did in the rocky hill country of Israel. Mesopotamia, a land of river clay with little stone, built in mud brick, and its grandest buildings used fired brick set in bitumen, a natural tar. The detail is accurate, and it marks this as a story about a foreign land.',
    ),
    h2("A tower with its top in the heavens"),
    p(
      'The builders say, "let us build for ourselves a city with a tower that reaches to the heavens, that we may make a name for ourselves and not be scattered over the face of all the earth" (Genesis 11:4). The tower is almost certainly a ziggurat, one of the stepped temple-towers that rose over Mesopotamian cities for well over a thousand years. A ziggurat was understood as a link between heaven and earth, with a shrine at its summit.',
    ),
    p(
      "Babylon's own ziggurat was called Etemenanki, a Sumerian name meaning \"house of the foundation of heaven and earth.\" It stood beside the temple of Marduk, the city's god, and it was rebuilt on a grand scale by the Babylonian kings Nabopolassar and his son Nebuchadnezzar II, the same Nebuchadnezzar whose army destroyed Jerusalem in 586 BCE. The Greek historian Herodotus, writing in the fifth century BCE, described a tower of stacked stages in Babylon. Whenever the Babel story was first told, it took on a sharp meaning for the Judeans carried off to Babylon, some of whom lived in the city that tower dominated.",
    ),
    h2("A name, and a refusal"),
    p(
      'Notice what the builders want: a name, and not to be scattered. Both run against what came before. At creation and again after the flood, God told humanity to "fill the earth" (Genesis 1:28; 9:1). The builders gather in one place instead and set out to secure a name for themselves. The very next chapter answers them, when God says to Abram, "I will make your name great" (Genesis 12:2). In the shape of Genesis, a name grasped by building high is set against a name received as a gift.',
    ),
    h2("The LORD came down"),
    p(
      '"Then the LORD came down to see the city and the tower that the sons of men were building" (Genesis 11:5). The tower was meant to reach the heavens, and God has to come down to see it. Readers ancient and modern have heard a quiet irony here. God then says, "If they have begun to do this as one people speaking the same language, then nothing they devise will be beyond them. Come, let Us go down and confuse their language, so that they will not understand one another\'s speech" (Genesis 11:6–7). The "let Us" echoes "Let Us make man" in Genesis 1:26.',
    ),
    p(
      "How to read God's concern has long been debated. Many interpreters take it as judgment on pride, a reading that runs through much of Jewish and Christian tradition. The first-century historian Josephus connected the project with Nimrod and cast it as rebellion against God. Others read it as restraint, God setting a limit on unified human power before it runs to its worst end, much as Genesis 6 set a limit on the human lifespan. STRATA's reading leans toward the second view, and finds a hidden mercy in the scattering.",
    ),
    h2("Babel and Babylon"),
    p(
      '"That is why it is called Babel, for there the LORD confused the language of the whole world, and from that place the LORD scattered them over the face of all the earth" (Genesis 11:9). *Babel* is simply the Hebrew name for Babylon. The verse explains it through a pun on the Hebrew verb *balal*, to confuse or to mix. In Akkadian, the language of Babylon itself, the name was understood as *Bab-ili*, "gate of the god." The story takes the proudest name of the greatest city in its world and hears in it the sound of confusion.',
    ),
    h2("Babel and the table of nations"),
    p(
      'Read in order, Genesis 10 and 11 seem to tell the spread of languages twice. Genesis 10 already describes Noah\'s descendants spreading out "according to their languages" (Genesis 10:5), and Genesis 11 then opens with one language for the whole world. Most scholars see two traditions placed side by side, as elsewhere in these chapters. Together they offer two views of human diversity. In Genesis 10 it unfolds naturally as families grow, and in Genesis 11 it comes as a check on a single overreaching project.',
    ),
    p(
      "There is an older Mesopotamian echo as well. A Sumerian epic, Enmerkar and the Lord of Aratta, contains a passage about a time when all people spoke one tongue, and the god Enki changed the speech in their mouths. Scholars debate exactly how to read it, but it shows that the question of why people speak different languages was being asked long before Genesis.",
    ),
    h2("Where the primeval history ends"),
    p(
      'Babel is the last story of Genesis 1–11, and it ends without the mercy that followed each earlier breakdown. Adam and Eve were clothed, Cain was protected, Noah was carried through the flood. At Babel the people are scattered, "and they stopped building the city" (Genesis 11:8). The answer comes in the next chapter, when God calls Abram and promises that "all the families of the earth will be blessed through you" (Genesis 12:3). Christian readers have also long paired Babel with Pentecost in Acts 2, where people of many languages each hear the apostles speaking in their own tongue.',
    ),
    p(
      "For the exiles who shaped Genesis, the story held one more meaning. Genesis opens by answering Babylon's creation story, and its first movement closes at Babylon itself, named for confusion and left unfinished. The empire that had conquered them was, in this telling, one more human project under God's judgment, and it would not last forever. STRATA's free [reading of Genesis 11](/read/genesis/gen-11) closes the free readings of [Genesis 1–11](/book/genesis). It follows [the table of nations](/read/genesis/gen-10) and looks back to where the whole movement began, in [Genesis 1](/read/genesis/gen-1).",
    ),
  ],
};

// Newest first.
export const BLOG_POSTS: BlogPost[] = [
  GARDEN_OF_EDEN,
  CAIN_AND_ABEL,
  TOWER_OF_BABEL,
  GENESIS_1_CONTEXT,
  SMALL_GROUP_GUIDE,
  FLOOD_STORIES,
];
