// STRATA content schema — canonical.
// Genre-tested across narrative, poetry, law, epistle, wisdom, and apocalyptic.
//
// The four layers (history -> meaning -> turn -> response) are universal and never change.
// What varies by genre lives in a handful of axes: kind, span, ground.kind, addr.mode,
// form, misreading, tensions, symbols. A narrative scene is simply the default value of
// every axis, so existing Genesis content ports onto this schema with zero rework.

export type PassageKind =
  | 'scene'            // narrative
  | 'poem'             // psalm, lament, song
  | 'statute-cluster'  // law
  | 'oracle'           // prophecy
  | 'argument'         // epistle
  | 'vision'           // apocalyptic
  | 'saying-cluster';  // proverbs, wisdom

export type Form = 'prose' | 'poetry' | 'list';

export type Tier = 'sitting' | 'grounded' | 'plain';

export type GroundKind = 'historical' | 'setting' | 'occasion' | 'genre';

export type AddrMode =
  | 'names'     // narrative: names something already true of you
  | 'pray'      // poem: becomes your own words
  | 'claims'    // law / epistle / wisdom: makes a demand on you
  | 'none-but'  // law that does not bind you, but is worth seeing
  | 'reframes'; // apocalyptic: changes how you see your present

export interface Verse {
  n: number;
  text: string; // your own translation, always
}

export interface Ground {
  kind: GroundKind;
  text: string;
  src?: string; // "von Rad · Alter"
}

export interface Lenses {
  theo?: string;
  arch?: string; // the UI always appends the caveat line
}

export interface Address {
  mode: AddrMode;
  text: string;
}

// One load-bearing misreading per passage. Deliberately singular: name the one that
// does the most damage, do not bury the reader in caveats.
export interface Misreading {
  named: string; // the misreading, stated plainly
  why: string;   // why it fails, in your own words
}

// Where the canon argues with itself. The honest answer to a wisdom promise is often
// another text that breaks it. "Another text" means a different book (Proverbs vs Job)
// OR another voice inside the same book (Job's friends vs the whirlwind; Job's prose
// frame vs its poetry). This is the field that lets STRATA refuse to flatten Scripture
// into one voice.
export interface Tension {
  claim: string;   // what this passage or voice asserts
  counter: string; // how another text or voice pushes back
  where: string;   // "Job 1–2", "Ecclesiastes 2:14–16", "Job 3–41 vs 42:10–17"
}

// Image -> what it meant to the first audience. For vision and oracle. Framed as
// resonances the original readers could decode, NOT a timeless cipher.
export interface SymbolGloss {
  image: string;
  meant: string;
  note?: string;
}

// Per-item annotation inside a statute-cluster or saying-cluster.
export interface ItemNote {
  addr?: Address; // a per-item turn (e.g. Lev 19:18 "claims you" vs 19:19 "none-but")
  note?: string;  // a short gloss (e.g. "Job will break this verse in half")
}

// A Passage is the atomic reading unit. The four layers live here.
// `kind` drives display and which layer leads; the layers themselves are constant.
// meaning / addr / ask are optional because grounded-tier passages leave them for
// the companion to draft. A sitting-tier passage fills them.
export interface Passage {
  ref: string;  // "15:1–6", "Psalm 13", "Romans 7:14–25"
  kind: PassageKind;
  form: Form;
  title: string;

  verses?: Verse[];                  // prose / poetry / vision
  statutes?: Verse[];                // statute-cluster
  sayings?: Verse[];                 // saying-cluster (same rendering as statutes)
  perItem?: Record<number, ItemNote>;// per-item notes for either cluster type

  ground?: Ground;                   // poems may lead with genre or skip it
  symbols?: SymbolGloss[];           // vision / oracle image glossary
  misreading?: Misreading;           // first-class, singular, load-bearing
  meaning?: string;                  // the always-present layer for sittings
  lenses?: Lenses;
  tensions?: Tension[];              // where the canon argues back
  addr?: Address;                    // the turn
  soft?: string;
  ask?: string;

  inTextTurn?: number;               // verse where the text itself turns (Ps 13:5)
  label?: string;                    // narrative scene label: "One", "Two"
}

// A Reading is what the user sits with. It can hold one passage (a poem, a cluster,
// an argument, a vision) or several (a multi-scene sitting).
// `span` is the source of truth for what to read and MAY cross chapter boundaries.
// `chapterIndex` exists for lookup and navigation only. It is NOT the unit of meaning.
export interface Reading {
  id: string;                 // "gen-15", "ps-13", "lev-19", "rom-7", "prov-10", "rev-13"
  bookId: string;
  tier: Tier;
  span: string;               // "Genesis 15", "Romans 7:1–8:4"
  chapterIndex: number;       // nav/lookup only
  crossesChapters?: boolean;  // true for most epistles and prophets
  title: string;
  unitLabel?: 'Day' | 'Scene';
  thread?: string;
  closeMid?: string;
  closeEnd?: string;
  passages: Passage[];
}

// ---------------------------------------------------------------------------
// Movement layer. The container above Reading.
// A composite book like Job is modeled as ONE movement whose readings switch
// genre (prose frame -> poetic dispute -> divine speech), and whose Capstone
// carries the meaning of the whole, which no single reading holds on its own.
// ---------------------------------------------------------------------------

export interface TimelineRow {
  tag: string;  // "J", "E", "P", "R"
  text: string;
}

// A grounding overlay. Book-level (composition: "how it was written") or
// movement-level (situation: "the ground beneath this stretch").
export interface Panel {
  skicker: string;
  title: string;
  paragraphs: string[];
  timeline?: TimelineRow[];
  sources?: string;
}

// The look-back at the end of a movement. For a composite book this is where the
// thesis lives: the synthesis that supervenes on the parts. It can carry the
// internal tensions that only resolve (or pointedly refuse to resolve) at the level
// of the whole, e.g. Job's restored-double frame against its uncompromising poetry.
export interface Capstone {
  skicker: string;
  title: string;
  paragraphs: string[];
  tensions?: Tension[];
  sources?: string;
}

// The look-forward at the threshold between movements.
export interface Doorway {
  skicker: string;
  title: string;
  paragraphs: string[];
  nextMovementId: string;
}

export interface Movement {
  id: string;
  index: number;
  title: string;
  range: string;          // "Genesis 1–11", "Job (whole)"
  throughline: string;
  chapterStart: number;
  chapterEnd: number;
  composite?: boolean;    // true when the movement spans multiple genres (Job)
  situation: Panel;       // movement-level grounding
  capstone?: Capstone;    // built when the movement completes; thesis of the whole
  doorway?: Doorway;
}

export interface Book {
  id: string;
  title: string;
  composition: Panel;     // book-level "how it was written"
  movements: Movement[];
  readings: Reading[];    // resolved by span; navigation indexes into these
}
