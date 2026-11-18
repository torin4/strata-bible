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
          arch: 'This is the call that opens every hero’s road: leave the country, the kin, the father’s house, all that told you who you were, and walk out toward a destiny you cannot yet see. Storytellers in a hundred cultures begin the same way, with a summons that breaks the old life open. What recurs is the shape of beginning itself, the threshold crossed with nothing in hand but a promise. (Campbell, The Hero with a Thousand Faces.)'
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
          text: 'You can be genuinely called and still act out of fear in a way that endangers the very thing you were given. The promise was kept anyway. It did not depend on him being brave.'
        },
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
          arch: 'The night sky is the oldest screen humans have cast their longing and their fate upon. Led out under it and told to count the uncountable, the childless man is asked to read his own future in the stars, to credit a promise the daylight facts deny. The image returns wherever someone is asked to trust what cannot yet be seen against everything that can. (Believing the promise against the evidence of the eyes.)'
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
          arch: 'The deep sleep and the “great terror and darkness” are the threshold the daylight self cannot cross on its own. The binding oath is sworn in the dark, by a fire that moves untended, the human passive while the sacred acts. The oldest stories know that what holds a life most deeply is sealed at the dread edge of the holy, below the level of waking choice. (Otto, on the holy as terror and fascination.)'
        },
        addr: {
          mode: 'names',
          text: 'You may have wanted a guarantee and been handed instead a darkness to walk into, with the word that someone has bound themselves to you on the far side of it. The oath did not rest on Abram. He slept through the part that mattered most, and it held.'
        },
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
          arch: 'The impatience that cannot bear the gap between a promise and its keeping, and grabs to close it by force, is among the oldest ways the thing most wanted is sabotaged. Hurry the harvest and you trample the field. (Forcing the outcome you were asked to wait for.)'
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
          arch: 'The wilderness, the place stripped of every familiar support, is where the old stories set the meeting that changes everything. Hagar, a slave with nowhere left to run, is the first person in the Bible to give God a name, and she does it in the desert she fled to. What recurs is the pattern that you often meet what truly sees you only after you have run out of everywhere else. (Found in the place you fled to.)'
        },
        addr: { mode: 'names', text: 'You may know what it is to be the one overlooked in someone else’s arrangement, and to be seen, really seen, only after you had run as far as you could. She was seen. In the one place she thought she was most alone, she was the one who got to name God.' },
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
          arch: 'The laugh is the sound of the part of a person that has quietly given up, hearing the old hope named out loud again. To be caught in that disbelief and not condemned for it is its own kind of mercy, and the child, when he comes, will carry the laugh as his name. (The disbelief that hope has to pass through.)'
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
          arch: 'To stand before overwhelming power and plead for the undeserving, refusing to let might be the last word, is a role the tradition keeps casting and recasting, Abraham here, Moses at Sinai, Job before the storm. It is conscience grown large enough to argue with its own God. (Pleading for mercy against the logic of judgment.)'
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
          arch: 'Hospitality to the stranger was among the most sacred duties of the ancient world, and its violation among the gravest crimes, the same horror the Greeks told in their tales of guests abused. The walled city that turns on the ones at its gate, that destroys what it will not welcome, is the recurring image of a people closed hard against the outside. (The city that devours what it should welcome.)'
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
          arch: 'The forbidden backward glance is one of the oldest and most haunting images there is, told again in Orpheus turning to look at Eurydice and losing her at the threshold. To be told not to look back and to look anyway is the pull toward the thing you cannot stop loving even as it destroys you, and it can fix you in place. (Orpheus and Lot’s wife, the look that costs everything.)'
        },
        addr: { mode: 'names', text: 'You know the backward look, the inability to stop turning toward something already gone, and how it can freeze you where you stand. He was pulled out by the hand. Sometimes you are saved not by your own strength but because someone refused to stop pleading for you.' },
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
          arch: 'The child long despaired of, arriving after the hope has curdled into a tired laugh, is a pattern the book will tell again and again, Rebekah, Rachel, Hannah, on to Elizabeth far down the line. The new life comes, in these stories, only on the far side of giving up the demand to force it. (The promised child, born past hope.)'
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
          arch: 'The one cast out to keep the chosen story clean does not vanish from it. Ishmael is heard in the wilderness and made a nation of his own, as Esau will be, the book refusing to let the rejected son be erased. What you exile to protect the inheritance remains, in the story and on the conscience. (The cast-out son the book will not forget.)'
        },
        addr: { mode: 'names', text: 'You may know the uncomfortable side of getting what you longed for, the someone or something pushed out of the frame so the picture could stay clean. God heard the boy. The one cast out to the edge of the story was not outside the reach of being heard.' },
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
          arch: 'The asking-back of the beloved child touches the oldest terror in religion, that the god who gave may demand the gift returned. The ancient world was full of firstborns offered on altars; this story walks to the very edge of that horror and then stops the hand, a ram in the thicket instead. What recurs is both the dread and its interruption. (Levenson, The Death and Resurrection of the Beloved Son.)'
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
          arch: 'To go to the very edge of losing the irreplaceable thing, and to have it handed back, is not the same as never having faced the loss. You come down the mountain changed, and not everything that climbed it comes back down with you. The descent that returns what it nearly took is one of the deepest patterns of initiation. (What the mountain keeps.)'
        },
        addr: { mode: 'names', text: 'You may know the strange aftermath of a dread lifted at the last moment, the relief that does not quite cancel what the fear already took from you. The hand was stopped. Whatever it cost, the boy came down off the mountain alive.' },
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
          arch: 'Struggling twins, rival brothers born to fight, are one of the most widespread images in human story, Cain and Abel before them, Romulus and Remus far away, the two who cannot both be first. The pattern carries a hard claim the book keeps pressing, that which brother a people or a person turns out to be is contested from the very start. (The warring twins, told the world over.)'
        },
        addr: {
          mode: 'names',
          text: 'You know the sense of being set inside a struggle you did not start, a rivalry or a role handed to you from before you could choose it.'
        },
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
          text: 'You know both moves in this scene: trading something that lasts for something you wanted right now, and the colder one, using another person’s need as your leverage. Appetite is loud and the future is quiet. The trade rarely feels like a trade while you are making it.'
        },
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
          arch: 'Jacob is the trickster, the figure a hundred cultures tell of, Hermes and Loki, Coyote and Anansi, who wins by cunning what he could never win by strength, and who must, in the end, be broken of the trick. The blessing stolen in disguise will have to be re-earned in the open, on a riverbank, in the dark, years later. (The trickster who must lose the mask.)'
        },
        misreading: {
          named: 'It worked out in the end, so Rebekah and Jacob were right to deceive Isaac.',
          why: 'The chapter ends in wreckage: a father betrayed, a brother who wants to kill, a mother who will never see her favorite son again, and a fugitive on the run. The text records the cost in full. It shows the promise advancing and the deceit costing everything in the same breath, and refuses to call the means good because the end arrived.'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to want a blessing badly enough to take it by a means you would rather not say out loud, and to tell yourself the outcome will settle the question of how you got it. The thing taken by force still has to be lived with afterward, and it rarely sits quiet.'
        },
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
          text: 'You know the cry of arriving too late, of asking for the blessing only to be told, gently or not, that it has already gone to someone else. Being passed over is its own grief, and the one who lost is not always the one who was wrong.'
        },
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
          arch: 'The stairway joining earth to heaven is the axis mundi, the sacred center where the worlds touch, an image cultures raised in every ziggurat and temple and world-tree. Jacob stumbles onto one in his sleep, in open country he took for empty, and wakes to say the LORD was in this place and he did not know it. What recurs is the discovery that the gate of heaven can stand in the bleakest waystation. (Eliade, on the axis mundi and the sacred center.)'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to be running from something you did, bedded down in the bleakest stretch of the road, and to find you were not as alone there as you were certain you were. God was in the place, and he did not know it. The not-knowing did not make it any less true.'
        },
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
          arch: 'What you do to others has a way of returning to you wearing a stranger’s face. The trickster is out-tricked, the man who exploited a father’s blindness and a brother’s hunger is fooled in the dark by a craftier man, and this is the moral physics the old stories run on. A person begins to grow up not by winning but by finally losing at their own game. (The deceiver deceived, justice as recoil.)'
        },
        addr: {
          mode: 'names',
          text: 'You know the strange justice of having done to you the exact thing you once did to someone else, and the way it can stop you cold. The mirror is rarely flattering, but it is usually fair.'
        },
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
          arch: 'The ache to be chosen is one of the most common wounds there is, and Leah names it into her first three sons, each a plea to a husband who will not turn. The fourth name lets the plea go, this time I will praise the LORD, and that is the son the promise runs through. What recurs here is the freedom that arrives the moment you stop auditioning for a love that is not coming. (The freedom past the ache to be chosen.)'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to keep performing for a love that does not arrive, and you may know the quieter freedom of finally stopping and being held by something else.'
        },
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
          arch: 'This is the supreme ordeal every hero’s road bends toward, the night struggle with the figure at the threshold who will not be passed until he is held through the dark. The wound is the initiation, the mark you carry out of it; the river is crossed only by the one willing to wrestle until dawn. And the adversary, by morning, wears the face of God. (Campbell, on the threshold ordeal.)'
        },
        misreading: {
          named: 'Jacob beats God in a fair fight and wins by being the stronger man.',
          why: 'He prevails only because he will not let go, not because he overpowers anyone, and the moment the man touches his hip the contest is plainly not about strength. The victory is his refusal to face tomorrow unblessed, and its price is a wound he carries for life. It is not a triumph over God. It is a refusal to be left without him.'
        },
        addr: {
          mode: 'names',
          text: 'You know the night before the thing you dread, alone in the dark, holding on to something you will not release until it blesses you, and the way the holding can leave its mark on you. The blessing and the limp came out of the same grip. Most real ones do.'
        },
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
          arch: 'The brother fled and feared for twenty years turns out, at the meeting, not to be the monster the dread had painted. What you run from grows teeth in the imagination; faced, it is often a weeping man with his arms open. The reckoning you brace for is rarely the reckoning you get. (The dreaded face that turns out to be weeping.)'
        },
        misreading: {
          named: 'They are fully reconciled and the family is healed for good.',
          why: 'They embrace and weep, and then immediately go separate ways, and Jacob even slips back into half-truth about following Esau. The text gives a peace that is real and incomplete, the dread broken but the brothers still apart. It refuses the fairy-tale ending, and means the refusal.'
        },
        addr: {
          mode: 'names',
          text: 'You know the dread of facing someone you wronged, the bracing for the blow, and you may know the stranger grace of being met instead with open arms. What you flee grows teeth in the dark. Faced, it is often smaller, and sometimes weeping.'
        },
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
          arch: 'Watch how fast a real wound is conscripted into other people’s causes. Everyone claims to act for Dinah; no one asks her. It is one of the oldest ways there is of silencing a person, to speak so loudly on her behalf that she disappears, and to call it honor. (The victim spoken for until she vanishes.)'
        },
        misreading: {
          named: 'The brothers are the heroes here, righteously avenging their sister.',
          why: 'The text flags their answer as deceit, ends on their self-justifying question rather than any word of approval, and has Jacob condemn them on the spot and curse them again at the end of his life. The chapter stages the revenge as one more atrocity, not a triumph, and keeps its sympathy with the girl who is never allowed to speak, not with the men killing in her name.'
        },
        addr: {
          mode: 'names',
          text: 'You may know what it is to have your own pain taken up as someone else’s cause, spoken for so loudly that you disappear from your own story. Being avenged is not the same as being heard, and the two are easily confused.'
        },
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
  },
  {
    id: 'gen-37', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 37', chapterIndex: 37,
    title: 'Joseph sold',
    unitLabel: 'Scene',
    thread: 'A father’s favoritism, a boy’s dreams, and brothers who hate him enough to throw him in a pit and sell him. The deceit that ran through this family comes back on Jacob through his own sons, with a bloodied coat.',
    closeEnd: 'Jacob, who fooled his blind father with a goat and a garment, is now fooled by his sons with a goat and a garment. The favored son is gone, and heaven says nothing.',
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
          text: 'The garment is a ketonet passim, and no one is sure exactly what the phrase means, a coat of many colors in the old Greek, more likely a long ornamented robe with sleeves. Either way it is the dress of someone exempt from field labor, a son marked as heir over his older brothers. Shepherding families like this one lived as semi-nomads on the edges of Canaan, moving their flocks between grazing grounds, which is why the brothers are days away at Dothan when the story turns.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'Favoritism is this family’s inherited disease, and Jacob, of all people, should know what it does. He was the favored son who tore his own family in half. And here he is dressing one boy in a coat that says, out loud, that he matters more than his brothers. The text does not make Joseph innocent either: he is gifted and insufferable, dreaming aloud of the others bowing to him. What it shows is a wound handed down a third time, and a household that has forgotten how to be kind.',
        lenses: {
          theo: 'The patterns we hated in our parents we tend to repeat on our children, unless something costly breaks them. Jacob’s favoritism is Isaac’s favoritism is the same poison passed down the line, and it will take the near-destruction of this family to begin to drain it. Grace, in this story, works slowly, through generations, and through wreckage.',
          arch: 'Joseph is the marked child, the one singled out and dressed to show it, carrying a real gift and the unbearable pride that rides along with it. The favored one becomes the family’s lightning rod, and the very gift that sets him apart is what gets him thrown down. The set-apart child is a figure the old stories return to again and again. (The marked one the gift makes a target.)'
        },
        addr: {
          mode: 'names',
          text: 'You know a family pattern you swore you would never repeat, and the way it can show up in your own hands anyway. The wounds we carry have a way of becoming the wounds we hand on, unless we catch them.'
        },
        ask: 'What pattern from the family that made you are you most afraid of repeating, and where do you already see it?'
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
          text: 'Twenty pieces of silver was a real price, about the going rate for a young slave in this era’s records. The traders are a caravan on the great trade road that ran from Gilead down to Egypt, carrying gum, balm, and myrrh, the costly resins of the spice trade, with a sold boy now among the cargo. Egypt’s appetite for foreign slaves is well attested, and a Semite could end up in an Egyptian household exactly as Joseph does.',
          src: 'Alter · Sarna'
        },
        meaning: 'The family’s signature move comes all the way home. Jacob fooled his blind father with a goat and a borrowed garment; now his sons fool him with a goat and Joseph’s garment, and it costs him the son he loved most. The lie he built his life on is handed back to him whole. And over the entire catastrophe, for the first time in the cycle, heaven is silent. No dream, no voice, no angel, no rescue. Joseph goes down into Egypt and God does not say a word, for years.',
        lenses: {
          theo: 'This is the start of the strangest providence in Genesis. There is no miracle in this chapter, no intervention, only a vicious human crime and a long silence. The God who walked and spoke openly with Abraham and Jacob goes quiet here, and works, if he is working at all, hidden inside the wreckage, in a direction no one in the scene can see.',
          arch: 'The pit is the descent every hero’s story seems to require, the going-under that has to come before any rising. The favored one is stripped of the coat, thrown into the dark, sold and carried off, and only that downward road leads anywhere at all. You do not reach the heights of this story except by way of the empty cistern. (Campbell, the descent that has to come before the rise.)'
        },
        addr: {
          mode: 'names',
          text: 'You know the silence of heaven in the worst stretch, when the very thing you dreaded happens and no voice arrives to explain it.'
        },
        ask: 'Where has heaven gone quiet on you, and what would it change to trust that silence is not the same as absence?'
      }
    ]
  },
  {
    id: 'gen-38', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 38', chapterIndex: 38,
    title: 'Judah and Tamar',
    thread: 'The story leaves Joseph for a chapter to follow Judah, who fails a widow named Tamar, until the wronged woman with no power left takes justice into her own hands and is called more righteous than he is.',
    closeEnd: 'She is more righteous than I. The man who sold his brother learns what righteousness is from a woman he tried to burn, and the line of David runs straight through her gamble.',
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
          text: 'Levirate custom obliged a dead man’s brother to give his widow a son to carry on the dead man’s line and secure her future. Judah fails Tamar at it twice over and then strands her, a childless widow with no standing, no protector, and no legal move. So she takes the only path left: she disguises herself, secures Judah’s own seal as proof, and waits. When he condemns her to be burned for exactly the thing he did, she produces the seal. And from this scandalous union comes Perez, an ancestor of David, and far down the line, of Jesus.',
          src: 'Alter · Sarna · Westermann'
        },
        meaning: 'Tamar is wronged by a powerful man who owes her a future and quietly withholds it, and the law hands her nothing. So she takes justice the only way left to her, by cunning and at the risk of her life, and when Judah moves to have her killed for immorality, she holds up his own seal and stops him cold. She is more righteous than I, he says, and it is the first true thing he has said in the whole story. The woman with no power schools the man with all of it, and the chosen line runs not through the respectable man but through the widow he tried to destroy.',
        lenses: {
          theo: 'The Bible keeps putting its full weight on the powerless one who refuses to vanish quietly. Tamar has no standing and is the righteous one; Judah has everything and is in the wrong, and he is honest enough, finally, to say so. The promise does not run through the strong and proper here. It runs through a wronged woman’s desperate, righteous gamble.',
          arch: 'This is cunning turned to its rightful use, not grasping at what is not yours, like Jacob, but forcing your way back into a story you were quietly written out of and claiming what you are owed. The wronged woman who takes justice by her wits is a figure the Bible keeps returning to, Tamar here, Ruth to come. The one cast to the margins refuses the margins. (The outsider who forces her way back in.)'
        },
        misreading: {
          named: 'This chapter is a sordid detour that interrupts the real Joseph story.',
          why: 'It is set here on purpose. Judah, who just engineered the sale of his brother, is the man who learns righteousness from Tamar, and it is the beginning of his turning. The same Judah will later step forward and offer his own life in place of Benjamin’s. The interruption is where his change starts.'
        },
        addr: {
          mode: 'names',
          text: 'You know what it is to be owed something by someone with power over you, and to have no clean or easy way to claim it. The one everyone wrote off is often the one telling the truth.'
        },
        ask: 'Where have you been quietly written out of something you were owed, and what would claiming it honestly require of you?'
      }
    ]
  },
  {
    id: 'gen-39', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 39', chapterIndex: 39,
    title: 'Potiphar’s wife',
    thread: 'A slave in Egypt, Joseph rises by his integrity and is brought down by it. He refuses his master’s wife, she lies, and he goes to prison for doing the right thing, with the LORD still, somehow, with him.',
    closeEnd: 'He does the right thing and it costs him his freedom. And the one line that frames the whole disaster does not change: the LORD was with him, in the fine house and in the prison alike.',
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
          text: 'The chapter is framed at both ends by a single refrain, the LORD was with him, said as plainly over the prison as over the master’s house. In between, Joseph rises to run Potiphar’s entire estate, refuses the master’s wife on the grounds not of getting caught but of sinning against God, and is destroyed by her lie when she is spurned. The cloak left in her hand becomes the false evidence, the second time a garment of Joseph’s is used to tell a lie about him.',
          src: 'Sarna · Alter · Westermann'
        },
        meaning: 'Joseph does exactly the right thing and is punished for it. He refuses, not out of fear of discovery but because it would be a sin against God, and his integrity costs him the cloak off his back and lands him in a cell on a lie. The story flatly refuses the bargain we keep wanting, that doing right will keep you safe. It does not. And yet the sentence that brackets the whole disaster never wavers: the LORD was with him, in the house where he rose and in the prison where he fell. God’s presence, the text insists, is not the same as God’s protection, and it will not pretend otherwise.',
        lenses: {
          theo: 'The LORD was with him is said as loudly over the prison as over the palace, and that is the book quietly redefining what it means to be blessed: not exempt from injustice, but accompanied through it. Joseph’s faithfulness is real and it is not rewarded with safety. It is met with company in the dark, which turns out to be a different and harder kind of grace.',
          arch: 'A garment of Joseph’s is turned into a lie about him for the second time, first the bloodied coat and now the seized cloak, the same motif the story keeps folding back on itself. The descent is not finished; the gifted one is stripped again and sent lower still, because in this kind of story you go down twice before you come up. (The repeated garment, the second descent.)'
        },
        misreading: {
          named: 'If Joseph had really been faithful, God would have kept him out of prison.',
          why: 'The text says the opposite in the very same breath: the LORD was with him, and he went to prison. The faithfulness and the suffering are both true at once. The story is built specifically to deny that doing the right thing buys you safety, and to claim something stranger and sturdier instead.'
        },
        addr: {
          mode: 'names',
          text: 'You know the bitter version of doing the right thing, the kind that costs you and is not rewarded, and the question of whether God is really with you when it does. Being accompanied is not the same as being spared. It may be the better promise.'
        },
        ask: 'Where has doing the right thing cost you, and what would change if presence, not protection, were what God was offering in it?'
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
          text: 'In prison Joseph reads the dreams of two of Pharaoh’s officials, the cupbearer and the baker, and reads them truly: one restored, one hanged. He asks for one thing in return, to be remembered. And the cupbearer walks out free and forgets him for two more years. It is the floor of the whole story. Joseph does the one thing he can, accurately and generously, and is forgotten, the gift that will one day save a nation sitting useless in a cell while the one man who could free him puts him out of his mind.',
          src: 'Sarna · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-41', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 41 (selected)', chapterIndex: 41,
    title: 'From the pit to the palace',
    thread: 'Two years late, the cupbearer finally remembers, and the forgotten prisoner is rushed from the dungeon to stand before Pharaoh, reads the dream no one else can, and is set over all Egypt in a single day.',
    closeEnd: 'The dreamer they threw in a pit now stands second only to Pharaoh, and names his sons not for being healed but for being made fruitful in the very land of his affliction.',
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
          text: 'The rise from dungeon to vizier in a single day is the old rags-to-power court tale, with one difference: Joseph deflects the credit to God in his first breath before the throne, I cannot, but God will. The two son-names are a quiet autobiography. Manasseh means God made me forget, and Ephraim, fruitful in the land of my affliction. He does not say healed. He says he bore fruit in the place that hurt him.',
          src: 'Sarna · Alter · Westermann'
        },
        meaning: 'The forgotten man is remembered and rises in a day, and the first thing he does with the gift is refuse the credit for it: I cannot, but God will. Then he names his children, which is how this book lets a person say what a season meant. Not Manasseh, God undid the harm, but God made me forget, the harm is still real, it has only loosened its grip. And not Ephraim, God took me out of the affliction, but God made me fruitful in the land of my affliction. He bore fruit in the very place that wounded him, not after it, in it. That is the whole theology of suffering in two baby names.',
        lenses: {
          theo: 'The rise is not the reward for the suffering; it is simply the next thing after it, and Joseph reads God in both. He never gets an explanation for the pit and the prison. He gets a vantage, late, from which he can finally see that he was being carried even through the silence. Fruitful in the land of affliction is not the same as rescued from it, and the book means the difference.',
          arch: 'This is the return from the underworld, the one who went down into the pit climbing back up carrying what the dark taught him. The descent turns out to have been the making of him, not the ruin of him, and the hero of a hundred stories comes home from the depths changed and bearing a gift. (Campbell, the return from the descent.)'
        },
        addr: {
          mode: 'names',
          text: 'You know the difference between being healed of a hard season and being made, somehow, fruitful inside it.'
        },
        ask: 'Where might you be asked not to be rescued from a hard place, but to grow something in it?'
      }
    ]
  },
  {
    id: 'gen-42', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 42–44', chapterIndex: 42, crossesChapters: true,
    title: 'The brothers come',
    unitLabel: 'Scene',
    thread: 'Famine drives the brothers to Egypt to beg for grain, and they bow, without knowing it, to the brother they sold. He tests them to the breaking point, until Judah, who once proposed the sale, offers his own life in the place of Benjamin.',
    closeEnd: 'The brother who said “let us sell him” now says “let me be the slave in his place.” The family’s deceit has finally turned into its opposite, and the disguise cannot hold.',
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
          text: 'Egypt was the region’s granary. Its harvest leaned on the Nile’s flood rather than on rain, so when drought starved Canaan, Egypt could still have grain, and hungry peoples came down to buy it. Egyptian sources record exactly this, among them a tomb painting at Beni Hasan of a band of Asiatics arriving with their goods. The famine office Joseph runs, storing through the good years against the lean, fits what is known of how the Egyptian state managed its surplus.',
          src: 'Alter · Sarna'
        },
        meaning: 'The brothers stand before the one man who can feed them or starve them, and they do not know he is the boy they threw in a pit. The test Joseph runs is not only cruelty; it is the real question of whether they are the same men. And he hears them, at last, say out loud the thing they buried, the anguish they would not listen to, and he has to leave the room to weep. The reckoning this family needs is not revenge. It is whether the men who sold one brother would now protect another.',
        addr: {
          mode: 'names',
          text: 'You know the strange position of suddenly holding power over people who once held it over you, and the question of what you will do with it. Old guilt has a way of surfacing in the one season you cannot afford it.'
        },
        ask: 'What buried guilt of yours still surfaces under pressure, and what is it asking you to finally face?'
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
          text: 'The planted cup is a divining cup. Joseph’s steward says his master reads the future by it, and divination from a cup, watching how oil or fragments move in the liquid, was a recognized art in Egypt and Mesopotamia. To the brothers it marks Joseph as fully an Egyptian official, a man whose sight they cannot get around.',
          src: 'Alter · von Rad'
        },
        meaning: 'The hinge of the whole story belongs to Judah, not Joseph. The brother who once said let us sell him now says let me be the slave in his place. He cannot bear to watch his father grieve a second lost son, so he offers up his own freedom for the boy’s. The deceit that has run through four generations of this family finally turns into its opposite: a man laying himself down for his brother. That is the change Joseph has been testing for, and the moment it appears in front of him, the disguise breaks.',
        lenses: {
          theo: 'The family is not healed by Joseph’s power; it is healed by Judah’s repentance, by one brother willing to take the place of the brother in danger. The book has quietly carried Judah from the man who sold a brother to the man who would be enslaved for one, and it is through Judah, not through the favored Joseph, that the royal line and the Messiah will run. Repentance, not power, is what mends this house.',
          arch: 'Here is substitution, one stepping bodily into the place of another, and it is the deepest turn the family makes: the brother who once sold a brother now offers to be enslaved for one. The image of the one who takes the place of the condemned runs forward through the whole Bible, the ram for Isaac and on. The very part that committed the betrayal is the part that, changed, redeems it. (Substitution, the place taken for another.)'
        },
        misreading: {
          named: 'Joseph’s testing is just him toying with his brothers to savor his revenge.',
          why: 'He keeps leaving the room to weep, and the testing is the only way to learn whether the brothers have actually changed. The instant Judah proves they have, by offering himself, Joseph can no longer hold the disguise and breaks down. It is discernment, and it costs him to do it, not cruelty.'
        },
        addr: {
          mode: 'names',
          text: 'You know the weight of stepping into the gap for someone, taking the loss onto yourself so the person you love does not have to bear it. The one who did the worst thing is sometimes the one who can finally undo it.'
        },
        ask: 'Where could you step into the gap for someone, and what would it cost you to do it?'
      }
    ]
  },
  {
    id: 'gen-45', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 45', chapterIndex: 45,
    title: 'I am Joseph',
    thread: 'Joseph can no longer hold it. He sends the Egyptians out, weeps so loudly they hear it through the walls, and tells his terrified brothers the thing that reframes the whole story without excusing any of it.',
    closeEnd: 'He does not deny what they did, he names it plainly, you sold me, and in the same breath refuses to let it be the last word. God sent me ahead of you, to save lives.',
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
          text: 'The Joseph story stands apart from the rest of Genesis, a single sustained novella rather than a chain of episodes, and many read it as a later telling shaped by Israel’s wisdom tradition. Its hero is the Hebrew who rises in a foreign court and keeps faith there, the same shape later given to Daniel and Esther, stories told for a people learning to live under empires not their own. The providence it turns on, harm bent toward survival, is that tradition’s signature.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'The first thing Joseph says is I am Joseph, and the second is the one you sold. He does not pretend it did not happen; he says the betrayal to their faces. And then he does the thing that can take a lifetime to learn: he refuses to let the betrayal be the whole truth. It was not you who sent me here, but God. He does not say what they did was good, it was evil. He says God was at work inside it anyway, bending even their crime toward the saving of lives. That is not denial and it is not excuse. It is a man who has found a frame large enough to hold the worst thing that ever happened to him without being destroyed by it.',
        lenses: {
          theo: 'This is providence as Genesis understands it: not a God who prevents the evil, and not a God who pulls the strings so that no one is really guilty, but a God who is not defeated by the evil, who works through the wreckage toward life without ever once calling the wreckage good. They sold him, and God sent him. The book refuses to drop either half of that sentence.',
          arch: 'This is the reframe that heals, the hard-won power to hold your own story so the wound stays real and stops being the whole of it. The betrayal is taken up into a life that has grown larger than it, neither denied nor allowed to be the last word. It is among the oldest kinds of wisdom there is, and one of the most costly to reach. (Naming the wound and refusing it the final say.)'
        },
        misreading: {
          named: 'So it was all God’s plan, which means the brothers did nothing really wrong.',
          why: 'Joseph names their evil twice and never softens it, and at the very end of the book he says it again to their faces: you meant evil. Providence here does not erase guilt; it overrules the outcome. To use the line to excuse the harm is to miss the whole point the story is making.'
        },
        addr: {
          mode: 'reframes',
          text: 'You may be holding a real betrayal, and the question is whether you can name it honestly and still refuse to let it be the only thing your life is allowed to mean. Naming the wrong and refusing its last word are not opposites. They are the same act of freedom.'
        },
        ask: 'What wound are you being asked to name honestly and, at the same time, to stop letting define you?'
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
          text: 'God meets Jacob at the border with the promise given to all the fathers, do not be afraid, I am with you, I will bring you back. The reunion of father and son after twenty-two years of grief is one of the tenderest scenes in the book. But a long shadow lies across it. The family goes down to Egypt to survive a famine, and the descent that saves them is the very one that becomes, in the next book, four hundred years of slavery. The going-down that rescues is also the bondage that will have to be redeemed.',
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
          text: 'Blind old Jacob, like his blind old father before him, blesses the next generation, and crosses his hands to set the younger ahead of the elder one final time, the pattern the whole book has run on. He curses the cruelty of Simeon and Levi, still remembering Dinah decades later, and he hands the scepter not to the favored Joseph but to Judah, the brother who offered himself. Then he gathers his feet into the bed and dies, and is carried back to the cave of Machpelah, to lie with Abraham and Sarah, Isaac and Rebekah, and Leah, the wife he did not choose.',
          src: 'Sarna · Westermann · Alter'
        }
      }
    ]
  },
  {
    id: 'gen-50', bookId: 'genesis', tier: 'sitting',
    span: 'Genesis 50', chapterIndex: 50,
    title: 'You meant it for evil',
    thread: 'With their father dead, the brothers are certain Joseph has only been waiting to take his revenge. And Joseph weeps, and says the line the whole book has been walking toward.',
    closeEnd: 'Genesis ends in Egypt, with a coffin and a promise: God will surely visit you, and bring you up. The book that opened with God’s breath over the waters closes far from home, waiting for a rescue that has not yet come.',
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
          text: 'Genesis ends on Egyptian soil and in an Egyptian custom: Joseph is embalmed and laid in a coffin, the mummification the Egyptians practiced and Israel did not. The book closes not in the promised land but in that coffin, with a sworn promise that the bones will be carried up when God brings the people out. Exodus will open on the far side of four hundred years, and the bones are still waiting.',
          src: 'von Rad · Westermann · Alter'
        },
        meaning: 'After everything, the brothers still cannot believe they are forgiven, and they reach one last time for a lie to protect themselves. And Joseph weeps, because they still do not trust the grace. Then he says it as plainly as the book ever says anything: you meant it for evil, but God meant it for good. Not the evil was secretly good, it was evil, you meant it. But God meant something through it that you never did, and the proof is the bread in your children’s mouths. He will not take the place of God and settle the score. He forgives the unforgivable and feeds them. And then Genesis closes the way exile itself feels, far from home, in a coffin, holding a promise that has not yet come true.',
        lenses: {
          theo: 'This is the whole book’s last word, and it holds the two halves to the very end: you meant evil, God meant good, human guilt and divine providence in a single sentence, neither one cancelling the other. And it ends unresolved on purpose, with a body in Egypt and a promise of return, because the people who assembled Genesis were themselves in exile, holding exactly that kind of promise, and the open ending was the faith they were reaching for.',
          arch: 'Forgiveness here is the refusal to take the place of God, to be the one who settles the score; it is the release of a debt you are genuinely owed. And the book ends not in arrival but in trust, a bone waiting in a coffin to be carried home, one of the oldest and deepest images there is of a hope held past the end of a life. (The unpaid debt released, the bone that waits for home.)'
        },
        misreading: {
          named: '“You meant evil but God meant good” means the suffering was worth it, or that God caused it.',
          why: 'Joseph says they meant the evil, the guilt stays theirs, and God worked through it, not that God authored it or that the pain was secretly a good thing. The line refuses both bitterness and cheap comfort at once. It names the evil as evil and trusts God past it, and that balance, held to the end, is the book’s whole achievement.'
        },
        addr: {
          mode: 'reframes',
          text: 'You may be carrying something someone meant for your harm, and the slow, unfinished work of trusting that it is not the last word, without ever pretending it was not real. He meant it for evil. God meant it for good. The book makes you hold both, and so will a life.'
        },
        ask: 'What harm done to you are you being asked to name honestly and still entrust to a good you cannot yet see?'
      }
    ]
  }
];

// The Abraham movement: its grounding, its look-back capstone, and the doorway into Jacob.
export const ABRAHAM_MOVEMENT: Movement = {
  id: 'abraham', index: 2, title: 'Abraham', range: 'Genesis 12–25',
  throughline: 'A promise made to a childless old man, held against every impossibility and every attempt to force it, until it arrives as laughter and is then asked back on a mountain.',
  chapterStart: 12, chapterEnd: 25,
  situation: {
    kicker: 'The ground beneath the Abraham story',
    title: 'A family memory, told long after',
    image: '/images/gen-abram.webp',
    paragraphs: [
      'The stories of Abraham are set in the Bronze Age but were written down much later, and they carry small anachronisms, domesticated camels, Philistines, that point to the hand of later tellers shaping an old memory.',
      'Much of the cycle works as a family origin story for a whole region: where Moab and Ammon came from, where the Ishmaelite tribes came from, why Israel and its neighbors are kin and rivals at once.',
      'And one note runs under all of it for the people who edited it. Abraham came out of Mesopotamia, out of Ur and Harran, on nothing but a promise, and walked toward a land he did not yet have. To exiles who had been carried off to Babylon, that was not ancient history. That was their own road, read backward.',
    ],
    sources: 'Speiser · Westermann · Friedman',
  },
  capstone: {
    kicker: 'The shape of the Abraham story',
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
    kicker: 'The threshold into the next movement',
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
    kicker: 'The ground beneath the primeval history',
    title: 'The situation',
    image: '/images/gen-prime.webp',
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
    kicker: 'The first movement · Genesis 1–11',
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
    kicker: 'The second movement',
    title: 'Abraham',
    paragraphs: [
      'The flood had already narrowed to one family, Noah’s, but that was still a story about all humanity, with Noah only the thread it survived on. Here the change runs deeper. The story stops being about everyone and settles on one man, and it will stay with his family from now on. God calls Abram out of everything that defined him, country, kin, and father’s house, and makes him a promise with no collateral but his own word.',
      'Where Babel grasped at a name, Abram is given one. The cure for the broken world begins here, with a single act of trust and a long, imperfect walk toward something he will never fully see.',
    ],
    nextMovementId: 'abraham',
  },
};

// The Jacob movement (25:19 onward): the wrestler. Its situation, look-back capstone, and
// the doorway into Joseph.
export const JACOB_MOVEMENT: Movement = {
  id: 'jacob', index: 3, title: 'Jacob', range: 'Genesis 25–36',
  throughline: 'A grasper takes the blessing by fraud and spends twenty years being humbled into it, until a night of wrestling leaves him renamed and limping, and the brother he cheated runs to embrace him.',
  chapterStart: 26, chapterEnd: 36,
  situation: {
    kicker: 'The ground beneath the Jacob story',
    title: 'How two nations remember a shared womb',
    image: '/images/gen-jacob.webp',
    paragraphs: [
      'The Jacob cycle is, among other things, a family explanation of a map. Jacob is Israel; his twin Esau is Edom, the rival just to the southeast; Laban and his daughters stand for the Aramean kin to the northeast. The quarrels in the tents are the quarrels between peoples, told as one fractious household.',
      'It is also the most morally tangled stretch of Genesis. The hero is a deceiver who grasps from the womb, and the story never tidies him up. It lets grace fall on a man who has done nothing to deserve it, then spends the whole cycle wearing him down, deceived in turn by Laban, until the trickster is finally broken open in the dark by a river.',
      'For the exiles who shaped it, the shape would have been familiar to the bone: a man driven from home, made to serve a hard master in a far country for long years, and brought back at last to the land he was promised. Jacob’s road out and home is Israel’s own road, read backward.',
    ],
    sources: 'Sarna · Westermann · Alter',
  },
  capstone: {
    kicker: 'The shape of the Jacob story',
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
    kicker: 'The threshold into the next movement',
    title: 'From the cheat to the dreamer',
    paragraphs: [
      'Jacob is Israel now, and the camera, which has followed one man, widens to take in his twelve sons, the tribes to be. But it narrows again almost at once, onto one boy: Joseph, the favored son, the dreamer in the coat his father should have known better than to give him.',
      'The question shifts once more. With Abraham it was, will the promise ever come? With Jacob, what kind of person can carry it? With Joseph it becomes, what is God doing in the wreckage, when the brothers who hated their father’s favoritism throw the favored son into a pit and sell him into Egypt, and no voice from heaven says a word for thirteen years.',
      'The deceit that has run through three generations is about to be done to Jacob one last time, by his own sons, with the same prop, a brother’s bloodied coat. And the answer the next movement gives is the strangest in Genesis: not a rescue, but a long, hidden providence that works through the betrayal rather than around it.',
    ],
    nextMovementId: 'joseph',
  },
};

// The Joseph movement (37-50): the dreamer. The last movement of Genesis, so it carries
// a capstone but no doorway out.
export const JOSEPH_MOVEMENT: Movement = {
  id: 'joseph', index: 4, title: 'Joseph', range: 'Genesis 37–50',
  throughline: 'The favored son is thrown in a pit and sold into Egypt, rises and falls and rises again by reading dreams, and at last faces the brothers who betrayed him and chooses to read the whole wreckage as a providence that meant it for good.',
  chapterStart: 37, chapterEnd: 50,
  situation: {
    kicker: 'The ground beneath the Joseph story',
    title: 'A different kind of story, told to exiles',
    image: '/images/gen-joseph.webp',
    paragraphs: [
      'The Joseph narrative reads unlike anything before it in Genesis. It is one long, artfully built novella rather than a chain of episodes, a single plot running unbroken from the pit to the deathbed, its foreshadowing and reversals and recognitions all worked out with a novelist’s control.',
      'And God acts in it differently. There are no more night visions or voices from the fire, no walking in the garden in the cool of the day. For chapters at a stretch heaven is silent, and the providence is hidden inside ordinary events, a sold slave, a false charge, a forgotten promise, a famine, until at the very end a single character names what was going on underneath all along.',
      'For a people who had themselves been carried off to Egypt and Babylon, a story about an Israelite enslaved in Egypt, who rises in a foreign court, keeps his family alive through catastrophe, and insists that God was at work in the disaster the whole time, was not a tale about the distant past. It was a way to read their own exile, and to dare to trust it.',
    ],
    sources: 'von Rad · Alter · Westermann',
  },
  capstone: {
    kicker: 'The shape of the Joseph story',
    title: 'You meant it for evil, God meant it for good',
    paragraphs: [
      'The favored son is stripped, pitted, and sold by his own brothers, and for the length of the story heaven says nothing. No voice, no rescue, no explanation. God works, if he works at all, hidden inside a string of ordinary disasters: a slave sold, a woman’s lie, a forgotten promise, a famine. The whole movement is a study in a providence that never once announces itself.',
      'And it asks to be read forward and backward at the same time. Lived forward, it is a chain of catastrophes a man simply has to survive. Read backward, from the top of Egypt, the very same events line up into a road that kept a whole family alive through famine. Joseph names it twice and never softens the crime: you meant evil against me; God meant it for good. Both halves stand. The brothers are guilty and God is not defeated, and the book will not release either one.',
      'It is the hardest and most grown-up thing Genesis says. Not that the evil was secretly fine, and not that the suffering meant nothing, but that a real wound and a real providence can occupy the same history. And it ends, on purpose, unresolved: not in the promised land but in a coffin in Egypt, the family fed but far from home, holding a promise that God will one day carry them up.',
    ],
    tensions: [
      { claim: 'God meant it for good; the whole ordeal was a providence working toward the saving of many lives.', counter: 'You meant it for evil; the brothers are never excused, the crime is named to their faces, and Genesis ends not in rescue but in a coffin and a promise not yet kept.', where: 'Genesis 50:20, and the book ending in Egypt' },
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
    'Genesis is one long story about a blessing, and what keeps happening to it. It opens with a world spoken into being and called good, a blessing poured out over everything, and almost at once the blessing fractures: trust broken in a garden, a brother killed, a tower raised in pride, until the whole world is scattered and the page goes quiet. The first eleven chapters diagnose the entire human condition, and then narrow, hard, to a single cure.',
    'From there the blessing travels through one crooked family. It is promised to a childless old man and held against every impossibility, and learned, slowly, to be carried open-handed rather than grasped. It falls on a heel-grabber who has to be wrestled down and lamed before he can bear it. And it survives a betrayal that should have ended it, when a favored son is sold by his brothers and rises, in silence, to keep them all alive. Four movements, one promise, handed down through liars and rivals and the wronged, never because the people were good, only because grace would not let go.',
    'And it does not end in arrival. The book that began with God’s breath over the waters closes with a body in a coffin in Egypt and a promise not yet kept: God will surely visit you, and bring you up. The people who assembled Genesis were themselves in exile, far from home, holding the same kind of unfinished promise, and they built a book that ends exactly where they were standing, in the middle, between the promise and its keeping, and told to trust the One who made it.',
  ],
  tensions: [
    { claim: 'The blessing always wins through; the promise survives every fracture and every betrayal.', counter: 'Genesis ends not in the promised land but in Egypt, in a coffin, the rescue still only a word, and the book holds its completion deliberately out of reach.', where: 'Genesis 1:1 against 50:26' },
  ],
  sources: 'von Rad · Westermann · Clines · Alter',
  ask: 'Genesis ends in the middle, between a promise made and a promise not yet kept. Where in your own life are you being asked to live in that gap, and to trust the One who made the promise?',
};

// The introduction to the whole book: what Genesis is and how to read it, shown at the
// head of the book page before the movements. Book-level grounding, the counterpart to
// each movement's situation panel.
export const GENESIS_INTRO: Panel = {
  kicker: 'An introduction · Genesis 1–50',
  title: 'The book of beginnings',
  paragraphs: [
    'Genesis is the first book of the Bible, and the word means beginning. It is the book of origins: of the world and the sky and the sea, of humanity, of work and rest, of the first wrong and the first death, and of the family through whom the rest of the story will come. Almost everything the Bible says later starts somewhere in here.',
    'It comes in two parts. Chapters 1 to 11 are about everyone, the whole human story painted in broad, deep-time strokes: creation, the garden, Cain and Abel, the flood, the tower of Babel. Then from chapter 12 the lens narrows to one family across four generations, Abraham, Isaac, Jacob, and Joseph, and follows them all the way down to the end.',
    'The story runs from the first light over the waters to a coffin in Egypt: a world made and broken, a promise made to one old man, and a family carried through famine and betrayal toward a homecoming that has still not arrived when the book closes. From beginning to end it is one long story about a blessing, and what keeps happening to it.',
  ],
};
