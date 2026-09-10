# Ecclesiastes: image prompts

Status: ready-for-human
Created: 2026-09-10

Each prompt is complete and pastes on its own: the style block is already inside it.

Four images: a hero and a banner for each of the three movements.

One note on the hero. The prompts for Ruth's and Mark's heroes said "a wide panorama in three
parts" and "in four parts", and both models drew literal ruled panels. Ruth's did not survive its
container and had to be swapped into a situation slot. This prompt says continuous, explicitly,
three times.

## The slots

| File | Slot | Size | Wired at |
| --- | --- | --- | --- |
| `ecclesiastes-intro.webp` | book hero | 1584 x 672 | `BookEntry.heroImage` |
| `ecc-sun.webp` | movement 1 banner, Under the sun | 1376 x 768 | `UNDER_THE_SUN_MOVEMENT.situation.image` |
| `ecc-search.webp` | movement 2 banner, What cannot be found out | 1376 x 768 | `NOT_FOUND_OUT_MOVEMENT.situation.image` |
| `ecc-bread.webp` | movement 3 banner, Eat your bread | 1376 x 768 | `EAT_YOUR_BREAD_MOVEMENT.situation.image` |

## The prompts

### `ecclesiastes-intro.webp`  (1584 x 672)

```
A single continuous wide panorama with no panels, no dividing lines and no frame within the frame, reading left to right as one unbroken landscape. On the left, a river running out toward a distant sea that is plainly not filling. Across the centre, terraced fields and a walled house on a rise with vines, pools and cisterns below it, all of it worked and orderly. On the right, the same house further off and quieter, its doors shut, with a threshing floor gone to grass beside it. A low sun near the horizon throughout. No figures.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ecc-sun.webp`  (1376 x 768)

```
A wide dry valley at midday under a low sun, with a river winding through it toward the far edge of the frame and out of sight. Terraces and cisterns cut into the slopes on both sides, worked ground everywhere and nobody working it. In the middle distance a walled house with gardens and a pool below it. The wind is visible only as drifting dust on the road. No figures.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ecc-search.webp`  (1376 x 768)

```
The gate and courts of a small provincial town at dusk, seen from slightly above. Stone benches by the gate, a set of scales and stacked weights on a low table, storerooms with their doors ajar behind, and beyond the wall a road climbing away toward hills where a larger fortified city sits very small on the skyline. Two minute figures at the table, one seated and one standing over him. No other people.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ecc-bread.webp`  (1376 x 768)

```
A courtyard table outside a house at evening, laid with bread, a jar of wine and two cups, with a lamp lit on it. Behind the table the house itself, larger than the table needs, its upper windows dark and its street door standing shut. Beyond the courtyard wall an almond tree in blossom and the first stars. Two minute figures seated at the table, close together. Nothing else in the frame.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

## After generating

Resize to the dimensions above and encode at quality 92, as the other books were:

```
cwebp -q 92 -resize 1584 672 ecclesiastes-intro.png -o public/images/ecclesiastes-intro.webp
cwebp -q 92 -resize 1376 768 ecc-sun.png -o public/images/ecc-sun.webp
cwebp -q 92 -resize 1376 768 ecc-search.png -o public/images/ecc-search.webp
cwebp -q 92 -resize 1376 768 ecc-bread.png -o public/images/ecc-bread.webp
```

Drop the files into `public/images/` and the wiring is one line each, applied in
`scripts/build-ecclesiastes.ts` and re-run. Never hand-edit the generated content file.

## Why this is a human ticket

No image model is available in this repo's agent tool set.
