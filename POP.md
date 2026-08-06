# 🤖 Manual do Agente e POP: Fábrica de Sites — v2 (Next.js)

Este documento contém os "Códigos de Comando" para gerenciar a Inteligência Artificial durante o desenvolvimento, bem como o Procedimento Operacional Padrão (POP) completo passo a passo.

**Versão 3 — Next.js (App Router) + Memória Viva no repositório.**
Motivo: sites em React puro (Vite) entregam uma "tela em branco" para o Googlebot e o HTML só é montado no navegador. Isso causou o problema de indexação/ranqueamento no projeto anterior. O Next.js renderiza no servidor (SSR/SSG/ISR) e entrega HTML já preenchido — H1, H2, textos e imagens — para o buscador.

---

## 🔄 O QUE MUDOU DA v1 PARA A v2

| Antes (v1 — Vite) | Agora (v2 — Next.js) | Por quê |
|---|---|---|
| Vite | Next.js 15 (App Router) + Turbopack | Build próprio, SSR/SSG/ISR nativos |
| `react-router-dom` | Roteamento por pastas (`src/app/**/page.jsx`) | Pasta = rota, sem config |
| `react-helmet-async` | Metadata API (`export const metadata`) | SEO nativo, sem JS no cliente |
| `@tailwindcss/vite` | `@tailwindcss/postcss` (`postcss.config.mjs`) | Tailwind v4 no Next roda via PostCSS |
| `@import` de Google Fonts no CSS | `next/font/google` | Fonte self-hosted, zero CLS, sem request externo |
| `<img>` comum | `next/image` | Otimização, lazy load, LCP |
| `<Link>` do react-router | `next/link` | Prefetch automático |
| Tudo Client-Side | **Server Component por padrão** | HTML pronto para o Google |
| Save State colado no chat do Gemini | `memoria/` versionada + `AGENTS.md` | Estado vive com o código, não no histórico |

**O que NÃO mudou:** Tailwind CSS v4 (CSS-first, tokens no `@theme`), Motion (Framer Motion), Sanity.io + GROQ, Vercel, `clsx` + `tailwind-merge`, `lucide-react`, e a lógica de `DESIGN.md` como fonte única da verdade.

---

## 🧠 PARTE 1: MEMÓRIA VIVA DO PROJETO (dentro do repositório)

> **Mudou na v3.** Antes, o ciclo de vida (inicialização, hibernação, retorno) acontecia colando
> prompts gigantes num chat do Gemini. O estado do projeto morava no histórico da conversa — e
> histórico de chat se perde, é truncado e não acompanha o código.
>
> Agora o estado vive **em arquivos versionados dentro do próprio projeto**, lidos pelo agente da
> IDE (Antigravity) no início de cada sessão. O chat vira descartável; a memória, permanente.

### 1.1 Os arquivos da memória

Ficam na pasta `memoria/` na raiz do projeto — visível, versionada no Git, viajando junto com o
código:

| Arquivo | Papel | Como é escrito |
|---|---|---|
| `00-PROJETO.md` | Ficha do cliente (nome, domínio, cores, escopo, dados legais) | Preenchido uma vez no Onboarding |
| `01-ESTADO-ATUAL.md` | **Onde estamos agora** — fonte única da verdade | **Sobrescrito** a cada checkpoint (máx. 80 linhas) |
| `02-BACKLOG.md` | O que falta + o **próximo passo exato** | Atualizado a cada checkpoint |
| `03-DECISOES.md` | Decisões técnicas e o porquê delas | **Append-only**, nunca apaga |
| `04-COMPONENTES.md` | Inventário de primitivos (Server/Client) | Atualizado a cada componente novo |
| `diario/AAAA-MM-DD.md` | Log do dia | Append-only, um arquivo por dia |

> **O que "versionado" quer dizer aqui:** significa apenas que esses arquivos entram no `git commit`
> e sobem para o GitHub junto com o código. Nada muda no que você já tinha — a pasta `.agents/` da
> IDE continua **fora** do GitHub, excluída localmente pelo `.git/info/exclude` (nunca pelo
> `.gitignore`, para não quebrar a indexação dos workflows). A `memoria/` é o contrário: ela é
> documentação do projeto, então sobe junto. Vantagem prática: se você trocar de máquina ou
> reabrir o projeto daqui a seis meses, o histórico vem junto com o `git clone`.

E, na raiz, o `AGENTS.md`: a **constituição do agente** — identidade, stack fixa, as 8 leis
técnicas, o protocolo de memória, a regra de fase e as proibições. A IDE lê esse arquivo sozinha
no começo de toda sessão. É ele que substitui o antigo "prompt de inicialização" colado à mão.

### 1.2 Os três comandos do ciclo de vida

Em vez de colar três prompts longos, você digita um comando curto. O protocolo completo está
descrito no `AGENTS.md`, então o agente já sabe o que fazer.

**`/bom-dia`** — abertura da sessão
O agente lê `01-ESTADO-ATUAL.md` e `02-BACKLOG.md` e devolve, em até 15 linhas: onde paramos,
pendências abertas, próximo passo exato e o que ele precisa de você. Não gera código — espera o
"pode ir".

**`/checkpoint`** — ao fechar qualquer fase ou bloco grande
O agente reescreve o `01`, atualiza o `02`, registra componentes novos no `04`, anota decisões no
`03` e roda o critério de aceite da fase (Anexo C). Só então declara a fase concluída.

**`/boa-noite`** — fim do expediente
Faz tudo do checkpoint, grava o log em `diario/AAAA-MM-DD.md` e devolve o Save State resumido na
tela, para você bater o olho antes de fechar o notebook.

> **Por que checkpoint por fase e não só no fim do dia:** se a máquina travar, o contexto estourar
> ou você precisar sair no meio, o estado já está gravado. Salvar só às 18h é apostar que nada dá
> errado até lá.

### 1.3 Regras de higiene (o que mata um sistema de memória)

1. **`01-ESTADO-ATUAL.md` é retrato, não histórico.** Máximo de 80 linhas. Se crescer demais, o
   agente para de ler com atenção e o arquivo vira ruído. O histórico mora no diário.
2. **Um único arquivo diz onde estamos.** Se o diário e o `01` divergirem, o `01` está errado —
   corrija o `01`, não crie uma terceira versão da verdade.
3. **Nenhum segredo na memória.** Ela é versionada. `projectId` privado, tokens e chaves ficam só
   no `.env.local`.
4. **A memória é ferramenta, não burocracia.** Se um dia ela atrapalhar mais do que ajudar, o
   problema é o tamanho dos arquivos, não a ideia.

### 1.4 Divisão de papéis: o Gem pensa, a IDE executa e anota

O Gem do Gemini **continua existindo e continua sendo o centro do processo**. O que muda é só uma
coisa: ele deixa de ser o lugar onde o estado do projeto é guardado.

| | 🧠 **Gem (Gemini)** | ⚙️ **Agente da IDE (Antigravity / Claude Code)** |
|---|---|---|
| Função | Tech Lead: pensa, planeja, **gera os prompts** | Executor: roda comandos, cria e edita arquivos |
| Organização | **Um chat por cliente** (Cliente X, Cliente Y...) | Um projeto aberto por vez |
| Enxerga o código? | Não | Sim |
| Guarda o estado? | **Não** — ele consulta | **Sim** — ele escreve em `memoria/` |
| Onboarding do cliente | Sim | Recebe pronto pelo `00-PROJETO.md` |

**O ciclo na prática:**

1. Você abre o chat do Cliente X no Gem e diz em que pé está (ou cola o `01-ESTADO-ATUAL.md`).
2. O Gem devolve o **prompt pronto** da etapa — Fase 3, seção Hero, o que for.
3. Você cola esse prompt na IDE. O agente executa: cria arquivos, roda build, valida.
4. Ao fechar a etapa ou o dia, você roda `/checkpoint` ou `/boa-noite` **na IDE**. Ela grava o
   relatório em `memoria/`.
5. No dia seguinte, `/bom-dia` na IDE te devolve onde parou. Se precisar de estratégia, você leva o
   `01-ESTADO-ATUAL.md` de volta ao Gem.

**O handshake entre os dois é o `01-ESTADO-ATUAL.md`.** É exatamente por isso que ele tem teto de
80 linhas: precisa ser barato de colar no chat do Gem sem consumir metade do contexto dele.

**O que sai do Gem:** a obrigação de lembrar. Ele não precisa mais gerar Save State no fim do dia
nem receber Save State colado no dia seguinte — quem faz isso é a IDE, olhando para o código real.
O Gem só precisa saber a fase atual para gerar o prompt certo.

> As instruções atualizadas do Gem estão no arquivo `GEM-INSTRUCTIONS.md` deste kit.

### 1.5 Kit inicial (o que copiar em todo projeto novo)

Antes da Fase 1, o diretório precisa ter:

```
/ (Raiz)
├── AGENTS.md          # constituição do agente (igual em todos os clientes)
├── POP.md             # este documento
├── DESIGN.md          # exclusivo do cliente
└── memoria/           # templates em branco
    ├── 00-PROJETO.md
    ├── 01-ESTADO-ATUAL.md
    ├── 02-BACKLOG.md
    ├── 03-DECISOES.md
    ├── 04-COMPONENTES.md
    └── diario/
```

> **Dica de escala:** guarde esses arquivos num repositório-modelo (`fabrica-de-sites-template`) no
> GitHub, marcado como *Template repository*. Projeto novo vira um clique, e toda melhoria que
> você fizer no processo entra no template e vale para o próximo cliente.

---

## 🚀 PARTE 2: O PROCEDIMENTO OPERACIONAL PADRÃO (POP)

Siga estas fases e utilize os **Prompts Mestres** dentro do chat com o Agente para que ele gere os códigos rapidamente.

### 📏 CARTILHA NEXT.JS (as 6 leis do projeto)

> Estas regras estão embutidas em todos os prompts mestres abaixo. Se você criar um prompt novo, cole este bloco nele.

1. **Server-first.** Todo arquivo é Server Component por padrão. `"use client"` só em componentes-folha que usam `useState`, `useEffect`, `onClick`, `motion` ou `localStorage`. **Nunca** coloque `"use client"` no topo de um `page.jsx` ou `layout.jsx`.
2. **Conteúdo textual nunca depende de JS.** Títulos, parágrafos, listas e links precisam existir no HTML entregue pelo servidor. Se está dentro de um `useEffect`, o Google não vê.
3. **Navegação interna sempre com `next/link`.** Nada de `<a href="/sobre">` para rotas internas.
4. **Imagem sempre com `next/image`** (com `alt` descritivo, `width`/`height` ou `fill` + `sizes`). O Hero usa `priority`.
5. **SEO pela Metadata API.** Cada `page.jsx` exporta `metadata` (ou `generateMetadata` quando dinâmico). Zero Helmet, zero `document.title`.
6. **DESIGN.md é a fonte da verdade.** Cores, tipografia, spacing, radius e sombras saem exclusivamente dos tokens do `@theme`. Proibido inventar valor ou usar cor default do Tailwind.

---

## FASE 1: Fundação & Setup (O Alicerce)

1. **Pré-requisitos no diretório antes de rodar** (o kit inteiro, ver 1.5):
   `AGENTS.md`, `POP.md`, `DESIGN.md` do cliente e a pasta `memoria/` com os templates em branco.
   Nada de `frontend/` ainda — quem cria é o agente.
2. **Como usar:** preencha o bloco "Dados do Onboarding" abaixo com as respostas do briefing e cole
   o prompt inteiro como primeira mensagem na IDE. O agente executa o setup de ponta a ponta,
   **preenche sozinho os arquivos da `memoria/`** e não faz perguntas.

**PROMPT MESTRE #1 (Setup da Arquitetura Next.js):**

```
Atuando como **Arquiteto de Software e Desenvolvedor Front-end Sênior**, inicialize a **Fase 1**
do nosso projeto web em Next.js. **Cliente: [NOME DO CLIENTE]**.

Você tem capacidade de execução: **NÃO me envie comandos para copiar e colar** — **EXECUTE** no
terminal e **CRIE/EDITE** os arquivos diretamente. Já defini a stack e as decisões abaixo, então
**não me faça perguntas de esclarecimento**: siga este padrão à risca de ponta a ponta.

## 0.1 Dados do Onboarding (preencher antes de colar — o agente usa isto para o `memoria/00-PROJETO.md`)
- Cliente / nome fantasia: [ ]
- Domínio final: [ ]
- Escopo de páginas: Home, Sobre, Serviços, Contato, [ ]
- Tem blog? [ sim / não ]  → se não, marque as Fases 5 e 6 como fora de escopo no backlog
- Integração de formulário: [ n8n→Kommo / Formspree / WhatsApp ]
- Dados legais: razão social [ ], CNPJ [ ], endereço [ ], e-mail [ ], telefone [ ]

## 0.2 Leitura obrigatória antes de tocar em qualquer arquivo
Leia, nesta ordem: `AGENTS.md` (constituição do agente), `memoria/00-PROJETO.md` (ficha do cliente)
e `DESIGN.md`. Se `memoria/00-PROJETO.md` estiver com campos vazios, **pare** e faça o Onboarding
antes de continuar.

O arquivo `DESIGN.md` já está na raiz do projeto. **LEIA-O por completo antes de qualquer coisa** —
ele é a fonte da verdade de cores, tipografia, espaçamento, radius, sombras e componentes. Em todo
o setup, use **exclusivamente** os valores dele; **nunca invente** cores/medidas nem use defaults
do Tailwind. Se o `DESIGN.md` não existir na raiz, pare e me avise.

## 1. Stack e decisões (padrão fixo — não desviar)
- **Next.js 15 com App Router**, JavaScript/JSX (sem TypeScript), pasta `src/`, alias `@/*`.
  Comando: `npx create-next-app@latest frontend --js --app --src-dir --tailwind --eslint
  --import-alias "@/*" --use-npm` (se perguntar sobre Turbopack, aceite).
- **Tailwind CSS v4** com **`@tailwindcss/postcss`** (config **CSS-first**):
  - `postcss.config.mjs` com o plugin `@tailwindcss/postcss` — no Next é ele, **não** o plugin do Vite.
  - Use `@import "tailwindcss";` no CSS global (NÃO as diretivas `@tailwind base/components/utilities` da v3).
  - **NÃO** instale `autoprefixer` (o plugin v4 já resolve prefixing).
  - Os tokens vivem no bloco `@theme` do `globals.css`. **NÃO** crie `tailwind.config.js` —
    na v4 com CSS-first ele é desnecessário e só gera fonte de verdade duplicada.
- **NÃO** instale `vite`, `react-router-dom` nem `react-helmet-async`. O roteamento é por pastas
  e o SEO é pela Metadata API do Next.
- Dependências de runtime a instalar: `motion`, `lucide-react`, `clsx`, `tailwind-merge`.

## 2. Arquitetura de pastas/arquivos
Crie **rigorosamente** esta árvore:

```
/ (Raiz)
├── .gitignore                    # ÚNICO no projeto inteiro (ver passo 5)
├── AGENTS.md                     # já existe — NÃO sobrescrever (constituição do agente)
├── POP.md                        # já existe — NÃO sobrescrever
├── DESIGN.md                     # já existe — NÃO sobrescrever
├── README.md                     # ver passo 6
├── memoria/                      # já existe — apenas PREENCHER (ver passo 7)
│   ├── 00-PROJETO.md
│   ├── 01-ESTADO-ATUAL.md
│   ├── 02-BACKLOG.md
│   ├── 03-DECISOES.md
│   ├── 04-COMPONENTES.md
│   └── diario/
├── frontend/                     # Next.js (App Router)
│   ├── public/                   # imagens estáticas, favicon, og-image
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.jsx        # root layout: <html>, fontes, metadata base
│   │   │   ├── page.jsx          # Home (smoke test agora)
│   │   │   ├── not-found.jsx     # 404 estilizada
│   │   │   └── globals.css       # @import tailwindcss + @theme (tokens do DS)
│   │   ├── components/
│   │   │   ├── layout/           # Header, Footer, Wrappers (.gitkeep)
│   │   │   ├── sections/         # blocos completos de conteúdo (.gitkeep)
│   │   │   └── ui/               # botões, inputs, cards genéricos (.gitkeep)
│   │   ├── data/                 # textos legais, mocks, arrays (.gitkeep)
│   │   ├── lib/                  # configs de terceiros, ex.: Sanity (.gitkeep)
│   │   └── utils/                # cn.js
│   ├── next.config.mjs
│   ├── postcss.config.mjs
│   ├── jsconfig.json
│   └── package.json
└── studio/                       # CRIAR VAZIO agora (só .gitkeep) — será o Sanity CMS na Fase 5
```

- Limpe os arquivos de demo do template (`page.module.css` se houver, SVGs de exemplo em
  `public/` como `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`).
- Em pastas que ficariam vazias, adicione `.gitkeep`.
- Crie a pasta `studio/` **vazia** (apenas `.gitkeep`). **Não** inicialize o Sanity agora.

## 3. Tokenização do Design System (`src/app/globals.css`)
Crie o CSS global nesta ordem:
1. `@import "tailwindcss";`
2. Bloco `@theme` traduzindo **todo** o `DESIGN.md`:
   - Cores → `--color-<nome>` (ex.: `--color-primary`, `--color-surface-dark`, `--color-ink`...).
   - Fontes → `--font-sans` (e `--font-mono` se houver código), **apontando para as variáveis
     geradas pelo `next/font`** (ex.: `--font-sans: var(--font-display), ui-sans-serif, system-ui;`).
   - Tipografia → um `--text-<token>` por estilo, com `--text-<token>--line-height`,
     `--text-<token>--letter-spacing` e `--text-<token>--font-weight`.
   - Radius → `--radius-<nome>`; Spacing nomeado → `--spacing-<nome>`; Sombras → `--shadow-<nome>`
     (inclusive um `--shadow-focus-ring` para o anel de foco, se o DS definir).
3. `@layer base` aplicando a cor de fundo (canvas), a cor de texto base (foreground) e a fonte base
   (`@apply bg-<canvas> text-<ink> font-sans antialiased;`), mais `scroll-behavior: smooth`.

**Fontes — regra obrigatória:** carregue as fontes do `DESIGN.md` via `next/font/google` dentro de
`src/app/layout.jsx`, com `subsets`, `display: "swap"` e `variable: "--font-<nome>"`, e aplique as
classes de variável no `<html>`. **Proibido** `@import` de Google Fonts no CSS (gera request externo,
CLS e piora o LCP).

## 4. Arquivos base
- `src/utils/cn.js` → helper `cn()` combinando `clsx` + `tailwind-merge`.
- `src/app/layout.jsx` → Server Component com:
  - `<html lang="pt-BR" className={...variáveis de fonte}>` e `<body>`;
  - `export const metadata` contendo `metadataBase: new URL("https://[DOMINIO-DO-CLIENTE]")`,
    `title: { default: "[NOME DO CLIENTE] | [tagline]", template: "%s | [NOME DO CLIENTE]" }`,
    `description`, `alternates.canonical: "/"` e `openGraph` básico (title, description, locale
    `pt_BR`, type `website`).
- `src/app/page.jsx` → página smoke **Server Component** usando tokens reais do DS (fundo, acento
  primário, headline no token de display) para validar que fonte + tokens compilam. Sem `"use client"`.
- `src/app/not-found.jsx` → 404 simples usando os tokens do DS.
- `next.config.mjs` → arquivo criado e válido, pronto para receber `images.remotePatterns` na Fase 6.

## 5. Git e exclusão da pasta de agentes (ponto crítico — já me deu problema antes)
- Execute `git init` (branch `main`) — o projeto deve ser versionado.
- **Apenas UM `.gitignore`, na raiz.** O `create-next-app` gera um `frontend/.gitignore` —
  **apague-o** e garanta que o da raiz cobre tudo: `node_modules/`, `.next/`, `out/`, `build/`,
  `.vercel`, `*.tsbuildinfo`, `next-env.d.ts`, `.env*`, logs, caches, `.DS_Store`, arquivos de editor.
  Padrões sem barra inicial já pegam o que está dentro de `frontend/`.
- **Pasta de agentes (Antigravity Kit / `@vudovn/ag-kit`):** a instalação cria a pasta no **plural,
  `.agents/`** (atenção: o README do kit fala `.agent/`, mas no disco é `.agents/`). Ela **NÃO** pode
  ir para o GitHub, **mas NUNCA** deve entrar no `.gitignore` versionado (isso quebraria a indexação
  dos workflows e sumiria com os comandos de barra `/plan`, `/debug` nas IDEs com IA). A solução
  correta é exclusão **local**: adicione `.agents/` (e `.agent/` por segurança) ao arquivo
  **`.git/info/exclude`**. Se o `init` do kit criar um `.agents/.gitignore`, remova-o.

## 6. README (raiz, único)
- O `create-next-app` gera um `frontend/README.md` — **apague-o**. Deve existir **apenas** o
  `README.md` da raiz, específico para [NOME DO CLIENTE].
- O README **DEVE** começar com a seção **🤖 REGRAS OBRIGATÓRIAS PARA IA (AI RULES)**, derivada do
  `DESIGN.md` do cliente, exigindo dos agentes:
  - Ler o `DESIGN.md` antes de criar/editar qualquer componente.
  - **Regra Server-first:** componentes são Server Components por padrão; `"use client"` apenas em
    folhas interativas; nunca em `page.jsx`/`layout.jsx`; conteúdo textual nunca renderizado só no cliente.
  - **Regra de navegação e mídia:** `next/link` para rotas internas, `next/image` para toda imagem,
    `next/font` para toda fonte.
  - **Regra de SEO:** toda página exporta `metadata` ou `generateMetadata`.
  - **Diretriz de reutilização:** mapear `src/components/ui/` (e o helper `cn`) antes de criar
    algo novo; proibido recriar estilos utilitários "na unha"; primitivos faltantes vão para `ui/` e são
    registrados na biblioteca antes de usar.
  - Usar **exclusivamente** os tokens do DS (paleta, tipografia, hairlines, spacing, radius); nunca
    inventar valores nem usar cores default do Tailwind; respeitar a regra de elevação do DS
    (hairlines em vez de sombras pesadas) e não remover o `focus-ring`.
  - Nota sobre a pasta `.agents/` mantida local via `.git/info/exclude` (nunca no `.gitignore`).
- Inclua também: Sobre o Projeto, Tecnologias (a stack **real** instalada — sem inventar libs),
  Estrutura de pastas e Como Executar (`cd frontend && npm install && npm run dev/build/start`).

## 7. Memória do projeto (`memoria/`)
- **Não** recrie a pasta `memoria/` nem sobrescreva os arquivos existentes — eles vêm do kit.
- **Preencha** `memoria/00-PROJETO.md` com os dados do Onboarding.
- **Escreva** `memoria/01-ESTADO-ATUAL.md` marcando a Fase 1 como concluída, com o resumo do que
  foi instalado e o resultado da verificação.
- **Monte** `memoria/02-BACKLOG.md` com as fases aplicáveis ao escopo do cliente (se não houver
  blog, marque as Fases 5 e 6 como fora de escopo) e defina o próximo passo exato: "Fase 2 —
  criar a Biblioteca de Componentes em `/design-system`".
- **Crie** `memoria/diario/AAAA-MM-DD.md` com o log de hoje.
- **Registre** em `memoria/03-DECISOES.md` qualquer desvio que você tenha precisado fazer.
- Anote também: a pasta `studio/` é reservada ao **Sanity CMS na Fase 5** (criada vazia agora; não
  inicializar antes) e o projeto é **Server-first** — qualquer `"use client"` novo precisa de
  justificativa explícita e vai para o inventário `memoria/04-COMPONENTES.md`.
- ⚠️ Nunca escreva segredos (chaves, tokens, `projectId` privado) nos arquivos de memória: eles são
  versionados no Git.

## 8. Verificação (obrigatória antes de concluir)
1. `cd frontend && npm run build` deve compilar sem erro.
2. `npm run start` e então `curl -s http://localhost:3000 | grep "<h1"` deve **retornar o texto do
   H1 no HTML** — essa é a prova de que a renderização no servidor está funcionando (o problema de
   SEO que estamos eliminando).
3. Confirme no output do build que a Home aparece como rota **estática** (○) ou pré-renderizada.
4. Confirme no CSS compilado que utilitários dos tokens existem (ex.: classes de cor/tipografia do DS).
5. `git status` deve listar **apenas** os arquivos legítimos (`.gitignore`, `DESIGN.md`, `README.md`,
   `frontend/`, `studio/`, `PROMPT-MESTRE.md`) — **nada** de `.agents/`, `node_modules/` ou `.next/`.
   Confirme com `git check-ignore -v .agents/<algum-arquivo>`.
6. Confira a árvore final contra o passo 2.
7. Confirme que `memoria/00-PROJETO.md`, `01-ESTADO-ATUAL.md` e `02-BACKLOG.md` estão preenchidos e
   que nenhum deles contém credencial.

Ao terminar, me confirme objetivamente cada item (setup, tokens, fontes via next/font, metadata base,
git/exclude, README, memória preenchida, HTML do H1 no servidor) e diga que a arquitetura está
pronta para a Fase 2.
```

---

## FASE 2: Componentização Base (Os Tijolos)

Peça para a IA criar:

- `<Button />` (variantes default, outline, ghost).
- `<ArticleCard />` (para o blog).
- Componentes globais: `<Header />` (responsivo) e `<Footer />` (com links úteis e legais).

A rota da biblioteca interna agora é `/design-system` e vive em `src/app/design-system/page.jsx`.

**PROMPT MESTRE #2 (Biblioteca de Componentes / Sandbox interno):**

```
Atuando como **Desenvolvedor Front-end Sênior**, inicie a **Fase 2: Componentização Base** do
projeto **[NOME DO CLIENTE]** criando primeiro o nosso **Sandbox/Storybook interno** (página
"Biblioteca de Componentes"). Estou enviando o arquivo de referência `ComponentLibrary.jsx` junto.

Você tem capacidade de execução autônoma: **CRIE/EDITE** os arquivos diretamente, **não** me mande
comandos para copiar e colar e **não** me faça perguntas — siga este padrão à risca.

## 0. Fonte da verdade dos tokens
Antes de tudo, **leia `DESIGN.md` e `src/app/globals.css`** para conhecer os tokens reais do projeto
(cores, fontes, radius). Toda cor usada na biblioteca deve sair **exclusivamente** desses tokens —
**nunca** invente valores nem deixe cores hardcoded do arquivo de referência.

## 1. Crie `src/app/design-system/page.jsx`
Use **EXATAMENTE a estrutura visual** do arquivo de referência (Sidebar de 72, `CodeBlock`,
`LibraryComponentItem`, área de Preview, título dinâmico, busca/filtro e footer da sidebar).
Adaptações obrigatórias ao App Router:
- O arquivo da rota deve ter **`export default function DesignSystemPage()`** (o App Router exige
  export default na `page.jsx`).
- A página é interativa (busca e troca de categoria usam estado), então **este arquivo leva
  `"use client"` no topo** — é a exceção justificada do projeto, por ser ferramenta interna.
- Adicione `export const metadata` **não** aqui (arquivo client não exporta metadata): em vez disso
  crie `src/app/design-system/layout.jsx` (Server Component) exportando
  `metadata = { title: "Design System", robots: { index: false, follow: false } }`.
  **A biblioteca interna nunca pode ser indexada pelo Google.**
- Mantenha as classes de **layout** e os cantos (`rounded-none`, `font-sans`, `font-mono`)
  **inalterados** — só as **cores** mudam. (É uma ferramenta interna: preservar a estrutura visual
  é proposital.)
- Mantenha os helpers **`CodeBlock` e `LibraryComponentItem`** definidos no arquivo — são a
  infraestrutura para as próximas injeções de componentes (mesmo que fiquem sem uso agora).

### 1a. Rebranding
- Troque o nome do projeto de referência por **[NOME DO CLIENTE]** (header da sidebar).
- Mantenha o subtítulo "Design System Library" e a versão do footer.

### 1b. Troca de cores hardcoded → tokens do projeto
Substitua **todas** as cores do arquivo de referência pelos tokens equivalentes do projeto.
Mapeie pela **intenção semântica** (os nomes exatos saem do `@theme` do cliente):

| Referência (hardcoded/genérico) | Token do projeto (intenção) |
|---|---|
| Cor de destaque/marca (`text-secondary`, `border-secondary`, `bg-secondary-*`, `focus:border-secondary`) | acento da marca → `*-primary` (e `primary-hover` no hover) |
| Hairlines (`border-hairline`, com opacidades `/30`, `/20`) | token de borda → `border-border` (mesmas opacidades) |
| Superfície clara suave (`bg-surface-soft`, com `/60`, `/50`, `/40`) | `bg-surface-muted` (mesmas opacidades) |
| Fundos escuros do CodeBlock e previews escuros (qualquer hex neutro escuro hardcoded) | `bg-surface-dark` (diferencie o header com `border-white/10`) |
| Texto sobre escuro (`text-muted-soft`, `hover:text-white`) | `text-on-dark-muted` / `hover:text-on-dark` |
| `bg-canvas`, `text-ink`, `text-body`, `text-muted`, `text-success` | iguais (já costumam ser tokens do DS) |

> Se algum nome de token divergir no projeto, use o nome real do `@theme` daquele cliente —
> a tabela acima é o mapa de intenção, não nomes fixos.

### 1c. Limpeza de conteúdo
- **Remova todos** os imports de `@/components/ui/*` e `@/components/layout/*` e **todas** as
  renderizações de componentes antigos (Button, Cards, Navbar, Footer, Forms, etc.) — eles ainda
  não existem neste projeto.
- Reduza os imports de ícones `lucide-react` apenas aos usados no "chrome" da página
  (ex.: `Check, Copy, Layers, Component, Search, ExternalLink, FileCode, Eye, Info`).
- Mantenha a navegação lateral **idêntica** — `navItems`:
  `Buttons`, `Navigation`, `Eyebrow & Lists`, `Cards`, `Forms`.
- Na área de renderização (onde havia os blocos `activeComponent === "..."`), deixe **apenas um
  empty state elegante** abaixo do título, válido para todas as categorias, ex.:
  *"Nenhum componente cadastrado nesta categoria ainda."* + uma linha secundária indicando que os
  primitivos serão injetados ali conforme a Fase 2 avança.

## 2. Padrão de criação de componentes (vale para toda a Fase 2)
- Primitivos ficam em `src/components/ui/<nome>.jsx`, com **export nomeado**.
- **Server por padrão.** Só marque `"use client"` no arquivo do componente se ele usar estado,
  efeito, evento de usuário ou `motion`. Ex.: `<Button>` que só recebe `href` e estiliza continua
  Server; um `<Accordion>` com `useState` é Client.
- Se o componente aceita `href` e aponta para rota interna, ele deve renderizar `next/link`.
- Toda imagem dentro de componentes usa `next/image`.
- Use sempre o helper `cn()` para compor classes e aceitar `className` externo.

## 3. Adicione o link da biblioteca
Nada de rota manual: a pasta `src/app/design-system/` **já é** a rota `/design-system`.

## 4. Verificação (obrigatória antes de concluir)
1. `cd frontend && npm run build` deve compilar sem erro.
2. Suba o dev server e confirme **HTTP 200** em `/` e em `/design-system`.
3. Confirme visualmente: sidebar com **[NOME DO CLIENTE]**, busca filtrando os 5 itens, troca de
   categoria atualizando o título, empty state centralizado e o acento da marca (`primary`) na
   barra lateral ativa e no eyebrow — **sem nenhuma cor fora da paleta** do projeto.
4. Confirme que `/design-system` responde com `noindex` no HTML.

Ao finalizar, confirme objetivamente que a infraestrutura está rodando na rota `/design-system`.
```

**Prompt padrão para gerar os componentes (exemplo real com Figma):**

```
Agora vamos estruturar a base da nossa navegação criando dois componentes: o `<TextLink />` e o
`<DropdownLink />`.

Aqui estão os links do Figma para você ler via MCP:
- Text Link (Normal): [LINK FIGMA]
- Text Link (Hover/Active): [LINK FIGMA]
- Dropdown (Normal): [LINK FIGMA]
- Dropdown (Hover Item): [LINK FIGMA]

Com a sua capacidade de execução, extraia as propriedades visuais do Figma e execute
RIGOROSAMENTE os passos abaixo:

1. **Atualize o Documento de Design (`DESIGN.md`):**
- Na sessão `components`, procure por `navbar-link-active` e adicione/atualize as regras do
  **Text Link**: no estado normal, texto na cor `{colors.ink}` (ou `on-dark` dependendo do fundo).
  No hover e no estado `active`, ele ganha uma borda inferior (border-bottom) de 2px sólida na cor
  `{colors.primary}`.
- Crie uma nova entrada para **dropdown-menu**: descreva que o menu suspenso possui fundo
  `{colors.canvas}`, leve sombra (`shadow-md`) e borda suave. Os itens do menu possuem texto
  `{colors.ink}`; no hover, o item ganha fundo `{colors.primary}` e mantém o texto escuro `{colors.ink}`.

2. **Crie os Componentes (em `src/components/ui/`):**
- **Crie `text-link.jsx`:** componente que aceita `children`, `href` e `active` (boolean).
  Renderize com **`next/link`**. Use a tipografia `nav-link`. Se `active` for true, ou no `hover`,
  aplique a borda inferior (`border-b-2 border-primary`). Utilize transições suaves.
  Este componente **não precisa** de `"use client"`: quem decide o `active` é quem o usa.
- **Crie `dropdown-link.jsx`:** componente que aceita `title` e `items` (array de objetos com
  `label` e `href`).
  - Renderize o título ao lado de um ícone `ChevronDown` (do `lucide-react`). Aplique o mesmo
    efeito de hover/active do `TextLink` no título.
  - Crie a lógica de menu suspenso via `group`/`group-hover` no pai (CSS puro) para exibir o menu
    absoluto abaixo — assim ele permanece **Server Component**. Só marque `"use client"` se a
    interação exigir teclado/estado; nesse caso, adicione também `aria-expanded` e fechamento por `Esc`.
  - O menu deve ter fundo `canvas`, cantos arredondados, shadow e os itens (`next/link`) devem ter
    padding confortável. No hover do item, o fundo fica `bg-primary`.

3. **Injete na Biblioteca (`src/app/design-system/page.jsx`):**
- Importe o `<TextLink />` e o `<DropdownLink />` no topo do arquivo.
- Vá até a condicional `activeComponent === "navigation"` (remova o placeholder se houver) e insira
  os componentes usando `<LibraryComponentItem>`.
- Renderize um exemplo do `TextLink` normal e um ativo.
- Renderize um exemplo do `DropdownLink` passando o título "Serviços" e um array mockado com
  "Serviço 1", "Serviço 2" e "Serviço 3". Adicione um container com altura mínima (ex:
  `min-h-[200px]`) no preview para que o dropdown possa abrir sem ser cortado.

Execute a atualização no `DESIGN.md`, crie os dois componentes e atualize a biblioteca.
Me confirme assim que finalizar.
```

---

## FASE 3: Rotas, Layouts & SEO (As Paredes)

Agora que a biblioteca está pronta, a nossa dinâmica fica muito mais rápida. Os próximos passos são:

1. **Estruturar as rotas por pastas:** cada página é uma pasta com `page.jsx` dentro de `src/app/`.
2. **Criar o Layout Base:** `<Header />` e `<Footer />` no `layout.jsx` raiz, abraçando todas as páginas automaticamente.
3. **Montar a Home:** pegar o Figma da página inicial e ir empilhando os componentes (Cards, Formulários, Textos) seção por seção.
4. **Animação:** conforme for montando as seções, elas já vão ficando com animação — mas sempre em wrapper client isolado, para o texto continuar no HTML do servidor.
5. **SEO técnico:** `metadata` por página, `sitemap.js`, `robots.js` e dados estruturados.

**PROMPT MESTRE #3 (Layout, Rotas e SEO técnico):**

```
Finalizamos com sucesso a Fase 2 (Biblioteca de Componentes)! Agora vamos iniciar a Fase 3:
Layout Raiz, Rotas e SEO técnico.

Como você tem capacidade de execução, execute RIGOROSAMENTE os passos abaixo:

1. **Layout Raiz (`src/app/layout.jsx`):**
- Mantenha-o como **Server Component**.
- Importe e renderize `<Header />` (de `@/components/layout/header.jsx`), depois `{children}`
  dentro de um `<main>`, e por fim `<Footer />` (de `@/components/layout/footer.jsx`).
- Confirme as fontes via `next/font/google` com `variable`, aplicadas no `<html>`.
- Garanta o `export const metadata` com `metadataBase`, `title.template`, `description`,
  `openGraph` e `alternates.canonical`.

2. **Estrutura de rotas (pasta = rota):** crie as páginas do escopo do cliente:
   - `src/app/page.jsx` → Home
   - `src/app/sobre/page.jsx` → /sobre
   - `src/app/servicos/page.jsx` → /servicos
   - `src/app/contato/page.jsx` → /contato
   - (blog entra na Fase 6)
   Cada `page.jsx`: **Server Component**, `export default`, mais `export const metadata` com
   `title`, `description` e `alternates.canonical` da própria rota. Conteúdo temporário mínimo
   (H1 + parágrafo) usando os tokens do DS.

3. **Wrapper de animação (uma única vez, reaproveitado por todas as seções):**
- Crie `src/components/ui/reveal.jsx` com `"use client"` no topo, usando `motion` (`motion/react`):
  um componente `<Reveal>` que anima `opacity` e `y` com `whileInView`, `viewport={{ once: true }}`
  e aceita `delay` para cascata.
- **Regra:** as páginas e seções continuam Server Components e apenas *envolvem* blocos com
  `<Reveal>`. Assim o texto sai pronto no HTML e a animação é só uma camada visual.
- Respeite `prefers-reduced-motion`.

4. **Header e Footer (`src/components/layout/`):**
- `header.jsx`: responsivo; o menu mobile precisa de estado, então extraia **apenas o botão/drawer**
  para um componente client (`mobile-menu.jsx` com `"use client"`) e mantenha o header em Server.
  Links internos com `<TextLink />`/`next/link`.
- `footer.jsx`: Server Component, com links úteis, dados de contato e espaço reservado para os
  links legais (Fase 4).

5. **SEO técnico:**
- Crie `src/app/sitemap.js` exportando as rotas estáticas do site (e, na Fase 6, os posts).
- Crie `src/app/robots.js` liberando `/`, bloqueando `/design-system`, e apontando o `sitemap`.
- Crie `src/app/icon.png`/`favicon.ico` e `opengraph-image` se os assets existirem em `public/`.
- Adicione no layout raiz um bloco de dados estruturados JSON-LD (`Organization` ou
  `LocalBusiness`, conforme o cliente) via `<script type="application/ld+json">` renderizado no servidor.

6. **Verificação (obrigatória):**
1. `npm run build` sem erros e sem warnings de `"use client"` desnecessário.
2. `npm run start` + `curl -s http://localhost:3000/sobre | grep "<h1"` deve mostrar o texto.
3. Todas as rotas devem aparecer como estáticas (○) no output do build.
4. `/robots.txt` e `/sitemap.xml` devem responder corretamente.

Execute os passos, crie os arquivos e me confirme quando o servidor estiver rodando para validarmos
a navegação!
```

**Prompt padrão para gerar as seções (exemplo — Hero):**

```
Vamos dar início à montagem real da página Home (`src/app/page.jsx`). O objetivo é criar a
**Hero Section**, substituindo o conteúdo temporário.

Aqui está o link do Figma para leitura exata via MCP:
- [LINK FIGMA]

---

### ⚠️ DIRETRIZES OBRIGATÓRIAS (NUNCA IGNORE)
Antes de escrever qualquer código, aplique estas 6 regras em TODA e QUALQUER seção:
1. **Reuso Extremo:** analise o `DESIGN.md` e a Biblioteca de Componentes
   (`src/app/design-system/page.jsx`). Utilize PRIMEIRO o que já existe (ex.: `<Button>`,
   `<Eyebrow>`, `<FeatureCard>`). Não crie HTML solto para elementos que já são componentes.
2. **Regra de Exceção (Nova Peça):** se a seção exigir um componente UI que ainda não existe, você
   DEVE primeiro criá-lo isolado em `src/components/ui/`, injetá-lo na Biblioteca, documentá-lo no
   `DESIGN.md` e, SÓ ENTÃO, utilizá-lo na seção.
3. **Server-first:** a seção vive em `src/components/sections/hero.jsx` como **Server Component**.
   A animação entra pelo wrapper `<Reveal>` (client) já existente. **Proibido** marcar a seção
   inteira como `"use client"` só para animar.
4. **Animações em Cascata (Obrigatório):** nenhuma seção deve entrar como bloco único. Use `<Reveal>`
   com `delay` crescente, elemento por elemento.
5. **Imagens:** toda imagem via `next/image`, com `alt` descritivo. A imagem do Hero recebe
   `priority` e `sizes` adequados (é o LCP da página).
6. **Responsividade Absoluta:** o layout final DEVE ser 100% responsivo, do mobile ao desktop.

---

### EXECUÇÃO: HERO SECTION
1. **Crie `src/components/sections/hero.jsx`** e importe-o em `src/app/page.jsx`.
- Importe os componentes que já possuímos: `<Eyebrow />`, `<Button />`, `<Reveal />`,
  `<ArrowUpRight />` (lucide-react) e `Image` (next/image).
- **Composição:** monte a seção usando `<Eyebrow>`, um `<h1>` (único H1 da página), texto de apoio
  com os tokens de tipografia do `DESIGN.md` e o `<Button>`.

2. **Estilização e Responsividade:**
- **Fundo:** aplique a imagem extraída do Figma com `next/image` + `fill` + `object-cover`
  (placeholder `https://placehold.co/1920x1080/2b2b2b/FFF?text=Hero+Image` se não houver o asset
  físico) e crie um overlay escuro (gradiente ou cor sólida translúcida) para garantir o contraste.
- **Layout:** seção de altura total (`min-h-screen` ou `min-h-[90svh]`) com padding generoso para
  mobile e desktop, centralizando o conteúdo verticalmente conforme o design.

3. **Animação em Cascata (Staggered):**
- Sequência de entrada (fade-in + slide-up suave): 1. `<Eyebrow />` → 2. `<h1>` → 3. texto
  descritivo → 4. `<Button />`, com `delay` de ~0.1s entre eles via `<Reveal>`.

4. **Verificação:** rode `npm run build && npm run start` e confirme com
   `curl -s http://localhost:3000 | grep -i "<h1"` que o título do Hero está no HTML do servidor.

Execute a implementação. Me confirme assim que o servidor atualizar!
```

---

## FASE 4: Módulos Universais (Textos Legais + LGPD)

Para acelerar a burocracia de LGPD/RGPD:

1. Crie `src/data/legal-texts.js` com as variáveis da empresa.
2. Crie o grupo de rotas legais e o `cookie-banner.jsx` (salvando consentimento no `localStorage`).

**PROMPT MESTRE #4 (Módulos Legais e LGPD):**

```
**CONTEXTO DE EXECUÇÃO SEQUENCIAL OBRIGATÓRIA (FASE 4: MÓDULOS LEGAIS E LGPD)**
Vamos implementar a Fase 4 do projeto: criação dos módulos universais de textos legais (Política de
Privacidade e Termos de Uso) e o Banner de Consentimento de Cookies (LGPD).

---

### ⚠️ DIRETRIZES GLOBAIS
1. **Zero HTML nativo desestilizado:** utilize a tipografia e as cores do `DESIGN.md`.
2. **Mentalidade de Componentização:** o layout das páginas legais deve ser focado na leitura
   (`max-w-3xl` ou `4xl` centralizado), semelhante ao layout do Blog Post.
3. **Zero Comentários no JSX.**
4. **Server-first:** as páginas legais são **Server Components** (texto puro, ótimo para indexação).
   Só o banner de cookies é Client.

---

### EXECUÇÃO DA FASE 4 (PASSO A PASSO):

**1. Central de Dados Legais (`src/data/legal-texts.js`):**
Crie este ficheiro para exportar um objeto de configuração com os dados da empresa. Isso facilita a
atualização quando o cliente enviar os dados finais. Estrutura exata:

export const companyData = {
  razaoSocial: "[RAZÃO SOCIAL]",
  nomeFantasia: "[NOME FANTASIA]",
  cnpj: "[CNPJ]",
  endereco: "[ENDEREÇO COMPLETO COM CEP]",
  emailContato: "[E-MAIL]",
  telefone: "[TELEFONE]",
  site: "[DOMÍNIO]",
  ultimaAtualizacao: "[DD/MM/AAAA]"
};

**2. Layout legal (`src/app/(legal)/layout.jsx`):**
- Use um **Route Group** `(legal)` — ele organiza as páginas sem aparecer na URL.
- Server Component com container de leitura (`max-w-3xl mx-auto`), respiro vertical e tipografia do DS.

**3. Páginas Legais:**
- `src/app/(legal)/politica-de-privacidade/page.jsx`
- `src/app/(legal)/termos-de-uso/page.jsx`
- Cada uma exporta `metadata` com `title`, `description` e `alternates.canonical` da rota.
- Importe o `companyData` e interpole nos textos (ex.: "A {companyData.razaoSocial}, inscrita no
  CNPJ {companyData.cnpj}...").
- Gere um texto padrão (placeholder real, sem "Lorem Ipsum") de Política de Privacidade focada em
  formulários de contato e cookies, e um de Termos de Uso do site, ambos citando a LGPD
  (Lei 13.709/2018) e os direitos do titular.

**4. O Banner de Cookies (`src/components/ui/cookie-banner.jsx`):**
- **`"use client"` no topo** (usa estado, efeito e localStorage).
- Componente fixo na parte inferior da tela (`fixed bottom-0 w-full z-50`).
- Utilize `motion` (`motion/react`) para o banner deslizar de baixo para cima
  (`initial={{ y: 100 }} animate={{ y: 0 }}`).
- **Lógica:** `const [isVisible, setIsVisible] = useState(false)`. Dentro do `useEffect`
  (que só roda no cliente, evitando erro de hidratação), verifique
  `localStorage.getItem("[prefixo]_cookie_consent")`. Se não existir, `setIsVisible(true)`.
- **UI:** fundo escuro (`bg-surface-dark`), texto explicativo sobre o uso de cookies, link para a
  Política de Privacidade e dois botões: "Configurar" (variante outline) e "Aceitar Todos"
  (variante primary).
- Ao clicar em "Aceitar Todos", grave `localStorage.setItem("[prefixo]_cookie_consent", "true")`
  e esconda o banner.

**5. Integração Final:**
- Renderize o `<CookieBanner />` no `src/app/layout.jsx`, logo antes do fechamento do `<body>`.
  (O layout continua Server Component — importar um componente client dentro dele é permitido e
  não contamina a árvore.)
- Vá ao `src/components/layout/footer.jsx` e adicione os links `/politica-de-privacidade` e
  `/termos-de-uso` com `next/link`.
- Acrescente as duas rotas ao `src/app/sitemap.js`.

**6. Verificação:** `npm run build` sem erro de hidratação; `curl` nas duas rotas legais deve
retornar o texto no HTML; o banner deve sumir após aceitar e não voltar no reload.
```

---

## FASE 5: Infraestrutura Back-end (Sanity)

1. Rode `npm create sanity@latest` na **raiz** do projeto, criando a pasta `studio`
   (dataset `production`, template "Clean project").
2. Peça para a IA criar o Schema `post` (Título, Slug, Data de publicação, Categoria, Imagem de capa
   com `alt`, Resumo/excerpt, Body em Portable Text, SEO title e SEO description).
3. Inicie o Studio (`cd studio && npm run dev`) e adicione o CORS do ambiente de dev do Next:
   `npx sanity cors add http://localhost:3000 --credentials`.

**PROMPT MESTRE #5 (Schema do Sanity):**

```
Atuando como Arquiteto de Conteúdo, configure o Sanity Studio na pasta `studio/` do projeto
**[NOME DO CLIENTE]**.

Execute:
1. Crie o schema `post` em `studio/schemaTypes/post.js` com os campos:
   - `title` (string, obrigatório)
   - `slug` (slug, source: title, obrigatório)
   - `publishedAt` (datetime, obrigatório, default: now)
   - `category` (referência a `category` ou string com lista de opções — decida pelo escopo do cliente)
   - `mainImage` (image com `hotspot: true` e campo `alt` obrigatório — acessibilidade e SEO)
   - `excerpt` (text, máx. 200 caracteres, usado nos cards e na meta description)
   - `body` (array de blocos — Portable Text, com suporte a imagem e link)
   - `seoTitle` e `seoDescription` (opcionais, sobrescrevem o padrão)
2. Registre o schema em `studio/schemaTypes/index.js`.
3. Configure a pré-visualização (`preview`) do documento mostrando título, data e imagem.
4. Rode o Studio e crie **2 posts de exemplo** com conteúdo real (não Lorem Ipsum) para validarmos
   a integração na Fase 6.
5. Adicione o CORS: `npx sanity cors add http://localhost:3000 --credentials`.
6. Me informe o `projectId` e o `dataset` para eu guardar nas variáveis de ambiente.
```

---

## FASE 6: Integração (Front x Back)

Instale o cliente no `frontend`:
`npm install next-sanity @sanity/image-url @portabletext/react`

**PROMPT MESTRE #6 (Integração Sanity/GROQ com ISR):**

```
Atuando como Arquiteto de Software, vamos integrar o Front-end (Next.js) ao Sanity CMS.
Toda a busca de dados acontece **no servidor** — nada de `useEffect` para buscar posts.

Execute RIGOROSAMENTE:

1. **Variáveis de ambiente:** crie `frontend/.env.local` com
   `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production` e
   `NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01`. Crie também um `.env.example` versionado (sem valores).

2. **Cliente (`src/lib/sanity.js`):**
- `createClient` do `next-sanity` com `projectId`, `dataset`, `apiVersion` e `useCdn: true`.
- Helper `urlFor()` com `@sanity/image-url`.
- Exporte as queries GROQ em `src/lib/queries.js`:
  - `POSTS_QUERY`: `*[_type == "post"] | order(publishedAt desc){ title, "slug": slug.current, publishedAt, excerpt, mainImage, category }`
  - `POST_QUERY`: `*[_type == "post" && slug.current == $slug][0]{ ..., "slug": slug.current }`
  - `SLUGS_QUERY`: `*[_type == "post" && defined(slug.current)][]{"slug": slug.current}`

3. **Configuração de imagem (`next.config.mjs`):** adicione
   `images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] }`.

4. **Listagem (`src/app/blog/page.jsx`):**
- **Server Component `async`**. Busque com o client Sanity direto no corpo da função.
- `export const revalidate = 60` (ISR: o conteúdo atualiza sozinho sem novo deploy).
- Renderize os `<ArticleCard />` já existentes, usando `urlFor(post.mainImage)` dentro de `next/image`
  e `next/link` apontando para `/blog/[slug]`.
- `export const metadata` da listagem.

5. **Post individual (`src/app/blog/[slug]/page.jsx`):**
- **Server Component `async`** recebendo `{ params }` (lembre-se: no Next 15 `params` é assíncrono —
  use `const { slug } = await params`).
- `export async function generateStaticParams()` usando a `SLUGS_QUERY` — gera as páginas
  estaticamente no build (SEO máximo).
- `export async function generateMetadata({ params })` retornando `title` (usando `seoTitle` ou
  `title`), `description` (`seoDescription` ou `excerpt`), `alternates.canonical` e `openGraph`
  com a imagem do post.
- Renderize o corpo com `<PortableText value={post.body} />`, passando `components` customizados
  para que `h2`, `h3`, `p`, `ul`, `blockquote`, `a` (com `next/link` quando interno) e `image`
  (com `next/image`) usem os tokens do `DESIGN.md`.
- Se o post não existir, chame `notFound()`.

6. **Sitemap dinâmico:** atualize `src/app/sitemap.js` para buscar os slugs no Sanity e incluir
   todas as URLs de post com `lastModified`.

7. **JSON-LD:** no post individual, injete dados estruturados do tipo `Article`
   (headline, datePublished, image, author, publisher) renderizados no servidor.

8. **Verificação (obrigatória):**
1. `npm run build` deve listar as rotas `/blog/[slug]` como **estáticas geradas** (●).
2. `npm run start` + `curl -s http://localhost:3000/blog/<slug> | grep "<h1"` deve mostrar o título.
3. `curl -s http://localhost:3000/sitemap.xml` deve conter as URLs dos posts.
4. Publique uma edição no Studio e confirme que a página atualiza após ~60s (ISR).
```

---

## FASE 7: Formulários de Contato

Defina com o cliente a solução.

- **Padrão recomendado:** `react-hook-form` no componente client + **Route Handler** do Next
  (`src/app/api/contato/route.js`) encaminhando para o n8n → Kommo CRM.
  Vantagem sobre o envio direto do navegador: a URL do webhook fica no servidor (variável de
  ambiente), sem CORS e sem expor a integração no bundle.
- **Alternativa simples:** Formspree (envio de e-mail sem back-end).
- **Fallback:** botão do WhatsApp.

**PROMPT MESTRE #7 (Formulário + Route Handler + n8n):**

```
Vamos implementar a Fase 7: formulário de contato do projeto **[NOME DO CLIENTE]**.

1. **Instale:** `npm install react-hook-form`.

2. **Componente (`src/components/sections/contact-form.jsx`):**
- `"use client"` (usa estado e eventos).
- `react-hook-form` com validação: nome (obrigatório), e-mail (regex), telefone (máscara simples),
  mensagem (obrigatória, mín. 10 caracteres) e checkbox de consentimento LGPD (obrigatório,
  com link para a Política de Privacidade).
- Campo **honeypot** oculto (`aria-hidden`, `tabIndex={-1}`) para barrar bots.
- Estados de UI: idle, enviando (botão desabilitado + spinner), sucesso e erro — todos com os
  tokens e componentes do DS. Nada de `alert()`.
- Envie via `fetch("/api/contato", { method: "POST", body: JSON.stringify(data) })`.

3. **Route Handler (`src/app/api/contato/route.js`):**
- `export async function POST(request)`, lendo o JSON, revalidando os campos no servidor
  (nunca confie só no cliente) e rejeitando se o honeypot vier preenchido.
- Encaminhe o payload para `process.env.N8N_WEBHOOK_URL` (variável **sem** `NEXT_PUBLIC_`).
- Retorne `NextResponse.json({ ok: true })` ou status 400/500 com mensagem genérica.
- Adicione um rate limit simples por IP em memória (proteção básica contra flood).

4. **n8n → Kommo:** documente no README o formato do payload enviado
   (`{ nome, email, telefone, mensagem, origem, urlPagina }`) para o cenário do n8n mapear no Kommo.

5. **Fallback WhatsApp:** adicione um botão flutuante/CTA com link `https://wa.me/[NUMERO]?text=...`
   como componente em `ui/`.

6. **Verificação:** `npm run build` sem erro; envio real de teste chegando no n8n; mensagem de erro
   amigável quando o webhook estiver fora do ar; a variável do webhook **não** pode aparecer no
   bundle do cliente (`grep -r "N8N_WEBHOOK" .next/static` deve vir vazio).
```

---

## FASE 8: Deploy & Handover

1. Unifique o `.gitignore` na raiz, revise o `README.md` e faça o commit inicial.
2. Faça o deploy do `frontend` na Vercel:
   - **Root Directory:** `frontend`
   - Variáveis de ambiente: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
     `NEXT_PUBLIC_SANITY_API_VERSION`, `N8N_WEBHOOK_URL` e `NEXT_PUBLIC_SITE_URL`.
   - Confirme o `metadataBase` apontando para o domínio final antes de publicar.
3. Faça o deploy do `studio` via `npx sanity deploy`.
4. Adicione o CORS do domínio da Vercel e do domínio final no Sanity:
   `npx sanity cors add https://[dominio] --credentials`.
5. Aponte o domínio do cliente na Vercel e confirme o HTTPS.
6. Entregue ao cliente apenas o link limpo do Estúdio (`https://[nomedocliente].sanity.studio`).

**Checklist final de SEO (o que evita a "morte súbita"):**

- [ ] `view-source:` da Home mostra H1, textos e links **no HTML** (não só no JS).
- [ ] Cada página tem `title` e `description` únicos e canonical correta.
- [ ] `robots.txt` liberando o site e bloqueando `/design-system`.
- [ ] `sitemap.xml` completo (páginas + posts) e enviado no Google Search Console.
- [ ] Imagens com `alt` e servidas via `next/image`.
- [ ] JSON-LD de `Organization` (site) e `Article` (posts) válidos no Rich Results Test.
- [ ] Lighthouse ≥ 90 em Performance, SEO e Acessibilidade (mobile).
- [ ] Teste "Inspeção de URL" no Search Console mostrando o HTML renderizado com o conteúdo.
- [ ] Redirecionamento de `www` e HTTPS funcionando.

---

## 📎 ANEXO A: Tabela de tradução rápida (Vite → Next)

| Você fazia assim | Agora faz assim |
|---|---|
| `<Route path="/sobre" element={<Sobre/>} />` | criar `src/app/sobre/page.jsx` |
| `<Link to="/sobre">` | `<Link href="/sobre">` do `next/link` |
| `useNavigate()` | `useRouter()` do `next/navigation` (só em client) |
| `useParams()` | `params` recebido na `page.jsx` (`await params` no Next 15) |
| `<Helmet><title>` | `export const metadata = { title }` |
| `useEffect` + `fetch` para buscar dados | `async function Page()` buscando direto no servidor |
| `import.meta.env.VITE_X` | `process.env.NEXT_PUBLIC_X` |
| `<img src>` | `<Image src alt width height />` do `next/image` |
| `@import` de Google Fonts | `next/font/google` com `variable` |
| `npm run dev` (5173) | `npm run dev` (3000) |
| `npm run preview` | `npm run build && npm run start` |

## 📎 ANEXO B: Armadilhas mais comuns (revisar em todo code review)

1. **`"use client"` no topo da página.** Contamina toda a árvore abaixo e devolve o problema de SEO.
   Sempre empurre a interatividade para o componente-folha.
2. **Buscar dados no `useEffect`.** O Google pode não ver. Busque no Server Component.
3. **`window`/`localStorage` fora do `useEffect`.** Quebra o build (erro de referência no servidor).
4. **`next/image` sem `remotePatterns`.** Imagem do Sanity não carrega em produção.
5. **Esquecer `revalidate`.** O blog fica congelado no conteúdo do build.
6. **Criar `tailwind.config.js` com tokens.** Duplica a fonte da verdade — os tokens vivem no `@theme`.
7. **`metadataBase` ausente.** As URLs de Open Graph saem relativas e o preview quebra.
8. **`<a href="/rota">` interno.** Perde prefetch e força recarregamento completo.
9. **Dois H1 na mesma página.** Um por página, sempre.
10. **Deploy com Root Directory errado na Vercel.** Lembre: é `frontend`.

## 📎 ANEXO C: Critério de aceite por fase

| Fase | Só pode avançar quando... |
|---|---|
| 1 | `npm run build` passa, `curl` mostra o H1, `git status` limpo |
| 2 | `/design-system` roda com `noindex` e o primeiro primitivo está injetado |
| 3 | Todas as rotas estáticas, sitemap e robots respondendo |
| 4 | Páginas legais no HTML e banner persistindo o consentimento |
| 5 | Studio rodando com 2 posts reais e CORS configurado |
| 6 | `/blog/[slug]` gerado estaticamente e ISR validado |
| 7 | Lead de teste chegando no n8n e webhook fora do bundle |
| 8 | Checklist de SEO 100% marcado |

> Além do critério acima, **toda** fase só é dada como concluída após o `/checkpoint`: `01-ESTADO-ATUAL.md`
> reescrito, `02-BACKLOG.md` com o novo próximo passo e `04-COMPONENTES.md` atualizado.