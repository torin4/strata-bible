# Brief: writing Book III of the Psalms (Psalms 73 to 89)

You are writing commentary for STRATA, a Bible reading app, in the repo at
`/Users/joe/developer/personal/strata-bible`. Books I and II (Psalms 1 to 72) are finished and are your
model. You are one of four writers working in parallel on Book III; each of you owns one file.

## Read first

1. `.scratch/psalms/spec.md`: the plan for the whole book, especially Depth, Titles and Voice.
2. `content/psalms-notes/types.ts`: the shape of a psalm's notes.
3. `content/psalms-notes/book-2/ps-065-072.ts` and `ps-042-048.ts`: the model, written to the
   length this brief asks for. Psalms 65 and 72 are model sittings, Psalms 66 to 71 model grounded
   notes.
4. `content/psalms-notes/book-1/ps-001-008.ts`, for the range of Book I. Its sittings run long;
   do not copy their length.
5. `lib/types.ts`, for the field shapes (`GroundKind`, `AddrMode`, `Prayer`, `Misreading`,
   `Tension`, `Lenses`) and `content/themes.ts` for the `ThemeKey` list.

To print a psalm's BSB text with its heading: `pnpm exec tsx .scratch/psalms/show.ts 73 74`.
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

### Facts about Book III that you may need

- Psalms 73 to 83 are headed as Asaph's (Psalm 50 is the only other), after a guild of temple
  musicians that Chronicles traces to a Levite singer appointed in David's time (1 Chronicles
  16:4 to 7, 25:1 to 2). Psalms 84, 85, 87 and 88 are headed as the sons of Korah's, a family of
  temple singers; Psalm 86 is the only psalm in Book III headed as David's. Psalm 88 also names
  Heman the Ezrahite and Psalm 89 Ethan the Ezrahite, both named as wise men in 1 Kings 4:31.
- Psalms 73 to 83 are the end of the Elohistic Psalter (42 to 83), whose poets mostly use the
  general word for God (elohim). From Psalm 84 on the poets again use the divine name, which the
  BSB prints as "the LORD".
- Psalms 74 and 79 mourn the sanctuary burned and Jerusalem laid waste. Most scholars connect
  them with the Babylonian destruction of 586 BCE (2 Kings 25); say so as the scholars' view.
  Use 586 BCE, as the rest of the book does.
- Psalm 89 ends Book III. The poet recalls God's covenant with David (2 Samuel 7) and then asks
  why God has renounced it. Verse 52 is the editors' blessing that closes the book. The scholar
  Gerald Wilson argued that Books I to III trace the Davidic covenant to its failure in Psalm 89
  and that Books IV and V answer it by declaring that the LORD is king; paraphrase and attribute
  this, and note that not every scholar accepts it.
- Psalm 88 is the one lament in the Psalter with no turn to hope; it ends in darkness. Do not
  supply a turn the poet does not make. Sheol is the realm of the dead.
- Psalm 82 pictures God judging the gods, or divine beings, in a heavenly council. Scholars
  debate whether these are lesser gods, angels, or human judges; give the debate briefly. Jesus
  quotes verse 6 in John 10:34.
- Terms you may meet: Maskil (uncertain, perhaps a teaching or skillful song), Gittith (perhaps
  an instrument or tune from Gath), Jeduthun (a temple musician, 1 Chronicles 25), Mahalath
  Leannoth (uncertain, perhaps a tune), Rahab in Psalm 87 (a poetic name for Egypt) and in 89 (a
  sea monster of chaos). Say plainly when a term's meaning is unknown.

## Length: write to the norm, not the ceiling

This is the instruction most likely to go wrong. Book I's sittings came out too long, and the
owner has said that dense commentary is hard to read. For each sitting passage, the apparatus
(ground + meaning + lenses + misreading + tensions + addr + soft + ask + prayer) must be at most
1.6 times the psalm's scripture word count, and should aim near 1.5. `thread` and `closeEnd` are
not counted but keep them to two or three sentences. Budgets for the sittings:

| Sitting | Scripture words | Apparatus at most |
| --- | --- | --- |
| 73 | 379 | 605 |
| 74 | 368 | 590 |
| 82 | 112 | 180 |
| 84 | 232 | 370 |
| 88 | 283 | 450 |
| 89 | 796 | 1,100 (a long psalm does not need proportionally long notes; aim near 1.3) |

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
  never quoted. Good names for Book III: Tate (Psalms 51 to 100), Kraus, Mays, Goldingay,
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
