import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book II, Psalms 49–56. Sittings: 49, 51. The rest are grounded.
export const PS_049_056: PsalmNotesMap = {
  "ps-49": {
    tier: "sitting",
    title: "No ransom for a life",
    thread:
      "The poet does not pray in this psalm. He calls on everyone in the world, rich and poor alike, to listen while he works out a riddle, and his answer is that no fortune can buy a person out of death. For that reason, he says, the rich have nothing that anyone else needs to fear.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to the sons of Korah, a guild of temple singers who traced their family to Korah, a Levite of Moses’ time. The poet writes a wisdom poem of the kind found in Proverbs and Job, and in verse 4 he calls it a proverb and a riddle. He speaks to the whole world rather than to God. Sheol is the Hebrew name for the place of the dead, which most psalmists pictured as a silent land beneath the earth. The refrain in verses 12 and 20 differs by one Hebrew word, so that the poet ends by blaming wealth without understanding rather than wealth itself.",
          src: "Kraus · Craigie · Alter",
        },
        meaning:
          "The poet asks why he should be afraid of men who trust in their riches. He answers that no one can pay God a ransom for his own life or his brother’s, since wise men and fools both die and leave their money to others. In verse 15 he sets himself apart and says that God will redeem his life from Sheol and take him. Scholars disagree about how far he means this. Some think he hopes only to be spared an early death. Others point out that “take” is the verb used in Genesis 5:24 of Enoch, whom God took without his dying, and they think the poet hopes for something beyond the grave.",
        lenses: {
          theo: "C.S. Lewis observed that most of the psalmists expected death to end a person’s life with God, and he thought it fitting that Israel learned to want God for his own sake before any hope of heaven could become the reason for wanting him. Christians have read verse 15 in the light of the resurrection.",
        },
        tensions: [
          {
            claim:
              "The poet trusts that God will redeem his life from Sheol, although the foolish rich go down to it like sheep.",
            counter:
              "The Teacher of Ecclesiastes says that people and animals share one fate and go to one place, and he asks who knows whether a human spirit rises upward.",
            where: "Psalm 49:12–15 · Ecclesiastes 3:19–21",
          },
        ],
        addr: {
          mode: "claims",
          text: "The poet tells you that you need not envy or fear people who have more than you, because death will take from them everything that made them seem strong. He also warns you that riches held without understanding will make you like the beasts, which live and die without asking what their lives were for.",
        },
        ask: "What would you stop fearing, or stop wanting, if you believed that you could carry nothing away?",
        prayer: {
          mode: "pray",
          text: "God, I cannot pay the ransom for my life, and nothing I own will follow me down. Redeem me, and take me to yourself.",
        },
        inTextTurn: 15,
      },
    ],
    find: {
      themes: ["fear-of-loss", "ambition"],
      speaksTo:
        "For when other people’s wealth makes you anxious or envious, and you need to remember what death does to every fortune.",
    },
  },
  "ps-50": {
    tier: "grounded",
    title: "The cattle on a thousand hills",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to Asaph, whom the writer of 1 Chronicles names as one of the chief singers David appointed, and whose name later stood for a guild of temple singers. The other eleven psalms of Asaph are Psalms 73 to 83. The poet stages a trial, as the prophets often did. God comes from Zion, the hill of the temple in Jerusalem, and calls heaven and earth as witnesses against his own people. He does not reject their sacrifices, but he tells them that he needs no food from them and wants their thanks. Then he accuses those who recite his covenant and break it.",
          src: "Craigie · Kraus · Mays",
        },
      },
    ],
  },
  "ps-51": {
    tier: "sitting",
    title: "A clean heart",
    thread:
      "The editors linked this prayer to the worst moment in David’s life, when the prophet Nathan confronted him with his adultery and with the murder that followed it. The poet makes no excuse for himself. He asks God to wash him, and then he asks for something harder, which is a heart made new.",
    closeEnd:
      "Many scholars think that a later writer added the last two verses, a prayer for the walls of Jerusalem, after the Babylonians destroyed the city in 586 BCE, so that the people of Judah could make this confession their own.",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "In the heading the editors tied this psalm to the story told in 2 Samuel 11 and 12. King David slept with Bathsheba, the wife of his soldier Uriah, and when she became pregnant he arranged for Uriah to be killed in battle. The prophet Nathan then told David a parable about a rich man who stole a poor man’s only lamb, and David condemned himself. Most scholars think editors added this link later, and the poet himself names no particular sin. He writes a prayer of confession, and the church counted it the fourth of the seven penitential psalms.",
          src: "Tate · Kraus · Mays",
        },
        misreading: {
          named:
            "Some readers take verse 4, “Against You, You only, have I sinned,” to mean that the wrong done to Uriah and Bathsheba does not count, as though sin were a private matter between a person and God.",
          why: "In verse 14 the poet asks to be delivered from bloodguilt, which is guilt for a death, so he knows that he has harmed people. He means that every wrong against them was also a wrong against God, who judges it, and in 2 Samuel 12 Nathan holds David to account for Uriah by name.",
        },
        meaning:
          "The poet uses three words for what he has done, which are transgressions, iniquity and sin, and three for what he asks God to do, which are blot out, wash and cleanse. When he says in verse 5 that he was sinful from his conception, he means that his fault runs deeper than a single act. Priests used the plant hyssop to sprinkle water on people who were being made clean. In verse 10 the poet asks God to create a clean heart, and in the Old Testament only God is ever the subject of that verb, because only God can make a person new.",
        lenses: {
          theo: "Augustine and the Western church after him read verse 5 as evidence that every human being inherits a sinful nature, while many Jewish readers take it as the poet’s way of saying how deep his own fault runs. Churches have long prayed this psalm on Ash Wednesday, and it is often called by its first word in Latin, Miserere.",
        },
        addr: {
          mode: "pray",
          text: "The poet gives you words for the day when you can no longer pretend that you have not done what you did. He does not ask God to overlook it. He asks to be washed, and then he asks to be made into someone who would not do it again.",
        },
        ask: "What would you have to stop defending before you could pray this psalm honestly?",
        prayer: {
          mode: "pray",
          text: "Have mercy on me, O God. I know what I have done. Wash me, and create in me a clean heart.",
        },
      },
    ],
    find: {
      themes: ["guilt", "shame", "starting-over"],
      speaksTo:
        "For when you have done real harm to someone and need words to confess it without excuse.",
    },
  },
  "ps-52": {
    tier: "grounded",
    title: "An olive tree in God’s house",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "In the heading the editors tied this psalm to 1 Samuel 21 and 22. Doeg, an Edomite who was King Saul’s chief herdsman, saw the priest Ahimelech give food and a sword to David while David was fleeing from Saul, and he reported it. At Saul’s order Doeg then killed eighty-five priests and the people of their town, Nob. Most scholars think the link was made later, since the poet describes a rich man who lies, and Doeg is not said to have lied. The poet denounces this man and foresees his fall, and he compares himself to an olive tree flourishing in the house of God.",
          src: "Tate · Kraus · Alter",
        },
      },
    ],
  },
  "ps-53": {
    tier: "grounded",
    title: "The fool says it again",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "This psalm is Psalm 14 almost word for word, with one change made throughout. Where the poet of Psalm 14 used the divine name, which the BSB prints as “the LORD,” the editor of this copy wrote elohim, the general Hebrew word for God. Scholars call Psalms 42 to 83 the Elohistic Psalter because an editor seems to have made the same change across them. Verse 5 also differs from Psalm 14:5 and 6, and some scholars think a later singer reworked it to celebrate the defeat of an army. The “fool” is nabal in Hebrew, a person who lives as though God will never call him to account.",
          src: "Tate · Kraus · Hossfeld and Zenger",
        },
      },
    ],
  },
  "ps-54": {
    tier: "grounded",
    title: "Save me by Your name",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "In the heading the editors tied this psalm to 1 Samuel 23 and 26, where the people of Ziph, a town in the wilderness of Judah, twice told Saul where David was hiding. Most scholars think the link was added later, and the poet speaks only of strangers and ruthless men. He prays a short lament in two halves. In verses 1 to 3 he asks for help, and from verse 4 on he speaks as though God has already helped him. When he asks to be saved by God’s name, he means by God himself, as God has made himself known to Israel.",
          src: "Tate · Kraus · Mays",
        },
      },
    ],
  },
  "ps-55": {
    tier: "grounded",
    title: "Wings like a dove",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "The editors credited this psalm to David but named no occasion for it. The poet prays a lament about a city full of violence, and about a betrayal that wounds him more than the violence does, because the man who turned on him was his close friend, with whom he once walked to the house of God. Some older readers connected the friend with Ahithophel, David’s counselor who joined Absalom’s revolt in 2 Samuel 15 to 17, but the poet names no one. He moves back and forth between terror, curses and trust. Sheol is the Hebrew name for the place of the dead.",
          src: "Tate · Kraus · Goldingay",
        },
      },
    ],
  },
  "ps-56": {
    tier: "grounded",
    title: "Tears in Your bottle",
    passages: [
      {
        ground: {
          kind: "occasion",
          text: "In the heading the editors tied this psalm to 1 Samuel 21, where David fled from Saul to Gath, a Philistine city and the home of Goliath, and pretended to be mad so that its king would let him go. They also named a tune, “A Dove on Distant Oaks,” and called the psalm a miktam, a term whose meaning is lost. Most scholars think the link to David was made later. The poet prays a lament with a refrain of trust in verses 4 and 10 to 11, and in verse 8 he asks God to keep his tears in a bottle, as one keeps something precious.",
          src: "Tate · Kraus · Alter",
        },
      },
    ],
  },
};
