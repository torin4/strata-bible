# 01 — Ecclesiastes registered, and the first movement opened

**What to build:** The book exists in the codebase and movement 1 is navigable, with no prose
written yet.

BSB text generated (`node scripts/build-bsb-book.mjs Ecclesiastes 222`, no empty verses in this
book), registered in the expansion registry, added to `HELD_BOOKS` and to the formatter ignore
list, and a book entry created with `published: false` carrying the composition panel.

Movement 1 (`under-the-sun`, chapters 1–4) is declared with its situation panel and no doorway.
`ecc-1` and `ecc-2` land as grounded skeletons.

**Blocked by:** nothing.

**Status:** done

- [x] `content/bsb-ecclesiastes.ts` is generated, 222 verses, count assertion passes
- [x] Registered in `lib/expand.ts`, `HELD_BOOKS` and the biome ignore list
- [x] Book entry exists with `published: false`, `COMING_SOON` untouched
- [x] The composition panel is authored: who the Teacher is, when it was written, and how it got into the canon
- [x] Movement 1 declared with its chapter range and situation panel, no doorway
- [x] `ecc-1` and `ecc-2` exist as grounded readings with scripture and ground notes
- [x] Scripture materialised verbatim and passing the verse-integrity invariant
- [x] Sources attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Book five cost the same as books three and four.** One generator run, one registry line, one entry
in `HELD_BOOKS`, one line in the biome ignore list. Ecclesiastes has 222 verses and, unusually for
this project so far, no empty ones: the count assertion passed at 222 first time.

**The composition panel leads with the fact that decides how the book is read**, which is that it
nearly did not survive the cut. Ancient discussion records real dispute about whether it belonged,
on exactly the grounds a modern reader raises. That is more useful up front than at the end.
