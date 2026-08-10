import Link from "next/link";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<TextLink />` — Aqua Slides Design System
 * 
 * Link de navegação textual (Nós 20509:180 e 20509:181 do Figma).
 * Server Component puro (sem "use client"). Renderiza obrigatoriamente com `next/link`.
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Conteúdo textual do link
 * @param {string} props.href - Destino da navegação (ex: "/sobre")
 * @param {boolean} [props.active=false] - Se true, aplica a cor de destaque (amarelo #facc01)
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function TextLink({
  children,
  href = "#",
  active = false,
  className,
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center font-sans font-bold text-button-md tracking-[-0.8px] whitespace-nowrap select-none transition-colors duration-200",
        active ? "text-secondary" : "text-ink hover:text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default TextLink;
