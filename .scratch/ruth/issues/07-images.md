# 07 — Three images for Ruth

**What to build:** A hero panorama on the book page and a banner in each of the two situation
panels, matching what Genesis and Exodus already carry.

`ruth-intro.webp` (1584 x 672), `ruth-empty.webp` and `ruth-redeemer.webp`, generated
against the style spec and prompts in `.scratch/ruth/images.md`, encoded at quality 92, and wired
through `scripts/build-ruth.ts` rather than by hand-editing `content/ruth.ts`.

Blocked on generation, which is a human step: no image model is available in this repo's agent
tool set. The spec, the prompts, the dimensions and the encode commands are written and ready.

**Blocked by:** 06 — Two capstones, and the book's own ending.

**Status:** needs-info

- [x] Style spec written from the shipped Genesis and Exodus files rather than from description
- [x] Prompts written for all three slots
- [x] Dimensions and encode settings recorded, matching the Exodus compression pass
- [x] The three files exist in `public/images/`
- [ ] `heroImage` is set on the Ruth book entry
- [x] Both situation panels carry an `image`
- [x] Wired via the generator, not by hand-editing the content file
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Two of three wired. The hero is held back and needs a decision.**

`ruth-empty.webp` and `ruth-redeemer.webp` are in and are good. The gleaning banner has the detail
that matters, the corners of the field left standing while the rest is cut, which is the law the
situation panel spends a paragraph on. The threshing floor has the floor, the heap, the fork, the
chaff going off on the wind, and the gate with a bench either side.

`ruth-intro.webp` came back as a literal triptych, with two ruled vertical lines dividing it into
three panels. That is a prompt defect, not a generation defect: the prompt said "a wide panorama in
three parts, read left to right" and the model drew three parts. The same phrasing produced the same
result in `mark-intro.webp`. Genesis and Exodus heroes are continuous panoramas with no dividers,
so this does not match, and it is held pending a re-run or a decision to keep it.

**Palette drift on both Ruth images, worth naming.** There is pink and lilac haze in the middle
band of `ruth-empty.webp`, and much more of it in the centre panel of `ruth-intro.webp`. The style
block allows one additional colour, a darkened slate blue, for distant water and far hills. Nothing
in Genesis or Exodus carries pastels. The banner is good enough to ship with it; the hero is not.

**All eight compressed** at quality 92, measuring 45.7 to 46.8 dB PSNR, comparable to the 46.3 to
47.7 dB the Exodus set measured. 8.1 MB becomes 2.1 MB across the set, a 75 percent reduction, with
dimensions unchanged.
