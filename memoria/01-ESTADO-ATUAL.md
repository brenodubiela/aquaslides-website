# 📍 01 — ESTADO ATUAL

> **Retrato do agora, não histórico.** Este arquivo é SOBRESCRITO a cada `/checkpoint`.
> Máximo de 80 linhas. Histórico vive em `diario/`.

**Última atualização:** 2026-08-11 — Fase 3 concluída
**Fase atual do POP:** 3 — Rotas, Layouts & SEO
**Status:** **concluída**, liberada para a Fase 4

## Onde paramos (2 a 4 linhas)
**Fase 3 fechada:** O layout raiz foi implementado com `Header`, `Footer` e JSON-LD. Criamos a estrutura de rotas base (`/`, `/sobre`, `/linhas-de-atracoes`, `/projetos`), os arquivos de SEO estáticos (`sitemap.js`, `robots.js`) e o wrapper de animação `<Reveal>`. O `npm run lint` foi destravado e o build foi 100% estático (Server-first).

## Concluído até aqui
- [x] Fase 1 — Fundação & Setup
- [x] Fase 2 — Componentização Base — 26 primitivos + Sandbox `/design-system`
- [x] Fase 3 — Rotas, Layouts & SEO
- [ ] Fase 4 — Módulos Legais & LGPD
- [ ] Fase 5 — Sanity (blog no escopo)
- [ ] Fase 6 — Integração Front x Back
- [ ] Fase 7 — Formulários
- [ ] Fase 8 — Deploy & Handover

## O que existe hoje
- Next.js **15.5.23** + React 19.1.0, Tailwind **4.3.3** (CSS-first, `@theme static`)
- Deps: `typescript`, `motion`, `lucide-react`, `clsx`, `tailwind-merge`, `react-hook-form`, `react-simple-maps`
- Fontes: Riope 400 self-hospedada + Montserrat; Quicksand só na cadeia de fallback
- Rotas: `/`, `/sobre`, `/linhas-de-atracoes`, `/projetos`, `/design-system` (Sandbox, `noindex`), 404
- SEO: `sitemap.xml`, `robots.txt`, JSON-LD global no layout
- **26 primitivos** (Fase 2) + `Reveal` (Fase 3) + `Header` e `Footer`.

## Arquivos pela metade / abertos
| Arquivo | O que falta |
|---|---|
| `frontend/next.config.mjs` | `cdn.sanity.io` nos `remotePatterns` na Fase 6 |
| `frontend/public/fonts/Riope.woff` | 0 bytes; fora do `@font-face` |
| `frontend/public/` | favicon, og-image e `pattern-ondas.svg` |
| `studio/` | vazia por design — Sanity só na Fase 5 |

## Estado técnico (verificado no checkpoint)
- `npm run build`: **passa** — `/`, `/_not-found`, `/sobre`, `/linhas-de-atracoes`, `/projetos` estáticas (○)
- SEO: `/robots.txt` responde com disallow pro sandbox, e `/sitemap.xml` responde corretamente.
- `npm run lint`: **passa** sem erros (TypeScript instalado).
- **H1 no HTML cru**: sim, atestando o Server-first das rotas.
- `git status`: arquivos novos pendentes de commit.

## Em observação
- **Header "cortado" no mobile:** não reproduzido em Chrome emulado (geometria e CSSOM medidos e
  estáveis em todos os estados de scroll). Foram aplicadas as correções estruturais — `fixed` +
  fim do `-mt-[79px]` + `transition-colors` + `[will-change:opacity]` — que corrigem um defeito
  **comprovado** (headline do hero passando por baixo da barra). Se o sintoma persistir no
  aparelho real, o próximo passo é DevTools → Rendering → *Paint flashing* durante o scroll.

## Bloqueios (dependem do cliente ou de mim)
- **Licença de webfont do Riope** (Envato): bloqueio de deploy, não de desenvolvimento.
- **E-mail institucional** do formulário (Fase 7) e **assets de marca** (logo SVG, `pattern-ondas.svg`, fotos, og-image).
- **Mobile/tablet:** breakpoints do `DESIGN.md` são inferência não validada.
