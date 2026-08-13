"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function FooterCTA() {
  const pathname = usePathname();
  
  // Oculta o CTA na página de contato
  if (pathname === "/contato") return null;

  return (
    <div className="w-full max-w-content mx-auto px-4 sm:px-6 md:px-xl mb-12 md:mb-16">
      <div 
        className="bg-secondary rounded-[32px] md:rounded-[48px] py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundImage: 'url(/patternbgrodape.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 gap-6 relative z-10">
          <span className="font-sans font-bold text-sm tracking-[1.4px] uppercase text-primary">
            FIQUE POR DENTRO
          </span>
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink">
            Descubra as inovações que vão transformar o seu parque aquático em referência.
          </h2>
          <Button variant="primary" href="/contato" size="lg" className="mt-4">
            Receber Novidades e Lançamentos
          </Button>
        </div>
      </div>
    </div>
  );
}
