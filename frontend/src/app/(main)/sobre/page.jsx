import { Hero } from "@/components/sections/hero";
import { HomeStats } from "@/components/sections/home-stats";
import { SobreMissaoVisao } from "@/components/sections/sobre-missao-visao";
import { SobreTimeline } from "@/components/sections/sobre-timeline";
import { SobreProcesso } from "@/components/sections/sobre-processo";
import { HomeClients } from "@/components/sections/home-clients";
import { HomeSuccessCases } from "@/components/sections/home-success-cases";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { HomeBlog } from "@/components/sections/home-blog";
import { HomeFaq } from "@/components/sections/home-faq";

export const metadata = {
  title: "Sobre a Empresa",
  description: "Conheça a Aqua Slides, a nova referência em atrações aquáticas.",
  alternates: {
    canonical: "/sobre",
  },
};

const BG_DESKTOP = "/bghero-sobrenos-desktop.jpg";
const BG_MOBILE = "/bghero-sobrenos-mobile.jpg";

export default function SobrePage() {
  return (
    <main>
      <Hero
        eyebrow={<span className="text-secondary">SOBRE A EMPRESA</span>}
        title={
          <>
            A nova referência em <span className="text-secondary">atrações aquáticas</span>
          </>
        }
        description="Unimos tecnologia e gestão eficiente para garantir obras seguras sem atrasos."
        buttonText="Solicite seu Projeto"
        buttonHref="/contato"
        bgDesktop={BG_DESKTOP}
        bgMobile={BG_MOBILE}
      />
      <HomeStats />
      <SobreMissaoVisao />
      <SobreTimeline />
      <SobreProcesso />
      <HomeClients />
      <HomeSuccessCases />
      <HomeTestimonials />
      <HomeBlog />
      <HomeFaq />
    </main>
  );
}
