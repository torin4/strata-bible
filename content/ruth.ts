import type { Capstone, Movement, Panel, Reading } from "@/lib/types";

// Ruth, book three, complete. Four chapters, 85 verses, every passage a narrative scene.
//
// The book divides into four acts, one per chapter: the road, the field, the threshing floor,
// the gate. That division is carried by the reading map, one reading per act. It is deliberately
// NOT carried by the movement layer: four situation panels and four capstones wrapped around 85
// verses would be more apparatus than scripture, which is the failure the density gate exists to
// prevent one layer down. Two movements, split at the book's own hinge.
//
// The scripture here was materialised verbatim from content/bsb-ruth.ts by scripts/build-ruth.ts
// and is enforced by the verse-integrity invariant in scripts/validate-content.ts. Never retype a
// verse by hand, and never hand-edit this file: change the generator and re-run it.

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
    tier: "sitting",
    span: "Ruth 2",
    chapterIndex: 2,
    title: "The field",
    unitLabel: "Scene",
    thread: "A widow with no land goes out to pick up what the harvesters drop, and happens onto the field of a man from her dead husband's clan. Nothing miraculous occurs. Somebody notices her, and decides to be more decent than he has to be.",
    closeEnd: "She comes home with more than a day's gleaning, and Naomi hears the name and understands something Ruth does not.",
    passages: [
      {
        label: "One",
        ref: "2:1–7",
        kind: "scene",
        form: "prose",
        title: "Whose young woman is this?",
        verses: [
          { n: 1, text: "Now Naomi had a relative on her husband’s side, a prominent man of noble character from the clan of Elimelech, whose name was Boaz." },
          { n: 2, text: "And Ruth the Moabitess said to Naomi, “Please let me go into the fields and glean heads of grain after someone in whose sight I may find favor.” “Go ahead, my daughter,” Naomi replied." },
          { n: 3, text: "So Ruth departed and went out into the field and gleaned after the harvesters. And she happened to come to the part of the field belonging to Boaz, who was from the clan of Elimelech." },
          { n: 4, text: "Just then Boaz arrived from Bethlehem and said to the harvesters, “The LORD be with you.” “The LORD bless you,” they replied." },
          { n: 5, text: "And Boaz asked the foreman of his harvesters, “Whose young woman is this?”" },
          { n: 6, text: "The foreman answered, “She is the Moabitess who returned with Naomi from the land of Moab." },
          { n: 7, text: "She has said, ‘Please let me glean and gather among the sheaves after the harvesters.’ So she came out and has continued from morning until now, except that she rested a short time in the shelter.”" },
        ],
        ground: {
          kind: "historical",
          text: "Gleaning is law rather than charity. A landowner is forbidden to harvest the corners of his field and forbidden to go back for what was dropped, and what is left belongs to the poor, the foreigner, the widow and the orphan. It is relief written as a restriction on the strong, and it works only if the strong comply. Verse 3 says she happened to come to the part of the field belonging to Boaz. The narrator says it flatly and claims nothing more.",
          src: "Leviticus 19:9–10 · Deuteronomy 24:19–21 · Hubbard · Meyers",
        },
        meaning:
          "Two things here are worth slowing down for. Ruth does not ask Naomi to arrange anything; she says let me go and work, and she goes out before anyone has spoken for her. And when Boaz sees her, his question is not who is she but <b>whose</b> is she. In a world organised by households, a woman standing on her own is a question about which household she belongs to, and the honest answer in her case is none.",
        lenses: {
          arch: "The first day somewhere nobody is obliged to you, spent proving you will work before anyone will speak to you. (Starting at the bottom of another man's field.)",
        },
      },
      {
        label: "Two",
        ref: "2:8–16",
        kind: "scene",
        form: "prose",
        title: "Under whose wings",
        verses: [
          { n: 8, text: "Then Boaz said to Ruth, “Listen, my daughter. Do not go and glean in another field, and do not go away from this place, but stay here close to my servant girls." },
          { n: 9, text: "Let your eyes be on the field they are harvesting, and follow along after these girls. Indeed, I have ordered the young men not to touch you. And when you are thirsty, go and drink from the jars the young men have filled.”" },
          { n: 10, text: "At this, she fell on her face, bowing low to the ground, and said to him, “Why have I found such favor in your eyes that you should take notice of me, even though I am a foreigner?”" },
          { n: 11, text: "Boaz replied, “I have been made fully aware of all you have done for your mother-in-law since the death of your husband, how you left your father and mother and the land of your birth, and how you came to a people you did not know before." },
          { n: 12, text: "May the LORD repay your work, and may you receive a rich reward from the LORD, the God of Israel, under whose wings you have taken refuge.”" },
          { n: 13, text: "“My lord,” she said, “may I continue to find favor in your eyes, for you have comforted and spoken kindly to your maidservant, though I am not like one of your servant girls.”" },
          { n: 14, text: "At mealtime Boaz said to her, “Come over here; have some bread and dip it into the vinegar sauce.” So she sat down beside the harvesters, and he offered her roasted grain, and she ate and was satisfied and had some left over." },
          { n: 15, text: "When Ruth got up to glean, Boaz ordered his young men, “Even if she gathers among the sheaves, do not insult her." },
          { n: 16, text: "Rather, pull out for her some stalks from the bundles and leave them for her to gather. Do not rebuke her.”" },
        ],
        ground: {
          kind: "historical",
          text: "Boaz tells her to stay in his field, keep close to his own workers, and drink from the jars. He also says he has ordered the young men not to touch her, and later tells them not to insult her. Both lines describe what a foreign widow gleaning alone was exposed to. His blessing uses the image of a bird's wings, and the Hebrew word for wing is also the word for the corner of a garment. It comes back in the next chapter.",
          src: "Campbell · Hubbard · Trible",
        },
        misreading: {
          named:
            "Boaz is simply a good man being generous, and the scene is about kindness.",
          why: "He is generous, and that is real. He is also a man of standing dealing with a destitute foreigner who has no protection and no claim on him, and everything he grants is a favour he could take back. The order not to touch her is not decoration; it tells you what was ordinary. Reading the scene as warmth alone loses what Ruth is actually doing, which is working in public, in front of men, all day, to be noticed enough to be allowed to keep working.",
        },
        meaning:
          "She asks him why, and supplies the reason herself: I am a foreigner. He answers with what she has done rather than what she is, and blesses her in the name of a God she adopted on a road in chapter 1. The image he reaches for is wings, and the word is the same one used for the corner of a garment. Remember it. In the next chapter she uses it back at him, and it is not a blessing then. It is a request.",
        lenses: {
          theo: "Boaz asks the LORD to repay her, and by the end of the book he is himself the means by which it happens. That is the pattern this book keeps making: the prayer and the answer turn out to be the same person, and he does not appear to notice.",
        },
      },
      {
        label: "Three",
        ref: "2:17–23",
        kind: "scene",
        form: "prose",
        title: "An ephah of barley",
        verses: [
          { n: 17, text: "So Ruth gathered grain in the field until evening. And when she beat out what she had gleaned, it was about an ephah of barley." },
          { n: 18, text: "She picked up the grain and went into the town, where her mother-in-law saw what she had gleaned. And she brought out what she had saved from her meal and gave it to Naomi." },
          { n: 19, text: "Then her mother-in-law asked her, “Where did you glean today, and where did you work? Blessed be the man who noticed you.” So she told her mother-in-law where she had worked. “The name of the man I worked with today is Boaz,” she said." },
          { n: 20, text: "Then Naomi said to her daughter-in-law, “May he be blessed by the LORD, who has not withdrawn His kindness from the living or the dead.” Naomi continued, “The man is a close relative. He is one of our kinsman-redeemers.”" },
          { n: 21, text: "Then Ruth the Moabitess said, “He also told me, ‘Stay with my young men until they have finished gathering all my harvest.’”" },
          { n: 22, text: "And Naomi said to her daughter-in-law Ruth, “My daughter, it is good for you to work with his young women, so that nothing will happen to you in another field.”" },
          { n: 23, text: "So Ruth stayed close to the servant girls of Boaz to glean grain until the barley and wheat harvests were finished. And she lived with her mother-in-law." },
        ],
        ground: {
          kind: "historical",
          text: "An ephah is somewhere near thirty pounds of barley, far more than a day of gleaning should produce, and Naomi notices at once. Her question is where. Her blessing lands on whoever did the noticing. And when the name comes back she uses a word she has not used since the road, the book's word for doing more than you owe, and then the legal one: kinsman-redeemer.",
          src: "Hubbard · Campbell · Eskenazi & Frymer-Kensky",
        },
        meaning:
          "The plot arrives in a sentence and Ruth does not know it has. She is reporting her day. Naomi hears the name and understands what it means, because she knows the family and she knows the law. Notice what has moved in her. In chapter 1 she said the hand of the LORD had gone out against her, and nobody corrected her. Nobody corrects her here either. She simply says a blessing out loud, which is the first thing she has said since the road that is not about being empty.",
        addr: {
          mode: "names",
          text: "Something has probably already moved in your favour without your knowing it, and you will find out later than everyone else did. Ruth worked a full day and carried the evidence home on her back, and still had to be told what it meant.",
        },
        ask: "What are you carrying home at the moment without knowing yet what it is worth?",
      },
    ],
  },
  {
    id: "ruth-3",
    bookId: "ruth",
    tier: "sitting",
    span: "Ruth 3",
    chapterIndex: 3,
    title: "The threshing floor",
    unitLabel: "Scene",
    thread: "Naomi sends her, washed and perfumed, to a threshing floor at night. What happens there is either a legal claim or a scandal depending on who is telling it, and the Hebrew keeps both open on purpose.",
    closeEnd: "She goes home with six measures of barley and a sentence that answers the one she has been carrying since the first chapter.",
    passages: [
      {
        label: "One",
        ref: "3:1–6",
        kind: "scene",
        form: "prose",
        title: "Wash, and go down",
        verses: [
          { n: 1, text: "One day Ruth’s mother-in-law Naomi said to her, “My daughter, should I not seek a resting place for you, that it may be well with you?" },
          { n: 2, text: "Now is not Boaz, with whose servant girls you have been working, a relative of ours? In fact, tonight he is winnowing barley on the threshing floor." },
          { n: 3, text: "Therefore wash yourself, put on perfume, and wear your best clothes. Go down to the threshing floor, but do not let the man know you are there until he has finished eating and drinking." },
          { n: 4, text: "When he lies down, note the place where he lies. Then go in and uncover his feet, and lie down, and he will explain to you what you should do.”" },
          { n: 5, text: "“I will do everything you say,” Ruth answered." },
          { n: 6, text: "So she went down to the threshing floor and did everything her mother-in-law had instructed her to do." },
        ],
        ground: {
          kind: "historical",
          text: "Naomi calls it seeking a resting place, which in this book means a household and a future rather than sleep. Threshing floors were worked in the open at the end of harvest, usually on a rise where the wind could take the chaff, and men slept beside the heap to guard it. Her instructions are precise, and the last of them is deliberately vague: uncover his feet, lie down, and he will tell you what to do.",
          src: "Campbell · Sasson · Eskenazi & Frymer-Kensky",
        },
        meaning:
          "Read it as it stands. An older woman with no other way to secure a future for a younger one sends her, at night, alone, to a place where men have been drinking and are sleeping, to wake one of them. Naomi is not naive about what she is asking for. And Ruth, who has already agreed once to something nobody would have blamed her for refusing, says only that she will do everything she says.",
        lenses: {
          arch: "The plan made at night by people with no leverage, where the only thing anyone has to put in is the willingness to be the one who takes the risk. (Sent to ask.)",
        },
      },
      {
        label: "Two",
        ref: "3:7–13",
        kind: "scene",
        form: "prose",
        title: "At midnight",
        verses: [
          { n: 7, text: "After Boaz had finished eating and drinking and was in good spirits, he went to lie down at the end of the heap of grain. Then Ruth went in secretly, uncovered his feet, and lay down." },
          { n: 8, text: "At midnight, Boaz was startled, turned over, and there lying at his feet was a woman!" },
          { n: 9, text: "“Who are you?” he asked. “I am your servant Ruth,” she replied. “Spread the corner of your garment over me, for you are a kinsman-redeemer.”" },
          { n: 10, text: "Then Boaz said, “May the LORD bless you, my daughter. You have shown more kindness now than before, because you have not run after the younger men, whether rich or poor." },
          { n: 11, text: "And now do not be afraid, my daughter. I will do for you whatever you request, since all my fellow townspeople know that you are a woman of noble character." },
          { n: 12, text: "Yes, it is true that I am a kinsman-redeemer, but there is a redeemer nearer than I." },
          { n: 13, text: "Stay here tonight, and in the morning, if he wants to redeem you, good. Let him redeem you. But if he does not want to redeem you, as surely as the LORD lives, I will. Now lie here until morning.”" },
        ],
        ground: {
          kind: "historical",
          text: "The Hebrew of this scene is deliberately open. The word for feet is used elsewhere in the Bible as a euphemism, the verb for uncovering carries the same freight, and lie down is the ordinary word for sleeping and also the ordinary word for sex. Translations settle it in one direction or the other. The text does not. What is not ambiguous is the exposure: a foreign widow found on a threshing floor at night has no recourse at all.",
          src: "Sasson · Fewell & Gunn · Campbell",
        },
        misreading: {
          named:
            "Nothing happened, and the scene only looks suggestive to a modern reader.",
          why: "The suggestion is in the Hebrew, not in the reader. The narrator chose words that can carry two meanings and declined to close them, and Boaz's own instruction before dawn, that nobody is to know a woman came to the threshing floor, tells you what the night would have cost her if it were known. Settling it in either direction is a decision the text refuses to make for you. What the book is not vague about is that she asked, and that what she asked for was not a night.",
        },
        meaning:
          "She does not follow the plan. Naomi told her to wait and let him say what to do, and instead she speaks first, and what she says is a legal claim. <b>Spread the corner of your garment over me, for you are a kinsman-redeemer.</b> That word for corner is the word Boaz used in the field for the wings of God. She takes the blessing he prayed over her and asks him to be the answer to it.",
      },
      {
        label: "Three",
        ref: "3:14–18",
        kind: "scene",
        form: "prose",
        title: "Six measures",
        verses: [
          { n: 14, text: "So she lay down at his feet until morning, but she got up before anyone else could recognize her. Then Boaz said, “Do not let it be known that a woman came to the threshing floor.”" },
          { n: 15, text: "And he told her, “Bring the shawl you are wearing and hold it out.” When she did so, he poured in six measures of barley and placed it on her. Then he went into the city." },
          { n: 16, text: "When Ruth returned to her mother-in-law, Naomi asked her, “How did it go, my daughter?” Then Ruth told her all that Boaz had done for her." },
          { n: 17, text: "And she said, “He gave me these six measures of barley, for he said, ‘Do not go back to your mother-in-law empty-handed.’”" },
          { n: 18, text: "“Wait, my daughter,” said Naomi, “until you find out how things go, for he will not rest unless he has resolved the matter today.”" },
        ],
        ground: {
          kind: "historical",
          text: "She leaves before it is light, and Boaz says plainly that nobody is to know she was there. Then he loads her shawl with barley, six measures of it, and sends her back into town. Naomi's advice is to sit still, because the man will not rest until the matter is settled today.",
          src: "Campbell · Hubbard",
        },
        meaning:
          "The line Boaz sends with the grain is the one that matters, and it is not addressed to Ruth. <b>Do not go back to your mother-in-law empty-handed.</b> Empty is Naomi's word, the one she used in front of the whole town when she asked them to stop calling her by her name. He has heard what she called herself. He answers it with about thirty pounds of barley and no comment at all.",
        addr: {
          mode: "names",
          text: "Somebody may have heard the thing you said when you were at your worst, taken it seriously, and gone away and done something about it without telling you. It rarely arrives as a speech. It arrives as something heavy, handed over at the door.",
        },
        ask: "Who has been quietly answering something you said out loud once and never repeated?",
      },
    ],
  },
  {
    id: "ruth-4",
    bookId: "ruth",
    tier: "sitting",
    span: "Ruth 4",
    chapterIndex: 4,
    title: "The gate",
    unitLabel: "Scene",
    thread: "A property transaction settled in public, a child, and a list of names. What these four chapters have been building turns out to hold up most of the story that follows, and nobody inside it knows.",
    closeEnd: "Five verses of fathers and sons, ending on a name every first reader knew before they got to it.",
    passages: [
      {
        label: "One",
        ref: "4:1–12",
        kind: "scene",
        form: "prose",
        title: "At the gate",
        verses: [
          { n: 1, text: "Meanwhile, Boaz went to the gate and sat down there. Soon the kinsman-redeemer of whom he had spoken came along, and Boaz said, “Come over here, my friend, and sit down.” So he went over and sat down." },
          { n: 2, text: "Then Boaz took ten of the elders of the city and said, “Sit here,” and they did so." },
          { n: 3, text: "And he said to the kinsman-redeemer, “Naomi, who has returned from the land of Moab, is selling the piece of land that belonged to our brother Elimelech." },
          { n: 4, text: "I thought I should inform you that you may buy it back in the presence of those seated here and in the presence of the elders of my people. If you want to redeem it, do so. But if you will not redeem it, tell me so I may know, because there is no one but you to redeem it, and I am next after you.” “I will redeem it,” he replied." },
          { n: 5, text: "Then Boaz said, “On the day you buy the land from Naomi and also from Ruth the Moabitess, you must also acquire the widow of the deceased in order to raise up the name of the deceased on his inheritance.”" },
          { n: 6, text: "The kinsman-redeemer replied, “I cannot redeem it myself, or I would jeopardize my own inheritance. Take my right of redemption, because I cannot redeem it.”" },
          { n: 7, text: "Now in former times in Israel, concerning the redemption or exchange of property, to make any matter legally binding a man would remove his sandal and give it to the other party, and this was a confirmation in Israel." },
          { n: 8, text: "So the kinsman-redeemer removed his sandal and said to Boaz, “Buy it for yourself.”" },
          { n: 9, text: "At this, Boaz said to the elders and all the people, “You are witnesses today that I am buying from Naomi all that belonged to Elimelech, Chilion, and Mahlon." },
          { n: 10, text: "Moreover, I have acquired Ruth the Moabitess, Mahlon’s widow, as my wife, to raise up the name of the deceased through his inheritance, so that his name will not disappear from among his brothers or from the gate of his home. You are witnesses today.”" },
          { n: 11, text: "“We are witnesses,” said the elders and all the people at the gate. “May the LORD make the woman entering your home like Rachel and Leah, who together built up the house of Israel. May you be prosperous in Ephrathah and famous in Bethlehem." },
          { n: 12, text: "And may your house become like the house of Perez, whom Tamar bore to Judah, because of the offspring the LORD will give you by this young woman.”" },
        ],
        ground: {
          kind: "historical",
          text: "The gate was where legal business was done, in front of whoever was passing. Boaz seats ten elders as witnesses and opens with the land rather than the woman. The nearer redeemer agrees at once and withdraws the moment Ruth is added to the transaction, because a son born to her would inherit the field he has just paid for. The sandal is the local way of making a deal binding, and the narrator stops to explain it, which means the custom was already old when the book was written.",
          src: "Campbell · Hubbard · Sasson",
        },
        misreading: {
          named:
            "Boaz marries Ruth because he has fallen in love with her.",
          why: "The book never says so. What it says is that he is a redeemer, that he does the thing the nearer man will not, and that the transaction on the table is a dead man's field and a dead man's name. Affection may well be in it, and there is warmth in the field in chapter 2. But the machinery here is obligation, witnessed in public, and the book's interest is in a man who took on a duty that cost him something rather than a man who felt something. That is harder, and more use to anyone trying to work out what to do next.",
        },
        meaning:
          "Nobody in this scene consults Ruth. She is discussed by name, in public, as an item attached to a parcel of land, by men settling an inheritance. That is the machinery she has been working inside since the first chapter and the book does not pretend otherwise. What Boaz does inside it is refuse the loophole: he could have taken the field and left the widow, and the nearer man does exactly that and is not even given a name. Then the elders bless the house, and reach for Tamar, who got her rights out of Judah by a scheme at least as risky as a threshing floor.",
        lenses: {
          theo: "The blessing asks that this house be like Rachel and Leah, who built Israel, and like the house of Perez, which began with a woman nobody would have chosen. The line this book is walking toward has never once run through the obvious people.",
        },
      },
      {
        label: "Two",
        ref: "4:13–17",
        kind: "scene",
        form: "prose",
        title: "A son has been born to Naomi",
        verses: [
          { n: 13, text: "So Boaz took Ruth, and she became his wife. And when he had relations with her, the LORD enabled her to conceive, and she gave birth to a son." },
          { n: 14, text: "Then the women said to Naomi, “Blessed be the LORD, who has not left you this day without a kinsman-redeemer. May his name become famous in Israel." },
          { n: 15, text: "He will renew your life and sustain you in your old age. For your daughter-in-law, who loves you and is better to you than seven sons, has given him birth.”" },
          { n: 16, text: "And Naomi took the child, placed him on her lap, and became a nurse to him." },
          { n: 17, text: "The neighbor women said, “A son has been born to Naomi,” and they named him Obed. He became the father of Jesse, the father of David." },
        ],
        ground: {
          kind: "historical",
          text: "God acts directly once in this book, in half of verse 13, and what he does is enable a conception. The blessing that follows is spoken to Naomi rather than to the mother, by the women of the town, and they are the ones who name the child. The name they give him means something like servant, or one who works.",
          src: "Campbell · Trible · Hubbard",
        },
        meaning:
          "Count what is given back. The women tell Naomi this child will renew her life and sustain her old age, and both are true, and neither of them is her husband or her sons. She is handed a grandchild, and she holds him. The thing they say about Ruth, that she is better to Naomi than seven sons, is the largest number that world had for saying it. It is a real thing to be told. It is not the same as being given back what was taken.",
        lenses: {
          arch: "The life that comes after the one that ended, which is neither a replacement nor a consolation, and has to be lived anyway. (After, without instead of.)",
        },
      },
      {
        label: "Three",
        ref: "4:18–22",
        kind: "scene",
        form: "prose",
        title: "The list",
        verses: [
          { n: 18, text: "Now these are the generations of Perez: Perez was the father of Hezron," },
          { n: 19, text: "Hezron was the father of Ram, Ram was the father of Amminadab," },
          { n: 20, text: "Amminadab was the father of Nahshon, Nahshon was the father of Salmon," },
          { n: 21, text: "Salmon was the father of Boaz, Boaz was the father of Obed," },
          { n: 22, text: "Obed was the father of Jesse, and Jesse was the father of David." },
        ],
        ground: {
          kind: "historical",
          text: "Five verses of fathers and sons, running from Perez to David.",
          src: "Campbell · Sasson",
        },
        meaning:
          "Read the fourth name from the end. A Moabite, from the people the law bars from the assembly to the tenth generation, is David's great-grandmother, and the book says so in its last line as a matter of record. Nobody inside the story knows it.",
        addr: {
          mode: "names",
          text: "You are in the middle of something whose weight you cannot see from where you are standing, and the people who end up depending on it will not know your name either.",
        },
        ask: "What are you doing now that will only make sense later, if at all?",
      },
    ],
  },
];

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
    image: "/images/ruth-moab.webp",
    paragraphs: [
      "Moab sits across the Dead Sea from Bethlehem, near enough to walk to and foreign enough to matter. It is the neighbour Israel's texts treat worst: Numbers blames Moabite women for leading Israel into worship of another god, and Deuteronomy bars Moabites from the assembly of the LORD to the tenth generation. Going there to eat during a famine is what people did, and the book reports it without a word of comment.",
      "A widow's position was a matter of property law rather than sympathy. Households held land, land passed through men, and a woman with no husband and no sons had no standing and no income of her own. When Naomi tells her daughters-in-law that she has nothing to offer them, she is not being dramatic. She is describing the arrangement accurately. What was left to a woman in that position was a household willing to take her in, or the leftovers of somebody else's harvest.",
      "Those leftovers were legislated. Leviticus and Deuteronomy require a landowner to leave the corners of his field unharvested and to stop going back for what was dropped, and they name who it is for: the poor, the foreigner, the widow, the orphan. It is relief written as a restriction on the strong rather than as generosity from them, which is a different thing, and it depends entirely on the strong obeying it.",
      "The book plays with its names and expects you to notice. Bethlehem is house of bread and has no bread. Naomi is close to the word for pleasant, and she asks the town to call her bitter. The two sons who die are named Mahlon and Chilion, which sound like the words for sickness and for wasting away. Reading the names is part of reading the book.",
    ],
    sources: "Campbell · Hubbard · Meyers · Eskenazi & Frymer-Kensky",
  },
  doorway: {
    kicker: "The second movement",
    title: "The redeemer",
    paragraphs: [
      "The first half of this book is survival. A woman comes home with nothing, another woman goes out to work, and the day ends with about thirty pounds of barley and a name that turns out to matter. Nothing has been claimed yet, and nobody has asked anybody for anything.",
      "What follows is a claim being pressed, by two women with no standing, using a piece of family property law that does not quite cover their case. It starts at night on a threshing floor, where the risk is entirely Ruth's, and it finishes in daylight at a town gate, in front of ten elders, in a conversation nobody thinks to include her in.",
    ],
    nextMovementId: "the-redeemer",
  },
  capstone: {
    kicker: "The first movement · Ruth 1–2",
    title: "What is left, and what it is worth",
    paragraphs: [
      "Two chapters, and the arithmetic has barely moved. Naomi still has no husband and no sons, still has no land she can work, and has not taken back a word of what she said in the street. The book has not corrected her, argued with her, or arranged a moment where she sees things differently. It has let her sentence stand for two chapters.",
      "What has changed is smaller than a rescue and is not nothing. Somebody would not leave. Somebody else noticed a woman in a field and chose to obey a law generously rather than minimally, which is what this book's key word means and the only thing it ever means. And an old woman who had stopped expecting anything said a blessing out loud about a living man.",
      "That is the shape of the first half, and it is worth sitting with before the second half starts moving. Nothing was restored. Two people did more than they had to, and a day's work came home heavier than it should have been.",
    ],
    sources: "Campbell · Hubbard · Trible",
  },
};

export const THE_REDEEMER_MOVEMENT: Movement = {
  id: "the-redeemer",
  index: 2,
  title: "The redeemer",
  range: "Ruth 3–4",
  throughline:
    "Naomi stops waiting and makes a plan, and Ruth takes it further than the plan went. What follows is a legal claim pressed by people with no standing, and settled at a town gate by men who never think to ask her a question.",
  chapterStart: 3,
  chapterEnd: 4,
  situation: {
    kicker: "The ground beneath the claim",
    title: "The situation",
    image: "/images/ruth-redeemer.webp",
    paragraphs: [
      "A redeemer, in this law, is a relative with both the right and the duty to buy back what a family has lost: land it was forced to sell, or a relative sold into debt slavery. It is a family safety net written into property law, and it exists because land was not supposed to leave a family permanently. The word runs through the second half of this book and it is a legal term before it is anything else.",
      "There is a separate obligation, in Deuteronomy, that a dead man's brother should marry his widow so that the first son carries the dead man's name and keeps his portion. It applies to brothers living on the same property. Boaz is not a brother, and neither is the nearer man.",
      "What happens in this book is not exactly either law. It combines buying back the land with taking on the widow, in a case neither statute covers, and ten elders at a gate agree to it. Whether the book is describing a custom we have no other record of, or constructing what it thinks the law ought to have said, is genuinely argued. Saying so is more honest than tidying it into a statute that fits.",
      "And the threshing floor is a working site, not a house. At the end of harvest the grain is beaten out and thrown into the wind on a hard floor, usually on high ground, and the men sleep beside the heap to guard it. It is at the edge of town, in the open, at night. That is where Naomi sends her.",
    ],
    sources: "Leviticus 25 · Deuteronomy 25:5–10 · Campbell · Hubbard · Sasson",
  },
  capstone: {
    kicker: "The second movement · Ruth 3–4",
    title: "A claim pressed, and a name carried",
    paragraphs: [
      "Everything in the second half turns on people using what little standing they have, all the way up. Naomi uses the only leverage available to her, which is knowing the law and knowing the family. Ruth uses the only thing she has, which is her willingness to be the one exposed. Boaz uses what he actually has, which is money, position and the right to speak first at a gate.",
      "It is worth noticing how unromantic the machinery is. The claim is made at night in words that could ruin her. It is settled in the morning over a field, with a sandal, in front of witnesses, in a conversation she is not part of. The nearer redeemer, who takes the land and drops the widow the moment she is mentioned, is never given a name in a book that names everybody.",
      "And at the end the women of the town hand a baby to a woman who lost two sons, and say a thing that is true and is not the same as what she lost. The book does not pretend those are the same. It just refuses to end anywhere else.",
    ],
    sources: "Campbell · Sasson · Fewell & Gunn · Trible",
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
    "And it is a book with almost no God in it. He acts directly once, in a single clause in the last chapter, about a conception. Everything else that happens is people deciding what they owe each other and then doing more than that, which is what the book's key word means. Whatever Ruth is claiming about how rescue arrives, it is not claiming that it arrives from the sky.",
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

// The book-level look-back, where Ruth's argument actually lives.
export const RUTH_CAPSTONE: Capstone = {
  kicker: "The whole book · Ruth 1–4",
  title: "Not given back, and built anyway",
  paragraphs: [
    "Start with how little God does here. In eighty-five verses the narrator credits him with two things: bread arriving in Bethlehem, which Naomi hears about second-hand in a foreign country, and a conception in half a verse near the end. Everything else is people. A daughter-in-law who will not go home. A landowner who obeys a law generously when he could have obeyed it minimally. An old woman who knows the law and makes a plan. Ten elders who agree to a transaction the statutes do not quite cover. The book's key word appears three times and every time it means somebody doing more than they owed. Whatever this book claims about how rescue arrives, it does not claim it arrives from the sky.",
    "Then what it refuses to do. Naomi does not get her husband back and does not get her sons back. The women tell her the child will renew her life and sustain her old age, and that is true, and it is a grandchild. She asked the town to call her bitter in chapter 1 and the book never records her taking it back, never stages the moment where she sees it differently, and never has anyone correct her. What she gets instead is a different life, arriving slowly, through work and through other people, and the book is completely clear that a different life is what it is.",
    "And then the last line, which is the whole argument. A Moabite, from the people Deuteronomy bars from the assembly of the LORD to the tenth generation, is named as David's great-grandmother, without comment, as a matter of record. Nobody inside the story knows it. Read against a later campaign to send foreign wives away, this is not a warm story about inclusion. It is an argument, made in the form of a story, by somebody who knew exactly which law they were standing on and put the Moabite in the genealogy anyway.",
  ],
  tensions: [
    {
      claim:
        "Israel is to keep itself separate. No Moabite may enter the assembly of the LORD, even to the tenth generation, and foreign wives are to be sent away.",
      counter:
        "This book makes a Moabite the most faithful person in it and the great-grandmother of David, and puts it in the last line without arguing for it.",
      where:
        "Deuteronomy 23:3 · Ezra 9–10 · Nehemiah 13:23–27 · Ruth 4:17–22",
    },
  ],
  sources: "Campbell · Hubbard · Sasson · Trible · Eskenazi & Frymer-Kensky",
  ask: "What is being built in your life right now that will only make sense to somebody who comes after you?",
};
