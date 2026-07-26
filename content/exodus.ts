import type { Movement, Panel, Reading } from "@/lib/types";

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
    thread: "A family becomes a people, and the moment they are many they are a problem. The book counts seventy names, then names nobody else, until two women refuse an order.",
    closeEnd: "The king who is never named gives up on secrecy and orders the whole nation to do his drowning for him.",
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
          text: "The book opens by counting. Seventy people, named one by one, who went down to Egypt. Then one verse crosses several centuries and the family has become a people filling the land. The Hebrew piles up the verbs of increase used of living creatures in Genesis 1.",
          src: "Propp · Sarna · Alter",
        },
        meaning:
          "The words for this people multiplying are the words of the creation account, <b>be fruitful and multiply</b>. So what Egypt does next is not just cruelty to a minority. It is set against what God said at the beginning. Notice too that the counting stops. After the seventy names, nobody is named again except two midwives. To an empire, people are a quantity.",
        lenses: {
          theo: "The promise to Abraham, that his descendants would be past counting, is kept in a foreign country while nobody is watching. God's word often does its work in the gaps between the stories.",
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
          text: "A new king who did not know Joseph, and the text describes the machinery rather than the man. Taskmasters, forced labour, store cities at Pithom and Rameses, work in brick and mortar. This is ordinary Egyptian building administration, and Semitic-speaking people did such work in the delta. The king is never named. The bureaucracy is described in detail.",
          src: "Assmann · Propp · Meyers",
        },
        meaning:
          "Fear does the reasoning. The king does not start from hatred but from a calculation about a future war, and the policy follows the arithmetic. Then the line the chapter turns on: the more they were oppressed, the more they multiplied. The oppression fails, and because it fails it escalates. A system that has decided a people are a problem never concludes it was wrong. It concludes it was not thorough enough.",
        lenses: {
          arch: "Growth read as threat, presence read as invasion, and the labour of the feared group holding up the economy that fears them. The pattern is old and has never stopped recurring. (The stranger who multiplies.)",
        },
        addr: {
          mode: "claims",
          text: "Something in your life runs on work you did not do, at a price you would not pay. The food, the building, the phone in your hand. The chapter puts the store cities in front of you and asks who they were for.",
        },
        ask: "Whose labour is underneath the ordinary comfort of your day, and what would it cost you to find out?",
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
          text: "Two midwives are ordered to kill, and they do not. The text records their names, Shiphrah and Puah, while the king of the greatest empire on earth goes unnamed throughout. Their answer to him is a lie told to a man who could kill them for it. The narrator does not apologise.",
          src: "Propp · Meyers · Sarna",
        },
        misreading: {
          named:
            "The midwives are a story about brave individuals, and the real subject is one wicked king.",
          why: "The chapter is built as a system, not a villain: a calculation, a labour policy, an escalation, and finally a decree handed to the whole population. By the last verse the killing is a civic duty for ordinary Egyptians. One bad man lets everybody off the hook. The midwives matter because they are the only two who decline.",
        },
        meaning:
          "These are the first people in the Bible to disobey a king, and they are foreign, poor, female and powerless. They do not lead a revolt. They keep doing their work and lie about the results. The text says they <b>feared God</b>, and sets that against fear of Pharaoh. That is what the whole book is about: which power you are actually afraid of.",
        lenses: {
          theo: "Scripture keeps two names Egypt would not have bothered to record, and drops the name of the king it carved into stone. The inversion is itself a judgement.",
        },
        addr: {
          mode: "claims",
          text: "You will not be asked to run an empire. You will be asked to go along with something small, and it will arrive as routine rather than as evil. The refusal available to the powerless is usually just declining to be efficient about it.",
        },
        ask: "What are you going along with because refusing would be awkward rather than dangerous?",
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
    thread: "The rescuer is himself rescued first, by women, and out of the same river that was meant to drown him. Then he tries to save someone by force, and has to run.",
    closeEnd: "Forty years pass in a sentence. The chapter ends not with Moses acting but with God hearing.",
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
          text: "The word used for the basket is the word used for Noah's ark, and it appears nowhere else in the Bible. Both are watertight boxes carrying a life through water that was meant to kill. The mother obeys Pharaoh's decree exactly, she does put the child in the Nile, and turns obedience into rescue. Similar stories were told of great men in the ancient world, most famously Sargon of Akkad, set adrift in a reed basket sealed with pitch.",
          src: "Propp · Sarna · Assmann",
        },
        meaning:
          "Five women save the future of Israel and the text keeps almost none of their names. A mother, a sister, a princess and, just before this, two midwives. The daughter of the man running the genocide pays the mother of the child to nurse her own son. That is the joke the chapter is telling: the empire's own household funds the rescue of the boy who will undo it.",
        lenses: {
          theo: "Deliverance starts small and domestic, in a basket and a bribe and a sister watching from the reeds, long before it looks like anything. God is not named once in this scene. The work still gets done.",
        },
        addr: {
          mode: "names",
          text: "The thing that saves you often arrives through people with no power and no title, doing something small and practical while the important people are looking elsewhere.",
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
          text: "He looks this way and that before he strikes, which is the detail that damns him. Not a man overtaken by rage but a man checking whether anyone is watching. The next day two Hebrews are fighting and one of them asks the question Moses cannot answer: who made you ruler and judge over us. He is a palace insider by upbringing and a Hebrew by birth, and neither side owns him.",
          src: "Propp · Childs",
        },
        meaning:
          "His first attempt at deliverance is a murder, and it fails on every count. It saves one man, it is done in secret, and within a day the people he meant to help have seen through him. Forty years of desert follow. The book does not treat this as a promising start that went wrong. It treats it as the wrong kind of power altogether, applied by the right man far too early.",
        lenses: {
          arch: "The rescuer who acts alone, in secret, and by force, and finds that the rescued do not want him. (The one who appoints himself.)",
        },
        addr: {
          mode: "names",
          text: "You have wanted to fix something that was genuinely wrong, and reached for the fastest tool, and discovered that the people involved never asked you and did not thank you.",
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
          text: "He does at a foreign well what he could not do at home: he defends strangers and it works. Midian lies east, across the Sinai, and he marries into a priestly family there. He names his son Gershom, a stranger there, and the name is his whole condition. The chapter closes on four verbs with God as their subject, heard, remembered, saw, knew, after nothing but silence.",
          src: "Propp · Fretheim · Sarna",
        },
        meaning:
          "The Hebrew name Moses is explained here from a verb meaning to draw out, though the name itself is plainly Egyptian, the ending in Thutmose and Rameses. He is a man with an Egyptian name, a Midianite wife and a Hebrew mother, at home nowhere. Then the chapter turns without warning. Nothing changes in Egypt. The king dies and another takes over, the work goes on, and the only new thing in the world is that God has heard.",
        lenses: {
          theo: "The text is careful not to say God acted. It says God heard, remembered, saw and knew. Everything the book does next comes out of that hearing, and the people crying out have no idea it has happened.",
        },
        addr: {
          mode: "names",
          text: "There is a long stretch in most lives where nothing visibly moves and the honest report is that you are keeping someone else's sheep. This chapter puts forty of those years in a single verse and insists they were not empty.",
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
    thread: "A bush burns without burning up, and a man turns aside to look. What he gets is not comfort but a job, and every objection he raises is answered with the same thing: I will be with you.",
    closeEnd: "He asked who he was. He was told who God is, and sent anyway.",
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
          text: "Moses is at work, minding a flock that is not his, on the far side of the wilderness. The bush is a common thornbush, the least impressive plant available. What stops him is not the fire but that it does not consume: he turns aside because something ordinary is not behaving. Only when he turns does the voice come.",
          src: "Childs · Propp · Sarna",
        },
        meaning:
          "The holy ground is a patch of desert that was not holy the day before and will not be marked afterward. It is holy because God is there now. And the sequence matters: the bush burns, Moses turns aside, then God speaks. He is not interrupted, he is invited to notice, and the noticing is his part.",
        lenses: {
          theo: "Nothing about the encounter is arranged by Moses. He is not praying, not seeking, not qualified, and not in a temple. He is at work in the middle of nowhere. God's initiative is the only reason anything happens.",
        },
        addr: {
          mode: "names",
          text: "You have almost certainly walked past something already, not because it was hidden but because you did not stop. This scene says the turning aside is the whole of your part in it.",
        },
        ask: "What have you noticed lately and not turned aside to look at?",
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
          text: "God's speech piles up verbs of attention: I have seen, I have heard, I know their sufferings, I have come down. Then the sentence turns without warning. I have come down to deliver them, so now go, I am sending you. Moses answers with the first of his objections, and it is a question about himself.",
          src: "Fretheim · Childs",
        },
        meaning:
          "The rescue is announced as God's own doing and then handed to a man, in the same breath, with no explanation of why it should need one. Moses asks the reasonable question, who am I, and gets no answer to it at all. He is told instead <b>I will be with you</b>. The question was about his adequacy. The reply changes the subject to God's presence, and that is the only assurance he is ever given.",
        lenses: {
          theo: "The sign offered is not proof beforehand but confirmation afterward: you will worship at this mountain when you have brought them out. He has to go first and get the evidence later, which is the ordinary shape of the thing.",
        },
        addr: {
          mode: "names",
          text: "When you have been asked to do something beyond you, the question that comes up is who am I, and this scene never answers it. It moves the ground from your competence to God's company, which is less comforting and more durable.",
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
          text: "The name is four consonants, YHWH, glossed here with a verb of being that can be read I am who I am or I will be what I will be. Hebrew has no tenses in the way English does, so the promise leans toward the future. Israel later stopped pronouncing it aloud and said Lord instead, which is why English Bibles print LORD in capitals.",
          src: "Childs · Propp · Sarna",
        },
        misreading: {
          named:
            "The name is a piece of metaphysics, God announcing that he is self-existent being.",
          why: "That reading arrived with Greek philosophy centuries later. The Hebrew is a verb, not a noun, and it is doing work in a conversation about rescue. Moses asks what to tell slaves who want to know whose authority he is on. The answer is closer to I will be there, as I will be there, which is a promise about what these people are about to see happen rather than a definition of the divine nature.",
        },
        meaning:
          "Ancient gods had names you could use, and knowing a name was a way of getting leverage. This name refuses that. It is a verb that will not sit still, and it commits to presence rather than to being available. What follows is entirely practical: go to the elders, go to the king, he will not listen, and I will stretch out my hand.",
        lenses: {
          theo: "God is identified to Moses first as the God of Abraham, Isaac and Jacob, which ties the rescue to promises made centuries earlier to people long dead. The name is new. The commitment is not.",
        },
        addr: {
          mode: "names",
          text: "You would probably rather have a God you could define than one who says he will be there. A definition can be filed away. A promise of presence has to be tested by going.",
        },
        ask: "Would you rather know what God is, or that God is with you? Answer honestly.",
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
          text: "Moses runs out of objections and is given signs instead, then a brother to do the speaking. On the road back there is a passage nobody has explained away: the LORD meets him at a lodging place and seeks to kill him, and Zipporah cuts her son's foreskin and touches his feet with it. It is old, compressed, and resists every smoothing anyone has tried on it. The chapter does not pause over it, and neither should a reader expect to resolve it.",
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
    thread: "The first thing the rescue does is make everything worse. The quota holds, the straw stops, and the people who were promised deliverance want the man who promised it gone.",
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
          text: "Straw was mixed into Nile mud to bind the brick, and Egyptian records do show quotas and daily tallies of bricks delivered. Withdrawing the straw while holding the number is a precise administrative cruelty rather than a rage. Pharaoh's charge is that the people are idle, which is the standard accusation of every system that has just increased what it demands.",
          src: "Sarna · Meyers · Assmann",
        },
        meaning:
          "Pharaoh's first words are a question: who is the LORD, that I should obey him. He is not being rhetorical, he genuinely does not know the name, and the whole contest to come is an answer to that sentence. What he does know is leverage. Make the work heavier and they will stop listening to talk of freedom, because a person who is exhausted cannot afford hope.",
        lenses: {
          arch: "Exhaustion used deliberately as a tool of control, so that there is no strength left over for imagining anything else. (Work as a way of keeping people quiet.)",
        },
        addr: {
          mode: "names",
          text: "You may know the state of being kept too busy to think, where the volume of what is required is itself the thing preventing you from asking whether it should be required.",
        },
        ask: "What in your life is kept unquestioned mainly because you are too tired to question it?",
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
          text: "The foremen are Israelites, appointed over their own people and beaten when the numbers fall short. They are caught between the taskmasters above and the workers below, responsible for a target they cannot meet. Their appeal to Pharaoh is refused in one line, and they walk out knowing they are in trouble.",
          src: "Meyers · Propp",
        },
        meaning:
          "The cruelty is administered by people who are themselves under it. That is how the system keeps running without anyone in it feeling like the villain: the taskmasters have quotas too, and the foremen take the beating for a shortfall they did not cause. Everyone is following a number. The number came from a man who did not want to be asked a question.",
        lenses: {
          theo: "Nothing here is miraculous and nothing improves. The book insists on giving this stretch its full weight rather than hurrying to the rescue, which is a kind of honesty about how deliverance actually feels from inside.",
        },
        addr: {
          mode: "names",
          text: "You have been the person passing on pressure you did not create, and the person absorbing it. Neither position feels like power, and both keep the machine turning.",
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
          text: "The foremen meet Moses and Aaron waiting in the road and wish judgement on them for making the people a stench to Pharaoh. Moses takes it straight to God and repeats the accusation almost word for word. The chapter ends there, with the complaint unanswered, and the reply does not come until the next chapter opens.",
          src: "Fretheim · Childs",
        },
        misreading: {
          named:
            "Moses lost his nerve here, and a stronger believer would not have spoken to God like that.",
          why: "The book puts his complaint in the text and lets it stand, and God's answer when it comes is not a rebuke. Scripture repeatedly hands its most trusted people the words to accuse God, in Job, in the psalms of lament, in Jeremiah. Treating that as failure of faith cuts out most of the Bible's own prayer language, and it leaves a reader in the same position with nothing permitted to say.",
        },
        meaning:
          "Why have you brought harm on this people, and why did you ever send me. He is not asking for information. He is saying the thing out loud that everyone in the story is thinking, which is that obedience made it worse. The book gives the movement's lowest point to the man who was told <b>I will be with you</b>, and does not resolve it for a chapter.",
        lenses: {
          theo: "Deliverance in this book gets worse before it gets better, and the text refuses to skip that part. The promise was presence, not a smooth road, and this is the first place the difference is felt.",
        },
        addr: {
          mode: "names",
          text: "You may have done the thing you believed you were asked to do, and watched it cost other people something. The accusation Moses makes is available to you, and this chapter shows it being made without apology.",
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
          text: "A second call, told in a different voice from the one that told chapter 3, which is why the name is disclosed again to a Moses who has already heard it. This telling is formal and legal in its cadence, and it states the promise in a series of clauses. A genealogy then interrupts to fix Moses and Aaron in the line of Levi, and the narrative resumes as though the interruption had not happened.",
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
    thread: "Nine rounds of the same shape: a demand, a refusal, a sign, a hardening. The signs work through the ordinary world, water and weather and livestock and light, and each one takes something Egypt trusted.",
    closeEnd: "The last sign is not sent in this chapter. It is announced, and the announcement is where the reading stops.",
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
          text: "The cycle is built as a pattern rather than a run of surprises: a demand, a refusal, a sign, a hardening, and again. The signs work through the ordinary world, water and weather and livestock and light, which is to say the order Egypt's gods were held to guarantee. The Nile goes first because the Nile is Egypt. Everything the country eats depends on its flooding.",
          src: "Propp · Fretheim · Assmann",
        },
        meaning:
          "The first sign takes the water. Not a plague sent from outside the world but the country's own river turned against it, and the fish die, and nobody can drink. Then the detail the story insists on: Pharaoh's magicians do the same thing. The sign is not overwhelming and it is not meant to be. It is the opening move of an argument about who the Nile actually belongs to.",
        lenses: {
          theo: "Egypt worshipped the river as a god. The contest is not staged in the sky but inside the things people depended on daily, which is where the question of what you actually trust gets settled.",
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
          text: "Frogs, then gnats out of the dust. The magicians match the frogs, which only doubles the misery, and then they fail. Their line to Pharaoh, that this is the finger of God, is the first admission from inside his own court that something has changed. He is unmoved.",
          src: "Propp · Sarna",
        },
        meaning:
          "Notice what Pharaoh's own experts can and cannot do. They can add frogs. They cannot remove them, and they cannot produce gnats at all. Egypt's power is real and it is entirely one-directional: it can make more of a problem, never less. When his advisers tell him plainly what they are looking at, he does not argue with them. He simply does not listen, which is a different thing from disagreeing.",
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
          text: "By the hail the warnings have become specific: bring the livestock under shelter and they will live. Some of Pharaoh's officials act on it and some do not, so the text quietly divides Egypt into those who heeded the word and those who did not. Afterward Pharaoh says the words I have sinned, and takes them back the moment the sky clears.",
          src: "Fretheim · Propp",
        },
        meaning:
          "This is the first confession in the book, and it is worth nothing. He says he has sinned while the hail is still falling and reverses himself as soon as it stops, which the narrator states flatly rather than condemning. Pressure produces the language of repentance easily. What it cannot produce is a changed man, and the difference only shows once the pressure is off.",
        lenses: {
          arch: "The apology extracted by consequence, sincere while the consequence lasts. (Repentance that is really negotiation.)",
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
          text: "Chapter 10 opens by saying it outright: I have hardened his heart. Three different Hebrew verbs are used across the cycle for this hardening, and in the early rounds the subject is usually Pharaoh himself. Only later does God become the one doing it. Then locusts strip whatever the hail left, and a darkness settles that the text calls a darkness that can be felt.",
          src: "Propp · Childs · Fretheim",
        },
        misreading: {
          named:
            "God hardened Pharaoh's heart, so Pharaoh was a puppet, punished for a refusal he was never free to avoid.",
          why: "Follow the verbs in order. Through the first five rounds it is Pharaoh who hardens his own heart, and only afterward is God named as the one who hardens it. The text describes something recognisable: a man makes the same refusal so many times that it stops being a choice and becomes his character, and Scripture is willing to call that hardening God's work as well as his own. It is not a story about a man denied the chance to repent. It is a story about a man who took the chance nine times and used it to say no.",
        },
        meaning:
          "The darkness is the sign before the last, and it undoes the first thing God ever made. Egypt's sun was its chief god and the pharaoh was held to be that god's son, so three days of dark in which nobody can see anyone else is a verdict on the whole arrangement. His officials have already broken, asking him whether he does not yet realise Egypt is destroyed. He answers by threatening Moses with death if he sees his face again.",
        lenses: {
          theo: "Where Israel lives there is light. The text keeps making that distinction not to flatter them but to say the darkness is not weather, it is aimed.",
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
          text: "The last sign is announced here rather than carried out, and the announcement is deliberately unbearable: every firstborn from the palace to the mill, and the livestock too. The firstborn son carried the inheritance and the family line, so this strikes at the future of every household in the country. Egypt holds Moses in high regard by now, which makes the announcement land in silence.",
          src: "Propp · Sarna · Assmann",
        },
        tensions: [
          {
            claim:
              "God's justice frees the enslaved, and the cost of that freedom falls on the nation that enslaved them, down to its children.",
            counter:
              "Other voices in the canon refuse to let a nation's guilt fall on its children, or to treat the exodus as Israel's private possession. Ezekiel is explicit that a son does not bear his father's guilt. Amos has God bringing the Philistines up from Caphtor in the same breath as Israel out of Egypt.",
            where: "Ezekiel 18:20 · Amos 9:7 · Jonah 4:11",
          },
        ],
        meaning:
          "There is no way to read this that makes the dead children acceptable, and the book does not offer one. What it offers is a mirror: Egypt began by drowning Hebrew boys in the river, and it ends by losing its own sons in a night. That is the logic of the story, measure for measure, and naming the logic is not the same as excusing it. The canon itself will argue with this page, which is why the argument is printed above rather than resolved.",
        addr: {
          mode: "claims",
          text: "The hardening is not a curiosity about someone else's free will. It is a description of what repeated refusal does to a person, and you have refused something small enough times to feel it setting. The reading asks you to find the place where you have stopped being able to choose differently.",
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
    thread: "The night is told twice, as a meal and as a death. The instructions keep stepping out of the story to say how this is to be done in generations to come, because the people keeping it will mostly be people who were not there.",
    closeEnd: "They leave in such haste the bread has no time to rise, and that unrisen bread becomes the thing eaten every year afterward.",
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
          text: "This is liturgy before it is narrative. The month is reset to be the first of the year, the lamb is chosen four days ahead, and the instructions are addressed to a whole congregation across generations. The blood goes on the doorframe as a mark. Passover almost certainly began as an older shepherds' rite, marking a flock and a season, which Israel took up and filled with this night.",
          src: "Sarna · Childs · Meyers",
        },
        meaning:
          "The meal is eaten dressed to travel, belt fastened and staff in hand, which makes it a strange sort of feast: food taken standing, by people who expect to be gone before morning. And the text is already looking past the night it describes. It tells them how to keep this when they are settled and safe and none of them remember Egypt, because a rescue that is not rehearsed is a rescue that gets forgotten.",
        lenses: {
          theo: "The blood is not payment and it is not magic. It is a mark that distinguishes a household, and the instruction attached to it is that when your children ask what this means, you tell them.",
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
          text: "At midnight there is a death in every Egyptian house, from the palace to the prison, and a great cry goes up. Pharaoh summons Moses in the dark and gives way completely, and then asks him for a blessing. The people leave in haste with dough that has not risen, and the text says a mixed multitude went up with them: not only Israelites, but anyone else in Egypt with reason to go.",
          src: "Propp · Sarna · Meyers",
        },
        meaning:
          "The cost is not softened. Egypt loses its sons in a night, and the freedom on the other side of that is real freedom bought at a price somebody else paid. That is the shape of the meal Israel is told to keep forever, and it is worth seeing what the meal actually does with it. It does not celebrate the death. It rehearses the escape, in unrisen bread and a hurried posture, and hands the story to children who will ask what it means.",
        addr: {
          mode: "claims",
          text: "You have inherited things that were paid for by people you never met, and mostly you eat them without asking. This night is kept every year precisely so that the cost stays attached to the freedom instead of quietly coming loose from it.",
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
          text: "Two things are fixed in place before the sea. Every firstborn is claimed, which binds the last plague to a permanent obligation, and the feast of unleavened bread is tied to the month of the departure. Then the route: not the short coastal road, which ran past Egyptian forts, but the long way round. A pillar of cloud goes ahead by day and a pillar of fire by night.",
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
    thread: "Water in front, an army behind, and no road. What the people want at that moment is not freedom. It is Egypt.",
    closeEnd: "They go in on dry ground, and the chapter ends with a people who believe, for now.",
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
          text: "Two accounts run through this chapter, woven together rather than blended. In one, a strong east wind drives the sea back through the night and Israel walks over on dry ground. In the other, Moses stretches out his hand and the waters stand as walls. Both are here and neither was removed. The Hebrew is yam suph, the sea of reeds, which is not the Red Sea that later translation made of it.",
          src: "Friedman · Propp · Alter",
        },
        meaning:
          "The first thing freed people do is ask to go back. Were there no graves in Egypt, they say, and it is not cowardice so much as arithmetic: a known misery against an unknown drowning. Moses tells them to stand still and watch. Then God tells him the opposite, why are you crying out to me, tell them to move. Both instructions are in the text, one line apart, and the chapter does not tidy them.",
        lenses: {
          theo: "That the editors kept two tellings, one where a wind blows all night and one where the water stands up like walls, says something about how the book holds its own memory. It did not need a single version to be true.",
        },
        addr: {
          mode: "names",
          text: "You know the place where going back looks reasonable and going forward looks impossible, and standing still is unbearable. The chapter puts the people exactly there and does not pretend the fear was unreasonable.",
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
    thread: "On the far shore they do not explain what happened. They sing it. And the song runs past the sea to a mountain and a sanctuary the story has not reached yet.",
    closeEnd: "It ends where it began, in Miriam's mouth, with a tambourine.",
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
          text: "The Song is very probably older than the prose around it, kept in an archaic Hebrew the later writers did not modernise, and it is among the oldest sustained poetry in the Bible. Miriam's couplet at the close, sung with a tambourine, may well be the core the whole song grew out of, with the long version given to Moses later. It is set here as verse, its lines broken where the Hebrew turns.",
          src: "Propp · Alter · Meyers",
        },
        tensions: [
          {
            claim:
              "The rescued sing, and what they sing about is the drowning of the men who chased them.",
            counter:
              "A rabbinic tradition has the angels wanting to sing too, and God stopping them: the works of my hands are drowning in the sea and you would sing. The tradition does not silence Israel, who were the ones in the water. It refuses the same song to everyone watching from dry land.",
            where: "Talmud, Sanhedrin 39b · Ezekiel 18:23",
          },
        ],
        meaning:
          "The song does two things at once and the second is easy to miss. It looks back at the sea, and then at verse 13 it turns and looks forward, to a people being led and planted on a mountain that does not exist yet in this story. That is why it was kept and sung for centuries: it is not a victory report. It is a people learning to say that the God who did that will also do this.",
        lenses: {
          theo: "The oldest thing in the book is a song rather than a law or an argument. What Israel preserved first was not an explanation of the rescue but the sound people made about it.",
        },
        addr: {
          mode: "pray",
          text: "This is handed to you as words rather than as information. If something has been got through, the song is available to say, including the part where it turns from what happened to what is still ahead.",
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
    thread: "Three days past the singing, the water is undrinkable. The song and the complaint are six verses apart in the same chapter, and the book does not treat that as a contradiction.",
    closeEnd: "Then Elim, twelve springs and seventy palms, mentioned without comment and left behind.",
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
          text: "Three days into the wilderness of Shur with no water, and the first water they find cannot be drunk. Marah means bitter, and the Hebrew lets the place and the people share the word. A tree is thrown in and the water turns sweet. Then a statute is given, before Sinai and without ceremony, and it is about listening.",
          src: "Propp · Sarna",
        },
        meaning: "The distance between the song and the complaint is three days and six verses, and the book sets them next to each other without flinching. It is the same people and the same God. What changed is only that there is a new problem, and the last rescue does not carry over to cover it. Then twelve springs at Elim, noted in a single verse and not dwelt on, which is roughly how good stretches get recorded.",
        lenses: {
          theo: "What is being tested is not whether they can bear thirst. It is whether the God who took them through the sea is still trusted when the next thing goes wrong, which is a different question and a harder one.",
        },
        addr: {
          mode: "names",
          text: "You know the interval between relief and the next need, and how short it turns out to be. Three days is about right.",
        },
        ask: "What did you come through recently, and how quickly did the next thirst arrive?",
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
    thread: "Hunger rewrites Egypt into a place of full pots. The answer is bread that cannot be stored, and a seventh day taught by the way the food behaves before it is ever commanded.",
    closeEnd: "They ate it for forty years, until the edge of a land they could farm.",
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
          text: "A month out of Egypt, and the complaint is precise: if only we had died there, where we sat by pots of meat and ate our fill. Slaves did not sit by pots of meat. The answer is bread from the sky with a condition attached, a day's portion each day, and the text says outright that the condition is a test.",
          src: "Propp · Fretheim",
        },
        meaning: "The false memory is the interesting part. Hunger has quietly improved Egypt into somewhere worth going back to, and nobody in the crowd corrects it. God does not correct it either. The answer to a lie told out of need is not an argument but food, and the food comes with the one rule that will actually address the fear underneath: enough, daily, and no more.",
        addr: {
          mode: "names",
          text: "A hard present is very good at making a bad past look survivable, and the improvement happens without you noticing you have made it.",
        },
        ask: "What are you remembering as better than it was, because now is hard?",
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
          text: "Quail in the evening, and in the morning a fine flaky substance on the ground. They ask man hu, what is it, and the question becomes the name. It melts in the sun and it will not keep overnight. Every attempt to identify it with a desert plant or insect secretion has to account for why it stopped when they reached farmland.",
          src: "Sarna · Propp",
        },
        meaning: "Everyone gathered what they needed, and when it was measured the one who gathered much had nothing left over and the one who gathered little had no lack. Then the rule: leave none until morning. Some did, and it bred worms. The wilderness economy is built so that hoarding is not so much forbidden as impossible, and a people who had been worked for someone else's storehouses are being taught to live without one.",
        lenses: {
          arch: "Provision that has to be received again each day and cannot be banked. (Daily bread.)",
        },
        addr: {
          mode: "claims",
          text: "Some of what you are holding was given for a day and has been kept for a year, and the keeping of it is doing something to you. This passage is not against provision. It is against the storehouse as a way of not having to trust anyone.",
        },
        ask: "What are you storing that was given to you for today?",
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
          text: "On the sixth day twice as much falls, and this time it keeps. Some go out on the seventh anyway and find nothing. Sabbath appears here, before Sinai and before any commandment, and it arrives as a fact about how the bread behaves rather than as a rule anyone is given.",
          src: "Meyers · Fretheim",
        },
        meaning: "Rest is taught before it is commanded, and it is taught by the food. The manna keeps on one day and rots on every other, so the week has a shape whether or not anyone approves of it. For people whose entire experience of time was a quota that never stopped, a day when gathering is pointless is not a restriction. It is the first evidence that they are no longer owned.",
        addr: {
          mode: "names",
          text: "You have probably tried to gather on the seventh day, and found nothing, and gone out again the next week to check.",
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
    thread: "Thirst again, and this time the quarrel has a question under it: is the LORD among us or not. Then the first battle, won by a man who cannot hold his own arms up.",
    closeEnd: "The chapter ends on a vow of war in every generation, which later parts of the Bible will handle with visible discomfort.",
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
          text: "No water at Rephidim. The people quarrel with Moses and he tells them they are testing God; he is close enough to being stoned to say so out loud. He is told to strike the rock at Horeb. The place keeps both names, Massah and Meribah, testing and quarrelling, and later writers return to it as the standing example of what not to do.",
          src: "Propp · Childs",
        },
        meaning: "The sentence the whole episode turns on is the one the narrator puts last: is the LORD among us or not. That is what the thirst is really asking, and it is the question the wilderness keeps asking in different forms for forty years. It is not answered with an argument. It is answered with water, which settles nothing permanently, which is why the question comes back.",
        lenses: {
          theo: "The complaint is treated as serious and is answered, and it is also given a name that sticks as a warning. Both at once. Scripture is willing to meet a demand and to remember that it was a demand.",
        },
        addr: {
          mode: "names",
          text: "Underneath most of your complaints about circumstances is a shorter question about whether anyone is actually there, and it usually goes unasked in those words.",
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
          text: "Amalek attacks, and the first battle in Israel's history is fought while Moses stands on a hill with the staff raised. When his hands are up they prevail, when they drop Amalek does. Aaron and Hur put a stone under him and hold his arms, one on each side, until sunset. The chapter closes on a vow of war with Amalek from generation to generation.",
          src: "Propp · Fretheim",
        },
        misreading: {
          named: "The raised hands are a technique: hold the right posture and God is obliged to act.",
          why: "The detail the story insists on is that Moses cannot do it. His hands get heavy, he needs a rock to sit on and two men to hold him up, and the sun has to go down before it is over. Read as technique it is superstition and it does not even work, since the technique fails every time the man performing it gets tired. Read as it is written, it is a picture of a leader who is visibly not the source of anything, being held in position by other people.",
        },
        meaning: "The victory is real and the man at the centre of it is propped up by his brother and a man we never hear from again. That is the whole image. Israel's first military success is staged so that nobody watching could mistake where the strength came from, least of all Moses, who spent the afternoon being carried.",
        addr: {
          mode: "names",
          text: "You have been in the position that required you to keep something up longer than you could, and whether it held depended on who was standing either side of you.",
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
    thread: "A foreign priest arrives, blesses Israel's God before Israel has a law, and then tells Moses that the way he is working is not good.",
    closeEnd: "Moses listens to him, does all of it, and sends him home to his own country.",
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
          text: "Jethro, priest of Midian, brings Moses' wife and two sons back to him at the mountain of God. He hears the whole account, says now I know that the LORD is greater than all gods, and brings a burnt offering. Aaron and all the elders of Israel come and eat bread with him in the presence of God.",
          src: "Propp · Meyers · Fretheim",
        },
        meaning: "The first person in this book to bless the God of Israel and offer sacrifice to him is not an Israelite. He is a Midianite priest, a professional of another religion, and the elders sit down and eat with him. This happens before Sinai, before the covenant, before a single law has been given. The book puts it there and adds no qualification at all.",
        lenses: {
          theo: "Whatever the covenant at the mountain is going to mean, it arrives after a foreigner has already recognised this God and been welcomed at the table. The order of events is doing work.",
        },
        addr: {
          mode: "names",
          text: "The recognition you were waiting for from inside your own circle may well arrive first from someone standing outside it, who owes you nothing.",
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
          text: "Jethro watches Moses judge the people from morning until evening and tells him plainly that what he is doing is not good, and that he will wear himself out along with everybody waiting. He proposes a structure: capable men who fear God and hate dishonest gain, set over thousands, hundreds, fifties and tens, with only the hard cases coming up. Moses listens and does all of it.",
          src: "Propp · Meyers",
        },
        meaning: "The correction does not come from God, and it does not come from Israel. It comes from a foreigner who watched for one day, and the text records without embarrassment that Moses simply took the advice. Notice the criterion for the men chosen: trustworthy, God-fearing, not on the take. Character, not expertise. And notice what it says about Moses, that the man who spoke with God at the bush could not see the flaw in his own working week until a visitor named it.",
        addr: {
          mode: "names",
          text: "There is something about how you work that an outsider would name in a day and that you have not been able to see in years, because you are inside it.",
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
    thread: "They are offered terms and accept them before they have heard what they are. Then the mountain is fenced, and what comes down it is fire, smoke and a sound that will not stop.",
    closeEnd: "The people are kept back, and Moses goes up. Everything after this arrives through him.",
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
          text: "Three months out of Egypt they camp in front of the mountain, and God's first words are not terms but a reminder: you saw what I did to Egypt, and I carried you on eagles' wings and brought you to myself. Only then the offer. If you keep the covenant you will be a treasured possession, a kingdom of priests, a holy nation. The whole earth is mine, it adds, which stops the choosing from meaning ownership of only one people.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "The people answer everything the LORD has spoken we will do, and they have not yet heard a single commandment. That is either faith or a kind of blindness and the book does not say which. What it does establish is the order: rescue, then relationship, then terms. Nothing here is a transaction in which obedience buys rescue. The rescue already happened, several chapters ago, while they were complaining.",
        lenses: {
          theo: "A kingdom of priests means the whole people, not a caste inside it. Whatever else the covenant does, it does not create a class of insiders with access and a class without.",
        },
        addr: {
          mode: "names",
          text: "You have said yes to something before knowing what it would ask, and meant it at the time. This scene does not treat that as foolish. It treats it as how most real commitments actually start.",
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
          text: "Two days of preparation: wash your clothes, be ready, and do not go near the mountain or even touch its edge, on pain of death. The boundary is set by Moses at God's instruction, and it applies to everyone including the priests. The instruction to abstain from sex before the encounter belongs to the ritual purity of the period and is stated without explanation.",
          src: "Propp · Meyers",
        },
        meaning:
          "The fence is the strange part. A God who has just spent fifteen chapters closing the distance between himself and these people now puts a line around the mountain and posts a death penalty on it. Nearness and danger are being held together rather than resolved, and the book will keep doing that: the same presence that rescues is not safe to walk into casually.",
        lenses: {
          arch: "The holy place that must be approached on terms, prepared for, and not strolled into. (The threshold that is guarded.)",
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
          text: "On the third morning: thunder, a thick cloud, a very loud trumpet, and the whole camp trembling. The mountain is in smoke because the LORD descended on it in fire, it shakes violently, and the trumpet gets louder rather than fading. Then Moses speaks and God answers in thunder. The chapter ends with him sent back down to warn the people again not to break through.",
          src: "Childs · Propp",
        },
        meaning:
          "The description is of a volcano or a storm and it is trying to say something neither quite covers. What the writers reach for is a presence that the physical world cannot hold steady around: smoke, fire, shaking, a sound that keeps rising. Then the anticlimax, which is deliberate. In the middle of all that, God's message is go down and tell them again to stay back. The pyrotechnics are not the point. The words that follow are.",
        addr: {
          mode: "names",
          text: "Whatever you imagine an encounter with God would settle for you, this scene suggests it would mostly be frightening, and that the content would arrive afterward, in sentences, once you had stopped shaking.",
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
    thread: "Ten sentences, most of them short, spoken out of the fire to a people who have already agreed to them. The tradition calls them the ten words rather than the ten commandments, which is what the Hebrew says.",
    closeEnd: "The people ask for a mediator, and the rest of the book is Moses going up and coming back down.",
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
            addr: { mode: "claims", text: "Before me does not mean instead of me. It means in my presence, which is harder. The question is not whether you have replaced God but what else is standing in the room." },
          },
          7: {
            addr: { mode: "claims", text: "This is about swearing by the name to make a lie stick, or acting in God's name for your own ends. Casual profanity is the least of what it covers." },
            note: "The Hebrew is closer to carrying the name emptily than to saying it rudely.",
          },
          8: {
            addr: { mode: "claims", text: "The command is to stop, and it is addressed to the whole household including the servants and the foreigner. Nobody rests alone." },
            note: "The reason given here is creation. Deuteronomy gives a different one: because you were slaves in Egypt.",
          },
          12: {
            addr: { mode: "claims", text: "Written for adults with ageing parents rather than for children, and attached to the length of a people's life in the land." },
          },
          13: {
            note: "The verb is ratsach, unlawful killing. It is not the word used for war or for judicial execution, which the same code goes on to prescribe.",
          },
          16: {
            note: "Courtroom language. This is perjury against a neighbour, in a system with no police and no forensics, where a false witness could end a life.",
          },
          17: {
            addr: { mode: "claims", text: "The only one of the ten that legislates for what happens inside you, where no court could reach." },
            note: "Notice the list it appears in: house, wife, servants, ox. A wife is named among a man's property, which is the frame the command was written inside.",
          },
        },
        ground: {
          kind: "historical",
          text: "They open not with a command but with a claim about what has already happened: I am the LORD your God, who brought you out of Egypt, out of the house of slavery. The obligations follow from the rescue rather than earning it. Two versions survive in the Bible, here and in Deuteronomy, and they differ, most visibly in the reason given for the sabbath. Neither was harmonised away.",
          src: "Childs · Propp · Meyers",
        },
        meaning:
          "The order matters. Four words about God, then one about parents, then five about the person next to you, and the whole thing is addressed to a single person, you, singular, standing in a crowd. What is being built is not a legal system, which comes in the next three chapters, but a shape for a free people: how to hold God, time, family, life, marriage, property and speech, in that order.",
        lenses: {
          theo: "The rescue comes first and the obligations second, which is the order the whole Bible keeps returning to. These are not the terms on which Israel was freed. They are what freedom is for.",
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
          text: "The people see the thunder and the mountain smoking, and they stand far off and ask Moses to speak instead, because if God speaks to them directly they will die. Moses answers that the fear is the point and also that they should not be afraid, which is not quite a contradiction.",
          src: "Childs · Fretheim",
        },
        meaning:
          "They asked for the mediator. It was not imposed on them. Having heard ten sentences directly, they decided they would rather have them relayed, and the whole remaining shape of the book, a man going up and coming back down with the words, is the answer to a request the people made out of terror.",
        addr: {
          mode: "names",
          text: "You have probably wanted the thing at a distance too, relayed by someone else, in a form you could put down. Wanting it and dreading it at once is what this scene is made of.",
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
            addr: { mode: "none-but", text: "No claim on you at all. Kept here because of what it says: a tool on the stone profanes it, so the altar has to be something nobody improved." },
          },
          26: {
            addr: { mode: "none-but", text: "Also no claim on you, and worth seeing rather than skipping. The reason given is bodily exposure, which is the kind of plain physical concern a religion of temples and steps had to legislate for." },
          },
        },
        ground: {
          kind: "historical",
          text: "The first laws given after the ten are about how to build an altar, and they are almost aggressively plain: earth, or undressed stone, and no steps. Wherever God causes his name to be remembered, he will come and bless. No temple, no masonry, nothing a craftsman could take credit for.",
          src: "Propp · Childs",
        },
        meaning:
          "These make no claim on you, and they are here rather than left out because of what they refuse. Every other religion in the region built upward and built impressively. This one begins by ruling out the tooled stone and the staircase. The first architectural instruction Israel receives is a restriction on how much of the altar can be its own achievement.",
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
    thread: "The case law begins with people rather than property, and the first person it deals with is a slave. This is the page of the Bible most readers would rather was not there.",
    closeEnd: "It ends with a person given a price in silver, in the same chapter that began by limiting how long one could be held.",
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
            addr: { mode: "none-but", text: "No claim on you, and the first thing the code legislates. Six years, then out, free rather than in debt. A limit on a master by the standards of its neighbours. Still one man owning another for six years." },
          },
          6: {
            note: "The pierced ear makes the choice to stay permanent and visible. The law provides for a servant who says he loves his master, and also makes leaving cost him the wife and children the master gave him.",
          },
          7: {
            addr: { mode: "none-but", text: "The hardest sentence in the chapter, and it is not softened here. A daughter is sold, and she does not walk out at seven years the way a man does. What follows are conditions on her treatment, which is a protection and not a release." },
          },
          11: {
            note: "If he fails any of the three things owed her, she goes free with nothing paid. The code protects her inside the arrangement. It does not question the arrangement.",
          },
        },
        ground: {
          kind: "historical",
          text: "The Covenant Code opens with slavery, which tells you what the ancient world took to be the first question of civil law. Comparison with the codes around it is genuinely two-sided. Israel's law caps a Hebrew servant's term at six years where its neighbours had no such limit, forbids sending them out empty-handed elsewhere in the canon, and makes injury to a servant a matter for the courts. It also assumes throughout that a person may be owned, and it treats a daughter differently from a son.",
          src: "Propp · Meyers · Childs",
        },
        misreading: {
          named:
            "These laws were just the times. Everyone had slaves, so there is nothing here to answer for.",
          why: "It is true that everyone had slaves, and it explains nothing that matters. The same chapter departs sharply from its neighbours in other places, making a master liable for a servant's eye, so the writers were plainly capable of legislating against the grain when they chose to. And the excuse proves too much: if a text is only ever as good as its era, it has nothing to say to any other era, including yours. The honest position is narrower and harder. This is a real limit placed on a real evil by people who did not abolish it, in a book that later turns the memory of slavery into an argument against oppression.",
        },
        meaning:
          "Read it as legislation rather than as endorsement and the shape becomes visible: it is a code restraining an institution it assumes. Six years and not forever. Provision owed to a woman sold into a household, and freedom if the provision fails. These are the moves of someone limiting a practice from inside it. That is worth seeing clearly, and it is not the same as the practice being fine, and the book itself will not let it be, because the same people go on to build their entire ethic of the outsider on having been slaves.",
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
            addr: { mode: "claims", text: "Still claims you. Stealing a person and selling them is a capital crime in the same chapter that regulates owning one. The code draws a line at seizing a human being that it does not draw at holding one." },
          },
          20: {
            addr: { mode: "none-but", text: "A master who beats a servant to death is punished. A real restraint, and rare among contemporaries where a slave was property to be damaged." },
          },
          21: {
            addr: { mode: "none-but", text: "And then this. If the servant survives a day or two there is no penalty, and the reason given is that the servant is property. There is no reading of that sentence which is not what it appears to be." },
          },
          24: {
            addr: { mode: "none-but", text: "Eye for eye is a ceiling, not a licence. Where an injury could be answered by wiping out a family, the rule is that the penalty may not exceed the harm. It reads as savage and was written to restrain savagery." },
          },
          26: {
            addr: { mode: "none-but", text: "A servant blinded or losing a tooth goes free, so an owner who injures one loses them entirely. The incentive runs the right way, and that it was needed tells you what it was needed against." },
          },
        },
        ground: {
          kind: "historical",
          text: "Case law: if a man does this, then this follows. The sequence runs from murder through striking a parent and kidnapping to injury in a brawl, and then to injury done to a servant. Capital sentences here are prescribed for things no modern legal system treats that way, including cursing a parent. The talion formula, eye for eye, appears three times in the Torah and is quoted more often than it is read.",
          src: "Childs · Propp · Meyers",
        },
        tensions: [
          {
            claim:
              "This is God's law, given at the mountain, and it regulates the ownership and beating of human beings.",
            counter:
              "The canon does not leave the page where it found it. Deuteronomy revisits the release and orders the master to send a freed servant away supplied, not empty-handed. Jeremiah treats a release granted then revoked as covenant-breaking grave enough to judge the nation. And the gospels concede, of a different law, that it was written in for hardness of heart, which is the canon calling some of its own legislation accommodation rather than ideal.",
            where: "Deuteronomy 15:12–15 · Jeremiah 34:8–22 · Matthew 19:8",
          },
        ],
        meaning:
          "Two things are true here at once and holding both is the work. A master who kills a servant is punished, which was not standard. A master who beats one who survives is not, because the servant is property, which is exactly as bad as it sounds. The code is neither a monster nor a model. It is an argument in progress.",
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
            note: "The ox is stoned and its meat may not be eaten, which treats the animal as bearing something like guilt rather than as a defective possession.",
          },
          32: {
            addr: { mode: "none-but", text: "A free person killed by an ox brings a judgement on the owner's negligence. A servant killed by the same ox brings a fixed thirty shekels to the master, and the servant's family is not mentioned." },
          },
        },
        ground: {
          kind: "historical",
          text: "The goring ox is the most discussed case in ancient law and versions of it appear in codes centuries older. The escalation is careful: an ox with no history is one thing, an ox already known to gore is another, and an owner who was warned and did nothing may himself be put to death. Liability turns on what the owner knew.",
          src: "Propp · Childs",
        },
        meaning:
          "The chapter ends by doing the arithmetic out loud. For a free person the case goes to judgement. For a servant it is a fixed rate paid to the master, and the dead person's family does not appear in the sentence. Nothing is hidden. The code states what a person is worth when the person is owned, in the same book that opened with a God who heard slaves crying.",
        addr: {
          mode: "claims",
          text: "Somewhere in the arrangements you live inside, a life has a number attached: an insurance table, a settlement figure, an acceptable rate. The instinct is to say we have moved past this page. The page is at least explicit about its number.",
        },
        ask: "Where does the system you benefit from put a price on a person, and do you know what it is?",
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
    thread: "The same code that regulated owning a person turns outward here, and grounds its treatment of the outsider in the memory of having been one.",
    closeEnd: "Rest is commanded twice, and both times the reason given is somebody else's tiredness.",
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
            addr: { mode: "none-but", text: "No claim on you, and its history makes leaving it out dishonest. This sentence was read at witch trials for centuries, in Europe and in New England, to justify killing mostly poor and mostly old women. The verse did not cause that. It was used for it." },
          },
          21: {
            addr: { mode: "claims", text: "Still claims you, and it is the hinge of the code. The reason given is not compassion but memory: you were foreigners. The ethic is built out of what these people had been." },
          },
          22: {
            addr: { mode: "claims", text: "The widow and the orphan are the standing test of a society in this literature, because they are the people with nobody to argue for them." },
          },
          25: {
            addr: { mode: "claims", text: "Lending to the poor without interest. Money owed by someone with nothing is not an ordinary investment." },
          },
          27: {
            addr: { mode: "claims", text: "Give the cloak back by sunset, because it is what he sleeps in. Then a reason startling in a legal code: if he cries out to me, I will hear." },
            note: "The same verb for crying out that was used of Israel in Egypt. The poor man in your debt is now in the position Israel was in.",
          },
        },
        ground: {
          kind: "historical",
          text: "The code moves from property to persons with no visible seam: restitution for a stolen ox, a capital sentence for sorcery, then the foreigner, the widow, the orphan and the debtor. Other ancient codes protect the vulnerable too, usually as an act of the king's mercy. Here the obligation is grounded in the people's own history instead.",
          src: "Meyers · Propp · Childs",
        },
        meaning:
          "Read the reason clauses and the argument becomes visible. Do not oppress a foreigner, because you were foreigners. Give the cloak back, because he cries out and I hear. This is a legal document that keeps stopping to explain itself, and every explanation points back to Egypt. The ethic is not deduced. It is remembered.",
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
            addr: { mode: "claims", text: "Do not follow a crowd into wrongdoing, and do not shade your testimony to go along with the majority. Written for a world of village courts and just as applicable to a room where everyone has already agreed." },
          },
          3: {
            note: "And do not favour a poor man in his lawsuit either. The code protects the poor relentlessly everywhere else, and here it refuses to let sympathy bend a verdict. Impartiality cuts both ways or it is not impartiality.",
          },
          4: {
            addr: { mode: "claims", text: "Your enemy's ox, wandering. You are to take it back to him. Not forgive him, not reconcile, just return the animal, which is a smaller and more doable thing than most instructions about enemies." },
          },
          9: {
            addr: { mode: "claims", text: "Said twice in two chapters, and the second time with the reason sharpened: you know how it feels. Not you should imagine, but you know." },
          },
          11: {
            addr: { mode: "none-but", text: "No claim on you unless you farm, and worth seeing for its logic. The land rests, and what grows untended is left for the poor to eat. Rest is legislated so that it produces food for someone who owns nothing." },
          },
          12: {
            addr: { mode: "claims", text: "The sabbath again, and here the reason is not creation but the exhaustion of other people: so that your servant and the foreign resident may be refreshed. Your rest is meant to reach the people who work for you." },
          },
        },
        ground: {
          kind: "historical",
          text: "A run of laws about testimony and courts, then the enemy's stray animal, then the seventh year and the seventh day. The sabbath year here is agricultural and its stated purpose is not piety: the land lies fallow so that the poor may eat what grows on it, and the wild animals get what is left after that.",
          src: "Meyers · Fretheim",
        },
        meaning:
          "Two things stand out from a code written three thousand years ago. It refuses to bend a verdict toward the poor, having spent chapters protecting them, because a court that favours anybody is not a court. And it makes rest an obligation you owe other people: the land rests so the poor eat, the week rests so your servant and the foreigner catch their breath. Rest here is not self-care. It is redistribution.",
        addr: {
          mode: "claims",
          text: "Your rest is legislated in this code for the sake of the people who work for you. Whatever you do with a day off, the question this page asks is whether anyone further down gets one because of it.",
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
    thread: "The terms are read aloud, agreed a second time, and then sealed in a way no modern reader finds comfortable. After which seventy men climb the mountain and have lunch.",
    closeEnd: "Moses goes up into the cloud for forty days, and the book leaves him there.",
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
          text: "Moses writes the words down, builds an altar with twelve pillars, and has young men offer oxen. Half the blood goes against the altar and half is kept in basins. He reads the book aloud, the people answer that they will do it, and then he throws the blood over them and calls it the blood of the covenant. Treaty ratifications in this world involved a slaughtered animal and a ceremony binding both parties.",
          src: "Childs · Propp · Meyers",
        },
        meaning:
          "They agree three times in this movement, and this is the third and the most physical. It is not a signature. Blood from the same animals goes on the altar and on the people, which puts both parties in the same substance, and there is no way to be sprinkled and consider yourself uninvolved. Whatever else a covenant is here, it is not an arrangement you could later say you had not really entered.",
        lenses: {
          arch: "The bond sealed in blood rather than in words, so the parties cannot afterward claim the words were misunderstood. (What is cut cannot be uncut.)",
        },
        addr: {
          mode: "names",
          text: "You have agreed to things in a way that could be walked back, and to a few that could not. The difference is rarely in the words. It is in what was done at the time.",
        },
        ask: "What have you entered that you could not now claim you had not entered?",
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
          text: "Seventy-four men go up: Moses, Aaron, two of his sons, and seventy elders. They see the God of Israel, with something like a pavement of sapphire under his feet, clear as the sky itself. The text says God did not raise his hand against them, which tells you what was expected. And they ate and drank. Then the cloud covers the mountain for six days and Moses is called into it for forty.",
          src: "Childs · Propp",
        },
        meaning:
          "This is the strangest paragraph in the movement and it is easy to skim. Seventy-four men see God and the narrator will not describe him, only what was under his feet, and then records that they had a meal. After nineteen chapters of a mountain nobody may touch, the covenant ends with a group of people eating in the presence of the thing that could kill them. The fence has not moved. What changed is that terms now exist.",
        lenses: {
          theo: "The meal is the point of the ceremony, not an anticlimax after it. Eating together is what parties to a covenant did, and it is the nearest this book has come to saying the distance is closed.",
        },
      },
    ],
  },
];

export const OUT_OF_EGYPT_MOVEMENT: Movement = {
  "id": "out-of-egypt",
  "index": 1,
  "title": "Out of Egypt",
  "range": "Exodus 1–15:21",
  "throughline": "A people with no name in anyone's record, a king who will not hear them, and a God who says he has. From the two midwives who refuse an order to the song on the far shore.",
  "chapterStart": 1,
  "chapterEnd": 15,
  "situation": {
    "kicker": "The ground beneath the road out of Egypt",
    "title": "The situation",
    "paragraphs": [
      "Egypt in the late Bronze Age was the greatest power in the region, and it built with conscripted labour. Semitic-speaking people lived in the eastern delta in numbers, some enslaved, some in service, a few risen high. Store cities, brick quotas and daily tallies are the ordinary furniture of Egyptian administration, and the opening chapters use that vocabulary exactly.",
      "The book never names its pharaoh, which is the first difficulty for anyone trying to date it. The conventional window is the thirteenth century, under Rameses II, largely because the story names a city that bears his name. Around 1208 BCE a victory stele of his successor Merneptah lists Israel among the peoples of Canaan, the earliest mention of Israel anywhere outside the Bible.",
      "The harder thing to say plainly is this. No Egyptian record mentions the departure, and Egypt kept careful records. Nothing has been found in Sinai from a mass migration, and the archaeology of Canaan points to Israel emerging largely from within it rather than arriving from outside. What the book gives is not a report. It is a founding charter, told and retold by people who believed that a deliverance had happened and who understood themselves by it.",
      "It reached its final shape centuries after the events it describes, from more than one source, among people for whom empire was the permanent condition. That is worth holding while reading. A story about walking out of an empire was carried, and finally written down, by people living inside one."
    ],
    "timeline": [
      {
        "tag": "c. 1279–1213 BCE",
        "text": "Rameses II builds extensively in the eastern delta, including a city bearing his name."
      },
      {
        "tag": "c. 1208 BCE",
        "text": "The Merneptah stele names Israel as a people in Canaan: the earliest mention outside the Bible."
      },
      {
        "tag": "c. 1100s BCE",
        "text": "The Song at the sea, in archaic Hebrew, is among the oldest poetry the book preserves."
      },
      {
        "tag": "700s–500s BCE",
        "text": "The prose traditions are written down and combined, more than one voice kept side by side."
      },
      {
        "tag": "586 BCE",
        "text": "Jerusalem falls and the exile begins. A story about leaving an empire is now read from inside one."
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
      "Fifteen chapters from a policy of drowning boys in a river to a song on the far shore of a sea. The shape of it is worth seeing whole. God does not appear for four chapters. When he does, it is to a man minding someone else's sheep who spends two chapters refusing. The first attempt makes things worse, and the people promised freedom turn on the man who promised it. Nothing here happens quickly, and the book seems to want it that way.",
      "And it is paid for. Egypt loses its firstborn in a night, and the story tells you plainly that this mirrors the boys thrown in the Nile at the start. Measure for measure is the logic, and naming a logic is not the same as being at peace with it. The movement gives Israel a song and gives Egypt no funeral. That asymmetry is in the text, not smuggled in by a reader, and it will sit badly with anyone who has been on the losing side of someone else's liberation.",
      "What Israel did with the memory is the surprising part. The law built on this rescue keeps circling back to the foreigner: you were strangers in Egypt, so do not do to them what was done to you. The deliverance became an obligation rather than a privilege. That does not settle the cost. It only says what the people who kept the story did with it. They are out. They are not home, the mountain is still ahead, and the first thing waiting on the other side of the singing is thirst.",
    ],
    tensions: [
      {
        claim:
          "The exodus is the founding act: God takes a side, and the side is the enslaved.",
        counter:
          "The same canon refuses to make that side permanent or exclusive. Amos has God bringing the Philistines up from Caphtor and the Arameans from Kir in the same breath as Israel out of Egypt, which makes the exodus a thing God does rather than a possession Israel holds.",
        where: "Amos 9:7 · Exodus 22:21 · Deuteronomy 10:19",
      },
    ],
    sources: "Propp · Fretheim · Walzer",
  },
  doorway: {
    kicker: "The second movement",
    title: "The road to the mountain",
    paragraphs: [
      "Getting out was the easy part, and it took ten signs and a sea. What follows is harder to dramatise and takes longer: three days to the first bad water, a month to the first hunger, and a stretch of country where the only question that matters is whether there is anything to drink tomorrow.",
      "This is where the people stop being an audience to their own rescue and start having to live on it. They are given bread that cannot be stored, a day in the week when gathering is pointless, and a foreign priest who tells their leader he is doing it wrong. None of it looks like the sea. All of it is the training for the mountain.",
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
    "Three days past the song the water is bitter, and the rest of the way is learning to live on what arrives. Bread for a day, a day for rest, and a foreigner who says plainly that this is not working.",
  chapterStart: 16,
  chapterEnd: 18,
  situation: {
    kicker: "The ground beneath the road to the mountain",
    title: "The situation",
    paragraphs: [
      "The country between Egypt and Sinai is limestone, gravel and wind, and the whole problem in it is water. Springs are days apart and a bad one ends a march. The itinerary the book gives, Marah, Elim, the wilderness of Sin, Rephidim, reads like a real route, though almost none of the places can now be located with any confidence and the mountain itself is not securely identified.",
      "These chapters work differently from the ones before them. Each stop follows the same shape: a shortage, a complaint, provision, and then something that outlasts the crisis. A day's portion and no storing. A seventh day taught by the way bread behaves. Judges appointed over thousands and tens. The rescue is finished and what is being built now is a way of living, which is why the wilderness material teaches more than it narrates.",
      "One thing is worth naming plainly before the mountain. The man who gives Israel its first working system of justice is a Midianite priest, and he is welcomed, fed and listened to, several chapters before any covenant exists. Whatever the law is going to mean, the book has already established that this God was recognised from outside before he was codified from within.",
    ],
    sources: "Propp · Meyers · Fretheim",
  },
  capstone: {
    kicker: "The second movement · Exodus 15:22–18",
    title: "Learning to live on what arrives",
    paragraphs: [
      "This is the quiet movement, and it is the one that does the actual work. The sea was a single night. This is weeks of thirst, hunger, quarrelling and administration, and what the people are being taught in it is not gratitude but a way of holding provision. Bread that rots if hoarded. A day when gathering achieves nothing. A leader who has to be propped up by two men to get through an afternoon.",
      "It is also where the complaints start, and the book is careful with them. They are answered, every time, with water or bread or a workable system. And they are also given names that stick, Massah and Meribah, testing and quarrelling, which later writers use as a warning. Both things are allowed to be true. The demand was met and the demand is remembered as a demand.",
      "Then Jethro, which is the strangest thing here and the easiest to skip. A foreign priest blesses Israel's God, eats with the elders, watches Moses work for one day and tells him it is not good. Moses does everything he says. The people who will shortly receive a law at a mountain have already taken their best piece of governance from an outsider, and the book does not apologise for it or explain it away.",
    ],
    tensions: [
      {
        claim:
          "Amalek attacked the weak at the rear, and the LORD is at war with Amalek from generation to generation.",
        counter:
          "The same movement seats a Midianite priest at Israel's table and takes his advice, and the law built on this rescue commands love for the foreigner because you were foreigners yourselves. The canon carries both a perpetual enmity and a standing obligation to the outsider, and later writers handle the first with visible unease.",
        where:
          "Exodus 17:16 · Exodus 18:12 · Deuteronomy 10:19 · 1 Samuel 15",
      },
    ],
    sources: "Propp · Fretheim · Meyers",
  },
  doorway: {
    kicker: "The third movement",
    title: "The covenant",
    paragraphs: [
      "They have been rescued, fed, watered and organised. What they have not been given is terms. The next stretch is the mountain, and what comes off it is not another rescue but a document: ten sentences, then a long code of case law about oxen and debtors and daughters.",
      "It is the part of the book most readers skip and the part its own people built a nation on. Some of it will still make a claim on you. Some of it plainly will not, and is worth seeing anyway, because a book that hides its hardest pages is not being trusted with anything.",
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
    "A people who have been rescued are offered terms, and agree to them before they have heard what they are. Then the terms arrive: ten sentences out of the fire, and a long code of case law that is still argued over.",
  chapterStart: 19,
  chapterEnd: 24,
  situation: {
    kicker: "The ground beneath the covenant",
    title: "The situation",
    paragraphs: [
      "The mountain cannot be located with any confidence, and it matters less than the shape of what happens on it. The covenant at Sinai is built like a treaty of its period between a great king and a lesser one: the king named, what he has already done for the lesser party recited, then the terms, then witnesses and consequences. Israel took the diplomatic form of its world and put God in the position of the great king, which is a claim about who they now belonged to rather than a literary borrowing for its own sake.",
      "The law itself sits inside a much older legal tradition. Codes from Mesopotamia predate this one by centuries and share its case-law grammar, the long run of sentences beginning if a man. Comparison shows both the borrowing and the divergence. This code is markedly more protective of the debtor, the foreigner and the servant than its neighbours, and it values a person above property in places where they did not. It also permits a person to be owned, which no comparison softens.",
      "These chapters were edited over a long time and the seams are visible. The ten words appear twice in the Bible, here and in Deuteronomy, and the two do not match: the reason given for the sabbath is creation in one and slavery in Egypt in the other. Both were kept. That is characteristic of how this book handles its own traditions, and it is worth knowing before reading a code that later readers have often wanted to be seamless.",
    ],
    sources: "Childs · Propp · Meyers · Assmann",
  },
  capstone: {
    kicker: "The third movement · Exodus 19–24",
    title: "What the rescue was for",
    paragraphs: [
      "A covenant is not a rulebook and the difference runs through this whole movement. The terms arrive inside a relationship that already exists, after a rescue that has already happened, to people who agreed before they had heard a word of it. Nothing here is the price of being freed. It is what somebody thought freedom was for, written down by people who had just watched an empire treat human beings as a labour supply.",
      "Which makes the code's own contents harder rather than easier. It caps how long a man may be owned and it assumes he may be owned. It makes a master liable for a servant's eye and lets him go unpunished if the beaten servant survives two days. It prices a life at thirty shekels when the life is a servant's. These sit a few chapters from the command not to oppress a foreigner because you were foreigners, and from a sabbath legislated so that the people who work for you can breathe. The same document, the same mountain.",
      "The honest thing to say is that this is an argument in progress rather than a finished position, and the arguing does not stop here. Deuteronomy revisits the release and orders a freed servant sent away supplied. Jeremiah treats a revoked release as grounds for judging the nation. A gospel principle concedes that some of it was written in for hardness of heart. A reader who wants a code that arrived perfect will not find one. A reader who wants to watch a people work out, slowly and against their own interests, what having been slaves obliges them to, is in the right book.",
    ],
    tensions: [
      {
        claim:
          "The law is given by God at the mountain, so its provisions carry divine authority as they stand.",
        counter:
          "The canon does not treat them as final. It revises the release law, condemns a nation for revoking one, and concedes elsewhere that a provision was an accommodation to hardness of heart rather than an ideal. Scripture here is a record of an argument, and the later voices in it are arguing with the earlier ones.",
        where: "Deuteronomy 15:12–15 · Jeremiah 34:8–22 · Matthew 19:8",
      },
    ],
    sources: "Childs · Propp · Meyers",
  },
};

export const EXODUS_INTRO: Panel = {
  kicker: "An introduction · Exodus 1–40",
  title: "The book of the going out",
  paragraphs: [
    "Exodus means the going out, and it is the book where a family becomes a nation. It moves through three kinds of writing: a rescue told as story, a covenant given as law, and then, for nearly a third of its length, instructions for building a tent. Readers who arrive for the sea and the mountain are often surprised by how much of the book is joinery.",
    "It is a composite book, and it does not hide it. More than one telling runs through it, sometimes laid side by side without being reconciled: Moses is called twice, in two different voices, and the crossing of the sea is described both as a wind blowing all night and as water standing up like walls. The Song at the sea is in an archaic Hebrew centuries older than the prose around it. It reached its final shape long after the events it describes, among people carried off to Babylon who knew what it was to live inside an empire.",
    "Then the question most readers arrive with. No Egyptian record mentions the departure, and Egypt kept careful records of far smaller things. Nothing has been found in Sinai from a mass migration, and the archaeology of Canaan points to Israel emerging largely from within it rather than arriving from outside. On the most widely held reconstruction, the exodus as the book narrates it, on that scale, did not happen. (Finkelstein and Silberman.)",
    "The serious case on the other side is worth hearing rather than waved past. The book carries Egyptian detail a later Judean writer had little reason to know, several of its names are Egyptian, including Moses, and no nation invents for itself an origin in which its ancestors were slaves. On that reading something happened to somebody, smaller than the telling, and the telling grew around it. (Hoffmeier.) The argument is genuinely open. What is not in question is what the story became: the founding memory of the people who kept it, and the event the rest of the Bible keeps turning back to.",
  ],
  sources: "Propp · Assmann · Finkelstein & Silberman · Hoffmeier",
};
