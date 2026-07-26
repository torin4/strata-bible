# 01 — Shared helper for placing a reading in the book

**What to build:** One place that knows how to put a newly authored reading into the Exodus
reading array, in chapter order, without damaging the array.

Every authoring generator so far has hand-rolled this, and the same defect has appeared twice: the
array's closing line collapsed to a stray `},];` because the insert sliced around the newline
rather than before the closing line. It is valid TypeScript, so nothing failed, and the content
file is deliberately excluded from the formatter, so nothing tidied it either. It was found by eye
both times.

The second problem is ordering. Array order is authored reading order and drives adjacency, so a
generator that blindly appends produces a wrong-order book the moment two readings are authored
out of sequence. One reading in this movement already had to be inserted rather than appended for
exactly this reason.

A shared helper that places a reading by its chapter index solves both, and makes the two
independent authoring tickets in this movement safe to run in either order.

**Blocked by:** None — can start immediately.

**Status:** done

- [x] A single shared helper places an authored reading into the Exodus array
- [x] Placement is by chapter index, so authoring two readings out of sequence still yields a correctly ordered book
- [x] The array's closing line survives intact, with no stray terminator
- [x] It refuses to place a reading whose id is already present, rather than duplicating it
- [x] The existing authoring generators are updated to use it, or retired if they have served their purpose
- [x] Demonstrated by placing a reading out of chapter order and observing it land in the right position
- [x] Adjacency across the whole book is unchanged for existing readings
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Split into a pure function and a thin wrapper**, which is what let the demonstration the ticket
asked for become a durable test instead of a demo-and-revert. Seven tests cover chapter ordering
in both directions, the shared-chapter case that the Exodus 15 seam produces, refusal to duplicate
an id, and the terminator defect itself: no `},];`, exactly one array terminator, and the rest of
the file byte-identical around the insert.

**This is the first script in the repo to get tests, deliberately.** The BSB generator was left
untested on the reasoning that one-shot codegen is proven by its output. This helper is the
opposite: every future authoring generator calls it, and its bug class has already shipped twice.
That difference is the whole justification.

**Validated against real content, not only the fixture.** A dry run over the Exodus file parses
all twenty readings, places a chapter 30 reading last, and then places a chapter 26 reading BEFORE
it despite being added second. That out-of-order guarantee is what makes tickets 03 and 04 safe to
run in either order, which was the second reason for doing this first.

**Five spent generators retired.** Each ran once and its output is now the content file, which is
the source of truth; the scripts were scaffolding. Preserved in git history, the same convention
the BSB migration and the movement 1 skeleton generator already follow. Kept: the per-book BSB
generator, which is reusable, and the Song lineation script, which is idempotent and will be
wanted for Psalms.

**No content changed.** This ticket touches tooling only, which is why the reading count, verse
count and density figures are all identical before and after.