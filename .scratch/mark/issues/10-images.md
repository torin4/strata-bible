# 10 — Five images for Mark

**What to build:** A hero panorama on the book page and a banner in each of the four situation
panels, matching what Genesis and Exodus carry.

`mark-intro.webp`, `mark-authority.webp`, `mark-way.webp`, `mark-temple.webp` and
`mark-handed-over.webp`, generated against the prompts in `.scratch/mark/images.md`, encoded at
quality 92, and wired through the book's generator rather than by hand-editing `content/mark.ts`.

The hero and `mark-authority.webp` can be wired as soon as they exist. The other three banners wait
on tickets 06, 07 and 08, which declare the movements they belong to.

Blocked on generation, which is a human step: no image model is available in this repo's agent tool
set.

**Blocked by:** nothing for generation. Wiring for three of the five is blocked by 06, 07 and 08.

**Status:** needs-info

- [x] Prompts written for all five slots, each self-contained
- [x] Dimensions and encode settings recorded, matching the Exodus compression pass
- [x] The five files exist in `public/images/`
- [ ] `heroImage` is set on the Mark book entry
- [x] Each declared movement's situation panel carries an `image`
- [x] Wired via the generator, not by hand-editing the content file
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**All five generated. One wired, three waiting on their movements, one held.**

`mark-authority.webp` is wired to movement 1 and is the strongest match in the set: boats, drying
nets, baskets, the lakeside town with a larger hall among the houses, and on the skyline a hilltop
city still in scaffolding, which is the tax-funded building programme the situation panel describes.

`mark-way.webp`, `mark-temple.webp` and `mark-handed-over.webp` are correct and on palette, and have
nowhere to go until tickets 06, 07 and 08 declare their movements. They sit in `public/images/`
until then. The temple one is worth flagging as the best image in either book: two small figures on
a wall under an olive tree, looking across the valley at a building one of them has just said will
be pulled down. That is Mark 13:3 exactly.

`mark-intro.webp` has the same triptych defect as the Ruth hero, four ruled panels rather than a
continuous panorama, from the same "in four parts" phrasing. Held pending a re-run or a decision.

**Compressed** with the rest of the set at quality 92, 45.7 to 46.8 dB PSNR.
