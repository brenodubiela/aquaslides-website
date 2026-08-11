import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accordion } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Os equipamentos possuem garantia?",
    answer: "Sim, todos os nossos equipamentos contam com garantia de fábrica contra defeitos de fabricação e suporte técnico especializado vitalício para manutenção preventiva e corretiva."
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Sim, temos logística e equipe técnica preparadas para atender, projetar e instalar nossas atrações aquáticas em qualquer estado do território nacional."
  },
  {
    question: "A Aqua Slides realiza a obra civil?",
    answer: "Nossa especialidade é a engenharia, fabricação e instalação das atrações (toboáguas, complexos infantis, etc). Para a parte civil (piscinas, fundações e casas de máquinas), fornecemos todos os projetos executivos detalhados para a construtora de sua preferência executar."
  },
  {
    question: "Vocês fornecem os projetos técnicos?",
    answer: "Sim, entregamos todos os projetos técnicos necessários, memoriais descritivos, manuais de operação e as respectivas Anotações de Responsabilidade Técnica (ARTs) exigidas pelas normas da ABNT."
  }
];

export function HomeFaq() {
  return (
    <section className="py-20 bg-canvas">
      <div className="mx-auto w-full max-w-content px-xl">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-12">
          <Reveal delay={0.1}>
            <Eyebrow variant="yellow" className="mb-sm">FAQ</Eyebrow>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[600px] mb-4">
              Ficou com alguma dúvida?
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-sans text-base md:text-lg text-ink/80 max-w-[700px]">
              Confira as respostas para as perguntas mais comuns de nossos clientes.
            </p>
          </Reveal>
        </div>

        {/* Bloco do Acordeão */}
        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.4}>
            <Accordion items={faqItems} />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
