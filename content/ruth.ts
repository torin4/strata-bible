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
    thread: "During a famine, a man from Bethlehem takes his wife Naomi and their two sons east to the neighboring country of Moab. Within five verses the husband and both sons have died, and three widows are left standing on a road, arguing about whether either of the younger women should follow Naomi home.",
    closeEnd: "The three of them reach Bethlehem just as the barley harvest begins, which is the first thing in the chapter that is not a loss, and Naomi does not mention it.",
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
          text: "The name Bethlehem means “house of bread,” and yet the writer opens the book with a famine there. The family walks east to Moab, on the far side of the Dead Sea, a country near enough to reach on foot but foreign enough to matter, because Moab is the neighbor that Israel’s writers treat with the most hostility. The two sons are named Mahlon and Chilion, names that sound like the Hebrew words for sickness and for wasting away. The writer then reports three deaths in three verses, and lets ten years pass in half a sentence.",
          src: "Campbell · Hubbard · Sasson · Alter",
        },
        meaning:
          "The writer begins the book by taking things away from Naomi: first her husband, then ten years, then both of her sons. Twice he describes Naomi with a Hebrew verb that people used for whatever was left over after a disaster. He gives no reason for any of it, he blames no one, and he never says what the losses were for. The first thing that moves Naomi is a rumor. She hears that there is food again at home, and she sets out.",
        lenses: {
          theo: "In these first five verses God does nothing, and no one blames him for what happens. The first time the writer mentions God, it is in a report that reaches Naomi in Moab, saying that the LORD has given his people bread. At this point Naomi is moving on nothing more than news of a harvest.",
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
          text: "Naomi releases her daughters-in-law, and she prays that God will show them <b>hesed</b>, which this translation renders as “loving devotion.” It is the key word of the book, and throughout Ruth people use it for someone doing more than they owe. Naomi’s argument to the young women is about property. In a society held together by households and land, a woman with no husband and no sons had no standing and no income, and Naomi is telling them truthfully that she has nothing to give them. Ruth answers with more than a feeling. She swears an oath in the LORD’s name and calls down punishment on herself if she ever breaks it.",
          src: "Campbell · Trible · Eskenazi & Frymer-Kensky",
        },
        misreading: {
          named:
            "Naomi’s faith has hit a low point here, and the writer is going to correct her before the book ends.",
          why: "Naomi says that the hand of the LORD has gone out against her, and she says it again when she arrives home, and no one in the book ever contradicts her. Ruth does not, Boaz does not, the writer does not, and God does not. At the end, the women of the town bless Naomi over a grandchild, but they never correct what she said. The writer lets her account of her own life stand. That is not the same as agreeing with it, but it gives her far more room than most readers have given her.",
        },
        meaning:
          "Three women stop on a road and argue about whether loyalty is worth what it costs. Naomi has the facts right: she has nothing to offer, and she tells them so twice. Orpah does the sensible thing and goes home, and the writer neither blames her for it nor mentions her again. Then Ruth, the foreigner among them, binds herself to a penniless woman and to a God she has no reason to trust, using the strongest words available to her. People now read her words at weddings, but Ruth spoke them to her mother-in-law, on a road, with nothing waiting for either of them at the other end.",
        lenses: {
          theo: "Naomi asks God to show her daughters-in-law the loving devotion she believes he has stopped showing her. She is still praying, and what she asks is that God will treat these two women better than he has treated her.",
        },
        tensions: [
          {
            claim:
              "Ruth declares that she is joining Israel: “Your people will be my people, and your God will be my God.”",
            counter:
              "The law in Deuteronomy bars Moabites from the assembly of the LORD to the tenth generation, and centuries later Ezra and Nehemiah ordered Israelite men to send their foreign wives away. The writer of Ruth answers by making this Moabite woman the great-grandmother of King David, and he says so in the last line of the book.",
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
          text: "The whole town comes out to see them, and the women ask whether this can really be Naomi. She answers with a play on her own name. “Naomi” sounds like the Hebrew word for pleasant, and she tells them to call her “Mara,” which means bitter.",
          src: "Campbell · Hubbard · Trible",
        },
        meaning:
          "Naomi does not say that she is sad. She says that her name no longer fits her. Then she gives an account of what she has lost: <b>“I went away full.”</b> In fact she left during a famine with no food at all, so the fullness she is counting was her husband and her two sons. She comes home at harvest time and calls herself empty. Whatever Naomi is weighing, it was never bread.",
        addr: {
          mode: "names",
          text: "Most of us have been asked how we are by someone who meant it kindly, and found that the true answer was too large to give in the street. Naomi gave hers anyway, and the writer recorded it without softening it.",
        },
        ask: "What would you have to say out loud for someone to know how you really are?",
        prayer: {
          mode: "meditate",
          text: "Carry Naomi’s sentence with you today without trying to fix it: “I went away full, and the LORD has brought me back empty.” No one in the book ever corrects her for saying it.",
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
    thread: "Ruth, a widow with no land, goes out to pick up the grain that the harvesters drop, and she happens to work in a field that belongs to a man from her dead husband’s clan. Nothing miraculous takes place. The owner notices her and decides to treat her more decently than he has to.",
    closeEnd: "Ruth comes home with far more than a day’s gleaning, and when Naomi hears the owner’s name, she understands something that Ruth does not.",
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
          text: "Gleaning was a matter of law, not charity. Israel’s law forbade a landowner to harvest the corners of his field or to go back for what his workers dropped, and it gave what was left to the poor, the foreigner, the widow, and the orphan. The lawgivers wrote this relief as a restriction on the strong, and it helped the poor only if the strong obeyed it. In verse 3 the writer says that Ruth happened to come to the part of the field that belonged to Boaz. He says it plainly and claims nothing more.",
          src: "Leviticus 19:9–10 · Deuteronomy 24:19–21 · Hubbard · Meyers",
        },
        meaning:
          "Two details here are worth slowing down for. First, Ruth does not ask Naomi to arrange anything for her. She says, “Let me go and work,” and she goes out before anyone has spoken up for her. Second, when Boaz sees her, he does not ask who she is but <b>whose</b> she is. In a world where every woman was expected to belong to some household, people saw a woman on her own as a question about which household she belonged to, and the honest answer in Ruth’s case was none.",
        lenses: {
          arch: "Most people know what it is like to spend a first day in a place where no one owes them anything, working hard to prove themselves before anyone will speak to them. Ruth spends her first day in Bethlehem like that, at the very bottom of the social order, picking up leftovers in another man’s field.",
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
          text: "Boaz tells Ruth to stay in his field, to keep close to his own workers, and to drink from their water jars. He also tells her that he has ordered the young men not to touch her, and later he tells them not to insult her. Both instructions show what a foreign widow gleaning alone would normally have faced. When Boaz blesses her, he speaks of the LORD’s wings, and the Hebrew word for wing is also the word for the corner of a garment. Ruth will use that word again in the next chapter.",
          src: "Campbell · Hubbard · Trible",
        },
        misreading: {
          named:
            "Boaz is simply a good man being generous, and the scene is about kindness.",
          why: "Boaz is generous, and his generosity is real. But he is also a man of standing dealing with a penniless foreigner who has no protection and no claim on him, and he could take back any favor he grants her. His order that the young men not touch her is not a decorative detail; it tells us what usually happened to women in her position. If we read the scene only as a warm moment, we miss what Ruth is actually doing, which is working in public, in front of men, all day long, so that someone will notice her enough to let her keep working.",
        },
        meaning:
          "Ruth asks Boaz why he is being so kind, and she supplies the reason he might have for not being kind: she is a foreigner. Boaz answers by speaking of what she has done rather than what she is, and he blesses her in the name of the God she chose on the road in chapter 1. He asks that she find refuge under the LORD’s wings, and the Hebrew word for wings is the same word people used for the corner of a garment. Readers should remember it. In the next chapter Ruth will say that word back to Boaz, and she will not be offering a blessing then. She will be making a request.",
        lenses: {
          theo: "Boaz asks the LORD to reward Ruth, and by the end of the book Boaz himself is the one through whom God does it. The writer of Ruth returns to this pattern again and again: the person who prays for someone turns out to be the answer to his own prayer, and he does not seem to notice.",
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
          text: "An ephah of barley probably weighed somewhere between twenty-five and thirty pounds, far more than a gleaner could expect to gather in one day, and Naomi notices it at once. She asks where Ruth worked, and she blesses whoever noticed her. When she hears the name Boaz, she uses a word she has not spoken since the road, the book’s word for doing more than you owe, and then she uses a legal term: kinsman-redeemer.",
          src: "Hubbard · Campbell · Eskenazi & Frymer-Kensky",
        },
        meaning:
          "Ruth is only telling Naomi about her day, and she does not realize that she has just given her the key to everything that follows. Naomi hears the name and understands what it means, because she knows the family and she knows the law. Something has changed in Naomi. In chapter 1 she said the hand of the LORD had gone out against her, and no one corrected her. No one corrects her here either. She simply speaks a blessing out loud, and it is the first thing she has said since the road that is not about being empty.",
        addr: {
          mode: "names",
          text: "Sometimes our circumstances have already turned in our favor before we know it, and we are the last to find out. Ruth worked all day and carried the proof home on her back, and still someone had to tell her what it meant.",
        },
        ask: "What are you carrying home right now without yet knowing what it is worth?",
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
    thread: "Naomi sends Ruth, washed and perfumed, to the threshing floor at night. Depending on who tells the story, what happens there is either a legal claim or a scandal, and the writer chose Hebrew words that leave both readings open on purpose.",
    closeEnd: "Ruth goes home with six measures of barley and a message from Boaz that answers the complaint Naomi has carried since the first chapter.",
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
          text: "Naomi says she is seeking “a resting place” for Ruth, and in this book that phrase means a household and a future, not sleep. At the end of the harvest, farmers threshed their grain in the open, usually on a rise where the wind could carry off the chaff, and the men slept beside the heap of grain to guard it. Naomi gives Ruth precise instructions, but she leaves the last one deliberately vague: uncover his feet, lie down, and he will tell you what to do.",
          src: "Campbell · Sasson · Eskenazi & Frymer-Kensky",
        },
        meaning:
          "Read the scene as it stands. An older woman who has no other way to secure a future for a younger one sends her out at night, alone, to a place where men have been drinking and are now asleep, and tells her to wake one of them. Naomi knows exactly what she is asking. And Ruth, who has already agreed once to something no one would have blamed her for refusing, says only that she will do everything Naomi tells her.",
        lenses: {
          arch: "People with no power have often had to make plans like Naomi’s, at night and in secret, when the only thing they could offer was someone willing to take the risk. Here Naomi makes the plan, and Ruth is the one who goes out and asks.",
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
          text: "The writer chose Hebrew words for this scene that can be read more than one way. The Bible uses the word for “feet” elsewhere as a polite way of referring to the genitals, the verb for “uncovering” carries the same overtone, and “lie down” is the ordinary word both for sleeping and for sex. Translators usually settle the meaning in one direction or the other, but the writer did not. What he leaves in no doubt is how exposed Ruth is: if anyone found a foreign widow on a threshing floor at night, she would have no defense at all.",
          src: "Sasson · Fewell & Gunn · Campbell",
        },
        misreading: {
          named:
            "Nothing happened that night, and the scene only looks suggestive to modern readers.",
          why: "The suggestion comes from the Hebrew, not from modern readers. The writer chose words that can carry two meanings and left them open. Boaz’s own instruction before dawn, that no one must know a woman came to the threshing floor, shows what the night would have cost Ruth if anyone had found out. The writer refuses to settle the question for us. What he makes perfectly clear is that Ruth asked Boaz for something, and that what she asked for was marriage, not a night.",
        },
        meaning:
          "Ruth does not follow Naomi’s plan. Naomi told her to wait for Boaz to tell her what to do, but Ruth speaks first, and what she says is a legal claim: <b>“Spread the corner of your garment over me, for you are a kinsman-redeemer.”</b> The word she uses for corner is the same word Boaz used in the field for the wings of God. Ruth takes the blessing he prayed over her and asks him to become the answer to it.",
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
          text: "Ruth leaves before it is light, and Boaz says plainly that no one must know she was there. Then he fills her shawl with six measures of barley and sends her back into town. Naomi tells her to sit and wait, because Boaz will not rest until he has settled the matter that very day.",
          src: "Campbell · Hubbard",
        },
        meaning:
          "Boaz sends a message with the grain, and he addresses it to Naomi, not to Ruth: <b>“Do not go back to your mother-in-law empty-handed.”</b> “Empty” is Naomi’s word. She used it in front of the whole town when she asked people to stop calling her by her name. Boaz has heard what she called herself, and he answers it with a heavy load of barley and no comment at all.",
        addr: {
          mode: "names",
          text: "Someone may have heard the thing you said at your lowest point, taken it seriously, and gone off to do something about it without telling you. People rarely answer such a thing with a speech. More often they answer it with something heavy, handed over at the door.",
        },
        ask: "Who has been quietly answering something you once said out loud and never repeated?",
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
    thread: "Boaz settles the matter of the land in public, Ruth bears a child, and the writer ends with a list of names. Without anyone in the story knowing it, these four chapters have laid the groundwork for much of the history that follows.",
    closeEnd: "The writer ends with five verses of fathers and sons, and the last name on the list is one that every first reader knew well: David.",
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
          text: "In an Israelite town, people did their legal business at the gate, in front of anyone who happened to be passing. Boaz seats ten elders there as witnesses and begins by speaking about the land, not the woman. The nearer redeemer agrees to buy the land at once, but he withdraws as soon as Boaz adds Ruth to the transaction, because a son born to her would inherit the very field he had just paid for. The men confirm the deal by handing over a sandal, which was the local way of making it binding. The writer stops to explain the custom, which tells us it was already old when he wrote.",
          src: "Campbell · Hubbard · Sasson",
        },
        misreading: {
          named:
            "Boaz marries Ruth because he has fallen in love with her.",
          why: "The writer never says so. What he says is that Boaz is a redeemer, that he does what the nearer relative will not, and that the business on the table is a dead man’s field and a dead man’s name. Boaz may well feel affection for Ruth, and there is warmth between them in the field in chapter 2. But Boaz acts here out of obligation, in public, before witnesses, and the writer is more interested in a man who took on a costly duty than in a man who had strong feelings. That is a harder example to follow, and a more useful one for anyone trying to decide what to do next.",
        },
        meaning:
          "No one in this scene asks Ruth anything. The men discuss her by name, in public, as if she came attached to a parcel of land, while they settle an inheritance. Ruth has been living inside that system since the first chapter, and the writer does not pretend otherwise. What Boaz does within it is refuse to take the easy way out. He could have taken the field and left the widow, and the nearer relative does exactly that, and the writer does not even give him a name. Then the elders bless Boaz’s household, and they mention Tamar, who won her rights from Judah with a scheme at least as risky as a night on a threshing floor.",
        lenses: {
          theo: "The elders pray that this household will be like Rachel and Leah, who built up Israel, and like the house of Perez, whose family began with a woman no one would have chosen. As the writer traces the family line toward David, God never once works through the obvious people.",
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
          text: "In the whole book, the writer says only once that God acts directly, in half of verse 13, when the LORD enables Ruth to conceive. The women of the town then bless Naomi rather than Ruth, and they are the ones who name the child. The name they give him, Obed, means something like “servant” or “one who works.”",
          src: "Campbell · Trible · Hubbard",
        },
        meaning:
          "Count what Naomi is given back. The women tell her that this child will renew her life and care for her in her old age, and both things are true, but the child is neither her husband nor her sons. Naomi is handed a grandchild, and she holds him. The women also tell her that Ruth is better to her than seven sons, and seven was the largest number they had for saying such a thing. It is a real gift to hear that. It is not the same as being given back what she lost.",
        lenses: {
          arch: "Many people have had to begin a second life after the first one ended, a life that neither replaces nor makes up for what they lost, and which they must live all the same. Naomi’s grandchild does not give her back her sons, and the writer never pretends that he does.",
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
          text: "The writer gives five verses of fathers and sons, tracing the line from Perez to David.",
          src: "Campbell · Sasson",
        },
        meaning:
          "Read the fourth name from the end of the list. Ruth, a Moabite, from the people the law barred from the assembly to the tenth generation, is the great-grandmother of David, and the writer records it in the book’s last line as a plain matter of fact. No one inside the story knows it.",
        addr: {
          mode: "names",
          text: "You may be in the middle of something whose importance you cannot see from where you stand, and the people who come to depend on it may never know your name either.",
        },
        ask: "What are you doing now that may only make sense later, if it ever does?",
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
    "A famine drives a family to a foreign country, and in five verses three of them die. What remains is an old woman who has nothing to offer, and a daughter-in-law who refuses to be released, the two of them walking back to Bethlehem at harvest time.",
  chapterStart: 1,
  chapterEnd: 2,
  situation: {
    kicker: "The ground beneath the road",
    title: "The situation",
    image: "/images/ruth-moab.webp",
    paragraphs: [
      "Moab lies across the Dead Sea from Bethlehem, near enough to walk to but foreign enough to matter. Israel’s writers treat Moab worse than any other neighbor. The book of Numbers blames Moabite women for leading Israel into the worship of another god, and Deuteronomy bars Moabites from the assembly of the LORD to the tenth generation. During a famine, people did go to Moab to find food, and the writer of Ruth reports that the family went there without a word of comment.",
      "A widow’s position was a matter of property law, not sympathy. Households owned the land, land passed down through men, and a woman with no husband and no sons had no standing and no income of her own. When Naomi tells her daughters-in-law that she has nothing to offer them, she is not exaggerating. She is describing how things worked. A woman in that position could only hope for a household willing to take her in, or else gather the leftovers from someone else’s harvest.",
      "Israel’s law required those leftovers. Leviticus and Deuteronomy command a landowner to leave the corners of his field unharvested and not to go back for what his workers dropped, and they name the people it is meant for: the poor, the foreigner, the widow, and the orphan. The lawgivers wrote this relief as a restriction on the strong rather than as a gift from them, which is a different thing, and it helped the poor only when the strong obeyed it.",
      "The writer plays with names throughout the book and expects readers to notice. Bethlehem means “house of bread,” yet at the start it has no bread. Naomi’s name sounds like the word for pleasant, and she asks the town to call her bitter instead. The two sons who die are named Mahlon and Chilion, which sound like the words for sickness and for wasting away. Paying attention to the names is part of reading the book well.",
    ],
    sources: "Campbell · Hubbard · Meyers · Eskenazi & Frymer-Kensky",
  },
  doorway: {
    kicker: "The second movement",
    title: "The redeemer",
    paragraphs: [
      "In the first half of the book, the two women are simply trying to survive. Naomi comes home with nothing, Ruth goes out to work, and the day ends with a heavy load of barley and the name of a man who turns out to matter. Neither woman has claimed anything yet, and no one has asked anyone for anything.",
      "In the second half, the two women press a claim even though they have no standing, using a piece of family property law that does not quite fit their case. Ruth begins it at night on a threshing floor, where she alone takes the risk, and Boaz finishes it in daylight at the town gate, in front of ten elders, in a conversation that no one thinks to include her in.",
    ],
    nextMovementId: "the-redeemer",
  },
  capstone: {
    kicker: "The first movement · Ruth 1–2",
    title: "What is left, and what it is worth",
    paragraphs: [
      "After two chapters, Naomi’s situation has barely changed. She still has no husband and no sons, she still has no land she can work, and she has not taken back a word of what she said in the street. The writer has not corrected her, argued with her, or arranged a moment when she sees things differently. For two chapters he has let her words stand.",
      "What has changed is smaller than a rescue, but it is not nothing. Ruth would not leave Naomi. Boaz noticed a woman in his field and chose to keep the gleaning law generously rather than grudgingly, which is the kind of thing the book’s key word, hesed, describes: doing more than you owe. And an old woman who had stopped expecting anything spoke a blessing out loud over a living man.",
      "That is the shape of the first half, and readers should pause over it before the second half begins. No one has been given back what they lost. Two people did more than they had to, and Ruth came home from a day’s work with more than she should have been able to carry.",
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
    "Naomi stops waiting and makes a plan, and Ruth goes further than the plan went. The two of them press a legal claim even though they have no standing, and Boaz settles it at the town gate among men who never think to ask Ruth a question.",
  chapterStart: 3,
  chapterEnd: 4,
  situation: {
    kicker: "The ground beneath the claim",
    title: "The situation",
    image: "/images/ruth-redeemer.webp",
    paragraphs: [
      "Under Israel’s law, a redeemer was a relative who had both the right and the duty to buy back what a family had lost, whether that was land the family had been forced to sell or a relative who had been sold into slavery for debt. The law worked as a family safety net, and it existed because Israelites believed that land should never leave a family for good. The word “redeemer” runs through the second half of this book, and the first readers would have heard it as a legal term before anything else.",
      "Deuteronomy sets out a separate duty: when a man died without a son, his brother was to marry the widow, so that their first son would carry on the dead man’s name and inherit his share of the land. That law applied to brothers living on the same family property. Boaz is not the dead man’s brother, and neither is the nearer relative.",
      "What happens in Ruth does not exactly match either law. Boaz combines buying back the land with marrying the widow, in a case that neither law covers, and ten elders at the town gate agree to it. Scholars genuinely disagree about whether the writer is describing a custom we have no other record of, or showing what he thought the law ought to require. It is more honest to admit the disagreement than to force the story to fit a single law.",
      "The threshing floor was a place of work, not a house. At the end of the harvest, farmers beat the grain on a hard floor, usually on high ground, and tossed it into the wind to separate it from the chaff, and the men slept beside the heap to guard it. It lay at the edge of town, out in the open, and Naomi sends Ruth there at night.",
    ],
    sources: "Leviticus 25 · Deuteronomy 25:5–10 · Campbell · Hubbard · Sasson",
  },
  capstone: {
    kicker: "The second movement · Ruth 3–4",
    title: "A claim pressed, and a name carried",
    paragraphs: [
      "In the second half of the book, each person uses whatever standing they have. Naomi uses the only leverage available to her, which is her knowledge of the law and of the family. Ruth uses the only thing she has, which is her willingness to be the one exposed. Boaz uses what he actually has, which is money, position, and the right to speak first at the town gate.",
      "Readers should notice how unromantic all of this is. Ruth makes her claim at night, in words that could ruin her. Boaz settles it the next morning over a field, with a sandal, in front of witnesses, in a conversation she takes no part in. The nearer relative, who wants the land but drops the widow the moment Boaz mentions her, is the only person in the book whom the writer never names.",
      "At the end, the women of the town hand a baby to a woman who lost two sons, and they tell her something that is true but is not the same as what she lost. The writer does not pretend the two are the same. He simply refuses to end the book anywhere else.",
    ],
    sources: "Campbell · Sasson · Fewell & Gunn · Trible",
  },
};

// The book-level composition overlay: how Ruth was written, and the question it was written into.
export const RUTH_INTRO: Panel = {
  kicker: "An introduction · Ruth 1–4",
  title: "The book of the two widows",
  paragraphs: [
    "Ruth is a short book of four chapters and eighty-five verses. It is one of only two books in the Bible named for a woman, the other being Esther, and it is the only one whose central relationship is between two women. The writer sets it in the time of the judges, a period the book of Judges portrays as violent and falling apart, yet Ruth contains no battle, no miracle, and no villain. In the Hebrew Bible it stands among the Writings, and Jews read it at Shavuot, the harvest festival, because the story takes place during the harvest. Christian Bibles place it after Judges, a later arrangement that changes how readers experience the book.",
    "Scholars genuinely disagree about when Ruth was written. Some place it in the Persian period, in the fifth or fourth century BCE, and read it as a protest against the campaign in Ezra and Nehemiah to break up marriages to foreign women. Others argue for a much earlier date, pointing to old forms in its Hebrew, and suggest that someone added the closing genealogy to a story people were already telling. Both sides use the same language evidence, and readers should know that before anyone tells them the question is settled.",
    "What no one disputes is that the writer knew exactly what he was doing with his Moabite heroine. He took a woman from the people the law barred from the assembly, made her the most faithful person in the story, had her swear loyalty in the LORD’s name, and then named her in the book’s last line as the great-grandmother of David, as if daring readers to work out what that means.",
    "God also does very little in this book. The writer credits him with only two acts: sending bread to Bethlehem, which Naomi hears about secondhand, and enabling Ruth to conceive, in a single clause near the end. Everything else happens because people decide what they owe one another and then do more than that, which is what the book’s key word, hesed, means. Whatever the writer believes about how rescue comes, he does not show it coming from the sky.",
  ],
  timeline: [
    {
      tag: "c. 1200–1000 BCE",
      text: "The time in which the writer sets the story: the period of the judges, before Israel had a king.",
    },
    {
      tag: "c. 1000 BCE",
      text: "The reign of David, the king the closing genealogy is written to reach.",
    },
    {
      tag: "586 BCE",
      text: "The Babylonians destroy Jerusalem, and the question of who counts as an Israelite becomes urgent.",
    },
    {
      tag: "c. 450 BCE",
      text: "Ezra and Nehemiah order Israelite men to break up their marriages to foreign women. Many scholars read the book of Ruth as a reply.",
    },
    {
      tag: "Disputed",
      text: "Possible dates for the writing of Ruth. Scholars argue for dates ranging from the time of the kings to the Persian period, and both sides use the same evidence.",
    },
  ],
  sources: "Campbell · Hubbard · Sasson · Eskenazi & Frymer-Kensky · Trible",
};

// The book-level look-back, where Ruth's argument actually lives.
export const RUTH_CAPSTONE: Capstone = {
  kicker: "The whole book · Ruth 1–4",
  title: "Not given back, and built anyway",
  paragraphs: [
    "Begin with how little God does in this book. In eighty-five verses the writer credits him with only two things: sending bread to Bethlehem, which Naomi hears about secondhand in a foreign country, and enabling Ruth to conceive, in half a verse near the end. People do everything else. A daughter-in-law refuses to go home. A landowner keeps a law generously when he could have kept it grudgingly. An old woman who knows the law makes a plan. Ten elders approve an arrangement that the written laws do not quite cover. The key word hesed appears three times, and each time someone uses it for doing more than was owed. Whatever the writer believes about how rescue comes, he does not show it coming from the sky.",
    "Then notice what the writer refuses to do. Naomi does not get her husband back, and she does not get her sons back. The women tell her that the child will renew her life and care for her in old age, and that is true, but the child is a grandchild. In chapter 1 Naomi asked the town to call her bitter, and the writer never shows her taking it back, never stages a moment when she sees things differently, and never has anyone correct her. Instead she receives a different life, which comes slowly, through work and through other people, and the writer is completely clear that it is a different life and not the old one restored.",
    "And then comes the last line, which carries the writer’s whole argument. He names a Moabite, from the people Deuteronomy barred from the assembly of the LORD to the tenth generation, as David’s great-grandmother, without comment, as a matter of record. No one inside the story knows it. If we read the book against the later campaign to send foreign wives away, we see that the writer has not written a warm story about inclusion. He has made an argument in the form of a story, knowing exactly which law he was standing against, and he put the Moabite into the genealogy anyway.",
  ],
  tensions: [
    {
      claim:
        "Israel is to keep itself separate: no Moabite may enter the assembly of the LORD, even to the tenth generation, and Israelite men are to send their foreign wives away.",
      counter:
        "The writer of Ruth makes a Moabite the most faithful person in his book and the great-grandmother of David, and he states it in the last line without arguing for it.",
      where:
        "Deuteronomy 23:3 · Ezra 9–10 · Nehemiah 13:23–27 · Ruth 4:17–22",
    },
  ],
  sources: "Campbell · Hubbard · Sasson · Trible · Eskenazi & Frymer-Kensky",
  ask: "What are you building in your life right now that may only make sense to someone who comes after you?",
};
