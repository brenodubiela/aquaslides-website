import Image from "next/image";
import { CheckItem } from "@/components/ui/check-item";

export function ModelCard({ model, className }) {
  return (
    <article className={`flex flex-col rounded-3xl border border-canvas/20 bg-surface shadow-sm overflow-hidden h-full ${className || ""}`}>
      {/* Imagem */}
      <div className="relative w-full aspect-[3/2] bg-surface-strong">
        <Image
          src={model.image}
          alt={model.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="font-display text-h3 text-primary mb-3">
          {model.title}
        </h3>
        
        <p className="font-sans text-p text-ink/70 mb-8 flex-1">
          {model.description}
        </p>

        {/* Grid base (2 colunas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-canvas/20 mt-auto">
          {/* Coluna Atrações */}
          <div>
            <h4 className="font-sans font-bold text-sm text-ink mb-4 uppercase tracking-wider">Atrações</h4>
            <ul className="flex flex-col gap-3">
              {model.features.map((feature, idx) => (
                <CheckItem key={`feature-${idx}`} text={feature} />
              ))}
            </ul>
          </div>

          {/* Coluna Especificações */}
          <div>
            <h4 className="font-sans font-bold text-sm text-ink mb-4 uppercase tracking-wider">Especificações</h4>
            <ul className="flex flex-col gap-3">
              {model.specs.map((spec, idx) => (
                <CheckItem key={`spec-${idx}`} text={spec} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ModelCard;
