import type { Capstone, Movement, Panel, Reading } from "@/lib/types";

// Genesis 1-50, the full book across four movements (primeval, Abraham, Jacob, Joseph).
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
    thread: 'The priests who wrote this chapter were living as exiles in Babylon, among people who told how their gods had made the world through a great war. Genesis 1 answers that story. In it one God makes the world by speaking, without a battle or a rival, and he calls what he makes good.',
    closeMid: 'There was evening and there was morning.',
    closeEnd: 'With the seventh day, the writer finishes the first account of creation.',
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
          text: 'Priests wrote this chapter during the Babylonian exile, in the 500s BCE, after the Babylonians had destroyed Jerusalem and carried many of its people away. Their conquerors told a creation story, the Enuma Elish, in which the god Marduk made the world out of the body of a defeated rival. Genesis answers that story directly. Here one God makes everything simply by speaking, and he has no battle to fight and no rival to defeat.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Wellhausen · the Enuma Elish'
        },
        meaning: 'God creates by <b>speaking</b>, and he uses no force at all. He makes light on the first day, three days before he makes the sun, so the writer cannot mean sunlight. The first light is God’s first act of separating one thing from another, light from darkness. God then calls the light good before any human exists to make use of it, which tells us that creation is good in itself and not only because it serves us.',
        lenses: {
          theo: 'Traditional Jewish and Christian readers have given great weight to the word <b>good</b>, because God says it before any human exists and before anything has been put to use. On this reading the world is good in itself, and people receive it as a gift rather than something they have earned. The later writers of the Bible build on that foundation. (Heschel, God in Search of Man.)',
          arch: 'Long before Genesis was written, many peoples told of a world drawn out of shapeless water, as a god separated one part of the chaos from another until an ordered world appeared. Scholars of religion such as Mircea Eliade found the image in the myths of peoples all over the world. Perhaps people keep telling it because every maker works the same way, dividing this from that and keeping some things while letting others go, until a shapeless thing takes form. The writer of Genesis tells the old story in his own way, and anyone who makes something still follows the pattern he describes. (Eliade, The Sacred and the Profane.)'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have something in our lives that feels unformed or stuck, waiting for us to act. In Genesis, God does not begin creation with force. He begins it by deciding what will be and saying it out loud.'
        },
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
          text: 'People in the ancient Near East pictured the sky as a solid dome that held back an ocean above it, and they believed rain fell through windows in that dome. The writer of Genesis uses the same picture of the world that his neighbors used, but he leaves out their gods. In his account, God alone makes room for the world by holding the waters apart.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Keel · Walton'
        },
        meaning: 'On the second day God <b>makes space</b>. He separates the waters above from the waters below and so opens a middle region where living things can survive. When God brings order to the world, he is not controlling it for the sake of control. He is making room for life.',
        addr: {
          mode: 'names',
          text: 'Living things need space, and someone has to hold that space open for them. Sometimes the most loving thing we can do for another person is to set a boundary rather than to do more.'
        },
        ask: 'Where do you need to make room, or hold a line, this week so that someone you care for has space to grow?'
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
          text: 'The writer arranged the six days with care. On the first three days God makes the realms of the world, light, sky, and land, and on the next three he fills them with lights, with birds and fish, and with animals and people. The writer built the chapter like a poem, and he did not mean it to be read as a laboratory report.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Wenham'
        },
        meaning: 'God says, “Let the earth bring forth vegetation.” He does not make the plants directly, but <b>invites the earth to bring them out</b>. In this way God shares his work with what he has made, and gives it the power to go on producing life.',
        addr: {
          mode: 'names',
          text: 'Some good things cannot be forced into being. We can only prepare the right conditions and then wait for them to grow, as a farmer does.'
        },
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
          text: 'The Babylonians worshipped the sun and the moon as gods, named Shamash and Sin. The writer of Genesis refuses even to use the ordinary words for sun and moon. He calls them only “the greater light” and “the lesser light,” as if they were lamps and clocks. He mentions the stars, which Babylonian astrologers studied to read the future, almost in passing: “And He made the stars as well.” He meant his readers to notice the slight.',
          src: 'Smith, The Origins of Biblical Monotheism · The Priestly Vision of Genesis 1'
        },
        meaning: 'In this scene the writer <b>takes away the sky’s power</b>. God places the lights in the sky to keep time, not to rule over human lives, so no one needs to live at the mercy of the heavens.',
        lenses: {
          arch: 'Across the ancient world, people feared the lights in the sky as powers and studied them to learn their fate. When the writer of Genesis turns them into a calendar, he does something people have done many times since: he takes a thing they once let rule them and puts it back in its place as a tool.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us let something quietly govern our lives, whether fear, other people’s opinions, money, or worry about the future. The writer of Genesis took the things his neighbors worshipped and treated them as household furniture.'
        },
        ask: 'What have you been treating like a god that is really only a lamp? How would you live differently if you put it back in its place?'
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
          text: 'Elsewhere in the ancient world, people told of great sea monsters who stood for chaos and fought against the gods. The writer of Genesis mentions “the great sea creatures” only as animals that God makes and calls good. He treats the old monsters the way he treated the sun and moon, and takes away their power to frighten.',
          src: 'Smith, The Priestly Vision of Genesis 1 · John Day, God’s Conflict with the Dragon and the Sea'
        },
        meaning: 'Here God gives the <b>first blessing</b> in the Bible, when he tells the creatures to be fruitful, multiply, and fill the seas and the sky. He gives living things the power to make more life, and he gives it out of abundance, not scarcity.',
        addr: {
          mode: 'names',
          text: 'The first thing God blesses is increase. He gives more life freely, without anyone asking for it or earning it.'
        },
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
          text: 'In the ancient Near East, people called their king the “image” of a god, meaning that he stood on earth in the god’s place and carried the god’s authority. The writer of Genesis takes that royal title and gives it to every human being, male and female alike. He makes the claim quietly, but his first readers would have heard how radical it was.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Middleton, The Liberating Image'
        },
        meaning: 'According to Genesis, <b>everyone carries the image of God</b>. No one earns that dignity, and God does not hand it out by rank. He gives it to every person equally. Only at this point, after he has made human beings, does God call his work not just good but “very good.”',
        lenses: {
          theo: 'Many thinkers trace the Western belief in human dignity back to this verse. It teaches that every person has a worth that no status, usefulness, or failure can cancel, and Jewish and Christian teachers have built their ethics on that belief ever since.'
        },
        addr: {
          mode: 'names',
          text: 'We usually find this hardest to believe about one particular person, perhaps someone we cannot stand, or perhaps the face we see in the mirror.'
        },
        ask: 'Who is one person, perhaps yourself, whom you find it hard to see as carrying God’s image? Spend some time today thinking about why.'
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
          text: 'The exiles in Babylon had lost their temple and their land, the places where they had always met God. The Sabbath gave them a kind of holiness they could keep anywhere, because God had set it in time rather than in a place. Wherever their captors took them, they could still keep the seventh day.',
          src: 'Smith, The Priestly Vision of Genesis 1 · Heschel, The Sabbath'
        },
        meaning: 'God builds the whole week of creation toward <b>rest</b>. He does not rest as a reward for finishing his work. The rest is the point of the work, and the seventh day is the first thing in the Bible that God calls holy.',
        addr: {
          mode: 'names',
          text: 'The writer does not end the account of creation with the making of human beings. He ends it with God resting. Most of us work until we collapse, and very few of us rest as though rest were sacred.'
        },
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
    thread: 'Genesis 2 comes from a different and older writer than Genesis 1, and the editors placed it right after the first account. This writer turns from the sky to the soil and asks what a human being is. In his telling, God gives the first man a garden, work to do there, and a single limit that God trusts him to keep.',
    closeEnd: 'The man and the woman stand together and feel no shame. They will not have that peace for long, because in the next chapter the serpent appears.',
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
          text: 'This is the second account of creation, and an older writer composed it. He tells things in a different order from chapter 1, since here God makes the human first, before any plants or animals. The editors of Genesis kept both accounts side by side instead of blending them into one. The writer also plays on words: God forms adam, the human, from adamah, the ground, so we might call the first human an earthling, made out of earth.',
          src: 'Wellhausen · Friedman · Smith'
        },
        meaning: 'God makes the human being out of two things at once: the dust of the ground, which is mortal and earthy, and his own breath. The writer does not picture a soul trapped inside a body, and he does not picture a mere animal either. He pictures earth that God has breathed into, so that a human being is both.',
        lenses: {
          theo: 'Many readers have found in these two halves both a reason for humility and a reason for dignity. Because we are dust, we cannot take ourselves too seriously or imagine that we made ourselves. Because God breathed into us, we cannot despise ourselves either. When we forget either half, we go wrong.',
          arch: 'Peoples across the ancient world told how a god formed the first humans from clay or dust and then gave them life. In Egypt the god Khnum shaped people on a potter’s wheel, and in Mesopotamia the gods made them from clay mixed with the blood of a slain god. These stories agree that a human being is made of earth and yet is more than earth. In the oldest terms they had, the storytellers were telling their hearers what kind of creature they were.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us forget one half of ourselves on most days. Sometimes we live as if we were only dust, and at other times we act as if we were only breath and had no limits at all.'
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
          text: 'God places the man in the garden “to cultivate and keep it,” and later writers in the Bible use the same pair of verbs for the priests who served and guarded the temple. In this picture Eden is a sanctuary, and God gives the man real work there as its gardener and priest, not a life of idle ease. The writer names rivers his readers knew, among them the Tigris and the Euphrates, to set the garden on the real map of their world. And God’s command is mostly permission, since he lets the man eat from every tree but one.',
          src: 'Walton · Wenham'
        },
        meaning: 'God gives the man freedom and a limit at the same time. He hands him a whole garden and only one “no.” That single limit is what makes the man free rather than a kept animal, because now there is something he could do and can choose not to do. If God had set no limit at all, the garden would not be a paradise, because nothing the man did could mean anything.',
        lenses: {
          theo: 'God does not forbid the one tree out of stinginess. He forbids it because a real relationship needs room for a real choice, a trust that the man can keep or break. Without that choice, the man would be like a pet in a beautiful cage. By giving him a limit, God makes him a partner.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us tend to stare at the one “no” in our lives until we can no longer see the whole garden of “yes” around it.'
        },
        ask: 'Which one limit have you been fixed on, and what good things around it have you been ignoring?'
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
          text: 'Here God calls something “not good” for the first time in the Bible. In chapter 1 God called everything good, and in this account the one thing he finds lacking is that the man is alone. The Hebrew word translated “helper” does not suggest that the helper is lesser, since biblical writers use the same word for God when he helps Israel. The word “suitable” means a counterpart, someone who matches the man. Then watch what happens as the man names every animal: he finds that none of them can answer him.',
          src: 'Westermann'
        },
        meaning: 'In a world God has otherwise finished, the first thing he finds wrong is loneliness. The man has not sinned and is not in danger. He is simply without a companion. He has authority over every creature, but none of them is his equal. A person can be surrounded by others, and in charge of them, and still be alone.',
        lenses: {
          theo: 'God made human beings for companionship, and not only for work. The writer quietly insists that even in a perfect garden, with God himself walking there, a person needs another person. That need is not a defect that God must fix. It is part of how he made us.'
        },
        addr: {
          mode: 'names',
          text: 'We can be capable and busy, responsible for everything in our care, and still come home to no one who truly answers us.'
        },
        ask: 'Is there a way in which you are alone that you have quietly stopped admitting, even to yourself?'
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
          text: 'The Hebrew word that English Bibles usually translate “rib” more often means “side,” and some scholars think it refers to a whole side of the man, as though the woman were his other half. Some also hear an echo of an old Sumerian wordplay, in which one word could mean both “rib” and “life.” God makes the woman neither from the man’s head nor from his foot but from his side, out of the same substance, so that she stands level with him. The man’s cry, “bone of my bones,” is the first human poetry in the Bible.',
          src: 'Smith · Kramer'
        },
        meaning: 'God does not shape the man’s partner from the dust a second time. He takes her from the man’s own side, so that she is his equal and his like. The man’s first words are a cry of recognition, as if to say, “At last, here is one of my own kind.” The two of them stand fully exposed to each other and feel no shame. This is the last clear picture the writer gives us of the world before the hiding begins.',
        lenses: {
          theo: 'Because God made the woman from the man’s side, she stands beside him and not beneath him. When the writer says the two become “one flesh,” he is describing a new kind of family bond, which he counts as being as strong as blood. At the end of the chapter the writer leaves us with two people who are completely seen by each other and completely unafraid, and in the next chapter they lose exactly that.',
          arch: 'Many of the world’s oldest stories remember a first age of wholeness, before shame, when human beings had nothing to hide. People have called it the golden age, or the paradise that was lost. Mircea Eliade noticed how often these stories leave their hearers with a longing for that earlier ease, and a wish to be met again by someone of their own kind without having to cover themselves. (Eliade, on the nostalgia for paradise.)'
        },
        addr: {
          mode: 'names',
          text: 'We feel deep relief when someone recognizes us as one of their own, and deep fear at the thought of being that unguarded in front of anyone. The man and the woman feel only the relief, and they will feel it for one more verse.'
        },
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
    thread: 'In the garden God had given the man and the woman everything they needed, along with a single command: they were not to eat from the tree of the knowledge of good and evil. Genesis 3 tells how they stopped trusting God over that one command. They do not rebel in some dramatic way. A serpent asks the woman a question, and she begins to wonder whether God gave the command to keep something good from her.',
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
          text: 'Many readers have taken the serpent to be Satan, but Jewish and Christian interpreters made that identification centuries after Genesis was written. In the story itself the serpent is simply the most cunning of the animals God had made, a talking creature of the kind people put in old folk tales. Readers also often misunderstand what it offers the woman. It does not tempt her to do something evil; it promises that she will become “like God, knowing good and evil,” and in Hebrew that phrase carries the sense of deciding for yourself what is good and what is evil.',
          src: 'Smith · Westermann'
        },
        meaning: 'The serpent works carefully. It begins by asking whether God really forbade them to eat from any tree in the garden, which overstates the command and makes God sound harsher than he was. Only after the woman corrects it does the serpent contradict God directly, telling her she will not die, and then it adds the suggestion that does the real damage: that God gave the command because he wanted to keep something good from them. People are often tempted in the same way. We are seldom asked to want something wicked. Instead we are persuaded that a limit someone set for us is really a loss.',
        lenses: {
          theo: 'Many Jewish and Christian readers have seen the root of the whole story in this moment of distrust. The humans first step away from God not by an act of lust or violence but by a change of belief, when they begin to think that God’s goodness cannot be relied on and that he gave his command to confine them rather than protect them. On this reading, every wrong the characters commit later in Genesis comes from that first doubt.',
          arch: 'Many ancient peoples told stories of a single forbidden act that ended a time of innocence and began ordinary human life. The Greeks, for example, told of Prometheus stealing fire from the gods, and of Pandora opening the jar that let troubles into the world. In each of these stories no one can undo the act, and the storytellers often seem unsure whether it was a disaster or a necessary beginning. The writer of Genesis seems to share that uncertainty, because the humans lose the garden but also gain a knowledge they did not have before, and the writer never treats that knowledge as worthless.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have been tempted, as the woman was, to see a limit in our lives, whether a promise, a rule, or a commitment, as something that only holds us back. We seldom tell ourselves outright to do wrong. We tell ourselves that we would be freer without the limit, and we begin to suspect that whoever set it did not have our good in mind.'
        },
        ask: 'Is there a limit in your life that you have started to resent? Who set it, and what would change if you trusted that they set it for your good?'
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
          text: 'Genesis never says what kind of fruit it was. Later Christians pictured an apple, partly because of a pun in Latin, where the word malum can mean both “apple” and “evil.” The writer also never uses the phrases “the fall” or “original sin.” Augustine developed those ideas around AD 400, as he read Genesis alongside the letters of Paul. If we read the chapter on its own terms, we find a story about knowledge, shame, and exile, which Israelites told for many centuries before anyone made it into a doctrine.'
        },
        meaning: 'What the serpent promised does happen, though not in the way the humans hoped. Their eyes are opened, but the first thing they see is that they are naked, so at the same moment that they gain knowledge, they also feel <b>shame</b>. The first thing they do with their new understanding is sew fig leaves together and cover themselves from each other.',
        lenses: {
          arch: 'The fig leaves are the first clothing in the Bible, and the man and the woman make them because they are ashamed. Many peoples have told some version of this moment, when a person first realizes that others can see and judge them, and every child comes to it sooner or later. In that sense, every mask and covering people have worn since then goes back to this scene.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have reached for something we were sure would make our lives larger, and found that once we had it we felt more exposed than before. People have been making the serpent’s bargain for as long as there have been people.'
        },
        ask: 'What have you reached for that left you feeling more exposed than before?'
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
          text: 'Scholars believe that editors assembled Genesis from several older sources, and that this chapter comes from the one they call the Yahwist, a writer who pictures God in very human terms. Here God walks in the garden in the evening breeze and calls out questions. When he asks “Where are you?” he is not looking for information, since he already knows, but giving the man a chance to come out and speak. Then follow where the blame goes: the man blames the woman, and in the same sentence blames God for giving her to him, while the woman in turn blames the serpent.'
        },
        meaning: 'Because the humans are ashamed, they hide, and once God finds them, they <b>blame</b> someone else. God could have begun with an accusation, but instead he asks a series of questions, and each one gives them room to tell the truth. None of them does.',
        lenses: {
          theo: '“Where are you?” is the first question God asks a human being in the Bible, and it is the question of someone searching for a person, not someone setting a trap. The sadness of the scene is not that the humans were caught. It is that when they were given the chance to come forward and admit what they had done, each of them pointed at someone else.'
        },
        addr: {
          mode: 'names',
          text: 'When we are caught in a wrong, we often do just what they did: we hide, and then we blame a partner, our circumstances, or even God. The writer put this habit into the very first story about human beings, as if to say that people have always done it.'
        },
        ask: 'Is there something you are blaming on someone else that is really yours to own?'
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
          text: 'In God’s words to the serpent, the woman, and the man, the first hearers would have found answers to questions about their own lives: why snakes crawl on the ground, why childbirth is so painful, why farming wears out the body, and why everyone dies. In verse 16, when God tells the woman that her husband “will rule over you,” he is describing what has gone wrong between them; he is not commanding it, and he does not approve of it. The difference matters, because people have used this verse for centuries to defend the very thing the writer is grieving.',
          src: 'Westermann'
        },
        meaning: 'God’s words here are less a list of punishments than a description of what life becomes once people stop trusting him. The man and the woman will struggle with each other for <b>power</b>, they will have to labor hard to make the ground yield food, and their bodies, which God took from the dust, will return to it. The world goes on, but they will find it a much harder place to live.',
        lenses: {
          theo: 'If we read closely, we see that God is describing consequences more than pronouncing curses. He curses the serpent and the ground, but he never curses the man or the woman. He tells them their lives will be a struggle, not that he has cast them off, so even as he judges them he shows a measure of mercy.'
        },
        addr: {
          mode: 'names',
          text: 'When people break trust with one another, they rarely pay for it all at once. More often they pay slowly, through years of friction, and find that love, work, and even their own health cost them more than they used to.'
        },
        ask: 'Where in your life has something you once enjoyed become hard work?'
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
          text: 'Later Christian artists often painted cherubim as chubby winged infants, but people in the ancient Near East pictured them as huge guardians, part lion, part eagle, and part human, and set their statues beside the gates of temples and the thrones of kings. Here God places cherubim, along with a flaming sword, to guard the way back into Eden. Two other details are worth knowing. The name the man gives the woman, Chavah, which English renders as Eve, sounds like the Hebrew word for “living.” And the garments of skin that God makes replace the fig leaves with real, lasting clothing, which cost an animal its life.'
        },
        meaning: 'God sends the humans out of the garden, but he does not abandon them. They leave clothed, named, and alive. The story began with God calling everything “good,” and now it ends east of Eden, yet God sends them away rather than destroying them. Even in guarding the gate he is partly showing <b>mercy</b>, because he is keeping them from eating from the tree of life and living forever in their broken state.',
        lenses: {
          theo: 'The clothing is the turning point of the chapter. When the humans first felt their shame, they tried to cover it themselves with fig leaves and then hid among the trees. God answers by covering them properly, with garments he makes himself, so the same God who judges them also dresses them for the journey ahead.',
          arch: 'Many peoples have told stories of a lost paradise, and in most of them someone shuts a gate behind the people who lived there. Their history begins on the far side of that gate. Whoever shuts it does so on purpose, so the people can only go forward, and must build a world for themselves instead of simply receiving one. In Genesis, everything else in the book takes place outside the garden.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have left something behind that we can never go back to. The writer of Genesis does not pretend otherwise, but shows that God did not send the man and the woman out alone.'
        },
        ask: 'Is there something in your life that you cannot return to? What would it look like to walk forward instead of standing at the gate?'
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
    thread: 'In Genesis 3 the man and the woman broke their trust with God. In Genesis 4 their sons break with each other, when Cain kills his brother Abel, and the first death in the Bible is a murder.',
    closeEnd: 'By the end of the chapter, people have begun both to kill one another and to worship God. The writer follows both of these lines through the chapters that come next.',
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
          text: 'The writer never says why God accepted Abel’s offering and not Cain’s. Readers have tried to fill the silence for centuries, some saying that Abel brought his best and Cain did not, others that the difference lay in their hearts, but Genesis leaves the question open. Beneath the story lies an old rivalry between Cain the farmer and Abel the herder, the kind of tale herding peoples told about the conflict between field and flock.',
          src: 'Westermann'
        },
        meaning: 'The writer does not give Cain a clear reason for what happened. Sometimes we bring what we have, and other people do not receive it as we hoped, and no one ever explains why. The writer is less interested in the slight itself than in what Cain does with it.',
        addr: {
          mode: 'names',
          text: 'Most of us know what it is like to put real effort into something, only to watch it fall flat while someone else’s effort is welcomed.'
        },
        ask: 'What have you offered that was not received as you hoped, and how has that disappointment been affecting you?'
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
          text: 'God speaks to Cain before the murder, not after it, so his words are a warning rather than a verdict. When he says that “sin is crouching at your door,” he pictures sin as a predator waiting at the threshold, and the Hebrew word may echo a Mesopotamian name for a demon that lurked in doorways. God then tells Cain that sin “desires you, but you must master it,” using almost the same words he spoke to the woman one chapter earlier.',
          src: 'Smith · Walton'
        },
        meaning: 'Between Cain’s anger and his act of murder there is a gap, and God meets him inside it. God describes sin as an animal at the door, wanting to get in. Cain’s anger is not yet a sin. What matters is what he does when sin comes to the door.',
        lenses: {
          theo: 'Readers can easily miss the mercy in this scene. Before Cain lifts a hand against his brother, God comes to him, names the danger, and tells him plainly that he can still master it. God’s warning is an act of grace, and the freedom he gives Cain is real.',
          arch: 'Carl Jung taught that whatever a person refuses to face in themselves does not go away, but returns to rule them as if it were fate. People in every age have drawn the same picture Genesis draws here, of an appetite crouching like a beast at the door, which a person must either master or feed. God tells Cain to face it while he still can. (Jung, on the shadow that rules you until you turn and face it.)'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have something crouching at our own door, whether a resentment, a habit, or an anger we have been quietly feeding. Like Cain, we are still closer to the threshold than to the deed, and that is why God’s warning matters.'
        },
        ask: 'What is crouching at your door, and what would it look like for you to master it today instead of feeding it?'
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
          text: 'Part of verse 8 is missing from the Hebrew text that has come down to us. Cain says something to Abel, but his words are lost, though some ancient translations supply them, so in the Hebrew the murder happens in a blank. Cain’s reply to God, “Am I my brother’s keeper?”, is the first evasion in the Bible. Abel does not stay silent either, because God says that his brother’s blood cries out from the ground, and the Hebrew word for blood here is plural.',
          src: 'Westermann'
        },
        meaning: 'The first person to die in the Bible does not die naturally. His own brother kills him. Cain asks his question expecting God to answer no, but the later writers of the Bible answer yes. God also hears Abel’s spilled blood crying out, which tells us that God does not let violence stay buried.',
        lenses: {
          theo: 'One way to read the law and the prophets is as a long answer to Cain’s question, “Am I my brother’s keeper?” In this scene God hears the victim’s cry from the ground. The writer insists that wherever someone is harmed and hidden away, God still hears.'
        },
        addr: {
          mode: 'names',
          text: 'We tend to ask Cain’s question, “Am I my brother’s keeper?”, whenever we would rather not take responsibility for someone we have failed.'
        },
        ask: 'Who have you been telling yourself is not your responsibility?'
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
          text: 'For centuries some readers twisted the “mark of Cain” into a sign of inferiority, and used it to defend slavery and racism. The writer says the opposite. God places the mark on Cain to protect him, so that no one will kill him, and in this way God shields even the first murderer from the violence he started. Cain then settles in the land of Nod, a name that means “wandering,” so the place where he lives matches the restless life God sentenced him to.'
        },
        meaning: 'God sentences Cain to exile and restlessness, but not to death. Then God shows mercy by guarding the life of the guilty man. The story could have ended with an execution, but instead God marks the murderer for protection, and so he acts with justice and mercy at the same time.',
        lenses: {
          theo: 'God curses Cain and keeps him at the same time. He does not excuse the murder, and he does not abandon the murderer. From this chapter onward, the writers of the Bible keep showing God this way, giving real consequences and yet stubbornly protecting the people who suffer them.'
        },
        addr: {
          mode: 'names',
          text: 'We carry the weight of the wrongs we have done. Yet, like Cain, we may also be protected in the middle of those consequences, in ways we never earned.'
        },
        ask: 'In what ways has someone protected you while you lived with the consequences of your own choices?'
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
          text: 'Between the mark and these verses, the writer quickly lists Cain’s descendants. Cain builds the first city, and his descendants are the first to herd livestock, play music, and work metal, so the writer places the beginnings of civilization east of Eden, in the murderer’s family. Seven generations after Adam comes Lamech, who sings the first poem in the Bible, and his poem is a boast: if Cain would be avenged sevenfold, Lamech will be avenged seventy-sevenfold. Each generation in this line wants more revenge than the last. Then, quite suddenly, the writer begins another family line, through Adam’s son Seth.',
          src: 'Westermann'
        },
        meaning: 'Here the writer shows two families going in different directions. Cain’s line builds and makes things, and grows hungrier and hungrier for revenge. Seth’s line simply begins to call on the name of God. Even this early in Genesis, the writer is asking his readers which of the two lines they belong to.',
        lenses: {
          theo: 'The writers of the Bible draw this contrast again and again. On one side, people answer violence with more violence. On the other, people who have little else call on the name of the LORD. Both lines descend from the same wounded family, so the difference between them is not a matter of birth but of which way a person turns.',
          arch: 'One of the oldest patterns in human history is a wound passed down as more harm, with each generation taking more vengeance than the last. René Girard wrote at length about this kind of escalation, and Lamech’s boast is a perfect example of it: if you wound me, I will answer sevenfold, and then seventy-sevenfold. Against that pattern the writer sets the other line, the people who break the chain by calling out for help instead of striking back. Whole cultures have lived by one pattern or the other. (Girard, on the escalation of vengeance.)'
        },
        addr: {
          mode: 'names',
          text: 'Both of these lines are open to us. We can let a wound turn into more harm, or we can turn and call out for help.'
        },
        ask: 'Which of these two lines are you following right now?'
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
          text: 'The ages in this chapter are enormous, and they resemble the Sumerian King List, an ancient record that credited the kings who ruled before the flood with reigns of tens of thousands of years. The writer of Genesis keeps that pattern of long lives but makes the numbers far smaller. The writer also breaks the chapter’s steady rhythm once, for Enoch, who does not die like the others; instead, the writer says, God took him.',
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
    thread: 'In Genesis 4 Cain murdered his brother Abel, and since then people have filled the whole earth with violence. God looks at what the world has become and grieves over it, and he decides to begin again with Noah, the one man who still walks with him.',
    closeEnd: 'God makes his covenant with Noah before any rain has fallen. In the next chapter the flood begins.',
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
          text: 'This is the strangest passage in the early chapters of Genesis, and the editors kept it almost unaltered. Divine beings, called “sons of God,” take human women as wives, and their children are the Nephilim, a name that probably means “fallen ones,” whom the writer calls “the mighty men of old.” The passage preserves a piece of older myth. Peoples across the ancient Near East told stories of heroes who were partly divine, and in the Epic of Gilgamesh the hero himself is two-thirds god. When God limits human life to a hundred and twenty years, he is drawing a firm line between the divine and the human after these beings had crossed it.',
          src: 'Westermann · Smith'
        },
        meaning: 'In this scene heavenly beings cross into the human world, and God answers by setting a <b>limit</b> on human life. The writer places the episode just before the flood to show a world in which no one is keeping even the line between heaven and earth. The passage offers little in the way of a lesson. The writer’s main purpose is to show the reader how far things have gone wrong.',
        lenses: {
          theo: 'The writer is concerned to keep clear the difference between God, who makes, and the creatures he has made. The wrong in these verses is not desire as such. It is that these beings erased a line God meant to stand. Much of what God does in the chapters that follow is to set that line between creator and creature in place again.'
        },
        addr: {
          mode: 'names',
          text: 'Every one of us lives within a limit we never chose, the limit that makes us creatures and not gods, and at bottom that limit is our own mortality. We are always tempted to treat it as an insult and rage against it, rather than accept it as the ordinary condition of a finite life.'
        },
        ask: 'Which of your limits have you been fighting as if it were an enemy?'
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
          text: 'This passage comes from the Yahwist, the older source in Genesis, who speaks about God with unusual directness. The writer says that God “regretted” making humankind and that his heart was “grieved.” Later philosophers would describe God as untroubled and beyond feeling, but this writer pictures a God whom the world can wound. The writer sets the darkest judgment in Genesis, that every inclination of the human heart is only evil, right beside God’s grief, not his rage.',
          src: 'Friedman'
        },
        meaning: 'The first thing God feels in this passage is not anger but grief and <b>regret</b>, the sorrow of a maker over what he made. In the same breath the writer adds a single exception: Noah found favor in God’s eyes. Even as God gives the darkest verdict in the book, he leaves one way open.',
        lenses: {
          theo: 'God begins the flood in heartbreak, not in fury. A God who grieves is a God who allows us to hurt him, because he has staked something of himself on how the world turns out. That changes how we should understand his judgment. When God judges here, he acts out of the pain of a maker, not the spite of a tyrant.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us know the difference between someone who is angry with us and someone who is grieved by what we have done. The writer tells us that God grieves.'
        },
        ask: 'Where in your life do you feel more grieved than angry, and what do you think you are grieving?'
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
          text: 'The writer of Genesis says of only two men that they “walked with God”: Enoch and Noah. The Hebrew word translated “blameless” means whole, a person of integrity, rather than someone who never sinned. The writer also says that the earth was “full of violence,” the kind of brutality that began when Cain killed Abel and grew worse when Lamech boasted of killing a man. In a sense, the writer presents the flood as the moment when the world’s violence finally comes back upon the people who committed it.',
          src: 'Westermann'
        },
        meaning: 'Noah stands apart from his entire generation because he keeps walking with God. The writer does not call him perfect but whole, and never says that he argued, preached, or persuaded anyone. The writer says only that he <b>walked</b> with God. Sometimes faithfulness simply means that we keep going in the same direction after everyone around us has turned away.',
        lenses: {
          theo: 'The writer does not measure Noah’s righteousness by a tally of good deeds. Noah is righteous because of his relationship with God, because he walks with him. God’s whole rescue in the chapters that follow depends on this one man, who kept company with God when almost no one else did.'
        },
        addr: {
          mode: 'names',
          text: 'You may be the one person in your circle who is still walking in a direction the others have abandoned, and from the inside, that can feel less like faithfulness and more like being wrong.'
        },
        ask: 'What are you still keeping faith with that almost everyone around you has let go of?'
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
          text: 'God gives Noah precise instructions for the ark, down to its dimensions, its decks, its door, and the pitch that seals it, and these details closely follow the flood stories that Israel’s neighbors told. In the Mesopotamian versions, the poems of Atrahasis and Gilgamesh, a god warns one man to build a great boat so that he can survive a flood the gods have sent. The writer of Genesis takes this shared story and changes its center. In Genesis, God sends the flood because of human wickedness, not because quarrelling gods are annoyed, and he joins it to a promise. The word “covenant” appears for the first time in the Bible here, before any rain has fallen.',
          src: 'Walton · Smith'
        },
        meaning: 'Before the water comes, God makes a promise. In a single speech he announces both the judgment and his <b>covenant</b> with Noah. Noah does not escape by being clever; he obeys, and he builds the ark one plank at a time. The writer ends the chapter not by describing how Noah felt but by stating what he did: Noah did everything God commanded him. In this chapter, faith looks a great deal like carpentry.',
        lenses: {
          theo: 'God offers his grace before the flood begins. He makes his covenant before a single drop falls, and he bases it on his own promise rather than on Noah’s worthiness. God announces the rescue first, and only then does Noah build the ark. That order, in which God promises before anyone performs, is the pattern of nearly every covenant God makes in the rest of the Bible.'
        },
        addr: {
          mode: 'names',
          text: 'When everything around us seems to be coming apart, the work God gives us is often slow and unremarkable. We have to build the thing plank by plank, often before we can see why it matters.'
        },
        ask: 'What slow, practical work is in front of you right now, something you need to do before you can see why it matters?'
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
          text: 'If we read this chapter closely, we can see two accounts woven through each other. In one place Noah brings the animals in pairs, and in another he brings seven pairs of every clean animal. One line says the flood lasted forty days, and another says the waters prevailed for a hundred and fifty. Source critics explain this by arguing that editors combined two flood stories, one from the older Yahwist and one from the later Priestly writer, into a single account.',
          src: 'Wellhausen · Friedman, Who Wrote the Bible?'
        }
      }
    ]
  },
  {
    id: 'gen-8',
    bookId: 'genesis',
    tier: 'sitting',
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
          text: 'This passage has the closest parallel to another ancient text anywhere in Genesis. In the Epic of Gilgamesh, the hero of the flood sends birds out from his boat and then offers a sacrifice, and the gods, hungry after the flood, gather around it like flies. The writer of Genesis keeps the birds and the altar but leaves out the hungry gods. Instead there is one God, who smells the offering and resolves never to destroy the earth this way again.',
          src: 'The Epic of Gilgamesh · John Day'
        },
        meaning: 'The whole flood story turns on the words <b>God remembered Noah</b>. The writer does not mean that God had forgotten him. The writer uses the phrase to mark the moment when God turns from judgment back toward rescue. When the earth comes up out of the water, God has not made a clean new world. He gives back the same earth, with the same human heart in it, and promises never to drown it again.',
        lenses: {
          theo: 'God makes this final promise on his own, and he makes it with his eyes open. He judges that the human heart has been bent toward evil from youth, and he chooses restraint anyway. He has not decided that the danger is gone. He has decided to bear with the world patiently where before he judged it. This mercy is not God’s verdict that we have improved. It is his decision to carry a world that has not.',
          arch: 'Many peoples have told stories of a flood that returns the world to water, after which the land rises again, dry. The historian of religion Mircea Eliade found this pattern across the world’s myths: people imagined the world sinking back into formless water and then being made a second time, so that a cleaner order could rise from the same flood. When Noah sends out the dove to find a place to land, he acts out that same hope, that somewhere solid ground will appear to stand on.'
        },
        addr: {
          mode: 'names',
          text: 'Most people remember the flood itself. The harder part comes afterward, when Noah waits in the ark while the water drops a little at a time, sends out a bird and receives it back, and waits seven more days, then seven more. We are often past the worst of something and still unable to step out of it, and that waiting asks more of us than the disaster did.'
        },
        ask: 'What in your life is past its worst but not yet steady enough to stand on, and how are you bearing the wait?'
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
    thread: 'After the flood, the waters go down and Noah’s family steps out of the ark onto a cleansed earth. In this chapter God makes a promise to the whole earth that asks nothing in return. Yet the people who walk out of the ark are no different at heart from the people the flood destroyed, and before the chapter ends Noah himself shows it.',
    closeEnd: 'The flood is over, but the people who survived it have not changed. In the next two chapters their descendants spread out across the earth, and then gather once more on a plain in the east.',
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
          text: 'When God blesses Noah’s family, he repeats the words he spoke at creation in Genesis 1: “be fruitful and multiply and fill the earth.” The writer saw the flood as creation running backward, with God letting the waters of chaos cover the land again, and here God begins the world a second time. Yet he changes the terms. In Eden the humans ate only plants, but now God allows them to eat meat, with one condition: they must not eat the blood, because the writer understood the blood to be the animal’s life. Jewish dietary law later built its rules about draining blood on this verse.',
          src: 'Smith · Walton'
        },
        meaning: 'God starts the world over with the same blessing he gave it at the beginning, but he does not pretend it is Eden again. He allows people to eat meat, and he warns that animals will now fear them. These are allowances for a harder world, and God makes them knowingly. The fresh start is real, but God begins it by admitting that <b>blood</b> will be part of the new world.',
        lenses: {
          theo: 'Many readers see grace in this passage, but a grace that is honest about the world. God gives the earth back to people as it now is, not as it was before things went wrong. He does not act as though the trouble in Eden never happened. He builds the new world on the ground that is actually there.'
        },
        addr: {
          mode: 'names',
          text: 'When we are given a second chance, we rarely find ourselves back where we were before things went wrong. More often God hands us the same calling we had before, in a world that has become harder.'
        },
        ask: 'Where have you been given a fresh start that is not a return to how things were? Are you grieving what you lost, or working with what you were given?'
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
          text: 'The phrase “in the image of God” comes from the group of writers scholars call the Priestly source, the same writers who used it in Genesis 1. Here they carry it into law. The exiles who shaped this text knew the law codes of Mesopotamia, such as the code of Hammurabi, which set different penalties according to a victim’s rank, so that killing a noble cost more than killing a commoner. Against that background, this verse sets one standard for everyone. In Hebrew the writers built the sentence as a mirror, with the words for blood and for a human being repeated in reverse order, so that the shape of the sentence matches the punishment fitting the crime.',
          src: 'Middleton'
        },
        meaning: 'Why is murder so serious? The writer does not answer that it breaks a rule. He answers that the person who was killed was made in God’s <b>image</b>. Every human being bears that likeness, the powerful and the powerless alike, so God protects each life because of its dignity, not because of what that person can produce.',
        lenses: {
          theo: 'Here God gives his image to every human being without exception. Many later thinkers have built their claims about human dignity and human rights on this verse, and it stands against every system that ranks some lives above others. If every person bears God’s image, no one can claim to be worth more than anyone else.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us meet people every day whom we quietly rank by what they can do for us. This verse tells us that each of them bears God’s image, just as we do.'
        },
        ask: 'Is there someone whose worth you have been measuring by how useful they are to you?'
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
          text: 'God makes this covenant not only with Noah but with “every living creature,” so the animals are included too. Readers easily miss this, but it is a remarkable claim. The sign of the covenant is the rainbow, yet the Hebrew word is simply “bow,” the same word used for a warrior’s bow. The writer pictures God hanging up his weapon in the sky with its curve turned away from the earth. God also asks nothing of Noah in return. He binds only himself, and he says he will look at the bow so that he will remember his promise.',
          src: 'Westermann'
        },
        meaning: 'This is the first covenant in the Bible, and God gives it freely. He sets no conditions and asks people to keep no terms. He simply makes a promise and hangs up his bow. According to the text, God placed the sign in the sky not to remind people to behave but so that he would remember his own promise. God alone carries the weight of this <b>covenant</b>.',
        lenses: {
          theo: 'Here God shows a grace that asks nothing back. He ties his own hands and turns his weapon away from the earth. He also makes the promise to every living creature, not only to human beings, so his promise reaches as far as the earth itself, and he alone stands behind it.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us carry a relationship as if everything depended on our keeping up our end. In this covenant God carries the whole weight himself.'
        },
        ask: 'Where are you straining to hold up something that God may have meant to hold up himself?'
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
          text: 'Many readers skip this passage, and others have badly misused it. For centuries, people who defended the slavery of Black Africans claimed that this passage placed a “curse of Ham” on them. The text gives them no support at all. Noah curses Canaan, not Ham, and he curses no race; the writer most likely included the story to explain why Israel later ruled over the Canaanite peoples. The writer says nothing about skin color. Later readers invented the slavery reading and forced it onto the words. Beneath that controversy lies a quieter shock: Noah, the righteous man God saved from the flood, gets drunk and is shamed in his own tent. In that culture, a son who looked on his father’s nakedness dishonored him gravely, because he saw his father exposed and out of control. Elsewhere in the Bible the Hebrew phrase for uncovering someone’s nakedness can describe a sexual act, so some readers think Ham did something worse than look, which would help explain why Noah’s curse is so severe. The writer, however, leaves the details unclear. What he does make plain is the contrast between the sons: Ham sees his father’s shame and tells others about it, while Shem and Japheth walk backward into the tent and cover their father without looking at him.',
          src: 'Westermann'
        },
        meaning: 'Under the flood story lies a sad discovery. God washed the whole earth clean, and the first thing the rescued, righteous man does is plant a vineyard, get drunk, and end up shamed in his own tent. The flood cleaned the world, but it did not change the human <b>heart</b>. The same flaw that the writer blamed for the flood came off the ark with Noah. No one can be made a better person simply by having the world around them washed.',
        lenses: {
          theo: 'The flood was the most complete fresh start anyone could imagine, and yet in the way that mattered most it failed, and the writer honestly says so. The trouble had never lain only with a wicked generation out in the world. Noah, the best man on the ark, carried it in his own heart. Many readers see this admission as preparation for the rest of the Bible: if the problem lies that deep, God will not solve it by washing the world. He will have to do something else.',
          arch: 'Many ancient peoples told stories of a great flood in which the gods let the world dissolve back into the waters of chaos and then made it again, a periodic washing that renewed everything. The writer of Genesis refuses to tell the tidy version of that story. When the waters go down, the man God rescued brings the same flaw out of the ark in his own heart. The deepest thing the writer tells us about new beginnings is that when God washes the world, he does not thereby wash the person who survives it. (Eliade, on the flood and the renewal of the world.)'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have tried to start over at some point, by moving to a new place, ending a relationship, or making a firm resolution. And then we have found that the very thing we were running from came with us. The writer does not tell this story to make us despair. He tells it to show that we need a change deeper than a change of surroundings.'
        },
        ask: 'Is there something in yourself that you tried to escape by changing your circumstances, only to find it waiting for you on the other side?'
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
          text: 'This chapter is an ancient map of the known world. The writers took every people they knew of and arranged them as one family descended from Noah’s three sons. The names refer to real places and powers, such as Egypt, Canaan, and the cities that Nimrod founded, including Babylon and Nineveh. By naming Babylon here, the writers prepare readers for the story of Babel in the next chapter.',
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
    thread: 'The first section of Genesis began with a creation story that answered the myths of Babylon, and it ends at Babylon too. In this chapter all of humanity gathers on one plain and sets out to build a city and a tower that reaches the sky, so that they can make a name for themselves. God scatters them across the earth, and the writer gives the empire’s proudest city a name that means “confusion.”',
    closeEnd: 'Here the writer ends the story of all humanity. From the next chapter on, he follows one man, Abram, to whom God makes a different kind of promise. The builders of Babel tried to win a great name for themselves, but God offers to give Abram one.',
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
          text: '“Shinar” is the Bible’s name for Babylonia, and a tower “with its top in the heavens” would have made ancient readers think of a <fig>ziggurat</fig>, one of the stepped temple-towers that stood at the center of Mesopotamian cities. The Mesopotamians built them from baked brick and bitumen, exactly the materials the writer names. Babylon’s own great ziggurat was called Etemenanki, which means “the house of the foundation of heaven and earth.” The exiles who shaped this story lived in the shadow of such towers, and “Babel” is simply the Hebrew name for Babylon. The builders’ reasons are also worth noticing. They want to make a name for themselves and to avoid being scattered, which is the exact opposite of what God told Noah’s family to do when he commanded them to fill the earth.',
          src: 'Smith · Walton'
        },
        meaning: 'The people of Babel set out to build upward, to stay gathered in one place, and to make a <b>name</b> for themselves, hoping to find safety and glory in height and in numbers. The writer does not draw them as cartoon villains. They act out of ambition, the very human wish to last, to be remembered, and not to end up scattered and forgotten. Their fault lies in what they reach for and in why they reach for it.',
        lenses: {
          theo: 'Throughout the Bible, people gain a name in one of two ways: they try to seize it by building high, or they receive it as a gift from God. The builders of Babel take the first way. They organize their city to secure their own glory, as though no one above them gave names to people or watched over them. In the very next chapter, God shows the second way when he promises Abram a great name.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us know the urge to build something so great that our name will outlast us, and to make ourselves secure through our own achievements so that we will not be scattered or forgotten.'
        },
        ask: 'Is there something you are building mainly so that your name will last? What is really driving you to build it?',
        figures: [
          {
            term: 'ziggurat',
            src: '/images/ziggurat.webp',
            alt: 'A stepped Mesopotamian ziggurat, a broad temple-tower rising in terraces against a dark sky.',
            caption: 'A ziggurat, the stepped temple-tower at the heart of a Mesopotamian city. Babylon’s, called Etemenanki, is the kind of tower the Babel story has in view.'
          }
        ]
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
          text: 'The writer means the irony here to be sharp. The builders meant the top of their tower to reach heaven, yet the LORD has to come down even to see it, and the writer quietly laughs at the gap between what they claimed and what they actually built. When God says, “Come, let us go down,” the writer echoes God’s words at creation, “Let us make,” but now God speaks in order to undo a human project. And when God warns that nothing will be beyond them, he sounds less jealous than sober, as one who knows what united human power will do when nothing holds it back.',
          src: 'Westermann'
        },
        meaning: 'God looks at a people united in pursuit of their own glory and judges them dangerous. He does not object to the height of their tower; he objects to what people will do once nothing restrains them. When he scatters them, he also shows a hidden <b>mercy</b>. Sometimes, when God breaks up a project that was headed somewhere bad, he is not punishing the people involved but stopping them before they go further.',
        lenses: {
          theo: 'When God confuses their language, he restrains them, and many readers would say that he shows them grace. In the flood story God limited the length of a human life, and here he limits what humanity can achieve together. He does not allow human power at its worst to run all the way to its end. What looks to the builders like a defeat is in fact a kindness.'
        },
        addr: {
          mode: 'names',
          text: 'We may belong to a group, or be pushing a plan forward, that feels unstoppable. When someone or something interrupts it, we may resent it, and yet the interruption may be saving us from where we were really headed.'
        },
        ask: 'Is there a plan of yours that stalled, which you have treated as a setback but which may have kept you from going somewhere you should not have gone?'
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
          text: 'The name “Babel” sounds like the Hebrew word balal, which means “to confuse,” but “Babel” is also simply the Hebrew word for Babylon. So the writer ends with a pointed joke at the empire’s expense. In the Babylonians’ own language, the name of their city meant “gate of the god,” and the exiles, writing in Hebrew, turned it into a name for confusion. In this way they took the proudest name in their world and made it mean babble. This is the last scene of the whole primeval history in Genesis 1–11, and the writers set it in Babylon, the very city where they lived as they wrote.',
          src: 'Smith'
        },
        meaning: 'The first section of the Bible ends with humanity scattered across the earth, its great project abandoned, and its proud city renamed for confusion. It is a bleak ending, but for the exiles it also offered a strange comfort. In the longer story God was telling, the empire that had conquered them was only Babel, a place of confusion, neither permanent nor the last word. The builders never finish their tower, and they lose the very <b>name</b> they were reaching for.',
        lenses: {
          theo: 'The writers began Genesis with a creation story that answered Babylon’s myths, and they close this section by naming Babylon for what they believed it truly was: impressive, unfinished, and not eternal. The God of their story outlasts every empire. Within the bleak ending, they found hope: the city that had conquered them would not have the last word over the world.',
          arch: 'People have told many stories of someone who tries to climb to heaven and is brought down for reaching too high. Babel is one, and so are the Greek stories of Icarus and Prometheus, and so is the history of every empire that has called itself eternal. People keep telling these stories because people keep feeling the same temptation, to win a name and a permanence that no human builder can secure. In every age, people raise a new tower and learn again that they could never keep the height they seized.'
        },
        addr: {
          mode: 'names',
          text: 'Some power or certainty may stand over your life now as though it will last forever. This story insists that it will not. In the writer’s eyes, every such power is another Babel, and no one will ever finish building it.'
        },
        ask: 'What in your life looks permanent and impossible to challenge, which this story would call temporary?'
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
    thread: 'At Babel, in Genesis 11, people tried to make a name for themselves, and God scattered them across the earth. In Genesis 12 God does the reverse. He calls one man, Abram, promises to make his name great himself, and promises to bless through him all the families of the earth that had been scattered.',
    closeEnd: 'God has given Abram the promise, and before the chapter ends Abram has already put it at risk. The chapters that follow tell what the promise will cost him, and whether he can learn to trust the God who made it.',
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
          text: 'Many readers see this chapter as the turning point of the whole Bible. For eleven chapters the writer has told the story of all humanity, and even the flood story, though it narrowed the cast to Noah’s family, was still about the whole world being unmade and remade. From here on the writer follows a single family, and he tells the rest of the story through it. God’s command to Abram is lech lecha in Hebrew, which means “go,” and God attaches a promise with three parts: a great nation, a great name, and blessing. In the last line God turns outward and says that all the families of the earth will be blessed through Abram, using the same word for families that the writer used in Genesis 10 for the peoples spread across the world. The writer also sets up a pointed contrast. The builders at Babel said, “let us make a name for ourselves,” but here God tells Abram, “I will make your name great.”',
          src: 'von Rad · Alter'
        },
        meaning: 'Abram’s story begins when God tells him to leave. He must leave his country, his people, and his father’s house, the three things that told an ancient person who he was, and walk toward a land he has never seen with nothing to go on but God’s promise. For Abram, then, faith does not mean agreeing to a set of ideas. It means <b>leaving</b> because God has spoken.',
        lenses: {
          theo: 'God makes the first move. Abram does nothing to earn the call, and God does not bless him for his own sake alone; he blesses Abram so that Abram can be a blessing to the whole scattered world. Jewish and Christian readers have long seen this as God’s answer to Babel. Instead of sending another flood or scattering the nations again, God chooses one man and means to reach everyone through him.',
          arch: 'The scholar Joseph Campbell noticed that hero stories in many cultures begin in much the same way. A summons comes, and the hero must leave home, family, and everything familiar to set out toward a destiny he cannot yet see. Abram’s call has the same shape. He crosses the threshold with nothing in hand but a promise, and he cannot go back to the life he leaves behind.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have felt both the pull and the dread of a call to leave something settled for something we cannot yet see.'
        },
        ask: 'What do you sense you are being asked to leave? What would you need to believe about the one who made the promise before you could actually go?'
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
          text: 'The writer says simply, “So Abram departed,” and adds that he was seventy-five years old. When Abram reaches Canaan, the writer slips in a quiet line with a great deal riding on it: the Canaanites were already living in the land. From the first day, then, Abram finds the land God promised him full of other people, and he has to live with the distance between what God has said and what he can see. He responds by building altars at Shechem and near Bethel, marking with worship a land that God has promised him but that he does not own.',
          src: 'Westermann · Alter'
        },
        meaning: 'Abram obeyed, but he did not arrive anywhere he could call his own. He found himself in a land that was not yet his, among people who were already there. God did not remove the difficulty when he made the promise; he led Abram into it. Abram responded by building <b>altars</b>, claiming the ground for worship when he held it only by God’s word.',
        lenses: {
          theo: 'Abram lives in the gap between what God has promised and what he actually has. He does not own a handful of this soil, yet he builds altars on it anyway. This is what trust looks like before God has fulfilled anything: Abram worships while he is still waiting.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us have followed what we were sure was God’s leading, only to find the place already occupied, and harder and less our own than we expected.'
        },
        ask: 'Where has following God led you somewhere harder than you expected? What would it look like to build an altar there?'
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
          text: 'God has barely finished making his promise when a famine drives Abram down to Egypt, and there he panics. Afraid that the Egyptians will kill him to take his wife, he tells Sarai to say she is his sister. Pharaoh takes her into his house, and Abram grows rich from the arrangement. Then God strikes Pharaoh’s household with plagues, and Pharaoh discovers the deception and sends them away. Readers are often jarred to find this story placed right after the call. The man God has chosen lies, puts his wife in danger, and nearly hands the future mother of the promised child to another man, and the writer makes no excuse for him.',
          src: 'Alter'
        },
        meaning: 'God has hardly made the promise before Abram, out of fear, almost ruins it. Yet God protects the promise from Abram himself. God does not make his commitment depend on Abram behaving well, and he keeps it even through Abram’s worst moment. This is a strange and undeserved kind of <b>grace</b>.',
        lenses: {
          theo: 'Very early in Abram’s story, the writer shows what kind of grace God offers. God guards his promise even against the failures of the man who carries it. Everything rests on God’s faithfulness rather than on Abram’s courage or character, and that is the only reason Abram does not lose the promise altogether.'
        },
        addr: {
          mode: 'names',
          text: 'A person can be truly called by God and still act out of fear in a way that endangers the very thing God gave them. God kept his promise to Abram anyway, even though Abram had not been brave.'
        },
        ask: 'Where has fear led you to protect yourself at someone else’s cost? What would it mean to trust that what you are guarding does not depend on you alone?'
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
          text: 'This quiet chapter prepares for a disaster that comes four chapters later. The writer stops to tell us that the Jordan plain was lush “before the LORD destroyed Sodom and Gomorrah,” and that the people of Sodom were already wicked. So when Lot chooses that plain because it looks good to him, readers can see that he is heading toward ruin, while Abram goes on living by a promise he cannot see. When the writer says the land “was unable to support both of them,” he is describing a real strain: large herding families in the hill country of Canaan had to compete for limited grazing land and water.',
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
          text: 'Chapter 14 does not fit easily with the rest of the Abraham story. Its style, its old-sounding list of eastern kings, and its picture of Abram as a war leader chasing armies with his own small force appear nowhere else in Genesis, and many scholars think an editor drew the chapter from a separate old tradition. Its strangest figure is Melchizedek, the priest-king of Salem, which was an early name for Jerusalem. He serves God Most High, in Hebrew El Elyon, a title the Canaanites used for their own high god, and the writer quietly identifies that God with the LORD. Centuries later, the writer of Psalm 110 and then the author of the letter to the Hebrews saw in this shadowy priest-king a picture of an eternal priesthood. In Genesis, though, he is simply a local king who blesses Abram and receives a tenth of the plunder.',
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
    thread: 'God first made his promise to Abram in chapter 12, and three chapters later Abram still has no child and no land of his own. In Genesis 15 God answers both of Abram’s doubts directly. For the children, he shows Abram a sky full of stars, and for the land, he makes a covenant with him in the dark.',
    closeEnd: 'God has bound his own life to the promise, swearing it while Abram slept. The chapters ahead tell what that costs, and how badly Abram and Sarai handle the waiting.',
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
          text: 'Verse 6 is one of the most debated sentences in the Bible. God takes Abram, old and childless, out under the night sky and tells him his descendants will outnumber the stars. Abram believes him, and God credits that belief “to him as righteousness.” Centuries later Paul built much of his teaching on faith on this one line, in Romans 4 and Galatians 3; James argued against a one-sided reading of it in James 2; and during the Reformation Protestants and Catholics disagreed sharply over what “credited as righteousness” means. In its own setting the line is simpler and stranger than any of those debates. God sets things right between himself and Abram not because of anything Abram achieves, but because Abram is willing to trust a promise that every visible fact contradicts. When God calls himself Abram’s “shield” and “reward” in verse 1, he may also be recalling the battle of the previous chapter.',
          src: 'von Rad · Alter'
        },
        meaning: 'Abram starts with the most honest thing anyone does in the chapter: he argues. He tells God that the promise means nothing as long as he has no child. God does not rebuke him for complaining. Instead he answers him, takes him outside, and shows him the stars. Abram believes, not because the evidence has changed, since he is still old and Sarai still cannot bear children, but because he decides to <b>trust</b> the one who is making the promise. According to the writer, that decision is what sets Abram right with God.',
        lenses: {
          theo: 'Christian readers have often found in this verse the beginning of the teaching on grace. God counts Abram righteous before Abram has done anything to deserve it, because Abram trusts him. God sets the relationship right through his own promise and Abram’s yes to it, not through Abram’s record. Paul would later find in this single line nearly everything he wanted to say about faith.',
          arch: 'People in many ancient cultures looked to the night sky to learn their fate, and Babylonian astrologers in particular studied the stars for signs of what was coming. Here God leads a childless man out under that same sky and tells him to count what cannot be counted. Instead of reading his fate in the stars, Abram must decide whether to trust a promise that everything he can see by daylight seems to deny. Readers ever since have found in this scene a picture of anyone who has to trust what they cannot yet see, against all the evidence they can.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us know what it is to receive a promise that every fact in front of us contradicts, and to have to decide whether to trust it anyway.'
        },
        ask: 'Where are you being asked to trust something you can see no evidence for yet? If you truly believed it, what would you do differently now?'
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
          text: 'When Abram asks how he can be sure that the land will be his, God answers him with a ritual older than Israel instead of with proof. In such a ritual, people cut animals in half and laid the pieces in two facing rows, and the parties to an agreement walked between them, as if to say, “let me be torn apart like these animals if I break my word.” The prophet Jeremiah describes the same ceremony, and it explains a Hebrew idiom: the Israelites spoke of “cutting” a covenant. In this scene, though, God breaks the usual pattern. Abram falls into a deep and dreadful sleep, and God alone, appearing as a smoking firepot and a blazing torch, passes between the pieces. God binds himself to the oath, while Abram only watches. During the ritual God also gives Abram a dark prophecy: his descendants will be enslaved in a foreign land for four hundred years before they receive what God has promised. Later readers heard in this a forecast of the slavery in Egypt and the exodus.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'Abram asks God for certainty, and God gives him a covenant in which Abram carries none of the risk. Abram sleeps while God walks the bloody path alone. God binds the promise entirely to his own life rather than to how well Abram performs, and that is why Abram’s family can still hope in it after everything they are about to do. Yet God gives this certainty in the dark, and he tells Abram plainly that the way to the promise leads through four centuries of slavery. Abram can now be sure of how the story will end, but God does not spare his descendants the <b>suffering</b> in the middle.',
        lenses: {
          theo: 'When only one party passes through the pieces, the covenant becomes a one-sided oath. God stakes his own existence on keeping a promise to a man who is asleep. Many readers see here grace at its most extreme: God makes a commitment that does not depend on the other side keeping its part, and for that reason nothing Abram does can finally undo it.',
          arch: 'The scholar Rudolf Otto described the holy as something that both terrifies people and draws them in, and this scene fits his description closely. Abram falls into a deep sleep, and “great terror and darkness” come over him. While he lies helpless, God moves between the pieces as fire, with no human hand guiding it. The writer sets the most binding moment of Abram’s life at night, at the frightening edge of the holy, where Abram can do nothing but receive what God does.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us have wanted a guarantee and received instead a darkness to walk into, along with the assurance that someone has bound himself to us on the far side of it. Abram did nothing to hold the oath together. He slept through the part that mattered most, and God kept his word.'
        },
        ask: 'Where have you asked for certainty and received only a promise? Whose faithfulness would you have to trust in order to walk into the dark?'
      }
    ]
  },
  {
    id: 'gen-16', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 16', chapterIndex: 16,
    title: 'Hagar', unitLabel: 'Scene',
    thread: 'God swore his covenant to Abram in chapter 15, and still Abram and Sarai have no child. So Sarai stops waiting and arranges for a child herself, in a way that people of her world commonly did, and Hagar, a slave woman with no power to refuse, pays the price.',
    closeEnd: 'Abram and Sarai still do not have the son God promised, and their first attempt to force his arrival has wounded everyone involved. In the next chapter God will seal the covenant in the bodies of Abram and his household through circumcision, long before he gives them the child.',
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
        ground: { kind: 'historical', text: 'In the ancient Near East a childless wife could legally give her slave to her husband as a surrogate, and law codes of the time, such as the Code of Hammurabi, deal with similar arrangements. The writer records the custom without approving the cruelty that follows. He also repeats the pattern of the lie in Egypt: when God seems slow to keep his promise, the people involved grow impatient, and those with the least power get hurt.', src: 'Speiser · Westermann' },
        meaning: 'Only one chapter after God swore the covenant, Abram and Sarai find the waiting unbearable, so they reach for the ordinary human solution. Sarai’s plan is legal and reasonable, and it ends in disaster. Because they grasp at the promise instead of <b>trusting</b> God to keep it, the three of them turn against one another, and Sarai treats Hagar, who had no say in the arrangement, so harshly that Hagar flees into the desert.',
        lenses: {
          theo: 'God does not need anyone to help his promise along with a scheme, and whenever someone in Genesis tries, people get hurt. God keeps his own timetable. When Abram and Sarai try to force his hand, they produce not the son of the promise but a wound that their descendants will carry for generations.',
          arch: 'People have always found it hard to bear the gap between a promise and its fulfillment. Again and again, someone who cannot wait grabs at the thing they most want and ruins it in the process, like a farmer who tramples his own field trying to hurry the harvest. Here Sarai and Abram do exactly that.'
        },
        addr: { mode: 'names', text: 'Most of us know the pull to force something we were told to wait for. We also know that when we take the shortcut, the person who gets hurt is often the one standing closest to us with the least say.' },
        ask: 'Where are you reaching for control because you can no longer bear to wait? Who will pay for the shortcut?'
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
        ground: { kind: 'historical', text: 'Hagar is the first person in the Bible to give God a name, and she is not a patriarch but a pregnant, runaway, foreign slave woman, alone in the desert. The angel also promises her that her descendants will be too many to count, words that until now God had spoken only to Abram.', src: 'Trible · Westermann' },
        meaning: 'God goes looking for the woman everyone else has thrown away, rather than for the people who hold the promise. He finds Hagar in the wilderness, calls her by name, and hears her misery. He tells her to go back, which is a hard command, but she does not return the same. She goes back knowing that God <b>saw</b> her when no one else did, and she, a slave, is the one who gives God a name.',
        lenses: {
          theo: 'In this story God is not only the God of Abram’s chosen family. He sees the people others discard, hears the powerless, and meets them in the places they have run to. God has made his covenant with one family, but he keeps appearing to those on its edges.',
          arch: 'Many old stories set their life-changing meetings in the wilderness, where a person has lost every familiar support. Hagar, a slave with nowhere left to run, names God in the very desert she fled to. Readers have recognized in her a common human experience: often we meet the one who truly sees us only after we have run out of every other place to go.'
        },
        addr: { mode: 'names', text: 'Some of us know what it is to be overlooked in someone else’s plans, and to be truly seen only after we had run as far as we could. Hagar was seen. In the place where she thought she was most alone, she was the one who gave God a name.' },
        ask: 'Where do you most need to be seen? What would change if you trusted that God has already seen you?'
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
        ground: { kind: 'historical', text: 'Scholars attribute this chapter to the Priestly writer, and they read it as his version of the covenant that an older writer described in chapter 15. God makes the same promise to Abram a second time, and now he gives a sign that every man in the family will carry in his own body. God also renames the couple: Abram becomes Abraham and Sarai becomes Sarah, as a mark of who they now are. Israelites came to treat circumcision as the sign of whose people they were, and they held to it most closely centuries later, in exile, when they had no land and no temple left. Abraham also laughs at the promise in this chapter, one chapter before Sarah does, and the son’s name, Isaac, means “he laughs.”', src: 'Friedman · Smith' }
      }
    ]
  },
  {
    id: 'gen-18', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 18', chapterIndex: 18,
    title: 'The visitors', unitLabel: 'Scene',
    thread: 'In chapter 17 God gave Abraham a sign of the covenant and told him the name of the son he would have. Now three visitors come to Abraham’s tent, and God tells him the son will be born within a year. Sarah overhears and laughs at the idea, and later in the chapter Abraham stands before God and argues for the lives of the people of Sodom.',
    closeEnd: 'The two strangers walk on toward Sodom. Abraham has asked whether the Judge of all the earth will do what is right, and in the next chapter God answers him with fire.',
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
        ground: { kind: 'setting', text: 'Everything in this scene depends on the rules of desert hospitality. A family who found a stranger at their tent was bound to feed him and protect him, and Abraham hurries to do everything those rules required. God has promised Abraham a son for several chapters now, and here, for the first time, he names a date: by this time next year. The son’s name, Isaac, means “he laughs,” and nearly everyone in these chapters laughs at God’s promise before the boy is born.', src: 'Alter · Westermann' },
        meaning: 'God has promised Abraham and Sarah a son so many times, and they are now so old, that when Sarah hears it again, all she can do is laugh quietly to herself inside the tent. God does not punish her for laughing. He gently points it out, and then he asks the question on which the whole book turns: <b>is anything too hard for the LORD?</b> When the son is born, his parents will call him Laughter, a name that holds both their old disbelief and their new joy.',
        lenses: {
          theo: 'God answers Sarah’s tired laugh not with anger but with a date. He does not make the birth depend on whether Sarah believes him. He makes it depend on himself, and he will give her the son at the time he has set, with her own laughter in the boy’s name.',
          arch: 'Many of us know what it is to give up quietly on a hope, and then to hear someone speak of it again as if it were still alive. Sarah laughs as a person in that position laughs. God catches her in her disbelief, but he does not condemn her for it, and when her son is born, she will carry the memory of that laugh in his name.'
        },
        addr: { mode: 'names', text: 'You may know the tired, private laugh you give at a hope you stopped allowing yourself to believe in, and the fear of being caught still wanting it.' },
        ask: 'Is there a hope you quietly laughed off because you grew tired of waiting? What would you do if you learned it was still coming?'
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
        ground: { kind: 'historical', text: 'Abraham bargains with God the way a man would bargain in a market, and God lets him lower the number from fifty righteous people to ten. Abraham bargains on a bold assumption: that whether God destroys a city is a real question of justice, that God can be held to justice, and that a human being may press him about it.', src: 'von Rad · Brueggemann' },
        meaning: 'Abraham stands in front of God and argues, on behalf of strangers, that God should let mercy outweigh judgment, and God does not strike him down for it. He welcomes the argument. Earlier the writer praised Abram for trusting God in silence, and now he honors Abraham for objecting out loud, because both are ways of taking God seriously. Abraham pleads for a wicked city, and he keeps lowering the number, because he has asked a question God seems glad to hear: <b>will the Judge of all the earth do right?</b>',
        lenses: {
          theo: 'The writer presents prayer for others as something God invites rather than something he merely puts up with. A person who argues with God for mercy on someone else is not being irreverent; he is doing one of the truest things a person can do, and the writer presents it as a kind of friendship between Abraham and God.',
          arch: 'Again and again the biblical writers tell of a person who stands before overwhelming power and pleads for people who do not deserve mercy, refusing to let force have the last word. Abraham does it here, Moses does it at Mount Sinai after the people worship the golden calf, and Job does it, in his own way, when he demands an answer from God. In each case a person’s conscience grows bold enough to argue with God himself.'
        },
        addr: { mode: 'claims', text: 'You may know the difference between accepting a verdict and daring to argue against it, and how much more it asks of you to stand up for people who cannot stand up for themselves.' },
        ask: 'Is there someone with no claim on mercy for whom you could still ask it? What stops you from making the case?'
      }
    ]
  },
  {
    id: 'gen-19', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 19', chapterIndex: 19,
    title: 'Sodom', unitLabel: 'Scene',
    thread: 'In chapter 18 Abraham persuaded God to spare Sodom if he found even ten righteous people there. Now two of the visitors go down into the city, and the men of Sodom treat them in exactly the opposite way from the way Abraham treated them at his tent.',
    closeEnd: 'God’s fire was real, and so was the injustice he sent it to punish. But readers have often made this chapter say something the writer never meant, as the note on its common misreading explains.',
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
        ground: { kind: 'historical', text: 'The writer built this chapter as a dark mirror of the one before it. Abraham met three strangers with eager generosity, but the men of Sodom meet two strangers by surrounding the house and demanding to rape them. In the ancient world people treated the protection of a traveler as close to a sacred duty, and they regarded an assault on a guest as the worst violation of it. Lot’s offer of his own daughters to the mob is monstrous, and the writer reports it without a word of approval. He shows us a man whose sense of honor has rotted along with his city.', src: 'Westermann · Alter' },
        misreading: { named: 'God destroyed Sodom for homosexuality, and the story is his verdict on gay people.', why: 'The writer describes a mob attempting gang rape, an act of violent domination, and he sets it against the hospitality Abraham has just shown. When later biblical writers name the sin of Sodom, they point elsewhere: the prophet Ezekiel says the people of Sodom were proud, overfed, and unconcerned for the poor and needy. The writer of Genesis condemns cruelty, injustice, and the abuse of the vulnerable. Readers who turn the chapter into a verdict on whom a person loves miss what the writer said, and they end up using his words to harm vulnerable people, the very thing he condemns.' },
        meaning: 'Because readers so often misread this chapter, it is worth stating plainly what happens in it. The sin the writer describes is violence against the helpless: the men of a whole city gather to assault strangers who have come under the protection of Lot’s roof. What they threaten is rape, which is an act of domination, not of desire. The writer judges Sodom by the standard Abraham met and Sodom failed, namely <b>how the powerful treat the powerless stranger</b> at their gate.',
        lenses: {
          theo: 'God judges a city whose people had made cruelty to outsiders their ordinary way of life. The fire he sends is terrible, but he sends it to answer a settled, shared injustice, not anyone’s private identity.',
          arch: 'Ancient peoples counted hospitality to strangers among their most sacred duties and its violation among their gravest crimes. The Romans told a story with the same horror, the tale of Baucis and Philemon, in which two gods visit a town in disguise, every household but one turns them away, and the gods flood the town. In stories like these, the people of a city who turn on the travelers at their gate show that they have closed themselves against everyone outside.'
        },
        addr: { mode: 'names', text: 'You have felt the difference between a place whose people welcome the stranger and a place whose people shut him out, and perhaps you have also felt the pull of a crowd that wants to make an outsider pay.' },
        ask: 'Where do you meet outsiders with an open door, and where do you join the crowd against them? Which kind of city are you helping to build?'
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
        ground: { kind: 'historical', text: 'The writer’s description of the destruction matches the strange, lifeless country around the Dead Sea, with its sulfur, salt, and tar pits, and people told the story of the pillar of salt to explain the salt formations that still stand there. The writer also says plainly that God did not rescue Lot for Lot’s own sake; God remembered Abraham. In the disturbing scene that follows, Lot’s daughters bear sons by their father, and through it Israelites told the origin of Moab and Ammon, two neighboring peoples who were often their rivals.', src: 'Alter · Westermann' },
        meaning: 'Lot does nothing to earn his rescue. The angels drag him out by the hand because God remembered Abraham, the man who stood on the ridge and bargained for the city. God kept the terms of that bargain: he did not find even ten righteous people, and Sodom fell. But because one man had prayed for him, God pulled Lot’s flawed family out by force. Lot’s wife looks back at the only world she has known, and she becomes a monument to <b>the cost of being unable to leave</b> what is already lost.',
        lenses: {
          theo: 'God saves Lot through his relationship with Abraham. Lot does not earn his rescue; someone else prays for him. In this way God answers Abraham’s bargaining after all. He did not find ten righteous people, yet Abraham did not plead in vain, because his prayer reached the one household it could.',
          arch: 'Many peoples have told stories of someone forbidden to look back who looks anyway. The best known outside the Bible is the Greek story of Orpheus, who went down to the land of the dead to bring back his wife Eurydice and lost her forever because he turned to look at her before they reached the upper world. In both stories the person who looks back cannot stop loving something already lost, and the look costs everything.'
        },
        addr: { mode: 'names', text: 'You may know what it is to keep turning back toward something already gone, and how that looking can freeze you where you stand. The angels pulled Lot out by the hand. Sometimes we are saved not by our own strength but because someone refused to stop praying for us.' },
        ask: 'What are you still looking back at that you can no longer afford to keep facing? Who has been holding out a hand to pull you forward?'
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
        ground: { kind: 'historical', text: 'This is the second time Abraham passes his wife off as his sister to a foreign king, after chapter 12, and in chapter 26 Isaac will do the same with Rebekah. Scholars take these three versions of one story as strong evidence that the traditions behind Genesis circulated in different forms, and that the editors kept the versions side by side rather than merging them. The sharpest detail in this version is that Abimelech, the foreign king, behaves more honorably than Abraham, the man God chose, and yet God still calls Abraham a prophet.', src: 'Friedman · Westermann' }
      }
    ]
  },
  {
    id: 'gen-21', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 21', chapterIndex: 21,
    title: 'Isaac born', unitLabel: 'Scene',
    thread: 'After twenty-five years of waiting, Sarah gives birth to the son God promised, and she names him Isaac, which means Laughter. But on the same page Abraham and Sarah pay for the shortcut they took in chapter 16, when Sarah gave her slave Hagar to Abraham to bear a child for her: now they send Hagar and her son Ishmael into the desert.',
    closeEnd: 'Isaac, the son God promised, has been born, and God has saved Ishmael, the son of Sarah’s scheme, in the wilderness. God has not yet asked anything of Abraham concerning Isaac, but in the next chapter he will.',
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
        ground: { kind: 'historical', text: 'Isaac means “he laughs.” Over these chapters the writer gathers into the name every laugh anyone aimed at God’s promise: Abraham’s in chapter 17, Sarah’s behind the tent in chapter 18, and now Sarah’s once more, though this time she laughs for joy instead of disbelief. The same word that once held her doubt now holds her delight.', src: 'Alter' },
        meaning: 'God swore the promise, sealed it with a sign, named a date, and bore Abraham’s and Sarah’s laughter, and now he keeps it in the form of a baby. Sarah, who once laughed bitterly behind the tent, now says that God has brought her laughter. For twenty-five years she and Abraham held on to God’s word against every impossibility, and now their son is here, <b>ordinary and astonishing</b>, nursing at an old woman’s breast.',
        lenses: {
          theo: 'When God finally keeps his promise, he does not erase the long wait; he redeems it. Sarah does not forget her years of barrenness and doubt. Instead, those years become part of her joy, and she knows exactly what it cost to reach this day. Even after God has given what he promised, Sarah remembers how long he delayed.',
          arch: 'The biblical writers tell this story again and again: a woman who has long despaired of having a child gives birth after she has stopped hoping. Rebekah, Rachel, and Hannah all bear sons this way, and much later, in the Gospel of Luke, so does Elizabeth, the mother of John the Baptist. In each of these stories God gives the child at a point when no one can pretend to have brought it about.'
        },
        addr: { mode: 'names', text: 'You may know what it is to want something for so long that you laughed it off to protect yourself, and you can imagine what it would be to receive it anyway, late, real, and yours.' },
        ask: 'Is there a long-deferred hope you barely let yourself name? What would you have to let yourself feel if it came?'
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
        ground: { kind: 'historical', text: 'This is Hagar’s second exile, and it is harder than her first. In chapter 16 she ran away; now Abraham sends her away, with her son and a single skin of water, into a desert where she expects to watch her son die. The writer does not soften what Abraham did or what Sarah demanded. He simply records that God heard the boy and did not let him die.', src: 'Trible · Westermann' },
        meaning: 'Isaac’s birth and Ishmael’s expulsion happen on the same page, and the writer does not pretend that the expulsion was blameless. Abraham sends a child toward death by thirst so that Isaac’s inheritance can stay whole. And once again, as in chapter 16, the God of the covenant turns toward the people others have thrown away. He hears the boy, he opens Hagar’s eyes to a well that was already there, and he makes a promise to a child he did not choose to carry the covenant. God chose Isaac’s line, but he <b>does not abandon</b> the people outside it.',
        lenses: {
          theo: 'In Genesis, God’s choosing of one person never means that he stops caring for everyone else. Isaac carries the covenant, but God hears Ishmael cry, saves him, and promises him a future as well. God chooses a center, but he does not forsake the people at the margins.',
          arch: 'In Genesis the son whom a family casts out does not disappear from the story. God hears Ishmael in the wilderness and makes him a nation of his own, and later he will do the same for Esau, so the writer never lets the rejected son be erased. Whatever a family drives out to protect its inheritance stays with them, both in their story and on their conscience.'
        },
        addr: { mode: 'names', text: 'You may know the uncomfortable side of getting what you longed for, when someone or something had to be pushed out of the picture so the rest could stay neat. God heard the boy. Hagar and Ishmael were pushed to the edge of the story, but they were not beyond God’s hearing.' },
        ask: 'Who or what got pushed to the margins so that your own life could hold together? What would it mean to believe that God still heard them?'
      }
    ]
  },
  {
    id: 'gen-22', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 22', chapterIndex: 22,
    title: 'The binding of Isaac', unitLabel: 'Scene',
    thread: 'Abraham and Sarah waited twenty-five years for their son Isaac. Now God tells Abraham to give the boy back, as a sacrifice on an altar, by his own hand. The whole story of Abraham has been leading to this chapter.',
    closeEnd: 'Abraham sacrifices a ram instead of his son, and God swears his promise once more. But Abraham and God never speak to each other again in the book, and Sarah dies in the next chapter. The writer does not tell us how to feel about a God who would ask such a thing. He shows us a father who went, and a knife that God stopped.',
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
        ground: { kind: 'historical', text: 'By the Bible’s own standards the command is monstrous. Other biblical writers condemn child sacrifice with horror, and God has spent chapters insisting that everything he promised will come through Isaac. In Hebrew God piles up the words like blows: your son, your only son, whom you love. And Abraham, the man who argued with God over Sodom and bargained for strangers, says nothing. He gets up early and goes, and across the three days of the journey the writer tells us nothing of what he thought or felt.', src: 'von Rad · Alter · Spiegel' },
        meaning: 'Everything in the story of Abraham has been leading to this chapter, and the writer will not let it be comfortable. The line that hurts most is a small one, which he repeats twice: <b>the two of them went on together</b>. A father walks his son to an altar while the boy carries the wood, and they talk. The writer offers no clean lesson. He gives us a command no one should obey, a silence where we expect a protest, and a child’s question, “Where is the lamb?”, that his father cannot answer directly.',
        lenses: {
          theo: 'Readers have argued over this chapter for as long as anyone has read it. Some see in it the greatest act of faith, a trust that goes past the edge of reason. Some see the moment when God ended child sacrifice, giving a ram in place of the son once and for all. Others cannot get past the horror of a God who would ask, or of a father who would go. The writer leaves all of these readings open and settles none of them, and that is part of his honesty.',
          arch: 'God’s command touches the oldest fear in religion, that the god who gave a gift might demand it back. Some peoples of the ancient Near East did sacrifice children, and here the writer takes Abraham to the very edge of that horror before God stops his hand and provides a ram in the thicket. The scholar Jon Levenson has shown how often the biblical writers return to this pattern, in which a father gives up a beloved son for lost and then receives him back.'
        },
        addr: { mode: 'names', text: 'You may know the dread of seeing the thing you love most put at risk, and the silence that falls when you have no good answer for the person walking beside you.' },
        ask: 'Have you ever walked toward something unbearable in silence? What did you say to the people beside you who did not know?'
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
        ground: { kind: 'historical', text: 'Abraham raises the knife, God’s voice stops him, and Abraham finds a ram caught in a thicket. Many readers take this as the moment when Israel’s God breaks with the surrounding practice of child sacrifice, accepting an animal in place of the son and never asking for a child again. Look closely, though, at how the writer ends the scene. He says that Abraham returned to his servants, but he does not mention Isaac coming down the mountain with him. The writer never says that the two who walked up together walked down together.', src: 'Spiegel · Levenson · Alter' },
        meaning: 'God stops Abraham’s hand. Abraham sacrifices a ram instead of his son, names the place The LORD Will Provide, and hears God swear the promise once more, of descendants like the stars and the sand. Even so, the writer will not let us relax entirely. Abraham passes the test, but something in him is spent. He and God never speak again in the book, and the writer describes him coming down the mountain alone. Sarah dies at the start of the next chapter, and the ancient rabbis, unable to bear the gap, told stories that she died when she heard what had happened. Abraham’s family survives, but <b>the writer never measures the cost</b>.',
        lenses: {
          theo: 'If there is good news in this chapter, it is the ram. God stops Abraham’s hand, he does not finally take what he demanded, and at the last moment he provides a sacrifice from outside. But the writer does not hand us that comfort cleanly. He makes us walk all the way up the mountain first, and he does not undo what the walk cost Abraham.',
          arch: 'A person who comes to the very edge of losing something irreplaceable, and then has it handed back, is not the same as a person who never faced the loss. Many traditions tell of this kind of ordeal, in which someone goes up a mountain or down into darkness and returns changed. Abraham comes down the mountain a different man, and he does not bring back everything he took up with him.'
        },
        addr: { mode: 'names', text: 'You may know the strange aftermath of a fear lifted at the last moment, when your relief does not quite cancel what the fear already took from you. God stopped Abraham’s hand, and whatever the walk cost him, his son lived.' },
        ask: 'Have you been asked to hold something so loosely that you might lose it? What did that cost you, even if you were given it back?'
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
        ground: { kind: 'historical', text: 'Abraham buys a cave at Machpelah from Ephron the Hittite so that he can bury Sarah, and the long, formal haggling over the price is exactly how people transferred property in the ancient Near East, with witnesses gathered at the city gate. At the center of the chapter the writer makes a quiet point: God promised Abraham the whole land, yet Abraham dies owning nothing in it but a grave. The first piece of the promised land he can actually hold is a tomb.', src: 'Sarna · Westermann' }
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
        ground: { kind: 'historical', text: 'This is the longest chapter in Genesis, and the writer tells it at a leisurely pace he rarely allows himself. He builds it on a pattern that will appear again, in which a man, or someone sent on his behalf, finds a future wife at a well, as Jacob will later, and as Moses will in Exodus. Abraham sends his servant back to his relatives in Mesopotamia to find a wife for Isaac, because families expected marriages to stay within the clan. Throughout the chapter the writer shows God guiding events not through miracles but through ordinary kindness, when a young woman named Rebekah offers to water a stranger’s camels.', src: 'Alter · Sarna' }
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
        ground: { kind: 'historical', text: 'The story of Abraham ends in the middle of this chapter. In verses 1 to 18 the writer closes Abraham’s life: he lists Abraham’s other sons by his wife Keturah, records his death at the age of a hundred and seventy-five, and adds a quiet, remarkable detail, that Isaac and Ishmael, the chosen son and the son who was sent away, stand together to bury their father. Then at verse 19 the writer turns to Isaac’s sons, and the story of Jacob begins. Scribes added the chapter numbers in our Bibles in the Middle Ages, and here the break between the two stories falls in the middle of a chapter.', src: 'Sarna · Westermann' }
      }
    ]
  },
  {
    id: 'gen-25b', bookId: 'genesis', tier: 'sitting', movementId: 'jacob',
    span: 'Genesis 25:19–34', chapterIndex: 25,
    title: 'Jacob and Esau',
    unitLabel: 'Scene',
    thread: 'Isaac’s wife Rebekah is pregnant with twins, and the two boys struggle with each other even in her womb. Before either of them has done anything, God tells Rebekah that the older will serve the younger, which overturns the order of the ancient world. The younger twin is Jacob, whose name means “heel-grabber,” and God will carry his promise forward through him.',
    closeEnd: 'By the end of the chapter Jacob has taken his brother’s birthright, and neither brother comes out of it with clean hands. The writer knows that the son God chose is a schemer, and he does not hide it.',
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
          text: 'God’s word to Rebekah says something startling: the older will serve the younger. In the ancient world the firstborn son inherited nearly everything, so God’s word turned the normal order upside down. The twins also stand for two nations, Israel and Edom, and the writers trace the long rivalry between those peoples back to a shared womb. The name Jacob means something close to “he grabs the heel,” an expression that could also describe a cheat. His parents name him for what he does before he can even speak.',
          src: 'Sarna · Alter · Westermann'
        },
        meaning: 'God makes his choice before either child has done anything, good or bad. He does not choose Jacob because Jacob is better, since Jacob is the grasping one, and he does not reject Esau for any crime. God simply carries his promise through the younger son, against the rule that says he should not. In Genesis, God’s choosing is <b>not a reward for merit</b>. God is free; he owes nothing to the one he favors, and he does not explain himself to the one he passes over.',
        lenses: {
          theo: 'People find it hardest to accept God’s favor when he gives it before anyone has earned it, because no one can earn it and no one can explain it. God chooses the younger son, the weaker one, the one with no claim, and the only honest response is not pride but bewilderment. If anyone could deserve such favor, it would not be grace.',
          arch: 'Stories of twins or brothers who fight from birth appear all over the world. Genesis has already told of Cain and Abel, and the Romans told of Romulus and Remus, twin brothers who quarreled over the founding of Rome until one killed the other. People tell such stories because they sense that a family or a nation is divided against itself from the start, and that its members must struggle to decide which of them will come first.'
        },
        addr: {
          mode: 'names',
          text: 'You may know what it is to find yourself inside a struggle you did not start, a rivalry or a role that someone handed you before you were old enough to choose it.'
        },
        ask: 'What part of your life was settled before you could choose it, and how have you been carrying it?'
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
          text: 'The birthright gave the eldest son a double share of the inheritance and made him the head of the family; in effect, it was his future. Esau trades it for a bowl of red stew while he is ravenous, and the writer remarks dryly that this is why Esau’s people were called Edom, which means “red.” Jacob, for his part, will not simply share food with his starving brother; he charges him everything he has for it. The writer flatters neither of them.',
          src: 'Sarna · Alter'
        },
        meaning: 'Look at what each brother is willing to lose. Esau gives up his whole future for what his body wants at that very moment, and the writer says that Esau <b>despised his birthright</b>, treating something lasting as worthless next to a craving. Jacob, meanwhile, will not feed his own brother without a deed of sale. Jacob gains the right to carry God’s promise, but he gains it through a cold bargain between a man who sells his future and a man who exploits his brother’s hunger.',
        misreading: {
          named: 'Jacob is the hero of this scene, and Esau is a fool who got what he deserved.',
          why: 'The writer tells a harder story than that. Esau is reckless, but Jacob is a manipulator who takes advantage of a starving man, and the writer never pretends otherwise. Being chosen by God is not the same as being good. Throughout the story of Jacob the writer shows God favoring a man who has to be changed again and again.'
        },
        addr: {
          mode: 'names',
          text: 'You may recognize both moves in this scene. One is trading something lasting for something you wanted right away. The colder one is using another person’s need as your leverage. Our appetites are loud and our future is quiet, so we rarely notice that we are making a trade while we make it.'
        },
        ask: 'Is there something lasting that you have been tempted to spend on an immediate hunger? What is that hunger really for?'
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
          text: 'Genesis 26 is the only chapter in which Isaac is the main character, and almost everything in it repeats what happened to his father. There is a famine, as there was in Abraham’s day; Isaac tells the local king that his wife is his sister, as Abraham did; and he reopens the wells his father had dug, which the Philistines had filled in, and gives them back the names Abraham had given them. Isaac is the quietest of the patriarchs, and for the most part he walks the road his father already walked, keeping the promise alive rather than carrying it further. Even when God reassures him and tells him not to be afraid, God says he will bless Isaac for the sake of Abraham. Through all of this God keeps his promise intact, even though the man who carries it does very little.',
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
    thread: 'Before Jacob and Esau were born, God told their mother Rebekah that the older twin would serve the younger. In Genesis 27 Rebekah and Jacob decide not to wait for God to bring that about. Instead they trick Isaac, who is old and blind, into giving Jacob the blessing he meant for Esau.',
    closeEnd: 'Jacob now has the blessing, but he has lost his home. He leaves with everything God promised him and with no place where he can stay.',
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
          text: 'In the ancient Near East people treated a father’s deathbed blessing as binding: once he had spoken it, it shaped the future, and he could not take it back. When Rebekah tells Jacob her plan, he does not object that it is wrong. He only worries that he might be caught, since his father might touch him and feel smooth skin where Esau’s was hairy. Rebekah plans the whole deception, perhaps because she remembers what God told her before the boys were born and has decided to make it happen herself. Isaac, blind and old, senses that something is wrong and says that the voice is Jacob’s voice, but he gives the blessing anyway.',
          src: 'von Rad · Alter · Sarna'
        },
        meaning: 'The blessing was God’s to give, and this family takes it by <b>fraud</b>. Jacob gets exactly what God promised before he was born, but he gets it by lying to his blind father while wearing his brother’s clothes. The writer does not pretend that the family God chose was an honest one. Jacob takes as a theft what God meant to give him as a gift, and he will spend the next twenty years of his life paying for it.',
        lenses: {
          theo: 'God’s purpose moves forward in this chapter, but God never approves of the lie that carries it. The writer asks us to hold together two things we would rather keep apart: God’s promise is real, and the people carrying it are liars. In the Christian tradition this is what grace means. God does not give it as a reward for good behavior. He goes on working with people who have not earned it, and he spends years humbling them until they can receive it.',
          arch: 'Jacob is a trickster, a kind of character that people all over the world have told stories about. The Greeks had Hermes, the Norse had Loki, many Native American peoples tell of Coyote, and storytellers in West Africa and the Caribbean tell of Anansi the spider. Each of them wins by cunning what he could never win by strength. In many of these stories the trickster’s cleverness eventually catches up with him, and that happens to Jacob too. He steals the blessing in disguise here, and years later, at a river in the dark, he will have to struggle for a blessing openly, as himself.'
        },
        misreading: {
          named: 'Because everything worked out in the end, Rebekah and Jacob were right to deceive Isaac.',
          why: 'By the end of the chapter the family lies in ruins. Isaac has been betrayed, Esau wants to kill his brother, Jacob has to run for his life, and the writer never tells us that Rebekah saw her favorite son again. The writer records the whole cost. He shows God’s promise moving forward and the deception costing the family almost everything, and he never suggests that the good outcome made the lie good.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us have wanted something badly enough to get it by means we would not want to admit, and then told ourselves that a good outcome would justify how we got it. But we still have to live with what we took, and we rarely find peace with it.'
        },
        ask: 'Have you ever grabbed something you could not wait to be given? What did it cost you, or the people near you?'
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
          text: 'In the world of this story, once a father had spoken his blessing he could not take it back and give it to someone else. So Esau, who has done nothing wrong this time, is simply too late. He says bitterly that his brother is rightly named Jacob, because the name sounds like the Hebrew word for cheating someone by grabbing at his heel, and Jacob has now cheated him twice. When Isaac finally blesses Esau, he can only give him a lesser blessing: Esau will live by the sword, far from the rich land his brother will have.',
          src: 'Westermann · Alter'
        },
        meaning: 'The most human moment in the chapter belongs to the brother who lost. Esau is no innocent himself, since he once sold his birthright for a bowl of stew, but here he cries out loudly and bitterly and begs his father, “Bless me too, my father!” as though there must surely be more than one blessing to give. The writer does not look away from him. He makes us see that God’s choice of Jacob cost a real person something, and he shows us that person standing before his father, weeping and asking for what has already gone to someone else.',
        addr: {
          mode: 'names',
          text: 'Many of us know what it is to arrive too late and ask for something, only to be told that it has already gone to someone else. Being passed over brings its own grief, and the person who loses out is not always the person who did wrong.'
        },
        ask: 'When have you been the one who came too late? What would it mean to grieve that honestly instead of pretending it did not hurt?'
      }
    ]
  },
  {
    id: 'gen-28', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 28:10–22', chapterIndex: 28,
    title: 'The ladder at Bethel',
    thread: 'Jacob is running from Esau, who has sworn to kill him. On his first night alone he lies down in open country with a stone for a pillow, and there God meets him, before Jacob has said a word of apology for what he did.',
    closeEnd: 'God finds Jacob on the run, with nothing to recommend him, and renews the whole promise to him in the dark. Jacob wakes up changed, but he still has a long road ahead of him.',
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
          text: 'Jacob has his dream at Bethel, a real and ancient holy place in Israel. What he sees is probably not a ladder of the kind we keep at home but a great stairway, like the ramps that climbed the sides of Mesopotamian temple towers, which people believed joined earth to heaven. The angels on it go both up and down, so heaven and earth are in constant contact. And the promise God speaks from the top has no conditions attached. God tells Jacob that he will be with him, watch over him, and bring him back to this land. He does not say “if you behave.” He simply says that he will do it.',
          src: 'Sarna · Walton · Westermann'
        },
        meaning: 'God meets Jacob when he is at his lowest and least deserving. Jacob has just cheated his father and robbed his brother, and he is sleeping on the ground with a stone under his head, far from anyone, when God opens heaven above him. Jacob has not repented, apologized, or made any bargain. God simply renews the promise to a man on the run, <b>before</b> Jacob has done anything to earn it. When Jacob wakes up, he says, “Surely the LORD is in this place, and I was not aware of it,” and that may be the truest thing anyone says in the whole story of Jacob.',
        lenses: {
          theo: 'Here God gives his grace before Jacob turns back to him, not after. We tend to assume that God meets us once we have cleaned ourselves up and said we are sorry. In this chapter he comes to a liar in the middle of his escape, in the dark, and binds himself to him anyway. When Jacob does finally change, he will be responding to the grace God has already given him, not paying for it.',
          arch: 'The historian of religion Mircea Eliade used the Latin phrase axis mundi, “the axis of the world,” for the sacred center where people believed heaven and earth touched. Many cultures marked such a place with a temple tower, a holy mountain, or a great tree reaching to the sky. Jacob comes upon one in his sleep, in a stretch of country he thought was empty, and he wakes to say that God was in this place and he did not know it. People in many ages have made the same discovery, that they could meet God at the bleakest stopping place along the road.'
        },
        addr: {
          mode: 'names',
          text: 'Many of us know what it is to run from something we did, and to find ourselves in the bleakest stretch of the road, sure that we are alone. Jacob found that God was there with him, though he had not known it, and his not knowing did not make it any less true.'
        },
        ask: 'Is there a bleak place in your life that you are only trying to get through? What would change if you looked for God there?'
      }
    ]
  },
  {
    id: 'gen-29', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 29', chapterIndex: 29,
    title: 'Leah and Rachel',
    unitLabel: 'Scene',
    thread: 'Jacob, who has deceived others all his life, now meets a man who deceives him. His uncle Laban gives him the older daughter, Leah, in the dark, when Jacob expected the younger, Rachel, and so Laban makes him honor the very custom Jacob broke when he took his older brother’s blessing. Meanwhile Leah, the wife Jacob did not want, pours her longing into the names she gives her sons.',
    closeEnd: 'God’s promise will pass through Leah, the wife no one chose. Her fourth son, Judah, is the one through whom it will run.',
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
          text: 'Laban tricks Jacob in the same way Jacob once tricked his own family. Jacob took the rights that belonged to the firstborn son; now Laban gives him the firstborn daughter, hidden by the dark and a wedding veil. When Jacob protests, Laban answers that in their country people do not give the younger daughter in marriage before the older. Jacob, the younger son who put himself ahead of his older brother, now hears his own wrong described back to him as a law. In that culture a man paid a price for his bride, and Jacob had agreed to work seven years for Rachel. Now he must work seven more to have her as well.',
          src: 'Alter · Sarna'
        },
        meaning: 'Now the trickster is tricked, and the writer clearly enjoys the symmetry. Jacob took advantage of his father’s blindness and his brother’s hunger, and now he wakes in the morning to find that he is the one who was fooled in the dark. He demands of Laban, “Why have you deceived me?” and those are almost the very words his father and brother could have said to him. People who deceive others are often deceived in turn, and being <b>deceived</b> himself is the first thing that ever slows Jacob down.',
        lenses: {
          theo: 'Readers have long noticed a kind of moral law at work in the Jacob story: before God can change the deceiver, Jacob has to be deceived himself. God is not so much punishing him as letting him suffer the consequences of his own behavior. In this way God holds up a mirror to Jacob until the man who has only ever taken begins, slowly, to be broken down and remade.',
          arch: 'In many old stories a trickster is finally outwitted by someone more cunning than he is, and storytellers have always enjoyed that kind of justice. Jacob took advantage of his father’s blindness and his brother’s hunger, and now a craftier man fools him in the dark. The storytellers seem to believe that a person begins to grow up not by winning but by finally losing at their own game.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us have had done to us the very thing we once did to someone else, and found that it stopped us cold. When that happens, we see ourselves in a mirror that is seldom flattering but usually fair.'
        },
        ask: 'Has something you did to someone come back around to you? What might God be teaching you through it?'
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
          text: 'In Leah’s world a woman’s standing depended on the sons she bore, and she names hers almost as if she were writing in a diary. She names her first three sons with hopes about her husband: that God has seen her misery, that now Jacob will love her, that now at last he will be attached to her. With her fourth son she lets go of Jacob altogether and says, “This time I will praise the LORD,” and she names him Judah. Israel’s royal line will descend from Judah, and so, Christians believe, will the Messiah. The wife Jacob did not want becomes the mother of the tribe God chooses to rule.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'We can read Leah’s whole inner life in the names she gives her children. She aims the first three names at her husband, as pleas: the LORD has seen my misery, surely my husband will love me now, now at last he will be attached to me. With the fourth, something quietly changes, and she says, “This time I will <b>praise</b> the LORD.” She stops naming her sons after a love that is not coming and names this one in praise of God instead. And it is through this son, born when she stops bargaining for her husband’s love, that God carries his promise forward. God does not choose the line of the wife Jacob loved. He chooses the line of the wife nobody chose.',
        lenses: {
          theo: 'In this chapter God pays attention to the sister no one loves. The writer says plainly that when the LORD saw that Leah was unloved, he enabled her to have children. The writer’s sympathy, and Israel’s future, belong to the overlooked sister rather than the favored one. Readers of the whole Bible will recognize the pattern, because God keeps repeating it: the last become first, and the stone the builders rejected becomes the cornerstone.',
          arch: 'The longing to be chosen is one of the most common wounds people carry, and Leah puts that longing into the names of her first three sons, each one a plea to a husband who will not turn to her. With the fourth name she lets the plea go and praises the LORD instead, and that is the son through whom God will carry the promise. Many people have found the same freedom Leah found, which comes when they stop trying to earn a love that is not going to come.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us have kept performing for a love that never came, and some of us know the quieter freedom of finally stopping and resting in God’s love instead.'
        },
        ask: 'Whose love have you been working to earn? What would it free in you to stop?'
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
          text: 'In Genesis 30 the two sisters, Leah and Rachel, compete to give Jacob children. Each gives him her maidservant as a surrogate, and at one point Rachel trades Leah a night with Jacob for some mandrakes, a plant people believed helped a woman conceive. By the end of the chapter Jacob has eleven sons and a daughter, and those sons, together with Benjamin, who is born later, will become the ancestors of the tribes of Israel. Then Jacob outwits Laban in breeding the flocks and grows rich. The writer is not at all sentimental about Israel’s founding family. He shows the tribes of Israel being born out of a bitter, scheming, loveless rivalry, and he does nothing to tidy it up.',
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
          text: 'After twenty years with Laban, Jacob runs away with his wives, his children, and the flocks he has bred away from Laban’s. On the way out Rachel steals her father’s household gods, small figures that families kept in the home, and Laban chases after them. When the two men finally make an agreement at a place called Mizpah, they do not truly reconcile. They pile up a heap of stones as a boundary marker, and Laban says, “May the LORD watch between you and me when we are absent from each other.” People often quote the line as a blessing, but Laban meant it as a warning: two men who do not trust each other are agreeing on a line that neither will cross. Jacob leaves Laban’s household changed, his cunning worn down by twenty hard years, and he goes on toward a harder meeting at the river.',
          src: 'Sarna · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-32', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 32:22–32', chapterIndex: 32,
    title: 'Wrestling at the Jabbok',
    thread: 'On the night before he must face Esau, the brother he cheated, Jacob is left completely alone, and a man wrestles with him until dawn. Jacob comes out of the struggle with a new name and a blessing, and he limps for the rest of his life.',
    closeEnd: 'Jacob crosses the river as Israel, a name that means “he strives with God.” He walks toward the reunion he dreads with a wound in his hip, and for the first time in his life he cannot run.',
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
          text: 'Jacob has dreaded meeting Esau for twenty years, and on the night before, he sends everyone he loves across the river ahead of him and stays behind alone in the dark. The writer is deliberately mysterious about who attacks him. He calls the attacker only “a man,” but afterward Jacob names the place Peniel, meaning “face of God,” because he says he has seen God face to face. The new name the man gives him, Israel, means something like “he strives with God” or “God strives.” The same hands that wound Jacob’s hip also bless him, and the writer adds that the Israelites still do not eat the tendon attached to the hip socket, so the whole nation carries a reminder of Jacob’s wound.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'All his life Jacob has won by cunning, and now he meets someone he cannot trick, only hold onto. He wrestles all night, and even after the man wrenches his hip he will not let go until the man blesses him. The blessing he receives is a new name and a limp that never heals. This night is the turning point of Jacob’s whole story. Years ago he stole a blessing in the dark by disguising himself; now he wins one in the dark as himself, by refusing to let go. He walks away both <b>blessed</b> and wounded. No one comes through a real encounter with God unmarked.',
        lenses: {
          theo: 'Jacob receives the blessing and the wound together, from the same grip. God does not bless him by making him stronger. He blesses him by laming him, so that Jacob can no longer live by grasping, and for the rest of his life he limps on a leg that reminds him of that night. He has a new name, and he has lost his swagger. Being blessed by this God can cost that much, and it can heal that much.',
          arch: 'The scholar Joseph Campbell, who compared hero stories from around the world, observed that many of them include a struggle with a guardian at a threshold, a figure the hero must face before he can pass into the next stage of his journey. Jacob’s night at the river fits that pattern. A mysterious figure blocks his way, Jacob must hold on through the dark, and he comes out wounded, with a mark he will carry for the rest of his life. But in Genesis, when morning comes, Jacob realizes that the one he has been wrestling is God himself.'
        },
        misreading: {
          named: 'Jacob defeats God in a fair fight because he is the stronger man.',
          why: 'Jacob prevails only because he will not let go, not because he overpowers anyone, and as soon as the man touches his hip it is plain that strength has nothing to do with it. What Jacob wins is a blessing, because he refuses to face the next day without one, and he pays for it with a wound he carries all his life. He does not triumph over God. He refuses to go on without him.'
        },
        addr: {
          mode: 'names',
          text: 'Many of us know the night before something we dread, when we are alone in the dark and holding on to God, refusing to let go until he blesses us. Jacob came away from that night both blessed and limping, and many people who have truly wrestled with God would say the same of themselves.'
        },
        ask: 'What are you holding on to, refusing to let go until you are blessed? What might holding on cost you?'
      }
    ]
  },
  {
    id: 'gen-33', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 33', chapterIndex: 33,
    title: 'The reunion',
    thread: 'Jacob braces himself to meet the brother who once swore to kill him, and he arranges his family so that some of them might escape if Esau attacks. Esau comes with four hundred men, but he runs to meet Jacob with open arms.',
    closeEnd: 'After twenty years of dread, the brothers meet and embrace, and then they part and never live together again. Their peace is real, but it has limits.',
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
          text: 'Jacob has spent the night wrestling, and at dawn he lines up his family in the order of how much he can bear to lose, with Rachel and Joseph at the back, because Esau is coming with four hundred men. But Esau, who twenty years earlier swore to kill him, runs to Jacob, throws his arms around his neck, and weeps. Jacob’s words to him deliberately echo the night before: “to see your face is like seeing the face of God.” He has just survived seeing God’s face at Peniel, and now he survives seeing his brother’s. And when he presses a gift on Esau, he calls it, in Hebrew, a blessing, the same word for what he once stole, as though he were trying to give it back.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'Jacob has dreaded this meeting for twenty years, and his fear vanishes the moment Esau arrives. The brother he cheated does not want revenge; he wants his brother back, and he runs to him. Jacob has just seen God’s face at the river, and now he says he sees it again in Esau’s, because when the person we wronged chooses to <b>forgive</b> us, that face can look very much like the face of God. Jacob even tries to give back the blessing, calling his gift by that name, as though he could undo the theft by returning it. He has no right to expect forgiveness, and it is exactly what he receives.',
        lenses: {
          theo: 'In this chapter God’s grace comes to Jacob through a human face. First Jacob meets God at Peniel, and then he meets the brother he wronged, and the writer deliberately makes the two meetings echo each other. When someone who had every right to ruin us forgives us instead, we come about as close as we can on earth to standing before God and being welcomed.',
          arch: 'For twenty years Jacob has feared his brother, and when they finally meet, Esau turns out not to be the monster Jacob imagined. People often find the same thing. The longer we run from someone, the more frightening we imagine them to be, and when we finally face them, we may find a person weeping with open arms. The reckoning we brace for is rarely the one we get.'
        },
        misreading: {
          named: 'Jacob and Esau are fully reconciled, and the family is healed for good.',
          why: 'The brothers embrace and weep, but then they go their separate ways at once, and Jacob even tells Esau a half-truth, promising to follow him to Seir and then settling somewhere else. The writer gives us a peace that is real but incomplete: Jacob’s fear is gone, but the brothers still live apart. The writer refuses to give the story a fairy-tale ending, and he means that refusal.'
        },
        addr: {
          mode: 'names',
          text: 'Many of us know the dread of facing someone we have wronged, and the way we brace ourselves for the blow. Some of us also know the surprise of being met with open arms instead. The longer we run from someone, the more frightening we make them in our minds. When we finally face them, they are often less fearsome than we expected, and sometimes they are weeping.'
        },
        ask: 'Who are you bracing yourself to face? What would change if you imagined them meeting you with open arms?'
      }
    ]
  },
  {
    id: 'gen-34', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 34', chapterIndex: 34,
    title: 'Dinah',
    thread: 'Shechem, the son of a local ruler, rapes Jacob’s daughter Dinah, and from that moment the men around her talk about everyone except her. They negotiate, deceive, and kill in her name, and Dinah herself never says a single word.',
    closeEnd: 'No one in this chapter acts rightly, and the writer never lets us hear from the woman the chapter is supposedly about. He records the whole story and approves of none of it.',
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
          text: 'The men in this chapter use deceit, the same weapon Jacob’s family has used throughout his story, and this time it leads to a massacre. Jacob’s sons answer Shechem’s family deceitfully and persuade all the men of the city to be circumcised. Then, on the third day, while the men are still in pain, Simeon and Levi attack the city and kill them. We should also see who never speaks. The writer names Dinah in the first verse, and after that other people act on her, argue over her, and avenge her, but we never hear her voice. Jacob, for his part, reacts not to his daughter’s suffering but to the danger the killing has brought on him.',
          src: 'Alter · Westermann · Trible'
        },
        meaning: 'In this chapter the men around a woman turn her violation into a story about themselves. After Shechem rapes Dinah, every man around her takes up her cause and, in doing so, pushes her out of the story. Her brothers use her pain as an excuse for slaughter; Jacob worries about his own reputation; and at the end of the chapter the men are still arguing about her honor, while she has not said a word since the first verse. The writer sets two horrors side by side, the rape and the revenge, and he will not let us treat either one as the answer to the other.',
        lenses: {
          theo: 'The writer does not look away from what happened to Dinah, and he does not tidy it up. God says nothing in this chapter, he rescues no one, and no one receives a fitting justice, and the writer’s silence about God is itself a kind of testimony. The writers of the Bible were willing to record the world as brutal as it is, even inside the family God chose, and to let readers feel how wrong it is without handing them a moral that makes it easier to bear. Jacob does not forget what his sons did. On his deathbed he curses the violence of Simeon and Levi by name.',
          arch: 'In this chapter we can watch how quickly other people take up a real wound for their own causes. Everyone claims to act for Dinah, and no one asks her what she wants. People have silenced others this way for as long as there have been stories: they speak so loudly on someone’s behalf that the person disappears, and they call it honor.'
        },
        misreading: {
          named: 'Dinah’s brothers are the heroes of the chapter, rightly avenging their sister.',
          why: 'The writer says plainly that the brothers answered deceitfully. He ends the chapter with their self-justifying question rather than any word of approval, and he has Jacob rebuke them at once and curse them again at the end of his life. The writer presents the revenge as one more atrocity, not a triumph, and his sympathy stays with the young woman who is never allowed to speak, not with the men who kill in her name.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us know what it is to have our own pain taken up by others as a cause, and to have them speak for us so loudly that we disappear from our own story. Being avenged is not the same as being heard, and people easily confuse the two.'
        },
        ask: 'Have you seen someone’s pain, yours or another person’s, used as a banner in a fight that stopped being about the person who was hurt?'
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
          text: 'Jacob returns to Bethel, where decades earlier he dreamed of the stairway to heaven, and there God confirms his new name, Israel, in broad daylight. At the river the mysterious man gave him that name in the dark; now God speaks it to him openly. But Jacob’s homecoming is full of graves. Rachel dies giving birth to her second son, and with her last breath she names him Ben-oni, “son of my sorrow.” Jacob quietly renames him Benjamin, “son of my right hand.” Then Isaac dies, and his sons Esau and Jacob bury him together, just as Isaac and Ishmael once buried Abraham together. The writer closes this part of Jacob’s story the way he opened it, with the two brothers who were rivals from birth standing together at their father’s grave.',
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
          text: 'Before the writer leaves Esau behind for good, he gives him a whole chapter, a long list of his descendants and of the chiefs and kings of Edom, the nation that came from him. In this quiet way the writer honors the brother who was passed over. He does not erase the son who lost the blessing. He shows Esau becoming a nation in his own right, one that had kings long before Israel did. God carried his promise through Jacob, but he did not treat Esau as nothing. The writer ends Esau’s account with dignity and then turns, for the rest of Genesis, to the sons of Israel.',
          src: 'Sarna · Westermann'
        }
      }
    ]
  },
  {
    id: 'gen-37', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 37', chapterIndex: 37,
    title: 'Joseph sold',
    unitLabel: 'Scene',
    thread: 'Jacob loves his son Joseph more than his other sons and gives him an ornate robe to show it, and Joseph makes things worse by telling his brothers dreams in which they bow down to him. The brothers come to hate him so much that they throw him into a pit and sell him as a slave. Jacob once deceived his own father, and now his sons deceive him in the same way, with a goat and Joseph’s robe dipped in its blood.',
    closeEnd: 'Years ago Jacob fooled his blind father Isaac with a goat and a borrowed garment, and now his sons fool him with a goat and Joseph’s garment. Jacob believes his favorite son is dead, and through all of it God says nothing.',
    passages: [
      {
        label: 'One', ref: '37:3–11', kind: 'scene', form: 'prose', title: 'The dreamer',
        verses: [
          { n: 3, text: 'Now Israel loved Joseph more than his other sons, because Joseph had been born to him in his old age; so he made him a robe of many colors.' },
          { n: 4, text: 'When Joseph’s brothers saw that their father loved him more than any of them, they hated him and could not speak a kind word to him.' },
          { n: 5, text: 'Then Joseph had a dream, and when he told it to his brothers, they hated him even more.' },
          { n: 8, text: '“Do you intend to reign over us?” his brothers asked. “Will you actually rule us?” So they hated him even more because of his dream and his statements.' },
          { n: 11, text: 'And his brothers were jealous of him, but his father kept in mind what he had said.' }
        ],
        ground: {
          kind: 'historical',
          text: 'The Hebrew phrase for Joseph’s garment is ketonet passim, and no one is sure exactly what it means. The old Greek translation rendered it as a coat of many colors, but most scholars now think it was a long robe with sleeves, the kind of garment that 2 Samuel says the king’s daughters wore. Either way, no one who wore it was expected to work in the fields, so Jacob was marking Joseph as his heir over his older brothers. Families like this one lived as semi-nomadic shepherds on the edges of Canaan and moved their flocks from one grazing ground to another, which is why the brothers are days away from home, at Dothan, when Joseph comes looking for them.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'Favoritism has run through this family for generations, and Jacob of all people should know the harm it does. His father Isaac favored Esau, his mother Rebekah favored Jacob, and the rivalry that followed tore the family apart. Yet here Jacob dresses one son in a robe that tells everyone Joseph matters more than his brothers. The writer does not make Joseph innocent either. Joseph is gifted, but he is also insufferable, and he tells his brothers his dreams of them bowing down to him. Jacob has passed the old <b>wound</b> to a third generation, and no one in his household remembers how to be kind.',
        lenses: {
          theo: 'We tend to repeat on our children the patterns we hated in our parents, unless someone pays a real price to break them. Isaac played favorites, and now Jacob does the same, and before this family begins to heal, its members will very nearly destroy one another. In this story God works slowly, across generations, and he works through the wreckage the family makes.',
          arch: 'Many old stories feature a child whom a parent singles out and marks as special, and whose brothers or sisters resent the favor. The child usually has a real gift, along with the pride that tends to come with it, and the others turn their anger on him. Joseph fits that pattern closely. Jacob marks him with the robe, Joseph flaunts his dreams, and the brothers use the robe itself as part of their revenge.'
        },
        addr: {
          mode: 'names',
          text: 'Most of us carry a family pattern we swore we would never repeat, and many of us have caught ourselves repeating it anyway. Unless we notice what we are doing, we tend to pass on to others the wounds that others passed on to us.'
        },
        ask: 'Which pattern from the family that raised you are you most afraid of repeating, and where do you already see it in yourself?'
      },
      {
        label: 'Two', ref: '37:18–34', kind: 'scene', form: 'prose', title: 'The pit',
        verses: [
          { n: 19, text: '“Here comes that dreamer!” they said to one another.' },
          { n: 20, text: '“Come now, let us kill him and throw him into one of the pits. We can say that a vicious animal has devoured him. Then we shall see what becomes of his dreams!”' },
          { n: 23, text: 'So when Joseph came to his brothers, they stripped him of his robe—the robe of many colors he was wearing—' },
          { n: 24, text: 'and they took him and threw him into the pit. Now the pit was empty, with no water in it.' },
          { n: 27, text: 'Come, let us sell him to the Ishmaelites and not lay a hand on him; for he is our brother, our own flesh.” And they agreed.' },
          { n: 28, text: 'So when the Midianite traders passed by, his brothers pulled Joseph out of the pit and sold him for twenty shekels of silver to the Ishmaelites, who took him to Egypt.' },
          { n: 31, text: 'Then they took Joseph’s robe, slaughtered a young goat, and dipped the robe in its blood.' },
          { n: 33, text: 'His father recognized it and said, “It is my son’s robe! A vicious animal has devoured him. Joseph has surely been torn to pieces!”' }
        ],
        ground: {
          kind: 'historical',
          text: 'Twenty pieces of silver was a realistic price for a young slave, close to the rates recorded in documents from the early second millennium BCE. The brothers sell Joseph to a caravan of traders on the great trade road from Gilead down to Egypt, carrying gum, balm, and myrrh, the costly resins of the spice trade. From Egyptian records, historians know that Egyptian households bought many foreign slaves, and a young man from Canaan could well have ended up in an official’s household, as Joseph does.',
          src: 'Alter · Sarna'
        },
        meaning: 'The members of this family have deceived one another for generations, and now Jacob’s sons turn that deceit on him. Jacob once fooled his blind father with a goat and a borrowed garment, and now his sons fool him with a goat and Joseph’s garment, and he loses the son he loved most. Jacob built his life on a lie, and his sons hand the same lie back to him. Through the whole disaster, and for the first time in Jacob’s story, God is <b>silent</b>. He sends no dream, no voice, no angel, and no rescue. Joseph goes down into Egypt, and God does not speak for years.',
        lenses: {
          theo: 'Here begins the strangest account of God’s providence in Genesis. God performs no miracle in this chapter and does not intervene. The brothers commit a vicious crime, and God says nothing for a long time. He walked and spoke openly with Abraham and Jacob, but here he goes quiet, and if he is at work, he is working hidden inside the wreckage, toward an end that no one in the scene can see.',
          arch: 'The scholar Joseph Campbell observed that hero stories around the world send their hero down into some dark place, a cave, the belly of a beast, or an underworld, before he can rise again. Joseph’s brothers strip him of his robe, throw him into an empty cistern, and sell him to strangers who carry him away, and this is the first stage of his descent. Before the writer raises Joseph up, he takes him all the way down.'
        },
        addr: {
          mode: 'names',
          text: 'Many of us have lived through a stretch when the thing we most dreaded happened and God seemed to say nothing at all to explain it.'
        },
        ask: 'Is there a place in your life where God seems to have gone quiet? What would change if you trusted that his silence does not mean he is absent?'
      }
    ]
  },
  {
    id: 'gen-38', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 38', chapterIndex: 38,
    title: 'Judah and Tamar',
    thread: 'The writer leaves Joseph for one chapter to follow his brother Judah. Judah wrongs his widowed daughter-in-law Tamar by withholding what the custom of the time owed her. Tamar, who has no power left, takes justice into her own hands, and in the end Judah admits that she is more righteous than he is.',
    closeEnd: 'Judah says, “She is more righteous than I.” The man who sold his brother learns what righteousness means from a woman he tried to burn, and through her bold plan Tamar becomes an ancestor of King David.',
    passages: [
      {
        ref: '38:6–26', kind: 'scene', form: 'prose', title: 'She is more righteous than I',
        verses: [
          { n: 7, text: 'But Er, Judah’s firstborn, was wicked in the sight of the LORD; so the LORD put him to death.' },
          { n: 11, text: 'Then Judah said to his daughter-in-law Tamar, “Live as a widow in your father’s house until my son Shelah grows up.” For he thought, “He may die too, like his brothers.” So Tamar went to live in her father’s house.' },
          { n: 14, text: 'she removed her widow’s garments, covered her face with a veil to disguise herself, and sat at the entrance to Enaim, which is on the way to Timnah. For she saw that although Shelah had grown up, she had not been given to him as a wife.' },
          { n: 18, text: '“What pledge should I give you?” he asked. She answered, “Your seal and your cord, and the staff in your hand.” So he gave them to her and slept with her, and she became pregnant by him.' },
          { n: 24, text: 'About three months later, Judah was told, “Your daughter-in-law Tamar has prostituted herself, and now she is pregnant.” “Bring her out!” Judah replied. “Let her be burned to death!”' },
          { n: 25, text: 'As she was being brought out, Tamar sent a message to her father-in-law: “I am pregnant by the man to whom these items belong.” And she added, “Please examine them. Whose seal and cord and staff are these?”' },
          { n: 26, text: 'Judah recognized the items and said, “She is more righteous than I, since I did not give her to my son Shelah.” And he did not have relations with her again.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Under an ancient custom that later appears in Israel’s law as levirate marriage, when a man died without a son, his brother was expected to father a son with the widow, to carry on the dead man’s name and secure her future. Judah fails Tamar twice and then leaves her stranded, a childless widow with no standing, no protector, and no legal way forward. So Tamar takes the only course left to her. She disguises herself, sleeps with Judah, and keeps his seal and staff as proof. When Judah condemns her to be burned for becoming pregnant, the very thing he himself took part in, she produces his seal. Their son Perez becomes an ancestor of David, and the Gospel of Matthew names Tamar in the family line of Jesus.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'Judah is a powerful man who owes Tamar a future and quietly withholds it, and the law gives her no way to make him pay. So she seeks justice the only way left to her, by cunning and at the risk of her life. When Judah orders her killed for immorality, she holds up his own seal and stops him. “She is more righteous than I,” he says, and these are the first true words he speaks in the whole story. The woman with no <b>power</b> teaches the man who holds all of it, and God carries the chosen family line forward not through the respectable man but through the widow he tried to destroy.',
        lenses: {
          theo: 'Again and again the biblical writers side with the powerless person who refuses to disappear quietly. Tamar has no standing and yet she is the righteous one, while Judah has everything and is in the wrong, and in the end he is honest enough to say so. God does not carry his promise forward here through the strong and proper. He carries it through a wronged woman’s desperate and righteous gamble.',
          arch: 'Jacob used cunning to take what was not his, but Tamar uses cunning to claim what she is owed, after Judah has quietly pushed her out of the family’s future. The Bible tells several stories of a wronged or vulnerable woman who wins justice by her wits, and in the book of Ruth the townspeople even name Tamar when they bless Ruth’s marriage. Like Ruth after her, Tamar is an outsider pushed to the margins who refuses to stay there.'
        },
        misreading: {
          named: 'This chapter is an unpleasant detour that interrupts the real story of Joseph.',
          why: 'The editor placed it here on purpose. Judah has just arranged for his brother Joseph to be sold, and in this chapter he learns what righteousness is from Tamar and begins to change. Later the same Judah will step forward and offer his own life in place of his youngest brother Benjamin’s. His change begins in the chapter that only looks like an interruption.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us know what it is to be owed something by a person who has power over us, with no clean or easy way to claim it. Often the person everyone has written off is the one telling the truth.'
        },
        ask: 'Is there something you were owed that someone quietly kept from you, and what would it take for you to claim it honestly?'
      }
    ]
  },
  {
    id: 'gen-39', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 39', chapterIndex: 39,
    title: 'Potiphar’s wife',
    thread: 'In Egypt Joseph is a slave, and his honesty and skill raise him to the head of his master’s household. Then his integrity brings him down. He refuses the advances of his master’s wife, she accuses him falsely, and he goes to prison for doing the right thing, yet the writer insists that the LORD was still with him.',
    closeEnd: 'Joseph does the right thing, and it costs him his freedom. The writer begins and ends the chapter with the same words, that the LORD was with Joseph, and he says them about the prison just as firmly as about the fine house.',
    passages: [
      {
        ref: '39:2–21', kind: 'scene', form: 'prose', title: 'The cloak left behind',
        verses: [
          { n: 2, text: 'And the LORD was with Joseph, and he became a successful man, serving in the household of his Egyptian master.' },
          { n: 6, text: 'So Potiphar left all that he owned in Joseph’s care; he did not concern himself with anything except the food he ate. Now Joseph was well-built and handsome,' },
          { n: 7, text: 'and after some time his master’s wife cast her eyes upon Joseph and said, “Sleep with me.”' },
          { n: 9, text: 'No one in this house is greater than I am. He has withheld nothing from me except you, because you are his wife. So how could I do such a great evil and sin against God?”' },
          { n: 12, text: 'She grabbed Joseph by his cloak and said, “Sleep with me!” But leaving his cloak in her hand, he escaped and ran outside.' },
          { n: 20, text: 'So Joseph’s master took him and had him thrown into the prison where the king’s prisoners were confined. While Joseph was there in the prison,' },
          { n: 21, text: 'the LORD was with him and extended kindness to him, granting him favor in the eyes of the prison warden.' }
        ],
        ground: {
          kind: 'historical',
          text: 'The writer frames the chapter at both ends with the same plain statement, that the LORD was with Joseph, and he says it about the prison as clearly as about his master’s house. Between those two statements Joseph rises to run the whole estate of Potiphar, an officer of Pharaoh. When Potiphar’s wife tries to seduce him, Joseph refuses, not because he fears being caught but because it would be a sin against God. Angry at being refused, she lies about him and keeps his cloak as false evidence. This is the second time someone has used a garment of Joseph’s to tell a lie about him.',
          src: 'Sarna · Alter · Westermann'
        },
        meaning: 'Joseph does exactly the right thing and is punished for it. He refuses his master’s wife because giving in would be a sin against God, and for his integrity he loses his cloak and lands in a cell on the strength of her lie. Most of us want to believe that doing right will keep us safe, and the writer will not let us believe it. Yet he begins and ends the disaster with the same sentence: the LORD was with Joseph, in the house where he rose and in the prison where he fell. The writer wants us to see that God’s <b>presence</b> is not the same as God’s protection.',
        lenses: {
          theo: 'The writer says “the LORD was with him” as firmly about the prison as about the house, and in doing so he quietly changes what it means to be blessed. God does not spare Joseph from injustice; he goes with him through it. Joseph stays faithful, and God does not reward him with safety. God gives him company in the dark instead, which is a harder kind of grace and, in its way, a deeper one.',
          arch: 'Scholars have long compared this scene to an Egyptian story called the Tale of Two Brothers, in which a married woman tries to seduce her husband’s younger brother and, when he refuses her, accuses him falsely. The Greeks told similar stories, such as the tale of Phaedra and Hippolytus. In Genesis the scene also continues Joseph’s descent. His brothers used his robe to deceive their father, and now Potiphar’s wife uses his cloak to deceive her husband. Joseph went down into the pit, and now he goes lower still, into prison, before God raises him up.'
        },
        misreading: {
          named: 'If Joseph had truly been faithful, God would have kept him out of prison.',
          why: 'The writer says the opposite in the same breath: the LORD was with Joseph, and Joseph went to prison. Joseph’s faithfulness and his suffering are both true at once. The writer built this chapter to deny that doing the right thing buys us safety, and to claim something stranger and sturdier instead, that God stays with the faithful even when they suffer for it.'
        },
        addr: {
          mode: 'names',
          text: 'Many of us have done the right thing and paid for it, with no reward to show, and have wondered whether God was really with us. If he was, he was with us in a way that did not spare us, and that may be the better promise.'
        },
        ask: 'When has doing the right thing cost you? What would change if you believed that God was offering you his presence in it, rather than protection from it?'
      }
    ]
  },
  {
    id: 'gen-40', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 40 (selected)', chapterIndex: 40,
    title: 'The cupbearer and the baker',
    passages: [
      {
        ref: 'Genesis 40 (selected)', kind: 'scene', form: 'prose', title: 'The cupbearer and the baker',
        verses: [
          { n: 8, text: '“We both had dreams,” they replied, “but there is no one to interpret them.” Then Joseph said to them, “Don’t interpretations belong to God? Tell me your dreams.”' },
          { n: 14, text: 'But when it goes well for you, please remember me and show me kindness by mentioning me to Pharaoh, that he might bring me out of this prison.' },
          { n: 23, text: 'The chief cupbearer, however, did not remember Joseph; he forgot all about him.' }
        ],
        ground: {
          kind: 'historical',
          text: 'In prison Joseph interprets the dreams of two of Pharaoh’s officials, his cupbearer and his baker, and his interpretations come true: Pharaoh restores the cupbearer to his post and hangs the baker. Joseph asks only one thing in return, that the cupbearer remember him to Pharaoh. The cupbearer walks out free and forgets him for two more years. This is the lowest point of Joseph’s story. He does the one thing he can, accurately and generously, and the one man who could free him puts him out of mind, while Joseph, whose gift will one day save a nation, sits forgotten in a cell.',
          src: 'Sarna · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-41', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 41 (selected)', chapterIndex: 41,
    title: 'From the pit to the palace',
    thread: 'Two years after his release, the cupbearer finally remembers Joseph. Pharaoh has dreamed dreams that no one in Egypt can explain, so his servants rush Joseph out of the dungeon to stand before him. Joseph interprets the dreams, and Pharaoh sets him over all Egypt in a single day.',
    closeEnd: 'Joseph’s brothers threw the dreamer into a pit, and now he stands second only to Pharaoh. When his sons are born, he names them not for being healed but for being made fruitful in the very land where he suffered.',
    passages: [
      {
        ref: '41:15–52', kind: 'scene', form: 'prose', title: 'Pharaoh’s dreams',
        verses: [
          { n: 15, text: 'Pharaoh said to Joseph, “I had a dream, and no one can interpret it. But I have heard it said of you that when you hear a dream you can interpret it.”' },
          { n: 16, text: '“I myself cannot do it,” Joseph replied, “but God will give Pharaoh a sound answer.”' },
          { n: 39, text: 'Then Pharaoh said to Joseph, “Since God has made all this known to you, there is no one as discerning and wise as you.' },
          { n: 40, text: 'You shall be in charge of my house, and all my people are to obey your commands. Only with regard to the throne will I be greater than you.”' },
          { n: 51, text: 'Joseph named the firstborn Manasseh, saying, “God has made me forget all my hardship and all my father’s household.”' },
          { n: 52, text: 'And the second son he named Ephraim, saying, “God has made me fruitful in the land of my affliction.”' }
        ],
        ground: {
          kind: 'historical',
          text: 'Many ancient peoples told stories of a captive or servant who rose to power at a foreign court by solving a problem the king’s own wise men could not, and Joseph’s rise from the dungeon to the second seat in Egypt follows that pattern. Joseph changes it in one way, because the first thing he tells Pharaoh is that he cannot interpret the dream himself, but God will give the answer. The names he gives his sons tell his own story in brief. Manasseh means “God has made me forget,” and Ephraim means “God has made me fruitful in the land of my affliction.” Joseph does not say that God healed him. He says that he bore fruit in the place that hurt him.',
          src: 'Sarna · Alter · Westermann'
        },
        meaning: 'Pharaoh’s cupbearer finally remembers Joseph, and Joseph rises in a single day. The first thing he does with his gift is refuse the credit for it, telling Pharaoh that God, not Joseph, will give the answer. Later Joseph names his sons, which in Genesis is how a person says what a season of life has meant. He does not name the first “God has undone the harm,” but “God has made me forget,” because the harm was real, though it no longer grips him as it did. He does not name the second “God has taken me out of my affliction,” but “God has made me <b>fruitful</b> in the land of my affliction.” Joseph bore fruit in the very place that wounded him, not after he left it but while he was still there. In those two names he sets out a whole understanding of suffering.',
        lenses: {
          theo: 'God does not raise Joseph as a reward for his suffering; he simply raises him after it, and Joseph sees God at work in both. No one ever explains to Joseph why he had to endure the pit and the prison. Instead, late in his life, God gives him a place to stand from which he can see that God was carrying him even while God was silent. To be made fruitful in the land of affliction is not the same as being rescued from it, and the writer wants us to notice the difference.',
          arch: 'Joseph Campbell observed that after the hero of a myth goes down into the depths, he usually comes back carrying something he could only have gained there. Joseph fits that pattern. He went down into the pit and the prison, and he comes back up with the wisdom and skill to rule Egypt and to save it from famine. What looked like his ruin turns out to have been his training.'
        },
        addr: {
          mode: 'names',
          text: 'There is a difference between being healed of a hard season and being made fruitful in the middle of it, and many of us have known the second without the first.'
        },
        ask: 'Is there a hard place in your life that you may be meant not to escape, but to grow something in?'
      }
    ]
  },
  {
    id: 'gen-42', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 42–44', chapterIndex: 42, crossesChapters: true,
    title: 'The brothers come',
    unitLabel: 'Scene',
    thread: 'A famine drives Joseph’s brothers to Egypt to buy grain, and without knowing it they bow down to the brother they sold. Joseph tests them severely, until Judah, who once proposed selling Joseph, offers to become a slave himself in place of their youngest brother, Benjamin.',
    closeEnd: 'Years ago Judah said, “Let us sell him.” Now he asks to stay in Egypt as a slave in place of the boy. The members of this family have deceived one another for generations, and now one of them offers himself for his brother. Joseph can no longer keep up his disguise.',
    passages: [
      {
        label: 'One', ref: '42:6–24', kind: 'scene', form: 'prose', title: 'The dream comes true',
        verses: [
          { n: 6, text: 'Now Joseph was the ruler of the land; he was the one who sold grain to all its people. So when his brothers arrived, they bowed down before him with their faces to the ground.' },
          { n: 8, text: 'Although Joseph recognized his brothers, they did not recognize him.' },
          { n: 21, text: 'Then they said to one another, “Surely we are being punished because of our brother. We saw his anguish when he pleaded with us, but we would not listen. That is why this distress has come upon us.”' },
          { n: 24, text: 'And he turned away from them and wept. When he turned back and spoke to them, he took Simeon from them and had him bound before their eyes.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Egypt was the granary of the region. Its harvests depended on the yearly flooding of the Nile rather than on rain, so when drought starved Canaan, Egypt could still have grain, and hungry neighbors came down to buy it. Historians have Egyptian evidence that such outsiders came. In one letter a border official reports that he let shepherd tribes from Edom pass into Egypt to keep themselves and their flocks alive, and a tomb painting at Beni Hasan shows a band of travelers from Canaan arriving with their goods. Joseph’s work of storing grain in the good years against the lean ones fits what historians know of how the Egyptian state managed its surplus.',
          src: 'Alter · Sarna'
        },
        meaning: 'The brothers stand before the one man who can feed them or let them starve, and they do not know he is the boy they threw into a pit. Joseph tests them, but he is not only being cruel. He is asking the real question, whether they are still the same men who sold him. During the test he hears them admit aloud the guilt they had buried, that they ignored his anguish when he pleaded with them, and he has to leave the room to weep. This family does not need revenge. Its members need to learn whether the men who sold one brother will now <b>protect</b> another.',
        addr: {
          mode: 'names',
          text: 'Some of us have suddenly found ourselves with power over people who once had power over us, and have had to decide what to do with it. Many of us have also found that old guilt comes back to us at the very moment we can least afford it.'
        },
        ask: 'What guilt of yours still comes back when you are under pressure, and what do you need to face about it?'
      },
      {
        label: 'Two', ref: '44:18–34', kind: 'scene', form: 'prose', title: 'Judah offers himself',
        verses: [
          { n: 18, text: 'Then Judah approached Joseph and said, “Sir, please let your servant speak personally to my lord. Do not be angry with your servant, for you are equal to Pharaoh himself.' },
          { n: 33, text: 'Now please let your servant stay here as my lord’s slave in place of the boy. Let him return with his brothers.' },
          { n: 34, text: 'For how can I go back to my father without the boy? I could not bear to see the misery that would overwhelm him.”' }
        ],
        ground: {
          kind: 'historical',
          text: 'Joseph has his steward hide his silver cup in Benjamin’s sack, and the steward tells the brothers that his master uses the cup for divination. In Egypt and Mesopotamia people tried to read the future by pouring oil or other substances into a cup of liquid and watching how they moved. To the brothers, the cup marks Joseph as a full Egyptian official, a man whose insight they cannot hope to escape.',
          src: 'Alter · von Rad'
        },
        meaning: 'The turning point of the whole story belongs to Judah, not Joseph. Years ago Judah proposed selling Joseph, and now he offers to stay in Egypt as a slave in place of Benjamin. He cannot bear to watch his father grieve the loss of another son, so he offers up his own freedom for the boy’s. For four generations the members of this family deceived one another, and now one of them lays down his life for his brother. This is the change Joseph has been testing for, and as soon as he sees it, he can no longer keep up his <b>disguise</b>.',
        lenses: {
          theo: 'Joseph’s power does not heal this family. Judah heals it, by repenting and by being willing to take the place of the brother in danger. Over many chapters the writer has carried Judah from the man who sold one brother to the man who would become a slave for another. Later, Israel’s royal line will run through Judah, not through the favored Joseph, and Christians have traced the line of the Messiah through him as well. In this family, the brother who repents does what the brother with power cannot.',
          arch: 'Judah offers himself as a substitute, stepping into the place of someone who has been condemned. Readers find this idea again and again in the Bible, beginning with the ram that God provided in place of Isaac and continuing through the sacrifices of Israel’s worship, and Christians have seen it fulfilled in Jesus. What makes Judah’s offer so striking is that the man who once betrayed one brother is the same man who, now changed, offers to save another.'
        },
        misreading: {
          named: 'Joseph tests his brothers only to toy with them and enjoy his revenge.',
          why: 'Joseph keeps leaving the room to weep, and testing his brothers is the only way he can learn whether they have truly changed. As soon as Judah proves that they have, by offering himself, Joseph can no longer keep up the disguise and breaks down. Joseph is being discerning, not cruel, and the testing costs him dearly.'
        },
        addr: {
          mode: 'names',
          text: 'Some of us know what it is to step into the gap for someone, taking a loss on ourselves so that a person we love does not have to bear it. Sometimes the person who did the worst wrong becomes the one who can finally help set it right.'
        },
        ask: 'Where could you step into the gap for someone, and what would it cost you to do it?'
      }
    ]
  },
  {
    id: 'gen-45', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 45', chapterIndex: 45,
    title: 'I am Joseph',
    thread: 'Joseph can no longer hold back. He sends the Egyptians out of the room and weeps so loudly that they hear him through the walls. Then he tells his terrified brothers who he is, and he says something that changes how they, and we, understand everything that has happened, without excusing any of it.',
    closeEnd: 'Joseph does not deny what his brothers did. He names it plainly, telling them that they sold him, and in the same breath he refuses to let their crime have the last word. God, he tells them, sent him ahead of them to save lives.',
    passages: [
      {
        ref: '45:3–8', kind: 'scene', form: 'prose', title: 'It was not you, but God',
        verses: [
          { n: 3, text: 'Joseph said to his brothers, “I am Joseph! Is my father still alive?” But they were unable to answer him, because they were terrified in his presence.' },
          { n: 4, text: 'Then Joseph said to his brothers, “Please come near me.” And they did so. “I am Joseph, your brother,” he said, “the one you sold into Egypt!' },
          { n: 5, text: 'And now, do not be distressed or angry with yourselves that you sold me into this place, because it was to save lives that God sent me before you.' },
          { n: 8, text: 'Therefore it was not you who sent me here, but God, who has made me a father to Pharaoh—lord of all his household and ruler over all the land of Egypt.' }
        ],
        ground: {
          kind: 'historical',
          text: 'The Joseph story stands apart from the rest of Genesis. It is one long, continuous tale rather than a chain of separate episodes, and many scholars think later writers shaped it in the spirit of Israel’s wisdom tradition. Its hero is a Hebrew who rises at a foreign court and stays faithful there, the same pattern that the writers of Daniel and Esther later used for a people learning to live under empires that were not their own. Those writers shared the belief at the center of Joseph’s story, that God can turn harm toward survival.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'The first thing Joseph says is “I am Joseph,” and the next is that he is the brother they sold into Egypt. He does not pretend their betrayal never happened; he names it to their faces. Then he does something that can take a lifetime to learn: he refuses to let the betrayal be the whole truth. He tells them that it was not they who sent him there, but God. He does not call what they did good, because it was evil. He tells them that God was at work inside it anyway, turning even their crime toward saving lives. Joseph is not denying the wrong or excusing it. He has found a way of understanding his life that is large enough to hold the worst thing that ever happened to him without letting it <b>destroy</b> him.',
        lenses: {
          theo: 'This is how the writer of Genesis understands God’s providence. God does not prevent the evil, and he does not pull the strings so that no one is really guilty. Instead, he refuses to let the evil have the final word, and he works through the wreckage toward life without ever once calling the wreckage good. The brothers sold Joseph, and God sent him, and the writer will not let go of either half of that sentence.',
          arch: 'People who have recovered from deep harm often describe learning to tell their own story differently, so that the wound stays real but no longer defines everything else. Joseph does exactly this. He neither denies his brothers’ betrayal nor lets it have the last word, because he has come to see it as one part of a larger life that God has been shaping. People have tried to teach this kind of wisdom for as long as there have been teachers, and it remains one of the hardest things to learn.'
        },
        misreading: {
          named: 'So it was all God’s plan, and the brothers did nothing really wrong.',
          why: 'Joseph names their evil twice and never softens it, and at the very end of Genesis he says it to their faces again, telling them that they meant it for evil. When God brings good out of their crime, he does not erase their guilt; he only overrules the outcome of what they did. Anyone who uses Joseph’s words to excuse the harm has missed his whole point.'
        },
        addr: {
          mode: 'reframes',
          text: 'Some of us carry a real betrayal, and we face the question of whether we can name it honestly and still refuse to let it be the only thing our lives mean. Naming the wrong and refusing to give it the last word are not opposites. When we do both, we use the same freedom that Joseph found.'
        },
        ask: 'Is there a wound you need to name honestly, while also refusing to let it define you?'
      }
    ]
  },
  {
    id: 'gen-46', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 46–47 (selected)', chapterIndex: 46, crossesChapters: true,
    title: 'Down to Egypt',
    passages: [
      {
        ref: 'Genesis 46–47 (selected)', kind: 'scene', form: 'prose', title: 'Down to Egypt',
        verses: [
          { n: 3, text: '“I am God,” He said, “the God of your father. Do not be afraid to go down to Egypt, for I will make you into a great nation there.' },
          { n: 4, text: 'I will go down with you to Egypt, and I will surely bring you back. And Joseph’s own hands will close your eyes.”' },
          { n: 29, text: 'Joseph prepared his chariot and went there to meet his father Israel. Joseph presented himself to him, embraced him, and wept profusely.' },
          { n: 30, text: 'Then Israel said to Joseph, “Finally I can die, now that I have seen your face and know that you are still alive!”' }
        ],
        ground: {
          kind: 'historical',
          text: 'As Jacob sets out for Egypt, God meets him at Beersheba, on the southern edge of Canaan, and repeats the promise he gave to Abraham and Isaac. God tells Jacob not to be afraid, because God will go down with him into Egypt and will bring his family back again. The reunion of Jacob and Joseph after twenty-two years of grief is one of the tenderest scenes in Genesis. Yet readers who know what comes next will see a long shadow over it. The family goes down to Egypt to survive a famine, and in the book of Exodus their descendants become slaves there. The journey that saves them also leads them into the bondage from which God will later have to rescue them.',
          src: 'Sarna · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-48', bookId: 'genesis', tier: 'grounded',
    span: 'Genesis 48–49 (selected)', chapterIndex: 48, crossesChapters: true,
    title: 'The deathbed blessings',
    passages: [
      {
        ref: 'Genesis 48–49 (selected)', kind: 'scene', form: 'prose', title: 'The deathbed blessings',
        verses: [
          { n: 14, text: 'But Israel stretched out his right hand and put it on the head of Ephraim, the younger; and crossing his hands, he put his left on Manasseh’s head, although Manasseh was the firstborn.' },
          { n: 7, text: 'Cursed be their anger, for it is strong, and their wrath, for it is cruel! I will disperse them in Jacob and scatter them in Israel.' },
          { n: 10, text: 'The scepter will not depart from Judah, nor the staff from between his feet, until Shiloh comes and the allegiance of the nations is his.' },
          { n: 33, text: 'When Jacob had finished instructing his sons, he pulled his feet into the bed and breathed his last, and he was gathered to his people.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Jacob is old and nearly blind, as his father Isaac was, and he blesses the next generation. When he blesses Joseph’s sons, he crosses his hands to put the younger one ahead of the elder, following one last time the pattern that runs through the whole book. Speaking to his own sons, he condemns the cruelty of Simeon and Levi, still remembering decades later what they did at Shechem after their sister Dinah was violated. He gives the scepter not to his favorite, Joseph, but to Judah, the brother who offered himself in Benjamin’s place. Then Jacob draws his feet up into the bed and dies, and his sons carry him back to the cave of Machpelah, where Abraham and Sarah, Isaac and Rebekah, and Leah, the wife Jacob did not choose, are buried.',
          src: 'Sarna · Westermann · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-50', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 50', chapterIndex: 50,
    title: 'You meant it for evil',
    thread: 'Now that their father Jacob is dead, the brothers are sure that Joseph has only been waiting for the chance to take revenge on them. Joseph weeps, and then he says the words that the whole book of Genesis has been leading up to.',
    closeEnd: 'Genesis ends in Egypt, with a coffin and a promise. Before he dies, Joseph tells his brothers that God will surely come to their aid and bring them up out of Egypt. The writer began the book with the Spirit of God hovering over the waters, and he ends it far from home, with God’s people still waiting for a rescue that has not yet come.',
    passages: [
      {
        ref: '50:15–26', kind: 'scene', form: 'prose', title: 'Am I in the place of God?',
        verses: [
          { n: 15, text: 'When Joseph’s brothers saw that their father was dead, they said, “What if Joseph bears a grudge? Then he will surely repay us for all the evil that we did to him.”' },
          { n: 17, text: 'So now, Joseph, please forgive the transgression of the servants of the God of your father.” When their message came to him, Joseph wept.' },
          { n: 19, text: 'But Joseph replied, “Do not be afraid. Am I in the place of God?' },
          { n: 20, text: 'As for you, what you intended against me for evil, God intended for good, in order to accomplish a day like this—to preserve the lives of many people.' },
          { n: 21, text: 'Therefore do not be afraid. I will provide for you and your little ones.” So Joseph reassured his brothers and spoke kindly to them.' },
          { n: 24, text: 'Then Joseph said to his brothers, “I am about to die, but God will surely visit you and bring you up from this land to the land He promised on oath to Abraham, Isaac, and Jacob.”' },
          { n: 26, text: 'So Joseph died at the age of 110. And they embalmed his body and placed it in a coffin in Egypt.' }
        ],
        ground: {
          kind: 'historical',
          text: 'Genesis ends on Egyptian soil and with an Egyptian custom. The Egyptians embalm Joseph’s body and lay it in a coffin, following their practice of mummification, which Israel did not adopt. The writer ends the book not in the promised land but beside that coffin, with Joseph’s family sworn to carry his bones home when God brings the people out. Generations pass between the end of Genesis and the exodus, and through all of them the Israelites keep Joseph’s bones in Egypt, waiting to carry them home.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'Even after everything, the brothers cannot believe that Joseph has forgiven them. They send him a message, which they may well have invented, claiming that their father asked Joseph to forgive them. Joseph weeps, because they still do not trust his mercy. Then he says it as plainly as anyone in Genesis says anything: they meant to harm him, but God meant it for good. He does not say that the evil was secretly good. They meant it, and it was evil. But God meant something through it that they never intended, and the proof is the bread their children are eating. Joseph refuses to take God’s place and settle the score. He <b>forgives</b> what seemed unforgivable, and he feeds them. Then the writer closes Genesis the way exile feels, far from home, beside a coffin, with a promise that has not yet come true.',
        lenses: {
          theo: 'Joseph’s words are the last great statement of Genesis, and he holds both halves together to the very end. His brothers meant evil, and God meant good, so that human guilt and God’s providence stand side by side in a single sentence, and neither cancels the other. The editors also left the ending open on purpose, with a body in Egypt and a promise of return, because they were themselves in exile, holding exactly that kind of promise and reaching for exactly that kind of faith.',
          arch: 'Here forgiveness means refusing to take God’s place as the one who settles the score, and releasing a debt that you are truly owed. The writer then ends the book not with arrival but with trust. Joseph asks his family to carry his bones home one day, and many peoples have honored this kind of hope, the wish to be buried among one’s own people, as a way of holding on to home even past the end of a life.'
        },
        misreading: {
          named: '“You meant evil, but God meant good” means that the suffering was worth it, or that God caused it.',
          why: 'Joseph says that his brothers meant the evil, so the guilt remains theirs, and that God worked through it. He does not say that God was the author of it, or that the pain was secretly a good thing. In this way Joseph refuses both bitterness and cheap comfort. He calls the evil what it is and trusts God beyond it, and the writer holds that balance to the very end of the book.'
        },
        addr: {
          mode: 'reframes',
          text: 'Some of us carry harm that another person meant for us, and we are still doing the slow, unfinished work of trusting that it will not have the last word, without pretending it was not real. Joseph’s brothers meant it for evil, and God meant it for good. Joseph had to hold both of those truths together, and most of us, sooner or later, will have to do the same.'
        },
        ask: 'Is there harm someone did to you that you can name honestly and still entrust to God, for a good you cannot yet see?'
      }
    ]
  }
];

// The Abraham movement: its grounding, its look-back capstone, and the doorway into Jacob.
export const ABRAHAM_MOVEMENT: Movement = {
  id: 'abraham', index: 2, title: 'Abraham', range: 'Genesis 12–25',
  throughline: 'God promises a childless old man that he will have a son and become a great nation. Abraham holds on to that promise for decades, sometimes faithfully and sometimes by trying to force it, until the son finally arrives, and then God asks Abraham to give him back on a mountain.',
  chapterStart: 12, chapterEnd: 25,
  situation: {
    kicker: 'The ground beneath the Abraham story',
    title: 'A family memory, told long after',
    image: '/images/gen-abram.webp',
    paragraphs: [
      'The stories of Abraham are set in the Bronze Age, roughly the early second millennium BCE, but Israelite writers put them in their final form many centuries later. Those later writers left small details from their own time in the stories, such as domesticated camels and the Philistines, neither of which belonged to Abraham’s world, and these details show us that later hands shaped an old family memory.',
      'Much of what the writers tell about Abraham also served as a family history for the whole region. Through these stories Israelites explained where the neighboring peoples of Moab and Ammon came from, where the Ishmaelite tribes came from, and why Israel and its neighbors were at once relatives and rivals.',
      'The editors who gave these stories their final shape also had a reason of their own to care about them. According to Genesis, Abraham left Mesopotamia, first Ur and then Harran, with nothing but God’s promise, and walked toward a land he did not yet own. For Judeans whom the Babylonians had carried off into exile, that was not ancient history. They saw their own journey in his, only in reverse.',
    ],
    sources: 'Speiser · Westermann · Friedman',
  },
  capstone: {
    kicker: 'The shape of the Abraham story',
    title: 'Learning to hold the promise open-handed',
    paragraphs: [
      'At the start of the Abraham story God tells a childless old man to leave everything he has on the strength of a promise, and Abraham goes. The rest of his story shows him learning, failing, and learning again how to carry a promise he cannot make come true himself, which means waiting for God rather than grabbing. Each time Abraham tries to force the promise, he hurts someone, usually the person with the least power. He lies about his wife in Egypt, he takes the slave woman Hagar to bear him a son, and he lies about his wife again to King Abimelech.',
      'God keeps his promise anyway. When Abraham and Sarah are far too old to have children, Sarah gives birth to a son, and they name him Isaac, which means “he laughs.” Then, in the chapter toward which the writers built the whole story, God asks Abraham to sacrifice Isaac. Abraham, who once argued boldly with God to spare the wicked city of Sodom, says nothing this time and climbs the mountain. An angel stops his hand, Abraham offers a ram in his son’s place, and God swears the promise to him one last time.',
      'These chapters do not teach that God rewards faith with comfort. They show a man learning that the promise was never his to clutch. God gave it, nearly took it back, and gave it again, and Abraham had to learn to hold it with an open hand. When he dies, both of his sons, Isaac the chosen one and Ishmael the one who was sent away, bury him together. They bury him in the only piece of the promised land he ever owned, which is a grave.',
    ],
    tensions: [
      { claim: 'In the laws of Israel, God forbids the sacrifice of children and condemns it as a horror.', counter: 'Yet in Genesis 22 God asks Abraham to do exactly that to the son of the promise, and then praises him for not refusing.', where: 'Genesis 22 against Leviticus 18:21, Deuteronomy 12:31' },
    ],
    sources: 'von Rad · Levenson · Alter',
  },
  doorway: {
    kicker: 'The threshold into the next movement',
    title: 'A promise for a heel-grabber',
    paragraphs: [
      'After Abraham dies, God’s promise passes to his son Isaac, a quiet and almost passive figure, and then to Isaac’s twin sons, where the story becomes dramatic again.',
      'At this point the writers turn to a new question. In Abraham’s story the question was whether God would ever keep his promise. In Jacob’s story the question is what kind of person can carry it. Jacob comes out of the womb grabbing his twin brother’s heel, and he grows up to cheat that brother and to trick their blind father. Yet God chooses him before he has done anything to deserve it.',
      'God chose Abraham, an old man who trusted him. Now God chooses Jacob, a younger son, for no reason that anyone can see, and the Jacob story is about how scandalous that choice is.',
    ],
    nextMovementId: 'jacob',
  },
};

// The primeval movement (1-11), ported from the original prototype's overlays so it has
// the same situation, capstone, and doorway treatment as Abraham.
export const PRIMEVAL_MOVEMENT: Movement = {
  id: 'primeval', index: 1, title: 'The primeval history', range: 'Genesis 1–11',
  throughline: 'God makes the whole world good, and then human beings go wrong, and their wrongdoing spreads outward until the builders of Babel try to make a name for themselves. God answers them by giving a name, and a promise, to one man, Abraham.',
  chapterStart: 1, chapterEnd: 11,
  situation: {
    kicker: 'The ground beneath the primeval history',
    title: 'The situation',
    image: '/images/gen-prime.webp',
    paragraphs: [
      'Judean priests and scribes gave these first chapters their shape while they were in exile. In 586 BCE the Babylonian army stormed Jerusalem, burned its temple, and marched much of its population east to Babylon. The exiles had lost their temple, their land, and their king. All around them stood the greatest empire on earth, and that empire had its own grand myths: the Babylonians told how the gods made the world through a war, how they formed human beings to be their slaves, and how Babylon itself stood at the center of creation.',
      'The Judean writers took older traditions of their own and edited them into a quiet answer to Babylon. They did not shout an argument; they told a story. In their story one God makes the world by speaking, calls what he has made good, and forms human beings in his own image rather than as slaves. Scholars find two older sources woven through these chapters, a vivid storyteller they call the Yahwist and an orderly priestly writer, and the editors set the two side by side rather than smoothing them into one voice.',
      'Chapters 1 to 11 form a single section. The writers open it by answering Babylon’s creation story, and they close it at Babel, which is the Hebrew name for Babylon, where God scatters the builders. Immediately afterward the writers narrow the story to one family and to the promise God makes to it.',
      'A word about dates is needed here. The events these chapters describe, the creation, the flood, and the tower of Babel, lie before recorded history, and no one can put a date on them. What historians can date is the time when the writers composed these chapters, and the older myths they were answering.',
    ],
    timeline: [
      { tag: 'c. 1800 BCE', text: 'Scribes compile the Sumerian King List, which credits early kings with reigns of tens of thousands of years.' },
      { tag: 'c. 1100 BCE', text: 'Babylonian scribes are copying the Enuma Elish and the Epic of Gilgamesh, the myths the writers of Genesis will answer, with their stories of creation through war and of a great flood.' },
      { tag: '586 BCE', text: 'The Babylonians burn Jerusalem and its temple and carry its people into exile. The writers of these chapters are working in the shadow of this event.' },
      { tag: '539 BCE', text: 'The Persian king Cyrus conquers Babylon and allows the exiles to return home.' },
      { tag: 'c. 450 BCE', text: 'Editors bring these traditions into their final form.' },
    ],
    sources: 'Wellhausen · Friedman · Westermann',
  },
  capstone: {
    kicker: 'The first movement · Genesis 1–11',
    title: 'The primeval history',
    paragraphs: [
      'These chapters are the only part of the Bible that is about everyone. Before the writers narrow their story to one family, they tell the story of the whole world: God makes it good, people turn it wrong, and the wrong spreads. If you read the eleven chapters together, you find the same pattern repeating. People break something, and God answers with mercy, and then it happens again, and again.',
      'In Eden the man and the woman stop trusting God, yet God clothes them rather than destroying them. Cain kills his brother, yet God puts a mark on Cain to protect him. God sends a flood on a world full of violence, yet he carries one family through it and sets a rainbow in the sky as a promise. Each time people break something, God closes the episode with a mercy.',
      'Then come the builders of Babel, who build a city and a tower to make a name for themselves, and this time the whole of human civilization takes part in the wrong. At the end of this episode the writers name no mercy at all. God scatters the people, they abandon their building, and the writers say nothing more. The writers meant that silence to be felt.',
      'The mercy the reader is waiting for comes in the very next thing God does. He calls one man, Abram, and promises that through him all the scattered families of the earth will be blessed. The writers have shown that the whole world is sick, and now they show God beginning the cure with one person.',
      'The people who assembled these chapters, living in exile under the power of Babylon, were making a claim of their own. They admitted that the world is broken and scattered and overshadowed by empires, but they insisted that God would not leave it that way.',
    ],
    sources: 'von Rad · Clines',
  },
  doorway: {
    kicker: 'The second movement',
    title: 'Abraham',
    paragraphs: [
      'In the flood story God had already narrowed his attention to one family, Noah’s, but that was still a story about all humanity, and Noah mattered as the one through whom humanity survived. Now the writers make a deeper change. They stop telling the story of everyone and settle on one man, and from here to the end of Genesis they stay with his family. God calls Abram to leave everything that has defined him, his country, his relatives, and his father’s household, and he makes Abram a promise backed by nothing except God’s own word.',
      'The builders of Babel tried to seize a name for themselves, but God gives Abram a name as a gift. With Abram God begins to heal the broken world, and Abram begins it by trusting God and setting out on a long, imperfect journey toward something he will never fully see.',
    ],
    nextMovementId: 'abraham',
  },
};

// The Jacob movement (25:19 onward): the wrestler. Its situation, look-back capstone, and
// the doorway into Joseph.
export const JACOB_MOVEMENT: Movement = {
  id: 'jacob', index: 3, title: 'Jacob', range: 'Genesis 25–36',
  throughline: 'Jacob takes his brother’s blessing by fraud and then spends twenty years being humbled. One night by a river he wrestles with God, who gives him a new name and leaves him limping, and the next day the brother he cheated runs to embrace him.',
  chapterStart: 26, chapterEnd: 36,
  situation: {
    kicker: 'The ground beneath the Jacob story',
    title: 'How two nations remember a shared womb',
    image: '/images/gen-jacob.webp',
    paragraphs: [
      'Among other things, the writers used the Jacob stories to explain the map of Israel’s world. Jacob stands for Israel, and his twin brother Esau stands for Edom, Israel’s rival just to the southeast. Laban and his daughters stand for the Arameans, Israel’s relatives to the northeast. When the writers tell of quarrels inside one family’s tents, they are also telling of quarrels between whole peoples.',
      'These are also the most morally tangled chapters in Genesis. Their hero is a deceiver who grabs at what he wants from the moment he is born, and the writers never clean him up. God shows Jacob favor that he has done nothing to deserve, and then, over the whole course of his story, God wears him down. Laban deceives Jacob as Jacob deceived others, until at last, alone in the dark beside a river, Jacob is broken open.',
      'The exiles who shaped these stories would have recognized Jacob’s life as their own. Jacob is driven from home, made to serve a hard master in a distant country for many years, and finally brought back to the land God promised him. The exiles saw in Jacob’s journey away and back the journey they hoped to make themselves.',
    ],
    sources: 'Sarna · Westermann · Alter',
  },
  capstone: {
    kicker: 'The shape of the Jacob story',
    title: 'The grasper who had to be lamed',
    paragraphs: [
      'God chooses Jacob before Jacob has earned anything; he was already grabbing his brother’s heel in the womb. The rest of his story shows God slowly making him into a man who can carry that choice. Jacob gets his brother’s birthright by bargaining and their father’s blessing by fraud, and then for twenty years he is paid back in his own coin. In the dark, his uncle Laban gives him the wrong sister as his bride, then cheats him of his wages again and again, and slowly wears him down.',
      'The change comes on the night before Jacob must face the brother he wronged, when he is alone by a river. A stranger wrestles with him all night, and Jacob comes to understand that he is somehow wrestling with God. Jacob refuses to let go until the stranger blesses him, and the stranger gives him two things in the same grip: a new name and a limp he will carry for the rest of his life. Jacob had always won by grabbing, and now God blesses him by breaking him of it. He crosses the river with the name Israel, which means “he strives with God,” and he crosses it limping.',
      'Then Esau, the brother Jacob dreaded, runs to embrace him, and Jacob says that seeing Esau’s face is like seeing the face of God. But the writers do not give the story a sweet ending. Jacob’s sons answer the rape of their sister Dinah by massacring a whole town, Jacob buries his beloved Rachel beside the road, and Isaac, the old blind father Jacob once deceived, is buried by the two sons he had set against each other. Through all of this God carries his promise forward. He does so not because these people are good, but because he does not let go of those he has chosen, not even a cheat, and not even when he has to lame him to keep him.',
    ],
    tensions: [
      { claim: 'In some chapters the writers present Jacob as the blessed one, chosen by God and carried by his favor.', counter: 'In others they show him as a liar and a thief whom others rightly deceive in return, and as the father of a household that lies and kills. God’s chosen line is a crooked one.', where: 'Genesis 27 and 34 against 28 and 32' },
    ],
    sources: 'von Rad · Westermann · Alter',
  },
  doorway: {
    kicker: 'The threshold into the next movement',
    title: 'From the cheat to the dreamer',
    paragraphs: [
      'Jacob now bears the name Israel, and the writers widen their view from one man to his twelve sons, whose families will become the twelve tribes. Almost at once, however, they narrow it again to one boy, Joseph. Jacob favors Joseph above his brothers, gives him a richly decorated coat that he should have known better than to give, and Joseph dreams of ruling over his family.',
      'Once again the writers turn to a new question. In Abraham’s story they asked whether God would ever keep his promise, and in Jacob’s story they asked what kind of person could carry it. In Joseph’s story they ask what God is doing when everything falls apart. Joseph’s brothers, who resent their father’s favoritism, throw Joseph into a pit and sell him as a slave into Egypt, and for thirteen years God says nothing from heaven.',
      'For three generations members of this family have deceived one another, and now Jacob’s own sons deceive him, using the same kind of trick he once used. They show him their brother’s coat dipped in blood. In the chapters that follow, the writers give the strangest answer in Genesis. God does not rescue Joseph from his suffering. Instead, quietly and over many years, God works through the betrayal itself rather than around it.',
    ],
    nextMovementId: 'joseph',
  },
};

// The Joseph movement (37-50): the dreamer. The last movement of Genesis, so it carries
// a capstone but no doorway out.
export const JOSEPH_MOVEMENT: Movement = {
  id: 'joseph', index: 4, title: 'Joseph', range: 'Genesis 37–50',
  throughline: 'Joseph’s brothers throw him into a pit and sell him into Egypt, where he rises, falls, and rises again by interpreting dreams. At last he faces the brothers who betrayed him, and he chooses to see everything that happened to him as the work of a God who meant it for good.',
  chapterStart: 37, chapterEnd: 50,
  situation: {
    kicker: 'The ground beneath the Joseph story',
    title: 'A different kind of story, told to exiles',
    image: '/images/gen-joseph.webp',
    paragraphs: [
      'The Joseph story reads unlike anything earlier in Genesis. The writer tells it as one long, carefully built tale, much like a short novel, rather than as a chain of separate episodes. A single plot runs without a break from the pit to Jacob’s deathbed, and the writer handles the hints of what is coming, the reversals, and the moments of recognition with a novelist’s control.',
      'God also acts differently in this story. He no longer speaks in visions at night or from fire, and he no longer walks in a garden in the evening breeze. For chapters at a time he says nothing at all, and the writer leaves God’s work hidden inside ordinary events: a boy sold as a slave, a false accusation, a promise someone forgets, a famine. Only at the very end does Joseph name what God was doing beneath it all.',
      'The first readers of this story were people whom conquerors had themselves carried off to Egypt and to Babylon. In Joseph they met an Israelite enslaved in Egypt who rose in a foreign court, kept his family alive through disaster, and insisted that God had been at work in that disaster the whole time. For them it was not a tale about the distant past. It gave them a way to understand their own exile, and the courage to trust God within it.',
    ],
    sources: 'von Rad · Alter · Westermann',
  },
  capstone: {
    kicker: 'The shape of the Joseph story',
    title: 'You meant it for evil, God meant it for good',
    paragraphs: [
      'Joseph’s own brothers strip him of his coat, throw him into a pit, and sell him, and for the length of the story God says nothing. He sends no voice, no rescue, and no explanation. If God is at work, he works hidden inside a string of ordinary disasters: Joseph is sold as a slave, his master’s wife lies about him, a man he helped forgets his promise to help him, and a famine comes. Through all these chapters the writer studies a kind of care from God that never once announces itself.',
      'The writer invites us to read this story both forward and backward. If we follow it forward, as Joseph lived it, it is a chain of disasters that he simply has to survive. If we look back from the end, when Joseph rules over Egypt, the same events line up into a road that kept a whole family alive through famine. Joseph says so twice, and he never makes light of what his brothers did. He tells them that they meant to harm him, but God meant it for good. The writer keeps both parts of that sentence. The brothers are guilty, and God has not been defeated, and the writer will not let the reader drop either truth.',
      'This is the hardest and most mature thing the writers of Genesis say. They do not claim that the evil was secretly fine, and they do not claim that the suffering meant nothing. They claim that a real wound and a real providence can belong to the same history. And they end the book unresolved, on purpose. It closes not in the promised land but with Joseph’s body in a coffin in Egypt, and with his family fed but far from home, holding on to a promise that God will one day bring them back.',
    ],
    tensions: [
      { claim: 'Joseph tells his brothers that God meant everything that happened for good, and that God was working through the whole ordeal to save many lives.', counter: 'In the same breath Joseph tells them that they meant it for evil. The writer never excuses the brothers, Joseph names their crime to their faces, and Genesis ends not with a rescue but with a coffin and a promise God has not yet kept.', where: 'Genesis 50:20, and the book ending in Egypt' },
    ],
    sources: 'von Rad · Westermann · Alter',
  },
};

// The book-level look-back, one step above the movement capstones: what the whole of
// Genesis is, read as a single arc. Rendered at the foot of the book page and after the
// final reading.
export const GENESIS_CAPSTONE: Capstone = {
  kicker: 'The whole book · Genesis 1–50',
  title: 'Blessing given, broken, and carried through',
  paragraphs: [
    'Genesis is one long story about a blessing and what keeps happening to it. At the beginning God speaks the world into being, calls it good, and blesses everything he has made. Almost at once people break that blessing. The man and the woman stop trusting God in the garden, Cain kills his brother, and the builders of Babel raise a tower out of pride, until God scatters the whole world and the writers fall silent. In the first eleven chapters the writers describe what is wrong with the whole human race, and then they turn sharply to the one cure God begins.',
    'From then on God carries the blessing through one deeply flawed family. He promises it to a childless old man, Abraham, who holds on to it against every impossibility and slowly learns to carry it with an open hand instead of grabbing at it. God gives it next to Jacob, who grabbed his brother’s heel in the womb and whom God must wrestle to the ground and leave limping before Jacob can carry it. And the blessing survives a betrayal that should have ended it, when Joseph’s brothers sell him and Joseph rises, while God stays silent, to keep them all alive. Across these four sections God hands one promise down through liars, rivals, and people who have been wronged. He does not do it because they are good. He does it because he will not let them go.',
    'Genesis does not end with the family arriving home. The book began with God’s Spirit moving over the waters, and it closes with Joseph’s body in a coffin in Egypt and a promise God has not yet kept. Before he dies, Joseph tells his brothers that God will surely come to them and bring them up out of Egypt. The people who assembled Genesis were themselves in exile, far from home, holding on to the same kind of unfinished promise. They built a book that ends exactly where they stood, between the promise and its keeping, and they told their readers to trust the God who made it.',
  ],
  tensions: [
    { claim: 'Again and again in Genesis, God keeps his blessing alive, and his promise survives every break and every betrayal.', counter: 'Yet Genesis ends not in the promised land but in Egypt, with a coffin, and the rescue exists only as a promise. The writers deliberately leave the story unfinished.', where: 'Genesis 1:1 against 50:26' },
  ],
  sources: 'von Rad · Westermann · Clines · Alter',
  ask: 'Genesis ends in the middle, after God has made a promise and before he has kept it. Where in your own life are you being asked to live in that gap, and to trust the God who made the promise?',
};

// The introduction to the whole book: what Genesis is and how to read it, shown at the
// head of the book page before the movements. Book-level grounding, the counterpart to
// each movement's situation panel.
export const GENESIS_INTRO: Panel = {
  kicker: 'An introduction · Genesis 1–50',
  title: 'The book of beginnings',
  paragraphs: [
    'Genesis is the first book of the Bible, and its name means “beginning.” In it the writers tell how things began: the world, the sky and the sea, human beings, work and rest, the first wrongdoing and the first death, and the family through whom the rest of the Bible’s story will come. Almost everything the Bible says later has its starting point somewhere in this book.',
    'The book has two parts. Chapters 1 to 11 are about everyone. In them the writers tell the story of the whole human race in broad strokes, reaching back before recorded history: the creation, the garden, Cain and Abel, the flood, and the tower of Babel. From chapter 12 onward the writers narrow their view to one family over four generations, Abraham, Isaac, Jacob, and Joseph, and they stay with that family to the end of the book.',
    'The book runs from the first light over the waters to a coffin in Egypt. God makes a world, and people break it. God makes a promise to one old man, and then he carries that man’s family through famine and betrayal toward a homecoming they still have not reached when the writer ends the book. From beginning to end, Genesis tells one long story about a blessing and what keeps happening to it.',
  ],
};
