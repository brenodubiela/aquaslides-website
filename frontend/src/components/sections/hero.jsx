import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Hero() {
  return (
    <section className="relative flex items-end md:items-center min-h-[90svh] w-full pt-[120px] pb-xl md:pb-section overflow-hidden">
      {/* Imagem Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/home-bghero-desktop.jpg"
          alt="Aqua Slides Atrações Aquáticas"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* Imagem Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src="/home-bghero-mobile.jpg"
          alt="Aqua Slides Atrações Aquáticas"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-content mx-auto px-xl flex flex-col items-start justify-end md:justify-center text-canvas">

        <Reveal delay={0.1}>
          <Eyebrow className="mb-sm text-xs md:text-eyebrow">
            Especialistas em Equipamentos Aquáticos
          </Eyebrow>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h1 className="font-display text-h1-mobile md:text-h1 max-w-[800px] leading-tight mb-md">
            Atrações aquáticas completas, <span className="text-secondary">do projeto à operação</span>
          </h1>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="font-sans text-p-mobile md:text-lead max-w-[600px] opacity-90 mb-lg">
            Instalação inclusa em todo o Brasil
          </p>
        </Reveal>
        
        <Reveal delay={0.4} className="w-full md:w-auto">
          <Button variant="halo-primary" href="/contato" size="lg" className="w-full md:w-auto">
            Solicite seu Projeto
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
