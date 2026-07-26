# 07 — Author `ex-2` through `ex-6`

**What to build:** The stretch from the basket in the reeds to the promise restated after
everything has got worse. Five readings: the basket and the flight to Midian, the bush and the
name, the signs and the night attack on the road, bricks without straw, and the genealogy that
interrupts the story to say who these people are.

Three become sittings: the basket, the bush, and bricks without straw. Two stay grounded: the
signs, and the genealogy. The grounded readings keep clean scripture and a ground note, with
meaning, turn and ask left for the companion.

Their turns name something already true of the reader rather than making a demand. This is the
register of the published book, and the movement holds to it except where the text genuinely puts
the reader on the oppressor's side, which none of these readings do. The bush is a person called
and certain they are the wrong choice. Bricks without straw is the experience of asking for
relief and watching things get worse first, which is the honest middle of most deliverances and
the reason the movement does not jump from the call to the sea.

The reading that carries the bridegroom of blood should not smooth it over. It is one of the
strangest passages in the book and the ground note can say plainly that it resists explanation.

**Blocked by:** 06 — Author `ex-1`, and the two new theme keys.

**Status:** done

- [x] Three readings become sittings carrying all four layers; two remain grounded with their middles empty
- [x] Each sitting is tagged in the find index in the same change that makes it a sitting
- [x] Turns name rather than demand, consistent with the published book's register
- [x] At most one load-bearing misreading per passage, used only where it earns its place
- [x] The bridegroom of blood is grounded honestly rather than explained away
- [x] Ground notes stay concrete and literary and do not relitigate the archaeology
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] The density gate is run and no new passage exceeds the failing ratio on its own merits
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Delivered.** `ex-2`, `ex-3` and `ex-5` are sittings of three scenes each, nine scenes in all.
`ex-4` and `ex-6` stay grounded. Every turn is `names`, keeping the published register; the only
`claims` turns in the movement remain the two in `ex-1`, which is what makes them land.

**Density, written to the target rather than trimmed to it.** All nine new scenes came in under
1.8x on the first pass except one, at 0.85x to 1.73x. The budgets were computed from scripture
word counts before any prose was written, which is a much better way to work than writing and
cutting.

**One scene boundary moved for density, not for taste.** `ex-5` was planned as 5:1-9, 5:10-19,
5:20-23. The closing scene came out at 2.99x: four verses cannot carry a misreading plus a
meaning plus a turn. Rather than gut the material or relax the gate, the boundary moved to
5:15-23, which is a better unit anyway: the foremen's appeal, its refusal, the confrontation in
the road, and Moses' complaint to God, all one movement of thought. Now 1.47x.

**Two misreadings, both earned.** `ex-3` on the name being read as Greek metaphysics rather than
a promise of presence. `ex-5` on Moses' complaint being read as failure of nerve, which if
accepted would cut out most of the Bible's own prayer language and leave a reader with nothing
permitted to say.

**A mistake worth recording.** Moving the `ex-5` boundary, a scripted edit searched the whole
file for the next verse 15 and found Exodus 1:15 first, so the block was spliced into `ex-1`,
creating a bogus 5:15-23 passage there. Caught immediately by the structure check that prints
each passage's verse range, and fixed by scoping the search to the `ex-5` slice. The
verse-integrity invariant would also have failed on it, since ex-1's verse 15 text does not
match Exodus 5:15. Lesson: scope structural edits to the reading being edited, never the file.
