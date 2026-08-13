import { Hero } from "@/components/sections/hero";
import { HomeStats } from "@/components/sections/home-stats";
import { ProjetosMapa } from "@/components/sections/projetos-mapa";

export const metadata = {
  title: "Projetos Entregues",
  description: "Confira algumas das atrações e parques aquáticos construídos pela Aqua Slides em todo o Brasil.",
  alternates: {
    canonical: "/projetos",
  },
};

const BG_DESKTOP = "/bghero-projetos-desktop.jpg";
const BG_MOBILE = "/bghero-projetos.jpg";

export default function ProjetosPage() {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <Hero
        eyebrow={<span className="text-secondary">PROJETOS</span>}
        title={
          <>
            Mais de <span className="text-secondary">70 projetos entregues</span> em todo o Brasil
          </>
        }
        description="Confira algumas das atrações da Aqua Slides pelo Brasil"
        buttonText="Solicite seu Projeto"
        buttonHref="/contato"
        bgDesktop={BG_DESKTOP}
        bgMobile={BG_MOBILE}
      />
      <HomeStats />
      <ProjetosMapa />
    </main>
  );
}
