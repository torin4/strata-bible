# Mark: image prompts

Status: ready-for-human
Created: 2026-09-10

Each prompt below is complete and pastes on its own: the style block is already included
in every one, so there is nothing to remember to append.

The style was written after opening `exo-intro.webp` and `exo-road.webp` directly, so it
describes what the shipped files actually are rather than what their commit messages say.

Five images: a hero and a banner for each of the four movements. Only movement 1 is declared in
code so far, so `mark-authority.webp` can be wired immediately and the other three banners wait on
tickets 06, 07 and 08. The hero can be wired as soon as it exists.

## The slots

| File | Slot | Size | Wired at |
| --- | --- | --- | --- |
| `mark-intro.webp` | book hero | 1584 x 672 | `BookEntry.heroImage` on the Mark entry in `content/index.ts` |
| `mark-authority.webp` | movement 1 situation banner, The authority | 1376 x 768 | `THE_AUTHORITY_MOVEMENT.situation.image` |
| `mark-way.webp` | movement 2 situation banner, The way | 1376 x 768 | `THE_WAY_MOVEMENT.situation.image`, when ticket 06 declares it |
| `mark-temple.webp` | movement 3 situation banner, The temple | 1376 x 768 | `THE_TEMPLE_MOVEMENT.situation.image`, when ticket 07 declares it |
| `mark-handed-over.webp` | movement 4 situation banner, Handed over | 1376 x 768 | `HANDED_OVER_MOVEMENT.situation.image`, when ticket 08 declares it |

## The prompts

### `mark-intro.webp`  (1584 x 672)

```
A wide panorama in four parts, read left to right. On the left, a freshwater lake with two small open boats drawn up on a stony shore and nets spread on poles to dry. Left of centre, low hills and a road climbing south out of them. Right of centre, the walls of a hill city with a great terraced temple platform rising inside them. At the far right, outside the walls, a low rock face with a single cut tomb, its round blocking stone rolled aside and nothing standing in front of the opening. Dawn.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `mark-authority.webp`  (1376 x 768)

```
The shore of a freshwater lake at first light. In the foreground a stony beach with two open fishing boats pulled up, nets spread on frames to dry, and a stack of woven baskets. Behind them a small lakeside town of low flat-roofed houses with one larger rectangular hall among them. On the far shore, dark hills, and above them the roofs of a new hilltop city still under construction, scaffolding standing against its walls. Three minute figures at the water's edge, bent over the nets.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `mark-way.webp`  (1376 x 768)

```
A road climbing south through bare limestone hill country, seen from above and behind so that the road runs away from the viewer into the distance. Dry terraces and scattered thorn trees to either side. Far ahead and much smaller, on the highest ground, the first suggestion of a walled city. A line of minute figures strung out along the road, with one walking well ahead of the rest. Hard midday light, no cloud.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `mark-temple.webp`  (1376 x 768)

```
A great walled temple platform seen from a hillside opposite it and slightly above, across a narrow valley. Courts within courts on the platform, colonnades along its edges, and thin smoke going up straight from an altar at its centre. In the foreground on the near hillside, a low wall of dressed stone blocks and one old olive tree. Two minute figures seated on the near wall, looking across. Nothing else.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `mark-handed-over.webp`  (1376 x 768)

```
A low bare rise outside a city wall at first light, with three empty upright posts standing on it and the ground around them clear. Below and to the left, an olive grove on a slope with a stone oil press among the trees. A narrow path runs from a gate in the wall down through the grove and up to the rise. No figures anywhere. The sky above is empty and just beginning to lighten at the horizon.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

## After generating

Resize to the dimensions above and encode at quality 92, which is what the Exodus set was
re-encoded at and measured between 46.3 and 47.7 dB PSNR against its originals:

```
cwebp -q 92 -resize 1584 672 mark-intro.png -o public/images/mark-intro.webp
cwebp -q 92 -resize 1376 768 mark-authority.png -o public/images/mark-authority.webp
cwebp -q 92 -resize 1376 768 mark-way.png -o public/images/mark-way.webp
cwebp -q 92 -resize 1376 768 mark-temple.png -o public/images/mark-temple.webp
cwebp -q 92 -resize 1376 768 mark-handed-over.png -o public/images/mark-handed-over.webp
```

Drop the files into `public/images/` and the wiring is one line each, applied in the book's
generator script and re-run. Never hand-edit the generated content file.

## Why this is a human ticket

No image model is available in this repo's agent tool set. The Adobe tools do selection and
adjustment only and refuse generative requests outright.
