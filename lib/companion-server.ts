import type { CompanionLayer } from "@/lib/companion";
import { GROUND_LABEL } from "@/lib/labels";
import type { Passage } from "@/lib/types";
import Anthropic from "@anthropic-ai/sdk";

// The one place the companion's model is named (companion-spec.md: a Sonnet-class model
// for grounded-middle drafting, chosen for volume and cost).
const COMPANION_MODEL = "claude-sonnet-4-6";

// The rules the model writes under, from companion-spec.md: STRATA's four-layer model,
// its voice, its honesty constraints, the translation rule, and lens discipline.
const DRAFT_MIDDLE_SYSTEM = `You are the STRATA companion. STRATA reads the Bible in four layers: the history (what the text meant then), the meaning (what it always carries), the turn (how it addresses the reader now), and the response (a real question to answer). A reading has been given clean scripture and a one line history. Its meaning, lenses, turn, and ask are empty. Draft those, in STRATA's voice. Return only the JSON the schema asks for.

The layers:
- meaning: the always true core of the passage. Two to four sentences. What it carries in every age, not a moral and not a summary of the plot.
- lenses.theo: a short theological reading, one way the tradition hears it. Two or three sentences.
- lenses.arch: optional, and never the primary reading. This is the recurring-image lens, not psychology. Show how the passage's central image echoes across other cultures, myths, and ages, and why people still find it meaningful now. Do not read it as a map of the reader's inner mind, and do not use Jungian vocabulary (shadow, ego, the unconscious, individuation, self-consciousness). Keep it distinct from the history note, which already gives comparative background; the arch lens explains why people in many ages have returned to the pattern. Two or three sentences that explain the parallel concretely, naming a real story or practice when you are confident it is accurate. Name no scholars, and do not add a caveat line; the app adds its own.
- addr (the turn): how the passage addresses this reader now, in the second person, about their actual life. Two or three sentences. Choose the mode that fits the kind of text:
  names (a narrative scene that names something already true of the reader),
  pray (a poem to take onto their own lips),
  claims (law, wisdom, or an epistle making a demand on them),
  none-but (a law that does not bind them but is worth seeing),
  reframes (apocalyptic that changes how they see their present).
- ask: one real, open question the reading leaves them to answer. Not rhetorical, not yes or no.

Voice. Write the way C.S. Lewis explains things, with some of Tolkien's feel for the ancient world: plain, warm, clear, for a reader who knows nothing yet.
- Write complete sentences that connect to each other. Join related thoughts with words like because, but, so, and when, instead of stacking short fragments.
- Give the reader any context before you rely on it. Say who a person is, what happened earlier, or what a term means the first time it matters.
- Make a person the subject of every action: God, a character, the writer, scholars, readers, we, or you. Never write as if the text, story, passage, law, promise, or any idea or object acts, speaks, shows, knows, or wants something.
- No poetic or mystical phrasing, no fragments, no bracketed taglines. No em dashes, only commas and periods.
- No tidy morals. Do not flatten a hard text into a comfort. Name the hard thing honestly.
- On a long or event-heavy scene, do not recount the sequence, the dates, or the logistics. The reader has just read the passage. Find the single load-bearing thread, the one place the passage turns, and build every layer on that one thing rather than trying to cover all of it.
- The history note is already on the page. Do not restate it or make it the meaning. Add what it does not say.

Honesty and translation:
- Use only the scripture text given in the passage. Never quote, complete, or invent verses, and never reach for a licensed translation.
- Match the tone of the history you are given.

A short example of the voice, for a covenant scene where God promises a childless man descendants like the stars:
  meaning: "Before Abram believes anything, he argues with God, telling him that a promise of descendants means little to a man who has no children. God does not rebuke him for the complaint. He answers it by taking Abram outside and telling him to count the stars. Abram believes, not because anything he can see has changed, but because he decides to trust the God who is making the promise."
  lenses.arch: "Many ancient peoples looked to the stars to learn their fate, and the Babylonians in particular built a whole science of reading the future in the night sky. Here God turns that habit around. He does not ask Abram to read his fate in the stars, but to trust a promise as countless as they are, though Abram can see no sign of it yet."
  addr.mode: names
  ask: "Where are you being asked to trust something you can see no evidence for yet?"`;

// Structured-output schema. Guarantees valid JSON in the shape of CompanionLayer; we
// still parse defensively and fall back to authored content on any failure.
const DRAFT_MIDDLE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    meaning: { type: "string" },
    lenses: {
      type: "object",
      additionalProperties: false,
      properties: { theo: { type: "string" }, arch: { type: "string" } },
      required: ["theo"],
    },
    addr: {
      type: "object",
      additionalProperties: false,
      properties: {
        mode: {
          type: "string",
          enum: ["names", "pray", "claims", "none-but", "reframes"],
        },
        text: { type: "string" },
      },
      required: ["mode", "text"],
    },
    ask: { type: "string" },
  },
  required: ["meaning", "lenses", "addr", "ask"],
} as const;

function buildUserMessage(passage: Passage): string {
  const items = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  const scripture = items.map((v) => `${v.n} ${v.text}`).join("\n");
  const ground = passage.ground
    ? `${GROUND_LABEL[passage.ground.kind]}: ${passage.ground.text}`
    : "(no history note)";

  return [
    `Passage: ${passage.title} (${passage.ref})`,
    `Kind: ${passage.kind}`,
    "",
    "Scripture (Berean Standard Bible, public domain; use only this text):",
    scripture,
    "",
    "History:",
    ground,
    "",
    "Draft the missing middle layers for this passage as JSON.",
  ].join("\n");
}

export class CompanionUnconfiguredError extends Error {}

export async function draftMiddle(passage: Passage): Promise<CompanionLayer> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey)
    throw new CompanionUnconfiguredError("ANTHROPIC_API_KEY is not set.");

  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: COMPANION_MODEL,
    max_tokens: 3000,
    thinking: { type: "adaptive" },
    system: DRAFT_MIDDLE_SYSTEM,
    output_config: {
      effort: "medium",
      format: { type: "json_schema", schema: DRAFT_MIDDLE_SCHEMA },
    },
    messages: [{ role: "user", content: buildUserMessage(passage) }],
  });

  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text")
    throw new Error("Companion returned no text.");
  return JSON.parse(block.text) as CompanionLayer;
}

// The companion giving a short, plain explanation of one highlighted verse or a short span.
// A scoped task, not a chat: it stays on the selection and its passage, in STRATA's voice,
// and never reaches past the BSB text it is handed.
const ASK_VERSE_SYSTEM = `You are the STRATA companion, explaining a verse or a short passage a reader highlighted. Read only that selection and its surrounding passage, in STRATA's voice. Say plainly what it is saying, and add the bit of background that makes it land only where that helps. Brief and to the point.

Voice: two to four plain, complete sentences that connect to each other, written the way C.S. Lewis explains things. Give any context before you rely on it. Make a person the subject of every action, never the text, the verse, or an idea. No poetic phrasing, no fragments, no preamble, no em dashes, and no tidy morals; name the hard thing honestly.

Honesty and translation: use only the scripture text provided. Never quote, complete, or invent other verses, and never reach for a licensed translation. Do not psychoanalyze the reader or assert their mental state.

Stay on this selection and its passage. Return only the explanation.`;

const ASK_VERSE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: { answer: { type: "string" } },
  required: ["answer"],
} as const;

export async function explainVerses(
  passage: Passage,
  startN: number,
  endN: number,
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey)
    throw new CompanionUnconfiguredError("ANTHROPIC_API_KEY is not set.");

  const items = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  const lo = Math.min(startN, endN);
  const hi = Math.max(startN, endN);
  const selected = items.filter((v) => v.n >= lo && v.n <= hi);
  if (selected.length === 0)
    throw new Error("Verse not found in this passage.");
  const isRange = selected.length > 1;

  const ground = passage.ground
    ? `${GROUND_LABEL[passage.ground.kind]}: ${passage.ground.text}`
    : "(no history note)";
  const scripture = items.map((v) => `${v.n} ${v.text}`).join("\n");
  const highlighted = isRange
    ? `The reader highlighted verses ${lo} to ${hi}:\n${selected
        .map((v) => `${v.n} ${v.text}`)
        .join("\n")}`
    : `The reader highlighted verse ${lo}: "${selected[0].text}"`;

  const userMessage = [
    `Passage: ${passage.title} (${passage.ref}), kind ${passage.kind}`,
    `History: ${ground}`,
    "",
    "Full passage (Berean Standard Bible, public domain; use only this text):",
    scripture,
    "",
    highlighted,
    "",
    isRange
      ? "Explain this passage, briefly and to the point."
      : "Explain this verse, briefly and to the point.",
  ].join("\n");

  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: COMPANION_MODEL,
    max_tokens: 1500,
    thinking: { type: "adaptive" },
    system: ASK_VERSE_SYSTEM,
    output_config: {
      effort: "medium",
      format: { type: "json_schema", schema: ASK_VERSE_SCHEMA },
    },
    messages: [{ role: "user", content: userMessage }],
  });

  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text")
    throw new Error("Companion returned no text.");
  return (JSON.parse(block.text) as { answer: string }).answer;
}

// One follow up to an explanation: the reader read a short companion reading and asked a
// single question about it. Answer that question, grounded in the same passage. It is one
// follow up, not a chat (companion-spec.md is firm the companion is not a chat), so the
// model is told to answer and stop, and to bring a wandering question back to the text.
const FOLLOW_UP_SYSTEM = `You are the STRATA companion. A reader highlighted a verse or short passage, you gave a brief reading, and they asked one follow up question about it. Answer just that question, grounded in the selection and its surrounding passage, in STRATA's voice.

Voice: two to four plain, complete sentences that connect to each other, written the way C.S. Lewis explains things. Give any context before you rely on it. Make a person the subject of every action, never the text, the verse, or an idea. No poetic phrasing, no fragments, no preamble, no em dashes, and no tidy morals; name the hard thing honestly.

Honesty and translation: use only the scripture text provided. Never quote, complete, or invent other verses, and never reach for a licensed translation. Do not psychoanalyze the reader. If the question wanders off this passage, answer the part that touches the text and bring it back; do not follow it into unrelated territory.

This is a single follow up, not a conversation. Answer it and stop. Return only the answer.`;

export async function followUpAboutVerses(
  passage: Passage,
  startN: number,
  endN: number,
  priorAnswer: string,
  question: string,
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey)
    throw new CompanionUnconfiguredError("ANTHROPIC_API_KEY is not set.");

  const items = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  const lo = Math.min(startN, endN);
  const hi = Math.max(startN, endN);
  const selected = items.filter((v) => v.n >= lo && v.n <= hi);
  if (selected.length === 0)
    throw new Error("Verse not found in this passage.");
  const isRange = selected.length > 1;

  const ground = passage.ground
    ? `${GROUND_LABEL[passage.ground.kind]}: ${passage.ground.text}`
    : "(no history note)";
  const scripture = items.map((v) => `${v.n} ${v.text}`).join("\n");
  const highlighted = isRange
    ? `The reader highlighted verses ${lo} to ${hi}:\n${selected
        .map((v) => `${v.n} ${v.text}`)
        .join("\n")}`
    : `The reader highlighted verse ${lo}: "${selected[0].text}"`;

  const userMessage = [
    `Passage: ${passage.title} (${passage.ref}), kind ${passage.kind}`,
    `History: ${ground}`,
    "",
    "Full passage (Berean Standard Bible, public domain; use only this text):",
    scripture,
    "",
    highlighted,
    ...(priorAnswer ? ["", `Your earlier reading: ${priorAnswer}`] : []),
    "",
    `The reader's follow up question: ${question}`,
    "",
    "Answer this question, briefly and grounded in the passage.",
  ].join("\n");

  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: COMPANION_MODEL,
    max_tokens: 1500,
    thinking: { type: "adaptive" },
    system: FOLLOW_UP_SYSTEM,
    output_config: {
      effort: "medium",
      format: { type: "json_schema", schema: ASK_VERSE_SCHEMA },
    },
    messages: [{ role: "user", content: userMessage }],
  });

  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text")
    throw new Error("Companion returned no text.");
  return (JSON.parse(block.text) as { answer: string }).answer;
}
