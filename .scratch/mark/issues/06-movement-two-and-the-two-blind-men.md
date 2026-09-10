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

**Status:** done

- [x] Movement 2 is declared with an authored situation panel that names the two-blind-men bracket
- [x] Movement 1 gains its doorway, pointing at movement 2
- [x] `mark-8b` carries an explicit `movementId` and files under the way despite sitting in chapter 8
- [x] `mark-8b`, `mark-9`, `mark-10a` and `mark-10b` are sittings
- [x] Take up your cross is put back in its own century
- [x] The three predictions and the three misunderstandings are named as a pattern
- [x] Turns in this movement use `claims` where the text makes a demand rather than naming
- [x] All four are tagged in the find index in the same change
- [x] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] No passage exceeds the density target on its own merits
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**The bracket is named in the situation panel and then left to do its own work.** Bethsaida at one
end, Jericho at the other, three predictions between them, each one misheard and each misunderstanding
answered with teaching about cost. The panel says the construction exists and says most readers have
never been shown it, and then the readings do not keep pointing at it.

**The chapter-8 seam behaves.** `mark-8b` sits in chapter 8, which movement 1 declares by range, and
carries the explicit `movementId` to file under the way. It is the only override in this book and it
is the kind that fails silently, so the navigation test now asserts it directly rather than asserting
that every reading has some movement.

**Take up your cross took three passes on density**, ending at 1.7x. The ground note was the thing to
cut: it was explaining crucifixion, and the misreading was explaining it again twenty words later.
The ground now says only that the crowd was called over, which is the fact the misreading does not
carry, and the century is left to the misreading alone.

**Two more Mark-against-Matthew tensions.** James and John ask for the thrones themselves in Mark;
Matthew hands the request to their mother. That is the third edit of this kind the book has recorded,
and the pattern is now visible without anyone having to assert it.

**Empty verses again.** Mark 9:44 and 9:46 repeat a line from Isaiah and are absent from the earliest
manuscripts, so chapter 9's numbering jumps twice. The ground note says so, the same way chapter 7's
did, and the expansion fill handles it with no special casing.

**The two questions that rhyme.** James and John are asked what do you want me to do for you, and so
is Bartimaeus, eleven verses apart and word for word. They ask for thrones. He asks to see. The
reading points at it once and stops.
