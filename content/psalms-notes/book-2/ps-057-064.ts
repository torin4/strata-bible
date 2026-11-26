import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book II, Psalms 57–64. Sitting: 63. The rest are grounded.
export const PS_057_064: PsalmNotesMap = {
  "ps-57": {
    tier: "grounded",
    title: "I will awaken the dawn",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "The editors set this psalm “when he fled from Saul into the cave.” Saul, Israel’s first king, hunted David as a rival, and David hid in a cave at Adullam in 1 Samuel 22 and in another near En-gedi in 1 Samuel 24, where he spared Saul’s life. Most scholars think editors added the link later. No one knows exactly what “Miktam” or the tune “Do Not Destroy” meant. The poet begins with a lament and ends in praise, and he repeats a refrain in verses 5 and 11. Editors reused verses 7 to 11 as the opening of Psalm 108.",
          src: "Tate · Kraus · Alter",
        },
      },
    ],
  },
  "ps-58": {
    tier: "grounded",
    title: "Do you judge uprightly?",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David and marked it, like Psalm 57, with “Miktam” and the tune “Do Not Destroy,” terms whose exact meaning no one knows. The poet accuses those who judge unjustly. The Hebrew word that the BSB translates “rulers” is uncertain, and many scholars read it as “gods,” the heavenly beings whom the poet of Psalm 82 pictures as set over the nations and failing at their task. This is one of the harshest psalms. The poet asks God to break the teeth of the wicked, and he pictures the righteous washing their feet in their blood, since he can picture justice only as their defeat.",
          src: "Tate · Kraus · Goldingay",
        },
      },
    ],
  },
  "ps-59": {
    tier: "grounded",
    title: "Dogs at evening",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "The editors set this psalm on the night when King Saul sent men to watch David’s house, and David’s wife Michal let him down through a window so that he could escape, a story told in 1 Samuel 19. Most scholars think editors added that link later, since the poet also prays against “the nations,” which may mean that he first wrote it for a king facing foreign enemies. “Miktam” and “Do Not Destroy” are terms no one can now explain. The poet repeats two refrains, the enemies prowling like dogs in verses 6 and 14, and his praise of God as his fortress in verses 9 and 17.",
          src: "Tate · Kraus · Mays",
        },
      },
    ],
  },
  "ps-60": {
    tier: "grounded",
    title: "You have rejected us",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "The editors gave this psalm a long heading that names David’s wars with Aram, the Aramean kingdoms north of Israel, and a victory over Edom, the people south of the Dead Sea. The writer of 2 Samuel 8 tells of these wars, though his numbers differ from the heading’s, and the poet laments a defeat rather than a victory. No one knows what “Miktam” or “Shushan Eduth,” the tune the BSB calls “The Lily of the Covenant,” meant. In verses 6 to 8 God speaks, claiming Israel’s lands and the neighboring nations as his own. Editors reused verses 5 to 12 in Psalm 108.",
          src: "Tate · Kraus · Hossfeld and Zenger",
        },
      },
    ],
  },
  "ps-61": {
    tier: "grounded",
    title: "The rock that is higher than I",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this short prayer to David and marked it for stringed instruments. The poet calls to God “from the ends of the earth,” and scholars disagree whether he was far from Jerusalem or only felt as though he were, as a person in despair may feel. He asks to be led to a rock higher than himself and to live in God’s tent, which means the sanctuary. In verses 6 and 7 he prays for the king’s long life, and many scholars think either that a king prayed this psalm himself or that later worshipers added a prayer for their king.",
          src: "Tate · Kraus · Mays",
        },
      },
    ],
  },
  "ps-62": {
    tier: "grounded",
    title: "Rest in God alone",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David and added “According to Jeduthun,” the name of one of the temple musicians whom David appointed, according to 1 Chronicles 25. The poet writes a psalm of trust. He uses the Hebrew word for “alone” or “only” again and again, and he repeats his opening lines as a refrain in verses 5 and 6. He speaks to his enemies in verses 3 and 4 and to the people in verses 8 to 10. The word he uses for “vapor” in verse 9 is the word the writer of Ecclesiastes uses for the emptiness of life, and Paul echoes the last line in Romans 2:6.",
          src: "Tate · Kraus · Goldingay",
        },
      },
    ],
  },
  "ps-63": {
    tier: "sitting",
    title: "A dry and weary land",
    thread:
      "The poet is in a land without water, far from the temple, and he says that his whole body longs for God as a traveler there longs to drink. He remembers seeing God’s glory in the sanctuary and lies awake at night thinking of him, until he can say that his soul is satisfied.",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "The editors set this psalm “in the Wilderness of Judah,” the dry hill country between Jerusalem and the Dead Sea. David hid there from King Saul in 1 Samuel 23 and 24, and he crossed it fleeing his son Absalom in 2 Samuel 15. Most scholars think editors added the link later. The sanctuary is the temple in Jerusalem. In verse 11 the poet speaks of the king, and scholars think either that a king prayed this of himself or that a worshiper prayed for him.",
          src: "Tate · Kraus · Mays",
        },
        meaning:
          "The poet describes his longing as bodily thirst, and yet by verse 5 he says that he is satisfied, although nothing about his place has changed, because he has found God again in memory and in prayer through the night. In verses 9 to 11 he turns to the men who want him dead and says that they will fall by the sword and lie unburied for the jackals, which the BSB calls foxes. He is a hunted man, and he leaves the danger for God to end.",
        lenses: {
          theo: "The early church sang this psalm at the start of morning prayer, partly because in the ancient Greek translation of verse 1 the poet seeks God at dawn.",
        },
        addr: {
          mode: "pray",
          text: "The poet gives you words for a dry season, when God seems far and the places where you once met him are out of reach. He does not pretend that he is not thirsty, but he remembers and holds on through the night until he is fed.",
        },
        ask: "Where did you last see something of God clearly, and could you return to it in memory tonight?",
        prayer: {
          mode: "mantra",
          text: "My soul clings to you, and your right hand upholds me.",
        },
        inTextTurn: 9,
      },
    ],
    find: {
      themes: ["god-feels-absent", "loneliness"],
      speaksTo:
        "For when you feel far from God and from the places where you once found him, and you need words for the thirst.",
    },
  },
  "ps-64": {
    tier: "grounded",
    title: "Sharpened tongues",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David and gave it to the choirmaster, who probably directed the temple’s music. The poet writes a lament against people who plot against him in secret, and he describes their words as swords and arrows shot from hiding. In verse 7 he pictures God turning their own weapons on them, so that God shoots them “suddenly,” just as they shot “suddenly” at the innocent in verse 4. The Hebrew of verse 6 is difficult, and translators differ over it. The poet ends by calling the righteous to rejoice and take refuge in the LORD.",
          src: "Tate · Kraus · Craigie",
        },
      },
    ],
  },
};
