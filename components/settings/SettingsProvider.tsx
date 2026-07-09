"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import {
  DEFAULT_SETTINGS,
  DESKTOP_MIN_WIDTH,
  type Settings,
  saveSettings,
  subscribeSettings,
} from "@/lib/settings";
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type FormFactor = "mobile" | "desktop";

interface SettingsContextValue {
  settings: Settings;
  loading: boolean;
  // Which device class this viewport is, and the text size saved for it. The stepper and
  // the settings control read and write this one active value.
  formFactor: FormFactor;
  readerScale: number;
  setCompanionEnabled: (enabled: boolean) => void;
  setReaderScale: (scale: number) => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

// Holds reader preferences, synced from Firestore for the signed-in user. Signed out, it
// simply serves the defaults; nothing here is required for the reader to work.
export function SettingsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  // Start "desktop" so the server and first client render agree (the saved scales default to
  // 1, a no-op either way); the effect corrects it to the real viewport on mount and keeps it
  // in step as the window crosses the breakpoint or a tablet rotates.
  const [formFactor, setFormFactor] = useState<FormFactor>("desktop");

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);
    const sync = () => setFormFactor(mq.matches ? "desktop" : "mobile");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!user) {
      setSettings(DEFAULT_SETTINGS);
      setLoading(false);
      return;
    }
    setLoading(true);
    return subscribeSettings(user.uid, (next) => {
      setSettings(next);
      setLoading(false);
    });
  }, [user]);

  // Optimistic local update, then persist for the signed-in user. A failed write leaves
  // the toggle where the reader put it rather than snapping back mid-interaction.
  const setCompanionEnabled = useCallback(
    (enabled: boolean) => {
      setSettings((prev) => ({ ...prev, companionEnabled: enabled }));
      if (user)
        saveSettings(user.uid, { companionEnabled: enabled }).catch(() => {});
    },
    [user],
  );

  // Same optimistic pattern as the companion toggle, but writes only the field for the
  // current device class, so setting a phone's size never disturbs a computer's. Signed in,
  // the choice persists to Firestore and syncs to like devices; signed out, it holds for the
  // session (per the Firestore-only storage rule, nothing is written to the device).
  const setReaderScale = useCallback(
    (scale: number) => {
      const field =
        formFactor === "desktop" ? "readerScaleDesktop" : "readerScaleMobile";
      setSettings((prev) => ({ ...prev, [field]: scale }));
      if (user) saveSettings(user.uid, { [field]: scale }).catch(() => {});
    },
    [user, formFactor],
  );

  // The size that applies to this device class right now.
  const readerScale =
    formFactor === "desktop"
      ? settings.readerScaleDesktop
      : settings.readerScaleMobile;

  // Memoized so consumers do not re-render on every provider render (e.g. each auth change)
  // unless the settings, form factor, or loading state actually changed.
  const value = useMemo(
    () => ({
      settings,
      loading,
      formFactor,
      readerScale,
      setCompanionEnabled,
      setReaderScale,
    }),
    [
      settings,
      loading,
      formFactor,
      readerScale,
      setCompanionEnabled,
      setReaderScale,
    ],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
