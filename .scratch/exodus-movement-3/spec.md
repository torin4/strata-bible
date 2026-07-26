# Spec: Exodus, movement 3 — The covenant

Status: ready-for-agent
Created: 2026-07-26
Scope: Exodus 19–24, the third of four movements, plus the first published use of the
statute-cluster render path and the density fix that makes it honest.

## Problem Statement

Two movements of Exodus are authored and every passage in them is a narrative scene. So is every
passage of Genesis. Across 117 authored passages the app has published exactly one kind of
writing, and the reader has never met the Bible as law.

Movement 3 is where that ends, and it ends hard. Exodus 19 to 24 is the covenant: fire on a
mountain, the Ten Words, a long code of case law, and a ceremony sealed in blood. Six chapters,
169 verses, 4,081 words, which is larger than movement 1. Most of it is legislation.

Three problems follow.

The first is mechanical. The kind-aware renderer has a statute-cluster path, a list form, per-item
annotations and a distinct visual mode for law that does not bind the reader. None of it has ever
shipped. It is proven only by a single unpublished Leviticus fixture, and a path proven by one
fixture is a path nobody has really tested.

The second is that the gates do not yet measure this kind of content honestly. The density check
counts a passage's ground, meaning, lenses, misreading, tensions, turn and ask, and does not count
per-item chips or notes at all. A statute-cluster carries most of its apparatus in exactly those
per-item fields. Shipped as it stands, the gate would report a comfortable ratio for a page
covered in commentary.

The third is the content itself, and it is the real problem. This movement contains the hardest
material in the book. Not the plagues, which are a story about people long ago, but law addressed
to a reader in the imperative: a daughter sold as a servant who does not go free as the men do, a
master who beats a servant and goes unpunished if the servant survives a day or two because the
servant is his property, death for cursing a parent, death for a sorceress. An app that promises
to refuse tidy morals either shows a reader those verses or quietly does not.

## Solution

Author Exodus 19 to 24 as five readings, in the same shape the first two movements established,
and let the law be law: rendered as a numbered cluster, annotated per item, with the verses that
trouble a modern reader present in the text rather than selected around.

The mechanism for that already exists in the schema and has never been used. A per-item address
carries a mode, and one of those modes is for law that makes no claim on the reader but is worth
seeing. It renders differently from a law that does make a claim. So the reader meets Exodus 21
with the servant laws visible and marked as what they are, sitting beside laws about the foreigner
and the widow that are marked as still making a demand. The distinction is drawn on the page
rather than argued in a paragraph.

One misreading names the dodge that these laws were simply the times. One tension sets them
against the canon's own later revisions, which are real and are not a modern invention. The ground
notes carry the comparison with the surrounding legal world honestly: in places more restrictive
of the master than its contemporaries, and still slavery.

Before any of that ships, the density gate learns to count per-item apparatus, so the number it
reports about a page of law is true.

## User Stories

### The reader

1. As a reader, I want to reach the mountain the first two movements have been walking toward, so that the arc of the book pays off rather than stopping in the wilderness.
2. As a reader, I want the covenant presented as five sittings, so that six chapters of mixed narrative and law arrive at a pace I can keep.
3. As a reader, I want law rendered as a numbered list rather than as prose, so that I can see it is a different kind of writing from a story.
4. As a reader, I want the Ten Words given their own sitting, so that the most quoted passage in the book is not buried inside a longer code.
5. As a reader, I want each law I meet to tell me whether it still makes a claim on me, so that I am not left to guess which parts of an ancient code I am supposed to be obeying.
6. As a reader, I want a law that plainly does not bind me to be marked as such and still shown, so that the app is not deciding on my behalf what I am allowed to see.
7. As a reader, I want the servant laws in Exodus 21 present in the text, so that I can trust the app is not curating Scripture down to what is comfortable.
8. As a reader, I want the hardest laws named rather than skipped past, so that the honesty the app promises is visible exactly where it costs something.
9. As a reader, I want to know how these laws compared with the legal world around them, so that I can see both that they restrained a master more than their neighbours did and that they still permitted slavery.
10. As a reader, I want the misreading that "it was just the times" named and answered, so that I am not handed the easiest available excuse.
11. As a reader, I want the canon's own later revisions shown, so that I can see Scripture arguing with this page rather than presenting it as final.
12. As a reader, I want eye for eye explained as a limit rather than a licence, so that I understand what it was restraining.
13. As a reader, I want the laws about the foreigner, the widow and the poor marked as still claiming me, so that the movement is not only about what has expired.
14. As a reader, I want the theophany at Sinai told as a scene, so that the law arrives out of an encounter rather than out of nowhere.
15. As a reader, I want the covenant ceremony told as a scene, so that the movement closes on something happening rather than on a list ending.
16. As a reader, I want a capstone that holds the whole movement, so that I am not left with the impression that the covenant is a filing cabinet.
17. As a reader, I want the movement to end without pretending the difficulty is settled, so that the app keeps the habit it established with the plagues.
18. As a reader who reaches the end of movement 2, I want a doorway into movement 3, so that the road to the mountain leads somewhere.
19. As a reader, I want the apparatus around a page of law to stay proportionate to the law itself, so that I am reading Scripture rather than a commentary on it.
20. As a reader, I want the scripture in the law readings to be the real Berean Standard Bible, so that what I am reading is trustworthy text.
21. As a reader in trouble, I want the law sittings to be findable by what I am carrying, so that discovery works for them as it does for the narrative sittings.

### The author

22. As the author, I want the statute-cluster path exercised by real content, so that a render path proven only by one unpublished fixture becomes a path the book actually depends on.
23. As the author, I want per-item annotation used for what it was designed for, so that the distinction between binding and non-binding law is made visually rather than in prose every time.
24. As the author, I want the density figures for a page of law to be true, so that I am not reassured by a number that ignores most of what I wrote.
25. As the author, I want the verse-integrity guarantee to hold on the law readings too, so that a statute cannot drift from the BSB any more than a narrative verse can.
26. As the author, I want each law reading confined to a single chapter per passage, so that verse numbers ascend and the integrity check can actually run.
27. As the author, I want the register to stay recognisable, so that a reader arriving from movement 2 is not met by a different voice.
28. As the author, I want the theme vocabulary extended only where the law genuinely says something the existing keys cannot, so that /find stays scannable.
29. As the author, I want movement 3 to leave a doorway unwritten, so that the book does not promise a fourth movement before it exists.

### The maintainer

30. As a maintainer, I want the density gate to count every field a reader reads, so that its ratio means what it claims to mean.
31. As a maintainer, I want the existing content invariants to cover a statute-cluster with no special-casing, so that a second kind of passage does not need a second validator.
32. As a maintainer, I want the selection-is-final property of clusters asserted, so that nobody later assumes the full-text reveal will rescue an over-trimmed code.
33. As a maintainer, I want tests on the movement seam and the doorway chain, so that adding a movement cannot silently misfile a reading.

## Implementation Decisions

### The reading map

Five readings, chapters 19 to 24. Movement 2 ends at chapter 18, so movement 3 is declared by
chapter range alone and needs no `movementId` override anywhere.

| Id | Span | Kind | Note |
| --- | --- | --- | --- |
| `ex-19` | Exodus 19 | scene | Fire on the mountain, and the terms offered |
| `ex-20` | Exodus 20 | statute-cluster | The Ten Words |
| `ex-21` | Exodus 21 | statute-cluster | Persons: servants, violence, the ox |
| `ex-22` | Exodus 22–23 (selected) | statute-cluster | Property, the vulnerable, the festivals |
| `ex-24` | Exodus 24 | scene | The covenant sealed in blood |

All five are sittings. The movement is the argument of the book and none of it is background.

### One chapter per passage, without exception

`ex-22` spans two chapters and must therefore hold at least two passages, one per chapter. This is
not presentation, it is correctness. The verse-integrity check attributes a bare verse number to a
chapter only when the numbers ascend within the passage; a single passage running 22:x then 23:x
does not ascend, so the check would mark it unverifiable and skip it silently. The reading would
then carry the one guarantee the project cares most about, and not actually have it. The plague
reading solved the same problem the same way.

### Statute-cluster rendering

`kind: "statute-cluster"`, `form: "list"`, items in `statutes`, annotations in `perItem` keyed by
verse number. Each annotated item may carry a per-item address with a mode, a short gloss note, or
both. Two modes are used:

- `claims`, for a law that still makes a demand on the reader. Rendered as the gold callout.
- `none-but`, for a law that does not bind the reader but is worth seeing. Rendered distinctly.

This is the whole mechanism by which the hard laws are shown without being either endorsed or
hidden. It is a distinction drawn on the page, once per law, rather than an argument repeated in
prose.

### The hard laws

The servant laws, the talion formula and the capital sentences stay in the text. They are marked
`none-but`. Alongside them, the laws protecting the foreigner, the widow, the orphan and the
debtor are marked `claims`, because they do still make a demand, and the contrast between the two
is the point.

One misreading, on `ex-21`, names the dodge that these laws were simply the times and answers it.
One tension sets the page against the canon's own later movement: the release laws in
Deuteronomy 15, Jeremiah 34 where a broken release is treated as covenant-breaking, and the
gospel principle that a concession was made for hardness of heart. These are the canon revising
itself, not a modern reader disagreeing with it.

Ground notes carry the comparison with the surrounding legal world plainly: in places more
protective of a servant than its contemporaries were, and still a code that permits a person to
be owned. Both halves, without either cancelling the other.

### Density: count per-item apparatus

The density check currently counts ground, meaning, lenses, symbols, misreading, tensions, turn,
soft, ask and prayer. It does not count `perItem` at all, so a statute-cluster's chips and notes
are invisible to it. Before movement 3 ships, per-item address text and gloss notes are added to
the apparatus count. Without this the ratio reported for a page of law is fiction, and the gate
that was tightened to 1.8x for exactly this reason would be reporting a comfortable number about
the most annotated pages in the book.

The baseline is refreshed after the change, so existing passages are unaffected and only the new
counting applies to new work.

### The reveal does not apply to law

The full-text reveal returns clusters untouched, by design: it exists to complete a curated prose
passage, not to unroll a legal code. The consequence is that verse selection in a statute-cluster
is final, with no escape hatch for the reader. Selections must therefore be made on the
understanding that what is left out is simply absent.

### Movement, doorway and capstone

Movement 3 is declared with chapter range 19 to 24. Movement 2 gains a doorway pointing at it, in
the same change, since a doorway to a movement that does not exist fails the validator. Movement 3
carries a situation panel and a capstone, and no doorway, because movement 4 does not exist yet.

The capstone holds the movement whole and does not resolve it, following the pattern the first two
established.

### Themes

The existing vocabulary covers what happens to a reader. The Ten Words are about what is asked of
one. A key for being bound, or being given rules to live inside, is likely needed, on the same
reasoning that added `complicity` for movement 1. It is added only if the law readings genuinely
cannot be tagged honestly without it, and it is added in the same change that tags them.

## Testing Decisions

A good test here asserts what a reader or a maintainer would observe: which movement a reading
belongs to, that a doorway resolves, that a law renders as a list with its annotations, that the
scripture is the BSB. It does not assert the internals of the renderer or the wording of prose.

Three existing seams, no new ones.

**Content invariants, at the validator seam.** Prior art: the verse-integrity check and the
movement, doorway and theme-tagging invariants, all of which already run in CI and already read
`statutes` wherever they read `verses`. Extend the density counting to include per-item apparatus.
Everything else applies to a statute-cluster with no special-casing, which is itself the property
worth having.

**Structure and navigation, at the `getReading` / `getAdjacent` / `getMovement` /
`getClosingMovement` seam.** Prior art: the movement 2 tests, especially the chapter 15 seam
tests, which exist because a misfiled reading fails silently. Extend with: the five readings
resolve and belong to movement 3; adjacency runs from the last movement 2 reading into `ex-19`;
movement 2's doorway resolves to movement 3; movement 3 has no doorway; the capstone surfaces on
`ex-24` and nowhere else; the statute-clusters carry `form: "list"` with populated `perItem`, and
at least one item in the movement is marked `none-but`.

**Cluster behaviour, at the expansion seam.** Prior art: the existing assertion that a book with
no registered lookup passes through untouched. Add one assertion that a statute-cluster is
returned unchanged by the reveal, so the selection-is-final property is locked rather than assumed.

Not tested: the rendering itself. The repo has no component tests and this spec does not introduce
the first one. The statute-cluster path is proven by the production build and by reading the page.

## Out of Scope

- Movement 4, the presence (chapters 25 to 40). Not authored and not declared.
- Publishing Exodus. It stays unpublished until all forty chapters are done.
- A component test for the renderer, or any change to how `ClusterList` draws.
- Any change to the full-text reveal to make it work on clusters.
- Restyling the `none-but` callout, which already renders distinctly.
- Any access, pricing or free-sample change.
- Images.
- Revisiting the density threshold itself. Only what the gate counts changes, not where it fails.

## Further Notes

This is the movement where the app's stated position is tested rather than described. Naming the
plagues difficult costs nothing, because no reader is being asked to obey them. Exodus 21 is
different: it is law, presented as given by God, and it regulates the ownership of people. The
`none-but` mode exists precisely so that a reader can be shown such a law, told plainly that it
makes no claim on them, and left holding the fact that it is in the book. That is a harder and
more honest position than either quoting it approvingly or leaving it out, and the whole design of
this movement rests on it.

The per-item density gap is worth a moment's reflection beyond this spec. The gate was tightened
from a 2.5x backstop to a 1.8x target because writing to a distant ceiling produced prose that
passed every check and still read as wordy. That correction only works while the gate counts what
the reader actually reads. A field that no check has ever measured is exactly where the same
mistake would happen again, unobserved, and per-item annotation is the field a movement of law
leans on hardest.
