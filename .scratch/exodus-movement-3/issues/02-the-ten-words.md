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

**Status:** ready-for-agent

- [ ] Movement 3 is declared with its chapter range and an authored situation panel, and carries no doorway
- [ ] Exodus 20 is a sitting rendering as a numbered cluster rather than prose
- [ ] Per-item annotations mark commands that still claim the reader, and any that do not, using the two existing modes
- [ ] At least one item carries a gloss note as well as or instead of an address
- [ ] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant, which reads statutes exactly as it reads verses
- [ ] The reading is tagged in the find index in the same change that makes it a sitting
- [ ] A theme key is added only if the reading cannot be tagged honestly without one
- [ ] Verse selection is made knowing the full-text reveal does not apply to clusters, so what is left out is simply absent
- [ ] Sources are attributed and paraphrased, never quoted
- [ ] No em dashes in authored copy
- [ ] The density gate, now counting per-item apparatus, passes on this passage on its own merits
- [ ] The cluster renders correctly in the production build, with its annotations visible and the two modes visually distinct
- [ ] Typecheck, lint, tests, content validation and the build all pass
