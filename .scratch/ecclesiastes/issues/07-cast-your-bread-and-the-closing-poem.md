# 07 — Author Ecclesiastes 11:1 to 12:8, the closing poem

**What to build:** The last authored sitting before the epilogue, and the book's finest writing.

`ecc-11` spans a chapter boundary and holds one passage per chapter. 11:1–10 is an `argument`: cast
your bread on the waters, sow in the morning and the evening because you do not know which will
succeed, and then the instruction to a young man to rejoice, with a sting attached.

12:1–7 is a `poem` in `poetry` form, lineated and authored whole: remember your creator in the days
of your youth, and then the long image of a house falling into disrepair, the keepers trembling, the
grinders ceasing, the almond tree blossoming, the silver cord snapped and the golden bowl broken.
It is a description of aging and dying rendered as a building coming down, and it should be allowed
to work without being decoded line by line into a diagram of the human body, which is a reading the
tradition has enjoyed rather too much.

12:8 returns the thesis, closing the frame the book opened with.

**Blocked by:** 06.

**Status:** done

- [x] `ecc-11` spans 11:1–12:8 with `crossesChapters` and one passage per chapter
- [x] 12:1–7 is lineated and authored whole
- [x] The closing poem is not reduced to an anatomical key
- [x] The frame closing at 12:8 is named
- [x] Tagged in the find index in the same change
- [x] Scripture verbatim, sources paraphrased, no em dashes, density within target
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**The closing poem is not reduced to an anatomical key**, which was the ticket's requirement and the
easy failure. The misreading grants that the decoding is ancient, ingenious and mostly works, and
then says why that is the problem: read as a key the poem becomes a puzzle with a solution, and once
you have the solution there is no reason to read it again. What is on the page is a great house in
its last stage, and that image does something the anatomy cannot.

**The frame closing at 12:8 is inside the poem passage** rather than stranded on its own, so the
reader meets the thesis returning as the last line of the poem, which is where it does its work.

**Third poem through the lineation helper with no changes.** Chapter 12's house imagery breaks at
the parallelism cleanly.

**`ecc-11` was caught by the turn invariant** added during Mark, which is the second time that gate
has paid for itself. The poem and the argument were both authored without an `addr` and the build
refused.
