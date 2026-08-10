import Image from "next/image";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

/**
 * Primitivo `<BlogCard />` — Aqua Slides Design System
 * 
 * Card de artigo para blog/posts suportando duas variações de layout.
 * Figma: Nó 20509:726
 * 
 * @param {object} props
 * @param {string} props.title - Título do artigo
 * @param {string} props.excerpt - Resumo do artigo
 * @param {string} props.imageSrc - Caminho da imagem de capa
 * @param {string} props.href - URL de destino do artigo
 * @param {"vertical" | "horizontal"} [props.layout="vertical"] - Diagramação do card
 * @param {string} [props.className] - Classes Tailwind adicionais para o container
 */
export function BlogCard({
  title,
  excerpt,
  imageSrc,
  href,
  layout = "vertical",
  className,
  ...props
}) {
  const isHorizontal = layout === "horizontal";

  return (
    <article
      className={cn(
        "flex h-full min-w-px gap-lg",
        isHorizontal ? "flex-col md:flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      {/* Imagem de Capa */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-[30px] bg-surface",
          isHorizontal ? "w-full md:w-1/2 aspect-video md:aspect-[4/3]" : "w-full aspect-[4/3] lg:h-[378px] lg:aspect-auto"
        )}
      >
        <Image
          src={imageSrc}
          alt={`Capa do artigo: ${title}`}
          fill
          className="object-cover"
          sizes={isHorizontal ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 60vw"}
        />
      </div>

      {/* Conteúdo Textual e Ação */}
      <div
        className={cn(
          "flex flex-col gap-lg flex-grow",
          isHorizontal ? "w-full md:w-1/2 justify-center" : ""
        )}
      >
        <div className="flex flex-col gap-2 shrink-0">
          <h3
            className={cn(
              "font-sans font-bold text-ink leading-[1.2] line-clamp-3",
              isHorizontal ? "text-2xl tracking-[-1px]" : "text-[32px] tracking-[-1.6px]"
            )}
          >
            {title}
          </h3>
          <p className="font-sans text-base tracking-[-0.8px] text-ink/80 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Botão de Ação Inferior */}
        <div className={cn("shrink-0", !isHorizontal && "mt-auto pt-2")}>
          <Button variant="warm" href={href} className="w-full">
            Ver artigo completo
          </Button>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
