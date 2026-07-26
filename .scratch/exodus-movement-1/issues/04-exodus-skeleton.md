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

**Status:** ready-for-agent

- [ ] The Exodus book exists, unpublished, and is absent from the landing page and the find index
- [ ] All eleven readings are reachable by direct URL and render real BSB scripture
- [ ] Only the first movement is declared, it carries no doorway, and it holds all eleven readings
- [ ] The movement's situation panel is authored, grounding the Egypt behind the story, with sources attributed and never quoted
- [ ] Every reading is at the grounded tier, with meaning, turn and ask empty, rendering gracefully
- [ ] The plague reading holds one passage per chapter and its full-text reveal works on each
- [ ] All verse text is materialised mechanically from the BSB lookup and passes the verse-integrity invariant on arrival
- [ ] Navigation runs from the first reading through to the Song in authored span order, with no previous before the first and no next after the last
- [ ] Tests cover: the eleven readings resolve by id, adjacency runs first to last without leaving the book, and the movement lookup resolves
- [ ] Typecheck, lint, tests, content validation and the build all pass
- [ ] The density gate is run and its output reviewed, even though it cannot fail for an unpublished book
