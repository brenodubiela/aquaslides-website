import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<CheckItem />` — Aqua Slides Design System
 *
 * Item de lista com ícone de check e animação de hover.
 * DESIGN.md > components > check-item.
 * Server Component (apenas visual).
 *
 * @param {object} props
 * @param {string} props.text - Texto exibido no item
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function CheckItem({ text, className, ...props }) {
  return (
    <li
      className={cn(
        "group flex cursor-default items-center gap-2",
        className
      )}
      {...props}
    >
      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/30 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-ink">
        <Check className="size-4" strokeWidth={3} />
      </div>
      <p className="font-sans text-card-p tracking-[-0.8px] inherit">
        {text}
      </p>
    </li>
  );
}

export default CheckItem;
