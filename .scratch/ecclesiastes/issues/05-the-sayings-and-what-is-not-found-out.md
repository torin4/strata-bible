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

**Status:** done

- [x] `ecc-7` uses `saying-cluster` in `list` form with selective `perItem` annotation
- [x] The cluster reads as scripture with notes, not commentary with verses attached
- [x] 7:15 carries a tension against Proverbs, with Job named alongside
- [x] `ecc-8` is a sitting
- [x] Both tagged in the find index in the same change
- [x] Scripture verbatim, sources paraphrased, no em dashes, density within target
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**The first `saying-cluster` in a published book works.** `list` form, eleven sayings carried in
`sayings` rather than `verses`, five annotated through `perItem` and six left alone, which is the
ticket's requirement that it read as scripture with notes rather than commentary with verses
attached. One item, the nostalgia saying at 7:10, carries its own `perItem.addr` rather than a note,
which is the feature the contract describes and which no published book had used. The expansion fill
passes list form through untouched, as it should, and the test now asserts all of it.

**7:15 carries the tension and it reaches three ways**: against Proverbs' promise in the same
collection, and alongside Job, which is built on the same wound from the other direction.

**7:26-28 is not skipped.** The passage is authored whole rather than selected around the difficult
verse, and the meaning says plainly that it is misogyny, that it is in the text, and that it is not
improved by explanation. What it then offers is narrow and true: he attributes the search to a
method he has just called a failure, he appears to be handling an existing saying, and the next
verse moves the charge off any category of person onto mankind in general. The reading says outright
that none of that makes the sentence acceptable, and that the book does not rest on it. Selecting
the verse out would have been the easier choice and the wrong one for this app.

**Chapter 8 is where the movement's title arrives.** Three admissions in a few verses that nobody
can find it out, the last of them aimed at his own profession: even if a wise man claims to know, he
cannot find it. The turn takes it to the reader as somebody else's confident account of their life.
