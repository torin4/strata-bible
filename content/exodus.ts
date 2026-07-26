import type { Movement, Reading } from "@/lib/types";

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
    tier: "grounded",
    span: "Exodus 14",
    chapterIndex: 14,
    title: "The sea",
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
      },
    ],
  },
  {
    id: "ex-15a",
    bookId: "exodus",
    tier: "grounded",
    span: "Exodus 15:1–21",
    chapterIndex: 15,
    title: "The Song at the sea",
    passages: [
      {
        ref: "15:1–21",
        kind: "poem",
        form: "poetry",
        title: "The Song at the sea",
        verses: [
          { n: 1, text: "Then Moses and the Israelites sang this song to the LORD: “I will sing to the LORD, for He is highly exalted. The horse and rider He has thrown into the sea." },
          { n: 2, text: "The LORD is my strength and my song, and He has become my salvation. He is my God, and I will praise Him, my father’s God, and I will exalt Him." },
          { n: 3, text: "The LORD is a warrior, the LORD is His name." },
          { n: 4, text: "Pharaoh’s chariots and army He has cast into the sea; the finest of his officers are drowned in the Red Sea." },
          { n: 5, text: "The depths have covered them; they sank there like a stone." },
          { n: 6, text: "Your right hand, O LORD, is majestic in power; Your right hand, O LORD, has shattered the enemy." },
          { n: 7, text: "You overthrew Your adversaries by Your great majesty. You unleashed Your burning wrath; it consumed them like stubble." },
          { n: 8, text: "At the blast of Your nostrils the waters piled up; like a wall the currents stood firm; the depths congealed in the heart of the sea." },
          { n: 9, text: "The enemy declared, ‘I will pursue, I will overtake. I will divide the spoils; I will gorge myself on them. I will draw my sword; my hand will destroy them.’" },
          { n: 10, text: "But You blew with Your breath, and the sea covered them. They sank like lead in the mighty waters." },
          { n: 11, text: "Who among the gods is like You, O LORD? Who is like You—majestic in holiness, revered with praises, performing wonders?" },
          { n: 12, text: "You stretched out Your right hand, and the earth swallowed them up." },
          { n: 13, text: "With loving devotion You will lead the people You have redeemed; with Your strength You will guide them to Your holy dwelling." },
          { n: 14, text: "The nations will hear and tremble; anguish will grip the dwellers of Philistia." },
          { n: 15, text: "Then the chiefs of Edom will be dismayed; trembling will seize the leaders of Moab; those who dwell in Canaan will melt away," },
          { n: 16, text: "and terror and dread will fall on them. By the power of Your arm they will be as still as a stone until Your people pass by, O LORD, until the people You have bought pass by." },
          { n: 17, text: "You will bring them in and plant them on the mountain of Your inheritance—the place, O LORD, You have prepared for Your dwelling, the sanctuary, O Lord, Your hands have established." },
          { n: 18, text: "The LORD will reign forever and ever!”" },
          { n: 19, text: "For when Pharaoh’s horses, chariots, and horsemen went into the sea, the LORD brought the waters of the sea back over them. But the Israelites walked through the sea on dry ground." },
          { n: 20, text: "Then Miriam the prophetess, Aaron’s sister, took a tambourine in her hand, and all the women followed her with tambourines and dancing." },
          { n: 21, text: "And Miriam sang back to them: “Sing to the LORD, for He is highly exalted; the horse and rider He has thrown into the sea.”" },
        ],
        ground: {
          kind: "genre",
          text: "The Song is very probably older than the prose around it, kept in an archaic Hebrew that the later writers did not modernise, and it is among the oldest sustained poetry in the Bible. It ends somewhere the story has not yet reached, at a mountain and a sanctuary. Miriam's couplet at the close, sung with a tambourine, may well be the core that the whole song grew out of.",
          src: "Propp · Alter · Meyers",
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
      "The harder thing to say plainly is this. No Egyptian record mentions the departure, and Egypt kept careful records. Nothing has been found in Sinai from a mass migration, and the archaeology of Canaan points to Israel emerging largely from within it rather than arriving all at once from outside. What the book gives is not a report. It is a founding charter, told and retold by people who believed that a deliverance had happened and who understood themselves by it.",
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
  }
};
