# 📍 01 — ESTADO ATUAL

> **Retrato do agora, não histórico.** Este arquivo é SOBRESCRITO a cada `/checkpoint`.
> Máximo de 80 linhas. Histórico vive em `diario/`.

**Última atualização:** 2026-08-10 — Fase 2 concluída
**Fase atual do POP:** 2 — Componentização Base
**Status:** **concluída**, liberada para a Fase 3

## Onde paramos (2 a 4 linhas)
**Fase 2 fechada:** 26 primitivos em `src/components/ui/`, todos injetados no Sandbox
`/design-system`, que abre as 8 categorias sem erro. O dia foi de correção — quatro defeitos com a
mesma raiz (*classe que não existe ou que significa outra coisa*) e o `<ProjectMap />` alinhado ao
`map-project-panel`. Próxima parada é a Fase 3, que traz Header, Footer e as rotas reais.

## Concluído até aqui
- [x] Fase 1 — Fundação & Setup
- [x] Fase 2 — Componentização Base — 26 primitivos + Sandbox `/design-system`
- [ ] Fase 3 — Rotas, Layouts & SEO
- [ ] Fase 4 — Módulos Legais & LGPD
- [ ] Fase 5 — Sanity (blog no escopo)
- [ ] Fase 6 — Integração Front x Back
- [ ] Fase 7 — Formulários
- [ ] Fase 8 — Deploy & Handover

## O que existe hoje
- Next.js **15.5.23** + React 19.1.0, Tailwind **4.3.3** (CSS-first, `@theme static`)
- Deps: `motion`, `lucide-react`, `clsx`, `tailwind-merge`, `react-hook-form`, `react-simple-maps`
- Fontes: Riope 400 self-hospedada + Montserrat; Quicksand só na cadeia de fallback
- Rotas: `/` (smoke test), `/design-system` (Sandbox, `noindex`), 404
- **26 primitivos** em `src/components/ui/` — 21 Server, **5 Client** (`accordion`,
  `button-dropdown`, `contact-form`, `nav-menu`, `project-map`) + a página do Sandbox.
  Inventário completo em `04-COMPONENTES.md`
- `src/components/layout/`, `sections/`, `data/` e `lib/` ainda vazios — `layout/` recebe
  Header e Footer na Fase 3

## Arquivos pela metade / abertos
| Arquivo | O que falta |
|---|---|
| `frontend/next.config.mjs` | `cdn.sanity.io` nos `remotePatterns` na Fase 6 |
| `frontend/src/app/page.jsx` | ainda é o smoke test; vira Home real na Fase 3 |
| `frontend/public/fonts/Riope.woff` | 0 bytes; fora do `@font-face` |
| `frontend/public/` | favicon, og-image e `pattern-ondas.svg` |
| `studio/` | vazia por design — Sanity só na Fase 5 |

## Estado técnico (verificado no checkpoint)
- `npm run build`: **passa** — `/`, `/_not-found` e `/design-system` estáticas (○)
- `/design-system`: HTTP 200 com `<meta name="robots" content="noindex, nofollow">`
- `/`: HTTP 200 com o H1 no HTML do servidor
- **Auditoria de classes: zero classes inválidas** (355 analisadas). Comando no diário 2026-08-10
- `git status`: 44 arquivos pendentes de commit; `.agents/` fora via `.git/info/exclude`
- ❌ `npm run lint` **quebrado**: `eslint-config-next` carrega o parser de TypeScript e o
  projeto é JS puro sem `typescript` instalado. Some com `npm i -D typescript` — **precisa da sua
  autorização** (AGENTS.md §3)

## Bloqueios (dependem do cliente ou de mim)
- **Autorizar `typescript` como devDependency** para destravar o lint.
- **Licença de webfont do Riope** (Envato): bloqueio de deploy, não de desenvolvimento.
- **E-mail institucional** do formulário (Fase 7) e **assets de marca** (logo SVG,
  `pattern-ondas.svg`, fotos, og-image).
- **Mobile/tablet:** breakpoints do `DESIGN.md` são inferência não validada.
- `react-simple-maps@3` declara peer deps de React 16/17/18 — roda no 19 sem suporte oficial.
