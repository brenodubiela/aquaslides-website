import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<Button />` — Aqua Slides Design System
 * 
 * Botão Polimórfico (Sólido, Halo e Indicador/Soft Categoria - Nó 20509:163 do Figma).
 * Variantes disponíveis:
 *  - `primary` (Sólido Azul institucional #09aae0 - Nó 20509:143)
 *  - `secondary` (Sólido Amarelo institucional #facc01)
 *  - `indicator` / `soft` (Soft Tint + Seta para Baixo - Nó 20509:163)
 *  - `halo-primary` (Com halo/moldura externa 6px)
 *  - `halo-secondary` (Com halo/moldura externa 6px)
 * 
 * Server Component puro (sem "use client"). Polimórfico (`Link` se tiver `href`, `div` se `as="div"`, `<button>` por padrão).
 */

const verticalStyles = {
  ball: {
    wrapper: "bg-ball/30 border-ball/60 hover:bg-ball/40 hover:border-ball",
    inner: "bg-ball text-on-primary group-hover:bg-ball-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  fresh: {
    wrapper: "bg-fresh/30 border-fresh/60 hover:bg-fresh/40 hover:border-fresh",
    inner: "bg-fresh text-on-primary group-hover:bg-fresh-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  ramp: {
    wrapper: "bg-ramp/30 border-ramp/60 hover:bg-ramp/40 hover:border-ramp",
    inner: "bg-ramp text-on-primary group-hover:bg-ramp-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  "free-fall": {
    wrapper: "bg-free-fall/30 border-free-fall/60 hover:bg-free-fall/40 hover:border-free-fall",
    inner: "bg-free-fall text-on-primary group-hover:bg-free-fall-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  playground: {
    wrapper: "bg-playground/30 border-playground/60 hover:bg-playground/40 hover:border-playground",
    inner: "bg-playground text-on-primary group-hover:bg-playground-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  toboagua: {
    wrapper: "bg-toboagua/30 border-toboagua/60 hover:bg-toboagua/40 hover:border-toboagua",
    inner: "bg-toboagua text-on-primary group-hover:bg-toboagua-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  complexos: {
    wrapper: "bg-complexos/30 border-complexos/60 hover:bg-complexos/40 hover:border-complexos",
    inner: "bg-complexos text-on-primary group-hover:bg-complexos-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
};

const variantStyles = {
  primary: {
    base: "bg-primary text-on-primary hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]",
    hasHalo: false,
    defaultIcon: "up-right",
  },
  secondary: {
    base: "bg-secondary text-on-secondary hover:bg-secondary-dark hover:scale-[1.02] active:scale-[0.98]",
    hasHalo: false,
    defaultIcon: "up-right",
  },
  indicator: {
    wrapper: "bg-primary-tint/40 border-primary/60 hover:bg-primary-tint/70 hover:border-primary",
    inner: "bg-transparent text-primary group-hover:text-primary-dark",
    hasHalo: true,
    defaultIcon: "down",
  },
  soft: {
    wrapper: "bg-primary-tint/40 border-primary/60 hover:bg-primary-tint/70 hover:border-primary",
    inner: "bg-transparent text-primary group-hover:text-primary-dark",
    hasHalo: true,
    defaultIcon: "down",
  },
  warm: {
    base: "w-full bg-surface-warm border border-secondary-dark/30 text-secondary-dark hover:bg-secondary-dark/15 hover:border-secondary-dark/50 active:scale-[0.98]",
    hasHalo: false,
    defaultIcon: false,
  },
  "halo-primary": {
    wrapper: "bg-primary-tint/40 border-primary/60 hover:bg-primary-tint/70 hover:border-primary",
    inner: "bg-primary text-on-primary group-hover:bg-primary-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  "halo-secondary": {
    wrapper: "bg-secondary-tint/50 border-secondary-dark/60 hover:bg-secondary-tint/80 hover:border-secondary-dark",
    inner: "bg-secondary text-on-secondary group-hover:bg-secondary-dark",
    hasHalo: true,
    defaultIcon: "up-right",
  },
  ...verticalStyles,
  "vertical-ball": verticalStyles.ball,
  "vertical-fresh": verticalStyles.fresh,
  "vertical-ramp": verticalStyles.ramp,
  "vertical-free-fall": verticalStyles["free-fall"],
  "vertical-playground": verticalStyles.playground,
  "vertical-toboagua": verticalStyles.toboagua,
  "vertical-complexos": verticalStyles.complexos,
};

export function Button({
  variant = "primary",
  color,
  vertical,
  size = "md",
  hasHalo = false,
  href,
  as,
  icon,
  children = "Solicite seu Projeto",
  className,
  type = "button",
  disabled = false,
  ...props
}) {
  // Tamanhos responsivos (padrão Figma: md = py-3.5 px-8 em telas normais, responsivo em telas pequenas)
  const sizeClasses = {
    sm: "px-4 py-1.5 sm:px-5 sm:py-2 text-button-sm gap-1.5",
    md: "px-5 py-2.5 sm:px-8 sm:py-3.5 text-button-sm sm:text-button-md gap-2",
    lg: "px-6 py-3 sm:px-10 sm:py-4 text-button-md gap-2.5",
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const selectedVertical = color || vertical || (variant === "vertical" ? "ball" : null);
  const currentVariant = selectedVertical && verticalStyles[selectedVertical] 
    ? verticalStyles[selectedVertical] 
    : (variantStyles[variant] || variantStyles.primary);
  const useHalo = hasHalo || currentVariant.hasHalo;

  // Lógica de seleção do ícone de sufixo
  let iconElement = null;
  if (icon !== false) {
    if (icon === "down" || (icon === undefined && currentVariant.defaultIcon === "down")) {
      iconElement = (
        <ArrowDown className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" />
      );
    } else if (typeof icon === "object") {
      iconElement = icon;
    } else {
      iconElement = (
        <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      );
    }
  }

  const Tag = as || (href && !disabled ? Link : "button");

  // Se NÃO tiver halo, renderiza o botão sólido direto (Sem div wrapper externo)
  if (!useHalo) {
    const solidClasses = cn(
      "inline-flex items-center justify-center font-sans font-bold rounded-full select-none cursor-pointer whitespace-nowrap transition-all duration-200 group",
      "focus-visible:outline-none focus-visible:shadow-focus-ring",
      currentVariant.base || currentVariant.inner,
      currentSize,
      disabled && "opacity-50 pointer-events-none",
      className
    );

    const tagProps = Tag === "button" ? { type, disabled, ...props } : Tag === Link ? { href, ...props } : props;

    return (
      <Tag className={solidClasses} {...tagProps}>
        <span className="whitespace-nowrap shrink-0">{children}</span>
        {iconElement}
      </Tag>
    );
  }

  // Se tiver halo/moldura 6px, renderiza o wrapper externo
  const wrapperClasses = cn(
    "inline-flex p-[6px] rounded-full border transition-all duration-200 select-none group cursor-pointer whitespace-nowrap",
    "focus-visible:outline-none focus-visible:shadow-focus-ring",
    currentVariant.wrapper,
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const buttonContent = (
    <span
      className={cn(
        "w-full inline-flex items-center justify-center font-sans font-bold rounded-full transition-all duration-200 whitespace-nowrap",
        "group-hover:scale-[1.01] group-active:scale-[0.98]",
        currentVariant.inner,
        currentSize
      )}
    >
      <span className="whitespace-nowrap shrink-0">{children}</span>
      {iconElement}
    </span>
  );

  const tagProps = Tag === "button" ? { type, disabled, ...props } : Tag === Link ? { href, ...props } : props;

  return (
    <Tag className={wrapperClasses} {...tagProps}>
      {buttonContent}
    </Tag>
  );
}

export default Button;
