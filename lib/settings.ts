import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// The text-size steps, smallest to largest, as a zoom factor on the whole interface. Both
// the in-reader stepper and the settings control choose from this one set, so they always
// agree. 1 is the normal size (Medium) and the default.
export const READER_SCALES = [0.9, 1, 1.2, 1.4] as const;
export const READER_SCALE_LABELS = [
  "Small",
  "Medium",
  "Large",
  "X-Large",
] as const;
export const DEFAULT_READER_SCALE = 1;

// Below this viewport width the "mobile" size applies; at or above it, the "desktop" size.
// The two are stored and chosen separately so a phone and a computer each keep their own,
// while both still sync per user (no per-device localStorage).
export const DESKTOP_MIN_WIDTH = 1024;

// Reader preferences, persisted per user in Firestore. `companionEnabled` gates the AI
// companion (the reader must stay fully usable with it off); the two scale fields size the
// whole interface (text, spacing, and images together, like browser zoom), kept separate for
// phones and computers so each device class holds its own size.
export interface Settings {
  companionEnabled: boolean;
  readerScaleMobile: number;
  readerScaleDesktop: number;
}

export const DEFAULT_SETTINGS: Settings = {
  companionEnabled: true,
  readerScaleMobile: DEFAULT_READER_SCALE,
  readerScaleDesktop: DEFAULT_READER_SCALE,
};

// Only accept a stored scale that is one of the known steps, so a stray value can never
// stretch the reader; anything else falls back to the authored size.
function normalizeScale(value: unknown): number {
  return typeof value === "number" &&
    (READER_SCALES as readonly number[]).includes(value)
    ? value
    : DEFAULT_READER_SCALE;
}

function prefsDoc(database: Firestore, uid: string) {
  return doc(database, "users", uid, "state", "prefs");
}

export async function saveSettings(
  uid: string,
  partial: Partial<Settings>,
): Promise<void> {
  if (!db) return;
  await setDoc(prefsDoc(db, uid), partial, { merge: true });
}

export function subscribeSettings(
  uid: string,
  onChange: (settings: Settings) => void,
): Unsubscribe {
  if (!db) {
    onChange(DEFAULT_SETTINGS);
    return () => {};
  }
  return onSnapshot(
    prefsDoc(db, uid),
    (snap) => {
      const data = snap.exists() ? snap.data() : {};
      onChange({
        companionEnabled:
          typeof data.companionEnabled === "boolean"
            ? data.companionEnabled
            : DEFAULT_SETTINGS.companionEnabled,
        // Fall back to the former single `readerScale` for anyone who set a size before the
        // split into per-device sizes, so their choice carries over to both.
        readerScaleMobile: normalizeScale(
          data.readerScaleMobile ?? data.readerScale,
        ),
        readerScaleDesktop: normalizeScale(
          data.readerScaleDesktop ?? data.readerScale,
        ),
      });
    },
    () => onChange(DEFAULT_SETTINGS),
  );
}
