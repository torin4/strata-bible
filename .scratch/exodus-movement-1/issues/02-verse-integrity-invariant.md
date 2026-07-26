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

**Status:** done

- [x] The content validator checks every authored verse against its book's BSB lookup
- [x] A divergence fails the build and names the reading, the passage reference and the verse number
- [x] A book with no registered lookup is skipped, not failed
- [x] Verses that a sitting omits and the expansion module fills are not double-checked or double-counted
- [x] Demonstrated by mutating one word of one verse locally and observing the validator fail, then reverting
- [x] The findings across Genesis are reported to the author in the ticket comments, with counts and examples, and no Genesis text is changed
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Genesis findings, reported not fixed.** 586 authored verses verified identical to the BSB.
Two exceptions, neither a failure, both now printed by the validator on every run:

1. **One abridgement.** `gen-50 · 50:15–26 v17` authors a contiguous tail of the BSB verse, with
   the opening clause ("This is what you are to say to Joseph: I beg you, please forgive the
   transgression and sin of your brothers, for they did you wrong.") trimmed. It reads as a
   deliberate editorial choice, not an error. Untouched, per this ticket's scope.
2. **One unverifiable passage.** `gen-48 · Genesis 48–49 (selected)` holds 48:14, then 49:7,
   49:10, 49:33. The verse numbers do not ascend, so a bare number cannot be attributed to a
   chapter and none of the four can be checked. This is the same passage the reader's full-text
   fill already refuses to touch, for the same reason.

**Design refinement, agreed with the author mid-ticket.** The acceptance criteria as written
were self-contradictory: exact match or fail, plus report Genesis without fixing it. Finding 1
means a strict equality gate would have failed on arrival. The rule shipped is: authored text
must be a contiguous substring of the BSB verse. Anything the BSB does not contain fails the
build, which is what catches a licensed translation or a verse typed from memory, since neither
is ever a clean substring. A proper substring is reported as an abridgement. The spec's
Implementation Decisions section was updated to match.

**Note for later tickets.** The validator now imports the reader's own chapter-attribution rules
rather than keeping a second copy, so the check and the fill cannot disagree about which verse
is which. If a future passage needs different attribution, change it in one place.

**Mutation demo.** Genesis 1:1 was temporarily rewritten toward a KJV-style phrasing ("In the
beginning, God created the heaven and the earth."). The validator failed with
`gen-1 · 1:1–5 v1: authored text is not the BSB at genesis 1:1` and exit code 1. Reverted.

**Amended by ticket 03.** As shipped here, the gate compared raw text, which would have rejected
every lineated poetry verse: a line break sits where the BSB lookup holds a space. Ticket 03
caught this while recording the lineation decision, before any poetry existed to trip over it.
The comparison now collapses whitespace on both sides. The guarantee is unchanged in substance,
every word and its order must still match, and lineation is simply invisible to the check.
