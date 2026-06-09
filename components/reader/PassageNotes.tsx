"use client";

import { highlightKey } from "@/lib/highlights";
import { useState } from "react";
import { useHighlights } from "./HighlightProvider";

// The reader's own notes on this passage, shown after the scripture so a saved note is
// visible in place (not hidden behind a tap) and editable with a plain inline field, not
// the anchored popover. Reads live from the highlight provider; renders nothing when
// signed out or when the passage has no notes.
export function PassageNotes({
  readingId,
  passageRef,
  verseNumbers,
}: {
  readingId: string;
  passageRef: string;
  verseNumbers: number[];
}) {
  const { enabled, getNote } = useHighlights();
  if (!enabled) return null;

  const noted = verseNumbers
    .map((n) => {
      const key = highlightKey(readingId, passageRef, n);
      return { n, key, note: getNote(key) };
    })
    .filter((x): x is { n: number; key: string; note: string } =>
      Boolean(x.note),
    );

  if (noted.length === 0) return null;

  return (
    <div className="mt-5 border-t border-line pt-4">
      <div className="mb-3 font-ui text-[9px] font-semibold uppercase tracking-[.2em] text-gold/80">
        Your notes
      </div>
      <ul className="flex flex-col gap-3">
        {noted.map(({ n, key, note }) => (
          <NoteRow key={key} vkey={key} n={n} note={note} />
        ))}
      </ul>
    </div>
  );
}

function NoteRow({ vkey, n, note }: { vkey: string; n: number; note: string }) {
  const { saveNote, removeNote } = useHighlights();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note);

  if (!editing) {
    return (
      <li className="flex gap-3">
        <span className="mt-[2px] min-w-[24px] font-ui text-[10px] uppercase tracking-[.08em] text-gold">
          v.{n}
        </span>
        <div className="flex-1">
          <p className="whitespace-pre-line font-body text-[13.5px] italic leading-[1.6] text-mist">
            {note}
          </p>
          <div className="mt-1 flex gap-4">
            <button
              type="button"
              onClick={() => {
                setText(note);
                setEditing(true);
              }}
              className="font-ui text-[9.5px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => removeNote(vkey)}
              className="font-ui text-[9.5px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="flex gap-3">
      <span className="mt-[2px] min-w-[24px] font-ui text-[10px] uppercase tracking-[.08em] text-gold">
        v.{n}
      </span>
      <div className="flex-1">
        <textarea
          // biome-ignore lint/a11y/noAutofocus: revealed by a deliberate edit tap
          autoFocus
          aria-label={`Note on verse ${n}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-[8px] border border-line bg-shell px-3 py-2 font-body text-[14px] leading-[1.5] text-parchment placeholder:text-mist-2 focus:border-gold/50 focus:outline-none"
        />
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="font-ui text-[10px] uppercase tracking-[.12em] text-parchment-2 transition-colors hover:text-parchment"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              saveNote(vkey, text);
              setEditing(false);
            }}
            className="rounded-[8px] bg-gold px-3 py-1.5 font-ui text-[10px] uppercase tracking-[.12em] text-deep transition-colors hover:bg-gold-bright"
          >
            Save
          </button>
        </div>
      </div>
    </li>
  );
}
