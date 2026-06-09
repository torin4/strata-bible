# STRATA companion — spec

The companion is the differentiator. It is NOT a chat sidebar. It does two jobs, both server-side,
both cached, both with the authored content as a fallback the app never breaks without.

## The two jobs

**1. Draft the middle (grounded and plain tiers).**
A grounded reading has clean scripture and a one-line `ground` note, but no `meaning`, `lenses`,
`addr`, or `ask`. The companion drafts those in the four-layer voice. This is what lets the app
cover the whole Bible without every chapter being hand-authored. Authored sittings are never
overwritten; drafting only fills empty layers.

**2. Personalize the turn (the address).**
Every passage ships with a generic authored `addr` ("You know what it is to be handed a promise
every fact contradicts"). The companion can rewrite that one layer for this reader, given what they
have chosen to share, so the turn actually lands on their life instead of a generic one. This is the
magic, and the most sensitive part. Read the safety section before building it.

## Architecture

```
reader ──► lib/companion.ts ──► POST /api/companion ──► Claude (Anthropic API)
                                      │
                                      └─► Supabase: read/write companion_layer cache
```

- The route runs server-side. The API key never reaches the client.
- Model: a current Claude model (see docs.claude.com for the live list and strings). Use a
  Sonnet-class model for grounded-middle drafting (volume, cost), an Opus-class model optional for
  the personalized turn (quality matters most there). Do not hardcode a model string in more than
  one place; centralize it.
- The call is the standard `/v1/messages` endpoint: a system prompt plus a user message carrying the
  passage and, for job 2 only, the reader context.

## Input contract

```ts
type CompanionRequest =
  | { task: 'draft-middle'; passage: Passage }                       // job 1
  | { task: 'personalize-turn'; passage: Passage; context: ReaderContext }; // job 2

interface ReaderContext {
  // Minimal, user-controlled, opt-in. Never scraped silently.
  recentJournal?: string[];   // a few recent entries the user agreed to share
  carrying?: string;          // optional free-text "what I'm sitting with"
}
```

## Output contract (matches CompanionLayer)

The model must return ONLY JSON, no prose, no markdown fences. Parse defensively.

```ts
// task: 'draft-middle'
{ "meaning": string, "lenses": { "theo"?: string, "arch"?: string },
  "addr": { "mode": AddrMode, "text": string }, "ask": string }

// task: 'personalize-turn'
{ "addr": { "mode": AddrMode, "text": string }, "safetyStop"?: boolean }
```

Persist as a `companion_layer` row. At render, merge over the authored passage. Any parse failure,
empty result, or `safetyStop` falls back to the authored content.

## System prompt (the rules the model writes under)

The companion writes in STRATA's voice and under STRATA's constraints. The system prompt must encode:

- **The four-layer model.** History grounds, meaning is the always-true core, the turn addresses the
  reader now, the response is a real question. Match the authored examples in `seed.ts` for tone.
- **Voice.** Short sentences. No em dashes. No tidy morals. End on something that lands. Plain words.
- **Honesty.** Name a misreading before dismantling it. Never flatten a hard text into a comfort.
- **Translation rule.** Use only the scripture text provided in the passage. Never quote or invent
  verses, never reach for a licensed translation.
- **Lens discipline.** The theological lens (`lenses.theo`) is default-eligible. The archetypal lens
  (`lenses.arch`) is optional, never primary, and is the **recurring-image** lens, not psychology:
  how the passage's central image echoes across other cultures and ages and keeps speaking, kept
  distinct from the history note. It avoids Jungian vocabulary (shadow, ego, the unconscious,
  individuation) and never reads the reader's psyche. It closes with a short gnomic parenthetical
  naming the pattern, names no scholars (the author adds a comparative citation, e.g. Eliade or
  Campbell, by hand when promoting a draft to authored content), and writes no caveat line: the app
  appends "One way to hear it, not the final word." See the `arch` lenses across `content/genesis.ts`
  for the register.

## Safety (job 2 is the sensitive one)

People bring real pain to scripture. A personalized turn that gets this wrong does harm. Bake these
into the system prompt for `personalize-turn` and enforce the `safetyStop` path:

- Do not psychoanalyze the reader or assert their mental state. Address the situation they named, not
  a diagnosis of them.
- Never turn the text into self-blame. A passage about failure must not be aimed at the reader as an
  accusation. Validate the feeling without endorsing a false belief about themselves.
- Hold suffering honestly, but do not spotlight or dwell on the reader's hardship. Light touch.
- If the shared context suggests crisis, self-harm, or danger, set `safetyStop: true` and return the
  authored, non-personalized turn. The reader UI then shows a quiet, human line encouraging them to
  reach out to someone they trust or a professional. The companion does not try to counsel a crisis.
- When in doubt, generalize. A turn that is slightly too generic is fine. A turn that is too personal
  and wrong is not.

The personalized turn is opt-in per reading ("make this personal"), with one tap to revert to the
authored text. Never personalize silently.

## Caching and invalidation

```sql
create table companion_layer (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id),
  reading_id   text not null,
  passage_ref  text not null,
  task         text not null check (task in ('draft-middle','personalize-turn')),
  payload      jsonb not null,           -- the parsed output contract
  authored_hash text not null,           -- hash of the authored passage at generation time
  created_at   timestamptz default now(),
  unique (user_id, reading_id, passage_ref, task)
);
alter table companion_layer enable row level security;
create policy "own rows" on companion_layer
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

- `draft-middle` output is the same for everyone, but cache per user is fine for v1; optimize to a
  shared cache later (user_id nullable, keyed by authored_hash).
- Regenerate only when `authored_hash` changes or the user explicitly asks. Never on every render.
- A good `draft-middle` result can be promoted into authored `seed` content by hand. That is the
  intended authoring loop: the companion drafts, the author keeps the keepers.

## Journal table (phase 3, listed here so it is in one place)

```sql
create table journal_entry (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id),
  book_id     text not null,
  reading_id  text not null,
  passage_idx int,
  verse_anchor text,
  body        text not null,
  created_at  timestamptz default now()
);
alter table journal_entry enable row level security;
create policy "own entries" on journal_entry
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

## What this is not

Not a chatbot. Not a question-answering assistant bolted to the side. Not a feature that runs
automatically or that the reader can lean on instead of the text. It drafts what is missing and, when
asked, points the existing turn at the reader's actual life. That is the whole job.
