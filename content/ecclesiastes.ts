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
    thread: "The writer of Ecclesiastes begins by announcing the conclusion he will spend the whole book testing. In a short poem he sets a human life beside the sun, the wind and the sea, which go on long after we are gone, and then he reminds the reader that no one will remember us either.",
    closeEnd: "The Teacher is the wisest man in the story, and he ends the chapter by saying that his wisdom is what hurts. He means this as an honest report, not as a complaint.",
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
          text: "The speaker calls himself Qoheleth, a Hebrew title that the BSB translates “the Teacher.” It names a role rather than a person, and it means something like one who gathers an assembly and speaks to it. The Hebrew of the book is late and includes words borrowed from Persian, so scholars date the writing centuries after the time of Solomon, even though the opening lines point toward him. The key word, which the BSB translates “futility,” is <b>hevel</b>. It literally means vapor or breath, something you can see but cannot hold on to.",
          src: "Fox · Seow · Longman · Alter",
        },
        misreading: {
          named:
            "Readers often take “nothing new under the sun” as world-weary cynicism, the shrug of a man who has seen it all.",
          why: "The Teacher is not shrugging. He is describing a closed system, and every image he uses is of something that moves hard and arrives nowhere: generations come and go, the sun hurries back to where it rose, the wind circles, and the rivers pour into a sea that never fills. He is not complaining of boredom. He is pointing out that all this motion adds up to nothing, which is a far more unsettling claim. And he ends the poem not on novelty at all but on being forgotten.",
        },
        meaning:
          "The Teacher opens with a question about what a person gains, and he uses a word from commerce: what profit is left once the costs are paid? He answers by setting a human life beside the earth, the sun, the wind and the sea, all of which outlast us and none of which ever arrive anywhere. In the last verse he turns from the world to the reader. No one remembers the people who came before, he says, and no one will remember us. In about ten lines he has moved from the order of the universe to the thing that actually frightens people, which is being <b>forgotten</b>.",
        lenses: {
          theo: "The Teacher says nothing against God here, and he does not even mention God. That is his method throughout the book. He starts from what anyone can observe, and he refuses to offer a comfort until he has earned it.",
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
          text: "In this passage the Teacher speaks as a king, but after chapter two he never speaks as a king again, so most readers take the royal voice as a literary device rather than a claim to be Solomon. He describes his method as a deliberate investigation. His phrase for what he finds, “a pursuit of the wind,” pictures someone trying to chase or herd something that cannot be herded.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The Teacher conducts his investigation honestly, and that is why his findings are hard to accept. He does not conclude that wisdom is worthless; later in the book he says plainly that wisdom is better than folly, as light is better than darkness. His claim here is narrower and harder. Understanding a problem does not fix it, and understanding comes at a cost: what is crooked cannot be made straight, and the more wisdom a person has, the more sorrow he has. The Teacher is not arguing against learning. He is warning us about what learning cannot do.",
        addr: {
          mode: "claims",
          text: "Most of us have wanted to understand a hard situation, assuming that if we understood it we could do something about it. The Teacher agrees that we can understand it, but he tells us plainly that understanding will not give us control over it.",
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
    thread: "The Teacher sets out to test what makes a life worthwhile. He tries pleasure, then great building projects, then wealth, and finally wisdom itself, and he records a verdict after each one. Then he asks what will happen to all of it after he dies.",
    closeEnd: "Then, without any transition, the Teacher says for the first time the sentence he will return to again and again: eat, drink, and find enjoyment in your work.",
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
          text: "The Teacher lists his achievements the way an ancient king would: houses, vineyards, gardens and parks, pools to water them, slaves born in his household, larger herds than anyone before him, silver and gold, and singers. Kings in the ancient Near East recorded their achievements in royal inscriptions, and the Teacher deliberately imitates that form. The difference comes in his last line, where he admits that none of it gained him anything, which no king would ever have carved in stone.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The Teacher is reporting an experiment, not confessing a sin. He says twice that his wisdom stayed with him the whole time, so he is not describing a man who lost himself in pleasure. He is describing a man who tested pleasure while taking notes. Nor does he say that pleasure failed to please him: his heart delighted in all his work, and that delight was his reward. His verdict is not that he did not enjoy it. His verdict is that he gained nothing from it, since nothing was left over and nothing built up.",
        lenses: {
          arch: "Kings have always recorded their achievements in their own voice, listing what they built so that later generations would remember them. The Teacher writes such a record in full and then ends it with a sentence no king expected to write, that all of it was hevel, mere vapor. Many people who reach the top of something have found the same thing, that the achievement they worked for did not give them what they hoped.",
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
          text: "The Teacher is not weighing wisdom against folly on their merits. He grants at once that wisdom is better, as light is better than darkness, and that the wise man can see where he is going. His argument is about what lasts after death, and he reaches the same conclusion he reached about the generations in chapter one: both the wise man and the fool are forgotten.",
          src: "Fox · Seow",
        },
        meaning:
          "Here, for the first time, the Teacher makes the argument on which the whole book turns. He does not deny that wisdom is better than folly. He denies that being better changes how life ends. The wise man and the fool both die, no one remembers either of them, and so the Teacher reaches the bleakest sentence in the chapter: “So I hated life.” Yet having said it, he keeps writing. He records his lowest point and then goes on to the next paragraph, which is a kind of honesty that most people who offer comfort cannot manage.",
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
          text: "The problem in this passage is inheritance. Everything the Teacher has built will go to someone who did not build it, and he has no way of knowing whether that person will be wise or a fool. In his world a family’s land and goods were its whole security, so this was a practical worry, not an abstract one.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The Teacher is not complaining that he has to die. He is complaining that his work will belong to someone who did not do it and may not deserve it, which is a much more specific grievance and a far more familiar one. Then, with no transition, he gives the first of the permissions that run through the book, seven of them as many scholars count: there is nothing better for a person than to eat and drink and find <b>enjoyment</b> in his work. He says this in chapter two, right after a paragraph about hating everything, and he says that the enjoyment comes from the hand of God. He means both the despair and the permission.",
        addr: {
          mode: "claims",
          text: "You may be working on something that will outlast your control of it, and that you will one day hand to someone who did not build it and may not take care of it. The Teacher does not tell you to care less about that. He tells you to enjoy your food and your work while you are still the one doing it.",
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
    thread: "This chapter opens with the most quoted passage in the book, a poem about “a time for everything,” although half of the times it lists are things no one wants. Then the Teacher says that God has set eternity in the human heart, and he writes a sentence comparing people to animals that readers have argued about for two thousand years.",
    closeEnd: "The Teacher asks who can show a person what will happen after him. He means it as a real question, and he does not answer it.",
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
          text: "The poem lists fourteen pairs of opposites, twenty-eight items in all. Wisdom teachers in the ancient world often used catalogues like this, and the Teacher arranges his on purpose. He begins with birth and death and ends with war and peace, so the list opens and closes with the things a person has least control over.",
          src: "Fox · Seow · Alter",
        },
        misreading: {
          named:
            "Many readers take the poem as a comfort: everything has its proper season, so whatever season you are in will pass.",
          why: "Read the list closely. It includes a time to kill, a time to tear down, a time to hate and a time for war. Half of these are things no one would choose, and the Teacher gives them exactly the same place as being born, dancing and embracing. He is not promising that your bad season will pass. He is saying that bad seasons are part of how the world is arranged, on the same footing as good ones. In the very next verse he asks what the worker gains from any of it. People do find real comfort in this poem, but comfort is not what the Teacher is offering.",
        },
        meaning:
          "The poem gets its force from what the Teacher leaves out. He gives no advice anywhere in it. He never says which time it is now, or how you could tell, and that is the one thing a person in the middle of a season most wants to know. What he establishes is that the times do not belong to us, and he builds the rest of the chapter on that claim.",
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
          text: "Verse 11 is among the hardest sentences in the book to translate. Translators have rendered the word given here as “eternity” in several other ways, including “the world,” “ignorance,” and “a sense of past and future.” Whatever the exact word, scholars agree on the shape of the sentence: God has put something into people that they cannot use to see the whole of what he is doing.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Here the Teacher comes closest to explaining his own predicament. Something in us reaches for the whole shape of things, and yet we cannot grasp what God has done from beginning to end. That is not simple ignorance, which we could fix by finding out more. It is a mismatch that God built into us. And the Teacher does not draw despair from it. He gives the second of his permissions, just as he did in chapter two, right after the hardest sentence in the passage.",
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
          text: "The Hebrew word for “breath” here, ruach, is the word Genesis uses in the flood story for “the breath of life” that fills every living creature, people and animals alike, and the Teacher builds his sentence so that both share it equally. In verse 21 he asks who knows whether the human spirit rises and the animal’s spirit goes down. He is asking a question, not denying the possibility, and the earliest Jewish readers argued over the verse in exactly those terms.",
          src: "Genesis 2:7 · Fox · Seow",
        },
        meaning:
          "The Teacher is not saying that a human being is worth nothing. He is saying that, as far as anyone can see under the sun, people and animals leave the world the same way, and that anyone who claims otherwise is claiming to know something no one can see. He is describing the limits of what his investigation can find, not giving a final verdict about the world, and he is careful about it: verse 21 is a question, not an answer. Then, for the third time in three chapters, he gives his permission to enjoy one’s work.",
        tensions: [
          {
            claim:
              "People have no advantage over the animals. Both come from the dust and both return to it, and no one knows whether the human spirit rises while the animal’s goes down.",
            counter:
              "In the opening chapter of Genesis, which belongs to the same collection of Scripture, God makes human beings in his own image and gives them charge over the animals. Later biblical writers also came to hope for life after death, a hope the Teacher will not assert.",
            where: "Ecclesiastes 3:19–21 · Genesis 1:26–28 · Daniel 12:2",
          },
        ],
        addr: {
          mode: "claims",
          text: "You have probably been told, and may have told others, that a hard stretch is only a season and will pass. The Teacher will not promise that. Instead he points you to the day in front of you, and invites you to take it seriously while you have it.",
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
    thread: "For the first time the Teacher turns his attention outward. Instead of asking what a single life adds up to, he looks at what people do to one another, and at what it costs to face the world alone.",
    closeEnd: "“A cord of three strands is not quickly broken” is the warmest sentence in the book, but the Teacher bases it on human weakness rather than on hope.",
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
          text: "The phrase “they had no comforter” appears twice in the same verse, which is unusual, and the writer repeats it for emphasis. The Teacher then draws the most extreme conclusion in the book: the dead are better off than the living, and better off still are those who have never been born, because they have not seen the evil done under the sun.",
          src: "Fox · Seow",
        },
        meaning:
          "This is the Teacher at his coldest, and what drives him to it is not a general despair about existence. It is oppression, and the detail he cannot get past is that the oppressed had no one to comfort them. He grieves not only that there was no justice but that no one was there for them at all. He then turns suddenly to a person who has a handful with quietness, which seems out of place until we notice that both passages are about the same thing: what people will do to one another to get more.",
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
          text: "The man with no son and no brother is a specific kind of person in the Teacher’s world, not just a picture of loneliness. In that society the household kept people safe, and a man alone had no one he could call on. The Teacher’s examples are practical rather than sentimental. If one person falls, the other can lift him up. Two people lying down together keep warm. Two can stand against an attacker.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the warmest passage in the book, and the Teacher builds it entirely on weakness. He never says that companionship is fulfilling. He says that you will fall, you will be cold, and someone will attack you, and that one person cannot handle any of these alone. Because he argues from vulnerability, his point about the cord of three strands is much harder to dismiss than a sentiment would be. He then ends the chapter with a crowd that turns from an old king to a young one and will turn again, making the same point about people from the other side.",
        addr: {
          mode: "claims",
          text: "You may be managing something alone that no one is meant to manage alone, and you have probably counted that as strength. The Teacher counts it as exposure. He does not argue that company is pleasant. He argues that on your own, sooner or later, you will fall.",
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
    thread: "The Teacher begins with advice on how to behave in a place of worship, and most of it amounts to saying less. Then he describes officials watching over other officials, money that never satisfies the people who chase it, and a man who leaves the world exactly as he came into it.",
    closeEnd: "At the end of the chapter, for the fourth time, the Teacher repeats his permission to eat, drink and find enjoyment in one’s work, and here he calls that enjoyment a gift from God.",
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
          text: "“The house of God” is the temple, and the Teacher is giving advice about how to behave there. A vow was a binding agreement: a person promised to give God something in return for something they wanted, and Israel’s law treated a broken vow seriously. The messenger in verse 6 was most likely a temple official who came to collect what had been promised. So the Teacher is giving practical guidance about a real institution and a real debt.",
          src: "Deuteronomy 23:21–23 · Fox · Seow",
        },
        meaning:
          "The whole passage is about talking too much, and it holds the only religious instruction in the book. The Teacher tells his readers to go to the temple to listen rather than to perform, not to make promises they will regret, and, once they have made one, not to tell the temple official it was a mistake. God is in heaven and you are on earth, he says, so let your words be few. He is not encouraging piety for its own sake. He is warning about the distance between what people say in a moment of religious feeling and what they are willing to do on an ordinary day afterward.",
        lenses: {
          theo: "Saying less is the only advice about worship the Teacher gives in the whole book. Everywhere else he doubts how much people can know. Here he doubts how much they should promise.",
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
          text: "Verse 8 describes a chain of officials, each watched by another above him, which is how an empire governed one of its provinces. The Teacher mentions it to explain why his readers should not be surprised by injustice, not to defend it. Then he turns to money: income that never satisfies, possessions that draw others in to consume them, wealth that keeps its owner awake at night, and a fortune lost in a bad venture that leaves a son with nothing.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "This is the most practical stretch in the book, and none of it has gone out of date. A person who loves money is never satisfied with money. The more someone gathers, the more people come to consume it. The worker sleeps well, while the rich man lies awake. At the center of the passage the Teacher states the plain fact: a man comes into the world naked and leaves it naked, carrying nothing in his hands. The Teacher is not preaching against greed. He states this flatly, and around it he describes what people do with whole lives while knowing it perfectly well.",
        lenses: {
          arch: "People in every age have bought things to make themselves secure and then found that they had to guard what they bought. The rich man in this passage loses the very sleep his wealth was meant to give him. Many people today know the same pattern, when a possession that was meant to bring peace becomes one more thing to worry about.",
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
          text: "The word translated “lot” means a portion, the share assigned to a person, as land or food was divided among a family. It names what someone receives rather than what they earn, and the Teacher reaches for it whenever he stops arguing and tells his readers how to live.",
          src: "Fox · Seow",
        },
        meaning:
          "This is the fourth permission, and the Teacher words it more strongly than before. He says not only that there is nothing better, but that enjoying one’s food and work is good and fitting, that the ability to enjoy what one has is itself a gift from God, and that a person absorbed in the joy of his heart does not spend his days counting them. That last line comes close to defining <b>contentment</b>, and the Teacher has reached it from the bleakest possible starting point.",
        addr: {
          mode: "claims",
          text: "Many of us treat enjoyment as something we must earn first and may allow ourselves afterward. The Teacher puts it the other way around. Our days are few, enjoyment is the portion God gives, and no one gets to finish the work first and only then begin to enjoy life.",
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
    thread: "This is the shortest chapter in the book and the bleakest. The Teacher describes a man who is given everything and yet cannot enjoy any of it, and he compares him to a stillborn child without softening the comparison.",
    closeEnd: "The Teacher ends the chapter with two questions no one can answer, and with them he ends the first half of the book.",
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
          text: "The Teacher describes this man’s trouble precisely, and it is the reverse of the problem in chapter five. This man does not lack anything. He has everything, but God does not give him the ability to enjoy it. The comparison with a stillborn child follows a pattern of argument that ancient writers knew well. The detail that the man receives no proper burial also matters, because in the Teacher’s world a proper burial was the last thing that could still go right in a person’s life.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "For five chapters the Teacher has said that enjoyment is a person’s portion. Here he says that the portion can be withheld, and he names God as the one who withholds it, which is the most uncomfortable sentence in the chapter, and he does not soften it. Then he makes a comparison meant to shock: a stillborn child, who never saw the sun and knew nothing, is better off than a man with a hundred children and a long life who could not enjoy any of it. The Teacher is not trying to provoke. He is applying his own standard consistently, and that is where it leads him.",
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
          text: "Verse 9 is a proverb, and it is the Teacher’s one piece of plain advice about desire: what you can see in front of you is better than an appetite that wanders. He then ends the chapter with two questions, and with them he ends the first half of the book. Who knows what is good for a person, and who can tell anyone what will come after him?",
          src: "Fox · Seow",
        },
        meaning:
          "The proverb about appetite is the practical form of everything the Teacher has said so far about gathering more. All of a person’s work is for his mouth, and yet his appetite is never satisfied. The two questions at the end are not decoration. They state the position the Teacher has been arguing toward since chapter one: no one can tell you what is good, and no one can tell you what comes after. He writes the second half of the book from inside that position rather than trying to escape it.",
        addr: {
          mode: "claims",
          text: "You may be carrying a picture of the life you think you would enjoy, one that is not the life in front of you, and comparing the two may be quietly damaging the life you actually have. Better what the eye can see, the Teacher says. He is not urging you to lower your hopes. He is giving practical advice.",
        },
        ask: "What is actually in front of you that you have been treating as the wrong version of your life?",
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
    thread: "In chapter 7 the Teacher gathers a run of sayings in the form “this is better than that,” and in them he recommends funerals over parties. Then he writes a sentence that contradicts a promise the book of Proverbs makes.",
    closeEnd: "The Teacher set out to become wise and admits that wisdom was beyond him. Then he reports one thing he says he did find, and it concerns people rather than the world.",
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
            note: "The second half of the verse is the surprise. People commonly said that a good name outlasts you, but nobody said that the day you die is better than the day you were born.",
          },
          2: {
            note: "The Teacher does not claim that grief makes you a better person. He claims that at a funeral people face the truth about where every life ends, and at a party they do not.",
          },
          10: {
            addr: {
              mode: "claims",
              text: "The Teacher calls nostalgia a failure of wisdom rather than a harmless habit. He does not say the past was bad. He says you cannot really compare the old days with these, and you are comparing them anyway.",
            },
          },
          13: {
            note: "The Teacher uses the same image he used in chapter one, of something crooked that no one can straighten, and here he says plainly that God is the one who bent it.",
          },
          14: {
            note: "Here the Teacher comes closest to naming his own method. He tells us to take a good day as good, and on a bad day to remember that God never showed us the pattern.",
          },
        },
        ground: {
          kind: "genre",
          text: "Wisdom teachers often used the “better than” saying, and the writers of Proverbs use it too, but the Teacher uses it more densely here than anywhere else in his book. What sets him apart is what he recommends: a house of mourning over a house of feasting, sorrow over laughter, and the end of a thing over its beginning. If we read these as advice, they sound morbid. If we read them as the teachers meant them, we see that each saying compares two good things and ranks them.",
          src: "Fox · Seow · von Rad",
        },
        misreading: {
          named:
            "Many readers assume the Teacher is recommending gloom, telling us to prefer mourning to feasting, sorrow to laughter, and a funeral to a party.",
          why: "Each saying compares two good things rather than condemning one of them, and the Teacher gives his reason: death comes to everyone, and the living should take that to heart. He recommends the house of mourning because people learn something there, not because he wants them sad. He has also told us, four times already, to eat our bread and enjoy our work. He is not against the party. He is saying that we will learn nothing at the party and something at the funeral.",
        },
        meaning:
          "In these sayings the Teacher argues that the unwelcome thing is usually the more useful one. He prefers a rebuke to a song, the end of a matter to its beginning, and patience to pride. Then in verse 14 he comes as close as he ever does to stating his method outright. On a good day, he says, be glad, and on a bad day remember that God made the one alongside the other, so that no one can work out what is coming. He is not offering comfort. He is telling us where to put our attention on each kind of day.",
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
          text: "In verse 15 the Teacher reports something he has seen rather than proposing a theory. In verses 16 and 17 he advises against being overly righteous or overly wicked, and readers have puzzled over that advice for a very long time; they have taken it as a call to moderation, as irony, and as counsel for staying alive under an unpredictable ruler. Verse 28 is among the hardest sentences in the book, and the note below takes it up.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The Teacher says two hard things in this passage, and the second is harder. In verse 15 he flatly contradicts what Proverbs promises, and he reports it as something he observed rather than arguing it as a position. In verses 26 to 28 he calls a woman a snare and says he found one upright man in a thousand but not one woman among them all. That is misogyny, the Teacher wrote it, and no explanation makes it better. We can say only a few narrow things. He says he found this by a method he has just called a failure, he seems to be quoting a saying that already existed, and in the very next verse he lays the blame on all humankind rather than on any one group. None of that makes the sentence acceptable, but it does show that his argument does not depend on it.",
        tensions: [
          {
            claim:
              "The Teacher says he has seen both things: a righteous man who perishes in his righteousness, and a wicked man who lives long in his wickedness.",
            counter:
              "The writers of Proverbs, whose book sits in the same Bible, promise the opposite: they say the LORD does not let the righteous go hungry, and that the fear of the LORD lengthens life. The writer of Job wrestles with the same problem from the other direction, through one man’s story instead of a survey.",
            where:
              "Ecclesiastes 7:15 · Proverbs 10:3 · Proverbs 10:27 · Job 1–2",
          },
        ],
        addr: {
          mode: "claims",
          text: "Many of us keep a private ledger in which doing the right thing should bring a good result. We notice that it does not always do so, and we do not say so out loud. The Teacher says it out loud, inside the Bible itself, and the heavens do not fall.",
        },
        ask: "Where in your life has doing right not paid off, and whom have you not told?",
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
    thread: "In chapter 8 the Teacher advises his readers on how to survive a king, observes that people grow bolder when punishment is slow in coming, and admits three times that no one can find out what God is doing.",
    closeEnd: "The Teacher singles out the wise man who claims to know what God is doing, and he says plainly that he does not believe him. With that, the Teacher ends this section of his book.",
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
          text: "Wisdom teachers often advised their students on how to behave before a ruler, and here the Teacher does the same. He has in mind a king whose word is final and who does whatever he pleases. His counsel is practical rather than heroic: do not hurry to leave the king’s presence, do not join a bad cause, and remember that no one has power over the day of his own death. The Teacher wrote in a small province, about rulers no one could appeal to.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The Teacher offers no political program here, and some readers take his advice as mere resignation. What he actually does is describe the position of someone with no power and then tell that person the truth about it. The king does as he likes, and no one is released from serving him. Then in verse 9 the Teacher writes the sentence that underlies the whole passage: one man rules over another to his own harm. He offers it as an observation, and he does not expect that saying it will change anything.",
        lenses: {
          arch: "People without power have always needed advice that does not pretend they have power and does not tell them that their patience is a virtue. Slaves, servants and subjects in many ages have passed down sayings of this kind, about how to stay alive in a room where someone else makes every decision. The Teacher writes in that tradition.",
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
          text: "In verse 11 the Teacher observes that when a sentence is not carried out quickly, people grow bolder about doing wrong. Then he does something he rarely does. He states the conventional belief, that things will go well for those who fear God, and at once he reports the evidence against it: he has seen righteous people receive what the wicked deserve, and wicked people receive what the righteous deserve.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Here the Teacher states the idea that gives this section of the book its title. Three times in a few verses he says that no one can find out what God is doing: however hard a person works to seek it, he will not find it, and even if a wise man claims to know, he cannot find it. With that last clause the Teacher takes aim at his own profession. He is not saying there is nothing to find. He is saying that the search never ends, that anyone who tells you they have finished it is wrong, and that this is as true for the wise as for anyone else. Then, for the fifth time in the book, he gives his permission: eat, drink, and be <b>glad</b>.",
        addr: {
          mode: "claims",
          text: "Most of us have had someone explain our situation to us with great confidence, and found that the explanation did not fit. We assumed the fault was ours for not seeing it their way. The Teacher puts the wise man who claims to have everything worked out in the same sentence as everyone else who cannot.",
        },
        ask: "Whose confident account of your life have you been deferring to?",
      },
    ],
  },
  {
    id: "ecc-9",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 9",
    chapterIndex: 9,
    title: "Go, eat your bread",
    thread: "In chapter 9 the Teacher says that the same fate comes to everyone and that the dead know nothing. Four verses later he gives the most direct instructions in the book: go, eat, drink, wear white, love someone, and work hard.",
    closeEnd: "A poor wise man saves a city, and afterward no one remembers him. With that story the Teacher has his last word on wisdom in this section of the book, and he does not tell it as a triumph.",
    passages: [
      {
        ref: "9:1–6",
        kind: "argument",
        form: "prose",
        title: "One fate",
        verses: [
          { n: 1, text: "So I took all this to heart and concluded that the righteous and the wise, as well as their deeds, are in God’s hands. Man does not know what lies ahead, whether love or hate." },
          { n: 2, text: "It is the same for all: There is a common fate for the righteous and the wicked, for the good and the bad, for the clean and the unclean, for the one who sacrifices and the one who does not. As it is for the good, so it is for the sinner; as it is for the one who makes a vow, so it is for the one who refuses to take a vow." },
          { n: 3, text: "This is an evil in everything that is done under the sun: There is one fate for everyone. Furthermore, the hearts of men are full of evil and madness while they are alive, and afterward they join the dead." },
          { n: 4, text: "There is hope, however, for anyone who is among the living; for even a live dog is better than a dead lion." },
          { n: 5, text: "For the living know that they will die, but the dead know nothing. They have no further reward, because the memory of them is forgotten." },
          { n: 6, text: "Their love, their hate, and their envy have already vanished, and they will never again have a share in all that is done under the sun." },
        ],
        ground: {
          kind: "historical",
          text: "The common fate the Teacher means is death, and he lists the pairs of people it comes to in a deliberately provocative way: the righteous and the wicked, the clean and the unclean, the one who offers sacrifice and the one who does not, the one who makes vows and the one who refuses. Israel’s priests used these categories to order religious life, and the Teacher says that death pays attention to none of them.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Verse 5 is one of the sentences that made some ancient readers doubt this book belonged in Scripture. The Teacher says without any hedging that the dead know nothing, receive no further reward, and are forgotten. In verse 4 he offers the strangest consolation in the Bible: anyone among the living still has hope, because a live dog is better than a dead lion. People in that world did not use the word dog with affection. The Teacher is saying that being alive and lowly is better than being dead and magnificent, and he means it as encouragement.",
        tensions: [
          {
            claim:
              "The Teacher says the dead know nothing and have no further reward, and that their love, their hate, and their envy have already vanished.",
            counter:
              "Later writers in the same Bible refuse to leave it there. They hope for life beyond death, and they declare that hope rather than argue for it. The Teacher neither denies that hope nor makes room for it. He reports what anyone can see under the sun, and he stops.",
            where: "Ecclesiastes 9:5–6 · Daniel 12:2 · Isaiah 26:19",
          },
        ],
      },
      {
        ref: "9:7–12",
        kind: "argument",
        form: "prose",
        title: "Go, eat your bread",
        verses: [
          { n: 7, text: "Go, eat your bread with joy, and drink your wine with a cheerful heart, for God has already approved your works:" },
          { n: 8, text: "Let your garments always be white, and never spare the oil for your head." },
          { n: 9, text: "Enjoy life with your beloved wife all the days of the fleeting life that God has given you under the sun—all your fleeting days. For this is your portion in life and in your labor under the sun." },
          { n: 10, text: "Whatever you find to do with your hands, do it with all your might, for in Sheol, where you are going, there is no work or planning or knowledge or wisdom." },
          { n: 11, text: "I saw something else under the sun: The race is not to the swift, nor the battle to the strong; neither is the bread to the wise, nor the wealth to the intelligent, nor the favor to the skillful. For time and chance happen to all." },
          { n: 12, text: "For surely no man knows his time: Like fish caught in a cruel net or birds trapped in a snare, so men are ensnared in an evil time that suddenly falls upon them." },
        ],
        ground: {
          kind: "historical",
          text: "The Teacher gives specific, physical instructions: eat bread, drink wine, wear white clothes, put oil on your head, enjoy life with your wife, and work with all your strength. People wore white clothes and put oil on their heads for a feast, not for an ordinary day, so the Teacher is telling his readers to dress for a celebration on an ordinary Tuesday. He does not give life’s goodness as his reason. He gives death as his reason: in Sheol, the place of the dead, there is no work, no planning, no knowledge, and no wisdom.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "The Teacher wrote his whole book toward this passage, and the order in which he places it is part of his argument. He sets it immediately after the bleakest paragraph in the book, and he builds it on that paragraph. He does not tell us to enjoy life in spite of death; he tells us to enjoy it because of death. Readers often miss the clause in the middle, where he says that God has already approved what you do. With that clause the Teacher removes every condition, so that no one has to earn the right to enjoy their bread. In verse 11 he makes the same point from the other side: the race does not go to the swift, and time and chance come to everyone. No one deserves anything here, including the good things.",
        lenses: {
          theo: "The Teacher does not merely say that we may enjoy our lives. He tells us to go and do it. This is the longest run of direct commands anywhere in his book, and that is worth noticing in twelve chapters where he mostly observes and seldom advises.",
        },
        addr: {
          mode: "claims",
          text: "Many of us put off ordinary pleasures until our situation is settled, and our situation does not settle on the schedule we had in mind. The Teacher does not tell us we may enjoy ourselves once things improve. He tells us to eat today, because our days are few.",
        },
        ask: "What have you been holding off on until things settle?",
      },
      {
        ref: "9:13–18",
        kind: "argument",
        form: "prose",
        title: "Nobody remembered that poor man",
        verses: [
          { n: 13, text: "I have also seen this wisdom under the sun, and it was great to me:" },
          { n: 14, text: "There was a small city with few men. A mighty king came against it, surrounded it, and built large siege ramps against it." },
          { n: 15, text: "Now a poor wise man was found in the city, and he saved the city by his wisdom. Yet no one remembered that poor man." },
          { n: 16, text: "And I said, “Wisdom is better than strength, but the wisdom of the poor man is despised, and his words are not heeded.”" },
          { n: 17, text: "The calm words of the wise are heeded over the shouts of a ruler among fools." },
          { n: 18, text: "Wisdom is better than weapons of war, but one sinner destroys much good." },
        ],
        ground: {
          kind: "historical",
          text: "The Teacher tells a short parable with no names and no date. A great king besieges a small city and builds siege works against it, and a poor wise man saves it. The Teacher does not say whether this really happened or whether he is giving an example, and for his purpose it probably does not matter.",
          src: "Fox · Seow",
        },
        meaning:
          "The Teacher tells the story to praise wisdom, and he ends it by admitting that no one rewarded the wise man. The poor man saved the city and no one remembered him, because people despise a poor man’s wisdom and ignore his words. Immediately afterward the Teacher says that wisdom is better than weapons of war, and that one sinner can destroy much good. He holds both truths at once: wisdom works, and people do not reward it, and he will not let the second truth cancel the first.",
      },
    ],
  },
  {
    id: "ecc-10",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 10",
    chapterIndex: 10,
    title: "A little folly",
    thread: "Chapter 10 holds the lighter of the Teacher’s two collections of sayings. He writes of dead flies in the perfume, a snake that bites before anyone has charmed it, and a bird that carries what you said in your own bedroom.",
    closeEnd: "The Teacher ends the chapter with advice from someone who has watched what happens to people who talk too much.",
    passages: [
      {
        ref: "10:1–20 (selected)",
        kind: "saying-cluster",
        form: "list",
        title: "A little folly",
        sayings: [
          { n: 1, text: "As dead flies bring a stench to the perfumer’s oil, so a little folly outweighs wisdom and honor." },
          { n: 2, text: "A wise man’s heart inclines to the right, but the heart of a fool to the left." },
          { n: 4, text: "If the ruler’s temper flares against you, do not abandon your post, for calmness lays great offenses to rest." },
          { n: 8, text: "He who digs a pit may fall into it, and he who breaches a wall may be bitten by a snake." },
          { n: 9, text: "The one who quarries stones may be injured by them, and he who splits logs endangers himself." },
          { n: 10, text: "If the axe is dull and the blade unsharpened, more strength must be exerted, but skill produces success." },
          { n: 12, text: "The words of a wise man’s mouth are gracious, but the lips of a fool consume him." },
          { n: 14, text: "Yet the fool multiplies words. No one knows what is coming, and who can tell him what will come after him?" },
          { n: 18, text: "Through laziness the roof caves in, and in the hands of the idle, the house leaks." },
          { n: 19, text: "A feast is prepared for laughter, and wine makes life merry, but money is the answer for everything." },
          { n: 20, text: "Do not curse the king even in your thoughts, or curse the rich even in your bedroom, for a bird of the air may carry your words, and a winged creature may report your speech." },
        ],
        perItem: {
          1: {
            note: "With this image the Teacher sums up the whole chapter. A little folly does not reduce a person’s wisdom by a little. Like a few dead flies in a jar of perfume, it spoils the whole thing.",
          },
          10: {
            note: "This is one of the plainest pieces of practical advice in the book: sharpen the axe. The Teacher offers skill as a substitute for brute force.",
          },
          14: {
            note: "The Teacher repeats a refrain from chapter eight in the middle of a saying about people who talk too much. No one knows what is coming, he says, and yet the fool keeps multiplying words.",
          },
          19: {
            addr: {
              mode: "claims",
              text: "The saying is less cynical than it sounds. The Teacher observes what money can do, and he has already told us that money never satisfies anyone. Both observations are true, and most of us know that they are.",
            },
          },
          20: {
            note: "The Teacher has watched what happens to people who talk. People in his day already spoke of a bird that carries your words, and he uses the saying to warn us that even a bedroom is not private.",
          },
        },
        ground: {
          kind: "genre",
          text: "This is the second and lighter of the Teacher’s collections of sayings, and it works differently from the one in chapter seven. There he compared two good things and ranked them. Here he mostly describes consequences: whoever digs a pit may fall into it, whoever breaks through a wall may be bitten by a snake, and whoever quarries stone may be hurt by it. He observes rather than moralizes, and several of the sayings concern work rather than virtue.",
          src: "Fox · Seow · von Rad",
        },
        meaning:
          "The chapter can look like a jumble of sayings, but the Teacher pursues one argument throughout: small things decide a great deal. A few dead flies spoil a whole jar of perfume. A dull axe costs a worker strength he did not need to spend. A word spoken in a bedroom gets out. None of these sayings concerns a grand failure of character. They all concern the outsized cost of small carelessness, and the Teacher writes them as someone who has watched capable people undone by things they thought did not matter.",
        addr: {
          mode: "claims",
          text: "Most of us have some small thing in our working lives that costs us more than it should, and we ignore it because the big things seem to be under control. Sharpen the axe, the Teacher says. It may be the least spiritual sentence in the Bible, and it is one of the most useful.",
        },
        ask: "What have you been leaving blunt?",
      },
    ],
  },
  {
    id: "ecc-11",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 11:1–12:8",
    chapterIndex: 11,
    crossesChapters: true,
    title: "Remember your Creator",
    thread: "In chapter 11 the Teacher tells his readers to sow seed in the morning and again in the evening, because they cannot know which sowing will grow. Then in chapter 12 he writes the finest poem in the book, about a great house slowly falling into disrepair, and the house is a human body.",
    closeEnd: "In the last line the Teacher repeats the sentence he opened the book with, and so closes the frame around it. Everything is a vapor, he says, and by now he has told us six times what to do about it.",
    passages: [
      {
        ref: "11:1–10",
        kind: "argument",
        form: "prose",
        title: "Cast your bread",
        verses: [
          { n: 1, text: "Cast your bread upon the waters, for after many days you will find it again." },
          { n: 2, text: "Divide your portion among seven, or even eight, for you do not know what disaster may befall the land." },
          { n: 3, text: "If the clouds are full, they will pour out rain upon the earth; whether a tree falls to the south or to the north, in the place where it falls, there it will lie." },
          { n: 4, text: "He who watches the wind will fail to sow, and he who observes the clouds will fail to reap." },
          { n: 5, text: "As you do not know the path of the wind, or how the bones are formed in a mother’s womb, so you cannot understand the work of God, the Maker of all things." },
          { n: 6, text: "Sow your seed in the morning, and do not rest your hands in the evening, for you do not know which will succeed, whether this or that, or if both will equally prosper." },
          { n: 7, text: "Light is sweet, and it pleases the eyes to see the sun." },
          { n: 8, text: "So if a man lives many years, let him rejoice in them all. But let him remember the days of darkness, for they will be many. Everything to come is futile." },
          { n: 9, text: "Rejoice, O young man, while you are young, and let your heart be glad in the days of your youth. Walk in the ways of your heart and in the sight of your eyes, but know that for all these things God will bring you to judgment." },
          { n: 10, text: "So banish sorrow from your heart, and cast off pain from your body, for youth and vigor are fleeting." },
        ],
        ground: {
          kind: "historical",
          text: "Readers have understood casting bread on the waters in three ways: as trading by sea, as sowing grain on flooded fields, and as ordinary generosity. The image makes sense on all three readings. When the Teacher advises dividing a portion among seven or eight, he means spreading the risk, and he says so: you do not know what disaster may come. His advice to sow in the morning and the evening is a farmer’s advice, and he uses it to make a general point about acting when you cannot know the outcome.",
          src: "Fox · Seow · Krüger",
        },
        meaning:
          "Here the Teacher draws the practical conclusion of everything he has argued, and it is the opposite of giving up. You cannot know which venture will succeed, he says, so start more than one. You cannot predict the weather, so stop watching the sky and sow your seed. You do not understand how bones form in a mother’s womb, and you will not understand God’s work either, so act anyway. Then he turns to a young man and tells him to rejoice and to follow his heart and his eyes, adding that God will bring him into <b>judgment</b> for it all. Some scholars think a later editor added that clause, but it reads just as well as the Teacher’s own refusal to make anything simple.",
        lenses: {
          arch: "Every decision any person has ever made, they made without the information that would have settled it. Farmers in every age have had to sow before they knew what the weather would do, and the Teacher takes their position as a picture of every human choice.",
        },
      },
      {
        ref: "12:1–8",
        kind: "poem",
        form: "poetry",
        title: "Before the silver cord",
        verses: [
          { n: 1, text: "Remember your Creator in the days of your youth,\nbefore the days of adversity come and the years approach\nof which you will say, “I find no pleasure in them,”" },
          { n: 2, text: "before the light of the sun, moon, and stars is darkened,\nand the clouds return after the rain," },
          { n: 3, text: "on the day the keepers of the house tremble and the strong men stoop,\nwhen those grinding cease because they are few\nand those watching through windows see dimly," },
          { n: 4, text: "when the doors to the street are shut\nand the sound of the mill fades away, when one rises at the sound of a bird\nand all the daughters of song grow faint," },
          { n: 5, text: "when men fear the heights and dangers of the road,\nwhen the almond tree blossoms, the grasshopper loses its spring,\nand the caper berry shrivels—for then man goes to his eternal home and mourners walk the streets." },
          { n: 6, text: "Remember Him before the silver cord is snapped and the golden bowl is crushed,\nbefore the pitcher is shattered at the spring\nand the wheel is broken at the well," },
          { n: 7, text: "before the dust returns to the ground from which it came\nand the spirit returns to God who gave it." },
          { n: 8, text: "“Futility of futilities,” says the Teacher.\n“Everything is futile!”" },
        ],
        ground: {
          kind: "genre",
          text: "The Teacher pictures a household running down. The keepers of the house tremble, the strong men stoop, the women grinding grain stop because there are too few of them, the women looking through the windows see dimly, and the doors to the street are shut. Then he names four broken things at a well: a silver cord, a golden bowl, a pitcher, and a wheel. And he mentions the almond tree in blossom, the grasshopper that drags itself along, and the caper berry that no longer stirs desire.",
          src: "Fox · Seow · Alter",
        },
        misreading: {
          named:
            "Many readers treat the poem as a coded description of the aging body: the keepers of the house are the hands, the grinders are the teeth, and the windows are the eyes.",
          why: "Readers worked out that decoding long ago, and it is clever and mostly works, which is exactly the problem. If we read the poem as a code, we turn it into a puzzle with a solution, and once we have the solution we have no reason to read it again. What the Teacher actually describes is a great house in its last days, with too few servants to keep it up, its doors shut, and the sound fading out of it. That picture does something the decoding cannot do. It lets us feel the end of a life as gradual, domestic and quiet, which is how it usually comes.",
        },
        meaning:
          "The Teacher tells us to remember our Creator now, and everything that follows gives the reason, in one long series of befores: before the light goes, before the house is shut, before the cord snaps and the pitcher breaks at the spring. Then he writes a line that is not despair but simple accounting, that the dust returns to the ground and the breath returns to God who gave it. Finally he repeats, word for word, the sentence he began with in chapter one, and so closes the frame. He has not solved anything. He has recommended something, six times.",
        addr: {
          mode: "claims",
          text: "Sooner or later each of us will be like a house with fewer people in it than it was built for. The Teacher does not ask us to be brave about that. He asks us to remember now, while life is still sweet, because we can only do that early.",
        },
        ask: "What do you want to be in the habit of before the days come when you take no pleasure in them?",
      },
    ],
  },
  {
    id: "ecc-12",
    bookId: "ecclesiastes",
    tier: "sitting",
    span: "Ecclesiastes 12:9–14",
    chapterIndex: 12,
    title: "The epilogue",
    thread: "In the last six verses of the book someone writes in a different voice, speaking about the Teacher from outside his book, and closes with a sentence that sounds like a door shutting.",
    closeEnd: "Scholars genuinely disagree about whether a later editor wrote these verses to make a dangerous book acceptable, or whether the Teacher wrote them himself to sign his work, and we will not try to settle that question for you here.",
    passages: [
      {
        ref: "12:9–14",
        kind: "argument",
        form: "prose",
        title: "The whole duty of man",
        verses: [
          { n: 9, text: "Not only was the Teacher wise, but he also taught the people knowledge; he pondered, searched out, and arranged many proverbs." },
          { n: 10, text: "The Teacher searched to find delightful sayings and to record accurate words of truth." },
          { n: 11, text: "The words of the wise are like goads, and the anthologies of the masters are like firmly embedded nails driven by a single Shepherd." },
          { n: 12, text: "And by these, my son, be further warned: There is no end to the making of many books, and much study wearies the body." },
          { n: 13, text: "When all has been heard, the conclusion of the matter is this: Fear God and keep His commandments, because this is the whole duty of man." },
          { n: 14, text: "For God will bring every deed into judgment, along with every hidden thing, whether good or evil." },
        ],
        ground: {
          kind: "historical",
          text: "Here the voice changes. Apart from a few brief asides, the Teacher has spoken as “I” for twelve chapters. In these six verses someone speaks of the Teacher as “he,” describes his method from the outside, and addresses the reader as “my son,” the way teachers in the wisdom books commonly addressed their students.",
          src: "Fox · Seow · Longman · Barton",
        },
        meaning:
          "Readers take this passage in two serious ways. On the first reading, a later editor did what the book needed in order to survive: he framed twelve dangerous chapters with a summary orthodox enough for the community to keep, and that is why we have the book at all. On the second reading, the Teacher signed his own work, and the warning about judgment fits the one he gave the young man in chapter 11. Either way, the effect is clear. After twelve chapters about vapor, the command to fear God and keep his commandments falls like a door shutting on a room in which someone had just opened a window.",
        addr: {
          mode: "claims",
          text: "Most of us have had someone sum up our situation in a sentence that was true and still missed what we were really asking. The Teacher’s book keeps both things: the summary at the end, and the twelve chapters that will not fit inside it.",
        },
        ask: "What summary of your life is accurate and still does not describe it?",
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
    "A man with every resource he could want sets out to discover what a human life adds up to, and he reports back honestly. Again and again he concludes that it is a vapor, and the first thing he does with that conclusion is tell us to eat our bread.",
  chapterStart: 1,
  chapterEnd: 4,
  situation: {
    kicker: "The ground beneath the sun",
    title: "The situation",
    image: "/images/ecc-sun.webp",
    paragraphs: [
      "The writer calls himself Qohelet, a Hebrew word that means something like “the one who gathers an assembly,” and English Bibles usually translate it “the Teacher.” His favorite word is hevel, which literally means vapor or breath, the kind of thing you can see but cannot hold. He also uses the phrase “under the sun” about thirty times, and with it he marks the limits of his search. He means the world as anyone can observe it, without appealing to anything beyond it. He sets that limit on purpose, and he reaches every conclusion in the book inside it.",
      "The Teacher wrote within a wisdom tradition that stretched across the ancient Near East. For centuries Egyptian and Mesopotamian scribes had written books of instruction and skeptical dialogues, and some of them sound remarkably like this one. In one Egyptian text a man argues with his own soul about whether life is worth living, and in a Mesopotamian dialogue a servant agrees with every contradictory plan his master proposes. Israel’s wisdom writers took part in that conversation rather than standing apart from it.",
      "The Teacher is also testing what the writers of Proverbs claimed. They described a world that works: diligence brings plenty, righteousness brings long life, and folly brings ruin. The Teacher reports the exceptions and refuses to treat them as rare. The writer of Job does the same from a different direction, through one man’s story instead of a survey.",
      "The economic details are real as well. In chapter 5 the Teacher describes officials watched by higher officials, owners who live far from their land, and wealth that keeps its owner awake at night. That was the world of a small province inside a large empire, where other people made the decisions and spent the money a long way off.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
  doorway: {
    kicker: "The second movement",
    title: "What cannot be found out",
    paragraphs: [
      "In the first section the Teacher asked what a human life adds up to and answered that it is vapor, but three times he interrupted himself to say that we should eat our bread anyway.",
      "In the next section he narrows his focus. He writes about money, worship and power, about a man who has everything and cannot enjoy it, and then he gives a long collection of sayings about what is better than what. He ends by admitting three separate times that no one can find out what God is doing under the sun, however confidently the wise claim to have looked.",
    ],
    nextMovementId: "not-found-out",
  },
  capstone: {
    kicker: "The first movement · Ecclesiastes 1–4",
    title: "Vapour, and a handful with quiet",
    paragraphs: [
      "In these four chapters the Teacher makes his case. He describes a world that goes around in circles and gets nowhere. He reports an experiment he ran with every resource available, and he tells the truth about it. He lists the times and seasons that no one controls, and he records the tears of oppressed people who had no one to comfort them. The word he keeps returning to is hevel, vapor. Translators often render it “meaningless,” but a truer rendering is “impossible to hold.” Everything the Teacher describes in these chapters is real, and none of it lasts.",
      "Readers can easily miss that the Teacher has already given his answer. Three times in four chapters he stops and says the same thing: eat, drink, and find something good in your work. He says it in chapter two immediately after he admits that he hated life, and in chapter three immediately after he says that no one can see the whole. Each time he ties the advice to the bleak observation rather than setting it against it. The Teacher does not cheer us up. He gives us something to do.",
      "At the end of this section the Teacher turns outward. In chapters one to three he asks what a life adds up to. In chapter four he asks what people do to one another, and he answers with the picture of a man alone and with a cord of three strands. He is not arguing that company will make us happy. He is arguing that each of us will stumble, and will need someone to help us up.",
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
    "In this section the Teacher writes about money that never satisfies anyone, about a man whom God does not allow to enjoy what he has, and about what is better than what, and again and again he admits that no one can find out what God is doing under the sun.",
  chapterStart: 5,
  chapterEnd: 8,
  situation: {
    kicker: "The ground beneath the search",
    title: "The situation",
    image: "/images/ecc-search.webp",
    paragraphs: [
      "The Teacher wrote chapter five in a province inside an empire. When he describes one official watched by a higher one, with still higher ones above them, he is describing how Judah was governed under foreign rule, as a small territory whose taxes and decisions went a long way off. The Teacher points to that chain of officials as a reason not to be astonished by injustice. His realism is bleak, but he is not approving of what he describes.",
      "In the Teacher’s world, wealth meant silver weighed out by hand, livestock and land, not a number kept somewhere safe. A rich man kept his wealth on his own property, where thieves could reach it, and so when the Teacher says that a rich man cannot sleep, he means it literally.",
      "When people made vows, they made binding agreements with a real institution. A person promised God something in return for something he wanted, and Israel’s law treated a broken vow seriously. When the Teacher warns his readers not to tell the messenger that their vow was a mistake, he probably means a temple official who has come to collect what was promised.",
      "The Teacher himself supplies the title of this section, in a claim he makes three times in chapter eight. However hard a person works at it, he says, and however confidently the wise say they have done it, no one can find out what God is doing under the sun. He sets a limit on human knowledge, and he does so as someone who went and tried.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
  doorway: {
    kicker: "The third movement",
    title: "Eat your bread",
    paragraphs: [
      "After eight chapters of searching, the Teacher has found that the search never ends. In the chapters that follow he does not solve that problem. He stops trying to.",
      "In the last four chapters the Teacher writes the bleakest sentence in the book and, four verses later, its most direct instructions. Then he gives a second collection of sayings and a poem about a great house falling into disrepair, which is really about a body. Last comes a six-verse epilogue in a different voice, which someone added at the end.",
    ],
    nextMovementId: "eat-your-bread",
  },
  capstone: {
    kicker: "The second movement · Ecclesiastes 5–8",
    title: "Nobody has finished looking",
    paragraphs: [
      "In these four chapters the Teacher narrows his view from the shape of a whole life to its details. He writes about money that never satisfies anyone, about a man given everything but denied the ability to enjoy it, and about a collection of sayings that recommends the funeral over the party for a reason he states. He ends with a chapter of advice at court for people who have no power at all.",
      "The Teacher holds the section together with the claim that gives it its title, and he makes it three times in the last chapter, aiming it squarely at his own profession: no one can find out what God is doing under the sun, and even a wise man who says he has done so cannot. He is not arguing for ignorance. He is arguing against anyone who claims to have the final answer, and he argues as someone who went and looked.",
      "By now the Teacher has given his permission to enjoy life five times in eight chapters, and each time he ties it to the hardest sentence around it. By this point readers can see that the permission is not a break in his argument. It is the conclusion he keeps reaching.",
    ],
    sources: "Fox · Seow · Krüger",
  },
};

export const EAT_YOUR_BREAD_MOVEMENT: Movement = {
  id: "eat-your-bread",
  index: 3,
  title: "Eat your bread",
  range: "Ecclesiastes 9–12",
  throughline:
    "The Teacher says that the same fate comes to everyone, and four verses later he gives his most direct instructions: go, eat, drink, wear white, love someone, and do your work with all your strength, because your days are few.",
  chapterStart: 9,
  chapterEnd: 12,
  situation: {
    kicker: "The ground beneath the answer",
    title: "The situation",
    image: "/images/ecc-bread.webp",
    paragraphs: [
      "Sheol is not hell. In the Hebrew Bible it is the grave, the place of the dead, and the writers describe it as a place of inactivity rather than punishment, where no one works, plans, knows or reasons. When the Teacher says that the dead know nothing, he is describing Sheol, not making a claim about God’s judgment. Later biblical writers came to hope for something more, and they developed that hope rather than correcting the Teacher.",
      "People put on white clothes and oil for a feast. When the Teacher tells his readers to wear them always, he is telling them to dress for a celebration on an ordinary day, which is a stronger instruction than it sounds in English.",
      "The Teacher has given his permission to enjoy life five times already, and here he gives it as a string of direct commands: go, eat, drink, let your clothes be white, enjoy life, and do your work. Nowhere else in the book does he give so many orders in a row.",
      "In his closing poem the Teacher draws his images from a household. The keepers of the house tremble, the strong men stoop, the grinders stop because there are too few, the watchers at the windows grow dim, and the door to the street is shut. Readers have decoded the poem line by line as a description of the aging body, and the decoding works. But the poem also works simply as a picture of a house running down, which is what the Teacher actually describes.",
    ],
    sources: "Fox · Seow · Krüger · Barton",
  },
  capstone: {
    kicker: "The third movement · Ecclesiastes 9–12",
    title: "Go, and then the house shuts",
    paragraphs: [
      "The Teacher opens this section with the flattest statement about death in the whole Bible, and four verses later he answers it with his most direct commands: go, eat, drink, wear white, love someone, and do your work with all your strength. He grounds those commands in the sentence about death that comes before them. He does not soften that sentence.",
      "Then he gives his second collection of sayings, mostly about how small carelessness undoes capable people, and he draws the practical conclusion from twelve chapters of not knowing: you cannot predict the weather, so sow in the morning and again in the evening, because you do not know which sowing will grow.",
      "Last comes his closing poem, about a house running down, with too few servants to keep it, its doors shut and the sound fading out of it. The Teacher ends it with the dust returning to the ground and the breath returning to God, and then he repeats, word for word, the sentence he began with in chapter one. He has not solved anything. He has recommended something, six times.",
    ],
    sources: "Fox · Seow · Krüger",
  },
};

// The book-level composition overlay.
export const ECCLESIASTES_INTRO: Panel = {
  kicker: "An introduction · Ecclesiastes 1–12",
  title: "The book that argues with the rest",
  paragraphs: [
    "Ecclesiastes is twelve chapters and 222 verses long, and it is the strangest book in the Hebrew Bible. The writer speaks in the first person and calls himself Qohelet, a Hebrew title rather than a name, which means something like “the one who gathers an assembly” and which English Bibles usually render as “the Teacher.” He presents himself as a king in Jerusalem, which points to Solomon without naming him, and he drops that role after chapter two. He wrote in late Hebrew that borrows words from Persian, so most scholars date the book several centuries after Solomon, somewhere between about 450 and 250 BCE.",
    "What the Teacher says is what makes the book remarkable. He says that the dead know nothing and have no further reward. He says that a man has no advantage over a beast, since both go to the same place. He says he has seen a righteous man perish in his righteousness and a wicked man live long in his wickedness. He does not make these remarks in passing. They are his argument, and they contradict things other biblical writers say.",
    "The book nearly did not make it into the Bible. Ancient rabbis record a real dispute over whether it belonged, and they raised the same objection a modern reader raises: that the Teacher contradicts himself, and that people could read him as a heretic. In the six verses at the end someone speaks in a different voice, praises the Teacher from outside his book, and closes with the command to fear God and keep his commandments. Many scholars think those verses made the book acceptable to keep. They genuinely disagree about whether a later editor wrote them or the Teacher signed his own work.",
    "In the end the Teacher has not written a book about despair, however often people quote him that way. Six times he stops to say the same thing: eat your bread, drink your wine, enjoy your work, and be with the person you love. He grants that permission because of the bleakness rather than in spite of it, which is harder than optimism and a good deal more useful.",
  ],
  timeline: [
    {
      tag: "c. 950 BCE",
      text: "Solomon, whom the Teacher hints at in his opening verses without naming him.",
    },
    {
      tag: "c. 450–200 BCE",
      text: "Most scholars date the writing to this period, on the evidence of its Hebrew.",
    },
    {
      tag: "c. 200 BCE",
      text: "Ben Sira writes his book of wisdom, and by now the wisdom tradition the Teacher argued within is well established.",
    },
    {
      tag: "100s CE",
      text: "Rabbis record a real dispute over whether the book belonged in the Bible at all.",
    },
  ],
  sources: "Fox · Seow · Longman · Krüger · Barton",
};
// The book-level look-back, where the argument for the book's presence in the canon lives.
export const ECCLESIASTES_CAPSTONE: Capstone = {
  kicker: "The whole book · Ecclesiastes 1–12",
  title: "It is in the collection, and it says this",
  paragraphs: [
    "The most interesting fact about this book is that it is in the Bible at all. The Teacher wrote that the same fate comes to the righteous and the wicked, that the dead know nothing and have no further reward, that a man has no advantage over a beast, and that no one, not even the wise, can find out what God is doing under the sun. Yet Jews kept his book, copied it, argued over it, and read it aloud. The ancient rabbis record their dispute over it plainly, on exactly the grounds a modern reader would raise.",
    "The people who kept the book did not tame it, though whoever wrote the last six verses tried. Those verses are orthodox, and there are only six of them, while the twelve chapters before them remain unchanged. Whatever the rabbis decided when they kept this book, they did not decide to make the Teacher agree with everyone else.",
    "The Teacher also claims less than his reputation suggests. He does not say that life is meaningless; translators chose that word, and it says more than the Hebrew does. His word hevel means vapor, something real and visible that no one can hold. The Teacher insists that everything he describes is real and that none of it lasts, and he keeps those two claims carefully apart.",
    "The Teacher does not end in despair, because he never was in despair. Six times in twelve chapters, always right after the hardest sentence in the passage, he stops and says the same thing: eat your bread, drink your wine, wear white, enjoy your work while your hand is still on it, and be with the person you love all the days of your fleeting life. He does not offer this as compensation or as a distraction. He calls it our portion, the word he uses for what a person actually receives.",
  ],
  tensions: [
    {
      claim:
        "The writer of the epilogue says that the conclusion of the matter is to fear God and keep his commandments, because this is the whole duty of man, and God will bring every deed into judgment.",
      counter:
        "In the twelve chapters before the epilogue, the Teacher says that one fate comes to the righteous and the wicked alike, that the dead know nothing, and that no one can find out what God is doing under the sun. Scholars still argue over whether a later editor added the epilogue to make a dangerous book acceptable, or whether the Teacher signed his own work.",
      where: "Ecclesiastes 12:13–14 · Ecclesiastes 9:2–5 · Ecclesiastes 8:17",
    },
  ],
  sources: "Fox · Seow · Longman · Krüger · Barton",
  ask: "The people who kept this book decided that the Bible needed a voice willing to say all of this out loud. What are you not saying that the people around you might need to hear?",
};
