import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Linhas de Atrações",
  description: "Conheça as linhas de atrações aquáticas da Aqua Slides.",
  alternates: {
    canonical: "/linhas-de-atracoes",
  },
};

export default function LinhasAtracoesPage() {
  return (
    <Reveal className="pt-[150px] pb-section px-xl max-w-content mx-auto">
      <h1 className="font-display text-h1 text-ink">Linhas de Atrações</h1>
      <p className="mt-base text-body">
        Explore nosso catálogo de toboáguas, complexos aquáticos, playgrounds e muito mais.
      </p>
    </Reveal>
  );
}
