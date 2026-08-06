# 📍 01 — ESTADO ATUAL

> **Retrato do agora, não histórico.** Este arquivo é SOBRESCRITO a cada `/checkpoint`.
> Máximo de 80 linhas. Histórico vive em `diario/`.

**Última atualização:** 2026-08-06 — `/checkpoint`
**Fase atual do POP:** 1 — Fundação & Setup
**Status:** **concluída e verificada**, aguardando aprovação para a Fase 2

## Onde paramos (2 a 4 linhas)
Arquitetura Next.js 15 de pé em `frontend/`, com Tailwind v4 CSS-first e o `DESIGN.md` inteiro
tokenizado no `@theme` de `globals.css`. Tipografia definitiva no ar: Riope self-hospedada
(`next/font/local`) + Montserrat, com Quicksand só como elo de fallback. Critério de aceite da
Fase 1 rodado e aprovado. Nenhum componente criado ainda — a Fase 2 começa do zero.

## Concluído até aqui
- [x] Fase 1 — Fundação & Setup
- [ ] Fase 2 — Componentização Base
- [ ] Fase 3 — Rotas, Layouts & SEO
- [ ] Fase 4 — Módulos Legais & LGPD
- [ ] Fase 5 — Sanity (blog no escopo)
- [ ] Fase 6 — Integração Front x Back
- [ ] Fase 7 — Formulários
- [ ] Fase 8 — Deploy & Handover

## O que existe hoje
- Next.js **15.5.23** (App Router, JS/JSX, `src/`, alias `@/*`, Turbopack) + React 19.1.0
- Tailwind CSS **4.3.3** via `@tailwindcss/postcss` (sem `tailwind.config.js`, sem `autoprefixer`)
- `motion` ^13, `lucide-react` ^1.29, `clsx` ^2.1.1, `tailwind-merge` ^3.6
- Fontes: **Riope 400** self-hospedada (`public/fonts/Riope.woff2`), Montserrat 400/600/700 e
  Quicksand 400 (fallback) — todas por `next/font`, zero request externo
- Rotas: `/` (smoke test de tokens) e a 404 (`not-found.jsx`, com `noindex`)
- `globals.css` com todo o DS: marca, 7 verticais, superfícies, texto, hairlines, semântica,
  16 estilos tipográficos + 5 mobile, radius, spacing nomeado, halos e focus ring
- `src/utils/cn.js` (`clsx` + `tailwind-merge` estendido com as escalas do DS)
- Git iniciado em `main`, `.gitignore` único na raiz, `.agents/` fora via `.git/info/exclude`

## Arquivos pela metade / abertos
| Arquivo | O que falta |
|---|---|
| `frontend/next.config.mjs` | `images.remotePatterns` recebe `cdn.sanity.io` na Fase 6 |
| `frontend/src/app/page.jsx` | é smoke test de tokens; vira Home real na Fase 3 |
| `frontend/public/fonts/Riope.woff` | veio com **0 bytes**; fora do `@font-face` (só a `.woff2` está mapeada) |
| `frontend/public/` | favicon, og-image e `pattern-ondas.svg` (assets do cliente) |
| `studio/` | vazia por design — Sanity só na Fase 5 |

## Estado técnico (verificado no checkpoint)
- `npm run build`: **passa** — `/` e `/_not-found` como rotas estáticas (○); `npm run lint` limpo
- `curl -s http://localhost:3000 | grep "<h1"`: **retorna o H1** com o texto no HTML do servidor
- `@font-face` do Riope emitido com `font-weight: 400` e `font-display: swap`; arquivo servido em
  `/_next/static/media` com SHA-256 idêntico ao original
- Componentes client no projeto: **nenhum** (100% Server Components)
- CSS compilado: utilitários dos tokens confirmados (`bg-primary`, `text-eyebrow`, `py-section`,
  `shadow-halo-primary`, `max-w-content`, as 7 verticais)
- `git status`: só arquivos legítimos; nenhuma credencial nos arquivos versionados

## Bloqueios (dependem do cliente ou de mim)
- **Licença de webfont do Riope** (Envato Elements): bloqueio de **deploy**, não de desenvolvimento.
- **`Riope.woff` válida** — a entregue tem 0 bytes (impacto residual: WOFF2 já cobre os navegadores).
- **E-mail institucional** para o formulário de contato (Fase 7) — ainda "a definir".
- **Assets de marca:** logo (SVG), `pattern-ondas.svg`, fotos de hero/galeria e og-image.
- **Mobile/tablet:** o `DESIGN.md` marca os breakpoints como inferência não validada — precisa de
  aprovação antes de virar especificação.
- **Fase 2 precisa do arquivo de referência `ComponentLibrary.jsx`** para começar.
