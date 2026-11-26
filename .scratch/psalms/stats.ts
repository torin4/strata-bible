import { PSALMS } from "@/content/psalms";
import { PSALMS_TEXT } from "@/content/psalms-text";
const w = (s?: string) =>
  s
    ? s
        .replace(/<[^>]+>/g, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length
    : 0;
const [lo, hi] = process.argv.slice(2).map(Number);
const gW: number[] = [];
const sR: number[] = [];
for (const r of PSALMS) {
  const n = Number(r.id.replace(/^ps-(\d+).*$/, "$1"));
  if (n < lo || n > hi) continue;
  for (const p of r.passages) {
    const scrip = (p.verses ?? []).reduce((a, v) => a + w(v.text), 0);
    const app =
      w(p.ground?.text) +
      w(p.meaning) +
      w(p.lenses?.theo) +
      w(p.lenses?.arch) +
      w(p.misreading?.named) +
      w(p.misreading?.why) +
      (p.tensions ?? []).reduce(
        (a, t) => a + w(t.claim) + w(t.counter) + w(t.where),
        0,
      ) +
      w(p.addr?.text) +
      w(p.soft) +
      w(p.ask) +
      w(p.prayer?.text);
    if (r.tier === "sitting") sR.push(app / scrip);
    else if (r.tier === "grounded") gW.push(w(p.ground?.text));
    console.log(
      `${r.id.padEnd(8)} ${r.tier.padEnd(9)} scrip ${String(scrip).padStart(4)} appar ${String(app).padStart(4)} ${(app / scrip).toFixed(2)}x ground ${w(p.ground?.text)}  ${p.title}`,
    );
  }
}
const avg = (a: number[]) =>
  a.length ? (a.reduce((x, y) => x + y, 0) / a.length).toFixed(2) : "-";
console.log(
  `grounded ground avg ${avg(gW)} words; sitting ratio avg ${avg(sR)}`,
);
