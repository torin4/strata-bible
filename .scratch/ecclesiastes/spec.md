# Spec: Ecclesiastes — the whole book

Status: ready-for-agent
Created: 2026-09-10
Scope: Ecclesiastes 1–12, the complete book, across three movements. Book five.

## Problem Statement

Four books ship: Genesis, Exodus, Ruth, Mark. Every passage in all four is a narrative scene. The
kind-aware renderer has six kinds, and three of them have never run in a published book: `argument`,
`saying-cluster`, and `poem` at anything beyond a single instance. They exist and are proven, each by
exactly one fixture in `content/seed.ts` written to prove the renderer end to end, and one of those
fixtures, the unbroken Psalm 13, has been carrying a known lineation debt since ADR 0001 was written.

Ecclesiastes needs all three, in one book of 222 verses. It opens with a poem, argues in the first
person for most of its length, collects sayings into clusters in chapters 7 and 10, and closes with
one of the most sustained poems in the Hebrew Bible. If the renderer's genre claim is real, this is
where it gets demonstrated. If it is not, this is where that gets found out, on a book short enough
to fix.

The content problem is the reverse of the usual one. STRATA's promise is to name where Scripture
argues with itself, and every book so far has needed that promise defended against the instinct to
smooth things over. Ecclesiastes needs it defended in the other direction. The dead know nothing.
A man has no advantage over a beast. The righteous perish in their righteousness while the wicked
live long. This book does not need help arguing with the canon; it is already the argument, inside
the canon, and the risk is that an app built to prize exactly this lets it become the only voice in
the room and calls that honesty.

And there is a seam at the end. The last six verses speak of the Teacher in the third person, praise
his work from outside it, and close on fear God and keep his commandments, which lands very
differently from the twelve chapters preceding it. Whether that is a later hand domesticating a
dangerous book or the author signing his own, is genuinely argued, and it is the single most
important editorial fact about the book.

## Solution

Author Ecclesiastes complete, at the quality of the four books before it, as three movements.

Three rather than four. The apparatus at the movement layer is sized for long books, and 222 verses
sits between Ruth's 85, which took two, and Mark's 661, which took four. Chapters 1–4, 5–8 and 9–12
divide the book at its own hinges and keep the commentary layer proportionate.

The kinds are chosen per passage from the text rather than assigned per book. The opening and closing
poems and the time poem are `poem` in `poetry` form, lineated at the parallelism per ADR 0001 and
authored whole. The saying collections in chapters 7 and 10 are `saying-cluster` in `list` form with
`perItem` notes. Everything else is `argument` in `prose` form, which is what a first-person
reflective monologue actually is.

The epilogue is authored as scripture, because it is scripture, and the seam is named where it
occurs rather than argued about in the abstract.

The book stays unpublished until all twelve chapters are done, reachable by direct URL and absent
from the landing page and the find index, exactly as Exodus, Ruth and Mark each were.

## User Stories

### The reader

1. As a reader, I want a book that is not a story, so that the app is a Bible rather than a shelf of narratives.
2. As a reader, I want the poems set as poems, so that I can see the parallelism the writer built.
3. As a reader, I want the sayings collected as a list rather than run together as prose, so that each one lands separately.
4. As a reader, I want to know what the book's key word actually means, so that I am not reading an English abstraction where the Hebrew has an image.
5. As a reader, I want the hard sentences left hard, so that I am not handed a version of this book that has been made safe.
6. As a reader, I want the places where it contradicts the rest of the canon named as contradictions, so that I can see the argument rather than be steered around it.
7. As a reader, I want the other side of that argument present too, so that the book is not the only voice in the room.
8. As a reader, I want the epilogue's change of voice pointed out, so that I can decide for myself what it is doing.
9. As a reader, I want the book's repeated permission to eat, drink and enjoy your work given its full weight, so that I do not come away thinking this is only a book about despair.
10. As a reader in trouble, I want to find these sittings through the find index by what I am feeling, so that discovery works as it does for the other books.
11. As a reader, I want the book to work signed out and with the companion off.

### The author

12. As the author, I want the reading map and the kind of every passage fixed before any prose is written, so that authoring is filling a known shape.
13. As the author, I want scripture materialised mechanically from the BSB, so that no verse is typed from memory.
14. As the author, I want to read one fully authored sitting, carrying both a poem and an argument, before the rest are written.
15. As the author, I want the turn to make demands where the text does, so that a wisdom book does not sound like a narrative one.
16. As the author, I want sources drawn from Ecclesiastes specialists, so that the register does not lean on scholarship that does not cover it.
17. As the author, I want scholars paraphrased and attributed and never quoted.
18. As the author, I want the density gate to hold this book from its first authored passage.
19. As the author, I want each authoring commit to leave the repo green.
20. As the author, I want the book off the landing page and out of find until it is complete.

### The maintainer

21. As a maintainer, I want book five to need no new plumbing.
22. As a maintainer, I want the first published use of `saying-cluster` and `argument` to be exercised by a test, so that a renderer regression in a kind only one book uses does not go unnoticed.
23. As a maintainer, I want the poetry lineation rule enforced here as it is everywhere, so that ADR 0001 holds in a book that is a third poetry.

## Implementation Decisions

### Movement structure

Three movements. Book id `ecclesiastes`.

| Id | Title | Range | Chapters |
| --- | --- | --- | --- |
| `under-the-sun` | Under the sun | Ecclesiastes 1–4 | 1–4 |
| `not-found-out` | What cannot be found out | Ecclesiastes 5–8 | 5–8 |
| `eat-your-bread` | Eat your bread | Ecclesiastes 9–12 | 9–12 |

The third movement is where the book turns, at 9:7, and it carries the closing poem and the
epilogue. Movements are declared only when they have readings, and carry no doorway until the
movement they point at exists.

### The reading map

Twelve readings, one per chapter except where the text runs across one.

| Id | Span | Movement | Kinds |
| --- | --- | --- | --- |
| `ecc-1` | Ecclesiastes 1 | under-the-sun | poem (1:2–11), argument |
| `ecc-2` | Ecclesiastes 2 | under-the-sun | argument |
| `ecc-3` | Ecclesiastes 3 | under-the-sun | poem (3:1–8), argument |
| `ecc-4` | Ecclesiastes 4 | under-the-sun | argument |
| `ecc-5` | Ecclesiastes 5 | not-found-out | argument |
| `ecc-6` | Ecclesiastes 6 | not-found-out | argument |
| `ecc-7` | Ecclesiastes 7 | not-found-out | saying-cluster, argument |
| `ecc-8` | Ecclesiastes 8 | not-found-out | argument |
| `ecc-9` | Ecclesiastes 9 | eat-your-bread | argument |
| `ecc-10` | Ecclesiastes 10 | eat-your-bread | saying-cluster |
| `ecc-11` | Ecclesiastes 11:1–12:8 | eat-your-bread | argument, poem (12:1–7), `crossesChapters` |
| `ecc-12` | Ecclesiastes 12:9–14 | eat-your-bread | argument |

`ecc-11` is the only reading that crosses a chapter, and it holds one passage per chapter so every
verse stays attributable to a chapter for the fill and for the verse-integrity invariant.

### Poetry

Lineated at the parallelism and authored whole, per ADR 0001 and the validator rule that a lineated
poem may not skip a verse. Three poems: 1:2–11, 3:1–8, and 12:1–7. The time poem is the one most
readers arrive already knowing, and `inTextTurn` is available if a poem turns inside itself.

### Sayings

`saying-cluster` in `list` form, with `perItem` notes for the sayings that need a gloss and
`perItem[n].addr` where an individual saying makes its own demand. Chapter 7's better-than sayings
and chapter 10's wisdom-and-folly sayings are the two clusters. Not every item gets a note; the
cluster is scripture with annotation, not a commentary with verses attached.

### The turn

`claims` is the default in this book, which is a change from the four before it and follows the kind
table: wisdom makes demands rather than naming what is already true. Where the demand is really a
permission, which in this book is often, `claims` still fits: eat your bread is an instruction. One
turn per sitting, on the closing passage, per the house rule.

### The canon arguing back

This is the book where the app's central promise is easiest to keep and easiest to abuse. The hard
sentences stay hard and are not resolved. But `tensions` is used in both directions, which is new:
the entries set Ecclesiastes against the canon AND the canon against Ecclesiastes, so that a reader
sees an argument rather than a verdict. The load-bearing ones:

- The dead know nothing and have no further reward, against the hope that grows later in the canon.
- No advantage for man over beast, both going to the same place, against Genesis 1.
- The righteous perishing and the wicked prospering, against Proverbs, and alongside Job, which is
  the other book that refuses the same promise.
- The epilogue's fear God and keep his commandments, against the twelve chapters it is appended to.

### Vocabulary

The key word is `hevel`, which the BSB renders futility, and which other translations give as
vanity, meaningless, breath, smoke or absurd. It literally means vapour or breath: the thing you can
see and cannot hold. That is said once, plainly, in `ecc-1`'s ground note, and then the reading
trusts it rather than re-explaining it in every chapter.

### Sources

Recurring: Fox, Seow, Longman, Krüger. Topical: Alter, carried over. Barton for the reception. All
paraphrased, never quoted.

### Publication and pricing

`published: false` until complete. `COMING_SOON` stays empty. No `BOOK_OFFERS` entry, so it reads
under Plus like Exodus, Ruth and Mark. The free sample stays Genesis's primeval history.

### Images

A hero and three situation banners, specced and prompted the way Ruth's and Mark's were, once the
book is authored.

## Testing Decisions

**Content invariants.** Everything applies by construction, including the poetry-lineation rule and
the new turn invariant. Worth observing green at every commit rather than duplicating.

**Expansion.** Extend with one case: a passage in `list` form passes through untouched, because the
fill only handles numbered verse ranges. That path exists and has never been exercised by a
published book.

**Navigation.** Extend with: the Ecclesiastes readings resolve, adjacency runs `ecc-1` to `ecc-12`
in authored order, and `ecc-11` files under the third movement while spanning a chapter boundary.

**Kinds.** A new assertion worth having: the published catalogue between it uses more than one
passage kind. Four books of pure `scene` made that trivially false, and it is the thing this book
exists to change.

## Out of Scope

- Repairing the unbroken Psalm 13 fixture. Named again here, still owed, still separate.
- Publishing, announcing, or any pricing change.
- Companion work.
- Any renderer change. If a kind turns out to be broken, that is a bug to fix, not redesign.

## Further Notes

The strategic argument that put Mark fourth said Ecclesiastes fifth, and gave the reason: after how
it begins, how a people is freed, how a life is rebuilt and the one it all turns on, this is the
book that asks what any of it is worth. That is still the reason. It is also, now, the book that
proves the renderer was not built for one genre.

One caution worth recording. This book is quotable in a way the narratives are not, and its best
lines are already worn smooth by use. A time to be born and a time to die. Nothing new under the
sun. Eat, drink and be merry, which is not what it says. The authoring risk here is not that the
apparatus crowds the scripture. It is that the apparatus repeats what the reader already thinks
they know.
