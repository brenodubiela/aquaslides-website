import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/ui/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";
import Link from "next/link";

export const metadata = {
  title: "Contato",
  description: "Solicite um orçamento personalizado para o seu parque aquático.",
  alternates: {
    canonical: "/contato",
  },
};

const BG_DESKTOP = "/bghero-contato.png";

export default function ContatoPage() {
  return (
    <main>
      <Hero
        bgDesktop={BG_DESKTOP}
        noOverlay={true}
        title={
          <>
            Solicite um Orçamento <span className="text-secondary">Personalizado</span>
          </>
        }
        description="Preencha os dados no formulário para que nossa equipe técnica entenda seu projeto e prepare a melhor solução."
        leftContent={
          <Reveal delay={0.4} className="mt-8">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-canvas text-primary hover:scale-105 hover:bg-canvas/90 transition-transform"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-canvas text-primary hover:scale-105 hover:bg-canvas/90 transition-transform"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-canvas text-primary hover:scale-105 hover:bg-canvas/90 transition-transform"
                aria-label="YouTube"
              >
                <YoutubeIcon className="size-5" />
              </Link>
            </div>
          </Reveal>
        }
      >
        <Reveal delay={0.5}>
          <ContactForm />
        </Reveal>
      </Hero>
    </main>
  );
}
