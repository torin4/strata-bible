"use client";

import { auth, isFirebaseConfigured } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  type User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  configured: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const notConfigured = () => {
  throw new Error("Firebase is not configured.");
};

// Holds the signed-in user and the sign-in methods. The reader never depends on this;
// only account features (the journal, later) do. With no Firebase config, `configured`
// is false and the methods are inert.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      configured: isFirebaseConfigured,
      signInWithGoogle: async () => {
        if (!auth) return notConfigured();
        await signInWithPopup(auth, new GoogleAuthProvider());
      },
      signInWithEmail: async (email, password) => {
        if (!auth) return notConfigured();
        await signInWithEmailAndPassword(auth, email, password);
      },
      signUpWithEmail: async (email, password) => {
        if (!auth) return notConfigured();
        await createUserWithEmailAndPassword(auth, email, password);
      },
      signOutUser: async () => {
        if (auth) await signOut(auth);
      },
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
