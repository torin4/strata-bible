import type { Movement, Panel, Reading } from "@/lib/types";

// Ruth, book three. Four chapters, 85 verses, every passage a narrative scene.
//
// The book divides into four acts, one per chapter: the road, the field, the threshing floor,
// the gate. That division is carried by the reading map, one reading per act. It is deliberately
// NOT carried by the movement layer: four situation panels and four capstones wrapped around 85
// verses would be more apparatus than scripture, which is the failure the density gate exists to
// prevent one layer down. Two movements, split at the book's own hinge.
//
// Only movement 1 is declared, and it carries no doorway, until movement 2 has readings: the
// content validator fails an empty movement range and a doorway pointing at an unknown movement.
//
// The scripture here was materialised verbatim from content/bsb-ruth.ts and is enforced by the
// verse-integrity invariant in scripts/validate-content.ts. Never retype a verse by hand.

export const RUTH: Reading[] = [
  {
    id: "ruth-1",
    bookId: "ruth",
    tier: "sitting",
    span: "Ruth 1",
    chapterIndex: 1,
    title: "The road",
    unitLabel: "Scene",
    thread: "A famine takes a family out of Bethlehem, and inside five verses the husband and both sons are dead. What is left is three widows on a road, and an argument about whether anyone should follow anyone.",
    closeEnd: "The barley harvest is the first thing in the chapter that is not a loss, and Naomi does not mention it.",
    passages: [
      {
        label: "One",
        ref: "1:1–7",
        kind: "scene",
        form: "prose",
        title: "House of bread",
        verses: [
          { n: 1, text: "In the days when the judges ruled, there was a famine in the land. And a certain man from Bethlehem in Judah, with his wife and two sons, went to reside in the land of Moab." },
          { n: 2, text: "The man’s name was Elimelech, his wife’s name was Naomi, and the names of his two sons were Mahlon and Chilion. They were Ephrathites from Bethlehem in Judah, and they entered the land of Moab and settled there." },
          { n: 3, text: "Then Naomi’s husband Elimelech died, and she was left with her two sons," },
          { n: 4, text: "who took Moabite women as their wives, one named Orpah and the other named Ruth. And after they had lived in Moab about ten years," },
          { n: 5, text: "both Mahlon and Chilion also died, and Naomi was left without her two sons and without her husband." },
          { n: 6, text: "When Naomi heard in Moab that the LORD had attended to His people by providing them with food, she and her daughters-in-law prepared to leave the land of Moab." },
          { n: 7, text: "Accompanied by her two daughters-in-law, she left the place where she had been living and set out on the road leading back to the land of Judah." },
        ],
        ground: {
          kind: "historical",
          text: "Bethlehem means house of bread, and the book opens with a famine in it. The family walks east to Moab, across the Dead Sea, close enough to reach on foot and foreign enough to matter: Moab is the neighbour Israel's texts are most hostile to. The two sons are called Mahlon and Chilion, names that sound like the Hebrew for sickness and for wasting away. Then three deaths in three verses, with ten years passing inside half a sentence.",
          src: "Campbell · Hubbard · Sasson · Alter",
        },
        meaning:
          "The book begins by subtracting. A husband, then ten years, then both sons, and the verb used twice for what happens to Naomi is the one used of what is left over after a disaster. Notice what the narrator does not do. No reason is given, no fault is assigned, and nobody is told what any of it was for. The first thing that moves is a rumour: she hears there is food at home, and she gets up.",
        lenses: {
          theo: "God does nothing in the first five verses and is not blamed for them either. The first mention of him is second-hand, a report reaching Moab that he has given his people bread. Whatever is moving her at this point is a rumour of a harvest.",
        },
      },
      {
        label: "Two",
        ref: "1:8–18",
        kind: "scene",
        form: "prose",
        title: "Go back",
        verses: [
          { n: 8, text: "Then Naomi said to her two daughters-in-law, “Go back, each of you to your mother’s home. May the LORD show you loving devotion, as you have shown to your dead and to me." },
          { n: 9, text: "May the LORD enable each of you to find rest in the home of your new husband.” And she kissed them as they wept aloud" },
          { n: 10, text: "and said, “Surely we will return with you to your people.”" },
          { n: 11, text: "But Naomi replied, “Return home, my daughters. Why would you go with me? Are there still sons in my womb to become your husbands?" },
          { n: 12, text: "Return home, my daughters. Go on, for I am too old to have another husband. Even if I thought there was hope for me to have a husband tonight and to bear sons," },
          { n: 13, text: "would you wait for them to grow up? Would you refrain from having husbands? No, my daughters, it is much more bitter for me than for you, because the hand of the LORD has gone out against me.”" },
          { n: 14, text: "Again they wept aloud, and Orpah kissed her mother-in-law goodbye, but Ruth clung to her." },
          { n: 15, text: "“Look,” said Naomi, “your sister-in-law has gone back to her people and her gods; follow her back home.”" },
          { n: 16, text: "But Ruth replied: “Do not urge me to leave you or to turn from following you. For wherever you go, I will go, and wherever you live, I will live; your people will be my people, and your God will be my God." },
          { n: 17, text: "Where you die, I will die, and there I will be buried. May the LORD punish me, and ever so severely, if anything but death separates you and me.”" },
          { n: 18, text: "When Naomi saw that Ruth was determined to go with her, she stopped trying to persuade her." },
        ],
        ground: {
          kind: "historical",
          text: "Naomi releases them, and what she wishes on them is <b>hesed</b>, translated here as loving devotion: the book's key word, and it always means someone doing more than they owe. Her argument is a property argument. In a society held together by households and land, a woman with no husband and no sons has no standing and no income, and she is telling them accurately that she has nothing to give. Ruth's reply is not a sentiment. It is an oath, sworn in the LORD's name, calling down punishment on herself if she breaks it.",
          src: "Campbell · Trible · Eskenazi & Frymer-Kensky",
        },
        misreading: {
          named:
            "Naomi is at a low point of faith here, and the book is on its way to correcting her.",
          why: "She says the hand of the LORD has gone out against her, and says it again on arrival, and nobody in the book ever contradicts her. Not Ruth, not Boaz, not the narrator, and not God. The blessing at the end is spoken over a grandchild, not over a correction. Her account of her own life is allowed to stand, which is not the same as the book agreeing with it, and it is a great deal more room than most readers have been given.",
        },
        meaning:
          "Three women stop on a road and argue about whether loyalty is worth what it costs. Naomi is right on the facts: she has nothing to offer and says so twice. Orpah does the sensible thing, and the text does not blame her for it or mention her again. Then Ruth, who is the foreigner here, binds herself to a destitute woman and to a God she has no reason to trust, in the strongest form of words available to her. The line is read at weddings. It is spoken by a widow to her mother-in-law, on a road, with nothing waiting at the other end.",
        lenses: {
          theo: "Naomi asks God to show them the loving devotion she believes he has stopped showing her. She is still praying, and what she prays for is that these two will be treated better than she has been.",
        },
        tensions: [
          {
            claim:
              "Ruth declares herself into Israel: your people will be my people, and your God will be my God.",
            counter:
              "The law bars her people from the assembly of the LORD to the tenth generation, and a later reform sent foreign wives away. This book answers by making her David's great-grandmother and saying so in its last line.",
            where: "Deuteronomy 23:3 · Ezra 9–10 · Nehemiah 13:23–27 · Ruth 4:17",
          },
        ],
      },
      {
        label: "Three",
        ref: "1:19–22",
        kind: "scene",
        form: "prose",
        title: "Call me Mara",
        verses: [
          { n: 19, text: "So Naomi and Ruth traveled until they came to Bethlehem. When they entered Bethlehem, the whole town was stirred because of them, and the women of the town exclaimed, “Can this be Naomi?”" },
          { n: 20, text: "“Do not call me Naomi,” she replied. “Call me Mara, because the Almighty has dealt quite bitterly with me." },
          { n: 21, text: "I went away full, but the LORD has brought me back empty. Why call me Naomi? After all, the LORD has testified against me, and the Almighty has afflicted me.”" },
          { n: 22, text: "So Naomi returned from the land of Moab with her daughter-in-law Ruth the Moabitess. And they arrived in Bethlehem at the beginning of the barley harvest." },
        ],
        ground: {
          kind: "historical",
          text: "The whole town turns out, and the women use her name as a question. She answers with a play on it: Naomi is close to the word for pleasant, and Mara is bitter.",
          src: "Campbell · Hubbard · Trible",
        },
        meaning:
          "She does not say she is sad. She says her name is wrong now. Then the accounting: <b>I went away full</b>. She left in a famine, with nothing, so the fullness she is counting was the three of them. She comes back to a harvest and calls it empty. Whatever is being weighed was never bread.",
        addr: {
          mode: "names",
          text: "You have been asked how you are by people who meant it kindly, and found the true answer would not fit in the street. Naomi gave hers anyway, and the book wrote it down without softening it.",
        },
        ask: "What would you have to say out loud for someone to know where you actually are?",
        prayer: {
          mode: "meditate",
          text: "Carry her sentence today without repairing it. I went away full, and the LORD has brought me back empty. She is never corrected for it.",
        },
      },
    ],
  },
  {
    id: "ruth-2",
    bookId: "ruth",
    tier: "grounded",
    span: "Ruth 2",
    chapterIndex: 2,
    title: "The field",
    passages: [
      {
        ref: "Ruth 2 (selected)",
        kind: "scene",
        form: "prose",
        title: "Gleaning",
        verses: [
          { n: 1, text: "Now Naomi had a relative on her husband’s side, a prominent man of noble character from the clan of Elimelech, whose name was Boaz." },
          { n: 2, text: "And Ruth the Moabitess said to Naomi, “Please let me go into the fields and glean heads of grain after someone in whose sight I may find favor.” “Go ahead, my daughter,” Naomi replied." },
          { n: 3, text: "So Ruth departed and went out into the field and gleaned after the harvesters. And she happened to come to the part of the field belonging to Boaz, who was from the clan of Elimelech." },
          { n: 8, text: "Then Boaz said to Ruth, “Listen, my daughter. Do not go and glean in another field, and do not go away from this place, but stay here close to my servant girls." },
          { n: 9, text: "Let your eyes be on the field they are harvesting, and follow along after these girls. Indeed, I have ordered the young men not to touch you. And when you are thirsty, go and drink from the jars the young men have filled.”" },
          { n: 10, text: "At this, she fell on her face, bowing low to the ground, and said to him, “Why have I found such favor in your eyes that you should take notice of me, even though I am a foreigner?”" },
          { n: 11, text: "Boaz replied, “I have been made fully aware of all you have done for your mother-in-law since the death of your husband, how you left your father and mother and the land of your birth, and how you came to a people you did not know before." },
          { n: 12, text: "May the LORD repay your work, and may you receive a rich reward from the LORD, the God of Israel, under whose wings you have taken refuge.”" },
          { n: 17, text: "So Ruth gathered grain in the field until evening. And when she beat out what she had gleaned, it was about an ephah of barley." },
          { n: 18, text: "She picked up the grain and went into the town, where her mother-in-law saw what she had gleaned. And she brought out what she had saved from her meal and gave it to Naomi." },
          { n: 19, text: "Then her mother-in-law asked her, “Where did you glean today, and where did you work? Blessed be the man who noticed you.” So she told her mother-in-law where she had worked. “The name of the man I worked with today is Boaz,” she said." },
          { n: 20, text: "Then Naomi said to her daughter-in-law, “May he be blessed by the LORD, who has not withdrawn His kindness from the living or the dead.” Naomi continued, “The man is a close relative. He is one of our kinsman-redeemers.”" },
          { n: 23, text: "So Ruth stayed close to the servant girls of Boaz to glean grain until the barley and wheat harvests were finished. And she lived with her mother-in-law." },
        ],
        ground: {
          kind: "historical",
          text: "Gleaning is law, not charity. A landowner is forbidden to harvest the corners of his field and forbidden to go back for what was dropped, and what is left belongs to the poor, the foreigner, the widow and the orphan. It is welfare written as a limit on the powerful, and it only works if the powerful comply. Ruth goes out to exercise a legal right, and Boaz telling his men not to touch her says plainly what a foreign widow in a field was exposed to. Naomi's word at the end, kinsman-redeemer, is the plot arriving.",
          src: "Leviticus 19:9–10 · Deuteronomy 24:19–21 · Hubbard · Meyers",
        },
      },
    ],
  },
];

// Movement 1. No doorway: movement 2 does not exist yet, and the content validator fails a
// doorway pointing at a movement it cannot resolve. No capstone until the movement completes.
export const EMPTY_MOVEMENT: Movement = {
  id: "empty",
  index: 1,
  title: "Coming back empty",
  range: "Ruth 1–2",
  throughline:
    "A famine, a foreign country, and three funerals in five verses. What is left is an old woman with nothing to offer, and a daughter-in-law who will not take the offer of release, walking back to a town at harvest time.",
  chapterStart: 1,
  chapterEnd: 2,
  situation: {
    kicker: "The ground beneath the road",
    title: "The situation",
    paragraphs: [
      "Moab sits across the Dead Sea from Bethlehem, near enough to walk to and foreign enough to matter. It is the neighbour Israel's texts treat worst: Numbers blames Moabite women for leading Israel into worship of another god, and Deuteronomy bars Moabites from the assembly of the LORD to the tenth generation. Going there to eat during a famine is what people did, and the book reports it without a word of comment.",
      "A widow's position was a matter of property law rather than sympathy. Households held land, land passed through men, and a woman with no husband and no sons had no standing and no income of her own. When Naomi tells her daughters-in-law that she has nothing to offer them, she is not being dramatic. She is describing the arrangement accurately. What was left to a woman in that position was a household willing to take her in, or the leftovers of somebody else's harvest.",
      "Those leftovers were legislated. Leviticus and Deuteronomy require a landowner to leave the corners of his field unharvested and to stop going back for what was dropped, and they name who it is for: the poor, the foreigner, the widow, the orphan. It is relief written as a restriction on the strong rather than as generosity from them, which is a different thing, and it depends entirely on the strong obeying it.",
      "The book plays with its names and expects you to notice. Bethlehem is house of bread and has no bread. Naomi is close to the word for pleasant, and she asks the town to call her bitter. The two sons who die are named Mahlon and Chilion, which sound like the words for sickness and for wasting away. Reading the names is part of reading the book.",
    ],
    sources: "Campbell · Hubbard · Meyers · Eskenazi & Frymer-Kensky",
  },
};

// The book-level composition overlay: how Ruth was written, and the question it was written into.
export const RUTH_INTRO: Panel = {
  kicker: "An introduction · Ruth 1–4",
  title: "The book of the two widows",
  paragraphs: [
    "Ruth is four chapters and 85 verses, one of only two books in the Bible named for a woman, and the only one whose central relationship is between two of them. It is set in the time of the judges, the period the book of Judges presents as violent and coming apart, and it contains no battle, no miracle and no villain. In the Hebrew Bible it sits among the Writings and is read at Shavuot, in the harvest season the story turns on. Its position after Judges in Christian Bibles is a later arrangement, and it changes how the book reads.",
    "When it was written is genuinely disputed. One case puts it in the Persian period, the fifth or fourth century, and reads it as an argument against the campaign in Ezra and Nehemiah to dissolve marriages to foreign women. Another argues for a much earlier date, holding that its Hebrew carries old forms and that the closing genealogy may have been added to a story already in circulation. The linguistic evidence gets used by both sides, which is worth knowing before anyone tells you the question is settled.",
    "What is not disputed is that the book knows exactly what it is doing with its Moabite. It takes a woman from the people the law bars from the assembly, makes her the most faithful person in the story, has her swear loyalty in the LORD's name, and then ends by naming her as the great-grandmother of David, in the last line, as if daring the reader to do the arithmetic.",
    "And it is a book with almost no God in it. He acts once, in a single clause in the last chapter, about a conception. Everything else that happens is people deciding what they owe each other and then doing more than that, which is what the book's key word means. Whatever Ruth is claiming about how rescue arrives, it is not claiming that it arrives from the sky.",
  ],
  timeline: [
    {
      tag: "c. 1200–1000 BCE",
      text: "The period the story is set in: the time of the judges, before Israel has a king.",
    },
    {
      tag: "c. 1000 BCE",
      text: "David, whom the closing genealogy exists to reach.",
    },
    {
      tag: "586 BCE",
      text: "Jerusalem falls. Questions about who counts as Israel stop being theoretical.",
    },
    {
      tag: "c. 450 BCE",
      text: "Ezra and Nehemiah move to dissolve marriages to foreign women. Many read this book as the reply.",
    },
    {
      tag: "Disputed",
      text: "The date of writing. The arguments run from the monarchy to the Persian period, and the same evidence is used by both sides.",
    },
  ],
  sources: "Campbell · Hubbard · Sasson · Eskenazi & Frymer-Kensky · Trible",
};
