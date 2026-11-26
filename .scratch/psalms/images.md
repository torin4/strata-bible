# Psalms: image prompts

Status: ready-for-human
Created: 2026-11-26

Each prompt is complete and pastes on its own: the style block is already inside it.

Six images: a hero and a banner for each of the five books.

The hero prompt says continuous three times, as the Ecclesiastes one did. Ruth's and Mark's heroes
said "in three parts" and "in four parts" and both came back as ruled panels.

Each banner takes its subject from the book it opens, not from the Psalter in general, so that the
five read as five different places:

- Book I is David's: one person praying at night in the hill country.
- Book II opens with a singer far from the temple, at the headwaters of the Jordan (Psalm 42).
- Book III mourns the sanctuary burned and the city broken (Psalms 74, 79, 89).
- Book IV goes back to Moses and the wilderness, and to the sea that the LORD rules (Psalms 90, 93).
- Book V is the pilgrims' road up to a rebuilt Jerusalem (Psalms 120 to 134).

## The slots

| File | Slot | Size | Wired at |
| --- | --- | --- | --- |
| `psalms-intro.webp` | book hero | 1584 x 672 | `BookEntry.heroImage` |
| `ps-david.webp` | Book I banner, Psalms 1 to 41 | 1376 x 768 | `PSALMS_BOOK_I_MOVEMENT.situation.image` |
| `ps-korah.webp` | Book II banner, Psalms 42 to 72 | 1376 x 768 | `PSALMS_BOOK_II_MOVEMENT.situation.image` |
| `ps-asaph.webp` | Book III banner, Psalms 73 to 89 | 1376 x 768 | `PSALMS_BOOK_III_MOVEMENT.situation.image` |
| `ps-moses.webp` | Book IV banner, Psalms 90 to 106 | 1376 x 768 | `PSALMS_BOOK_IV_MOVEMENT.situation.image` |
| `ps-ascents.webp` | Book V banner, Psalms 107 to 150 | 1376 x 768 | `PSALMS_BOOK_V_MOVEMENT.situation.image` |

## The prompts

### `psalms-intro.webp`  (1584 x 672)

```
A single continuous wide panorama with no panels, no dividing lines and no frame within the frame, reading left to right as one unbroken landscape. On the left, a broad leafy tree standing on the bank of a stream, with the stream running on across the frame. Across the centre, open hill country with a stone sheepfold, a few sheep and a road that climbs steadily to the right. On the right, a walled city on a hill with a temple on its highest ground, and the road arriving at its gate. A low sun near the horizon throughout. A small file of minute figures on the road, walking toward the city.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ps-david.webp`  (1376 x 768)

```
A hillside in the Judean wilderness at night, seen from slightly above. On the left a cave mouth in a limestone cliff, with a low stone sheepfold beside it and a few sheep lying inside. A small lyre leans against a rock near a low fire at the cave mouth, and one minute figure sits there looking up. Below the hillside a dry valley with a single stream winding through it and one leafy tree standing on its bank. A thin crescent moon and a scatter of small stars above. Nothing else in the frame.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ps-korah.webp`  (1376 x 768)

```
The headwaters of a river below a high snow-capped mountain, in rough northern country. Water drops in two waterfalls through broken rock into a wide pool, and a stream runs out of the pool toward the bottom of the frame. A single deer stands at the edge of the pool with its head lowered to drink. On a rock above the falls one minute figure sits facing away, looking south across a long plain. Very far off on the southern skyline, tiny, a walled city on a hill. No other people.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ps-asaph.webp`  (1376 x 768)

```
The ruins of a temple on a hilltop at dusk, seen from its own outer court. The great doorway stands with its doors gone and its lintel cracked, columns lie fallen across the paving, and carved wooden panels lie split among the stones. Beyond the court the city wall is breached in two places and the houses below it are roofless. Thin smoke rises straight up from one corner of the ruin. A few thistles grow between the paving stones. No figures anywhere.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ps-moses.webp`  (1376 x 768)

```
A desert wilderness at first light. In the foreground a patch of grass and small flowers, some standing fresh and some already bent and withered. In the dry valley beyond, a small camp of low tents, very small against the land. Behind the camp a single huge bare mountain, and to the right of it the land falls away to a sea, where heavy surf breaks against a line of cliffs. The sun is just clearing the horizon over the water. No figures.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

### `ps-ascents.webp`  (1376 x 768)

```
A stony road climbing through terraced hills toward a walled city on the height, at sunrise. The city wall is whole, its gate stands open, and a plain modest temple rises behind it. Olive trees and vines on the terraces on both sides of the road. A small file of minute figures walks up the road toward the gate, two of them carrying a harp and a long trumpet. The sun rises directly behind the city. Nothing else in the frame.

Fine gold hairline ink drawing on a near-black ground, in the manner of a steel engraving. Every form described by single-weight contour line in pale warm gold, between #c79a3e and #f4ead4, with no fill, no cross-hatching and no rendered shading. Background #0d1015, with a faint warm brown-grey wash rising through the lower third and a visible paper grain over the whole frame. One further colour only, a heavily darkened slate blue near #6f9bce, used sparingly for distant water and far hills. No other hue anywhere. The horizon sits low, about two thirds down the frame, and the sky above it is left almost entirely empty. Any human figures are minute faceless silhouettes drawn in line, never more than a handful. No border, no frame, no text, no signature, no vignette.
```

## After generating

Resize to the dimensions above and encode at quality 92, as the other books were:

```
cwebp -q 92 -resize 1584 672 psalms-intro.png -o public/images/psalms-intro.webp
cwebp -q 92 -resize 1376 768 ps-david.png -o public/images/ps-david.webp
cwebp -q 92 -resize 1376 768 ps-korah.png -o public/images/ps-korah.webp
cwebp -q 92 -resize 1376 768 ps-asaph.png -o public/images/ps-asaph.webp
cwebp -q 92 -resize 1376 768 ps-moses.png -o public/images/ps-moses.webp
cwebp -q 92 -resize 1376 768 ps-ascents.png -o public/images/ps-ascents.webp
```

Drop the files into `public/images/`. The wiring is one line each: `heroImage` on the Psalms entry
in `content/index.ts`, and `image` on each movement's `situation` in `content/psalms.ts`, which is
hand-written and has no generator.

Check each image against its container before wiring. The hero is cropped to about 1.79:1 at phone
width and about 3.5:1 at desktop; the banners render at natural aspect.
