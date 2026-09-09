# 06 — Movement 2, the way, and the bracket most readers have never seen

**What to build:** The book's spine, and the movement that names it.

Movement 2 (`the-way`, declared chapters 9–10) is where the situation panel does the most work it
will do anywhere in this book. Mark put his discipleship section between two healings of blindness,
one at Bethsaida that takes two attempts and one at Jericho where the man throws off his cloak and
follows on the road. Between them he set three passion predictions, and after each one the people
closest to him hear something else: Peter rebukes him, they argue about who is greatest, and James
and John ask for the best seats. Naming that construction is most of what this panel is for.

Four readings: `mark-8b` (Bethsaida, Peter's confession, the first prediction, take up your cross),
`mark-9`, `mark-10a` and `mark-10b`.

`mark-8b` carries the chapter-8 seam. It sits in chapter 8, which movement 1 declares, so it takes
an explicit `movementId` to file under the way. This is the only override in the book and it fails
silently if it is wrong.

It also carries the misreading this book most needs: take up your cross has been softened into a
difficult marriage or a chronic illness, and the people hearing it had watched it done, on the
road, to people convicted of sedition.

Movement 1 gains its doorway here, because a doorway cannot exist until the movement it points at
does.

**Blocked by:** 05 — Author Mark 6 to 8:21, and close the first movement.

**Status:** ready-for-agent

- [ ] Movement 2 is declared with an authored situation panel that names the two-blind-men bracket
- [ ] Movement 1 gains its doorway, pointing at movement 2
- [ ] `mark-8b` carries an explicit `movementId` and files under the way despite sitting in chapter 8
- [ ] `mark-8b`, `mark-9`, `mark-10a` and `mark-10b` are sittings
- [ ] Take up your cross is put back in its own century
- [ ] The three predictions and the three misunderstandings are named as a pattern
- [ ] Turns in this movement use `claims` where the text makes a demand rather than naming
- [ ] All four are tagged in the find index in the same change
- [ ] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant
- [ ] Sources are attributed and paraphrased, never quoted
- [ ] No em dashes in authored copy
- [ ] No passage exceeds the density target on its own merits
- [ ] Typecheck, lint, tests, content validation and the build all pass
