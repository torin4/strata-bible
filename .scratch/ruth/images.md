# Ruth: image spec and prompts

Status: ready-for-human
Created: 2026-09-10

Three images, matching the slots Genesis and Exodus already fill. Written after looking at
`exo-intro.webp` and `exo-road.webp` directly, so the style notes below describe what those files
actually are rather than what the commit messages say about them.

## The style, as the existing files render it

- **Ground.** Near black, effectively `--deep #0d1015`, with a faint warm brown-grey wash lifting
  through the lower third. Visible paper or canvas grain over the whole frame.
- **Line.** Single-weight hairline strokes in pale warm gold, sitting between `--gold #c79a3e` and
  `--parchment #f4ead4`. Contour lines do all the work: rock, water, ground texture and foliage are
  all described by line rather than by fill. No cross-hatching, no rendered shading.
- **Colour.** The app palette and nothing else. One muted slate blue, the `--lapis #6f9bce` family
  heavily darkened, is used sparingly for distant water and far hills. No other hue appears.
- **Composition.** Horizon sits low, around 60 to 65 percent down the frame. The top half is close
  to empty. A road, shoreline or watercourse runs across the lower half and carries the eye.
- **Figures.** Three to five pixels tall, faceless, never more than a handful, often none.
- **Frame.** None. No border, no text, no signature, no added vignette.

## The three slots

| File | Slot | Dimensions | Wired at |
| --- | --- | --- | --- |
| `ruth-intro.webp` | book hero | 1584 x 672 | `BookEntry.heroImage` in `content/index.ts` |
| `ruth-empty.webp` | movement 1 situation banner | 1376 x 768 | `EMPTY_MOVEMENT.situation.image` |
| `ruth-redeemer.webp` | movement 2 situation banner | 1376 x 768 | `THE_REDEEMER_MOVEMENT.situation.image` |

Exodus's hero is 1584 x 672 and Genesis's is 2752 x 1000. The container crops to its own ratio, so
either works; 1584 x 672 matches the more recent book and is the smaller download.

## Shared style block

Append to each prompt below.

> Fine gold hairline ink drawing on a near-black ground, in the manner of an engraving. Single
> weight strokes in pale warm gold, between #c79a3e and #f4ead4, describing everything by contour
> line with no fill and no rendered shading. Background #0d1015 with a faint warm brown-grey wash
> in the lower third and a visible paper grain. One heavily darkened slate blue, around #6f9bce,
> used only for distant water and far hills. No other colour anywhere. Horizon low, about
> two thirds down the frame, with the sky left almost entirely empty. Any human figures are tiny,
> faceless, and no more than a handful. No border, no frame, no text, no signature.

## 1. `ruth-intro.webp` — the book hero

Reads left to right the way the book does, from Moab back to Bethlehem.

> A wide panorama. On the left, the dry hills of Moab falling away west, with a road descending out
> of them. Across the centre, the low haze of a valley and a narrow band of still water. On the
> right, terraced barley fields at harvest below a small hill town of flat-roofed mudbrick houses,
> and on a rise beside the town a flat circular threshing floor. Two very small figures walk the
> road, left of centre, heading right. Late evening.

## 2. `ruth-empty.webp` — movement 1, the ground beneath the road

The situation panel covers Moab, a widow's standing, and the gleaning law.

> An empty road coming down out of dry hills toward a small flat-roofed town on a low ridge in the
> middle distance. The foreground is a harvested barley field, stubble in rows, with the corners of
> the field at the lower edges deliberately left uncut and standing. A few sheaves. No figures.
> Nothing else in the frame.

## 3. `ruth-redeemer.webp` — movement 2, the ground beneath the claim

The situation panel covers the redeemer law, the levirate, and the threshing floor.

> A flat circular threshing floor of packed earth on high ground at the edge of a small town, at
> night. A heap of winnowed grain at its centre, a winnowing fork standing in the heap, and loose
> chaff drifting off to one side on the wind. Below and behind, the town wall and a gate with stone
> benches either side of the opening. No figures.

## After generating

Whatever the source resolution, resize to the dimensions in the table, then encode at quality 92,
which is what the Exodus set was re-encoded at and measured between 46.3 and 47.7 dB PSNR:

```
cwebp -q 92 -resize 1584 672 ruth-intro.png    -o public/images/ruth-intro.webp
cwebp -q 92 -resize 1376 768 ruth-empty.png    -o public/images/ruth-empty.webp
cwebp -q 92 -resize 1376 768 ruth-redeemer.png -o public/images/ruth-redeemer.webp
```

Drop the three files into `public/images/` and the wiring is three lines: `heroImage` on the Ruth
book entry, and an `image` on each of the two situation panels in `scripts/build-ruth.ts`. Do not
hand-edit `content/ruth.ts`; change the generator and re-run it.

## Note on why this is a human ticket

No image model is available to the agent in this repo's tool set. The Adobe tools do selection and
adjustment only and refuse generative requests outright. The style notes and prompts above are
derived from the shipped files so that whatever tool produced the Genesis and Exodus sets can be
pointed at these three with the same result.
