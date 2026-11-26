# Spec: Psalms — the whole book

Status: ready-for-agent
Created: 2026-11-25
Scope: Psalms 1–150, across five movements. Book six.

## Problem Statement

Five books ship. Psalms is larger than any of them: 150 poems and 2,461 verses, half again the
size of Genesis, and every verse of it is poetry. It is also the book readers are most likely to
open on a bad day, and the one most often read one poem at a time rather than in order.

Three things make it harder than the books before it.

The first is scale. Authoring all 150 psalms at the depth of a Genesis sitting would take as long
as the five shipped books together, and much of that effort would go into psalms that few readers
seek out.

The second is the text itself. Every line of it must be set as poetry, and the flat BSB that the
app uses glues each psalm's heading onto the front of verse 1. That groundwork is done (see
"Groundwork" below).

The third is the content. The headings name David, Asaph, the sons of Korah and Moses, and give
occasions ("when he fled from his son Absalom"). Most scholars hold that the headings were added
by later editors, and STRATA has to say that honestly without dismissing them, since they are
part of the text and they record how ancient Israel read these poems. The Psalter also argues
with itself: Psalm 1 promises that the righteous prosper, Psalm 73 says the writer nearly lost his
faith watching the wicked prosper, and Psalm 88 ends in darkness with no turn at all. The book's
editors kept all three, and STRATA has to keep the argument rather than resolve it.

## Solution

### Movements: the Psalter's own five books

| Movement | Psalms | Readings | Closing blessing |
| --- | --- | --- | --- |
| Book I | 1–41 | 40 (9–10 joined) | 41:13 |
| Book II | 42–72 | 30 (42–43 joined) | 72:18–20 |
| Book III | 73–89 | 17 | 89:52 |
| Book IV | 90–106 | 17 | 106:48 |
| Book V | 107–150 | 47 (119 in four) | Psalm 150 |

The book-level panel on how Psalms was written covers the editing of the whole: the five books,
the collections inside them (David's, Korah's, Asaph's, the Songs of Ascents), the headings, and
the editors' choice to open with Psalm 1 and close with Psalm 150. Gerald Wilson's argument about
the shape of the Psalter (Books I–III around David's covenant and its failure in Psalm 89, Books
IV–V answering it) belongs there and in Book III's capstone, attributed and paraphrased.

### Readings

One reading per psalm, `ps-<n>`, with three exceptions:

- `ps-9` holds Psalms 9 and 10, one acrostic poem split by a later chapter break, as two passages.
- `ps-42` holds Psalms 42 and 43, which share a refrain, as two passages.
- Psalm 119 reads as `ps-119a` to `ps-119d` (verses 1–40, 41–88, 89–128, 129–176), each stanza its
  own passage titled by its Hebrew letter.

151 readings in all. Each passage is `kind: "poem"`, `form: "poetry"`, authored whole (ADR 0001).

### Depth: two tiers

**Sittings (45 psalms, 47 readings).** Written in full, at the depth of a Genesis sitting:
thread, ground, meaning, lenses, the turn, an ask, a prayer, and a misreading or tensions where
the psalm earns them. Chosen by the owner's brief, as C.S. Lewis and J.R.R. Tolkien would likely
choose (decided 2026-11-25):

- Book I: 1, 2, 8, 13, 19, 22, 23, 27, 29, 30, 32, 39
- Book II: 42–43, 45, 46, 49, 51, 63, 65, 72
- Book III: 73, 74, 82, 84, 88, 89
- Book IV: 90, 91, 93, 96, 100, 103, 104
- Book V: 107, 109, 110, 119 (all four), 121, 126, 130, 137, 139, 148, 150

Lewis left a guide: *Reflections on the Psalms* (1958), whose chapters name what he thought the
Psalter makes a reader face, and he served on the commission that revised the Prayer Book
psalter. Its themes drive most of the list: the cursing psalms, which he refused to skip (109,
137); death, which most psalmists expected to end everything (30, 39, 88, 49); the longing for
God's presence he called "the fair beauty of the Lord" (27, 42–43, 63, 84); delight in the law
(19, which he held the greatest poem in the Psalter, and 119); nature and praise (8, 29, 65, 104,
148, 150); and the royal psalms that Christians later reread as being about Christ (2, 45, 110),
which STRATA grounds in what they meant to their first hearers before saying how they were reread.

Tolkien wrote nothing substantial on the Psalms that we know of, so nothing is attributed to him.
The list follows his known preoccupations instead: the sudden turn from grief to joy that he
called eucatastrophe (22, 30, 126), faithfulness through a defeat that does not lift (74, 88, 89),
mortality (39, 90), the sea and the deep (93, 104, 107), and exile and the longing for home (137,
121, 84).

Every sitting needs a `READING_THEMES` entry, since the find index is how most readers will reach
a psalm.

**Grounded (the other 100 or so).** The lineated text, a hand-written ground note (who the heading
names and what scholars think of it, what kind of psalm this is, and anything a reader needs in
order to follow it), and a title written for STRATA. The companion drafts the meaning, the turn
and the ask, as it does for grounded readings elsewhere. Any grounded psalm can be raised to a
sitting later.

### Titles

Until a psalm is authored it uses the BSB's section title as a working title. Those are
editorial and some are interpretive in a way STRATA is not ("The Triumphant Messiah" for Psalm
2), so every psalm, sitting or grounded, gets a title of its own when it is written.

### Voice

The STRATA voice rules apply in full: complete, connected sentences; no fragments or taglines;
context before it is relied on; a person, never the psalm or the text, as the subject of every
action. Psalms invites exactly the poetic register those rules exist to prevent, so the
commentary should be plainer here, not more lyrical, and let the psalm be the poetry.

## Groundwork (done)

- `content/bsb-psalms.ts`: the flat BSB lookup, 2,461 verses.
- `content/psalms-text.ts`: generated by `scripts/build-psalms-text.ts`. Every psalm lineated
  from the BSB's USFM edition, its heading split from verse 1, its working title, the 22 letters
  of Psalm 119, and the five divisions. See ADR 0002.
- `Passage.superscription`, rendered above the verses; `Selah` rendered as a direction.
- `content/psalms.ts`: all 151 readings at the plain tier, and five movements with working
  situation panels and doorways. The old Psalm 13 genre fixture is retired; `ps-13` is now the
  real reading.
- The validator proves every psalm verse, heading included, against the BSB.
- `test/psalms.test.ts`: coverage, headings, the joined pairs, Psalm 119's stanzas.

## Build order

1. Book I: ground notes and titles for all 40 readings, the 12 sittings, the situation, capstone
   and doorway, and the book-level introduction. The largest movement and the proof of the method.
   **Done**: commentary in `content/psalms-notes/book-1/`, laid over the text by `content/psalms.ts`.
2. Books II to V, one movement per pass. **Book II done**: `content/psalms-notes/book-2/`, with
   every sitting passage held to 1.6x or under (1.33x to 1.57x). The brief the writers worked
   from is `.scratch/psalms/book-2-brief.md`; reuse it for Books III to V with the ranges, budgets
   and per-psalm notes changed. **Book III done**: `content/psalms-notes/book-3/`, sittings at
   0.91x to 1.57x, from `.scratch/psalms/book-3-brief.md`. **Books IV and V done**:
   `content/psalms-notes/book-4/` and `book-5/`, from `.scratch/psalms/book-4-5-brief.md`; every
   passage, grounded ones included, at or under the 1.8x gate. All 151 readings are now authored.
3. The book capstone, theme entries, image prompts (a hero and five banners), and publication.
   The images, every sitting's theme entry and the book capstone (`PSALMS_CAPSTONE`) are done;
   publication remains, and waits on the owner.

Each pass: parallel workers of about eight psalms each, briefed with the voice rules; a sweep for
agency slips, fragments and em dashes; the validator, tests and lint; one commit per movement.

The book stays unpublished, absent from the landing page and the find index, until all five
movements are done.
