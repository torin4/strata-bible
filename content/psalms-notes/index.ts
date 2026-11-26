// Every authored psalm, keyed by reading id. One file per run of psalms, grouped by the
// Psalter's five books; add each new file to the list below.
import type { ReadingThemes } from "@/content/themes";
import { PS_001_008 } from "./book-1/ps-001-008";
import { PS_009_017 } from "./book-1/ps-009-017";
import { PS_018_024 } from "./book-1/ps-018-024";
import { PS_025_032 } from "./book-1/ps-025-032";
import { PS_033_041 } from "./book-1/ps-033-041";
import type { PsalmNotesMap } from "./types";

export const PSALM_NOTES: PsalmNotesMap = {
  ...PS_001_008,
  ...PS_009_017,
  ...PS_018_024,
  ...PS_025_032,
  ...PS_033_041,
};

// The find-index entries of the psalm sittings, spread into READING_THEMES by content/themes.ts
// so that a sitting and its tags are written in the same place.
export const PSALMS_READING_THEMES: Record<string, ReadingThemes> =
  Object.fromEntries(
    Object.entries(PSALM_NOTES).flatMap(([id, notes]) =>
      notes.find ? [[id, notes.find]] : [],
    ),
  );
