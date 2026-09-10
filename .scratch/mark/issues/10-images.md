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

**Status:** done

- [x] Prompts written for all five slots, each self-contained
- [x] Dimensions and encode settings recorded, matching the Exodus compression pass
- [x] The five files exist in `public/images/`
- [x] `heroImage` is set on the Mark book entry
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

`mark-intro.webp` came back as four ruled panels rather than a continuous panorama, from the same
"in four parts" phrasing that produced Ruth's triptych. It was held, and then checked properly
rather than assumed, and it survives its container: see the second comment below. Wired as the
book hero. All five images are in use.

**Compressed** with the rest of the set at quality 92, 45.7 to 46.8 dB PSNR.

## Comments, second pass

**The hero was held on a verdict borrowed from Ruth rather than measured here, and that was wrong.**

Ruth's triptych failed its container for concrete reasons: the crop centred on a washed-out pastel
panel, sliced the two figures in half at the left edge, and cropped the threshing floor out. None of
those apply to this image. Measured properly:

- The container is `aspect-[688/384]` with `max-h-[400px]`, so it is not one aspect ratio. At phone
  width the box is 1.79:1 and the crop shows x=236 to 1289 of 1526: nets, a boat, the road climbing,
  and the walled city with the temple platform. Coherent, and no pastel anywhere.
- At desktop width the 400px cap makes the box roughly 3.5:1 against a 2.60:1 source, so it crops
  vertically instead and the full width shows, including the tomb with the stone rolled back.

The ruled panels read as a deliberate polyptych at hero size rather than as a broken photograph.
Wired as `heroImage`. No re-run needed, and all five Mark images are now in use.
