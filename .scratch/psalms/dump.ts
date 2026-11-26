import { PSALM_NOTES } from "@/content/psalms-notes";

const [lo, hi] = process.argv.slice(2).map(Number);
for (const [id, n] of Object.entries(PSALM_NOTES)) {
  const num = Number(id.replace(/^ps-(\d+).*$/, "$1"));
  if (num < lo || num > hi) continue;
  console.log(`\n### ${id} [${n.tier}] ${n.title}`);
  if (n.thread) console.log(`THREAD: ${n.thread}`);
  n.passages.forEach((p, i) => {
    if (p.title) console.log(`-- passage ${i + 1}: ${p.title}`);
    if (p.ground)
      console.log(
        `GROUND (${p.ground.kind}; ${p.ground.src}): ${p.ground.text}`,
      );
    if (p.misreading)
      console.log(`MISREAD: ${p.misreading.named} || ${p.misreading.why}`);
    if (p.meaning) console.log(`MEANING: ${p.meaning}`);
    if (p.lenses?.theo) console.log(`THEO: ${p.lenses.theo}`);
    if (p.lenses?.arch) console.log(`ARCH: ${p.lenses.arch}`);
    for (const t of p.tensions ?? [])
      console.log(`TENSION: ${t.claim} || ${t.counter} || ${t.where}`);
    if (p.addr) console.log(`TURN (${p.addr.mode}): ${p.addr.text}`);
    if (p.soft) console.log(`SOFT: ${p.soft}`);
    if (p.ask) console.log(`ASK: ${p.ask}`);
    if (p.prayer) console.log(`PRAYER (${p.prayer.mode}): ${p.prayer.text}`);
    if (p.inTextTurn) console.log(`TURN AT v${p.inTextTurn}`);
  });
  if (n.closeEnd) console.log(`CLOSE: ${n.closeEnd}`);
  if (n.find)
    console.log(`FIND: ${n.find.themes.join(", ")} | ${n.find.speaksTo}`);
}
