import { type FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { type Auth, getAuth } from "firebase/auth";
import { type Firestore, getFirestore } from "firebase/firestore";

// Firebase web config is public by design; it lives in NEXT_PUBLIC_* env vars. Per-user
// access is enforced by Firestore security rules, not by hiding these values.
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// The reader must stay fully usable with no backend. Firebase only initializes when the
// config is present; otherwise auth and db are null and the UI shows a "not configured"
// state instead of crashing.
export const isFirebaseConfigured = Boolean(
  config.apiKey && config.projectId && config.appId,
);

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

if (isFirebaseConfigured) {
  app = getApps().length
    ? getApp()
    : initializeApp(config as Record<string, string>);
  authInstance = getAuth(app);
  dbInstance = getFirestore(app);
}

export const auth = authInstance;
export const db = dbInstance;
