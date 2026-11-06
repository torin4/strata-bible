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

// Newest first.
export const BLOG_POSTS: BlogPost[] = [
  GENESIS_1_CONTEXT,
  SMALL_GROUP_GUIDE,
  FLOOD_STORIES,
];
