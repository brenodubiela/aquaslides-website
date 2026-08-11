import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Sobre",
  description: "Conheça a história e a missão da Aqua Slides.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <Reveal className="pt-[150px] pb-section px-xl max-w-content mx-auto">
      <h1 className="font-display text-h1 text-ink">Sobre a Aqua Slides</h1>
      <p className="mt-base text-body">
        Nossa empresa é focada em criar as melhores atrações aquáticas com qualidade e segurança, entregando inovação e diversão para o seu público.
      </p>
    </Reveal>
  );
}
