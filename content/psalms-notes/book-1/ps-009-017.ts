import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book I, Psalms 9–17. Sitting: 13. The rest are grounded. "ps-9" holds Psalms 9 and 10, one
// acrostic poem, as two passages.
export const PS_009_017: PsalmNotesMap = {
  "ps-9": {
    tier: "grounded",
    title: "The needy will not always be forgotten",
    passages: [
      {
        title: "A stronghold in times of trouble",
        ground: {
          kind: "genre",
          text: "In the heading the editors name David and add a direction to the choirmaster, which the BSB’s translators take to be the name of a tune. The Hebrew is obscure, and no one knows what it referred to. Psalms 9 and 10 were probably written as one poem. The poet built them as a single acrostic, in which roughly every second verse begins with the next letter of the Hebrew alphabet, and the translators of the Septuagint, the ancient Greek version, counted them as one psalm. In this first half the poet thanks the LORD for judging the nations and sheltering the oppressed. Higgaion, in verse 16, was probably a musical direction.",
          src: "Craigie · Kraus · Goldingay",
        },
      },
      {
        title: "Why do You stand far off?",
        ground: {
          kind: "genre",
          text: "Psalm 10 has no heading because the poet is continuing the poem that he began in Psalm 9, and a later chapter break divided it. He resumes the acrostic here, although several letters are missing from the middle section. Having given thanks for God’s justice, he now writes a lament, a prayer of complaint, and he asks why the LORD stands far off while a wicked man hunts the poor. He describes that man at length as someone who has decided that God will never call him to account. In the last three verses he returns to the confidence of Psalm 9.",
          src: "Craigie · Kraus · Goldingay",
        },
      },
    ],
  },
  "ps-11": {
    tier: "grounded",
    title: "Flee like a bird",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors assign this psalm to David and to the choirmaster, and they give no occasion. Scholars class it as a psalm of trust, in which the poet declares his confidence in God instead of asking for help. A reader needs to know who is speaking in each part. In verses 1 to 3 the poet quotes his advisers, who urge him to run for the hills because the wicked are aiming at him from the dark and the order of society is collapsing. From verse 4 he gives his own reply, which is that the LORD still sits enthroned and still watches everyone.",
          src: "Gunkel · Craigie · Mays",
        },
      },
    ],
  },
  "ps-12": {
    tier: "grounded",
    title: "Flattering lips",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors name David and add the direction “According to Sheminith,” a musical term that no one can now explain. Most scholars read the psalm as a lament spoken for a whole community, because the poet says “us” in verse 7. He complains that honest speech has disappeared and that liars now hold power. In verse 5 God speaks, and many scholars think that a priest or prophet delivered such an answer aloud during worship. The poet then contrasts the LORD’s words, which are as pure as refined silver, with the flattery around him.",
          src: "Kraus · Craigie · Mays",
        },
      },
    ],
  },
  "ps-13": {
    tier: "sitting",
    title: "How long?",
    thread:
      "The poet has been in trouble for a long time, and he has begun to think that God has forgotten him. He says so to God directly, and then he asks for help before it is too late. In the last two verses he speaks of trust, although nothing that he has described has changed.",
    closeEnd:
      "The poet ends by promising a song of thanks before he has received what he asked for.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors name David but give no occasion, and the poet never says what his trouble is. Scholars call this psalm an individual lament, and they often teach it as the plainest example of the type, because the poet moves through its three usual parts in six verses: complaint, request and trust. When he asks God to give light to his eyes, he is asking to be kept alive.",
          src: "Westermann · Mays · Craigie",
        },
        misreading: {
          named:
            "Many readers assume that a person of real faith would never accuse God of forgetting him.",
          why: "The poet brings his complaint to God and to no one else, which is itself an act of trust, and Israel’s editors kept his words as a prayer for others to use.",
        },
        meaning:
          "The poet asks “How long?” four times, as a person asks who has waited so long that he doubts an answer will come. At verse 5 he turns and says that he has trusted in God’s “loving devotion,” which is the BSB’s phrase for the loyal love that God had pledged to Israel. Nothing in his situation has changed between verse 4 and verse 5. He chooses to trust while his enemy is still winning, and he rests that choice on what God has done for him before.",
        addr: {
          mode: "pray",
          text: "The poet shows that you may tell God how long you have waited, and that you may ask whether God has forgotten you. He also shows that you can declare your trust before you feel any relief.",
        },
        ask: "What have you waited for so long that you have stopped mentioning it to God?",
        prayer: {
          mode: "pray",
          text: "LORD, I have waited a long time. Look at me and answer me, and help me to trust you until you do.",
        },
        inTextTurn: 5,
      },
    ],
    find: {
      themes: ["god-feels-absent", "waiting"],
      speaksTo:
        "For when you have prayed about the same trouble for a long time and have begun to wonder whether God has forgotten you.",
    },
  },
  "ps-14": {
    tier: "grounded",
    title: "The fool says in his heart",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors assign this psalm to David. They included it in the Psalter again, almost word for word, as Psalm 53, probably because each copy came to them in a separate collection. The “fool” of verse 1 is not a philosopher who has reasoned his way to atheism. The Hebrew word is nabal, and the poet means by it a person who lives as though God will never hold him to account. Many think that the last verse is a prayer added later, when the people of Judah were living in exile in Babylon.",
          src: "Kraus · Craigie · Mays",
        },
      },
    ],
  },
  "ps-15": {
    tier: "grounded",
    title: "A guest in God’s tent",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors call this a psalm of David. Many scholars read it as an entrance liturgy, a short exchange in which a pilgrim arriving at the temple gate asked who might come in and a priest gave the answer. Psalm 24 contains a similar exchange. The “tent” and the “holy mountain” both mean the temple on Mount Zion in Jerusalem. The speaker who answers in verses 2 to 5 says nothing about sacrifice or ritual purity, and he lists only how a person treats his neighbors. Israel’s law forbade lending at interest to a fellow Israelite in need, which explains why the speaker counts it here beside bribery.",
          src: "Gunkel · Kraus · Craigie",
        },
      },
    ],
  },
  "ps-16": {
    tier: "grounded",
    title: "My chosen portion",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors call this “A Miktam of David.” They used the word again above Psalms 56 to 60, and no one knows what it means. Scholars class the psalm as a song of trust. In verses 5 and 6 the poet borrows the language of Israel’s land, which was divided among the tribes by lot and measured out with lines, and he says that his own share is the LORD. Sheol, in verse 10, is the place of the dead. Most scholars think that the poet was trusting God to keep him from an early death, while the first Christians read the verse as a promise of resurrection.",
          src: "Kraus · Craigie · Mays",
        },
      },
    ],
  },
  "ps-17": {
    tier: "grounded",
    title: "The shadow of Your wings",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors headed this poem “A prayer of David,” a label that they gave to only a few psalms. Scholars read it as the lament of a falsely accused person who asks God to judge his case. When he says that God has tested him and found no evil, he is claiming to be innocent of the charge, and he is not claiming a sinless life. Some scholars think that an accused person spent the night in the temple and waited for God’s verdict in the morning, which would explain the night in verse 3 and the waking in verse 15. The “apple” of the eye is the pupil.",
          src: "Kraus · Craigie · Goldingay",
        },
      },
    ],
  },
};
