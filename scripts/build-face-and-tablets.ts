// Build Exodus 33 and 34 as two readings, and place them in the book.
//
// No tension is placed on either reading, by design. The counter-voice that chapter 34's
// generational clause needs has already been used twice in this book, and a third use at passage
// level would read as a tic. It is deferred to the book capstone, where a book-length argument
// about whether guilt travels can actually be held.
//
// Usage: npx tsx scripts/build-face-and-tablets.ts
import { BSB_EXODUS } from "@/content/bsb-exodus";
import { placeReadingInFile } from "./place-reading";

const q = (s: string) => JSON.stringify(s);
const R = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);
const verses = (chapter: number, ns: number[]) =>
  ns
    .map((n) => {
      const text = BSB_EXODUS[`${chapter}:${n}`];
      if (text === undefined)
        throw new Error(`no BSB verse at ${chapter}:${n}`);
      return `          { n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");

const face = `  {
    id: "ex-33",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 33",
    chapterIndex: 33,
    title: "Show me your glory",
    unitLabel: "Scene",
    thread: "God offers to send an angel instead of coming himself, and Moses refuses the offer. Then he asks for more than he has been given.",
    closeEnd: "He is put in a cleft of rock with a hand over him, and what he is shown is a back.",
    passages: [
      {
        label: "One",
        ref: "33:1–6",
        kind: "scene",
        form: "prose",
        title: "I will not go up among you",
        verses: [
${verses(33, R(1, 6))}
        ],
        ground: {
          kind: "historical",
          text: "After the calf, God tells them to go up to the land and says he will send an angel ahead of them, but will not go in their midst himself, because they are a stiff-necked people and he might destroy them on the way. The people hear it and mourn, and nobody puts on any ornaments. The word for ornaments is the same kind of thing the calf was made from.",
          src: "Childs · Propp · Fretheim",
        },
        meaning:
          "This is the offer that sounds generous and is not. You get the land, the angel, the protection, the promise kept in every particular, and you do not get God going with you. The people understand immediately that this is a demotion and they mourn over it, which is the first properly good sign they have given in the book. Something has been learned. They would rather have the presence than the package.",
        addr: {
          mode: "names",
          text: "You can be given everything you asked for and notice that the one thing you actually wanted is missing from the delivery.",
        },
        ask: "What would you rather have: the outcome you have been praying for, or the sense that God is with you in it?",
      },
      {
        label: "Two",
        ref: "33:7–11",
        kind: "scene",
        form: "prose",
        title: "Outside the camp",
        verses: [
${verses(33, R(7, 11))}
        ],
        ground: {
          kind: "historical",
          text: "A different tent from the one being built: a tent of meeting pitched outside the camp, at a distance, where anyone seeking the LORD would go. When Moses went out the whole people stood and watched from their own doorways, and the cloud came down, and the text says the LORD spoke with Moses face to face, as a man speaks with his friend. Joshua stayed in the tent when Moses left.",
          src: "Propp · Childs",
        },
        meaning:
          "Everyone stands in their doorway and watches somebody else go in. That is the picture, and it is worth sitting with before the tabernacle gets built and makes it official. The face to face here is not a contradiction of what comes later in the chapter, where the face cannot be seen; it is the idiom for speaking plainly and directly, the way friends do. What the people get is the sight of a man walking to a tent, and a cloud, and the report afterward.",
        lenses: {
          arch: "The mediator whose access everyone else watches from a distance, and the mixture of gratitude and resentment that arrangement always produces. (Standing in the doorway.)",
        },
      },
      {
        label: "Three",
        ref: "33:12–23",
        kind: "scene",
        form: "prose",
        title: "You cannot see my face",
        verses: [
${verses(33, R(12, 23))}
        ],
        ground: {
          kind: "historical",
          text: "Moses presses. He asks to be shown God's ways, refuses the offer of an angel outright, and says if your Presence does not go with us, do not lead us up from here. He gets what he asks for. Then he asks for one thing more: show me your glory. The answer is a distinction. Goodness will pass by, and the name will be proclaimed, and mercy will be given to whom it is given. But the face cannot be seen by anyone living. A cleft in the rock, a hand over it while the glory passes, and afterward, the back.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "This is the closest approach to God in the Hebrew Bible and what it delivers is a description of what was seen going away. Not a refusal, exactly: he is given the goodness, the name, the presence for the journey, everything he asked for on behalf of the people. What he is refused is the face, and the reason given is not that God is unwilling but that no one could survive it. The book's most intimate scene ends with a man who has been spoken to as a friend being hidden by a hand so he is not destroyed by what he asked to see.",
        lenses: {
          theo: "Everything granted here is relational and nothing is a vision: the name, the goodness, the promise to go along. Presence is offered without disclosure, which is the arrangement the rest of scripture works inside.",
        },
        addr: {
          mode: "names",
          text: "You have wanted to be shown something outright rather than accompanied through it. This scene treats that wanting as reasonable, answers most of it, and declines the last part on the grounds that it would not survive you.",
        },
        ask: "What have you asked to be shown, and could you live with being accompanied instead?",
      },
    ],
  },`;

const tablets = `  {
    id: "ex-34",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 34 (selected)",
    chapterIndex: 34,
    title: "The second tablets",
    unitLabel: "Scene",
    thread: "Moses cuts the stones himself this time. What is proclaimed over them is the sentence the rest of the Bible quotes about God more than any other, and it has two halves that do not sit easily together.",
    closeEnd: "He comes down with a face he cannot see, and starts wearing a veil so other people can look at him.",
    passages: [
      {
        label: "One",
        ref: "34:1–9",
        kind: "scene",
        form: "prose",
        title: "The name proclaimed",
        verses: [
${verses(34, R(1, 9))}
        ],
        ground: {
          kind: "historical",
          text: "The first tablets were given; these Moses cuts himself and carries up. Then the LORD passes in front of him and proclaims a formula that recurs throughout the Bible, in the psalms, in Joel, in Jonah, in Nehemiah: compassionate and gracious, slow to anger, abounding in loving devotion and faithfulness, forgiving iniquity and transgression and sin. And, in the same breath, by no means leaving the guilty unpunished, visiting the iniquity of the fathers on the children to the third and fourth generation.",
          src: "Childs · Fretheim · Propp",
        },
        meaning:
          "This is the nearest thing to a definition of God's character in the Hebrew Bible, and the book puts it in God's own mouth immediately after the worst thing the people have done. Both halves are one sentence. The generational clause is the harder half and it should not be smoothed: it describes consequence running downhill through families, which anyone who has watched one knows happens, and it says God is somehow behind that. Later voices in the canon push back on it hard, and the pushing back is worth its own hearing rather than a footnote here. What is not in dispute is which half the rest of the Bible quotes. When Jonah wants to explain why he ran, he quotes the mercy.",
        lenses: {
          theo: "The formula is proclaimed after the calf rather than before it, which is the placement doing the work. It is a description of what this God is like given at the moment the people have least claim on it.",
        },
      },
      {
        label: "Two",
        ref: "34:10–28 (selected)",
        kind: "scene",
        form: "prose",
        title: "The covenant again",
        verses: [
${verses(34, [10, 11, 12, 14, 17, 21, 27, 28])}
        ],
        ground: {
          kind: "historical",
          text: "The covenant is renewed with a short set of terms rather than the full code: make no molten idols, make no treaties with the peoples of the land, keep the festivals, and rest on the seventh day even in ploughing time and harvest. The line about a jealous God uses a word closer to zealous or fiercely committed than to petty envy. Forty days again, and this time Moses writes.",
          src: "Propp · Meyers",
        },
        meaning:
          "A second chance arrives with the same terms rather than easier ones, which is worth noticing. Nothing is relaxed to account for what happened. And the small clause about ploughing time and harvest is the one that gives it away: rest is commanded precisely in the two weeks of the year when stopping costs most. A renewal that asked less would have been a different covenant with a lower opinion of the people in it.",
      },
      {
        label: "Three",
        ref: "34:29–35",
        kind: "scene",
        form: "prose",
        title: "The veil",
        verses: [
${verses(34, R(29, 35))}
        ],
        ground: {
          kind: "historical",
          text: "He comes down with the tablets and does not know his face is shining. Aaron and the people are afraid to come near him, so he covers it with a veil, and from then on he wears it whenever he speaks to them and takes it off when he goes in to speak with God. The Hebrew word for the radiance is unusual and was read centuries later, through Latin, as horns, which is why Michelangelo's Moses has them.",
          src: "Propp · Childs",
        },
        meaning:
          "The man who asked to see a face comes back down with one nobody can look at, and he is the last to know. Then the arrangement that closes the chapter: a veil on for the people, off for God. Whatever proximity does to a person, it is not something they can see in themselves and it makes other people uneasy. He does not explain it or defend it. He covers it up so the conversation can carry on.",
        addr: {
          mode: "names",
          text: "Whatever has changed in you through what you have been through is probably more obvious to other people than to you, and it may be the thing they find hardest to be near.",
        },
        ask: "What has changed in you that you cannot see, and who has told you about it?",
      },
    ],
  },`;

placeReadingInFile("content/exodus.ts", face, "ex-33", 33);
placeReadingInFile("content/exodus.ts", tablets, "ex-34", 34);
console.log("Placed ex-33 (3 scenes) and ex-34 (3 scenes).");
