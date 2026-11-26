# Brief: writing Books IV and V of the Psalms (Psalms 90 to 150)

You are writing commentary for STRATA, a Bible reading app, in the repo at
`/Users/joe/developer/personal/strata-bible`. Books I to III (Psalms 1 to 89) are finished and are your
model. You are one of nine writers working in parallel on Books IV and V; each of you owns one
file, and your task message names your range, your sittings and their budgets.

## Read first

1. `.scratch/psalms/spec.md`: the plan for the whole book, especially Depth, Titles and Voice.
2. `content/psalms-notes/types.ts`: the shape of a psalm's notes.
3. `content/psalms-notes/book-3/ps-073-076.ts` and `ps-083-087.ts`, and
   `content/psalms-notes/book-2/ps-065-072.ts`: the model, written to the length this brief asks
   for. Psalms 73, 84 and 72 are model sittings, Psalms 75, 85 and 66 to 71 model grounded notes.
4. `content/psalms-notes/book-1/ps-001-008.ts`, for the range of Book I. Its sittings run long;
   do not copy their length.
5. `lib/types.ts`, for the field shapes (`GroundKind`, `AddrMode`, `Prayer`, `Misreading`,
   `Tension`, `Lenses`) and `content/themes.ts` for the `ThemeKey` list.

To print a psalm's BSB text with its heading: `pnpm exec tsx .scratch/psalms/show.ts 90 91`.
Write from the BSB text the app actually uses, and quote only those words.

## What to write

For every reading in your range: a STRATA `title` and a hand-written `ground` note with a `src`.
For each sitting: also a `thread`, a `meaning`, an `addr` (the turn), an `ask` and/or a `prayer`,
and a `find` entry (`themes` from the `ThemeKey` list, one to three, and a `speaksTo` line that
starts "For when"). Add `lenses`, `tensions` or a `misreading` only where the psalm earns them.
`closeEnd` and `inTextTurn` are optional; use `inTextTurn` only where the poet clearly turns at a
verse. A sitting needs one `addr` across the whole reading, not one per passage.

The ground note says who the heading names and what scholars think of the heading, what kind of
psalm this is, and anything a reader needs in order to follow it (who is speaking, an obscure
term, the place or event behind it). Grounded notes run 80 to 110 words. Most scholars hold that
the headings were added by later editors; say so honestly when it matters, without dismissing
them, since they record how ancient Israel read the poem.

### Facts about Books IV and V that you may need

- Book IV runs from Psalm 90 to 106 and closes with the editors' blessing at 106:48. Book V runs
  from 107 to 150, and Psalm 150 as a whole closes it and the Psalter. Most psalms in these books
  have no heading at all; say so plainly rather than inventing an author. Psalm 90 is the only
  psalm headed as Moses's.
- The scholar Gerald Wilson argued that Books IV and V answer the collapse of David's kingship
  mourned in Psalm 89 by turning to Moses and to the kingship of the LORD himself. Book III's
  notes already explain this; mention it only where your psalm needs it, briefly and attributed.
- Psalms 93 and 95 to 99 are often called the enthronement psalms, several opening with "The LORD
  reigns". Sigmund Mowinckel proposed that Israel celebrated the LORD's enthronement at an autumn
  festival; many scholars doubt it. Give it only as his proposal.
- Psalms 113 to 118 are the Egyptian Hallel, sung at Passover in later Jewish practice; Psalms
  120 to 134 are the Songs of Ascents, which most scholars think pilgrims sang going up to
  Jerusalem for the festivals; Psalms 146 to 150 each begin and end with "Hallelujah", which means
  "Praise the LORD". Psalms 138 to 145 are a last collection headed as David's.
- Psalm 119 and Psalms 111, 112 and 145 are acrostics: their lines or stanzas begin with the
  letters of the Hebrew alphabet in order. Say so where it matters.
- Earlier books already credit C.S. Lewis with these ideas, so do not credit them to him again:
  that Psalm 19 is the greatest poem in the Psalter, that the poets did not separate loving God
  from enjoying the temple, and that most psalmists expected no life after death. Lewis's
  chapter on the cursing psalms and his chapter on delight in the law are open to use where you
  are confident of what he argued.

## Length: write to the norm, not the ceiling

This is the instruction most likely to go wrong. Book I's sittings came out too long, and the
owner has said that dense commentary is hard to read. For each sitting passage, the apparatus
(ground + meaning + lenses + misreading + tensions + addr + soft + ask + prayer) must be at most
1.6 times the psalm's scripture word count, and should aim near 1.5. `thread` and `closeEnd` are
not counted but keep them to two or three sentences. Budgets for the sittings:

Your task message gives the budget for each of your sittings.

Check with `pnpm exec tsx .scratch/psalms/stats.ts <first> <last>` (it prints each passage's
ratio). If you are over, cut whole ideas, not words: drop a lens, a tension, or a second point in
the meaning. Fewer ideas, plainly connected, is the goal.

## Voice (the owner's rules, strictly applied)

- Plain, flowing prose between C.S. Lewis and Tolkien, for a reader who knows nothing yet. The
  psalm is the poetry; the commentary is plainer than it, never more lyrical.
- Complete, connected sentences. No fragments, no taglines, no rhetorical one-liners. Join
  related thoughts with conjunctions and subordinate clauses rather than runs of short sentences.
- Give context before relying on it. Never assume the reader knows who Korah, Asaph, Uriah or
  Doeg were, or what Zion or Sheol is: say it the first time in each note.
- **A person does every action.** Never "the psalm says", "the heading names", "the text
  shows", "the poem turns", "the refrain asks", "the image suggests". Write "the poet says",
  "the editors named", "the poet turns". The actors available are God, the poet, the people in
  the psalm, the editors, scholars, translators, and the reader. This is the rule the owner cares
  about most; check every sentence for it.
- No em dashes anywhere. Use commas and periods. No en dashes in prose either; in verse ranges
  inside prose write "verses 1 to 5" and in `where` fields "Psalm 42:5–6" as Book I does.
- Use curly quotes and apostrophes (“ ” ’) as Book I does. Write BCE and CE. Refer to God's name
  as "the LORD" when quoting or following the BSB.
- Never use emojis.

## Scripture and scholars (absolute rules)

- Quote Scripture only from the BSB, and only words that appear in the BSB text the show script
  prints (or, for cross references, the BSB). Never quote or paraphrase closely from NIV, ESV,
  NRSV, NASB, Alter's translation or any other licensed version.
- Scholars are paraphrased and cited by surname in `src` (for example "Kraus · Tate · Mays"),
  never quoted. Good names for Books IV and V: Tate (Psalms 51 to 100), Allen (Psalms 101 to 150), Kraus, Mays, Goldingay,
  Hossfeld and Zenger, Gunkel, Westermann, Brueggemann, Wilson, Alter (his notes, never his
  translation), Childs.
- C.S. Lewis (Reflections on the Psalms) may be paraphrased only where you are confident of what
  he actually argued, and every Lewis attribution must be listed in your report so the owner can
  check it against the book. Nothing may be attributed to Tolkien.
- If you are unsure of a fact, leave it out rather than guess, and mention it in your report.

## Rules for working

- Edit only your own file. Do not touch any other file, and do not run git.
- Write your whole file in one Write call (others are validating against the same tree), then
  revise it with Edit. Keep the existing export name. Put a short comment at the top as Book I's
  files do, naming the range and its sittings.
- When done, run, in this order, and fix anything they report in your file:
  1. `pnpm exec biome check --write <your file>`
  2. `pnpm typecheck`
  3. `pnpm validate-content`
  4. `pnpm exec tsx .scratch/psalms/stats.ts <first> <last>`
  If a failure is in another writer's file, ignore it and say so.
- Then reread every sentence once more for the agency rule, fragments and dashes.

## Your report

Keep it short: the readings you wrote; each sitting passage's scripture words, apparatus words and
ratio from the stats script; every Lewis attribution with what you attributed; any fact you were
unsure of or left out; and the result of the four checks.
