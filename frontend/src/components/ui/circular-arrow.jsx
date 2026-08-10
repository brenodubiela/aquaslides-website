import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<CircularArrow />` — Aqua Slides Design System
 *
 * Botão circular com seta diagonal (geralmente usado em cards).
 * DESIGN.md > components > circular-arrow-button.
 * Server Component (apenas visual).
 *
 * @param {object} props
 * @param {boolean} props.isActive - Define se o botão está ativo (sólido) ou inativo (outline)
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function CircularArrow({ isActive = false, className, ...props }) {
  return (
    <div
      className={cn(
        "flex size-[46px] shrink-0 items-center justify-center rounded-full transition-all duration-300",
        isActive
          ? "bg-secondary text-ink border border-transparent"
          : "bg-transparent border border-secondary text-secondary group-hover:bg-secondary group-hover:text-ink group-hover:border-transparent",
        className
      )}
      {...props}
    >
      <ArrowUpRight className="size-6" />
    </div>
  );
}

export default CircularArrow;
