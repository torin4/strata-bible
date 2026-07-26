# 03 — ADR: poetry lineation as house style

**What to build:** The decision about how STRATA sets poetry, written down before any poetry is
authored against it.

Every passage in the published book is a narrative scene. The Song of the Sea will be the first
poem STRATA publishes, and the choice made there governs Psalms, which is a hundred and fifty
poems. The decision: authored poetry carries line breaks inserted at the parallelism, so couplets
stand as couplets, while the BSB lookup used to reveal omitted verses stays flat. A future reader
will notice that authored verses contain line breaks the lookup does not and will want to know
why, which is exactly what an ADR is for.

Record the trade-off honestly: the existing unpublished lament fixture leaves its verses unbroken,
so the two styles differ until that fixture is repaid, and the mitigation is that poems are
authored whole with no omitted verses, so a broken authored line and a flat filled line never
appear in the same passage.

This is the repo's first ADR, so it establishes the numbering and the location described in the
domain docs.

**Blocked by:** None — can start immediately.

**Status:** done

- [x] An ADR exists at the location the domain docs specify, numbered as the first decision record
- [x] It states the decision: line breaks at the parallelism in authored poetry, flat text in the BSB lookup
- [x] It states the alternative that was rejected, leaving verses unbroken as the existing fixture does, and why
- [x] It names the consequence for Psalms and the outstanding debt on the existing lament fixture
- [x] It names the mitigation: poems are authored whole, so broken and flat lines never mix in one passage
- [x] It is written in the project's voice, with no em dashes in authored copy

## Comments

**This ticket was not documentation-only, in the end.** Writing the decision down meant testing
whether it could actually be implemented, and it could not. The verse-integrity gate shipped in
ticket 02 compares authored text to the BSB lookup, and a lineated verse holds a line break
exactly where the lookup holds a space. Verified by lineating Genesis 1:1 and running the
validator: it failed. Every poetry verse in the book would have failed the build.

The gate now compares on collapsed whitespace, so lineation is invisible to it while every word
and its order stay fully enforced. Verified three ways: a lineated verse passes, a verse drifted
toward a KJV-style phrasing still fails, and the clean tree reports 586 verses verified.

This is the reason the ticket was sequenced before the Song rather than alongside it. Authoring
the poem first would have surfaced the same conflict as a mysterious red build in ticket 09, with
a half-written poem in the working tree.

**Follow-on for ticket 09.** The mitigation that poems are authored whole is a rule, not code.
Nothing enforces it. If the Song is ever authored with omitted verses, the reader will render
authored lines broken and revealed lines flat in the same passage.
