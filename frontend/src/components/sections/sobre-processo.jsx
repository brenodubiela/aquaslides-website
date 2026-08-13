import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";

export function SobreProcesso() {
  return (
    <section className="bg-canvas py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_1fr] gap-8 md:gap-x-12 md:gap-y-6">
          
          {/* Bloco 1: Textos */}
          <div className="flex flex-col gap-4 md:col-start-1 md:row-start-1">
            <Reveal delay={0.1}>
              <Eyebrow variant="orange">PROCESSO</Eyebrow>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h2 className="font-display text-h2-mobile md:text-h2 text-ink">
                <span className="text-primary">Execução completa</span> do projeto à operação
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-sans text-card-p text-body">
                Simplificamos a engenharia complexa para que você não precise se preocupar com a obra. A Aqua Slides gerencia e executa todas as etapas com máximo rigor e segurança.
              </p>
            </Reveal>
          </div>

          {/* Bloco 2: Cards */}
          <div className="flex flex-col gap-6 md:col-start-2 md:row-start-1 md:row-span-2">
            <Reveal delay={0.4}>
              <InfoCard 
                title="Engenharia & Projetos" 
                description="Desenvolvimento minucioso de toda a documentação, plantas e cálculos estruturais para aprovação e execução."
              />
            </Reveal>
            <Reveal delay={0.5}>
              <InfoCard 
                title="Fabricação Própria" 
                description="Produção interna dos componentes aquáticos garantindo o mais alto padrão de qualidade e resistência."
              />
            </Reveal>
            <Reveal delay={0.6}>
              <InfoCard 
                title="Instalação & Start" 
                description="Montagem rápida e segura no local, seguida de testes rigorosos (comissionamento) para a inauguração."
              />
            </Reveal>
          </div>

          {/* Bloco 3: Botão CTA */}
          <div className="self-start md:col-start-1 md:row-start-2">
            <Reveal delay={0.7}>
              <Button variant="halo-primary" href="/contato">
                Solicite seu Projeto
              </Button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
