import type { Config } from "tailwindcss";

// Colors mirror styles/tokens.css. Solid tokens are stored as space-separated RGB
// channels so Tailwind's alpha modifiers work (e.g. border-gold/40, bg-lapis/8),
// which is how the proof's many one-off translucent borders/fills are reproduced
// without any literal color landing in a component. The already-translucent tokens
// (gold-soft, mist, mist-2, line) are referenced as whole var() values.
const channel = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shell: channel("--shell"),
        deep: channel("--deep"),
        parchment: {
          DEFAULT: channel("--parchment"),
          2: channel("--parchment-2"),
          edge: channel("--parchment-edge"),
        },
        gold: {
          DEFAULT: channel("--gold"),
          bright: channel("--gold-bright"),
          soft: "var(--gold-soft)",
        },
        lapis: channel("--lapis"),
        psyche: channel("--psyche"),
        ink: channel("--ink"),
        mist: {
          DEFAULT: "var(--mist)",
          2: "var(--mist-2)",
        },
        line: "var(--line)",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        scripture: ["'Cormorant Garamond'", "serif"],
        body: ["'EB Garamond'", "serif"],
        ui: ["'Hanken Grotesk'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
