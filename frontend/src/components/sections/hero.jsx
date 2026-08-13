import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/utils/cn";

export function Hero({
  eyebrow,
  title,
  titleHtml,
  description,
  buttonText,
  buttonHref,
  buttonVariant = "halo-primary",
  bgDesktop,
  bgMobile,
  logoSrc,
  noOverlay = false,
  overlayClassName = "bg-black/40",
  leftContent,
  children
}) {
  return (
    <section className="relative flex items-end md:items-center min-h-[90svh] w-full pt-[120px] pb-xl md:pb-section overflow-hidden">
      {/* Imagem Desktop */}
      {bgDesktop && (
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={bgDesktop}
            alt="Aqua Slides Atrações Aquáticas"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      )}

      {/* Imagem Mobile */}
      {bgMobile && (
        <div className="absolute inset-0 z-0 block md:hidden">
          <Image
            src={bgMobile}
            alt="Aqua Slides Atrações Aquáticas"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      )}
      
      {/* Fallback caso falte mobile */}
      {bgDesktop && !bgMobile && (
        <div className="absolute inset-0 z-0 block md:hidden">
          <Image
            src={bgDesktop}
            alt="Aqua Slides Atrações Aquáticas"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      )}

      {/* Overlay escuro */}
      {!noOverlay && <div className={cn("absolute inset-0 z-10", overlayClassName)} />}

      {/* Conteúdo */}
      <div className={cn(
        "relative z-20 w-full max-w-content mx-auto px-4 md:px-xl text-canvas",
        children 
          ? "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" 
          : "flex flex-col items-start justify-end md:justify-center"
      )}>
        
        {/* Coluna 1 (Textos) */}
        <div className="flex flex-col items-start w-full">
          {logoSrc ? (
            <Reveal delay={0.1}>
              <div className="relative h-10 w-48 mb-md">
                <Image 
                  src={logoSrc}
                  alt="Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Reveal>
          ) : eyebrow && (
            <Reveal delay={0.1}>
              <Eyebrow className="mb-sm text-xs md:text-eyebrow">
                {eyebrow}
              </Eyebrow>
            </Reveal>
          )}
          
          {titleHtml ? (
            <Reveal delay={0.2}>
              <h1 
                className="font-display text-h1-mobile md:text-h1 max-w-[800px] leading-tight mb-md"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />
            </Reveal>
          ) : title && (
            <Reveal delay={0.2}>
              <h1 className="font-display text-h1-mobile md:text-h1 max-w-[800px] leading-tight mb-md">
                {title}
              </h1>
            </Reveal>
          )}
          
          {description && (
            <Reveal delay={0.3}>
              <p className="font-sans text-p-mobile md:text-lead max-w-[600px] opacity-90 mb-lg">
                {description}
              </p>
            </Reveal>
          )}
          
          {buttonText && buttonHref && (
            <Reveal delay={0.4} className="w-full md:w-auto">
              <Button variant={buttonVariant} href={buttonHref} size="lg" className="w-full md:w-auto">
                {buttonText}
              </Button>
            </Reveal>
          )}

          {leftContent}
        </div>

        {/* Coluna 2 (Form/Conteúdo) */}
        {children && (
          <div className="w-full mt-8 md:mt-0">
            {children}
          </div>
        )}

      </div>
    </section>
  );
}
