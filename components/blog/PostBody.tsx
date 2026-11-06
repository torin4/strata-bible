import type { BlogBlock } from "@/content/blog";
import { parseInline } from "@/lib/blog";
import Link from "next/link";

// Inline text: plain runs, internal links (lapis, like the app's other text links), and
// italics. Only internal paths are written in posts, so every link is a next/link.
function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((part, i) => {
        const key = `${i}-${part.text}`;
        if (part.kind === "link") {
          return (
            <Link
              key={key}
              href={part.href}
              className="text-lapis underline decoration-lapis/40 underline-offset-[3px] transition-colors hover:text-parchment hover:decoration-parchment/50"
            >
              {part.text}
            </Link>
          );
        }
        if (part.kind === "em") {
          return (
            <em key={key} className="italic text-parchment-2">
              {part.text}
            </em>
          );
        }
        return <span key={key}>{part.text}</span>;
      })}
    </>
  );
}

// A post's body, in the About page's type scale: EB Garamond body, small gold UI-caps
// section heads.
export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        if (block.type === "h2") {
          return (
            <h2
              key={key}
              className="mt-6 font-display text-[19px] font-medium leading-[1.3] text-gold-bright sm:text-[21px]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={key} className="flex flex-col gap-3 pl-1">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 font-body text-[16.5px] leading-[1.8] text-mist before:absolute before:left-0 before:top-[.78em] before:h-px before:w-2.5 before:bg-gold/70"
                >
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={key}
            className="break-words font-body text-[16.5px] leading-[1.85] text-mist"
          >
            <Inline text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
