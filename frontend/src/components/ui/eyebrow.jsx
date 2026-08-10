import { cn } from "@/utils/cn";

/**
 * Primitivo `<Eyebrow />` (Hatch / Chapéu de Seção) — Aqua Slides Design System
 * 
 * Indicador de categoria/seção usado acima de títulos principais (Nó 20509:188 do Figma).
 * Server Component puro (sem "use client").
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Texto do chapéu/indicador
 * @param {"default"|"dark"|"yellow"|"orange"} [props.variant="default"] - Cor do texto (default = amarelo #facc01, dark = laranja #fea02e)
 * @param {"span"|"p"|"h4"|"div"} [props.as="span"] - Tag HTML semântica
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
const variantClasses = {
  default: "text-secondary",
  yellow: "text-secondary",
  dark: "text-secondary-dark",
  orange: "text-secondary-dark",
};

export function Eyebrow({
  children,
  variant = "default",
  as: Component = "span",
  className,
  ...props
}) {
  const textColor = variantClasses[variant] || variantClasses.default;

  return (
    <Component
      className={cn(
        "inline-block font-sans font-bold text-eyebrow tracking-[1.4px] uppercase whitespace-nowrap select-none cursor-default",
        "hover:tracking-[2.5px] hover:translate-x-1 transition-all duration-300 ease-out",
        textColor,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Eyebrow;
