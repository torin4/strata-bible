import { db } from "@/lib/firebase";
import {
  type Firestore,
  type Unsubscribe,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// Reader preferences, persisted per user in Firestore. The only setting so far is whether
// the AI companion is offered at all; the reader must stay fully usable with it off.
export interface Settings {
  companionEnabled: boolean;
}

export const DEFAULT_SETTINGS: Settings = { companionEnabled: true };

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
      });
    },
    () => onChange(DEFAULT_SETTINGS),
  );
}
