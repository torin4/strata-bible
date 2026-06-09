"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

function friendlyError(err: unknown): string {
  const code =
    typeof err === "object" && err && "code" in err
      ? String((err as { code: string }).code)
      : "";
  switch (code) {
    case "auth/invalid-email":
      return "That email address is not valid.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Email or password is incorrect.";
    case "auth/email-already-in-use":
      return "An account with that email already exists. Sign in instead.";
    case "auth/weak-password":
      return "Password should be at least six characters.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/popup-blocked":
      return "Your browser blocked the sign-in popup.";
    case "auth/operation-not-allowed":
    case "auth/configuration-not-found":
      return "Sign-in is not enabled for this project yet.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export default function LoginPage() {
  const {
    user,
    configured,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
  } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const run = async (action: () => Promise<void>) => {
    setError(null);
    setBusy(true);
    try {
      await action();
      router.push("/");
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    run(() =>
      mode === "signin"
        ? signInWithEmail(email, password)
        : signUpWithEmail(email, password),
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-shell px-4 py-12">
      <div className="stagger-children w-full max-w-[24rem]">
        <header className="mb-6 text-center">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-[.32em] text-gold-bright"
          >
            STRATA
          </Link>
        </header>

        <div className="rounded-[18px] border border-line bg-deep px-6 py-7">
          {user ? (
            <div className="text-center">
              <p className="font-body text-[15px] leading-[1.6] text-parchment-2">
                Signed in as{" "}
                <span className="text-parchment">
                  {user.displayName || user.email}
                </span>
                .
              </p>
              <Link
                href="/"
                className="mt-5 inline-block rounded-[10px] bg-gold px-5 py-2.5 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright"
              >
                Continue
              </Link>
            </div>
          ) : !configured ? (
            <p className="text-center font-body text-[14px] leading-[1.7] text-mist">
              Sign-in is not configured yet. The reader is open to everyone in
              the meantime.
            </p>
          ) : (
            <>
              <h1 className="mb-1 text-center font-display text-[20px] font-medium text-parchment">
                {mode === "signin" ? "Sign in" : "Create account"}
              </h1>
              <p className="mb-6 text-center font-body text-[12.5px] italic text-mist-2">
                to keep a journal. The reader stays open to everyone.
              </p>

              <button
                type="button"
                disabled={busy}
                onClick={() => run(signInWithGoogle)}
                className="w-full rounded-[10px] border border-gold/40 bg-gold-soft px-4 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-gold-bright transition-colors hover:border-gold/[0.6] disabled:opacity-50"
              >
                Continue with Google
              </button>

              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-line" />
                <span className="font-ui text-[9px] uppercase tracking-[.2em] text-mist-2">
                  or
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>

              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  aria-label="Email"
                  autoComplete="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[10px] border border-line bg-parchment/[0.03] px-4 py-3 font-body text-[15px] text-parchment placeholder:text-mist-2 focus:border-gold/40 focus:outline-none"
                />
                <input
                  type="password"
                  required
                  aria-label="Password"
                  autoComplete={
                    mode === "signin" ? "current-password" : "new-password"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-[10px] border border-line bg-parchment/[0.03] px-4 py-3 font-body text-[15px] text-parchment placeholder:text-mist-2 focus:border-gold/40 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={busy}
                  className="mt-1 w-full rounded-[10px] bg-gold px-4 py-3 font-ui text-[12px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright disabled:opacity-50"
                >
                  {mode === "signin" ? "Sign in" : "Create account"}
                </button>
              </form>

              {error ? (
                <p
                  role="alert"
                  aria-live="assertive"
                  className="mt-4 text-center font-body text-[13px] italic text-psyche"
                >
                  {error}
                </p>
              ) : null}

              <button
                type="button"
                onClick={() => {
                  setMode(mode === "signin" ? "signup" : "signin");
                  setError(null);
                }}
                className="mt-5 w-full text-center font-ui text-[11px] tracking-[.06em] text-mist transition-colors hover:text-gold-bright"
              >
                {mode === "signin"
                  ? "New here? Create an account"
                  : "Already have an account? Sign in"}
              </button>
            </>
          )}
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
          >
            Back to the reader
          </Link>
        </div>
      </div>
    </main>
  );
}
