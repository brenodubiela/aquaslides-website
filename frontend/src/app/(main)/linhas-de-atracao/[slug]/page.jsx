import { notFound } from "next/navigation";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckItem } from "@/components/ui/check-item";
import { mockLinhasAtracao } from "@/data/mock-linhas";
import { PlayCircle } from "lucide-react";
import { ModelCarousel } from "@/components/ui/model-carousel";
import { SharedCta } from "@/components/sections/shared-cta";
import { Accordion } from "@/components/ui/accordion";

export async function generateStaticParams() {
  return mockLinhasAtracao.map((linha) => ({
    slug: linha.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const linha = mockLinhasAtracao.find((l) => l.slug === slug);
  
  if (!linha) return {};

  return {
    title: `${linha.title} - Aqua Slides`,
    description: linha.description || `Confira a atração ${linha.title} da Aqua Slides.`,
    alternates: {
      canonical: `/linhas-de-atracao/${slug}`,
    }
  };
}

export default async function LinhaAtracaoPage({ params }) {
  const { slug } = await params;
  const linha = mockLinhasAtracao.find((l) => l.slug === slug);

  if (!linha) {
    notFound();
  }

  // Define dynamic text color class for the eyebrow and title highlights
  // Mapping themeColor to specific DS colors. For 'red', we use 'text-ball'.
  const themeTextClass = linha.themeColor === "red" ? "text-ball" : "text-primary";

  return (
    <main className="w-full bg-canvas min-h-screen">
      <Hero
        titleHtml={linha.titleHtml || linha.title}
        description={linha.description}
        bgDesktop={linha.bgDesktop}
        logoSrc={linha.logoSrc}
        overlayClassName="bg-black/70"
        buttonText="Solicite seu Projeto"
        buttonHref="/contato"
        buttonVariant={linha.buttonVariant || "primary"}
      />

      {/* Seção Sobre o Projeto / Detalhes & Vídeo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Coluna Esquerda (Informações) */}
            <div className="flex flex-col">
              <Reveal delay={0.1}>
                <Eyebrow className="mb-4">PRODUTO</Eyebrow>
              </Reveal>
              
              <Reveal delay={0.2}>
                <h2 className="text-h2-mobile md:text-h2 font-display mb-6">
                  {linha.detailsTitle}
                </h2>
              </Reveal>
              
              <Reveal delay={0.3}>
                <p className="text-p-mobile md:text-p text-ink/80 mb-8">
                  {linha.detailsDescription}
                </p>
              </Reveal>

              {linha.checklist && linha.checklist.length > 0 && (
                <Reveal delay={0.4}>
                  <ul className="flex flex-col gap-3 mb-8">
                    {linha.checklist.map((item, i) => (
                      <CheckItem key={i} text={item} />
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal delay={0.5}>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button variant="halo-primary" href="/contato">
                    Solicite seu Projeto
                  </Button>
                  <Button variant="soft" href="/projetos" icon="up-right">
                    Ver projetos
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Coluna Direita (Vídeo) */}
            <div className="w-full">
              <Reveal delay={0.4}>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-surface-strong group">
                  {linha.youtubeUrl ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={linha.youtubeUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 bg-surface-strong flex items-center justify-center text-ink/40 group">
                      <Image 
                        src={linha.bgDesktop}
                        alt={linha.detailsTitle || "Vídeo"}
                        fill
                        className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                      />
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <PlayCircle className="size-16 text-primary drop-shadow-md opacity-80" strokeWidth={1.5} />
                        <span className="font-sans font-medium text-sm text-ink bg-canvas/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          Vídeo da Atração
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Galeria de Fotos */}
      {linha.gallery && linha.gallery.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linha.gallery.map((imgUrl, index) => (
                <Reveal key={index} delay={0.1 * (index + 1)}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image
                      src={imgUrl}
                      alt={`Imagem ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seção Modelos e Catálogo */}
      {linha.models && linha.models.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 overflow-hidden">
          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center">
            <Reveal delay={0.1}>
              <Eyebrow className="mb-4">MODELOS</Eyebrow>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-h2-mobile md:text-h2 font-display">
                Conheça os Modelos de {linha.detailsTitle}
              </h2>
            </Reveal>
          </div>

          {/* Carrossel */}
          <Reveal delay={0.3}>
            <div className="mt-12">
              <ModelCarousel models={linha.models} />
            </div>
          </Reveal>

          {/* Rodapé (Download Catálogo) */}
          {linha.catalogPdfUrl && (
            <Reveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Button 
                  as="a" 
                  href={linha.catalogPdfUrl} 
                  download 
                  variant="primary" 
                  icon="down"
                >
                  Baixar catálogo completo
                </Button>
              </div>
            </Reveal>
          )}
        </section>
      )}

      {/* CTA Final */}
      <SharedCta />

      {/* Seção FAQ */}
      {linha.faq && linha.faq.length > 0 && (
        <section className="py-20 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <Reveal delay={0.1}>
              <Eyebrow className="mb-4">FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-h2-mobile md:text-h2 font-display mb-4">
                Ficou com alguma dúvida?
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-p-mobile md:text-p text-ink/80 max-w-2xl mx-auto">
                Confira as respostas para as perguntas mais comuns de nossos clientes.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <Accordion items={linha.faq} />
          </Reveal>
        </section>
      )}
    </main>
  );
}
