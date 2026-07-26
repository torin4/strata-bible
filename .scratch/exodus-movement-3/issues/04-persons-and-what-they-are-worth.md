# 04 — Persons, and what they are worth

**What to build:** Exodus 21, the hardest page in the book, shown rather than curated.

This chapter opens the case law with persons: a Hebrew servant who goes free in the seventh year,
a daughter sold as a servant who does not go free as the men do, a master who strikes a servant
and is not punished if the servant survives a day or two because the servant is his property,
death for striking or cursing a parent, eye for eye, and an ox that gores.

The commitment made when this movement was planned is that these verses stay in the text. Not
selected around, not softened, not left for the reader to discover elsewhere. Nothing else in the
app costs anything to be honest about; this does.

The mechanism is the per-item annotation. The hard laws are marked as law that does not bind the
reader but is worth seeing, which renders visually distinct from a law that still makes a claim.
Beside them, in the same chapter, sit laws that do still claim a reader. The contrast is drawn on
the page, once per law, rather than argued again in every paragraph.

One misreading names the dodge that these laws were simply the times, and answers it. One tension
sets the page against the canon's own later movement, which is real and is not a modern
invention: the release laws in Deuteronomy, the prophetic treatment of a broken release as
covenant-breaking, and the principle that a concession was made for hardness of heart.

The ground notes carry the comparison with the surrounding legal world plainly, both halves. In
places this code restrains a master more than its contemporaries did. It also permits a person to
be owned. Neither half cancels the other and neither is left out.

Do not resolve it. The capstone returns to the movement whole; this reading's job is to be
accurate and unflinching.

**Blocked by:** 02 — The Ten Words.

**Status:** done

- [x] Exodus 21 is a sitting rendering as a numbered cluster
- [x] The servant laws, the talion formula and the capital sentences are present in the text, not selected around
- [x] Those laws are marked with the mode for law that does not bind the reader, rendering distinctly from laws that do
- [x] At least one law in the same reading is marked as still claiming the reader, so the contrast is visible
- [x] It carries exactly one load-bearing misreading, naming and answering the "it was just the times" dodge
- [x] It carries one tension against the canon's own later revisions, with claim, counter and where
- [x] Ground notes state both that the code restrains a master more than its contemporaries in places and that it permits ownership of a person
- [x] The difficulty is left unresolved for the capstone
- [x] It is tagged in the find index in the same change that makes it a sitting
- [x] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] The density gate, counting per-item apparatus, passes on this passage on its own merits
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**The verses are there.** 21:7, the daughter sold who does not go free as the men do. 21:20 and
21:21, the beating, and no penalty if the servant survives a day or two, since the servant is
property. 21:26, the eye. 21:32, thirty shekels for a servant killed by an ox. All present, all
marked with the mode for law that makes no claim on the reader, and a test now asserts each one
is still in the text so a later edit cannot quietly drop it.

**And the contrast is on the same page.** 21:16, stealing a person and selling them, is marked as
still claiming the reader. The code draws a line at seizing a human being that it does not draw at
holding one, and putting those two chips side by side says that better than a paragraph could.

**The misreading answers the dodge without overclaiming.** That everyone had slaves is true and
explains nothing, because the same chapter departs from its neighbours elsewhere, so the writers
could legislate against the grain when they chose to. The excuse also proves too much: a text
that is only as good as its era has nothing to say to any era, including the reader's.

**The tension lets the canon argue.** Deuteronomy 15 orders a freed servant sent away supplied
rather than empty-handed. Jeremiah 34 treats a granted-then-revoked release as covenant-breaking
grave enough to judge the nation. And the gospels concede, of a different law, that it was written
in for hardness of heart, which is the canon calling its own legislation accommodation.

**The density gate did real work here.** All three passages came in over: 1.92x, 2.14x, 2.03x.
This is the most annotated content in the book, and under last week's gate none of it would have
been counted at all. Fourteen annotations were tightened, and scene two's selection widened to
include 21:13-14 and 21:18-19, which drops the ratio and is better content: a free man injured in
a quarrel is paid for his lost time and healing, three verses before a servant beaten by his
owner is not. That contrast is now on the page rather than in a note about it.

**Two mechanical notes.** The EXODUS array terminator collapsed to `},];` again, because the
insert logic sliced after the newline rather than before it; the marker logic is now fixed in the
generator so it stops recurring. And the four added verses were inserted mechanically from the
BSB lookup, never retyped, with the verse-integrity gate confirming the result at 1,002 verses.
