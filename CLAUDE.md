# STRATA — build brief for Claude Code

This file is the source of truth. It supersedes `strata-build-spec.md` (that file predates the
schema deltas and the movement layer; ignore its schema and folder sections).

## What STRATA is

A Bible reading app that grounds every passage in four layers: history (what it meant then),
meaning (what it carries always), the turn (how it addresses you now), and response (a prompt to
answer it). It treats Scripture as a library written and edited over centuries, names where it
argues with itself, and refuses tidy morals. The differentiator is an AI companion that drafts
the lower-tier middles and personalizes the turn per reader. It is NOT a chat sidebar.

## Source-of-truth files

- `types.ts` — the canonical schema. Typechecks under `--strict`. Do not redesign it.
- `genesis.ts` — the real content: Genesis 1–25 as `Reading[]` (export `GENESIS`), plus two movements
  (exports `PRIMEVAL_MOVEMENT` and `ABRAHAM_MOVEMENT`), each with situation, capstone, and doorway.
  This is the book the app ships first. Typechecked. Genesis content comes from here, nowhere else.
- `seed.ts` — genre fixtures for the OTHER genres only (Psalm, Leviticus, Romans, Proverbs,
  Revelation, Job), plus `JOB_MOVEMENT`. Use these to build and test the kind-aware renderer against
  every genre. Do NOT pull Genesis content from here.
- `strata-genre-proof.html` — a WORKING reference renderer. Its render functions are your
  component contract. Port the logic; do not reinvent it.
- `companion-spec.md` — the companion design. Do not build the companion in the first task.

## Stack (decided, do not relitigate)

Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Firebase (Auth + Firestore). Server
components for content, a server route for the companion, Firestore for journal and companion cache.
PWA manifest in phase 3.

Note: the data/auth layer was changed from Supabase to Firebase by the owner (2026-06-08). Auth is
Firebase Auth (Google + email/password), client side; the reader stays server rendered and is fully
usable signed out. Firebase web config lives in `NEXT_PUBLIC_FIREBASE_*` env vars (public by design);
per-user access is enforced by Firestore security rules.

## Hard rules

1. **Scripture is the Berean Standard Bible (BSB), public domain / CC0.** Changed by the owner
   (2026-06-08) from "the author's own translation" to a real, freely licensed text, to avoid
   copyright risk. The content files (`content/genesis.ts`, `content/seed.ts`) were re-based on the
   BSB from `bereanbible.com/bsb.txt` (see `scripts/migrate-bsb.mjs` in git history). You must STILL
   NEVER fetch, paste, or "fill in" from a copyrighted/licensed translation (NIV, ESV, NRSV, NASB,
   Alter, Friedman's rendering, etc.); only BSB or another public-domain/CC0 text. Pulling a licensed
   version creates copyright liability. That part is absolute.
2. **Scholars are paraphrased and cited, never quoted.** The `src` fields are attribution, not
   permission to reproduce. No block quotes from any source.
3. **Design tokens only.** Use the CSS custom properties below. No literal hex anywhere in
   components. Match the existing token discipline.
4. **No em dashes in authored or UI copy.** Commas and periods. This is the author's voice.
5. **The app must be fully usable with the companion OFF.** Companion output is an additive layer
   that always falls back to authored content. Never block a render on a companion call.
6. **Browser storage:** journal and state persist in Firestore, not localStorage.

## Design tokens

Put these in `styles/tokens.css` as `:root` custom properties and mirror the colors into
`tailwind.config.ts` `theme.extend.colors`.

```
--deep:#0d1015;  --parchment:#f4ead4;  --parchment-2:#ece0c4;  --parchment-edge:#d9c9a3;
--gold:#c79a3e;  --gold-bright:#e8c062;  --gold-soft:rgba(199,154,62,.16);
--lapis:#6f9bce; --psyche:#bda1df;       --ink:#211c14;
--mist:rgba(244,234,212,.66); --mist-2:rgba(244,234,212,.4); --line:rgba(217,201,163,.16);
```

Fonts (Google Fonts): **Cinzel** (display + section headers, capstone titles), **Cormorant
Garamond** (scripture and passage titles), **EB Garamond** (body and layer text), **Hanken Grotesk**
(UI: labels, chips, buttons). Self-host via `@fontsource` for production.

## Folder structure

```
strata/
  app/
    page.tsx
    book/[bookId]/page.tsx                 # movement accordion
    read/[bookId]/[readingId]/page.tsx     # reader; routes by passage kind
    journal/page.tsx
    api/companion/route.ts                  # phase 4
  components/
    reader/   Reader  Scripture  ClusterList  Layer  Lenses  Misreading
              Tensions  Symbols  TheTurn  Soft  Ask  ThreadGloss  SpanBanner  Capstone
    book/     MovementAccordion  ReadingRow
    overlays/ CompositionPanel  SituationPanel  Doorway
    journal/  JournalList  JournalComposer
  content/
    genesis.ts  # the provided file: GENESIS + PRIMEVAL_MOVEMENT + ABRAHAM_MOVEMENT
    index.ts    # assembles books; re-export GENESIS + its movements, plus SEED + JOB_MOVEMENT for other genres
  lib/
    types.ts  content.ts(getReading,getAdjacent,getMovement)  companion.ts  journal.ts
  styles/  tokens.css  globals.css
  public/  fonts/  manifest.json
  tailwind.config.ts
```

## Component contract

The proof's functions map one to one. Port the logic exactly; restyle with tokens, do not redesign.

| Proof function | Component | Notes |
|---|---|---|
| `versesProse` | `<Scripture form="prose">` | superscript verse number, Cormorant |
| `versesPoem` | `<Scripture form="poetry">` | split text on `\n` into lines; `inTextTurn` marks one verse |
| `listUnits` | `<ClusterList>` | `statutes` or `sayings`; render `perItem[n].addr` as a mode-chip callout and `perItem[n].note` as a gloss |
| `layer('l-ground'/'l-mean')` | `<Layer>` | ground label comes from `ground.kind` (see map) |
| `lensBlock` | `<Lenses>` | collapsed accordion chips, closed by default (native `<details>`): theo = gold, arch = violet. The reader never sees a lens expanded unless they tap it; arch is never default-open. Arch ALWAYS appends the caveat line when open. |
| `misread` | `<Misreading>` | `named` then `why`; singular and load-bearing |
| `tensionBlock` | `<Tensions>` | `claim` / "but" `counter` / `where` |
| `symbolBlock` | `<Symbols>` | `image` -> `meant` (+ optional `note`) |
| `addr` render | `<TheTurn>` | shows a chip from `addr.mode` |
| `soft` / `ask` | `<Soft>` / `<Ask>` | |
| `capstoneBlock` | `<Capstone>` | movement level; carries the synthesis + internal `tensions` |
| `thread` | `<ThreadGloss>` | faint lapis margin gloss |
| cross-chapter banner | `<SpanBanner>` | shown when `reading.crossesChapters` |

**Canonical render order inside a passage:** ground -> verses/statutes/sayings -> symbols ->
misreading -> meaning -> lenses -> tensions -> the turn -> soft -> ask. Ship with this order; it can
be tuned per kind later.

## Kind drives display

| kind | verses via | special blocks | typical addr.mode |
|---|---|---|---|
| scene | prose | — | names |
| poem | poetry | inTextTurn marker | pray |
| statute-cluster | list (`statutes`) | perItem addr callouts, misreading | claims / none-but |
| saying-cluster | list (`sayings`) | perItem notes, tensions | claims |
| argument | prose | SpanBanner, misreading | names |
| vision | prose | symbols, misreading | reframes |

A composite book (Job) is one movement whose readings hold mixed-kind passages, with the meaning of
the whole carried by the movement `Capstone`, not any single reading. See `JOB_MOVEMENT` in seed.

## Reader behavior

- `getAdjacent(readingId)` returns prev/next by `span`, NOT by chapter number. Spans may cross
  chapter lines (epistles, prophets). Never navigate by `chapterIndex` arithmetic.
- Use fixed device-frame heights ONLY in the proof. In the app let content size itself.
- Grounded and plain tiers render clean text plus the ground note. Their meaning/turn/ask are blank
  until the companion drafts them (phase 4). Render the blanks gracefully.

## Build order

**Phase 1 — the reader slice. THIS IS THE FIRST AND ONLY TASK FOR NOW.**
Scaffold the app, tokens, fonts, `lib/types.ts`, `lib/content.ts`, import `genesis.ts` (and `seed.ts`
for the non-Genesis genres), and build the reader components so `/read/genesis/gen-1` renders, every
Genesis chapter 1–25 reads correctly, and the six `seed.ts` fixtures prove the kind-aware renderer
across all genres, all matching the proof. No nav shell, no accounts, no companion. Output: a
runnable reader you can move through.

Phase 2 — shell: home, MovementAccordion, routing, `getAdjacent`, overlays (composition, situation,
doorway), the demo mode toggle.

Phase 3 — auth (Firebase Auth: Google + email/password), then journal in Firestore, then PWA manifest.

Phase 4 — the companion. Read `companion-spec.md` first. Grounded-middle drafting is the first
companion feature, the personalized turn comes second.

## Do not build yet

A companion chat sidebar (it is not a chat). Accounts before the reader works. Any genre handling
beyond the seven proven in seed. Genesis 1–25 is already complete in `genesis.ts`; Jacob (25:19 on)
and Joseph (37–50) are not authored yet and are a later content pass, not part of the reader slice.
