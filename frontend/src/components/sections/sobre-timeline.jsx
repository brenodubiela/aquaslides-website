import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Timeline } from "@/components/ui/timeline";

const TIMELINE_EVENTS = [
  {
    year: "2022",
    title: "Nasce a Aqua Sides",
    description: "Nascemos no polo industrial de Santa Catarina já inovando no mercado de lazer aquático do país.",
  },
  {
    year: "2023",
    title: "Expansão",
    description: "O mercado respondeu à nossa qualidade. Consolidamos nossa presença atendendo diversos clientes e complexos.",
  },
  {
    year: "2024",
    title: "Grandes Projetos",
    description: "Atingimos a maturidade técnica para complexos de grande porte com soluções completas de engenharia.",
  },
  {
    year: "2025",
    title: "Referência",
    description: "Estabelecemos o novo padrão do setor: a entrega Turnkey de grandes atrações sem atrasos na obra.",
  },
];

export function SobreTimeline() {
  return (
    <section className="bg-canvas py-20 w-full overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-xl">
        {/* Cabeçalho centralizado */}
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <Reveal delay={0.1}>
            <Eyebrow variant="yellow">LINHA DO TEMPO</Eyebrow>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-display text-h2-mobile md:text-h2 text-ink">
              Engenharia, Paixão e <span className="text-secondary">Previsibilidade</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-sans text-card-p text-body">
              A Aqua Slides nasceu para profissionalizar o mercado de lazer no Brasil
            </p>
          </Reveal>
        </div>

        {/* Bloco da Linha do Tempo */}
        <div className="mt-16 max-w-5xl mx-auto px-4">
          <Reveal delay={0.4}>
            <Timeline items={TIMELINE_EVENTS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
