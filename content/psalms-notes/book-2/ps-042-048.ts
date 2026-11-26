import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book II, Psalms 42–48. Sittings: 42 (Psalms 42 and 43), 45, 46. The rest are grounded. "ps-42"
// holds Psalms 42 and 43, one poem with a shared refrain, as two passages.
export const PS_042_048: PsalmNotesMap = {
  "ps-42": {
    tier: "sitting",
    title: "Why are you downcast?",
    thread:
      "A singer from the temple in Jerusalem is living far to the north, and he can no longer go up to worship. He longs for God as a deer longs for water, and three times he stops and argues with his own sorrow in the same words.",
    passages: [
      {
        title: "As the deer pants",
        ground: {
          kind: "setting",
          text: "In the heading the editors credited this psalm to the sons of Korah, a guild of temple singers who traced their descent from the Levite Korah, the man who rebelled against Moses in Numbers 16. In Chronicles the Korahites serve as gatekeepers and singers at the sanctuary. The poet used one refrain across Psalms 42 and 43, and most scholars agree that he wrote them as one poem. He is far from Jerusalem, in the north, where Mount Hermon rises and the Jordan begins in springs and falls. No one has located Mount Mizar, and no one knows exactly what a Maskil was.",
          src: "Kraus · Craigie · Goldingay",
        },
        misreading: {
          named:
            "Many readers take the deer at the stream as a picture of calm devotion.",
          why: "The deer is panting because it has not found water, and the poet compares himself to an animal near collapse. He longs for God because he feels God’s absence, and he has wept for so long that he says his tears have become his food.",
        },
        meaning:
          "The poet speaks to God and quotes the taunts of his enemies, and in the refrain he speaks to himself. He asks his own soul why it is downcast, and he tells it to hope, because he will praise God again. He remembers leading the festival crowds to the temple, and he is hurt by the memory because he can no longer go. At verse 7 he turns the waterfalls around him into a picture of his grief, as though great waves had rolled over him, and he calls them God’s waves.",
        lenses: {
          theo: "C.S. Lewis, in Reflections on the Psalms, noticed that poets like this one did not separate their longing for God from their longing for the temple and its festivals, and he called their desire an appetite for God.",
        },
        addr: {
          mode: "pray",
          text: "The poet shows you that you may argue with your own despair. He does not pretend that his sorrow has gone, and he does not let it have the last word either, because three times he tells himself what he will yet do. You can say his refrain on a day when you feel nothing of God.",
        },
      },
      {
        title: "Send out Your light",
        ground: {
          kind: "genre",
          text: "Psalm 43 has no heading because the poet is finishing the poem that he began in Psalm 42, and he closes it with the same refrain. Here he stops describing his grief and asks for help. He asks God to judge his case against deceitful men, and he asks God to send light and truth to lead him home. The holy mountain is Zion, the hill in Jerusalem where the temple stood.",
          src: "Kraus · Craigie · Mays",
        },
        meaning:
          "The poet asks for light and truth to lead him, and he names the stages of the road home: the holy mountain, then the altar, and then to God himself, whom he calls his greatest joy. When he sings the refrain for the third time, nothing around him has changed, but he has said what he hopes for and where it ends.",
        ask: "What does your soul say to you on its worst days, and what would you say back?",
        prayer: {
          mode: "mantra",
          text: "Why are you downcast, O my soul? Put your hope in God.",
        },
      },
    ],
    find: {
      themes: ["god-feels-absent", "loneliness"],
      speaksTo:
        "For when you miss the nearness of God that you once knew and cannot find your way back to it.",
    },
  },
  "ps-44": {
    tier: "grounded",
    title: "Why are You sleeping?",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "In the heading the editors credited this psalm to the sons of Korah, a guild of temple singers who traced their descent from the Levite Korah, and they called it a Maskil, a term that no one can now explain. Scholars class it as a communal lament, a prayer spoken for the whole people after a defeat in battle. The singers first recall how God gave their ancestors the land, and then they describe their own rout and scattering. In verses 17 to 22 they insist that they have not betrayed God’s covenant. No one knows which defeat lay behind the psalm. Paul quotes verse 22 in Romans 8:36.",
          src: "Kraus · Craigie · Mays",
        },
      },
    ],
  },
  "ps-45": {
    tier: "sitting",
    title: "The king’s wedding",
    thread:
      "This is the only love song in the Psalter. A court poet sings for a king of Israel on his wedding day, and he praises first the king and then the bride who is being led into the palace to meet him.",
    passages: [
      {
        ground: {
          kind: "historical",
          text: "In the heading the editors credited the poem to the sons of Korah, the temple singers who traced their descent from the Levite Korah, and they called it a love song, a label that they gave to no other psalm. The poet was a court singer, and he wrote for the wedding of a king of Israel or Judah to a foreign princess. No one knows which king he meant. He speaks to the king in verses 2 to 9 and to the bride in verses 10 to 15. Myrrh, aloes and cassia were costly perfumes, Tyre was a rich Phoenician port, and Ophir was a distant land famous for its gold.",
          src: "Kraus · Craigie · Alter",
        },
        misreading: {
          named:
            "Many readers assume that the poet believed the king was God, because in verse 6 he says, “Your throne, O God.”",
          why: "In the next verse the poet says that “God, your God” anointed the king, so he sets the king beneath God even as he honors him. Court poets across the ancient world praised kings in exalted language, and Israel called its king the son of God, as the poet of Psalm 2 does. Scholars still debate how to translate the line.",
        },
        meaning:
          "The poet praises the king’s beauty and his strength, but he praises him most for riding out on behalf of truth, humility and justice, and for loving righteousness. He then tells the bride to forget her father’s house, because she is leaving her people for a new life. He ends by promising the king sons and a name that the nations will remember. He is singing at a real wedding, and he holds up before the groom the kind of king that Israel hoped for.",
        lenses: {
          theo: "The writer of Hebrews quotes verses 6 and 7 in Hebrews 1:8 and 9 as words spoken by God to his Son. From then on the church read the psalm as a song of Christ, and many readers have heard in the bride a picture of the church that Christ loves.",
        },
        addr: {
          mode: "reframes",
          text: "The poet asks you to see glory and goodness as belonging together. He cannot imagine a king who is splendid without being just, and Christians who sing his song of Christ hear in it a bridegroom whose beauty is his love of righteousness.",
        },
        ask: "If someone praised you for what you love rather than for what you have, what would they say?",
        prayer: {
          mode: "pray",
          text: "God, give those who rule us a love of righteousness and a hatred of wickedness, and teach me to love what they should love.",
        },
      },
    ],
    find: {
      themes: ["starting-over", "calling"],
      speaksTo:
        "For when you are celebrating a marriage, or leaving your father’s house to begin a life of your own.",
    },
  },
  "ps-46": {
    tier: "sitting",
    title: "A river in the city",
    thread:
      "The poet imagines the whole world coming apart, with the mountains falling into the sea and the nations at war, and he says that the people of God will not be afraid. Twice the people answer him with a refrain, that the LORD of Hosts is with them.",
    closeEnd:
      "Martin Luther wrote his hymn “A Mighty Fortress Is Our God” in the late 1520s as a free retelling of this psalm, and Protestants have sung it in hard times ever since.",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "The editors credited this psalm to the sons of Korah, temple singers who traced their descent from the Levite Korah, and they marked it “According to Alamoth,” a musical term that may mean for high voices. Scholars call it a song of Zion, a psalm in praise of Jerusalem, the city on Mount Zion where the temple stood. Jerusalem had no river, only a spring outside its walls. When the poet speaks of a river in the city, he is drawing on an old picture of a river that flows from God’s dwelling, which Ezekiel also uses. “Hosts” means armies.",
          src: "Kraus · Craigie · Mays",
        },
        misreading: {
          named:
            "Many readers hear “Be still” in verse 10 as an invitation to quiet meditation.",
          why: "God speaks in the middle of a war, and most scholars think that he is commanding the raging nations to stop fighting and to know who he is. His people can be calm because of that.",
        },
        meaning:
          "The poet sets two kinds of water against each other. He pictures the sea roaring and swallowing the mountains, which was the oldest picture of chaos that Israel knew, and he pictures the river flowing quietly through the city and gladdening it. He says that God is within the city, and that he will help her when morning comes.",
        addr: {
          mode: "pray",
          text: "The poet does not promise that the mountains will stay where they are. He says that God is with his people while they fall, and he invites you to come and see what God has done before you decide how afraid to be.",
        },
        ask: "What is shaking under you now, and where is your refuge in it?",
        prayer: {
          mode: "mantra",
          text: "The LORD of Hosts is with us; the God of Jacob is our fortress.",
        },
      },
    ],
    find: {
      themes: ["fear", "powerlessness"],
      speaksTo:
        "For when everything around you seems to be falling apart and you need somewhere steady to stand.",
    },
  },
  "ps-47": {
    tier: "grounded",
    title: "God has ascended",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to the sons of Korah, temple singers who traced their descent from the Levite Korah. Scholars call it an enthronement psalm, like Psalms 93 and 96 to 99, because the poet hails the LORD as king over all the earth. He calls every people to clap and shout, as crowds did at a coronation. Many scholars think it was sung in a festival procession, perhaps as the ark, the sacred chest of God’s presence, was carried up to the temple. That would explain verse 5, where God goes up to the sound of the ram’s horn. The church later read that verse as a picture of Christ’s ascension.",
          src: "Gunkel · Kraus · Mays",
        },
      },
    ],
  },
  "ps-48": {
    tier: "grounded",
    title: "Count her towers",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "The editors credited this song to the sons of Korah, temple singers who traced their descent from the Levite Korah. Scholars count it a song of Zion, in praise of Jerusalem, the city on Mount Zion where the temple stood. Zaphon was a northern mountain that the Canaanites called the home of their god Baal, so the poet gives a modest hill the honor that they gave their sacred peak. He tells of kings who marched on the city and fled, and some scholars connect this with the Assyrian retreat from Jerusalem in 701 BCE. At the end he sends pilgrims around the walls to count the towers.",
          src: "Kraus · Craigie · Goldingay",
        },
      },
    ],
  },
};
