import Link from "next/link";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-content flex-col justify-center px-lg py-section">
      <p className="text-eyebrow uppercase text-secondary-dark">Erro 404</p>

      <h1 className="mt-base font-display text-h1-mobile text-ink md:text-h1">
        Esta página <span className="text-primary">não existe</span>
      </h1>

      <p className="mt-lg max-w-[640px] text-p-mobile text-body md:text-p">
        O endereço acessado pode ter sido movido ou digitado incorretamente.
        Volte para a página inicial e continue navegando pelas nossas linhas de
        atrações.
      </p>

      <Link
        href="/"
        className="mt-xl inline-flex h-[44px] w-fit items-center rounded-full bg-primary px-lg text-button-md text-on-primary transition-shadow hover:shadow-halo-primary"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}
