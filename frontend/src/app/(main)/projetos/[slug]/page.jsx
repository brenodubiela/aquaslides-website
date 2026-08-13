import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, PlayCircle } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckItem } from "@/components/ui/check-item";
import { SharedCta } from "@/components/sections/shared-cta";
import { mockProjetos } from "@/data/mock-projetos";

export async function generateStaticParams() {
  return mockProjetos.map((projeto) => ({
    slug: projeto.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = mockProjetos.find((p) => p.slug === slug);
  
  if (!project) return {};

  return {
    title: `${project.title} - Aqua Slides`,
    description: project.description || `Confira os detalhes do projeto ${project.title} entregue pela Aqua Slides.`,
    alternates: {
      canonical: `/projetos/${slug}`,
    }
  };
}

export default async function ProjetoPage({ params }) {
  const { slug } = await params;
  const project = mockProjetos.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-canvas min-h-screen">
      <Hero
        eyebrow={<span className="text-secondary">PROJETO</span>}
        title={project.title}
        bgDesktop={project.image}
        overlayClassName="bg-black/70"
        leftContent={
          <Reveal delay={0.4} className="w-full md:w-auto mt-lg">
            <Button variant="halo-primary" href="/contato" size="lg" className="w-full md:w-auto">
              Solicite seu Projeto
            </Button>
          </Reveal>
        }
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <Eyebrow variant="yellow">SOBRE O PROJETO</Eyebrow>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h2 className="font-display text-h2-mobile md:text-h2 text-primary">
                {project.title}
              </h2>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex items-center gap-2 text-ink/60">
                <MapPin className="size-5 text-secondary shrink-0" />
                <span>{project.locationText}</span>
              </div>
            </Reveal>
            
            {project.description && (
              <Reveal delay={0.4}>
                <p className="text-ink/80 leading-relaxed text-lead">
                  {project.description}
                </p>
              </Reveal>
            )}
            
            {project.checklist && project.checklist.length > 0 && (
              <Reveal delay={0.5}>
                <ul className="flex flex-col gap-3 mt-2">
                  {project.checklist.map((item, index) => (
                    <CheckItem key={index} text={item} />
                  ))}
                </ul>
              </Reveal>
            )}
            
            <Reveal delay={0.6}>
              <Button variant="halo-primary" href="/contato" size="lg" className="w-fit mt-4">
                Solicite seu Projeto
              </Button>
            </Reveal>
          </div>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl lg:order-last">
            <Reveal delay={0.4} className="absolute inset-0 size-full">
              {project.youtubeUrl ? (
                <iframe 
                  src={project.youtubeUrl} 
                  allow="autoplay; encrypted-media; picture-in-picture" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              ) : (
                <div className="absolute inset-0 bg-surface-strong flex items-center justify-center text-ink/40 group">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <PlayCircle className="size-16 text-primary drop-shadow-md opacity-80" strokeWidth={1.5} />
                    <span className="font-sans font-medium text-sm text-ink bg-canvas/80 px-3 py-1 rounded-full backdrop-blur-sm">
                      Vídeo do Projeto
                    </span>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imagem, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group">
                    <Image
                      src={imagem}
                      alt={`${project.title} - Imagem ${index + 1}`}
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

      <SharedCta />
    </main>
  );
}
