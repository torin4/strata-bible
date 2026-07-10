"use client";

import type { ThemeDef, ThemeKey } from "@/content/themes";
import { type FindEntry, searchEntries } from "@/lib/find";
import Link from "next/link";
import { useMemo, useState } from "react";

// The discovery surface: say how you are doing in your own words, or tap a feeling, and
// the readings that might meet you there rise to the top. All matching is client-side
// over the compact index the server passed, so it works offline and signed out.
export function FindClient({
  entries,
  themes,
}: {
  entries: FindEntry[];
  themes: ThemeDef[];
}) {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<ThemeKey | null>(null);

  const label = useMemo(
    () => new Map(themes.map((t) => [t.key, t.label] as const)),
    [themes],
  );

  const trimmed = query.trim();
  const results = useMemo(() => {
    if (trimmed) {
      return searchEntries(entries, trimmed).map((s) => ({
        entry: s.entry,
        matched: s.matchedThemes,
      }));
    }
    if (theme) {
      return entries
        .filter((e) => e.themes.includes(theme))
        .map((e) => ({ entry: e, matched: [theme] as ThemeKey[] }));
    }
    return entries.map((e) => ({ entry: e, matched: [] as ThemeKey[] }));
  }, [entries, trimmed, theme]);

  const onType = (value: string) => {
    setQuery(value);
    if (value) setTheme(null);
  };
  const onChip = (key: ThemeKey) => {
    setTheme((prev) => (prev === key ? null : key));
    setQuery("");
  };

  const browsing = !trimmed && !theme;

  return (
    <div>
      <div className="stagger" style={{ animationDelay: ".05s" }}>
        <h1 className="text-center font-display text-[28px] font-medium text-parchment">
          What are you carrying?
        </h1>
        <p className="mx-auto mt-3 max-w-[30rem] text-center font-body text-[14.5px] leading-[1.7] text-mist">
          Say how you are doing, in your own words, or tap a feeling. These
          readings might meet you there.
        </p>

        <div className="relative mt-6">
          <input
            type="text"
            value={query}
            onChange={(event) => onType(event.target.value)}
            placeholder="I feel..."
            aria-label="Describe what you are carrying"
            className="w-full rounded-[12px] border border-line bg-parchment/[0.03] px-5 py-3.5 font-body text-[16px] text-parchment placeholder:text-mist-2 focus:border-gold/40 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              aria-label="Clear"
              onClick={() => setQuery("")}
              className="-translate-y-1/2 absolute top-1/2 right-3 font-ui text-[11px] uppercase tracking-[.14em] text-mist transition-colors hover:text-gold-bright"
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>

      <div
        className="stagger mt-5 flex flex-wrap justify-center gap-2"
        style={{ animationDelay: ".16s" }}
      >
        {themes.map((t) => {
          const on = theme === t.key;
          return (
            <button
              key={t.key}
              type="button"
              title={t.blurb}
              aria-pressed={on}
              onClick={() => onChip(t.key)}
              className={`rounded-full border px-3 py-1.5 font-ui text-[11px] tracking-[.04em] transition-colors ${
                on
                  ? "border-gold/60 bg-gold-soft text-gold-bright"
                  : "border-line text-mist hover:border-gold/40 hover:text-parchment-2"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {/* Visually hidden live region: announces filtered result count to screen readers. */}
        <span aria-live="polite" aria-atomic="true" className="sr-only">
          {browsing
            ? `${results.length} readings`
            : results.length === 0
              ? "No readings matched"
              : `${results.length} ${results.length === 1 ? "reading" : "readings"}`}
        </span>
        <div className="mb-4 text-center font-ui text-[10px] uppercase tracking-[.2em] text-mist-2">
          {browsing
            ? `All ${results.length} readings`
            : results.length === 0
              ? "Nothing matched"
              : `${results.length} ${results.length === 1 ? "reading" : "readings"}`}
        </div>

        {results.length === 0 ? (
          <p className="mx-auto max-w-[28rem] text-center font-body text-[14px] italic leading-[1.7] text-mist-2">
            Nothing matched those words. Try saying it another way, or tap a
            feeling above.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {results.map(({ entry, matched }) => (
              <li key={entry.id}>
                <Link
                  href={`/read/${entry.bookId}/${entry.id}`}
                  className="group block rounded-[14px] border border-line bg-deep px-5 py-5 transition-colors hover:border-gold/40"
                >
                  <p className="font-body text-[18px] italic leading-[1.45] text-parchment-2 group-hover:text-parchment">
                    {entry.speaksTo}
                  </p>
                  <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-[15px] tracking-[.03em] text-gold-bright">
                      {entry.title}
                    </span>
                    <span className="font-body text-[12px] italic text-mist-2">
                      {entry.bookTitle} · {entry.span}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.themes.map((key) => {
                      const hit = matched.includes(key);
                      return (
                        <span
                          key={key}
                          className={`rounded-full border px-2 py-[2px] font-ui text-[9px] uppercase tracking-[.12em] ${
                            hit
                              ? "border-gold/50 bg-gold-soft text-gold-bright"
                              : "border-line text-mist-2"
                          }`}
                        >
                          {label.get(key) ?? key}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
