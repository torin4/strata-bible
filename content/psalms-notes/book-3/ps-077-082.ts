import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book III, Psalms 77–82. Sitting: 82. The rest are grounded.
export const PS_077_082: PsalmNotesMap = {
  "ps-77": {
    tier: "grounded",
    title: "My soul refused to be comforted",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this lament to Asaph, the founder of a guild of temple musicians, and marked it “According to Jeduthun,” after another temple musician whom the writer of Chronicles names among David’s singers (1 Chronicles 25). In verses 1 to 10 the poet cannot sleep for his trouble, and he asks whether God’s loving devotion has gone forever. The Hebrew of verse 10 is obscure, and translators render it in different ways. From verse 11 the poet makes himself remember how God led Israel through the sea when they fled from Egypt (Exodus 14), in a storm of thunder and lightning, although no one could see God’s footprints.",
          src: "Tate · Kraus · Goldingay",
        },
      },
    ],
  },
  "ps-78": {
    tier: "grounded",
    title: "Tell the next generation",
    passages: [
      {
        ground: {
          kind: "historical",
          text: "The editors credited this long poem to Asaph, a temple musician, and called it a Maskil, a word whose meaning is uncertain, although it may mean a teaching song. The poet speaks as a teacher who wants children to learn from their fathers’ failures. He retells Israel’s history from the plagues in Egypt and the wilderness years to the day God abandoned Shiloh, the old sanctuary in the land of Ephraim, whose ark the Philistines captured (1 Samuel 4). He ends with God’s choice of the tribe of Judah, of Mount Zion in Jerusalem, and of David. Matthew quotes verse 2 when he describes Jesus teaching in parables (Matthew 13:35).",
          src: "Tate · Kraus · Mays",
        },
      },
    ],
  },
  "ps-79": {
    tier: "grounded",
    title: "Where is their God?",
    passages: [
      {
        ground: {
          kind: "historical",
          text: "The editors credited this lament to Asaph, a temple musician. The poet mourns that the nations have defiled God’s temple and reduced Jerusalem to rubble, and that the dead lie unburied around the city. As with Psalm 74, most scholars connect the poem with the Babylonian destruction of Jerusalem in 586 BCE (2 Kings 25). Verses 6 and 7 are close to Jeremiah 10:25, where the prophet prays the same prayer. The poet asks God not to hold the sins of earlier generations against his people, and he asks God to repay the mocking neighbors sevenfold, so that the nations will stop asking where Israel’s God is.",
          src: "Tate · Kraus · Hossfeld and Zenger",
        },
      },
    ],
  },
  "ps-80": {
    tier: "grounded",
    title: "Restore us, O God",
    passages: [
      {
        ground: {
          kind: "historical",
          text: "The editors credited this lament to Asaph and set it to a tune called “The Lilies of the Covenant,” which is now lost. The poet calls on God as the Shepherd of Israel, enthroned between the cherubim, the winged figures above the ark of the covenant, and he repeats the refrain “Restore us” three times. He pictures Israel as a vine that God brought out of Egypt and planted, whose walls God has now broken down. Because the poet names Ephraim, Benjamin and Manasseh, which were northern tribes, some scholars suggest that he wrote when Assyria conquered the northern kingdom in 722 BCE.",
          src: "Tate · Kraus · Goldingay",
        },
      },
    ],
  },
  "ps-81": {
    tier: "grounded",
    title: "If only My people would listen",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "The editors credited this psalm to Asaph and marked it “According to Gittith,” which may name an instrument or a tune from Gath, though no one is sure. The poet calls for the ram’s horn at the new moon and the full moon, and most scholars connect the festival with the Feast of Tabernacles, when Israel remembered the wilderness years. At verse 5 the poet hears a voice he did not know, and from verse 6 God speaks through him as a prophet. God recalls freeing Israel from slavery and testing them at Meribah, where they quarreled over water (Exodus 17), and he pleads with his people to listen.",
          src: "Tate · Kraus · Mays",
        },
      },
    ],
  },
  "ps-82": {
    tier: "sitting",
    title: "God among the gods",
    thread:
      "The poet pictures God judging the gods in a heavenly council. God sentences them to die like mortals because they have failed the weak and the fatherless, and then the poet asks God to judge the whole earth himself.",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "The editors credited this psalm to Asaph, a temple musician. The poet pictures God presiding over the divine assembly, a council of heavenly beings, and condemning its gods for failing the weak. Scholars debate who these gods are. Most now think they are the gods of the nations, while older readers took them as angels or as human judges. Jesus quotes verse 6 in John 10:34.",
          src: "Tate · Kraus · Mays",
        },
        meaning:
          "The poet makes justice for the weak the test even of gods. God condemns them for judging unjustly and favoring the wicked, and at the end the poet asks God himself to arise and judge the earth, since every nation belongs to him.",
        addr: {
          mode: "claims",
          text: "The poet will not let anyone with power hide behind rank, since even sons of the Most High will die like mortals if they fail the weak. He asks you to notice who is weak within your reach.",
        },
        ask: "Whose cause could you defend this week that no one else is defending?",
        prayer: {
          mode: "pray",
          text: "Arise, O God, judge the earth, and wherever I have power, make me defend the weak.",
        },
      },
    ],
    find: {
      themes: ["injustice", "powerlessness"],
      speaksTo:
        "For when those who should protect the weak have failed them, and you wonder whether anyone will judge.",
    },
  },
};
