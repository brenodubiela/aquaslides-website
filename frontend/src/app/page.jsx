const verticais = [
  { nome: "Aqua Ball", classe: "bg-ball" },
  { nome: "Aqua Fresh", classe: "bg-fresh" },
  { nome: "Aqua Ramp", classe: "bg-ramp" },
  { nome: "Aqua Free Fall", classe: "bg-free-fall" },
  { nome: "Aqua Playground", classe: "bg-playground" },
  { nome: "Aqua Toboágua", classe: "bg-toboagua" },
  { nome: "Aqua Complexos", classe: "bg-complexos" },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-content px-lg py-section">
      <p className="text-eyebrow uppercase text-secondary-dark">
        Especialistas em equipamentos aquáticos
      </p>

      <h1 className="mt-base font-display text-h1-mobile text-ink md:text-h1">
        Atrações aquáticas completas,{" "}
        <span className="text-primary">do projeto à operação</span>
      </h1>

      <p className="mt-lg max-w-[640px] text-p-mobile text-body md:text-p">
        Projeto, fabricação e instalação de equipamentos aquáticos para parques,
        resorts e hotéis. Engenharia própria, entrega completa e suporte
        vitalício.
      </p>

      <span className="mt-xl inline-flex h-[44px] items-center rounded-full bg-primary px-lg text-button-md text-on-primary shadow-halo-primary">
        Solicite seu Projeto
      </span>

      <section className="mt-block border-t border-hairline pt-block">
        <h2 className="font-display text-h3-mobile text-primary md:text-h3">
          Linhas de atrações
        </h2>

        <ul className="mt-lg grid grid-cols-2 gap-base md:grid-cols-4">
          {verticais.map((vertical) => (
            <li
              key={vertical.nome}
              className={`${vertical.classe} rounded-md px-base py-lg text-spec-label uppercase text-on-dark`}
            >
              {vertical.nome}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-block rounded-lg bg-surface p-lg">
        <h2 className="font-display text-h3-mobile text-primary md:text-h3">
          Fase 1 — Fundação &amp; Setup
        </h2>
        <p className="mt-md text-card-p-mobile text-body md:text-card-p">
          Tokens do Design System, fontes via next/font e Metadata API
          compilando em HTML servido pelo servidor.
        </p>
      </section>
    </main>
  );
}
