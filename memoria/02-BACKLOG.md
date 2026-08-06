# 🎯 02 — BACKLOG & PRÓXIMO PASSO

> Atualizado a cada `/checkpoint`. O topo é sempre a próxima ação.

## ▶️ PRÓXIMO PASSO EXATO
**Fase:** 2 — Componentização Base
**Tarefa:** criar o primitivo `<Button />` com as 6 variantes do DS (primary, primary-halo,
secondary, soft, warm, vertical) e injetar preview na `/design-system`
**Arquivo(s) alvo:** `frontend/src/components/ui/button.jsx` + atualizar `page.jsx` da biblioteca
**Pré-requisito:** nenhum — sandbox já operacional

---

## Fila da fase atual (Fase 2)
- [x] Sandbox `/design-system` com sidebar, busca, `CodeBlock` e `LibraryComponentItem`
- [ ] `<Button />` — variantes `primary`, `primary-halo`, `secondary`, `soft`, `warm`, `vertical`
- [ ] `<Eyebrow />` (uppercase, tracking 1.4px, `secondary-dark` / `secondary` sobre escuro)
- [ ] `<CheckItem />` e a dupla `<SpecRow />` / `<SpecLabel />`
- [ ] Cards: `<CardModelo />`, `<CardProjeto />`, `<CardBlog />`, `<CardDepoimento />`
- [ ] `<FormInput />` / `<FormSelect />` (pílula 52px, foco em `secondary-tint`)
- [ ] Registrar cada primitivo em `04-COMPONENTES.md` no mesmo commit

## Fases pendentes
- [ ] Fase 2 — Componentização Base — aceite: `/design-system` roda com `noindex` e o primeiro
      primitivo injetado
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

## Aguardando o cliente
| O que | Pedido em | Status |
|---|---|---|
| Arquivos da fonte Riope | 2026-08-06 | **`.woff2` recebida e no ar**; `.woff` veio com 0 bytes |
| Licença de webfont do Riope (Envato Elements) — obrigatória antes do deploy | 2026-08-06 | aberto |
| E-mail institucional de destino do formulário | 2026-08-06 | aberto |
| Logo em SVG, `pattern-ondas.svg`, fotos de hero/galeria, og-image | 2026-08-06 | aberto |
| Validação dos breakpoints mobile/tablet (inferidos no DS) | 2026-08-06 | aberto |
| Correção de copy: "Modelos de Playground" na página Toboágua e eyebrow "FAQ" na newsletter | 2026-08-06 | aberto |
