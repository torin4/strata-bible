"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { type NewEntry, addEntry } from "@/lib/journal";
import { type FormEvent, useState } from "react";

type Context = Omit<NewEntry, "text" | "prompt">;

// The write surface for a journal entry. Used both standalone on the journal page and
// inline under a passage's ask (where `prompt` and `context` tag the response).
export function JournalComposer({
  prompt,
  context,
  placeholder,
  autoFocus,
  onSaved,
}: {
  prompt?: string;
  context?: Context;
  placeholder?: string;
  autoFocus?: boolean;
  onSaved?: () => void;
}) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || !text.trim()) return;
    setBusy(true);
    setError(null);
    try {
      await addEntry(user.uid, { text, prompt, ...context });
      setText("");
      onSaved?.();
    } catch {
      setError(
        "Could not save. If this persists, the Firestore rules may not be published yet.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {prompt ? (
        <p className="font-scripture text-[15px] leading-[1.5] text-parchment-2">
          {prompt}
        </p>
      ) : null}
      <textarea
        // biome-ignore lint/a11y/noAutofocus: opt-in only for the inline ask responder
        autoFocus={autoFocus}
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder ?? "Write your response."}
        className="w-full resize-y rounded-[10px] border border-line bg-parchment/[0.03] px-4 py-3 font-body text-[15px] leading-[1.6] text-parchment placeholder:text-mist-2 focus:border-gold/40 focus:outline-none"
      />
      <div className="flex items-center justify-end gap-3">
        {error ? (
          <p className="mr-auto font-body text-[12.5px] italic text-psyche">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy || !text.trim()}
          className="rounded-[10px] bg-gold px-5 py-2.5 font-ui text-[11px] uppercase tracking-[.14em] text-deep transition-colors hover:bg-gold-bright disabled:opacity-40"
        >
          {busy ? "Saving" : "Save"}
        </button>
      </div>
    </form>
  );
}
