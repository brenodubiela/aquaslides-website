import { cn } from "@/utils/cn";

/**
 * Primitivo `<InfoCard />` — Aqua Slides Design System
 * 
 * Card simples de informação utilizado para features/pilares.
 * Figma: Nó 20509:582
 * Server-first Component.
 * 
 * @param {object} props
 * @param {string} props.title - Título do card
 * @param {React.ReactNode} props.description - Texto descritivo
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function InfoCard({ title, description, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-[#f2f2f2] flex flex-col items-start p-6 rounded-2xl w-full",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <h3 className="font-display text-[32px] text-primary leading-none">
          {title}
        </h3>
        <p className="font-sans text-base text-ink tracking-[-0.8px] leading-[1.2] w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
