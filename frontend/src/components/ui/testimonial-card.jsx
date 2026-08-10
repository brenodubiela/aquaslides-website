import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<TestimonialCard />` — Aqua Slides Design System
 *
 * Card de depoimento para prova social (Nó 20509:367 do Figma).
 * Server Component puro (estático).
 *
 * @param {object} props
 * @param {string} props.name - Nome do cliente
 * @param {string} props.text - Texto do depoimento
 * @param {string} [props.avatarSrc] - URL da foto do cliente (ou placeholder)
 * @param {number} [props.rating=5] - Quantidade de estrelas (1 a 5)
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function TestimonialCard({
  name,
  text,
  avatarSrc,
  rating = 5,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-md rounded-lg bg-surface-strong p-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-md">
        {/* Header com Avatar e Nome */}
        <div className="flex items-center gap-3">
          <div className="relative size-[50px] shrink-0 overflow-hidden rounded-full bg-surface">
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt={name}
                width={50}
                height={50}
                className="size-full object-cover"
              />
            ) : (
              /* Fallback de Avatar */
              <div className="flex size-full items-center justify-center bg-ink/10 font-sans font-bold text-ink text-base">
                {name?.charAt(0) || "U"}
              </div>
            )}
          </div>
          <h4 className="font-sans font-bold text-[18px] leading-tight text-ink">
            {name}
          </h4>
        </div>

        {/* Texto do Depoimento */}
        <p className="font-sans text-card-p leading-[1.45] text-body">
          {text}
        </p>
      </div>

      {/* Avaliação em Estrelas */}
      <div className="flex items-center gap-1 text-secondary" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "size-[18px]",
              index < rating ? "fill-current text-secondary" : "text-muted/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
