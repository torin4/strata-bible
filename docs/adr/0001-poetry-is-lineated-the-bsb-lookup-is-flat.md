# Poetry is lineated, and the BSB lookup stays flat

Scripture is authored as one string per verse, and the reader splits a poetry verse on newlines
to make lines, so lineation has always been available and has never been used: every passage in
the published book is a narrative scene. The Song of the Sea in Exodus 15 is the first poem
STRATA publishes, and Psalms is a hundred and fifty more behind it, so the choice made once here
is the house style. We decided that authored poetry carries line breaks inserted at the
parallelism, so that couplets stand as couplets, while the generated Berean Standard Bible
lookup stays flat, one unbroken string per verse.

Line-breaking a public domain text is formatting rather than translation, so the licensing rule
is untouched.

## Considered options

**Leave verses unbroken, one stanza per verse.** This is what the existing unpublished lament
fixture does, and it already reads as poetry in the current renderer. Rejected because
parallelism is the engine of Hebrew verse. The second half of a line answers the first, and a
reader who cannot see where one ends loses the argument the poem is making. A hundred and fifty
psalms set as paragraphs would be the single largest loss of meaning in the app.

**Lineate the BSB lookup too, so both sides match.** Rejected because it means encoding
line-break rules for the whole Bible in a generator, which is a translation-editorial judgement
made mechanically, at scale, with no reader ever checking it. Poetry gets lineated by the person
authoring the sitting, who is reading it, or not at all.

## Consequences

Authored poetry verses contain newlines that the lookup for the same verse does not. Anyone
comparing the two will find them different, and that difference is intentional.

The verse-integrity check in the content validator therefore compares on collapsed whitespace.
Without that it would reject every lineated verse, since a line break sits where the lookup holds
a space. This was found by testing the rule against the gate before any poetry was authored, and
the gate was amended in the same change that recorded this decision. Every word, and its order,
is still fully enforced.

The reader's full-text reveal fills omitted verses from the flat lookup, so a partly authored
poem would render authored lines broken and revealed lines unbroken, in the same passage. The
mitigation is a rule rather than code: poems are authored whole, with no omitted verses, so the
two never appear together. A poem too long to author whole would need this decision revisited.

The existing lament fixture is left unbroken and is now inconsistent with the house style. It is
a genre proof, unpublished, and repaying it belongs with the work that authors Psalms properly.
