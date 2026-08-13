# 📍 01 — ESTADO ATUAL

> **Retrato do agora, não histórico.** Este arquivo é SOBRESCRITO a cada `/checkpoint`.
> Máximo de 80 linhas. Histórico vive em `diario/`.

**Última atualização:** 2026-08-12 — Front-end estático (Fases 1 a 4) 100% concluído
**Fase atual do POP:** 7 — Formulários (Aguardando Endpoint)
**Status:** **bloqueada**, aguardando definição do cliente para o disparo.

## Onde paramos (2 a 4 linhas)
**Front-end estrutural finalizado:** Toda a construção visual (Fases 1, 2, 3 e 4) foi concluída com sucesso. O site já possui todas as páginas institucionais, os templates dinâmicos de Projetos e Linhas de Atração (com mocks), a estrutura visual do Blog e os módulos legais (Privacidade, Termos e Banner LGPD). As Fases 5 e 6 (Sanity) foram removidas do escopo (backend próprio do cliente).

## Concluído até aqui
- [x] Fase 1 — Fundação & Setup
- [x] Fase 2 — Componentização Base
- [x] Fase 3 — Rotas, Layouts, SEO & Montagem da Home
- [x] Fase 4 — Módulos Legais & LGPD
- [ ] Fase 7 — Formulários (UI pronta, pendente Integração)
- [ ] Fase 8 — Deploy & Handover

## O que existe hoje
- Next.js **15.5.23** + React 19.1.0, Tailwind **4.3.3**
- Rotas: `/`, `/sobre`, `/linhas-de-atracoes`, `/projetos`, `/blog`, `/blog/[slug]`, `/design-system`, 404, `/politica-de-privacidade`, `/termos-de-uso`
- SEO: `sitemap.xml`, `robots.txt`, JSON-LD global
- **Templates e Módulos:** Estrutura estática totalmente construída e responsiva. Mocks abastecendo Linhas de Atração e Projetos.
- **Formulários:** UI pronta. Aguardando endpoint de envio.
- **Header e Footer:** Totalmente responsivos. Footer atualizado com `patternbgrodape.png` e `logoazulrodape.svg`.

## Arquivos pela metade / abertos
| Arquivo | O que falta |
|---|---|
| `frontend/next.config.mjs` | `cdn.sanity.io` nos `remotePatterns` na Fase 6 |
| `frontend/public/fonts/Riope.woff` | 0 bytes; fora do `@font-face` |
| `studio/` | vazia por design — Sanity só na Fase 5 |

## Estado técnico (verificado no checkpoint)
- `npm run build`: **passa perfeitamente** — rotas estáticas (○) com 0 erros de SSR.
- SEO: h1 e subtítulos das seções validados estaticamente via curl.
- `npm run lint`: **passa**.
- `git status`: o desenvolvedor consolidou e fez commit (feat: construcao da pg inicial).

## Bloqueios (dependem do cliente ou de mim)
- **Licença de webfont do Riope** (Envato): bloqueio de deploy.
- **E-mail institucional** do formulário (Fase 7).
- **Mobile/tablet:** breakpoints do `DESIGN.md` são inferência não validada.
