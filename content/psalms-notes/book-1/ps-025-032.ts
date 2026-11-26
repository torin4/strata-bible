import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book I, Psalms 25–32. Sittings: 27, 29, 30, 32. The rest are grounded.
export const PS_025_032: PsalmNotesMap = {
  "ps-25": {
    tier: "grounded",
    title: "The sins of my youth",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors placed this prayer among the psalms of David. The poet wrote it as an acrostic, which means that he began each verse with the next letter of the Hebrew alphabet, although a few letters are missing or repeated and he added one verse after the last letter. Scholars think that poets used the alphabet as an aid to memory and as a sign of completeness. Because the poet took the order of his lines from the alphabet, he moves freely between asking for help, confessing his sins and teaching about God. In the added verse he stops praying for himself and prays for all Israel.",
          src: "Craigie · Kraus · Alter",
        },
      },
    ],
  },
  "ps-26": {
    tier: "grounded",
    title: "Examine my heart",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors named David in the heading and added nothing more. The poet protests his innocence and asks God to judge him, and many scholars think that falsely accused people prayed like this at the temple, where they came for God’s verdict. Others compare the prayer with Psalms 15 and 24, in which worshippers are asked at the gate whether they are fit to enter. The poet washes his hands and walks around the altar as acts of worship. He is not claiming that he has never sinned. He is claiming that he has stayed loyal to the LORD and has kept away from the people he describes.",
          src: "Kraus · Craigie · Mays",
        },
      },
    ],
  },
  "ps-27": {
    tier: "sitting",
    title: "One thing I have asked",
    thread:
      "The poet begins as a person who fears nothing, not even an army camped around him, because the LORD is his stronghold. He says that he has asked God for one thing only, which is to live in the LORD’s house and look on his beauty. Halfway through the poem he changes his tone, and he begs God not to turn away from him.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors placed this psalm in David’s collection. In verses 1–6 the poet speaks about the LORD with complete confidence, and in verses 7–14 he speaks to the LORD in the anxious voice of a lament. He writes the two halves so differently that some scholars have concluded that editors joined two separate poems. Others read one prayer, in which the poet states his trust first and then brings his trouble. The house of the LORD is the sanctuary in Jerusalem, and to seek God’s face meant to go there to worship. The Hebrew word that the BSB translates “beauty” means pleasantness or delight.",
          src: "Craigie · Mays · Kraus",
        },
        meaning:
          "The poet has enemies, and yet the one thing he asks for is not safety. He asks to live where God is and to look at him, and he expects safety to follow from that, since he pictures the sanctuary as a shelter and a high rock. In the second half the same person pleads with God not to hide his face, not to be angry and not to abandon him. Most laments in the Psalter begin in fear and end in trust, but this poet goes the other way. Whoever gave the psalm its present shape allowed fear to come after confidence, which is how many people actually live. The poet does not end with an answer from God. He ends by telling himself, or by hearing someone else tell him, to wait and to be strong.",
        lenses: {
          theo: "C.S. Lewis observed that the psalmists did not separate loving God from enjoying the temple, with its music, its festivals and its sacrifices, and that what they felt there was a real appetite for God himself. Jewish communities recite this psalm every day through the weeks around the New Year and the Day of Atonement, when they examine their lives and seek God’s face. Christians have usually taken the house of the LORD to mean God’s presence wherever a person finds it.",
        },
        addr: {
          mode: "pray",
          text: "You may know both of these voices, and you may have used both in the same week. The poet does not ask you to choose between them or to feel ashamed of the second one. He lets you say to God that you are not afraid, and then lets you say that you are, and he tells you that the thing to do afterwards is to wait.",
        },
        ask: "If you could ask God for only one thing, what would it be, and is it the thing you actually ask him for most often?",
        prayer: {
          mode: "pray",
          text: "LORD, I have asked you for many things. Teach me to want you more than any of them, and do not hide your face from me while I wait.",
        },
        inTextTurn: 7,
      },
    ],
    find: {
      themes: ["fear", "god-feels-absent", "waiting"],
      speaksTo:
        "For when you feel sure of God one day and abandoned the next, and you want his presence more than an explanation.",
    },
  },
  "ps-28": {
    tier: "grounded",
    title: "Do not be deaf to me",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "This is another psalm from the collection that the editors gathered under David’s name. The poet writes a lament, and he fears that if God stays silent he will go down to the Pit, which was a name for the world of the dead. He lifts his hands toward the innermost room of the temple. At verse 6 he suddenly gives thanks as though he had been answered, and many scholars suppose that a priest spoke a word of assurance at that point in the service. The “anointed” of verse 8 is the king, and so the poet closes by praying for the king and the whole people.",
          src: "Kraus · Mays · Craigie",
        },
      },
    ],
  },
  "ps-29": {
    tier: "sitting",
    title: "The voice of the LORD",
    thread:
      "The poet watches a thunderstorm come in from the sea, break over the mountains of Lebanon and pass out into the desert. He calls the thunder the voice of the LORD, and he names that voice seven times.",
    passages: [
      {
        ground: {
          kind: "historical",
          text: "The editors headed this hymn as a psalm of David. Lebanon and Sirion, an old name for Mount Hermon, are mountains north of Israel. Since 1929 archaeologists have recovered poems from Ugarit, a city on the Syrian coast, in which the Canaanites praised the storm god Baal, whose voice was the thunder and who ruled as king after he defeated the Sea. The Canaanite poets used language so close to this psalmist’s that many scholars think he adapted one of their hymns, or at least its phrases, and gave the praise to the LORD. The “heavenly beings” are the lesser gods of Canaanite belief, whom the poet summons to worship.",
          src: "Cross · Craigie · Kraus",
        },
        meaning:
          "If the scholars are right, the poet was making an argument as well as describing a storm. His neighbours said that the thunder belonged to Baal, and he answered that the thunder, the sea and the mountains all belong to the LORD, before whom even the gods must bow. In his last line he turns from power to gift, for he says that the God who breaks cedars gives his people strength and blesses them with peace.",
        tensions: [
          {
            claim:
              "The poet hears the LORD’s voice in the thunder, the wind and the fire of the storm.",
            counter:
              "The writer of 1 Kings tells how the prophet Elijah stood on a mountain through wind, earthquake and fire and found the LORD in none of them. Elijah heard him afterwards in a quiet voice.",
            where: "Psalm 29:3–9 · 1 Kings 19:11–13",
          },
        ],
        addr: {
          mode: "reframes",
          text: "You know what causes thunder, and the poet does not ask you to forget it. He asks you to stand before something far stronger than you are and to believe that the one who rules it means you well.",
        },
        ask: "When did you last stand before something much stronger than you, and what did you feel besides fear?",
        prayer: {
          mode: "meditate",
          text: "LORD, you are louder than anything I am afraid of. Give me the strength and the peace that you give your people.",
        },
      },
    ],
    find: {
      themes: ["powerlessness", "fear"],
      speaksTo:
        "For when the world feels far bigger than you are and you want to know who rules it.",
    },
  },
  "ps-30": {
    tier: "sitting",
    title: "Mourning into dancing",
    thread:
      "The poet has been close to death, probably through illness, and he has recovered. He looks back on how secure he once felt, on his terror when he lost that security, and on the argument he made to God for his life.",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "In their heading the editors assigned this song to the dedication of the temple, which is a strange fit for one person’s account of recovering from near death. Scholars think that a private thanksgiving was later adopted for a public festival, and Jewish communities still sing it at Hanukkah, the feast at which Jews remember the rededication of the temple in 164 BCE. Sheol and the Pit are names for the world of the dead.",
          src: "Westermann · Kraus · Craigie",
        },
        misreading: {
          named:
            "Readers often take “joy comes in the morning” as a promise that every sorrow will be short.",
          why: "The poet is giving thanks after the event and reporting what happened to him. He does not lay down a rule, and the writer of Psalm 88 ends his prayer still in the dark.",
        },
        meaning:
          "The poet tells his story in order. When life went well he told himself, “I will never be shaken.” He took his security for his own possession until God hid his face, and then he argued with God. He asked what God would gain from his death, since dust cannot praise anyone, and he meant the argument seriously, because most psalmists expected nothing beyond the grave. When he describes the rescue he makes God the subject of every verb. He did not climb out of his mourning. God took off his sackcloth and dressed him in joy.",
        lenses: {
          theo: "C.S. Lewis pointed out that most of the psalmists show little or no belief in a life after death. He thought that God taught Israel to desire him for his own sake first, before any hope of heaven could become the reason for seeking him.",
        },
        addr: {
          mode: "pray",
          text: "If you have come through something that you thought would finish you, the poet gives you words for your thanks. If you are still in the night, you may borrow his argument and tell God plainly why your life is worth saving.",
        },
        ask: "What did you say to God, or want to say, when you thought you might not come through?",
        prayer: {
          mode: "pray",
          text: "LORD my God, you lifted me when I could not lift myself. Do not let me forget the night now that the morning has come.",
        },
        inTextTurn: 11,
      },
    ],
    find: {
      themes: ["deliverance", "grief", "fear-of-loss"],
      speaksTo:
        "For when you have come through something you thought would end you, or you are still waiting for the morning.",
    },
  },
  "ps-31": {
    tier: "grounded",
    title: "Into Your hands",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David, and their note “For the choirmaster” is probably a direction to the leader of the temple musicians. The poet writes a lament in which he moves from distress to trust twice, once in verses 1–8 and again, at greater length, in verses 9–24. In verse 5 a living person hands his life to God for safekeeping, and Jewish tradition made the line part of the prayer said before sleep. Luke records it as the last thing Jesus said on the cross (Luke 23:46), and many Christians have prayed it on their deathbeds since.",
          src: "Mays · Craigie · Kraus",
        },
      },
    ],
  },
  "ps-32": {
    tier: "sitting",
    title: "When I kept silent",
    thread:
      "The poet begins by calling a forgiven person blessed, and then he explains how he learned it. He had done something wrong and had said nothing about it to God, and he grew weaker the longer he kept silent, until at last he confessed.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors named David in the heading and called the poem a maskil, a label they gave to thirteen psalms. The word is related to a Hebrew verb for having insight, so it may mean a song that teaches or a song made with skill, but no one knows for certain. The poet combines a thanksgiving with the kind of instruction found in Proverbs. In verse 8 someone promises to teach and to watch over the listener, and scholars are divided on whether the poet is speaking there or is quoting God.",
          src: "Kraus · Craigie · Mays",
        },
        misreading: {
          named:
            "Some readers conclude from verses 3 and 4 that a person who is ill or exhausted must be hiding a sin.",
          why: "The poet is describing what he himself suffered while he kept silent. He does not make a rule for other people, and the author of Job wrote a whole book against the friends who did.",
        },
        meaning:
          "The poet never says what he did. He describes instead what he suffered in his body while he hid it, with brittle bones and no more strength than a person has in summer heat. He spends two verses on the silence and only a line on the forgiveness, because God forgave him as soon as he spoke. He begins with the Hebrew word that the BSB translates “Blessed,” which is also the first word of Psalm 1. There the blessed person is the one who keeps to God’s teaching, and here he is the one who failed and was forgiven.",
        lenses: {
          theo: "The church counted this psalm as the second of seven penitential psalms, which Christians have prayed for centuries when confessing their sins. The apostle Paul quoted its first two verses in Romans 4 to argue that God forgives people as a gift and not as a wage they have earned.",
        },
        addr: {
          mode: "names",
          text: "Most people carry something that they have not said aloud, to God or to anyone else, and they spend a good deal of strength keeping it out of sight. The poet tells you that he suffered more from hiding than from confessing, and that once he stopped hiding from God he found that God was his hiding place.",
        },
        ask: "What are you keeping silent about, and what is the silence costing you?",
        prayer: {
          mode: "pray",
          text: "LORD, I have kept this from you long enough, though you know it already. I confess it now. Forgive me, and be my hiding place.",
        },
        inTextTurn: 5,
      },
    ],
    find: {
      themes: ["guilt", "shame", "starting-over"],
      speaksTo:
        "For when you are worn out from carrying something you have not admitted.",
    },
  },
};
