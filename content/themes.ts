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
    blurb: "Someone or something you loved is gone.",
  },
  {
    key: "god-feels-absent",
    label: "When God feels far",
    blurb: "You pray, and God seems silent or far away.",
  },
  {
    key: "doubt",
    label: "Doubt",
    blurb: "What you were promised and what you can see do not match.",
  },
  {
    key: "waiting",
    label: "Waiting on what hasn’t come",
    blurb: "You were promised something, and it still has not come.",
  },
  {
    key: "fear",
    label: "Fear and uncertainty",
    blurb: "You cannot see what is coming, and you are afraid of it.",
  },
  {
    key: "loneliness",
    label: "Loneliness",
    blurb: "You feel alone, whether or not there are people around you.",
  },
  {
    key: "shame",
    label: "Shame and exposure",
    blurb: "Someone has seen you at your worst, and you want to hide.",
  },
  {
    key: "guilt",
    label: "Guilt",
    blurb: "You did something wrong, and it is yours to own.",
  },
  {
    key: "anger",
    label: "Anger and resentment",
    blurb: "You are holding on to anger or a grudge, and it is growing.",
  },
  {
    key: "injustice",
    label: "Injustice",
    blurb: "People with power are crushing people who have none.",
  },
  {
    key: "powerlessness",
    label: "Powerlessness",
    blurb: "Something too big for you to fight has control over your life.",
  },
  {
    key: "undeserved-suffering",
    label: "Suffering you didn’t earn",
    blurb: "You did nothing to deserve this, and you are suffering anyway.",
  },
  {
    key: "divided-self",
    label: "Doing what you don’t want to",
    blurb: "You want to do what is good, and you keep doing the opposite.",
  },
  {
    key: "temptation",
    label: "Temptation",
    blurb: "A rule or limit in your life has started to feel like a cage.",
  },
  {
    key: "limits",
    label: "A limit you resent",
    blurb:
      "You keep thinking about the one thing you cannot have and forget all you were given.",
  },
  {
    key: "calling",
    label: "Leaving for the unknown",
    blurb:
      "You are being asked to leave before you can see where you are going.",
  },
  {
    key: "starting-over",
    label: "Starting over",
    blurb: "You have a fresh start, but you cannot go back to how things were.",
  },
  {
    key: "ambition",
    label: "The need to matter",
    blurb:
      "You want to build something so that people will remember your name.",
  },
  {
    key: "deferred-hope",
    label: "A hope you stopped believing",
    blurb:
      "You stopped believing in a hope so that it could not hurt you again.",
  },
  {
    key: "control",
    label: "Grasping for control",
    blurb: "You are trying to force something you were told to wait for.",
  },
  {
    key: "overlooked",
    label: "Being unseen",
    blurb: "People pass over you or your work as if you were not there.",
  },
  {
    key: "fear-of-loss",
    label: "Fear of losing what you love",
    blurb: "The person or thing you love most is at risk.",
  },
  {
    key: "the-outsider",
    label: "The stranger and the outsider",
    blurb:
      "You are deciding how to treat someone from outside, or you are the outsider.",
  },
  {
    key: "faith-and-fairness",
    label: "When faith and fairness clash",
    blurb: "You did what was right, and the reward you expected never came.",
  },
  // The two Exodus adds. Genesis's vocabulary assumes the reader is the one suffering, which
  // covers a book of family betrayals but not a book with an oppressor in it. Complicity names
  // the side of a liberation story most readers of this app actually stand on, and deliverance
  // names the part Genesis never reaches: what it is like afterward.
  {
    key: "complicity",
    label: "Benefiting from someone else’s loss",
    blurb:
      "Your comfortable life depends on hard work that other people do for you.",
  },
  {
    key: "deliverance",
    label: "Getting out",
    blurb:
      "You have escaped what held you, but you have not yet arrived anywhere new.",
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
      "For when part of your life feels shapeless and stuck, and you are waiting for the first word that will give it shape.",
  },
  "gen-25b": {
    themes: ["anger", "temptation", "control"],
    speaksTo:
      "For a rivalry you were born into, and for the times you traded something lasting for something you wanted right away.",
  },
  "gen-27": {
    themes: ["guilt", "control", "overlooked"],
    speaksTo:
      "For when you wanted a blessing so badly that you took it by deceit, and for the person who arrived too late to receive it.",
  },
  "gen-28": {
    themes: ["loneliness", "guilt", "fear"],
    speaksTo:
      "For when you are running from something you did, alone in a bleak place, and find that God has not left you.",
  },
  "gen-29": {
    themes: ["overlooked", "loneliness", "guilt"],
    speaksTo:
      "For when you keep working to earn a love that does not come, and when someone deceives you the way you once deceived others.",
  },
  "gen-32": {
    themes: ["doubt", "fear", "starting-over"],
    speaksTo:
      "For the night before something you dread, when you hold on to God in the dark and refuse to let go until he blesses you.",
  },
  "gen-33": {
    themes: ["guilt", "fear"],
    speaksTo:
      "For when you dread facing someone you wronged, and they meet you with open arms instead of anger.",
  },
  "gen-34": {
    themes: ["injustice", "overlooked", "anger"],
    speaksTo:
      "For when other people take up your pain as their own cause and speak so loudly for you that no one hears you anymore.",
  },
  "gen-37": {
    themes: ["god-feels-absent", "injustice", "grief"],
    speaksTo:
      "For when your own family betrays you, and the thing you dreaded happens while God seems to say nothing.",
  },
  "gen-38": {
    themes: ["injustice", "overlooked"],
    speaksTo:
      "For when someone with power over you owes you something, you have no clean way to claim it, and you fight for it anyway.",
  },
  "gen-39": {
    themes: ["temptation", "injustice", "faith-and-fairness"],
    speaksTo:
      "For when you do the right thing and are punished for it, and you wonder whether God is still with you.",
  },
  "gen-41": {
    themes: ["waiting", "starting-over"],
    speaksTo:
      "For when God does not take you out of a hard season but helps you bear fruit inside it.",
  },
  "gen-42": {
    themes: ["guilt", "fear-of-loss"],
    speaksTo:
      "For when an old guilt comes back under pressure, and for when you choose to stand in the gap for someone you love.",
  },
  "gen-45": {
    themes: ["grief", "faith-and-fairness"],
    speaksTo:
      "For when you admit honestly that someone betrayed you, yet refuse to let that betrayal be the only meaning of your life.",
  },
  "gen-50": {
    themes: ["faith-and-fairness", "injustice"],
    speaksTo:
      "For when someone meant to harm you, and you slowly learn to trust that God can bring good out of it without pretending the harm was not real.",
  },
  "gen-2": {
    themes: ["limits", "loneliness"],
    speaksTo:
      "For when you can think only about the one thing you are not allowed, and forget everything good you have been given.",
  },
  "gen-3": {
    themes: ["temptation", "shame", "guilt"],
    speaksTo:
      "For when a rule starts to feel like a cage, and for when you got what you wanted and felt more exposed than before.",
  },
  "gen-4": {
    themes: ["anger", "overlooked", "guilt"],
    speaksTo:
      "For when your best effort is ignored while someone else’s is welcomed, and resentment is growing in you.",
  },
  "gen-6": {
    themes: ["limits", "grief", "fear"],
    speaksTo:
      "For when the world has gone badly wrong, and you need to know that God grieves over it rather than simply raging at it.",
  },
  "gen-8": {
    themes: ["waiting", "starting-over"],
    speaksTo:
      "For the long wait after the worst is over, when the disaster has passed but you still cannot step out and start again.",
  },
  "gen-9": {
    themes: ["starting-over", "the-outsider"],
    speaksTo:
      "For when you are given a fresh start, but you cannot go back to how things were before.",
  },
  "gen-11": {
    themes: ["ambition", "control", "fear"],
    speaksTo:
      "For when you are building something mainly so that people will remember your name.",
  },
  "gen-12": {
    themes: ["calling", "fear", "waiting"],
    speaksTo:
      "For when God asks you to leave something settled and follow a promise you cannot yet see.",
  },
  "ex-1": {
    themes: ["complicity", "injustice", "powerlessness"],
    speaksTo:
      "For when your life depends on hard work that other people do, and for the small ways people with no power can still refuse to do wrong.",
  },
  "ex-2": {
    themes: ["waiting", "the-outsider", "starting-over"],
    speaksTo:
      "For the long years when nothing seems to change, when you are working for someone else and do not feel at home anywhere.",
  },
  "ex-3": {
    themes: ["calling", "limits", "doubt"],
    speaksTo:
      "For when God asks you to do something beyond you, and instead of telling you who you are, he promises to be with you.",
  },
  "ex-5": {
    themes: ["god-feels-absent", "faith-and-fairness", "powerlessness"],
    speaksTo:
      "For when you did what you believed God asked of you and it made everything worse, and you want to tell him so.",
  },
  "ex-7": {
    themes: ["divided-self", "control", "injustice"],
    speaksTo:
      "For when you have refused something so many times that the refusal has become part of who you are, and for the terrible cost of a rescue.",
  },
  "ex-12": {
    themes: ["complicity", "deliverance", "grief"],
    speaksTo:
      "For the freedom you inherited that someone else paid for, and for learning to hold the gift and its cost together.",
  },
  "ex-14": {
    themes: ["fear", "powerlessness", "starting-over"],
    speaksTo:
      "For when going back looks sensible, going forward looks impossible, and standing still is unbearable.",
  },
  "ex-15a": {
    themes: ["deliverance", "waiting", "god-feels-absent"],
    speaksTo:
      "For when you have come through something you could see no way past, and you need words to thank God for it.",
  },
  "ex-15b": {
    themes: ["deliverance", "doubt", "waiting"],
    speaksTo:
      "For the short time between one rescue and the next need, when you find that God’s last answer does not cover this new trouble.",
  },
  "ex-16": {
    themes: ["control", "fear-of-loss", "limits"],
    speaksTo:
      "For when you are storing up more than you need for today, and for the fear that makes you do it.",
  },
  "ex-17": {
    themes: ["god-feels-absent", "limits", "loneliness"],
    speaksTo:
      "For when your anger is really a question about whether God is with you, and for when you need someone to hold up your arms.",
  },
  "ex-18": {
    themes: ["limits", "the-outsider", "overlooked"],
    speaksTo:
      "For the habit in how you work that you cannot see yourself, though an outsider would notice it in a day.",
  },
  "ex-19": {
    themes: ["calling", "fear", "waiting"],
    speaksTo:
      "For when you said yes to God before you knew what he would ask, and for wanting to meet him without knowing what that would be like.",
  },
  "ex-21": {
    themes: ["injustice", "complicity", "powerlessness"],
    speaksTo:
      "For the parts of the Bible you wish were not there, and for the ways a society can put a price on a human being.",
  },
  "ex-22": {
    themes: ["the-outsider", "injustice", "complicity"],
    speaksTo:
      "For learning to treat others well because you remember what it was like to be mistreated, and for who gets to rest because of how you plan your week.",
  },
  "ex-24": {
    themes: ["calling", "fear", "deliverance"],
    speaksTo:
      "For the promises you made that you cannot later pretend you never made, and for the wonder of eating in God’s presence.",
  },
  "ex-25": {
    themes: ["god-feels-absent", "waiting", "overlooked"],
    speaksTo:
      "For when you want God to stay with you rather than visit, and for the unseen work of keeping a light burning through the night.",
  },
  "ex-28": {
    themes: ["calling", "overlooked", "limits"],
    speaksTo:
      "For when you carry other people before God in prayer, and for treating your skill as a gift rather than an achievement.",
  },
  "ex-32": {
    themes: ["waiting", "guilt", "god-feels-absent"],
    speaksTo:
      "For what you built for yourself when the waiting went on too long, and for the excuses you made afterward.",
  },
  "ex-33": {
    themes: ["god-feels-absent", "doubt", "loneliness"],
    speaksTo:
      "For when you are offered everything you asked for except the presence of God you actually wanted.",
  },
  "ex-34": {
    themes: ["guilt", "starting-over", "faith-and-fairness"],
    speaksTo:
      "For a second chance that comes on the same terms as the first, and for the change in you that you cannot see yourself.",
  },
  "ex-35": {
    themes: ["starting-over", "deliverance", "waiting"],
    speaksTo:
      "For when you turn the same energy that once went badly wrong toward something good, and for guidance that only shows you today.",
  },
  "ex-20": {
    themes: ["limits", "divided-self", "guilt"],
    speaksTo:
      "For wanting to know what God actually asks of you, and for the part of you that resents being told at all.",
  },
  "gen-15": {
    themes: ["doubt", "waiting", "god-feels-absent"],
    speaksTo:
      "For when every fact in front of you contradicts what God told you to trust.",
  },
  "gen-16": {
    themes: ["control", "overlooked", "waiting"],
    speaksTo:
      "For when you could not bear the waiting and grabbed at control, or when you were the one overlooked in someone else’s plan.",
  },
  "gen-18": {
    themes: ["deferred-hope", "doubt"],
    speaksTo:
      "For the tired, private laugh you give when someone mentions a hope you have stopped letting yourself believe.",
  },
  "gen-19": {
    themes: ["injustice", "the-outsider"],
    speaksTo:
      "For when a crowd wants to make an outsider pay, and for the life you left behind that you cannot stop looking back at.",
  },
  "gen-21": {
    themes: ["deferred-hope", "guilt"],
    speaksTo:
      "For when a hope you waited years for finally comes true, and for the people who were pushed aside so that it could.",
  },
  "gen-22": {
    themes: ["fear-of-loss", "god-feels-absent", "doubt"],
    speaksTo:
      "For when the person you love most is at risk, and you have no good answer to give.",
  },
  "lev-19": {
    themes: ["injustice", "the-outsider"],
    speaksTo:
      "For when you want your faith to show in how you treat people who have less power than you.",
  },
  "rom-7": {
    themes: ["divided-self", "shame", "guilt"],
    speaksTo:
      "For when you keep doing the thing you do not want to do, and take it as proof that you are bad.",
  },
  "prov-10": {
    themes: ["faith-and-fairness", "doubt"],
    speaksTo:
      "For when you did the right thing and the reward you were promised did not come.",
  },
  "rev-13": {
    themes: ["powerlessness", "fear", "injustice"],
    speaksTo:
      "For when some power in your world claims to be the only one that matters and has the reach to ruin you.",
  },
  "job-1": {
    themes: [
      "undeserved-suffering",
      "doubt",
      "faith-and-fairness",
      "god-feels-absent",
    ],
    speaksTo:
      "For suffering you did nothing to deserve, and for refusing to lie about it just to be comforted.",
  },
  "ruth-1": {
    themes: ["grief", "god-feels-absent", "starting-over", "loneliness"],
    speaksTo:
      "For the time after a funeral, when people ask how you are and the true answer is too big to give in passing.",
  },
  "mark-1a": {
    themes: ["calling", "starting-over", "fear-of-loss"],
    speaksTo:
      "For when Jesus calls you without arguing, and asks you to put something down before you understand why.",
  },
  "ruth-2": {
    themes: ["starting-over", "waiting", "the-outsider", "powerlessness"],
    speaksTo:
      "For the first ordinary day of work after your life has changed, and for being noticed by someone who did not have to notice you.",
  },
  "ruth-3": {
    themes: ["fear", "waiting", "powerlessness", "the-outsider"],
    speaksTo:
      "For the night you have to ask for something you cannot demand, from someone who is free to say no.",
  },
  "ruth-4": {
    themes: ["deferred-hope", "grief", "overlooked", "starting-over"],
    speaksTo:
      "For a new life that is not the old one given back, and for work whose results you may never see.",
  },
  "mark-1b": {
    themes: ["shame", "the-outsider", "limits"],
    speaksTo:
      "For something you decided long ago you deserved, and stopped asking God to change.",
  },
  "mark-2": {
    themes: ["shame", "the-outsider", "injustice", "limits"],
    speaksTo:
      "For being the person at the table that others disapprove of, and for living under a rule that someone enforces without asking what it is for.",
  },
  "mark-3": {
    themes: ["loneliness", "calling", "overlooked"],
    speaksTo:
      "For when the people who have known you longest treat what you are doing now as a sign that something is wrong with you.",
  },
  "mark-4": {
    themes: ["doubt", "waiting", "deferred-hope", "god-feels-absent"],
    speaksTo:
      "For work that mostly seems to fail, and for when you start to read God’s delay as a sign that he does not care.",
  },
  "mark-5": {
    themes: ["shame", "the-outsider", "powerlessness", "fear"],
    speaksTo:
      "For being the person everyone has stopped trying to help, and for reaching out to take what you need without asking permission.",
  },
  "mark-6": {
    themes: ["overlooked", "fear", "calling", "doubt"],
    speaksTo:
      "For when the people who knew you first will not listen to you, and for going along with something because backing out would embarrass you.",
  },
  "mark-7": {
    themes: ["the-outsider", "shame", "injustice"],
    speaksTo:
      "For the line you draw between the people who count and the people you treat as exceptions.",
  },
  "mark-8a": {
    themes: ["doubt", "god-feels-absent", "limits"],
    speaksTo:
      "For when God has shown you something more than once, and you still start worrying from the beginning.",
  },
  "mark-8b": {
    themes: ["doubt", "shame", "calling", "fear"],
    speaksTo:
      "For when you give the right answer about Jesus but misunderstand what it means, and for whether you would still follow him if it cost you.",
  },
  "mark-9": {
    themes: ["doubt", "powerlessness", "ambition", "limits"],
    speaksTo:
      "For when you tell God honestly that you both believe and doubt, and he does not turn you away.",
  },
  "mark-10a": {
    themes: ["control", "fear-of-loss", "ambition", "overlooked"],
    speaksTo:
      "For the one thing your whole life is built around, which you hope Jesus will not ask you about.",
  },
  "mark-10b": {
    themes: ["ambition", "deferred-hope", "powerlessness", "the-outsider"],
    speaksTo:
      "For the thing you stopped asking for out loud because it embarrassed the people around you.",
  },
  "mark-11": {
    themes: ["anger", "injustice", "complicity"],
    speaksTo:
      "For a life that looks healthy and full but bears no fruit, and for the difference between losing your temper and judging after a careful look.",
  },
  "mark-12": {
    themes: ["injustice", "complicity", "powerlessness"],
    speaksTo:
      "For a question with no safe answer, and for the poor widow who gives everything to a temple that will soon be destroyed.",
  },
  "mark-13": {
    themes: ["fear", "waiting", "doubt", "deferred-hope"],
    speaksTo:
      "For wanting a date or a sign that would let you stop waiting and watching.",
  },
  "mark-14a": {
    themes: ["fear", "guilt", "loneliness"],
    speaksTo:
      "For when you pray and get no answer, and then get up and do the hard thing anyway.",
  },
  "mark-14b": {
    themes: ["shame", "guilt", "fear"],
    speaksTo:
      "For the wrong you let pass because speaking up would have made things awkward.",
  },
  "mark-15": {
    themes: [
      "god-feels-absent",
      "undeserved-suffering",
      "grief",
      "powerlessness",
    ],
    speaksTo:
      "For dying with your question to God still unanswered, and for the soldier who carried out the execution yet was the one who saw who Jesus was.",
  },
  "mark-16": {
    themes: ["fear", "grief", "doubt", "calling"],
    speaksTo:
      "For when you have been given good news to tell and so far have told no one.",
  },
  "ecc-1": {
    themes: ["limits", "doubt", "overlooked"],
    speaksTo:
      "For when you hope to think your way out of a problem, and fear that nothing you do will last.",
  },
  "ecc-2": {
    themes: ["ambition", "control", "fear-of-loss", "limits"],
    speaksTo:
      "For work that will outlast your control of it, and for refusing to enjoy your work until you know it will last.",
  },
  "ecc-3": {
    themes: ["waiting", "grief", "limits", "powerlessness"],
    speaksTo:
      "For a hard season when no one can tell you how long it will go on, and for the day in front of you while you wait.",
  },
  "ecc-4": {
    themes: ["loneliness", "injustice", "powerlessness"],
    speaksTo:
      "For something you carry alone and have quietly told yourself is a sign of strength.",
  },
  "ecc-5": {
    themes: ["control", "ambition", "fear-of-loss"],
    speaksTo:
      "For the enjoyment you keep putting off until you feel you have earned it.",
  },
  "ecc-6": {
    themes: ["deferred-hope", "control", "limits"],
    speaksTo:
      "For the other life you keep comparing yours to, and for the damage that comparison is doing.",
  },
  "ecc-7": {
    themes: ["faith-and-fairness", "grief", "doubt", "injustice"],
    speaksTo:
      "For a bargain you made with life that has not paid off, though you have not yet admitted it out loud.",
  },
  "ecc-8": {
    themes: ["powerlessness", "injustice", "doubt", "limits"],
    speaksTo:
      "For when someone else gives a confident explanation of your life that has never quite fit.",
  },
  "ecc-9": {
    themes: ["grief", "god-feels-absent", "deferred-hope", "starting-over"],
    speaksTo:
      "For everything you have been putting off until your circumstances settle down.",
  },
  "ecc-10": {
    themes: ["limits", "control", "ambition"],
    speaksTo:
      "For the small, practical thing you have neglected because the big things seem to be under control.",
  },
  "ecc-11": {
    themes: ["waiting", "grief", "starting-over", "limits"],
    speaksTo:
      "For when you have to act without knowing how things will turn out, and for the slow aging of your body.",
  },
  "ecc-12": {
    themes: ["doubt", "faith-and-fairness", "overlooked"],
    speaksTo:
      "For when someone sums up your life accurately and still misses what it was really like.",
  },
};
