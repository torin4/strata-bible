// Build Exodus 32, the golden calf, and place it in the book.
//
// The movement's hardest chapter. The killing of about three thousand people by the Levites is
// present in the text, named as difficult, not justified and not resolved. The mode for law that
// no longer binds a reader is unavailable here: this is not legislation, it is a narrative the
// book approves of. Usage: npx tsx scripts/build-golden-calf.ts
import { BSB_EXODUS } from "@/content/bsb-exodus";
import { placeReadingInFile } from "./place-reading";

const q = (s: string) => JSON.stringify(s);
const verses = (ns: number[]) =>
  ns
    .map((n) => {
      const text = BSB_EXODUS[`32:${n}`];
      if (text === undefined) throw new Error(`no BSB verse at 32:${n}`);
      return `          { n: ${n}, text: ${q(text)} },`;
    })
    .join("\n");

const reading = `  {
    id: "ex-32",
    bookId: "exodus",
    tier: "sitting",
    span: "Exodus 32",
    chapterIndex: 32,
    title: "The golden calf",
    unitLabel: "Scene",
    thread: "Moses is up the mountain too long. What happens at the bottom of it is not a switch to another god, which is what makes it worse rather than better.",
    closeEnd: "The chapter ends with a plague and no repair. What repairs it takes two more chapters and a second set of tablets.",
    passages: [
      {
        label: "One",
        ref: "32:1–6",
        kind: "scene",
        form: "prose",
        title: "Make us gods",
        verses: [
${verses([1, 2, 3, 4, 5, 6])}
        ],
        ground: {
          kind: "historical",
          text: "Forty days is a long time to wait at the foot of a mountain that has been on fire. The people ask Aaron for gods to go before them, since they do not know what has become of this Moses. He asks for their gold earrings, makes a calf, and the people say these are your gods who brought you up out of Egypt. Then Aaron builds an altar in front of it and announces a feast to the LORD, using the name.",
          src: "Childs · Propp · Fretheim",
        },
        misreading: {
          named:
            "They abandoned the LORD for a different god, which is idolatry of the obvious kind.",
          why: "Read what Aaron actually says. He builds the altar and calls the feast a feast to the LORD, by name, and the calf is credited with the exodus, which is the LORD's act. Nobody in the scene thinks they have changed gods. They have made an image of the one who brought them out, because he has been silent for forty days and an image can be seen. That is a harder failure to dismiss than swapping deities, because it is the one available to people who are quite sure they are being faithful.",
        },
        meaning:
          "The command they have just agreed to, twice, is the one about images, and they break it within six weeks using the correct divine name. The bull was a standard pedestal for a god in the region, a platform for an invisible deity to stand on rather than the deity itself, which makes the failure subtler still. What they wanted was not another god. It was this God, present, portable and visible, on their schedule. Which, as the previous seven chapters have been explaining at length, was already being arranged.",
        lenses: {
          arch: "The image made because the wait became unbearable, standing in for something that was already on its way. (Impatience carved into a shape.)",
        },
      },
      {
        label: "Two",
        ref: "32:7–14",
        kind: "scene",
        form: "prose",
        title: "Moses argues",
        verses: [
${verses([7, 8, 9, 10, 11, 12, 13, 14])}
        ],
        ground: {
          kind: "historical",
          text: "God tells Moses to go down, calls them your people whom you brought up out of Egypt, and proposes to destroy them and make a great nation of Moses instead. Moses argues him out of it in three moves: they are your people, you brought them out; the Egyptians will say you took them out to kill them in the mountains; and remember Abraham, Isaac and Israel, to whom you swore by your own self. The text then says the LORD relented.",
          src: "Fretheim · Childs · Propp",
        },
        meaning:
          "The intercession is an argument with content, not a formality. Moses does not plead the people's merits, because there are none available. He appeals to what God has already done, to what the neighbours will conclude, and to promises made centuries earlier to men long dead. And he refuses the offer to become a new Abraham himself, which is the part most easily missed. He is offered a nation of his own and turns it down to keep the one that just made a calf.",
        lenses: {
          theo: "Scripture is willing to say that God relented, and to show a man changing God's mind by argument. Whatever that means about the nature of God, the text does not soften it, and it is not an isolated case.",
        },
      },
      {
        label: "Three",
        ref: "32:15–35 (selected)",
        kind: "scene",
        form: "prose",
        title: "Down the mountain",
        verses: [
${verses([15, 19, 20, 21, 22, 24, 26, 27, 28, 30, 32, 33, 35])}
        ],
        ground: {
          kind: "historical",
          text: "Moses comes down with the tablets, sees the calf and the dancing, and throws them down at the foot of the mountain. He burns the calf, grinds it to powder, scatters it on water and makes them drink it. Then he asks Aaron what the people did to him, and Aaron's answer is that he threw the gold into the fire and out came this calf. Then Moses calls for whoever is for the LORD, the Levites come, and he sends them through the camp.",
          src: "Propp · Childs",
        },
        meaning:
          "Three things happen here and only one of them is comfortable. Aaron, whose vestments were specified four chapters ago in more detail than the ark, gives an excuse so thin it is almost comic, and the text lets him stand there holding it. Moses offers to be blotted out of God's book rather than see the people destroyed, which is the high point of his life. And in between, he sends the Levites through the camp with swords and about three thousand people die, and the chapter treats it as the act that qualifies them for priesthood.\\n\\nThat last one is not softened here and will not be. It is not ancient law that can be marked as no longer binding; it is a killing the narrative approves of, and no reading offered in this app makes it sit easily. It is in the book. The movement's look-back returns to it and does not dispose of it either.",
        addr: {
          mode: "names",
          text: "You have waited for something long enough to start building a substitute, and you have probably also given an account of how it happened that was not quite what happened.",
        },
        ask: "What did you make for yourself while you were waiting, and how did you explain it afterward?",
      },
    ],
  },`;

placeReadingInFile("content/exodus.ts", reading, "ex-32", 32);
console.log("Placed ex-32: 3 scenes.");
