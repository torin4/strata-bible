# 01 — Density gate counts per-item apparatus

**What to build:** The number the density gate reports about a page of law becomes true.

Today the gate measures a passage's ground, meaning, lenses, symbols, misreading, tensions, turn,
soft, ask and prayer. It does not look at per-item annotations at all. Every passage in the book
so far is a narrative scene, which carries none, so the omission has never mattered. A
statute-cluster carries most of its apparatus in exactly those per-item fields: a chip on one law,
a gloss on another, over and over down the list. Shipped as it stands, a page covered in
commentary would report a comfortable ratio.

This matters more than it looks. The gate was retuned from a distant 2.5x backstop to a 1.8x
target precisely because writing to a number that did not reflect what a reader reads produced
prose that passed every check and still read as wordy. That correction only holds while the gate
counts what is actually on the page.

Per-item address text and gloss notes join the apparatus count. The baseline is refreshed
afterward so that existing passages keep their current ceilings and only new work is held to the
new counting.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

- [ ] Per-item address text and per-item gloss notes are counted as apparatus
- [ ] Demonstrated by adding a per-item annotation to a passage locally and observing the reported ratio rise, then reverting
- [ ] The baseline is refreshed so no existing passage newly fails, and the refresh is committed
- [ ] The failure threshold itself is unchanged; only what the gate counts changes
- [ ] The gate still passes across the whole repo
- [ ] Typecheck, lint, tests, content validation and the build all pass
