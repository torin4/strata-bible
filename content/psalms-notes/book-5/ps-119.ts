import type { PsalmNotesMap } from "@/content/psalms-notes/types";

// Book V, Psalm 119 in four readings of 22 eight-verse stanzas. All four are sittings:
// ps-119a (Aleph to He, 1–40), ps-119b (Waw to Kaph, 41–88), ps-119c (Lamedh to Ayin, 89–128),
// ps-119d (Pe to Taw, 129–176). Each stanza has a ground and a meaning; the last stanza of each
// reading carries its turn, ask and prayer.
export const PS_119: PsalmNotesMap = {
  "ps-119a": {
    tier: "sitting",
    title: "Open my eyes that I may see",
    thread:
      "The poet opens by blessing those who walk in God’s law and at once confesses that he wishes he did. Over five stanzas he asks God to keep him from straying, to open his eyes, to lift him from the dust and to turn his heart.",
    passages: [
      {
        ground: {
          kind: "genre",
          text: "Psalm 119 is the longest psalm, and it has no heading, so the editors named no author or occasion. It is an acrostic in twenty-two stanzas, one for each letter of the Hebrew alphabet, and all eight lines of each stanza begin with that stanza’s letter. In nearly every line the poet names God’s teaching by one of eight Hebrew words, which the BSB renders law, testimonies, precepts, statutes, commandments, judgments or ordinances, word, and promise. Most scholars date the psalm after the exile in Babylon.",
          src: "Allen · Kraus · Hossfeld and Zenger",
        },
        meaning:
          "The poet begins, as the poet of Psalm 1 does, by blessing those who walk in the Law of the LORD, and then he turns to himself. He wishes in verse 5 that his own ways were as steady, and he closes the stanza by asking God not to utterly forsake him.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet asks how a young man can keep his way pure, and he answers that he must guard it by God’s word. To hide that word in the heart, as he does in verse 11, means to learn it so well that it stays with him.",
          src: "Allen · Goldingay",
        },
        meaning:
          "The poet does not answer his own question with a list of things a young man must avoid. He answers with a love, for he says that he has sought God with all his heart and rejoices in God’s testimonies as much as in riches. He expects the word he has stored up to hold him when temptation comes, and he promises that he will not forget it.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet calls himself a stranger on the earth. The word he uses meant a resident foreigner, someone who lived in a land without owning any of it and had only the rights that others granted. Rulers are slandering him as well.",
          src: "Kraus · Allen",
        },
        meaning:
          "Because he has no settled place, the poet asks God not to hide his commandments from him, since God’s teaching is the one guide a stranger can count on. In verse 18 he asks God to open his eyes, because he believes that there are wondrous things in the law that he has not yet seen. While rulers slander him, he meditates, and he calls God’s testimonies his counselors.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet is brought low. When he says that his soul cleaves to the dust, he means that he is near death or utterly humbled, and when he says that it melts with sorrow, he means that grief has worn him out.",
          src: "Allen · Kraus · Goldingay",
        },
        meaning:
          "In this stanza the poet moves from lying in the dust to running. He asks God to revive him and strengthen him according to his word, and by verse 32 he says that he runs in the path of God’s commandments, because God will enlarge his heart. By a larger heart he means freedom and courage, and he expects God to give them to him as he goes.",
      },
      {
        ground: {
          kind: "setting",
          text: "In nearly every line of this stanza the poet makes a request, asking God to teach him, direct him and turn his heart. By covetous gain and worthless things he means wealth and empty pursuits that could draw him away.",
          src: "Allen · Mays",
        },
        meaning:
          "The poet does not trust himself to want the right things, so he asks God to turn his desires as well as his steps. He says in verse 35 that he finds delight in God’s path, and yet he still asks God to direct him into it.",
        addr: {
          mode: "pray",
          text: "The poet lets you admit that you are drawn toward worthless things, and he does not ask you to master your desires alone. He invites you to ask God to turn your heart and your eyes toward a way you would gladly walk.",
        },
        ask: "What worthless thing draws your eyes most often, and what would you ask God to turn them toward?",
        prayer: {
          mode: "mantra",
          text: "Turn my eyes away from worthless things; revive me with Your word.",
        },
      },
    ],
    find: {
      themes: ["temptation", "calling"],
      speaksTo:
        "For when you want to live well and are not sure that you can, or when your desires keep pulling you somewhere you do not want to go.",
    },
  },
  "ps-119b": {
    tier: "sitting",
    title: "It was good for me to be afflicted",
    thread:
      "The poet is mocked, bound and nearly killed, and over these six stanzas he moves from the comfort he finds in God’s promise to the lowest point of the whole poem. On the way he says that his affliction taught him, and at the end he asks how many days he must wait.",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet asks for God’s loving devotion, his faithful covenant love, and for the salvation God has promised. Someone taunts him, and he pictures himself speaking of God’s testimonies before kings. To walk in freedom, in verse 45, is literally to walk in a wide place.",
          src: "Allen · Kraus",
        },
        meaning:
          "The poet wants God’s love so that he will have an answer for the man who taunts him. He is not ashamed of what he trusts, and he imagines speaking of it before kings. He finds his freedom in keeping God’s precepts rather than in escaping them, and he lifts his hands to God’s commandments as a worshiper lifts them in prayer.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet remembers. He calls his life the house of his pilgrimage, meaning a lodging for someone passing through, and he says that God’s statutes have become songs to him there. The arrogant deride him, and he is angry at the wicked.",
          src: "Allen · Goldingay",
        },
        meaning:
          "The poet finds comfort in his affliction by remembering God’s promise and God’s judgments of old, by which he means what God has done and decided in the past. In the night he remembers God’s name. His rage at those who reject God’s law is honest, but he does not stay in it, and he turns back to the statutes that he sings on his journey.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet calls the LORD his portion. When Israel divided the land, the tribe of Levi received no share, because God was to be its inheritance (Deuteronomy 10:9). The ropes of the wicked in verse 61 may be snares or bonds.",
          src: "Kraus · Allen · Mays",
        },
        meaning:
          "Because the LORD is his portion, the poet needs no other share, and he responds by hurrying without hesitating to keep God’s commandments. Though the wicked bind him, he rises at midnight to give thanks. He counts as friends all who fear God, and he looks out on an earth that he sees as filled with God’s loving devotion.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet speaks about his own suffering, though he never says what it was. When he calls the hearts of the arrogant callous, his Hebrew word means fat like grease, a picture of hearts too thick to feel.",
          src: "Allen · Alter · Goldingay",
        },
        meaning:
          "In verse 71 the poet says something hard, that it was good for him to be afflicted. He does not call suffering good in itself. He says that before his affliction he went astray, and that in it he learned God’s statutes. He says this of his own past, looking back on it, and he does not tell anyone else that their pain is good for them.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet begins with his own making, saying that God’s hands made and fashioned him. In verse 75 he says that God afflicted him in faithfulness, and he prays that those who fear God will see him and rejoice.",
          src: "Allen · Kraus",
        },
        meaning:
          "The poet reasons that the God who made him can also teach him, and so he asks for understanding. He is thinking of others as well as himself, for he hopes that those who fear God will see him and rejoice, and that they will turn to him. He wants his life to show them that hoping in God’s word is not in vain.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet reaches the lowest point of the poem. He compares himself to a wineskin dried up by smoke, a leather bottle hung near the fire in a tent until it shrank and cracked. His persecutors have dug pits to trap him.",
          src: "Allen · Kraus · Alter",
        },
        meaning:
          "The poet faints and his eyes fail as he waits, and he asks God how many days he must go on. His enemies almost wiped him from the earth, and he can report only that he has not forsaken God’s precepts.",
        addr: {
          mode: "pray",
          text: "The poet gives you words for a long wait, when you feel dried out and your only question to God is how long. He does not pretend that the waiting is easy or nearly over. He shows you that you can cry for help and still hold on to what you trust.",
        },
        ask: "What are you waiting for God to do, and how long have you been waiting?",
        prayer: {
          mode: "pray",
          text: "When will You comfort me? I am worn out with waiting, but I have not forgotten Your statutes.",
        },
      },
    ],
    find: {
      themes: ["undeserved-suffering", "waiting"],
      speaksTo:
        "For when you have suffered for a long time, and you want to know what it might teach you and how much longer it will last.",
    },
  },
  "ps-119c": {
    tier: "sitting",
    title: "A lamp to my feet",
    thread:
      "The poet lifts his eyes from his troubles to God’s word fixed in the heavens, and he finds in it wisdom, sweetness and enough light for the next step. Snares and oppressors still surround him, and he ends by telling God that it is time to act.",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet looks up from his troubles to the heavens and the earth. He says that God’s word is firmly fixed in the heavens and that all things are God’s servants. In verse 96 he means that every human achievement, however complete, comes to an end.",
          src: "Allen · Kraus · Goldingay",
        },
        meaning:
          "The poet sets God’s word beside the earth that God established, and he finds both of them lasting. He says plainly that if he had not delighted in God’s law, he would have perished in his affliction. He has seen the limit of everything else that seemed perfect, and he holds to the one thing he has found to be without limit.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet speaks of love and wisdom. He claims more insight than his teachers and the elders, the older men whose counsel his people relied on, not because he is clever but because he meditates on God’s testimonies.",
          src: "Allen · Mays",
        },
        meaning:
          "When the poet cries out how he loves God’s law, he loves it as a man loves something sweet, sweeter than honey in his mouth. C.S. Lewis described the whole psalm as a deliberate pattern, worked slowly like embroidery, by a man who loved God’s law as one loves something ordered and beautiful. The poet’s delight in this stanza is that kind of love, and he credits it with making him wise.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet calls God’s word a lamp to his feet. In his world a small clay oil lamp lit only a few steps ahead on a dark path. To take his life in his hands, in verse 109, means to live in constant danger.",
          src: "Allen · Kraus",
        },
        meaning:
          "The poet does not claim to see the whole road by God’s word. He claims only enough light for his feet and his next steps, and that is enough for a man walking among the snares that the wicked have set for him. He has sworn to keep God’s judgments, and he calls God’s testimonies the joy of his heart.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet despises the double-minded, people whose loyalty is divided between God and something else. Dross, in verse 119, is the waste that a smelter skims off molten silver and throws away.",
          src: "Allen · Goldingay",
        },
        meaning:
          "The poet sets a whole heart against a divided one. He calls God his hiding place and his shield, and he asks God to uphold him. Yet he also trembles in awe of God, because he has seen God discard the wicked like dross, and he holds his love for God’s testimonies together with his fear of God’s judgments.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet pleads as a servant pleads with a master. When he asks God to ensure his well-being in verse 122, his Hebrew word means to stand surety for him, as one person guaranteed another’s debt.",
          src: "Allen · Kraus · Alter",
        },
        meaning:
          "The poet has done what is just and right, and he asks God to stand behind him against his oppressors. Because others have broken God’s law, he says in verse 126 that it is time for the LORD to act, and while he waits he loves God’s commandments more than the purest gold.",
        addr: {
          mode: "pray",
          text: "The poet lets you ask God to stand behind you when you are in the right and others hold the power. He invites you to tell God plainly that it is time for him to act.",
        },
        ask: "Where do you need someone to stand surety for you, and have you asked God to do it?",
        prayer: {
          mode: "mantra",
          text: "I am Your servant; give me understanding, that I may know Your testimonies.",
        },
      },
    ],
    find: {
      themes: ["limits", "fear"],
      speaksTo:
        "For when you cannot see far ahead, and you need enough light for the next step while danger is still close.",
    },
  },
  "ps-119d": {
    tier: "sitting",
    title: "Seek Your servant",
    thread:
      "The poet weeps over a law that no one obeys, prays through the night, and pleads his case before God as before a judge. After all his love for God’s law he ends not in triumph but by confessing that he has strayed like a lost sheep and asking God to seek him.",
    passages: [
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet longs and weeps. The unfolding of God’s words, in verse 130, is literally their opening, like a door opened to the light. In verse 135 he echoes the blessing in which the priests asked God to make his face shine on Israel (Numbers 6:25).",
          src: "Allen · Kraus",
        },
        meaning:
          "The poet pants for God’s commandments like a man out of breath. He asks God to order his steps and to let no sin rule over him, so he knows that the danger lies in himself as well as in his oppressors. In verse 136 he weeps, not for his own trouble, but because God’s law is not obeyed.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet praises God’s righteousness. When he says that his zeal has consumed him, he means that his passion for God has worn him out, as another poet said of his zeal for God’s house (Psalm 69:9).",
          src: "Allen · Goldingay",
        },
        meaning:
          "The poet is lowly and despised, and trouble and distress have found him, yet he calls God’s promise completely pure, like metal refined in the fire, and he calls God’s commandments his delight. He sets his own smallness beside God’s righteousness, which he says is everlasting.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet prays through the night. The watches of night were the divisions into which Israel split the hours of darkness, as soldiers on guard did, and he wakes before each one to meditate. The wicked are drawing near to him.",
          src: "Allen · Kraus",
        },
        meaning:
          "The poet cries with all his heart, before dawn and through the night, and he asks God to hear him. Those who follow after wickedness are drawing near, but he answers that God is nearer, for in verse 151 he says, “You are near, O LORD.” Long ago he learned that God’s testimonies are established forever.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet speaks in the language of a law court. When he asks God to defend his cause and redeem him in verse 154, he asks God to plead his case and to act as his redeemer, the near kinsman who bought back a relative’s land or freedom.",
          src: "Allen · Kraus · Mays",
        },
        meaning:
          "Three times the poet asks God to revive him or give him life, and each time he grounds the request in something of God’s, his word, his ordinances and his loving devotion. He looks on the faithless with loathing, but he ends with the claim that the entirety of God’s word is truth, and that God’s judgments endure forever.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this stanza the poet speaks of peace and praise. Seven times a day, in verse 164, is a way of saying constantly or completely, since seven was a number of fullness. Rulers persecute him without cause.",
          src: "Allen · Goldingay",
        },
        meaning:
          "Though rulers persecute him, the poet says that his heart fears only God’s word, and he rejoices in God’s promise like a soldier who finds great spoil after a battle. He says that abundant peace belongs to those who love God’s law, and that nothing can make them stumble. He hopes and obeys at once, waiting for God’s salvation while he carries out God’s commandments.",
      },
      {
        ground: {
          kind: "setting",
          text: "In this last stanza the poet asks God again and again to hear, help and rescue him. In verse 176 he calls himself a lost sheep, the picture a shepherd people used for anyone who had wandered from the flock.",
          src: "Allen · Kraus · Mays",
        },
        meaning:
          "After 175 verses of love for God’s law, the poet ends not in triumph but in a plea. He confesses that he has strayed like a lost sheep and asks God to seek him. He has not forgotten God’s commandments, yet he knows that only God can bring him back.",
        addr: {
          mode: "pray",
          text: "The poet lets you end where he ends, having loved what is good and still wandered. He does not ask you to find your own way back. He invites you to say that you are lost and to ask God to come and find you.",
        },
        ask: "Where have you wandered while still remembering the way, and what would it mean to let God seek you?",
        prayer: {
          mode: "mantra",
          text: "I have strayed like a lost sheep; seek Your servant.",
        },
      },
    ],
    find: {
      themes: ["guilt", "deliverance"],
      speaksTo:
        "For when you have loved what is good and still wandered, and you need someone to come and find you.",
    },
  },
};
