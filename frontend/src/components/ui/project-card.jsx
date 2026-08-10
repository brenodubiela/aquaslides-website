import { cn } from "@/utils/cn";
import { CircularArrow } from "./circular-arrow";

/**
 * Primitivo `<ProjectCard />` — Aqua Slides Design System
 *
 * Card de projeto exibindo logo, título, subtítulo e indicador circular.
 * DESIGN.md > components > project-card.
 * Server Component puro. O controle de `isActive` vem do pai.
 *
 * @param {object} props
 * @param {string} props.title - Título principal (nome do complexo/projeto)
 * @param {string} props.subtitle - Localização ou subtítulo descritivo
 * @param {boolean} [props.isActive] - Estado visual ativo/inativo
 * @param {React.ReactNode} [props.logoSlot] - Slot para injetar a logo do projeto
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function ProjectCard({
  title,
  subtitle,
  isActive = false,
  logoSlot,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "group flex cursor-pointer flex-col justify-between gap-lg rounded-lg bg-surface-strong px-lg py-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex-1">
          {logoSlot}
        </div>
        <CircularArrow isActive={isActive} />
      </div>

      <div className="flex flex-col gap-2 mt-md">
        <h3 className="font-display text-card-h text-ink">{title}</h3>
        <p className="font-sans text-[18px] tracking-[-0.9px] leading-tight text-body">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
