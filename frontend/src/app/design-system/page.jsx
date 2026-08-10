"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Layers, Component, ChevronRight, ArrowRight, Share2, Clock, MapPin } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { ButtonDropdown } from "@/components/ui/button-dropdown";
import { TextLink } from "@/components/ui/text-link";
import { DropdownLink } from "@/components/ui/dropdown-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PowerNumber } from "@/components/ui/power-number";
import { ProjectCard } from "@/components/ui/project-card";
import { SocialLinks } from "@/components/ui/social-links";
import { CheckItem } from "@/components/ui/check-item";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { NavMenu } from "@/components/ui/nav-menu";
import { ClientLogoCard } from "@/components/ui/client-logo-card";
import { ArticleCard } from "@/components/ui/article-card";
import { BlogCard } from "@/components/ui/blog-card";
import { Accordion } from "@/components/ui/accordion";
import { ValueCard } from "@/components/ui/value-card";
import { InfoCard } from "@/components/ui/info-card";
import { ContactForm } from "@/components/ui/contact-form";
import { Timeline } from "@/components/ui/timeline";
import { ProjectMap } from "@/components/ui/project-map";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { TargetIcon, VerifiedIcon, BankIcon } from "@/components/ui/value-icons";

const navItems = [
  { key: "buttons", label: "Buttons", icon: Component },
  { key: "navigation", label: "Navigation", icon: ChevronRight },
  { key: "eyebrow-lists", label: "Eyebrow & Lists", icon: Layers },
  { key: "timeline", label: "Timeline", icon: Clock },
  { key: "maps", label: "Mapas", icon: MapPin },
  { key: "cards", label: "Cards", icon: Layers },
  { key: "icons-social", label: "Icons & Social", icon: Share2 },
  { key: "forms", label: "Forms", icon: Component },
];



function LibraryComponentItem({ title, children, className }) {
  return (
    <div
      className={cn(
        "rounded-md border border-hairline bg-surface p-lg",
        className
      )}
    >
      <h3 className="mb-md font-sans text-card-h font-bold text-ink">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  const [activeCategory, setActiveCategory] = useState("buttons");
  const [search, setSearch] = useState("");
  const [selectedVertical, setSelectedVertical] = useState(null);

  const filteredItems = navItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const activeCategoryLabel =
    navItems.find((item) => item.key === activeCategory)?.label ?? "Buttons";

  const verticalOptions = [
    "Aqua Ball",
    "Aqua Fresh",
    "Aqua Ramp",
    "Aqua Free Fall",
    "Aqua Playground",
    "Aqua Toboágua",
    "Aqua Complexos",
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-72 shrink-0 flex-col border-r border-hairline bg-surface-strong">
        <div className="border-b border-hairline p-lg">
          <h1 className="font-display text-h3 text-primary">Aqua Slides</h1>
          <p className="mt-xs font-sans text-small text-muted">
            Design System Library
          </p>
        </div>

        <div className="p-lg pb-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-md top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Buscar componente…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-hairline bg-surface-white py-sm pl-xl pr-md font-sans text-small text-ink placeholder:text-muted focus:border-secondary focus:bg-secondary-tint focus:outline-none"
            />
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-xs px-md pb-lg">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveCategory(item.key)}
                className={cn(
                  "flex items-center gap-md rounded-md px-md py-sm text-left font-sans text-small transition-colors duration-150",
                  isActive
                    ? "bg-primary-tint font-semibold text-primary"
                    : "text-body hover:bg-surface hover:text-ink"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </button>
            );
          })}

          {filteredItems.length === 0 && (
            <p className="px-md py-lg text-center font-sans text-small text-muted">
              Nenhum resultado para &ldquo;{search}&rdquo;
            </p>
          )}
        </nav>

        <div className="border-t border-hairline p-md">
          <p className="font-sans text-spec-label uppercase tracking-wider text-muted">
            Fase 2
          </p>
        </div>
      </aside>

      <main className="flex flex-1 flex-col bg-canvas">
        <header className="border-b border-hairline px-xl py-lg">
          <h2 className="font-display text-h3 text-ink">{activeCategoryLabel}</h2>
          <p className="mt-xs font-sans text-small text-muted">
            Componentes da categoria &ldquo;{activeCategoryLabel}&rdquo;
          </p>
        </header>

        {activeCategory === "buttons" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            {/* Botão Sólido (Primário e Secundário - Figma Node 20509:143) */}
            <LibraryComponentItem title="Botão Sólido (Primário e Secundário)">
              <p className="mb-lg font-sans text-small text-muted">
                Botão pílula sólido padrão extraído do Nó <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:143</code> do Figma. Sem halo/moldura externa. Polimórfico (renderiza como <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">next/link</code> se receber <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">href</code>).
              </p>

              <div className="flex flex-wrap items-end gap-xl pb-lg border-b border-hairline">
                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Primário Azul (Sólido)</span>
                  <Button variant="primary">Contato</Button>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Secundário Amarelo (Sólido)</span>
                  <Button variant="secondary">Saiba Mais</Button>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Polimorfismo (Link href)</span>
                  <Button variant="primary" href="/contato">Contato Direto</Button>
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-xl pt-lg">
                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Azul — Pequeno (sm)</span>
                  <Button variant="primary" size="sm">Contato</Button>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Azul — Médio (md)</span>
                  <Button variant="primary" size="md">Contato</Button>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Azul — Grande (lg)</span>
                  <Button variant="primary" size="lg">Contato</Button>
                </div>
              </div>
            </LibraryComponentItem>

            {/* Botão com Moldura Halo (Primário e Secundário) */}
            <LibraryComponentItem title="Botão com Moldura Halo (6px)">
              <p className="mb-lg font-sans text-small text-muted">
                Variação de botão polimórfico com estrutura de halo externo (6px).
              </p>

              <div className="flex flex-wrap items-end gap-xl">
                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Primary Azul (Halo)</span>
                  <Button variant="halo-primary">Solicite seu Projeto</Button>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Secondary Amarelo (Halo)</span>
                  <Button variant="halo-secondary">Quero ser Case de Sucesso</Button>
                </div>
              </div>
            </LibraryComponentItem>

            {/* Botão Indicador / Soft (Figma Node 20509:163) */}
            <LibraryComponentItem title="Botão Indicador / Soft">
              <p className="mb-lg font-sans text-small text-muted">
                Botão indicador/categoria com preenchimento tint e seta para baixo. Extraído rigorosamente do Nó <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:163</code> do Figma. Pode agir como botão interativo ou badge/indicador visual com <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">as="div"</code>.
              </p>

              <div className="flex flex-wrap items-end gap-xl">
                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Indicador / Categoria (Figma 20509:163)</span>
                  <Button variant="indicator">Clique na categoria e saiba mais</Button>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Uso Não-Interativo (as="div")</span>
                  <Button variant="indicator" as="div">Clique na categoria e saiba mais</Button>
                </div>
              </div>
            </LibraryComponentItem>

            {/* Botão Warm / Artigo (Figma Node 20509:176) */}
            <LibraryComponentItem title="Botão Warm / Artigo">
              <p className="mb-lg font-sans text-small text-muted">
                Botão em tom pastel quente extraído do Nó <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:176</code> do Figma. Fundo suave em tom creme (<code className="rounded bg-surface-strong px-1 font-mono text-inline-code">surface-warm</code>) com texto/borda em destaque secundário escuro (<code className="rounded bg-surface-strong px-1 font-mono text-inline-code">secondary-dark</code>). Ocupa a largura total do container por padrão (<code className="rounded bg-surface-strong px-1 font-mono text-inline-code">w-full</code>).
              </p>

              <div className="flex flex-col gap-md">
                <span className="font-sans text-spec-label uppercase text-muted">Exemplo em Card de Blog (Container w-72)</span>
                <div className="w-72 p-md rounded-md bg-canvas border border-hairline flex flex-col items-center gap-md">
                  <Button variant="warm" href="/blog/artigo-exemplo">Ver artigo completo</Button>
                </div>
              </div>
            </LibraryComponentItem>

            {/* Botões das Verticais (7 Linhas de Produto) */}
            <LibraryComponentItem title="Botões das Verticais" showCode={false}>
              <p className="mb-lg font-sans text-small text-muted">
                Variantes com halo/moldura translúcida de 6px personalizadas para cada uma das 7 verticais de produto da Aqua Slides (<code className="rounded bg-surface-strong px-1 font-mono text-inline-code">ball</code>, <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">fresh</code>, <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">ramp</code>, <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">free-fall</code>, <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">playground</code>, <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">toboagua</code> e <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">complexos</code>).
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="ball">Solicite seu Projeto</Button>
                <Button variant="fresh">Solicite seu Projeto</Button>
                <Button variant="ramp">Solicite seu Projeto</Button>
                <Button variant="free-fall">Solicite seu Projeto</Button>
                <Button variant="playground">Solicite seu Projeto</Button>
                <Button variant="toboagua">Solicite seu Projeto</Button>
                <Button variant="complexos">Solicite seu Projeto</Button>
              </div>
            </LibraryComponentItem>

            {/* Botão Dropdown de Filtro (Figma Node 20509:660) */}
            <LibraryComponentItem title="Botão Dropdown de Filtro (Figma Node 20509:660)">
              <p className="mb-lg font-sans text-small text-muted">
                Botão pílula interativo de filtro com menu suspenso flutuante. Extraído rigorosamente do nó <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:660</code> do Figma (cor <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">rgba(9,170,224,0.1)</code>, texto/chevron <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">#09aae0</code>).
              </p>

              <div className="min-h-[280px] p-md rounded-md bg-canvas border border-hairline/50">
                <div className="flex flex-col items-start gap-md">
                  <span className="font-sans text-spec-label uppercase text-muted">Exemplo Interativo (Clique para testar)</span>
                  <ButtonDropdown
                    label={selectedVertical ? `Linha: ${selectedVertical}` : "Linhas de atração"}
                    options={verticalOptions}
                    onSelect={(opt) => setSelectedVertical(opt)}
                  />
                  {selectedVertical && (
                    <p className="mt-sm font-sans text-small text-primary">
                      Filtro selecionado: <strong>{selectedVertical}</strong>
                    </p>
                  )}
                </div>
              </div>
            </LibraryComponentItem>

          </div>
        ) : activeCategory === "navigation" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            {/* Links de Navegação (Figma Nodes 20509:180, 20509:181, 20509:182) */}
            <LibraryComponentItem title="Links de Navegação">
              <p className="mb-lg font-sans text-small text-muted">
                Componentes de link e dropdown da barra de navegação principal. Extraídos rigorosamente dos nós <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:180</code>, <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:181</code> e <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:182</code> do Figma. Server Components puros com navegação <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">next/link</code> e CSS pure hover (<code className="rounded bg-surface-strong px-1 font-mono text-inline-code">group-hover</code>).
              </p>

              <div className="flex flex-col gap-xl">
                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">TextLink Normal (Figma Node 20509:181)</span>
                  <TextLink href="/sobre">Sobre a Empresa</TextLink>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">TextLink Ativo (Figma Node 20509:180 — active=true)</span>
                  <TextLink href="/" active={true}>Início</TextLink>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">DropdownLink (Figma Node 20509:182 — Passe o mouse para abrir)</span>
                  <div className="min-h-[250px] w-full p-md rounded-md bg-canvas border border-hairline/50">
                    <DropdownLink
                      title="Linhas de Atrações"
                      items={[
                        { label: "Aqua Ball", href: "/atracoes/ball" },
                        { label: "Aqua Fresh", href: "/atracoes/fresh" },
                        { label: "Aqua Ramp", href: "/atracoes/ramp" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="NavMenu (Header Principal)">
              <p className="mb-md font-sans text-small text-muted">
                Barra de navegação com dois estados: <strong>Normal</strong> (fundo transparente, links escuros) e <strong>Scrolled</strong> (fundo azul primary, links brancos).
                Reutiliza <code className="text-xs bg-surface-strong px-1 py-0.5 rounded">TextLink</code>, <code className="text-xs bg-surface-strong px-1 py-0.5 rounded">DropdownLink</code> e <code className="text-xs bg-surface-strong px-1 py-0.5 rounded">Button</code>.
                Client Component justificado: ouve o <code className="text-xs bg-surface-strong px-1 py-0.5 rounded">scroll</code> para alternar estados.
              </p>
              <div className="flex flex-col gap-lg">
                <div className="flex flex-col gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Estado Normal (topo — fundo transparente)</span>
                  <div className="relative overflow-hidden rounded-md border border-hairline bg-canvas">
                    <NavMenu forceScrolled={false} position="relative" />
                  </div>
                </div>

                <div className="flex flex-col gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Estado Scrolled (fundo azul primary)</span>
                  <div className="relative overflow-hidden rounded-md border border-hairline">
                    <NavMenu forceScrolled={true} position="relative" />
                  </div>
                </div>
              </div>
            </LibraryComponentItem>

          </div>
        ) : activeCategory === "eyebrow-lists" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            {/* Eyebrow / Hatch (Figma Node 20509:188) */}
            <LibraryComponentItem title="Eyebrow / Hatch">
              <p className="mb-lg font-sans text-small text-muted">
                Indicador tipográfico de categoria/seção usado acima de títulos principais. Extraído do nó <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">20509:188</code> do Figma. Possui tipografia maiúscula com espaçamento largo (<code className="rounded bg-surface-strong px-1 font-mono text-inline-code">tracking-[1.4px]</code>) e efeito hover suave de expansão e deslocamento.
              </p>

              <div className="flex flex-col gap-xl">
                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Variante Amarela (default / yellow — Passe o mouse para testar)</span>
                  <Eyebrow variant="default">Especialistas em equipamentos aquáticos</Eyebrow>
                </div>

                <div className="flex flex-col items-start gap-xs">
                  <span className="font-sans text-spec-label uppercase text-muted">Variante Laranja (dark / orange — Passe o mouse para testar)</span>
                  <Eyebrow variant="dark">Nossas Soluções</Eyebrow>
                </div>
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Lista com Check">
              <p className="mb-lg font-sans text-small text-muted">
                Componente presentational <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">&lt;CheckItem /&gt;</code> para listas. Hover CSS-only: fundo preenchido e check escuro. (Figma 20509:343)
              </p>

              <ul className="flex flex-col gap-4 rounded-md bg-surface p-xl">
                <CheckItem text="Segurança Jurídica e Técnica" />
                <CheckItem text="Entrega Completa" />
                <CheckItem text="Suporte Vitalício" />
              </ul>
            </LibraryComponentItem>

            <LibraryComponentItem title="FAQ / Accordion" showCode={false}>
              <div className="w-full max-w-4xl rounded-md bg-canvas p-md">
                <Accordion
                  items={[
                    {
                      question: "Os equipamentos possuem garantia?",
                      answer: "Sim. Além da garantia contratual, oferecemos suporte técnico vitalício para que sua operação nunca pare."
                    },
                    {
                      question: "Vocês atendem em todo o Brasil?",
                      answer: "Sim, a instalação está inclusa e realizamos projetos em todo o território nacional e Mercosul."
                    },
                    {
                      question: "A Aqua Slides realiza a obra civil?",
                      answer: "Não. Entregamos a solução completa do equipamento (projeto, fabricação, estrutura metálica, motobomba e instalação), mas a obra civil (piscinas e fundações) fica a cargo do cliente, com nossa orientação técnica completa."
                    },
                    {
                      question: "Vocês fornecem os projetos técnicos?",
                      answer: "Sim. Fornecemos todos os projetos: Estruturais, Elétricos, Hidráulicos e Mecânicos, garantindo a correta execução e segurança."
                    }
                  ]}
                />
              </div>
            </LibraryComponentItem>
          </div>
        ) : activeCategory === "timeline" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            <LibraryComponentItem title="Linha do Tempo (Timeline)" showCode={false}>
              <div className="w-full rounded-md bg-canvas p-lg">
                <Timeline
                  items={[
                    {
                      year: "2022",
                      title: "Nasce a Aqua Sides",
                      description: "Nascemos no polo industrial de Santa Catarina já inovando. Desenvolvemos um processo exclusivo de fabricação em fibra (Spray-up e RTM-Light) focado em acabamento superior e durabilidade, resolvendo as dores de manutenção frequente do mercado."
                    },
                    {
                      year: "2023",
                      title: "Expansão",
                      description: "O mercado respondeu à nossa qualidade. Consolidamos nossa presença no Sudeste e Sul. Provamos que é possível entregar obras complexas com prazo e custos travados."
                    },
                    {
                      year: "2024",
                      title: "Grandes Projetos",
                      description: "Atingimos a maturidade técnica para complexos de grande porte. Iniciamos a expansão para o Mercosul e nos tornamos a escolha preferencial de desenvolvedores hoteleiros que buscam valorização do ativo imobiliário através do lazer."
                    },
                    {
                      year: "2025",
                      title: "Referência",
                      description: "Estabelecemos o novo padrão do setor: a entrega Turnkey. Hoje, somos a autoridade em fornecer a solução completa — projeto, fabricação, metalúrgica e instalação, com o diferencial único do Suporte Técnico Vitalício."
                    }
                  ]}
                />
              </div>
            </LibraryComponentItem>
          </div>
        ) : activeCategory === "cards" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            <LibraryComponentItem title="Power Numbers">
              <p className="mb-lg font-sans text-small text-muted">
                Estatísticas de prova social (Projetos Entregues, Território, Anos no Mercado). Ícone em caixa amarela <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">bg-secondary</code>, número em Riope azul <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">text-primary</code> e label em Montserrat <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">text-ink</code>.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <PowerNumber
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none"><path d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM8 4H12V2H8V4ZM18 13H13V14C13 14.2833 12.9042 14.5208 12.7125 14.7125C12.5208 14.9042 12.2833 15 12 15H8C7.71667 15 7.47917 14.9042 7.2875 14.7125C7.09583 14.5208 7 14.2833 7 14V13H2V17H18V13ZM9 13H11V11H9V13ZM2 11H7V10C7 9.71667 7.09583 9.47917 7.2875 9.2875C7.47917 9.09583 7.71667 9 8 9H12C12.2833 9 12.5208 9.09583 12.7125 9.2875C12.9042 9.47917 13 9.71667 13 10V11H18V6H2V11Z" fill="#3D3D3D"/></svg>
                  }
                  number="+70"
                  label="Projetos Entregues"
                />
                <PowerNumber
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_20509_200" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_20509_200)"><path d="M12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59167 19.825 8.63333 18.85 7.8 17.9C6.96667 16.95 6.27083 16.0292 5.7125 15.1375C5.15417 14.2458 4.72917 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 8.48333 4.43333 6.94167 5.3 5.575C6.16667 4.20833 7.39167 3.20833 8.975 2.575C9.40833 2.39167 9.8875 2.25 10.4125 2.15C10.9375 2.05 11.4583 1.99167 11.975 1.975C12.2583 1.975 12.4958 2.06667 12.6875 2.25C12.8792 2.43333 12.975 2.66667 12.975 2.95C12.975 3.23333 12.8792 3.47917 12.6875 3.6875C12.4958 3.89583 12.2583 4 11.975 4C11.575 4 11.1833 4.0375 10.8 4.1125C10.4167 4.1875 10.0333 4.3 9.65 4.45C8.48333 4.93333 7.58333 5.7 6.95 6.75C6.31667 7.8 6 8.95 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35C13.0167 18.4167 13.9 17.5292 14.65 16.6875C15.4 15.8458 16.025 15.0417 16.525 14.275C16.8583 13.7583 17.15 13.2292 17.4 12.6875C17.65 12.1458 17.825 11.5833 17.925 11C17.9917 10.6167 18.1375 10.35 18.3625 10.2C18.5875 10.05 18.825 9.99167 19.075 10.025C19.325 10.0583 19.5375 10.1583 19.7125 10.325C19.8875 10.4917 19.9583 10.7167 19.925 11C19.7917 12.0333 19.4958 13.0042 19.0375 13.9125C18.5792 14.8208 18.0417 15.6917 17.425 16.525C16.7083 17.475 15.9708 18.3208 15.2125 19.0625C14.4542 19.8042 13.825 20.3917 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM18 5V7C18 7.28333 18.0958 7.52083 18.2875 7.7125C18.4792 7.90417 18.7167 8 19 8C19.2833 8 19.5208 7.90417 19.7125 7.7125C19.9042 7.52083 20 7.28333 20 7V5H22C22.2833 5 22.5208 4.90417 22.7125 4.7125C22.9042 4.52083 23 4.28333 23 4C23 3.71667 22.9042 3.47917 22.7125 3.2875C22.5208 3.09583 22.2833 3 22 3H20V1C20 0.716667 19.9042 0.479167 19.7125 0.2875C19.5208 0.0958333 19.2833 0 19 0C18.7167 0 18.4792 0.0958333 18.2875 0.2875C18.0958 0.479167 18 0.716667 18 1V3H16C15.7167 3 15.4792 3.09583 15.2875 3.2875C15.0958 3.47917 15 3.71667 15 4C15 4.28333 15.0958 4.52083 15.2875 4.7125C15.4792 4.90417 15.7167 5 16 5H18Z" fill="#3D3D3D"/></g></svg>
                  }
                  number="100%"
                  label="Território Nacional Atendido"
                />
                <PowerNumber
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_20509_208" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_20509_208)"><path d="M12 22.5C11.7833 22.5 11.575 22.4667 11.375 22.4C11.175 22.3333 10.9833 22.2333 10.8 22.1L4.8 17.6C4.55 17.4167 4.35417 17.1833 4.2125 16.9C4.07083 16.6167 4 16.3167 4 16V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.3167 19.9292 16.6167 19.7875 16.9C19.6458 17.1833 19.45 17.4167 19.2 17.6L13.2 22.1C13.0167 22.2333 12.825 22.3333 12.625 22.4C12.425 22.4667 12.2167 22.5 12 22.5ZM12 20.5L18 16V4H6V16L12 20.5ZM10.95 12.15L9.55 10.75C9.35 10.55 9.11667 10.4542 8.85 10.4625C8.58333 10.4708 8.35 10.5667 8.15 10.75C7.95 10.95 7.84583 11.1875 7.8375 11.4625C7.82917 11.7375 7.925 11.975 8.125 12.175L10.25 14.3C10.45 14.5 10.6833 14.6 10.95 14.6C11.2167 14.6 11.45 14.5 11.65 14.3L15.9 10.05C16.1 9.85 16.1958 9.61667 16.1875 9.35C16.1792 9.08333 16.0833 8.85 15.9 8.65C15.7 8.45 15.4625 8.34583 15.1875 8.3375C14.9125 8.32917 14.675 8.425 14.475 8.625L10.95 12.15Z" fill="#3D3D3D"/></g></svg>
                  }
                  number="4"
                  label="Anos no Mercado"
                />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Cards de Projetos (Triggers)">
              <p className="mb-md font-sans text-small text-muted">
                Componente presentational <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">&lt;ProjectCard /&gt;</code> que gerencia o layout do card e contém o botão circular <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">&lt;CircularArrow /&gt;</code>. Controlado por <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">isActive</code>. (Figma 20509:263 e 20509:288)
              </p>
              
              <div className="grid grid-cols-2 gap-8 rounded-md bg-surface p-xl">
                <ProjectCard
                  title="Complexo F36"
                  subtitle="Thermas da Mata Cutia/SP - Residencial - MG"
                  isActive={true}
                  logoSlot={
                    <Image
                      src="/logoaquacomplexopreto.svg"
                      alt="Logo Aqua Complexos"
                      width={120}
                      height={40}
                      className="h-auto w-auto max-w-[120px] object-contain"
                    />
                  }
                />
                
                <ProjectCard
                  title="Complexo F36 Mod"
                  subtitle="Parque aquático Por do Sol - Pitangueiras/PR"
                  isActive={false}
                  logoSlot={
                    <Image
                      src="/logoaquacomplexopreto.svg"
                      alt="Logo Aqua Complexos"
                      width={120}
                      height={40}
                      className="h-auto w-auto max-w-[120px] object-contain"
                    />
                  }
                />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Cards de Depoimento">
              <p className="mb-md font-sans text-small text-muted">
                Prova social com avatar, nome, depoimento e avaliação em estrelas. (Figma 20509:367)
              </p>

              {/* Grid com os 4 depoimentos reais do Figma */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-md bg-surface p-xl">
                <TestimonialCard
                  name="Mateus"
                  text="Projetos bem arquitetados, estrutura de excelente qualidade! Diversão e segurança garantida."
                  avatarSrc="/img-depoimentos/Ellipse 28.png"
                  rating={5}
                />

                <TestimonialCard
                  name="Luana Inthum"
                  text="Eficiência, agilidade , produtos de extrema qualidade , super recomendo. Muitos atenciosos.."
                  avatarSrc="/img-depoimentos/Ellipse 27.png"
                  rating={5}
                />

                <TestimonialCard
                  name="Ana Clara Braga"
                  text="Muitooo boa,Empresa sensacional incrivelmente bom o trabalho deles!!!!"
                  avatarSrc="/img-depoimentos/Ellipse 27-1.png"
                  rating={5}
                />

                <TestimonialCard
                  name="PAULO ROGERIO RODRIGUES"
                  text="Com produtos de alta qualidade, um atendimento excepcional e um compromisso claro com a inovação, é fácil entender por que a empresa está crescendo tanto. Eu recomendo."
                  avatarSrc="/img-depoimentos/Ellipse 27-2.png"
                  rating={5}
                />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Logos de Clientes">
              <p className="mb-md font-sans text-small text-muted">
                Card puramente visual que renderiza as logos dos clientes com <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">object-contain</code>, garantindo a proporção exata independente da dimensão da imagem original. (Figma 20509:215)
              </p>
              <div className="flex flex-wrap gap-base">
                <ClientLogoCard
                  src="/images/clients/sesi.png"
                  alt="Logo SESI"
                />
                <ClientLogoCard
                  src="/images/clients/termas-piratuba.png"
                  alt="Logo Termas Piratuba"
                />
                <ClientLogoCard
                  src="/images/clients/america-park.png"
                  alt="Logo America Park"
                />
                <ClientLogoCard
                  src="/images/clients/amai-park.png"
                  alt="Logo AMAI park"
                />
                <ClientLogoCard
                  src="/images/clients/image 6.png"
                  alt="Logo Cliente 6"
                />
                <ClientLogoCard
                  src="/images/clients/image 7.png"
                  alt="Logo Cliente 7"
                />
                <ClientLogoCard
                  src="/images/clients/image 8.png"
                  alt="Logo Cliente 8"
                />
                <ClientLogoCard
                  src="/images/clients/image 9.png"
                  alt="Logo Cliente 9"
                />
                <ClientLogoCard
                  src="/images/clients/image 10.png"
                  alt="Logo Cliente 10"
                />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Cards de Artigo / Blog" showCode={false}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md bg-canvas">
                <ArticleCard
                  title="A Era dos Resorts Híbridos: Como a Arquitetura Sensorial Aumenta o Ticket Médio"
                  excerpt="Descubra como a integração de paisagismo tropical com atrações de alto impacto visual está redefinindo a experiência do hóspede e ampliando a receita."
                  imageSrc="/images/blog/resorts-hibridos.png"
                  href="/blog/resorts-hibridos"
                />
                <ArticleCard
                  title="Segurança e Normas ABNT: Blindando seu Patrimônio Contra Riscos Invisíveis"
                  excerpt="Entenda os critérios técnicos essenciais na manutenção de fibra de vidro e estruturas metálicas para garantir a longevidade do equipamento e a segurança total."
                  imageSrc="/images/blog/normas-abnt.png"
                  href="/blog/normas-abnt"
                />
                <ArticleCard
                  title="O Poder do Retrofit: Revitalizando Áreas Ociosas com Baixo Custo Operacional"
                  excerpt="Estratégias inteligentes para transformar piscinas antigas em complexos de lazer modernos, atraindo novas famílias sem a necessidade de grandes obras civis."
                  imageSrc="/images/blog/retrofit.png"
                  href="/blog/retrofit"
                />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Cards de Blog (Variações de Layout)" showCode={false}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-md bg-canvas">
                {/* Coluna Esquerda: Destaque Vertical */}
                <div className="lg:col-span-7">
                  <BlogCard
                    layout="vertical"
                    title="A Era dos Resorts Híbridos: Como a Arquitetura Sensorial Aumenta o Ticket Médio"
                    excerpt="Descubra como a integração de paisagismo tropical com atrações de alto impacto visual está redefinindo a experiência do hóspede e ampliando a receita."
                    imageSrc="/images/blog/resorts-hibridos.png"
                    href="/blog/resorts-hibridos"
                  />
                </div>
                
                {/* Coluna Direita: Lista Horizontal */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <BlogCard
                    layout="horizontal"
                    title="Segurança e Normas ABNT: Blindando seu Patrimônio Contra Riscos Invisíveis"
                    excerpt="Entenda os critérios técnicos essenciais na manutenção de fibra de vidro e estruturas metálicas para garantir a longevidade do equipamento e a segurança total."
                    imageSrc="/images/blog/normas-abnt.png"
                    href="/blog/normas-abnt"
                  />
                  <BlogCard
                    layout="horizontal"
                    title="O Poder do Retrofit: Revitalizando Áreas Ociosas com Baixo Custo Operacional"
                    excerpt="Estratégias inteligentes para transformar piscinas antigas em complexos de lazer modernos, atraindo novas famílias sem a necessidade de grandes obras civis."
                    imageSrc="/images/blog/retrofit.png"
                    href="/blog/retrofit"
                  />
                </div>
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Cards Institucionais (Sobre Nós)" showCode={false}>
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ValueCard
                    icon={<TargetIcon />}
                    eyebrow="NOSSA MISSÃO"
                    title="Crescer junto com você"
                  >
                    <p>Desenvolver equipamentos aquáticos que unem engenharia de ponta e acabamento superior, transformando cada projeto em uma experiência segura para o usuário e rentável para o investidor. Nossa missão não acaba na fabricação; ela continua no suporte ao seu crescimento.</p>
                  </ValueCard>
                  
                  <ValueCard
                    icon={<VerifiedIcon />}
                    eyebrow="NOSSA VISÃO"
                    title="Ser a referência em confiança"
                  >
                    <p>Consolidar-se como a principal parceira de negócios do setor de lazer na América do Sul. Queremos ser reconhecidos não apenas pela excelência do produto, mas por transformar o mercado através de relações éticas, transparentes e previsíveis.</p>
                  </ValueCard>
                  
                  <ValueCard
                    icon={<BankIcon />}
                    eyebrow="NOSSOS VALORES"
                    title="Pilares inegociáveis"
                  >
                    <p>Engenharia séria e normas técnicas acima de tudo. Atendimento humanizado e parceria de longo prazo. Criatividade focada em gerar resultados reais.</p>
                  </ValueCard>
                </div>
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Cards de Informação / Features" showCode={false}>
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InfoCard
                    title="Engenharia & Projetos"
                    description="Não entregamos apenas o desenho. Desenvolvemos a solução completa, incluindo projetos hidráulicos, elétricos e estruturais com todas as ARTs necessárias."
                  />
                  <InfoCard
                    title="Fabricação Própria"
                    description="Enquanto você prepara o terreno, nós fabricamos tudo: das peças em fibra com tecnologia exclusiva à estrutura metálica e motobombas."
                  />
                  <InfoCard
                    title="Instalação & Start"
                    description="Nossa equipe especializada vai até você em qualquer lugar do Brasil. Entregamos o equipamento montado, testado e com suporte vitalício garantido."
                  />
                </div>
              </div>
            </LibraryComponentItem>
          </div>
        ) : activeCategory === "forms" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            <LibraryComponentItem title="Formulário de Contato Completo" showCode={false}>
              <p className="mb-md font-sans text-small text-muted">
                Validação com react-hook-form. (Figma 20509:639). <br/>
                Para testar, envie vazio (verá os erros). Para testar erro na API, digite o nome "Erro".
              </p>
              <div className="w-full bg-white p-8 rounded-2xl shadow-sm border border-hairline">
                <ContactForm />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Primitivos de Formulário Isolados" showCode={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Input Default */}
                <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-hairline">
                  <h4 className="font-sans font-bold text-ink">Estado Normal / Preenchimento</h4>
                  <div className="flex flex-col gap-1.5 w-full">
                    <Label htmlFor="demo-name">Nome completo</Label>
                    <Input id="demo-name" placeholder="Digite seu nome completo" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <Label htmlFor="demo-select">Tipo de Empreendimento</Label>
                    <Select id="demo-select">
                      <option value="">Selecione uma opção</option>
                      <option value="parque_aquatico">Parque Aquático</option>
                    </Select>
                  </div>
                </div>

                {/* Input com Erro */}
                <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-hairline">
                  <h4 className="font-sans font-bold text-ink">Estado de Erro</h4>
                  <div className="flex flex-col gap-1.5 w-full">
                    <Label htmlFor="demo-error">Telefone/Whatsapp:</Label>
                    <Input id="demo-error" placeholder="(00) 00000-0000" hasError={true} />
                    <span className="font-sans text-sm text-red-500 mt-1">Campo obrigatório</span>
                  </div>
                </div>

                {/* Feedback Mensagens */}
                <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-hairline md:col-span-2">
                  <h4 className="font-sans font-bold text-ink">Feedbacks de Retorno (Sucesso e Erro)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 text-green-700 p-4 rounded-xl font-sans text-sm border border-green-200">
                      Formulário enviado com sucesso! Entraremos em contato em breve.
                    </div>
                    <div className="bg-red-50 text-red-700 p-4 rounded-xl font-sans text-sm border border-red-200">
                      Ocorreu um erro ao enviar. Tente novamente.
                    </div>
                  </div>
                </div>
              </div>
            </LibraryComponentItem>
          </div>
        ) : activeCategory === "icons-social" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            <LibraryComponentItem title="Ícones Sociais — Rodapé">
              <p className="mb-md font-sans text-small text-muted">
                Ícones soltos em azul <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">text-primary</code>, hover em amarelo <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">text-secondary</code>. Sem fundo circular. Gap de 16px. (Figma 20509:603)
              </p>
              <div className="rounded-md bg-surface-strong p-lg">
                <SocialLinks
                  variant="footer"
                  networks={[
                    { name: "facebook", url: "https://facebook.com" },
                    { name: "instagram", url: "https://instagram.com" },
                    { name: "youtube", url: "https://youtube.com" },
                  ]}
                />
              </div>
            </LibraryComponentItem>

            <LibraryComponentItem title="Ícones Sociais — Compartilhe (Artigo)">
              <p className="mb-md font-sans text-small text-muted">
                Círculos <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">bg-canvas</code> de 40px com ícone laranja <code className="rounded bg-surface-strong px-1 font-mono text-inline-code">text-secondary-dark</code>. Hover com escala 110%. (Figma 20509:759)
              </p>
              <div className="rounded-md bg-surface p-lg">
                <p className="mb-sm font-sans text-small font-bold text-ink">Compartilhe</p>
                <SocialLinks
                  variant="share"
                  networks={[
                    { name: "twitter", url: "https://twitter.com" },
                    { name: "facebook", url: "https://facebook.com" },
                    { name: "linkedin", url: "https://linkedin.com" },
                    { name: "instagram", url: "https://instagram.com" },
                  ]}
                />
              </div>
            </LibraryComponentItem>
          </div>
        ) : activeCategory === "maps" ? (
          <div className="flex flex-1 flex-col gap-lg p-xl">
            <LibraryComponentItem title="Mapa Mundi de Projetos" showCode={false}>
              <div className="h-[600px] w-full rounded-2xl overflow-hidden border border-border">
                <ProjectMap />
              </div>
            </LibraryComponentItem>
          </div>
        ) : (
          <section className="flex flex-1 items-center justify-center p-xl">
            <div className="flex max-w-[384px] flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-tint">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-lg font-sans text-card-h font-bold text-ink">
                Nenhum componente cadastrado nesta categoria ainda.
              </h3>
              <p className="mt-sm font-sans text-small text-muted">
                Os primitivos serão injetados aqui conforme a Fase 2 avança. Cada componente criado em{" "}
                <code className="rounded-sm bg-surface-strong px-xs py-[2px] font-mono text-inline-code text-body">
                  src/components/ui/
                </code>{" "}
                ganha um preview neste painel.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

