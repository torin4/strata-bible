# 05 — Book composition panel

**What to build:** The book-level "how it was written" overlay for Exodus, the counterpart to the
one the published book already carries. A reader who wants to know what kind of document they are
holding opens it and gets a straight answer, including the part most books avoid.

This is one of only two places in the whole movement where the evidentiary situation is stated.
It names the mainstream reconstruction plainly: there is no Egyptian record of the departure, no
archaeological trace of a mass migration through Sinai, and Israel most likely emerged largely
from within Canaan. It names, alongside it and with equal seriousness, the case for a small
historical core that the tradition grew from. The point is that the reader sees a live argument
rather than a verdict handed down.

Everywhere else, ground notes stay literary and concrete. A reader who never opens this panel
should not be repeatedly told the story may not have happened.

Attribution follows the movement's source register: the archaeological reconstruction and the
case for a historical core are both attributed to named scholars, paraphrased, never quoted.

**Blocked by:** 04 — Exodus skeleton.

**Status:** done

- [x] The book carries a composition panel, rendered by the existing overlay
- [x] It states how the book reached its final form, in the project's voice
- [x] It states the mainstream archaeological reconstruction plainly, without hedging
- [x] It names the serious case for a historical core alongside it, attributed, so the panel reads as an argument rather than a verdict
- [x] Sources are attributed and paraphrased, never quoted
- [x] No em dashes in authored copy
- [x] Typecheck, lint, tests, content validation and the build all pass

## Comments

**Four paragraphs, 343 words.** Longer than the Genesis introduction at 191, because that one is
an introduction and this one also carries the composition history and both sides of the evidence.
Trimmed from 362 by hand; nothing gates panel prose, since the density check measures passages
only.

**What it says.** What kind of book this is, including that nearly a third of it is instructions
for building a tent. That it is composite and does not hide it: Moses called twice in two voices,
the sea crossed both by a wind blowing all night and between walls of water, the Song in a Hebrew
centuries older than the prose around it. Then the reconstruction, stated without hedging: no
Egyptian record, nothing in Sinai, Israel emerging largely from within Canaan, and on the most
widely held reading the exodus at that scale did not happen. Then the counter-case at equal
weight: Egyptian detail a later Judean writer had little reason to know, Egyptian names including
Moses, and no nation inventing for itself an origin in which its ancestors were slaves.

**It closes on what is not in dispute**, which is what the story became: the founding memory of
the people who kept it, and the event the rest of the Bible keeps turning back to. That is the
sentence that keeps the panel an argument rather than a demolition.

**A test now guards the balance.** It asserts the panel names both Finkelstein and Hoffmeier and
carries attribution, so a later edit cannot quietly drop one side and leave a verdict.

**Verified in the production build**: the panel renders on the book page, and Exodus still does
not appear in /find, so the unpublished posture is intact.
