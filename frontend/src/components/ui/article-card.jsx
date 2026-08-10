import Image from "next/image";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

/**
 * Primitivo `<ArticleCard />` — Aqua Slides Design System
 * 
 * Card de artigo para blog/posts (Nó 20509:438 do Figma).
 * Server Component puro, focado na exibição de título, resumo e imagem de capa.
 * Reutiliza o componente Button (variante "warm") para a ação.
 * 
 * @param {object} props
 * @param {string} props.title - Título do artigo (exibido como h3)
 * @param {string} props.excerpt - Resumo do artigo
 * @param {string} props.imageSrc - Caminho da imagem de capa
 * @param {string} props.href - URL de destino do artigo
 * @param {string} [props.className] - Classes Tailwind adicionais para o container
 */
export function ArticleCard({
  title,
  excerpt,
  imageSrc,
  href,
  className,
  ...props
}) {
  return (
    <article
      className={cn(
        "flex flex-col h-full min-w-px gap-lg",
        className
      )}
      {...props}
    >
      {/* Imagem de Capa */}
      <div className="relative w-full shrink-0 overflow-hidden rounded-[30px] bg-surface aspect-[4/3] md:h-[378px] md:aspect-auto">
        <Image
          src={imageSrc}
          alt={`Capa do artigo: ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Conteúdo Textual */}
      <div className="flex flex-col gap-2 shrink-0 flex-grow">
        <h3 className="font-sans font-bold text-2xl tracking-[-1px] text-ink leading-[1.2] line-clamp-3">
          {title}
        </h3>
        <p className="font-sans text-base tracking-[-0.8px] text-ink/80 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>

      {/* Botão de Ação Inferior */}
      <div className="mt-auto shrink-0 pt-2">
        <Button variant="warm" href={href} className="w-full">
          Ver artigo completo
        </Button>
      </div>
    </article>
  );
}

export default ArticleCard;
