# 02 — Movement 4 declared, and the pattern

**What to build:** A reader who finishes the covenant reaches the tabernacle instructions, and the
last movement of the book exists.

Exodus 25 to 27, selected to the objects that carry meaning rather than every fitting: the ark and
what goes inside it, the table, the lampstand, the curtains and the frame of the tent. Rendered as
prose, because these are continuous divine speech and not a numbered code. Statute-cluster keeps
meaning law, which is what the covenant movement established it for, and the dimensions of the ark
should not appear to make a claim on a reader the way a commandment does.

The reading declares movement 4 with its situation panel. That panel is where the proportions of
the book get answered: seven chapters for a tent, one for the creation of the world. The answer
worth making is about what the book is for. A God who has rescued a people now arranges to travel
with them, and the detail is the point rather than an obstacle to it.

Movement 3 ends at chapter 24, so movement 4 is declared by chapter range with no explicit
movement override anywhere in it.

**Blocked by:** 01 — Shared helper for placing a reading in the book.

**Status:** done

- [x] Movement 4 is declared with its chapter range and an authored situation panel, and carries no doorway
- [x] Exodus 25 to 27 is a sitting, rendered as prose scenes rather than as a numbered cluster
- [x] It holds one passage per chapter, so every verse's chapter can be attributed and verified
- [x] The situation panel addresses why the tabernacle gets the space it gets
- [x] The selection keeps the objects that carry meaning and drops the repetitive fittings
- [x] The reading is tagged in the find index in the same change that makes it a sitting
- [x] The scripture is materialised verbatim from the BSB lookup and passes the verse-integrity invariant
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] No passage exceeds the density target on its own merits
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**The situation panel answers the proportion question head on.** Creation gets thirty-one verses,
a tent gets around four hundred, twice over. Read as story that is badly out of balance; read as
what the book is for, it is the argument itself. The rescue was never about the leaving. It was
about this God ending up living among these people, and the specifications are how that gets
arranged. It also says plainly that the plan matches the later temple, which is either the temple
projected backward or the tent it imitated, and that either way handing exiles a sanctuary that
packs up and travels is a pointed thing to do.

**The reading turns on 25:8**, make me a sanctuary so that I may dwell among them. Everything after
it is joinery in service of that sentence, and the thing worth noticing is what is not being built:
not a temple, which sits on a site, but a tent with poles through rings, portable from the first
instruction. The God who has just refused to be seen arranges to be carried.

**Prose, as decided.** These are continuous divine speech, and rendering cubits as a numbered
cluster would imply the ark's dimensions claim a reader the way a commandment does. Statute-cluster
keeps meaning law.

**One scope change, made deliberately.** Movement 3's doorway belonged to ticket 07, but declaring
movement 4 is precisely what makes that doorway possible, and leaving it out meant the chain test
would fail for five tickets and then need re-tightening. Adding it here keeps the chain complete at
every commit, which is the discipline this project has held throughout. Ticket 07 keeps the two
capstones; its doorway criterion is satisfied early.

**The ticket-01 helper did its job.** The reading was placed by chapter index with no hand-rolled
slicing, and the array terminator survived. First real use.

**Density** 0.80x, 1.25x, 1.38x.