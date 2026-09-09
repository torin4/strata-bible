# 01 — Mark registered, and Galilee opened

**What to build:** The book exists in the codebase, navigable for the opening of movement 1, with
no prose written yet.

The BSB text is generated and registered, `mark` is added to `HELD_BOOKS` in the density gate and
to the formatter ignore list, and a `mark` book entry is created with `published: false`, carrying
the book composition panel.

The generator runs with 673, not 678. Mark has 678 numbered verses and five that carry no text
(7:16, 9:44, 9:46, 11:26, 15:28), absent from the earliest manuscripts, where the BSB keeps the
number and drops the words. Record the reason in the spec so a later maintainer does not read 673
as a truncated download.

Movement 1 (`the-authority`, chapters 1–8) is declared with its situation panel and no doorway.
`mark-1a` and `mark-1b` land as grounded skeletons.

**Blocked by:** nothing.

**Status:** done

- [x] `content/bsb-mark.ts` is generated, 673 verses that carry text, and the count assertion passes
- [x] `mark` is registered in the expansion registry in `lib/expand.ts`
- [x] `mark` is added to `HELD_BOOKS` and to the biome ignore list
- [x] The book entry exists with `published: false`, and `COMING_SOON` is untouched
- [x] The book composition panel is authored, and names the ending and the empty verse numbers
- [x] Movement 1 is declared with its chapter range and an authored situation panel, and carries no doorway
- [x] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**The verse count is the interesting part.** The generator refused at 678 and reported 673, which
looked like a truncated download for about a minute. It is not. Mark 7:16, 9:44, 9:46, 11:26 and
15:28 carry a number and no words in the BSB, because they are absent from the earliest
manuscripts. The generator skips empty text, so 673 is the honest count and the assertion still
guards what it was built to guard. Recorded in the spec and in the header of `content/mark.ts` so
that nobody rediscovers it the hard way when book five is added.

**Book four cost the same as book three.** One generator run, one registry line, one entry in
`HELD_BOOKS`, one line in the biome ignore list. Nothing else in the app knew a new testament had
arrived, which is what the per-book work during Exodus was for.

**The composition panel carries the ending up front.** The alternative was to save the manuscript
facts for the book capstone, which is where the argument about them lives. But a reader who meets
16:8 without warning and then finds out afterward that the app knew has been handled rather than
told. The panel states it, and the capstone is where it gets argued.
