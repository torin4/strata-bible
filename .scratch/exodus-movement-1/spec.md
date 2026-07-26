# Spec: Exodus, movement 1 — Out of Egypt

Status: ready-for-agent
Created: 2026-07-26
Scope: Exodus 1–15:21, the first of four movements, plus the multi-book plumbing it forces.

## Problem Statement

STRATA ships exactly one book. Genesis is complete across four movements, 47 readings and
85 passages, and a reader who finishes it arrives at a wrap-up with nowhere to go. Exodus is
announced on the landing page as coming soon and does not exist.

Two things stand in the way of simply writing it.

First, the app is quietly single-book in its plumbing. The full-text reveal, the feature that
lets a reader open the verses a curated sitting omits, is wired directly to a Genesis-only
lookup and refuses any other book by name. A second book would silently lose the feature.

Second, and larger: every one of Genesis's 85 passages is a narrative scene. The kind-aware
renderer has six other kinds, and none of them has ever run in a published book. Exodus 1–15:21
ends on the Song of the Sea, a poem, so the first movement of the second book is also the first
time STRATA publishes poetry. The lineation choice made there becomes the house style for
Psalms, and it is made once.

There is also a content problem Genesis never posed. Exodus 1–15 is a liberation story with an
oppressor, and the deliverance is paid for by dead Egyptian children and a drowned army, after
God hardens the heart of the man who might otherwise have relented. An app whose stated promise
is to name where Scripture argues with itself and to refuse tidy morals either handles that
honestly or forfeits the promise. Genesis, whose worst moments are family betrayals, never
forced the question.

## Solution

Author Exodus 1–15:21 as one complete movement at Genesis quality, and build the minimum
plumbing that a second book requires, no more. The book stays unpublished until all forty
chapters are done: reachable by direct URL for review, absent from the landing page and from
the find index, exactly as the genre-proof fixtures are today.

A reader who opens the movement gets eleven readings that run from the midwives who lie to
Pharaoh through to the Song at the sea. The sittings carry the full four layers. The grounded
readings carry clean scripture and a ground note, with meaning, turn and ask left empty for the
companion, matching how Genesis's grounded chapters already behave. The movement opens with a
situation panel that states plainly what the evidence does and does not support about the exodus,
and closes with a capstone that returns to the cost of the deliverance without resolving it.

The plumbing generalises rather than duplicates: the BSB text generator becomes a per-book
script, the expansion module gains a book registry, and a new content invariant proves that
every authored verse in the repo matches the Berean Standard Bible exactly.

## User Stories

### The reader

1. As a reader who has finished Genesis, I want a second book to exist, so that the app does not end when the first book does.
2. As a reader, I want Exodus movement 1 to run from slavery to the Song without gaps, so that I experience a complete arc rather than a sample.
3. As a reader, I want each reading to be a sitting I can finish in one go, so that the book fits into a daily rhythm.
4. As a reader, I want the plague cycle presented as one reading rather than five near-identical ones, so that the escalation reads as escalation rather than repetition.
5. As a reader on a curated sitting, I want to reveal the verses the sitting omits, so that I can see the whole chapter when I want it and a shaped selection when I do not.
6. As a reader, I want revealed verses to look like context rather than part of the authored sitting, so that I can tell what was chosen for me from what was merely filled in.
7. As a reader, I want the Song of the Sea to be set as poetry with its couplets visible, so that I read it as the song it is rather than as a paragraph.
8. As a reader, I want the Song's turn marked in the text itself, so that I can see where the poem stops recounting and starts pointing forward.
9. As a reader, I want to know up front what the evidence actually supports about the exodus, so that I am not asked to pretend and do not later feel misled.
10. As a reader who holds the exodus as history, I want the serious case for a historical core named alongside the mainstream reconstruction, so that the app is arguing rather than pronouncing.
11. As a reader, I want the hardening of Pharaoh's heart named as a problem rather than smoothed over, so that I can trust the app on the passages that are harder still.
12. As a reader, I want the death of the Egyptian firstborn to be answered by another voice inside the canon, so that I can see Scripture disagreeing with itself rather than speaking with one flattened voice.
13. As a reader, I want the Song's celebration over drowned men named as a tension, so that the movement does not close on a note it has not earned.
14. As a reader, I want the capstone to hold the deliverance and its cost together without resolving them, so that I am left with the text's own difficulty rather than a moral.
15. As a reader, I want most turns to name something already true of me, so that the book continues to feel recognised rather than preached at.
16. As a reader, I want a small number of turns to put me on the oppressor's side of the story, so that a liberation story does not become entirely about other people.
17. As a reader, I want the Song's turn to be handed to me as words I can pray, so that the poem becomes mine rather than a report of someone else's rescue.
18. As a reader in trouble, I want to find Exodus sittings through the find index by what I am feeling, so that discovery works the same way it does for Genesis.
19. As a reader who benefits from someone else's cost, I want a theme that names that honestly, so that the find index has somewhere to put me.
20. As a reader who has just got out of something, I want a theme for the disorientation that follows, so that the app speaks to after as well as during.
21. As a reader, I want ground notes to stay concrete and literary rather than relitigating the archaeology every time, so that the apparatus does not crowd out the scripture.
22. As a reader, I want the scripture I read to be a real, freely licensed translation, so that what I am reading is trustworthy text and not a paraphrase.
23. As a reader, I want navigation through the movement to follow the authored order, so that previous and next always land where the book intends.
24. As a reader who reaches the end of movement 1, I want the capstone to close the movement cleanly, so that an unfinished book does not feel broken.
25. As a reader, I want the movement to work signed out and with the companion off, so that nothing essential waits on an account or a network call.

### The author

26. As the author, I want the reading map fixed before any prose is written, so that authoring is filling in a known shape rather than discovering it.
27. As the author, I want scripture text materialised mechanically from the BSB, so that no verse in the book is ever typed from memory by a model.
28. As the author, I want the build to fail if any authored verse diverges from the BSB, so that a licensed translation cannot leak in and a typo cannot survive.
29. As the author, I want to read one fully authored sitting before the remaining ten are written, so that voice drift is caught at a cost of one reading rather than eleven.
30. As the author, I want the movement's sources drawn from Exodus specialists while Alter and Friedman carry over, so that the register stays continuous with Genesis without pretending Genesis scholarship covers Egypt.
31. As the author, I want scholars paraphrased and attributed and never quoted, so that attribution never becomes reproduction.
32. As the author, I want the density gate treated as binding even though it does not fail CI for an unpublished book, so that forty chapters of apparatus debt do not surface at publish time.
33. As the author, I want Exodus to stay off the landing page and out of find until the book is complete, so that no paying reader meets a quarter-finished book.
34. As the author, I want the book reachable by direct URL while unpublished, so that I can read what I have written in the real reader.
35. As the author, I want each authoring commit to leave the repo green, so that work can stop at any point without a broken build.
36. As the author, I want movements 2 through 4 left undeclared until they have readings, so that the validator's guarantees stay real rather than being relaxed to accommodate an empty shell.

### The maintainer

37. As a maintainer, I want the BSB generator to take a book name and expected verse count, so that adding book three is a command rather than a copied script.
38. As a maintainer, I want the generator to refuse to emit on an unexpected verse count, so that a truncated source cannot produce a plausible-looking file.
39. As a maintainer, I want regenerating Genesis to produce a byte-identical file, so that the refactor is provably behaviour-preserving.
40. As a maintainer, I want the expansion module to look books up in a registry, so that an unregistered book degrades to no reveal rather than to an error.
41. As a maintainer, I want the full BSB text to stay server-side, so that the client bundle does not grow by a book of scripture per book shipped.
42. As a maintainer, I want the new verse-integrity check run against Genesis and its findings reported, so that we learn the state of the existing text without turning this into a text-correction project.
43. As a maintainer, I want the existing content invariants to cover Exodus automatically, so that a second book does not need a second validator.

## Implementation Decisions

### Movement structure

Exodus divides into four movements: Out of Egypt (1–15:21), The road to the mountain
(15:22–18), The covenant (19–24), The presence (25–40). Only the first is declared in code.
The content validator fails a declared movement whose chapter range holds no readings, and
fails a doorway pointing at an unknown movement, so movements 2 through 4 are absent from the
codebase entirely and movement 1 carries no doorway until movement 2 exists. Movement id:
`out-of-egypt`. Book id: `exodus`.

### The reading map

Eleven readings. Ids follow the Genesis convention, including the `a`/`b` suffix that
anticipates a chapter split at a movement seam:

| Id | Span | Tier when authored | Note |
| --- | --- | --- | --- |
| `ex-1` | Exodus 1 | sitting | The midwives |
| `ex-2` | Exodus 2 | sitting | The basket, the flight to Midian |
| `ex-3` | Exodus 3 | sitting | The bush and the name |
| `ex-4` | Exodus 4 | grounded | Signs; the bridegroom of blood |
| `ex-5` | Exodus 5 | sitting | Bricks without straw |
| `ex-6` | Exodus 6 | grounded | I am the LORD; the genealogy |
| `ex-7` | Exodus 7–11 (selected) | sitting | The plague cycle, `crossesChapters: true` |
| `ex-12` | Exodus 12 | sitting | Passover |
| `ex-13` | Exodus 13 | grounded | The firstborn, the pillar of cloud |
| `ex-14` | Exodus 14 | sitting | The sea |
| `ex-15a` | Exodus 15:1–21 | sitting | The Song, `kind: poem`, `form: poetry` |

`ex-15a` is named for the split that arrives with movement 2, when `ex-15b` takes 15:22–27
(Marah) and both readings set `movementId` explicitly to override the chapter-range lookup, as
the Genesis 25 seam already does. Readings use `unitLabel: 'Scene'`.

The plague reading holds one Passage per chapter rather than a single passage spanning 7–11.
This is forced by the expansion module: it fills gaps only within one chapter and only when
authored verse numbers ascend, so a single passage carrying 7:14 through 11:10 would silently
lose the full-text reveal. Per-chapter passages keep it working.

### Tier and the theme gate

The content validator fails any sitting absent from the find index, and it applies to every
book regardless of publication state, as the six unpublished genre fixtures being tagged today
demonstrates. Therefore the skeleton lands all eleven readings as `grounded`, and each
authoring change flips one reading to `sitting`, authors its layers, and adds its theme tags in
the same commit. Every commit leaves the repo green.

### Publication

The Exodus book entry is created with `published` false. It stays out of the landing page and
the find index, and remains reachable by direct URL, matching how the genre-proof books already
behave. The existing coming-soon entry for Exodus stays as it is. Publication is a later
decision, made when the book is complete.

### Historicity

The evidentiary situation is stated plainly in two places and nowhere else: the book-level
composition panel, which covers how the book was written, and the movement-1 situation panel,
which covers the Egypt behind it. Both name the mainstream reconstruction, that there is no
Egyptian record of the departure, no archaeological trace of a mass migration through Sinai,
and that Israel most likely emerged largely from within Canaan, alongside the serious case for
a small historical core. Individual ground notes stay literary and concrete, as Genesis's do.

### The moral problem

Concentrated rather than distributed. The plague reading carries the movement's load-bearing
misreading, on the hardening of Pharaoh's heart, and a `tensions` entry setting the claim that
God's justice frees the enslaved against Ezekiel 18, where a child does not bear the father's
guilt, and Amos 9:7, where the exodus turns out not to be Israel's private possession. The Song
carries a tension on singing over drowned men. The movement capstone returns to the cost and
declines to resolve it.

### The turn

`addr.mode` is `names` by default, preserving the register of all 85 Genesis passages. Three
readings use `claims`, where the text puts the reader on the side that benefits: `ex-1`, `ex-7`
and `ex-12`. The Song uses `pray`. This is what makes the new `complicity` theme load-bearing
rather than decorative.

### Poetry

The Song is lineated: line breaks inserted at the parallelism so couplets stand as couplets,
and the passage is authored whole with no omitted verses, so the mismatch between broken
authored lines and unbroken filled lines never arises. Line-breaking a public-domain text is
formatting, not translation, so there is no licensing exposure. This sets the house style for
Psalms, and leaves the existing unbroken Psalm 13 fixture as a debt to repay when Psalms is
authored.

### The find index

Two new theme keys are added to the controlled vocabulary: `complicity` ("you benefit from
something that costs someone else") and `deliverance` ("you got out, and now what"). Every other
theme in the movement maps onto the existing twenty-four: oppression to injustice and
powerlessness, the unanswered cry to god-feels-absent, the bush to calling and limits, the
flight to Midian to starting-over.

### Sources

Recurring across the movement: Propp, Sarna, Childs, Fretheim, Meyers. Carried over from
Genesis: Alter, Friedman. Topical: Assmann for Egypt's own memory, Walzer for the exodus as
political grammar. In the composition panel only: Finkelstein and Silberman for the archaeology,
and Hoffmeier for the case for a historical core. Theological lens: Heschel, Levenson. Archetypal
lens: keyed to the recurring image, per the existing convention. All paraphrased, never quoted.

### Scripture text pipeline

The Genesis-specific BSB generator becomes a per-book script parameterised by book name and
expected verse count, emitting one generated module per book. Exodus is 1,213 verses. The
verse-count assertion is retained per book so a truncated source refuses to emit. Regenerating
Genesis must produce a byte-identical file; this is the acceptance check for the refactor.

The expansion module replaces its direct Genesis import with a book-id-keyed registry of
lookups. An unregistered book returns the reading untouched, which is the current behaviour for
every non-Genesis book and must not change.

Authored verse arrays are materialised mechanically from the generated lookup: the author writes
a skeleton of reading ids, titles, passage refs and chosen verse numbers, and a script emits the
verse arrays verbatim. Scripture text is never typed by a model. The apparatus is then authored
around the materialised verses.

### The verse-integrity invariant

A new invariant in the content validator: every authored verse whose book has a BSB lookup must
match that lookup exactly, or the build fails. Run it against Genesis and report the findings
rather than fixing them inside this piece of work; a Genesis mismatch is a separate decision.

### Images

None this pass. Genesis's hero and situation banner images are a polish step, and Exodus is
unpublished.

## Testing Decisions

A good test here asserts external behaviour: what a reader would observe, or what a maintainer
would rely on. It does not assert the shape of internal helpers. All three seams already exist
and already run in CI; no new test file is created.

**Expansion, at the `expandReading(getReading(...))` seam.** Prior art: the existing expansion
tests, which use real content and the real BSB lookup with no mocks and assert on which verse
numbers come back flagged as omitted. Extend with: an Exodus passage fills its interior gaps
from the Exodus lookup; a plague passage confined to one chapter expands while the reading as a
whole spans five; a book with no registered lookup returns the identical reading object; every
existing Genesis assertion continues to pass unchanged.

**Content invariants, at the validator seam.** Prior art: the existing invariants for unique
ids, non-empty passages, movement ranges, doorway targets and theme tagging, which run as a CI
step and exit non-zero with a list of problems. Extend with the verse-integrity check. The
existing invariants need no extension to cover Exodus; they apply to every book by construction,
which is itself worth asserting by observing that the validator passes at every commit.

**Navigation, at the `getReading` / `getAdjacent` / `getMovement` seam.** Prior art: the existing
content-lib tests. Extend with: the eleven Exodus readings resolve by id; adjacency runs `ex-1`
through `ex-15a` in authored span order and does not spill into another book; the movement lookup
returns `out-of-egypt`; the closing-movement lookup returns the movement only on `ex-15a`.

Not tested: the BSB generator. It is one-shot codegen whose correctness check is that
regenerating Genesis yields a byte-identical file, verified once at refactor time, and it already
refuses to emit on an unexpected verse count. A fixture-driven test of a script that runs twice
in the project's life would cost more than it protects.

## Out of Scope

- Movements 2, 3 and 4 of Exodus. Not authored, and not declared in code.
- Publishing Exodus. It stays unpublished until all forty chapters are complete.
- The statute-cluster kind. The Ten Words and the Covenant Code are movement 3.
- Any free-sample or pricing change. The free movement remains Genesis's primeval history.
- Hero and situation banner images for Exodus.
- Companion work. Grounded readings leave their middles empty exactly as Genesis's do.
- Repairing the unbroken Psalm 13 poetry fixture, or any other seed fixture.
- Fixing whatever the verse-integrity check reports about Genesis. Report only.
- Any renderer change. The kind-aware renderer already handles poetry; this is the first
  published use of it, not a modification of it.

## Further Notes

The density gate only fails CI for published books, so it will be informational for the entire
time Exodus is being written. Treat its warnings as binding anyway. The alternative is
discovering a forty-chapter apparatus debt at the moment of publication, which is the worst
possible time to find it.

The work order is deliberately front-loaded with mechanical, tool-verifiable steps, so that the
first genuinely subjective artefact, the authored prose of `ex-1`, arrives against a background
that is already green. `ex-1` is a hard stop for review before the remaining ten readings are
written. That gate is the cheapest available insurance against voice drift, and it should
survive into the ticket breakdown rather than being folded into a larger authoring ticket.

One decision here reaches beyond this spec. The lineation of the Song fixes how STRATA sets
poetry, and Psalms is a book of one hundred and fifty poems. It is worth writing an ADR for
that decision alone: it is hard to reverse once poetry is authored against it, it is surprising
without context, since authored verses will carry line breaks that the BSB lookup does not, and
it was a real trade-off against the existing unbroken fixture.
