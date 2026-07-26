# 06 — Author `ex-1`, and the two new theme keys

**What to build:** The first fully authored Exodus sitting, and the vocabulary the movement needs
to be findable.

Exodus 1 is the midwives who lie to Pharaoh and are blessed for it, a king who fears a growing
people, and a policy of drowning children. It becomes a sitting: ground, scripture, meaning,
lenses, the turn, and a response, at the same quality as the published book's sittings.

Its turn uses the mode that makes a demand on the reader rather than the mode that names
something already true of them. This is one of only three readings in the movement to do so. The
story has an oppressor and a beneficiary, and most readers of this app live on the beneficiary's
side; the comfortable reading is that the reader is Israel in Egypt, and the text supports the
harder one. Make that demand precisely and once, without hectoring.

Two keys join the find vocabulary: one for benefiting from a cost someone else pays, which is
what this reading's turn requires, and one for the disorientation that follows getting out, which
the movement's later readings need. Every other theme in the movement maps onto the existing
vocabulary.

**This ticket is a hard stop.** When it is done, the author reads it before any further reading is
authored. It exists as its own ticket precisely so that voice drift costs one reading to fix
rather than eleven. Do not start the next authoring ticket.

**Blocked by:** 04 — Exodus skeleton.

**Status:** done, awaiting author review

- [x] Two keys are added to the find vocabulary, each with a label and a one-line gloss in the project's voice
- [x] `ex-1` is a sitting carrying all four layers, with its middles authored rather than left for the companion
- [x] Its turn makes a demand on the reader rather than naming something already true of them
- [x] It carries exactly one load-bearing misreading, if one is warranted, not a list of caveats
- [x] Its ground note is concrete and literary, and does not relitigate the archaeology
- [x] Sources are attributed and paraphrased, never quoted
- [x] It is tagged in the find index with its themes and a "speaks to" line, in the same change that makes it a sitting
- [x] No em dashes in authored copy
- [x] The density gate is run and this passage sits under the failing ratio on its own merits, not on the grandfathered baseline
- [x] Typecheck, lint, tests, content validation and the build all pass
- [x] Work stops here for author review

## Comments

**Shape.** Three scenes rather than one passage, matching the Genesis sittings, which average
between two and three. 1:1–7 the names, 1:8–14 the new king, 1:15–22 the midwives. The scripture
was split at existing verse boundaries so no verse text was retyped; all 847 verses in the repo
still verify against the BSB.

**Voice calibration used.** Genesis's 85 passages use ground, meaning, lenses, turn and ask.
`soft` and `prayer` are used zero times, `tensions` zero times, and `misreading` in only 11 of 85.
There are no tail-stacks anywhere. `ex-1` follows that exactly: no soft, no prayer, one
misreading, and two turns rather than three.

**Density.** 2.46x, 2.11x and 2.47x, all under the 2.5x ceiling, reading overall 2.34x. Two
scenes were over on the first pass and were trimmed. Nothing forced this, since the gate cannot
fail for an unpublished book; it is held by hand as agreed.

**A production regression was avoided rather than caused.** `/find` builds its index from
published books only, so no Exodus sitting appears there, but the theme chips rendered from the
whole vocabulary unconditionally. Adding `complicity` and `deliverance` would have put two chips
on the live site that return nothing for every reader. The find page now offers only feelings
some published reading actually answers. Verified in the production build: the complicity chip is
absent while the existing chips still render.

**Two tests were rewritten, not deleted.** Both encoded the skeleton state this ticket changes:
one asserted every Exodus reading is grounded, the other used the whole-chapter passage ref that
splitting `ex-1` into scenes removed. They now assert the durable invariant, that anything not
yet authored stays grounded and empty, plus new assertions that an authored sitting carries its
layers on every scene and that its turns demand rather than name.

## What to review

Read it at `/read/exodus/ex-1`. The three things worth your judgement:

1. **The turn in scene two.** It puts the reader on the beneficiary's side, which the app has
   never done. Too much, too little, or right?
2. **The misreading.** It argues the chapter is about a system rather than a wicked king. That is
   an interpretive claim, and it shapes how ticket 08 handles the hardening of Pharaoh's heart.
3. **The register generally.** This is the sample the remaining ten readings will be written
   against, so a correction here is worth ten corrections later.
