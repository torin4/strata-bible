# Spec: Exodus, movement 4 — The presence

Status: ready-for-agent
Created: 2026-07-26
Scope: Exodus 25–40, the last movement, plus the book-level capstone that completes Exodus.
Publishing is documented here and deliberately left as a separate decision.

## Problem Statement

Three movements of Exodus are authored, twenty readings, 1,040 verses. The book stops at chapter
24 with the covenant sealed and Moses disappearing into a cloud for forty days. Sixteen chapters
remain, and they are the strangest stretch in the Torah.

The shape is the problem. Chapters 25 to 31 are God dictating the specifications for a tent: the
ark, the table, the lampstand, the curtains, the priest's clothing, the incense altar, down to
the cubit. Chapters 32 to 34 are the golden calf, the shattered tablets, Moses arguing God out of
destroying the people, and the only passage in the Bible where someone asks to see God's face and
is answered. Chapters 35 to 40 then repeat chapters 25 to 31 almost word for word, with the verbs
changed from "you are to make" to "he made".

That repetition is 4,405 words of near-duplicate text, and a reader taken through it at full
apparatus reads the same specifications twice. Skipping it silently is the other failure: the
construction chapters are where the book ends, and its final image, the glory filling the
tabernacle so completely that Moses cannot enter, is in the last five verses of the book.

The movement also carries two passages as hard as anything already authored. In chapter 32 Moses
sends the Levites through the camp with swords and about three thousand people die, and the text
treats it as faithfulness. That is harder than the servant laws in one specific way: those could
be marked as law that no longer binds a reader, whereas this is a narrative the book approves of.
And chapter 34 gives the formula for God's character, compassionate and gracious and slow to
anger, in the same breath as visiting iniquity on children to the third and fourth generation,
which is the third time this book's material has collided with the same counter-voice.

Finally, finishing this movement finishes the book, and the book has been unpublished since it
began on the explicit rule that it stays that way until all forty chapters are done.

## Solution

Author the movement as six readings, and let the repetition be the subject of one of them rather
than a burden on the reader.

Chapters 25 to 31 are authored as instructions, in prose, because they are continuous divine
speech and not a numbered code. Chapters 32 to 34 get three readings, one each, because the calf,
the face and the second tablets are each a whole thing. Chapters 35 to 40 get a single reading
whose subject is the repetition itself: a few paired verses set against their originals, and the
argument for why the book does this. The covenant was broken between the instruction and the
building, and the construction narrative is the proof that what was broken got rebuilt exactly as
specified, down to the loops on the curtains. That reading closes on the glory filling the tent,
which closes the book.

The book-level capstone follows, over all forty chapters. Genesis has one; Exodus has not needed
one until now because it was not finished.

Publishing is left as a decision rather than a ticket, with its requirements written down.

## User Stories

### The reader

1. As a reader, I want the book to reach its end, so that three movements of build-up arrive somewhere.
2. As a reader, I want the tabernacle instructions rendered as prose rather than as law, so that the ark's dimensions do not appear to make a claim on me the way a commandment does.
3. As a reader, I want the instructions summarised to their significant objects rather than given in full, so that a sitting stays a sitting.
4. As a reader, I want to understand why a tent gets seven chapters and the creation of the world gets one, so that the proportions of the book stop seeming arbitrary.
5. As a reader, I want the golden calf as its own reading, so that the most famous failure in the book is not a paragraph inside a building manual.
6. As a reader, I want Aaron's part in the calf told plainly, so that the priest whose clothing was just specified is not quietly protected.
7. As a reader, I want the killing of three thousand people by the Levites shown rather than skipped, so that the app's honesty holds where it costs most.
8. As a reader, I want that passage named as difficult rather than justified, so that I am not handed a reason to be comfortable with it.
9. As a reader, I want Moses arguing God out of destroying the people, so that I see intercession working as an argument rather than as a formality.
10. As a reader, I want the request to see God's glory and the answer given to it, so that the book's most intimate passage is not lost among the furniture.
11. As a reader, I want the character formula in chapter 34 given its weight, so that the sentence the rest of the Bible quotes most about God is not passed over.
12. As a reader, I want the clause about visiting iniquity on children answered by the canon, so that I am not left with it as the last word.
13. As a reader, I want the repetition of chapters 35 to 40 explained rather than either hidden or inflicted on me, so that I understand it is doing something.
14. As a reader, I want to see a few of the paired verses side by side, so that the claim about repetition is shown rather than asserted.
15. As a reader, I want the book to end on the glory filling the tabernacle, so that the last image is the one the book chose.
16. As a reader, I want a book-level look-back over all forty chapters, so that the whole arc from a policy of drowning boys to a tent full of glory can be held at once.
17. As a reader, I want the book capstone to be about the whole book rather than the last movement, so that it does not simply repeat the capstone I have just read.
18. As a reader who finishes movement 3, I want a doorway into movement 4, so that the covenant leads somewhere.
19. As a reader, I want the law readings' density not to spread into this movement, so that the apparatus stays proportionate.
20. As a reader in trouble, I want these readings findable by what I am carrying, so that discovery covers the whole book.

### The author

21. As the author, I want the repetition handled by argument rather than by omission, so that the decision is visible in the content instead of hidden in a verse selection.
22. As the author, I want the instructions kept in prose, so that statute-cluster continues to mean law, which is what movement 3 established it for.
23. As the author, I want chapter 32's violence handled with the same discipline as the servant laws, so that the honesty is a habit rather than a one-off.
24. As the author, I want the tension in chapter 34 to be the one the book capstone finally holds, so that a counter-voice used three times does not simply repeat.
25. As the author, I want the book capstone to complete Exodus without publishing it, so that shipping stays a separate, deliberate act.
26. As the author, I want every gate to hold on the largest movement, so that scale does not quietly erode the standards.

### The maintainer

27. As a maintainer, I want the existing invariants to cover a fourth movement with no special-casing, so that adding movements stays cheap.
28. As a maintainer, I want the doorway chain asserted end to end, so that a missing link cannot ship.
29. As a maintainer, I want the book capstone asserted to surface only on the final reading, so that it cannot pre-empt a movement capstone the way it once did in Genesis.
30. As a maintainer, I want the requirements for publishing recorded, so that the decision can be taken later without rediscovering what it involves.

## Implementation Decisions

### The reading map

Six readings, chapters 25 to 40. Movement 3 ends at chapter 24, so movement 4 is declared by
chapter range alone with no `movementId` override anywhere.

| Id | Span | Kind | Note |
| --- | --- | --- | --- |
| `ex-25` | Exodus 25–27 (selected) | scene | The ark, the table, the lampstand, the tent |
| `ex-28` | Exodus 28–31 (selected) | scene | The priest's clothing, and Bezalel the craftsman |
| `ex-32` | Exodus 32 | scene | The golden calf |
| `ex-33` | Exodus 33 | scene | Show me your glory |
| `ex-34` | Exodus 34 | scene | The second tablets |
| `ex-35` | Exodus 35–40 (selected) | scene | Done exactly as commanded, and the glory fills it |

All six are sittings. Two readings span multiple chapters, so both hold one passage per chapter,
the rule established in movement 3: verse numbers that cross a chapter under one ref do not
ascend, and the verse-integrity check would mark such a passage unverifiable and skip it in
silence, leaving the reading appearing to carry the BSB guarantee without having it.

### The instructions are prose, not law

`kind: "scene"`, `form: "prose"`. These chapters are continuous divine speech, and rendering
specifications as a numbered cluster would imply the dimensions of the ark make a claim on a
reader in the way a commandment does. Statute-cluster keeps meaning law, which is what movement 3
established it for. The instruction readings select their significant objects rather than
reproducing every fitting.

### The repetition

The final reading's subject is the repetition itself. It shows a small number of paired verses
against their originals, the instruction and its execution, and argues why the book does this:
the calf falls between them, so the construction narrative is the record that what was broken got
rebuilt exactly as specified. The alternative readings, that this is scribal duplication or
liturgical recitation, are worth naming rather than suppressing.

This is the honest handling of 4,405 words of near-duplicate text. Authoring both blocks at full
apparatus would make a reader meet the same specifications twice; leaving the block out entirely
would drop the end of the book, since the glory filling the tabernacle is in its last five verses.

### The hard passage in chapter 32

The Levites go through the camp with swords and about three thousand die, and the narrative treats
it as faithfulness rewarded with priestly standing. This is harder than the servant laws because
`none-but` is not available to it: it is not legislation that can be marked as no longer binding,
it is an event the text approves of.

It stays in the reading. It is named as difficult rather than justified, and it is not resolved.
The movement capstone and the book capstone both have to live with it rather than dispose of it.

### The tension in chapter 34, and where it lands

The character formula holds compassion and generational punishment in one sentence. Ezekiel 18 has
already been used as the counter-voice on the plague reading, and Amos 9:7 on the movement 1
capstone. Using Ezekiel a third time at passage level would read as a tic.

So chapter 34 carries the collision in its meaning layer, and the tension that names it is placed
on the book capstone, where it belongs: this is a book-length argument about whether guilt travels,
and the book-level look-back is the first place large enough to hold it.

### The book capstone

A `Capstone` on the Exodus book entry, the counterpart to the Genesis one, rendered on its own
screen one step past the last scene of the final reading. Verified behaviour: the Reader already
gives the book capstone a separate screen while the movement capstone renders inline, so both
appear on the last reading without competing. That was built when the Joseph capstone was found to
be pre-empting the Genesis closing note.

It looks over all forty chapters, from a policy of drowning boys in a river to a tent so full of
glory that the man who built it cannot go in. It is not a summary of movement 4.

### Doorways

Movement 3 gains a doorway pointing at movement 4, in the same change that declares movement 4.
Movement 4 carries none, and will not: it is the last movement of the book.

### Publishing: documented, not done

Exodus has been unpublished on the rule that it stays so until all forty chapters are authored.
This spec completes them, so the condition is met and the decision becomes live. It is not taken
here. What it would require, recorded so it need not be rediscovered:

- The landing page currently resolves a single book by id and renders it, then lists coming-soon
  books numbered from the count of published books. It would need to iterate published books.
- Exodus is still in the coming-soon list and would appear twice unless removed.
- The find index would gain every Exodus sitting, and the two theme keys added for movement 1
  would begin matching, since the find page only offers themes some published reading answers.
- The free-sample rule is still Genesis's primeval movement only, so a published Exodus would sit
  entirely behind Plus. Whether a second book should open with a free movement of its own is a
  pricing decision, not a content one.

## Testing Decisions

A good test here asserts what a reader or maintainer would observe: which movement a reading
belongs to, that the doorway chain resolves end to end, that the book capstone appears only at the
end of the book, that scripture is the BSB. It does not assert prose.

Two existing seams, no new ones.

**Content invariants, at the validator seam.** Prior art: the verse-integrity check and the
movement, doorway and theme-tagging invariants. Movement 4 is covered with no change; the value is
in confirming that a fourth movement needs no special-casing. The one-passage-per-chapter rule is
enforced in practice by the verse-integrity check reporting no new unverifiable passages.

**Structure and navigation, at the `getReading` / `getAdjacent` / `getMovement` /
`getClosingMovement` / `getClosingBookCapstone` seam.** Prior art: the movement 2 and 3 tests,
particularly the doorway-chain test that walks every movement but the last. Extend with: the six
readings resolve and belong to movement 4; adjacency runs from the last movement 3 reading into
`ex-25` and stops at the final reading; movement 3's doorway resolves and movement 4 has none; the
movement 4 capstone surfaces on the final reading; the book capstone surfaces on the final reading
and on no other; and Exodus remains unpublished, so the publishing decision cannot be taken by
accident.

Not tested: the landing page's single-book assumption. It is real and recorded, but testing it
would mean introducing the repo's first route or component test, which is out of scope here.

## Out of Scope

- Publishing Exodus. Documented above, decided separately.
- The landing page's single-book assumption, and the coming-soon entry.
- Any access, pricing or free-sample change.
- Images.
- The `symbols` field. It is the last display field in the schema never used in a published book,
  and the tabernacle furnishings would suit it, but the instructions are being authored as plain
  prose by decision. Recorded as a deliberate omission rather than an oversight.
- A component or route test seam.
- Any change to how the Reader sequences the movement and book capstones.
- Revisiting the density threshold, or the density of the movement 3 law readings.

## Further Notes

This movement completes a book that has taken four movements to argue one thing: that a rescue is
not the same as an arrival. The people leave Egypt in movement 1, learn to live on what arrives in
movement 2, are given terms in movement 3, and in movement 4 build a tent so that the God who did
all of it can travel with them. The last image of the book is not a law or a victory. It is a
cloud settling on a tent, and a man unable to go inside.

The repetition of chapters 35 to 40 is the design question of the movement, and the argument for
showing it as repetition rather than hiding it is worth restating. The book could have said "and
they did everything as commanded" in one verse. It spends six chapters instead, immediately after
the covenant was broken and remade. Reading that as scribal redundancy is possible. Reading it as
the point is more interesting and at least as defensible, and it is the only reading that explains
why the duplicate block sits where it sits.
