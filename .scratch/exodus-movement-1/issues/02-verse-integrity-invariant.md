# 02 — Verse-integrity invariant

**What to build:** A guarantee that every verse of scripture in the repo is really the Berean
Standard Bible. The hard rule is that STRATA never ships a copyrighted or licensed translation,
and the realistic way that rule gets broken is not deliberate copying but a verse typed from
memory that drifts toward another translation's phrasing, buried in a content file nobody
proofreads line by line.

After this ticket, the content validator compares every authored verse against the BSB lookup
for its book and fails the build on any divergence, naming the reading, the reference and the
verse. Books with no registered lookup are skipped rather than failing.

Run the new check across Genesis's 1,533 verses and **report** what it finds. Do not fix Genesis
divergences here; that is a separate decision, deliberately out of scope for this piece of work.

**Blocked by:** 01 — Per-book BSB generator and lookup registry.

**Status:** ready-for-agent

- [ ] The content validator checks every authored verse against its book's BSB lookup
- [ ] A divergence fails the build and names the reading, the passage reference and the verse number
- [ ] A book with no registered lookup is skipped, not failed
- [ ] Verses that a sitting omits and the expansion module fills are not double-checked or double-counted
- [ ] Demonstrated by mutating one word of one verse locally and observing the validator fail, then reverting
- [ ] The findings across Genesis are reported to the author in the ticket comments, with counts and examples, and no Genesis text is changed
- [ ] Typecheck, lint, tests, content validation and the build all pass
