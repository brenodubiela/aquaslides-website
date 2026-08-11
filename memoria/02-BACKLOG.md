# 🎯 02 — BACKLOG & PRÓXIMO PASSO

> Atualizado a cada `/checkpoint`. O topo é sempre a próxima ação.

## ▶️ PRÓXIMO PASSO EXATO
**Fase:** 4 — Módulos Legais & LGPD
**Tarefa:** Criar página de Política de Privacidade e Termos de Uso.
**Arquivo(s) alvo:** `src/data/legal-texts.js`, `src/app/(legal)/politica-de-privacidade/page.jsx`, `src/app/(legal)/termos-de-uso/page.jsx`, `cookie-banner.jsx`
**Prompt a usar:** POP.md → Prompt Mestre #4
**Pré-requisito:** nenhum.

---

## ✅ Fase 3 — Rotas, Layouts & SEO (CONCLUÍDA em 2026-08-11)
Aceite do Anexo C atendido:
- `npm run lint` passando (typescript 5 adicionado via devDeps)
- Build estático sem erros (○) para as novas rotas.
- `<Reveal>` encapsulando as páginas que são renderizadas no servidor.
- Layout raiz com Header (reutilizando NavMenu) e Footer criados e mapeados.
- `robots.js` e `sitemap.js` operando e respondendo na rota correta.

## 🔍 Pente-fino de tokens (adiado — fazer antes da Fase 8)
Vários primitivos da Fase 2 ainda usam escalas default do Tailwind em vez dos tokens do DS
(`text-2xl`, `text-sm`, `text-base`, `p-4`, `gap-4`, `rounded-[30px]`, `shadow-*`). O `<Timeline />`
e o `<ProjectMap />` já foram alinhados e servem de referência.
Lembretes da auditoria: largura nunca usa `xs|sm|md|lg|xl`; headline é `font-display`, não
`font-riope`; placeholder de imagem precisa do `/png`.

## Fases pendentes
- [x] Fase 2 — Componentização Base — **concluída em 2026-08-10**
- [x] Fase 3 — Rotas, Layouts & SEO — **concluída em 2026-08-11**
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
