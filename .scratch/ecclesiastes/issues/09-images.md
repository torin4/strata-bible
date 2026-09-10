# 09 — Four images for Ecclesiastes

**What to build:** A hero and a banner for each of the three movements, prompted and specced the
way Ruth's and Mark's were, in `.scratch/ecclesiastes/images.md`.

Generation is a human step: no image model is available in this repo's agent tool set. Prompts get
written once the book is authored and its movements are settled.

**Blocked by:** 08.

**Status:** done

- [x] Prompts written for all four slots, each self-contained, in the established style
- [x] The four files exist in `public/images/`, encoded at quality 92
- [x] `heroImage` set and each movement's situation panel carries an `image`
- [x] Wired via the generator, not by hand-editing the content file

## Comments

**Four for four, and no re-run needed.** The hero prompt said continuous three times, explicitly, and
the model produced a single unbroken panorama. That is the fix for the defect that cost Ruth and
Mark a hero each: the phrase "in three parts" and "in four parts" was reading as an instruction to
draw parts. Worth carrying into every future hero prompt.

**All four were checked against their containers before wiring**, not after. The hero is 1584 x 672
against a container that is 1.79:1 at phone width and roughly 3.5:1 at desktop; the crop keeps the
river, the terraces and the house at both, and the whole width shows on desktop. The three banners
render at natural aspect with no crop at all, so their dimensions do not matter, which is why 1584 x
672 rather than the specced 1376 x 768 is fine. Genesis and Exodus already mix both.

**Palette held.** No pastels anywhere in this set, which was the drift in Ruth's two.

**The three landscape banners are all worked ground with nobody in them**, which is the book's own
subject, and the last one is the only warm image: bread, a wine jar, two cups, a lit lamp, two
people close together, the almond in blossom from chapter 12, and the big house behind with its door
shut and its windows dark. The book ends on the permission and its banner should not be bleak.

**Compressed** at quality 92, 45.4 to 46.3 dB PSNR against the originals. 5.0 MB becomes 1.5 MB, a
70 percent reduction, dimensions unchanged.
