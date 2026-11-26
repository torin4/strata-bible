import { PSALMS_TEXT } from "@/content/psalms-text";
for (const c of process.argv.slice(2).map(Number)) {
  const t = PSALMS_TEXT[c];
  console.log(`\n== Psalm ${c} [${t.title}] ${t.superscription ?? ""}`);
  for (const v of t.verses)
    console.log(`${v.n} ${v.text.replace(/\n/g, " / ")}`);
}
