# 05 — Author Ecclesiastes 7 and 8, the first saying-cluster

**What to build:** The first `saying-cluster` in a published STRATA book, and the chapter that says
plainly what cannot be known.

`ecc-7` holds the better-than sayings as a cluster in `list` form, with `perItem` notes where a
saying needs a gloss and `perItem[n].addr` where one makes its own demand. Not every item is
annotated. The chapter turns at 7:15, where he reports seeing a righteous man perish in his
righteousness and a wicked man live long in his wickedness, which is the flat contradiction of the
promise Proverbs makes and the same wound Job is built around.

`ecc-8` is authority, the limits of obedience, and the repeated admission that nobody can find out
what is done under the sun, however hard the wise claim to have looked.

**Blocked by:** 04.

**Status:** ready-for-agent

- [ ] `ecc-7` uses `saying-cluster` in `list` form with selective `perItem` annotation
- [ ] The cluster reads as scripture with notes, not commentary with verses attached
- [ ] 7:15 carries a tension against Proverbs, with Job named alongside
- [ ] `ecc-8` is a sitting
- [ ] Both tagged in the find index in the same change
- [ ] Scripture verbatim, sources paraphrased, no em dashes, density within target
- [ ] Typecheck, lint, tests, content validation and the build all pass
