# 🧱 04 — INVENTÁRIO DE COMPONENTES

> O agente consulta este arquivo ANTES de criar qualquer coisa. Se não está aqui, não existe.
> Toda peça nova entra aqui no mesmo commit em que é criada.

## Legenda
- **S** = Server Component (padrão) · **C** = Client Component (`"use client"` — exige justificativa)

> ⚠️ **Regra Server-first:** o projeto está com **5** primitivos client + a página do Sandbox.
> Todo `"use client"` novo precisa de justificativa explícita registrada na tabela abaixo.

## `src/components/ui/` — primitivos (26 arquivos · Fase 2 concluída)

### Botões e navegação
| Componente | Arquivo | S/C | Props | Justificativa se for C |
|---|---|---|---|---|
| `<Button />` | `button.jsx` | **S** | `variant`, `color`, `vertical`, `size`, `hasHalo`, `href`, `as`, `icon`, `children`, `type`, `disabled`, `className` | — · 14 variantes: `primary`, `secondary`, `soft`/`indicator`, `warm`, `halo-primary`, `halo-secondary` + as 7 verticais. Polimórfico: vira `next/link` com `href` |
| `<ButtonDropdown />` | `button-dropdown.jsx` | **C** | `label`, `options`, `onSelect`, `align`, `className` | `useState` do menu + click-outside e `Esc` |
| `<CircularArrow />` | `circular-arrow.jsx` | **S** | `isActive`, `className` | — |
| `<TextLink />` | `text-link.jsx` | **S** | `children`, `href`, `active`, `className` | — · renderiza `next/link` |
| `<DropdownLink />` | `dropdown-link.jsx` | **S** | `title`, `items`, `active`, `className` | — · menu por `group-hover` (CSS puro) |
| `<NavMenu />` | `nav-menu.jsx` | **C** | `logoSlot`, `forceScrolled`, `position`, `className` | ouve `scroll` para alternar Normal/Scrolled |

### Átomos tipográficos e listas
| Componente | Arquivo | S/C | Props | Justificativa se for C |
|---|---|---|---|---|
| `<Eyebrow />` | `eyebrow.jsx` | **S** | `children`, `variant` (`default`/`dark`), `as`, `className` | — |
| `<CheckItem />` | `check-item.jsx` | **S** | `text`, `className` | — |
| `<PowerNumber />` | `power-number.jsx` | **S** | `icon`, `number`, `label`, `className` | — |
| `<SocialLinks />` | `social-links.jsx` | **S** | `networks` (`[{name, url}]`), `variant` (`footer`/`share`), `className` | — |
| Ícones de marca | `social-icons.jsx` | **S** | `className` | — · `FacebookIcon`, `InstagramIcon`, `YoutubeIcon`, `LinkedinIcon`, `XIcon` (SVG inline) |
| Ícones de valor | `value-icons.jsx` | **S** | `className` | — · `TargetIcon`, `VerifiedIcon`, `BankIcon` |

### Cards
| Componente | Arquivo | S/C | Props | Justificativa se for C |
|---|---|---|---|---|
| `<ProjectCard />` | `project-card.jsx` | **S** | `title`, `subtitle`, `isActive`, `logoSlot`, `className` | — · usa `<CircularArrow />` |
| `<TestimonialCard />` | `testimonial-card.jsx` | **S** | `name`, `text`, `avatarSrc`, `rating`, `className` | — |
| `<ArticleCard />` | `article-card.jsx` | **S** | `title`, `excerpt`, `imageSrc`, `href`, `className` | — |
| `<BlogCard />` | `blog-card.jsx` | **S** | `title`, `excerpt`, `imageSrc`, `href`, `layout`, `className` | — |
| `<ClientLogoCard />` | `client-logo-card.jsx` | **S** | `src`, `alt`, `className` | — |
| `<ValueCard />` | `value-card.jsx` | **S** | `icon`, `eyebrow`, `title`, `children`, `className` | — |
| `<InfoCard />` | `info-card.jsx` | **S** | `title`, `description`, `className` | — |

### Blocos de seção
| Componente | Arquivo | S/C | Props | Justificativa se for C |
|---|---|---|---|---|
| `<Timeline />` | `timeline.jsx` | **S** | `items` (`[{year, title, description}]`), `className` | — · alterna esquerda/direita no desktop, coluna única no mobile |
| `<Accordion />` | `accordion.jsx` | **C** | `items`, `className` | `useState` do item aberto |
| `<ProjectMap />` | `project-map.jsx` | **C** | `className` | `useState` do projeto ativo + listener de `resize`. Mapa estático (sem `ZoomableGroup`, que engolia o clique). Marcadores acessíveis por teclado. O painel segue `map-project-panel` e reutiliza `<Eyebrow />` + `<Button variant="halo-primary">` |

### Formulário
| Componente | Arquivo | S/C | Props | Justificativa se for C |
|---|---|---|---|---|
| `<Input />` | `input.jsx` | **S** | `type`, `hasError`, `className` + `ref` | — |
| `<Select />` | `select.jsx` | **S** | `children`, `hasError`, `className` + `ref` | — |
| `<Label />` | `label.jsx` | **S** | `className` + `ref` | — |
| `<ContactForm />` | `contact-form.jsx` | **C** | `className` | `react-hook-form` (estado, validação e submit) |

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
5. ⚠️ **Ícones de marca não vêm do Lucide** — o `lucide-react` v1 removeu Facebook, Instagram,
   YouTube, Twitter/X e LinkedIn. Eles vivem como SVG inline em `src/components/ui/social-icons.jsx`
   (`FacebookIcon`, `InstagramIcon`, `YoutubeIcon`, `XIcon`, `LinkedinIcon`). Marca nova entra lá.
6. ⚠️ **Largura nunca usa `xs|sm|md|lg|xl`** — nossos tokens de spacing sombreiam a escala de
   container do Tailwind, então `max-w-lg` = **24px**, `max-w-xs` = **4px**. Em `w-`, `max-w-`,
   `min-w-` e `basis-` use token do DS ou valor explícito. Em `p-`/`m-`/`gap-` os nomes funcionam.
7. ⚠️ **Animação entra como token `--animate-*` no `@theme`** (hoje: `animate-fade-in`, 150ms).
   Nada de `animate-in`/`fade-in-*` — o plugin `tailwindcss-animate` não está instalado. Para
   estilizar filho vindo por `children`, use variante de descendente (`[&_ul]:flex`), não `prose-*`.
8. ⚠️ **A fonte de headline é `font-display`** — `font-riope` não é utility e não aplica nada.
9. ⚠️ **Placeholder de imagem sempre com formato explícito**: `placehold.co/600x400/e6e6e6/6c6c6c/png?text=…`
   — sem o `/png` o serviço devolve SVG e o otimizador do `next/image` bloqueia (SVG remoto é XSS).
10. ⚠️ **`inline-block`**: o token `--spacing-block` (64px) faz o Tailwind gerar uma utility
   `inline-block` de `inline-size` que colide com a de display. Já existe uma regra corretiva em
   `globals.css` — **não a remova**. Para a medida de 64px use `w-block`/`p-block`.
   Detalhes em `03-DECISOES.md` (2026-08-10).
