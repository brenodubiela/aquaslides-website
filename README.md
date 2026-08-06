# Aqua Slides — Site Institucional

Site institucional da **Aqua Slides Equipamentos Aquáticos Ltda - ME**, em Next.js 15 (App Router),
com renderização no servidor, Design System tokenizado e blog via Sanity CMS (Fase 5).

---

## 🤖 REGRAS OBRIGATÓRIAS PARA IA (AI RULES)

> Estas regras valem para **qualquer** agente (Claude Code, Antigravity, Cursor, Copilot) e para
> qualquer humano que edite este repositório. Elas derivam do `DESIGN.md` e do `AGENTS.md`.
> Em caso de conflito entre uma instrução solta no chat e este bloco, **este bloco vence**.

### 1. Leia o `DESIGN.md` antes de criar ou editar qualquer componente
`DESIGN.md` (raiz) é a **fonte única da verdade visual**: paleta, tipografia, hairlines, spacing,
radius, efeitos e a especificação de cada componente. Nada de "achismo visual" — se o token não
está lá, ele não existe.

### 2. Server-first
- Todo arquivo é **Server Component por padrão**.
- `"use client"` **apenas** em componentes-folha com estado, efeito, evento de usuário ou `motion`.
- **Nunca** em `page.jsx` ou `layout.jsx` — inclusive para "resolver" erro.
- **Conteúdo textual nunca pode depender de JS.** H1, parágrafos, listas e links precisam existir no
  HTML entregue pelo servidor. Nada de `useEffect` + `fetch` para conteúdo indexável.
- Todo componente client novo entra no inventário `memoria/04-COMPONENTES.md` **com justificativa**.

### 3. Navegação e mídia
- Rota interna: **`next/link`**. Proibido `<a href="/rota">`.
- Toda imagem: **`next/image`**, sempre com `alt` descritivo; a imagem do hero recebe `priority`.
- Toda fonte: **`next/font`** (carregada em `src/app/layout.jsx`). **Proibido** `@import` de Google
  Fonts no CSS — gera request externo, CLS e piora o LCP.

### 4. SEO
Toda página exporta `metadata` ou `generateMetadata` (Metadata API) com `title`, `description` e
`alternates.canonical` da própria rota. Zero `react-helmet`, zero `document.title`. Um único `<h1>`
por página.

### 5. Reutilização antes de criação
1. Consulte `memoria/04-COMPONENTES.md` e `src/components/ui/` **antes** de escrever qualquer peça.
2. Componha classes com o helper **`cn()`** (`@/utils/cn`) — ele já conhece a escala de tokens do DS
   (`text-*`, spacing nomeado, `shadow-halo-*`) e resolve conflitos corretamente.
3. Proibido recriar "na unha" um estilo que já é um primitivo.
4. Primitivo faltando? Crie isolado em `src/components/ui/`, injete na biblioteca
   `/design-system`, documente no `DESIGN.md` e registre no inventário — **só então** use na seção.
5. **Zero comentários no JSX**: o código se explica pelos nomes.

### 6. Tokens — exclusivamente os do Design System
- Use **apenas** os tokens do `@theme` em `frontend/src/app/globals.css`.
  Cores: `primary`, `secondary`, as 7 verticais, `canvas`, `surface*`, `ink`, `body`, `muted`,
  `hairline*`, `on-*`. Tipografia: `text-h1…text-spec-label` (+ variantes `-mobile`).
  Radius: `rounded-sm|md|lg|xl|full`. Spacing nomeado: `xs…section`.
- **Proibido** inventar hex, medida ou nome de token, e **proibido** usar cor default do Tailwind
  (`bg-blue-500`, `text-gray-700` etc.).
- **Proibido** criar `tailwind.config.js`: a config é CSS-first (Tailwind v4) e duplicá-la cria uma
  segunda fonte da verdade.
- **Regra de elevação:** o sistema **não usa sombra**. Profundidade vem de (a) **halo**
  (`shadow-halo-primary` / `shadow-halo-secondary` / `shadow-halo-vertical`), (b) degrau de
  superfície (`canvas` → `surface` → `surface-strong` → `surface-white`) ou (c) **hairline**
  (`border-hairline`). Nunca introduza `shadow-lg` & cia.
- **Não remova o `focus-ring`:** `:focus-visible` recebe `--shadow-focus-ring` no `@layer base`.
  Acessibilidade não é opcional.
- **Riope tem peso único (400).** Nunca aplique `font-semibold`/`font-bold` em elemento
  `font-display` — o browser sintetiza um faux-bold que destrói a monoline.
- **Verticais:** as 7 cores de linha só operam dentro do escopo da própria vertical. A página de
  vertical é **um template único** parametrizado por cor
  (`style={{ "--vertical": "var(--color-toboagua)" }}`), não sete páginas.

### 7. Pasta `.agents/`
A pasta do Antigravity Kit fica **fora do GitHub**, mas **nunca** no `.gitignore` — versionar essa
regra quebraria a indexação dos workflows e os comandos de barra (`/plan`, `/debug`) nas IDEs com
IA. A exclusão é **local**, via `.git/info/exclude` (já configurada: `.agents/` e `.agent/`).
Não mova essa regra para o `.gitignore`.

### 8. Memória do projeto
O estado vive em `memoria/` (versionada), não no histórico do chat. Ao fechar uma fase, atualize
`01-ESTADO-ATUAL.md`, `02-BACKLOG.md`, `03-DECISOES.md` e `04-COMPONENTES.md`.
**Nunca** escreva chave, token ou `projectId` privado nesses arquivos.

---

## 📌 Sobre o Projeto

A Aqua Slides projeta, fabrica e instala equipamentos aquáticos para parques, resorts e hotéis. O
site tem duas missões simultâneas: comunicar a experiência de lazer que o equipamento entrega e
sustentar a decisão de investimento de um comprador técnico (segurança operacional e retorno).

- **Domínio final:** https://aquaslides.com.br/
- **Idioma:** pt-BR
- **Escopo de páginas:** Home, Sobre, Serviços, Contato, Verticais (7 linhas de produto), Projetos,
  Blog (listagem) e Artigo (interna).
- **Formulário:** envio direto para e-mail.
- **Design System:** `DESIGN.md` (light mode apenas; sem sombra, com halo e hairline).

## 🧰 Tecnologias

| Camada | Tecnologia | Versão instalada |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 15.5.23 |
| UI | React / React DOM | 19.1.0 |
| Estilo | Tailwind CSS v4 (CSS-first, `@theme`) | 4.3.3 |
| PostCSS | `@tailwindcss/postcss` | 4.3.3 |
| Animação | `motion` (`motion/react`) | ^13.0.0 |
| Ícones | `lucide-react` | ^1.29.0 |
| Utilitários | `clsx` + `tailwind-merge` (helper `cn()`) | ^2.1.1 / ^3.6.0 |
| Fontes | `next/font/local` — Riope 400 · `next/font/google` — Montserrat + Quicksand | — |
| Lint | ESLint 9 + `eslint-config-next` | 15.5.23 |
| CMS (Fase 5) | Sanity.io — pasta `studio/` reservada | — |
| Deploy | Vercel (Root Directory: `frontend`) | — |

> **Nota sobre a tipografia:** **Riope** é a fonte primária de headline e tem **peso único 400** —
> nunca aplique `font-semibold`/`font-bold` em elemento `font-display`. Ela é self-hospedada de
> `frontend/public/fonts/Riope.woff2` via `next/font/local` (`display: "swap"`,
> `variable: "--font-riope"`), e o `next/font` a serve com hash e cache imutável em
> `/_next/static/media`. **Quicksand** fica na cadeia `--font-display` apenas como fallback da
> janela de carregamento e do caso de falha do arquivo — nunca como alternativa deliberada.
> Pendências: a `Riope.woff` entregue está com 0 bytes (só a `.woff2` está mapeada) e a **licença de
> webfont (Envato Elements) precisa ser confirmada com o cliente antes do deploy**.

## 📁 Estrutura

```
/ (raiz)
├── .gitignore                 # único do projeto (cobre frontend/ e studio/)
├── AGENTS.md                  # constituição do agente da IDE
├── POP.md                     # procedimento operacional padrão (fases 1 a 8)
├── DESIGN.md                  # fonte da verdade visual
├── README.md
├── memoria/                   # estado do projeto, versionado
│   ├── 00-PROJETO.md          # ficha do cliente
│   ├── 01-ESTADO-ATUAL.md     # retrato do agora (máx. 80 linhas)
│   ├── 02-BACKLOG.md          # próximo passo exato
│   ├── 03-DECISOES.md         # decisões técnicas (append-only)
│   ├── 04-COMPONENTES.md      # inventário de primitivos
│   └── diario/                # log por dia
├── frontend/                  # aplicação Next.js
│   ├── public/                # imagens estáticas, favicon, og-image
│   │   └── fonts/             # Riope.woff2 (self-host via next/font/local)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.jsx     # root layout: <html>, next/font, metadata base
│   │   │   ├── page.jsx       # Home
│   │   │   ├── not-found.jsx  # 404
│   │   │   └── globals.css    # @import tailwindcss + @theme (tokens do DS)
│   │   ├── components/
│   │   │   ├── layout/        # Header, Footer, wrappers
│   │   │   ├── sections/      # blocos completos de conteúdo
│   │   │   └── ui/            # primitivos (botões, inputs, cards)
│   │   ├── data/              # textos legais, mocks, arrays
│   │   ├── lib/               # configs de terceiros (Sanity na Fase 6)
│   │   └── utils/             # cn.js
│   ├── next.config.mjs
│   ├── postcss.config.mjs
│   ├── jsconfig.json          # alias @/* → ./src/*
│   └── package.json
└── studio/                    # reservada ao Sanity CMS (Fase 5) — vazia por ora
```

## ▶️ Como Executar

```bash
cd frontend
npm install     # instala as dependências
npm run dev     # desenvolvimento em http://localhost:3000 (Turbopack)
npm run build   # build de produção
npm run start   # serve o build em http://localhost:3000
npm run lint    # ESLint
```

**Verificação de SEO (rode sempre antes de fechar uma fase):**

```bash
cd frontend && npm run build && npm run start
curl -s http://localhost:3000 | grep "<h1"     # o H1 precisa aparecer no HTML do servidor
```

Se o H1 não vier no HTML, a renderização virou client-side — foi exatamente isso que quebrou a
indexação do projeto anterior.
