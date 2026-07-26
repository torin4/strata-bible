# 02 — The Ten Words: the first published statute-cluster

**What to build:** A reader opens Exodus 20 and meets law rendered as law.

Not prose with verse numbers, but a numbered cluster, each item standing on its own, with per-item
annotations that say whether this particular command still makes a claim on the reader. This is
the first time any published passage in the app has used the statute-cluster kind, the list form,
per-item annotation, or the distinction between a law that claims you and a law that does not. All
of it exists in the schema and the renderer and has been exercised only by a single unpublished
fixture.

The reading also declares movement 3 and its situation panel, because a reading needs a movement
to belong to and a movement needs readings to be valid. Movement 3 runs chapters 19 to 24 by
chapter range; no reading in it needs an explicit movement override, since movement 2 ends cleanly
at chapter 18.

The situation panel grounds the covenant: a mountain, a treaty form borrowed from the political
world of the time, and a people agreeing to terms. Sources attributed, never quoted.

On the theme vocabulary: the existing keys describe what happens to a reader, and the Ten Words
are about what is asked of one. If the reading cannot be tagged honestly without a key for being
bound or given rules to live inside, add one, in this same change, on the same reasoning that
added the complicity key for movement 1. If the existing keys cover it, do not.

**Blocked by:** 01 — Density gate counts per-item apparatus.

**Status:** done

- [x] Movement 3 is declared with its chapter range and an authored situation panel, and carries no doorway
- [x] Exodus 20 is a sitting rendering as a numbered cluster rather than prose
- [x] Per-item annotations mark commands that still claim the reader, and any that do not, using the two existing modes
- [x] At least one item carries a gloss note as well as or instead of an address
- [x] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant, which reads statutes exactly as it reads verses
- [x] The reading is tagged in the find index in the same change that makes it a sitting
- [x] A theme key is added only if the reading cannot be tagged honestly without one
- [x] Verse selection is made knowing the full-text reveal does not apply to clusters, so what is left out is simply absent
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] The density gate, now counting per-item apparatus, passes on this passage on its own merits
- [x] The cluster renders correctly in the production build, with its annotations visible and the two modes visually distinct
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Three passages, deliberately mixed.** The ten words as a statute-cluster, the people standing at
a distance as a scene, and the altar law as a second statute-cluster. The reader detects the mixed
kinds on its own and labels the reading Composite, which is behaviour built for Job and never
previously exercised by a real book.

**Both modes are in use, and the altar law is why.** The ten words mostly still claim a reader, so
forcing a `none-but` among them would have been dishonest. Exodus 20:22-26 provided the genuine
case: undressed stone and no steps, which plainly binds nobody now and is worth seeing for what it
refuses. That is the first published use of the mode the whole of ticket 04 depends on.

**Verified in a live browser, not just the build.** The reader paginates one scene per screen, so
the initial HTML only ever contains scene one; the none-but chips are on scene three and cannot be
checked by grepping a prerendered page. Stepping through the reader shows claims rendering as
"claims you" in gold and none-but as "not yours, worth seeing" in violet, visibly different, which
is the distinction this movement's design rests on.

**The verse-integrity gate reads statutes.** Verified count went from 919 to 945, exactly the 26
verses added, with no code change needed.

**Per-item apparatus is now visible to the density gate, and it matters.** The ten words carry 234
words of it. Counted, the passage reads 1.28x; under last week's gate the same page would have
reported 0.55x. Ticket 01 was worth doing first.

**No theme key was added.** The reading tags honestly as limits, divided-self and guilt. The spec
raised a possible key for being bound or given rules, and on writing the speaks-to line the
existing vocabulary covered it without strain. Left alone rather than added speculatively.

**Two incidental fixes.** The EXODUS array terminator had been mangled to `},];` by the movement 2
append, valid TypeScript that no formatter would touch because the content file is biome-ignored;
normalised. And running a production build while the dev server was up overwrote `.next` and left
the dev server serving 404s for its own chunks, which showed up as thirteen console errors that
looked like a hydration failure and were not. Restart after building, or do not build while dev
is running.
