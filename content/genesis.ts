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
            text: 'In the beginning, when God began to create the heavens and the earth—'
          },
          {
            n: 2,
            text: 'the earth was wild and waste, darkness over the face of the deep, and the breath of God sweeping over the waters—'
          },
          {
            n: 3,
            text: 'God said, “Let there be light.” And there was light.'
          },
          {
            n: 4,
            text: 'God saw that the light was good, and God separated the light from the darkness.'
          },
          {
            n: 5,
            text: 'God called the light Day, and the darkness he called Night. There was evening and there was morning: the first day.'
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
            text: 'God said, “Let there be a dome in the midst of the waters, to divide water from water.”'
          },
          {
            n: 7,
            text: 'So God made the dome and separated the waters below it from the waters above it. And it was so.'
          },
          {
            n: 8,
            text: 'God called the dome Sky. There was evening and there was morning: the second day.'
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
            text: 'God said, “Let the waters under the sky gather to one place, and let dry land appear.” And it was so.'
          },
          {
            n: 10,
            text: 'God called the dry land Earth, and the gathered waters Seas. And God saw that it was good.'
          },
          {
            n: 11,
            text: 'God said, “Let the earth put forth growing things—plants seeding, trees bearing fruit.” And it was so.'
          },
          {
            n: 12,
            text: 'The earth brought forth vegetation, each kind seeding after itself. And God saw that it was good.'
          },
          {
            n: 13,
            text: 'There was evening and there was morning: the third day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Notice the design: days one to three build the realms (light, sky, land), days four to six fill them. It’s structured like a poem, not a lab report.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Wenham'
        },
        meaning: 'God says, “let the earth put forth.” He doesn’t make the plants directly. He <b>invites the ground to bring them out</b>. Creation is handed the power to keep creating.',
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
            text: 'God said, “Let there be lights in the dome of the sky to divide day from night, and to mark the seasons, the days, and the years,'
          },
          {
            n: 15,
            text: 'and to be lamps in the dome of the sky to shine on the earth.” And it was so.'
          },
          {
            n: 16,
            text: 'God made the two great lights—the greater to govern the day, the lesser to govern the night—and the stars.'
          },
          {
            n: 17,
            text: 'God set them in the dome of the sky to shine on the earth,'
          },
          {
            n: 18,
            text: 'to govern day and night and to divide light from darkness. And God saw that it was good.'
          },
          {
            n: 19,
            text: 'There was evening and there was morning: the fourth day.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'In Babylon the sun and moon were gods, Shamash and Sin. Genesis refuses to name them. It calls them only “the greater” and “the lesser light,” demoted to lamps and clocks. The stars, the heart of Babylonian astrology, get three words: “and the stars.” A deliberate snub.',
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
            text: 'God said, “Let the waters swarm with living creatures, and let birds fly above the earth across the dome of the sky.”'
          },
          {
            n: 21,
            text: 'So God created the great sea creatures and every living thing that moves, and every winged bird. And God saw that it was good.'
          },
          {
            n: 22,
            text: 'God blessed them: “Be fruitful and multiply, and fill the waters and the skies.”'
          },
          {
            n: 23,
            text: 'There was evening and there was morning: the fifth day.'
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
            text: 'God said, “Let the earth bring forth living creatures of every kind.” And it was so.'
          },
          {
            n: 25,
            text: 'God made the wild animals and the livestock and everything that creeps. And God saw that it was good.'
          },
          {
            n: 26,
            text: 'Then God said, “Let us make humankind in our image, after our likeness, to have charge over the fish, the birds, and every living thing.”'
          },
          {
            n: 27,
            text: 'So God created humankind in his image; in the image of God he created them; male and female he created them.'
          },
          {
            n: 28,
            text: 'God blessed them and said, “Be fruitful and multiply, fill the earth and care for it.”'
          },
          {
            n: 31,
            text: 'God saw everything he had made, and it was very good. There was evening and there was morning: the sixth day.'
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
            text: 'The heavens and the earth were finished, and all their vast array.'
          },
          {
            n: 2,
            text: 'On the seventh day God finished his work, and he rested on the seventh day from all his work.'
          },
          {
            n: 3,
            text: 'God blessed the seventh day and made it holy, because on it he rested from all the work of creation.'
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
            text: 'This is the account of the heavens and the earth when they were created, in the day the LORD God made earth and sky.'
          },
          {
            n: 5,
            text: 'No shrub had yet appeared and no plant had sprung up, for the LORD God had not sent rain, and there was no one to work the ground.'
          },
          {
            n: 6,
            text: 'But streams rose up from the earth and watered the whole surface of the ground.'
          },
          {
            n: 7,
            text: 'Then the LORD God formed the man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.'
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
            text: 'The LORD God planted a garden in the east, in Eden, and there he placed the man he had formed.'
          },
          {
            n: 9,
            text: 'Out of the ground he made every tree grow that was pleasing to the eye and good for food. In the middle of the garden stood the tree of life and the tree of the knowledge of good and evil.'
          },
          {
            n: 10,
            text: 'A river flowed out of Eden to water the garden, and from there it divided into four headwaters.'
          },
          {
            n: 11,
            text: 'The first is the Pishon; it winds through the land of Havilah, where there is gold.'
          },
          {
            n: 12,
            text: 'The gold of that land is good; aromatic resin and onyx are there as well.'
          },
          {
            n: 13,
            text: 'The second river is the Gihon; it winds through the whole land of Cush.'
          },
          {
            n: 14,
            text: 'The third is the Tigris, running east of Ashur. And the fourth is the Euphrates.'
          },
          {
            n: 15,
            text: 'The LORD God took the man and placed him in the garden of Eden to work it and watch over it.'
          },
          {
            n: 16,
            text: 'And he commanded the man, “You are free to eat from any tree in the garden,'
          },
          {
            n: 17,
            text: 'but you must not eat from the tree of the knowledge of good and evil, for on the day you eat from it you will surely die.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The man is placed in the garden “to work it and watch over it,” the same pair of verbs later used for serving and guarding the temple. Eden is a sanctuary and the human is its gardener-priest, given real work, not idle ease. The rivers, the Tigris and Euphrates among them, root the garden in the actual map of the ancient world. And the command is mostly permission: eat from any tree, with one exception.',
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
            text: 'The LORD God said, “It is not good for the man to be alone. I will make a helper fit for him.”'
          },
          {
            n: 19,
            text: 'So out of the ground he formed every animal of the field and every bird of the sky, and brought them to the man to see what he would call them; and whatever the man called each one, that was its name.'
          },
          {
            n: 20,
            text: 'The man named all the livestock, the birds, and the wild animals. But for the man himself no fitting helper was found.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'Here is the first thing in the Bible called “not good.” In chapter 1 everything was good; the lone exception in this whole telling is solitude. The word for “helper” carries no hint of inferiority, it is used elsewhere of God himself helping Israel, and “fit for him” means a counterpart, his match. Watch him name every animal and find that none of them answer back.',
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
            text: 'So the LORD God brought a deep sleep over the man, and while he slept he took one of his sides and closed up the place with flesh.'
          },
          {
            n: 22,
            text: 'Then he built the side he had taken into a woman, and brought her to the man.'
          },
          {
            n: 23,
            text: 'The man said, “This one at last is bone of my bones and flesh of my flesh; she shall be called woman, for she was taken out of man.”'
          },
          {
            n: 24,
            text: 'This is why a man leaves his father and mother and is joined to his wife, and they become one flesh.'
          },
          {
            n: 25,
            text: 'The man and his wife were both naked, and they felt no shame.'
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
            text: 'Now the serpent was more cunning than any animal the LORD God had made. He said to the woman, “Did God really say you must not eat from any tree in the garden?”'
          },
          {
            n: 2,
            text: 'The woman answered, “We may eat from the trees of the garden,'
          },
          {
            n: 3,
            text: 'but God said we must not eat from the tree in the middle of the garden, or even touch it, or we will die.”'
          },
          {
            n: 4,
            text: '“You will not surely die,” the serpent said.'
          },
          {
            n: 5,
            text: '“For God knows that on the day you eat from it your eyes will be opened, and you will be like God, knowing good and evil.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'The serpent is not Satan. That reading comes centuries later. Here it is simply the most cunning of the animals, a talking creature in an old folk register. And the bait is not “do something evil.” It is “you will be like God, knowing good and evil,” which in Hebrew points at deciding good and evil for yourself.',
          src: 'Smith · Westermann'
        },
        meaning: 'The lie is subtle. Not a flat “you won’t die,” but the suggestion that God is holding out on you, that the limit exists to keep you small. Temptation almost always works by reframing a boundary as a deprivation.',
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
            text: 'When the woman saw that the tree was good for food and pleasing to the eye, and desirable for the wisdom it could give, she took some of its fruit and ate. She gave some to her husband, who was with her, and he ate.'
          },
          {
            n: 7,
            text: 'Then the eyes of both were opened, and they knew they were naked; so they sewed fig leaves together and made coverings.'
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
            text: 'They heard the sound of the LORD God walking in the garden in the cool of the day, and they hid among the trees.'
          },
          {
            n: 9,
            text: 'But the LORD God called to the man, “Where are you?”'
          },
          {
            n: 10,
            text: 'He answered, “I heard you in the garden, and I was afraid because I was naked, so I hid.”'
          },
          {
            n: 11,
            text: 'God said, “Who told you that you were naked? Have you eaten from the tree I commanded you not to eat from?”'
          },
          {
            n: 12,
            text: 'The man said, “The woman you put here with me, she gave me fruit from the tree, and I ate.”'
          },
          {
            n: 13,
            text: 'Then the LORD God said to the woman, “What is this you have done?” She said, “The serpent deceived me, and I ate.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the older Yahwist’s God, who walks in a garden in the cool of the day and asks questions out loud. “Where are you?” is not a request for information. He knows. It is an opening, a chance to come out. Watch the blame travel: the man points at the woman and at God in one breath, “the woman you put here,” and the woman points at the serpent.'
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
            text: 'So the LORD God said to the serpent, “Because you have done this, you are cursed above all the animals. You will crawl on your belly and eat dust all the days of your life.'
          },
          {
            n: 15,
            text: 'I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.”'
          },
          {
            n: 16,
            text: 'To the woman he said, “I will sharpen the pain of your childbearing; in pain you will give birth. Your desire will be for your husband, and he will rule over you.”'
          },
          {
            n: 17,
            text: 'To the man he said, “Because you listened to your wife and ate from the tree I forbade you, the ground is cursed because of you; through painful toil you will eat of it all the days of your life.'
          },
          {
            n: 18,
            text: 'It will yield thorns and thistles for you, and you will eat the plants of the field.'
          },
          {
            n: 19,
            text: 'By the sweat of your brow you will eat your bread, until you return to the ground, since from it you were taken; for dust you are, and to dust you will return.”'
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
            text: 'The man named his wife Eve, because she would become the mother of all the living.'
          },
          {
            n: 21,
            text: 'The LORD God made garments of skin for the man and his wife and clothed them.'
          },
          {
            n: 22,
            text: 'And the LORD God said, “The man has now become like one of us, knowing good and evil. He must not reach out and take also from the tree of life and eat, and live forever.”'
          },
          {
            n: 23,
            text: 'So the LORD God sent him out of the garden of Eden to work the ground from which he was taken.'
          },
          {
            n: 24,
            text: 'After driving the man out, he placed cherubim east of the garden, and a flaming sword flashing back and forth, to guard the way to the tree of life.'
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
            text: 'Now the man knew his wife Eve, and she conceived and gave birth to Cain. She said, “With the LORD’s help I have brought forth a man.”'
          },
          {
            n: 2,
            text: 'Later she gave birth to his brother Abel. Abel kept flocks, and Cain worked the ground.'
          },
          {
            n: 3,
            text: 'In the course of time Cain brought the LORD an offering from the fruit of the ground,'
          },
          {
            n: 4,
            text: 'and Abel brought the choicest firstborn of his flock. The LORD looked with favor on Abel and his offering,'
          },
          {
            n: 5,
            text: 'but on Cain and his offering he did not look with favor. So Cain burned with anger, and his face fell.'
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
            text: 'The LORD said to Cain, “Why are you angry? Why has your face fallen?'
          },
          {
            n: 7,
            text: 'If you do what is right, will you not be lifted up? But if you do not, sin is crouching at the door; its desire is for you, but you must rule over it.”'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'God speaks to Cain before the murder, not after, a warning rather than a verdict. “Sin is crouching at the door” pictures sin as a predator at the threshold, an image that echoes a Mesopotamian word for a demon that waited at doorways. And “its desire is for you, but you must rule over it” are almost exactly the words spoken to the woman one chapter earlier, now turned on sin itself.',
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
            text: 'Cain said to his brother Abel, “Let us go out to the field.” And while they were in the field, Cain rose up against his brother Abel and killed him.'
          },
          {
            n: 9,
            text: 'Then the LORD said to Cain, “Where is your brother Abel?” “I do not know,” he said. “Am I my brother’s keeper?”'
          },
          {
            n: 10,
            text: 'The LORD said, “What have you done? Listen, your brother’s blood is crying out to me from the ground.”'
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
            text: '“Now you are cursed from the ground, which opened its mouth to take your brother’s blood from your hand.'
          },
          {
            n: 12,
            text: 'When you work the ground, it will no longer yield its strength to you. You will be a restless wanderer on the earth.”'
          },
          {
            n: 13,
            text: 'Cain said to the LORD, “My punishment is more than I can bear.'
          },
          {
            n: 14,
            text: 'Today you drive me from the land, and I will be hidden from your face; I will be a restless wanderer, and whoever finds me will kill me.”'
          },
          {
            n: 15,
            text: 'But the LORD said to him, “Not so; whoever kills Cain will suffer vengeance seven times over.” And the LORD put a mark on Cain, so that no one who found him would kill him.'
          },
          {
            n: 16,
            text: 'So Cain went out from the LORD’s presence and settled in the land of Nod, east of Eden.'
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
            text: 'Lamech said to his wives, “Adah and Zillah, hear my voice; wives of Lamech, listen to my words. I have killed a man for wounding me, a young man for striking me.'
          },
          {
            n: 24,
            text: 'If Cain is avenged seven times, then Lamech seventy-seven times.”'
          },
          {
            n: 25,
            text: 'Adam knew his wife again, and she bore a son and named him Seth, saying, “God has granted me another child in place of Abel, since Cain killed him.”'
          },
          {
            n: 26,
            text: 'Seth too had a son, and named him Enosh. At that time people began to call on the name of the LORD.'
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
            text: 'This is the written account of Adam’s family line. When God created humankind, he made them in the likeness of God.'
          },
          {
            n: 2,
            text: 'He created them male and female, blessed them, and called them “humankind” when they were created.'
          },
          {
            n: 3,
            text: 'When Adam had lived 130 years, he had a son in his own likeness, after his image, and named him Seth.'
          },
          {
            n: 4,
            text: 'After Seth was born, Adam lived 800 years and had other sons and daughters.'
          },
          {
            n: 5,
            text: 'Altogether Adam lived 930 years, and then he died.'
          },
          {
            n: 6,
            text: 'When Seth had lived 105 years, he became the father of Enosh,'
          },
          {
            n: 7,
            text: 'and afterward lived 807 years and had other sons and daughters.'
          },
          {
            n: 8,
            text: 'Altogether Seth lived 912 years, and then he died.'
          },
          {
            n: 9,
            text: 'When Enosh had lived 90 years, he became the father of Kenan,'
          },
          {
            n: 10,
            text: 'and afterward lived 815 years and had other sons and daughters.'
          },
          {
            n: 11,
            text: 'Altogether Enosh lived 905 years, and then he died.'
          },
          {
            n: 12,
            text: 'When Kenan had lived 70 years, he became the father of Mahalalel,'
          },
          {
            n: 13,
            text: 'and afterward lived 840 years and had other sons and daughters.'
          },
          {
            n: 14,
            text: 'Altogether Kenan lived 910 years, and then he died.'
          },
          {
            n: 15,
            text: 'When Mahalalel had lived 65 years, he became the father of Jared,'
          },
          {
            n: 16,
            text: 'and afterward lived 830 years and had other sons and daughters.'
          },
          {
            n: 17,
            text: 'Altogether Mahalalel lived 895 years, and then he died.'
          },
          {
            n: 18,
            text: 'When Jared had lived 162 years, he became the father of Enoch,'
          },
          {
            n: 19,
            text: 'and afterward lived 800 years and had other sons and daughters.'
          },
          {
            n: 20,
            text: 'Altogether Jared lived 962 years, and then he died.'
          },
          {
            n: 21,
            text: 'When Enoch had lived 65 years, he became the father of Methuselah.'
          },
          {
            n: 22,
            text: 'After that, Enoch walked faithfully with God 300 years and had other sons and daughters.'
          },
          {
            n: 23,
            text: 'Altogether Enoch lived 365 years.'
          },
          {
            n: 24,
            text: 'Enoch walked faithfully with God; then he was no more, because God took him away.'
          },
          {
            n: 25,
            text: 'When Methuselah had lived 187 years, he became the father of Lamech,'
          },
          {
            n: 26,
            text: 'and afterward lived 782 years and had other sons and daughters.'
          },
          {
            n: 27,
            text: 'Altogether Methuselah lived 969 years, and then he died.'
          },
          {
            n: 28,
            text: 'When Lamech had lived 182 years, he had a son.'
          },
          {
            n: 29,
            text: 'He named him Noah, saying, “He will comfort us in the labor and the painful toil of our hands, on the ground the LORD has cursed.”'
          },
          {
            n: 30,
            text: 'After Noah was born, Lamech lived 595 years and had other sons and daughters.'
          },
          {
            n: 31,
            text: 'Altogether Lamech lived 777 years, and then he died.'
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
            text: 'When humankind began to multiply on the face of the earth and daughters were born to them,'
          },
          {
            n: 2,
            text: 'the sons of God saw that the daughters of men were beautiful, and they took as wives any they chose.'
          },
          {
            n: 3,
            text: 'Then the LORD said, “My spirit will not contend with humankind forever, for they are flesh; their days will be a hundred and twenty years.”'
          },
          {
            n: 4,
            text: 'The Nephilim were on the earth in those days, and afterward as well, when the sons of God went to the daughters of men and they bore them children. These were the mighty ones of old, the men of renown.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the strangest fragment in the primeval history, and the editors kept it almost raw. Divine beings, “sons of God”, take human women, and the children are the Nephilim, the “fallen ones”, giants, “the mighty ones of old”. It is a shard of older myth, the kind of demigod-hero story told all across the ancient Near East, where Gilgamesh himself is two-thirds god. The hundred-and-twenty-year limit is God drawing a hard line between the divine and the human after that line had been crossed.',
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
            text: 'The LORD saw how great the wickedness of humankind had become on the earth, and that every inclination of the thoughts of their heart was only evil all the time.'
          },
          {
            n: 6,
            text: 'And the LORD regretted that he had made humankind on the earth, and his heart was filled with pain.'
          },
          {
            n: 7,
            text: 'So the LORD said, “I will blot out humankind, whom I have created, from the face of the earth, people and animals and creatures that move along the ground and birds of the sky, for I regret that I have made them.”'
          },
          {
            n: 8,
            text: 'But Noah found favor in the eyes of the LORD.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This is the Yahwist’s voice, raw and unguarded. God “regrets”; his heart is “filled with pain”. This is not the untroubled, impassive deity of later philosophy. It is a God who can be wounded by what the world becomes. The bleakest verdict in Genesis, that the human heart inclines only to evil, sits right beside God’s grief, not his rage.',
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
            text: 'This is the account of Noah. Noah was a righteous man, blameless among the people of his time, and Noah walked with God.'
          },
          {
            n: 10,
            text: 'Noah had three sons: Shem, Ham, and Japheth.'
          },
          {
            n: 11,
            text: 'Now the earth was corrupt in God’s sight and full of violence.'
          },
          {
            n: 12,
            text: 'God saw how corrupt the earth had become, for all flesh had corrupted its way on the earth.'
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
            text: 'So God said to Noah, “I am going to put an end to all flesh, for the earth is full of violence because of them. I am going to destroy them along with the earth.'
          },
          {
            n: 14,
            text: 'Make yourself an ark of cypress wood; make rooms in it and coat it with pitch inside and out.'
          },
          {
            n: 15,
            text: 'This is how you are to build it: the ark is to be three hundred cubits long, fifty wide, and thirty high.'
          },
          {
            n: 16,
            text: 'Make a roof for it, and finish the ark a cubit from the top. Put a door in its side, and make lower, middle, and upper decks.'
          },
          {
            n: 17,
            text: 'I am going to bring floodwaters on the earth to destroy all flesh that has the breath of life in it; everything on the earth will perish.'
          },
          {
            n: 18,
            text: 'But I will establish my covenant with you, and you will enter the ark, you and your sons and your wife and your sons’ wives with you.'
          },
          {
            n: 19,
            text: 'You are to bring into the ark two of every living thing, male and female, to keep them alive with you.”'
          },
          {
            n: 22,
            text: 'Noah did everything just as God commanded him.'
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
            text: 'The LORD said to Noah, “Go into the ark, you and your whole household, for I have found you righteous in this generation.'
          },
          {
            n: 2,
            text: 'Take with you seven pairs of every clean animal, a male and its mate, and one pair of every unclean animal,'
          },
          {
            n: 3,
            text: 'and seven pairs of every kind of bird, to keep their offspring alive over all the earth.'
          },
          {
            n: 4,
            text: 'Seven days from now I will send rain on the earth for forty days and forty nights, and I will wipe from the land every living thing I have made.”'
          },
          {
            n: 5,
            text: 'And Noah did everything the LORD commanded him.'
          },
          {
            n: 6,
            text: 'Noah was six hundred years old when the floodwaters came on the earth.'
          },
          {
            n: 7,
            text: 'He and his sons and his wife and his sons’ wives went into the ark to escape the waters.'
          },
          {
            n: 8,
            text: 'Of the clean and the unclean animals, of the birds and of everything that moves along the ground,'
          },
          {
            n: 9,
            text: 'pairs came to Noah and entered the ark, male and female, as God had commanded him.'
          },
          {
            n: 10,
            text: 'And after the seven days the floodwaters came on the earth.'
          },
          {
            n: 11,
            text: 'In the six hundredth year of Noah’s life, on the seventeenth day of the second month, all the springs of the great deep burst open, and the windows of the heavens were opened.'
          },
          {
            n: 12,
            text: 'Rain fell on the earth forty days and forty nights.'
          },
          {
            n: 13,
            text: 'On that very day Noah, with his sons Shem, Ham, and Japheth, and his wife and his three sons’ wives, entered the ark.'
          },
          {
            n: 14,
            text: 'They had with them every kind of wild animal, livestock, creeping thing, and bird.'
          },
          {
            n: 15,
            text: 'Pairs of every creature with the breath of life in it came to Noah and entered the ark.'
          },
          {
            n: 16,
            text: 'The ones that went in were male and female of every living thing, as God had commanded. Then the LORD shut him in.'
          },
          {
            n: 17,
            text: 'For forty days the flood kept rising, and the waters lifted the ark high above the earth.'
          },
          {
            n: 18,
            text: 'They rose and increased, and the ark floated on the surface of the water.'
          },
          {
            n: 19,
            text: 'They rose higher and higher until every high mountain under the heavens was covered.'
          },
          {
            n: 20,
            text: 'The waters rose and covered the mountains to a depth of more than twenty feet.'
          },
          {
            n: 21,
            text: 'Every living thing that moved on land perished: the birds, the livestock, the wild animals, all that swarmed over the earth, and all humankind.'
          },
          {
            n: 22,
            text: 'Everything on dry land with the breath of life in its nostrils died.'
          },
          {
            n: 23,
            text: 'Every living thing on the face of the earth was wiped away; only Noah was left, and those with him in the ark.'
          },
          {
            n: 24,
            text: 'And the waters covered the earth a hundred and fifty days.'
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
            text: 'But God remembered Noah and all the animals with him in the ark, and he sent a wind over the earth, and the waters began to subside.'
          },
          {
            n: 2,
            text: 'The springs of the deep and the windows of the heavens were closed, and the rain stopped.'
          },
          {
            n: 3,
            text: 'The water receded steadily from the earth, and at the end of a hundred and fifty days it had gone down.'
          },
          {
            n: 4,
            text: 'On the seventeenth day of the seventh month the ark came to rest on the mountains of Ararat.'
          },
          {
            n: 5,
            text: 'The waters kept receding until the tenth month, and on its first day the tops of the mountains appeared.'
          },
          {
            n: 6,
            text: 'After forty days Noah opened the window he had made in the ark'
          },
          {
            n: 7,
            text: 'and sent out a raven, which kept flying back and forth until the waters had dried up.'
          },
          {
            n: 8,
            text: 'Then he sent out a dove to see whether the water had receded from the surface of the ground.'
          },
          {
            n: 9,
            text: 'But the dove found no place to set its foot and returned to him, for water still covered the whole earth. So he reached out and took it back into the ark.'
          },
          {
            n: 10,
            text: 'He waited seven more days and again sent the dove out from the ark.'
          },
          {
            n: 11,
            text: 'When it returned to him toward evening, there in its beak was a freshly plucked olive leaf. Then Noah knew the water had receded from the earth.'
          },
          {
            n: 12,
            text: 'He waited seven more days and sent the dove out once more, and this time it did not return to him.'
          },
          {
            n: 13,
            text: 'By the first day of the first month of Noah’s six hundred and first year, the water had dried up. Noah removed the covering of the ark and saw that the ground was dry.'
          },
          {
            n: 14,
            text: 'By the twenty-seventh day of the second month the earth was fully dry.'
          },
          {
            n: 15,
            text: 'Then God said to Noah,'
          },
          {
            n: 16,
            text: '“Come out of the ark, you and your wife and your sons and their wives.'
          },
          {
            n: 17,
            text: 'Bring out every living thing that is with you, so they may spread over the earth and be fruitful and increase.”'
          },
          {
            n: 18,
            text: 'So Noah came out, with his sons and his wife and his sons’ wives.'
          },
          {
            n: 19,
            text: 'Every animal, every creeping thing, and every bird came out of the ark, kind by kind.'
          },
          {
            n: 20,
            text: 'Then Noah built an altar to the LORD and offered burnt offerings on it.'
          },
          {
            n: 21,
            text: 'The LORD smelled the pleasing aroma and said in his heart, “Never again will I curse the ground because of humankind, even though the bent of the human heart is toward evil from youth. Never again will I strike down all the living, as I have done.'
          },
          {
            n: 22,
            text: 'As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.”'
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
            text: 'Then God blessed Noah and his sons and said to them, “Be fruitful and multiply and fill the earth.'
          },
          {
            n: 2,
            text: 'The fear and dread of you will fall on every beast of the earth and every bird of the sky, on everything that moves along the ground and all the fish of the sea; they are given into your hands.'
          },
          {
            n: 3,
            text: 'Everything that lives and moves will be food for you. Just as I gave you the green plants, I now give you all of it.'
          },
          {
            n: 4,
            text: 'But you must not eat meat that still has its lifeblood in it.”'
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
            text: 'And for your lifeblood I will surely demand a reckoning. From every animal I will demand it, and from every human being I will demand a reckoning for the life of another.'
          },
          {
            n: 6,
            text: 'Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made humankind.'
          },
          {
            n: 7,
            text: 'As for you, be fruitful and multiply; spread out over the earth and multiply on it.”'
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
            text: '“I now establish my covenant with you and with your descendants after you,'
          },
          {
            n: 10,
            text: 'and with every living creature that was with you, the birds, the livestock, and all the wild animals, all that came out of the ark, every living thing on earth.'
          },
          {
            n: 11,
            text: 'I establish my covenant with you: never again will all life be cut off by floodwaters; never again will a flood destroy the earth.”'
          },
          {
            n: 12,
            text: 'And God said, “This is the sign of the covenant I am making between me and you and every living creature with you, for all generations to come:'
          },
          {
            n: 13,
            text: 'I have set my bow in the clouds, and it will be the sign of the covenant between me and the earth.'
          },
          {
            n: 16,
            text: 'When the bow is in the clouds, I will see it and remember the everlasting covenant between God and every living creature on the earth.”'
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
            text: 'Noah, a man of the soil, was the first to plant a vineyard.'
          },
          {
            n: 21,
            text: 'He drank some of its wine, became drunk, and lay uncovered inside his tent.'
          },
          {
            n: 22,
            text: 'Ham, the father of Canaan, saw his father naked and told his two brothers outside.'
          },
          {
            n: 23,
            text: 'But Shem and Japheth took a garment, laid it across their shoulders, and walking backward they covered their father’s nakedness. Their faces were turned away, so they would not see him.'
          },
          {
            n: 24,
            text: 'When Noah awoke from his wine and learned what his youngest son had done to him,'
          },
          {
            n: 25,
            text: 'he said, “Cursed be Canaan. The lowest of slaves will he be to his brothers.”'
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
            text: 'This is the account of Shem, Ham, and Japheth, Noah’s sons, who had sons of their own after the flood.'
          },
          {
            n: 2,
            text: 'The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshek, and Tiras.'
          },
          {
            n: 3,
            text: 'The sons of Gomer: Ashkenaz, Riphath, and Togarmah.'
          },
          {
            n: 4,
            text: 'The sons of Javan: Elishah, Tarshish, the Kittites, and the Rodanites.'
          },
          {
            n: 5,
            text: 'From these the coastland peoples spread into their lands, each by its clan, within its nation, with its own language.'
          },
          {
            n: 6,
            text: 'The sons of Ham: Cush, Egypt, Put, and Canaan.'
          },
          {
            n: 7,
            text: 'The sons of Cush: Seba, Havilah, Sabtah, Raamah, and Sabteka. The sons of Raamah: Sheba and Dedan.'
          },
          {
            n: 8,
            text: 'Cush was the father of Nimrod, who grew to be a mighty warrior on the earth.'
          },
          {
            n: 9,
            text: 'He was a mighty hunter before the LORD; so people say, “Like Nimrod, a mighty hunter before the LORD.”'
          },
          {
            n: 10,
            text: 'The first centers of his kingdom were Babylon, Uruk, Akkad, and Kalneh, in the land of Shinar.'
          },
          {
            n: 11,
            text: 'From that land he went out to Assyria, where he built Nineveh, Rehoboth Ir, Calah,'
          },
          {
            n: 12,
            text: 'and Resen, between Nineveh and Calah; that is the great city.'
          },
          {
            n: 13,
            text: 'Egypt was the father of the Ludites, Anamites, Lehabites, Naphtuhites,'
          },
          {
            n: 14,
            text: 'Pathrusites, Kasluhites (from whom the Philistines came), and Caphtorites.'
          },
          {
            n: 15,
            text: 'Canaan was the father of Sidon his firstborn, and of the Hittites,'
          },
          {
            n: 16,
            text: 'Jebusites, Amorites, Girgashites,'
          },
          {
            n: 17,
            text: 'Hivites, Arkites, Sinites,'
          },
          {
            n: 18,
            text: 'Arvadites, Zemarites, and Hamathites. Later the Canaanite clans scattered,'
          },
          {
            n: 19,
            text: 'and the borders of Canaan reached from Sidon toward Gerar as far as Gaza, then toward Sodom, Gomorrah, Admah, and Zeboyim, as far as Lasha.'
          },
          {
            n: 20,
            text: 'These are the sons of Ham by their clans and languages, in their lands and nations.'
          },
          {
            n: 21,
            text: 'Sons were also born to Shem, the older brother of Japheth; Shem was the ancestor of all the sons of Eber.'
          },
          {
            n: 22,
            text: 'The sons of Shem: Elam, Ashur, Arphaxad, Lud, and Aram.'
          },
          {
            n: 23,
            text: 'The sons of Aram: Uz, Hul, Gether, and Meshek.'
          },
          {
            n: 24,
            text: 'Arphaxad was the father of Shelah, and Shelah the father of Eber.'
          },
          {
            n: 25,
            text: 'Two sons were born to Eber: one was named Peleg, because in his days the earth was divided; his brother was named Joktan.'
          },
          {
            n: 26,
            text: 'Joktan was the father of Almodad, Sheleph, Hazarmaveth, Jerah,'
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
            text: 'The region where they lived stretched from Mesha toward Sephar, in the eastern hill country.'
          },
          {
            n: 31,
            text: 'These are the sons of Shem by their clans and languages, in their lands and nations.'
          },
          {
            n: 32,
            text: 'These are the clans of Noah’s sons, by their lines of descent, within their nations. From these the nations spread out over the earth after the flood.'
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
            text: 'Now the whole earth had one language and a common speech.'
          },
          {
            n: 2,
            text: 'As people moved eastward, they found a plain in the land of Shinar and settled there.'
          },
          {
            n: 3,
            text: 'They said to one another, “Come, let us make bricks and bake them hard.” They had brick for stone, and tar for mortar.'
          },
          {
            n: 4,
            text: 'Then they said, “Come, let us build ourselves a city, with a tower that reaches to the heavens, so that we may make a name for ourselves; otherwise we will be scattered over the face of the whole earth.”'
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
            text: 'But the LORD came down to see the city and the tower the people were building.'
          },
          {
            n: 6,
            text: 'The LORD said, “If as one people speaking the same language they have begun to do this, then nothing they plan to do will be beyond them.'
          },
          {
            n: 7,
            text: 'Come, let us go down and confuse their language, so they will not understand one another.”'
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
            text: 'So the LORD scattered them from there over the whole earth, and they stopped building the city.'
          },
          {
            n: 9,
            text: 'That is why it was called Babel, because there the LORD confused the language of the whole earth. From there the LORD scattered them over the face of all the earth.'
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
            text: 'The LORD had said to Abram, “Go from your country, your people, and your father’s household to the land I will show you.'
          },
          {
            n: 2,
            text: 'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.'
          },
          {
            n: 3,
            text: 'I will bless those who bless you, and whoever curses you I will curse; and all the families of the earth will be blessed through you.”'
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
            text: 'So Abram went, as the LORD had told him, and Lot went with him. Abram was seventy-five years old when he set out from Harran.'
          },
          {
            n: 5,
            text: 'He took his wife Sarai, his nephew Lot, all the possessions they had gathered and the people they had acquired in Harran, and they set out for the land of Canaan, and they arrived there.'
          },
          {
            n: 6,
            text: 'Abram traveled through the land as far as the site of the great tree of Moreh at Shechem. At that time the Canaanites were in the land.'
          },
          {
            n: 7,
            text: 'The LORD appeared to Abram and said, “To your offspring I will give this land.” So he built an altar there to the LORD, who had appeared to him.'
          },
          {
            n: 8,
            text: 'From there he went on toward the hills east of Bethel and pitched his tent, and he built an altar to the LORD and called on the name of the LORD.'
          },
          {
            n: 9,
            text: 'Then Abram set out and continued toward the Negev.'
          }
        ],
        ground: {
          kind: 'historical',
          text: '“So Abram went.” He is seventy-five. He reaches Canaan, and the text drops a quiet, loaded line: the Canaanites were already in the land. The promised land is full of other people from the first day. Promise and fact are in tension immediately. Abram answers by building altars at Shechem and Bethel, marking with worship a land he has been promised but does not own.',
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
            text: 'Now there was a famine in the land, and Abram went down to Egypt to stay there a while, for the famine was severe.'
          },
          {
            n: 11,
            text: 'As he was about to enter Egypt, he said to his wife Sarai, “I know what a beautiful woman you are.'
          },
          {
            n: 12,
            text: 'When the Egyptians see you, they will say, ‘This is his wife.’ Then they will kill me but let you live.'
          },
          {
            n: 13,
            text: 'Say you are my sister, so that I will be treated well for your sake and my life will be spared because of you.”'
          },
          {
            n: 15,
            text: 'And when Pharaoh’s officials saw her, they praised her to Pharaoh, and she was taken into his palace.'
          },
          {
            n: 16,
            text: 'He treated Abram well for her sake, and Abram acquired sheep and cattle, donkeys and servants.'
          },
          {
            n: 17,
            text: 'But the LORD inflicted serious diseases on Pharaoh and his household because of Abram’s wife Sarai.'
          },
          {
            n: 18,
            text: 'So Pharaoh summoned Abram. “What have you done to me?” he said. “Why didn’t you tell me she was your wife?'
          },
          {
            n: 19,
            text: 'Why did you say, ‘She is my sister,’ so that I took her to be my wife? Now then, here is your wife. Take her and go.”'
          },
          {
            n: 20,
            text: 'Then Pharaoh gave orders, and they sent Abram on his way, with his wife and everything he had.'
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
            text: 'So Abram went up from Egypt to the Negev, he and his wife and everything he had, and Lot went with him.'
          },
          {
            n: 2,
            text: 'Abram had become very wealthy in livestock and in silver and gold.'
          },
          {
            n: 3,
            text: 'From the Negev he journeyed by stages toward Bethel, to the place between Bethel and Ai where his tent had stood at the first,'
          },
          {
            n: 4,
            text: 'to the place of the altar he had built there earlier; and there Abram called on the name of the LORD.'
          },
          {
            n: 5,
            text: 'Now Lot, who was traveling with Abram, also had flocks and herds and tents,'
          },
          {
            n: 6,
            text: 'and the land could not support them both living side by side, for their possessions were so great that they could not stay together.'
          },
          {
            n: 7,
            text: 'Quarreling broke out between Abram’s herders and Lot’s. The Canaanites and the Perizzites were living in the land at that time.'
          },
          {
            n: 8,
            text: 'So Abram said to Lot, “Let there be no quarrel between you and me, or between your herders and mine, for we are family.'
          },
          {
            n: 9,
            text: 'Is not the whole land before you? Let us part. If you go to the left, I will go to the right; if you go to the right, I will go to the left.”'
          },
          {
            n: 10,
            text: 'Lot looked up and saw that the whole Jordan plain was well watered, like the garden of the LORD, like the land of Egypt, all the way to Zoar. (This was before the LORD destroyed Sodom and Gomorrah.)'
          },
          {
            n: 11,
            text: 'So Lot chose for himself the whole Jordan plain and set out toward the east. The two men parted company:'
          },
          {
            n: 12,
            text: 'Abram lived in the land of Canaan, while Lot settled among the cities of the plain and pitched his tents near Sodom.'
          },
          {
            n: 13,
            text: 'Now the people of Sodom were wicked, sinning greatly against the LORD.'
          },
          {
            n: 14,
            text: 'After Lot had parted from him, the LORD said to Abram, “Look around from where you are, to the north and south, to the east and west.'
          },
          {
            n: 15,
            text: 'All the land you see I will give to you and your offspring forever.'
          },
          {
            n: 16,
            text: 'I will make your offspring like the dust of the earth, so that if anyone could count the dust, then your offspring could be counted.'
          },
          {
            n: 17,
            text: 'Go, walk through the length and breadth of the land, for I am giving it to you.”'
          },
          {
            n: 18,
            text: 'So Abram moved his tents and went to live near the great trees of Mamre at Hebron, where he built an altar to the LORD.'
          }
        ],
        ground: {
          kind: 'historical',
          text: 'This quiet chapter sets up a disaster four chapters away. The narrator pauses to tell us the Jordan plain was lush “before the LORD destroyed Sodom and Gomorrah,” and that its people were already wicked, so Lot’s choice, made entirely by the eye, is visibly aimed at ruin, while Abram keeps living by a promise he cannot see. The detail that the land “could not support them both” reflects the real strain of large herding clans competing for limited grazing and water in the Canaanite hill country.',
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
            text: 'In the days of Amraphel king of Shinar, Arioch king of Ellasar, Kedorlaomer king of Elam, and Tidal king of Goiim,'
          },
          {
            n: 2,
            text: 'these kings made war on Bera king of Sodom, Birsha king of Gomorrah, Shinab king of Admah, Shemeber king of Zeboiim, and the king of Bela (that is, Zoar).'
          },
          {
            n: 3,
            text: 'All these latter kings joined forces in the Valley of Siddim (that is, the Dead Sea).'
          },
          {
            n: 4,
            text: 'For twelve years they had been subject to Kedorlaomer, but in the thirteenth year they rebelled.'
          },
          {
            n: 5,
            text: 'In the fourteenth year Kedorlaomer and the kings allied with him went out and defeated the Rephaim in Ashteroth Karnaim, the Zuzim in Ham, the Emim in Shaveh Kiriathaim,'
          },
          {
            n: 6,
            text: 'and the Horites in the hill country of Seir, as far as El Paran near the desert.'
          },
          {
            n: 7,
            text: 'Then they turned back to En Mishpat (that is, Kadesh), and they conquered the whole territory of the Amalekites, and also the Amorites living in Hazezon Tamar.'
          },
          {
            n: 8,
            text: 'Then the kings of Sodom, Gomorrah, Admah, Zeboiim, and Bela (that is, Zoar) marched out and drew up their lines in the Valley of Siddim'
          },
          {
            n: 9,
            text: 'against the four kings, Kedorlaomer, Tidal, Amraphel, and Arioch, four kings against five.'
          },
          {
            n: 10,
            text: 'Now the Valley of Siddim was full of tar pits, and when the kings of Sodom and Gomorrah fled, some fell into them, and the rest fled to the hills.'
          },
          {
            n: 11,
            text: 'The victors seized all the goods of Sodom and Gomorrah and all their food, and went on their way.'
          },
          {
            n: 12,
            text: 'They also carried off Abram’s nephew Lot and his possessions, since he was living in Sodom.'
          },
          {
            n: 13,
            text: 'A man who had escaped came and reported it to Abram the Hebrew, who was living near the great trees of Mamre the Amorite, a brother of Eshkol and Aner, all of them allied with Abram.'
          },
          {
            n: 14,
            text: 'When Abram heard that his relative had been taken captive, he called out the 318 trained men born in his household and pursued the raiders as far as Dan.'
          },
          {
            n: 15,
            text: 'During the night he divided his forces against them, struck them, and chased them as far as Hobah, north of Damascus.'
          },
          {
            n: 16,
            text: 'He recovered all the goods and brought back his relative Lot and his possessions, together with the women and the other people.'
          },
          {
            n: 17,
            text: 'After Abram returned from defeating Kedorlaomer and the kings with him, the king of Sodom came out to meet him in the Valley of Shaveh (that is, the King’s Valley).'
          },
          {
            n: 18,
            text: 'Then Melchizedek king of Salem brought out bread and wine. He was priest of God Most High,'
          },
          {
            n: 19,
            text: 'and he blessed Abram, saying, “Blessed be Abram by God Most High, Maker of heaven and earth.'
          },
          {
            n: 20,
            text: 'And blessed be God Most High, who delivered your enemies into your hand.” Then Abram gave him a tenth of everything.'
          },
          {
            n: 21,
            text: 'The king of Sodom said to Abram, “Give me the people and keep the goods for yourself.”'
          },
          {
            n: 22,
            text: 'But Abram said to him, “With my hand raised I have sworn to the LORD, God Most High, Maker of heaven and earth,'
          },
          {
            n: 23,
            text: 'that I will accept nothing belonging to you, not a thread or the strap of a sandal, so you can never say, ‘I made Abram rich.’'
          },
          {
            n: 24,
            text: 'I will take nothing but what my men have eaten and the share of Aner, Eshkol, and Mamre, who went with me. Let them have their share.”'
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
            text: 'After this, the word of the LORD came to Abram in a vision: “Do not be afraid, Abram. I am your shield, and your reward will be very great.”'
          },
          {
            n: 2,
            text: 'But Abram said, “Sovereign LORD, what can you give me, since I remain childless and the one who will inherit my house is Eliezer of Damascus?”'
          },
          {
            n: 3,
            text: 'And Abram said, “You have given me no children, so a servant born in my household will be my heir.”'
          },
          {
            n: 4,
            text: 'Then the word of the LORD came to him: “This man will not be your heir; a son who is your own flesh and blood will be your heir.”'
          },
          {
            n: 5,
            text: 'He took him outside and said, “Look up at the sky and count the stars, if you can count them.” Then he said, “So shall your offspring be.”'
          },
          {
            n: 6,
            text: 'Abram believed the LORD, and he credited it to him as righteousness.'
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
            text: 'He also said to him, “I am the LORD, who brought you out of Ur of the Chaldeans to give you this land to take possession of it.”'
          },
          {
            n: 8,
            text: 'But Abram said, “Sovereign LORD, how can I know that I will possess it?”'
          },
          {
            n: 9,
            text: 'So the LORD said, “Bring me a heifer, a goat, and a ram, each three years old, along with a dove and a young pigeon.”'
          },
          {
            n: 10,
            text: 'Abram brought all these, cut them in two, and arranged the halves opposite each other; the birds, however, he did not cut.'
          },
          {
            n: 11,
            text: 'Then birds of prey came down on the carcasses, but Abram drove them away.'
          },
          {
            n: 12,
            text: 'As the sun was setting, Abram fell into a deep sleep, and a thick and dreadful darkness came over him.'
          },
          {
            n: 13,
            text: 'Then the LORD said to him, “Know for certain that your descendants will be strangers in a land not their own, and there they will be enslaved and mistreated four hundred years.'
          },
          {
            n: 14,
            text: 'But I will judge the nation they serve as slaves, and afterward they will come out with great possessions.'
          },
          {
            n: 16,
            text: 'In the fourth generation your descendants will return here, for the sin of the Amorites has not yet run its full course.”'
          },
          {
            n: 17,
            text: 'When the sun had set and darkness had fallen, a smoking firepot with a blazing torch appeared and passed between the pieces.'
          },
          {
            n: 18,
            text: 'On that day the LORD made a covenant with Abram and said, “To your descendants I give this land, from the river of Egypt to the great river, the Euphrates.”'
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
          arch: 'The deep sleep and the “thick and dreadful darkness” are the night the waking self cannot enter on its own terms. The decisive thing is sworn while the ego sleeps, in the dark, by a fire that moves on its own. What binds a life most deeply is often sealed below the level of conscious choice. (The covenant sworn in the dark, beneath the waking self.)'
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
          { n: 1, text: 'Now Sarai, Abram’s wife, had borne him no children. She had an Egyptian slave named Hagar,' },
          { n: 2, text: 'so she said to Abram, “The LORD has kept me from having children. Go to my slave; perhaps I can build a family through her.” Abram agreed to what Sarai said.' },
          { n: 4, text: 'He slept with Hagar, and she conceived. When she knew she was pregnant, she began to despise her mistress.' },
          { n: 5, text: 'Then Sarai said to Abram, “You are responsible for the wrong I am suffering. I put my slave in your arms, and now that she knows she is pregnant, she despises me. May the LORD judge between you and me.”' },
          { n: 6, text: '“Your slave is in your hands,” Abram said. “Do with her whatever you think best.” Then Sarai mistreated Hagar, and she fled.' }
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
          { n: 7, text: 'The angel of the LORD found Hagar near a spring in the desert, the spring beside the road to Shur.' },
          { n: 8, text: 'And he said, “Hagar, slave of Sarai, where have you come from, and where are you going?” “I am running away from my mistress Sarai,” she answered.' },
          { n: 10, text: 'The angel added, “I will increase your descendants so much that they will be too many to count.”' },
          { n: 11, text: '“You are now pregnant and you will have a son. You shall name him Ishmael, for the LORD has heard your misery.”' },
          { n: 13, text: 'She gave this name to the LORD who spoke to her: “You are the God who sees me,” for she said, “I have now seen the One who sees me.”' },
          { n: 14, text: 'That is why the well was called Beer Lahai Roi; it is still there, between Kadesh and Bered.' }
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
          { n: 1, text: 'When Abram was ninety-nine years old, the LORD appeared to him and said, “I am God Almighty; walk before me faithfully and be blameless.' },
          { n: 4, text: 'As for me, this is my covenant with you: you will be the father of many nations.' },
          { n: 5, text: 'No longer will you be called Abram; your name will be Abraham, for I have made you a father of many nations.' },
          { n: 7, text: 'I will establish my covenant as an everlasting covenant between me and you and your descendants after you, to be your God and the God of your descendants.' },
          { n: 10, text: 'This is my covenant, which you are to keep: every male among you shall be circumcised.' },
          { n: 11, text: 'You are to undergo circumcision, and it will be the sign of the covenant between me and you.' },
          { n: 15, text: 'God also said, “As for Sarai your wife, you are no longer to call her Sarai; her name will be Sarah.' },
          { n: 16, text: 'I will bless her and surely give you a son by her. She will be the mother of nations; kings of peoples will come from her.”' },
          { n: 17, text: 'Abraham fell facedown; he laughed and said to himself, “Will a son be born to a man a hundred years old? Will Sarah bear a child at ninety?”' },
          { n: 19, text: 'Then God said, “Yes, but your wife Sarah will bear you a son, and you will call him Isaac. I will establish my covenant with him as an everlasting covenant for his descendants after him.”' },
          { n: 23, text: 'On that very day Abraham took his son Ishmael and all those born in his household, and circumcised them, as God had told him.' }
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
          { n: 1, text: 'The LORD appeared to Abraham near the great trees of Mamre while he was sitting at the entrance to his tent in the heat of the day.' },
          { n: 2, text: 'He looked up and saw three men standing nearby. He hurried to meet them and bowed low to the ground.' },
          { n: 6, text: 'So Abraham hurried into the tent and said to Sarah, “Quick, get three measures of the finest flour and bake some bread.”' },
          { n: 10, text: 'Then one of them said, “I will surely return to you about this time next year, and Sarah your wife will have a son.” Now Sarah was listening at the entrance to the tent, behind him.' },
          { n: 11, text: 'Abraham and Sarah were already very old, and Sarah was past the age of childbearing.' },
          { n: 12, text: 'So Sarah laughed to herself as she thought, “After I am worn out and my lord is old, will I now have this joy?”' },
          { n: 14, text: '“Is anything too hard for the LORD? I will return to you at the appointed time next year, and Sarah will have a son.”' },
          { n: 15, text: 'Sarah was afraid, so she lied and said, “I did not laugh.” But he said, “Yes, you did laugh.”' }
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
          { n: 17, text: 'Then the LORD said, “Shall I hide from Abraham what I am about to do?”' },
          { n: 20, text: 'So the LORD said, “The outcry against Sodom and Gomorrah is so great and their sin so grievous' },
          { n: 23, text: 'Then Abraham approached him and said, “Will you sweep away the righteous with the wicked?' },
          { n: 24, text: 'What if there are fifty righteous people in the city? Will you really sweep it away and not spare it for the fifty?' },
          { n: 25, text: 'Far be it from you to kill the righteous with the wicked, treating them alike. Will not the Judge of all the earth do right?”' },
          { n: 26, text: 'The LORD said, “If I find fifty righteous people in Sodom, I will spare the whole place for their sake.”' },
          { n: 27, text: 'Then Abraham spoke again: “Now that I have been so bold, though I am nothing but dust and ashes,' },
          { n: 32, text: 'may I speak just once more. What if only ten can be found there?” He answered, “For the sake of ten, I will not destroy it.”' },
          { n: 33, text: 'When the LORD had finished speaking with Abraham, he left, and Abraham returned home.' }
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
          { n: 1, text: 'The two angels arrived at Sodom in the evening, and Lot was sitting in the gateway of the city. When he saw them, he got up to meet them and bowed down with his face to the ground.' },
          { n: 2, text: '“My lords,” he said, “please turn aside to your servant’s house. You can wash your feet and spend the night.”' },
          { n: 4, text: 'Before they had gone to bed, all the men of the city, from every quarter, young and old, surrounded the house.' },
          { n: 5, text: 'They called to Lot, “Where are the men who came to you tonight? Bring them out to us so that we can have our way with them.”' },
          { n: 6, text: 'Lot went outside to meet them and shut the door behind him' },
          { n: 8, text: 'and said, “Look, I have two daughters. Let me bring them out to you, and do with them as you like. But do nothing to these men, for they have come under the protection of my roof.”' },
          { n: 9, text: '“Get out of our way,” they said. “This fellow came here as a foreigner, and now he wants to play the judge. We will treat you worse than them.”' },
          { n: 11, text: 'Then they struck the men at the door with blindness, so that they could not find the door.' }
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
          { n: 15, text: 'With the coming of dawn, the angels urged Lot, “Hurry, take your wife and your two daughters, or you will be swept away when the city is punished.”' },
          { n: 16, text: 'When he hesitated, the men grasped his hand and the hands of his wife and daughters and led them safely out, for the LORD was merciful to them.' },
          { n: 17, text: '“Flee for your lives. Do not look back, and do not stop anywhere in the plain. Flee to the hills, or you will be swept away.”' },
          { n: 24, text: 'Then the LORD rained down burning sulfur on Sodom and Gomorrah.' },
          { n: 25, text: 'He overthrew those cities and the entire plain, and all those living in the cities, and the vegetation in the land.' },
          { n: 26, text: 'But Lot’s wife looked back, and she became a pillar of salt.' },
          { n: 29, text: 'So when God destroyed the cities of the plain, he remembered Abraham, and he brought Lot out of the catastrophe.' }
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
          { n: 1, text: 'Abraham moved on to the region of the Negev and stayed in Gerar.' },
          { n: 2, text: 'There Abraham said of his wife Sarah, “She is my sister.” So Abimelech king of Gerar sent for her and took her.' },
          { n: 3, text: 'But God came to Abimelech in a dream one night and said, “You are as good as dead because of the woman you have taken; she is a married woman.”' },
          { n: 4, text: 'Now Abimelech had not gone near her, so he said, “Lord, will you destroy an innocent nation?' },
          { n: 5, text: 'Did he not say to me, ‘She is my sister,’ and did she not also say, ‘He is my brother’? I have done this with a clear conscience and clean hands.”' },
          { n: 6, text: 'Then God said to him in the dream, “Yes, I know you did this with a clear conscience, and so I kept you from sinning against me.' },
          { n: 7, text: 'Now return the man’s wife, for he is a prophet, and he will pray for you and you will live.”' },
          { n: 11, text: 'Abraham replied, “I said to myself, ‘There is surely no fear of God in this place, and they will kill me because of my wife.’”' },
          { n: 14, text: 'Then Abimelech brought sheep and cattle and male and female slaves and gave them to Abraham, and he returned Sarah his wife to him.' },
          { n: 17, text: 'Then Abraham prayed to God, and God healed Abimelech, his wife and his slaves so they could have children again.' }
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
          { n: 1, text: 'Now the LORD was gracious to Sarah as he had said, and the LORD did for Sarah what he had promised.' },
          { n: 2, text: 'Sarah became pregnant and bore a son to Abraham in his old age, at the very time God had promised him.' },
          { n: 3, text: 'Abraham gave the name Isaac to the son Sarah bore him.' },
          { n: 6, text: 'Sarah said, “God has brought me laughter, and everyone who hears about this will laugh with me.”' },
          { n: 7, text: 'And she added, “Who would have said to Abraham that Sarah would nurse children? Yet I have borne him a son in his old age.”' }
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
          { n: 9, text: 'But Sarah saw that the son Hagar the Egyptian had borne to Abraham was mocking,' },
          { n: 10, text: 'and she said to Abraham, “Get rid of that slave woman and her son, for he will never share in the inheritance with my son Isaac.”' },
          { n: 11, text: 'The matter distressed Abraham greatly because it concerned his son.' },
          { n: 12, text: 'But God said to him, “Do not be distressed about the boy and your slave. Listen to whatever Sarah tells you, for it is through Isaac that your offspring will be reckoned.' },
          { n: 13, text: 'I will make the son of the slave into a nation also, because he is your offspring.”' },
          { n: 14, text: 'Early the next morning Abraham gave Hagar food and a skin of water, set them on her shoulders, and sent her off with the boy. She wandered in the Desert of Beersheba.' },
          { n: 16, text: 'She sat down a little way off, about a bowshot away, for she thought, “I cannot watch the boy die.” And as she sat there, she began to sob.' },
          { n: 17, text: 'God heard the boy crying, and the angel of God called to Hagar from heaven, “What is the matter, Hagar? Do not be afraid; God has heard the boy crying as he lies there.”' },
          { n: 19, text: 'Then God opened her eyes and she saw a well of water. So she filled the skin and gave the boy a drink.' },
          { n: 20, text: 'God was with the boy as he grew up.' }
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
          { n: 1, text: 'Some time later God tested Abraham. He said to him, “Abraham!” “Here I am,” he replied.' },
          { n: 2, text: 'Then God said, “Take your son, your only son, whom you love, Isaac, and go to the region of Moriah. Offer him there as a burnt offering on a mountain I will show you.”' },
          { n: 3, text: 'Early the next morning Abraham got up and saddled his donkey. He took two of his servants and his son Isaac, and he set out for the place God had told him about.' },
          { n: 4, text: 'On the third day Abraham looked up and saw the place in the distance.' },
          { n: 6, text: 'Abraham took the wood for the burnt offering and placed it on his son Isaac, and he himself carried the fire and the knife. As the two of them went on together,' },
          { n: 7, text: 'Isaac spoke up: “Father? The fire and the wood are here, but where is the lamb for the burnt offering?”' },
          { n: 8, text: 'Abraham answered, “God himself will provide the lamb, my son.” And the two of them went on together.' }
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
          { n: 9, text: 'When they reached the place, Abraham built an altar and arranged the wood on it. He bound his son Isaac and laid him on the altar, on top of the wood.' },
          { n: 10, text: 'Then he reached out his hand and took the knife to slay his son.' },
          { n: 11, text: 'But the angel of the LORD called out to him from heaven, “Abraham! Abraham!” “Here I am,” he replied.' },
          { n: 12, text: '“Do not lay a hand on the boy. Do not do anything to him. Now I know that you fear God, because you have not withheld from me your son, your only son.”' },
          { n: 13, text: 'Abraham looked up and there in a thicket he saw a ram caught by its horns. He took the ram and sacrificed it as a burnt offering instead of his son.' },
          { n: 14, text: 'So Abraham called that place The LORD Will Provide.' },
          { n: 19, text: 'Then Abraham returned to his servants, and they set off together for Beersheba.' }
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
          { n: 1, text: 'Sarah lived to be a hundred and twenty-seven years old.' },
          { n: 2, text: 'She died at Kiriath Arba (that is, Hebron) in Canaan, and Abraham went to mourn for her and to weep over her.' },
          { n: 4, text: 'Abraham said to the Hittites, “I am a foreigner and stranger among you. Sell me some property for a burial site here so I can bury my dead.”' },
          { n: 9, text: '“Ask Ephron son of Zohar to sell me the cave of Machpelah, at the end of his field. Let him sell it to me for the full price, as a burial site among you.”' },
          { n: 17, text: 'So Ephron’s field in Machpelah was deeded' },
          { n: 18, text: 'to Abraham as his property in the presence of the Hittites who had come to the gate of the city.' },
          { n: 19, text: 'Afterward Abraham buried his wife Sarah in the cave in the field of Machpelah.' },
          { n: 20, text: 'So the field and the cave in it were deeded to Abraham as a burial site.' }
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
          { n: 2, text: 'Abraham said to the senior servant in his household, “Put your hand under my thigh.' },
          { n: 3, text: 'I want you to swear that you will not get a wife for my son from the daughters of the Canaanites, among whom I live,' },
          { n: 4, text: 'but will go to my own country and my own relatives and get a wife for my son Isaac.”' },
          { n: 12, text: 'Then the servant prayed, “LORD, God of my master Abraham, make me successful today, and show kindness to my master Abraham.' },
          { n: 14, text: 'May it be that when I say to a young woman, ‘Please let down your jar that I may drink,’ and she says, ‘Drink, and I will water your camels too,’ let her be the one you have chosen for Isaac.”' },
          { n: 15, text: 'Before he had finished praying, Rebekah came out with her jar on her shoulder.' },
          { n: 19, text: 'After she had given him a drink, she said, “I will draw water for your camels too, until they have finished drinking.”' },
          { n: 67, text: 'Isaac brought her into the tent of his mother Sarah, and he married Rebekah. So she became his wife, and he loved her; and Isaac was comforted after his mother’s death.' }
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
          { n: 1, text: 'Abraham had taken another wife, whose name was Keturah.' },
          { n: 5, text: 'Abraham left everything he owned to Isaac.' },
          { n: 7, text: 'Abraham lived a hundred and seventy-five years.' },
          { n: 8, text: 'Then Abraham breathed his last and died at a good old age, an old man and full of years, and he was gathered to his people.' },
          { n: 9, text: 'His sons Isaac and Ishmael buried him in the cave of Machpelah, near Mamre, in the field he had bought from the Hittites.' },
          { n: 10, text: 'There Abraham was buried with his wife Sarah.' },
          { n: 17, text: 'Ishmael lived a hundred and thirty-seven years; then he breathed his last and was gathered to his people.' }
        ],
        ground: { kind: 'historical', text: 'The Abraham story ends mid-chapter. Verses 1 to 18 close his life: his other sons by Keturah, his death at a hundred and seventy-five, and the quiet, remarkable detail that Isaac and Ishmael, the chosen son and the cast-out son, stand together to bury their father. Then at verse 19 the camera shifts to Isaac’s sons and the Jacob story begins. The book does not break at the chapter line; the seam runs through the middle of chapter 25.', src: 'Sarna · Westermann' }
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
