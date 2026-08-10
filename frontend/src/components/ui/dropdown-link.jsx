import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<DropdownLink />` — Aqua Slides Design System
 * 
 * Link de navegação com menu suspenso flutuante (Nó 20509:182 do Figma).
 * Server Component puro (sem "use client"). Exibe o menu suspenso via CSS pure hover (`group-hover`).
 * 
 * @param {object} props
 * @param {string} props.title - Título principal do menu de navegação
 * @param {Array<{label: string, href: string}>} [props.items=[]] - Lista de links do menu suspenso
 * @param {boolean} [props.active=false] - Se true, ativa o estado de destaque no título
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function DropdownLink({
  title,
  items = [],
  active = false,
  className,
  ...props
}) {
  return (
    <div
      className={cn("group relative inline-block text-left select-none", className)}
      {...props}
    >
      {/* Título Trigger com ChevronDown (16px) */}
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-2 font-sans font-bold text-button-md tracking-[-0.8px] whitespace-nowrap transition-colors duration-200 cursor-pointer",
          active ? "text-secondary" : "text-ink group-hover:text-secondary"
        )}
      >
        <span className="whitespace-nowrap shrink-0">{title}</span>
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Menu Suspenso Flutuante (CSS Pure Hover) */}
      <div className="absolute top-full left-0 pt-2 z-50 hidden group-hover:block min-w-[220px]">
        <div className="rounded-md border border-hairline bg-canvas p-2 shadow-md flex flex-col gap-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="block rounded-sm px-4 py-2.5 font-sans font-semibold text-small text-ink transition-colors duration-150 hover:bg-surface-strong hover:text-secondary-dark whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropdownLink;
