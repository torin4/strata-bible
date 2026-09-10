# 02 — Author Ecclesiastes 1, the poem and the argument

**What to build:** The first sitting, and the first passage in a published STRATA book that is not
a narrative scene.

Two passages, two kinds. 1:1–11 is a `poem` in `poetry` form, lineated at the parallelism and
authored whole per ADR 0001: the superscription, the thesis, and the poem about generations,
sun, wind and rivers that ends with nothing new under the sun. 1:12–18 is an `argument` in `prose`
form: the Teacher says what he set out to do and what it cost him.

This reading carries the book's vocabulary note, and carries it once. `Hevel`, which the BSB gives
as futility and other translations give as vanity, meaningless, breath or absurd, literally means
vapour: the thing you can see and cannot hold. Say it here, plainly, and then trust it for eleven
chapters rather than re-explaining it.

Two misreadings compete for this reading and only one can have it. Nothing new under the sun is
routinely read as world-weary cynicism when the poem is describing something closer to a closed
system. And much wisdom brings much sorrow is read as an argument against learning. The first is
load-bearing because it governs how the whole book is heard.

This is the voice gate and the kind gate. Stop here for review before chapters 2 to 4 are written.

**Blocked by:** 01.

**Status:** done

- [x] `ecc-1` is a sitting in two passages, one `poem` and one `argument`
- [x] The poem is lineated at the parallelism and authored whole
- [x] The ground note explains `hevel` once, concretely
- [x] The misreading names the cynicism reading and says what the poem is actually describing
- [x] Exactly one turn, on the closing passage, mode `claims`
- [x] Tagged in the find index in the same change
- [x] Scripture materialised verbatim and passing the verse-integrity invariant
- [x] Sources attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] No passage exceeds the density target on its own merits
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Two kinds in one reading, and both are firsts for a published book here.** `poem` in `poetry`
form for 1:1-11, and `argument` in `prose` form for 1:12-18. Four books of pure `scene` had made the
renderer's genre claim untestable; there is now a test asserting the published catalogue uses more
than one kind, so a regression in a kind only one book uses cannot pass silently.

**The lineation cannot corrupt the text.** The generator has a `lineate` helper that inserts breaks
after named substrings and then asserts the result is identical to the BSB with whitespace
collapsed. A bad marker throws at build time instead of shipping a mangled verse. Verified
separately too: all eleven verses lineated, every word matching the BSB exactly.

**`hevel` is explained once and then trusted.** Vapour, or breath: the thing you can see and cannot
hold. The ticket asked for that and the risk was re-explaining it every chapter, so the royal-pose
material that was originally in this ground note moved to the passage where it belongs.

**The misreading is the one that governs the whole book.** Nothing new under the sun read as
world-weariness turns twelve chapters into a mood. The poem is describing a closed system, and every
image in it is of something moving hard and arriving nowhere. And the poem does not end on novelty.
It ends on being forgotten.

**Turn mode is `claims`**, which is a change from the four narrative books and follows the kind
table. It does not console. It agrees that you can understand the situation and tells you the
purchase is not included.

**Density** 1.5x on the poem after one trim, 1.2x on the argument.
