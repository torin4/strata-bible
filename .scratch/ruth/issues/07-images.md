# 07 — Three images for Ruth

**What to build:** A hero panorama on the book page and a banner in each of the two situation
panels, matching what Genesis and Exodus already carry.

`ruth-intro.webp` (1584 x 672), `ruth-empty.webp` and `ruth-redeemer.webp`, generated
against the style spec and prompts in `.scratch/ruth/images.md`, encoded at quality 92, and wired
through `scripts/build-ruth.ts` rather than by hand-editing `content/ruth.ts`.

Blocked on generation, which is a human step: no image model is available in this repo's agent
tool set. The spec, the prompts, the dimensions and the encode commands are written and ready.

**Blocked by:** 06 — Two capstones, and the book's own ending.

**Status:** ready-for-human

- [x] Style spec written from the shipped Genesis and Exodus files rather than from description
- [x] Prompts written for all three slots
- [x] Dimensions and encode settings recorded, matching the Exodus compression pass
- [ ] The three files exist in `public/images/`
- [ ] `heroImage` is set on the Ruth book entry
- [ ] Both situation panels carry an `image`
- [ ] Wired via the generator, not by hand-editing the content file
- [ ] Typecheck, lint, tests, content validation and the build all pass
