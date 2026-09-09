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

**Status:** ready-for-human

- [x] Prompts written for all five slots, each self-contained
- [x] Dimensions and encode settings recorded, matching the Exodus compression pass
- [ ] The five files exist in `public/images/`
- [ ] `heroImage` is set on the Mark book entry
- [ ] Each declared movement's situation panel carries an `image`
- [ ] Wired via the generator, not by hand-editing the content file
- [ ] Typecheck, lint, tests, content validation and the build all pass
