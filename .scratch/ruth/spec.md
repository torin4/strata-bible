# Spec: Ruth — the whole book

Status: ready-for-agent
Created: 2026-09-10
Scope: Ruth 1–4, the complete book, across two movements. Book three.

## Problem Statement

STRATA ships two books. Both are Torah narrative, both are long, and both took a sustained run to
write: Genesis over five weeks, Exodus in one concentrated day against a spec per movement. The
catalog argument says a gospel is the right third book, and it still does. That is not the
argument this spec answers.

Ruth is 85 verses. It is the shortest complete narrative in the Hebrew Bible, it is entirely
`scene`, the kind the renderer has proven 144 times across two books, and it needs no new
plumbing at all: the BSB generator is already per-book, the expansion registry already takes an
entry, the placement helper already exists, and every content invariant already applies to every
book by construction. The whole technical surface of book three is one generator run and one
registry line.

What Ruth actually poses is a content problem the first two books never did, and it is a problem
of restraint rather than difficulty. Genesis and Exodus are long books whose movement apparatus,
four situation panels and four capstones apiece, sits on 1,533 and 1,213 verses respectively. The
same apparatus on 85 verses would bury the book. The density gate exists to stop commentary
outweighing scripture inside a passage; nothing currently stops it at the movement layer, and
Ruth is the first book small enough for that to matter.

There is a second restraint problem, specific to this book. Ruth is short, warm and shapely, and
it invites being read as a romance with a happy ending. It is not one. A woman loses her husband
and both her sons in five verses, comes home and refuses her own name, and the book never gives
back what it took from her. An app whose stated promise is to refuse tidy morals either holds
that line here or it does not have the promise.

## Solution

Author Ruth complete, at Genesis and Exodus quality, as two movements rather than four.

The book divides into four acts, one per chapter, and that division is real: the road, the field,
the threshing floor, the gate. It is carried in the reading map, where one reading is one act. It
is deliberately NOT carried in the movement layer, because four movements over 85 verses would
mean four situation panels, four capstones and three doorways wrapped around a novella. Two
movements, Ruth 1–2 and Ruth 3–4, split the book at its actual hinge: everything before the
threshing floor is survival, everything after is a claim being pressed.

The book stays unpublished until all four chapters are done, reachable by direct URL and absent
from the landing page and the find index, exactly as Exodus was for the whole time it was being
written.

The scripture is materialised from `content/bsb-ruth.ts` and never typed by hand, and the
verse-integrity invariant proves it. That machinery is already built and already runs.

## User Stories

### The reader

1. As a reader, I want a third book that is not another forty-chapter commitment, so that finishing something is possible in a week rather than a season.
2. As a reader, I want each chapter to be one sitting, so that the book's own four-act shape is the shape I read it in.
3. As a reader who has lost someone, I want the book's opening losses left as losses, so that I am not handed a consolation the text has not earned yet.
4. As a reader, I want Naomi's bitterness recorded without correction, so that I can see that Scripture does not require me to be finished grieving before it will talk to me.
5. As a reader, I want it named that the narrator never rebukes her, so that I stop waiting for the passage where she gets told off.
6. As a reader, I want the rebuilding to be shown as work and errands rather than rescue, so that what happens to her is something I could recognise in a week of my own.
7. As a reader, I want to know that almost nothing supernatural happens in this book, so that I can see what it claims about how help actually arrives.
8. As a reader, I want the Moabite problem named plainly, so that Ruth's presence in the story reads as the scandal the first audience would have felt.
9. As a reader, I want the canon's own argument about foreigners set beside this book, so that I see Scripture disagreeing with itself rather than speaking with one voice.
10. As a reader, I want the threshing floor left as risky and ambiguous as the Hebrew leaves it, so that the book is not sanitised on my behalf.
11. As a reader, I want the legal machinery at the gate explained, so that the last chapter is a scene rather than a contract I cannot follow.
12. As a reader, I want the ending to be honest that Naomi's husband and sons stay dead, so that the new thing is a new thing rather than a restoration.
13. As a reader, I want the closing genealogy to land as the weight it is, so that I see that nobody inside the story knew what they were building.
14. As a reader in trouble, I want to find Ruth through the find index by what I am feeling, so that discovery works as it does for the first two books.
15. As a reader, I want at least one sitting to close with something to carry rather than something to answer, so that a book about loss does not only ever ask me questions.
16. As a reader, I want the book to work signed out and with the companion off, so that nothing essential waits on an account or a network call.

### The author

17. As the author, I want the reading map fixed before any prose is written, so that authoring is filling a known shape.
18. As the author, I want scripture materialised mechanically from the BSB, so that no verse is ever typed from memory.
19. As the author, I want to read one fully authored sitting before the rest are written, so that voice drift is caught at a cost of one reading.
20. As the author, I want the movement apparatus held to two panels and two capstones, so that the commentary layer does not outweigh an 85-verse book.
21. As the author, I want the density gate to hold Ruth from the first commit, so that a short book cannot quietly run richer than the long ones.
22. As the author, I want sources drawn from Ruth specialists with Alter carrying over, so that the register stays continuous without pretending Torah scholarship covers this book.
23. As the author, I want scholars paraphrased and attributed and never quoted, so that attribution never becomes reproduction.
24. As the author, I want each authoring commit to leave the repo green, so that work can stop at any point.
25. As the author, I want Ruth off the landing page and out of find until it is complete, so that no paying reader meets a half-finished book.

### The maintainer

26. As a maintainer, I want book three to need no new plumbing, so that the per-book work built during Exodus is proven to have paid off.
27. As a maintainer, I want the density gate to hold Ruth by name, so that a new book is not silently exempt from the gate the others are held to.
28. As a maintainer, I want the existing invariants to cover Ruth automatically, so that a third book does not need a third validator.

## Implementation Decisions

### Movement structure

Two movements. Ids `empty` (Ruth 1–2) and `the-redeemer` (Ruth 3–4). Book id `ruth`.

The four-act structure is carried by the reading map, one reading per chapter, because that is
the book's literary design and it is worth preserving. It is not carried by the movement layer,
for the density reason in the problem statement: four situation panels and four capstones over 85
verses is more apparatus than scripture, which is the exact failure the density gate was built to
prevent one layer down.

Only movement 1 is declared until movement 2 has readings, and movement 1 carries no doorway
until movement 2 exists. Both rules are enforced by the content validator, which fails an empty
movement range and a doorway pointing at an unknown movement.

### The reading map

Four readings, one per chapter, `unitLabel: 'Scene'`.

| Id | Span | Movement | Note |
| --- | --- | --- | --- |
| `ruth-1` | Ruth 1 | `empty` | The road. Three scenes: the emptying, go back, the vow and the name |
| `ruth-2` | Ruth 2 | `empty` | The field. Gleaning, and a landowner who notices |
| `ruth-3` | Ruth 3 | `the-redeemer` | The threshing floor |
| `ruth-4` | Ruth 4 | `the-redeemer` | The gate, and the genealogy |

No reading crosses a chapter, so `crossesChapters` is never set and every passage is verifiable
against the BSB by the existing invariant.

### Tier and the theme gate

Readings land as `grounded` skeletons carrying scripture and a ground note, and each authoring
change flips one to `sitting`, authors its layers and tags it in `content/themes.ts` in the same
commit. A sitting missing from the theme index fails the validator, and that rule applies to
unpublished books. Every commit leaves the repo green.

No new theme keys are needed. The existing vocabulary already carries this book: `grief`,
`starting-over`, `god-feels-absent`, `loneliness`, `waiting`, `the-outsider`, `deferred-hope`,
`powerlessness`.

### The turn

`addr.mode` is `names` throughout. This is narrative, and the register that carried 85 Genesis
passages is the right one. One turn per sitting, on the reading's closing passage, which is the
Exodus standard and is now the house rule. Ruth's chapters are short and a turn on every scene
would address the reader four times in twenty verses.

`prayer` is used sparingly, where the reading closes on something to carry rather than something
to answer. `ruth-1` takes one, mode `meditate`. This is the second use of the field in the repo.

### The moral problem

Two things this book gets wrong when it is handled gently, and both are held rather than
distributed.

The deaths in Ruth 1 are not punishment. A long tradition reads the family's move to Moab as the
sin the deaths repay, and the narrator says only that there was a famine and a man went. Leaving
that unnamed lets a grieving reader conclude that loss is a verdict.

Naomi's bitterness is not a failure of faith awaiting correction. She says the hand of the LORD
has gone out against her, and asks to be called Mara, and no one in the book contradicts her,
then or later. This is the load-bearing misreading of `ruth-1` and it is the reason this book is
being written before the gospel.

### The canon arguing back

Ruth's Moabite identity is the book's own argument, and it is set against Deuteronomy 23:3, which
bars Moabites from the assembly to the tenth generation, and against the campaign in Ezra 9–10 and
Nehemiah 13 to send foreign wives away. This book ends by making a Moabite woman the
great-grandmother of David and saying so in its last line. Carried as a `tensions` entry in
`ruth-1`, where Ruth declares herself into Israel, and returned to in the book capstone.

### Historicity and composition

Stated in two places only, the book composition panel and the movement 1 situation panel, as
Exodus does it. Both name the open question honestly: the story is set in the time of the judges,
its date of writing is genuinely disputed, the linguistic evidence is used by both sides, and the
case that it was written in the Persian period as an argument against Ezra and Nehemiah's
policy is a reading rather than a fact. Individual ground notes stay literary and concrete.

### Sources

Recurring: Campbell, Hubbard, Sasson, Eskenazi and Frymer-Kensky, Nielsen. Carried over from the
first two books: Alter. Topical: Trible for the book's structure around its two women, Fewell and
Gunn for the reading that declines to make Boaz simply generous. Theological lens: Levenson.
Archetypal lens: keyed to the recurring image, per the existing convention. All paraphrased,
never quoted.

### Density

`ruth` is added to `HELD_BOOKS` in `scripts/check-density.ts` in the first content commit, so the
gate holds the book from its first authored passage rather than from publication. Target stays
the default: new passages are held at `RATIO_TARGET`, near the norm the two published books
actually read at, not at the failure ceiling.

### Publication and announcement

The book entry is created with `published: false`. `COMING_SOON` stays empty: announcing Ruth on
the live landing page is an outward-facing decision and is the owner's to make, separately, at
whatever point he wants it announced. Publication is likewise a later decision, made when all
four chapters are done.

### Images

None this pass. Hero and situation banner images are a polish step and Ruth is unpublished.

## Testing Decisions

No new test file. All three seams already exist and already run in CI, and Ruth exercises them
without extension.

**Content invariants, at the validator seam.** The existing checks cover Ruth by construction:
unique ids, non-empty passages, movement ranges, doorway targets, theme tagging, and
verse-integrity against the newly registered `ruth` lookup. Worth asserting by observing the
validator green at every commit rather than by writing a Ruth-specific test.

**Expansion, at the `expandReading(getReading(...))` seam.** Extend the existing tests with one
case: a Ruth passage fills its interior gaps from the Ruth lookup. This proves the registry entry
is live rather than merely present.

**Navigation, at the `getReading` / `getAdjacent` / `getMovement` seam.** Extend with: the Ruth
readings resolve by id, adjacency runs `ruth-1` through `ruth-4` in authored order and does not
spill into another book, and the movement lookup returns `empty` for chapters 1–2.

Not tested: the BSB generator, unchanged and already guarded by its verse-count assertion, which
refused nothing on Ruth's 85.

## Out of Scope

- Mark. Deferred, not cancelled.
- Publishing Ruth, or announcing it in `COMING_SOON`.
- Any free-sample or pricing change. The free movement remains Genesis's primeval history.
- Hero and situation banner images.
- Companion work. Grounded readings leave their middles empty exactly as the first two books do.
- Backfilling the 18 grounded Genesis readings, or reconciling Genesis's per-scene turns with the
  per-sitting turns Exodus and Ruth use. Both are real and both are their own piece of work.
- Any renderer change. Nothing in this book needs one.

## Further Notes

This book was chosen for what it is about rather than for what it does to the catalog. That is a
departure from how books one and two were picked, and it should be recorded as one so that a
later reader of this file does not go looking for the strategic argument. The strategic argument
says Mark. Mark can wait.

The restraint at the movement layer is the decision most likely to be revisited. If Ruth reads
thin at two movements, the fix is not four movements: it is a longer book. The movement apparatus
is sized for books of hundreds of verses and this is the first time that has been tested against
a short one.
