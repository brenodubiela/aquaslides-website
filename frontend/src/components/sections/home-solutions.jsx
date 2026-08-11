import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/utils/cn";

const categories = [
  { id: "playground", title: "Playground", image: "/solutions/playground.jpg" },
  { id: "toboagua", title: "Toboáguas", image: "/solutions/toboagua.jpg" },
  { id: "free-fall", title: "Free Fall", image: "/solutions/free-fall.jpg" },
  { id: "ramp", title: "Ramp", image: "/solutions/ramp.jpg" },
  { id: "fresh", title: "Fresh", image: "/solutions/fresh.jpg" },
  { id: "ball", title: "Ball", image: "/solutions/ball.jpg" },
  { id: "complexos", title: "Complexos", image: "/solutions/complexo.jpg" },
];

export function HomeSolutions() {
  return (
    <section className="w-full pt-0 pb-section bg-canvas">
      <div className="max-w-content mx-auto px-xl">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-md md:gap-lg">
          {/* Header Text Block - Spans 2 cols on Desktop */}
          <Reveal delay={0.1} className="md:col-span-2 flex flex-col items-start text-left justify-center py-lg md:py-0 md:pr-xl">
            <Eyebrow className="mb-sm">NOSSAS SOLUÇÕES</Eyebrow>
            <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[800px] leading-tight mb-lg">
              Experiências aquáticas{" "}
              <span className="text-primary">que elevam o seu empreendimento</span>
            </h2>
            <Button variant="indicator" href="/linhas-de-atracoes">
              Clique na categoria e saiba mais
            </Button>
          </Reveal>

          {/* Grid de Categorias */}
          {categories.map((cat, index) => (
            <Reveal
              key={cat.id}
              delay={0.2 + index * 0.1}
              className="w-full"
            >
              <Link
                href={`/linhas-de-atracoes/${cat.id}`}
                className="relative flex items-center justify-center w-full aspect-[464/250] overflow-hidden rounded-2xl group"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSolutions;
