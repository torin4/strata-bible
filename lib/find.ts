import type { ThemeKey } from "@/content/themes";

// A compact, client-shippable record of one indexed sitting. Built on the server from
// the full content so the heavy readings never reach the browser; only this lands.
export interface FindEntry {
  id: string;
  bookId: string;
  bookTitle: string;
  title: string;
  span: string;
  tier: string;
  themes: ThemeKey[];
  speaksTo: string;
  haystack: string; // normalized title + speaksTo + theme labels + thread/meaning/turn
}

// Natural feeling-words mapped to the themes they imply, so a free-text query like
// "I feel abandoned" or "everything I do falls apart" routes to the right sittings even
// when the reader's words never appear in the text. One word may imply several themes.
export const SYNONYMS: Record<string, ThemeKey[]> = {
  grief: ["grief"],
  grieving: ["grief"],
  loss: ["grief"],
  lost: ["grief"],
  mourning: ["grief"],
  mourn: ["grief"],
  death: ["grief"],
  died: ["grief"],
  dying: ["grief", "fear-of-loss"],
  abandoned: ["god-feels-absent", "loneliness"],
  forsaken: ["god-feels-absent"],
  distant: ["god-feels-absent"],
  absent: ["god-feels-absent"],
  silent: ["god-feels-absent"],
  silence: ["god-feels-absent"],
  unanswered: ["god-feels-absent", "waiting"],
  doubt: ["doubt"],
  doubting: ["doubt"],
  unsure: ["doubt"],
  question: ["doubt"],
  questioning: ["doubt"],
  uncertain: ["doubt", "fear"],
  waiting: ["waiting"],
  wait: ["waiting"],
  delay: ["waiting"],
  delayed: ["waiting"],
  afraid: ["fear"],
  fear: ["fear"],
  scared: ["fear"],
  anxious: ["fear"],
  anxiety: ["fear"],
  worried: ["fear"],
  worry: ["fear"],
  dread: ["fear"],
  panic: ["fear"],
  future: ["fear"],
  lonely: ["loneliness"],
  loneliness: ["loneliness"],
  alone: ["loneliness", "god-feels-absent"],
  isolated: ["loneliness"],
  ashamed: ["shame"],
  shame: ["shame"],
  exposed: ["shame"],
  embarrassed: ["shame"],
  humiliated: ["shame"],
  hiding: ["shame"],
  guilt: ["guilt"],
  guilty: ["guilt"],
  fault: ["guilt"],
  blame: ["guilt"],
  angry: ["anger"],
  anger: ["anger"],
  rage: ["anger"],
  furious: ["anger"],
  resent: ["anger"],
  resentment: ["anger"],
  bitter: ["anger"],
  jealous: ["anger"],
  jealousy: ["anger"],
  envy: ["anger"],
  envious: ["anger"],
  injustice: ["injustice"],
  unjust: ["injustice"],
  oppression: ["injustice", "powerlessness"],
  oppressed: ["injustice", "powerlessness"],
  wronged: ["injustice"],
  powerless: ["powerlessness"],
  helpless: ["powerlessness"],
  trapped: ["powerlessness"],
  crushed: ["powerlessness"],
  overwhelmed: ["powerlessness", "fear"],
  suffering: ["undeserved-suffering"],
  suffer: ["undeserved-suffering"],
  pain: ["undeserved-suffering", "grief"],
  undeserved: ["undeserved-suffering"],
  willpower: ["divided-self"],
  addiction: ["divided-self"],
  relapse: ["divided-self"],
  divided: ["divided-self"],
  tempted: ["temptation"],
  temptation: ["temptation"],
  crave: ["temptation"],
  limit: ["limits"],
  limits: ["limits"],
  boundary: ["limits", "temptation"],
  restriction: ["limits"],
  confined: ["limits"],
  caged: ["limits", "temptation"],
  calling: ["calling"],
  called: ["calling"],
  leave: ["calling"],
  leaving: ["calling"],
  unknown: ["calling", "fear"],
  move: ["calling"],
  change: ["calling", "starting-over"],
  begin: ["starting-over"],
  fresh: ["starting-over"],
  again: ["starting-over"],
  ambition: ["ambition"],
  ambitious: ["ambition"],
  legacy: ["ambition"],
  matter: ["ambition"],
  remembered: ["ambition"],
  success: ["ambition"],
  achieve: ["ambition"],
  hope: ["deferred-hope"],
  hoping: ["deferred-hope"],
  longing: ["deferred-hope"],
  control: ["control"],
  controlling: ["control"],
  impatient: ["control", "waiting"],
  force: ["control"],
  overlooked: ["overlooked"],
  unseen: ["overlooked"],
  invisible: ["overlooked"],
  ignored: ["overlooked"],
  unnoticed: ["overlooked"],
  used: ["overlooked"],
  losing: ["fear-of-loss"],
  lose: ["fear-of-loss"],
  sacrifice: ["fear-of-loss"],
  stranger: ["the-outsider"],
  outsider: ["the-outsider"],
  foreigner: ["the-outsider"],
  immigrant: ["the-outsider"],
  refugee: ["the-outsider"],
  excluded: ["the-outsider"],
  unfair: ["faith-and-fairness", "injustice"],
  fairness: ["faith-and-fairness"],
  deserve: ["faith-and-fairness"],
  reward: ["faith-and-fairness"],
};

const STOPWORDS = new Set([
  "i",
  "im",
  "i'm",
  "a",
  "an",
  "and",
  "the",
  "to",
  "of",
  "in",
  "on",
  "for",
  "is",
  "am",
  "are",
  "was",
  "be",
  "been",
  "my",
  "me",
  "you",
  "it",
  "that",
  "this",
  "feel",
  "feeling",
  "feels",
  "like",
  "so",
  "very",
  "really",
  "just",
  "with",
  "about",
  "but",
  "not",
  "no",
  "do",
  "dont",
  "have",
  "has",
  "cant",
  "can",
  "when",
  "what",
  "how",
  "right",
  "now",
  // too common across this corpus to discriminate
  "god",
  "lord",
]);

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .map((t) => t.replace(/^'+|'+$/g, ""))
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

export interface ScoredEntry {
  entry: FindEntry;
  score: number;
  matchedThemes: ThemeKey[];
}

// Score every entry against a free-text query. A theme implied by the query (via a
// synonym, or by literally naming the theme's words) is worth the most; a bare word
// found in the entry's text still counts. Returns only entries that matched, best first.
export function searchEntries(
  entries: FindEntry[],
  query: string,
): ScoredEntry[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const queryThemes = new Set<ThemeKey>();
  for (const token of tokens) {
    for (const theme of SYNONYMS[token] ?? []) queryThemes.add(theme);
  }

  const scored = entries.map((entry) => {
    const matchedThemes = entry.themes.filter((t) => queryThemes.has(t));
    let score = matchedThemes.length * 5;
    for (const token of tokens) {
      if (entry.haystack.includes(token)) score += 1;
    }
    return { entry, score, matchedThemes };
  });

  // When the query named a feeling (a theme matched), keep only the sittings that share
  // it, so a common word in the prose does not drag the whole library in. Only when no
  // theme was recognized do we fall back to a plain text match.
  const themed = scored.filter((s) => s.matchedThemes.length > 0);
  const pool =
    queryThemes.size > 0 ? themed : scored.filter((s) => s.score > 0);
  return pool.sort((a, b) => b.score - a.score);
}
