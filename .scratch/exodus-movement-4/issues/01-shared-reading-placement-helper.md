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

**Status:** ready-for-agent

- [ ] A single shared helper places an authored reading into the Exodus array
- [ ] Placement is by chapter index, so authoring two readings out of sequence still yields a correctly ordered book
- [ ] The array's closing line survives intact, with no stray terminator
- [ ] It refuses to place a reading whose id is already present, rather than duplicating it
- [ ] The existing authoring generators are updated to use it, or retired if they have served their purpose
- [ ] Demonstrated by placing a reading out of chapter order and observing it land in the right position
- [ ] Adjacency across the whole book is unchanged for existing readings
- [ ] Typecheck, lint, tests, content validation and the build all pass
