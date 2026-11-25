# The psalms take their line breaks from the BSB's own USFM edition

ADR 0001 set poetry with line breaks at the parallelism, inserted by the person authoring the
sitting, and rejected lineating at scale with break rules encoded in a generator. That worked for
the Song of the Sea and for Ecclesiastes, where a few dozen verses were broken by hand. Psalms is
2,461 verses of poetry, and setting each one by hand would cost more than authoring the
commentary on half the book.

We decided that the psalms take their line breaks from the Berean Standard Bible's USFM edition
(ebible.org, `engbsb_usfm.zip`, public domain like the BSB itself), where the translators set
every psalm as poetry with `\q1` and `\q2` lines and mark each psalm's heading with `\d`. The
words still come only from the flat lookup generated from `bereanbible.com/bsb.txt`. The USFM is
an older revision of the BSB, so its wording differs in about thirty verses ("hapless" where the
current text has "helpless" at 10:10). Not one word is taken from it: its line positions are
mapped onto the current words by aligning the two word sequences, in
`scripts/build-psalms-text.ts`.

This keeps what ADR 0001 cared about. The judgement of where a line breaks is the translators'
own editorial work, published with the text, so nobody is encoding break rules of their own and
applying them unread. A spot check against Ecclesiastes 1, which was lineated by hand before
this existed, found the USFM breaks agreeing line for line, and finer in a few places.

## Considered options

**Lineate every psalm by hand.** Rejected on cost, as above, and because 2,461 hand-placed
breaks would be less consistent than the translators' own.

**Use the USFM text outright.** Rejected because it is not the current BSB. Its words differ in
about thirty verses, and the app's rule is one text, the current BSB, everywhere.

## Consequences

The generator asserts, for every verse, that its words collapsed to single spaces equal the BSB
exactly, and that heading plus verse 1 equals the BSB's verse 1. The content validator proves the
same thing again at build time, comparing a passage's `superscription` and its verse 1 together.

Psalm headings are authored apart from verse 1, in a new optional `Passage.superscription`,
because the flat BSB glues them onto the front of verse 1 ("A Psalm of David, when he fled from
his son Absalom. O LORD, how my foes have increased!"), and a heading is not a line of the poem.

The BSB sometimes joins a refrain to its line with an em dash and no space (Psalm 136, "the great
lights—His loving devotion endures forever"). A line may break straight after such a dash, and
both the generator and the validator treat a break there as no character at all, rather than as
a space. That is the one place where a line break does not stand for a space.

The USFM's `\q2` indentation is not carried. The renderer has no indented line yet, and adding
one is a design change rather than a content one. The generator is the place to recover it if
that changes.

`Selah` arrives as its own line, and the renderer sets a line that is exactly "Selah" in the small
UI face, since it is a direction to the singers rather than part of the sung line.
