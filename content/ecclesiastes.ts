import type { Capstone, Movement, Panel, Reading } from "@/lib/types";

// Ecclesiastes, book five. Twelve chapters, 222 verses, and the first published book in this app
// that is not narrative. Three passage kinds run here that no published book has used before:
// `poem` at more than a single instance, `saying-cluster`, and `argument`.
//
// Three movements rather than four. The movement apparatus is sized for long books, and 222 verses
// sits between Ruth's 85 and Mark's 661. Chapters 1-4, 5-8 and 9-12 divide the book at its own
// hinges, the last of them at 9:7 where the argument turns.
//
// Poems are lineated at the parallelism and authored whole, per ADR 0001 and the validator rule
// that a lineated poem may not skip a verse. The line breaks are inserted by scripts/build-
// ecclesiastes.ts, which asserts the words are unchanged against the BSB before emitting.
//
// The scripture here was materialised verbatim from content/bsb-ecclesiastes.ts. Never retype a
// verse by hand, and never hand-edit this file: change the generator and re-run it.

export const ECCLESIASTES: Reading[] = [
  {
    id: "ecc-1",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 1",
    chapterIndex: 1,
    title: "Nothing new under the sun",
    thread: "The book opens by announcing its own conclusion, spends eleven lines setting a human life beside the sun and the sea, and then points out that nobody will remember you either.",
    closeEnd: "He is the wisest man in the story and he says the wisdom is the part that hurts. That is the last line of the chapter, and it is not a complaint.",
    passages: [
      {
        ref: "1:1–11",
        kind: "poem",
        form: "poetry",
        title: "Vapour of vapours",
        verses: [
          { n: 1, text: "These are the words of the Teacher,\nthe son of David, king in Jerusalem:" },
          { n: 2, text: "“Futility of futilities,” says the Teacher,\n“futility of futilities!\nEverything is futile!”" },
          { n: 3, text: "What does a man gain from all his labor,\nat which he toils under the sun?" },
          { n: 4, text: "Generations come and generations go,\nbut the earth remains forever." },
          { n: 5, text: "The sun rises and the sun sets;\nit hurries back to where it rises." },
          { n: 6, text: "The wind blows southward, then turns northward;\nround and round it swirls,\never returning on its course." },
          { n: 7, text: "All the rivers flow into the sea,\nyet the sea is never full;\nto the place from which the streams come,\nthere again they flow." },
          { n: 8, text: "All things are wearisome,\nmore than one can describe;\nthe eye is not satisfied with seeing,\nnor the ear content with hearing." },
          { n: 9, text: "What has been will be again,\nand what has been done will be done again;\nthere is nothing new under the sun." },
          { n: 10, text: "Is there a case where one can say, “Look, this is new”?\nIt has already existed in the ages before us." },
          { n: 11, text: "There is no remembrance of those who came before,\nand those yet to come will not be remembered\nby those who follow after." },
        ],
        ground: {
          kind: "genre",
          text: "The speaker calls himself Qoheleth, which the BSB gives as the Teacher. It is a role rather than a name, closer to the one who convenes an assembly. The Hebrew is late and carries Persian loanwords, placing the writing centuries after the Solomon the opening points at. And the key word, which the BSB gives as futility, is <b>hevel</b>. It means vapour, or breath. The thing you can see and cannot hold.",
          src: "Fox · Seow · Longman · Alter",
        },
        misreading: {
          named:
            "Nothing new under the sun is world-weary cynicism, the shrug of a man who has seen it all.",
          why: "The poem is not shrugging. It is describing a closed system, and every image in it is of something moving hard and arriving nowhere: generations coming and going, a sun that hurries back to where it started, wind circling, rivers pouring into a sea that never fills. That is not boredom, it is motion without accumulation, which is a far more unsettling claim. And the line the poem actually ends on is not about novelty at all. It is about being forgotten.",
        },
        meaning:
          "The book opens by asking what a person gains, and the word is commercial: what is the profit, after costs. The poem answers by setting a human life beside the earth, the sun, the wind and the sea, all of which outlast it and none of which arrive anywhere. Then the sting in the last verse, which is not about the world but about you. There is no remembrance of those who came before. He has moved from cosmology to the thing that actually frightens people in about ten lines.",
        lenses: {
          theo: "Nothing here is said against God, and God is not mentioned. That is the book's method. It starts from what anybody can see, and refuses to reach for a consolation it has not earned yet.",
        },
      },
      {
        ref: "1:12–18",
        kind: "argument",
        form: "prose",
        title: "I set my mind to seek",
        verses: [
          { n: 12, text: "I, the Teacher, was king over Israel in Jerusalem." },
          { n: 13, text: "And I set my mind to seek and explore by wisdom all that is done under heaven. What a miserable task God has laid upon the sons of men to occupy them!" },
          { n: 14, text: "I have seen all the things that are done under the sun, and have found them all to be futile, a pursuit of the wind." },
          { n: 15, text: "What is crooked cannot be straightened, and what is lacking cannot be counted." },
          { n: 16, text: "I said to myself, “Behold, I have grown and increased in wisdom beyond all those before me who were over Jerusalem, and my mind has observed a wealth of wisdom and knowledge.”" },
          { n: 17, text: "So I set my mind to know wisdom and madness and folly; I learned that this, too, is a pursuit of the wind." },
          { n: 18, text: "For with much wisdom comes much sorrow, and as knowledge grows, grief increases." },
        ],
        ground: {
          kind: "historical",
          text: "He takes up the royal voice here and then abandons it: after chapter two the book never speaks as a king again, which is why most readers take the crown as a device rather than a claim. The method he describes is deliberate investigation. And the phrase for what he finds, a pursuit of the wind, is a chasing or a herding of something that cannot be herded.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The experiment is honest, and that is what makes the finding hard. He does not conclude that wisdom is worthless; later in the book he says plainly that wisdom beats folly the way light beats darkness. What he says here is narrower and worse. Understanding a thing does not fix it, and it costs. What is crooked cannot be straightened. With much wisdom comes much sorrow. That is not an argument against learning. It is a warning about what learning does not do.",
        addr: {
          mode: "claims",
          text: "You have wanted to understand a situation, on the working assumption that understanding it would give you some purchase on it. This book agrees that you can understand it, and tells you plainly that the purchase is not included.",
        },
        ask: "What are you still hoping to think your way out of?",
      },
    ],
  },
  {
    id: "ecc-2",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 2",
    chapterIndex: 2,
    title: "I denied myself nothing",
    thread: "He runs the experiment properly: pleasure, then building, then wealth, then wisdom itself, with a verdict recorded after each. Then he does the arithmetic on what happens to all of it afterwards.",
    closeEnd: "And then, with no transition at all, the first appearance of the sentence this book keeps coming back to. Eat, drink, and find something in the work.",
    passages: [
      {
        ref: "2:1–11",
        kind: "argument",
        form: "prose",
        title: "I denied myself nothing",
        verses: [
          { n: 1, text: "I said to myself, “Come now, I will test you with pleasure; enjoy what is good!” But it proved to be futile." },
          { n: 2, text: "I said of laughter, “It is folly,” and of pleasure, “What does it accomplish?”" },
          { n: 3, text: "I sought to cheer my body with wine and to embrace folly—my mind still guiding me with wisdom—until I could see what was worthwhile for men to do under heaven during the few days of their lives." },
          { n: 4, text: "I expanded my pursuits. I built houses and planted vineyards for myself." },
          { n: 5, text: "I made gardens and parks for myself, where I planted all kinds of fruit trees." },
          { n: 6, text: "I built reservoirs to water my groves of flourishing trees." },
          { n: 7, text: "I acquired menservants and maidservants, and servants were born in my house. I also owned more herds and flocks than anyone in Jerusalem before me," },
          { n: 8, text: "and I accumulated for myself silver and gold and the treasure of kings and provinces. I gathered to myself male and female singers, and the delights of the sons of men—many concubines." },
          { n: 9, text: "So I became great and surpassed all in Jerusalem who had preceded me; and my wisdom remained with me." },
          { n: 10, text: "Anything my eyes desired, I did not deny myself. I refused my heart no pleasure. For my heart took delight in all my work, and this was the reward for all my labor." },
          { n: 11, text: "Yet when I considered all the works that my hands had accomplished and what I had toiled to achieve, I found everything to be futile, a pursuit of the wind; there was nothing to be gained under the sun." },
        ],
        ground: {
          kind: "historical",
          text: "The list is a royal building programme as the ancient world understood one: houses, vineyards, gardens and parks, pools to water them, slaves born in the household, herds larger than anyone before him, silver and gold, singers. It reads like a royal inscription, the genre kings used to record their achievements, and it is imitating one on purpose. The difference is the last line, which no royal inscription ever carried.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is an experiment, not a confession. He says twice that his wisdom stayed with him throughout, which means he is not describing a man losing himself in pleasure. He is describing a man testing pleasure while taking notes. And he does not report that it failed to please him: his heart took delight in all his labour, and that was his reward. The verdict is not that it was not enjoyable. The verdict is that there was nothing to be gained. Nothing left over, nothing that accumulated.",
        lenses: {
          arch: "The achievement recorded in full, in the voice of the man who built it, ending on the sentence he did not expect to write. (The inscription that undercuts itself.)",
        },
      },
      {
        ref: "2:12–17",
        kind: "argument",
        form: "prose",
        title: "One event happens to both",
        verses: [
          { n: 12, text: "Then I turned to consider wisdom and madness and folly; for what more can the king’s successor do than what has already been accomplished?" },
          { n: 13, text: "And I saw that wisdom exceeds folly, just as light exceeds darkness:" },
          { n: 14, text: "The wise man has eyes in his head, but the fool walks in darkness. Yet I also came to realize that one fate overcomes them both." },
          { n: 15, text: "So I said to myself, “The fate of the fool will also befall me. What then have I gained by being wise?” And I said to myself that this too is futile." },
          { n: 16, text: "For there is no lasting remembrance of the wise, just as with the fool, seeing that both will be forgotten in the days to come. Alas, the wise man will die just like the fool!" },
          { n: 17, text: "So I hated life, because the work that is done under the sun was grievous to me. For everything is futile and a pursuit of the wind." },
        ],
        ground: {
          kind: "historical",
          text: "The comparison is not between wisdom and folly on their merits. He grants the merit immediately: wisdom exceeds folly as light exceeds darkness, and the wise man has eyes in his head. The argument is about what survives, and the term he lands on is the one he used of generations in chapter one. Both are forgotten.",
          src: "Fox · Seow",
        },
        meaning:
          "Here is the move the whole book turns on, made for the first time. He does not deny that wisdom is better. He denies that being better changes the outcome. The wise man and the fool both die and neither is remembered, and the sentence he arrives at is the bleakest in the chapter: so I hated life. It is worth noticing that he says it and then keeps going. This is a book that records the low point and continues to the next paragraph, which is a kind of honesty most consolation cannot manage.",
      },
      {
        ref: "2:18–26",
        kind: "argument",
        form: "prose",
        title: "The one who comes after",
        verses: [
          { n: 18, text: "I hated all for which I had toiled under the sun, because I must leave it to the man who comes after me." },
          { n: 19, text: "And who knows whether that man will be wise or foolish? Yet he will take over all the labor at which I have worked skillfully under the sun. This too is futile." },
          { n: 20, text: "So my heart began to despair over all the labor that I had done under the sun." },
          { n: 21, text: "When there is a man who has labored with wisdom, knowledge, and skill, and he must give his portion to a man who has not worked for it, this too is futile and a great evil." },
          { n: 22, text: "For what does a man get for all the toil and striving with which he labors under the sun?" },
          { n: 23, text: "Indeed, all his days are filled with grief, and his task is sorrowful; even at night, his mind does not rest. This too is futile." },
          { n: 24, text: "Nothing is better for a man than to eat and drink and enjoy his work. I have also seen that this is from the hand of God." },
          { n: 25, text: "For apart from Him, who can eat and who can find enjoyment?" },
          { n: 26, text: "To the man who is pleasing in His sight, He gives wisdom and knowledge and joy, but to the sinner He assigns the task of gathering and accumulating that which he will hand over to one who pleases God. This too is futile and a pursuit of the wind." },
        ],
        ground: {
          kind: "historical",
          text: "The problem in this passage is inheritance. Everything he built goes to somebody who did not build it, and he has no way of knowing whether that person will be wise or a fool. In a world where a household's holdings were a family's entire security, that is a concrete anxiety rather than a philosophical one.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "He is not complaining that he has to die. He is complaining that the work will belong to somebody who did not do it and may not deserve it, which is a much more specific grievance and a far more familiar one. Then, at the end, with no transition, the first of this book's six permissions. There is nothing better than to eat and drink and find enjoyment in your work. It arrives in chapter two, immediately after a paragraph about hating everything, and he says it is from the hand of God. Both halves are meant.",
        addr: {
          mode: "claims",
          text: "You are working on something that will outlast your control of it, and be handed to somebody who did not build it and may not keep it well. The book does not tell you to mind less about that. It tells you to eat while you are still the one doing the work.",
        },
        ask: "What are you doing today that you are refusing to enjoy until you know it will last?",
      },
    ],
  },
  {
    id: "ecc-3",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 3",
    chapterIndex: 3,
    title: "A time for everything",
    thread: "The most quoted passage in the book, and half its pairs are things nobody wants. Then eternity in the human heart, and a sentence about beasts that has troubled readers for two thousand years.",
    closeEnd: "He asks who can bring a man to see what comes after him. It is a real question, and the book does not answer it.",
    passages: [
      {
        ref: "3:1–8",
        kind: "poem",
        form: "poetry",
        title: "A time for everything",
        verses: [
          { n: 1, text: "To everything there is a season,\nand a time for every purpose under heaven:" },
          { n: 2, text: "a time to be born and a time to die,\na time to plant and a time to uproot," },
          { n: 3, text: "a time to kill and a time to heal,\na time to break down and a time to build," },
          { n: 4, text: "a time to weep and a time to laugh,\na time to mourn and a time to dance," },
          { n: 5, text: "a time to cast away stones and a time to gather stones together,\na time to embrace and a time to refrain from embracing," },
          { n: 6, text: "a time to search and a time to count as lost,\na time to keep and a time to discard," },
          { n: 7, text: "a time to tear and a time to mend,\na time to be silent and a time to speak," },
          { n: 8, text: "a time to love and a time to hate,\na time for war and a time for peace." },
        ],
        ground: {
          kind: "genre",
          text: "Fourteen pairs, twenty-eight items, arranged as opposites. The form is a catalogue, a recognised wisdom device, and the arrangement is deliberate: the list opens on birth and death and closes on war and peace, so it begins and ends with the two things a person has least say in.",
          src: "Fox · Seow · Alter",
        },
        misreading: {
          named:
            "The poem is a consolation: everything has its proper season, so whatever you are in will pass.",
          why: "Read the list. A time to kill. A time to tear down. A time to hate. A time for war. Half of these are things nobody chooses and nobody wants, and the poem gives them exactly the same standing as being born, and dancing, and embracing. It is not saying your bad season will pass. It is saying the bad seasons are part of the arrangement, on the same footing as the good ones. The verse immediately after it asks what the worker gains from any of it. The comfort people take from this poem is real, and it is not what the poem is doing.",
        },
        meaning:
          "The poem's power is in what it does not say. There is no advice anywhere in it. It never tells you which time it currently is, or how you would know, which is the only thing a person in the middle of one actually wants. What it establishes is that the times are not yours, and that is the claim the rest of the chapter builds on.",
      },
      {
        ref: "3:9–15",
        kind: "argument",
        form: "prose",
        title: "Eternity in their hearts",
        verses: [
          { n: 9, text: "What does the worker gain from his toil?" },
          { n: 10, text: "I have seen the burden that God has laid upon the sons of men to occupy them." },
          { n: 11, text: "He has made everything beautiful in its time. He has also set eternity in the hearts of men, yet they cannot fathom the work that God has done from beginning to end." },
          { n: 12, text: "I know that there is nothing better for them than to rejoice and do good while they live," },
          { n: 13, text: "and also that every man should eat and drink and find satisfaction in all his labor—this is the gift of God." },
          { n: 14, text: "I know that everything God does endures forever; nothing can be added to it or taken from it. God does it so that they should fear Him." },
          { n: 15, text: "What exists has already been, and what will be has already been, for God will call to account what has passed." },
        ],
        ground: {
          kind: "historical",
          text: "Verse 11 is among the hardest sentences in the book to translate, and the word given here as eternity has also been rendered world, ignorance, and a sense of past and future. What is not in doubt is the structure: something has been put into people that they cannot use to see the whole.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the closest the book comes to explaining its own predicament. Something in a person reaches for the whole shape of things, and the reach does not work: they cannot fathom what God has done from beginning to end. That is not ignorance, which could be fixed by finding out. It is a mismatch, built in. And what he draws from it is not despair. It is the second of the six permissions, arriving here exactly as it did in chapter two, immediately after the hardest sentence in the paragraph.",
      },
      {
        ref: "3:16–22",
        kind: "argument",
        form: "prose",
        title: "The same breath",
        verses: [
          { n: 16, text: "Furthermore, I saw under the sun that in the place of judgment there is wickedness, and in the place of righteousness there is wickedness." },
          { n: 17, text: "I said in my heart, “God will judge the righteous and the wicked, since there is a time for every activity and every deed.”" },
          { n: 18, text: "I said to myself, “As for the sons of men, God tests them so that they may see for themselves that they are but beasts.”" },
          { n: 19, text: "For the fates of both men and beasts are the same: As one dies, so dies the other—they all have the same breath. Man has no advantage over the animals, since everything is futile." },
          { n: 20, text: "All go to one place; all come from dust, and all return to dust." },
          { n: 21, text: "Who knows if the spirit of man rises upward and the spirit of the animal descends into the earth?" },
          { n: 22, text: "I have seen that there is nothing better for a man than to enjoy his work, because that is his lot. For who can bring him to see what will come after him?" },
        ],
        ground: {
          kind: "historical",
          text: "The word for breath here is the one used of the breath of life on the second page of Genesis, and the sentence is built so that men and beasts share it without distinction. Verse 21 then asks who knows whether one rises and the other goes down, which is a question rather than a denial, and the earliest readers argued about it in exactly those terms.",
          src: "Genesis 2:7 · Fox · Seow",
        },
        meaning:
          "He is not saying a human being is worth nothing. He is saying that on the evidence available under the sun the exit is the same, and that anybody claiming otherwise is claiming to know something they cannot see. That is a statement about the limits of the enquiry rather than a verdict about the world, and the book is careful with it: verse 21 is a question, not an answer. Then, for the third time in three chapters, the permission.",
        tensions: [
          {
            claim:
              "Man has no advantage over the animals. Both come from the dust and both return to it, and who knows whether one breath rises and the other goes down.",
            counter:
              "The first page of the same collection has a human being made in God's image and given charge of the animals, and later writing in it grows a hope this book will not assert.",
            where: "Ecclesiastes 3:19–21 · Genesis 1:26–28 · Daniel 12:2",
          },
        ],
        addr: {
          mode: "claims",
          text: "You have been told, and have probably said, that a hard stretch is a season and will pass. This book will not give you that. What it offers instead is the day in front of you, and permission to take it seriously while it is there.",
        },
        ask: "What is in front of you today that you are treating as an interruption?",
      },
    ],
  },
  {
    id: "ecc-4",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 4",
    chapterIndex: 4,
    title: "The tears of the oppressed",
    thread: "The cold eye turns outward for the first time. Not what a life adds up to, but what people do to each other, and what it costs to face it alone.",
    closeEnd: "A cord of three strands is not quickly broken. It is the warmest sentence in the book, and it is an argument from weakness rather than from hope.",
    passages: [
      {
        ref: "4:1–6",
        kind: "argument",
        form: "prose",
        title: "No comforter",
        verses: [
          { n: 1, text: "Again I looked, and I considered all the oppression taking place under the sun. I saw the tears of the oppressed, and they had no comforter; the power lay in the hands of their oppressors, and there was no comforter." },
          { n: 2, text: "So I admired the dead, who had already died, above the living, who are still alive." },
          { n: 3, text: "But better than both is he who has not yet existed, who has not seen the evil that is done under the sun." },
          { n: 4, text: "I saw that all labor and success spring from a man’s envy of his neighbor. This too is futile and a pursuit of the wind." },
          { n: 5, text: "The fool folds his hands and consumes his own flesh." },
          { n: 6, text: "Better one handful with tranquility than two handfuls with toil and pursuit of the wind." },
        ],
        ground: {
          kind: "historical",
          text: "The phrase they had no comforter appears twice in the same verse, which is unusual, and is the writer leaning on it. The conclusion he then draws is the most extreme in the book: that the dead are better off than the living, and better still are those not yet born, who have not seen the evil done under the sun.",
          src: "Fox · Seow",
        },
        meaning:
          "This is the book at its coldest, and the cause is not despair about existence in general. It is oppression, specifically, and the detail he cannot get past is that there was nobody to comfort them. Not that there was no justice, though there is none here. That there was nobody there. Then the sudden turn to a handful with tranquillity, which sits oddly after it until you notice both halves are about the same thing: what people will do to each other to get more.",
      },
      {
        ref: "4:7–16",
        kind: "argument",
        form: "prose",
        title: "Two are better than one",
        verses: [
          { n: 7, text: "Again, I saw futility under the sun." },
          { n: 8, text: "There is a man all alone, without even a son or brother. And though there is no end to his labor, his eyes are still not content with his wealth: “For whom do I toil and bereave my soul of enjoyment?” This too is futile—a miserable task." },
          { n: 9, text: "Two are better than one, because they have a good return for their labor." },
          { n: 10, text: "For if one falls down, his companion can lift him up; but pity the one who falls without another to help him up!" },
          { n: 11, text: "Again, if two lie down together, they will keep warm; but how can one keep warm alone?" },
          { n: 12, text: "And though one may be overpowered, two can resist. Moreover, a cord of three strands is not quickly broken." },
          { n: 13, text: "Better is a poor but wise youth than an old but foolish king who no longer knows how to take a warning." },
          { n: 14, text: "For the youth has come from the prison to the kingship, though he was born poor in his own kingdom." },
          { n: 15, text: "I saw that all who lived and walked under the sun followed this second one, the youth who succeeded the king." },
          { n: 16, text: "There is no limit to all the people who were before them. Yet the successor will not be celebrated by those who come even later. This too is futile and a pursuit of the wind." },
        ],
        ground: {
          kind: "historical",
          text: "The man with no son and no brother is a specific figure rather than a mood: in that society the household was the unit of security, and a man alone had no claim on anybody. The examples that follow are practical, not sentimental. If one falls, the other lifts him. If two lie down together they keep warm. Two can resist an attacker.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the warmest passage in the book and it is built entirely on weakness. Not one word of it says that companionship is fulfilling. It says you will fall over, you will be cold, and somebody will come at you, and one person cannot manage any of the three. The cord of three strands is an argument from vulnerability, which makes it much harder to wave away than a sentiment would be. Then the chapter closes on a crowd that turns from an old king to a young one and will turn again, which is the same point about people made from the other side.",
        addr: {
          mode: "claims",
          text: "You have been managing something alone that is not meant to be managed alone, and you have probably filed that under strength. This book files it under exposure, and its argument is not that company is pleasant. It is that you will fall over.",
        },
        ask: "What are you carrying by yourself that a second person could simply take one end of?",
      },
    ],
  },
  {
    id: "ecc-5",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 5",
    chapterIndex: 5,
    title: "Your lot",
    thread: "How to behave in a place of worship, which turns out to be mostly an instruction to say less. Then officials watching officials, money that will not fill anyone, and a man leaving exactly as he arrived.",
    closeEnd: "And then, for the fourth time, the same sentence. Eat, drink, find something in the work. Here he calls it a gift.",
    passages: [
      {
        ref: "5:1–7",
        kind: "argument",
        form: "prose",
        title: "Let your words be few",
        verses: [
          { n: 1, text: "Guard your steps when you go to the house of God. Draw near to listen rather than to offer the sacrifice of fools, who do not know that they do wrong." },
          { n: 2, text: "Do not be quick to speak, and do not be hasty in your heart to utter a word before God. For God is in heaven and you are on earth. So let your words be few." },
          { n: 3, text: "As a dream comes through many cares, so the speech of a fool comes with many words." },
          { n: 4, text: "When you make a vow to God, do not delay in fulfilling it, because He takes no pleasure in fools. Fulfill your vow." },
          { n: 5, text: "It is better not to vow than to make a vow and not fulfill it." },
          { n: 6, text: "Do not let your mouth cause your flesh to sin, and do not tell the messenger that your vow was a mistake. Why should God be angry with your words and destroy the work of your hands?" },
          { n: 7, text: "For as many dreams bring futility, so do many words. Therefore, fear God." },
        ],
        ground: {
          kind: "historical",
          text: "The house of God is the temple, and this is advice about conduct inside it. A vow was a binding transaction: a person promised something to God in exchange for something they wanted, and the law treated a broken one seriously. The messenger in verse 6 is most likely a temple official who has come to collect. So this is practical guidance about a real institution and a real debt.",
          src: "Deuteronomy 23:21–23 · Fox · Seow",
        },
        meaning:
          "The whole passage is about talking too much, and it is the only religious instruction in the book. Go to listen rather than to perform. Do not make promises you will regret. And once you are in one, do not tell the official it was a mistake. God is in heaven and you are on earth, so let your words be few. That is not piety. It is a warning about the distance between what people say in a religious moment and what they are willing to do on the Tuesday afterwards.",
        lenses: {
          theo: "The one piece of worship advice in this book is to say less. Everywhere else it is sceptical about what people can know. Here it is sceptical about what they promise.",
        },
      },
      {
        ref: "5:8–17",
        kind: "argument",
        form: "prose",
        title: "Never satisfied",
        verses: [
          { n: 8, text: "If you see the oppression of the poor and the denial of justice and righteousness in the province, do not be astonished at the matter; for one official is watched by a superior, and others higher still are over them." },
          { n: 9, text: "The produce of the earth is taken by all; the king himself profits from the fields." },
          { n: 10, text: "He who loves money is never satisfied by money, and he who loves wealth is never satisfied by income. This too is futile." },
          { n: 11, text: "When good things increase, so do those who consume them; what then is the profit to the owner, except to behold them with his eyes?" },
          { n: 12, text: "The sleep of the worker is sweet, whether he eats little or much, but the abundance of the rich man permits him no sleep." },
          { n: 13, text: "There is a grievous evil I have seen under the sun: wealth hoarded to the harm of its owner," },
          { n: 14, text: "or wealth lost in a failed venture, so when that man has a son there is nothing to pass on." },
          { n: 15, text: "As a man came from his mother’s womb, so he will depart again, naked as he arrived. He takes nothing for his labor to carry in his hands." },
          { n: 16, text: "This too is a grievous affliction: Exactly as a man is born, so he will depart. What does he gain as he toils for the wind?" },
          { n: 17, text: "Moreover, all his days he eats in darkness, with much sorrow, sickness, and anger." },
        ],
        ground: {
          kind: "historical",
          text: "Verse 8 describes a chain of officials, each watched by a higher one, which is the administration of a province inside an empire. It is offered as a reason not to be astonished by injustice rather than as a defence of it. Then the money: income that does not satisfy, goods that attract people to consume them, wealth that keeps its owner awake, and a fortune lost in a bad venture leaving a son with nothing.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the most practical stretch in the book and none of it has dated. A man who loves money is never satisfied by money. What you accumulate attracts people to consume it. The worker sleeps and the rich man does not. And at the centre, the accounting fact: he came naked and he leaves naked and takes nothing in his hands. That is not a moral about greed. It is stated flatly, and the paragraph around it is about what people do with entire lives in full knowledge of it.",
        lenses: {
          arch: "The thing acquired to produce security, which arrives and then has to be guarded, and takes the sleep it was bought to provide. (What you own, watching you.)",
        },
      },
      {
        ref: "5:18–20",
        kind: "argument",
        form: "prose",
        title: "This is his lot",
        verses: [
          { n: 18, text: "Here is what I have seen to be good and fitting: to eat and drink, and to find satisfaction in all the labor one does under the sun during the few days of life that God has given him—for this is his lot." },
          { n: 19, text: "Furthermore, God has given riches and wealth to every man, and He has enabled him to enjoy them, to accept his lot, and to rejoice in his labor. This is a gift from God." },
          { n: 20, text: "For a man seldom considers the days of his life, because God keeps him occupied with the joy of his heart." },
        ],
        ground: {
          kind: "historical",
          text: "The word given as lot is a portion: the share assigned to a person, the way land or food is apportioned. It describes what somebody gets rather than what they earn, and it is the term this book reaches for whenever it stops arguing.",
          src: "Fox · Seow",
        },
        meaning:
          "Fourth time, and the wording is stronger than before. Not merely that there is nothing better, but that this is good and fitting; that the ability to enjoy what you have is itself given; and that a man occupied with the joy of his heart does not spend his days counting them. That last line is close to a definition of contentment, and it has been arrived at from the bleakest available direction.",
        addr: {
          mode: "claims",
          text: "You have probably been treating enjoyment as something earned first and permitted afterwards. This book puts it the other way round. The days are few, the enjoyment is the portion, and there is no version of this where you finish and then begin.",
        },
        ask: "What are you postponing until you have earned it?",
      },
    ],
  },
  {
    id: "ecc-6",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 6",
    chapterIndex: 6,
    title: "A stranger will enjoy them",
    thread: "The shortest chapter and the bleakest. A man given everything and denied the capacity to enjoy it, and a comparison with a stillborn child that the book does not soften.",
    closeEnd: "It ends on two questions nobody can answer, which is where the first half of the book stops.",
    passages: [
      {
        ref: "6:1–6",
        kind: "argument",
        form: "prose",
        title: "A stranger will enjoy them",
        verses: [
          { n: 1, text: "There is another evil I have seen under the sun, and it weighs heavily upon mankind:" },
          { n: 2, text: "God gives a man riches, wealth, and honor, so that he lacks nothing his heart desires; but God does not allow him to enjoy them. Instead, a stranger will enjoy them. This is futile and a grievous affliction." },
          { n: 3, text: "A man may father a hundred children and live for many years; yet no matter how long he lives, if he is unsatisfied with his prosperity and does not even receive a proper burial, I say that a stillborn child is better off than he." },
          { n: 4, text: "For a stillborn child enters in futility and departs in darkness, and his name is shrouded in obscurity." },
          { n: 5, text: "The child, though neither seeing the sun nor knowing anything, has more rest than that man," },
          { n: 6, text: "even if he lives a thousand years twice over but fails to enjoy his prosperity. Do not all go to the same place?" },
        ],
        ground: {
          kind: "historical",
          text: "The affliction is precise, and it is the inverse of chapter five: not a man who lacks, but a man who has everything and is not given the capacity to enjoy it. The stillborn comparison uses a rhetorical form the ancient world knew. And the detail about not receiving a proper burial matters, because burial was the last thing a life could still get right.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The book has spent five chapters saying that enjoyment is the portion. Here it says the portion can be withheld, and it names God as the one withholding it, which is the most uncomfortable sentence in the chapter and is not softened. Then the comparison, which is meant to shock: a stillborn child, who never saw the sun and knew nothing, is better off than a man with a hundred children and a thousand years who could not enjoy any of it. He is not being provocative. He is measuring by his own standard, consistently, and that is where it comes out.",
      },
      {
        ref: "6:7–12",
        kind: "argument",
        form: "prose",
        title: "Better what the eye can see",
        verses: [
          { n: 7, text: "All a man’s labor is for his mouth, yet his appetite is never satisfied." },
          { n: 8, text: "What advantage, then, has the wise man over the fool? What gain comes to the poor man who knows how to conduct himself before others?" },
          { n: 9, text: "Better what the eye can see than the wandering of desire. This too is futile and a pursuit of the wind." },
          { n: 10, text: "Whatever exists was named long ago, and it is known what man is; but he cannot contend with one stronger than he." },
          { n: 11, text: "For the more words, the more futility—and how does that profit anyone?" },
          { n: 12, text: "For who knows what is good for a man during the few days in which he passes through his fleeting life like a shadow? Who can tell a man what will come after him under the sun?" },
        ],
        ground: {
          kind: "historical",
          text: "Verse 9 is a proverb, and it is the book's one piece of straightforward advice about wanting things: what is in front of you beats the wandering of appetite. The chapter then closes on two questions, which is how the first half of the book ends. Who knows what is good for a person, and who can say what comes after.",
          src: "Fox · Seow",
        },
        meaning:
          "The appetite line is the practical version of everything said so far about accumulation. All a man's labour is for his mouth, and the mouth is never filled. And the two closing questions are not rhetorical dressing. They are the position the book has been arguing toward since chapter one: nobody can tell you what is good, and nobody can tell you what comes after. The second half is written from inside that rather than out of it.",
        addr: {
          mode: "claims",
          text: "You are carrying an idea of the life you would enjoy, and it is not the one in front of you, and the comparison is doing steady damage to the one you have. Better what the eye can see, says the book, and it is not counselling modesty. It is being practical.",
        },
        ask: "What is actually in front of you, that you have been treating as the wrong version?",
      },
    ],
  },
  {
    id: "ecc-7",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 7",
    chapterIndex: 7,
    title: "Better than",
    thread: "A run of better-than sayings that recommend funerals over parties, and then the sentence that breaks the promise Proverbs makes.",
    closeEnd: "He set out to be wise and reports that it was beyond him. Then one thing he says he did find, which is about people rather than about the world.",
    passages: [
      {
        ref: "7:1–14 (selected)",
        kind: "saying-cluster",
        form: "list",
        title: "Better than",
        sayings: [
          { n: 1, text: "A good name is better than fine perfume, and one’s day of death is better than his day of birth." },
          { n: 2, text: "It is better to enter a house of mourning than a house of feasting, since death is the end of every man, and the living should take this to heart." },
          { n: 3, text: "Sorrow is better than laughter, for a sad countenance is good for the heart." },
          { n: 4, text: "The heart of the wise is in the house of mourning, but the heart of fools is in the house of pleasure." },
          { n: 5, text: "It is better to heed a wise man’s rebuke than to listen to the song of fools." },
          { n: 8, text: "The end of a matter is better than the beginning, and a patient spirit is better than a proud one." },
          { n: 9, text: "Do not be quickly provoked in your spirit, for anger settles in the lap of a fool." },
          { n: 10, text: "Do not say, “Why were the old days better than these?” For it is unwise of you to ask about this." },
          { n: 12, text: "For wisdom, like money, is a shelter, and the advantage of knowledge is that wisdom preserves the life of its owner." },
          { n: 13, text: "Consider the work of God: Who can straighten what He has bent?" },
          { n: 14, text: "In the day of prosperity, be joyful, but in the day of adversity, consider this: God has made one of these along with the other, so that a man cannot discover anything that will come after him." },
        ],
        perItem: {
          1: {
            note: "The second half is the surprise. A good name outlasting you is a conventional saying. Your death being better than your birth is not.",
          },
          2: {
            note: "The reason given is not that grief improves you. It is that a funeral tells the truth about where this goes and a party does not.",
          },
          10: {
            addr: {
              mode: "claims",
              text: "Nostalgia is named here as a failure of wisdom rather than a harmless habit. Not because the past was bad, but because the comparison is unavailable to you and you are making it anyway.",
            },
          },
          13: {
            note: "The same image as chapter one, what is crooked cannot be straightened, and here it is put directly to God's account.",
          },
          14: {
            note: "The closest the book comes to naming its own method. Take the good day as good. On the bad one, consider that you were never given the pattern.",
          },
        },
        ground: {
          kind: "genre",
          text: "The better-than saying is a standard wisdom form and Ecclesiastes uses it more densely here than anywhere else. Proverbs uses it too. The difference is what this collection recommends: a house of mourning over a house of feasting, sorrow over laughter, the end of a thing over its beginning. Read as advice that sounds morbid. Read as a form it is doing what the form does, which is compare two goods and rank them.",
          src: "Fox · Seow · von Rad",
        },
        misreading: {
          named:
            "The book is recommending gloom: mourning over feasting, sorrow over laughter, a funeral over a party.",
          why: "The form compares two goods rather than condemning one, and the text gives its reason: death is the end of every man and the living should take it to heart. The house of mourning is recommended as information, not as a mood. And this is the same writer who has already told you four times to eat your bread and enjoy your work. He is not against the party. He is saying the party will not tell you anything and the funeral will.",
        },
        meaning:
          "The cluster's argument is that the unwelcome thing is usually the more useful one. A rebuke over a song. The end over the beginning. Patience over pride. And then verse 14, which is as close as this book comes to stating its method outright: be glad on the good day, and on the bad one consider that God made the one alongside the other, so that nobody can work out what is coming. That is not consolation. It is an instruction about where to put your attention on each kind of day.",
      },
      {
        ref: "7:15–29",
        kind: "argument",
        form: "prose",
        title: "Nothing to be found",
        verses: [
          { n: 15, text: "In my futile life I have seen both of these: A righteous man perishing in his righteousness, and a wicked man living long in his wickedness." },
          { n: 16, text: "Do not be overly righteous, and do not make yourself too wise. Why should you destroy yourself?" },
          { n: 17, text: "Do not be excessively wicked, and do not be a fool. Why should you die before your time?" },
          { n: 18, text: "It is good to grasp the one and not let the other slip from your hand. For he who fears God will follow both warnings." },
          { n: 19, text: "Wisdom makes the wise man stronger than ten rulers in a city." },
          { n: 20, text: "Surely there is no righteous man on earth who does good and never sins." },
          { n: 21, text: "Do not pay attention to every word that is spoken, or you may hear your servant cursing you." },
          { n: 22, text: "For you know in your heart that many times you yourself have cursed others." },
          { n: 23, text: "All this I tested by wisdom, saying, “I resolve to be wise.” But it was beyond me." },
          { n: 24, text: "What exists is out of reach and very deep. Who can fathom it?" },
          { n: 25, text: "I directed my mind to understand, to explore, to search out wisdom and explanations, and to understand the stupidity of wickedness and the folly of madness." },
          { n: 26, text: "And I find more bitter than death the woman who is a snare, whose heart is a net, and whose hands are chains. The man who pleases God escapes her, but the sinner is ensnared." },
          { n: 27, text: "“Behold,” says the Teacher, “I have discovered this by adding one thing to another to find an explanation." },
          { n: 28, text: "While my soul was still searching but not finding, among a thousand I have found one upright man, but among all these I have not found one such woman." },
          { n: 29, text: "Only this have I found: I have discovered that God made mankind upright, but they have sought out many schemes.”" },
        ],
        ground: {
          kind: "historical",
          text: "Verse 15 is a report of something seen rather than a theory advanced. Verses 16 and 17, advising against being overly righteous or overly wicked, have troubled readers for a very long time and have been read as counsel of moderation, as irony, and as advice about staying alive under an unpredictable regime. And verse 28 is among the hardest sentences in the book, on which more below.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Two hard things here, and the second is harder. The first is verse 15, the flat contradiction of what Proverbs promises, reported as an observation rather than argued as a position. The second is verses 26 to 28, where he writes of a woman as a snare and then reports finding one man in a thousand and not one woman among them all. That is misogyny, it is in the text, and it is not improved by explanation. What can be said is narrow and worth saying anyway: he attributes the search to a method he has just called a failure, he appears to be handling a saying that already existed, and the very next verse takes the charge off any category of person and puts it on mankind in general. None of that makes the sentence acceptable. It does show that the book does not rest on it.",
        tensions: [
          {
            claim:
              "A righteous man perishes in his righteousness and a wicked man lives long in his wickedness. He says he has seen both.",
            counter:
              "Proverbs, kept in the same collection, promises the opposite: the LORD does not let the righteous go hungry, and the fear of the LORD prolongs life. Job is built on the same wound from the other direction, one man's case instead of a survey.",
            where:
              "Ecclesiastes 7:15 · Proverbs 10:3 · Proverbs 10:27 · Job 1–2",
          },
        ],
        addr: {
          mode: "claims",
          text: "You have probably kept a private ledger in which doing the right thing is supposed to produce a result, and noticed that it does not always, and not said so out loud. This book says it out loud, inside the collection, and nothing catches fire.",
        },
        ask: "Where has the arrangement not paid out, and who have you not said that to?",
      },
    ],
  },
  {
    id: "ecc-8",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 8",
    chapterIndex: 8,
    title: "Nobody can find it out",
    thread: "How to survive a king, why a delayed sentence makes people bolder, and three separate admissions that nobody can find out what is going on.",
    closeEnd: "The wise man who claims to know is named specifically and disbelieved. That is the last word of the movement.",
    passages: [
      {
        ref: "8:1–9",
        kind: "argument",
        form: "prose",
        title: "Keep the king's command",
        verses: [
          { n: 1, text: "Who is like the wise man? Who knows the interpretation of a matter? A man’s wisdom brightens his face, and the sternness of his face is changed." },
          { n: 2, text: "Keep the king’s command, I say, because of your oath before God." },
          { n: 3, text: "Do not hasten to leave his presence, and do not persist in a bad cause, for he will do whatever he pleases." },
          { n: 4, text: "For the king’s word is supreme, and who can say to him, “What are you doing?”" },
          { n: 5, text: "Whoever keeps his command will come to no harm, and a wise heart knows the right time and procedure." },
          { n: 6, text: "For there is a right time and procedure to every purpose, though a man’s misery weighs heavily upon him." },
          { n: 7, text: "Since no one knows what will happen, who can tell him what is to come?" },
          { n: 8, text: "As no man has power over the wind to contain it, so no one has authority over his day of death. As no one can be discharged in wartime, so wickedness will not release those who practice it." },
          { n: 9, text: "All this I have seen, applying my mind to every deed that is done under the sun; there is a time when one man lords it over another to his own detriment." },
        ],
        ground: {
          kind: "historical",
          text: "This is court advice, a recognised wisdom subject: how to behave in front of a ruler whose word is final and who does whatever he pleases. The counsel is practical and unheroic. Do not be in a hurry to leave his presence, do not join a bad cause, and remember that nobody has authority over the day of their death. Written in a province, about power that could not be appealed.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "There is no politics here in the sense of a programme, and it would be easy to read that as quietism. What the passage does is describe the position of somebody with no leverage and then tell them the truth about it. The king does as he likes. There is no discharge from that war. And then verse 9, which is the sentence underneath all of it: a man lords it over another man to his own harm. That is offered as an observation, with no expectation that stating it will change anything.",
        lenses: {
          arch: "Advice for the powerless that does not pretend they have power, and does not tell them their patience is a virtue. (How to stand in the room.)",
        },
      },
      {
        ref: "8:10–17",
        kind: "argument",
        form: "prose",
        title: "Nobody can find it out",
        verses: [
          { n: 10, text: "Then too, I saw the burial of the wicked who used to go in and out of the holy place, and they were praised in the city where they had done so. This too is futile." },
          { n: 11, text: "When the sentence for a crime is not speedily executed, the hearts of men become fully set on doing evil." },
          { n: 12, text: "Although a sinner does evil a hundred times and still lives long, yet I also know that it will go well with those who fear God, who are reverent in His presence." },
          { n: 13, text: "Yet because the wicked do not fear God, it will not go well with them, and their days will not lengthen like a shadow." },
          { n: 14, text: "There is a futility that is done on the earth: There are righteous men who get what the actions of the wicked deserve, and there are wicked men who get what the actions of the righteous deserve. I say that this too is futile." },
          { n: 15, text: "So I commended the enjoyment of life, because there is nothing better for a man under the sun than to eat and drink and be merry. For this joy will accompany him in his labor during the days of his life that God gives him under the sun." },
          { n: 16, text: "When I applied my mind to know wisdom and to observe the task that one performs on the earth—though his eyes do not see sleep in the day or even in the night—" },
          { n: 17, text: "I saw every work of God, and that a man is unable to comprehend the work that is done under the sun. Despite his efforts to search it out, he cannot find its meaning; even if the wise man claims to know, he is unable to comprehend." },
        ],
        ground: {
          kind: "historical",
          text: "Verse 11 is social observation: when sentence is not carried out quickly, people grow bolder about doing wrong. Then the book does something it rarely does. It states the conventional position, that it will go well with those who fear God, and immediately reports the contrary evidence, that there are righteous men who get what the wicked deserve and wicked men who get what the righteous deserve.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the movement's title arriving. Three times in a few verses he says nobody can find it out: however hard a man labours to seek it he will not find it, and even if a wise man claims to know, he cannot find it. That last clause is aimed squarely at his own profession. He is not saying there is nothing to find. He is saying the search does not terminate, that anyone telling you they have finished it is wrong, and that this holds for the wise as much as for anybody. And then, for the fifth time, the permission: eat, drink, and be glad.",
        addr: {
          mode: "claims",
          text: "Somebody has explained your situation to you with confidence, and it did not fit, and you assumed the failure was yours for not seeing it their way. This book puts the wise man who claims to have it worked out in the same sentence as everybody else who cannot.",
        },
        ask: "Whose confident account of your life have you been deferring to?",
      },
    ],
  },
];

// Movement 1. No doorway until movement 2 exists; no capstone until the movement completes.
export const UNDER_THE_SUN_MOVEMENT: Movement = {
  id: "under-the-sun",
  index: 1,
  title: "Under the sun",
  range: "Ecclesiastes 1–4",
  throughline:
    "A man with every resource available sets out to find what a life adds up to, and reports back honestly. The answer he keeps arriving at is vapour, and the first thing he does with it is tell you to eat your bread.",
  chapterStart: 1,
  chapterEnd: 4,
  situation: {
    kicker: "The ground beneath the sun",
    title: "The situation",
    paragraphs: [
      "Under the sun is the book's own phrase, used around thirty times, and it marks the boundary of the enquiry. It means the world as anyone can observe it, with no appeal to anything outside it. That is a deliberate limit rather than an oversight, and everything the book concludes is concluded inside it.",
      "Wisdom writing was an international trade. Egypt and Mesopotamia produced instruction texts and sceptical dialogues for centuries, and some of them sound startlingly like this one: a man arguing with his own soul about whether living is worth it, or a servant agreeing with every contradictory thing his master proposes. Israel's contribution sits inside that conversation rather than apart from it.",
      "And what Proverbs claims is the thing this book is testing. Proverbs offers a world that works: diligence produces plenty, righteousness produces long life, folly produces ruin. Ecclesiastes reports the exceptions and then refuses to treat them as exceptions. Job does the same from a different direction, with one man's case instead of a survey.",
      "The economic detail is real too. Chapter 5 describes officials watching officials, absentee owners, and wealth that cannot be slept on. That is the world of a small province inside a large empire, where the money and the decisions are made a long way off.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
  doorway: {
    kicker: "The second movement",
    title: "What cannot be found out",
    paragraphs: [
      "The first movement asked what a life adds up to and answered vapour, interrupting itself three times to say eat your bread anyway.",
      "What follows narrows. Money, worship, power, the man who has everything and cannot enjoy it, and then a long collection of sayings about what is better than what. It closes by admitting, three separate times, that nobody can find out what is actually being done under the sun, however confidently the wise claim to have looked.",
    ],
    nextMovementId: "not-found-out",
  },
  capstone: {
    kicker: "The first movement · Ecclesiastes 1–4",
    title: "Vapour, and a handful with quiet",
    paragraphs: [
      "Four chapters, and the case is made. A closed system that goes nowhere. An experiment run with every resource available and reported honestly. A catalogue of times nobody controls. And the tears of people who had no comforter. The word that keeps landing is the one for vapour, and the honest way to hear it is not meaningless, which is a translator's word, but unholdable. Everything in these chapters is real, and none of it stays.",
      "What is easy to miss is that the answer is already here. Three times in four chapters he stops and says the same thing: eat, drink, find something in the work. It arrives in chapter two immediately after he says he hated life, and in chapter three immediately after he says nobody can see the whole. Each time it is attached to the bleakness rather than offered against it. This book does not cheer up. It hands you something to do.",
      "And the last thing the movement does is turn outward. Chapters one to three ask what a life adds up to. Chapter four asks what people do to each other, and answers with a man alone and a cord of three strands. That is not an argument that company is fulfilling. It is an argument that you will fall over.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
};

export const NOT_FOUND_OUT_MOVEMENT: Movement = {
  id: "not-found-out",
  index: 2,
  title: "What cannot be found out",
  range: "Ecclesiastes 5–8",
  throughline:
    "Money that will not fill anyone, a man denied the ability to enjoy what he has, a collection of sayings about what is better than what, and the repeated admission that nobody can find out what is done under the sun.",
  chapterStart: 5,
  chapterEnd: 8,
  situation: {
    kicker: "The ground beneath the search",
    title: "The situation",
    paragraphs: [
      "The world of chapter five is a province inside an empire. One official watched by a higher one, and higher ones over them, is the administrative reality of Persian-period Judah: a small territory whose taxes and decisions travelled a long way off. The book offers that chain as a reason not to be astonished by injustice, which is a bleak sort of realism rather than an endorsement of it.",
      "Money in that economy was silver by weight and land, not a number held somewhere safe. It was physical, on the premises and vulnerable, which is why the observation that a rich man cannot sleep is literal rather than figurative.",
      "Vows were binding transactions with a real institution. A person promised something to God in exchange for something wanted, and the law took a broken vow seriously. When the book says do not tell the messenger it was a mistake, the messenger is somebody who has come to collect.",
      "And the movement's title is the book's own claim, made three separate times in chapter eight. However hard a person works at it, and however confidently the wise say they have it, nobody can find out the work that is done under the sun. That is a limit on knowledge, stated by somebody who went and tried.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
};

// The book-level composition overlay.
export const ECCLESIASTES_INTRO: Panel = {
  kicker: "An introduction · Ecclesiastes 1–12",
  title: "The book that argues with the rest",
  paragraphs: [
    "Ecclesiastes is twelve chapters and 222 verses, and it is the strangest thing in the Hebrew Bible. It speaks in the first person, calls itself Qoheleth, which is a role rather than a name, and presents itself as a king in Jerusalem, which points at Solomon without ever saying the word. It abandons that pose after chapter two. Its Hebrew is late and carries Persian loanwords, which places the writing several centuries after any Solomon, most likely in the Persian period.",
    "What it says is why it is remarkable. That the dead know nothing and have no further reward. That a man has no advantage over a beast, since both go to the same place. That he has seen a righteous man perish in his righteousness and a wicked man live long in his wickedness. These are not marginal remarks made in passing. They are the argument, and they contradict things said elsewhere in the same collection.",
    "It nearly did not survive the cut. Ancient discussion records real dispute about whether it belonged, and the objection was exactly the one a modern reader raises: that it contradicts itself, and that it could be read as heresy. The six verses at the end, in a different voice, praising the Teacher from outside his own book and closing on fear God and keep his commandments, are widely read as the frame that made it keepable. Whether that is a later hand or the author signing his own work is genuinely argued.",
    "And it is not, in the end, a book about despair, however often it is quoted that way. Six times it stops to say the same thing. Eat your bread. Drink your wine. Enjoy your work. Be with the person you love. It grants that permission on the basis of the bleakness rather than in spite of it, which is a harder thing than optimism and a good deal more use.",
  ],
  timeline: [
    {
      tag: "c. 950 BCE",
      text: "Solomon, whom the opening verses point at without naming him.",
    },
    {
      tag: "c. 450–200 BCE",
      text: "The window most place the writing in, on the evidence of the language.",
    },
    {
      tag: "c. 200 BCE",
      text: "Ben Sira writes, and the wisdom tradition this book argues inside is well established.",
    },
    {
      tag: "100s CE",
      text: "Rabbinic discussion records real dispute over whether the book belonged in the collection at all.",
    },
  ],
  sources: "Fox · Seow · Longman · Krüger · Barton",
};
