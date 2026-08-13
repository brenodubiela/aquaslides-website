import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/ui/social-links";
import { FooterCTA } from "./footer-cta";

const LOGO_FOOTER_SRC = "/logoazulrodape.svg";

export function Footer() {
  return (
    <footer className="w-full flex flex-col mt-auto bg-surface pt-12 md:pt-16">
      {/* Área 1: CTA (Newsletter/Contato) */}
      <FooterCTA />

      {/* Área 2: Navegação e Informações Legais */}
      <div className="text-ink/80">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-xl max-w-content mx-auto mb-16">
          
          {/* Coluna 1: Marca */}
          <div className="flex flex-col gap-4">
            <div className="relative w-48 h-16">
              {/* Fallback temporário caso a logo não exista */}
              <Image 
                src={LOGO_FOOTER_SRC} 
                alt="Logo Aqua Slides" 
                fill
                className="object-contain object-left" 
              />
              <span className="hidden font-display text-2xl font-bold text-primary">AQUA SLIDES</span>
            </div>
            <p className="font-sans text-base max-w-[250px]">
              Atrações aquáticas completas, do projeto à operação
            </p>
          </div>
          
          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-lg text-primary">Navegação</h4>
            <Link href="/" className="hover:text-secondary transition-colors w-fit">Início</Link>
            <Link href="/sobre" className="hover:text-secondary transition-colors w-fit">Sobre a Empresa</Link>
            <Link href="/projetos" className="hover:text-secondary transition-colors w-fit">Projetos</Link>
            <Link href="/blog" className="hover:text-secondary transition-colors w-fit">Blog</Link>
          </div>

          {/* Coluna 3: Linhas de Atrações */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-lg text-primary">Linhas de Atrações</h4>
            <Link href="/linhas-de-atracoes#aqua-ball" className="hover:text-secondary transition-colors w-fit">Aqua Ball</Link>
            <Link href="/linhas-de-atracoes#aqua-fresh" className="hover:text-secondary transition-colors w-fit">Aqua Fresh</Link>
            <Link href="/linhas-de-atracoes#aqua-ramp" className="hover:text-secondary transition-colors w-fit">Aqua Ramp</Link>
            <Link href="/linhas-de-atracoes#aqua-free-fall" className="hover:text-secondary transition-colors w-fit">Aqua Free Fall</Link>
            <Link href="/linhas-de-atracoes#aqua-playground" className="hover:text-secondary transition-colors w-fit">Aqua Playground</Link>
            <Link href="/linhas-de-atracoes#aqua-toboagua" className="hover:text-secondary transition-colors w-fit">Aqua Toboágua</Link>
            <Link href="/linhas-de-atracoes#aqua-complexos" className="hover:text-secondary transition-colors w-fit">Aqua Complexos</Link>
          </div>

          {/* Coluna 4: Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-lg text-primary">Legal</h4>
            <Link href="/politica-de-privacidade" className="hover:text-secondary transition-colors w-fit">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-secondary transition-colors w-fit">Termos de Uso</Link>
          </div>
        </div>

        {/* Barra Inferior (Copyright e Redes Sociais) */}
        <div className="border-t border-ink/10 py-6 px-xl max-w-content mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-ink/60">
            Direitos autorais © {new Date().getFullYear()} Aqua Slides. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-primary">
            <SocialLinks 
              networks={[
                { name: "facebook", url: "#" },
                { name: "instagram", url: "#" },
                { name: "youtube", url: "#" },
              ]}
              variant="footer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
