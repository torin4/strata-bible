# Brief: writing Book II of the Psalms (Psalms 42 to 72)

You are writing commentary for STRATA, a Bible reading app, in the repo at
`/Users/joe/developer/personal/strata-bible`. Book I (Psalms 1 to 41) is finished and is your
model. You are one of four writers working in parallel on Book II; each of you owns one file.

## Read first

1. `.scratch/psalms/spec.md`: the plan for the whole book, especially Depth, Titles and Voice.
2. `content/psalms-notes/types.ts`: the shape of a psalm's notes.
3. `content/psalms-notes/book-1/ps-001-008.ts` and `ps-009-017.ts`: the model. Psalm 1 and Psalm 8
   are model sittings, Psalm 3 a model grounded note, and `ps-9` a reading with two passages.
4. One more Book I file of your choice, to see the range.
5. `lib/types.ts`, for the field shapes (`GroundKind`, `AddrMode`, `Prayer`, `Misreading`,
   `Tension`, `Lenses`) and `content/themes.ts` for the `ThemeKey` list.

To print a psalm's BSB text with its heading: `pnpm exec tsx .scratch/psalms/show.ts 42 43`.
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

### Facts about Book II that you may need

- Psalms 42 to 83 are often called the Elohistic Psalter: their poets mostly use the general word
  for God (elohim) where the rest of the Psalter uses the divine name, which the BSB prints as
  "the LORD". Psalm 53 is Psalm 14 with that change made, and Psalm 70 repeats Psalm 40:13 to 17.
- Psalms 42 to 49 are headed as the sons of Korah's, Psalm 50 as Asaph's, Psalms 51 to 65 and 68
  to 70 as David's, Psalm 72 as Solomon's. Book II closes at 72:18 to 20 with a blessing and the
  note "Thus conclude the prayers of David son of Jesse."
- Several Davidic headings name an occasion in David's life (51, 52, 54, 56, 57, 59, 60, 63).
  Identify the story in 1 or 2 Samuel by chapter, and say that most scholars think editors added
  these links later.
- Psalms 42 and 43 are one poem with a shared refrain, held in one reading (`ps-42`) as two
  passages. Give each passage its own `title`.

## Length: write to the norm, not the ceiling

This is the instruction most likely to go wrong. Book I's sittings came out too long, and the
owner has said that dense commentary is hard to read. For each sitting passage, the apparatus
(ground + meaning + lenses + misreading + tensions + addr + soft + ask + prayer) must be at most
1.6 times the psalm's scripture word count, and should aim near 1.5. `thread` and `closeEnd` are
not counted but keep them to two or three sentences. Budgets for the sittings:

| Sitting | Scripture words | Apparatus at most |
| --- | --- | --- |
| 42 (first passage) | 257 | 410 |
| 43 (second passage of ps-42) | 122 | 195 |
| 45 | 298 | 475 |
| 46 | 183 | 290 |
| 49 | 304 | 485 |
| 51 | 308 | 490 |
| 63 | 189 | 300 |
| 65 | 231 | 370 |
| 72 | 353 | 565 |

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
  never quoted. Good names for Book II: Craigie, Tate (Psalms 51 to 100), Kraus, Mays, Goldingay,
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
