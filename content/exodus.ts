import type { Capstone, Movement, Panel, Reading } from "@/lib/types";

// Exodus, movement 1: out of Egypt (Exodus 1 to 15:21).
//
// Every reading is at the grounded tier, carrying clean Berean Standard Bible scripture and a
// ground note, with meaning, turn and ask left empty for the companion, exactly as Genesis's
// grounded chapters do. Each becomes a sitting in the change that authors its layers AND tags it
// in content/themes.ts: a sitting missing from the theme index fails the content validator, and
// that rule applies to unpublished books too.
//
// The scripture here was materialised verbatim from content/bsb-exodus.ts and is enforced by the
// verse-integrity invariant in scripts/validate-content.ts. Never retype a verse by hand.
//
// The plague reading holds one passage per chapter rather than one spanning five, because the
// full-text reveal can only attribute a bare verse number to a chapter when the numbers ascend
// (see lib/expand.ts). One passage running 7:14 to 11:10 would silently lose the reveal.
//
// Only movement 1 is declared. Movements 2 to 4 are absent until they have readings, and this
// movement carries no doorway until movement 2 exists: the validator fails an empty movement
// range and a doorway pointing at an unknown movement.

export const EXODUS: Reading[] = [
  {
    id: "ex-1",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 1",
    chapterIndex: 1,
    title: "The midwives",
    unitLabel: "Scene",
    thread: "Genesis ended with Jacob’s family settled in Egypt, and Exodus begins there, many generations later, after the family has grown into a whole people. As soon as the Israelites become numerous, Egypt’s king decides that they are a problem. The writer lists the seventy members of Jacob’s family who went down to Egypt and then names no one else in the chapter until two midwives refuse a royal order.",
    closeEnd: "By the end of the chapter the king, whom the writer never names, gives up on doing his killing in secret and orders all his people to drown the Hebrew baby boys for him.",
    passages: [
      {
        label: "One",
        ref: "1:1–7",
        kind: "scene",
        form: "prose",
        title: "The names",
        verses: [
          { n: 1, text: "These are the names of the sons of Israel who went to Egypt with Jacob, each with his family:" },
          { n: 2, text: "Reuben, Simeon, Levi, and Judah;" },
          { n: 3, text: "Issachar, Zebulun, and Benjamin;" },
          { n: 4, text: "Dan and Naphtali; Gad and Asher." },
          { n: 5, text: "The descendants of Jacob numbered seventy in all, including Joseph, who was already in Egypt." },
          { n: 6, text: "Now Joseph and all his brothers and all that generation died," },
          { n: 7, text: "but the Israelites were fruitful and increased rapidly; they multiplied and became exceedingly numerous, so that the land was filled with them." },
        ],
        ground: {
          kind: "historical",
          text: "The writer opens Exodus by counting the seventy members of Jacob’s family, one by one, who went down to Egypt with him. Then, in a single verse, he passes over several centuries, and the family has become a people filling the land. To describe their growth, he piles up the same Hebrew verbs of increase that God used of living creatures in Genesis 1.",
          src: "Propp · Sarna · Alter",
        },
        meaning:
          "When the writer describes the Israelites multiplying, he uses the words of the creation account, <b>be fruitful and multiply</b>. He wants us to see that what Egypt does next is more than cruelty to a minority, because the king sets himself against what God said at the beginning of the world. The writer also stops counting names. After the seventy names, he names no one again except the two midwives, as if to show that an empire sees people only as a quantity.",
        lenses: {
          theo: "God had promised Abraham that his descendants would be too many to count, and he keeps that promise in a foreign country, while no one in the story is paying attention. Again and again in the Bible, God does his work in the long stretches between the stories people remember.",
        },
      },
      {
        label: "Two",
        ref: "1:8–14",
        kind: "scene",
        form: "prose",
        title: "The new king",
        verses: [
          { n: 8, text: "Then a new king, who did not know Joseph, came to power in Egypt." },
          { n: 9, text: "“Look,” he said to his people, “the Israelites have become too numerous and too powerful for us." },
          { n: 10, text: "Come, let us deal shrewdly with them, or they will increase even more; and if a war breaks out, they may join our enemies, fight against us, and leave the country.”" },
          { n: 11, text: "So the Egyptians appointed taskmasters over the Israelites to oppress them with forced labor. As a result, they built Pithom and Rameses as store cities for Pharaoh." },
          { n: 12, text: "But the more they were oppressed, the more they multiplied and flourished; so the Egyptians came to dread the Israelites." },
          { n: 13, text: "They worked the Israelites ruthlessly" },
          { n: 14, text: "and made their lives bitter with hard labor in brick and mortar, and with all kinds of work in the fields. Every service they imposed was harsh." },
        ],
        ground: {
          kind: "historical",
          text: "The writer introduces a new king “who did not know Joseph,” and he describes the king’s machinery rather than the king himself: taskmasters, forced labor, store cities at Pithom and Rameses, and work in brick and mortar. All of this matches what we know of ordinary Egyptian building projects, and historians know that Semitic-speaking people did such work in the Nile delta. The writer never gives the king’s name, but he describes the king’s bureaucracy in detail.",
          src: "Assmann · Propp · Meyers",
        },
        meaning:
          "The king begins not from hatred but from fear, and from a calculation about a war that might come. He reasons that the Israelites could side with an enemy, and his policy follows from that reasoning. Then the writer gives the line on which the chapter turns: the more the Egyptians oppressed the Israelites, the more they multiplied. The oppression fails, and because it fails, the king makes it worse. Rulers who have decided that a people are a problem rarely conclude that they were wrong; they conclude that they were not thorough enough.",
        lenses: {
          arch: "In many times and places, people have looked at a growing minority and seen a threat, and have treated their presence as an invasion, even while depending on their labor to keep the economy running. Exodus describes a pattern that is very old, and people have repeated it ever since.",
        },
        addr: {
          mode: "claims",
          text: "Much of what we use every day was made by people we have never met, often at a cost we would not accept for ourselves: our food, our buildings, the phone in our hand. The writer sets the store cities in front of us and invites us to ask whom they were built for.",
        },
        ask: "Whose labor lies underneath the ordinary comforts of your day, and what would it cost you to find out?",
      },
      {
        label: "Three",
        ref: "1:15–22",
        kind: "scene",
        form: "prose",
        title: "Shiphrah and Puah",
        verses: [
          { n: 15, text: "Then the king of Egypt said to the Hebrew midwives, whose names were Shiphrah and Puah," },
          { n: 16, text: "“When you help the Hebrew women give birth, observe them on the birthstools. If the child is a son, kill him; but if it is a daughter, let her live.”" },
          { n: 17, text: "The midwives, however, feared God and did not do as the king of Egypt had instructed; they let the boys live." },
          { n: 18, text: "So the king of Egypt summoned the midwives and asked them, “Why have you done this? Why have you let the boys live?”" },
          { n: 19, text: "The midwives answered Pharaoh, “The Hebrew women are not like the Egyptian women, for they are vigorous and give birth before a midwife arrives.”" },
          { n: 20, text: "So God was good to the midwives, and the people multiplied and became even more numerous." },
          { n: 21, text: "And because the midwives feared God, He gave them families of their own." },
          { n: 22, text: "Then Pharaoh commanded all his people: “Every son born to the Hebrews you must throw into the Nile, but every daughter you may allow to live.”" },
        ],
        ground: {
          kind: "historical",
          text: "Pharaoh orders two midwives to kill the Hebrew baby boys, and they refuse. The writer records their names, Shiphrah and Puah, while he leaves the king of the greatest empire on earth unnamed from start to finish. When the king questions them, they answer with a lie, told to a man who could have them killed for it, and the writer does not apologize for them.",
          src: "Propp · Meyers · Sarna",
        },
        misreading: {
          named:
            "Some readers treat this chapter as a story about two brave individuals set against one wicked king.",
          why: "The writer describes a whole system rather than a single villain. The king makes a calculation, sets a labor policy, makes it harsher, and finally hands the killing to his entire population, so that by the last verse ordinary Egyptians are drowning children as a public duty. If we blame only one bad man, we excuse everyone else who went along. The midwives matter because they are the only two people in the chapter who refuse.",
        },
        meaning:
          "The midwives are among the first people in the Bible to disobey a king, and they have no wealth, no rank, and no power. They do not lead a revolt. They simply go on doing their work and lie about the results. The writer says that they <b>feared God</b>, and he sets their fear of God against the fear that Pharaoh expects from everyone. That choice, which power a person truly fears, is what the whole book of Exodus is about.",
        lenses: {
          theo: "The biblical writers kept two names that Egypt would never have bothered to record, and they left out the name of a king who had his name carved into stone. By reversing who is remembered, the writers pass their own judgment on the king.",
        },
        addr: {
          mode: "claims",
          text: "Most of us will never be asked to run an empire. We will more likely be asked to go along with something small, and it will come to us as routine rather than as evil. When we have no power, the refusal open to us is often simply to stop cooperating efficiently.",
        },
        ask: "What are you going along with because refusing would be awkward, though not dangerous?",
      },
    ],
  },
  {
    id: "ex-2",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 2",
    chapterIndex: 2,
    title: "The basket, and the flight",
    unitLabel: "Scene",
    thread: "Moses, the man God will use to rescue Israel, is first rescued himself, by women, and from the same river where Pharaoh meant him to drown. When he grows up, he tries to save one of his people by force, and he has to run for his life.",
    closeEnd: "The writer passes over forty years in a single sentence, and he ends the chapter not with something Moses does but with God hearing his people.",
    passages: [
      {
        label: "One",
        ref: "2:1–10",
        kind: "scene",
        form: "prose",
        title: "Drawn out of the water",
        verses: [
          { n: 1, text: "Now a man of the house of Levi married a Levite woman," },
          { n: 2, text: "and she conceived and gave birth to a son. When she saw that he was a beautiful child, she hid him for three months." },
          { n: 3, text: "But when she could no longer hide him, she got him a papyrus basket and coated it with tar and pitch. Then she placed the child in the basket and set it among the reeds along the bank of the Nile." },
          { n: 4, text: "And his sister stood at a distance to see what would happen to him." },
          { n: 5, text: "Soon the daughter of Pharaoh went down to bathe in the Nile, and her attendants were walking along the riverbank. And when she saw the basket among the reeds, she sent her maidservant to retrieve it." },
          { n: 6, text: "When she opened it, she saw the child, and behold, the little boy was crying. So she had compassion on him and said, “This is one of the Hebrew children.”" },
          { n: 7, text: "Then his sister said to Pharaoh’s daughter, “Shall I go and call one of the Hebrew women to nurse the child for you?”" },
          { n: 8, text: "“Go ahead,” Pharaoh’s daughter told her. And the girl went and called the boy’s mother." },
          { n: 9, text: "Pharaoh’s daughter said to her, “Take this child and nurse him for me, and I will pay your wages.” So the woman took the boy and nursed him." },
          { n: 10, text: "When the child had grown older, she brought him to Pharaoh’s daughter, and he became her son. She named him Moses and explained, “I drew him out of the water.”" },
        ],
        ground: {
          kind: "historical",
          text: "The Hebrew word for the basket is the same word used for Noah’s ark, and the writers use it nowhere else in the Bible. In both stories someone builds a watertight box to carry a life through water that was meant to kill. Moses’s mother obeys Pharaoh’s decree to the letter, since she does put her son in the Nile, and she turns her obedience into a rescue. People in the ancient world told similar stories about great men, the most famous being Sargon of Akkad, whose mother set him adrift in a reed basket sealed with pitch.",
          src: "Propp · Sarna · Assmann",
        },
        meaning:
          "Five women save Israel’s future in these first two chapters, and the writer keeps the names of only the two midwives: the others are a mother, a sister, and a princess. The daughter of the king who ordered the killing even pays the boy’s own mother to nurse him. The writer is enjoying the irony, because he shows the empire’s own royal household paying for the rescue of the boy who will one day bring it down.",
        lenses: {
          theo: "God begins his rescue in small, household ways, through a basket, a payment, and a sister watching from the reeds, long before anyone could recognize it as a rescue. The writer never mentions God once in this scene, and yet God’s work still gets done.",
        },
        addr: {
          mode: "names",
          text: "Often the people who carry us through something have no power and no title. They do something small and practical while the important people are looking elsewhere.",
        },
        ask: "Who quietly carried you through something, without any authority to do it?",
      },
      {
        label: "Two",
        ref: "2:11–15",
        kind: "scene",
        form: "prose",
        title: "The killing, and the running",
        verses: [
          { n: 11, text: "One day, after Moses had grown up, he went out to his own people and observed their hard labor. He saw an Egyptian beating a Hebrew, one of his own people." },
          { n: 12, text: "After looking this way and that and seeing no one, he struck down the Egyptian and hid his body in the sand." },
          { n: 13, text: "The next day Moses went out and saw two Hebrews fighting. He asked the one in the wrong, “Why are you attacking your companion?”" },
          { n: 14, text: "But the man replied, “Who made you ruler and judge over us? Are you planning to kill me as you killed the Egyptian?” Then Moses was afraid and thought, “This thing I have done has surely become known.”" },
          { n: 15, text: "When Pharaoh heard about this matter, he sought to kill Moses. But Moses fled from Pharaoh and settled in the land of Midian, where he sat down beside a well." },
        ],
        ground: {
          kind: "historical",
          text: "Before Moses strikes the Egyptian, he looks this way and that, and the writer includes that detail because it condemns him. Moses is not overcome by rage; he is checking whether anyone is watching. The next day he finds two Hebrews fighting, and one of them asks him a question he cannot answer: who made you ruler and judge over us? Moses grew up in the palace but was born a Hebrew, and neither group accepts him as its own.",
          src: "Propp · Childs",
        },
        meaning:
          "Moses’s first attempt to rescue his people is a murder, and it fails in every way. He saves one man, he acts in secret, and within a day the people he meant to help have seen through him. Forty years in the desert follow. The writer does not present this as a promising start that went wrong. He presents it as the wrong kind of <b>power</b> altogether, used by the right man far too early.",
        lenses: {
          arch: "Many stories tell of a would-be rescuer who acts alone, in secret, and by force, and then finds that the people he meant to rescue do not want him. Moses appoints himself as Israel’s rescuer, and in this chapter he learns that he cannot be one on his own authority.",
        },
        addr: {
          mode: "names",
          text: "Most of us have wanted to fix something that was truly wrong, reached for the fastest way to do it, and found that the people involved never asked for our help and did not thank us for it.",
        },
        ask: "Where have you tried to put something right in a way that mostly served your own need to act?",
      },
      {
        label: "Three",
        ref: "2:16–25",
        kind: "scene",
        form: "prose",
        title: "Midian, and the groaning",
        verses: [
          { n: 16, text: "Now the priest of Midian had seven daughters, and they came to draw water and fill the troughs to water their father’s flock." },
          { n: 17, text: "And when some shepherds came along and drove them away, Moses rose up to help them and watered their flock." },
          { n: 18, text: "When the daughters returned to their father Reuel, he asked them, “Why have you returned so early today?”" },
          { n: 19, text: "“An Egyptian rescued us from the shepherds,” they replied. “He even drew water for us and watered the flock.”" },
          { n: 20, text: "“So where is he?” their father asked. “Why did you leave the man behind? Invite him to have something to eat.”" },
          { n: 21, text: "Moses agreed to stay with the man, and he gave his daughter Zipporah to Moses in marriage." },
          { n: 22, text: "And she gave birth to a son, and Moses named him Gershom, saying, “I have become a foreigner in a foreign land.”" },
          { n: 23, text: "After a long time, the king of Egypt died. The Israelites groaned and cried out under their burden of slavery, and their cry for deliverance from bondage ascended to God." },
          { n: 24, text: "So God heard their groaning, and He remembered His covenant with Abraham, Isaac, and Jacob." },
          { n: 25, text: "God saw the Israelites and took notice." },
        ],
        ground: {
          kind: "historical",
          text: "At a well in a foreign land, Moses does what he failed to do at home: he defends strangers, and this time he succeeds. Midian lies east of Egypt, across the Sinai, and there Moses marries into a priestly family. He names his son Gershom, which sounds like the Hebrew for “a stranger there,” and the name sums up his whole condition. After a long silence, the writer closes the chapter with four verbs that have God as their subject: God heard, remembered, saw, and knew.",
          src: "Propp · Fretheim · Sarna",
        },
        meaning:
          "The writer explains the name Moses from a Hebrew verb meaning “to draw out,” but the name itself is clearly Egyptian, the same ending found in the names of pharaohs such as Thutmose and Rameses. Moses has an Egyptian name, a Midianite wife, and a Hebrew mother, and he is at home nowhere. Then, without warning, the writer turns back to Egypt. There nothing has changed: one king dies, another takes over, and the work goes on. The only new thing in the world is that God has <b>heard</b> his people.",
        lenses: {
          theo: "The writer is careful not to say that God acted. He says that God heard, remembered, saw, and knew. Everything God does in the rest of the book comes out of that hearing, and the people crying out in Egypt have no idea that he has heard them.",
        },
        addr: {
          mode: "names",
          text: "Most lives include a long stretch in which nothing seems to move, when the honest report is that we are keeping someone else’s sheep. The writer puts forty such years into a single verse, and he wants us to know that they were not empty.",
        },
        ask: "What are you waiting through right now that looks like nothing happening?",
      },
    ],
  },
  {
    id: "ex-3",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 3",
    chapterIndex: 3,
    title: "The bush and the name",
    unitLabel: "Scene",
    thread: "While Moses is tending sheep, he sees a bush that burns without burning up, and he turns aside to look at it. God does not give him comfort there; he gives him a task. Every time Moses objects, God answers him the same way: I will be with you.",
    closeEnd: "Moses asked who he was, and God answered by telling him who God is, and then sent him anyway.",
    passages: [
      {
        label: "One",
        ref: "3:1–6",
        kind: "scene",
        form: "prose",
        title: "The bush",
        verses: [
          { n: 1, text: "Meanwhile, Moses was shepherding the flock of his father-in-law Jethro, the priest of Midian. He led the flock to the far side of the wilderness and came to Horeb, the mountain of God." },
          { n: 2, text: "There the angel of the LORD appeared to him in a blazing fire from within a bush. Moses saw the bush ablaze with fire, but it was not consumed." },
          { n: 3, text: "So Moses thought, “I must go over and see this marvelous sight. Why is the bush not burning up?”" },
          { n: 4, text: "When the LORD saw that he had gone over to look, God called out to him from within the bush, “Moses, Moses!” “Here I am,” he answered." },
          { n: 5, text: "“Do not come any closer,” God said. “Take off your sandals, for the place where you are standing is holy ground.”" },
          { n: 6, text: "Then He said, “I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob.” At this, Moses hid his face, for he was afraid to look at God." },
        ],
        ground: {
          kind: "historical",
          text: "Moses is at work, tending a flock that belongs to his father-in-law, on the far side of the wilderness. The bush he sees is a common thornbush, the least impressive plant he could have found there. What stops him is not the fire itself but the fact that the fire does not consume the bush. Moses turns aside because something ordinary is not behaving as it should, and only when he turns does God speak.",
          src: "Childs · Propp · Sarna",
        },
        meaning:
          "The ground where Moses stands is a patch of desert that was not holy the day before and that no one will mark afterward. It is <b>holy</b> because God is there now. The order of events also matters. The bush burns, Moses turns aside, and then God speaks. God does not interrupt Moses; he invites him to notice, and the noticing is Moses’s part.",
        lenses: {
          theo: "Moses arranges nothing about this meeting. He is not praying, not searching for God, not qualified, and not in a temple. He is at work in the middle of nowhere, and the meeting happens only because God chooses to begin it.",
        },
        addr: {
          mode: "names",
          text: "Most of us have walked past something that mattered, not because anyone hid it from us but because we did not stop to look. In this scene, turning aside to look is the whole of what God asks of Moses at first.",
        },
        ask: "What have you noticed lately but not turned aside to look at?",
      },
      {
        label: "Two",
        ref: "3:7–12",
        kind: "scene",
        form: "prose",
        title: "I have seen, and I am sending you",
        verses: [
          { n: 7, text: "The LORD said, “I have indeed seen the affliction of My people in Egypt. I have heard them crying out because of their oppressors, and I am aware of their sufferings." },
          { n: 8, text: "I have come down to rescue them from the hand of the Egyptians and to bring them up out of that land to a good and spacious land, a land flowing with milk and honey—the home of the Canaanites, Hittites, Amorites, Perizzites, Hivites, and Jebusites." },
          { n: 9, text: "And now the cry of the Israelites has reached Me, and I have seen how severely the Egyptians are oppressing them." },
          { n: 10, text: "Therefore, go! I am sending you to Pharaoh to bring My people the Israelites out of Egypt.”" },
          { n: 11, text: "But Moses asked God, “Who am I, that I should go to Pharaoh and bring the Israelites out of Egypt?”" },
          { n: 12, text: "“I will surely be with you,” God said, “and this will be the sign to you that I have sent you: When you have brought the people out of Egypt, all of you will worship God on this mountain.”" },
        ],
        ground: {
          kind: "historical",
          text: "God speaks to Moses with verb after verb of attention: I have seen, I have heard, I know their sufferings, I have come down. Then, without warning, God turns the sentence: I have come down to deliver them, so now go, for I am sending you. Moses answers with the first of several objections, and it is a question about himself.",
          src: "Fretheim · Childs",
        },
        meaning:
          "God announces the rescue as his own work, and in the same breath he hands it to a man, without explaining why he should need one. Moses asks the reasonable question, “Who am I?”, and God gives him no answer to it at all. Instead God tells him, <b>I will be with you</b>. Moses asked whether he was adequate; God changed the subject to his own presence, and that is the only assurance Moses ever receives.",
        lenses: {
          theo: "The sign God offers is not proof beforehand but confirmation afterward: when Moses has brought the people out, they will worship God at this mountain. Moses has to go first and receive the evidence later, and believers have usually found that this is how faith works.",
        },
        addr: {
          mode: "names",
          text: "When we are asked to do something beyond us, we usually ask, as Moses did, “Who am I?” God never answers that question in this scene. Instead he moves the ground from our competence to his company, which is less comforting, but which lasts longer.",
        },
        ask: "What are you declining on the grounds that you are not the right person?",
      },
      {
        label: "Three",
        ref: "3:13–22",
        kind: "scene",
        form: "prose",
        title: "The name",
        verses: [
          { n: 13, text: "Then Moses asked God, “Suppose I go to the Israelites and say to them, ‘The God of your fathers has sent me to you,’ and they ask me, ‘What is His name?’ What should I tell them?”" },
          { n: 14, text: "God said to Moses, “I AM WHO I AM. This is what you are to say to the Israelites: ‘I AM has sent me to you.’”" },
          { n: 15, text: "God also told Moses, “Say to the Israelites, ‘The LORD, the God of your fathers—the God of Abraham, the God of Isaac, and the God of Jacob—has sent me to you.’ This is My name forever, and this is how I am to be remembered in every generation." },
          { n: 16, text: "Go, assemble the elders of Israel and say to them, ‘The LORD, the God of your fathers—the God of Abraham, Isaac, and Jacob—has appeared to me and said: I have surely attended to you and have seen what has been done to you in Egypt." },
          { n: 17, text: "And I have promised to bring you up out of your affliction in Egypt, into the land of the Canaanites, Hittites, Amorites, Perizzites, Hivites, and Jebusites—a land flowing with milk and honey.’" },
          { n: 18, text: "The elders of Israel will listen to what you say, and you must go with them to the king of Egypt and tell him, ‘The LORD, the God of the Hebrews, has met with us. Now please let us take a three-day journey into the wilderness, so that we may sacrifice to the LORD our God.’" },
          { n: 19, text: "But I know that the king of Egypt will not allow you to go unless a mighty hand compels him." },
          { n: 20, text: "So I will stretch out My hand and strike the Egyptians with all the wonders I will perform among them. And after that, he will release you." },
          { n: 21, text: "And I will grant this people such favor in the sight of the Egyptians that when you leave, you will not go away empty-handed." },
          { n: 22, text: "Every woman shall ask her neighbor and any woman staying in her house for silver and gold jewelry and clothing, and you will put them on your sons and daughters. So you will plunder the Egyptians.”" },
        ],
        ground: {
          kind: "historical",
          text: "The name God gives is written with four Hebrew consonants, YHWH, and the writer explains it with a verb of being that can be read either “I am who I am” or “I will be what I will be.” Hebrew verbs do not mark time the way English tenses do, so the promise leans toward the future. In later centuries Jews stopped saying the name aloud and said “Lord” in its place, which is why English Bibles print LORD in capitals.",
          src: "Childs · Propp · Sarna",
        },
        misreading: {
          named:
            "Some readers take the name as a statement of philosophy, in which God announces that he is pure, self-existent being.",
          why: "That reading came centuries later, when Christian and Jewish thinkers read the Bible through Greek philosophy. In Hebrew the name is a verb rather than a noun, and God speaks it in a conversation about rescue. Moses asks what he should tell a people of slaves who will want to know whose authority he comes with. God’s answer is closer to “I will be there, as I will be there,” a promise about what these people are about to see him do, rather than a definition of what God is.",
        },
        meaning:
          "Ancient people believed that knowing a god’s name gave them a way to call on that god and gain some hold over him. God gives Moses a name that refuses to be used that way. It is a verb that will not sit still, and in it God commits himself to being <b>present</b> rather than to being available on demand. Then God turns entirely practical: go to the elders, go to the king, he will not listen, and I will stretch out my hand.",
        lenses: {
          theo: "God first identifies himself to Moses as the God of Abraham, Isaac, and Jacob, and so he ties the rescue to promises he made centuries earlier to people long dead. The name is new, but God’s commitment is not.",
        },
        addr: {
          mode: "names",
          text: "Most of us would rather have a God we could define than a God who says only that he will be there. We can file a definition away, but we can only test a promise of presence by going.",
        },
        ask: "Would you rather know what God is, or know that God is with you? Answer honestly.",
      },
    ],
  },
  {
    id: "ex-4",
    bookId: "exodus",
    tier: "grounded",
    span: "Exodus 4 (selected)",
    chapterIndex: 4,
    title: "Signs, and the bridegroom of blood",
    passages: [
      {
        ref: "Exodus 4 (selected)",
        kind: "scene",
        form: "prose",
        title: "Signs, and the bridegroom of blood",
        verses: [
          { n: 1, text: "Then Moses answered, “What if they do not believe me or listen to my voice? For they may say, ‘The LORD has not appeared to you.’”" },
          { n: 2, text: "And the LORD asked him, “What is that in your hand?” “A staff,” he replied." },
          { n: 3, text: "“Throw it on the ground,” said the LORD. So Moses threw it on the ground, and it became a snake, and he ran from it." },
          { n: 4, text: "“Stretch out your hand and grab it by the tail,” the LORD said to Moses, who reached out his hand and caught the snake, and it turned back into a staff in his hand." },
          { n: 5, text: "“This is so that they may believe that the LORD, the God of their fathers—the God of Abraham, the God of Isaac, and the God of Jacob—has appeared to you.”" },
          { n: 10, text: "“Please, Lord,” Moses replied, “I have never been eloquent, neither in the past nor since You have spoken to Your servant, for I am slow of speech and tongue.”" },
          { n: 11, text: "And the LORD said to him, “Who gave man his mouth? Or who makes the mute or the deaf, the sighted or the blind? Is it not I, the LORD?" },
          { n: 12, text: "Now go! I will help you as you speak, and I will teach you what to say.”" },
          { n: 13, text: "But Moses replied, “Please, Lord, send someone else.”" },
          { n: 14, text: "Then the anger of the LORD burned against Moses, and He said, “Is not Aaron the Levite your brother? I know that he can speak well, and he is now on his way to meet you. When he sees you, he will be glad in his heart." },
          { n: 15, text: "You are to speak to him and put the words in his mouth. I will help both of you to speak, and I will teach you what to do." },
          { n: 16, text: "He will speak to the people for you. He will be your spokesman, and it will be as if you were God to him." },
          { n: 17, text: "But take this staff in your hand so you can perform signs with it.”" },
          { n: 18, text: "Then Moses went back to his father-in-law Jethro and said to him, “Please let me return to my brothers in Egypt to see if they are still alive.” “Go in peace,” Jethro replied." },
          { n: 20, text: "So Moses took his wife and sons, put them on a donkey, and headed back to Egypt. And he took the staff of God in his hand." },
          { n: 24, text: "Now at a lodging place along the way, the LORD met Moses and was about to kill him." },
          { n: 25, text: "But Zipporah took a flint knife, cut off her son’s foreskin, and touched it to Moses’ feet. “Surely you are a bridegroom of blood to me,” she said." },
          { n: 26, text: "So the LORD let him alone. (When she said, “bridegroom of blood,” she was referring to the circumcision.)" },
          { n: 29, text: "Then Moses and Aaron went and assembled all the elders of the Israelites," },
          { n: 30, text: "and Aaron relayed everything the LORD had said to Moses. And Moses performed the signs before the people," },
          { n: 31, text: "and they believed. And when they heard that the LORD had attended to the Israelites and had seen their affliction, they bowed down and worshiped." },
        ],
        ground: {
          kind: "historical",
          text: "Moses runs out of objections, and God gives him signs to perform instead, and then his brother Aaron to do the speaking. On the road back to Egypt the writer includes a passage that no interpreter has managed to explain away. The LORD meets Moses at a place where they stop for the night and seeks to kill him, and Moses’s wife Zipporah cuts off her son’s foreskin and touches Moses’s feet with it. The passage is old and compressed, and it has resisted every attempt to smooth it out. The writer does not pause over it, and readers should not expect to resolve it either.",
          src: "Propp · Childs",
        },
      },
    ],
  },
  {
    id: "ex-5",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 5",
    chapterIndex: 5,
    title: "Bricks without straw",
    unitLabel: "Scene",
    thread: "When Moses first goes to Pharaoh, he only makes everything worse. Pharaoh keeps the brick quota the same and stops supplying straw, and the people God promised to deliver now want the man who brought that promise gone.",
    closeEnd: "The chapter ends with Moses accusing God, and God has not yet said a word in reply.",
    passages: [
      {
        label: "One",
        ref: "5:1–9",
        kind: "scene",
        form: "prose",
        title: "Who is the LORD?",
        verses: [
          { n: 1, text: "After that, Moses and Aaron went to Pharaoh and said, “This is what the LORD, the God of Israel, says: ‘Let My people go, so that they may hold a feast to Me in the wilderness.’”" },
          { n: 2, text: "But Pharaoh replied, “Who is the LORD that I should obey His voice and let Israel go? I do not know the LORD, and I will not let Israel go.”" },
          { n: 3, text: "“The God of the Hebrews has met with us,” they answered. “Please let us go on a three-day journey into the wilderness to sacrifice to the LORD our God, or He may strike us with plagues or with the sword.”" },
          { n: 4, text: "But the king of Egypt said to them, “Moses and Aaron, why do you draw the people away from their work? Get back to your labor!”" },
          { n: 5, text: "Pharaoh also said, “Look, the people of the land are now numerous, and you would be stopping them from their labor.”" },
          { n: 6, text: "That same day Pharaoh commanded the taskmasters of the people and their foremen:" },
          { n: 7, text: "“You shall no longer supply the people with straw for making bricks. They must go and gather their own straw." },
          { n: 8, text: "But require of them the same quota of bricks as before; do not reduce it. For they are lazy; that is why they are crying out, ‘Let us go and sacrifice to our God.’" },
          { n: 9, text: "Make the work harder on the men so they will be occupied and pay no attention to these lies.”" },
        ],
        ground: {
          kind: "historical",
          text: "Egyptian brickmakers mixed straw into Nile mud to bind their bricks, and Egyptian records do show quotas and daily tallies of bricks delivered. When Pharaoh withholds the straw but keeps the number the same, he is not acting in a rage; he is choosing a precise administrative cruelty. He accuses the people of being idle, and rulers have made that same accusation whenever they have just increased what they demand.",
          src: "Sarna · Meyers · Assmann",
        },
        meaning:
          "Pharaoh’s first words are a question: who is the LORD, that I should obey him? He is not speaking for effect. He truly does not know the name, and the whole contest that follows is God’s answer to his question. What Pharaoh does know is how to keep people under control. He decides to make the work heavier so that they will stop listening to talk of freedom, because people who are exhausted cannot afford to <b>hope</b>.",
        lenses: {
          arch: "Rulers have often used exhaustion deliberately as a way to control people, keeping them so tired that they have no strength left to imagine anything different. Pharaoh uses work in exactly this way, to keep the Israelites quiet.",
        },
        addr: {
          mode: "names",
          text: "Many of us know what it is to be kept too busy to think, when the sheer amount of work we are given keeps us from asking whether we should be doing it at all.",
        },
        ask: "What in your life goes unquestioned mainly because you are too tired to question it?",
      },
      {
        label: "Two",
        ref: "5:10–14",
        kind: "scene",
        form: "prose",
        title: "The quota holds",
        verses: [
          { n: 10, text: "So the taskmasters and foremen of the people went out and said to them, “This is what Pharaoh says: ‘I am no longer giving you straw." },
          { n: 11, text: "Go and get your own straw wherever you can find it; but your workload will in no way be reduced.’”" },
          { n: 12, text: "So the people scattered all over the land of Egypt to gather stubble for straw." },
          { n: 13, text: "The taskmasters kept pressing them, saying, “Fulfill your quota each day, just as you did when straw was provided.”" },
          { n: 14, text: "Then the Israelite foremen, whom Pharaoh’s taskmasters had set over the people, were beaten and asked, “Why have you not fulfilled your quota of bricks yesterday or today, as you did before?”" },
        ],
        ground: {
          kind: "historical",
          text: "Pharaoh appoints Israelites as foremen over their own people, and the taskmasters beat them whenever the numbers fall short. The foremen are caught between the taskmasters above them and the workers below, responsible for a target they cannot meet. When they appeal to Pharaoh, he refuses them in a single line, and they leave knowing they are in trouble.",
          src: "Meyers · Propp",
        },
        meaning:
          "The people who carry out the cruelty are themselves suffering under it. That is how such a system keeps running without anyone in it feeling like the villain. The taskmasters have quotas of their own, and the foremen are beaten for a shortfall they did not cause. Everyone is following a number, and the number came from a king who did not want anyone to <b>question</b> him.",
        lenses: {
          theo: "In this chapter God performs no miracle, and nothing improves. The writer gives this stretch its full weight rather than hurrying on to the rescue, and in doing so he tells the truth about how deliverance feels to the people waiting inside it.",
        },
        addr: {
          mode: "names",
          text: "At different times most of us have both passed on pressure that we did not create and absorbed pressure from others. Neither position feels like power, yet in both we keep the machine running.",
        },
        ask: "Where are you enforcing something you would not defend if anyone asked you to?",
      },
      {
        label: "Three",
        ref: "5:15–23",
        kind: "scene",
        form: "prose",
        title: "You have not delivered them at all",
        verses: [
          { n: 15, text: "So the Israelite foremen went and appealed to Pharaoh: “Why are you treating your servants this way?" },
          { n: 16, text: "No straw has been given to your servants, yet we are told, ‘Make bricks!’ Look, your servants are being beaten, but the fault is with your own people.”" },
          { n: 17, text: "“You are slackers!” Pharaoh replied. “Slackers! That is why you keep saying, ‘Let us go and sacrifice to the LORD.’" },
          { n: 18, text: "Now get to work. You will be given no straw, yet you must deliver the full quota of bricks.”" },
          { n: 19, text: "The Israelite foremen realized they were in trouble when they were told, “You must not reduce your daily quota of bricks.”" },
          { n: 20, text: "When they left Pharaoh, they confronted Moses and Aaron, who stood waiting to meet them." },
          { n: 21, text: "“May the LORD look upon you and judge you,” the foremen said, “for you have made us a stench before Pharaoh and his officials; you have placed in their hand a sword to kill us!”" },
          { n: 22, text: "So Moses returned to the LORD and asked, “Lord, why have You brought trouble upon this people? Is this why You sent me?" },
          { n: 23, text: "Ever since I went to Pharaoh to speak in Your name, he has brought trouble on this people, and You have not delivered Your people in any way.”" },
        ],
        ground: {
          kind: "historical",
          text: "The foremen find Moses and Aaron waiting in the road, and they call down judgment on them for making the people hateful to Pharaoh. Moses takes the complaint straight to God and repeats the accusation almost word for word. The writer ends the chapter there, with the complaint unanswered, and God does not reply until the next chapter opens.",
          src: "Fretheim · Childs",
        },
        misreading: {
          named:
            "Some readers say that Moses lost his nerve here, and that a stronger believer would not have spoken to God like that.",
          why: "The writer records Moses’s complaint and lets it stand, and when God answers, he does not rebuke Moses. Throughout Scripture the writers give their most trusted people words with which to accuse God, in Job, in the psalms of lament, and in Jeremiah. If we treat such words as a failure of faith, we cut out much of the Bible’s own language of prayer, and we leave readers in Moses’s position with nothing they are allowed to say.",
        },
        meaning:
          "Moses asks God why he has brought harm on this people, and why he ever sent Moses at all. He is not asking for information. He is saying aloud what everyone in the story is thinking, that obeying God has made things worse. The writer gives the lowest point of this part of the book to the very man God told, <b>I will be with you</b>, and he leaves it unresolved for a chapter.",
        lenses: {
          theo: "In Exodus God’s deliverance gets worse before it gets better, and the writer will not skip that part. God promised Moses his presence, not an easy road, and this is the first place where Moses and the people feel the difference.",
        },
        addr: {
          mode: "names",
          text: "Some of us have done what we believed God asked of us and then watched it cost other people something. Moses’s accusation is open to us as well, and in this chapter the writer shows Moses making it without apology.",
        },
        ask: "What would you say to God about the thing that got worse after you obeyed?",
      },
    ],
  },
  {
    id: "ex-6",
    bookId: "exodus",
    tier: "grounded",
    span: "Exodus 6 (selected)",
    chapterIndex: 6,
    title: "I am the LORD",
    passages: [
      {
        ref: "Exodus 6 (selected)",
        kind: "scene",
        form: "prose",
        title: "I am the LORD",
        verses: [
          { n: 1, text: "But the LORD said to Moses, “Now you will see what I will do to Pharaoh, for because of My mighty hand he will let the people go; because of My strong hand he will drive them out of his land.”" },
          { n: 2, text: "God also told Moses, “I am the LORD." },
          { n: 3, text: "I appeared to Abraham, to Isaac, and to Jacob as God Almighty, but by My name the LORD I did not make Myself known to them." },
          { n: 4, text: "I also established My covenant with them to give them the land of Canaan, the land where they lived as foreigners." },
          { n: 5, text: "Furthermore, I have heard the groaning of the Israelites, whom the Egyptians are enslaving, and I have remembered My covenant." },
          { n: 6, text: "Therefore tell the Israelites: ‘I am the LORD, and I will bring you out from under the yoke of the Egyptians and deliver you from their bondage. I will redeem you with an outstretched arm and with mighty acts of judgment." },
          { n: 7, text: "I will take you as My own people, and I will be your God. Then you will know that I am the LORD your God, who brought you out from under the yoke of the Egyptians." },
          { n: 8, text: "And I will bring you into the land that I swore to give to Abraham, Isaac, and Jacob. I will give it to you as a possession. I am the LORD!’”" },
          { n: 9, text: "Moses relayed this message to the Israelites, but on account of their broken spirit and cruel bondage, they did not listen to him." },
          { n: 10, text: "So the LORD said to Moses," },
          { n: 11, text: "“Go and tell Pharaoh king of Egypt to let the Israelites go out of his land.”" },
          { n: 12, text: "But in the LORD’s presence Moses replied, “If the Israelites will not listen to me, then why would Pharaoh listen to me, since I am unskilled in speech?”" },
          { n: 13, text: "Then the LORD spoke to Moses and Aaron and gave them a charge concerning both the Israelites and Pharaoh king of Egypt, to bring the Israelites out of the land of Egypt." },
          { n: 28, text: "Now on the day that the LORD spoke to Moses in Egypt," },
          { n: 29, text: "He said to him, “I am the LORD; tell Pharaoh king of Egypt everything I say to you.”" },
          { n: 30, text: "But in the LORD’s presence Moses replied, “Since I am unskilled in speech, why would Pharaoh listen to me?”" },
        ],
        ground: {
          kind: "historical",
          text: "Scholars think Genesis and Exodus were woven together from several older sources, and this chapter comes from the one they call the Priestly writer. That is why God reveals his name to Moses here a second time, even though Moses already heard it at the burning bush in chapter 3: an editor kept both accounts. The Priestly writer tells the call in a formal, legal style and sets out God’s promise in a series of clauses. Then the writer stops to give a genealogy that places Moses and Aaron in the tribe of Levi, and afterward he picks up the narrative as though he had never paused.",
          src: "Friedman · Propp",
        },
      },
    ],
  },
  {
    id: "ex-7",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 7–11 (selected)",
    chapterIndex: 7,
    crossesChapters: true,
    title: "The plagues",
    unitLabel: "Scene",
    thread: "In Exodus 7 through 10 Moses demands Israel’s release nine times, and each time the same thing happens: Pharaoh refuses, God sends a sign, and Pharaoh’s heart hardens. God works these signs through the ordinary world of water, weather, livestock and light, and with each one he takes away something the Egyptians trusted.",
    closeEnd: "God does not send the last sign in this reading. Moses only announces it, and the reading stops there.",
    passages: [
      {
        label: "One",
        ref: "7:14–25",
        kind: "scene",
        form: "prose",
        title: "The river",
        verses: [
          { n: 14, text: "Then the LORD said to Moses, “Pharaoh’s heart is unyielding; he refuses to let the people go." },
          { n: 17, text: "This is what the LORD says: By this you will know that I am the LORD. Behold, with the staff in my hand I will strike the water of the Nile, and it will turn to blood." },
          { n: 20, text: "Moses and Aaron did just as the LORD had commanded; in the presence of Pharaoh and his officials, Aaron raised the staff and struck the water of the Nile, and all the water was turned to blood." },
          { n: 21, text: "The fish in the Nile died, and the river smelled so bad that the Egyptians could not drink its water. And there was blood throughout the land of Egypt." },
          { n: 24, text: "So all the Egyptians dug around the Nile for water to drink, because they could not drink the water from the river." },
          { n: 25, text: "And seven full days passed after the LORD had struck the Nile." },
        ],
        ground: {
          kind: "historical",
          text: "The writer builds these signs as a repeating pattern rather than a run of surprises: Moses makes a demand, Pharaoh refuses, God sends a sign, and Pharaoh’s heart hardens, again and again. God works through the ordinary world of water, weather, livestock and light, which was exactly the order the Egyptians believed their gods kept in place. He strikes the Nile first because Egypt depended on it completely. Every crop in the country grew because the river flooded each year.",
          src: "Propp · Fretheim · Assmann",
        },
        meaning:
          "With the first sign God takes away Egypt’s water. He does not send a plague from outside the world; he turns the country’s own river against it, so the fish die and no one can drink. Then the writer adds a detail he clearly wants us to notice: Pharaoh’s magicians do the same thing. God does not overwhelm Pharaoh with this sign, and he does not mean to. He is opening an argument about <b>who owns the Nile</b>.",
        lenses: {
          theo: "The Egyptians worshipped the Nile’s yearly flood as a god, Hapi. God does not challenge Egypt’s gods somewhere up in the sky. He challenges them inside the things the Egyptians depended on every day, and that is where people usually find out what they really trust.",
        },
      },
      {
        label: "Two",
        ref: "8:1–19",
        kind: "scene",
        form: "prose",
        title: "Frogs, and gnats",
        verses: [
          { n: 1, text: "Then the LORD said to Moses, “Go to Pharaoh and tell him that this is what the LORD says: ‘Let My people go, so that they may worship Me." },
          { n: 2, text: "But if you refuse to let them go, I will plague your whole country with frogs." },
          { n: 6, text: "So Aaron stretched out his hand over the waters of Egypt, and the frogs came up and covered the land of Egypt." },
          { n: 8, text: "Pharaoh summoned Moses and Aaron and said, “Pray to the LORD to take the frogs away from me and my people. Then I will let your people go, that they may sacrifice to the LORD.”" },
          { n: 15, text: "When Pharaoh saw that there was relief, however, he hardened his heart and would not listen to Moses and Aaron, just as the LORD had said." },
          { n: 19, text: "“This is the finger of God,” the magicians said to Pharaoh. But Pharaoh’s heart was hardened, and he would not listen to them, just as the LORD had said." },
        ],
        ground: {
          kind: "historical",
          text: "Next God sends frogs, and then gnats that rise out of the dust. The magicians manage to produce frogs too, which only doubles the misery, but they cannot produce gnats. They tell Pharaoh that this is “the finger of God,” and with those words his own court admits for the first time that something has changed. Pharaoh is unmoved.",
          src: "Propp · Sarna",
        },
        meaning:
          "Pharaoh’s own experts can do some things and not others. They can add frogs, but they cannot take them away, and they cannot make gnats at all. Egypt’s power is real, but it only works in one direction: its magicians can make a problem worse and never better. When his advisers tell him plainly what they are seeing, Pharaoh does not argue with them. He simply refuses to <b>listen</b>, which is a different thing from disagreeing.",
      },
      {
        label: "Three",
        ref: "9:13–35",
        kind: "scene",
        form: "prose",
        title: "Hail",
        verses: [
          { n: 13, text: "Then the LORD said to Moses, “Get up early in the morning, stand before Pharaoh, and tell him that this is what the LORD, the God of the Hebrews, says: ‘Let My people go, so that they may worship Me." },
          { n: 14, text: "Otherwise, I will send all My plagues against you and your officials and your people, so you may know that there is no one like Me in all the earth." },
          { n: 18, text: "Behold, at this time tomorrow I will rain down the worst hail that has ever fallen on Egypt, from the day it was founded until now." },
          { n: 23, text: "So Moses stretched out his staff toward heaven, and the LORD sent thunder and hail, and lightning struck the earth. So the LORD rained down hail upon the land of Egypt." },
          { n: 24, text: "The hail fell and the lightning continued flashing through it. The hail was so severe that nothing like it had ever been seen in all the land of Egypt from the time it became a nation." },
          { n: 27, text: "Then Pharaoh summoned Moses and Aaron. “This time I have sinned,” he said. “The LORD is righteous, and I and my people are wicked." },
          { n: 34, text: "When Pharaoh saw that the rain and hail and thunder had ceased, he sinned again and hardened his heart—he and his officials." },
          { n: 35, text: "So Pharaoh’s heart was hardened, and he would not let the Israelites go, just as the LORD had said through Moses." },
        ],
        ground: {
          kind: "historical",
          text: "By the time God sends the hail, his warnings have become specific: anyone who brings their livestock under shelter will save them. Some of Pharaoh’s officials take the warning and some do not, so the writer quietly divides the Egyptians into those who heeded God’s word and those who ignored it. Afterward Pharaoh says, “I have sinned,” and he takes the words back as soon as the sky clears.",
          src: "Fretheim · Propp",
        },
        meaning:
          "Pharaoh makes the first confession in the book of Exodus, and it means nothing. He says he has sinned while the hail is still falling and changes his mind as soon as it stops, and the writer simply reports this without comment. People find it easy to use the language of repentance while they are under pressure. What pressure cannot do is change them, and we only see whether someone has changed once the pressure is gone.",
        lenses: {
          arch: "People in every age have made apologies like Pharaoh’s, sincere for exactly as long as the trouble lasts. Someone caught in a crisis promises to change, and once the crisis passes, he goes back to what he was doing. Pharaoh is not really repenting. He is bargaining for relief.",
        },
      },
      {
        label: "Four",
        ref: "10:1–29",
        kind: "scene",
        form: "prose",
        title: "Locusts, and darkness",
        verses: [
          { n: 1, text: "Then the LORD said to Moses, “Go to Pharaoh, for I have hardened his heart and the hearts of his officials, that I may perform these miraculous signs of Mine among them," },
          { n: 2, text: "and that you may tell your children and grandchildren how severely I dealt with the Egyptians when I performed miraculous signs among them, so that all of you may know that I am the LORD.”" },
          { n: 12, text: "Then the LORD said to Moses, “Stretch out your hand over the land of Egypt, so that the locusts may swarm over it and devour every plant in the land—everything that the hail has left behind.”" },
          { n: 13, text: "So Moses stretched out his staff over the land of Egypt, and throughout that day and night the LORD sent an east wind across the land. By morning the east wind had brought the locusts." },
          { n: 21, text: "Then the LORD said to Moses, “Stretch out your hand toward heaven, so that darkness may spread over the land of Egypt—a palpable darkness.”" },
          { n: 22, text: "So Moses stretched out his hand toward heaven, and total darkness covered all the land of Egypt for three days." },
          { n: 23, text: "No one could see anyone else, and for three days no one left his place. Yet all the Israelites had light in their dwellings." },
          { n: 27, text: "But the LORD hardened Pharaoh’s heart, and he was unwilling to let them go." },
          { n: 28, text: "“Depart from me!” Pharaoh said to Moses. “Make sure you never see my face again, for on the day you see my face, you will die.”" },
          { n: 29, text: "“As you say,” Moses replied, “I will never see your face again.”" },
        ],
        ground: {
          kind: "historical",
          text: "At the start of chapter 10, God says it outright: “I have hardened his heart.” The writer uses three different Hebrew verbs for this hardening across the whole account. In the early rounds Pharaoh’s heart hardens, or Pharaoh hardens it himself, and only from the sixth sign onward does the writer name God as the one who hardens it. Then God sends locusts to eat whatever the hail left, and a darkness falls that the writer calls “a darkness that can be felt.”",
          src: "Propp · Childs · Fretheim",
        },
        misreading: {
          named:
            "God hardened Pharaoh’s heart, so Pharaoh was a puppet, punished for refusing when he was never free to do anything else.",
          why: "If we follow who does the hardening, the order matters. Through the first five signs Pharaoh’s heart hardens, or Pharaoh hardens it himself, and only after that does the writer name God as the one hardening it. The writer is describing something we can recognize: a man makes the same refusal so many times that it stops being a choice and becomes his character, and the writer is willing to call that hardening God’s work as well as Pharaoh’s own. Pharaoh is not a man who was denied the chance to repent. He was given that chance again and again, and each time he used it to say no.",
        },
        meaning:
          "God sends the darkness as the second-to-last sign, and in it he undoes the first thing he made in Genesis, which was light. The Egyptians worshipped the sun as their chief god, Ra, and they called the pharaoh Ra’s son, so three days of darkness in which no one can see anyone else is God’s verdict on that whole system. By now Pharaoh’s officials have given up and have asked him whether he still does not realize that Egypt is ruined. Pharaoh answers by telling Moses that if he ever sees his face again, Moses will die.",
        lenses: {
          theo: "Where the Israelites live, the writer tells us, there is light. He keeps drawing that line between Israel and Egypt, not to flatter Israel but to make clear that God is aiming the darkness, and that it is not ordinary weather.",
        },
      },
      {
        label: "Five",
        ref: "11:1–10",
        kind: "scene",
        form: "prose",
        title: "The last word",
        verses: [
          { n: 1, text: "Then the LORD said to Moses, “I will bring upon Pharaoh and Egypt one more plague. After that, he will allow you to leave this place. And when he lets you go, he will drive you out completely." },
          { n: 4, text: "So Moses declared, “This is what the LORD says: ‘About midnight I will go throughout Egypt," },
          { n: 5, text: "and every firstborn son in the land of Egypt will die, from the firstborn of Pharaoh who sits on his throne, to the firstborn of the servant girl behind the hand mill, as well as the firstborn of all the cattle." },
          { n: 6, text: "Then a great cry will go out over all the land of Egypt. Such an outcry has never been heard before and will never be heard again." },
          { n: 9, text: "The LORD said to Moses, “Pharaoh will not listen to you, so that My wonders may be multiplied in the land of Egypt.”" },
          { n: 10, text: "Moses and Aaron did all these wonders before Pharaoh, but the LORD hardened Pharaoh’s heart so that he would not let the Israelites go out of his land." },
        ],
        ground: {
          kind: "historical",
          text: "In this reading Moses only announces the last sign, and what he announces is meant to be unbearable to hear: every firstborn in Egypt will die, from the son of Pharaoh on his throne to the son of the slave woman at the mill, and the firstborn of the livestock too. In Egypt, as across the ancient world, the firstborn son inherited the family’s land and carried on its name, so God is striking at the future of every household in the country. By this point the Egyptians hold Moses in high regard, and they hear his announcement in silence.",
          src: "Propp · Sarna · Assmann",
        },
        tensions: [
          {
            claim:
              "God acts justly when he frees the enslaved, and the Egyptians who enslaved them bear the cost of that freedom, down to their children.",
            counter:
              "Other biblical writers refuse to let a nation’s guilt fall on its children, or to treat the exodus as something that belongs to Israel alone. Ezekiel states plainly that a son does not bear the guilt of his father. Amos pictures God saying that he brought the Philistines up from Caphtor just as he brought Israel up out of Egypt.",
            where: "Ezekiel 18:20 · Amos 9:7 · Jonah 4:11",
          },
        ],
        meaning:
          "No one can read this passage in a way that makes the death of children acceptable, and the writer does not try to. What he does instead is hold up a mirror. Egypt began by drowning the Hebrews’ baby boys in the Nile, and it ends by losing its own sons in a single night. The writer tells the story as <b>measure for measure</b>, but naming that pattern is not the same as excusing it. Other biblical writers argue with this passage, and that is why their objection appears above, left unresolved.",
        addr: {
          mode: "claims",
          text: "Pharaoh’s hardening is not just a puzzle about someone else’s free will. It describes what repeated refusal does to any person, and most of us have refused some small thing often enough to feel ourselves setting hard in the same way. As you read, look for the place in your own life where you can no longer easily choose differently.",
        },
        ask: "What have you said no to so often that saying yes is no longer really available to you?",
      },
    ],
  },
  {
    id: "ex-12",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 12 (selected)",
    chapterIndex: 12,
    title: "Passover",
    unitLabel: "Scene",
    thread: "The writer tells the story of the last night in Egypt twice, once as a meal and once as a death. He keeps pausing the story to explain how later generations should keep the meal, because most of the people who would celebrate Passover were born long after the night itself.",
    closeEnd: "The Israelites leave in such a hurry that their bread has no time to rise, and from then on they eat unrisen bread every year to remember that night.",
    passages: [
      {
        label: "One",
        ref: "12:1–14",
        kind: "scene",
        form: "prose",
        title: "The meal, and the blood",
        verses: [
          { n: 1, text: "Now the LORD said to Moses and Aaron in the land of Egypt," },
          { n: 2, text: "“This month is the beginning of months for you; it shall be the first month of your year." },
          { n: 3, text: "Tell the whole congregation of Israel that on the tenth day of this month each man must select a lamb for his family, one per household." },
          { n: 4, text: "If the household is too small for a whole lamb, they are to share with the nearest neighbor based on the number of people, and apportion the lamb accordingly." },
          { n: 5, text: "Your lamb must be an unblemished year-old male, and you may take it from the sheep or the goats." },
          { n: 6, text: "You must keep it until the fourteenth day of the month, when the whole assembly of the congregation of Israel will slaughter the animals at twilight." },
          { n: 7, text: "They are to take some of the blood and put it on the sides and tops of the doorframes of the houses where they eat the lambs." },
          { n: 8, text: "They are to eat the meat that night, roasted over the fire, along with unleavened bread and bitter herbs." },
          { n: 11, text: "This is how you are to eat it: You must be fully dressed for travel, with your sandals on your feet and your staff in your hand. You are to eat in haste; it is the LORD’s Passover." },
          { n: 12, text: "On that night I will pass through the land of Egypt and strike down every firstborn male, both man and beast, and I will execute judgment against all the gods of Egypt. I am the LORD." },
          { n: 13, text: "The blood on the houses where you are staying will be a sign; when I see the blood, I will pass over you. No plague will fall on you to destroy you when I strike the land of Egypt." },
          { n: 14, text: "And this day will be a memorial for you, and you are to celebrate it as a feast to the LORD, as a permanent statute for the generations to come." },
        ],
        ground: {
          kind: "historical",
          text: "The writer gives instructions for a ritual here before he tells what happened. God resets the calendar so that this month becomes the first of the year, tells each household to choose its lamb four days ahead, and addresses his commands to the whole people across all their generations. They are to put the lamb’s blood on their doorframes as a mark. Most scholars think Passover began as an older spring ritual among shepherds, who marked their flocks as they moved to new pasture, and that Israel took up that rite and gave it the meaning of this night.",
          src: "Sarna · Childs · Meyers",
        },
        meaning:
          "The Israelites eat the meal dressed to travel, with their belts fastened and their staffs in their hands, which makes it a strange sort of feast: people eat standing, expecting to be gone before morning. The writer is already looking beyond the night he describes. He tells the Israelites how to keep this meal once they are settled and safe and none of them remember Egypt, because people quickly forget a rescue unless they <b>rehearse</b> it.",
        lenses: {
          theo: "The blood is neither a payment nor a magic charm. God tells the Israelites to use it to mark their households, and he attaches an instruction to it: when your children ask what this means, you must tell them.",
        },
      },
      {
        label: "Two",
        ref: "12:21–39",
        kind: "scene",
        form: "prose",
        title: "Midnight, and the going out",
        verses: [
          { n: 21, text: "Then Moses summoned all the elders of Israel and told them, “Go at once and select for yourselves a lamb for each family, and slaughter the Passover lamb." },
          { n: 22, text: "Take a cluster of hyssop, dip it into the blood in the basin, and brush the blood on the top and sides of the doorframe. None of you shall go out the door of his house until morning." },
          { n: 23, text: "When the LORD passes through to strike down the Egyptians, He will see the blood on the top and sides of the doorframe and will pass over that doorway; so He will not allow the destroyer to enter your houses and strike you down." },
          { n: 29, text: "Now at midnight the LORD struck down every firstborn male in the land of Egypt, from the firstborn of Pharaoh, who sat on his throne, to the firstborn of the prisoner in the dungeon, as well as all the firstborn among the livestock." },
          { n: 30, text: "During the night Pharaoh got up—he and all his officials and all the Egyptians—and there was loud wailing in Egypt; for there was no house without someone dead." },
          { n: 31, text: "Then Pharaoh summoned Moses and Aaron by night and said, “Get up, leave my people, both you and the Israelites! Go, worship the LORD as you have requested." },
          { n: 32, text: "Take your flocks and herds as well, just as you have said, and depart! And bless me also.”" },
          { n: 37, text: "The Israelites journeyed from Rameses to Succoth with about 600,000 men on foot, besides women and children." },
          { n: 38, text: "And a mixed multitude also went up with them, along with great droves of livestock, both flocks and herds." },
          { n: 39, text: "Since their dough had no leaven, the people baked what they had brought out of Egypt into unleavened loaves. For when they had been driven out of Egypt, they could not delay and had not prepared any provisions for themselves." },
        ],
        ground: {
          kind: "historical",
          text: "At midnight someone dies in every Egyptian house, from Pharaoh’s palace to the prison cell, and a great cry goes up across the country. Pharaoh calls for Moses in the dark and gives in completely, and he even asks Moses to bless him. The Israelites leave in such haste that their dough has not risen, and the writer says that “a mixed multitude” went with them. Not only Israelites left Egypt that night, but anyone else who had reason to go.",
          src: "Propp · Sarna · Meyers",
        },
        meaning:
          "The writer does not soften the cost. Egypt loses its sons in one night, and the Israelites’ freedom is real, but someone else paid for it. Israel is told to keep this meal forever, and it is worth seeing what the meal does with that cost. It does not celebrate the deaths. It rehearses the <b>escape</b>, with unrisen bread and a hurried posture, and it hands the story on to children who will ask what it means.",
        addr: {
          mode: "claims",
          text: "Each of us has inherited things that people we never met paid for, and mostly we enjoy them without asking how they came to us. Israel kept this night every year so that they would remember the cost of their freedom and never take the freedom for granted.",
        },
        ask: "What did you inherit that somebody else paid for, and when did you last say so out loud?",
      },
    ],
  },
  {
    id: "ex-13",
    bookId: "exodus",
    tier: "grounded",
    span: "Exodus 13",
    chapterIndex: 13,
    title: "The firstborn, and the pillar",
    passages: [
      {
        ref: "Exodus 13",
        kind: "scene",
        form: "prose",
        title: "The firstborn, and the pillar",
        verses: [
          { n: 1, text: "Then the LORD said to Moses," },
          { n: 2, text: "“Consecrate to Me every firstborn male. The firstborn from every womb among the Israelites belongs to Me, both of man and beast.”" },
          { n: 3, text: "So Moses told the people, “Remember this day, the day you came out of Egypt, out of the house of slavery; for the LORD brought you out of it by the strength of His hand. And nothing leavened shall be eaten." },
          { n: 4, text: "Today, in the month of Abib, you are leaving." },
          { n: 5, text: "And when the LORD brings you into the land of the Canaanites, Hittites, Amorites, Hivites, and Jebusites—the land He swore to your fathers that He would give you, a land flowing with milk and honey—you shall keep this service in this month." },
          { n: 6, text: "For seven days you are to eat unleavened bread, and on the seventh day there shall be a feast to the LORD." },
          { n: 7, text: "Unleavened bread shall be eaten during those seven days. Nothing leavened may be found among you, nor shall leaven be found anywhere within your borders." },
          { n: 8, text: "And on that day you are to explain to your son, ‘This is because of what the LORD did for me when I came out of Egypt.’" },
          { n: 9, text: "It shall be a sign for you on your hand and a reminder on your forehead that the Law of the LORD is to be on your lips. For with a mighty hand the LORD brought you out of Egypt." },
          { n: 10, text: "Therefore you shall keep this statute at the appointed time year after year." },
          { n: 11, text: "And after the LORD brings you into the land of the Canaanites and gives it to you, as He swore to you and your fathers," },
          { n: 12, text: "you are to present to the LORD the firstborn male of every womb. All the firstborn males of your livestock belong to the LORD." },
          { n: 13, text: "You must redeem every firstborn donkey with a lamb, and if you do not redeem it, you are to break its neck. And every firstborn of your sons you must redeem." },
          { n: 14, text: "In the future, when your son asks you, ‘What does this mean?’ you are to tell him, ‘With a mighty hand the LORD brought us out of Egypt, out of the house of slavery." },
          { n: 15, text: "And when Pharaoh stubbornly refused to let us go, the LORD killed every firstborn in the land of Egypt, both of man and beast. This is why I sacrifice to the LORD the firstborn male of every womb, but I redeem all the firstborn of my sons.’" },
          { n: 16, text: "So it shall serve as a sign on your hand and a symbol on your forehead, for with a mighty hand the LORD brought us out of Egypt.”" },
          { n: 17, text: "When Pharaoh let the people go, God did not lead them along the road through the land of the Philistines, though it was shorter. For God said, “If the people face war, they might change their minds and return to Egypt.”" },
          { n: 18, text: "So God led the people around by the way of the wilderness toward the Red Sea. And the Israelites left the land of Egypt arrayed for battle." },
          { n: 19, text: "Moses took the bones of Joseph with him because Joseph had made the sons of Israel swear a solemn oath when he said, “God will surely attend to you, and then you must carry my bones with you from this place.”" },
          { n: 20, text: "They set out from Succoth and camped at Etham on the edge of the wilderness." },
          { n: 21, text: "And the LORD went before them in a pillar of cloud to guide their way by day, and in a pillar of fire to give them light by night, so that they could travel by day or night." },
          { n: 22, text: "Neither the pillar of cloud by day nor the pillar of fire by night left its place before the people." },
        ],
        ground: {
          kind: "historical",
          text: "Before the Israelites reach the sea, God settles two matters. He claims every firstborn as his own, which turns the last plague into a permanent obligation, and he ties the Feast of Unleavened Bread to the month in which they left Egypt. Then he chooses their route. Instead of the short road along the coast, which ran past a line of Egyptian forts, he leads them the long way round. He goes ahead of them as a pillar of cloud by day and a pillar of fire by night.",
          src: "Propp · Sarna",
        },
      },
    ],
  },
  {
    id: "ex-14",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 14",
    chapterIndex: 14,
    title: "The sea",
    unitLabel: "Scene",
    thread: "The Israelites find themselves with the sea in front of them, Pharaoh’s army behind them, and no road out. At that moment they do not want freedom. They want to go back to Egypt.",
    closeEnd: "They walk into the sea on dry ground, and by the end of the chapter the people believe, at least for now.",
    passages: [
      {
        ref: "Exodus 14",
        kind: "scene",
        form: "prose",
        title: "The sea",
        verses: [
          { n: 1, text: "Then the LORD said to Moses," },
          { n: 2, text: "“Tell the Israelites to turn back and encamp before Pi-hahiroth, between Migdol and the sea. You are to encamp by the sea, directly opposite Baal-zephon." },
          { n: 3, text: "For Pharaoh will say of the Israelites, ‘They are wandering the land in confusion; the wilderness has boxed them in.’" },
          { n: 4, text: "And I will harden Pharaoh’s heart so that he will pursue them. But I will gain honor by means of Pharaoh and all his army, and the Egyptians will know that I am the LORD.” So this is what the Israelites did." },
          { n: 5, text: "When the king of Egypt was told that the people had fled, Pharaoh and his officials changed their minds about them and said, “What have we done? We have released Israel from serving us.”" },
          { n: 6, text: "So Pharaoh prepared his chariot and took his army with him." },
          { n: 7, text: "He took 600 of the best chariots, and all the other chariots of Egypt, with officers over all of them." },
          { n: 8, text: "And the LORD hardened the heart of Pharaoh king of Egypt so that he pursued the Israelites, who were marching out defiantly." },
          { n: 9, text: "The Egyptians—all Pharaoh’s horses and chariots, horsemen and troops—pursued the Israelites and overtook them as they camped by the sea near Pi-hahiroth, opposite Baal-zephon." },
          { n: 10, text: "As Pharaoh approached, the Israelites looked up and saw the Egyptians marching after them, and they were terrified and cried out to the LORD." },
          { n: 11, text: "They said to Moses, “Was it because there were no graves in Egypt that you brought us into the wilderness to die? What have you done to us by bringing us out of Egypt?" },
          { n: 12, text: "Did we not say to you in Egypt, ‘Leave us alone so that we may serve the Egyptians’? For it would have been better for us to serve the Egyptians than to die in the wilderness.”" },
          { n: 13, text: "But Moses told the people, “Do not be afraid. Stand firm and you will see the LORD’s salvation, which He will accomplish for you today; for the Egyptians you see today, you will never see again." },
          { n: 14, text: "The LORD will fight for you; you need only to be still.”" },
          { n: 15, text: "Then the LORD said to Moses, “Why are you crying out to Me? Tell the Israelites to go forward." },
          { n: 16, text: "And as for you, lift up your staff and stretch out your hand over the sea and divide it, so that the Israelites can go through the sea on dry ground." },
          { n: 17, text: "And I will harden the hearts of the Egyptians so that they will go in after them. Then I will gain honor by means of Pharaoh and all his army and chariots and horsemen." },
          { n: 18, text: "The Egyptians will know that I am the LORD when I am honored through Pharaoh, his chariots, and his horsemen.”" },
          { n: 19, text: "And the angel of God, who had gone before the camp of Israel, withdrew and went behind them. The pillar of cloud also moved from before them and stood behind them," },
          { n: 20, text: "so that it came between the camps of Egypt and Israel. The cloud was there in the darkness, but it lit up the night. So all night long neither camp went near the other." },
          { n: 21, text: "Then Moses stretched out his hand over the sea, and all that night the LORD drove back the sea with a strong east wind that turned it into dry land. So the waters were divided," },
          { n: 22, text: "and the Israelites went through the sea on dry ground, with walls of water on their right and on their left." },
          { n: 23, text: "And the Egyptians chased after them—all Pharaoh’s horses, chariots, and horsemen—and followed them into the sea." },
          { n: 24, text: "At morning watch, however, the LORD looked down on the army of the Egyptians from the pillar of fire and cloud, and He threw their camp into confusion." },
          { n: 25, text: "He caused their chariot wheels to wobble, so that they had difficulty driving. “Let us flee from the Israelites,” said the Egyptians, “for the LORD is fighting for them against Egypt!”" },
          { n: 26, text: "Then the LORD said to Moses, “Stretch out your hand over the sea, so that the waters may flow back over the Egyptians and their chariots and horsemen.”" },
          { n: 27, text: "So Moses stretched out his hand over the sea, and at daybreak the sea returned to its normal state. As the Egyptians were retreating, the LORD swept them into the sea." },
          { n: 28, text: "The waters flowed back and covered the chariots and horsemen—the entire army of Pharaoh that had chased the Israelites into the sea. Not one of them survived." },
          { n: 29, text: "But the Israelites had walked through the sea on dry ground, with walls of water on their right and on their left." },
          { n: 30, text: "That day the LORD saved Israel from the hand of the Egyptians, and Israel saw the Egyptians dead on the shore." },
          { n: 31, text: "When Israel saw the great power that the LORD had exercised over the Egyptians, the people feared the LORD and believed in Him and in His servant Moses." },
        ],
        ground: {
          kind: "historical",
          text: "Scholars find two accounts woven together in this chapter, rather than blended into one. In one account, God drives the sea back with a strong east wind that blows all night, and Israel walks across on dry ground. In the other, Moses stretches out his hand and the waters stand up like walls on either side. The editors kept both and removed neither. The Hebrew name for the sea is yam suph, which most scholars translate as “sea of reeds.” The name “Red Sea” comes from the ancient Greek translation.",
          src: "Friedman · Propp · Alter",
        },
        meaning:
          "The first thing the freed people do is ask to go back. “Were there no graves in Egypt?” they ask Moses, and they are not so much cowardly as calculating: they weigh a misery they know against drowning in a sea they do not. Moses tells them to stand still and watch what God will do. One line later God tells Moses the opposite, asking why he is crying out and telling him to get the people moving. The writer keeps both instructions side by side and makes no attempt to <b>reconcile</b> them.",
        lenses: {
          theo: "The editors kept two tellings of the crossing, one in which a wind blows all night and one in which the water stands up like walls. By keeping both, they showed how Israel held its memory of this event. They did not need a single version to believe it was true.",
        },
        addr: {
          mode: "names",
          text: "Most of us know what it is to stand where going back seems sensible, going forward seems impossible, and standing still is unbearable. The writer puts the Israelites in exactly that place, and he does not pretend their fear was unreasonable.",
        },
        ask: "What are you facing where the old misery is starting to look preferable to the unknown one?",
      },
    ],
  },
  {
    id: "ex-15a",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 15:1–21",
    chapterIndex: 15,
    title: "The Song at the sea",
    thread: "Once the Israelites reach the far shore, they do not explain what happened to them. They sing about it. And in their song they look beyond the sea to a mountain and a sanctuary that they have not yet reached.",
    closeEnd: "The song ends where it may have begun, with Miriam singing and playing her tambourine.",
    passages: [
      {
        ref: "15:1–21",
        kind: "poem",
        form: "poetry",
        title: "The Song at the sea",
        inTextTurn: 13,
        verses: [
          { n: 1, text: "Then Moses and the Israelites sang this song to the LORD:\n“I will sing to the LORD,\nfor He is highly exalted.\nThe horse and rider He has thrown\ninto the sea." },
          { n: 2, text: "The LORD is my strength and my song,\nand He has become my salvation.\nHe is my God, and I will praise Him,\nmy father’s God, and I will exalt Him." },
          { n: 3, text: "The LORD is a warrior,\nthe LORD is His name." },
          { n: 4, text: "Pharaoh’s chariots and army He has cast into the sea;\nthe finest of his officers are drowned in the Red Sea." },
          { n: 5, text: "The depths have covered them;\nthey sank there like a stone." },
          { n: 6, text: "Your right hand, O LORD, is majestic in power;\nYour right hand, O LORD, has shattered the enemy." },
          { n: 7, text: "You overthrew Your adversaries by Your great majesty.\nYou unleashed Your burning wrath;\nit consumed them like stubble." },
          { n: 8, text: "At the blast of Your nostrils the waters piled up;\nlike a wall the currents stood firm;\nthe depths congealed in the heart of the sea." },
          { n: 9, text: "The enemy declared, ‘I will pursue, I will overtake.\nI will divide the spoils; I will gorge myself on them.\nI will draw my sword; my hand will destroy them.’" },
          { n: 10, text: "But You blew with Your breath,\nand the sea covered them.\nThey sank like lead in the mighty waters." },
          { n: 11, text: "Who among the gods is like You, O LORD?\nWho is like You—majestic in holiness,\nrevered with praises, performing wonders?" },
          { n: 12, text: "You stretched out Your right hand,\nand the earth swallowed them up." },
          { n: 13, text: "With loving devotion You will lead the people You have redeemed;\nwith Your strength You will guide them to Your holy dwelling." },
          { n: 14, text: "The nations will hear and tremble;\nanguish will grip the dwellers of Philistia." },
          { n: 15, text: "Then the chiefs of Edom will be dismayed;\ntrembling will seize the leaders of Moab;\nthose who dwell in Canaan will melt away," },
          { n: 16, text: "and terror and dread will fall on them.\nBy the power of Your arm they will be as still as a stone\nuntil Your people pass by, O LORD, until the people You have bought pass by." },
          { n: 17, text: "You will bring them in and plant them\non the mountain of Your inheritance—the place, O LORD, You have prepared for Your dwelling,\nthe sanctuary, O Lord, Your hands have established." },
          { n: 18, text: "The LORD will reign forever and ever!”" },
          { n: 19, text: "For when Pharaoh’s horses, chariots, and horsemen went into the sea, the LORD brought the waters of the sea back over them. But the Israelites walked through the sea on dry ground." },
          { n: 20, text: "Then Miriam the prophetess, Aaron’s sister, took a tambourine in her hand, and all the women followed her with tambourines and dancing." },
          { n: 21, text: "And Miriam sang back to them: “Sing to the LORD,\nfor He is highly exalted;\nthe horse and rider He has thrown into the sea.”" },
        ],
        ground: {
          kind: "genre",
          text: "Most scholars think the Song of the Sea is older than the prose story around it. It is written in an archaic Hebrew that later writers did not update, and it is among the oldest long poems in the Bible. Miriam’s short song at the end, which she sings with a tambourine, may be the original core from which the longer song grew, and later tradition gave the longer version to Moses. Here we set the song out as poetry, breaking its lines where the Hebrew lines break.",
          src: "Propp · Alter · Meyers",
        },
        tensions: [
          {
            claim:
              "The rescued Israelites sing, and they sing about the drowning of the men who chased them.",
            counter:
              "The rabbis told a story in which the angels wanted to sing along, and God stopped them, saying that the work of his hands was drowning in the sea and they wanted to sing. In this story God does not silence Israel, since they were the ones whose lives were in danger. He refuses the same song only to those watching from dry land.",
            where: "Talmud, Sanhedrin 39b · Ezekiel 18:23",
          },
        ],
        meaning:
          "The Israelites do two things in their song, and the second is easy to miss. They look back at the sea, and then at verse 13 they turn and look forward, to God leading his people and planting them on a mountain they have not yet reached. That is why Israel kept singing this song for centuries. It is not simply a victory report. In it, the people are learning to say that the God who rescued them at the sea will also bring them <b>home</b>.",
        lenses: {
          theo: "The oldest part of Exodus is a song, not a law or an argument. The first thing Israel kept and passed down was not an explanation of their rescue but the song they sang about it.",
        },
        addr: {
          mode: "pray",
          text: "The writer gives you this song to say, not just to learn about. If you have come through something hard, you can make the song your own, including the part where it turns from what God has done to what still lies ahead.",
        },
        prayer: {
          mode: "pray",
          text: "You brought me through the thing I could not see a way past. Lead me now toward what I still cannot see, with the same hand.",
        },
      },
    ],
  },
  {
    id: "ex-15b",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 15:22–27",
    chapterIndex: 15,
    movementId: "road-to-the-mountain",
    title: "Bitter water",
    unitLabel: "Scene",
    thread: "Only three days after the people sang on the far shore of the sea, they find that the water in the desert is too bitter to drink. The writer places their song of praise and their complaint just six verses apart in the same chapter, and he does not treat the two as a contradiction.",
    closeEnd: "Afterward the people come to Elim, where there are twelve springs and seventy palm trees. The writer mentions the place without comment, and the people move on.",
    passages: [
      {
        ref: "15:22–27",
        kind: "scene",
        form: "prose",
        title: "Marah, and Elim",
        verses: [
          { n: 22, text: "Then Moses led Israel from the Red Sea, and they went out into the Desert of Shur. For three days they walked in the desert without finding water." },
          { n: 23, text: "And when they came to Marah, they could not drink the water there because it was bitter. (That is why it was named Marah.)" },
          { n: 24, text: "So the people grumbled against Moses, saying, “What are we to drink?”" },
          { n: 25, text: "And Moses cried out to the LORD, and the LORD showed him a log. And when he cast it into the waters, they were sweetened. There the LORD made for them a statute and an ordinance, and there He tested them," },
          { n: 26, text: "saying, “If you will listen carefully to the voice of the LORD your God, and do what is right in His eyes, and pay attention to His commands, and keep all His statutes, then I will not bring on you any of the diseases I inflicted on the Egyptians. For I am the LORD who heals you.”" },
          { n: 27, text: "Then they came to Elim, where there were twelve springs of water and seventy palm trees, and they camped there by the waters." },
        ],
        ground: {
          kind: "historical",
          text: "Three days into the wilderness of Shur, the people have found no water, and the first water they do find is too bitter to drink. The place is called Marah, which means “bitter,” and in Hebrew the same word can describe both the water and the mood of the people. At God’s direction Moses throws a piece of wood into the water, and it becomes sweet. Then, before the people reach Sinai and without any ceremony, God gives them a statute, and it is about listening to his voice.",
          src: "Propp · Sarna",
        },
        meaning: "Only three days separate the people’s song from their complaint, and the writer sets the two side by side without apology. The people are the same, and so is God. The only change is that the people face a new problem, and the memory of their last rescue does not carry them through it. Afterward they reach the twelve springs at Elim, which the writer records in a single verse and does not dwell on, much as most of us pass quickly over the easy stretches of our own lives.",
        lenses: {
          theo: "God is not testing whether the people can endure thirst. He is testing whether they will still trust the God who brought them through the sea when the next thing goes wrong, and that is a different and harder question.",
        },
        addr: {
          mode: "names",
          text: "Most of us know how short the interval can be between one relief and the next need. For the Israelites it was three days, and for us it is often about the same.",
        },
        ask: "What hard thing have you come through recently, and how soon afterward did you find yourself in need again?",
      },
    ],
  },
  {
    id: "ex-16",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 16 (selected)",
    chapterIndex: 16,
    title: "Bread for the day",
    unitLabel: "Scene",
    thread: "When the people grow hungry in the desert, they begin to remember Egypt as a place where they ate their fill. God answers them with bread that cannot be stored, and he teaches them about the seventh day through the way that bread behaves, before he ever gives them a command about it.",
    closeEnd: "The Israelites ate this bread for forty years, until they reached the edge of a land they could farm.",
    passages: [
      {
        label: "One",
        ref: "16:2–5",
        kind: "scene",
        form: "prose",
        title: "The pots of meat",
        verses: [
          { n: 2, text: "And there in the desert the whole congregation of Israel grumbled against Moses and Aaron." },
          { n: 3, text: "“If only we had died by the LORD’s hand in the land of Egypt!” they said. “There we sat by pots of meat and ate our fill of bread, but you have brought us into this desert to starve this whole assembly to death!”" },
          { n: 4, text: "Then the LORD said to Moses, “Behold, I will rain down bread from heaven for you. Each day the people are to go out and gather enough for that day. In this way I will test whether or not they will follow My instructions." },
          { n: 5, text: "Then on the sixth day, when they prepare what they bring in, it will be twice as much as they gather on the other days.”" },
        ],
        ground: {
          kind: "historical",
          text: "A month after leaving Egypt, the people make a very specific complaint: they wish they had died there, where they sat beside pots of meat and ate all the bread they wanted. Slaves in Egypt did not sit beside pots of meat. God answers by sending bread from the sky, but he attaches a condition, that each person gather only one day’s portion each day, and he says plainly that he is using the condition to test them.",
          src: "Propp · Fretheim",
        },
        meaning: "The people’s false memory is the most revealing part of the scene. Their hunger has led them to remember Egypt as a place worth going back to, and no one in the crowd corrects them. God does not correct them either. Instead of answering a lie told out of need with an argument, he answers it with food, and with the food he gives the one rule that speaks to the fear beneath their complaint: there will be <b>enough</b>, every day, and no more than that.",
        addr: {
          mode: "names",
          text: "When our present is hard, we easily begin to remember a bad past as bearable, and we usually make that adjustment without noticing we have done it.",
        },
        ask: "What are you remembering as better than it was, because your life now is hard?",
      },
      {
        label: "Two",
        ref: "16:11–21",
        kind: "scene",
        form: "prose",
        title: "What is it",
        verses: [
          { n: 11, text: "Then the LORD said to Moses," },
          { n: 12, text: "“I have heard the grumbling of the Israelites. Tell them, ‘At twilight you will eat meat, and in the morning you will be filled with bread. Then you will know that I am the LORD your God.’”" },
          { n: 13, text: "That evening quail came and covered the camp, and in the morning there was a layer of dew around the camp." },
          { n: 14, text: "When the layer of dew had evaporated, there were thin flakes on the desert floor, as fine as frost on the ground." },
          { n: 15, text: "When the Israelites saw it, they asked one another, “What is it?” For they did not know what it was. So Moses told them, “It is the bread that the LORD has given you to eat." },
          { n: 16, text: "This is what the LORD has commanded: ‘Each one is to gather as much as he needs. You may take an omer for each person in your tent.’”" },
          { n: 17, text: "So the Israelites did this. Some gathered more, and some less." },
          { n: 18, text: "When they measured it by the omer, he who gathered much had no excess, and he who gathered little had no shortfall. Each one gathered as much as he needed to eat." },
          { n: 19, text: "Then Moses said to them, “No one may keep any of it until morning.”" },
          { n: 20, text: "But they did not listen to Moses; some people left part of it until morning, and it became infested with maggots and began to smell. So Moses was angry with them." },
          { n: 21, text: "Every morning each one gathered as much as was needed, and when the sun grew hot, it melted away." },
        ],
        ground: {
          kind: "historical",
          text: "In the evening quail come and cover the camp, and in the morning the people find a fine, flaky substance on the ground. They ask one another, “Man hu?” which means “What is it?” and their question becomes its name, manna. It melts in the sun and spoils if anyone keeps it overnight. People have tried to identify it with a desert plant or with the sweet droplets that insects leave on tamarisk trees, but anyone who does so must also explain why, according to the book of Joshua, it stopped as soon as the people could eat the produce of the land.",
          src: "Sarna · Propp",
        },
        meaning: "Everyone gathered what they needed, and when they measured it, the one who had gathered much had nothing left over, and the one who had gathered little had no shortage. Then Moses gave them a rule: no one was to keep any until morning. Some kept it anyway, and by morning it was full of worms. God arranged life in the wilderness so that hoarding was not so much forbidden as impossible. These people had spent their lives working to fill someone else’s storehouses, and now God was teaching them to live without one.",
        lenses: {
          arch: "No one can store the manna up for later; each person has to receive it fresh each day. Many Christian readers hear an echo of this story when Jesus teaches his followers to ask God for their “daily bread,” and in John’s Gospel Jesus speaks of himself as bread from heaven, setting himself beside the manna that fed Israel in the wilderness.",
        },
        addr: {
          mode: "claims",
          text: "Some of what we hold on to was given to us for a single day, and we have kept it for a year, and keeping it has changed us. The writer is not against provision. He is warning against the storehouse, the habit of piling things up so that we never have to trust anyone.",
        },
        ask: "What are you storing up that was given to you only for today?",
      },
      {
        label: "Three",
        ref: "16:22–31",
        kind: "scene",
        form: "prose",
        title: "The seventh day",
        verses: [
          { n: 22, text: "On the sixth day, they gathered twice as much food—two omers per person—and all the leaders of the congregation came and reported this to Moses." },
          { n: 23, text: "He told them, “This is what the LORD has said: ‘Tomorrow is to be a day of complete rest, a holy Sabbath to the LORD. So bake what you want to bake, and boil what you want to boil. Then set aside whatever remains and keep it until morning.’”" },
          { n: 26, text: "For six days you may gather, but on the seventh day, the Sabbath, it will not be there.”" },
          { n: 27, text: "Yet on the seventh day some of the people went out to gather, but they did not find anything." },
          { n: 28, text: "Then the LORD said to Moses, “How long will you refuse to keep My commandments and instructions?" },
          { n: 29, text: "Understand that the LORD has given you the Sabbath; that is why on the sixth day He will give you bread for two days. On the seventh day, everyone must stay where he is; no one may leave his place.”" },
          { n: 30, text: "So the people rested on the seventh day." },
          { n: 31, text: "Now the house of Israel called the bread manna. It was white like coriander seed and tasted like wafers made with honey." },
        ],
        ground: {
          kind: "historical",
          text: "On the sixth day twice as much manna falls, and this time it keeps overnight. Some people go out on the seventh day anyway and find nothing. This is the first time the sabbath appears in Israel’s story, before Sinai and before any commandment, and God introduces it through the way the bread behaves rather than as a rule he hands down.",
          src: "Meyers · Fretheim",
        },
        meaning: "God teaches the people to rest before he commands them to, and he teaches them through their food. The manna keeps on one day and spoils on every other, so the people’s week takes on a shape whether they like it or not. These people had known time only as a quota of work that never stopped. For them, a day when gathering was pointless was not a restriction. It was the first proof that no one <b>owned</b> them anymore.",
        addr: {
          mode: "names",
          text: "Most of us have gone out to gather on our own seventh day, found nothing worth the effort, and then gone out again the following week just to check.",
        },
        ask: "What would have to be true for you to stop for a day without calculating the cost?",
      },
    ],
  },
  {
    id: "ex-17",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 17",
    chapterIndex: 17,
    title: "The rock, and Amalek",
    unitLabel: "Scene",
    thread: "The people are thirsty again, and this time their quarrel with Moses hides a deeper question: is the LORD among us or not? Then Israel fights its first battle, and the people win it while Moses stands on a hill, unable to keep his own arms raised without help.",
    closeEnd: "At the end of the chapter God vows war against Amalek in every generation, and later Israelites carry that vow into some of the most troubling stories in the Bible, such as Saul’s war against Amalek in 1 Samuel 15.",
    passages: [
      {
        label: "One",
        ref: "17:1–7",
        kind: "scene",
        form: "prose",
        title: "Massah and Meribah",
        verses: [
          { n: 1, text: "Then the whole congregation of Israel left the Desert of Sin, moving from place to place as the LORD commanded. They camped at Rephidim, but there was no water for the people to drink." },
          { n: 2, text: "So the people contended with Moses, “Give us water to drink.” “Why do you contend with me?” Moses replied. “Why do you test the LORD?”" },
          { n: 3, text: "But the people thirsted for water there, and they grumbled against Moses: “Why have you brought us out of Egypt—to make us and our children and livestock die of thirst?”" },
          { n: 4, text: "Then Moses cried out to the LORD, “What should I do with these people? A little more and they will stone me!”" },
          { n: 5, text: "And the LORD said to Moses, “Walk on ahead of the people and take some of the elders of Israel with you. Take along in your hand the staff with which you struck the Nile, and go." },
          { n: 6, text: "Behold, I will stand there before you by the rock at Horeb. And when you strike the rock, water will come out of it for the people to drink.” So Moses did this in the sight of the elders of Israel." },
          { n: 7, text: "He named the place Massah and Meribah because the Israelites quarreled, and because they tested the LORD, saying, “Is the LORD among us or not?”" },
        ],
        ground: {
          kind: "historical",
          text: "When the people camp at Rephidim, there is no water. They quarrel with Moses, and he tells them that they are testing God; by then he fears they are close to stoning him. God tells him to strike the rock at Horeb, and water comes out. Moses gives the place two names, Massah and Meribah, meaning “testing” and “quarreling,” and later biblical writers, in Deuteronomy and the Psalms, point back to it as the standing example of how not to treat God.",
          src: "Propp · Childs",
        },
        meaning: "The writer saves for last the sentence on which the whole episode turns: the people were testing God by asking, “Is the LORD among us or not?” That was the real question behind their complaint about water, and they will ask it again, in different forms, throughout their forty years in the wilderness. God does not answer them with an argument. He answers them with water, and because water cannot settle the matter for good, they soon ask again.",
        lenses: {
          theo: "God takes the people’s complaint seriously and answers it, and yet Moses also gives the place a name that will stand as a warning. Both things are true at once. The writers of Scripture are willing to show God meeting a demand and also to remember that it was a demand.",
        },
        addr: {
          mode: "names",
          text: "Beneath many of our complaints about our circumstances lies a shorter question, whether anyone is really there, and we seldom ask it in those words.",
        },
        ask: "What are you angry about that is really the question of whether God is here?",
      },
      {
        label: "Two",
        ref: "17:8–16",
        kind: "scene",
        form: "prose",
        title: "Held up",
        verses: [
          { n: 8, text: "After this, the Amalekites came and attacked the Israelites at Rephidim." },
          { n: 9, text: "So Moses said to Joshua, “Choose some of our men and go out to fight the Amalekites. Tomorrow I will stand on the hilltop with the staff of God in my hand.”" },
          { n: 10, text: "Joshua did as Moses had instructed him and fought against the Amalekites, while Moses, Aaron, and Hur went up to the top of the hill." },
          { n: 11, text: "As long as Moses held up his hands, Israel prevailed; but when he lowered them, Amalek prevailed." },
          { n: 12, text: "When Moses’ hands grew heavy, they took a stone and put it under him, and he sat on it. Then Aaron and Hur held his hands up, one on each side, so that his hands remained steady until the sun went down." },
          { n: 13, text: "So Joshua overwhelmed Amalek and his army with the sword." },
          { n: 14, text: "Then the LORD said to Moses, “Write this on a scroll as a reminder and recite it to Joshua, because I will utterly blot out the memory of Amalek from under heaven.”" },
          { n: 15, text: "And Moses built an altar and named it The LORD Is My Banner." },
          { n: 16, text: "“Indeed,” he said, “a hand was lifted up toward the throne of the LORD. The LORD will war against Amalek from generation to generation.”" },
        ],
        ground: {
          kind: "historical",
          text: "The Amalekites, a desert people, attack Israel, and Israel fights its first battle while Moses stands on a hill holding up the staff of God. Whenever he holds up his hands, Israel prevails, and whenever he lowers them, Amalek prevails. When his arms grow tired, Aaron and Hur set a stone under him to sit on and hold up his hands, one on each side, until the sun goes down. At the end of the chapter God vows to wage war with Amalek from generation to generation.",
          src: "Propp · Fretheim",
        },
        misreading: {
          named: "Some readers treat Moses’ raised hands as a technique: if a person holds the right posture, God is obliged to act.",
          why: "The writer insists that Moses cannot do it alone. His hands grow heavy, he needs a stone to sit on and two men to hold his arms, and the battle lasts until sunset. If we read the scene as a technique, it is superstition, and it does not even work, since it fails every time the man performing it gets tired. If we read it as the writer tells it, it is a picture of a leader who is plainly not the source of the victory, held in place by other people.",
        },
        meaning: "The victory is real, but the man at the center of it has to be propped up by his brother Aaron and by Hur, a man who appears only briefly in the story. The writer tells of Israel’s first military success in such a way that no one watching could mistake where the strength came from, least of all Moses, who spent the afternoon being <b>held up</b> by others.",
        addr: {
          mode: "names",
          text: "Most of us have had to keep something going for longer than we had strength for, and whether we managed it depended on who stood beside us.",
        },
        ask: "Who is currently holding your arms up, and have you told them?",
      },
    ],
  },
  {
    id: "ex-18",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 18",
    chapterIndex: 18,
    title: "Jethro",
    unitLabel: "Scene",
    thread: "Jethro, a priest from the foreign land of Midian and Moses’ father-in-law, comes to visit. He praises Israel’s God before Israel has received any law, and then he tells Moses that the way he is working is not good.",
    closeEnd: "Moses listens to Jethro, does everything he advises, and then sends him home to his own country.",
    passages: [
      {
        label: "One",
        ref: "18:1–12",
        kind: "scene",
        form: "prose",
        title: "The priest of Midian",
        verses: [
          { n: 1, text: "Now Moses’ father-in-law Jethro, the priest of Midian, heard about all that God had done for Moses and His people Israel, and how the LORD had brought Israel out of Egypt." },
          { n: 2, text: "After Moses had sent back his wife Zipporah, his father-in-law Jethro had received her," },
          { n: 3, text: "along with her two sons. One son was named Gershom, for Moses had said, “I have been a foreigner in a foreign land.”" },
          { n: 4, text: "The other son was named Eliezer, for Moses had said, “The God of my father was my helper and delivered me from the sword of Pharaoh.”" },
          { n: 5, text: "Moses’ father-in-law Jethro, along with Moses’ wife and sons, came to him in the desert, where he was encamped at the mountain of God." },
          { n: 6, text: "He sent word to Moses, “I, your father-in-law Jethro, am coming to you with your wife and her two sons.”" },
          { n: 7, text: "So Moses went out to meet his father-in-law and bowed down and kissed him. They greeted each other and went into the tent." },
          { n: 8, text: "Then Moses recounted to his father-in-law all that the LORD had done to Pharaoh and the Egyptians for Israel’s sake, all the hardships they had encountered along the way, and how the LORD had delivered them." },
          { n: 9, text: "And Jethro rejoiced over all the good things the LORD had done for Israel, whom He had rescued from the hand of the Egyptians." },
          { n: 10, text: "Jethro declared, “Blessed be the LORD, who has delivered you from the hand of the Egyptians and of Pharaoh, and who has delivered the people from the hand of the Egyptians." },
          { n: 11, text: "Now I know that the LORD is greater than all other gods, for He did this when they treated Israel with arrogance.”" },
          { n: 12, text: "Then Moses’ father-in-law Jethro brought a burnt offering and sacrifices to God, and Aaron came with all the elders of Israel to eat bread with Moses’ father-in-law in the presence of God." },
        ],
        ground: {
          kind: "historical",
          text: "Jethro, the priest of Midian, whose daughter Zipporah Moses married, brings Moses’ wife and two sons back to him at the mountain of God. He listens to Moses tell the whole story of the escape from Egypt, says that now he knows the LORD is greater than all gods, and offers a burnt offering. Then Aaron and all the elders of Israel come and eat bread with him in the presence of God.",
          src: "Propp · Meyers · Fretheim",
        },
        meaning: "In Exodus, the first person to say “Blessed be the LORD” and offer a sacrifice to Israel’s God is not an Israelite. He is a Midianite priest, a man who serves in another religion, and Israel’s elders sit down and eat with him. All of this happens before Sinai, before the covenant, and before God gives a single law. The writer places the scene here and adds no qualification at all.",
        lenses: {
          theo: "Whatever the covenant at Sinai will come to mean, God makes it only after a foreigner has already recognized him and been welcomed at Israel’s table. The writer seems to have placed the scene here deliberately, so that we meet this foreigner before we meet the law.",
        },
        addr: {
          mode: "names",
          text: "The recognition we hoped for from inside our own circle may well come first from someone outside it, someone who owes us nothing.",
        },
        ask: "Who outside your own people has seen something true about your life that the insiders missed?",
      },
      {
        label: "Two",
        ref: "18:13–27",
        kind: "scene",
        form: "prose",
        title: "What you are doing is not good",
        verses: [
          { n: 13, text: "The next day Moses took his seat to judge the people, and they stood around him from morning until evening." },
          { n: 14, text: "When his father-in-law saw all that Moses was doing for the people, he asked, “What is this that you are doing for the people? Why do you sit alone as judge, with all the people standing around you from morning till evening?”" },
          { n: 15, text: "“Because the people come to me to inquire of God,” Moses replied." },
          { n: 16, text: "“Whenever they have a dispute, it is brought to me to judge between one man and another, and I make known to them the statutes and laws of God.”" },
          { n: 17, text: "But Moses’ father-in-law said to him, “What you are doing is not good." },
          { n: 18, text: "Surely you and these people with you will wear yourselves out, because the task is too heavy for you. You cannot handle it alone." },
          { n: 19, text: "Now listen to me; I will give you some advice, and may God be with you. You must be the people’s representative before God and bring their causes to Him." },
          { n: 20, text: "Teach them the statutes and laws, and show them the way to live and the work they must do." },
          { n: 21, text: "Furthermore, select capable men from among the people—God-fearing, trustworthy men who are averse to dishonest gain. Appoint them over the people as leaders of thousands, of hundreds, of fifties, and of tens." },
          { n: 22, text: "Have these men judge the people at all times. Then they can bring you any major issue, but all minor cases they can judge on their own, so that your load may be lightened as they share it with you." },
          { n: 23, text: "If you follow this advice and God so directs you, then you will be able to endure, and all these people can go home in peace.”" },
          { n: 24, text: "Moses listened to his father-in-law and did everything he said." },
          { n: 25, text: "So Moses chose capable men from all Israel and made them heads over the people as leaders of thousands, of hundreds, of fifties, and of tens." },
          { n: 26, text: "And they judged the people at all times; they would bring the difficult cases to Moses, but any minor issue they would judge themselves." },
          { n: 27, text: "Then Moses sent his father-in-law on his way, and Jethro returned to his own land." },
        ],
        ground: {
          kind: "historical",
          text: "Jethro watches Moses sit as judge for the people from morning until evening, and he tells him plainly that what he is doing is not good, and that he will wear himself out along with everyone waiting in line. He proposes a structure: capable men who fear God and hate bribes should be appointed over groups of thousands, hundreds, fifties, and tens, and only the hard cases should come to Moses. Moses listens and does everything Jethro says.",
          src: "Propp · Meyers",
        },
        meaning: "The correction does not come from God, and it does not come from an Israelite. It comes from a foreigner who has watched Moses for a single day, and the writer records, without embarrassment, that Moses simply took his advice. The qualities Jethro asks for in the new judges are worth noticing: they must be trustworthy, fear God, and refuse bribes, so he looks first for character rather than expertise. The writer also lets us see something about Moses himself. The man who spoke with God at the burning bush could not see the flaw in his own working day until a visitor <b>named</b> it.",
        addr: {
          mode: "names",
          text: "There is probably something about the way we work that an outsider could name in a day, though we have not seen it in years, because we are too close to it.",
        },
        ask: "Who has told you plainly that what you are doing is not sustainable, and what did you do with it?",
      },
    ],
  },
  {
    id: "ex-19",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 19",
    chapterIndex: 19,
    title: "Fire on the mountain",
    unitLabel: "Scene",
    thread: "At Sinai God offers the people a covenant, and they accept it before they have heard what it asks of them. Then Moses sets a boundary around the mountain, and God comes down on it in fire and smoke, with the blast of a trumpet that grows louder and louder.",
    closeEnd: "God keeps the people back and calls Moses up the mountain. From this point on, God gives everything to the people through Moses.",
    passages: [
      {
        label: "One",
        ref: "19:1–8",
        kind: "scene",
        form: "prose",
        title: "We will do everything",
        verses: [
          { n: 1, text: "In the third month, on the same day of the month that the Israelites had left the land of Egypt, they came to the Wilderness of Sinai." },
          { n: 2, text: "After they had set out from Rephidim, they entered the Wilderness of Sinai, and Israel camped there in front of the mountain." },
          { n: 3, text: "Then Moses went up to God, and the LORD called to him from the mountain, “This is what you are to tell the house of Jacob and explain to the sons of Israel:" },
          { n: 4, text: "‘You have seen for yourselves what I did to Egypt, and how I carried you on eagles’ wings and brought you to Myself." },
          { n: 5, text: "Now if you will indeed obey My voice and keep My covenant, you will be My treasured possession out of all the nations—for the whole earth is Mine." },
          { n: 6, text: "And unto Me you shall be a kingdom of priests and a holy nation.’ These are the words that you are to speak to the Israelites.”" },
          { n: 7, text: "So Moses went back and summoned the elders of the people and set before them all these words that the LORD had commanded him." },
          { n: 8, text: "And all the people answered together, “We will do everything that the LORD has spoken.” So Moses brought their words back to the LORD." },
        ],
        ground: {
          kind: "historical",
          text: "Three months after leaving Egypt, the people camp in front of the mountain. God’s first words to them are not terms but a reminder: they have seen what he did to Egypt, and how he carried them on eagles’ wings and brought them to himself. Only then does he make his offer. If they keep his covenant, they will be his treasured possession, a kingdom of priests, and a holy nation. He adds that the whole earth is his, so that no one will think his choice of Israel means he cares for one people alone.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "The people answer, “Everything the LORD has spoken we will do,” before they have heard a single commandment. That may be faith or it may be a kind of blindness, and the writer does not tell us which. What he does make clear is the order of events: first God rescues them, then he draws them into a relationship, and only then does he give them terms. Their obedience does not buy their rescue. God rescued them several chapters earlier, while they were still complaining.",
        lenses: {
          theo: "When God calls Israel “a kingdom of priests,” he means the whole people, not a special class within it. Later in Exodus God sets apart Aaron’s family to serve as priests, but here, at the beginning, he calls every Israelite to stand near him and serve him.",
        },
        addr: {
          mode: "names",
          text: "Most of us have said yes to something before we knew what it would ask of us, and we meant it at the time. The writer does not treat the Israelites as foolish for doing so. He shows that this is how most real commitments begin.",
        },
        ask: "What did you agree to before you knew the terms, and would you agree again?",
      },
      {
        label: "Two",
        ref: "19:9–15",
        kind: "scene",
        form: "prose",
        title: "Do not touch the mountain",
        verses: [
          { n: 9, text: "The LORD said to Moses, “Behold, I will come to you in a dense cloud, so that the people will hear when I speak with you, and they will always put their trust in you.” And Moses relayed to the LORD what the people had said." },
          { n: 10, text: "Then the LORD said to Moses, “Go to the people and consecrate them today and tomorrow. They must wash their clothes" },
          { n: 11, text: "and be prepared by the third day, for on the third day the LORD will come down on Mount Sinai in the sight of all the people." },
          { n: 12, text: "And you are to set up a boundary for the people around the mountain and tell them, ‘Be careful not to go up on the mountain or touch its base. Whoever touches the mountain shall surely be put to death." },
          { n: 13, text: "No hand shall touch him, but he shall surely be stoned or shot with arrows—whether man or beast, he must not live.’ Only when the ram’s horn sounds a long blast may they approach the mountain.”" },
          { n: 14, text: "When Moses came down from the mountain to the people, he consecrated them, and they washed their clothes." },
          { n: 15, text: "“Be prepared for the third day,” he said to the people. “Do not draw near to a woman.”" },
        ],
        ground: {
          kind: "historical",
          text: "God gives the people two days to prepare. They are to wash their clothes, make themselves ready, and not go near the mountain or even touch its edge, on pain of death. Moses sets the boundary at God’s instruction, and it applies to everyone, including the priests. Moses also tells the men not to sleep with their wives before the meeting, a rule that belonged to the ritual purity customs of the time; the writer gives no explanation for it.",
          src: "Propp · Meyers",
        },
        meaning:
          "The fence around the mountain is the strangest part of the scene. For eighteen chapters God has been drawing closer to these people, and now he has Moses mark a line around the mountain and attach the penalty of death to crossing it. The writer holds God’s nearness and God’s danger together without resolving them, and he will keep doing so throughout the book. The God who rescues his people is not someone they can approach <b>casually</b>.",
        lenses: {
          arch: "Many ancient religions had holy places that worshipers could enter only after careful preparation, and only on terms set for them. Sinai is the first such place in Israel’s story. Many scholars think that the tabernacle described later in Exodus copies its pattern, with an outer court where the people may come, a holy place for the priests, and an inner room that only one person may enter.",
        },
      },
      {
        label: "Three",
        ref: "19:16–25",
        kind: "scene",
        form: "prose",
        title: "The mountain in smoke",
        verses: [
          { n: 16, text: "On the third day, when morning came, there was thunder and lightning. A thick cloud was upon the mountain, and a very loud blast of the ram’s horn went out, so that all the people in the camp trembled." },
          { n: 17, text: "Then Moses brought the people out of the camp to meet with God, and they stood at the foot of the mountain." },
          { n: 18, text: "Mount Sinai was completely enveloped in smoke, because the LORD had descended on it in fire. And the smoke rose like the smoke of a furnace, and the whole mountain quaked violently." },
          { n: 19, text: "And as the sound of the ram’s horn grew louder and louder, Moses spoke and God answered him in the thunder." },
          { n: 20, text: "The LORD descended to the top of Mount Sinai and called Moses to the summit. So Moses went up," },
          { n: 21, text: "and the LORD said to him, “Go down and warn the people not to break through to see the LORD, lest many of them perish." },
          { n: 22, text: "Even the priests who approach the LORD must consecrate themselves, or the LORD will break out against them.”" },
          { n: 23, text: "But Moses said to the LORD, “The people cannot come up Mount Sinai, for You solemnly warned us, ‘Put a boundary around the mountain and set it apart as holy.’”" },
          { n: 24, text: "And the LORD replied, “Go down and bring Aaron with you. But the priests and the people must not break through to come up to the LORD, or He will break out against them.”" },
          { n: 25, text: "So Moses went down to the people and spoke to them." },
        ],
        ground: {
          kind: "historical",
          text: "On the morning of the third day there is thunder and lightning, a thick cloud on the mountain, and a very loud trumpet blast, and everyone in the camp trembles. The mountain is wrapped in smoke because the LORD has come down on it in fire, it shakes violently, and the trumpet grows louder instead of fading. Then Moses speaks, and God answers him in thunder. At the end of the chapter God sends Moses back down to warn the people once more not to force their way up.",
          src: "Childs · Propp",
        },
        meaning:
          "The writer describes something like a volcano or a great storm, but he is trying to say something that neither picture quite covers. He reaches for a presence that the physical world cannot hold steady: smoke, fire, shaking, and a sound that keeps growing louder. Then, deliberately, he lets the scene fall flat. In the middle of all that noise, God’s message to Moses is simply to go back down and tell the people again to keep their distance. The writer wants us to see that the fire and thunder are not the point. What matters are the <b>words</b> God speaks next.",
        addr: {
          mode: "names",
          text: "We may imagine that meeting God would settle our doubts. The writer suggests that such a meeting would mostly be frightening, and that we would only understand what God said afterward, in plain sentences, once we had stopped shaking.",
        },
        ask: "Do you actually want an encounter, or the reassurance you imagine would follow one?",
      },
    ],
  },
  {
    id: "ex-20",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 20",
    chapterIndex: 20,
    title: "The Ten Words",
    unitLabel: "Scene",
    thread: "God speaks ten sentences, most of them short, out of the fire to a people who have already agreed to keep them. Elsewhere the Hebrew Bible calls them “the ten words” rather than “the ten commandments,” and Jewish tradition still uses that name.",
    closeEnd: "Terrified, the people ask Moses to speak to God for them, and for the rest of the book Moses goes up the mountain and comes back down with God’s words.",
    passages: [
      {
        label: "One",
        ref: "20:1–17",
        kind: "statute-cluster",
        form: "list",
        title: "The ten words",
        statutes: [
          { n: 1, text: "And God spoke all these words:" },
          { n: 2, text: "“I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery." },
          { n: 3, text: "You shall have no other gods before Me." },
          { n: 4, text: "You shall not make for yourself an idol in the form of anything in the heavens above, on the earth below, or in the waters beneath." },
          { n: 5, text: "You shall not bow down to them or worship them; for I, the LORD your God, am a jealous God, visiting the iniquity of the fathers on their children to the third and fourth generations of those who hate Me," },
          { n: 6, text: "but showing loving devotion to a thousand generations of those who love Me and keep My commandments." },
          { n: 7, text: "You shall not take the name of the LORD your God in vain, for the LORD will not leave anyone unpunished who takes His name in vain." },
          { n: 8, text: "Remember the Sabbath day by keeping it holy." },
          { n: 9, text: "Six days you shall labor and do all your work," },
          { n: 10, text: "but the seventh day is a Sabbath to the LORD your God, on which you must not do any work—neither you, nor your son or daughter, nor your manservant or maidservant or livestock, nor the foreigner within your gates." },
          { n: 11, text: "For in six days the LORD made the heavens and the earth and the sea and all that is in them, but on the seventh day He rested. Therefore the LORD blessed the Sabbath day and set it apart as holy." },
          { n: 12, text: "Honor your father and mother, so that your days may be long in the land that the LORD your God is giving you." },
          { n: 13, text: "You shall not murder." },
          { n: 14, text: "You shall not commit adultery." },
          { n: 15, text: "You shall not steal." },
          { n: 16, text: "You shall not bear false witness against your neighbor." },
          { n: 17, text: "You shall not covet your neighbor’s house. You shall not covet your neighbor’s wife, or his manservant or maidservant, or his ox or donkey, or anything that belongs to your neighbor.”" },
        ],
        perItem: {
          3: {
            addr: { mode: "claims", text: "In the Hebrew, “before me” does not mean “instead of me.” It means “in my presence,” which is harder to keep. God is not only asking whether we have replaced him, but what else we have allowed to stand in the room with him." },
          },
          7: {
            addr: { mode: "claims", text: "God forbids swearing by his name to make a lie believable, and acting in his name for our own ends. Casual swearing is the least of what he has in view." },
            note: "In Hebrew God speaks of lifting up or carrying his name for nothing, which is closer to using it emptily than to saying it rudely.",
          },
          8: {
            addr: { mode: "claims", text: "God commands the people to stop work, and he addresses the command to the whole household, including servants, animals, and the foreigner living among them, so that no one rests alone." },
            note: "Here God grounds the sabbath in creation, since he rested on the seventh day. When Moses repeats the commands in Deuteronomy, he gives a different reason: the Israelites were once slaves in Egypt.",
          },
          12: {
            addr: { mode: "claims", text: "God gave this command mainly to adults with aging parents, not to children, and he tied it to the people’s long life in the land." },
          },
          13: {
            note: "The Hebrew verb is ratsach, which Israelites used for murder and manslaughter. They did not ordinarily use it for killing in war or for legal execution, which the laws that follow go on to require for certain crimes.",
          },
          16: {
            note: "God uses the language of the courtroom here. He forbids lying under oath against a neighbor, in a society with no police and no forensic evidence, where a false witness could cost someone their life.",
          },
          17: {
            addr: { mode: "claims", text: "Of all the ten, this is the only command that governs what happens inside a person, where no court could reach." },
            note: "Look at the list in which this command appears: house, wife, servants, ox, and donkey. Here the wife is listed among a man’s possessions, and that was the world in which God gave the command. When Moses repeats it in Deuteronomy, he names the wife first and gives her a separate verb.",
          },
        },
        ground: {
          kind: "historical",
          text: "God begins not with a command but with a reminder of what he has already done: “I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.” The duties he gives follow from the rescue; the people do not earn the rescue by keeping them. The Bible preserves two versions of the ten words, here and in Deuteronomy 5, and they differ, most visibly in the reason given for the sabbath. The editors kept both rather than making them agree.",
          src: "Childs · Propp · Meyers",
        },
        meaning:
          "The order of the ten matters. In one common way of counting, there are four words about God, then one about parents, then five about the person next to you. God also addresses every command to a single person, “you” in the singular, standing within a crowd. He is not yet giving Israel a legal system, which comes in the next three chapters. He is giving a free people a <b>shape</b> for their life: how to treat God, time, family, life, marriage, property, and speech, in that order.",
        lenses: {
          theo: "God rescues first and gives commands second, and the writers of the Bible keep returning to that order. God did not free Israel on condition that they keep these commands. He gave the commands to show them what their freedom was for.",
        },
      },
      {
        label: "Two",
        ref: "20:18–21",
        kind: "scene",
        form: "prose",
        title: "At a distance",
        verses: [
          { n: 18, text: "When all the people witnessed the thunder and lightning, the sounding of the ram’s horn, and the mountain enveloped in smoke, they trembled and stood at a distance." },
          { n: 19, text: "“Speak to us yourself and we will listen,” they said to Moses. “But do not let God speak to us, or we will die.”" },
          { n: 20, text: "“Do not be afraid,” Moses replied. “For God has come to test you, so that the fear of Him may be before you, to keep you from sinning.”" },
          { n: 21, text: "And the people stood at a distance as Moses approached the thick darkness where God was." },
        ],
        ground: {
          kind: "historical",
          text: "The people see the thunder and lightning and the smoking mountain, and they stand far off and beg Moses to speak to them instead, because they fear that if God speaks to them directly, they will die. Moses tells them not to be afraid, and in the same breath tells them that God has come so that the fear of him will keep them from sinning. The two statements are not quite a contradiction.",
          src: "Childs · Fretheim",
        },
        meaning:
          "The people asked for a go-between; God did not force one on them. Having heard ten sentences directly from God, they decided they would rather have his words passed on to them. For the rest of the book, Moses goes up the mountain and comes back down with God’s words, and in this way God answers a <b>request</b> the people made out of terror.",
        addr: {
          mode: "names",
          text: "Most of us have wanted to hear from God at a distance too, through someone else, in a form we could set aside. The people in this scene both want God’s words and dread them, and most of us know that mixture well.",
        },
        ask: "What have you asked to receive secondhand because firsthand felt like too much?",
      },
      {
        label: "Three",
        ref: "20:22–26",
        kind: "statute-cluster",
        form: "list",
        title: "The altar",
        statutes: [
          { n: 22, text: "Then the LORD said to Moses, “This is what you are to tell the Israelites: ‘You have seen for yourselves that I have spoken to you from heaven." },
          { n: 23, text: "You are not to make any gods alongside Me; you are not to make for yourselves gods of silver or gold." },
          { n: 24, text: "You are to make for Me an altar of earth, and sacrifice on it your burnt offerings and peace offerings, your sheep and goats and cattle. In every place where I cause My name to be remembered, I will come to you and bless you." },
          { n: 25, text: "Now if you make an altar of stones for Me, you must not build it with stones shaped by tools; for if you use a chisel on it, you will defile it." },
          { n: 26, text: "And you must not go up to My altar on steps, lest your nakedness be exposed on it.’" },
        ],
        perItem: {
          25: {
            addr: { mode: "none-but", text: "You are not bound by this law, but we include it because of what God says in it: if a builder shapes the altar’s stones with a tool, he profanes them, so the altar has to be something no one has improved." },
          },
          26: {
            addr: { mode: "none-but", text: "You are not bound by this law either, but it is worth noticing rather than skipping. God forbids steps up to the altar so that the priest’s body will not be exposed, which is the kind of plain physical concern that a religion of temples and stairways had to make rules about." },
          },
        },
        ground: {
          kind: "historical",
          text: "The first laws God gives after the ten words are about how to build an altar, and they are strikingly plain. The people are to make it of earth, or of stones that no tool has shaped, and it must have no steps. God promises that wherever he causes his name to be remembered, he will come to his people and bless them. There is no temple here and no fine stonework, nothing a craftsman could take credit for.",
          src: "Propp · Childs",
        },
        meaning:
          "You are not bound by these altar laws, and we include them because of what God refuses in them. Israel’s neighbors built grand temples, often raised high on stepped platforms. God begins by ruling out shaped stone and staircases, so the first building instruction Israel receives limits how much of the altar can be the people’s own <b>achievement</b>.",
      },
    ],
  },
  {
    id: "ex-21",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 21 (selected)",
    chapterIndex: 21,
    title: "Persons, and what they are worth",
    unitLabel: "Scene",
    thread: "Exodus 21 begins the Covenant Code, the body of case law that follows the Ten Commandments. The lawgivers deal with people before they deal with property, and the first person they deal with is a slave. Many readers wish this page were not in the Bible, but it is, and we should read it honestly.",
    closeEnd: "The chapter began by limiting how long anyone could be held as a servant, and it ends with the lawgivers setting a price in silver on a servant’s life.",
    passages: [
      {
        label: "One",
        ref: "21:1–11",
        kind: "statute-cluster",
        form: "list",
        title: "Six years, and the seventh",
        statutes: [
          { n: 1, text: "“These are the ordinances that you are to set before them:" },
          { n: 2, text: "If you buy a Hebrew servant, he is to serve you for six years. But in the seventh year, he shall go free without paying anything." },
          { n: 3, text: "If he arrived alone, he is to leave alone; if he arrived with a wife, she is to leave with him." },
          { n: 4, text: "If his master gives him a wife and she bears him sons or daughters, the woman and her children shall belong to her master, and only the man shall go free." },
          { n: 5, text: "But if the servant declares, ‘I love my master and my wife and children; I do not want to go free,’" },
          { n: 6, text: "then his master is to bring him before the judges. And he shall take him to the door or doorpost and pierce his ear with an awl. Then he shall serve his master for life." },
          { n: 7, text: "And if a man sells his daughter as a servant, she is not to go free as the menservants do." },
          { n: 8, text: "If she is displeasing in the eyes of her master who had designated her for himself, he must allow her to be redeemed. He has no right to sell her to foreigners, since he has broken faith with her." },
          { n: 9, text: "And if he chooses her for his son, he must deal with her as with a daughter." },
          { n: 10, text: "If he takes another wife, he must not reduce the food, clothing, or marital rights of his first wife." },
          { n: 11, text: "If, however, he does not provide her with these three things, she is free to go without monetary payment." },
        ],
        perItem: {
          2: {
            addr: { mode: "none-but", text: "You are not bound by this law, but slavery is the first thing Israel’s lawgivers regulate. A Hebrew servant works six years and then goes free, owing nothing. They limited what a master could do, yet they still allowed one man to own another for six years." },
          },
          6: {
            note: "When a servant has his ear pierced at his master’s door, he makes his choice to stay permanent and visible to everyone. The lawgivers allow for a servant who says he loves his master, but they also rule that if he leaves, he must leave behind the wife and children his master gave him.",
          },
          7: {
            addr: { mode: "none-but", text: "This is the hardest sentence in the chapter, and we will not soften it here. A father may sell his daughter, and unlike a male servant, she does not go free after six years. The verses that follow set conditions on how her master must treat her. Those conditions protect her, but they do not release her." },
          },
          11: {
            note: "If her master fails to give her any of the three things he owes her, she goes free without paying anything. The lawgivers protect her within the arrangement, but they never question the arrangement itself.",
          },
        },
        ground: {
          kind: "historical",
          text: "The Covenant Code opens with slavery, which shows what people in the ancient world considered the first question of civil law. When scholars compare it with the codes of Israel’s neighbors, the picture cuts both ways. Israel’s law limits a Hebrew servant’s term to six years. That limit was not unique, since the older Code of Hammurabi freed family members sold for debt after three years, but Israel’s lawgivers also make injury to a servant a matter for the courts, and in Deuteronomy Moses later forbids sending a freed servant away empty-handed. Yet the code assumes throughout that one person may own another, and it treats a daughter differently from a son.",
          src: "Propp · Meyers · Childs",
        },
        misreading: {
          named:
            "These laws simply reflect their times. Everyone had slaves, so there is nothing here that needs answering for.",
          why: "It is true that everyone in the ancient world kept slaves, but that fact explains nothing that matters. Elsewhere in this same chapter the lawgivers depart sharply from the customs of their neighbors, for instance by making a master answer for blinding a servant, so they could clearly legislate against the habits of their day when they chose to. The excuse also proves too much. If a text can only ever be as good as its own era, then it has nothing to say to any other era, including ours. The honest position is narrower and harder. People who did not abolish a real evil nonetheless placed real limits on it, and they did so in a book whose writers later turn Israel’s memory of slavery into an argument against oppression.",
        },
        meaning:
          "If we read this as legislation rather than as approval, we can see what the lawgivers were doing: they were restraining an institution they took for granted. A servant works six years, not a lifetime. A woman sold into a household is owed food, clothing and marital rights, and if her master withholds them, she goes free. These are the moves of people limiting a practice from inside it. We should see that clearly, but it does not mean the practice was acceptable, and the writers of Exodus do not let us think so, because the same people go on to build their whole ethic toward outsiders on the memory of having been slaves.",
      },
      {
        label: "Two",
        ref: "21:12–27",
        kind: "statute-cluster",
        form: "list",
        title: "Harm, and what it costs",
        statutes: [
          { n: 12, text: "Whoever strikes and kills a man must surely be put to death." },
          { n: 13, text: "If, however, he did not lie in wait, but God allowed it to happen, then I will appoint for you a place where he may flee." },
          { n: 14, text: "But if a man schemes and acts willfully against his neighbor to kill him, you must take him away from My altar to be put to death." },
          { n: 15, text: "Whoever strikes his father or mother must surely be put to death." },
          { n: 16, text: "Whoever kidnaps another man must be put to death, whether he sells him or the man is found in his possession." },
          { n: 17, text: "Anyone who curses his father or mother must surely be put to death." },
          { n: 18, text: "If men are quarreling and one strikes the other with a stone or a fist, and he does not die but is confined to bed," },
          { n: 19, text: "then the one who struck him shall go unpunished, as long as the other can get up and walk around outside with his staff. Nevertheless, he must compensate the man for his lost work and see that he is completely healed." },
          { n: 20, text: "If a man strikes his manservant or maidservant with a rod, and the servant dies by his hand, he shall surely be punished." },
          { n: 21, text: "However, if the servant gets up after a day or two, the owner shall not be punished, since the servant is his property." },
          { n: 22, text: "If men who are fighting strike a pregnant woman and her child is born prematurely, but there is no further injury, he shall surely be fined as the woman’s husband demands and as the court allows." },
          { n: 23, text: "But if a serious injury results, then you must require a life for a life—" },
          { n: 24, text: "eye for eye, tooth for tooth, hand for hand, foot for foot," },
          { n: 25, text: "burn for burn, wound for wound, and stripe for stripe." },
          { n: 26, text: "If a man strikes and blinds the eye of his manservant or maidservant, he must let the servant go free as compensation for the eye." },
          { n: 27, text: "And if he knocks out the tooth of his manservant or maidservant, he must let the servant go free as compensation for the tooth." },
        ],
        perItem: {
          16: {
            addr: { mode: "claims", text: "This law still makes a claim on you. In the same chapter that regulates owning a person, the lawgivers make it a capital crime to kidnap someone and sell them. They draw a line at seizing a human being that they do not draw at holding one." },
          },
          20: {
            addr: { mode: "none-but", text: "A master who beats a servant to death is punished. That was a real restraint, and a rare one in a world where many peoples treated a slave as property that a master could damage as he pleased." },
          },
          21: {
            addr: { mode: "none-but", text: "Then comes this verse. If the beaten servant survives a day or two, the master receives no penalty, and the lawgivers explain that the servant is his property. No honest reading can make that sentence mean anything other than what it says." },
          },
          24: {
            addr: { mode: "none-but", text: "“Eye for eye” sets a ceiling on punishment, not a license for it. In a world where someone might answer an injury by wiping out the offender’s whole family, the lawgivers insisted that the penalty must not exceed the harm. To us the rule sounds savage, but they wrote it to restrain savagery." },
          },
          26: {
            addr: { mode: "none-but", text: "If a master blinds a servant or knocks out a tooth, the servant goes free, so a master who injures a servant loses that servant entirely. The lawgivers gave masters a strong reason not to injure their servants, and the fact that they needed such a law tells us what they were guarding against." },
          },
        },
        ground: {
          kind: "historical",
          text: "This section is case law, written in the form “if a man does this, then this shall follow.” The cases run from murder, to striking a parent, to kidnapping, to injuries in a brawl, and then to injuries done to a servant. The lawgivers prescribe death for some acts that no modern legal system punishes that way, including cursing a parent. The formula “eye for eye” appears three times in the Torah, and people quote it far more often than they read it in context.",
          src: "Childs · Propp · Meyers",
        },
        tensions: [
          {
            claim:
              "The Israelites received this law from God at the mountain, and it regulates the owning and beating of human beings.",
            counter:
              "Later writers in the Bible did not leave this page where they found it. In Deuteronomy, Moses revisits the release of servants and orders a master to send a freed servant away with provisions, not empty-handed. Jeremiah condemns the leaders of Judah for freeing their slaves and then taking them back, and he treats it as a breach of covenant serious enough to bring judgment on the nation. And in the gospels Jesus says of a different law, the one permitting divorce, that Moses allowed it because the people’s hearts were hard, which shows that the Bible’s own voices can call some of its laws a concession rather than an ideal.",
            where: "Deuteronomy 15:12–15 · Jeremiah 34:8–22 · Matthew 19:8",
          },
        ],
        meaning:
          "Two things are true here at once, and our work as readers is to hold both. A master who kills a servant is punished, which was not the usual practice of the time. But a master who beats a servant who survives is not punished, because the servant is his property, and that is exactly as bad as it sounds. The code is neither monstrous nor a model to copy. It records a people still in the middle of an argument about what a person is worth.",
      },
      {
        label: "Three",
        ref: "21:28–32",
        kind: "statute-cluster",
        form: "list",
        title: "The ox that gores",
        statutes: [
          { n: 28, text: "If an ox gores a man or woman to death, the ox must surely be stoned, and its meat must not be eaten. But the owner of the ox shall not be held responsible." },
          { n: 29, text: "But if the ox has a habit of goring, and its owner has been warned yet does not restrain it, and it kills a man or woman, then the ox must be stoned and its owner must also be put to death." },
          { n: 30, text: "If payment is demanded of him instead, he may redeem his life by paying the full amount demanded of him." },
          { n: 31, text: "If the ox gores a son or a daughter, it shall be done to him according to the same rule." },
          { n: 32, text: "If the ox gores a manservant or maidservant, the owner must pay thirty shekels of silver to the master of that servant, and the ox must be stoned." },
        ],
        perItem: {
          28: {
            note: "The owner must stone the ox and may not eat its meat. The lawgivers treat the animal as if it carried something like guilt, rather than as a damaged piece of property.",
          },
          32: {
            addr: { mode: "none-but", text: "If an ox kills a free person, the owner faces judgment for his negligence. If the same ox kills a servant, the owner pays the servant’s master a fixed thirty shekels, and the lawgivers never mention the servant’s family." },
          },
        },
        ground: {
          kind: "historical",
          text: "Ancient lawyers discussed the goring ox more than almost any other case, and versions of it appear in law codes centuries older than Exodus, including the Code of Hammurabi. The lawgivers move through the case carefully. An ox with no history of goring is one matter, an ox already known to gore is another, and an owner who was warned and did nothing may himself be put to death. The owner’s guilt depends on what he knew.",
          src: "Propp · Childs",
        },
        meaning:
          "At the end of the chapter the lawgivers do the arithmetic out loud. When an ox kills a free person, the case goes to judgment. When it kills a servant, the owner pays the master a fixed sum, and the dead person’s family never appears in the ruling. The lawgivers hide nothing. They state plainly what a person was worth when that person was owned, in the same book that opened with God hearing the cries of slaves.",
        addr: {
          mode: "claims",
          text: "In the systems we live inside, someone has usually put a number on a human life, whether in an insurance table, a legal settlement, or an acceptable rate of loss. We like to think we have moved past this page of Exodus. At least these lawgivers were honest enough to write their number down.",
        },
        ask: "Where do the systems you benefit from put a price on a person, and do you know what that price is?",
      },
    ],
  },
  {
    id: "ex-22",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 22–23 (selected)",
    chapterIndex: 22,
    crossesChapters: true,
    title: "The foreigner, the widow, the debtor",
    unitLabel: "Scene",
    thread: "In Exodus 21 the lawgivers regulated the owning of servants. In chapters 22 and 23 they turn to people outside the household, such as foreigners, widows and debtors, and they ground Israel’s treatment of outsiders in the people’s memory of having been outsiders in Egypt.",
    closeEnd: "The lawgivers command rest twice in these chapters, and both times the reason they give is that someone else is tired.",
    passages: [
      {
        label: "One",
        ref: "22:1–27 (selected)",
        kind: "statute-cluster",
        form: "list",
        title: "You were foreigners",
        statutes: [
          { n: 1, text: "“If a man steals an ox or a sheep and slaughters or sells it, he must repay five oxen for an ox and four sheep for a sheep." },
          { n: 18, text: "You must not allow a sorceress to live." },
          { n: 21, text: "You must not exploit or oppress a foreign resident, for you yourselves were foreigners in the land of Egypt." },
          { n: 22, text: "You must not mistreat any widow or orphan." },
          { n: 23, text: "If you do mistreat them, and they cry out to Me in distress, I will surely hear their cry." },
          { n: 24, text: "My anger will be kindled, and I will kill you with the sword; then your wives will become widows and your children will be fatherless." },
          { n: 25, text: "If you lend money to one of My people among you who is poor, you must not act as a creditor to him; you are not to charge him interest." },
          { n: 26, text: "If you take your neighbor’s cloak as collateral, return it to him by sunset," },
          { n: 27, text: "because his cloak is the only covering he has for his body. What else will he sleep in? And if he cries out to Me, I will hear, for I am compassionate." },
        ],
        perItem: {
          18: {
            addr: { mode: "none-but", text: "You are not bound by this law, but it would be dishonest to leave it out, because of how people later used it. For centuries, in Europe and in New England, courts read this sentence at witch trials to justify killing people, most of them poor, old women. The verse did not cause those killings, but people used it to justify them." },
          },
          21: {
            addr: { mode: "claims", text: "This law still claims you, and the whole code turns on it. The lawgivers do not ground it in compassion but in memory: you were foreigners in Egypt. They built Israel’s ethic out of what the people themselves had been." },
          },
          22: {
            addr: { mode: "claims", text: "Throughout this part of the Bible, the writers treat the widow and the orphan as the standing test of a society, because no one else will speak up for them." },
          },
          25: {
            addr: { mode: "claims", text: "The Israelites must lend to the poor without charging interest. The lawgivers do not want anyone to treat money owed by a person with nothing as an ordinary investment." },
          },
          27: {
            addr: { mode: "claims", text: "A lender who takes a poor man’s cloak as a pledge must give it back by sunset, because the man sleeps in it. Then God gives a reason that is startling in a legal code: if the poor man cries out to me, I will hear him." },
            note: "The writer uses the same verb for crying out that he used for Israel’s cry in Egypt. The poor man in your debt now stands where Israel once stood.",
          },
        },
        ground: {
          kind: "historical",
          text: "The lawgivers move from property to persons without any visible break. They cover repayment for a stolen ox, then the death penalty for sorcery, and then the foreigner, the widow, the orphan and the debtor. Other ancient law codes also protect vulnerable people, but their kings usually present that protection as an act of royal mercy. Here the lawgivers ground the obligation in the people’s own history instead.",
          src: "Meyers · Propp · Childs",
        },
        meaning:
          "If we read the reasons the lawgivers attach to these laws, we can follow their argument. Do not oppress a foreigner, because you were foreigners. Give back the cloak, because the poor man will cry out and God will hear. The writers of this legal document keep stopping to explain themselves, and every explanation points back to Egypt. They did not work out this ethic from first principles. They <b>remembered</b> it.",
      },
      {
        label: "Two",
        ref: "23:1–12 (selected)",
        kind: "statute-cluster",
        form: "list",
        title: "Justice, and the seventh year",
        statutes: [
          { n: 1, text: "“You shall not spread a false report. Do not join the wicked by being a malicious witness." },
          { n: 2, text: "You shall not follow the crowd in wrongdoing. When you testify in a lawsuit, do not pervert justice by siding with the crowd." },
          { n: 3, text: "And do not show favoritism to a poor man in his lawsuit." },
          { n: 4, text: "If you encounter your enemy’s stray ox or donkey, you must return it to him." },
          { n: 5, text: "If you see the donkey of one who hates you fallen under its load, do not leave it there; you must help him with it." },
          { n: 6, text: "You shall not deny justice to the poor in their lawsuits." },
          { n: 8, text: "Do not accept a bribe, for a bribe blinds those who see and twists the words of the righteous." },
          { n: 9, text: "Do not oppress a foreign resident, since you yourselves know how it feels to be foreigners; for you were foreigners in the land of Egypt." },
          { n: 10, text: "For six years you are to sow your land and gather its produce," },
          { n: 11, text: "but in the seventh year you must let it rest and lie fallow, so that the poor among your people may eat from the field and the wild animals may consume what they leave. Do the same with your vineyard and olive grove." },
          { n: 12, text: "For six days you are to do your work, but on the seventh day you must cease, so that your ox and your donkey may rest and the son of your maidservant may be refreshed, as well as the foreign resident." },
        ],
        perItem: {
          2: {
            addr: { mode: "claims", text: "Do not follow a crowd into wrongdoing, and do not shade your testimony to agree with the majority. The lawgivers wrote this for village courts, but it applies just as well to any room where everyone has already made up their minds." },
          },
          3: {
            note: "The lawgivers also forbid favoring a poor man in his lawsuit. Everywhere else they protect the poor relentlessly, yet here they refuse to let sympathy bend a verdict, because impartiality that favors one side is not impartiality.",
          },
          4: {
            addr: { mode: "claims", text: "If you find your enemy’s ox wandering, you must take it back to him. The lawgivers do not ask you to forgive him or to make peace with him, only to return his animal, which is a smaller and more manageable thing than most commands about enemies." },
          },
          9: {
            addr: { mode: "claims", text: "The lawgivers give this command twice in two chapters, and the second time they sharpen the reason: you know how a foreigner feels. They do not ask the people to imagine it. They remind them that they already know it." },
          },
          11: {
            addr: { mode: "none-but", text: "You are not bound by this law unless you farm, but its logic is worth seeing. Every seventh year the farmer lets the land rest, and the poor may eat whatever grows on it untended. The lawgivers arrange the land’s rest so that it feeds people who own nothing." },
          },
          12: {
            addr: { mode: "claims", text: "The lawgivers command the sabbath again, but this time they do not give creation as the reason. They give the tiredness of other people: so that your servant and the foreigner among you may be refreshed. They mean your rest to reach the people who work for you." },
          },
        },
        ground: {
          kind: "historical",
          text: "This section opens with a series of laws about testimony and the courts, then turns to an enemy’s stray animal, and then to the seventh year and the seventh day. The sabbath year here is about farming, and the lawgivers do not give a religious reason for it. The farmer leaves the land unplanted so that the poor may eat what grows on it, and the wild animals may eat whatever the poor leave.",
          src: "Meyers · Fretheim",
        },
        meaning:
          "Two things stand out in this code, which people wrote down some three thousand years ago. First, after spending chapters protecting the poor, the lawgivers still refuse to let a court bend a verdict in their favor, because a court that favors anyone is not a court. Second, they make rest something you owe to other people: the land rests so the poor can eat, and the household rests so the servant and the foreigner can catch their breath. In this code, rest is not a private comfort. It is a way of sharing what you have.",
        addr: {
          mode: "claims",
          text: "In this code the lawgivers command your rest for the sake of the people who work for you. Whatever you do with your own day off, they would ask whether anyone who works under you gets a day off because of it.",
        },
        ask: "Who gets to rest because of how you arrange your week, and who does not?",
      },
    ],
  },
  {
    id: "ex-24",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 24",
    chapterIndex: 24,
    title: "Blood on the people",
    unitLabel: "Scene",
    thread: "Moses reads the terms of the covenant aloud, the people agree to them a second time, and then Moses seals the agreement in a way that no modern reader finds comfortable. Afterward, seventy-four men climb the mountain and share a meal in the presence of God.",
    closeEnd: "Moses goes up into the cloud for forty days, and the writer leaves him there.",
    passages: [
      {
        label: "One",
        ref: "24:1–8",
        kind: "scene",
        form: "prose",
        title: "All that the LORD has spoken",
        verses: [
          { n: 1, text: "Then the LORD said to Moses, “Come up to the LORD—you and Aaron, Nadab and Abihu, and seventy of Israel’s elders—and you are to worship at a distance." },
          { n: 2, text: "Moses alone shall approach the LORD, but the others must not come near. And the people may not go up with him.”" },
          { n: 3, text: "When Moses came and told the people all the words and ordinances of the LORD, they all responded with one voice: “All the words that the LORD has spoken, we will do.”" },
          { n: 4, text: "And Moses wrote down all the words of the LORD. Early the next morning he got up and built an altar at the base of the mountain, along with twelve pillars for the twelve tribes of Israel." },
          { n: 5, text: "Then he sent out some young men of Israel, and they offered burnt offerings and sacrificed young bulls as peace offerings to the LORD." },
          { n: 6, text: "Moses took half of the blood and put it in bowls, and the other half he splattered on the altar." },
          { n: 7, text: "Then he took the Book of the Covenant and read it to the people, who replied, “All that the LORD has spoken we will do, and we will be obedient.”" },
          { n: 8, text: "So Moses took the blood, splattered it on the people, and said, “This is the blood of the covenant that the LORD has made with you in accordance with all these words.”" },
        ],
        ground: {
          kind: "historical",
          text: "Moses writes the words down, builds an altar with twelve pillars, one for each tribe, and has young men offer oxen as sacrifices. He throws half the blood against the altar and keeps the other half in basins. Then he reads the book aloud, the people promise to do all of it, and he throws the rest of the blood over them, calling it the blood of the covenant. In this world, when peoples ratified a treaty, they slaughtered an animal and held a ceremony that bound both parties.",
          src: "Childs · Propp · Meyers",
        },
        meaning:
          "The people agree to the covenant three times in this part of Exodus, and this third time is the most physical. It is not a signature. Moses puts the blood of the same animals both on the altar, which stands for God, and on the people, so that both parties share in the same substance, and no one who has been splashed with it can consider himself uninvolved. Whatever else the covenant means here, no one could later claim they had not really entered it.",
        lenses: {
          arch: "Many ancient peoples sealed their most serious agreements with blood rather than with words alone, so that neither side could later claim to have misunderstood the terms. People still mark their most binding commitments with something done in front of witnesses, such as a vow, a ring or a handshake, because they know that what has been done cannot easily be undone.",
        },
        addr: {
          mode: "names",
          text: "Most of us have agreed to some things in a way we could later back out of, and to a few things in a way we could not. The difference rarely lies in the words we used. It lies in what we did at the time.",
        },
        ask: "What have you committed yourself to so fully that you could not now pretend you had not?",
      },
      {
        label: "Two",
        ref: "24:9–18",
        kind: "scene",
        form: "prose",
        title: "They saw God, and ate",
        verses: [
          { n: 9, text: "Then Moses went up with Aaron, Nadab and Abihu, and seventy of the elders of Israel," },
          { n: 10, text: "and they saw the God of Israel. Under His feet was a work like a pavement made of sapphire, as clear as the sky itself." },
          { n: 11, text: "But God did not lay His hand on the nobles of Israel; they saw Him, and they ate and drank." },
          { n: 12, text: "Then the LORD said to Moses, “Come up to Me on the mountain and stay here, so that I may give you the tablets of stone, with the law and commandments I have written for their instruction.”" },
          { n: 13, text: "So Moses set out with Joshua his attendant and went up on the mountain of God." },
          { n: 14, text: "And he said to the elders, “Wait here for us until we return to you. Aaron and Hur are here with you. Whoever has a dispute can go to them.”" },
          { n: 15, text: "When Moses went up on the mountain, the cloud covered it," },
          { n: 16, text: "and the glory of the LORD settled on Mount Sinai. For six days the cloud covered it, and on the seventh day the LORD called to Moses from within the cloud." },
          { n: 17, text: "And the sight of the glory of the LORD was like a consuming fire on the mountaintop in the eyes of the Israelites." },
          { n: 18, text: "Moses entered the cloud as he went up on the mountain, and he remained on the mountain forty days and forty nights." },
        ],
        ground: {
          kind: "historical",
          text: "Seventy-four men go up the mountain: Moses, Aaron, Aaron’s two sons, and seventy elders of Israel. They see the God of Israel, and under his feet they see something like a pavement of sapphire, as clear as the sky itself. The writer adds that God did not raise his hand against them, which tells us what the men expected to happen. Then they ate and drank. After this a cloud covers the mountain for six days, and on the seventh God calls Moses into it, where he stays forty days.",
          src: "Childs · Propp",
        },
        meaning:
          "This is the strangest passage in this part of Exodus, and readers easily skim past it. Seventy-four men see God, yet the writer will not describe him, only what lay under his feet, and then he records that they shared a meal. Since chapter 19, God had warned that anyone who touched the mountain would die. Now the covenant ends with a group of people eating in the presence of the God who could have killed them. The boundary has not moved. What has changed is that God and the people now have terms between them.",
        lenses: {
          theo: "The meal is the point of the ceremony, not an anticlimax after it. In the ancient world, parties to a covenant ate together to show that the agreement was made, and with this meal the writers of Exodus come closest to saying that God has closed the distance between himself and his people.",
        },
      },
    ],
  },
  {
    id: "ex-25",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 25–27 (selected)",
    chapterIndex: 25,
    crossesChapters: true,
    title: "The pattern",
    unitLabel: "Scene",
    thread: "Moses spends forty days on the mountain, and what God gives him there is not more law. It is a set of building plans, measured in cubits, for a tent the people can carry with them.",
    closeEnd: "God commands that a lamp be kept burning from evening until morning, continually, which means that someone will have to get up and tend it every night.",
    passages: [
      {
        label: "One",
        ref: "25:1–40 (selected)",
        kind: "scene",
        form: "prose",
        title: "So that I may dwell among them",
        verses: [
          { n: 2, text: "“Tell the Israelites to bring Me an offering. You are to receive My offering from every man whose heart compels him." },
          { n: 8, text: "And they are to make a sanctuary for Me, so that I may dwell among them." },
          { n: 9, text: "You must make the tabernacle and design all its furnishings according to the pattern I show you." },
          { n: 10, text: "And they are to construct an ark of acacia wood, two and a half cubits long, a cubit and a half wide, and a cubit and a half high." },
          { n: 11, text: "Overlay it with pure gold both inside and out, and make a gold molding around it." },
          { n: 16, text: "And place inside the ark the Testimony, which I will give you." },
          { n: 17, text: "And you are to construct a mercy seat of pure gold, two and a half cubits long and a cubit and a half wide." },
          { n: 21, text: "Set the mercy seat atop the ark and put the Testimony that I will give you into the ark." },
          { n: 22, text: "And I will meet with you there above the mercy seat, between the two cherubim that are over the ark of the Testimony; I will speak with you about all that I command you regarding the Israelites." },
          { n: 23, text: "You are also to make a table of acacia wood two cubits long, a cubit wide, and a cubit and a half high." },
          { n: 30, text: "And place the Bread of the Presence on the table before Me at all times." },
          { n: 31, text: "Then you are to make a lampstand of pure, hammered gold. It shall be made of one piece, including its base and shaft, its cups, and its buds and petals." },
          { n: 40, text: "See to it that you make everything according to the pattern shown you on the mountain." },
        ],
        ground: {
          kind: "historical",
          text: "God asks for the materials as a freewill offering, from everyone whose heart moves them to give. The list matches what a people who had just been loaded with gifts by the Egyptians would actually have had: gold, silver, bronze, dyed yarn, fine linen and acacia wood. Then God gives the specifications, object by object. He begins with the ark, then the table, then the lampstand, and he gives the size of each in cubits and provides each with rings and poles so the Israelites can carry it.",
          src: "Propp · Meyers · Childs",
        },
        meaning:
          "Everything in this section rests on verse 8, where God says, “And they are to make a sanctuary for Me, so that I may dwell among them.” Everything after that verse is carpentry in service of that purpose. It is worth noticing what God tells them to build and what he does not. He does not ask for a temple, a building fixed in one place, but for a tent with poles through rings, designed from the first instruction to be taken down and carried. The God who would not let the people come near his mountain arranges to travel with them.",
        lenses: {
          theo: "The ark holds the tablets of the covenant, and God promises to meet Moses above it, between two carved cherubim, over an empty space. Israel’s most sacred object is a box with the terms of the covenant inside it and no image of God on top.",
        },
        addr: {
          mode: "names",
          text: "We all know the difference between someone who visits and someone who moves in. Here God is moving in, and the writers describe the arrangements down to the cubit.",
        },
        ask: "What would change if you prepared a place for God’s presence instead of simply waiting for it?",
      },
      {
        label: "Two",
        ref: "26:1–33 (selected)",
        kind: "scene",
        form: "prose",
        title: "The tent, and the veil",
        verses: [
          { n: 1, text: "“You are to construct the tabernacle itself with ten curtains of finely spun linen, each with blue, purple, and scarlet yarn, and cherubim skillfully worked into them." },
          { n: 7, text: "You are to make curtains of goat hair for the tent over the tabernacle—eleven curtains in all." },
          { n: 15, text: "You are to construct upright frames of acacia wood for the tabernacle." },
          { n: 31, text: "Make a veil of blue, purple, and scarlet yarn, and finely spun linen, with cherubim skillfully worked into it." },
          { n: 33, text: "And hang the veil from the clasps and place the ark of the Testimony behind the veil. So the veil will separate the Holy Place from the Most Holy Place." },
        ],
        ground: {
          kind: "historical",
          text: "The tent is made of ten linen curtains with cherubim woven into them, a covering of goat hair over those, and upright frames of acacia wood beneath, with a veil dividing the inside into two rooms. Archaeologists know of portable shrines roughly like this from Egypt and from nomadic peoples in the region, so the design is less strange than it first seems. The Israelites were putting a familiar kind of object to a new use.",
          src: "Meyers · Propp",
        },
        meaning:
          "The veil is the heart of this chapter. Having arranged to live among the people, God then has them hang a curtain, and, as Leviticus later explains, only the high priest may enter the innermost room, once a year. God builds both nearness and distance into the same structure, in fabric, just as he did in chapter 19 when he had Moses set a boundary around the mountain. The tabernacle does not settle that tension. It gives it a home.",
      },
      {
        label: "Three",
        ref: "27:1–21 (selected)",
        kind: "scene",
        form: "prose",
        title: "The altar, and the lamp",
        verses: [
          { n: 1, text: "“You are to build an altar of acacia wood. The altar must be square, five cubits long, five cubits wide, and three cubits high." },
          { n: 9, text: "You are also to make a courtyard for the tabernacle. On the south side of the courtyard make curtains of finely spun linen, a hundred cubits long on one side," },
          { n: 20, text: "And you are to command the Israelites to bring you pure oil of pressed olives for the light, to keep the lamps burning continually." },
          { n: 21, text: "In the Tent of Meeting, outside the veil that is in front of the Testimony, Aaron and his sons are to tend the lamps before the LORD from evening until morning. This is to be a permanent statute for the Israelites for the generations to come." },
        ],
        ground: {
          kind: "historical",
          text: "Outside the tent stands a bronze altar for burnt offerings, and around both runs a courtyard of linen hangings on posts, so the whole design is a series of enclosures, each one nearer to the center. At the end of the chapter God commands pure oil of pressed olives and tells Aaron and his sons to keep the lamp burning from evening until morning, continually.",
          src: "Propp · Meyers",
        },
        meaning:
          "The layout shows who may come how near. First comes the courtyard, then the tent, then the room behind the veil, and each boundary is real. Yet God’s last instruction in the chapter is not about keeping anyone out. He asks for a light that someone must keep burning all night, every night, by getting up to tend it. If God is to live among these people, someone has to do a job.",
        addr: {
          mode: "names",
          text: "Most of the work that keeps anything alive is plain and repetitive. Someone has to trim the wick in the dark so that the light is still burning in the morning.",
        },
        ask: "What are you tending that nobody sees, and what would happen if you stopped?",
      },
    ],
  },
  {
    id: "ex-28",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 28–31 (selected)",
    chapterIndex: 28,
    crossesChapters: true,
    title: "The priest, and the craftsman",
    unitLabel: "Scene",
    thread: "These chapters describe who will carry the names of Israel before God and who will do the building. The writers describe the priest’s clothing in more detail than most of the furniture, and the first person in the Bible said to be filled with the Spirit of God turns out to be a metalworker.",
    closeEnd: "Then God gives Moses two tablets of stone, and the long preparation in this part of Exodus comes to an end.",
    passages: [
      {
        label: "One",
        ref: "28:1–38 (selected)",
        kind: "scene",
        form: "prose",
        title: "Names on his shoulders",
        verses: [
          { n: 2, text: "Make holy garments for your brother Aaron, to give him glory and splendor." },
          { n: 9, text: "Take two onyx stones and engrave on them the names of the sons of Israel:" },
          { n: 11, text: "Engrave the names of the sons of Israel on the two stones the way a gem cutter engraves a seal. Then mount the stones in gold filigree settings." },
          { n: 12, text: "Fasten both stones on the shoulder pieces of the ephod as memorial stones for the sons of Israel. Aaron is to bear their names on his two shoulders as a memorial before the LORD." },
          { n: 29, text: "Whenever Aaron enters the Holy Place, he shall bear the names of the sons of Israel over his heart on the breastpiece of judgment, as a continual reminder before the LORD." },
          { n: 30, text: "And place the Urim and Thummim in the breastpiece of judgment, so that they will also be over Aaron’s heart whenever he comes before the LORD. Aaron will continually carry the judgment of the sons of Israel over his heart before the LORD." },
          { n: 36, text: "You are to make a plate of pure gold and engrave on it as on a seal: HOLY TO THE LORD." },
          { n: 38, text: "And it will be worn on Aaron’s forehead, so that he may bear the iniquity of the holy things that the sons of Israel consecrate with regard to all their holy gifts. It shall always be on his forehead, so that they may be acceptable before the LORD." },
        ],
        ground: {
          kind: "historical",
          text: "The writers give the priest’s clothing more detail than most of the furniture: an ephod, a breastpiece, a robe, and a turban with a gold plate on its front. Two onyx stones on the shoulders carry the names of the tribes, six on each, engraved the way a gem cutter engraves a seal. Twelve more stones sit on the breastpiece over the priest’s heart. In a pouch in the breastpiece the priest keeps the Urim and Thummim, which priests used to receive a yes or no answer from God, though no one today knows exactly what they looked like.",
          src: "Meyers · Propp · Childs",
        },
        meaning:
          "God says the garments are for glory and beauty, and then he says twice what they are actually for. Aaron carries the names of the tribes on his shoulders and over his heart whenever he goes into the holy place, as a continual reminder before God. His task is not mainly to represent God to the people. It is to carry the people, by name, into God’s presence on his own body, and to bear the guilt of any fault in their offerings.",
        lenses: {
          theo: "The gold plate on Aaron’s forehead reads “Holy to the LORD,” and God says it is there so that the people’s offerings will be accepted. God arranges for their acceptance in advance, so that the people do not have to earn it on the day.",
        },
      },
      {
        label: "Two",
        ref: "29:1–46 (selected)",
        kind: "scene",
        form: "prose",
        title: "So that I may dwell among them",
        verses: [
          { n: 1, text: "“Now this is what you are to do to consecrate Aaron and his sons to serve Me as priests: Take a young bull and two rams without blemish," },
          { n: 4, text: "Then present Aaron and his sons at the entrance to the Tent of Meeting and wash them with water." },
          { n: 7, text: "Then take the anointing oil and anoint him by pouring it on his head." },
          { n: 44, text: "So I will consecrate the Tent of Meeting and the altar, and I will consecrate Aaron and his sons to serve Me as priests." },
          { n: 45, text: "Then I will dwell among the Israelites and be their God." },
          { n: 46, text: "And they will know that I am the LORD their God, who brought them out of the land of Egypt so that I might dwell among them. I am the LORD their God." },
        ],
        ground: {
          kind: "historical",
          text: "The ordination of the priests lasts seven days. Moses washes them, dresses them and anoints them with oil, puts blood on the right ear, thumb and big toe of each, and gives them a share of the sacrificial meat. At the end of the chapter God states what the whole arrangement is for, in words that echo the start of the instructions: “I will dwell among the Israelites and be their God,” so that they will know he is the LORD their God who brought them out of Egypt.",
          src: "Propp · Meyers",
        },
        meaning:
          "At the end of the ordination, as at the start of the plans, God names the rescue from Egypt as the reason for everything. He brought the people out so that he might dwell among them. Everything in these four chapters, the stones, the oil and the seven days, exists to make a simple arrangement work: someone must be able to go into God’s presence on behalf of everyone else, and come out alive.",
      },
      {
        label: "Three",
        ref: "30:1–18 (selected)",
        kind: "scene",
        form: "prose",
        title: "The same for everyone",
        verses: [
          { n: 1, text: "“You are also to make an altar of acacia wood for the burning of incense." },
          { n: 11, text: "Then the LORD said to Moses," },
          { n: 12, text: "“When you take a census of the Israelites to number them, each man must pay the LORD a ransom for his life when he is counted. Then no plague will come upon them when they are numbered." },
          { n: 15, text: "In making the offering to the LORD to atone for your lives, the rich shall not give more than a half shekel, nor shall the poor give less." },
          { n: 16, text: "Take the atonement money from the Israelites and use it for the service of the Tent of Meeting. It will serve as a memorial for the Israelites before the LORD to make atonement for your lives.”" },
          { n: 18, text: "“You are to make a bronze basin with a bronze stand for washing. Set it between the Tent of Meeting and the altar, and put water in it," },
        ],
        ground: {
          kind: "historical",
          text: "This section describes an incense altar and a bronze basin for washing, and between those two instructions God sets a census tax. Every man who is counted must pay half a shekel as a ransom for his life. The rich may not give more and the poor may not give less, and the money goes to the service of the tent.",
          src: "Meyers · Propp",
        },
        meaning:
          "Elsewhere the lawgivers scale offerings to what a person can afford, but here God sets a flat rate. His concern is not what people can afford but that they are equal: this payment stands for a life, and no one’s life is worth more of it than anyone else’s. The richest man in the camp and the poorest put in the same coin, and in that small rule God makes a large claim about human worth.",
      },
      {
        label: "Four",
        ref: "31:1–18 (selected)",
        kind: "scene",
        form: "prose",
        title: "Bezalel",
        verses: [
          { n: 1, text: "Then the LORD said to Moses," },
          { n: 2, text: "“See, I have called by name Bezalel son of Uri, the son of Hur, of the tribe of Judah." },
          { n: 3, text: "And I have filled him with the Spirit of God, with skill, ability, and knowledge in all kinds of craftsmanship," },
          { n: 4, text: "to design artistic works in gold, silver, and bronze," },
          { n: 5, text: "to cut gemstones for settings, and to carve wood, so that he may be a master of every craft." },
          { n: 6, text: "Moreover, I have selected Oholiab son of Ahisamach, of the tribe of Dan, as his assistant. I have also given skill to all the craftsmen, that they may fashion all that I have commanded you:" },
          { n: 13, text: "“Tell the Israelites, ‘Surely you must keep My Sabbaths, for this will be a sign between Me and you for the generations to come, so that you may know that I am the LORD who sanctifies you." },
          { n: 17, text: "It is a sign between Me and the Israelites forever; for in six days the LORD made the heavens and the earth, but on the seventh day He rested and was refreshed.’”" },
          { n: 18, text: "When the LORD had finished speaking with Moses on Mount Sinai, He gave him the two tablets of the Testimony, tablets of stone inscribed by the finger of God." },
        ],
        ground: {
          kind: "historical",
          text: "God names the man who will build the tabernacle: Bezalel son of Uri, of the tribe of Judah, with Oholiab as his helper, and God gives skill to every craftsman who works with them. Then God restates the sabbath law and makes clear that even the building of the sanctuary must stop on the seventh day. At the close of the section God gives Moses two tablets of stone, inscribed by the finger of God.",
          src: "Meyers · Propp · Fretheim",
        },
        meaning:
          "Bezalel is the first person in the Bible whom God is said to fill with his Spirit, and he is not a prophet, a priest or a king. He works in gold, stone and wood, and God fills him with skill, ability and knowledge in every kind of craft. After four chapters of specifications, God declares that making things well is a gift of his own Spirit, and then he commands that even this work stop on the seventh day.",
        lenses: {
          theo: "God restates the sabbath here on purpose. The one project that could most plausibly claim an exemption, the building of God’s own dwelling, must stop for a day like every other kind of work.",
        },
        addr: {
          mode: "names",
          text: "If you make things, the writer is telling you that your skill is not separate from your spiritual life, nor a distraction from it. It also tells you that your work must still stop on the seventh day, however urgent it seems.",
        },
        ask: "What do you make, and have you ever thought of your skill as something God gave you rather than something you acquired?",
      },
    ],
  },
  {
    id: "ex-32",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 32",
    chapterIndex: 32,
    title: "The golden calf",
    unitLabel: "Scene",
    thread: "Moses stays on the mountain so long that the people below give up waiting for him. What they do next is not to switch to another god, and that makes their failure harder to dismiss, not easier.",
    closeEnd: "The chapter ends with a plague, and nothing has been repaired. It will take Moses two more chapters and a second set of tablets to repair it.",
    passages: [
      {
        label: "One",
        ref: "32:1–6",
        kind: "scene",
        form: "prose",
        title: "Make us gods",
        verses: [
          { n: 1, text: "Now when the people saw that Moses was delayed in coming down from the mountain, they gathered around Aaron and said, “Come, make us gods who will go before us. As for this Moses who brought us up out of the land of Egypt, we do not know what has happened to him!”" },
          { n: 2, text: "So Aaron told them, “Take off the gold earrings that are on your wives and sons and daughters, and bring them to me.”" },
          { n: 3, text: "Then all the people took off their gold earrings and brought them to Aaron." },
          { n: 4, text: "He took the gold from their hands, and with an engraving tool he fashioned it into a molten calf. And they said, “These, O Israel, are your gods, who brought you up out of the land of Egypt!”" },
          { n: 5, text: "When Aaron saw this, he built an altar before the calf and proclaimed: “Tomorrow shall be a feast to the LORD.”" },
          { n: 6, text: "So the next day they arose, offered burnt offerings, and presented peace offerings. And the people sat down to eat and drink and got up to indulge in revelry." },
        ],
        ground: {
          kind: "historical",
          text: "Forty days is a long time to wait at the foot of a mountain that has been on fire. The people come to Aaron and ask him to make them gods to go before them, because they do not know what has happened to Moses. Aaron asks for their gold earrings and makes a calf from them, and the people say that these are the gods who brought them up out of Egypt. Then Aaron builds an altar in front of the calf and announces a feast to the LORD, using God’s own name.",
          src: "Childs · Propp · Fretheim",
        },
        misreading: {
          named:
            "The Israelites abandoned the LORD for a different god, which is idolatry of the obvious kind.",
          why: "Look at what Aaron actually says. He builds the altar and calls the feast a feast to the LORD, by name, and the people credit the calf with bringing them out of Egypt, which was the LORD’s own act. Nobody in the scene thinks they have changed gods. They have made an image of the God who rescued them, because he has been silent for forty days and they can see an image. That failure is harder to dismiss than swapping one god for another, because it is the failure open to people who are quite sure they are being faithful.",
        },
        meaning:
          "The people have just agreed, twice, to a covenant that forbids making images, and within six weeks they break it while using God’s correct name. In that region people often set a god on the back of a bull, so the bull served as a pedestal for an invisible god rather than as the god himself, which makes the people’s failure even subtler. They did not want another god. They wanted this God, present, portable and visible, on their own schedule. And for the previous seven chapters, God had been telling Moses how he would provide exactly that.",
        lenses: {
          arch: "When a wait becomes unbearable, people often make something they can see to stand in for what they were promised. A golden calf is one form of it, but people in every age have made the same kind of substitute out of money, another person, or a plan of their own, often just before the real thing was about to arrive.",
        },
      },
      {
        label: "Two",
        ref: "32:7–14",
        kind: "scene",
        form: "prose",
        title: "Moses argues",
        verses: [
          { n: 7, text: "Then the LORD said to Moses, “Go down at once, for your people, whom you brought up out of the land of Egypt, have corrupted themselves." },
          { n: 8, text: "How quickly they have turned aside from the way that I commanded them! They have made for themselves a molten calf and have bowed down to it. They have sacrificed to it and said, ‘These, O Israel, are your gods, who brought you up out of the land of Egypt.’”" },
          { n: 9, text: "The LORD also said to Moses, “I have seen this people, and they are indeed a stiff-necked people." },
          { n: 10, text: "Now leave Me alone, so that My anger may burn against them and consume them. Then I will make you into a great nation.”" },
          { n: 11, text: "But Moses sought the favor of the LORD his God, saying, “O LORD, why does Your anger burn against Your people, whom You brought out of the land of Egypt with great power and a mighty hand?" },
          { n: 12, text: "Why should the Egyptians declare, ‘He brought them out with evil intent, to kill them in the mountains and wipe them from the face of the earth’? Turn from Your fierce anger and relent from doing harm to Your people." },
          { n: 13, text: "Remember Your servants Abraham, Isaac, and Israel, to whom You swore by Your very self when You declared, ‘I will make your descendants as numerous as the stars in the sky, and I will give your descendants all this land that I have promised, and it shall be their inheritance forever.’”" },
          { n: 14, text: "So the LORD relented from the calamity He had threatened to bring on His people." },
        ],
        ground: {
          kind: "historical",
          text: "God tells Moses to go down, calls the Israelites “your people, whom you brought up out of the land of Egypt,” and proposes to destroy them and make a great nation from Moses instead. Moses argues him out of it in three steps. First, these are God’s own people, whom God himself brought out of Egypt. Second, the Egyptians will say God brought them out only to kill them in the mountains. Third, God swore by his own self to Abraham, Isaac and Israel. Then the writer says that the LORD relented.",
          src: "Fretheim · Childs · Propp",
        },
        meaning:
          "Moses’ intercession is a real argument, not a formality. He does not plead the people’s good qualities, because they have none to offer. He appeals instead to what God has already done, to what the Egyptians will conclude, and to promises God made centuries earlier to men long dead. Readers easily miss that he also refuses God’s offer to make him a new Abraham. God offers him a nation of his own, and Moses turns it down to keep the people who have just made a calf.",
        lenses: {
          theo: "The writers of the Bible are willing to say that God relented, and to show a man changing God’s mind by argument. Whatever that tells us about the nature of God, the writer does not soften it, and this is not the only place in the Bible where it happens.",
        },
      },
      {
        label: "Three",
        ref: "32:15–35 (selected)",
        kind: "scene",
        form: "prose",
        title: "Down the mountain",
        verses: [
          { n: 15, text: "Then Moses turned and went down the mountain with the two tablets of the Testimony in his hands. They were inscribed on both sides, front and back." },
          { n: 19, text: "As Moses approached the camp and saw the calf and the dancing, he burned with anger and threw the tablets out of his hands, shattering them at the base of the mountain." },
          { n: 20, text: "Then he took the calf they had made, burned it in the fire, ground it to powder, and scattered the powder over the face of the water. Then he forced the Israelites to drink it." },
          { n: 21, text: "“What did this people do to you,” Moses asked Aaron, “that you have led them into so great a sin?”" },
          { n: 22, text: "“Do not be enraged, my lord,” Aaron replied. “You yourself know that the people are intent on evil." },
          { n: 24, text: "So I said to them, ‘Whoever has gold, let him take it off,’ and they gave it to me. And when I threw it into the fire, out came this calf!”" },
          { n: 26, text: "So Moses stood at the entrance to the camp and said, “Whoever is for the LORD, come to me.” And all the Levites gathered around him." },
          { n: 27, text: "He told them, “This is what the LORD, the God of Israel, says: ‘Each of you men is to fasten his sword to his side, go back and forth through the camp from gate to gate, and slay his brother, his friend, and his neighbor.’”" },
          { n: 28, text: "The Levites did as Moses commanded, and that day about three thousand of the people fell dead." },
          { n: 30, text: "The next day Moses said to the people, “You have committed a great sin. Now I will go up to the LORD; perhaps I can make atonement for your sin.”" },
          { n: 32, text: "Yet now, if You would only forgive their sin.... But if not, please blot me out of the book that You have written.”" },
          { n: 33, text: "The LORD replied to Moses, “Whoever has sinned against Me, I will blot out of My book." },
          { n: 35, text: "And the LORD sent a plague on the people because of what they had done with the calf that Aaron had made." },
        ],
        ground: {
          kind: "historical",
          text: "Moses comes down with the tablets, sees the calf and the dancing, and throws the tablets down, breaking them at the foot of the mountain. He burns the calf, grinds it to powder, scatters the powder on water and makes the Israelites drink it. Then he asks Aaron what the people did to him, and Aaron answers that he threw the gold into the fire and out came this calf. Finally Moses calls out for whoever is on the LORD’s side, and when the Levites come, he sends them through the camp with swords.",
          src: "Propp · Childs",
        },
        meaning:
          "Three things happen here, and only one of them is comfortable. Aaron, whose priestly clothing God described four chapters earlier in more detail than the ark, gives an excuse so thin it is almost comic, and the writer simply leaves him standing there with it. Moses offers to be blotted out of God’s book rather than see the people destroyed, which is the high point of his life. And between those two moments, Moses sends the Levites through the camp with swords, about three thousand people die, and the writer presents the killing as the act that qualifies the Levites for the priesthood.\n\nWe will not soften that last part here. It is not an ancient law that we can set aside as no longer binding. It is a killing the writer approves of, and no reading offered in this app makes it sit easily. It is in the book, and the summary at the end of this section returns to it without explaining it away.",
        addr: {
          mode: "names",
          text: "Most of us have waited for something long enough to start building a substitute, and most of us have also told a version of how it happened that was not quite what happened.",
        },
        ask: "What did you make for yourself while you were waiting, and how did you explain it afterward?",
      },
    ],
  },
  {
    id: "ex-33",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 33",
    chapterIndex: 33,
    title: "Show me your glory",
    unitLabel: "Scene",
    thread: "After the golden calf, God offers to send an angel to lead the people instead of going with them himself, and Moses refuses the offer. Then Moses asks for more than God has yet given him.",
    closeEnd: "God places Moses in a cleft of the rock and covers him with his hand, and all Moses is allowed to see is God’s back.",
    passages: [
      {
        label: "One",
        ref: "33:1–6",
        kind: "scene",
        form: "prose",
        title: "I will not go up among you",
        verses: [
          { n: 1, text: "Then the LORD said to Moses, “Leave this place, you and the people you brought up out of the land of Egypt, and go to the land that I promised to Abraham, Isaac, and Jacob when I said, ‘I will give it to your descendants.’" },
          { n: 2, text: "And I will send an angel before you, and I will drive out the Canaanites, Amorites, Hittites, Perizzites, Hivites, and Jebusites." },
          { n: 3, text: "Go up to a land flowing with milk and honey. But I will not go with you, because you are a stiff-necked people; otherwise, I might destroy you on the way.”" },
          { n: 4, text: "When the people heard this bad news, they went into mourning, and no one put on any of his jewelry." },
          { n: 5, text: "For the LORD had said to Moses, “Tell the Israelites, ‘You are a stiff-necked people. If I should go with you for a single moment, I would destroy you. Now take off your jewelry, and I will decide what to do with you.’”" },
          { n: 6, text: "So the Israelites stripped themselves of their jewelry from Mount Horeb onward." },
        ],
        ground: {
          kind: "historical",
          text: "After the calf, God tells the people to go up to the promised land and says he will send an angel ahead of them, but he will not go among them himself, because they are a stiff-necked people and he might destroy them on the way. When the people hear this they mourn, and no one puts on any jewelry. The jewelry they now set aside is the same kind of gold they gave Aaron to make the calf.",
          src: "Childs · Propp · Fretheim",
        },
        meaning:
          "God’s offer sounds generous, but it is not. The people would get the land, the angel, the protection and every promise kept, but they would not have God with them. They understand at once that this is a demotion, and they mourn over it, which is the first truly good sign they have given in the whole book. They have learned something. They would rather have God’s presence than everything he offers without it.",
        addr: {
          mode: "names",
          text: "It is possible to receive everything you asked for and then notice that the one thing you actually wanted is missing.",
        },
        ask: "Which would you rather have: the outcome you have been praying for, or the sense that God is with you in it?",
      },
      {
        label: "Two",
        ref: "33:7–11",
        kind: "scene",
        form: "prose",
        title: "Outside the camp",
        verses: [
          { n: 7, text: "Now Moses used to take the tent and pitch it at a distance outside the camp. He called it the Tent of Meeting, and anyone inquiring of the LORD would go to the Tent of Meeting outside the camp." },
          { n: 8, text: "Then, whenever Moses went out to the tent, all the people would stand at the entrances to their own tents and watch Moses until he entered the tent." },
          { n: 9, text: "As Moses entered the tent, the pillar of cloud would come down and remain at the entrance, and the LORD would speak with Moses." },
          { n: 10, text: "When all the people saw the pillar of cloud standing at the entrance to the tent, they would stand up and worship, each one at the entrance to his own tent." },
          { n: 11, text: "Thus the LORD would speak to Moses face to face, as a man speaks to his friend. Then Moses would return to the camp, but his young assistant Joshua son of Nun would not leave the tent." },
        ],
        ground: {
          kind: "historical",
          text: "This is a different tent from the tabernacle being planned. Moses pitches a tent of meeting outside the camp, at some distance, and anyone who wants to seek the LORD goes out to it. Whenever Moses goes out, all the people stand at the doors of their own tents and watch, and the pillar of cloud comes down, and the writer says that the LORD spoke with Moses face to face, as a man speaks with his friend. Moses’ young assistant Joshua stays in the tent when Moses leaves.",
          src: "Propp · Childs",
        },
        meaning:
          "Each person stands in a doorway and watches someone else go in. That is the picture the writer paints, and it is worth pausing over before the people build the tabernacle and make the arrangement permanent. Speaking “face to face” here does not contradict what comes later in the chapter, where God says no one can see his face. It is an idiom for speaking plainly and directly, as friends do. What the people receive is the sight of a man walking to a tent, a cloud coming down, and Moses’ report afterward.",
        lenses: {
          arch: "Many communities have had one person who goes before God, or before the powerful, on everyone else’s behalf, while the rest watch from a distance. People tend to feel both grateful to such a go-between and resentful of him, and we can imagine both feelings in the Israelites standing at their tent doors.",
        },
      },
      {
        label: "Three",
        ref: "33:12–23",
        kind: "scene",
        form: "prose",
        title: "You cannot see my face",
        verses: [
          { n: 12, text: "Then Moses said to the LORD, “Look, You have been telling me, ‘Lead this people up,’ but You have not let me know whom You will send with me. Yet You have said, ‘I know you by name, and you have found favor in My sight.’" },
          { n: 13, text: "Now if indeed I have found favor in Your sight, please let me know Your ways, that I may know You and find favor in Your sight. Remember that this nation is Your people.”" },
          { n: 14, text: "And the LORD answered, “My Presence will go with you, and I will give you rest.”" },
          { n: 15, text: "“If Your Presence does not go with us,” Moses replied, “do not lead us up from here." },
          { n: 16, text: "For how then can it be known that Your people and I have found favor in Your sight, unless You go with us? How else will we be distinguished from all the other people on the face of the earth?”" },
          { n: 17, text: "So the LORD said to Moses, “I will do this very thing you have asked, for you have found favor in My sight, and I know you by name.”" },
          { n: 18, text: "Then Moses said, “Please show me Your glory.”" },
          { n: 19, text: "“I will cause all My goodness to pass before you,” the LORD replied, “and I will proclaim My name—the LORD—in your presence. I will have mercy on whom I have mercy, and I will have compassion on whom I have compassion.”" },
          { n: 20, text: "But He added, “You cannot see My face, for no one can see Me and live.”" },
          { n: 21, text: "The LORD continued, “There is a place near Me where you are to stand upon a rock," },
          { n: 22, text: "and when My glory passes by, I will put you in a cleft of the rock and cover you with My hand until I have passed by." },
          { n: 23, text: "Then I will take My hand away, and you will see My back; but My face must not be seen.”" },
        ],
        ground: {
          kind: "historical",
          text: "Moses presses further. He asks God to show him his ways, refuses outright the offer of an angel, and says that if God’s presence does not go with them, God should not send them up from this place. God grants what he asks. Then Moses asks for one thing more: “Please show me Your glory.” God answers with a distinction. He will make all his goodness pass before Moses, proclaim his name, and show mercy to whom he will show mercy. But no one may see his face and live. So God sets Moses in a cleft of the rock, covers him with his hand while his glory passes by, and afterward lets him see his back.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "This is the closest any person comes to God in the Hebrew Bible, and what Moses receives is a glimpse of God going away. God does not exactly refuse him. He gives Moses his goodness, his name and his presence for the journey, everything Moses asked for on behalf of the people. God refuses only to show his face, and he does not say he is unwilling. He says no one could survive it. So the most intimate scene in the book ends with God hiding a man he speaks to as a friend under his own hand, so that the man is not destroyed by what he asked to see.",
        lenses: {
          theo: "Everything God grants here concerns a relationship, and none of it is a vision: his name, his goodness, his promise to go with them. God offers his presence without revealing himself fully, and that is how the people of the rest of the Bible live with him.",
        },
        addr: {
          mode: "names",
          text: "Most of us have wanted God to show us something plainly rather than simply go with us through it. The writer treats that desire as reasonable. God grants most of it and refuses only the last part, because no one could survive it.",
        },
        ask: "What have you asked God to show you, and could you live with being accompanied instead?",
      },
    ],
  },
  {
    id: "ex-34",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 34 (selected)",
    chapterIndex: 34,
    title: "The second tablets",
    unitLabel: "Scene",
    thread: "This time Moses cuts the stone tablets himself. God then proclaims over them the description of himself that later writers in the Bible quote more than any other, and its two halves do not sit easily together.",
    closeEnd: "Moses comes down with a shining face he cannot see himself, and he begins wearing a veil so that other people can bear to look at him.",
    passages: [
      {
        label: "One",
        ref: "34:1–9",
        kind: "scene",
        form: "prose",
        title: "The name proclaimed",
        verses: [
          { n: 1, text: "Then the LORD said to Moses, “Chisel out two stone tablets like the originals, and I will write on them the words that were on the first tablets, which you broke." },
          { n: 2, text: "Be ready in the morning, and come up on Mount Sinai to present yourself before Me on the mountaintop." },
          { n: 3, text: "No one may go up with you; in fact, no one may be seen anywhere on the mountain—not even the flocks or herds may graze in front of the mountain.”" },
          { n: 4, text: "So Moses chiseled out two stone tablets like the originals. He rose early in the morning, and taking the two stone tablets in his hands, he went up Mount Sinai as the LORD had commanded him." },
          { n: 5, text: "And the LORD descended in a cloud, stood with him there, and proclaimed His name, the LORD." },
          { n: 6, text: "Then the LORD passed in front of Moses and called out: “The LORD, the LORD God, is compassionate and gracious, slow to anger, abounding in loving devotion and faithfulness," },
          { n: 7, text: "maintaining loving devotion to a thousand generations, forgiving iniquity, transgression, and sin. Yet He will by no means leave the guilty unpunished; He will visit the iniquity of the fathers on their children and grandchildren to the third and fourth generations.”" },
          { n: 8, text: "Moses immediately bowed down to the ground and worshiped." },
          { n: 9, text: "“O Lord,” he said, “if I have indeed found favor in Your sight, my Lord, please go with us. Although this is a stiff-necked people, forgive our iniquity and sin, and take us as Your inheritance.”" },
        ],
        ground: {
          kind: "historical",
          text: "God gave Moses the first tablets, but Moses cuts these himself and carries them up the mountain. Then the LORD passes in front of him and proclaims words that later writers repeat throughout the Bible, in the Psalms, in Joel, in Jonah and in Nehemiah: he is compassionate and gracious, slow to anger, abounding in loving devotion and faithfulness, forgiving iniquity, transgression and sin. In the same breath he adds that he will by no means leave the guilty unpunished, but will visit the iniquity of the fathers on their children to the third and fourth generation.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "This is the nearest thing to a definition of God’s character in the Hebrew Bible, and the writer puts it in God’s own mouth immediately after the worst thing the people have done. God speaks both halves as one sentence. The clause about later generations is the harder half, and we should not smooth it over. It describes how the consequences of wrongdoing run down through families, which anyone who has watched a family knows happens, and it says that God somehow stands behind that. Later prophets, notably Jeremiah and Ezekiel, push back on it hard, and their objections deserve a hearing of their own. But there is no doubt which half the rest of the Bible quotes. When Jonah explains why he ran from God, he quotes the <b>mercy</b>.",
        lenses: {
          theo: "God proclaims these words after the golden calf, not before it, and that placement matters. He describes what he is like at the very moment the people have the least claim on his kindness.",
        },
      },
      {
        label: "Two",
        ref: "34:10–28 (selected)",
        kind: "scene",
        form: "prose",
        title: "The covenant again",
        verses: [
          { n: 10, text: "And the LORD said, “Behold, I am making a covenant. Before all your people I will perform wonders that have never been done in any nation in all the world. All the people among whom you live will see the LORD’s work, for it is an awesome thing that I am doing with you." },
          { n: 11, text: "Observe what I command you this day. I will drive out before you the Amorites, Canaanites, Hittites, Perizzites, Hivites, and Jebusites." },
          { n: 12, text: "Be careful not to make a treaty with the inhabitants of the land you are entering, lest they become a snare in your midst." },
          { n: 14, text: "For you must not worship any other god, for the LORD, whose name is Jealous, is a jealous God." },
          { n: 17, text: "You shall make no molten gods for yourselves." },
          { n: 21, text: "Six days you shall labor, but on the seventh day you shall rest; even in the seasons of plowing and harvesting, you must rest." },
          { n: 27, text: "The LORD also said to Moses, “Write down these words, for in accordance with these words I have made a covenant with you and with Israel.”" },
          { n: 28, text: "So Moses was there with the LORD forty days and forty nights without eating bread or drinking water. He wrote on the tablets the words of the covenant—the Ten Commandments." },
        ],
        ground: {
          kind: "historical",
          text: "God renews the covenant with a short list of terms rather than the full code. The people must make no cast idols, make no treaties with the peoples of the land, keep the festivals, and rest on the seventh day even at plowing time and harvest. When God calls himself a jealous God, the Hebrew word is closer to “zealous” or “fiercely committed” than to petty envy. Moses spends another forty days on the mountain, and this time he writes the words himself.",
          src: "Propp · Meyers",
        },
        meaning:
          "God gives the people a second chance on the same terms as before, not easier ones, and that is worth noticing. He relaxes nothing because of what they did. The small clause about plowing time and harvest reveals his intent: he commands rest in exactly the weeks of the year when stopping costs a farmer the most. If he had renewed the covenant on easier terms, he would have shown a lower opinion of the people he made it with.",
      },
      {
        label: "Three",
        ref: "34:29–35",
        kind: "scene",
        form: "prose",
        title: "The veil",
        verses: [
          { n: 29, text: "And when Moses came down from Mount Sinai with the two tablets of the Testimony in his hands, he was unaware that his face had become radiant from speaking with the LORD." },
          { n: 30, text: "Aaron and all the Israelites looked at Moses, and behold, his face was radiant. And they were afraid to approach him." },
          { n: 31, text: "But Moses called out to them; so Aaron and all the leaders of the congregation returned to him, and Moses spoke to them." },
          { n: 32, text: "And after this all the Israelites came near, and Moses commanded them to do everything that the LORD had told him on Mount Sinai." },
          { n: 33, text: "When Moses had finished speaking with them, he put a veil over his face." },
          { n: 34, text: "But whenever Moses went in before the LORD to speak with Him, he would remove the veil until he came out. And when he came out, he would tell the Israelites what he had been commanded," },
          { n: 35, text: "and the Israelites would see that the face of Moses was radiant. So Moses would put the veil back over his face until he went in to speak with the LORD." },
        ],
        ground: {
          kind: "historical",
          text: "Moses comes down with the tablets and does not know that his face is shining. Aaron and the people are afraid to come near him, so he covers his face with a veil, and from then on he wears it whenever he speaks to the people and takes it off whenever he goes in to speak with God. The Hebrew word for the shining is unusual, and centuries later Jerome’s Latin translation rendered it as “horned,” which is why Michelangelo carved his statue of Moses with horns.",
          src: "Propp · Childs",
        },
        meaning:
          "Moses, who asked to see God’s face, comes back down with a face no one can look at, and he is the last to know it. At the end of the chapter Moses makes a new arrangement: he puts the veil on for the people and takes it off for God. When a person draws near to God, he cannot see the change in himself, and other people find it unsettling. Moses does not explain it or defend it. He covers his face so that the conversation can go on.",
        addr: {
          mode: "names",
          text: "Whatever has changed in you through what you have lived through is probably more obvious to others than to you, and it may be the very thing they find hardest to be near.",
        },
        ask: "What has changed in you that you cannot see, and who has told you about it?",
      },
    ],
  },
  {
    id: "ex-35",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 35–40 (selected)",
    chapterIndex: 35,
    crossesChapters: true,
    title: "Just as the LORD had commanded",
    unitLabel: "Scene",
    thread: "Chapters 35 to 40 repeat the instructions of chapters 25 to 31 almost word for word, with one change: “you are to make” becomes “he made.” The writers could have said in a single verse that the people did everything God commanded. Instead they spend six chapters on it, and they place those chapters right after the golden calf.",
    closeEnd: "The cloud settles on the tent, God’s glory fills it, and Moses, who built it, cannot go in. A few verses later the writers end the book, with the people watching the cloud to know when to move.",
    passages: [
      {
        label: "One",
        ref: "35:1–29 (selected)",
        kind: "scene",
        form: "prose",
        title: "Everyone whose heart moved them",
        verses: [
          { n: 21, text: "And everyone whose heart stirred him and whose spirit prompted him came and brought an offering to the LORD for the work on the Tent of Meeting, for all its services, and for the holy garments." },
          { n: 22, text: "So all who had willing hearts, both men and women, came and brought brooches and earrings, rings and necklaces, and all kinds of gold jewelry. And they all presented their gold as a wave offering to the LORD." },
          { n: 29, text: "So all the men and women of the Israelites whose hearts prompted them brought a freewill offering to the LORD for all the work that the LORD through Moses had commanded them to do." },
        ],
        ground: {
          kind: "historical",
          text: "Moses collects the materials. Everyone whose heart moves them brings something, men and women alike, as a freewill offering: brooches, earrings, rings and ornaments, all of gold. The list of what they hand over closely matches what they gave Aaron in chapter 32 to make the calf.",
          src: "Propp · Meyers · Fretheim",
        },
        meaning:
          "If we read this beside the story of the calf, we see the same people, the same gold and the same eagerness, now directed somewhere else. The writer never draws the comparison for us. The earrings that became a calf a few chapters ago now go into a tent, and the difference is not that the people have become reliable. The difference is that this time God, not the people themselves, decided in advance what they would give to.",
        addr: {
          mode: "names",
          text: "The energy we put into the wrong thing is usually the same energy the right thing needs. We do not have to replace it, only direct it somewhere better.",
        },
        ask: "What have you poured yourself into that was aimed at the wrong thing, and could you direct that same effort somewhere better?",
      },
      {
        label: "Two",
        ref: "36:3–7",
        kind: "scene",
        form: "prose",
        title: "More than enough",
        verses: [
          { n: 3, text: "They received from Moses all the contributions that the Israelites had brought to carry out the service of constructing the sanctuary. Meanwhile, the people continued to bring freewill offerings morning after morning," },
          { n: 5, text: "and said to Moses, “The people are bringing more than enough for doing the work the LORD has commanded us to do.”" },
          { n: 6, text: "After Moses had given an order, they sent a proclamation throughout the camp: “No man or woman should make anything else as an offering for the sanctuary.” So the people were restrained from bringing more," },
          { n: 7, text: "since what they already had was more than enough to perform all the work." },
        ],
        ground: {
          kind: "historical",
          text: "The craftsmen come to Moses with a problem no one else in the Bible ever has: the people are bringing more than the work requires. So Moses sends word through the camp that no one should bring anything more, and the writer says the people stopped bringing.",
          src: "Meyers · Propp",
        },
        meaning:
          "This is the only place in the Bible where someone has to stop people from giving. The writer tells it as a small joke and a serious point at once. These are the people who complained about water, about food and about meat, and who built a calf out of impatience, and now Moses has to tell them to stop giving. No one has lectured them into it. God simply gave them something specific to do.",
      },
      {
        label: "Three",
        ref: "37:1–25 (selected)",
        kind: "scene",
        form: "prose",
        title: "He made it",
        verses: [
          { n: 1, text: "Bezalel went on to construct the ark of acacia wood, two and a half cubits long, a cubit and a half wide, and a cubit and a half high." },
          { n: 6, text: "He constructed a mercy seat of pure gold, two and a half cubits long and a cubit and a half wide." },
          { n: 10, text: "He also made the table of acacia wood two cubits long, a cubit wide, and a cubit and a half high." },
          { n: 17, text: "Then he made the lampstand out of pure hammered gold, all of one piece: its base and shaft, its cups, and its buds and petals." },
          { n: 25, text: "He made the altar of incense out of acacia wood. It was square, a cubit long, a cubit wide, and two cubits high. Its horns were of one piece." },
        ],
        ground: {
          kind: "historical",
          text: "Here the repetition is easy to see. In chapter 25 God said they were to construct an ark of acacia wood, two and a half cubits long and a cubit and a half wide. In chapter 37 the writer says that Bezalel constructed the ark of acacia wood, two and a half cubits long and a cubit and a half wide. The writer does the same for the table, the lampstand and the incense altar, with the same dimensions, the same materials and the same order, and he changes only the verb.",
          src: "Propp · Childs",
        },
      },
      {
        label: "Four",
        ref: "38:1–21 (selected)",
        kind: "scene",
        form: "prose",
        title: "The mirrors",
        verses: [
          { n: 1, text: "Bezalel constructed the altar of burnt offering from acacia wood. It was square, five cubits long, five cubits wide, and three cubits high." },
          { n: 8, text: "Next he made the bronze basin and its stand from the mirrors of the women who served at the entrance to the Tent of Meeting." },
          { n: 21, text: "This is the inventory for the tabernacle, the tabernacle of the Testimony, as recorded at Moses’ command by the Levites under the direction of Ithamar son of Aaron the priest." },
        ],
        ground: {
          kind: "historical",
          text: "Next come the altar and the bronze basin, along with one detail that appears nowhere in the instructions: Bezalel made the basin from the bronze mirrors of the women who served at the entrance to the tent. In chapter 30 God said only to make a bronze basin, without saying what to make it from. After this the writer lists the metal used, recorded like an account.",
          src: "Meyers · Propp",
        },
        meaning:
          "In six chapters of almost exact repetition, this is one of the few new details, and it is not a measurement. It is a note about where the bronze came from. Certain women handed over the mirrors they used to look at themselves, and the writer thought that worth recording by who gave it rather than by weight. In the inventory that follows, he counts everything in talents and shekels. In this verse he records something no inventory can count.",
      },
      {
        label: "Five",
        ref: "39:1–43 (selected)",
        kind: "scene",
        form: "prose",
        title: "As the LORD had commanded",
        verses: [
          { n: 1, text: "From the blue, purple, and scarlet yarn they made specially woven garments for ministry in the sanctuary, as well as the holy garments for Aaron, just as the LORD had commanded Moses." },
          { n: 32, text: "So all the work for the tabernacle, the Tent of Meeting, was completed. The Israelites did everything just as the LORD had commanded Moses." },
          { n: 42, text: "The Israelites had done all the work just as the LORD had commanded Moses." },
          { n: 43, text: "And Moses inspected all the work and saw that they had accomplished it just as the LORD had commanded. So Moses blessed them." },
        ],
        ground: {
          kind: "historical",
          text: "Throughout this chapter the writer repeats the phrase “just as the LORD had commanded Moses” like a refrain, seven times in the making of the priests’ garments alone. Then the people finish the work and bring it to Moses, and he inspects all of it and blesses them. The writer words that inspection to echo the end of the creation account in Genesis, where God finishes his work, sees it, and blesses it.",
          src: "Childs · Propp · Fretheim",
        },
        meaning:
          "Here the repetition pays off. The writer does not use the refrain as filler but as a verdict, repeated until no one can miss it: what God instructed and what the people made match exactly. Where the writers placed this chapter matters too. The story of the calf comes between the plans and the building, so this chapter records that what the people broke, they rebuilt exactly as God specified, down to the loops on the curtains. Scholars have offered other explanations, such as a scribe copying a block twice, or a text meant to be recited aloud rather than read. Neither explains why the repeated block sits precisely on the far side of the people’s failure.",
      },
      {
        label: "Six",
        ref: "40:17–38 (selected)",
        kind: "scene",
        form: "prose",
        title: "The cloud, and the glory",
        verses: [
          { n: 17, text: "So the tabernacle was set up on the first day of the first month of the second year." },
          { n: 33, text: "And Moses set up the courtyard around the tabernacle and the altar, and he hung the curtain for the entrance to the courtyard. So Moses finished the work." },
          { n: 34, text: "Then the cloud covered the Tent of Meeting, and the glory of the LORD filled the tabernacle." },
          { n: 35, text: "Moses was unable to enter the Tent of Meeting because the cloud had settled on it, and the glory of the LORD filled the tabernacle." },
          { n: 36, text: "Whenever the cloud was lifted from above the tabernacle, the Israelites would set out through all the stages of their journey." },
          { n: 37, text: "If the cloud was not lifted, they would not set out until the day it was taken up." },
          { n: 38, text: "For the cloud of the LORD was over the tabernacle by day, and fire was in the cloud by night, in the sight of all the house of Israel through all their journeys." },
        ],
        ground: {
          kind: "historical",
          text: "Moses sets up the tabernacle on the first day of the first month of the second year, almost exactly a year after the people left Egypt, and he finishes the work. Then the cloud covers the tent, the glory of the LORD fills it, and Moses cannot go in. The writer ends the book with the arrangement for travel: when the cloud lifted, the people set out, and when it stayed, they stayed, and the cloud was over the tent by day and fire was in it by night, in the sight of all Israel.",
          src: "Propp · Childs · Meyers",
        },
        meaning:
          "The last event in Exodus is that the man who built the tent cannot enter it. God does not punish or rebuke him. The tent is simply too full of God’s glory. Everything Moses asked for in chapter 33 has arrived, and it comes as something he cannot walk into. Then the writer stops in the middle of the journey, with an instruction about watching a cloud, which is the least conclusive ending he could have chosen. The people have spent forty chapters learning that God would not tell them the whole route, and the writer leaves them waiting each morning to see whether they will travel or stay.",
        lenses: {
          theo: "The writer ends the book with God present among his people, not with their arrival in the land. They have no land, no temple and no settled life yet. They have a tent, a cloud, and a willingness to move when God moves.",
        },
        addr: {
          mode: "names",
          text: "Some of us know what it is to receive what we asked for and find it larger than we can handle. Some of us also know the kind of guidance that tells us only whether to move today.",
        },
        ask: "If the only direction God gave you was to stay or to go, and only for today, could you live that way?",
      },
    ],
  },
];

export const OUT_OF_EGYPT_MOVEMENT: Movement = {
  "id": "out-of-egypt",
  "index": 1,
  "title": "Out of Egypt",
  "range": "Exodus 1–15:21",
  "throughline": "In Egypt the descendants of Jacob have grown into a people that no Egyptian record names, ruled by a king who will not listen to them, and their God tells them that he has heard their cries. This section follows them from the two midwives who refuse the king’s order to the song the people sing on the far shore of the sea.",
  "chapterStart": 1,
  "chapterEnd": 15,
  "situation": {
    "kicker": "The ground beneath the road out of Egypt",
    "title": "The situation",
    "image": "/images/exo-egypt.webp",
    "paragraphs": [
      "In the late Bronze Age, roughly 1550 to 1150 BCE, Egypt was the greatest power in the region, and its kings built with forced labor. Many Semitic-speaking people lived in the eastern part of the Nile delta. Some were slaves, some were servants, and a few rose to high office. Egyptian officials kept records of store cities, brick quotas and daily tallies of work, and the writers of the opening chapters of Exodus use that same vocabulary exactly.",
      "The writers never name the pharaoh, and that is the first difficulty for anyone who tries to date the story. Most scholars place it in the thirteenth century BCE, under Rameses II, largely because the writers name a city called Rameses among the cities the Israelites built. Around 1208 BCE, Rameses’ successor Merneptah set up a stone monument boasting of his victories, and on it his scribes list Israel among the peoples of Canaan. That is the earliest mention of Israel anywhere outside the Bible.",
      "Here we have to say something harder. No Egyptian record mentions the Israelites leaving, even though the Egyptians kept careful records. Archaeologists have found nothing in Sinai from a mass migration, and most of them read the evidence in Canaan as showing that Israel grew up largely from peoples already living there rather than arriving from outside. So we should not read the book as an eyewitness report. The Israelites told and retold it as the founding story of their nation, because they believed God had rescued them and they understood who they were by that rescue.",
      "Editors gave the book its final shape centuries after the events it describes, combining more than one source, and they worked among people who had lived under one empire or another for generations. It helps to keep that in mind while reading. The people who carried this story about walking out of an empire, and who finally wrote it down, were themselves living inside one."
    ],
    "timeline": [
      {
        "tag": "c. 1279–1213 BCE",
        "text": "Rameses II builds a great deal in the eastern delta, including a city named after himself."
      },
      {
        "tag": "c. 1208 BCE",
        "text": "On a victory monument, King Merneptah’s scribes name Israel as a people in Canaan. It is the earliest mention of Israel outside the Bible."
      },
      {
        "tag": "c. 1100s BCE",
        "text": "Israelites compose the Song at the sea (Exodus 15) in an archaic Hebrew. Scholars count it among the oldest poetry in the book."
      },
      {
        "tag": "700s–500s BCE",
        "text": "Scribes write down the prose stories and combine them, keeping more than one version side by side."
      },
      {
        "tag": "586 BCE",
        "text": "The Babylonians capture Jerusalem and carry many of its people into exile. From then on, Jews read this story about leaving an empire while living inside one."
      }
    ],
    "sources": "Propp · Assmann · Finkelstein & Silberman · Hoffmeier"
  },
  // No doorway. Movement 2 does not exist yet, and the content validator fails a doorway
  // pointing at a movement it cannot resolve. It arrives with the movement it points to.
  capstone: {
    kicker: "The first movement · Exodus 1–15:21",
    title: "The rescue, and the price on it",
    paragraphs: [
      "In fifteen chapters the writers take us from a king’s order to drown Hebrew baby boys in the Nile to a song sung on the far shore of the sea, and it is worth looking at the whole shape of it. God does not speak until the third chapter. When he does, he speaks to Moses, a man tending his father-in-law’s sheep, who then spends two chapters trying to refuse the task. Moses’ first visit to the king only makes things worse, and the people he promised to free turn against him. The writers let nothing happen quickly, and they seem to want it that way.",
      "The rescue also comes at a terrible cost. In one night every Egyptian family loses its firstborn son, and the writers tell us plainly that this answers the king’s order at the start to throw the Hebrew boys into the Nile. They reason by the rule of measure for measure, but naming that rule does not make us at peace with it. The writers give Israel a song and give Egypt no funeral. That imbalance is in the text itself, not something readers have added, and anyone who has been on the losing side of someone else’s liberation will find it hard to read.",
      "What the Israelites did with this memory is the surprising part. In the laws they built on the rescue, they keep returning to the foreigner: you were strangers in Egypt, so do not do to strangers what was done to you. They treated their deliverance as an obligation rather than a privilege. That does not settle the question of the cost. It only tells us what the people who kept the story did with it. At the end of this section the Israelites are out of Egypt but not yet home. The mountain still lies ahead, and the first thing they meet on the other side of their singing is thirst.",
    ],
    tensions: [
      {
        claim:
          "The Israelites remembered the exodus as their founding event, the moment God took the side of the enslaved.",
        counter:
          "Other biblical writers refuse to let Israel treat that choice as permanent or exclusive. The prophet Amos has God say that he brought the Philistines from Caphtor and the Arameans from Kir, just as he brought Israel out of Egypt. Amos means that the exodus is something God does for peoples, not a possession Israel holds.",
        where: "Amos 9:7 · Exodus 22:21 · Deuteronomy 10:19",
      },
    ],
    sources: "Propp · Fretheim · Walzer",
  },
  doorway: {
    kicker: "The second movement",
    title: "The road to the mountain",
    paragraphs: [
      "Leaving Egypt was the easy part, even though it took ten plagues and the parting of a sea. What follows is less dramatic and takes longer. Three days after the crossing the people find only bitter water, a month later they are hungry, and they travel through country where the only question that matters is whether they will have anything to drink tomorrow.",
      "In this section the people stop watching their own rescue and have to start living by it. God gives them bread that they cannot store, and a day each week on which there is nothing to gather. A foreign priest also tells their leader that he is going about his work the wrong way. None of this looks like the miracle at the sea, but all of it prepares the people for the mountain.",
    ],
    nextMovementId: "road-to-the-mountain",
  },
};

// Movement 2. Its chapter range is 16 to 18, so ex-15b (chapterIndex 15) claims it with an
// explicit movementId rather than by range, which is the override the Genesis 25 seam uses.
export const ROAD_TO_THE_MOUNTAIN_MOVEMENT: Movement = {
  id: "road-to-the-mountain",
  index: 2,
  title: "The road to the mountain",
  range: "Exodus 15:22–18",
  throughline:
    "Three days after the song at the sea the Israelites find only bitter water, and for the rest of the journey they have to learn to live on what God provides. He gives them bread for one day at a time and a day of rest each week, and a foreign priest tells Moses plainly that his way of leading is not working.",
  chapterStart: 16,
  chapterEnd: 18,
  situation: {
    kicker: "The ground beneath the road to the mountain",
    title: "The situation",
    image: "/images/exo-road.webp",
    paragraphs: [
      "The country between Egypt and Sinai is limestone, gravel and wind, and in it the whole problem is water. Springs lie days apart, and a bad one can end a journey. The writers give a list of stops, Marah, Elim, the wilderness of Sin, and Rephidim, which reads like a real route, but scholars can locate almost none of these places with confidence, and no one has securely identified the mountain itself.",
      "The writers tell these chapters differently from the ones before them. Every stop follows the same pattern: the people run short of something, they complain, God provides, and something is established that lasts beyond the crisis. God gives bread one day’s portion at a time and forbids them to store it. He teaches them a seventh day of rest through the way the bread arrives. Moses appoints judges over groups of thousands and of tens. The rescue is over, and now God and his people are building a way of life, which is why the writers spend more of these chapters teaching than telling a story.",
      "Before the people reach the mountain, the writers want us to notice one thing. The man who gives Israel its first working system of justice is Jethro, a priest from Midian, outside Israel. Moses welcomes him, eats with him and listens to him, several chapters before God makes any covenant with Israel. Whatever the law will come to mean, the writers have already shown that an outsider recognized Israel’s God before Israel had written any law down.",
    ],
    sources: "Propp · Meyers · Fretheim",
  },
  capstone: {
    kicker: "The second movement · Exodus 15:22–18",
    title: "Learning to live on what arrives",
    paragraphs: [
      "This is the quietest section of Exodus, and it is where God does much of his real work with the people. The crossing of the sea took a single night. This section covers weeks of thirst, hunger, quarreling and administration, and what God is teaching the people in it is not gratitude but how to receive what he provides. He gives bread that rots if they hoard it, and a day on which gathering gets them nothing. Their leader is so worn out that two men have to hold up his arms to get him through a battle.",
      "This is also where the people begin to complain, and the writers handle their complaints with care. Every time, God answers them with water, bread, or a system that works. Yet the people also give two places lasting names, Massah and Meribah, which mean testing and quarreling, and later biblical writers use those names as a warning. The writers let both things stand: God met the people’s demands, and the people remembered those demands as a failing.",
      "Then comes Jethro, the strangest figure in this section and the easiest to skip. He is a foreign priest, yet he blesses Israel’s God and eats with Israel’s elders. After watching Moses judge the people for a single day, he tells him that his way of working is not good, and Moses does everything Jethro suggests. So the people who are about to receive a law at the mountain have already taken their best idea about government from an outsider, and the writers neither apologize for this nor explain it away.",
    ],
    tensions: [
      {
        claim:
          "When the Amalekites attacked Israel, they struck the weak stragglers at the rear, and God declares that he will be at war with Amalek from generation to generation.",
        counter:
          "In the same section Moses seats a Midianite priest at Israel’s table and takes his advice, and the laws that follow command Israel to love foreigners because they were once foreigners themselves. The Bible holds both a lasting hatred and a standing duty to the outsider, and later writers handle the hatred with visible unease.",
        where:
          "Exodus 17:16 · Deuteronomy 25:17–19 · Exodus 18:12 · Deuteronomy 10:19 · 1 Samuel 15",
      },
    ],
    sources: "Propp · Fretheim · Meyers",
  },
  doorway: {
    kicker: "The third movement",
    title: "The covenant",
    paragraphs: [
      "By now God has rescued the people, fed them, given them water and helped them organize. What he has not yet given them are the terms of their relationship with him. In the next section they reach the mountain, and what Moses brings down from it is not another rescue but a written agreement: ten commands, followed by a long set of laws about oxen, debtors and daughters.",
      "Most readers skip this part of the book, yet the Israelites built a nation on it. Some of these laws may still make a claim on you, and some plainly will not. They are worth reading anyway, because a reader who is shown only the easy pages has not really been trusted with the book.",
    ],
    nextMovementId: "the-covenant",
  },
};

// The book-level "how it was written" overlay. One of only two places in the movement where the
// evidentiary situation is stated: here and the movement's situation panel. Everywhere else the
// ground notes stay literary, so a reader is not repeatedly told the story may not have happened.
// Movement 3. Chapters 19 to 24 by range: movement 2 ends cleanly at chapter 18, so no reading
// here needs the explicit movementId override that the chapter 15 seam required. No doorway
// until movement 4 exists, and no capstone until the movement is complete.
export const THE_COVENANT_MOVEMENT: Movement = {
  id: "the-covenant",
  index: 3,
  title: "The covenant",
  range: "Exodus 19–24",
  throughline:
    "God offers the people he has rescued the terms of a covenant, and they agree to them before they have heard what they are. Then the terms arrive: ten commands spoken out of the fire on the mountain, followed by a long set of case laws that people still argue over.",
  chapterStart: 19,
  chapterEnd: 24,
  situation: {
    kicker: "The ground beneath the covenant",
    title: "The situation",
    image: "/images/exo-covenant.webp",
    paragraphs: [
      "No one can locate the mountain with confidence, and its location matters less than the shape of what happens on it. The writers present the covenant at Sinai in the form of a treaty of that era between a great king and a lesser one. Such treaties name the great king, list what he has already done for the lesser party, set out the terms, and then call witnesses and spell out the consequences of breaking them. The Israelites took this diplomatic form from the world around them and put God in the place of the great king. In doing so they were saying whom they now belonged to.",
      "The laws themselves belong to a much older legal tradition. Mesopotamian kings had published law codes centuries earlier, such as the Code of Hammurabi, and those codes are written the same way, in long runs of cases beginning “if a man.” When scholars compare them, they find both borrowing and difference. The Israelite code protects the debtor, the foreigner and the servant much more than its neighbors did, and in places it values a person above property where they did not. It also allows one person to own another, and no comparison makes that easier to accept.",
      "Editors worked on these chapters over a long period, and we can still see where they joined their sources. The Ten Commandments appear twice in the Bible, here and in Deuteronomy, and the two lists do not match. In Exodus the reason for keeping the sabbath is that God rested after creation; in Deuteronomy it is that the Israelites were once slaves in Egypt. The editors kept both. That is how the people who shaped this book usually handled their own traditions, and it is worth knowing before reading a law code that later readers have often wished were seamless.",
    ],
    sources: "Childs · Propp · Meyers · Assmann",
  },
  capstone: {
    kicker: "The third movement · Exodus 19–24",
    title: "What the rescue was for",
    paragraphs: [
      "A covenant is not a rulebook, and the difference matters throughout this section. God gives the terms inside a relationship that already exists, after a rescue he has already carried out, to people who agreed before they had heard a word of them. The people do not keep these laws as the price of their freedom. In giving these laws, the writers showed what they thought freedom was for, and the writers had just seen an empire treat human beings as a supply of labor.",
      "That makes the contents of the code harder, not easier, to read. The law limits how long a man may be kept as a slave, but it assumes that he may be kept as one. It holds a master responsible if he knocks out a servant’s eye, yet lets him go unpunished if a servant he beats survives a day or two. When an ox gores a slave to death, it sets the payment to the slave’s master at thirty shekels of silver. These laws sit only a few chapters away from the command not to oppress a foreigner because Israel was once a foreigner in Egypt, and from a sabbath law written so that the people who work for you can rest. They come from the same document and the same mountain.",
      "The honest thing to say is that the Israelites were still arguing about these laws, and they went on arguing long after Sinai. In Deuteronomy, Moses revisits the law of release and commands that a freed servant be sent away with provisions. The prophet Jeremiah condemns the people of Jerusalem for freeing their slaves and then taking them back. In the Gospel of Matthew, Jesus says that Moses allowed divorce because of the hardness of people’s hearts, which concedes that some laws were a concession rather than an ideal. A reader who wants a law code that arrived perfect will not find one here. A reader who wants to watch a people work out, slowly and against their own interests, what having been slaves requires of them, is reading the right book.",
    ],
    tensions: [
      {
        claim:
          "God gives the law at the mountain, so readers may take its provisions to carry divine authority exactly as they stand.",
        counter:
          "Later biblical writers do not treat these laws as final. Deuteronomy revises the law of release, Jeremiah condemns a nation for going back on one, and Jesus says that one law was a concession to hard hearts rather than God’s ideal. In these passages the later writers are arguing with the earlier ones, and the Bible keeps a record of the argument.",
        where: "Deuteronomy 15:12–15 · Jeremiah 34:8–22 · Matthew 19:8",
      },
    ],
    sources: "Childs · Propp · Meyers",
  },
  doorway: {
    kicker: "The fourth movement",
    title: "The presence",
    paragraphs: [
      "Once the people have agreed to the covenant and sealed it, Moses goes up the mountain for forty days. What God gives him there is not more law. It is a set of building plans, measured in cubits, for a tent with poles run through rings so that the people can carry it.",
      "In this last section the writers show what the rescue was for. In the end God did not bring the people out for a law or for a land, but so that he could live among the people he had rescued. Before that can happen, though, the people go badly wrong.",
    ],
    nextMovementId: "the-presence",
  },
};

// Movement 4. Chapters 25 to 40 by range: movement 3 ends at chapter 24, so no reading here needs
// an explicit movementId. No doorway, because there is no movement 5; this is the last one.
export const THE_PRESENCE_MOVEMENT: Movement = {
  id: "the-presence",
  index: 4,
  title: "The presence",
  range: "Exodus 25–40",
  throughline:
    "This section tells of a tent, a failure and a rebuilding. God, who would not let himself be seen, arranges for the people to carry his dwelling with them. Before the plans are finished the people break the covenant, and at the end of the book a cloud settles on the tent, and no one can enter it.",
  chapterStart: 25,
  chapterEnd: 40,
  situation: {
    kicker: "The ground beneath the tabernacle",
    title: "The situation",
    image: "/images/exo-presence.webp",
    paragraphs: [
      "Almost every reader first asks about proportion. The writers of Genesis tell the creation of the world in thirty-one verses, while the writers of Exodus spend more than four hundred verses on a tent, because they describe it twice, once as instructions and once as the people build it. If we read Exodus only as a story, that looks badly out of balance. But the writers are making their point through the detail: God did not rescue the people simply so they could leave Egypt, but so that he could live among them, and these instructions show how that was arranged. When people care about something, they write down its details.",
      "The writers are describing a portable shrine, and other peoples in the region, in Egypt and among nomadic tribes, made shrines like it. The design is less strange than it first seems: a frame, curtains, an enclosure, and a series of spaces leading from an outer courtyard to an inner room. The difference lies in the center. Other peoples would have placed an image of their god there. The Israelites placed a box holding the terms of their covenant, with an empty space above it.",
      "Most scholars think priestly writers composed these chapters and gave the tabernacle a plan that closely matches the later temple in Jerusalem. Either they projected the temple back onto the wilderness, or the builders of the temple modeled it on the tent. We cannot now recover which, and the effect is the same either way. The priests handed people who had lost their temple a description of a sanctuary that could be packed up and carried, which was a pointed thing to give to exiles.",
    ],
    sources: "Meyers · Propp · Childs · Friedman",
  },
  capstone: {
    kicker: "The fourth movement · Exodus 25–40",
    title: "A tent, a failure, and a rebuilding",
    paragraphs: [
      "Most of these sixteen chapters describe carpentry and needlework, and that is how the writers answer the question of what the rescue was for. It was not for a land, which the people never reach within Exodus, and not for a temple, which lies centuries in the future. It was for a tent with poles run through rings, so that the people could carry with them the God who brought them out. The writers do not want us to read past the detail to find the meaning, because the detail is the meaning. This is how people write when they care about something.",
      "Before Moses has even come down with the plans, the people break the covenant. What they make at the foot of the mountain is not a different god, which would be easier to dismiss. It is an image of the God who brought them out, made because he had been silent for forty days and they wanted something they could see. Then comes the worst passage in this section. At Moses’ order, the Levites kill about three thousand of their own relatives, and the writer presents this as the act that qualifies the Levites to be priests. This is not a law that later readers can set aside as outdated. It is a killing the writer approves of. This guide cannot make it sit easily with the rest of the book and will not pretend to.",
      "Then the writers tell of the rebuilding. Across six chapters they repeat the instructions of the earlier seven almost word for word, turning each command into a report of what the people did. Their refrain gives a verdict: the people did everything exactly as God commanded, down to the loops on the curtains. By placing this after the people’s failure, the writers show that God remade exactly what had been broken. Then the cloud comes down on the tent, and Moses, who built it, cannot go inside. The writers end the book there, in the middle of the journey, with a people waiting to see whether tomorrow they will travel or stay.",
    ],
    tensions: [
      {
        claim:
          "The Levites kill three thousand of their own people, God rewards them with the priesthood, and the writer describes their act as taking the LORD’s side.",
        counter:
          "Yet the writers have just spent four chapters describing a priesthood whose task is to carry the people’s names into God’s presence and to bear their guilt. A priesthood founded by killing the very people it exists to carry is a contradiction the writers never resolve, and they leave the reader holding both.",
        where: "Exodus 32:26–29 · Exodus 28:29–30",
      },
    ],
    sources: "Childs · Propp · Meyers · Fretheim",
  },
};

export const EXODUS_INTRO: Panel = {
  kicker: "An introduction · Exodus 1–40",
  title: "The book of the going out",
  paragraphs: [
    "The name Exodus means “the going out,” and in this book the family of Jacob becomes a nation. The writers use three kinds of writing: a rescue told as a story, a covenant given as law, and then, for nearly a third of the book, instructions for building a tent. Readers who come for the sea and the mountain are often surprised by how much of the book is about carpentry.",
    "Editors assembled Exodus from more than one source, and they did not hide it. Sometimes they set two versions of an event side by side without reconciling them. God calls Moses twice, in chapters 3 and 6, and the two accounts sound like two different writers. In one description of the sea crossing a wind blows all night, and in another the water stands up like walls. The Song at the sea is written in a Hebrew centuries older than the prose around it. The editors gave the book its final shape long after the events it describes, among people whom the Babylonians had carried into exile and who knew what it was to live inside an empire.",
    "Most readers arrive wondering whether it happened. No Egyptian record mentions the Israelites leaving, though the Egyptians kept careful records of far smaller events. Archaeologists have found nothing in Sinai from a mass migration, and most read the evidence in Canaan as showing that Israel grew largely out of peoples already living there rather than arriving from outside. In the reconstruction most scholars hold, the exodus did not happen on the scale the book describes. (Finkelstein and Silberman.)",
    "Scholars on the other side make a serious case, and it deserves a hearing. The writers include details about Egypt that a later writer in Judah had little reason to know, several of the names in the book are Egyptian, including Moses, and no nation invents a past in which its own ancestors were slaves. On that view, something did happen to some group of people, on a smaller scale than the book describes, and the Israelites’ telling grew around it. (Hoffmeier.) Scholars still argue the question. No one disputes what the Israelites made of the story: they kept it as the founding memory of their people, and the other biblical writers return to it again and again.",
  ],
  sources: "Propp · Assmann · Finkelstein & Silberman · Hoffmeier",
};

// The book-level look-back over all forty chapters, rendered on its own screen one step past the
// last scene of the final reading. It carries the tension deferred from chapter 34: the character
// formula holds compassion and generational punishment in one sentence, and the canon spends
// centuries arguing with the second half. That argument is book-length, so this is the first place
// large enough to hold it.
export const EXODUS_CAPSTONE: Capstone = {
  kicker: "The whole book · Exodus 1–40",
  title: "Heard, brought out, and travelled with",
  paragraphs: [
    "Everything in Exodus grows out of four verbs in the second chapter, written before anyone has done anything: God heard, remembered, saw and knew. At that point God has announced no rescue, nothing changes in Egypt, and the people crying out have no idea that he has heard them. Forty chapters later a tent stands in the middle of their camp with a cloud resting on it. What happens in between is God acting on what he heard, and it takes far longer, costs far more, and goes wrong far more often than the short version most of us carry in our heads.",
    "The rescue came at a price. In one night every Egyptian family lost its firstborn, and the writers set that beside the Hebrew boys thrown into the Nile at the start of the book without ever making it comfortable. The law God gives at the mountain limits how long a man may be kept as a slave while assuming he may be kept as one, and it sets the payment for a slave killed by an ox at thirty shekels, only a few chapters before it commands Israel not to oppress a foreigner because they were once foreigners. At the foot of Sinai the Levites kill three thousand people, and their killing earns them the priesthood. This guide has not tidied any of that away, because a tidied version would no longer be this book. What we can say is that the people who kept these texts went on arguing with them, and the Bible preserves that argument too.",
    "And the people do not arrive. Exodus ends with no land, no temple and no settled life, only a tent, a cloud, and an instruction to watch the cloud to know whether to move on that day. Moses, who built the tent, cannot go inside it, because the presence he asked to see is greater than he can approach. Over forty chapters the writers make one claim, against every expectation their readers bring: God did not bring the people out simply so they could get somewhere. He brought them out because he meant to travel with them, and he did, long before they were ready for him.",
  ],
  tensions: [
    {
      claim:
        "God describes himself as compassionate, gracious and slow to anger, and in the same sentence he says that he punishes the sins of the fathers in their children to the third and fourth generation.",
      counter:
        "Later biblical writers argued with the second half of that sentence for centuries. Deuteronomy forbids putting fathers to death for their children’s sins or children for their fathers’. Jeremiah says that people will no longer repeat the proverb that the fathers ate sour grapes and the children’s teeth were set on edge. Ezekiel says it outright: the person who sins is the one who will die, and a son will not bear his father’s guilt. The biblical writers never resolve the question, and the Bible preserves the record of them changing their minds in public.",
      where:
        "Exodus 34:6–7 · Deuteronomy 24:16 · Jeremiah 31:29–30 · Ezekiel 18:20",
    },
  ],
  ask: "Exodus ends before the people arrive anywhere, and each day they can only be told whether to move on. What are you waiting to have settled before you will say your life has really begun? What would change if it were never settled?",
  sources: "Childs · Propp · Fretheim · Meyers",
};
