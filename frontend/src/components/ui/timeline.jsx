import { cn } from "@/utils/cn";

/**
 * Primitivo `<Timeline />` — Aqua Slides Design System
 *
 * Trilho vertical de 1px em `hairline` com pontos em `complexos` e itens
 * alternando esquerda/direita no desktop. No mobile vira coluna única com o
 * trilho à esquerda, como manda o DESIGN.md (Responsive Behavior).
 * Server Component (sem "use client") — o conteúdo é texto indexável.
 *
 * DESIGN.md > components > timeline-rail / timeline-item.
 *
 * @param {object} props
 * @param {Array<{year: string|number, title: string, description: string}>} props.items
 * @param {string} [props.className]
 */
export function Timeline({ items = [], className, ...props }) {
  if (items.length === 0) return null;

  return (
    <div className={cn("relative w-full", className)} {...props}>
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-[5px] w-px bg-hairline md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="flex flex-col gap-block">
        {items.map((item, index) => (
          <li
            key={`${item.year}-${index}`}
            className="relative pl-xl md:grid md:grid-cols-2 md:gap-x-[30%] md:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-sm size-[10px] rounded-full bg-complexos md:left-1/2 md:-translate-x-1/2"
            />

            <div
              className={cn(
                "flex flex-col items-start gap-md",
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              )}
            >
              <span className="rounded-full border border-secondary-dark bg-surface-warm px-md py-xs text-small text-secondary-dark">
                {item.year}
              </span>

              <h3 className="font-display text-h3-mobile text-primary md:text-h3">
                {item.title}
              </h3>

              <p className="text-small text-body">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
