# 04 — Exodus skeleton: the movement, navigable end to end

**What to build:** A reader can open the first Exodus reading and move through all eleven, in
authored order, to the Song at the sea. Every reading shows real Berean Standard Bible scripture,
the full-text reveal works on the readings that select verses, and navigation never spills into
another book. The movement's situation panel grounds the whole stretch.

The book is created unpublished: absent from the landing page and from the find index, reachable
by direct URL for review, exactly as the existing genre-proof books behave. The existing
coming-soon announcement for Exodus stays as it is.

Every reading lands at the grounded tier, carrying clean scripture and a ground note with
meaning, turn and ask left empty, matching how the published book's grounded chapters already
behave. Each will flip to a sitting in the ticket that authors it. This ordering is forced: the
content validator fails any sitting that is not tagged in the find index, and that rule applies
to unpublished books too, so a reading may not become a sitting until the same change tags it.

Only the first movement is declared. The remaining three are absent from the codebase entirely,
because the validator fails a declared movement whose chapter range holds no readings, and the
first movement carries no doorway, because the validator fails a doorway pointing at a movement
that does not exist.

The eleven readings, in authored order, with the tier each will eventually reach:

| Reading | Span | Eventual tier | Note |
| --- | --- | --- | --- |
| `ex-1` | Exodus 1 | sitting | The midwives |
| `ex-2` | Exodus 2 | sitting | The basket, the flight to Midian |
| `ex-3` | Exodus 3 | sitting | The bush and the name |
| `ex-4` | Exodus 4 | grounded | Signs; the bridegroom of blood |
| `ex-5` | Exodus 5 | sitting | Bricks without straw |
| `ex-6` | Exodus 6 | grounded | I am the LORD; the genealogy |
| `ex-7` | Exodus 7–11 (selected) | sitting | The plague cycle, crossing chapters |
| `ex-12` | Exodus 12 | sitting | Passover |
| `ex-13` | Exodus 13 | grounded | The firstborn, the pillar of cloud |
| `ex-14` | Exodus 14 | sitting | The sea |
| `ex-15a` | Exodus 15:1–21 | sitting | The Song |

The plague reading holds one passage per chapter rather than one passage spanning five. This is
forced by the expansion module, which fills gaps only within a single chapter and only when
authored verse numbers ascend: a single passage running from the first plague to the last would
have non-ascending numbers and would silently lose the full-text reveal on the reading that
selects most heavily.

Scripture is materialised mechanically from the generated BSB lookup. The author chooses which
verses each passage shows; a script emits the verse text verbatim. No verse text is typed by
hand or from memory.

**Blocked by:** 01 — Per-book BSB generator and lookup registry. 02 — Verse-integrity invariant.

**Status:** done

- [x] The Exodus book exists, unpublished, and is absent from the landing page and the find index
- [x] All eleven readings are reachable by direct URL and render real BSB scripture
- [x] Only the first movement is declared, it carries no doorway, and it holds all eleven readings
- [x] The movement's situation panel is authored, grounding the Egypt behind the story, with sources attributed and never quoted
- [x] Every reading is at the grounded tier, with meaning, turn and ask empty, rendering gracefully
- [x] The plague reading holds one passage per chapter and its full-text reveal works on each
- [x] All verse text is materialised mechanically from the BSB lookup and passes the verse-integrity invariant on arrival
- [x] Navigation runs from the first reading through to the Song in authored span order, with no previous before the first and no next after the last
- [x] Tests cover: the eleven readings resolve by id, adjacency runs first to last without leaving the book, and the movement lookup resolves
- [x] Typecheck, lint, tests, content validation and the build all pass
- [x] The density gate is run and its output reviewed, even though it cannot fail for an unpublished book

## Comments

**Shape delivered.** 11 readings, 15 passages, 261 verses. All 261 verified verbatim against the
BSB by the ticket-02 invariant, which now reports 847 verses across the repo. Density for Exodus
is 0.1x, far under any ceiling, as expected for scripture with only a ground note around it.

**How the scripture was materialised.** A one-shot generator held the reading map, verse
selections and authored ground notes, and pulled every verse from the BSB lookup. It was run
once and deleted, the same convention the BSB migration used. It is in git history if the
skeleton ever needs rebuilding, but from here `content/exodus.ts` is hand-authored and must not
be regenerated: tickets 06 to 10 add the layers, and regenerating would destroy them.

**The plague reveal works.** Each of the five per-chapter passages fills against its own chapter:
7 reveals 15,16,18,19,22,23 · 8 reveals 13 verses · 9 reveals 15 · 10 reveals 19 · 11 reveals
2,3,7,8. A single passage spanning 7 to 11 would have revealed nothing at all.

**Biome.** `content/exodus.ts` was added to the ignore list beside `genesis.ts` and `seed.ts`;
the formatter wants four lines per verse, which is why those two were already exempt.

**Reviewing this work requires signing in.** Exodus is behind the paywall by default: the free
rule is Genesis's primeval movement only, and this ticket changed no access or pricing rule. The
prerendered `ex-1` page is the locked shell at 25,543 bytes, which is the same shape as the
existing paid `gen-12` at 25,550. Not a defect, and not new, but the comped account is needed to
read what was built.

**Finding, out of scope, worth its own ticket.** The whole book corpus ships in the client
bundle. `ContinueReading` and `MenuDrawer` are client components importing `findReadingAnywhere`
from the content lib, which pulls `BOOKS`, which pulls every book's full text. This predates this
ticket, Genesis was already in there, but Exodus added roughly 16 kB to the reader route's first
load and that will grow with every reading authored and every book added. The generated BSB
lookups are unaffected and remain server-side, as ticket 01 guaranteed.
