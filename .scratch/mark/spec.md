# Spec: Mark — the whole book

Status: ready-for-agent
Created: 2026-09-10
Scope: Mark 1:1–16:8, the complete book, across four movements. Book four.

## Problem Statement

After Ruth the catalog reads Genesis, Exodus, Ruth. Origins, rescue, aftermath. Three books, all
Hebrew Bible, all narrative, and no New Testament in the product at all. For a paid Bible app that
is the gap a reader notices on day one and the one that cannot be explained away.

Mark closes it at the lowest available risk. Sixteen chapters, 673 verses that carry text, and
every passage a narrative scene, which is the kind the renderer has now proven across three books.
No new plumbing: the generator is per-book, the expansion registry takes an entry, the density gate
takes a name, and every content invariant already applies to every book by construction.

What Mark poses that the first three books did not is a textual problem, and it is the reason this
book is worth STRATA doing rather than anyone else.

Two of the oldest complete manuscripts end this book at 16:8, with women running from a tomb and
telling nobody because they were afraid. The twelve verses printed after it in most Bibles are a
later addition, some manuscripts carry a different shorter ending, and a few carry both. Five more
verse numbers in this book, 7:16, 9:44, 9:46, 11:26 and 15:28, are empty in a modern critical text
for the same reason, which the BSB generator surfaced on the first run: Mark has 678 numbered
verses and 673 that carry any words. None of this is fringe. It is in the footnotes of most study
Bibles, and almost no reader has ever had it put to them plainly, because the apparatus to do it
does not exist in a reading app. STRATA already has that apparatus and has not yet had a book that
needed it.

The second problem is the one the book creates for itself. Everybody inside it fails to see who he
is. His family tries to take him home because they think he has lost his mind, his closest
followers misunderstand him at every turn, and the only human being who names him plainly is the
officer who has just finished killing him. Then it stops before anybody succeeds. A book built to
hand its ending to the reader is either read that way or it is not read at all.

## Solution

Author Mark complete, at the quality of the first three books, as four movements that follow the
book's own architecture rather than its chapter numbers.

The book ends at 16:8. The longer ending is not authored as scripture and is not hidden either: it
is the subject of the book capstone, so a reader meets the stop first and learns afterward that
the church could not leave it alone. This is a reversible decision and it is recorded as one.

The second movement is the piece of literary construction most readers have never been shown.
Mark bracketed his discipleship section between two healings of blindness, at Bethsaida and at
Jericho, and put three passion predictions between them, each one misheard. That bracket is the
movement, and naming it is most of what the movement's situation panel is for.

The book stays unpublished until all four movements are done, reachable by direct URL and absent
from the landing page and the find index, exactly as Exodus and Ruth were while being written.

## User Stories

### The reader

1. As a reader, I want a New Testament book in the app, so that the catalog is a Bible library rather than a Torah library.
2. As a reader, I want to be told plainly that the earliest manuscripts end at 16:8, so that I am not the last person in the room to know.
3. As a reader, I want the longer ending named rather than quietly dropped, so that the app is being honest rather than making an editorial choice on my behalf.
4. As a reader, I want the empty verse numbers in this book explained, so that a gap in the numbering reads as history rather than as a bug.
5. As a reader, I want the book's first sentence read as the provocation it was, so that I hear what a first-century audience heard rather than a devotional opening.
6. As a reader, I want the wilderness given as Mark gives it, two verses and no dialogue, so that I stop importing a scene from another gospel.
7. As a reader, I want the baptism's awkwardness named, so that I can see three later writers getting nervous about the same sentence.
8. As a reader, I want the disciples' failures left as Mark wrote them, so that I am not handed the softened version Matthew and Luke produced.
9. As a reader, I want the two blind men around the discipleship section pointed out, so that I can see the book's construction rather than only its content.
10. As a reader, I want "take up your cross" put back in its own century, so that it stops meaning an inconvenience.
11. As a reader, I want Legion read against Roman occupation, so that an exorcism story becomes something I can hear.
12. As a reader, I want chapter 13 named as the argument it is rather than as a timetable, so that I am not handed a prophecy chart.
13. As a reader, I want the cry from the cross left unresolved, so that the book's hardest line is not repaired by another gospel's.
14. As a reader, I want the centurion's line to land as the book's own answer, so that I see who Mark chose to put it in the mouth of.
15. As a reader, I want the ending to stop where Mark stops, so that the silence is something I have to do something with.
16. As a reader in trouble, I want to find Mark sittings through the find index by what I am feeling, so that discovery works as it does for the other books.
17. As a reader, I want the book to work signed out and with the companion off, so that nothing essential waits on an account or a network call.

### The author

18. As the author, I want the reading map fixed for the whole book before any prose is written, so that authoring is filling a known shape.
19. As the author, I want scripture materialised mechanically from the BSB, so that no verse is ever typed from memory.
20. As the author, I want to read one fully authored sitting before the rest are written, so that voice drift is caught at a cost of one reading.
21. As the author, I want the New Testament lens vocabulary decided once, so that the archetypal lens does not drift book by book.
22. As the author, I want sources drawn from Mark specialists, so that the register does not lean on Torah scholarship that does not cover this book.
23. As the author, I want scholars paraphrased and attributed and never quoted, so that attribution never becomes reproduction.
24. As the author, I want the density gate to hold Mark from the first commit, so that a new testament does not arrive at a new density.
25. As the author, I want each authoring commit to leave the repo green, so that work can stop at any point.
26. As the author, I want Mark off the landing page and out of find until it is complete, so that no paying reader meets a half-finished book.

### The maintainer

27. As a maintainer, I want book four to need no new plumbing, so that the per-book work keeps paying off.
28. As a maintainer, I want the generator's verse count for Mark recorded with its reason, so that 673 rather than 678 does not read later as a truncated download.
29. As a maintainer, I want the existing invariants to cover Mark automatically, so that a fourth book does not need a fourth validator.

## Implementation Decisions

### Movement structure

Four movements, following the book's architecture. Book id `mark`.

| Id | Title | Range | Chapters declared |
| --- | --- | --- | --- |
| `the-authority` | The authority | Mark 1:1–8:21 | 1–8 |
| `the-way` | The way | Mark 8:22–10:52 | 9–10 |
| `the-temple` | The temple | Mark 11–13 | 11–13 |
| `handed-over` | Handed over | Mark 14–16:8 | 14–16 |

Chapter 8 holds a seam. Movement 1's declared range ends at 8 and movement 2's begins at 9, so
`mark-8b` (8:22–38), which sits in chapter 8 but belongs to the way, carries an explicit
`movementId`. This is the same override the Genesis 25 and Exodus 15 seams already use, and it is
the only one in this book.

Movements are declared only when they have readings, and a movement carries no doorway until the
movement it points at exists. Both are enforced by the content validator.

### The reading map

Twenty readings, `unitLabel: 'Scene'`.

| Id | Span | Movement | Note |
| --- | --- | --- | --- |
| `mark-1a` | Mark 1:1–20 | authority | The beginning, the tearing, the first four |
| `mark-1b` | Mark 1:21–45 | authority | A day in Capernaum, and the leper |
| `mark-2` | Mark 2:1–3:6 | authority | Five conflicts ending in a plot, `crossesChapters` |
| `mark-3` | Mark 3:7–35 | authority | The twelve, out of his mind, the true family |
| `mark-4` | Mark 4 | authority | Parables, and the storm |
| `mark-5` | Mark 5 | authority | Legion, the woman, Jairus's daughter |
| `mark-6` | Mark 6 | authority | Nazareth, the mission, John's death, the five thousand |
| `mark-7` | Mark 7 | authority | What defiles, the Syrophoenician woman |
| `mark-8a` | Mark 8:1–21 | authority | The four thousand, and do you still not understand |
| `mark-8b` | Mark 8:22–38 | way | Bethsaida, Peter's confession, the first prediction |
| `mark-9` | Mark 9 | way | The transfiguration, the boy, who is greatest |
| `mark-10a` | Mark 10:1–31 | way | Divorce, the children, the rich man |
| `mark-10b` | Mark 10:32–52 | way | The third prediction, and Bartimaeus |
| `mark-11` | Mark 11 | temple | The entry, the fig tree, the temple |
| `mark-12` | Mark 12 | temple | The tenants, the questions, the widow's coins |
| `mark-13` | Mark 13 | temple | Not one stone |
| `mark-14a` | Mark 14:1–52 | handed-over | The oil, the supper, Gethsemane, the arrest |
| `mark-14b` | Mark 14:53–72 | handed-over | The trial, and Peter outside |
| `mark-15` | Mark 15 | handed-over | The sentence, the cross, the centurion |
| `mark-16` | Mark 16:1–8 | handed-over | The empty tomb, and the ending |

`mark-2` is the only reading that crosses a chapter. It holds one passage per chapter so every
verse's chapter can be attributed, which is what the expansion fill and the verse-integrity
invariant both require, exactly as the Exodus plague reading does.

### The ending

The book ends at 16:8. The longer ending, 16:9–20, is not authored as scripture: it is the subject
of the book capstone, alongside the shorter ending and the manuscripts that carry both. A reader
meets Mark's stop first and learns afterward what was done about it.

This is a decision made by default rather than by instruction, and it is reversible. The
alternative, authoring 16:9–20 as a final reading whose subject is how the canon grew a tail, is
more complete and less true to the book. Flagged for the owner.

### Verse count

Mark has 678 numbered verses and 673 that carry text. The five empty ones, 7:16, 9:44, 9:46, 11:26
and 15:28, are absent from the earliest manuscripts, and the BSB keeps the numbers and drops the
words. The generator is therefore run with 673, and the count assertion still does its job. This is
recorded here because 673 would otherwise look like a truncated download to whoever adds book five.

### Tier and the theme gate

Readings land as `grounded` skeletons carrying scripture and a ground note, and each authoring
change flips one to `sitting`, authors its layers and tags it in `content/themes.ts` in the same
commit. Every commit leaves the repo green.

No new theme keys are expected. The existing vocabulary carries this book, and `the-outsider`,
`powerlessness`, `complicity` and `god-feels-absent` all have more to do here than they have had
so far.

### The turn

`addr.mode` is `names` by default, as in every narrative book. `claims` is used where the text puts
a demand on the reader rather than describing them, which in this book is the discipleship
material in movement 2. One turn per sitting, on the reading's closing passage, which is the house
rule from Exodus onward.

### The lenses

The archetypal lens changes character in this book and the change is deliberate. In the Torah it
is source criticism and the ground. In Mark it is manuscripts and occupation. The caveat line the
UI appends is unchanged and still fits.

### Sources

Recurring: Marcus, Collins, Bond, France. Textual: Ehrman and Metzger, in the composition panel and
wherever the manuscripts are the subject. Topical: Wrede for the secret, Horsley for occupation.
All paraphrased, never quoted.

### Publication, announcement and the free sample

The book entry is created with `published: false`, and `COMING_SOON` stays empty. The free sample
stays Genesis's primeval history: moving it, or opening the first Mark movement, is an
outward-facing pricing decision and belongs to the owner. Recorded as open, not decided here.

### Images

None this pass.

## Testing Decisions

No new test file. The three existing seams cover this book.

**Content invariants, at the validator seam.** Everything applies by construction. Worth asserting
by observing the validator green at every commit.

**Expansion, at the `expandReading(getReading(...))` seam.** Extend with one case: a Mark passage
fills its interior gaps from the Mark lookup, proving the registry entry is live.

**Navigation, at the `getReading` / `getAdjacent` / `getMovement` seam.** Extend with: the Mark
readings resolve by id, adjacency follows authored order across the chapter-8 seam, and
`mark-8b` files under `the-way` rather than under `the-authority` despite sitting in chapter 8.
That override fails silently if broken, which is exactly the Exodus 15 lesson.

## Out of Scope

- Ecclesiastes, which is book five.
- Finishing Ruth. Tickets 03 through 06 on that tracker are still open and are not blocked by this.
- Publishing Mark, announcing it, or changing the free sample.
- Authoring Mark 16:9–20 as scripture.
- Hero and situation banner images.
- Companion work.
- Any renderer change.

## Further Notes

This is the first book in the app that a large part of its likely readership will arrive already
believing something specific about. Genesis and Exodus have a source-critical apparatus that
surprises people; Mark has a textual one that unsettles them, and the difference is that the
unsettling facts here are about a text people have staked something on. The register that has
worked for three books, which is to state what is known, name the serious case on the other side,
and decline to pronounce, is the register that has to hold hardest here.

The other thing worth writing down. Ruth ends with a woman holding a child that is not hers and a
name she never took back. Mark ends with women running from a tomb and telling nobody. Two books at
opposite ends of the shelf that both refuse the ending the reader came for. That is not a
coincidence worth engineering, but it is worth noticing when the book capstones get written.
