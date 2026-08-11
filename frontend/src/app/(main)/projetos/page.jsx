import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Projetos",
  description: "Portfólio de projetos instalados pela Aqua Slides.",
  alternates: {
    canonical: "/projetos",
  },
};

export default function ProjetosPage() {
  return (
    <Reveal className="pt-[150px] pb-section px-xl max-w-content mx-auto">
      <h1 className="font-display text-h1 text-ink">Nossos Projetos</h1>
      <p className="mt-base text-body">
        Veja alguns dos parques, resorts e hotéis que transformamos com nossas atrações.
      </p>
    </Reveal>
  );
}
