# 01 — Per-book BSB generator and lookup registry

**What to build:** The full-text pipeline stops being Genesis-shaped. Today the generator that
turns the Berean Standard Bible source into a lookup module is hardcoded to Genesis, and the
expansion module that reveals the verses a curated sitting omits imports that one lookup
directly and refuses every other book by name. After this ticket, the generator takes a book
name and an expected verse count and emits one generated lookup module per book, Exodus has been
generated, and the expansion module resolves lookups through a book-id registry.

Nothing a reader can see changes. This is the prefactor that makes the Exodus content possible:
make the change easy, then make the easy change.

The generated Exodus lookup is server-side data and must not reach the client bundle, exactly as
the Genesis one does not today.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

- [ ] The generator is parameterised by book name and expected verse count, rather than hardcoded to one book
- [ ] The generator still refuses to emit when the source yields an unexpected verse count, so a truncated download cannot produce a plausible-looking file
- [ ] Regenerating Genesis produces a byte-identical file to the one committed today
- [ ] An Exodus lookup module is generated and committed, covering all 1,213 verses
- [ ] The expansion module resolves a book's lookup through a book-id keyed registry instead of a direct import
- [ ] A reading whose book has no registered lookup is returned untouched, preserving today's behaviour for every non-Genesis book
- [ ] Every existing expansion test passes unchanged
- [ ] The generated Exodus text stays server-side and does not enter the client bundle
- [ ] Typecheck, lint, tests, content validation and the build all pass
