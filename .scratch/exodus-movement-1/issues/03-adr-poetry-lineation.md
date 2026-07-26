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

**Status:** ready-for-agent

- [ ] An ADR exists at the location the domain docs specify, numbered as the first decision record
- [ ] It states the decision: line breaks at the parallelism in authored poetry, flat text in the BSB lookup
- [ ] It states the alternative that was rejected, leaving verses unbroken as the existing fixture does, and why
- [ ] It names the consequence for Psalms and the outstanding debt on the existing lament fixture
- [ ] It names the mitigation: poems are authored whole, so broken and flat lines never mix in one passage
- [ ] It is written in the project's voice, with no em dashes in authored copy
