import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book I, Psalms 1–8. Sittings: 1, 2, 8. The rest are grounded.
export const PS_001_008: PsalmNotesMap = {
  "ps-1": {
    tier: "sitting",
    title: "Two ways",
    thread:
      "The editors who arranged the Psalter put this poem first, as a doorway to the other 149. Its writer does not pray in it at all. He describes two kinds of people, and he promises that the person who keeps to God’s teaching will flourish like a tree beside a stream.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "This psalm has no heading and names no author. Most scholars think the editors of the Psalter placed it first as an introduction, so that a reader would study the prayers that follow as well as pray them. The word the BSB translates “Law” is torah, which means teaching or instruction in a broad sense. The Hebrew verb behind “meditates” means to murmur, so the poet is describing someone who reads the words aloud under his breath.",
          src: "Wilson · Mays · Alter",
        },
        meaning:
          "The poet sets two pictures side by side. He compares the person who delights in God’s teaching to a tree planted beside a stream, which bears fruit in its season and keeps its leaves. He compares the wicked to chaff, the dry husks that a farmer tosses into the air so that the wind will carry them off. He is contrasting a life that has roots with a life that has no weight, and he promises that the LORD guards the path of the first.",
        tensions: [
          {
            claim:
              "The poet promises that the righteous person prospers in all he does and that the way of the wicked will perish.",
            counter:
              "The writer of Psalm 73 says that he nearly lost his footing when he saw the wicked grow rich and live at ease. The editors kept both psalms in the same book.",
            where: "Psalm 1:3–6 · Psalm 73:2–14",
          },
        ],
        addr: {
          mode: "claims",
          text: "The poet assumes that you become like the company you keep and the words you return to each day, as slowly and as surely as a tree grows beside a stream.",
        },
        ask: "What do you go back to every day, and what kind of person is it making you?",
        prayer: {
          mode: "mantra",
          text: "Plant me by the water, and let me keep my leaves.",
        },
      },
    ],
    find: {
      themes: ["faith-and-fairness", "temptation"],
      speaksTo:
        "For when you wonder what your daily habits and the company you keep are making of you.",
    },
  },
  "ps-2": {
    tier: "sitting",
    title: "The king on Zion",
    thread:
      "The editors set this poem beside Psalm 1 as the second half of their introduction to the Psalter. Its writer imagines the kings of the earth plotting to throw off the rule of the LORD and of the king whom the LORD has set in Jerusalem, and he reports that God laughs at them.",
    closeEnd:
      "The poet ends with the word “Blessed,” which is the word that opened Psalm 1, and many scholars think the editors meant the two psalms to be read as one doorway.",
    passages: [
      {
        ground: {
          kind: "historical",
          text: "Most scholars think this psalm was written for the day a new king was crowned in Jerusalem, on the hill called Zion. “Anointed One” translates the Hebrew word mashiach, a title of every Israelite king, because a priest or prophet poured oil on a new king’s head to mark him as God’s choice. English “Messiah” comes from the same word. Subject nations often rebelled when a king died, and the poet pictures that moment. In verse 7 the new king himself speaks, and he recites the decree by which God adopted him as a son on that day.",
          src: "Kraus · Craigie · Mays",
        },
        meaning:
          "The poet lets four voices speak in turn. The rebel kings speak first, God answers them from heaven, the king in Jerusalem recites what God has promised him, and the poet then warns the rulers to submit while they can. Judah was a small kingdom that never ruled the ends of the earth, so the poet was not describing anything his hearers could see. He was claiming that the LORD holds the real power in the world, and that every ruler will answer to him.",
        lenses: {
          theo: "After Jerusalem fell and no king reigned there, Jewish readers kept praying this psalm as a hope for a king still to come. The first Christians read it as a psalm about Jesus, and in Acts 13 Paul applies “You are My Son” to the resurrection.",
        },
        addr: {
          mode: "reframes",
          text: "The poet asks you to look at the powers that frighten you from the place where God sits, because from there their plotting looks small. He ends with a blessing on all who take refuge in the LORD, and he offers it to anyone.",
        },
        ask: "Which power looks final to you now, and what would change if you believed that it was not?",
        prayer: {
          mode: "pray",
          text: "LORD, the rulers of this world are loud, and you are not afraid of them. Let me take refuge in you.",
        },
      },
    ],
    find: {
      themes: ["powerlessness", "fear"],
      speaksTo:
        "For when the powerful seem to answer to no one, and you need to remember who has the last word.",
    },
  },
  "ps-3": {
    tier: "grounded",
    title: "A shield around me",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "In the heading the editors tied this psalm to the time when David’s son Absalom raised an army against him and David fled Jerusalem, a story told in 2 Samuel 15–18. Most scholars think that editors added headings like this one long after the psalms were written, as a way of reading them alongside David’s life, and the poet himself mentions neither Absalom nor a flight. He writes a lament, the prayer of one person surrounded by enemies. This is the first psalm in the book to carry a heading and the first to include the word Selah, which was probably a direction to the musicians. No one now knows what it meant.",
          src: "Childs · Alter",
        },
      },
    ],
  },
  "ps-4": {
    tier: "grounded",
    title: "Sleep in peace",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David and gave two directions for performing it. They marked fifty-five psalms “For the choirmaster,” which probably refers to the director of the temple’s music, and “With stringed instruments” means what it says. The poet prays for help against people who are slandering him, and in verses 2–5 he speaks to them directly before he turns back to God. He writes with more trust than fear, and because he ends by lying down to sleep, readers have long used this poem as an evening prayer.",
          src: "Craigie · Kraus · Mays",
        },
      },
    ],
  },
  "ps-5": {
    tier: "grounded",
    title: "In the morning",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David and marked it for flutes, although the Hebrew word behind “flutes” occurs only here and translators are guessing at it. The poet writes a lament and prays it at daybreak, perhaps beside the morning sacrifice, since he speaks of entering God’s house. Liars are attacking him, and he asks God to act as a judge and declare them guilty. When he compares their throats to open graves, he means that their words can kill. “Loving devotion” is the BSB’s translation of hesed, the loyal love that God has promised to his people.",
          src: "Kraus · Craigie",
        },
      },
    ],
  },
  "ps-6": {
    tier: "grounded",
    title: "Tears in the night",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The poet is gravely ill, and he takes his illness as a sign of God’s anger, although he confesses no particular sin. He prays a lament, and the church later counted it the first of seven penitential psalms. No one knows what “Sheminith” in the heading means, though the word is related to the Hebrew for eight. Sheol is the Hebrew name for the place of the dead, which most psalmists pictured as a silent land where no one praises God. At verse 8 the poet suddenly speaks with confidence, and some scholars think that a priest had answered him with a word of assurance.",
          src: "Kraus · Craigie · Mays",
        },
      },
    ],
  },
  "ps-7": {
    tier: "grounded",
    title: "If I have done this",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "According to the heading, David sang this psalm about the words of Cush, a man of Benjamin, which was the tribe of Saul, the king who hunted David before David took the throne. Cush is named nowhere else in the Bible, so the incident is lost, and no one knows what “Shiggaion” means either. The poet has been accused of betraying an ally, and he prays as a person falsely accused. He swears that he is innocent, and then he asks God to take the judge’s seat and hear the case. When he claims righteousness, he means that he is innocent of this charge, not that he has never sinned.",
          src: "Craigie · Kraus · Mays",
        },
      },
    ],
  },
  "ps-8": {
    tier: "sitting",
    title: "What is man?",
    thread:
      "After five prayers for help, the editors placed the first hymn of praise in the Psalter. The poet looks up at the night sky and feels how small a human being is beneath it. Then he says that God has nonetheless crowned human beings with honor and put the animals in their care.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The poet writes a hymn, which is a song of praise, and he begins and ends it with the same line. The editors credited it to David and added “According to Gittith,” a term that no one can now explain. The poet seems to have Genesis 1 in mind, where God makes human beings in his image and tells them to rule the fish, the birds and the animals. Where the BSB has “angels,” the Hebrew word is elohim, which usually means God or gods. The BSB follows the ancient Greek translation here.",
          src: "Kraus · Craigie · Alter",
        },
        meaning:
          "The poet asks why the maker of the moon and the stars should pay any attention to people. He does not answer that people are impressive. He says that God gave them their honor, as a king gives a crown, and that they rule the animals on God’s behalf. He holds together two things, that a human being is very small and that a human being matters a great deal, and he surrounds both with praise of God’s name.",
        tensions: [
          {
            claim:
              "The poet is amazed and glad that God pays attention to human beings.",
            counter:
              "Job, the suffering man of the book that bears his name, asks nearly the same question and means the opposite, because he wishes that God would look away and leave him alone.",
            where: "Psalm 8:4 · Job 7:17–19",
          },
        ],
        addr: {
          mode: "reframes",
          text: "The poet invites you to stand under a sky that makes you feel small and to hear that God is mindful of you there. He also reminds you that whatever you have charge of was given to you and still belongs to God.",
        },
        ask: "When did you last feel small under the sky, and did it frighten you or steady you?",
        prayer: {
          mode: "mantra",
          text: "You made the moon and the stars, and you are mindful of me.",
        },
      },
    ],
    find: {
      themes: ["limits", "overlooked"],
      speaksTo:
        "For when you feel too small to matter, and you need to hear that God has not overlooked you.",
    },
  },
};
