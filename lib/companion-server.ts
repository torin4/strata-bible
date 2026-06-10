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
- lenses.arch: optional, and never the primary reading. This is the recurring-image lens, not psychology. Show how the passage's central image echoes across other cultures, myths, and ages, and why it keeps speaking now. Do not read it as a map of the reader's inner mind, and do not use Jungian vocabulary (shadow, ego, the unconscious, individuation, self-consciousness). Keep it distinct from the history note, which already gives comparative background; the arch lens leans on the perennial, still-speaking pull of the pattern. Two or three sentences, then close with a short parenthetical that names the pattern in a few words, for example "(The overreaching ascent, brought back down to human size.)". Name no scholars, and do not add a caveat line; the app adds its own.
- addr (the turn): how the passage addresses this reader now, in the second person, about their actual life. Two or three sentences. Choose the mode that fits the kind of text:
  names (a narrative scene that names something already true of the reader),
  pray (a poem to take onto their own lips),
  claims (law, wisdom, or an epistle making a demand on them),
  none-but (a law that does not bind them but is worth seeing),
  reframes (apocalyptic that changes how they see their present).
- ask: one real, open question the reading leaves them to answer. Not rhetorical, not yes or no.

Voice:
- Short sentences. Plain words. No em dashes, only commas and periods.
- No tidy morals. Do not flatten a hard text into a comfort. Name the hard thing honestly.
- End on something that lands.

Honesty and translation:
- Use only the scripture text given in the passage. Never quote, complete, or invent verses, and never reach for a licensed translation.
- Match the tone of the history you are given.

A short example of the voice, for a covenant scene where God promises a childless man descendants like the stars:
  meaning: "Abram does the most honest thing in the chapter first: he argues. God does not rebuke the complaint, he answers it, and hands him the stars. And Abram believes, not because the evidence changed, but because he decides to trust the one making the promise."
  lenses.arch: "The night sky is the oldest screen humans have cast their fate upon, and here a childless man is told to read his future in stars he cannot count. The image returns wherever someone must trust what cannot yet be seen against everything that can. (Believing the promise against the evidence of the eyes.)"
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

// The companion answering a reader's question about one highlighted verse. Bounded, not a
// chat: it stays on the verse and its passage, in STRATA's voice, declines off-topic or
// unsafe questions, and never reaches past the BSB text it is handed.
const ASK_VERSE_SYSTEM = `You are the STRATA companion, answering a reader's question about a single verse they highlighted. STRATA reads scripture in four layers: history (what it meant then), meaning (what it always carries), the turn (how it speaks to the reader now), and a response. Answer only about the highlighted verse and its passage, in STRATA's voice.

Voice: two to four short sentences. Plain words. No em dashes, only commas and periods. No tidy morals; name the hard thing honestly. End on something that lands.

Honesty and translation: use only the scripture text provided. Never quote, complete, or invent other verses, and never reach for a licensed translation. Do not psychoanalyze the reader or assert their mental state.

Scope: stay on this verse and its passage. If the question is not about this text, asks for something outside reading it, or is unsafe, say so in one short sentence and point the reader back to the verse. Do not answer general, off-topic, or out-of-scope questions.

Return only the answer.`;

const ASK_VERSE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: { answer: { type: "string" } },
  required: ["answer"],
} as const;

// The preset angles map to three of the four layers; a free-text question is asked verbatim.
const ANGLE_PROMPT: Record<string, string> = {
  history:
    "Give the history of this verse: what it meant in its own time and setting.",
  meaning:
    "Give the meaning of this verse: what it carries in every age, not a moral.",
  turn: "Give the turn: how this verse addresses the reader now, in the second person.",
};

export async function askAboutVerse(
  passage: Passage,
  verseN: number,
  ask: { angle?: "history" | "meaning" | "turn"; question?: string },
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey)
    throw new CompanionUnconfiguredError("ANTHROPIC_API_KEY is not set.");

  const items = passage.verses ?? passage.statutes ?? passage.sayings ?? [];
  const verse = items.find((v) => v.n === verseN);
  if (!verse) throw new Error("Verse not found in this passage.");

  const ground = passage.ground
    ? `${GROUND_LABEL[passage.ground.kind]}: ${passage.ground.text}`
    : "(no history note)";
  const scripture = items.map((v) => `${v.n} ${v.text}`).join("\n");
  const taskLine = ask.angle
    ? ANGLE_PROMPT[ask.angle]
    : `The reader asks: ${ask.question}`;

  const userMessage = [
    `Passage: ${passage.title} (${passage.ref}), kind ${passage.kind}`,
    `History: ${ground}`,
    "",
    "Full passage (Berean Standard Bible, public domain; use only this text):",
    scripture,
    "",
    `The reader highlighted verse ${verseN}: "${verse.text}"`,
    "",
    taskLine,
  ].join("\n");

  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: COMPANION_MODEL,
    max_tokens: 1024,
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
