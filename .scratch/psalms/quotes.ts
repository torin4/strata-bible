import { readFileSync, readdirSync } from "node:fs";
import { BSB_PSALMS } from "@/content/bsb-psalms";
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const all = norm(Object.values(BSB_PSALMS).join(" "));
for (const d of ["book-3", "book-4", "book-5"]) {
  const dir = `content/psalms-notes/${d}`;
  for (const f of readdirSync(dir)) {
    const src = readFileSync(`${dir}/${f}`, "utf8");
    for (const m of src.matchAll(/“([^”]+)”/g)) {
      const q = norm(m[1]);
      if (q.split(" ").length >= 3 && !all.includes(q))
        console.log(f, "|", m[1]);
    }
  }
}
