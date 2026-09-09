# Ruth: image prompts

Status: ready-for-human
Created: 2026-09-10

Each prompt below is complete and pastes on its own: the style block is already included
in every one, so there is nothing to remember to append.

The style was written after opening `exo-intro.webp` and `exo-road.webp` directly, so it
describes what the shipped files actually are rather than what their commit messages say.

Three images: a hero on the book page and a banner in each of the two situation panels, matching
the slots Genesis and Exodus already fill.

## The slots

| File | Slot | Size | Wired at |
| --- | --- | --- | --- |
| `ruth-intro.webp` | book hero | 1584 x 672 | `BookEntry.heroImage` on the Ruth entry in `content/index.ts` |
| `ruth-empty.webp` | movement 1 situation banner, Coming back empty | 1376 x 768 | `EMPTY_MOVEMENT.situation.image` |
| `ruth-redeemer.webp` | movement 2 situation banner, The redeemer | 1376 x 768 | `THE_REDEEMER_MOVEMENT.situation.image` |

## The prompts

### `ruth-intro.webp`  (1584 x 672)

```
A wide panorama in three parts, read left to right. On the left, the dry uplands of Moab, and a road descending west out of them. Across the centre, a broad valley in haze with a narrow band of still flat water lying along it. On the right, terraced barley fields at harvest below a small hill town of flat-roofed mudbrick houses, and on the rise beside the town a flat circular threshing floor with a heap of grain on it. Two minute figures on the road, left of centre, walking toward the right. Late evening.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ruth-empty.webp`  (1376 x 768)

```
An empty road coming down out of dry hills toward a small flat-roofed town on a low ridge in the middle distance. The whole foreground is a harvested barley field, stubble in long rows, with the corners of the field at the lower left and lower right deliberately left uncut and still standing. A few bound sheaves. No figures anywhere in the frame.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ruth-redeemer.webp`  (1376 x 768)

```
A flat circular threshing floor of packed earth on high ground at the edge of a small town, at night. A heap of winnowed grain at its centre with a wooden winnowing fork standing upright in it, and loose chaff drifting away to one side on the wind. Below and behind the floor, the town wall and a gate, with a stone bench either side of the opening. No figures.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

## After generating

Resize to the dimensions above and encode at quality 92, which is what the Exodus set was
re-encoded at and measured between 46.3 and 47.7 dB PSNR against its originals:

```
cwebp -q 92 -resize 1584 672 ruth-intro.png -o public/images/ruth-intro.webp
cwebp -q 92 -resize 1376 768 ruth-empty.png -o public/images/ruth-empty.webp
cwebp -q 92 -resize 1376 768 ruth-redeemer.png -o public/images/ruth-redeemer.webp
```

Drop the files into `public/images/` and the wiring is one line each, applied in the book's
generator script and re-run. Never hand-edit the generated content file.

## Why this is a human ticket

No image model is available in this repo's agent tool set. The Adobe tools do selection and
adjustment only and refuse generative requests outright.
