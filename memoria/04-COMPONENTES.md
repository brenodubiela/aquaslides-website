# 🧱 04 — INVENTÁRIO DE COMPONENTES

> O agente consulta este arquivo ANTES de criar qualquer coisa. Se não está aqui, não existe.
> Toda peça nova entra aqui no mesmo commit em que é criada.

## Legenda
- **S** = Server Component (padrão) · **C** = Client Component (`"use client"` — exige justificativa)

> ⚠️ **Regra Server-first:** o projeto está hoje com **zero** componentes client. Todo `"use client"`
> novo precisa de justificativa explícita registrada na tabela abaixo.

## `src/components/ui/` — primitivos
| Componente | Arquivo | S/C | Props | Justificativa se for C |
|---|---|---|---|---|
| _(vazio — Fase 2)_ | | | | |

## `src/components/layout/` — estrutura
| Componente | Arquivo | S/C | Usado em |
|---|---|---|---|
| _(vazio — Fase 3)_ | | | |

## `src/components/sections/` — blocos de página
| Seção | Arquivo | Página | Figma |
|---|---|---|---|
| _(vazio — Fase 3)_ | | | |

## Utilitários
| Nome | Arquivo | O que faz |
|---|---|---|
| `cn()` | `src/utils/cn.js` | `clsx` + `tailwind-merge` já estendido com as escalas do DS (`text`, `spacing`, `shadow`, `container`). **Sempre** use para compor classes e aceitar `className` externo. |

## Tokens do Design System em uso
> Resumo rápido. A fonte da verdade continua sendo o `DESIGN.md` e o `@theme` do `globals.css`.

| Token | Valor | Onde usar |
|---|---|---|
| `--color-primary` | `#09aae0` | CTAs, títulos de card em Riope, números de prova social |
| `--color-primary-tint` | `#e3f5fc` | fundo do `button-soft` e base do halo primário |
| `--color-secondary` | `#facc01` | logo sobre foto/azul, checks, banda de newsletter |
| `--color-secondary-dark` | `#fea02e` | micro-labels: eyebrow, spec-label, chip de ano, estrelas |
| `--color-canvas` | `#f8f8f8` | fundo base da página |
| `--color-surface` | `#f2f2f2` | card padrão (modelo, processo, MVV, FAQ fechado) |
| `--color-surface-strong` | `#e6e6e6` | card sobre card (projeto, depoimento) |
| `--color-surface-white` | `#ffffff` | input em repouso e FAQ aberto (só aqui) |
| `--color-surface-warm` | `#fff5ea` | `button-warm` e chip de ano da timeline |
| `--color-ink` | `#3d3d3d` | headline e título |
| `--color-body` | `#4d4d4d` | parágrafo corrido |
| `--color-muted` | `#6c6c6c` | metadados, legendas, link secundário |
| `--color-hairline` | `#e5e5e5` | divisores e bordas (o sistema não usa sombra) |
| Verticais | `ball` `fresh` `ramp` `free-fall` `playground` `toboagua` `complexos` (+ `-dark`) | só dentro da própria vertical, via `--vertical` |
| `--font-display` | Riope 400 (self-hosted) → Quicksand → Trebuchet MS | H1, H2, H3 e títulos de card institucionais |
| `--font-sans` | Montserrat | todo o resto (corpo, labels, specs, botões) |
| `--shadow-halo-*` | `0 0 0 6px <tint>` | único destaque de interação — **nunca** `shadow-lg` |
| `--shadow-focus-ring` | = halo secundário | `:focus-visible` global — não remover |
| `--container-content` | `1400px` | `max-w-content` no container de conteúdo |

## Escalas nomeadas (para não errar o nome)
- **Tipografia:** `text-h1` `text-h2` `text-h3` `text-card-h` `text-lead` `text-p` `text-base`
  `text-card-p` `text-small` `text-blockquote` `text-inline-code` `text-button-md` `text-button-sm`
  `text-nav-link` `text-eyebrow` `text-spec-label` + variantes `-mobile`
  (`h1` `h2` `h3` `p` `card-p`).
  `text-base` = `typography.body` do DS (16px/1.6). `typography.muted` = `text-small text-muted`.
- **Spacing:** `xs` 4 · `sm` 8 · `md` 12 · `base` 16 · `lg` 24 · `xl` 32 · `xxl` 48 · `block` 64 ·
  `section` 96 (ex.: `py-section`, `p-lg`, `gap-base`).
- **Radius:** `rounded-sm` 8 · `rounded-md` 12 · `rounded-lg` 16 · `rounded-xl` 32 · `rounded-full`.

## Regras que valem para toda peça nova
1. Se o card descreve a Aqua Slides ou um produto dela → título em `font-display` + `text-primary`.
   Se aponta para item de lista que cresce (projeto, blog) → `text-card-h` + `text-ink`.
2. Riope tem **peso único 400**: nunca `font-semibold`/`font-bold` em elemento `font-display`.
3. Precisa de profundidade? Suba um degrau de superfície ou aplique halo. Nunca sombra.
4. Componente que recebe `href` interno renderiza `next/link`; imagem sempre `next/image` com `alt`.
