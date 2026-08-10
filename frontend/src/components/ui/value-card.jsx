import { cn } from "@/utils/cn";

/**
 * Primitivo `<ValueCard />` — Aqua Slides Design System
 * 
 * Card institucional utilizado em seções como Missão, Visão e Valores.
 * Figma: Nó 20509:499
 * Server-first Component (sem uso de estados de cliente).
 * 
 * @param {object} props
 * @param {React.ReactNode} props.icon - Componente de ícone SVG
 * @param {string} props.eyebrow - Título superior (ex: "NOSSA MISSÃO")
 * @param {string} props.title - Título principal (ex: "Crescer junto com você")
 * @param {React.ReactNode} props.children - Conteúdo descritivo (parágrafo ou lista)
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function ValueCard({ icon, eyebrow, title, children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-[#f2f2f2] flex flex-col items-start px-6 py-8 rounded-2xl h-full justify-between gap-14",
        className
      )}
      {...props}
    >
      {/* Bloco Superior: Ícone */}
      <div className="bg-secondary rounded-2xl p-4 shrink-0 text-ink flex items-center justify-center">
        {icon}
      </div>

      {/* Bloco Inferior: Textos */}
      <div className="flex flex-col items-start gap-4 w-full">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-1.5 items-start overflow-hidden w-full">
          <p className="font-sans font-bold text-sm text-secondary-dark tracking-[1.4px] uppercase truncate w-full">
            {eyebrow}
          </p>
          <h3 className="font-display text-2xl xl:text-[28px] text-primary leading-[1.2] truncate w-full">
            {title}
          </h3>
        </div>

        {/* Conteúdo flexível (Suporta <p> ou <ul> vindo do wrapper) */}
        <div className="font-sans text-base text-ink tracking-[-0.8px] leading-[1.2] w-full [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ValueCard;
