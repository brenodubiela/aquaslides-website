import Image from "next/image";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<ClientLogoCard />` — Aqua Slides Design System
 * 
 * Card de exibição puramente visual e estático para logos de clientes.
 * Mantém as proporções da imagem via `object-contain`.
 * 
 * DESIGN.md > components > client-logo-card
 * Figma: Nó 20509:215
 * 
 * @param {object} props
 * @param {string} props.src - Caminho da imagem (ex: "/images/clients/sesi.svg")
 * @param {string} props.alt - Texto alternativo descritivo da imagem
 * @param {string} [props.className] - Classes adicionais Tailwind (ex: override de dimensões)
 */
export function ClientLogoCard({
  src,
  alt,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative flex h-[109px] w-[269px] shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-strong p-base",
        className
      )}
      {...props}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 269px"
        />
      </div>
    </div>
  );
}

export default ClientLogoCard;
