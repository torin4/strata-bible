// Every authored psalm, keyed by reading id. One file per run of psalms, grouped by the
// Psalter's five books; add each new file to the list below.
import type { ReadingThemes } from "@/content/themes";
import { PS_001_008 } from "./book-1/ps-001-008";
import { PS_009_017 } from "./book-1/ps-009-017";
import { PS_018_024 } from "./book-1/ps-018-024";
import { PS_025_032 } from "./book-1/ps-025-032";
import { PS_033_041 } from "./book-1/ps-033-041";
import { PS_042_048 } from "./book-2/ps-042-048";
import { PS_049_056 } from "./book-2/ps-049-056";
import { PS_057_064 } from "./book-2/ps-057-064";
import { PS_065_072 } from "./book-2/ps-065-072";
import { PS_073_076 } from "./book-3/ps-073-076";
import { PS_077_082 } from "./book-3/ps-077-082";
import { PS_083_087 } from "./book-3/ps-083-087";
import { PS_088_089 } from "./book-3/ps-088-089";
import { PS_090_095 } from "./book-4/ps-090-095";
import { PS_096_101 } from "./book-4/ps-096-101";
import { PS_102_106 } from "./book-4/ps-102-106";
import { PS_107_112 } from "./book-5/ps-107-112";
import { PS_113_118 } from "./book-5/ps-113-118";
import { PS_119 } from "./book-5/ps-119";
import { PS_120_134 } from "./book-5/ps-120-134";
import { PS_135_143 } from "./book-5/ps-135-143";
import { PS_144_150 } from "./book-5/ps-144-150";
import type { PsalmNotesMap } from "./types";

export const PSALM_NOTES: PsalmNotesMap = {
  ...PS_001_008,
  ...PS_009_017,
  ...PS_018_024,
  ...PS_025_032,
  ...PS_033_041,
  ...PS_042_048,
  ...PS_049_056,
  ...PS_057_064,
  ...PS_065_072,
  ...PS_073_076,
  ...PS_077_082,
  ...PS_083_087,
  ...PS_088_089,
  ...PS_090_095,
  ...PS_096_101,
  ...PS_102_106,
  ...PS_107_112,
  ...PS_113_118,
  ...PS_119,
  ...PS_120_134,
  ...PS_135_143,
  ...PS_144_150,
};

// The find-index entries of the psalm sittings, spread into READING_THEMES by content/themes.ts
// so that a sitting and its tags are written in the same place.
export const PSALMS_READING_THEMES: Record<string, ReadingThemes> =
  Object.fromEntries(
    Object.entries(PSALM_NOTES).flatMap(([id, notes]) =>
      notes.find ? [[id, notes.find]] : [],
    ),
  );
