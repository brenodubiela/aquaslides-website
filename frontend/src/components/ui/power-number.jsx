import { cn } from "@/utils/cn";

/**
 * Primitivo `<PowerNumber />` — Aqua Slides Design System
 *
 * Estatística de prova social com ícone, número e label.
 * DESIGN.md > components > power-numbers.
 * Server Component puro (sem "use client").
 *
 * @param {object} props
 * @param {React.ReactNode} props.icon - SVG ou ReactNode do ícone
 * @param {string} props.number - Valor numérico de destaque (ex: "+70")
 * @param {string} props.label - Descrição do número (ex: "Projetos Entregues")
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function PowerNumber({ icon, number, label, className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-2",
        className
      )}
      {...props}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-secondary">
        {icon}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-h3 text-primary">{number}</span>
        <span className="font-sans text-base text-ink">{label}</span>
      </div>
    </div>
  );
}

export default PowerNumber;
