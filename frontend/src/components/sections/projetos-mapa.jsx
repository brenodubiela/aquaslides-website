import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProjectMap } from "@/components/ui/project-map";
import { mockProjetos } from "@/data/mock-projetos";

export function ProjetosMapa() {
  return (
    <section className="w-full py-20 bg-canvas">
      <div className="max-w-content mx-auto px-4 md:px-xl mb-12 text-center flex flex-col items-center">
        <Reveal delay={0.1}>
          <Eyebrow variant="yellow" className="mb-sm">MAPA INTERATIVO</Eyebrow>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[800px] leading-tight">
            Confira alguns dos <span className="text-primary">projetos que entregamos e instalamos</span>
          </h2>
        </Reveal>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-xl">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-ink/5">
          <ProjectMap projects={mockProjetos} />
        </div>
      </div>
    </section>
  );
}
