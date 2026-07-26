# 09 — Author `ex-13`, `ex-14`, and the Song

**What to build:** The sea, and the song on the far side of it. Three readings: the firstborn and
the pillar of cloud, which stays grounded; the sea, which becomes a sitting; and the Song, which
becomes STRATA's first published poem.

The sea reading is the one most readers arrive already knowing, which is its difficulty. Its turn
names something already true of the reader: the position with the water in front and the army
behind, where standing still and going forward both look impossible.

The Song is the first passage in the published app that is not a narrative scene. It is set as
poetry, lineated at the parallelism so its couplets stand as couplets, per the decision recorded
in the ADR that gates this ticket. It is authored whole, with no omitted verses, so a broken
authored line and a flat filled line never appear in the same passage. Its in-text turn is marked
at the point where the poem stops recounting what happened and starts pointing at where they are
going.

Its turn hands the words to the reader to pray rather than naming or demanding. A song of rescue
becomes the reader's own or it stays a report of someone else's.

It also carries a tension. The Song celebrates over drowned men, and the movement does not get to
close on that note without naming it. Do not resolve it here.

**Blocked by:** 08 — Author `ex-7` through `ex-12`. 03 — ADR: poetry lineation as house style.

**Status:** done

- [x] The firstborn and pillar of cloud reading stays grounded, with its middles left for the companion
- [x] The sea becomes a sitting whose turn names rather than demands
- [x] The Song is authored as a poem, in poetry form, lineated at the parallelism per the ADR
- [x] The Song is authored whole, with no omitted verses, so no filled line ever sits beside a broken one
- [x] Its in-text turn is marked at the verse where the poem turns
- [x] Its turn hands the words to the reader to pray
- [x] It carries a tension on singing over drowned men, left unresolved
- [x] Both sittings are tagged in the find index in the same change that makes them sittings
- [x] The poem renders correctly in the reader, with its lines breaking as authored and its turn marked
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] The density gate is run and no new passage exceeds the failing ratio on its own merits
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Lineation was done mechanically, never by retyping.** A script reads each verse from the BSB
lookup and inserts a break before named phrases, then asserts that collapsing the whitespace
reproduces the BSB exactly. 18 of 21 verses carry breaks; verses 19 and 20 are narrative framing
around Miriam and stay unbroken on purpose. Rendering verified in the production build: 32 line
breaks, and "The LORD is a warrior, / the LORD is His name" comes out as a couplet.

**The assertion earned its place immediately.** Verse 17's intended break followed an em dash
rather than a space, so inserting a line break there would have added whitespace the BSB does
not have. The script refused. The break moved, and a specific guard now rejects any break that
does not fall on an existing space.

**The in-text turn is verse 13**, where the song stops recounting the sea and starts looking
forward to a mountain and a sanctuary the story has not reached. The turn mode is `pray`, the
first in the movement, handing the words over rather than explaining them.

**The unenforced rule from ticket 03 is now enforced.** ADR 0001 said poems are authored whole so
a flat filled line can never land beside a broken one, and nothing checked it. The content
validator now fails a lineated poem whose verse numbers skip. Proved by deleting verse 5 and
watching it fail by name, then reverting.

**A mistake, and what it cost.** Reverting that temporary verse deletion with a checkout of the
whole content file discarded every uncommitted change in it, wiping this ticket's authoring of
the sea and the Song. Recovery took one command because the lineation is scripted and the
apparatus edits were reproducible, and the other four files were untouched. The lesson is to
revert a scratch mutation with the inverse edit, never with a checkout of a file that also holds
real work. The lineation script is kept rather than deleted for this reason among others: it is
idempotent, it reads words from the BSB rather than from the content file, and Psalms will want
it.
