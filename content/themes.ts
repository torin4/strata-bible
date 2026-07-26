// The discovery layer: what each sitting speaks to. A controlled vocabulary of
// feelings and struggles (THEMES), and a per-reading map of which themes a sitting
// addresses plus one "speaks to" line (READING_THEMES). This is authored truth: it
// powers the /find index offline and signed out, and keeps the matching in the app's
// voice rather than a black box. Drafted from each reading's meaning/turn/ground for
// review; edit freely. Only the fully-authored sittings are indexed; grounded readings
// join once the companion drafts their middles.

export type ThemeKey =
  | "grief"
  | "god-feels-absent"
  | "doubt"
  | "waiting"
  | "fear"
  | "loneliness"
  | "shame"
  | "guilt"
  | "anger"
  | "injustice"
  | "powerlessness"
  | "undeserved-suffering"
  | "divided-self"
  | "temptation"
  | "limits"
  | "calling"
  | "starting-over"
  | "ambition"
  | "deferred-hope"
  | "control"
  | "overlooked"
  | "fear-of-loss"
  | "the-outsider"
  | "faith-and-fairness"
  | "complicity"
  | "deliverance";

export interface ThemeDef {
  key: ThemeKey;
  label: string; // the chip text
  blurb: string; // a one-line gloss of the feeling
}

// The browse-by-feeling vocabulary. Order is roughly hardest-to-softest, the way a
// reader in trouble might scan it.
export const THEMES: ThemeDef[] = [
  {
    key: "grief",
    label: "Grief and loss",
    blurb: "Something or someone is gone.",
  },
  {
    key: "god-feels-absent",
    label: "When God feels far",
    blurb: "The face is hidden and the line goes quiet.",
  },
  {
    key: "doubt",
    label: "Doubt",
    blurb: "The promise and the facts do not line up.",
  },
  {
    key: "waiting",
    label: "Waiting on what hasn’t come",
    blurb: "It was promised, and still it is not here.",
  },
  {
    key: "fear",
    label: "Fear and uncertainty",
    blurb: "The road ahead is dark and you cannot see it.",
  },
  {
    key: "loneliness",
    label: "Loneliness",
    blurb: "Surrounded, or not, and still alone.",
  },
  {
    key: "shame",
    label: "Shame and exposure",
    blurb: "Caught, seen, wanting to hide.",
  },
  { key: "guilt", label: "Guilt", blurb: "Something is yours to own." },
  {
    key: "anger",
    label: "Anger and resentment",
    blurb: "A rage or a grudge crouching at the door.",
  },
  {
    key: "injustice",
    label: "Injustice",
    blurb: "The powerful crushing the powerless.",
  },
  {
    key: "powerlessness",
    label: "Powerlessness",
    blurb: "Something too big to fight is over you.",
  },
  {
    key: "undeserved-suffering",
    label: "Suffering you didn’t earn",
    blurb: "Blameless, and losing anyway.",
  },
  {
    key: "divided-self",
    label: "Doing what you don’t want to",
    blurb: "Wanting the good and doing the opposite.",
  },
  {
    key: "temptation",
    label: "Temptation",
    blurb: "A boundary starting to look like a cage.",
  },
  {
    key: "limits",
    label: "A limit you resent",
    blurb: "Fixated on the one no, blind to the yes.",
  },
  {
    key: "calling",
    label: "Leaving for the unknown",
    blurb: "Asked to go before you can see where.",
  },
  {
    key: "starting-over",
    label: "Starting over",
    blurb: "A fresh start that is not a return.",
  },
  {
    key: "ambition",
    label: "The need to matter",
    blurb: "Building something so your name will last.",
  },
  {
    key: "deferred-hope",
    label: "A hope you stopped believing",
    blurb: "You laughed it off to protect yourself.",
  },
  {
    key: "control",
    label: "Grasping for control",
    blurb: "Forcing the thing you were told to wait for.",
  },
  {
    key: "overlooked",
    label: "Being unseen",
    blurb: "Your effort, or you, passed over.",
  },
  {
    key: "fear-of-loss",
    label: "Fear of losing what you love",
    blurb: "The thing you love most is the thing at risk.",
  },
  {
    key: "the-outsider",
    label: "The stranger and the outsider",
    blurb: "How you meet the one from outside.",
  },
  {
    key: "faith-and-fairness",
    label: "When faith and fairness clash",
    blurb: "You did right, and the reward did not come.",
  },
  // The two Exodus adds. Genesis's vocabulary assumes the reader is the one suffering, which
  // covers a book of family betrayals but not a book with an oppressor in it. Complicity names
  // the side of a liberation story most readers of this app actually stand on, and deliverance
  // names the part Genesis never reaches: what it is like afterward.
  {
    key: "complicity",
    label: "Benefiting from someone's cost",
    blurb: "Your life runs on work you did not do and would not want to.",
  },
  {
    key: "deliverance",
    label: "Getting out",
    blurb:
      "The thing that held you is behind you, and you are not yet anywhere.",
  },
];

export interface ReadingThemes {
  themes: ThemeKey[];
  speaksTo: string; // one line, the reader-facing reason this sitting might meet you
}

// Per-sitting tags and the "speaks to" line. Keyed by reading id. Drafted from the
// authored layers; review and edit.
export const READING_THEMES: Record<string, ReadingThemes> = {
  "gen-1": {
    themes: ["starting-over", "waiting", "limits"],
    speaksTo:
      "For when something in your life feels unformed and stuck, waiting on you to speak it into being.",
  },
  "gen-25b": {
    themes: ["anger", "temptation", "control"],
    speaksTo:
      "For the rivalry you were born into, and the cold trade of something lasting for something you wanted right now.",
  },
  "gen-27": {
    themes: ["guilt", "control", "overlooked"],
    speaksTo:
      "For wanting a blessing badly enough to take it by a means you would rather not name, and for the cry of the one who arrived too late.",
  },
  "gen-28": {
    themes: ["loneliness", "guilt", "fear"],
    speaksTo:
      "For the night you are running from what you did, bedded down in the bleakest place, and find you were not as alone as you were sure.",
  },
  "gen-29": {
    themes: ["overlooked", "loneliness", "guilt"],
    speaksTo:
      "For the ache of performing for a love that will not come, and the strange justice of being deceived the way you once deceived.",
  },
  "gen-32": {
    themes: ["doubt", "fear", "starting-over"],
    speaksTo:
      "For the night before the thing you dread, holding on to God in the dark and refusing to let go unblessed, even if it leaves you marked.",
  },
  "gen-33": {
    themes: ["guilt", "fear"],
    speaksTo:
      "For the dread of facing someone you wronged, and the grace of being met with open arms when you braced for the blow.",
  },
  "gen-34": {
    themes: ["injustice", "overlooked", "anger"],
    speaksTo:
      "For when your pain is taken up as everyone else’s cause, spoken for so loudly that you vanish from your own story.",
  },
  "gen-37": {
    themes: ["god-feels-absent", "injustice", "grief"],
    speaksTo:
      "For betrayal by your own people, and the silence of heaven in the worst stretch, when the thing you dreaded happens and no voice explains it.",
  },
  "gen-38": {
    themes: ["injustice", "overlooked"],
    speaksTo:
      "For being owed something by someone with power over you, with no clean way to claim it, and the vindication of the one written out of the story.",
  },
  "gen-39": {
    themes: ["temptation", "injustice", "faith-and-fairness"],
    speaksTo:
      "For doing the right thing and being punished for it, and the question of whether God is with you when integrity costs you everything.",
  },
  "gen-41": {
    themes: ["waiting", "starting-over"],
    speaksTo:
      "For the difference between being healed of a hard season and being made, somehow, fruitful inside it.",
  },
  "gen-42": {
    themes: ["guilt", "fear-of-loss"],
    speaksTo:
      "For old guilt resurfacing under pressure, and the cost of stepping into the gap for someone you love.",
  },
  "gen-45": {
    themes: ["grief", "faith-and-fairness"],
    speaksTo:
      "For holding a real betrayal honestly and still refusing to let it be the only thing your life is allowed to mean.",
  },
  "gen-50": {
    themes: ["faith-and-fairness", "injustice"],
    speaksTo:
      "For something someone meant for your harm, and the slow work of trusting it is not the last word without pretending it was not real.",
  },
  "gen-2": {
    themes: ["limits", "loneliness"],
    speaksTo:
      "For when you are fixated on the one no in your life and blind to the whole garden of yes around it.",
  },
  "gen-3": {
    themes: ["temptation", "shame", "guilt"],
    speaksTo:
      "For when a boundary starts to feel like a cage, and getting what you wanted left you more exposed, not less.",
  },
  "gen-4": {
    themes: ["anger", "overlooked", "guilt"],
    speaksTo:
      "For when your best effort falls flat while someone else’s is received, and resentment is crouching at the door.",
  },
  "gen-6": {
    themes: ["limits", "grief", "fear"],
    speaksTo:
      "For when you are raging at the limits you never chose, and need to know you are grieved over, not raged at.",
  },
  "gen-8": {
    themes: ["waiting", "starting-over"],
    speaksTo:
      "For the long wait after the worst is over, when you are past the disaster and still cannot step out of it, watching for ground dry enough to stand on.",
  },
  "gen-9": {
    themes: ["starting-over", "the-outsider"],
    speaksTo:
      "For when you are handed a fresh start that is not a return to how things were.",
  },
  "gen-11": {
    themes: ["ambition", "control", "fear"],
    speaksTo:
      "For when you are building something tall mostly so your name will outlast you.",
  },
  "gen-12": {
    themes: ["calling", "fear", "waiting"],
    speaksTo:
      "For when you are asked to leave something settled for a promise you cannot yet see.",
  },
  "ex-1": {
    themes: ["complicity", "injustice", "powerlessness"],
    speaksTo:
      "For the work underneath your life that someone else is doing, and for the small refusals available to people with no power at all.",
  },
  "ex-2": {
    themes: ["waiting", "the-outsider", "starting-over"],
    speaksTo:
      "For the long stretch where nothing moves and you are keeping someone else’s sheep, and for belonging nowhere while you wait.",
  },
  "ex-3": {
    themes: ["calling", "limits", "doubt"],
    speaksTo:
      "For being asked to do something beyond you, and getting no answer to who am I, only the promise that God will be with you.",
  },
  "ex-5": {
    themes: ["god-feels-absent", "faith-and-fairness", "powerlessness"],
    speaksTo:
      "For when you did the thing you believed you were asked to do and it made everything worse, and you want to say so out loud.",
  },
  "ex-7": {
    themes: ["divided-self", "control", "injustice"],
    speaksTo:
      "For the refusal you have repeated so often it has set into character, and for the cost a rescue can carry that nobody wants to look at.",
  },
  "ex-12": {
    themes: ["complicity", "deliverance", "grief"],
    speaksTo:
      "For what you inherited that somebody else paid for, and for holding the freedom and its cost in the same hand.",
  },
  "ex-14": {
    themes: ["fear", "powerlessness", "starting-over"],
    speaksTo:
      "For the place where going back looks reasonable, going forward looks impossible, and standing still is unbearable.",
  },
  "ex-15a": {
    themes: ["deliverance", "waiting", "god-feels-absent"],
    speaksTo:
      "For the far side of something you could not see a way past, and for words to say about it that also point at what is still ahead.",
  },
  "gen-15": {
    themes: ["doubt", "waiting", "god-feels-absent"],
    speaksTo:
      "For when every fact in front of you contradicts the thing you were told to trust.",
  },
  "gen-16": {
    themes: ["control", "overlooked", "waiting"],
    speaksTo:
      "For when the waiting became unbearable and you grasped, or when you are the one overlooked in someone else’s plan.",
  },
  "gen-18": {
    themes: ["deferred-hope", "doubt"],
    speaksTo:
      "For the tired, private laugh at a hope you have stopped letting yourself believe.",
  },
  "gen-19": {
    themes: ["injustice", "the-outsider"],
    speaksTo:
      "For when the crowd wants to make the outsider pay, and for what you cannot stop looking back at.",
  },
  "gen-21": {
    themes: ["deferred-hope", "guilt"],
    speaksTo:
      "For when a long-deferred hope finally arrives, and for who got pushed to the margins so it could.",
  },
  "gen-22": {
    themes: ["fear-of-loss", "god-feels-absent", "doubt"],
    speaksTo:
      "For when the thing you love most is the thing at risk, and there is no good answer to give.",
  },
  "ps-13": {
    themes: ["god-feels-absent", "doubt", "grief"],
    speaksTo:
      "For the worst days, when God feels hidden and you need words to accuse and still pray.",
  },
  "lev-19": {
    themes: ["injustice", "the-outsider"],
    speaksTo:
      "For when you want your faith to show up in how you treat the people with the least power over you.",
  },
  "rom-7": {
    themes: ["divided-self", "shame", "guilt"],
    speaksTo:
      "For when you keep doing the thing you do not want to do, and read it as proof you are bad.",
  },
  "prov-10": {
    themes: ["faith-and-fairness", "doubt"],
    speaksTo:
      "For when you did the right thing and the reward you were promised did not come.",
  },
  "rev-13": {
    themes: ["powerlessness", "fear", "injustice"],
    speaksTo:
      "For when something in your world claims to be the only power that matters, with the reach to ruin you.",
  },
  "job-1": {
    themes: [
      "undeserved-suffering",
      "doubt",
      "faith-and-fairness",
      "god-feels-absent",
    ],
    speaksTo:
      "For suffering you did not earn, and the refusal to lie about it just to be comforted.",
  },
};
