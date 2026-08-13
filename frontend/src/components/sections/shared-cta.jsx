import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { CheckItem } from "@/components/ui/check-item";

const BG_IMAGE = "/ctaimg-crianca.jpg";

export function SharedCta() {
  return (
    <section className="relative overflow-hidden py-24 w-full flex items-center min-h-[600px]">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE}
          alt="Criança brincando em atração aquática"
          fill
          className="object-cover object-[center_top]"
          sizes="100vw"
        />
      </div>

      {/* Overlay Responsivo (Apenas Mobile, opacidade bem leve) */}
      <div className="absolute inset-0 z-10 bg-primary/80 md:hidden" />

      {/* Conteúdo alinhado à esquerda na grid principal */}
      <div className="relative z-20 mx-auto w-full max-w-content px-xl">
        <div className="flex flex-col items-start text-left w-full md:w-3/5 lg:w-1/2">
          <Reveal delay={0.1}>
            <Eyebrow variant="yellow" className="mb-sm">
              AQUA SLIDES
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-h2-mobile md:text-h2 text-white max-w-[500px] mb-4">
              A nova referência em atrações aquáticas no Brasil
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-sans text-p-mobile md:text-p text-white/90 max-w-[500px] mb-8">
              Unimos tecnologia própria e gestão eficiente para entregar previsibilidade real ao seu investimento.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="flex flex-col gap-3 mb-10 text-white">
              <CheckItem text="Segurança Jurídica e Técnica" className="text-white" />
              <CheckItem text="Entrega Completa" className="text-white" />
              <CheckItem text="Suporte Vitalício" className="text-white" />
            </ul>
          </Reveal>

          <Reveal delay={0.5}>
            {/* Seguindo a regra do botão do Hero (Halo), mas aplicando a cor amarela (secondary) pedida no Figma/Prompt */}
            <Button href="/contato" variant="halo-secondary" size="lg">
              Solicite um projeto
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
