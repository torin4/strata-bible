// The commentary for a psalm, kept apart from its scripture. content/psalms.ts builds every
// reading from the generated BSB text and lays these notes over it, so no verse is ever typed
// in a notes file. See .scratch/psalms/spec.md.
import type { ReadingThemes } from "@/content/themes";
import type { Passage } from "@/lib/types";

// The authored layers of one passage. `title` is needed only where a reading holds more than one
// passage (Psalms 9–10, 42–43); a single-psalm reading's passage takes the reading's title, and
// a stanza of Psalm 119 keeps its Hebrew letter.
export type PassageNotes = Partial<
  Pick<
    Passage,
    | "title"
    | "ground"
    | "misreading"
    | "meaning"
    | "lenses"
    | "tensions"
    | "addr"
    | "soft"
    | "ask"
    | "prayer"
    | "inTextTurn"
  >
>;

export interface PsalmNotes {
  tier: "sitting" | "grounded";
  title: string; // STRATA's own title, replacing the BSB's working title
  thread?: string;
  closeEnd?: string;
  passages: PassageNotes[]; // one per passage of the reading, in order
  find?: ReadingThemes; // a sitting's entry in the find index; required for every sitting
}

// Keyed by reading id: "ps-1", "ps-9" (Psalms 9–10), "ps-119a".
export type PsalmNotesMap = Record<string, PsalmNotes>;
