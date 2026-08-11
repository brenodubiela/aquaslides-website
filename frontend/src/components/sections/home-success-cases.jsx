import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { SuccessCasesGallery } from "@/components/ui/success-cases-gallery";

export function HomeSuccessCases() {
  return (
    <section className="py-section overflow-hidden bg-canvas">
      <div className="mx-auto w-full max-w-content px-xl">
        
        {/* Header da Seção */}
        <div className="mb-12 flex flex-col items-center text-center">
          <Reveal delay={0.1}>
            <Eyebrow variant="default" className="mb-sm">CASE DE SUCESSO</Eyebrow>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[800px]">
              Conheça <span className="text-primary">nossos maiores</span> cases de sucesso, o próximo pode ser o seu!
            </h2>
          </Reveal>
        </div>

        {/* Ilha Interativa de Cases */}
        <Reveal delay={0.3}>
          <SuccessCasesGallery />
        </Reveal>

        {/* CTA Inferior */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <Button href="/contato" variant="halo-primary" size="lg">
              Quero ser o Próximo Case de Sucesso
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
