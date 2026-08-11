import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ClientLogoCard } from "@/components/ui/client-logo-card";

const clients = [
  { src: "/logos-clientes/image 2.png", alt: "Cliente 2" },
  { src: "/logos-clientes/image 3.png", alt: "Cliente 3" },
  { src: "/logos-clientes/image 4.png", alt: "Cliente 4" },
  { src: "/logos-clientes/image 5.png", alt: "Cliente 5" },
  { src: "/logos-clientes/image 6.png", alt: "Cliente 6" },
  { src: "/logos-clientes/image 7.png", alt: "Cliente 7" },
  { src: "/logos-clientes/image 8.png", alt: "Cliente 8" },
  { src: "/logos-clientes/image 9.png", alt: "Cliente 9" },
  { src: "/logos-clientes/image 10.png", alt: "Cliente 10" },
];

export function HomeClients() {
  return (
    <section className="py-section overflow-hidden bg-canvas">
      <div className="mx-auto w-full max-w-content px-xl mb-12 flex flex-col items-center text-center">
        <Reveal delay={0.1}>
          <Eyebrow variant="default" className="mb-sm">NOSSOS CLIENTES E PARCEIROS</Eyebrow>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[800px]">
            Quem confia na <span className="text-primary">Aqua Slides</span>
          </h2>
        </Reveal>
      </div>

      <div 
        className="relative flex w-full overflow-hidden" 
        style={{ 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        <div className="flex w-max animate-marquee gap-md hover:[animation-play-state:paused] pt-sm pb-sm">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-md shrink-0" aria-hidden={groupIndex > 0 ? "true" : undefined}>
              {clients.map((client, i) => (
                <ClientLogoCard key={`${groupIndex}-${i}`} src={client.src} alt={client.alt} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
