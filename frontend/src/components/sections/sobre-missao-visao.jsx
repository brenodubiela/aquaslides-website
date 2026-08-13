import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ValueCard } from "@/components/ui/value-card";
import { CheckItem } from "@/components/ui/check-item";
import { Target, CheckCircle, Building2 } from "lucide-react";

export function SobreMissaoVisao() {
  return (
    <section className="bg-canvas py-20 w-full overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-xl flex flex-col gap-12">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <Eyebrow variant="yellow">MISSÃO, VISÃO E VALORES</Eyebrow>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-display text-h2-mobile md:text-h2 text-ink">
              Unimos paixão por lazer com obsessão por <span className="text-primary">processos, prazos e segurança</span>.
            </h2>
          </Reveal>
        </div>

        {/* Grid de Cards Institucionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Missão */}
          <Reveal delay={0.3}>
            <ValueCard 
              icon={<Target className="size-8" />}
              eyebrow="NOSSA MISSÃO"
              title="Foco total na execução"
            >
              <p>Entregar projetos aquáticos de alta qualidade, garantindo segurança e pontualidade em todas as etapas, da concepção à operação final.</p>
            </ValueCard>
          </Reveal>

          {/* Visão */}
          <Reveal delay={0.4}>
            <ValueCard 
              icon={<Building2 className="size-8" />}
              eyebrow="NOSSA VISÃO"
              title="Referência no mercado"
            >
              <p>Ser reconhecida como a melhor e mais confiável empresa de montagem e manutenção de atrações aquáticas de todo o Brasil.</p>
            </ValueCard>
          </Reveal>

          {/* Valores */}
          <Reveal delay={0.5}>
            <ValueCard 
              icon={<CheckCircle className="size-8" />}
              eyebrow="NOSSOS VALORES"
              title="Compromisso e Qualidade"
            >
              <ul className="flex flex-col gap-4">
                <CheckItem text="Segurança em primeiro lugar" />
                <CheckItem text="Excelência nos processos" />
                <CheckItem text="Transparência com os clientes" />
              </ul>
            </ValueCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
