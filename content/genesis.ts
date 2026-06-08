import type { Movement, Reading } from "@/lib/types";

// Genesis 1-15, migrated from the prototype's SITTINGS/GEN objects by migrate.js.
// Content is reshaped, not rewritten. 15 readings.
// Sittings carry full four-layer passages; grounded chapters carry clean text + ground
// note, with meaning/turn/ask intentionally empty for the companion to draft.

export const GENESIS: Reading[] = [
  {
    id: 'gen-1',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 1',
    chapterIndex: 1,
    title: 'Creation',
    unitLabel: 'Day',
    thread: 'The exiles open their story by answering Babylon. Where the empire’s gods made the world through war, here one God speaks it into being, and calls it good.',
    closeMid: 'There was evening and there was morning.',
    closeEnd: 'That is the seventh day. The creation account is complete.',
    passages: [
      {
        label: 'One',
        ref: '1:1–5',
        kind: 'scene',
        form: 'prose',
        title: 'The light',
        verses: [
          {
            n: 1,
            text: 'In the beginning God created the heavens and the earth.'
          },
          {
            n: 2,
            text: 'Now the earth was formless and void, and darkness was over the surface of the deep. And the Spirit of God was hovering over the surface of the waters.'
          },
          {
            n: 3,
            text: 'And God said, “Let there be light,” and there was light.'
          },
          {
            n: 4,
            text: 'And God saw that the light was good, and He separated the light from the darkness.'
          },
          {
            n: 5,
            text: 'God called the light “day,” and the darkness He called “night.” And there was evening, and there was morning—the first day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Priests wrote this during the Babylonian exile, around the 500s BCE. Their conquerors had a creation story in which the world was made through a war between gods. Genesis answers it: one God makes everything by speaking. No battle, no rival.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Wellhausen · the Enuma Elish'
        },
        meaning: 'God creates by <b>speaking</b>, not by force. And light is made on day one, before the sun on day four, so this "light" is really the first act of separating one thing from another. God calls it <b>good</b> before any human exists to use it. Creation is good in itself.',
        lenses: {
          theo: 'In the traditional reading the key word is <b>good</b>, said before any human exists or anything is useful. So the world is good in itself, a gift, not something earned. That is the floor the rest of the Bible stands on. (Heschel, God in Search of Man.)',
          arch: 'Following Carl Jung, some readers hear creation stories as describing the human mind. The claim: becoming self-aware means learning to tell things apart, so awareness is the act of making distinctions. Genesis 1 matches that, formless dark, then light, then a run of separating. (Neumann, Origins and History of Consciousness.)'
        },
        addr: {
          mode: 'names',
          text: 'There is probably something in your life that feels unformed or stuck, waiting on you to act.'
        },
        soft: 'Genesis says creation began not with force, but with a decision said out loud.',
        ask: 'What is one thing you could decide and say out loud this week?'
      },
      {
        label: 'Two',
        ref: '1:6–8',
        kind: 'scene',
        form: 'prose',
        title: 'The sky',
        verses: [
          {
            n: 6,
            text: 'And God said, “Let there be an expanse between the waters, to separate the waters from the waters.”'
          },
          {
            n: 7,
            text: 'So God made the expanse and separated the waters beneath it from the waters above. And it was so.'
          },
          {
            n: 8,
            text: 'God called the expanse “sky.” And there was evening, and there was morning—the second day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Ancient readers pictured the sky as a solid dome holding back an ocean above, with rain falling through its windows. Genesis uses that shared picture, but with no gods in it, only God making room.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Keel · Walton'
        },
        meaning: 'The act here is <b>separation, making space</b>. God holds the waters back to open a livable middle. Order isn’t control for its own sake. It’s carving out room for life.',
        addr: {
          mode: 'names',
          text: 'Living things need space that something has to hold open for them.'
        },
        soft: 'Sometimes the loving move is a boundary, not more activity.',
        ask: 'Where do you need to make space, or hold a line, so something can breathe this week?'
      },
      {
        label: 'Three',
        ref: '1:9–13',
        kind: 'scene',
        form: 'prose',
        title: 'Land and green',
        verses: [
          {
            n: 9,
            text: 'And God said, “Let the waters under the sky be gathered into one place, so that the dry land may appear.” And it was so.'
          },
          {
            n: 10,
            text: 'God called the dry land “earth,” and the gathering of waters He called “seas.” And God saw that it was good.'
          },
          {
            n: 11,
            text: 'Then God said, “Let the earth bring forth vegetation: seed-bearing plants and fruit trees, each bearing fruit with seed according to its kind.” And it was so.'
          },
          {
            n: 12,
            text: 'The earth produced vegetation: seed-bearing plants according to their kinds and trees bearing fruit with seed according to their kinds. And God saw that it was good.'
          },
          {
            n: 13,
            text: 'And there was evening, and there was morning—the third day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Notice the design: days one to three build the realms (light, sky, land), days four to six fill them. It’s structured like a poem, not a lab report.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Wenham'
        },
        meaning: 'God says, “Let the earth bring forth.” He doesn’t make the plants directly. He <b>invites the ground to bring them out</b>. Creation is handed the power to keep creating.',
        addr: {
          mode: 'names',
          text: 'Some things can’t be forced into being. You can only make the conditions and let them grow.'
        },
        soft: 'Not everything needs you to do it. Some things need you to let them.',
        ask: 'What have you been trying to force that might just need room and time?'
      },
      {
        label: 'Four',
        ref: '1:14–19',
        kind: 'scene',
        form: 'prose',
        title: 'The lights',
        verses: [
          {
            n: 14,
            text: 'And God said, “Let there be lights in the expanse of the sky to distinguish between the day and the night, and let them be signs to mark the seasons and days and years.'
          },
          {
            n: 15,
            text: 'And let them serve as lights in the expanse of the sky to shine upon the earth.” And it was so.'
          },
          {
            n: 16,
            text: 'God made two great lights: the greater light to rule the day and the lesser light to rule the night. And He made the stars as well.'
          },
          {
            n: 17,
            text: 'God set these lights in the expanse of the sky to shine upon the earth,'
          },
          {
            n: 18,
            text: 'to preside over the day and the night, and to separate the light from the darkness. And God saw that it was good.'
          },
          {
            n: 19,
            text: 'And there was evening, and there was morning—the fourth day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'In Babylon the sun and moon were gods, Shamash and Sin. Genesis refuses to name them. It calls them only “the greater” and “the lesser light,” demoted to lamps and clocks. The stars, the heart of Babylonian astrology, get an afterthought: “And He made the stars as well.” A deliberate snub.',
          src: 'Smith, The Origins of Biblical Monotheism · The Priestly Vision of Genesis 1'
        },
        meaning: 'The sky is <b>switched off as a set of powers</b>. The lights don’t rule your fate. They keep time. You are not at the mercy of the heavens.',
        lenses: {
          arch: 'Read as psychology, this is awareness bringing even the sky to order: the heavens become something measured and known rather than feared. (Neumann, Origins and History of Consciousness.)'
        },
        addr: {
          mode: 'names',
          text: 'Most of us let something quietly govern us. Fear, other people’s opinions, the markets, what the future might do.'
        },
        soft: 'Genesis takes the things people worshipped and turns them into furniture.',
        ask: 'What have you been treating like a god that’s really just a lamp? What changes if you demote it?'
      },
      {
        label: 'Five',
        ref: '1:20–23',
        kind: 'scene',
        form: 'prose',
        title: 'Swarming life',
        verses: [
          {
            n: 20,
            text: 'And God said, “Let the waters teem with living creatures, and let birds fly above the earth in the open expanse of the sky.”'
          },
          {
            n: 21,
            text: 'So God created the great sea creatures and every living thing that moves, with which the waters teemed according to their kinds, and every winged bird after its kind. And God saw that it was good.'
          },
          {
            n: 22,
            text: 'Then God blessed them and said, “Be fruitful and multiply and fill the waters of the seas, and let birds multiply on the earth.”'
          },
          {
            n: 23,
            text: 'And there was evening, and there was morning—the fifth day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Notice “the great sea creatures.” Elsewhere in the ancient world those are dread chaos-monsters. Here they’re just animals God makes and calls good. The monsters get demythologized too.',
          src: 'Smith, The Priestly Vision of Genesis 1 · John Day, God’s Conflict with the Dragon and the Sea'
        },
        meaning: 'The <b>first blessing</b> in the Bible lands here: be fruitful, multiply, fill. Life is given the power to make more life. The note is abundance, not scarcity.',
        addr: {
          mode: 'names',
          text: 'The first thing God blesses is increase. More life, given freely.'
        },
        soft: 'It’s easy to live as if everything is scarce and has to be guarded.',
        ask: 'Where could you act from abundance instead of fear this week?'
      },
      {
        label: 'Six',
        ref: '1:24–31',
        kind: 'scene',
        form: 'prose',
        title: 'The image',
        verses: [
          {
            n: 24,
            text: 'And God said, “Let the earth bring forth living creatures according to their kinds: livestock, land crawlers, and beasts of the earth according to their kinds.” And it was so.'
          },
          {
            n: 25,
            text: 'God made the beasts of the earth according to their kinds, the livestock according to their kinds, and everything that crawls upon the earth according to its kind. And God saw that it was good.'
          },
          {
            n: 26,
            text: 'Then God said, “Let Us make man in Our image, after Our likeness, to rule over the fish of the sea and the birds of the air, over the livestock, and over all the earth itself and every creature that crawls upon it.”'
          },
          {
            n: 27,
            text: 'So God created man in His own image; in the image of God He created him; male and female He created them.'
          },
          {
            n: 28,
            text: 'God blessed them and said to them, “Be fruitful and multiply, and fill the earth and subdue it; rule over the fish of the sea and the birds of the air and every creature that crawls upon the earth.”'
          },
          {
            n: 31,
            text: 'And God looked upon all that He had made, and indeed, it was very good. And there was evening, and there was morning—the sixth day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'In the ancient Near East, the king was called the “image” of a god, a living stand-in for divine authority. Genesis takes that royal title and gives it to every human being, male and female alike. A buried revolution.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Middleton, The Liberating Image'
        },
        meaning: '<b>Everyone carries the image of God.</b> Dignity isn’t earned or ranked. It’s given, and given equally. And only here, at the end, does God call it not just good but “very good.”',
        lenses: {
          theo: 'This verse is the root of human dignity in the Western tradition: the claim that every person has a worth no status, usefulness, or failure can cancel. It runs through Jewish and Christian ethics ever since.'
        },
        addr: {
          mode: 'names',
          text: 'The hardest place to believe this is usually a specific face. Someone you can’t stand, or your own in the mirror.'
        },
        soft: 'The text says the image is in them too. No exceptions.',
        ask: 'Who is one person—maybe yourself—you struggle to see as carrying it? Sit with that today.'
      },
      {
        label: 'Seven',
        ref: '2:1–3',
        kind: 'scene',
        form: 'prose',
        title: 'Rest',
        verses: [
          {
            n: 1,
            text: 'Thus the heavens and the earth were completed in all their vast array.'
          },
          {
            n: 2,
            text: 'And by the seventh day God had finished the work He had been doing; so on that day He rested from all His work.'
          },
          {
            n: 3,
            text: 'Then God blessed the seventh day and sanctified it, because on that day He rested from all the work of creation that He had accomplished.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'For exiles who had lost their temple and their land, this was everything: holiness you could keep anywhere, in time rather than place. A day you carry with you.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Heschel, The Sabbath'
        },
        meaning: 'The whole week of making is built toward <b>stopping</b>. Rest is the goal of creation, not a reward for finishing the work but the point of it. And it is the first thing God calls holy.',
        addr: {
          mode: 'names',
          text: 'Notice it doesn’t end with humanity. It ends with rest.'
        },
        soft: 'Most of us collapse. Few of us rest as if it were sacred.',
        ask: 'What would it take to set one day, or even one hour, genuinely apart this week?'
      }
    ]
  },
  {
    id: 'gen-2',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 2',
    chapterIndex: 2,
    title: 'The garden',
    unitLabel: 'Scene',
    thread: 'The same exilic library turns from sky to soil. An older hand asks what a human is, and hands him a garden, a task, and a single limit he is trusted with.',
    closeEnd: 'They stand together, unashamed. It is the last calm before the serpent.',
    passages: [
      {
        label: 'One',
        ref: '2:4–7',
        kind: 'scene',
        form: 'prose',
        title: 'Dust and breath',
        verses: [
          {
            n: 4,
            text: 'This is the account of the heavens and the earth when they were created, in the day that the LORD God made them.'
          },
          {
            n: 5,
            text: 'Now no shrub of the field had yet appeared on the earth, nor had any plant of the field sprouted, for the LORD God had not yet sent rain upon the earth, and there was no man to cultivate the ground.'
          },
          {
            n: 6,
            text: 'But springs welled up from the earth and watered the whole surface of the ground.'
          },
          {
            n: 7,
            text: 'Then the LORD God formed man from the dust of the ground and breathed the breath of life into his nostrils, and the man became a living being.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the second creation account, and an older hand wrote it. The order runs backwards from chapter 1: here the human comes first, before plants and animals. The editors kept both stories side by side rather than smoothing them into one. And the name is a pun: adam, the human, is formed from adamah, the ground. An earthling, out of earth.',
          src: 'Wellhausen · Friedman · Smith'
        },
        meaning: 'The human being is dust and breath in the same instant. Mortal, earthy stuff, and the breath of God, held together. Not a soul trapped in a body, not merely an animal, but both at once: ground that God breathed into.',
        lenses: {
          theo: 'The two halves are a built-in humility and a built-in dignity. You are dust, so you can’t take yourself too seriously or imagine you are your own source. And you are God-breathed, so you can’t despise yourself either. Lose track of either half and something goes wrong.',
          arch: 'Read more widely, the human is the meeting point of matter and mind, the place where the earth becomes aware of itself. Spirit doesn’t arrive instead of the body. It arrives in it, by breath. (Edinger, Ego and Archetype.)'
        },
        addr: {
          mode: 'names',
          text: 'Most days you forget one half of yourself. Some days you live as if you were only dust. Other days you act as if you were only breath, above your own limits.'
        },
        ask: 'Which half are you forgetting today?'
      },
      {
        label: 'Two',
        ref: '2:8–17',
        kind: 'scene',
        form: 'prose',
        title: 'The garden and the limit',
        verses: [
          {
            n: 8,
            text: 'And the LORD God planted a garden in Eden, in the east, where He placed the man He had formed.'
          },
          {
            n: 9,
            text: 'Out of the ground the LORD God gave growth to every tree that is pleasing to the eye and good for food. And in the middle of the garden were the tree of life and the tree of the knowledge of good and evil.'
          },
          {
            n: 10,
            text: 'Now a river flowed out of Eden to water the garden, and from there it branched into four headwaters:'
          },
          {
            n: 11,
            text: 'The name of the first river is the Pishon; it winds through the whole land of Havilah, where there is gold.'
          },
          {
            n: 12,
            text: 'And the gold of that land is pure, and bdellium and onyx are found there.'
          },
          {
            n: 13,
            text: 'The name of the second river is the Gihon; it winds through the whole land of Cush.'
          },
          {
            n: 14,
            text: 'The name of the third river is the Tigris; it runs along the east side of Assyria. And the fourth river is the Euphrates.'
          },
          {
            n: 15,
            text: 'Then the LORD God took the man and placed him in the Garden of Eden to cultivate and keep it.'
          },
          {
            n: 16,
            text: 'And the LORD God commanded him, “You may eat freely from every tree of the garden,'
          },
          {
            n: 17,
            text: 'but you must not eat from the tree of the knowledge of good and evil; for in the day that you eat of it, you will surely die.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The man is placed in the garden “to cultivate and keep it,” the same pair of verbs later used for serving and guarding the temple. Eden is a sanctuary and the human is its gardener-priest, given real work, not idle ease. The rivers, the Tigris and Euphrates among them, root the garden in the actual map of the ancient world. And the command is mostly permission: eat from any tree, with one exception.',
          src: 'Walton · Wenham'
        },
        meaning: 'Freedom and a limit arrive together. He is handed a whole garden and one “no.” That single boundary is what makes him free rather than a kept animal, there is something he could do and chooses not to. A world with no limit at all isn’t paradise. It’s a place where nothing you do can mean anything.',
        lenses: {
          theo: 'The one forbidden tree is not God being stingy. It is the room a real relationship needs: an actual choice, a trust that can be kept or broken. Without it the man would be a pet in a beautiful cage. The limit is what makes him a partner.'
        },
        addr: {
          mode: 'names',
          text: 'You tend to stare at the single “no” in your life until it blots out the whole garden of “yes” around it.'
        },
        ask: 'What one limit are you fixated on, and what is the garden you’re ignoring around it?'
      },
      {
        label: 'Three',
        ref: '2:18–20',
        kind: 'scene',
        form: 'prose',
        title: 'Not good to be alone',
        verses: [
          {
            n: 18,
            text: 'The LORD God also said, “It is not good for the man to be alone. I will make for him a suitable helper.”'
          },
          {
            n: 19,
            text: 'And out of the ground the LORD God formed every beast of the field and every bird of the air, and He brought them to the man to see what he would name each one. And whatever the man called each living creature, that was its name.'
          },
          {
            n: 20,
            text: 'The man gave names to all the livestock, to the birds of the air, and to every beast of the field. But for Adam no suitable helper was found.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Here is the first thing in the Bible called “not good.” In chapter 1 everything was good; the lone exception in this whole telling is solitude. The word for “helper” carries no hint of inferiority, it is used elsewhere of God himself helping Israel, and “suitable” means a counterpart, his match. Watch him name every animal and find that none of them answer back.',
          src: 'Westermann'
        },
        meaning: 'Loneliness is the first flaw in a finished world. Not sin, not danger, just being unaccompanied. He has authority over every creature and an equal among none of them. You can be surrounded, and in charge, and still alone.',
        lenses: {
          theo: 'The human is made for communion, not only for work. The text quietly insists that even in a perfect garden, even with God himself walking there, a person is built to need another person. That is not a defect to be fixed. It is how we are made.'
        },
        addr: {
          mode: 'names',
          text: 'You can be capable, busy, in charge of everything in your care, and still come home to no one who truly answers you.'
        },
        ask: 'Where are you alone in a way you’ve quietly stopped admitting?'
      },
      {
        label: 'Four',
        ref: '2:21–25',
        kind: 'scene',
        form: 'prose',
        title: 'Bone of my bones',
        verses: [
          {
            n: 21,
            text: 'So the LORD God caused the man to fall into a deep sleep, and while he slept, He took one of the man’s ribs and closed up the area with flesh.'
          },
          {
            n: 22,
            text: 'And from the rib that the LORD God had taken from the man, He made a woman and brought her to him.'
          },
          {
            n: 23,
            text: 'And the man said: “This is now bone of my bones and flesh of my flesh; she shall be called ‘woman,’ for out of man she was taken.”'
          },
          {
            n: 24,
            text: 'For this reason a man will leave his father and mother and be united to his wife, and they will become one flesh.'
          },
          {
            n: 25,
            text: 'And the man and his wife were both naked, and they were not ashamed.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The word usually rendered “rib” really means “side,” the man’s whole flank, his other half. It may carry an old Sumerian pun in which the lady of the rib is also the lady of life. She is made not from his head or his foot but from his side, the same substance, level with him. “Bone of my bones” is the first human poetry in the Bible.',
          src: 'Smith · Kramer'
        },
        meaning: 'The partner is not shaped from dust a second time but taken from the man’s own side, his equal and his like. His first words are a cry of recognition: at last, one of my own kind. And the two stand fully exposed to each other and feel no shame, the last clear glimpse of the world before the hiding begins.',
        lenses: {
          theo: 'Made from his side, she stands beside him, not beneath. “One flesh” is the language of a new kinship, a bond reckoned as strong as blood. The chapter ends with two people wholly seen and wholly unafraid, which is exactly what the next chapter takes from them.',
          arch: '“Naked and unashamed” is the original wholeness, the self before it learned to watch itself. The longing to be met by your own kind, and the dread of being that exposed, both begin here, in the memory of a nakedness that cost nothing. (Neumann, Origins and History of Consciousness.)'
        },
        addr: {
          mode: 'names',
          text: 'There is a deep relief in being recognized by someone as their own kind, and a deep fear of being that unguarded in front of anyone.'
        },
        soft: 'The garden holds both, for one more verse.',
        ask: 'Where do you most want to be seen without having to cover, and what makes that feel dangerous?'
      }
    ]
  },
  {
    id: 'gen-3',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 3',
    chapterIndex: 3,
    title: 'The serpent',
    unitLabel: 'Scene',
    thread: 'The trust breaks. Not through a monster, but through a quiet suggestion that God’s one “no” was only ever meant to keep the human small.',
    closeEnd: 'They are sent out of the garden, and the first story ends east of Eden.',
    passages: [
      {
        label: 'One',
        ref: '3:1–5',
        kind: 'scene',
        form: 'prose',
        title: 'The question',
        verses: [
          {
            n: 1,
            text: 'Now the serpent was more crafty than any beast of the field that the LORD God had made. And he said to the woman, “Did God really say, ‘You must not eat from any tree in the garden?’”'
          },
          {
            n: 2,
            text: 'The woman answered the serpent, “We may eat the fruit of the trees of the garden,'
          },
          {
            n: 3,
            text: 'but about the fruit of the tree in the middle of the garden, God has said, ‘You must not eat of it or touch it, or you will die.’”'
          },
          {
            n: 4,
            text: '“You will not surely die,” the serpent told the woman.'
          },
          {
            n: 5,
            text: '“For God knows that in the day you eat of it, your eyes will be opened and you will be like God, knowing good and evil.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The serpent is not Satan. That reading comes centuries later. Here it is simply the most cunning of the animals, a talking creature in an old folk register. And the bait is not “do something evil.” It is “you will be like God, knowing good and evil,” which in Hebrew points at deciding good and evil for yourself.',
          src: 'Smith · Westermann'
        },
        meaning: 'The lie is subtle. Not a flat “You will not surely die,” but the suggestion that God is holding out on you, that the limit exists to keep you small. Temptation almost always works by reframing a boundary as a deprivation.',
        lenses: {
          theo: 'In the older reading, the root of the trouble is distrust. The first move away from God is not lust or violence but the quiet thought that his goodness can’t be trusted and the rule is a cage. Everything else follows from that.',
          arch: 'Read with Jung, the serpent is the necessary disturber, the voice that breaks the perfect, sleeping unity of the garden. Becoming truly awake may require eating the fruit, even though it costs you Eden. The loss of innocence is the price of consciousness. (Edinger, Ego and Archetype.)'
        },
        addr: {
          mode: 'names',
          text: 'Somewhere a voice is telling you that a limit in your life is just someone keeping you small.'
        },
        soft: 'It rarely says “do something wrong.” It says you’d be freer without the rule.',
        ask: 'Where are you being told that a boundary is really a cage?'
      },
      {
        label: 'Two',
        ref: '3:6–7',
        kind: 'scene',
        form: 'prose',
        title: 'The taking',
        verses: [
          {
            n: 6,
            text: 'When the woman saw that the tree was good for food and pleasing to the eyes, and that it was desirable for obtaining wisdom, she took the fruit and ate it. She also gave some to her husband who was with her, and he ate it.'
          },
          {
            n: 7,
            text: 'And the eyes of both of them were opened, and they knew that they were naked; so they sewed together fig leaves and made coverings for themselves.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Notice it is never an apple. That comes from a Latin pun centuries later. And the text never says “the fall” or “original sin” either. Those are Augustine reading Paul. In its own words this is a story about knowledge, shame, and exile, not a doctrine.'
        },
        meaning: 'They get exactly what was promised. Their eyes open. And the very first thing the new knowledge shows them is their own exposure. Awareness arrives, and shame arrives with it.',
        lenses: {
          arch: 'This is the birth of self-consciousness, the moment the self steps back and sees itself from the outside. The fig leaves are the first mask, the covering we put between who we are and whoever is watching. (Neumann, Origins and History of Consciousness.)'
        },
        addr: {
          mode: 'names',
          text: 'You have had the experience of getting the thing you wanted and feeling smaller once you held it.'
        },
        soft: 'The reach promised more of you. It delivered more of your exposure.',
        ask: 'What have you reached for that left you more exposed than before?'
      },
      {
        label: 'Three',
        ref: '3:8–13',
        kind: 'scene',
        form: 'prose',
        title: 'The hiding',
        verses: [
          {
            n: 8,
            text: 'Then the man and his wife heard the voice of the LORD God walking in the garden in the breeze of the day, and they hid themselves from the presence of the LORD God among the trees of the garden.'
          },
          {
            n: 9,
            text: 'But the LORD God called out to the man, “Where are you?”'
          },
          {
            n: 10,
            text: '“I heard Your voice in the garden,” he replied, “and I was afraid because I was naked; so I hid myself.”'
          },
          {
            n: 11,
            text: '“Who told you that you were naked?” asked the LORD God. “Have you eaten from the tree of which I commanded you not to eat?”'
          },
          {
            n: 12,
            text: 'And the man answered, “The woman whom You gave me, she gave me fruit from the tree, and I ate it.”'
          },
          {
            n: 13,
            text: 'Then the LORD God said to the woman, “What is this you have done?” “The serpent deceived me,” she replied, “and I ate.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the older Yahwist’s God, who walks in a garden in the cool of the day and asks questions out loud. “Where are you?” is not a request for information. He knows. It is an opening, a chance to come out. Watch the blame travel: the man points at the woman and at God in one breath, “The woman whom You gave me,” and the woman points at the serpent.'
        },
        meaning: 'After shame comes hiding, and after hiding comes blame. Notice God asks rather than accuses, and leaves room for them to own it. And notice no one does.',
        lenses: {
          theo: '“Where are you” is the first question God asks a human being, and it is a pursuit, not an ambush. The tragedy of the scene is not that they were caught. It is that, handed the chance to step out and tell the truth, each of them pointed somewhere else.'
        },
        addr: {
          mode: 'names',
          text: 'When you are caught, the reflex is the same: hide first, then hand the blame somewhere. The partner, the circumstances, even God.'
        },
        soft: 'It is older than you. It is in the first story.',
        ask: 'What are you blaming right now for something that is actually yours to own?'
      },
      {
        label: 'Four',
        ref: '3:14–19',
        kind: 'scene',
        form: 'prose',
        title: 'The sentences',
        verses: [
          {
            n: 14,
            text: 'So the LORD God said to the serpent: “Because you have done this, cursed are you above all livestock and every beast of the field! On your belly will you go, and dust you will eat, all the days of your life.'
          },
          {
            n: 15,
            text: 'And I will put enmity between you and the woman, and between your seed and her seed. He will crush your head, and you will strike his heel.”'
          },
          {
            n: 16,
            text: 'To the woman He said: “I will sharply increase your pain in childbirth; in pain you will bring forth children. Your desire will be for your husband, and he will rule over you.”'
          },
          {
            n: 17,
            text: 'And to Adam He said: “Because you have listened to the voice of your wife and have eaten from the tree of which I commanded you not to eat, cursed is the ground because of you; through toil you will eat of it all the days of your life.'
          },
          {
            n: 18,
            text: 'Both thorns and thistles it will yield for you, and you will eat the plants of the field.'
          },
          {
            n: 19,
            text: 'By the sweat of your brow you will eat your bread, until you return to the ground—because out of it were you taken. For dust you are, and to dust you shall return.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'These are the text’s answers to old questions: why snakes have no legs, why childbirth is agony, why farming breaks the body, why we die. Verse 16, “he will rule over you,” describes a broken order, it does not bless one. That distinction matters, because the line has been used for centuries to defend the very thing the story is mourning.',
          src: 'Westermann'
        },
        meaning: 'The sentences aren’t random punishments so much as the shape of life lived outside trust. Partnership strained into power. Work turned to toil. The body made mortal. The world doesn’t end. It just gets hard.',
        lenses: {
          theo: 'Read closely, these are consequences more than curses, the natural weather of a broken trust. And even here mercy leaks in: the ground is cursed, but the human is not. They are told they will struggle, not that they are cast off.'
        },
        addr: {
          mode: 'names',
          text: 'The fallout of a broken trust is rarely loud. It is the long friction afterward, the things that should give life, love, work, the body, now arriving with a cost.'
        },
        ask: 'Where has something that should be life-giving in your life turned into toil?'
      },
      {
        label: 'Five',
        ref: '3:20–24',
        kind: 'scene',
        form: 'prose',
        title: 'The exile',
        verses: [
          {
            n: 20,
            text: 'And Adam named his wife Eve, because she would be the mother of all the living.'
          },
          {
            n: 21,
            text: 'And the LORD God made garments of skin for Adam and his wife, and He clothed them.'
          },
          {
            n: 22,
            text: 'Then the LORD God said, “Behold, the man has become like one of Us, knowing good and evil. And now, lest he reach out his hand and take also from the tree of life, and eat, and live forever...”'
          },
          {
            n: 23,
            text: 'Therefore the LORD God banished him from the Garden of Eden to work the ground from which he had been taken.'
          },
          {
            n: 24,
            text: 'So He drove out the man and stationed cherubim on the east side of the Garden of Eden, along with a whirling sword of flame to guard the way to the tree of life.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Two quiet mercies sit inside the judgment. In the face of a death sentence the man names her Eve, “life,” an act of stubborn hope. And God himself clothes them, trading their thin fig leaves for something that lasts, the first act of covering rather than exposing. The cherubim and the flaming sword are the winged guardians that stood at the gates of ancient temples and palaces.'
        },
        meaning: 'Exile, but not abandonment. They leave the garden clothed, named, and alive. The story that opened with “it is good” ends “east of Eden,” yet God walks them to the door rather than ending them. Even the locked gate is partly mercy, so they don’t live forever inside the break.',
        lenses: {
          theo: 'The clothing is the hinge. The first instinct of the humans was to cover their own shame and hide. God’s response is to cover it better, with his own hands. The God of this chapter judges, and then dresses the ones he judges for the road ahead.',
          arch: 'The expulsion begins the human story, it isn’t only its wound. You cannot stay in the sleeping garden once you are awake. The way back is barred on purpose, so the only direction left is forward, into a real life that has to be built. (Edinger, The Bible and the Psyche.)'
        },
        addr: {
          mode: 'names',
          text: 'There are doors in a life that close behind you. You do not get back to the garden.'
        },
        soft: 'The question is whether you walk out clothed and named, or stay frozen at the shut gate.',
        ask: 'What can’t you return to, and what would it look like to walk forward instead of standing at the gate?'
      }
    ]
  },
  {
    id: 'gen-4',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 4',
    chapterIndex: 4,
    title: 'Cain and Abel',
    unitLabel: 'Scene',
    thread: 'The break spreads. What split the first couple from God now splits brother from brother, and the first death in the story is a killing.',
    closeEnd: 'Violence has entered the world, and so has worship. The story will follow both lines down.',
    passages: [
      {
        label: 'One',
        ref: '4:1–5',
        kind: 'scene',
        form: 'prose',
        title: 'The two offerings',
        verses: [
          {
            n: 1,
            text: 'And Adam had relations with his wife Eve, and she conceived and gave birth to Cain. “With the help of the LORD I have brought forth a man,” she said.'
          },
          {
            n: 2,
            text: 'Later she gave birth to Cain’s brother Abel. Now Abel was a keeper of sheep, while Cain was a tiller of the soil.'
          },
          {
            n: 3,
            text: 'So in the course of time, Cain brought some of the fruit of the soil as an offering to the LORD,'
          },
          {
            n: 4,
            text: 'while Abel brought the best portions of the firstborn of his flock. And the LORD looked with favor on Abel and his offering,'
          },
          {
            n: 5,
            text: 'but He had no regard for Cain and his offering. So Cain became very angry, and his countenance fell.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The text pointedly never says why one offering was received and the other was not. Readers have filled the silence for centuries, Abel brought his best and Cain did not, or it was a matter of the heart, but Genesis leaves the gap open. Notice the old pairing underneath: Cain the farmer, Abel the herder, the rivalry of field and flock that a herding people told about itself.',
          src: 'Westermann'
        },
        meaning: 'The story refuses to hand Cain a clean reason. Sometimes you bring what you have and it doesn’t land the way you hoped, and no explanation arrives. What the text watches is not the slight itself but what a person does with it.',
        addr: {
          mode: 'names',
          text: 'You know the feeling of bringing your effort and watching it fall flat while someone else’s is received.'
        },
        ask: 'What did you offer that wasn’t received the way you hoped, and what is it doing to you?'
      },
      {
        label: 'Two',
        ref: '4:6–7',
        kind: 'scene',
        form: 'prose',
        title: 'Crouching at the door',
        verses: [
          {
            n: 6,
            text: '“Why are you angry,” said the LORD to Cain, “and why has your countenance fallen?'
          },
          {
            n: 7,
            text: 'If you do what is right, will you not be accepted? But if you refuse to do what is right, sin is crouching at your door; it desires you, but you must master it.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'God speaks to Cain before the murder, not after, a warning rather than a verdict. “Sin is crouching at your door” pictures sin as a predator at the threshold, an image that echoes a Mesopotamian word for a demon that waited at doorways. And “it desires you, but you must master it” are almost exactly the words spoken to the woman one chapter earlier, now turned on sin itself.',
          src: 'Smith · Walton'
        },
        meaning: 'There is a gap between the anger and the act, and God meets Cain inside it. Sin is drawn as an animal at the threshold, wanting in. The feeling is not yet the sin. What you do with the door is.',
        lenses: {
          theo: 'This is the chapter’s mercy, and it’s easy to miss. Before Cain lifts a hand, God comes to him, names the danger, and tells him plainly that he can still master it. The warning is grace. The freedom is real.',
          arch: 'Read as psychology, the thing crouching is the disowned rage, the shadow. Jung’s warning fits the verse exactly: what you refuse to make conscious will come to rule you from outside, as if it were fate. Cain is being told to turn and face it while he still can. (Jung, Aion.)'
        },
        addr: {
          mode: 'names',
          text: 'There is a door in you with something crouching at it right now, a resentment, a habit, a rage you have been quietly feeding.'
        },
        soft: 'You are nearer the threshold than the deed. That is the whole point of the warning.',
        ask: 'What is crouching at your door, and what would ruling it, instead of feeding it, look like today?'
      },
      {
        label: 'Three',
        ref: '4:8–10',
        kind: 'scene',
        form: 'prose',
        title: 'The field',
        verses: [
          {
            n: 8,
            text: 'Then Cain said to his brother Abel, “Let us go out to the field.” And while they were in the field, Cain rose up against his brother Abel and killed him.'
          },
          {
            n: 9,
            text: 'And the LORD said to Cain, “Where is your brother Abel?” “I do not know!” he answered. “Am I my brother’s keeper?”'
          },
          {
            n: 10,
            text: '“What have you done?” replied the LORD. “The voice of your brother’s blood cries out to Me from the ground.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The Hebrew of verse 8 is broken: Cain says something to Abel and the words have dropped out of the oldest text, so the murder happens in a blank. “Am I my brother’s keeper?” is the first evasion in the Bible. And the victim is not silent, the word for blood is plural, and it cries from the ground that drank it.',
          src: 'Westermann'
        },
        meaning: 'The first death in the story is not natural. It is a killing, and it is a brother. Cain’s question expects the answer no. The rest of the Bible spends itself answering yes. And notice the spilled blood has a voice. Violence does not stay buried; the ground itself testifies.',
        lenses: {
          theo: '“Am I my brother’s keeper?” is the question the whole law and the prophets exist to answer. The God of this scene hears the victim from the dirt. Wherever someone is harmed and hidden away, the text insists, the cry still reaches him.'
        },
        addr: {
          mode: 'names',
          text: '“Am I my brother’s keeper” is the line you reach for whenever you would rather not be responsible for someone you have failed.'
        },
        ask: 'Whose keeping have you been telling yourself is not yours?'
      },
      {
        label: 'Four',
        ref: '4:11–16',
        kind: 'scene',
        form: 'prose',
        title: 'The mark',
        verses: [
          {
            n: 11,
            text: 'Now you are cursed and banished from the ground, which has opened its mouth to receive your brother’s blood from your hand.'
          },
          {
            n: 12,
            text: 'When you till the ground, it will no longer yield its produce to you. You will be a fugitive and a wanderer on the earth.”'
          },
          {
            n: 13,
            text: 'But Cain said to the LORD, “My punishment is greater than I can bear.'
          },
          {
            n: 14,
            text: 'Behold, this day You have driven me from the face of the earth, and from Your face I will be hidden; I will be a fugitive and a wanderer on the earth, and whoever finds me will kill me.”'
          },
          {
            n: 15,
            text: '“Not so!” replied the LORD. “If anyone slays Cain, then Cain will be avenged sevenfold.” And the LORD placed a mark on Cain, so that no one who found him would kill him.'
          },
          {
            n: 16,
            text: 'So Cain went out from the presence of the LORD and settled in the land of Nod, east of Eden.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The “mark of Cain” has been read monstrously, twisted for centuries into a brand of inferiority and used to defend slavery and racism. The text says the opposite. The mark is protection, a sign God places on Cain so that no one will kill him. Even the first murderer is shielded from the violence he set loose. And he settles in Nod, a name that means “wandering”: he becomes the restlessness he is sentenced to.'
        },
        meaning: 'The sentence is exile and unrest, not death. And then mercy moves: God guards the life of the guilty man. A story that could have ended in execution ends instead with a mark of protection laid on the murderer. Justice and mercy arrive in the same breath.',
        lenses: {
          theo: 'Cain is cursed and Cain is kept, at once. The God of this chapter neither excuses the murder nor abandons the murderer. That double note, real consequence and stubborn protection, runs from here through the whole story.'
        },
        addr: {
          mode: 'names',
          text: 'You carry the weight of things you have done. You may also be carried, protected in ways you never earned, right in the middle of them.'
        },
        ask: 'Where are you being protected inside consequences you brought on yourself?'
      },
      {
        label: 'Five',
        ref: '4:23–26',
        kind: 'scene',
        form: 'prose',
        title: 'Two lines',
        verses: [
          {
            n: 23,
            text: 'Then Lamech said to his wives: “Adah and Zillah, hear my voice; wives of Lamech, listen to my speech. For I have slain a man for wounding me, a young man for striking me.'
          },
          {
            n: 24,
            text: 'If Cain is avenged sevenfold, then Lamech seventy-sevenfold.”'
          },
          {
            n: 25,
            text: 'And Adam again had relations with his wife, and she gave birth to a son and named him Seth, saying, “God has granted me another seed in place of Abel, since Cain killed him.”'
          },
          {
            n: 26,
            text: 'And to Seth also a son was born, and he called him Enosh. At that time men began to call upon the name of the LORD.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Between the mark and these verses the text races through Cain’s descendants. He builds the first city, and his line invents herding, music, and metalwork; civilization is born east of Eden, in the murderer’s family. Seven generations down comes Lamech, who sings the first poem in the Bible, and it is a boast: Cain was avenged sevenfold, Lamech seventy-sevenfold. The appetite for vengeance compounds down the line. Then, abruptly, another line begins.',
          src: 'Westermann'
        },
        meaning: 'Two trajectories fork here. One line builds and makes and grows a louder and louder hunger for revenge. The other simply starts to call on the name of God. The primeval history is asking, this early, which line a person is standing in.',
        lenses: {
          theo: 'The Bible keeps drawing this line: violence that escalates on one side, and on the other a people who, having little else, call on the name of the LORD. Both descend from the same wounded family. The difference is not bloodline. It is which way you turn.',
          arch: 'One line hands its wound down as more harm, generation after generation, the shadow inherited and amplified. The other breaks the chain by turning outward and upward for help. The story sets the two paths side by side and lets you watch where each one leads. (Edinger, The Bible and the Psyche.)'
        },
        addr: {
          mode: 'names',
          text: 'Both lines are open to you: the one where a wound compounds into more harm, and the one that turns and calls out for help.'
        },
        ask: 'Which line are you continuing right now?'
      }
    ]
  },
  {
    id: 'gen-5',
    bookId: 'genesis',
    tier: 'grounded',
    span: 'Genesis 5',
    chapterIndex: 5,
    title: 'From Adam to Noah',
    passages: [
      {
        ref: 'Genesis 5',
        kind: 'scene',
        form: 'prose',
        title: 'From Adam to Noah',
        verses: [
          {
            n: 1,
            text: 'This is the book of the generations of Adam. In the day that God created man, He made him in His own likeness.'
          },
          {
            n: 2,
            text: 'Male and female He created them, and He blessed them. And in the day they were created, He called them “man.”'
          },
          {
            n: 3,
            text: 'When Adam was 130 years old, he had a son in his own likeness, after his own image; and he named him Seth.'
          },
          {
            n: 4,
            text: 'And after he had become the father of Seth, Adam lived 800 years and had other sons and daughters.'
          },
          {
            n: 5,
            text: 'So Adam lived a total of 930 years, and then he died.'
          },
          {
            n: 6,
            text: 'When Seth was 105 years old, he became the father of Enosh.'
          },
          {
            n: 7,
            text: 'And after he had become the father of Enosh, Seth lived 807 years and had other sons and daughters.'
          },
          {
            n: 8,
            text: 'So Seth lived a total of 912 years, and then he died.'
          },
          {
            n: 9,
            text: 'When Enosh was 90 years old, he became the father of Kenan.'
          },
          {
            n: 10,
            text: 'And after he had become the father of Kenan, Enosh lived 815 years and had other sons and daughters.'
          },
          {
            n: 11,
            text: 'So Enosh lived a total of 905 years, and then he died.'
          },
          {
            n: 12,
            text: 'When Kenan was 70 years old, he became the father of Mahalalel.'
          },
          {
            n: 13,
            text: 'And after he had become the father of Mahalalel, Kenan lived 840 years and had other sons and daughters.'
          },
          {
            n: 14,
            text: 'So Kenan lived a total of 910 years, and then he died.'
          },
          {
            n: 15,
            text: 'When Mahalalel was 65 years old, he became the father of Jared.'
          },
          {
            n: 16,
            text: 'And after he had become the father of Jared, Mahalalel lived 830 years and had other sons and daughters.'
          },
          {
            n: 17,
            text: 'So Mahalalel lived a total of 895 years, and then he died.'
          },
          {
            n: 18,
            text: 'When Jared was 162 years old, he became the father of Enoch.'
          },
          {
            n: 19,
            text: 'And after he had become the father of Enoch, Jared lived 800 years and had other sons and daughters.'
          },
          {
            n: 20,
            text: 'So Jared lived a total of 962 years, and then he died.'
          },
          {
            n: 21,
            text: 'When Enoch was 65 years old, he became the father of Methuselah.'
          },
          {
            n: 22,
            text: 'And after he had become the father of Methuselah, Enoch walked with God 300 years and had other sons and daughters.'
          },
          {
            n: 23,
            text: 'So Enoch lived a total of 365 years.'
          },
          {
            n: 24,
            text: 'Enoch walked with God, and then he was no more, because God had taken him away.'
          },
          {
            n: 25,
            text: 'When Methuselah was 187 years old, he became the father of Lamech.'
          },
          {
            n: 26,
            text: 'And after he had become the father of Lamech, Methuselah lived 782 years and had other sons and daughters.'
          },
          {
            n: 27,
            text: 'So Methuselah lived a total of 969 years, and then he died.'
          },
          {
            n: 28,
            text: 'When Lamech was 182 years old, he had a son.'
          },
          {
            n: 29,
            text: 'And he named him Noah, saying, “May this one comfort us in the labor and toil of our hands caused by the ground that the LORD has cursed.”'
          },
          {
            n: 30,
            text: 'And after he had become the father of Noah, Lamech lived 595 years and had other sons and daughters.'
          },
          {
            n: 31,
            text: 'So Lamech lived a total of 777 years, and then he died.'
          },
          {
            n: 32,
            text: 'After Noah was 500 years old, he became the father of Shem, Ham, and Japheth.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'These impossibly long lives echo the Sumerian King List, which gave its kings before the flood reigns of tens of thousands of years. Genesis keeps the shape but shrinks the scale, and it breaks its own rhythm once, for Enoch, who does not die but is simply taken.',
          src: 'The Sumerian King List · Smith'
        }
      }
    ]
  },
  {
    id: 'gen-6',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 6',
    chapterIndex: 6,
    title: 'The flood begins',
    unitLabel: 'Scene',
    thread: 'The violence that began with one murder has filled the whole earth. God looks at what the world has become, grieves, and resolves to start again with one man who still walks with him.',
    closeEnd: 'The covenant is spoken before a drop has fallen. Beyond this chapter the rain begins.',
    passages: [
      {
        label: 'One',
        ref: '6:1–4',
        kind: 'scene',
        form: 'prose',
        title: 'The sons of God',
        verses: [
          {
            n: 1,
            text: 'Now when men began to multiply on the face of the earth and daughters were born to them,'
          },
          {
            n: 2,
            text: 'the sons of God saw that the daughters of men were beautiful, and they took as wives whomever they chose.'
          },
          {
            n: 3,
            text: 'So the LORD said, “My Spirit will not contend with man forever, for he is mortal; his days shall be 120 years.”'
          },
          {
            n: 4,
            text: 'The Nephilim were on the earth in those days—and afterward as well—when the sons of God had relations with the daughters of men. And they bore them children who became the mighty men of old, men of renown.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the strangest fragment in the primeval history, and the editors kept it almost raw. Divine beings, “sons of God”, take human women, and the children are the Nephilim, the “fallen ones”, giants, “the mighty men of old”. It is a shard of older myth, the kind of demigod-hero story told all across the ancient Near East, where Gilgamesh himself is two-thirds god. The hundred-and-twenty-year limit is God drawing a hard line between the divine and the human after that line had been crossed.',
          src: 'Westermann · Smith'
        },
        meaning: 'The scene is about a boundary blurring, heaven and earth bleeding into each other, and God answering by setting a limit. Right before the flood the text shows a world where the categories are coming undone. There is not much to moralize here. Mostly it sets a tone: things have gotten strange, and out of bounds.',
        lenses: {
          theo: 'The text guards the difference between the maker and the made. The trouble in these verses is not desire, it is the erasing of a line that was meant to hold. Much of what follows is God re-establishing the boundary between creator and creature.'
        },
        addr: {
          mode: 'names',
          text: 'You live inside limits you did not choose, mortality first among them, and the standing temptation is to treat them as insults rather than the shape of being a creature.'
        },
        ask: 'Which of your limits have you been fighting as though they were enemies?'
      },
      {
        label: 'Two',
        ref: '6:5–8',
        kind: 'scene',
        form: 'prose',
        title: 'Every inclination',
        verses: [
          {
            n: 5,
            text: 'Then the LORD saw that the wickedness of man was great upon the earth, and that every inclination of the thoughts of his heart was altogether evil all the time.'
          },
          {
            n: 6,
            text: 'And the LORD regretted that He had made man on the earth, and He was grieved in His heart.'
          },
          {
            n: 7,
            text: 'So the LORD said, “I will blot out man, whom I have created, from the face of the earth—every man and beast and crawling creature and bird of the air—for I am grieved that I have made them.”'
          },
          {
            n: 8,
            text: 'Noah, however, found favor in the eyes of the LORD.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the Yahwist’s voice, raw and unguarded. God “regrets”; his heart is “grieved”. This is not the untroubled, impassive deity of later philosophy. It is a God who can be wounded by what the world becomes. The bleakest verdict in Genesis, that the human heart inclines only to evil, sits right beside God’s grief, not his rage.',
          src: 'Friedman'
        },
        meaning: 'Notice what God feels first. Not anger. Grief. Regret. The maker is heartbroken over the made. And in the very same breath, a single exception: Noah found favor. Even at the darkest verdict in the book, the story leaves one door open.',
        lenses: {
          theo: 'The flood begins in heartbreak, not fury. A God who grieves is a God who is not above being hurt by us, who has staked something on how this goes. That changes what the judgment is. It is the pain of a maker, not the spite of a tyrant.'
        },
        addr: {
          mode: 'names',
          text: 'There is a difference between being raged at and being grieved over. The text says God grieves.'
        },
        ask: 'Where in your life are you more grieved than angry, and what is that grief trying to tell you?'
      },
      {
        label: 'Three',
        ref: '6:9–12',
        kind: 'scene',
        form: 'prose',
        title: 'Noah walked with God',
        verses: [
          {
            n: 9,
            text: 'This is the account of Noah. Noah was a righteous man, blameless in his generation; Noah walked with God.'
          },
          {
            n: 10,
            text: 'And Noah had three sons: Shem, Ham, and Japheth.'
          },
          {
            n: 11,
            text: 'Now the earth was corrupt in the sight of God, and full of violence.'
          },
          {
            n: 12,
            text: 'And God looked upon the earth and saw that it was corrupt; for all living creatures on the earth had corrupted their ways.'
          }
        ],
        ground: {
          kind: 'historical',
          text: '“Walked with God” is said of only two men in Genesis, Enoch and Noah. “Blameless” translates a word that means whole, of integrity, not sinless. And the earth is “full of violence”, the same word for the brutality that began with Cain and compounded through Lamech’s boast. The flood is, in a sense, the violence of the world finally coming back on itself.',
          src: 'Westermann'
        },
        meaning: 'One man, out of step with his entire generation, simply walks with God. Not perfect. Whole. The text never says Noah argued or preached or won anyone over. It says he walked. Sometimes faithfulness is just continuing in a direction after everyone around you has turned off it.',
        lenses: {
          theo: 'Righteousness here is not a scorecard. It is relational, a matter of walking with. And it is the remnant of one. The whole rescue that follows hangs on a single person who kept company with God when company was scarce.'
        },
        addr: {
          mode: 'names',
          text: 'You may be the one in your circle still walking a direction the others have abandoned, and from inside it can feel less like faithfulness and more like being wrong.'
        },
        ask: 'What direction are you still walking that the people around you have given up on?'
      },
      {
        label: 'Four',
        ref: '6:13–22',
        kind: 'scene',
        form: 'prose',
        title: 'Make yourself an ark',
        verses: [
          {
            n: 13,
            text: 'Then God said to Noah, “The end of all living creatures has come before Me, because through them the earth is full of violence. Now behold, I will destroy both them and the earth.'
          },
          {
            n: 14,
            text: 'Make for yourself an ark of gopher wood; make rooms in the ark and coat it with pitch inside and out.'
          },
          {
            n: 15,
            text: 'And this is how you are to build it: The ark is to be 300 cubits long, 50 cubits wide, and 30 cubits high.'
          },
          {
            n: 16,
            text: 'You are to make a roof for the ark, finish its walls a cubit from the top, place a door in the side of the ark, and build lower, middle, and upper decks.'
          },
          {
            n: 17,
            text: 'And behold, I will bring floodwaters upon the earth to destroy every creature under the heavens that has the breath of life. Everything on the earth will perish.'
          },
          {
            n: 18,
            text: 'But I will establish My covenant with you, and you will enter the ark—you and your sons and your wife and your sons’ wives with you.'
          },
          {
            n: 19,
            text: 'And you are to bring two of every living creature into the ark—male and female—to keep them alive with you.'
          },
          {
            n: 22,
            text: 'So Noah did everything precisely as God had commanded him.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The ark instructions are precise, dimensions, decks, a door, pitch, and they track closely the flood stories Israel’s neighbors told. In the Mesopotamian versions, in Atrahasis and in Gilgamesh, a god warns one man to build a great boat and outlast a divine flood. Genesis takes the shared story and moves its center: the flood here is moral, not the whim of squabbling gods, and it arrives bound to a promise. The word “covenant” appears for the first time in the Bible right here, before the rain.',
          src: 'Walton · Smith'
        },
        meaning: 'Before the water, a promise. God announces the judgment and the covenant in a single speech. The ark is not a clever escape, it is obedience built plank by plank, and the chapter ends not on a feeling but on a fact: Noah did everything God commanded. Faith, here, is carpentry.',
        lenses: {
          theo: 'Grace runs ahead of the flood. The covenant is spoken before a single drop falls, and it rests on God’s promise rather than on Noah’s worthiness. The rescue is announced first, then built. That order, promise before performance, is the shape of nearly every covenant that follows.'
        },
        addr: {
          mode: 'names',
          text: 'When everything feels like it is coming apart, the work in front of you is often unglamorous and slow: build the thing, plank by plank, before you can see why it matters.'
        },
        ask: 'What is the plank-by-plank work in front of you right now, the thing simply to do before it makes sense?'
      }
    ]
  },
  {
    id: 'gen-7',
    bookId: 'genesis',
    tier: 'grounded',
    span: 'Genesis 7',
    chapterIndex: 7,
    title: 'The flood',
    passages: [
      {
        ref: 'Genesis 7',
        kind: 'scene',
        form: 'prose',
        title: 'The flood',
        verses: [
          {
            n: 1,
            text: 'Then the LORD said to Noah, “Go into the ark, you and all your family, because I have found you righteous in this generation.'
          },
          {
            n: 2,
            text: 'You are to take with you seven pairs of every kind of clean animal, a male and its mate; a pair of every kind of unclean animal, a male and its mate;'
          },
          {
            n: 3,
            text: 'and seven pairs of every kind of bird of the air, male and female, to preserve their offspring on the face of all the earth.'
          },
          {
            n: 4,
            text: 'For seven days from now I will send rain on the earth for forty days and forty nights, and I will wipe from the face of the earth every living thing I have made.”'
          },
          {
            n: 5,
            text: 'And Noah did all that the LORD had commanded him.'
          },
          {
            n: 6,
            text: 'Now Noah was 600 years old when the floodwaters came upon the earth.'
          },
          {
            n: 7,
            text: 'And Noah and his wife, with his sons and their wives, entered the ark to escape the waters of the flood.'
          },
          {
            n: 8,
            text: 'The clean and unclean animals, the birds, and everything that crawls along the ground'
          },
          {
            n: 9,
            text: 'came to Noah to enter the ark, two by two, male and female, as God had commanded Noah.'
          },
          {
            n: 10,
            text: 'And after seven days the floodwaters came upon the earth.'
          },
          {
            n: 11,
            text: 'In the six hundredth year of Noah’s life, on the seventeenth day of the second month, all the fountains of the great deep burst forth, and the floodgates of the heavens were opened.'
          },
          {
            n: 12,
            text: 'And the rain fell upon the earth for forty days and forty nights.'
          },
          {
            n: 13,
            text: 'On that very day Noah entered the ark, along with his sons Shem, Ham, and Japheth, and his wife, and the three wives of his sons—'
          },
          {
            n: 14,
            text: 'they and every kind of wild animal, livestock, crawling creature, bird, and winged creature.'
          },
          {
            n: 15,
            text: 'They came to Noah to enter the ark, two by two of every creature with the breath of life.'
          },
          {
            n: 16,
            text: 'And they entered, the male and female of every living thing, as God had commanded Noah. Then the LORD shut him in.'
          },
          {
            n: 17,
            text: 'For forty days the flood kept coming on the earth, and the waters rose and lifted the ark high above the earth.'
          },
          {
            n: 18,
            text: 'So the waters continued to surge and rise greatly on the earth, and the ark floated on the surface of the waters.'
          },
          {
            n: 19,
            text: 'Finally, the waters completely prevailed upon the earth, so that all the high mountains under all the heavens were covered.'
          },
          {
            n: 20,
            text: 'The waters rose and covered the mountaintops to a depth of fifteen cubits.'
          },
          {
            n: 21,
            text: 'And every living thing that moved upon the earth perished—birds, livestock, animals, every creature that swarms upon the earth, and all mankind.'
          },
          {
            n: 22,
            text: 'Of all that was on dry land, everything that had the breath of life in its nostrils died.'
          },
          {
            n: 23,
            text: 'And every living thing on the face of the earth was destroyed—man and livestock, crawling creatures and birds of the air; they were blotted out from the earth, and only Noah and those with him in the ark remained.'
          },
          {
            n: 24,
            text: 'And the waters prevailed upon the earth for 150 days.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Read closely and two accounts show through each other here. One pair of every animal in one breath, seven pairs of the clean ones in the next; forty days in one line, a hundred and fifty in another. Source critics read this as two flood stories, the older Yahwist and the later Priestly, woven into a single thread.',
          src: 'Wellhausen · Friedman, Who Wrote the Bible?'
        }
      }
    ]
  },
  {
    id: 'gen-8',
    bookId: 'genesis',
    tier: 'grounded',
    span: 'Genesis 8',
    chapterIndex: 8,
    title: 'The waters recede',
    passages: [
      {
        ref: 'Genesis 8',
        kind: 'scene',
        form: 'prose',
        title: 'The waters recede',
        verses: [
          {
            n: 1,
            text: 'But God remembered Noah and all the animals and livestock that were with him in the ark. And God sent a wind over the earth, and the waters began to subside.'
          },
          {
            n: 2,
            text: 'The springs of the deep and the floodgates of the heavens were closed, and the rain from the sky was restrained.'
          },
          {
            n: 3,
            text: 'The waters receded steadily from the earth, and after 150 days the waters had gone down.'
          },
          {
            n: 4,
            text: 'On the seventeenth day of the seventh month, the ark came to rest on the mountains of Ararat.'
          },
          {
            n: 5,
            text: 'And the waters continued to recede until the tenth month, and on the first day of the tenth month the tops of the mountains became visible.'
          },
          {
            n: 6,
            text: 'After forty days Noah opened the window he had made in the ark'
          },
          {
            n: 7,
            text: 'and sent out a raven. It kept flying back and forth until the waters had dried up from the earth.'
          },
          {
            n: 8,
            text: 'Then Noah sent out a dove to see if the waters had receded from the surface of the ground.'
          },
          {
            n: 9,
            text: 'But the dove found no place to rest her foot, and she returned to him in the ark, because the waters were still covering the surface of all the earth. So he reached out his hand and brought her back inside the ark.'
          },
          {
            n: 10,
            text: 'Noah waited seven more days and again sent out the dove from the ark.'
          },
          {
            n: 11,
            text: 'And behold, the dove returned to him in the evening with a freshly plucked olive leaf in her beak. So Noah knew that the waters had receded from the earth.'
          },
          {
            n: 12,
            text: 'And Noah waited seven more days and sent out the dove again, but this time she did not return to him.'
          },
          {
            n: 13,
            text: 'In Noah’s six hundred and first year, on the first day of the first month, the waters had dried up from the earth. So Noah removed the covering from the ark and saw that the surface of the ground was dry.'
          },
          {
            n: 14,
            text: 'By the twenty-seventh day of the second month, the earth was fully dry.'
          },
          {
            n: 15,
            text: 'Then God said to Noah,'
          },
          {
            n: 16,
            text: '“Come out of the ark, you and your wife, along with your sons and their wives.'
          },
          {
            n: 17,
            text: 'Bring out all the living creatures that are with you—birds, livestock, and everything that crawls upon the ground—so that they can spread out over the earth and be fruitful and multiply upon it.”'
          },
          {
            n: 18,
            text: 'So Noah came out, along with his sons and his wife and his sons’ wives.'
          },
          {
            n: 19,
            text: 'Every living creature, every creeping thing, and every bird—everything that moves upon the earth—came out of the ark, kind by kind.'
          },
          {
            n: 20,
            text: 'Then Noah built an altar to the LORD. And taking from every kind of clean animal and clean bird, he offered burnt offerings on the altar.'
          },
          {
            n: 21,
            text: 'When the LORD smelled the pleasing aroma, He said in His heart, “Never again will I curse the ground because of man, even though every inclination of his heart is evil from his youth. And never again will I destroy all living creatures as I have done.'
          },
          {
            n: 22,
            text: 'As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night shall never cease.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The closest parallel in all of Genesis sits here. In the Epic of Gilgamesh the flood hero sends birds out from his boat and offers a sacrifice the gods crowd around “like flies.” Genesis keeps the birds and the altar and strips out the hungry gods, leaving one God who resolves, never again.',
          src: 'The Epic of Gilgamesh · John Day'
        }
      }
    ]
  },
  {
    id: 'gen-9',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 9',
    chapterIndex: 9,
    title: 'Noah’s covenant',
    unitLabel: 'Scene',
    thread: 'The flood recedes. God binds himself to the whole earth with a one-sided promise, and the same human heart that filled the world with violence steps off the ark unchanged.',
    closeEnd: 'The flood is over and the human heart is not. The story will gather, one more time, on a plain in the east.',
    passages: [
      {
        label: 'One',
        ref: '9:1–4',
        kind: 'scene',
        form: 'prose',
        title: 'Be fruitful again',
        verses: [
          {
            n: 1,
            text: 'And God blessed Noah and his sons and said to them, “Be fruitful and multiply and fill the earth.'
          },
          {
            n: 2,
            text: 'The fear and dread of you will fall on every living creature on the earth, every bird of the air, every creature that crawls on the ground, and all the fish of the sea. They are delivered into your hand.'
          },
          {
            n: 3,
            text: 'Everything that lives and moves will be food for you; just as I gave you the green plants, I now give you all things.'
          },
          {
            n: 4,
            text: 'But you must not eat meat with its lifeblood still in it.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The blessing is a deliberate echo of Genesis 1, “be fruitful and multiply and fill the earth”, the very words spoken at creation. The flood was an un-creation, the waters of chaos let back in, and now the world is being remade. But the terms have shifted. Humans may now eat meat, which they could not in Eden, and one line is drawn around it: not the blood, because the blood is the life. This is the deep root of later kosher practice.',
          src: 'Smith · Walton'
        },
        meaning: 'The world starts over with the same blessing it began with, but it is no longer Eden. Meat, the new fear between animals and people, these are concessions to a harder world. The fresh start is real, and it is not naive. It opens by admitting the new world will have blood in it.',
        lenses: {
          theo: 'Grace hands the world back, but on honest terms. God works with the world as it now is, not as it was before. The re-creation does not pretend the fall never happened; it builds on the ground that is actually there.'
        },
        addr: {
          mode: 'names',
          text: 'Second chances rarely set you back down in the garden. They hand you the same calling in a harder, bloodier world.'
        },
        ask: 'Where have you been given a fresh start that isn’t a return to how things were, and are you grieving that or working with it?'
      },
      {
        label: 'Two',
        ref: '9:5–7',
        kind: 'scene',
        form: 'prose',
        title: 'Made in the image',
        verses: [
          {
            n: 5,
            text: 'And surely I will require the life of any man or beast by whose hand your lifeblood is shed. I will demand an accounting from anyone who takes the life of his fellow man:'
          },
          {
            n: 6,
            text: 'Whoever sheds the blood of man, by man his blood will be shed; for in His own image God has made mankind.'
          },
          {
            n: 7,
            text: 'But as for you, be fruitful and multiply; spread out across the earth and multiply upon it.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Verse 6 is one of the load-bearing lines of the whole Bible: human life must be protected because every human bears the image of God. It is the same “image” language from Genesis 1, now turned into the ground of justice. In Hebrew the line is a tight mirror, blood and human folding back on human and blood, the punishment shaped like the crime. It is the first statement of the sanctity of human life, and it roots that worth not in law or usefulness but in resemblance to God.',
          src: 'Middleton'
        },
        meaning: 'Why does murder matter? The text does not say because it breaks a rule. It says because the one you killed looked like God. Every human carries that resemblance, the powerful and the powerless alike. The protection of a life is grounded in dignity, not in what the life can produce.',
        lenses: {
          theo: 'The image is universal here, stamped on everyone. This single verse is the seed of nearly every later claim about human dignity and human rights, and it cuts hard against every system that ranks some lives above others. If the worth is the image, no one outranks anyone.'
        },
        addr: {
          mode: 'names',
          text: 'You meet people every day whose worth you quietly rank by what they can do for you. The text says each one carries the image, the same as you.'
        },
        ask: 'Whose dignity have you been measuring by their usefulness?'
      },
      {
        label: 'Three',
        ref: '9:8–17',
        kind: 'scene',
        form: 'prose',
        title: 'The bow in the clouds',
        verses: [
          {
            n: 9,
            text: '“Behold, I now establish My covenant with you and your descendants after you,'
          },
          {
            n: 10,
            text: 'and with every living creature that was with you—the birds, the livestock, and every beast of the earth—every living thing that came out of the ark.'
          },
          {
            n: 11,
            text: 'And I establish My covenant with you: Never again will all life be cut off by the waters of a flood; never again will there be a flood to destroy the earth.”'
          },
          {
            n: 12,
            text: 'And God said, “This is the sign of the covenant I am making between Me and you and every living creature with you, a covenant for all generations to come:'
          },
          {
            n: 13,
            text: 'I have set My rainbow in the clouds, and it will be a sign of the covenant between Me and the earth.'
          },
          {
            n: 16,
            text: 'And whenever the rainbow appears in the clouds, I will see it and remember the everlasting covenant between God and every living creature of every kind that is on the earth.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The covenant is made not only with Noah but with “every living creature”, the animals are party to it too, which is easy to miss and quietly radical. The sign is the rainbow, but the Hebrew word is simply “bow”, the war-bow. The picture is of God hanging up his weapon, its arc turned away from the earth. And the covenant is one-sided: it asks nothing of Noah. God binds himself, and the sign exists so that God will remember.',
          src: 'Westermann'
        },
        meaning: 'This is the first covenant in the Bible, and it is pure gift. No conditions, no terms for people to keep. God simply promises and hangs up the bow. The sign in the sky is not there to remind you to behave; the text says it is there so God will remember his own promise. The whole relationship is held up from God’s side.',
        lenses: {
          theo: 'Grace that asks nothing back. A God who ties his own hands and points the weapon away. And notice the reach of it: the covenant is with all flesh, not only with people. The promise is as wide as the earth, and it rests entirely on the one who made it.'
        },
        addr: {
          mode: 'names',
          text: 'You may be carrying a relationship as if the whole thing depends on you keeping up your end. This covenant runs the other way, held from the other side.'
        },
        ask: 'Where are you straining to hold up something that was meant to be held from the other side?'
      },
      {
        label: 'Four',
        ref: '9:18–27',
        kind: 'scene',
        form: 'prose',
        title: 'Noah uncovered',
        verses: [
          {
            n: 20,
            text: 'Now Noah, a man of the soil, proceeded to plant a vineyard.'
          },
          {
            n: 21,
            text: 'But when he drank some of its wine, he became drunk and uncovered himself inside his tent.'
          },
          {
            n: 22,
            text: 'And Ham, the father of Canaan, saw his father’s nakedness and told his two brothers outside.'
          },
          {
            n: 23,
            text: 'Then Shem and Japheth took a garment and placed it across their shoulders, and walking backward, they covered their father’s nakedness. Their faces were turned away so that they did not see their father’s nakedness.'
          },
          {
            n: 24,
            text: 'When Noah awoke from his drunkenness and learned what his youngest son had done to him,'
          },
          {
            n: 25,
            text: 'he said, “Cursed be Canaan! A servant of servants shall he be to his brothers.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the chapter people skip, and the place where the worst misreading in the book has lived. For centuries the so-called “curse of Ham” was twisted to justify the enslavement of Black Africans. The text gives it no footing at all. The curse falls on Canaan, not Ham, and on no race, it is almost certainly an old story-behind-the-story explaining why Israel later subjugated the Canaanite peoples. There is nothing about skin color anywhere in it. The slavery reading is a monstrous later invention laid on top of the words. And underneath the controversy sits the quieter shock: the righteous man God saved gets drunk and is shamed in his own tent.',
          src: 'Westermann'
        },
        meaning: 'Here is the devastation hidden in the flood story. God washed the whole earth, and the first thing the rescued, righteous man does is plant a vineyard, get drunk, and fall into shame, and a grandson is cursed. The water cleaned the world. It did not clean the human heart. The exact trouble named before the flood, the inclination of the heart, walks straight off the ark. You cannot drown your way to a better person.',
        lenses: {
          theo: 'The flood was the most total fresh start imaginable, and at the level that matters it did not work, and the story is honest enough to say so. The trouble was never only out there in a wicked generation. It came through the ark in the heart of the best man aboard. That admission is what sets up everything after: a problem this deep will not be solved by washing the world. It will take something else.',
          arch: 'The deluge as a return to the formless waters, dissolution before rebirth, is among the oldest patterns there is. But the story refuses the clean version of the myth. The remade world carries the old wound through intact; the shadow was not left on the far shore. (Neumann, on the flood as regression and an incomplete renewal.)'
        },
        addr: {
          mode: 'names',
          text: 'You have tried to start clean, the move, the breakup, the resolution, and watched the very thing you were fleeing climb out of the boat with you.'
        },
        soft: 'The point is not despair. It is that the fix you need runs deeper than a change of setting.',
        ask: 'What have you tried to outrun by changing your circumstances, only to find it came along?'
      }
    ]
  },
  {
    id: 'gen-10',
    bookId: 'genesis',
    tier: 'grounded',
    span: 'Genesis 10',
    chapterIndex: 10,
    title: 'The table of nations',
    passages: [
      {
        ref: 'Genesis 10',
        kind: 'scene',
        form: 'prose',
        title: 'The table of nations',
        verses: [
          {
            n: 1,
            text: 'This is the account of Noah’s sons Shem, Ham, and Japheth, who also had sons after the flood.'
          },
          {
            n: 2,
            text: 'The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras.'
          },
          {
            n: 3,
            text: 'The sons of Gomer: Ashkenaz, Riphath, and Togarmah.'
          },
          {
            n: 4,
            text: 'And the sons of Javan: Elishah, Tarshish, the Kittites, and the Rodanites.'
          },
          {
            n: 5,
            text: 'From these, the maritime peoples separated into their territories, according to their languages, by clans within their nations.'
          },
          {
            n: 6,
            text: 'The sons of Ham: Cush, Mizraim, Put, and Canaan.'
          },
          {
            n: 7,
            text: 'The sons of Cush: Seba, Havilah, Sabtah, Raamah, and Sabteca. And the sons of Raamah: Sheba and Dedan.'
          },
          {
            n: 8,
            text: 'Cush was the father of Nimrod, who began to be a mighty one on the earth.'
          },
          {
            n: 9,
            text: 'He was a mighty hunter before the LORD; so it is said, “Like Nimrod, a mighty hunter before the LORD.”'
          },
          {
            n: 10,
            text: 'His kingdom began in Babylon, Erech, Accad, and Calneh, in the land of Shinar.'
          },
          {
            n: 11,
            text: 'From that land he went forth into Assyria, where he built Nineveh, Rehoboth-Ir, Calah,'
          },
          {
            n: 12,
            text: 'and Resen, which is between Nineveh and the great city of Calah.'
          },
          {
            n: 13,
            text: 'Mizraim was the father of the Ludites, the Anamites, the Lehabites, the Naphtuhites,'
          },
          {
            n: 14,
            text: 'the Pathrusites, the Casluhites (from whom the Philistines came), and the Caphtorites.'
          },
          {
            n: 15,
            text: 'And Canaan was the father of Sidon his firstborn, and of the Hittites,'
          },
          {
            n: 16,
            text: 'the Jebusites, the Amorites, the Girgashites,'
          },
          {
            n: 17,
            text: 'the Hivites, the Arkites, the Sinites,'
          },
          {
            n: 18,
            text: 'the Arvadites, the Zemarites, and the Hamathites. Later the Canaanite clans were scattered,'
          },
          {
            n: 19,
            text: 'and the borders of Canaan extended from Sidon toward Gerar as far as Gaza, and then toward Sodom, Gomorrah, Admah, and Zeboiim, as far as Lasha.'
          },
          {
            n: 20,
            text: 'These are the sons of Ham according to their clans, languages, lands, and nations.'
          },
          {
            n: 21,
            text: 'And sons were also born to Shem, the older brother of Japheth; Shem was the forefather of all the sons of Eber.'
          },
          {
            n: 22,
            text: 'The sons of Shem: Elam, Asshur, Arphaxad, Lud, and Aram.'
          },
          {
            n: 23,
            text: 'The sons of Aram: Uz, Hul, Gether, and Mash.'
          },
          {
            n: 24,
            text: 'Arphaxad was the father of Shelah, and Shelah was the father of Eber.'
          },
          {
            n: 25,
            text: 'Two sons were born to Eber: One was named Peleg, because in his days the earth was divided, and his brother was named Joktan.'
          },
          {
            n: 26,
            text: 'And Joktan was the father of Almodad, Sheleph, Hazarmaveth, Jerah,'
          },
          {
            n: 27,
            text: 'Hadoram, Uzal, Diklah,'
          },
          {
            n: 28,
            text: 'Obal, Abimael, Sheba,'
          },
          {
            n: 29,
            text: 'Ophir, Havilah, and Jobab. All these were sons of Joktan.'
          },
          {
            n: 30,
            text: 'Their territory extended from Mesha to Sephar, in the eastern hill country.'
          },
          {
            n: 31,
            text: 'These are the sons of Shem, according to their clans, languages, lands, and nations.'
          },
          {
            n: 32,
            text: 'All these are the clans of Noah’s sons, according to their generations and nations. From these the nations of the earth spread out after the flood.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is an ancient map of the known world, sorting every people the writers knew as one family descended from Noah. The names point at real places and powers, Egypt and Canaan, the cities of Nimrod, Babylon and Nineveh, which sets the stage for Babel in the next chapter.',
          src: 'Westermann · Walton'
        }
      }
    ]
  },
  {
    id: 'gen-11',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 11',
    chapterIndex: 11,
    title: 'Babel',
    unitLabel: 'Scene',
    thread: 'The opening movement closes where it began, at Babylon. Humanity gathers on one plain to build a name and a tower to the sky, and God scatters them, leaving the empire’s proudest city renamed for confusion.',
    closeEnd: 'This is the end of the story of everyone. From here the camera narrows to one man, Abram, and a different kind of promise: not a name grasped, but a name given.',
    passages: [
      {
        label: 'One',
        ref: '11:1–4',
        kind: 'scene',
        form: 'prose',
        title: 'Make us a name',
        verses: [
          {
            n: 1,
            text: 'Now the whole world had one language and a common form of speech.'
          },
          {
            n: 2,
            text: 'And as people journeyed eastward, they found a plain in the land of Shinar and settled there.'
          },
          {
            n: 3,
            text: 'And they said to one another, “Come, let us make bricks and bake them thoroughly.” So they used brick instead of stone, and tar instead of mortar.'
          },
          {
            n: 4,
            text: '“Come,” they said, “let us build for ourselves a city with a tower that reaches to the heavens, that we may make a name for ourselves and not be scattered over the face of all the earth.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: '“Shinar” is Babylonia, and a tower with its top in the heavens is unmistakably a ziggurat, the stepped temple-towers of Mesopotamian cities, built of exactly the baked brick and bitumen the text names. Babylon’s own great ziggurat was called Etemenanki, “the house of the foundation of heaven and earth”. The exiles who shaped this story lived in the shadow of those towers, and “Babel” is simply the Hebrew name for Babylon. Notice the motive: a name, and a refusal to be scattered, which is the exact reverse of the command to fill the earth.',
          src: 'Smith · Walton'
        },
        meaning: 'The first empire’s project is to build up, gather in one place, and make a name, security and glory through height and concentration. The text does not draw it as cartoon villainy. It is ambition, the deeply human urge to be permanent, to be known, not to end up scattered and small. The trouble is what it reaches for, and why.',
        lenses: {
          theo: 'Two ways to get a name run through the whole Bible: grasp one by building high, or receive one as a gift. Babel is the first way, the city organizing itself to secure its own glory as if no one above it gave names or kept people. The very next chapter answers it with the second way.'
        },
        addr: {
          mode: 'names',
          text: 'You know the pull to build something tall enough that your name outlasts you, to secure yourself by your own achievement so you won’t be scattered or forgotten.'
        },
        ask: 'What are you building mainly so that your name will last, and what is driving that, really?'
      },
      {
        label: 'Two',
        ref: '11:5–7',
        kind: 'scene',
        form: 'prose',
        title: 'The LORD came down',
        verses: [
          {
            n: 5,
            text: 'Then the LORD came down to see the city and the tower that the sons of men were building.'
          },
          {
            n: 6,
            text: 'And the LORD said, “If they have begun to do this as one people speaking the same language, then nothing they devise will be beyond them.'
          },
          {
            n: 7,
            text: 'Come, let Us go down and confuse their language, so that they will not understand one another’s speech.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The irony is deliberate and sharp. The tower’s top was meant to reach heaven, and the LORD has to come down to see it, the gap between the pretension and the reality played for a quiet, devastating laugh. “Come, let us go down” deliberately echoes the “let us make” of creation, the divine voice now turned toward undoing the project. And the danger God names, that nothing will be beyond them, reads less like jealousy than a sober verdict on unchecked, unified human power.',
          src: 'Westermann'
        },
        meaning: 'God looks at a unity built on self-glory and judges it dangerous, not because height offends him, but because of what people unbound will do with it. There is a hidden mercy in the scattering. Sometimes the breaking-up of a project that was heading somewhere bad is not punishment. It is a brake.',
        lenses: {
          theo: 'The confusion is restraint, and arguably grace. The same God who set a limit on the human lifespan in the flood chapter now sets one on collective reach. He does not let the worst version of human power run all the way to its end. The limit is a kindness disguised as a defeat.'
        },
        addr: {
          mode: 'names',
          text: 'Some unity you are part of, or some momentum you are building, can feel unstoppable, and the interruption you resent might be the thing saving you from where it was actually headed.'
        },
        ask: 'What stalled plan have you been treating as a setback that may have been a brake?'
      },
      {
        label: 'Three',
        ref: '11:8–9',
        kind: 'scene',
        form: 'prose',
        title: 'Babel',
        verses: [
          {
            n: 8,
            text: 'So the LORD scattered them from there over the face of all the earth, and they stopped building the city.'
          },
          {
            n: 9,
            text: 'That is why it is called Babel, for there the LORD confused the language of the whole world, and from that place the LORD scattered them over the face of all the earth.'
          }
        ],
        ground: {
          kind: 'historical',
          text: '“Babel” puns on the Hebrew balal, “to confuse”, but Babel is just the Hebrew word for Babylon. So the closing line is a pointed joke at the empire’s expense: the city whose Babylonian name meant “gate of the god” is renamed, in Hebrew, “confusion”. The exiles took the proudest name in their world and turned it into babble. This is the final panel of the whole primeval history, and it lands squarely on Babylon, the place they were sitting as they wrote.',
          src: 'Smith'
        },
        meaning: 'The opening movement of the Bible ends with humanity scattered, its great project abandoned, its proud city renamed for confusion. It is a bleak close, and for the exiles it was also a strange comfort: the empire that conquered you is, in God’s longer telling, just Babel, just confusion, not permanent, not the last word. The tower never gets finished. The name they reached for is the one thing they lose.',
        lenses: {
          theo: 'The whole arc opened with creation quietly answering Babylon’s myths, and it closes by naming Babylon for what the exiles believed it truly was: impressive, unfinished, and not eternal. The God of this story is the one who outlasts empires. That is the hope folded inside the bleakness. The conquering city is not the end of the world.',
          arch: 'The drive to ascend, to storm heaven and seize a name by force, meets its limit. The heaven-reaching tower is the inflation of the collective ego, and the scattering is its necessary deflation, the return to multiplicity and limit after grandiose overreach. (In the line of Jung on inflation: the self that tries to become god is broken back down to human size.)'
        },
        addr: {
          mode: 'names',
          text: 'Whatever empire or certainty looms over your life right now as though it were permanent, this story insists it has a shelf life. It is Babel. It does not get finished.'
        },
        ask: 'What looks permanent and unanswerable in your life that this story would quietly call temporary?'
      }
    ]
  },
  {
    id: 'gen-12',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 12',
    chapterIndex: 12,
    title: 'The call of Abram',
    unitLabel: 'Scene',
    thread: 'At Babel humanity grasped at a name and was scattered. Now God does the reverse. He calls one man, promises to make his name great, and to bless through him all the families the world just lost.',
    closeEnd: 'The promise is given, and already tested. What it costs, and whether Abram can trust it, will fill the chapters ahead.',
    passages: [
      {
        label: 'One',
        ref: '12:1–3',
        kind: 'scene',
        form: 'prose',
        title: 'The call',
        verses: [
          {
            n: 1,
            text: 'Then the LORD said to Abram, “Leave your country, your kindred, and your father’s household, and go to the land I will show you.'
          },
          {
            n: 2,
            text: 'I will make you into a great nation, and I will bless you; I will make your name great, so that you will be a blessing.'
          },
          {
            n: 3,
            text: 'I will bless those who bless you and curse those who curse you; and all the families of the earth will be blessed through you.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the hinge of the whole Bible. After eleven chapters whose subject is all humanity, the camera settles on one man and stays there. The flood had already shrunk the cast to a single family, Noah’s, but that story was still about the whole world, unmade and remade, with Noah only the thread it survived on. Here the narrowing is the point itself: from now on the story follows one family, and the particular takes over from the universal. The command is lech lecha, “go”, and the promise comes in three parts: a great nation, a great name, and blessing. Then the last line turns outward, all the families of the earth will be blessed through him, the same word, families, for the clans just scattered at Babel. And notice the reversal: where Babel’s builders said “let us make a name for ourselves,” here God says “I will make your name great.”',
          src: 'von Rad · Alter'
        },
        meaning: 'Everything begins with a leaving. Abram is told to cut loose from country, people, and father’s house, the three things that told an ancient person who they were, and walk toward a land he cannot see, on nothing but a promise. Faith here is not agreeing to a doctrine. It is leaving on a word.',
        lenses: {
          theo: 'The call is pure initiative. Abram does nothing to earn it, and the blessing is not for him alone, he is blessed in order to be a blessing, a channel for the whole scattered world. The answer to Babel is not another flood or another scattering. It is one chosen man through whom everyone is meant to be reached.',
          arch: 'It is the summons that opens every road: leave the father’s house, the safety of the known and the collective, and walk out alone toward a destiny you cannot yet picture. The break with the origin is the first step of becoming a self. (The departure as the start of individuation.)'
        },
        addr: {
          mode: 'names',
          text: 'You know both the pull and the dread of a call that asks you to leave something settled for something you cannot yet see.'
        },
        ask: 'What are you being asked to leave, and what would have to be true about the promise for you to actually go?'
      },
      {
        label: 'Two',
        ref: '12:4–9',
        kind: 'scene',
        form: 'prose',
        title: 'So he went',
        verses: [
          {
            n: 4,
            text: 'So Abram departed, as the LORD had directed him, and Lot went with him. Abram was seventy-five years old when he left Haran.'
          },
          {
            n: 5,
            text: 'And Abram took his wife Sarai, his nephew Lot, and all the possessions and people they had acquired in Haran, and set out for the land of Canaan. When they came to the land of Canaan,'
          },
          {
            n: 6,
            text: 'Abram traveled through the land as far as the site of the Oak of Moreh at Shechem. And at that time the Canaanites were in the land.'
          },
          {
            n: 7,
            text: 'Then the LORD appeared to Abram and said, “I will give this land to your offspring.” So Abram built an altar there to the LORD, who had appeared to him.'
          },
          {
            n: 8,
            text: 'From there Abram moved on to the hill country east of Bethel and pitched his tent, with Bethel to the west and Ai to the east. There he built an altar to the LORD, and he called on the name of the LORD.'
          },
          {
            n: 9,
            text: 'And Abram journeyed on toward the Negev.'
          }
        ],
        ground: {
          kind: 'historical',
          text: '“So Abram departed.” He is seventy-five. He reaches Canaan, and the text drops a quiet, loaded line: the Canaanites were already in the land. The promised land is full of other people from the first day. Promise and fact are in tension immediately. Abram answers by building altars at Shechem and Bethel, marking with worship a land he has been promised but does not own.',
          src: 'Westermann · Alter'
        },
        meaning: 'He obeyed, and the reward was not arrival. It was a land that was not yet his, among people already there. The promise did not erase the difficulty; it sent him into it. And his response was to build altars, to stake worship in ground he held only by a word.',
        lenses: {
          theo: 'Faith lives in the gap between the promise and the having. Abram does not own a handful of this soil, and he builds altars on it anyway. That is what trust looks like before anything is fulfilled: worship in the middle of the unkept promise.'
        },
        addr: {
          mode: 'names',
          text: 'You may be standing inside something you were sure you were led to, and finding it already occupied, harder and less yours than you expected.'
        },
        ask: 'Where did following lead you somewhere harder than you expected, and what would building an altar there look like?'
      },
      {
        label: 'Three',
        ref: '12:10–20',
        kind: 'scene',
        form: 'prose',
        title: 'The lie in Egypt',
        verses: [
          {
            n: 10,
            text: 'Now there was a famine in the land. So Abram went down to Egypt to live there for a while because the famine was severe.'
          },
          {
            n: 11,
            text: 'As he was about to enter Egypt, he said to his wife Sarai, “Look, I know that you are a beautiful woman,'
          },
          {
            n: 12,
            text: 'and when the Egyptians see you, they will say, ‘This is his wife.’ Then they will kill me but will let you live.'
          },
          {
            n: 13,
            text: 'Please say you are my sister, so that I will be treated well for your sake, and on account of you my life will be spared.”'
          },
          {
            n: 15,
            text: 'When Pharaoh’s officials saw Sarai, they commended her to him, and she was taken into the palace of Pharaoh.'
          },
          {
            n: 16,
            text: 'He treated Abram well on her account, and Abram acquired sheep and cattle, male and female donkeys, menservants and maidservants, and camels.'
          },
          {
            n: 17,
            text: 'The LORD, however, afflicted Pharaoh and his household with severe plagues because of Abram’s wife Sarai.'
          },
          {
            n: 18,
            text: 'So Pharaoh summoned Abram and asked, “What have you done to me? Why didn’t you tell me she was your wife?'
          },
          {
            n: 19,
            text: 'Why did you say, ‘She is my sister,’ so that I took her as my wife? Now then, here is your wife. Take her and go!”'
          },
          {
            n: 20,
            text: 'Then Pharaoh gave his men orders concerning Abram, and they sent him away with his wife and all his possessions.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The promise is barely spoken before a famine drives Abram to Egypt and he panics. He tells Sarai to call herself his sister, afraid he will be killed for her. She is taken into Pharaoh’s house and Abram is enriched for it. God afflicts Pharaoh, who discovers the deceit and sends them away. It is a jarring story to set right after the call: the chosen man lies, endangers his wife, and nearly hands the mother of the promise to another man. The text does not excuse him.',
          src: 'Alter'
        },
        meaning: 'The promise has hardly left God’s mouth before the man carrying it almost wrecks it out of fear. And here is the strange grace: God protects the promise from Abram himself. The covenant does not rest on Abram being admirable. It survives his worst moment.',
        lenses: {
          theo: 'This early the Bible tells you what kind of grace this is. The promise is guarded even from the failures of the one who carries it. It rests on God’s faithfulness, not on Abram’s courage or character, which is the only reason it survives at all.'
        },
        addr: {
          mode: 'names',
          text: 'You can be genuinely called and still act out of fear in a way that endangers the very thing you were given.'
        },
        soft: 'The promise was kept anyway. It did not depend on him being brave.',
        ask: 'Where has fear made you protect yourself at someone else’s cost, and what would it mean to trust that what you’re guarding does not rest on you alone?'
      }
    ]
  },
  {
    id: 'gen-13',
    bookId: 'genesis',
    tier: 'grounded',
    span: 'Genesis 13',
    chapterIndex: 13,
    title: 'Abram and Lot part',
    passages: [
      {
        ref: 'Genesis 13',
        kind: 'scene',
        form: 'prose',
        title: 'Abram and Lot part',
        verses: [
          {
            n: 1,
            text: 'So Abram went up out of Egypt into the Negev—he and his wife and all his possessions—and Lot was with him.'
          },
          {
            n: 2,
            text: 'And Abram had become extremely wealthy in livestock and silver and gold.'
          },
          {
            n: 3,
            text: 'From the Negev he journeyed from place to place toward Bethel, until he came to the place between Bethel and Ai where his tent had formerly been pitched,'
          },
          {
            n: 4,
            text: 'to the site where he had built the altar. And there Abram called on the name of the LORD.'
          },
          {
            n: 5,
            text: 'Now Lot, who was traveling with Abram, also had flocks and herds and tents.'
          },
          {
            n: 6,
            text: 'But the land was unable to support both of them while they stayed together, for they had so many possessions that they were unable to coexist.'
          },
          {
            n: 7,
            text: 'And there was discord between the herdsmen of Abram and the herdsmen of Lot. At that time the Canaanites and the Perizzites were also living in the land.'
          },
          {
            n: 8,
            text: 'So Abram said to Lot, “Please let there be no contention between you and me, or between your herdsmen and my herdsmen. After all, we are kinsmen.'
          },
          {
            n: 9,
            text: 'Is not the whole land before you? Now separate yourself from me. If you go to the left, I will go to the right; if you go to the right, I will go to the left.”'
          },
          {
            n: 10,
            text: 'And Lot looked out and saw that the whole plain of the Jordan, all the way to Zoar, was well watered like the garden of the LORD, like the land of Egypt. (This was before the LORD destroyed Sodom and Gomorrah.)'
          },
          {
            n: 11,
            text: 'So Lot chose the whole plain of the Jordan for himself and set out toward the east. And Abram and Lot parted company.'
          },
          {
            n: 12,
            text: 'Abram lived in the land of Canaan, but Lot settled in the cities of the plain and pitched his tent toward Sodom.'
          },
          {
            n: 13,
            text: 'But the men of Sodom were wicked, sinning greatly against the LORD.'
          },
          {
            n: 14,
            text: 'After Lot had departed, the LORD said to Abram, “Now lift up your eyes from the place where you are, and look to the north and south and east and west,'
          },
          {
            n: 15,
            text: 'for all the land that you see, I will give to you and your offspring forever.'
          },
          {
            n: 16,
            text: 'I will make your offspring like the dust of the earth, so that if one could count the dust of the earth, then your offspring could be counted.'
          },
          {
            n: 17,
            text: 'Get up and walk around the land, through its length and breadth, for I will give it to you.”'
          },
          {
            n: 18,
            text: 'So Abram moved his tent and went to live near the Oaks of Mamre at Hebron, where he built an altar to the LORD.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This quiet chapter sets up a disaster four chapters away. The narrator pauses to tell us the Jordan plain was lush “before the LORD destroyed Sodom and Gomorrah,” and that its people were already wicked, so Lot’s choice, made entirely by the eye, is visibly aimed at ruin, while Abram keeps living by a promise he cannot see. The detail that the land was “unable to support both of them” reflects the real strain of large herding clans competing for limited grazing and water in the Canaanite hill country.',
          src: 'Alter · Westermann'
        }
      }
    ]
  },
  {
    id: 'gen-14',
    bookId: 'genesis',
    tier: 'grounded',
    span: 'Genesis 14',
    chapterIndex: 14,
    title: 'The kings and Melchizedek',
    passages: [
      {
        ref: 'Genesis 14',
        kind: 'scene',
        form: 'prose',
        title: 'The kings and Melchizedek',
        verses: [
          {
            n: 1,
            text: 'In those days Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of Goiim'
          },
          {
            n: 2,
            text: 'went to war against Bera king of Sodom, Birsha king of Gomorrah, Shinab king of Admah, Shemeber king of Zeboiim, and the king of Bela (that is, Zoar).'
          },
          {
            n: 3,
            text: 'The latter five came as allies to the Valley of Siddim (that is, the Salt Sea).'
          },
          {
            n: 4,
            text: 'For twelve years they had been subject to Chedorlaomer, but in the thirteenth year they rebelled.'
          },
          {
            n: 5,
            text: 'In the fourteenth year, Chedorlaomer and the kings allied with him went out and defeated the Rephaites in Ashteroth-karnaim, the Zuzites in Ham, the Emites in Shaveh-kiriathaim,'
          },
          {
            n: 6,
            text: 'and the Horites in the area of Mount Seir, as far as El-paran, which is near the desert.'
          },
          {
            n: 7,
            text: 'Then they turned back to invade En-mishpat (that is, Kadesh), and they conquered the whole territory of the Amalekites, as well as the Amorites who lived in Hazazon-tamar.'
          },
          {
            n: 8,
            text: 'Then the king of Sodom, the king of Gomorrah, the king of Admah, the king of Zeboiim, and the king of Bela (that is, Zoar) marched out and arrayed themselves for battle in the Valley of Siddim'
          },
          {
            n: 9,
            text: 'against Chedorlaomer king of Elam, Tidal king of Goiim, Amraphel king of Shinar, and Arioch king of Ellasar—four kings against five.'
          },
          {
            n: 10,
            text: 'Now the Valley of Siddim was full of tar pits, and as the kings of Sodom and Gomorrah fled, some men fell into the pits, but the survivors fled to the hill country.'
          },
          {
            n: 11,
            text: 'The four kings seized all the goods of Sodom and Gomorrah and all their food, and they went on their way.'
          },
          {
            n: 12,
            text: 'They also carried off Abram’s nephew Lot and his possessions, since Lot was living in Sodom.'
          },
          {
            n: 13,
            text: 'Then an escapee came and reported this to Abram the Hebrew. Now Abram was living near the Oaks of Mamre the Amorite, a brother of Eshcol and Aner, all of whom were bound by treaty to Abram.'
          },
          {
            n: 14,
            text: 'And when Abram heard that his relative had been captured, he mobilized the 318 trained men born in his household, and they set out in pursuit as far as Dan.'
          },
          {
            n: 15,
            text: 'During the night, Abram divided his forces and routed Chedorlaomer’s army, pursuing them as far as Hobah, north of Damascus.'
          },
          {
            n: 16,
            text: 'He retrieved all the goods, as well as his relative Lot and his possessions, together with the women and the rest of the people.'
          },
          {
            n: 17,
            text: 'After Abram returned from defeating Chedorlaomer and the kings allied with him, the king of Sodom went out to meet him in the Valley of Shaveh (that is, the King’s Valley).'
          },
          {
            n: 18,
            text: 'Then Melchizedek king of Salem brought out bread and wine—since he was priest of God Most High—'
          },
          {
            n: 19,
            text: 'and he blessed Abram and said: “Blessed be Abram by God Most High, Creator of heaven and earth,'
          },
          {
            n: 20,
            text: 'and blessed be God Most High, who has delivered your enemies into your hand.” Then Abram gave Melchizedek a tenth of everything.'
          },
          {
            n: 21,
            text: 'The king of Sodom said to Abram, “Give me the people, but take the goods for yourself.”'
          },
          {
            n: 22,
            text: 'But Abram replied to the king of Sodom, “I have raised my hand to the LORD God Most High, Creator of heaven and earth,'
          },
          {
            n: 23,
            text: 'that I will not accept even a thread, or a strap of a sandal, or anything that belongs to you, lest you should say, ‘I have made Abram rich.’'
          },
          {
            n: 24,
            text: 'I will accept nothing but what my men have eaten and the share for the men who went with me—Aner, Eshcol, and Mamre. They may take their portion.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Chapter 14 sits oddly in the Abraham story. Its style, its archaic-sounding eastern kings, and its picture of Abram as a desert war-leader chasing armies with a private militia appear nowhere else in Genesis, and it reads like a separate old tradition pulled in here. Its strangest figure is Melchizedek, priest-king of Salem (an early name for Jerusalem), who serves God Most High, El Elyon, a Canaanite high-god title the story quietly identifies with the LORD. Centuries later this shadowy priest-king would be reread as the shadow of an eternal priesthood (Psalm 110, and the letter to the Hebrews), but here he is simply a local king who blesses Abram and receives a tenth.',
          src: 'Westermann · Day'
        }
      }
    ]
  },
  {
    id: 'gen-15',
    bookId: 'genesis',
    tier: 'sitting',
    span: 'Genesis 15',
    chapterIndex: 15,
    title: 'The covenant',
    unitLabel: 'Scene',
    thread: 'The promise was made three chapters ago, and Abram is still childless and still landless. Here God answers the two doubts head on: a sky full of stars for the children, and a covenant cut in the dark for the land.',
    closeEnd: 'God has fastened the whole promise to his own life, sworn it while Abram slept. What that costs, and how badly the waiting will be handled, is still ahead.',
    passages: [
      {
        label: 'One',
        ref: '15:1–6',
        kind: 'scene',
        form: 'prose',
        title: 'Count the stars',
        verses: [
          {
            n: 1,
            text: 'After these events, the word of the LORD came to Abram in a vision: “Do not be afraid, Abram. I am your shield, your very great reward.”'
          },
          {
            n: 2,
            text: 'But Abram replied, “O Lord GOD, what can You give me, since I remain childless, and the heir of my house is Eliezer of Damascus?”'
          },
          {
            n: 3,
            text: 'Abram continued, “Behold, You have given me no offspring, so a servant in my household will be my heir.”'
          },
          {
            n: 4,
            text: 'Then the word of the LORD came to Abram, saying, “This one will not be your heir, but one who comes from your own body will be your heir.”'
          },
          {
            n: 5,
            text: 'And the LORD took him outside and said, “Now look to the heavens and count the stars, if you are able.” Then He told him, “So shall your offspring be.”'
          },
          {
            n: 6,
            text: 'Abram believed the LORD, and it was credited to him as righteousness.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Verse 6 is one of the most argued-over sentences in the Bible. Abram, old and childless, is taken out under the night sky, told his descendants will outnumber the stars, and he believes, and that trust is “credited to him as righteousness.” Centuries later Paul built an entire theology of faith on this one line (Romans 4, Galatians 3); James pushed back on that reading (James 2); and the Reformation was fought partly over what “credited as righteousness” means. In its own setting the line is simpler and stranger than any of those fights: a relationship is set right not by anything Abram achieves, but by his willingness to trust a promise that every visible fact contradicts. The “shield” and “reward” of verse 1 still carry a faint echo of the battle in the chapter before.',
          src: 'von Rad · Alter'
        },
        meaning: 'Abram does the most honest thing in the chapter first: he argues. He tells God the promise is empty as long as he has no child. God does not rebuke the complaint, he answers it, walks him outside, and hands him the stars. And Abram believes, not because the evidence changed, he is still old and Sarai still barren, but because he decides to trust the one making the promise. That decision, the text says, is what sets him right.',
        lenses: {
          theo: 'This is the seedbed of grace. Abram is counted righteous before he has done one thing to deserve it, on the strength of trust alone. The relationship is set right by God’s promise and Abram’s yes to it, not by Abram’s record. Everything Paul will later say about faith is already folded into this single line.',
          arch: 'The night sky is the oldest screen we cast the future onto. Led out of his tent to stand under the immensity overhead, the small frightened man is asked to read his own descendants in the stars, to trust a self far larger than the daylight facts allow. (Trusting the promise against the evidence of the senses.)'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to be handed a promise that every fact in front of you flatly contradicts, and to have to decide whether to trust it anyway.'
        },
        ask: 'Where are you being asked to trust something you can see no evidence for yet, and what would actually believing it change about how you live now?'
      },
      {
        label: 'Two',
        ref: '15:7–21',
        kind: 'scene',
        form: 'prose',
        title: 'The covenant in the dark',
        verses: [
          {
            n: 7,
            text: 'The LORD also told him, “I am the LORD, who brought you out of Ur of the Chaldeans to give you this land to possess.”'
          },
          {
            n: 8,
            text: 'But Abram replied, “Lord GOD, how can I know that I will possess it?”'
          },
          {
            n: 9,
            text: 'And the LORD said to him, “Bring Me a heifer, a goat, and a ram, each three years old, along with a turtledove and a young pigeon.”'
          },
          {
            n: 10,
            text: 'So Abram brought all these to Him, split each of them down the middle, and laid the halves opposite each other. The birds, however, he did not cut in half.'
          },
          {
            n: 11,
            text: 'And the birds of prey descended on the carcasses, but Abram drove them away.'
          },
          {
            n: 12,
            text: 'As the sun was setting, Abram fell into a deep sleep, and suddenly great terror and darkness overwhelmed him.'
          },
          {
            n: 13,
            text: 'Then the LORD said to Abram, “Know for certain that your descendants will be strangers in a land that is not their own, and they will be enslaved and mistreated four hundred years.'
          },
          {
            n: 14,
            text: 'But I will judge the nation they serve as slaves, and afterward they will depart with many possessions.'
          },
          {
            n: 16,
            text: 'In the fourth generation your descendants will return here, for the iniquity of the Amorites is not yet complete.”'
          },
          {
            n: 17,
            text: 'When the sun had set and darkness had fallen, behold, a smoking firepot and a flaming torch appeared and passed between the halves of the carcasses.'
          },
          {
            n: 18,
            text: 'On that day the LORD made a covenant with Abram, saying, “To your descendants I have given this land—from the river of Egypt to the great River Euphrates—'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'When Abram asks how he can be sure of the land, God answers not with proof but with a ritual older than Israel. Animals are cut in half and laid in two facing rows, and the parties to an agreement would walk between the pieces, as if to say, “let me be torn apart like these if I break my word.” This is where the Hebrew idiom comes from: a covenant is literally “cut.” But here the rite breaks its own rules. Abram falls into a deep, dreadful sleep, and only God, as a smoking firepot and a blazing torch, passes between the pieces. The oath is one-sided. God alone binds himself, on pain of being torn apart, while Abram only watches. Woven through it is a dark prophecy, four hundred years of slavery in a foreign land before the promise lands: the exile and the exodus seen in advance.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'Abram asks for certainty, and what he gets is a covenant where he carries none of the risk. He sleeps; God walks the bloody path alone. The promise is fastened entirely to God’s own life, not to Abram’s performance, and that is the only reason it can survive everything Abram and his children are about to do to it. And the certainty comes wrapped in darkness: the road to the promise runs straight through four centuries of slavery. Being sure of the end is not the same as being spared the middle.',
        lenses: {
          theo: 'A covenant where only one party passes through the pieces is a one-sided oath. God stakes his own existence on keeping a promise to a man who is asleep. This is grace at its most extreme, a commitment that does not hang on the other side holding up its end, which is exactly why it cannot finally fail.',
          arch: 'The deep sleep and the “great terror and darkness” are the night the waking self cannot enter on its own terms. The decisive thing is sworn while the ego sleeps, in the dark, by a fire that moves on its own. What binds a life most deeply is often sealed below the level of conscious choice. (The covenant sworn in the dark, beneath the waking self.)'
        },
        addr: {
          mode: 'names',
          text: 'You may have wanted a guarantee and been handed instead a darkness to walk into, with the word that someone has bound themselves to you on the far side of it.'
        },
        soft: 'The oath did not rest on Abram. He slept through the part that mattered most, and it held.',
        ask: 'Where did you ask for certainty and get only a promise, and whose keeping of it would you have to trust to walk into the dark?'
      }
    ]
  },
  {
    id: 'gen-16', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 16', chapterIndex: 16,
    title: 'Hagar', unitLabel: 'Scene',
    thread: 'God swore the covenant in chapter 15, and still there is no child. So Sarai stops waiting and arranges one herself, the way the whole world arranges things, and a powerless woman pays for it.',
    closeEnd: 'The promised son is still not here, and the first attempt to force him has wounded everyone it touched. The covenant will be sealed in the body before it is ever fulfilled in a child.',
    passages: [
      {
        label: 'One', ref: '16:1–6', kind: 'scene', form: 'prose', title: 'The scheme',
        verses: [
          { n: 1, text: 'Now Abram’s wife Sarai had borne him no children, but she had an Egyptian maidservant named Hagar.' },
          { n: 2, text: 'So Sarai said to Abram, “Look now, the LORD has prevented me from bearing children. Please go to my maidservant; perhaps I can build a family by her.” And Abram listened to the voice of Sarai.' },
          { n: 4, text: 'And he slept with Hagar, and she conceived. But when Hagar realized that she was pregnant, she began to despise her mistress.' },
          { n: 5, text: 'Then Sarai said to Abram, “May the wrong done to me be upon you! I delivered my servant into your arms, and ever since she saw that she was pregnant, she has treated me with contempt. May the LORD judge between you and me.”' },
          { n: 6, text: '“Here,” said Abram, “your servant is in your hands. Do whatever you want with her.” Then Sarai treated Hagar so harshly that she fled from her.' }
        ],
        ground: { kind: 'historical', text: 'Using a slave as a surrogate was a recognized legal arrangement in the ancient Near East, spelled out in the law codes of the time. The text records the custom without endorsing the cruelty that follows. It is the same pattern as the lie in Egypt: the promise stalls, impatience takes over, and the people with the least power get hurt.', src: 'Speiser · Westermann' },
        meaning: 'The covenant was sworn one chapter ago, and already the waiting is unbearable, so they reach for the ordinary human fix. Sarai’s plan is legal, reasonable, and a disaster. The promise grasped instead of trusted turns three people against each other, and the one with no power in the arrangement is the one driven into the desert.',
        lenses: {
          theo: 'The promise does not need to be helped along by a scheme, and every time someone tries, it costs. Grace keeps its own clock, and the attempt to force its hand here produces not the son of the promise but a wound that will run for generations.',
          arch: 'The impatience that cannot bear the gap between a promise and its fulfillment, and grabs for control to close it, is the oldest sabotage of the thing most wanted. (Forcing the outcome you were asked to wait for.)'
        },
        addr: { mode: 'names', text: 'You know the pull to force a thing you were told to wait for, and the way the shortcut tends to hurt whoever is standing closest with the least say.' },
        ask: 'Where are you reaching for control because the waiting has become unbearable, and who pays for the shortcut?'
      },
      {
        label: 'Two', ref: '16:7–16', kind: 'scene', form: 'prose', title: 'The God who sees',
        verses: [
          { n: 7, text: 'Now the angel of the LORD found Hagar by a spring of water in the desert—the spring along the road to Shur.' },
          { n: 8, text: '“Hagar, servant of Sarai,” he said, “where have you come from, and where are you going?” “I am running away from my mistress Sarai,” she replied.' },
          { n: 10, text: 'Then the angel added, “I will greatly multiply your offspring so that they will be too numerous to count.”' },
          { n: 11, text: 'The angel of the LORD proceeded: “Behold, you have conceived and will bear a son. And you shall name him Ishmael, for the LORD has heard your cry of affliction.' },
          { n: 13, text: 'So Hagar gave this name to the LORD who had spoken to her: “You are the God who sees me,” for she said, “Here I have seen the One who sees me!”' },
          { n: 14, text: 'Therefore the well was called Beer-lahai-roi. It is located between Kadesh and Bered.' }
        ],
        ground: { kind: 'historical', text: 'This is the first time in the Bible anyone gives God a name, and it is not a patriarch who does it. It is a pregnant, runaway, foreign slave woman, alone in the desert. The promise of descendants too many to count, language used until now only for Abram, is spoken over her son.', src: 'Trible · Westermann' },
        meaning: 'God goes after the one who was thrown away, not the one who holds the promise. He finds Hagar in the wilderness, calls her by name, and hears her misery. The instruction to return is hard, almost unbearable, but she does not go back the same. She goes back having been seen by God when no one else saw her at all, and she, the slave, is the one who gets to name him.',
        lenses: {
          theo: 'The God of this story is not only the God of the chosen line. He is the God who sees the discarded, hears the powerless, and meets them where they ran to. The covenant has a center, but its God keeps showing up at the margins.',
          arch: 'The flight into the wilderness, the place stripped of every familiar support, is where the encounter that names God becomes possible. Sometimes you only meet what sees you after you have run out of everywhere else to go. (Being found in the place you fled to.)'
        },
        addr: { mode: 'names', text: 'You may know what it is to be the one overlooked in someone else’s arrangement, and to be seen, really seen, only after you had run as far as you could.' },
        soft: 'She was seen. In the one place she thought she was most alone, she was the one who got to name God.',
        ask: 'Where do you most need to be seen, and what would change if you trusted that you already have been?'
      }
    ]
  },
  {
    id: 'gen-17', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 17', chapterIndex: 17,
    title: 'Circumcision',
    passages: [
      {
        ref: 'Genesis 17 (selected)', kind: 'scene', form: 'prose', title: 'Circumcision',
        verses: [
          { n: 1, text: 'When Abram was ninety-nine years old, the LORD appeared to him and said, “I am God Almighty. Walk before Me and be blameless.' },
          { n: 4, text: '“As for Me, this is My covenant with you: You will be the father of many nations.' },
          { n: 5, text: 'No longer will you be called Abram, but your name will be Abraham, for I have made you a father of many nations.' },
          { n: 7, text: 'I will establish My covenant as an everlasting covenant between Me and you and your descendants after you, to be your God and the God of your descendants after you.' },
          { n: 10, text: 'This is My covenant with you and your descendants after you, which you are to keep: Every male among you must be circumcised.' },
          { n: 11, text: 'You are to circumcise the flesh of your foreskin, and this will be a sign of the covenant between Me and you.' },
          { n: 15, text: 'Then God said to Abraham, “As for Sarai your wife, do not call her Sarai, for her name is to be Sarah.' },
          { n: 16, text: 'And I will bless her and will surely give you a son by her. I will bless her, and she will be the mother of nations; kings of peoples will descend from her.”' },
          { n: 17, text: 'Abraham fell facedown. Then he laughed and said to himself, “Can a child be born to a man who is a hundred years old? Can Sarah give birth at the age of ninety?”' },
          { n: 19, text: 'But God replied, “Your wife Sarah will indeed bear you a son, and you are to name him Isaac. I will establish My covenant with him as an everlasting covenant for his descendants after him.' },
          { n: 23, text: 'On that very day Abraham took his son Ishmael and all those born in his household or purchased with his money—every male among the members of Abraham’s household—and he circumcised them, just as God had told him.' }
        ],
        ground: { kind: 'historical', text: 'This is the priestly counterpart to chapter 15’s covenant: the same promise sealed a second time, in a different voice, now with a sign cut into the body. Abram becomes Abraham and Sarai becomes Sarah, new names for a remade identity. Circumcision becomes the mark that says whose you are, and it mattered most much later, in exile, when a people with no land and no temple still carried the covenant on their bodies. Notice too that Abraham laughs at the promise here, one chapter before Sarah does; the son’s name, Isaac, means “he laughs.”', src: 'Friedman · Smith' }
      }
    ]
  },
  {
    id: 'gen-18', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 18', chapterIndex: 18,
    title: 'The visitors', unitLabel: 'Scene',
    thread: 'The covenant has a sign now and the son has a name. Here the promise finally gets a deadline, and Sarah laughs at it, and then Abraham turns and argues with God to spare a city.',
    closeEnd: 'Two strangers walk on toward Sodom, and the question Abraham pressed, whether the Judge of all the earth will do right, is about to be answered in fire.',
    passages: [
      {
        label: 'One', ref: '18:1–15', kind: 'scene', form: 'prose', title: 'Sarah laughs',
        verses: [
          { n: 1, text: 'Then the LORD appeared to Abraham by the Oaks of Mamre in the heat of the day, while he was sitting at the entrance of his tent.' },
          { n: 2, text: 'And Abraham looked up and saw three men standing nearby. When he saw them, he ran from the entrance of his tent to meet them and bowed low to the ground.' },
          { n: 6, text: 'So Abraham hurried into the tent and said to Sarah, “Quick! Prepare three seahs of fine flour, knead it, and bake some bread.”' },
          { n: 10, text: 'Then the LORD said, “I will surely return to you at this time next year, and your wife Sarah will have a son!” Now Sarah was behind him, listening at the entrance to the tent.' },
          { n: 11, text: 'And Abraham and Sarah were already old and well along in years; Sarah had passed the age of childbearing.' },
          { n: 12, text: 'So she laughed to herself, saying, “After I am worn out and my master is old, will I now have this pleasure?”' },
          { n: 14, text: 'Is anything too difficult for the LORD? At the appointed time I will return to you—in about a year—and Sarah will have a son.”' },
          { n: 15, text: 'But Sarah was afraid, so she denied it and said, “I did not laugh.” “No,” replied the LORD, “but you did laugh.”' }
        ],
        ground: { kind: 'setting', text: 'The scene runs on the iron law of desert hospitality: a stranger at your tent must be fed and protected, and Abraham’s frantic generosity is exactly what the code demanded. The promise that has hung in the air for chapters finally gets a date, by this time next year. The son’s name, Isaac, means “he laughs,” and nearly everyone in these chapters laughs at the promise before it arrives.', src: 'Alter · Westermann' },
        meaning: 'The promise has been spoken so many times, to a couple now far too old, that the only honest response left is a tired laugh behind the tent flap. And God does not punish the laugh. He names it, gently, and asks the question the whole book turns on: is anything too hard for the LORD? The son will be called Laughter, as if to keep the disbelief and the joy in the same word forever.',
        lenses: {
          theo: 'God meets the laugh of exhausted hope not with anger but with a date. The promise does not depend on Sarah believing it; it depends on the One who made it, and it will arrive on his calendar, carrying her laughter in its name.',
          arch: 'The laugh is the sound of the part of us that has quietly given up, hearing the old hope named out loud again. To be caught laughing, and not condemned for it, is its own kind of mercy. (The disbelief that hope has to pass through.)'
        },
        addr: { mode: 'names', text: 'You know the tired, private laugh at a hope you stopped letting yourself believe, and maybe the fear of being caught still wanting it.' },
        ask: 'What promise have you quietly laughed off because the waiting wore you out, and what if it were still coming?'
      },
      {
        label: 'Two', ref: '18:16–33', kind: 'scene', form: 'prose', title: 'Abraham bargains',
        verses: [
          { n: 17, text: 'And the LORD said, “Shall I hide from Abraham what I am about to do?' },
          { n: 20, text: 'Then the LORD said, “The outcry against Sodom and Gomorrah is great. Because their sin is so grievous,' },
          { n: 23, text: 'Abraham stepped forward and said, “Will You really sweep away the righteous with the wicked?' },
          { n: 24, text: 'What if there are fifty righteous ones in the city? Will You really sweep it away and not spare the place for the sake of the fifty righteous ones who are there?' },
          { n: 25, text: 'Far be it from You to do such a thing—to kill the righteous with the wicked, so that the righteous and the wicked are treated alike. Far be it from You! Will not the Judge of all the earth do what is right?”' },
          { n: 26, text: 'So the LORD replied, “If I find fifty righteous ones within the city of Sodom, on their account I will spare the whole place.”' },
          { n: 27, text: 'Then Abraham answered, “Now that I have ventured to speak to the Lord—though I am but dust and ashes—' },
          { n: 32, text: 'Finally, Abraham said, “May the Lord not be angry, but let me speak once more. Suppose ten are found there?” And He answered, “On account of the ten, I will not destroy it.”' },
          { n: 33, text: 'When the LORD had finished speaking with Abraham, He departed, and Abraham returned home.' }
        ],
        ground: { kind: 'historical', text: 'Abraham haggles with God like a man bargaining in a market, and God lets him, all the way down from fifty to ten. The argument assumes something radical: that the fate of a city is a real question of justice God can be held to, and that a human being may press him on it.', src: 'von Rad · Brueggemann' },
        meaning: 'A man stands in front of God and argues, on behalf of strangers, that mercy should outweigh judgment, and God does not strike him down for it. He welcomes the bargaining. The same book that praised Abram’s silent trust now honors his loud objection, because both are ways of taking God seriously. Abraham pleads for a wicked city, and the floor keeps dropping, because the question he asks, will the Judge of all the earth do right, is one God seems glad to be asked.',
        lenses: {
          theo: 'Intercession is treated here as something God invites, not endures. To argue with God for mercy on others is not irreverence; it is one of the truest things a person can do, and the book stages it as a kind of friendship.',
          arch: 'To stand before the overwhelming and plead for the undeserving, refusing to let power simply be power, is the conscience grown large enough to argue with its own God. (Pleading for mercy against the logic of judgment.)'
        },
        addr: { mode: 'claims', text: 'You may know the difference between accepting a verdict and daring to argue it, and how much more it asks of you to stand up for people who cannot stand up for themselves.' },
        ask: 'Where could you press for mercy on behalf of someone who has none coming, and what stops you from making the case?'
      }
    ]
  },
  {
    id: 'gen-19', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 19', chapterIndex: 19,
    title: 'Sodom', unitLabel: 'Scene',
    thread: 'Abraham bargained God down to ten righteous people. The story now goes down into the city to count, and what it finds is the exact opposite of the hospitality Abraham showed the same three visitors.',
    closeEnd: 'The fire was real, and so was the injustice it answered. What the fire was not about is the thing this chapter is most often made to say.',
    passages: [
      {
        label: 'One', ref: '19:1–11', kind: 'scene', form: 'prose', title: 'The city at the door',
        verses: [
          { n: 1, text: 'Now the two angels arrived at Sodom in the evening, and Lot was sitting in the gateway of the city. When Lot saw them, he got up to meet them, bowed facedown,' },
          { n: 2, text: 'and said, “My lords, please turn aside into the house of your servant; wash your feet and spend the night. Then you can rise early and go on your way.” “No,” they answered, “we will spend the night in the square.”' },
          { n: 4, text: 'Before they had gone to bed, all the men of the city of Sodom, both young and old, surrounded the house.' },
          { n: 5, text: 'They called out to Lot, saying, “Where are the men who came to you tonight? Send them out to us so we can have relations with them!”' },
          { n: 6, text: 'Lot went outside to meet them, shutting the door behind him.' },
          { n: 8, text: 'Look, I have two daughters who have never slept with a man. Let me bring them to you, and you can do to them as you please. But do not do anything to these men, for they have come under the protection of my roof.”' },
          { n: 9, text: '“Get out of the way!” they replied. And they declared, “This one came here as a foreigner, and he is already acting like a judge! Now we will treat you worse than them.” And they pressed in on Lot and moved in to break down the door.' },
          { n: 11, text: 'And they struck the men at the entrance, young and old, with blindness, so that they wearied themselves trying to find the door.' }
        ],
        ground: { kind: 'historical', text: 'The chapter is built as the dark mirror of the one before it. Abraham met three strangers with frantic generosity; the men of Sodom meet two strangers with a mob at the door demanding to violate them. In the ancient world, protecting the vulnerable traveler was close to sacred, and assault on a guest was its absolute violation. Lot’s own offer of his daughters is monstrous, and the text reports it without a word of approval; it shows a man whose sense of honor has rotted along with his city.', src: 'Westermann · Alter' },
        misreading: { named: 'Sodom was destroyed for homosexuality, and the story is God’s verdict on gay people.', why: 'The narrative stages a mob attempting gang rape, an act of violent domination set as the opposite of the hospitality Abraham just showed. When the Bible itself later names Sodom’s sin, it points elsewhere: Ezekiel says Sodom was arrogant, overfed, and unconcerned for the poor and needy. The chapter judges cruelty, injustice, and the violation of the vulnerable. Reading it as a verdict on whom a person loves both misses the text and turns it into the very harm to the vulnerable that the text condemns.' },
        meaning: 'It is worth being plain, because this is one of the most misread chapters in the Bible. The sin the story stages is violence and the violation of the helpless, a whole city moving as one to assault strangers who came under the protection of a roof. The threatened act is rape, which is about domination, not desire. The measure the chapter applies is the one Abraham passed and Sodom failed: how the powerful treat the powerless stranger at the gate.',
        lenses: {
          theo: 'The judgment falls on a city that had made cruelty to outsiders its ordinary way of life. The fire is terrible, and what it answers is a settled, communal injustice, not a private identity.',
          arch: 'The walled city that turns on every stranger at its gate is the closed self that can no longer receive what comes from outside it, and destroys what it cannot absorb. (The self that devours what it should welcome.)'
        },
        addr: { mode: 'names', text: 'You have felt the difference between a place that opens to the stranger and a place that closes against them, and maybe the pull of the crowd that wants to make the outsider pay.' },
        ask: 'Where do you meet the outsider with the door open, and where with the mob, and which city are you building?'
      },
      {
        label: 'Two', ref: '19:15–29', kind: 'scene', form: 'prose', title: 'Don’t look back',
        verses: [
          { n: 15, text: 'At daybreak the angels hurried Lot along, saying, “Get up! Take your wife and your two daughters who are here, or you will be swept away in the punishment of the city.”' },
          { n: 16, text: 'But when Lot hesitated, the men grabbed his hand and the hands of his wife and his two daughters. And they led them safely out of the city, because of the LORD’s compassion for them.' },
          { n: 17, text: 'As soon as the men had brought them out, one of them said, “Run for your lives! Do not look back, and do not stop anywhere on the plain! Flee to the mountains, or you will be swept away!”' },
          { n: 24, text: 'Then the LORD rained down sulfur and fire on Sodom and Gomorrah—from the LORD out of the heavens.' },
          { n: 25, text: 'Thus He destroyed these cities and the entire plain, including all the inhabitants of the cities and everything that grew on the ground.' },
          { n: 26, text: 'But Lot’s wife looked back, and she became a pillar of salt.' },
          { n: 29, text: 'So when God destroyed the cities of the plain, He remembered Abraham, and He brought Lot out of the catastrophe that destroyed the cities where he had lived.' }
        ],
        ground: { kind: 'historical', text: 'The destruction reads like the strange, lifeless landscape around the Dead Sea, a place of sulfur, salt, and tar pits, and the pillar of salt is the kind of story told to explain the salt formations that still stand there. The chapter even says the rescue had nothing to do with Lot’s merit: God remembered Abraham. The disturbing coda that follows, Lot’s daughters and the origin of Moab and Ammon, is a pointed origin story for two of Israel’s rival neighbors.', src: 'Alter · Westermann' },
        meaning: 'Even the rescue is not about the one rescued. Lot is dragged out by the hand because God remembered Abraham, the man who stood on the ridge and bargained for the city. The bargain held: there were not even ten righteous, and Sodom fell. But the one connection to a praying friend was enough to pull a flawed family out by force. And Lot’s wife, looking back at the only world she knew, becomes a monument to the cost of being unable to leave what is already lost.',
        lenses: {
          theo: 'Grace here runs through relationship. Lot is saved not because he earned it but because someone interceded for him. The chapter quietly answers Abraham’s bargaining: the ten were not found, and yet the pleading was not wasted. It reached the one household it could.',
          arch: 'To be told not to look back, and to look anyway, is the pull of the self toward the burning thing it cannot stop loving. What you cannot stop turning toward can fix you in place. (The backward look that turns you to salt.)'
        },
        addr: { mode: 'names', text: 'You know the backward look, the inability to stop turning toward something already gone, and how it can freeze you where you stand.' },
        soft: 'He was pulled out by the hand. Sometimes you are saved not by your own strength but because someone refused to stop pleading for you.',
        ask: 'What are you still looking back at that you cannot afford to keep facing, and who has a hand out to pull you forward?'
      }
    ]
  },
  {
    id: 'gen-20', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 20', chapterIndex: 20,
    title: 'Sarah and Abimelech',
    passages: [
      {
        ref: 'Genesis 20 (selected)', kind: 'scene', form: 'prose', title: 'Sarah and Abimelech',
        verses: [
          { n: 1, text: 'Now Abraham journeyed from there to the region of the Negev and settled between Kadesh and Shur. While he was staying in Gerar,' },
          { n: 2, text: 'Abraham said of his wife Sarah, “She is my sister.” So Abimelech king of Gerar had Sarah brought to him.' },
          { n: 3, text: 'One night, however, God came to Abimelech in a dream and told him, “You are as good as dead because of the woman you have taken, for she is a married woman.”' },
          { n: 4, text: 'Now Abimelech had not gone near her, so he replied, “Lord, would You destroy a nation even though it is innocent?' },
          { n: 5, text: 'Didn’t Abraham tell me, ‘She is my sister’? And she herself said, ‘He is my brother.’ I have done this in the integrity of my heart and the innocence of my hands.”' },
          { n: 6, text: 'Then God said to Abimelech in the dream, “Yes, I know that you did this with a clear conscience, and so I have kept you from sinning against Me. That is why I did not let you touch her.' },
          { n: 7, text: 'Now return the man’s wife, for he is a prophet; he will pray for you and you will live. But if you do not restore her, be aware that you will surely die—you and all who belong to you.”' },
          { n: 11, text: 'Abraham replied, “I thought to myself, ‘Surely there is no fear of God in this place. They will kill me on account of my wife.’' },
          { n: 14, text: 'So Abimelech brought sheep and cattle, menservants and maidservants, and he gave them to Abraham and restored his wife Sarah to him.' },
          { n: 17, text: 'Then Abraham prayed to God, and God healed Abimelech and his wife and his maidservants, so that they could again bear children—' }
        ],
        ground: { kind: 'historical', text: 'This is the third time a patriarch passes his wife off as his sister to a foreign king, after Genesis 12 and before Genesis 26. Three versions of one story is strong evidence that the traditions behind Genesis circulated in variant forms the editors kept side by side rather than smoothing into one. The sharpest detail here is that Abimelech, the pagan king, behaves more honorably than Abraham, the man of the promise, and God still calls Abraham a prophet.', src: 'Friedman · Westermann' }
      }
    ]
  },
  {
    id: 'gen-21', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 21', chapterIndex: 21,
    title: 'Isaac born', unitLabel: 'Scene',
    thread: 'The promise finally arrives, a son named Laughter, and on the same page the cost of the old shortcut comes due: Hagar and her boy are sent into the desert a second time.',
    closeEnd: 'The son of the promise is here, and the son of the scheme is spared in the wilderness. What the promise will yet ask of Abraham, it has not asked. That comes next.',
    passages: [
      {
        label: 'One', ref: '21:1–7', kind: 'scene', form: 'prose', title: 'Laughter',
        verses: [
          { n: 1, text: 'Now the LORD attended to Sarah as He had said, and the LORD did for Sarah what He had promised.' },
          { n: 2, text: 'So Sarah conceived and bore a son to Abraham in his old age, at the very time God had promised.' },
          { n: 3, text: 'And Abraham gave the name Isaac to the son Sarah bore to him.' },
          { n: 6, text: 'Then Sarah said, “God has made me laugh, and everyone who hears of this will laugh with me.”' },
          { n: 7, text: 'She added, “Who would have told Abraham that Sarah would nurse children? Yet I have borne him a son in his old age.”' }
        ],
        ground: { kind: 'historical', text: 'Isaac means “he laughs.” Across these chapters the name gathers up every laugh aimed at the promise: Abraham’s in chapter 17, Sarah’s behind the tent in chapter 18, and now Sarah’s again, only this time it is joy instead of disbelief. The same word held the doubt and now holds the delight.', src: 'Alter' },
        meaning: 'The promise that was sworn, signed, dated, and laughed at finally arrives, and it arrives as a baby and a laugh. Sarah’s bitter laugh from behind the tent flap comes back transformed: God has brought me laughter. The thing held against every impossibility for twenty-five years is here, ordinary and astonishing, nursing at an old woman’s breast.',
        lenses: {
          theo: 'The promise kept does not erase the long wait, it redeems it. The years of barrenness and doubt are not deleted; they are gathered into a joy that knows exactly what it cost to arrive. Grace fulfilled still carries the memory of grace delayed.',
          arch: 'The long-awaited birth, after hope had curdled into a tired laugh, is the new life that arrives only on the far side of giving up the demand to force it. (What is born when you finally stop grasping.)'
        },
        addr: { mode: 'names', text: 'You know what it is to want something so long that you laughed it off to protect yourself, and what it would be to have it arrive anyway, late, real, and yours.' },
        ask: 'What long-deferred hope would you barely let yourself name, and what would receiving it ask you to feel?'
      },
      {
        label: 'Two', ref: '21:8–21', kind: 'scene', form: 'prose', title: 'Cast out',
        verses: [
          { n: 9, text: 'But Sarah saw that the son whom Hagar the Egyptian had borne to Abraham was mocking her son,' },
          { n: 10, text: 'and she said to Abraham, “Expel the slave woman and her son, for the slave woman’s son will never share in the inheritance with my son Isaac!”' },
          { n: 11, text: 'Now this matter distressed Abraham greatly because it concerned his son Ishmael.' },
          { n: 12, text: 'But God said to Abraham, “Do not be distressed about the boy and your maidservant. Listen to everything that Sarah tells you, for through Isaac your offspring will be reckoned.' },
          { n: 13, text: 'But I will also make a nation of the slave woman’s son, because he is your offspring.”' },
          { n: 14, text: 'Early in the morning, Abraham got up, took bread and a skin of water, put them on Hagar’s shoulders, and sent her away with the boy. She left and wandered in the Wilderness of Beersheba.' },
          { n: 16, text: 'Then she went off and sat down nearby, about a bowshot away, for she said, “I cannot bear to watch the boy die!” And as she sat nearby, she lifted up her voice and wept.' },
          { n: 17, text: 'Then God heard the voice of the boy, and the angel of God called to Hagar from heaven, “What is wrong, Hagar? Do not be afraid, for God has heard the voice of the boy where he lies.' },
          { n: 19, text: 'Then God opened her eyes, and she saw a well of water. So she went and filled the skin with water and gave the boy a drink.' },
          { n: 20, text: 'And God was with the boy, and he grew up and settled in the wilderness and became a great archer.' }
        ],
        ground: { kind: 'historical', text: 'This is Hagar’s second exile, and it is harder than the first. Last time she ran; this time she is sent, with a child and a single skin of water, into a desert where she expects to bury her son. The text does not soften Abraham’s act or Sarah’s demand. It simply records that God hears the boy and does not let him die.', src: 'Trible · Westermann' },
        meaning: 'The arrival of the promised son and the casting out of the other son happen on the same page, and the book refuses to pretend the second is clean. A child is sent toward death by thirst so an inheritance can stay whole. And again, as in chapter 16, the God of the covenant turns toward the discarded ones: he hears the boy, opens the mother’s eyes to water already there, and keeps a promise to a child who was never the chosen one. The chosen line has a shadow, and God does not abandon the shadow.',
        lenses: {
          theo: 'Election in this book is never the same as God’s care running out for everyone else. Isaac carries the covenant, but God hears Ishmael cry, saves him, and promises him a future too. The center is chosen; the margin is not forsaken.',
          arch: 'The thing we cast out to keep our own story whole does not simply vanish. It survives in the wilderness, heard and kept, and the book will not let us forget it is still our offspring. (What you exile to protect the inheritance.)'
        },
        addr: { mode: 'names', text: 'You may know the uncomfortable side of getting what you longed for, the someone or something pushed out of the frame so the picture could stay clean.' },
        soft: 'God heard the boy. The one cast out to the edge of the story was not outside the reach of being heard.',
        ask: 'Who or what got pushed to the margins so your own story could hold together, and what would it mean to believe they were still heard?'
      }
    ]
  },
  {
    id: 'gen-22', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 22', chapterIndex: 22,
    title: 'The binding of Isaac', unitLabel: 'Scene',
    thread: 'The son took twenty-five years to arrive. In the next breath God asks Abraham to give him back, on an altar, by his own hand. This is the chapter the whole movement has been walking toward.',
    closeEnd: 'A ram dies instead of a boy, and the promise is sworn again. But Abraham and God never speak again in the book, and Sarah is dead by the next chapter. The story does not tell you how to feel about a God who would ask. It shows you a father who went, and a knife that stopped.',
    passages: [
      {
        label: 'One', ref: '22:1–8', kind: 'scene', form: 'prose', title: 'Take your son',
        verses: [
          { n: 1, text: 'Some time later God tested Abraham and said to him, “Abraham!” “Here I am,” he answered.' },
          { n: 2, text: '“Take your son,” God said, “your only son Isaac, whom you love, and go to the land of Moriah. Offer him there as a burnt offering on one of the mountains, which I will show you.”' },
          { n: 3, text: 'So Abraham got up early the next morning, saddled his donkey, and took along two of his servants and his son Isaac. He split the wood for a burnt offering and set out for the place God had designated.' },
          { n: 4, text: 'On the third day Abraham looked up and saw the place in the distance.' },
          { n: 6, text: 'Abraham took the wood for the burnt offering and placed it on his son Isaac. He himself carried the fire and the sacrificial knife, and the two of them walked on together.' },
          { n: 7, text: 'Then Isaac said to his father Abraham, “My father!” “Here I am, my son,” he replied. “The fire and the wood are here,” said Isaac, “but where is the lamb for the burnt offering?”' },
          { n: 8, text: 'Abraham answered, “God Himself will provide the lamb for the burnt offering, my son.” And the two walked on together.' }
        ],
        ground: { kind: 'historical', text: 'The command is monstrous by the book’s own standards. Child sacrifice is something the Bible elsewhere condemns with horror, and God has just spent chapters insisting Isaac is the one through whom everything comes. The Hebrew piles on the knife: your son, your only son, whom you love. And the man who argued God down over Sodom, who haggled for strangers, says nothing. He gets up early and goes, and the narrator gives us not one word of his inner life across a three-day walk.', src: 'von Rad · Alter · Spiegel' },
        meaning: 'This is the chapter the whole movement has climbed toward, and it refuses to be comfortable. The line that breaks you is the small one, repeated twice: the two of them went on together. A father walks his son to an altar, the boy carrying the wood, and they talk. There is no clean lesson here. There is a command no one should obey, a silence where a protest should be, and a question from a child, where is the lamb, that the father cannot answer straight.',
        lenses: {
          theo: 'Readers have fought over this forever. Some hear the supreme act of faith, trust extended past the edge of sense. Some hear the story that ends child sacrifice, the ram replacing the son once and for all. Some cannot get past the horror of a God who would ask, or a father who would go. The book holds all of it and resolves none of it, and that refusal is part of its honesty.',
          arch: 'The willingness to surrender the most beloved thing, the very thing waited a lifetime for, touches the oldest terror: that what you love most may be asked of you. Whether that is faith or a wound, the story will not say. (The thing you waited for, asked back.)'
        },
        addr: { mode: 'names', text: 'You may know the dread of the thing you love most being the thing at risk, and the silence that falls when there is no good answer to give the person walking beside you.' },
        ask: 'Where have you walked toward something unbearable in silence, and what did you say to the people beside you who did not know?'
      },
      {
        label: 'Two', ref: '22:9–19', kind: 'scene', form: 'prose', title: 'The knife',
        verses: [
          { n: 9, text: 'When they arrived at the place God had designated, Abraham built the altar there and arranged the wood. He bound his son Isaac and placed him on the altar, atop the wood.' },
          { n: 10, text: 'Then Abraham reached out his hand and took the knife to slaughter his son.' },
          { n: 11, text: 'Just then the angel of the LORD called out to him from heaven, “Abraham, Abraham!” “Here I am,” he replied.' },
          { n: 12, text: '“Do not lay a hand on the boy or do anything to him,” said the angel, “for now I know that you fear God, since you have not withheld your only son from me.”' },
          { n: 13, text: 'Then Abraham looked up and saw behind him a ram in a thicket, caught by its horns. So he went and took the ram and offered it as a burnt offering in place of his son.' },
          { n: 14, text: 'And Abraham called that place The LORD Will Provide. So to this day it is said, “On the mountain of the LORD it will be provided.”' },
          { n: 19, text: 'Abraham went back to his servants, and they got up and set out together for Beersheba. And Abraham settled in Beersheba.' }
        ],
        ground: { kind: 'historical', text: 'The knife is raised, and a voice stops it, and a ram is caught in the thicket. Many read the whole episode as the moment Israel’s God breaks with the surrounding practice of sacrificing children: the animal replaces the son, and never again. Notice what the text says and does not say at the end. Abraham returns to his servants. Isaac is not mentioned coming down the mountain with him. The two who walked up together are not said to walk down together.', src: 'Spiegel · Levenson · Alter' },
        meaning: 'The hand stops. A ram dies instead of a boy, the place is named The LORD Will Provide, and the promise is sworn one more time, stars and sand. And still the story will not let you exhale all the way. Abraham passes the test, but something is spent. He and God never speak again in the book. He comes down the mountain alone in the text. Sarah dies at the start of the next chapter, and the old readers, unable to bear the gap, told stories that she died of the news. The promise survives. The cost is left unmeasured.',
        lenses: {
          theo: 'If there is good news here it is the ram: that God stops the hand, that the thing demanded is not finally taken, that provision arrives at the last second from outside. But the book does not hand you that comfort cleanly. It makes you walk all the way up the mountain first, and it does not undo what the walk cost.',
          arch: 'To go to the edge of losing the irreplaceable thing, and to have it given back, is not the same as never having faced the loss. You come down changed, and not everything that went up comes down with you. (What the mountain keeps.)'
        },
        addr: { mode: 'names', text: 'You may know the strange aftermath of a dread lifted at the last moment, the relief that does not quite cancel what the fear already took from you.' },
        soft: 'The hand was stopped. Whatever it cost, the boy came down off the mountain alive.',
        ask: 'What have you been asked to hold so loosely that you might lose it, and what did the holding cost you, even when it was given back?'
      }
    ]
  },
  {
    id: 'gen-23', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 23', chapterIndex: 23,
    title: 'Sarah’s death',
    passages: [
      {
        ref: 'Genesis 23 (selected)', kind: 'scene', form: 'prose', title: 'Sarah’s death',
        verses: [
          { n: 1, text: 'Now Sarah lived to be 127 years old.' },
          { n: 2, text: 'She died in Kiriath-arba (that is, Hebron) in the land of Canaan, and Abraham went out to mourn and to weep for her.' },
          { n: 4, text: '“I am a foreigner and an outsider among you. Give me a burial site among you so that I can bury my dead.”' },
          { n: 9, text: 'to sell me the cave of Machpelah that belongs to him; it is at the end of his field. Let him sell it to me in your presence for full price, so that I may have a burial site.”' },
          { n: 17, text: 'So Ephron’s field at Machpelah near Mamre, the cave that was in it, and all the trees within the boundaries of the field were deeded over' },
          { n: 18, text: 'to Abraham’s possession in the presence of all the Hittites who had come to the gate of his city.' },
          { n: 19, text: 'After this, Abraham buried his wife Sarah in the cave of the field at Machpelah near Mamre (that is, Hebron) in the land of Canaan.' },
          { n: 20, text: 'So the field and its cave were deeded by the Hittites to Abraham as a burial site.' }
        ],
        ground: { kind: 'historical', text: 'Abraham buys a cave at Machpelah from Ephron the Hittite to bury Sarah, and the long, formal haggling over the price is exactly how property changed hands in the ancient Near East, witnesses at the city gate and all. The quiet point is the chapter’s heart: the man promised the whole land dies owning none of it except a grave. The first piece of the promise he can actually hold is a tomb.', src: 'Sarna · Westermann' }
      }
    ]
  },
  {
    id: 'gen-24', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 24', chapterIndex: 24,
    title: 'A wife for Isaac',
    passages: [
      {
        ref: 'Genesis 24 (selected)', kind: 'scene', form: 'prose', title: 'A wife for Isaac',
        verses: [
          { n: 2, text: 'So Abraham instructed the chief servant of his household, who managed all he owned, “Place your hand under my thigh,' },
          { n: 3, text: 'and I will have you swear by the LORD, the God of heaven and the God of earth, that you will not take a wife for my son from the daughters of the Canaanites among whom I am dwelling,' },
          { n: 4, text: 'but will go to my country and my kindred to take a wife for my son Isaac.”' },
          { n: 12, text: '“O LORD, God of my master Abraham,” he prayed, “please grant me success today, and show kindness to my master Abraham.' },
          { n: 14, text: 'Now may it happen that the girl to whom I say, ‘Please let down your jar that I may drink,’ and who responds, ‘Drink, and I will water your camels as well’—let her be the one You have appointed for Your servant Isaac. By this I will know that You have shown kindness to my master.”' },
          { n: 15, text: 'Before the servant had finished praying, Rebekah came out with her jar on her shoulder. She was the daughter of Bethuel son of Milcah, the wife of Abraham’s brother Nahor.' },
          { n: 19, text: 'After she had given him a drink, she said, “I will also draw water for your camels, until they have had enough to drink.”' },
          { n: 67, text: 'And Isaac brought her into the tent of his mother Sarah and took Rebekah as his wife. And Isaac loved her and was comforted after his mother’s death.' }
        ],
        ground: { kind: 'historical', text: 'This is the longest single scene in Genesis, told with a leisure the book usually denies itself, and it is built on a pattern you will see again: a man meets his future bride at a well (Jacob will, and Moses will too). Abraham sends his servant back to the family in Mesopotamia, since marriage was meant to stay within the kin, and the chapter watches providence work not through miracles but through ordinary hospitality, a girl who offers to water the camels.', src: 'Alter · Sarna' }
      }
    ]
  },
  {
    id: 'gen-25a', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 25:1–18', chapterIndex: 25,
    title: 'Abraham’s death',
    passages: [
      {
        ref: 'Genesis 25:1–18 (selected)', kind: 'scene', form: 'prose', title: 'Abraham’s death',
        verses: [
          { n: 1, text: 'Now Abraham had taken another wife, named Keturah,' },
          { n: 5, text: 'Abraham left everything he owned to Isaac.' },
          { n: 7, text: 'Abraham lived a total of 175 years.' },
          { n: 8, text: 'And at a ripe old age he breathed his last and died, old and contented, and was gathered to his people.' },
          { n: 9, text: 'His sons Isaac and Ishmael buried him in the cave of Machpelah near Mamre, in the field of Ephron son of Zohar the Hittite.' },
          { n: 10, text: 'This was the field that Abraham had bought from the Hittites. Abraham was buried there with his wife Sarah.' },
          { n: 17, text: 'Ishmael lived a total of 137 years. Then he breathed his last and died, and was gathered to his people.' }
        ],
        ground: { kind: 'historical', text: 'The Abraham story ends mid-chapter. Verses 1 to 18 close his life: his other sons by Keturah, his death at a hundred and seventy-five, and the quiet, remarkable detail that Isaac and Ishmael, the chosen son and the cast-out son, stand together to bury their father. Then at verse 19 the camera shifts to Isaac’s sons and the Jacob story begins. The book does not break at the chapter line; the seam runs through the middle of chapter 25.', src: 'Sarna · Westermann' }
      }
    ]
  },
  {
    id: 'gen-25b', bookId: 'genesis', tier: 'sitting', movementId: 'jacob',
    span: 'Genesis 25:19–34', chapterIndex: 25,
    title: 'Jacob and Esau',
    unitLabel: 'Scene',
    thread: 'The struggle starts in the womb. Before either twin has done a thing, an oracle reverses the order of the world, and the younger, the heel-grabber, is the one the promise will run through.',
    closeEnd: 'The birthright has changed hands, and not one hand is clean. The chosen son is a schemer, and the story knows it.',
    passages: [
      {
        label: 'One', ref: '25:19–26', kind: 'scene', form: 'prose', title: 'Two nations',
        verses: [
          { n: 21, text: 'Later, Isaac prayed to the LORD on behalf of his wife, because she was barren. And the LORD heard his prayer, and his wife Rebekah conceived.' },
          { n: 22, text: 'But the children inside her struggled with each other, and she said, “Why is this happening to me?” So Rebekah went to inquire of the LORD,' },
          { n: 23, text: 'and He declared to her: “Two nations are in your womb, and two peoples from within you will be separated; one people will be stronger than the other, and the older will serve the younger.”' },
          { n: 25, text: 'The first one came out red, covered with hair like a fur coat; so they named him Esau.' },
          { n: 26, text: 'After this, his brother came out grasping Esau’s heel; so he was named Jacob. And Isaac was sixty years old when the twins were born.' }
        ],
        ground: {
          kind: 'genre',
          text: 'The oracle says the quiet thing out loud: the older will serve the younger, which turns the whole ancient world upside down, where everything went to the firstborn. The twins are also two nations, Israel and Edom, and the writers are reading their own long rivalry back into a shared womb. Jacob means something close to he grasps the heel, which is also an idiom for a cheat. He is named for what he does before he can even speak.',
          src: 'Sarna · Alter · Westermann'
        },
        meaning: 'The choice lands before either child has done anything, good or bad. Jacob is not picked because he is better, he is the grasping one, and Esau is not rejected for some crime. The promise simply runs through the younger, against the rule that says it should not. Election here is not a reward for merit. It is a freedom that owes the favored nothing and the passed-over an answer it never gives.',
        lenses: {
          theo: 'Grace that comes before merit is the hardest kind to accept, because it cannot be earned and it cannot be explained. God chooses the younger, the weaker, the one with no claim, and the only honest response is not pride but bewilderment. If it could be deserved it would not be grace.',
          arch: 'The twins struggling in the dark are an old picture of a self at war with itself, two drives born together and fighting for the upper hand before the light. What rules a life is often decided early, below the level of choice. (The warring brothers as the divided psyche.)'
        },
        addr: {
          mode: 'names',
          text: 'You know the sense of being set inside a struggle you did not start, a rivalry or a role handed to you from before you could choose it.'
        },
        soft: 'Some things about your life were decided before you had a say. The question is what you do with them now.',
        ask: 'What part of your story was set before you could choose it, and how have you been carrying it?'
      },
      {
        label: 'Two', ref: '25:27–34', kind: 'scene', form: 'prose', title: 'The red stew',
        verses: [
          { n: 27, text: 'When the boys grew up, Esau became a skillful hunter, a man of the field, while Jacob was a quiet man who stayed at home.' },
          { n: 29, text: 'One day, while Jacob was cooking some stew, Esau came in from the field and was famished.' },
          { n: 30, text: 'He said to Jacob, “Let me eat some of that red stew, for I am famished.” (That is why he was also called Edom.)' },
          { n: 31, text: '“First sell me your birthright,” Jacob replied.' },
          { n: 32, text: '“Look,” said Esau, “I am about to die, so what good is a birthright to me?”' },
          { n: 34, text: 'Then Jacob gave some bread and lentil stew to Esau, who ate and drank and then got up and went away. Thus Esau despised his birthright.' }
        ],
        ground: {
          kind: 'historical',
          text: 'The birthright was the double share and the headship of the family, the future itself. Esau trades it for a bowl of red stew while his appetite is loud, and the narrator drily notes that this is why his nation was called Edom, the red. Jacob, for his part, does not share food with a starving brother, he charges him everything he has for it. The scene flatters no one.',
          src: 'Sarna · Alter'
        },
        meaning: 'Watch what each brother is willing to lose. Esau hands over the long future for the thing his body wants in this exact minute, and the text says he despised the birthright, treated the lasting thing as worthless next to a craving. And Jacob will not feed his own brother without a deed of sale. The promise moves, but it moves through a cold transaction between a man who sells his future and a man who exploits a hunger.',
        misreading: {
          named: 'Jacob is the hero here and Esau is the fool who got what he deserved.',
          why: 'The story is harder than that. Esau is reckless, but Jacob is a manipulator who corners a starving man, and the book never pretends otherwise. Being chosen is not the same as being good. The whole point of the Jacob cycle is that grace falls on someone who keeps having to be changed.'
        },
        addr: {
          mode: 'names',
          text: 'You know both moves in this scene: trading something that lasts for something you wanted right now, and the colder one, using another person’s need as your leverage.'
        },
        soft: 'Appetite is loud and the future is quiet. The trade rarely feels like a trade while you are making it.',
        ask: 'What lasting thing have you been tempted to spend on an immediate hunger, and what is the hunger really?'
      }
    ]
  },
  {
    id: 'gen-26', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 26', chapterIndex: 26,
    title: 'Isaac and the wells',
    passages: [
      {
        ref: 'Genesis 26 (selected)', kind: 'scene', form: 'prose', title: 'Isaac and the wells',
        verses: [
          { n: 3, text: 'Stay in this land as a foreigner, and I will be with you and bless you. For I will give all these lands to you and your offspring, and I will confirm the oath that I swore to your father Abraham.' },
          { n: 7, text: 'But when the men of that place asked about his wife, he said, “She is my sister.” For he was afraid to say, “She is my wife,” since he thought to himself, “The men of this place will kill me on account of Rebekah, because she is so beautiful.”' },
          { n: 18, text: 'Isaac reopened the wells that had been dug in the days of his father Abraham, which the Philistines had stopped up after Abraham died. And he gave these wells the same names his father had given them.' },
          { n: 22, text: 'He moved on from there and dug another well, and they did not quarrel over it. He named it Rehoboth and said, “At last the LORD has made room for us, and we will be fruitful in the land.”' },
          { n: 24, text: 'and that night the LORD appeared to him and said, “I am the God of your father Abraham. Do not be afraid, for I am with you. I will bless you and multiply your descendants for the sake of My servant Abraham.”' }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the one chapter that is Isaac’s own, and it is built almost entirely from his father’s material: the same famine, the same lie that his wife is his sister, the same wells, re-dug and given back their old names. Isaac is the quiet patriarch, the heir who mostly re-walks the road already walked, holding the promise in place rather than advancing it. Even the reassurance he gets, do not be afraid, comes for the sake of Abraham. The promise passes through a passive man, and passes through intact.',
          src: 'Sarna · Westermann'
        }
      }
    ]
  },
  {
    id: 'gen-27', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 27', chapterIndex: 27,
    title: 'The stolen blessing',
    unitLabel: 'Scene',
    thread: 'The oracle said the older would serve the younger. Rebekah and Jacob decide not to wait for God to arrange it, and steal the blessing from a blind old man with their own hands.',
    closeEnd: 'Jacob has the blessing and has lost his home. He leaves with everything promised and nothing he can stay for.',
    passages: [
      {
        label: 'One', ref: '27:11–29', kind: 'scene', form: 'prose', title: 'The disguise',
        verses: [
          { n: 11, text: 'Jacob answered his mother Rebekah, “Look, my brother Esau is a hairy man, but I am smooth-skinned.' },
          { n: 12, text: 'What if my father touches me? Then I would be revealed to him as a deceiver, and I would bring upon myself a curse rather than a blessing.”' },
          { n: 19, text: 'Jacob said to his father, “I am Esau, your firstborn. I have done as you told me. Please sit up and eat some of my game, so that you may bless me.”' },
          { n: 22, text: 'So Jacob came close to his father Isaac, who touched him and said, “The voice is the voice of Jacob, but the hands are the hands of Esau.”' },
          { n: 27, text: 'So he came near and kissed him. When Isaac smelled his clothing, he blessed him and said: “Ah, the smell of my son is like the smell of a field that the LORD has blessed.' },
          { n: 29, text: 'May peoples serve you and nations bow down to you. May you be the master of your brothers, and may the sons of your mother bow down to you. May those who curse you be cursed, and those who bless you be blessed.”' }
        ],
        ground: {
          kind: 'historical',
          text: 'A father’s deathbed blessing was treated as a binding act, a word that, once spoken, set the future and could not be recalled. Jacob’s own worry is not that the deceit is wrong but that it might be caught, what if my father touches me. Rebekah engineers the whole thing, perhaps holding the old oracle that the older would serve the younger and steering it home by fraud. Isaac, blind and old, hears the seam in it, the voice is the voice of Jacob, and blesses him anyway.',
          src: 'von Rad · Alter · Sarna'
        },
        meaning: 'The blessing was God’s to give, and the family grabs it by fraud. Jacob gets exactly what was promised in the womb, and gets it by lying to his blind father with his brother’s clothes on his back. The story will not let the chosen line be the clean line. What was meant to come as gift is taken as theft, and the taking will cost Jacob the next twenty years of his life.',
        lenses: {
          theo: 'God’s purpose moves forward here through a deception God never blesses. The text holds together two things we like to keep apart: the promise is real, and the people carrying it are liars. Grace is not a reward for good behavior. It is the thing that keeps working on people who have not earned it and will spend years being humbled into it.',
          arch: 'Jacob is the trickster, the figure in a hundred old stories who wins by cunning what he could not win by strength, and who must eventually be broken of it. The blessing stolen in disguise has to be re-earned in the open, on a riverbank, in the dark, years later. (The trickster who must lose the mask.)'
        },
        misreading: {
          named: 'It worked out in the end, so Rebekah and Jacob were right to deceive Isaac.',
          why: 'The chapter ends in wreckage: a father betrayed, a brother who wants to kill, a mother who will never see her favorite son again, and a fugitive on the run. The text records the cost in full. It shows the promise advancing and the deceit costing everything in the same breath, and refuses to call the means good because the end arrived.'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to want a blessing badly enough to take it by a means you would rather not say out loud, and to tell yourself the outcome will settle the question of how you got it.'
        },
        soft: 'The thing taken by force still has to be lived with afterward, and it rarely sits quiet.',
        ask: 'Where have you reached to grab something you could not wait to be given, and what did the grabbing cost?'
      },
      {
        label: 'Two', ref: '27:30–38', kind: 'scene', form: 'prose', title: 'The cry',
        verses: [
          { n: 30, text: 'As soon as Isaac had finished blessing him and Jacob had left his father’s presence, his brother Esau returned from the hunt.' },
          { n: 34, text: 'When Esau heard his father’s words, he let out a loud and bitter cry and said to his father, “Bless me too, O my father!”' },
          { n: 35, text: 'But Isaac replied, “Your brother came deceitfully and took your blessing.”' },
          { n: 36, text: 'So Esau declared, “Is he not rightly named Jacob? For he has cheated me twice. He took my birthright, and now he has taken my blessing.” Then he asked, “Haven’t you saved a blessing for me?”' },
          { n: 38, text: 'Esau said to his father, “Do you have only one blessing, my father? Bless me too, O my father!” Then Esau wept aloud.' }
        ],
        ground: {
          kind: 'historical',
          text: 'In the logic of the story a blessing once spoken is spent. It cannot be taken back and re-given, and so Esau, who did nothing wrong this time, is simply too late. His name for his brother is the truest line in the chapter, is he not rightly named Jacob, the cheat. The blessing Esau is finally given is a thinner thing, a life by the sword, away from the richness.',
          src: 'Westermann · Alter'
        },
        meaning: 'The chapter’s most human moment belongs to the brother who lost. Esau, who is no innocent himself, lets out a loud and bitter cry and begs, bless me too, my father, as though surely there had to be more than one. The story does not look away from him. It lets the cost of the chosen line be a real person standing in the doorway, weeping, asking for something that has already been given to someone else.',
        addr: {
          mode: 'names',
          text: 'You know the cry of arriving too late, of asking for the blessing only to be told, gently or not, that it has already gone to someone else.'
        },
        soft: 'Being passed over is its own grief, and the one who lost is not always the one who was wrong.',
        ask: 'Where have you been the one in the doorway, too late, and what would it mean to grieve it honestly instead of pretending it did not land?'
      }
    ]
  },
  {
    id: 'gen-28', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 28:10–22', chapterIndex: 28,
    title: 'The ladder at Bethel',
    thread: 'A fugitive runs from a brother who wants him dead, lies down in open country with a stone for a pillow, and meets God in the last place he expected, before he has said one word of sorry.',
    closeEnd: 'Grace finds Jacob on the run, undeserving, and renews the whole promise to him in the dark. He wakes changed, and his road is still long.',
    passages: [
      {
        ref: '28:10–22', kind: 'scene', form: 'prose', title: 'The stairway',
        verses: [
          { n: 11, text: 'On reaching a certain place, he spent the night there because the sun had set. And taking one of the stones from that place, he put it under his head and lay down to sleep.' },
          { n: 12, text: 'And Jacob had a dream about a ladder that rested on the earth with its top reaching up to heaven, and God’s angels were going up and down the ladder.' },
          { n: 13, text: 'And there at the top the LORD was standing and saying, “I am the LORD, the God of your father Abraham and the God of Isaac. I will give you and your descendants the land on which you now lie.' },
          { n: 15, text: 'Look, I am with you, and I will watch over you wherever you go, and I will bring you back to this land. For I will not leave you until I have done what I have promised you.”' },
          { n: 16, text: 'When Jacob woke up, he said, “Surely the LORD is in this place, and I was unaware of it.”' },
          { n: 17, text: 'And he was afraid and said, “How awesome is this place! This is none other than the house of God; this is the gate of heaven!”' }
        ],
        ground: {
          kind: 'historical',
          text: 'The dream is set at Bethel, a real and ancient holy place, and the picture is not a household ladder but a great stairway, the kind that climbed the side of a Mesopotamian temple-tower to join earth and heaven. The traffic on it runs both ways, heaven busy with the earth. And the promise spoken from the top is unconditional: I am with you, I will watch over you, I will bring you back. Not if you behave. Just, I will.',
          src: 'Sarna · Walton · Westermann'
        },
        meaning: 'God meets Jacob at his lowest and least deserving. He is a fugitive who has just cheated his father and robbed his brother, sleeping rough on a stone in the middle of nowhere, and this is the moment heaven opens over him. There is no repentance first, no apology, no deal struck. The promise is simply renewed to the man on the run, before he has done one thing to earn it back. Surely the LORD is in this place, he says, and I did not know it, which may be the truest thing anyone says in the whole cycle.',
        lenses: {
          theo: 'This is grace that arrives before the turning, not after it. We tend to assume God meets us once we have cleaned ourselves up, on the far side of our sorrow. Here he comes to the deceiver mid-flight, in the dark, and binds himself to him anyway. The repentance, when it finally comes, will be the response to the grace, not its price.',
          arch: 'The stone, the head laid down, the dream opening: this is the descent into the unconscious where the deeper self speaks while the waking will is asleep. The stairway is the axis between the world above and the world below, and what it tells the exhausted ego is that the place it thought was empty was the gate of heaven all along. (The holy found in the wilderness you were only passing through.)'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to be running from something you did, bedded down in the bleakest stretch of the road, and to find you were not as alone there as you were certain you were.'
        },
        soft: 'God was in the place, and he did not know it. The not-knowing did not make it any less true.',
        ask: 'Where is a bleak place you are only trying to get through, and what would change if you looked for God to be already in it?'
      }
    ]
  },
  {
    id: 'gen-29', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 29', chapterIndex: 29,
    title: 'Leah and Rachel',
    unitLabel: 'Scene',
    thread: 'The deceiver meets his match. Jacob, who put the younger before the elder, is handed the elder sister in the dark and made to honor the very rule he once broke. And Leah, the unwanted one, names her ache into her sons.',
    closeEnd: 'The chosen line will run through Leah, the wife nobody chose. Judah, her fourth son, is the one it goes through.',
    passages: [
      {
        label: 'One', ref: '29:18–30', kind: 'scene', form: 'prose', title: 'The wrong sister',
        verses: [
          { n: 18, text: 'Since Jacob loved Rachel, he answered, “I will serve you seven years for your younger daughter Rachel.”' },
          { n: 20, text: 'So Jacob served seven years for Rachel, yet it seemed but a few days because of his love for her.' },
          { n: 23, text: 'But when evening came, Laban took his daughter Leah and gave her to Jacob, and he slept with her.' },
          { n: 25, text: 'When morning came, there was Leah! “What have you done to me?” Jacob said to Laban. “Wasn’t it for Rachel that I served you? Why have you deceived me?”' },
          { n: 26, text: 'Laban replied, “It is not our custom here to give the younger daughter in marriage before the older.' },
          { n: 30, text: 'Jacob slept with Rachel as well, and indeed, he loved Rachel more than Leah. So he worked for Laban another seven years.' }
        ],
        ground: {
          kind: 'historical',
          text: 'The trick turns on the same hinge Jacob once used. He stole the rights of the firstborn; now Laban hands him the firstborn daughter under cover of dark and a wedding veil, and answers his outrage with a line that lands like a verdict: it is not our custom to put the younger before the older. The man who put the younger before the older hears his own crime read back to him as law. A bride was bought with years of labor, and Jacob pays twice.',
          src: 'Alter · Sarna'
        },
        meaning: 'The trickster is tricked, and the story savors the symmetry. Jacob, who exploited his father’s blindness and his brother’s hunger, wakes in the morning to find that he is the one who was fooled in the dark. Why have you deceived me, he demands, which is almost word for word the charge his own father and brother could have laid on him. What you do to other people has a way of coming back to you wearing a different face, and being on the receiving end is the first thing that ever slows Jacob down.',
        lenses: {
          theo: 'There is a kind of moral physics running under the Jacob story. The deceiver has to be deceived before he can be changed. It is not so much God punishing him as God letting the consequence circle back, holding a mirror up to him until the man who only ever took begins, slowly, to be undone and remade.',
          arch: 'The shadow returns wearing the face you gave it. What Jacob did to others is now done to him, and the cunning that always worked is turned against him by a craftier man. This is how a self begins to grow up, not by winning, but by finally losing at its own game.'
        },
        addr: {
          mode: 'names',
          text: 'You know the strange justice of having done to you the exact thing you once did to someone else, and the way it can stop you cold.'
        },
        soft: 'The mirror is rarely flattering, but it is usually fair.',
        ask: 'Where has something you did to someone come back around to you, and what is it trying to teach you?'
      },
      {
        label: 'Two', ref: '29:31–35', kind: 'scene', form: 'prose', title: 'Leah’s sons',
        verses: [
          { n: 31, text: 'When the LORD saw that Leah was unloved, He opened her womb; but Rachel was barren.' },
          { n: 32, text: 'And Leah conceived and gave birth to a son, and she named him Reuben, for she said, “The LORD has seen my affliction. Surely my husband will love me now.”' },
          { n: 33, text: 'Again she conceived and gave birth to a son, and she said, “Because the LORD has heard that I am unloved, He has given me this son as well.” So she named him Simeon.' },
          { n: 34, text: 'Once again Leah conceived and gave birth to a son, and she said, “Now at last my husband will become attached to me, because I have borne him three sons.” So he was named Levi.' },
          { n: 35, text: 'And once more she conceived and gave birth to a son and said, “This time I will praise the LORD.” So she named him Judah. Then Leah stopped having children.' }
        ],
        ground: {
          kind: 'historical',
          text: 'In a world where a woman’s standing hung on the sons she bore, Leah names hers like diary entries. The first three reach toward the husband who will not turn: see my pain, now he will love me, now he will stay. The fourth lets go of him entirely, this time I will praise the LORD, and that one is Judah, the son the royal line and, far down the road, the Messiah will run through. The unwanted wife mothers the chosen tribe.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'You can read Leah’s whole inner life in the names she gives her children. The first three are pleas aimed at her husband: look at my affliction, surely now he will love me, now at last he will be attached to me. And then, with the fourth, something quietly breaks open. This time I will praise the LORD. She stops naming her sons after a love that is not coming and names one after God instead. And it is that son, born the moment she stops bargaining, through whom the whole promise goes. The line does not run through the loved wife. It runs through the one nobody chose.',
        lenses: {
          theo: 'God’s attention in this chapter is fixed on the unloved one. He saw that Leah was unloved, the text says plainly, and opened her womb. The story’s sympathy, and its future, belong to the overlooked sister, not the favored one, which is the pattern the whole Bible keeps repeating: the last become first, the rejected stone becomes the cornerstone.',
          arch: 'The release in the fourth name is the move from grasping to letting go, from defining yourself by a love you cannot command to standing on ground of your own. It is the same wound at the heart of the cycle, the ache to be chosen, met at last not by getting the love but by ceasing to need it in order to live.'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to keep performing for a love that does not arrive, and you may know the quieter freedom of finally stopping and being held by something else.'
        },
        soft: 'The ache to be chosen is real. So is the day you stop auditioning for it.',
        ask: 'Whose love have you been performing for, and what would it free in you to stop?'
      }
    ]
  },
  {
    id: 'gen-30', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 30 (selected)', chapterIndex: 30,
    title: 'The rival wives',
    passages: [
      {
        ref: 'Genesis 30 (selected)', kind: 'scene', form: 'prose', title: 'The rival wives',
        verses: [
          { n: 1, text: 'When Rachel saw that she was not bearing any children for Jacob, she envied her sister. “Give me children, or I will die!” she said to Jacob.' },
          { n: 22, text: 'Then God remembered Rachel. He listened to her and opened her womb,' },
          { n: 24, text: 'She named him Joseph, and said, “May the LORD add to me another son.”' },
          { n: 43, text: 'Thus Jacob became exceedingly prosperous. He owned large flocks, maidservants and menservants, and camels and donkeys.' }
        ],
        ground: {
          kind: 'historical',
          text: 'The chapter is a baby war between two sisters, fought through their maidservants and bargained over with mandrakes, until twelve children, the future tribes of Israel, are born out of envy and longing and competition. Then Jacob out-schemes Laban over the breeding of the flocks and leaves rich. It is worth seeing how unsentimental the text is about its own founding family. The tribes of Israel are born into a bitter, scheming, loveless rivalry, and the book lets that stand without a word of tidying.',
          src: 'Sarna · Westermann'
        }
      }
    ]
  },
  {
    id: 'gen-31', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 31 (selected)', chapterIndex: 31,
    title: 'Leaving Laban',
    passages: [
      {
        ref: 'Genesis 31 (selected)', kind: 'scene', form: 'prose', title: 'Leaving Laban',
        verses: [
          { n: 7, text: 'And although he has cheated me and changed my wages ten times, God has not allowed him to harm me.' },
          { n: 19, text: 'Now while Laban was out shearing his sheep, Rachel stole her father’s household idols.' },
          { n: 42, text: 'If the God of my father, the God of Abraham and the Fear of Isaac, had not been with me, surely by now you would have sent me away empty-handed. But God has seen my affliction and the toil of my hands, and last night He rendered judgment.”' },
          { n: 49, text: 'It was also called Mizpah, because Laban said, “May the LORD keep watch between you and me when we are absent from each other.' }
        ],
        ground: {
          kind: 'historical',
          text: 'After twenty years Jacob runs, with his wives, his children, and the flocks he has bred away from Laban. Rachel steals her father’s household gods on the way out, and Laban gives chase. What they finally build at Mizpah is not a reconciliation but a boundary, a heap of stones and the famous line, may the LORD watch between you and me, which sounds like a blessing and is really a fence: two men who do not trust each other agreeing on where the line is. Jacob leaves the long school of Laban changed, his cunning worn down, on his way to a harder appointment at the river.',
          src: 'Sarna · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-32', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 32:22–32', chapterIndex: 32,
    title: 'Wrestling at the Jabbok',
    thread: 'On the night before he must face the brother he cheated, Jacob is left utterly alone, and a man wrestles him until dawn. He comes out of it renamed, blessed, and limping for the rest of his life.',
    closeEnd: 'He crosses the river as Israel, the one who strives with God, walking into the dreaded reunion wounded and, for the first time, unable to run.',
    passages: [
      {
        ref: '32:22–32', kind: 'scene', form: 'prose', title: 'The night at the river',
        verses: [
          { n: 24, text: 'So Jacob was left all alone, and there a man wrestled with him until daybreak.' },
          { n: 25, text: 'When the man saw that he could not overpower Jacob, he struck the socket of Jacob’s hip and dislocated it as they wrestled.' },
          { n: 26, text: 'Then the man said, “Let me go, for it is daybreak.” But Jacob replied, “I will not let you go unless you bless me.”' },
          { n: 27, text: '“What is your name?” the man asked. “Jacob,” he replied.' },
          { n: 28, text: 'Then the man said, “Your name will no longer be Jacob, but Israel, because you have struggled with God and with men, and you have prevailed.”' },
          { n: 30, text: 'So Jacob named the place Peniel, saying, “Indeed, I have seen God face to face, and yet my life was spared.”' },
          { n: 31, text: 'The sun rose above him as he passed by Penuel, and he was limping because of his hip.' }
        ],
        ground: {
          kind: 'historical',
          text: 'It is the night before the reunion he has dreaded for twenty years, and Jacob, having sent everyone he loves across the ford ahead of him, is left alone in the dark. The text is deliberately strange about the assailant: it calls him only a man, and then Jacob names the place for having seen God face to face. The new name Israel means something like he strives with God, or God strives. The wound to the hip and the blessing come from the same hands, and the people who carry that name will not eat the hip’s tendon ever after, a scar woven into a nation.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'The man who always won by cunning finally meets someone he cannot trick, only hold. He wrestles all night, and even after his hip is wrenched he will not let go, until he is blessed, and the blessing he wins is a new name and a permanent limp. This is the hinge of the whole cycle. The one who stole a blessing in the dark, in disguise, now wins one in the dark, in the open, by refusing to release his grip. He walks away blessed and damaged in the same motion. You do not come through a real encounter with God unmarked.',
        lenses: {
          theo: 'The blessing and the wound arrive together, from the same grip. God does not bless Jacob by making him stronger; he blesses him by laming him, ending the long career of grasping so that Israel limps ever after on a leg that remembers the night. The name is new and the swagger is gone. That is what being blessed by this God can cost, and what it can heal.',
          arch: 'This is the night-sea crossing, the struggle with the figure at the threshold who must be held through the dark before the dawn will give anything up. The wound is the initiation; you are marked by what you wrestle. And the deepest adversary turns out to wear, by morning, the face of God. (Holding on through the dark until it blesses you, and being changed by the grip.)'
        },
        misreading: {
          named: 'Jacob beats God in a fair fight and wins by being the stronger man.',
          why: 'He prevails only because he will not let go, not because he overpowers anyone, and the moment the man touches his hip the contest is plainly not about strength. The victory is his refusal to face tomorrow unblessed, and its price is a wound he carries for life. It is not a triumph over God. It is a refusal to be left without him.'
        },
        addr: {
          mode: 'names',
          text: 'You know the night before the thing you dread, alone in the dark, holding on to something you will not release until it blesses you, and the way the holding can leave its mark on you.'
        },
        soft: 'The blessing and the limp came out of the same grip. Most real ones do.',
        ask: 'What are you refusing to let go of until it blesses you, and what might holding on cost you?'
      }
    ]
  },
  {
    id: 'gen-33', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 33', chapterIndex: 33,
    title: 'The reunion',
    thread: 'Jacob braces for the brother who once swore to kill him, dividing his family in case of slaughter. And Esau runs to meet him, not with an army but with open arms.',
    closeEnd: 'The dread of twenty years dissolves in an embrace, and then the brothers part and never live together again. A real peace, and a limited one.',
    passages: [
      {
        ref: '33:1–11', kind: 'scene', form: 'prose', title: 'Esau runs',
        verses: [
          { n: 1, text: 'Now Jacob looked up and saw Esau coming toward him with four hundred men. So he divided the children among Leah, Rachel, and the two maidservants.' },
          { n: 4, text: 'Esau, however, ran to him and embraced him, threw his arms around his neck, and kissed him. And they both wept.' },
          { n: 10, text: 'But Jacob insisted, “No, please! If I have found favor in your sight, then receive this gift from my hand. For indeed, I have seen your face, and it is like seeing the face of God, since you have received me favorably.' },
          { n: 11, text: 'Please accept my gift that was brought to you, because God has been gracious to me and I have all I need.” So Jacob pressed him until he accepted.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Jacob has spent the night wrestling and the dawn arranging his family by how much he can bear to lose, bracing for a brother coming with four hundred men. Esau, who two decades earlier swore to kill him, runs, throws his arms around his neck, and weeps. Jacob’s words for it deliberately echo the night before, to see your face is like seeing the face of God: he has just survived seeing God’s face at Peniel, and now survives his brother’s. And the gift he presses on Esau he calls, in the Hebrew, a blessing, the very word for what he stole, as if to hand it back.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'The thing Jacob dreaded most for twenty years comes undone the instant it arrives. The brother he cheated does not want revenge; he wants his brother, and he runs. And Jacob, fresh from seeing God’s face at the river, says he sees it again in Esau’s, because the face of the person you wronged, choosing to forgive you, can look an awful lot like the face of God. He even tries to give back the blessing, calling his gift by its name, as though the theft could be undone by a return. The forgiveness he has no right to expect is exactly what meets him.',
        lenses: {
          theo: 'Grace wears a human face here. After the vertical encounter at Peniel comes the horizontal one, and the text rhymes them on purpose: you meet God, and then you meet the brother you wronged, and they can look strangely alike. To be forgiven by someone who had every right to ruin you is one of the nearest things there is to standing in front of God and being received.',
          arch: 'The shadow-brother, fled and feared for twenty years, turns out at the meeting not to be the monster the dread had painted. What you run from grows teeth in the imagination; faced, it is often a weeping man with his arms open. The reckoning you brace for is rarely the reckoning you get.'
        },
        misreading: {
          named: 'They are fully reconciled and the family is healed for good.',
          why: 'They embrace and weep, and then immediately go separate ways, and Jacob even slips back into half-truth about following Esau. The text gives a peace that is real and incomplete, the dread broken but the brothers still apart. It refuses the fairy-tale ending, and means the refusal.'
        },
        addr: {
          mode: 'names',
          text: 'You know the dread of facing someone you wronged, the bracing for the blow, and you may know the stranger grace of being met instead with open arms.'
        },
        soft: 'What you flee grows teeth in the dark. Faced, it is often smaller, and sometimes weeping.',
        ask: 'Who are you bracing to face, and what would it change to imagine being met with open arms?'
      }
    ]
  },
  {
    id: 'gen-34', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 34', chapterIndex: 34,
    title: 'Dinah',
    thread: 'A daughter is violated, and from that moment the story is about everyone but her. The men negotiate, deceive, and kill in her name, and Dinah herself never speaks a single word.',
    closeEnd: 'No one in this chapter is clean, and the one it is supposedly about is never heard from. The Bible records the whole thing and blesses none of it.',
    passages: [
      {
        ref: '34 (selected)', kind: 'scene', form: 'prose', title: 'Spoken for',
        verses: [
          { n: 1, text: 'Now Dinah, the daughter Leah had borne to Jacob, went out to visit the daughters of the land.' },
          { n: 2, text: 'When Shechem son of Hamor the Hivite, the prince of the region, saw her, he took her and lay with her by force.' },
          { n: 7, text: 'When Jacob’s sons heard what had happened, they returned from the field. They were filled with grief and fury, because Shechem had committed an outrage in Israel by lying with Jacob’s daughter—a thing that should not be done.' },
          { n: 13, text: 'But because Shechem had defiled their sister Dinah, Jacob’s sons answered him and his father Hamor deceitfully.' },
          { n: 25, text: 'Three days later, while they were still in pain, two of Jacob’s sons (Dinah’s brothers Simeon and Levi) took their swords, went into the unsuspecting city, and slaughtered every male.' },
          { n: 30, text: 'Then Jacob said to Simeon and Levi, “You have brought trouble upon me by making me a stench to the Canaanites and Perizzites, the people of this land. We are few in number; if they unite against me and attack me, I and my household will be destroyed.”' },
          { n: 31, text: 'But they replied, “Should he have treated our sister like a prostitute?”' }
        ],
        ground: {
          kind: 'historical',
          text: 'The chapter is built out of deceit, the same weapon that has run through the whole cycle, now turned to butchery. The brothers answer deceitfully, talk the men of the city into circumcision, and fall on them while they are still in pain. And notice who never speaks. Dinah is named in the first verse and then vanishes into the third person, acted upon, argued over, avenged, but never once heard. Jacob, for his part, reacts not to her suffering but to the danger the killing has put him in.',
          src: 'Alter · Westermann · Trible'
        },
        meaning: 'This is a story about how a woman’s violation becomes everyone else’s narrative. Dinah is raped, and from that moment every man around her takes up her cause and erases her in the same motion. The brothers turn her pain into a license for slaughter; Jacob turns the slaughter into a worry about his own reputation; the chapter ends with men still arguing over her honor while she has not said a word since the first verse. The text holds two horrors side by side, the assault and the revenge, and refuses to let either one stand as the clean answer to the other.',
        lenses: {
          theo: 'Scripture does not look away from this, and it does not tidy it. There is no verdict from heaven in the chapter, no rescue, no neat justice, and that silence is its own kind of testimony. The Bible is willing to record the world exactly as brutal as it is, including inside the chosen family, and to let the reader feel the wrongness without being handed a moral that makes it sit easier. Jacob does not forget it; on his deathbed he curses the violence of Simeon and Levi by name.',
          arch: 'Watch how fast a person’s real wound is conscripted into other people’s causes. Everyone claims to act for Dinah; no one asks her. It is one of the oldest ways of silencing someone, to speak so loudly on their behalf that they disappear, and to call it honor.'
        },
        misreading: {
          named: 'The brothers are the heroes here, righteously avenging their sister.',
          why: 'The text flags their answer as deceit, ends on their self-justifying question rather than any word of approval, and has Jacob condemn them on the spot and curse them again at the end of his life. The chapter stages the revenge as one more atrocity, not a triumph, and keeps its sympathy with the girl who is never allowed to speak, not with the men killing in her name.'
        },
        addr: {
          mode: 'names',
          text: 'You may know what it is to have your own pain taken up as someone else’s cause, spoken for so loudly that you disappear from your own story.'
        },
        soft: 'Being avenged is not the same as being heard, and the two are easily confused.',
        ask: 'Where has pain, yours or someone else’s, been turned into a banner for a fight that stopped being about the person who was hurt?'
      }
    ]
  },
  {
    id: 'gen-35', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 35 (selected)', chapterIndex: 35,
    title: 'Back to Bethel',
    passages: [
      {
        ref: 'Genesis 35 (selected)', kind: 'scene', form: 'prose', title: 'Back to Bethel',
        verses: [
          { n: 1, text: 'Then God said to Jacob, “Arise, go up to Bethel, and settle there. Build an altar there to the God who appeared to you when you fled from your brother Esau.”' },
          { n: 10, text: 'And God said to him, “Though your name is Jacob, you will no longer be called Jacob. Instead, your name will be Israel.” So God named him Israel.' },
          { n: 18, text: 'And with her last breath—for she was dying—she named him Ben-oni. But his father called him Benjamin.' },
          { n: 19, text: 'So Rachel died and was buried on the way to Ephrath (that is, Bethlehem).' },
          { n: 29, text: 'Then he breathed his last and died and was gathered to his people, old and full of years. And his sons Esau and Jacob buried him.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Jacob comes back to Bethel, the place of the stairway, decades older, and God confirms the new name there in plain daylight, the blessing the river gave him in the dark now spoken openly. But the homecoming is laced with graves. Rachel dies bearing Benjamin and names him Ben-oni, son of my sorrow, with her last breath; his father quietly renames him son of my right hand. And Isaac dies, buried by both his sons, Esau and Jacob standing together at the grave the way Isaac and Ishmael once stood at Abraham’s. The cycle closes the way it opened, with estranged brothers meeting again over their father’s body.',
          src: 'Sarna · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-36', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 36 (selected)', chapterIndex: 36,
    title: 'The line of Esau',
    passages: [
      {
        ref: 'Genesis 36 (selected)', kind: 'scene', form: 'prose', title: 'The line of Esau',
        verses: [
          { n: 1, text: 'This is the account of Esau (that is, Edom).' },
          { n: 8, text: 'So Esau (that is, Edom) settled in the area of Mount Seir.' },
          { n: 9, text: 'This is the account of Esau, the father of the Edomites, in the area of Mount Seir.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Before the story leaves Esau for good, it gives him a whole chapter, a long roll of his descendants, the chiefs and kings of Edom. It is the book’s quiet way of honoring the brother who was passed over. The rejected son is not erased; he becomes a nation in his own right, with kings of its own long before Israel had any. The promise ran through Jacob, but Esau was not nothing. The text closes his account with dignity, and then turns, for the rest of Genesis, to the sons of Israel.',
          src: 'Sarna · Westermann'
        }
      }
    ]
  }
];

// The Abraham movement: its grounding, its look-back capstone, and the doorway into Jacob.
// The primeval movement (1-11) can be ported from the prototype's existing overlays the same way.
export const ABRAHAM_MOVEMENT: Movement = {
  id: 'abraham', index: 2, title: 'Abraham', range: 'Genesis 12–25',
  throughline: 'A promise made to a childless old man, held against every impossibility and every attempt to force it, until it arrives as laughter and is then asked back on a mountain.',
  chapterStart: 12, chapterEnd: 25,
  situation: {
    skicker: 'The ground beneath the Abraham story',
    title: 'A family memory, told long after',
    paragraphs: [
      'The stories of Abraham are set in the Bronze Age but were written down much later, and they carry small anachronisms, domesticated camels, Philistines, that point to the hand of later tellers shaping an old memory.',
      'Much of the cycle works as a family origin story for a whole region: where Moab and Ammon came from, where the Ishmaelite tribes came from, why Israel and its neighbors are kin and rivals at once.',
      'And one note runs under all of it for the people who edited it. Abraham came out of Mesopotamia, out of Ur and Harran, on nothing but a promise, and walked toward a land he did not yet have. To exiles who had been carried off to Babylon, that was not ancient history. That was their own road, read backward.',
    ],
    sources: 'Speiser · Westermann · Friedman',
  },
  capstone: {
    skicker: 'The shape of the Abraham story',
    title: 'Learning to hold the promise open-handed',
    paragraphs: [
      'It begins with a command to leave everything on the strength of a promise, and a childless old man who goes. The whole arc is the slow, failing, relearned lesson of how to carry a promise you cannot make come true: by waiting, not grasping. Every time Abraham reaches to force it, a lie in Egypt, a slave woman, a lie again to Abimelech, it costs someone, usually the one with the least power.',
      'The promise arrives anyway, late and impossible, as a baby named Laughter. And then, in the chapter the movement was built to reach, God asks for him back. Abraham, who once argued God down over a wicked city, says nothing and climbs the mountain. The hand is stopped. A ram dies instead. The promise is sworn one last time.',
      'What the movement teaches is not that faith is rewarded with comfort. It is that the promise was never Abraham’s to hold tight. It was always held open-handed, given and nearly taken and given back, and the man who learned that is buried by both his sons, the chosen one and the cast-out one, in the only patch of the promised land he ever owned: a grave.',
    ],
    tensions: [
      { claim: 'God forbids the sacrifice of children and condemns it with horror.', counter: 'And then God asks Abraham to do exactly that to the son of the promise, and praises him for not refusing.', where: 'Genesis 22 against Leviticus 18:21, Deuteronomy 12:31' },
    ],
    sources: 'von Rad · Levenson · Alter',
  },
  doorway: {
    skicker: 'The threshold into the next movement',
    title: 'A promise for a heel-grabber',
    paragraphs: [
      'Abraham is buried, and the promise passes down: to Isaac, quiet and almost passive, and then to his sons, where it gets interesting again.',
      'The question changes here. With Abraham it was, will the promise ever come? With Jacob it becomes, what kind of person can carry it? Because the next man to hold it is a deceiver from the womb, a heel-grabber who cheats his brother and tricks his father, and grace lands on him before he has done one thing to deserve it.',
      'The God who chose an old man for his faith now chooses a younger man for no visible reason at all, and that is the scandal the Jacob story is about.',
    ],
    nextMovementId: 'jacob',
  },
};

// The primeval movement (1-11), ported from the original prototype's overlays so it has
// the same situation, capstone, and doorway treatment as Abraham.
export const PRIMEVAL_MOVEMENT: Movement = {
  id: 'primeval', index: 1, title: 'The primeval history', range: 'Genesis 1–11',
  throughline: 'The whole world: made good, gone wrong, the wrong spreading outward, until one grasped name at Babel is answered by one given name in Abraham.',
  chapterStart: 1, chapterEnd: 11,
  situation: {
    skicker: 'The ground beneath the primeval history',
    title: 'The situation',
    paragraphs: [
      'The primeval history was given its shape by Judean priests and scribes in exile, after Babylon stormed Jerusalem and burned its temple in 586 BCE and marched its people east. They had lost the temple, the land, the king. Around them stood the greatest empire on earth, with its own towering myths: a world made through a war of gods, humanity formed to be the gods’ slaves, Babylon the navel of creation.',
      'These writers took older traditions of their own and edited them into a quiet answer. Not an argument shouted, but a story told. One God, who makes by speaking, who calls it good, who forms the human in his own image rather than as a slave. Two older sources run all through it, the vivid Yahwist and the ordered Priestly, woven together rather than smoothed into one.',
      'Chapters 1 to 11 are a single movement. They open by answering Babylon and they close at Babel, which is Babylon again, named and scattered, just before the story narrows to one family and the promise made to it.',
      'One honesty about the dates. The events these chapters reach for, creation, the flood, Babel, sit before history, in deep time that cannot be dated. What can be pinned is not the story but the desk it was written at, and the older myths it was written against.',
    ],
    timeline: [
      { tag: 'c. 1800 BCE', text: 'The Sumerian King List records kings reigning tens of thousands of years.' },
      { tag: 'c. 1100 BCE', text: 'Babylon’s Enuma Elish and the Epic of Gilgamesh carry the myths Genesis will answer: creation by war, a great flood.' },
      { tag: '586 BCE', text: 'Babylon burns Jerusalem and its temple. The exile begins. This is the desk these chapters are written from.' },
      { tag: '539 BCE', text: 'Persia takes Babylon; the exiles are allowed to go home.' },
      { tag: 'c. 450 BCE', text: 'The traditions reach their final, edited shape.' },
    ],
    sources: 'Wellhausen · Friedman · Westermann',
  },
  capstone: {
    skicker: 'The first movement · Genesis 1–11',
    title: 'The primeval history',
    paragraphs: [
      'This is the only part of the Bible about everyone. Before the story narrows to one family, it tells the story of the whole world: made good, gone wrong, and the wrong spreading outward. Read together, the eleven chapters move in one rhythm. A break, then a mercy. Again. And again.',
      'In Eden the trust breaks, and yet the couple are clothed, not destroyed. Cain kills his brother, and yet Cain is marked and protected. The flood drowns a world gone violent, and yet one family is carried through and a bow is hung over the sky. Each break closes with a mercy.',
      'Then Babel. A city, a tower, a grasp at a name, and the break spreads to all civilization. And this time it closes with no mercy named. Humanity is scattered, the project abandoned, the page gone quiet. That silence is the point.',
      'The withheld mercy is the next thing God does. He calls one man, Abram, and promises that through him all the scattered families of the earth will be blessed. The diagnosis was the whole world. The cure begins with one person.',
      'And the people who assembled this, in exile under the shadow of Babylon, were making a claim with it. The broken, scattered, empire-shadowed world is real. It is not the last word.',
    ],
    sources: 'von Rad · Clines',
  },
  doorway: {
    skicker: 'The second movement',
    title: 'Abraham',
    paragraphs: [
      'The flood had already narrowed to one family, Noah’s, but that was still a story about all humanity, with Noah only the thread it survived on. Here the change runs deeper. The story stops being about everyone and settles on one man, and it will stay with his family from now on. God calls Abram out of everything that defined him, country, kin, and father’s house, and makes him a promise with no collateral but his own word.',
      'Where Babel grasped at a name, Abram is given one. The cure for the broken world begins here, with a single act of trust and a long, imperfect walk toward something he will never fully see.',
    ],
    nextMovementId: 'abraham',
  },
};

// The Jacob movement (25:19 onward): the wrestler. Authored in batches; its look-back
// capstone and the doorway into Joseph land once the cycle is fully written.
export const JACOB_MOVEMENT: Movement = {
  id: 'jacob', index: 3, title: 'Jacob', range: 'Genesis 25–36',
  throughline: 'A grasper takes the blessing by fraud and spends twenty years being humbled into it, until a night of wrestling leaves him renamed and limping, and the brother he cheated runs to embrace him.',
  chapterStart: 26, chapterEnd: 36,
  situation: {
    skicker: 'The ground beneath the Jacob story',
    title: 'How two nations remember a shared womb',
    paragraphs: [
      'The Jacob cycle is, among other things, a family explanation of a map. Jacob is Israel; his twin Esau is Edom, the rival just to the southeast; Laban and his daughters stand for the Aramean kin to the northeast. The quarrels in the tents are the quarrels between peoples, told as one fractious household.',
      'It is also the most morally tangled stretch of Genesis. The hero is a deceiver who grasps from the womb, and the story never tidies him up. It lets grace fall on a man who has done nothing to deserve it, then spends the whole cycle wearing him down, deceived in turn by Laban, until the trickster is finally broken open in the dark by a river.',
      'For the exiles who shaped it, the shape would have been familiar to the bone: a man driven from home, made to serve a hard master in a far country for long years, and brought back at last to the land he was promised. Jacob’s road out and home is Israel’s own road, read backward.',
    ],
    sources: 'Sarna · Westermann · Alter',
  },
  capstone: {
    skicker: 'The shape of the Jacob story',
    title: 'The grasper who had to be lamed',
    paragraphs: [
      'Grace falls on Jacob before he has earned a thing, a heel-grabber chosen in the womb, and then the whole cycle is the long work of making him into someone who can carry it. He takes the birthright by leverage and the blessing by fraud, and spends the next twenty years being paid back in his own coin: deceived by Laban in the dark, handed the wrong sister, cheated of his wages, slowly worn down.',
      'The turn comes at a river, alone, the night before the reckoning he dreads. He wrestles a stranger who is somehow God, refuses to let go until he is blessed, and is given two things in the same grip: a new name and a permanent limp. The man who always won by grasping is finally blessed by being broken of it. He crosses over as Israel, the one who strives with God, and he crosses over walking wounded.',
      'Then the dreaded brother runs to embrace him, and the face Jacob braced to meet as an enemy looks to him like the face of God. But the story will not round itself off sweet. The same family carries a daughter’s violation answered by massacre, and Rachel’s grave by the roadside, and an old blind father buried by the two sons he set against each other. The promise goes forward through all of it, not because the people are good, but because grace, once given, does not let go, even of a cheat, even after it has had to lame him to keep him.',
    ],
    tensions: [
      { claim: 'Jacob is the blessed one, chosen by God and carried by grace.', counter: 'Jacob is a liar who steals, is justly deceived in return, and fathers a household that deceives and slaughters. The chosen line is the crooked line.', where: 'Genesis 27 and 34 against 28 and 32' },
    ],
    sources: 'von Rad · Westermann · Alter',
  },
  doorway: {
    skicker: 'The threshold into the next movement',
    title: 'From the cheat to the dreamer',
    paragraphs: [
      'Jacob is Israel now, and the camera, which has followed one man, widens to take in his twelve sons, the tribes to be. But it narrows again almost at once, onto one boy: Joseph, the favored son, the dreamer in the coat his father should have known better than to give him.',
      'The question shifts once more. With Abraham it was, will the promise ever come? With Jacob, what kind of person can carry it? With Joseph it becomes, what is God doing in the wreckage, when the brothers who hated their father’s favoritism throw the favored son into a pit and sell him into Egypt, and no voice from heaven says a word for thirteen years.',
      'The deceit that has run through three generations is about to be done to Jacob one last time, by his own sons, with the same prop, a brother’s bloodied coat. And the answer the next movement gives is the strangest in Genesis: not a rescue, but a long, hidden providence that works through the betrayal rather than around it.',
    ],
    nextMovementId: 'joseph',
  },
};
