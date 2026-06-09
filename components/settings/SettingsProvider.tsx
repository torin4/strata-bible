"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import {
  DEFAULT_SETTINGS,
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

interface SettingsContextValue {
  settings: Settings;
  loading: boolean;
  setCompanionEnabled: (enabled: boolean) => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

// Holds reader preferences, synced from Firestore for the signed-in user. Signed out, it
// simply serves the defaults; nothing here is required for the reader to work.
export function SettingsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

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

  // Memoized so consumers do not re-render on every provider render (e.g. each auth change)
  // unless the settings or loading state actually changed.
  const value = useMemo(
    () => ({ settings, loading, setCompanionEnabled }),
    [settings, loading, setCompanionEnabled],
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
