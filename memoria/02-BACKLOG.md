# 🎯 02 — BACKLOG & PRÓXIMO PASSO

> Atualizado a cada `/checkpoint`. O topo é sempre a próxima ação.

## ▶️ PRÓXIMO PASSO EXATO
**Fase:** 3 — Rotas, Layouts & SEO
**Tarefa:** layout raiz com `<Header />` e `<Footer />`, as rotas do escopo por pastas, o wrapper
de animação `<Reveal />` e o SEO técnico (`sitemap.js`, `robots.js`, JSON-LD)
**Arquivo(s) alvo:** `src/app/layout.jsx`, `src/components/layout/{header,footer,mobile-menu}.jsx`,
`src/components/ui/reveal.jsx`, `src/app/{sobre,servicos,contato,projetos}/page.jsx`,
`src/app/sitemap.js`, `src/app/robots.js`
**Prompt a usar:** POP.md → Prompt Mestre #3
**Pré-requisito:** nenhum — os 26 primitivos da Fase 2 já cobrem o que Header e Footer precisam
(`<NavMenu />`, `<TextLink />`, `<DropdownLink />`, `<Button />`, `<SocialLinks />`)

---

## ✅ Fase 2 — Componentização Base (CONCLUÍDA em 2026-08-10)
Aceite do Anexo C atendido: `/design-system` responde 200 com `noindex` e os primitivos estão
injetados. Entregues **26 primitivos** em `src/components/ui/` (21 Server + 5 Client), listados um
a um em `04-COMPONENTES.md`:
- **Botões/navegação:** `Button` (14 variantes), `ButtonDropdown`, `CircularArrow`, `TextLink`,
  `DropdownLink`, `NavMenu`
- **Átomos:** `Eyebrow`, `CheckItem`, `PowerNumber`, `SocialLinks`, `social-icons`, `value-icons`
- **Cards:** `ProjectCard`, `TestimonialCard`, `ArticleCard`, `BlogCard`, `ClientLogoCard`,
  `ValueCard`, `InfoCard`
- **Blocos:** `Timeline`, `Accordion`, `ProjectMap`
- **Formulário:** `Input`, `Select`, `Label`, `ContactForm`

## 🔍 Pente-fino de tokens (adiado — fazer antes da Fase 8)
Vários primitivos da Fase 2 ainda usam escalas default do Tailwind em vez dos tokens do DS
(`text-2xl`, `text-sm`, `text-base`, `p-4`, `gap-4`, `rounded-[30px]`, `shadow-*`). O `<Timeline />`
e o `<ProjectMap />` já foram alinhados e servem de referência. **Não bloqueia a Fase 3** — o
alinhamento é troca de classe, não de estrutura.
Lembretes da auditoria: largura nunca usa `xs|sm|md|lg|xl`; headline é `font-display`, não
`font-riope`; placeholder de imagem precisa do `/png`.

## Fases pendentes
- [x] Fase 2 — Componentização Base — **concluída em 2026-08-10**
- [ ] Fase 3 — Rotas, Layouts & SEO — rotas: `/`, `/sobre`, `/servicos`, `/contato`,
      `/verticais/[slug]` (template único × 7), `/projetos`; + `<Header />`, `<Footer />`,
      `<Reveal />`, `sitemap.js`, `robots.js`, JSON-LD `Organization`
- [ ] Fase 4 — Módulos Legais & LGPD — `src/data/legal-texts.js`, `(legal)/politica-de-privacidade`,
      `(legal)/termos-de-uso`, `cookie-banner.jsx`
- [ ] Fase 5 — Sanity CMS na pasta `studio/` (hoje vazia; **não** inicializar antes) — schema `post`
- [ ] Fase 6 — Integração Front x Back — `/blog` e `/blog/[slug]` com ISR
- [ ] Fase 7 — Formulário de contato → envio direto para e-mail (destino em variável de ambiente)
- [ ] Fase 8 — Deploy & Handover — Vercel com Root Directory `frontend`

## Ideias e melhorias (não bloqueiam entrega)
- Adicionar `Riope.woff` à cadeia do `@font-face` se o cliente enviar o arquivo válido (o atual tem
  0 bytes). Só vale a pena para navegadores sem suporte a WOFF2 — hoje residual.
- Mover `public/fonts/` para fora de `public/` (ex.: `src/app/fonts/`): hoje o arquivo é servido
  duas vezes, pelo `/_next/static/media` (com hash e cache imutável) e por `/fonts/` (sem hash).
- Resolver o gap de contraste do `card-vertical-tile` (scrim ou text-shadow) — apontado no DS.
- Revisar as vulnerabilidades transitivas de `postcss`/`sharp` do Next 15 antes do deploy (Fase 8).
- Avaliar `next/font/local` para reduzir a cadeia de fallback do Montserrat.

## Decisões pendentes (dependem do Breno)
| O que | Impacto se não decidir |
|---|---|
| `npm i -D typescript` (devDependency, AGENTS.md §3) | `npm run lint` continua quebrado |
| `react-simple-maps@3` sem suporte oficial a React 19 | risco de quebra futura no `<ProjectMap />` |

## Aguardando o cliente
| O que | Pedido em | Status |
|---|---|---|
| Arquivos da fonte Riope | 2026-08-06 | **`.woff2` recebida e no ar**; `.woff` veio com 0 bytes |
| Licença de webfont do Riope (Envato Elements) — obrigatória antes do deploy | 2026-08-06 | aberto |
| E-mail institucional de destino do formulário | 2026-08-06 | aberto |
| Logo em SVG, `pattern-ondas.svg`, fotos de hero/galeria, og-image | 2026-08-06 | aberto |
| Validação dos breakpoints mobile/tablet (inferidos no DS) | 2026-08-06 | aberto |
| Correção de copy: "Modelos de Playground" na página Toboágua e eyebrow "FAQ" na newsletter | 2026-08-06 | aberto |
