# 01 — Ruth registered, and the road laid out

**What to build:** The book exists in the codebase, navigable end to end for movement 1, with no
prose written yet.

The BSB text of Ruth is generated (`node scripts/build-bsb-book.mjs Ruth 85`) and registered in
the expansion registry so the full-text reveal works on the new book. `ruth` is added to
`HELD_BOOKS` in the density gate, so the book is held from its first authored passage rather than
from publication. A `ruth` book entry is created in `content/index.ts` with `published: false`,
carrying its composition panel.

Movement 1 (`empty`, Ruth 1–2) is declared with its situation panel and no doorway, because
movement 2 does not exist yet and the validator fails a doorway pointing at an unknown movement.
Both of its readings land as `grounded` skeletons carrying scripture and a ground note, which is
how Exodus's eleven readings arrived and what keeps the repo green at every commit.

**Blocked by:** nothing.

**Status:** done

- [x] `content/bsb-ruth.ts` is generated, 85 verses, and the generator's count assertion passes
- [x] `ruth` is registered in the expansion registry in `lib/expand.ts`
- [x] `ruth` is added to `HELD_BOOKS` in `scripts/check-density.ts`
- [x] The book entry exists with `published: false`, and `COMING_SOON` is untouched
- [x] The book composition panel is authored: how Ruth was written, and the open dating question
- [x] Movement 1 is declared with its chapter range and an authored situation panel, and carries no doorway
- [x] `ruth-1` and `ruth-2` exist as grounded readings with scripture and ground notes
- [x] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**No new plumbing was needed, which was the point of the Exodus refactor.** Book three cost one
generator run (`node scripts/build-bsb-book.mjs Ruth 85`, which passed its count assertion on the
first try) and one registry line in `lib/expand.ts`. Everything else already applied to every book
by construction: the validator, the density gate, the placement helper, the expansion fill.

**One config change that was not on the list.** `content/ruth.ts` had to join `genesis.ts`,
`exodus.ts` and `seed.ts` in the biome ignore list. Authored content files are generator output
carrying long single-line strings, and letting the formatter rewrap them would fight the
generators. `bsb-ruth.ts` was already covered by the existing `bsb-*.ts` glob.

**`ruth-2` landed as a grounded skeleton on a selection rather than the whole chapter**, matching
how `gen-17` and `gen-24` are shaped: one passage, selected verses, a ground note of about ninety
words, no thread and no scene labels. The gaps fill from the new lookup, which is what the new
expansion test asserts.

**COMING_SOON was left empty, deliberately.** Announcing Ruth on the live landing page is an
outward-facing decision and it belongs to the owner, separately from authoring the book.
