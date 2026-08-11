import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Mateus",
    text: "Projetos bem arquitetados e com uma execução impecável. A equipe foi muito profissional do início ao fim da obra.",
    avatarSrc: "/img-depoimentos/Ellipse 27.png",
    rating: 5,
  },
  {
    name: "Luana Inthum",
    text: "Eficiência, agilidade e um atendimento que superou nossas expectativas. O parque ficou incrível e os clientes amaram.",
    avatarSrc: "/img-depoimentos/Ellipse 27-1.png",
    rating: 5,
  },
  {
    name: "Ana Clara Braga",
    text: "Muitooo boa, Empresa sensacional! O brinquedo novo é o maior sucesso da temporada, qualidade excepcional.",
    avatarSrc: "/img-depoimentos/Ellipse 28.png",
    rating: 5,
  },
  {
    name: "PAULO ROGERIO RODRIGUES",
    text: "Com produtos de alta qualidade e um suporte técnico sempre presente. Indico a Aqua Slides de olhos fechados.",
    avatarSrc: "/img-depoimentos/Ellipse 27-2.png",
    rating: 5,
  }
];

export function HomeTestimonials() {
  return (
    <section className="py-section overflow-hidden bg-canvas">
      {/* Header */}
      <div className="mx-auto w-full max-w-content px-xl mb-12 flex flex-col items-center text-center">
        <Reveal delay={0.1}>
          <Eyebrow variant="yellow" className="mb-sm">
            DEPOIMENTOS
          </Eyebrow>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[800px]">
            O que nossos clientes estão dizendo sobre a <span className="text-primary">Aqua Slides</span>
          </h2>
        </Reveal>
      </div>

      {/* Marquee de Depoimentos */}
      <div 
        className="relative flex w-full overflow-hidden"
        style={{ 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        <div className="flex w-max animate-marquee gap-md hover:[animation-play-state:paused] pt-sm pb-sm">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-md shrink-0" aria-hidden={groupIndex > 0 ? "true" : undefined}>
              {testimonials.map((t, i) => (
                <div key={`${groupIndex}-${i}`} className="w-[320px] md:w-[420px] shrink-0">
                  <TestimonialCard 
                    name={t.name}
                    text={t.text}
                    avatarSrc={t.avatarSrc}
                    rating={t.rating}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
