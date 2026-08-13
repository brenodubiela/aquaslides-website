import { Hero } from "@/components/sections/hero";
import { HomeStats } from "@/components/sections/home-stats";
import { HomeSolutions } from "@/components/sections/home-solutions";
import { HomeClients } from "@/components/sections/home-clients";
import { HomeSuccessCases } from "@/components/sections/home-success-cases";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { HomeBlog } from "@/components/sections/home-blog";
import { HomeFaq } from "@/components/sections/home-faq";
import { SharedCta } from "@/components/sections/shared-cta";

export const metadata = {
  title: "Início",
  description: "Página inicial da Aqua Slides.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero 
        eyebrow="Especialistas em Equipamentos Aquáticos"
        title={<>Atrações aquáticas completas, <span className="text-secondary">do projeto à operação</span></>}
        description="Instalação inclusa em todo o Brasil"
        buttonText="Solicite seu Projeto"
        buttonHref="/contato"
        bgDesktop="/home-bghero-desktop.jpg"
        bgMobile="/home-bghero-mobile.jpg"
      />
      <HomeStats />
      <HomeSolutions />
      <HomeClients />
      <HomeSuccessCases />
      <SharedCta />
      <HomeTestimonials />
      <HomeBlog />
      <HomeFaq />
    </main>
  );
}
