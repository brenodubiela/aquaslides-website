# 🧠 03 — REGISTRO DE DECISÕES (append-only)

> Só decisões que mudam o rumo técnico. Nunca apague uma entrada — se mudou de ideia, adicione uma
> nova entrada superando a anterior.

## Formato
```
### [AAAA-MM-DD] — Título da decisão
**Contexto:** por que o assunto apareceu
**Decisão:** o que ficou definido
**Alternativas descartadas:** o que não escolhemos e por quê
**Impacto:** o que muda no código / no POP
```

---

### [AAAA-MM-DD] — Migração de Vite para Next.js (App Router)
**Contexto:** o site anterior renderizava no cliente e o Googlebot recebia HTML vazio, travando a
indexação e o ranqueamento.
**Decisão:** todos os novos projetos usam Next.js 15 com App Router, renderização no servidor
(SSG/ISR) como padrão.
**Alternativas descartadas:** manter Vite com pré-render via plugin (gambiarra frágil); WordPress
(superfície de vulnerabilidade alta).
**Impacto:** saem `vite`, `react-router-dom` e `react-helmet-async`; roteamento por pastas e SEO
pela Metadata API.

---

### [2026-08-06] — Next.js fixado em 15.5.23 (e não `create-next-app@latest`)
**Contexto:** o Prompt Mestre #1 manda rodar `create-next-app@latest`, mas hoje o `latest` é o
16.3.0. A stack fixa do `AGENTS.md` (§3) diz "Next.js 15 — App Router".
**Decisão:** scaffold com `create-next-app@15.5.23` (última 15.x), mantendo a stack fixa.
**Alternativas descartadas:** subir para o Next 16 — mudaria a stack declarada e o POP inteiro sem
autorização, no meio da fase de fundação.
**Impacto:** `next@15.5.23`, `eslint-config-next@15.5.23`, React 19.1.0. O upgrade para 16 vira uma
decisão consciente de outra fase, não um efeito colateral do `@latest`.

---

### [2026-08-06] — Riope substituída temporariamente por Quicksand (fallback oficial do DS)
> ⚠️ **Superada no mesmo dia** pela entrada "Riope self-hospedada via `next/font/local`" (final
> deste arquivo), quando o cliente entregou a `Riope.woff2`.

**Contexto:** o `DESIGN.md` define Riope como fonte primária de headline (peso único 400) e manda
self-hospedar `Riope.woff2`/`Riope.woff`. Os arquivos não estão no repositório e a licença de
webfont (Envato Elements) ainda não foi confirmada com o cliente.
**Decisão:** carregar Montserrat + **Quicksand** por `next/font/google` e expor o token
`--font-display: var(--font-riope, var(--font-quicksand)), "Trebuchet MS", sans-serif`.
**Alternativas descartadas:** `next/font/local` apontando para arquivo inexistente (quebra o build);
usar Montserrat também nos headlines (descaracteriza a marca e contraria o DS).
**Impacto:** a troca para Riope é de uma linha — colocar os arquivos em `frontend/src/app/fonts/`,
carregar com `next/font/local` expondo `variable: "--font-riope"` e aplicar a classe no `<html>`.
Nenhum componente precisa mudar. Headlines podem quebrar linha ~4% mais largos até lá.

---

### [2026-08-06] — Nomes dos tokens de tipografia: `--text-base` e ausência de `--text-muted`
**Contexto:** no Tailwind v4 o utilitário `text-<nome>` é resolvido primeiro na escala de fonte
(`--text-*`) e só depois na paleta (`--color-*`). Criar `--text-body` e `--text-muted` — como o
`DESIGN.md` nomeia esses estilos — sequestraria `text-body` e `text-muted`, que são **cores de
texto** do DS e vão aparecer em praticamente todo componente.
**Decisão:** `typography.body` (16px/1.6) vira **`--text-base`**; `typography.muted` **não** vira
token — é `text-small` + `text-muted`, já que sua métrica é idêntica à de `small` e a única
diferença é a cor, que já existe como `--color-muted`. Todos os demais estilos mantêm o nome do DS.
**Alternativas descartadas:** renomear as cores (`text-ink`/`text-body`/`text-muted` são o
vocabulário do DS); prefixar toda a escala tipográfica (ruído em todo o código).
**Impacto:** documentado em comentário no `globals.css`. `text-base` = corpo de 16px do DS.

---

### [2026-08-06] — `@theme static` e helper `cn()` ciente dos tokens
**Contexto:** por padrão o Tailwind v4 só emite as variáveis do `@theme` que detecta em uso. As
cores das 7 verticais são consumidas em **runtime** (`style={{ "--vertical": ... }}`), o que o
compilador não enxerga. Além disso, o `tailwind-merge` não conhece nomes de escala customizados e
classificaria `text-h1` como cor, engolindo classes na hora de mesclar.
**Decisão:** usar `@theme static` (todas as variáveis emitidas em `:root`) e construir o `cn()` com
`extendTailwindMerge`, registrando as escalas do DS (`text`, `spacing`, `shadow`, `container`).
**Alternativas descartadas:** safelist manual das verticais (frágil); `twMerge` puro (mescla errada,
bug silencioso de estilo na Fase 2).
**Impacto:** `frontend/src/app/globals.css` e `frontend/src/utils/cn.js`. Toda classe nova de escala
customizada precisa ser registrada no `cn()`.

---

### [2026-08-06] — Focus ring derivado do halo secundário
**Contexto:** o `DESIGN.md` diz que o sistema não usa sombra e que o foco de formulário é borda +
fundo (`form-input-focus`), sem ring. Mas nenhum estado de foco global foi desenhado, e navegação
por teclado sem indicador visível é falha de acessibilidade.
**Decisão:** `--shadow-focus-ring: var(--shadow-halo-secondary)` aplicado em `:focus-visible` no
`@layer base` — reaproveita o halo, que já é o mecanismo de destaque do sistema (contorno, não
sombra), sem inventar valor novo.
**Alternativas descartadas:** `outline` default do browser (fora do DS); nenhum indicador (barreira
de acessibilidade).
**Impacto:** todo elemento focável ganha o anel amarelo-claro. Componentes podem sobrescrever com o
estado específico do DS, mas **não** podem remover o indicador.

---

### [2026-08-06] — Tokens adicionais derivados do DS: `--container-content` e escala mobile
**Contexto:** o `DESIGN.md` fixa 1400px de largura máxima de conteúdo e traz uma escala tipográfica
mobile (`typography-mobile`) que é dado real exportado do Figma.
**Decisão:** criar `--container-content: 1400px` (utilitário `max-w-content`) e os tokens
`--text-h1-mobile`, `--text-h2-mobile`, `--text-h3-mobile`, `--text-p-mobile`,
`--text-card-p-mobile`, usados como `text-h1-mobile md:text-h1`.
**Alternativas descartadas:** hardcode de `max-w-[1400px]` em cada seção; media query manual no CSS.
**Impacto:** os breakpoints do Tailwind ficam nos defaults (`md` 768px, `lg` 1024px), que coincidem
com a tabela do DS — que, segundo o próprio documento, é inferência e precisa de validação do
cliente antes de virar especificação.

---

### [2026-08-06] — Riope self-hospedada via `next/font/local` (supera a decisão do Quicksand)
**Contexto:** o cliente entregou a fonte em `frontend/public/fonts/`. A `Riope.woff2` é válida
(24.976 bytes, WOFF2/CFF); a `Riope.woff` veio com **0 bytes** — arquivo vazio, provavelmente cópia
malsucedida do pacote licenciado.
**Decisão:** mapear **apenas a `.woff2`** no `next/font/local`, com `weight: "400"` (peso único do
Riope, conforme o DESIGN.md), `display: "swap"` e `variable: "--font-riope"`. A `.woff` fica fora do
`@font-face` até chegar um arquivo válido. Quicksand continua carregada, agora **exclusivamente**
como elo da cadeia `--font-display`.
**Alternativas descartadas:** registrar a `.woff` vazia no `src` (o browser tentaria baixar um
arquivo corrompido como candidato do `@font-face`); esperar a `.woff` para só então ativar o Riope
(WOFF2 é suportado por todo navegador relevante desde 2016).
**Impacto:** `layout.jsx` e o token `--font-display` em `globals.css`. Headlines agora renderizam na
tipografia oficial da marca. **A licença de webfont (Envato) continua pendente e é bloqueio de
deploy**, não de desenvolvimento.

---

### [2026-08-06] — `adjustFontFallback: false` no Riope
**Contexto:** por padrão o `next/font/local` cria uma família "Riope Fallback" a partir do Arial com
métricas ajustadas e a insere logo após o Riope — o que empurraria o Quicksand para fora da prática,
já que a cadeia nunca chegaria nele.
**Decisão:** desligar o `adjustFontFallback`, deixando a cadeia
`Riope → Quicksand → Quicksand Fallback → Trebuchet MS → sans-serif`.
**Alternativas descartadas:** manter o fallback Arial (o DESIGN.md é explícito: Quicksand cobre a
janela de carregamento **e** o caso de falha do arquivo; Arial é grotesca e destrói a leitura
geométrica monoline da marca).
**Impacto:** o Quicksand, que já é metricamente próximo do Riope (~4% de diferença de largura,
documentada no DS), assume qualquer janela de troca. Antes de desligar, o build com
`adjustFontFallback: "Arial"` foi usado para **validar o parse da fonte** — o Next extraiu métricas
reais (`size-adjust: 98,62%`), provando que o arquivo é íntegro e legível.

---

### [2026-08-10] — Colisão `inline-block`: token `--spacing-block` × utility de display
**Contexto:** no Sandbox, "Projetos" era pintado por cima de "Linhas de Atrações" no `<NavMenu />`.
A medição no navegador mostrou o wrapper do `<DropdownLink />` com **64px** de largura enquanto o
conteúdo ocupava 169px. A causa não estava no componente: o Tailwind v4 gera a utility funcional
`inline-<spacing>` para a propriedade lógica `inline-size`, e o token `spacing.block: 64px` do
`DESIGN.md` faz a classe **`inline-block` casar com as duas utilities ao mesmo tempo**:
`.inline-block { display: inline-block }` **e** `.inline-block { inline-size: 64px }`. Como são
propriedades diferentes, as duas se aplicam — todo elemento com `inline-block` no projeto ficava
travado em 64px. Afetava `<DropdownLink />`, `<ButtonDropdown />` e `<Eyebrow />`.
**Decisão:** neutralizar a colisão no `globals.css` com uma regra `.inline-block { inline-size: auto }`
**fora de qualquer `@layer`** — CSS sem camada sempre vence CSS em camada, independentemente da
ordem em que o Tailwind emite as utilities. Os componentes não foram alterados.
**Alternativas descartadas:** renomear `--spacing-block` (o nome vem do `DESIGN.md`, que é a fonte
da verdade, e quebraria `py-block`/`gap-block` já em uso); trocar `inline-block` por `inline-flex`
em cada componente (a armadilha continuaria armada para o próximo `inline-block` que alguém
escrever); `!important` (desnecessário, a camada já resolve).
**Impacto:** `frontend/src/app/globals.css`. Para a medida de 64px use `w-block`/`p-block`, que não
são ambíguos. Vale a mesma vigilância para qualquer token de spacing novo cujo nome coincida com
uma utility estática (`inline-flex`, `inline-grid`, `inline-table`).

---

### [2026-08-10] — Ícones de marca em SVG inline (o `lucide-react` v1 os removeu)
**Contexto:** a aba "Icons & Social" do Sandbox quebrava com *"Element type is invalid... got:
undefined"* em `social-links.jsx`. Causa: `lucide-react@1.29.0` **não exporta mais** `Facebook`,
`Instagram`, `Youtube`, `Twitter` nem `Linkedin` — a biblioteca removeu todos os ícones de marca
(questão de trademark). Os cinco imports chegavam como `undefined` e o React estourava ao renderizar
`<Icon />`. Varredura confirmou que era o único arquivo afetado no projeto.
**Decisão:** criar `src/components/ui/social-icons.jsx` com os cinco glifos como **SVG inline**,
no mesmo vocabulário visual do Lucide (24×24, `currentColor`, stroke 2, terminais arredondados).
Exceção: o X só existe em versão sólida, então usa `fill="currentColor"`.
**Alternativas descartadas:** instalar `react-icons`/`simple-icons` (dependência fora da stack fixa
do `AGENTS.md` §3, exigiria autorização, e trazendo milhares de ícones para usar cinco); substituir
por ícones genéricos do Lucide (`Globe`, `AtSign`) — o rodapé perderia o reconhecimento de marca.
**Impacto:** `social-links.jsx` importa de `./social-icons`. Cor por `currentColor` e tamanho por
`className`, então o contrato de uso não mudou. **Regra geral: nenhum ícone de marca vem do Lucide
— todos entram como SVG inline em `social-icons.jsx`** (vale para o WhatsApp FAB da Fase 7).

---

### [2026-08-10] — Classes que não existem: `--spacing-*` sombreia a escala de container, e `font-riope`
**Contexto:** a `<Timeline />` renderizava uma palavra por linha. Medição no navegador + leitura do
CSS compilado mostraram `.max-w-lg { max-width: var(--spacing-lg) }` — **24px**, não os 32rem que o
nome sugere. Nossos tokens de spacing (`xs, sm, md, lg, xl`) têm os mesmos nomes da escala
`--container-*` do Tailwind, e o namespace de spacing **vence** em `max-w-*`, `min-w-*`, `w-*` e
`basis-*`. Estavam quebrados: `max-w-lg` (timeline, 24px), `max-w-xs` (button-dropdown, 4px) e
`max-w-sm` (empty state do sandbox, 8px). Na mesma auditoria apareceu `font-riope` — utility que
**não existe** (o token é `--font-display`) — em `timeline.jsx`, `value-card.jsx` e `info-card.jsx`:
três títulos que deveriam ser Riope estavam caindo em Montserrat.
**Decisão:** (a) não usar nomes ambíguos — as três ocorrências viraram valor explícito
(`max-w-[320px]`, `max-w-[384px]`) ou foram removidas; (b) `font-riope` → `font-display`;
(c) auditoria permanente: **toda classe usada no JSX que não gera regra no CSS compilado é
inválida**, já que o Tailwind emite uma regra para cada classe válida que encontra no código.
**Alternativas descartadas:** regra corretiva global remapeando `max-w-sm|md|lg|xl` para
`var(--container-*)` — o Tailwind só emite as variáveis de container efetivamente usadas
(`--container-lg` não existe no CSS), então a regra apontaria para variável indefinida; e escrever
os valores literais do Tailwind no `globals.css` criaria uma segunda escala dentro do DS, que é
exatamente o que o `AGENTS.md` §4.6 proíbe.
**Impacto:** em `p-*`, `m-*`, `gap-*` os nomes do DS funcionam normalmente. Em **largura**
(`w-`, `max-w-`, `min-w-`, `basis-`) **nunca** use `xs|sm|md|lg|xl`: ou o valor é do DS, ou é
explícito. O comando de auditoria está no diário de 2026-08-10.

---

### [2026-08-10] — Classes de plugin substituídas por recursos nativos (sem instalar nada)
**Contexto:** a auditoria de classes apontou três grupos que não geravam CSS: `bg-surface-muted`
(token que nunca existiu no DS — as superfícies são `surface`, `surface-strong`, `surface-white`,
`surface-warm`), `animate-in`/`fade-in-80` (plugin `tailwindcss-animate`) e `prose-ul:*`
(plugin `@tailwindcss/typography`). Nenhum dos dois plugins está instalado, então eram no-ops:
`article-card`, `blog-card` e `accordion` ficavam **sem fundo nenhum**.
**Decisão:** (a) `bg-surface-muted` → `bg-surface` (#f2f2f2, o cinza de card padrão do DS);
(b) `animate-in fade-in-80 duration-150` → token de animação do próprio DS,
`--animate-fade-in: fade-in 150ms ease-out` com `@keyframes` dentro do `@theme` do `globals.css`,
usado como `animate-fade-in`; (c) `prose-ul:*` → variante de descendente `[&_ul]:*`, padrão que o
projeto já usa em `nav-menu.jsx`.
**Alternativas descartadas:** instalar `tailwindcss-animate` e `@tailwindcss/typography` — ambos
fora da stack fixa do `AGENTS.md` §3, e o Tailwind v4 já resolve os dois casos nativamente
(namespace `--animate-*` e variantes arbitrárias). O `@tailwindcss/typography` volta à mesa na
Fase 6, se o corpo do Portable Text exigir.
**Impacto:** a animação é só de opacidade — o DS não descreve movimento, e um fade curto não gera
o desconforto vestibular que `translate`/`scale` gerariam. Animação nova entra como token
`--animate-*` no `@theme`, nunca como classe de plugin.

---

### [2026-08-10] — `<ProjectMap />`: `ZoomableGroup` removido e placeholders em PNG
**Contexto:** o card do mapa não abria. Três causas encadeadas, todas confirmadas por medição no
navegador: (1) o `<Image>` do card apontava para `images.unsplash.com`, host ausente dos
`remotePatterns` — daí o *Runtime Error* do print; (2) o `<ZoomableGroup>` do `react-simple-maps`
engolia o clique: com o pin parado o card abria, mas com um micro-arrasto de **3px** (o que a mão
humana faz) o d3-zoom tratava o gesto como pan, deslocava o mapa 2px e o `click` nunca chegava ao
`<Marker>` — era o "pisca-pisca" relatado; (3) três das quatro URLs da Unsplash retornavam **404**.
**Decisão:** remover o `<ZoomableGroup>` (o `zoom={1} minZoom={1}` + `translateExtent` já
desabilitavam pan/zoom na prática — testado: arrasto de 60px não movia nada, mas roubava o clique),
mantendo `Geographies` e `Marker` como filhos diretos do `<ComposableMap>`. Mocks migrados para
`placehold.co` **com o segmento `/png`**, nas cores do DS (`e6e6e6`/`6c6c6c`). Marcadores ganharam
`role="button"`, `tabIndex` e Enter/Espaço.
**Alternativas descartadas:** `filterZoomEvent` para filtrar o `mousedown` (mantém a dependência do
d3-zoom sem nenhum ganho, já que pan/zoom não são requisito do DS); liberar `images.unsplash.com`
nos `remotePatterns` (não resolveria — as fotos não existem); `dangerouslyAllowSVG` (vetor de XSS
com SVG remoto).
**Impacto:** ⚠️ **`placehold.co` devolve SVG por padrão e o otimizador do Next bloqueia SVG remoto.**
Todo placeholder precisa do segmento de formato: `placehold.co/600x400/e6e6e6/6c6c6c/png?text=...`.
O exemplo do `POP.md` (Fase 3, hero) está sem o `/png` e vai quebrar do mesmo jeito quando alguém
usar. `react-simple-maps@3` declara peer deps de React 16/17/18 — roda no 19, mas sem suporte
oficial; se der problema de novo, a saída é trocar por SVG próprio, não empilhar workaround.

---

### [2026-08-10] — `<MapCard />` alinhado ao `map-project-panel` (reuso em vez de HTML solto)
**Contexto:** o painel do mapa estava com estilos próprios que contrariavam o DS: `shadow-xl`/
`shadow-2xl` (o sistema não usa elevação), `rounded-[30px]`/`rounded-[25px]`, `bg-white/80` no
botão fechar, escalas default do Tailwind (`text-4xl`, `text-5xl`, `text-sm`, `text-base`), eyebrow
reescrito à mão e um CTA montado com `<a>` + dois `<span>` em vez do primitivo já existente.
**Decisão:** reescrever o card conforme `components.map-project-panel` do `DESIGN.md` — `bg-surface`,
`rounded-md`, `p-lg`, imagem em `rounded-sm`, título `font-display`+`text-h3` em `primary`,
localização em `text-small text-muted`, fechar em `primary` — e **reutilizar os primitivos**:
`<Eyebrow variant="dark">` para o tipo de empreendimento e `<Button variant="halo-primary">` para a
ação, que é literalmente o que a spec pede (`action: {components.button-primary-halo}`).
**Alternativas descartadas:** manter o CTA artesanal (duplicava estados de hover/foco que o
`<Button />` já resolve e divergia do resto do site).
**Impacto:** o painel deixou de ter sombra e passou a herdar hover, foco e ícone do `<Button />`.
Reforça a lei 7 do `AGENTS.md`: antes de escrever HTML, checar `04-COMPONENTES.md`.

---

### [2026-08-11] — Header vira `fixed`; fim do `-mt-[79px]` no `<main>`
**Contexto:** relato de header "cortado" ao rolar para baixo no mobile. Medi a geometria em Chrome
emulado (390×844) em três estados de scroll e com a barra de URL simulada (viewport 844→900→844):
header sempre 79px, logo sempre em +12, hambúrguer em +17.5 — **layout estável, nada cortado**.
O CSSOM também estava correto no scroll (`bg-primary`, `opacity 1`, `z-50`). **Não reproduzi o
sintoma**; capturas em branco que apareceram no meio do caminho eram artefato do headless
(`fromSurface: true`), desmentido pela captura com `fromSurface: false`.
O que a medição **provou** foi outro defeito, esse real: com `<main className="flex-1 -mt-[79px]">`
o conteúdo era puxado por cima da caixa de fluxo do header sticky, e a headline do hero renderizava
**por baixo** da barra (hero `pt-[120px]` − 79 = 41px de folga contra 79px de header).
**Decisão:** (a) header passa de `sticky` para **`fixed inset-x-0 top-0`** — é o que o `DESIGN.md`
descreve em `nav-transparent` ("fica absoluta sobre o hero"); (b) `-mt-[79px]` removido, já que
`fixed` não ocupa fluxo e todas as páginas já reservam o topo (`pt-[120px]` no hero, `pt-[150px]`
nas demais); (c) `transition-all` → `transition-colors` no `<nav>`, porque só a cor muda; (d)
promoção de camada com **`[will-change:opacity]`**.
**Alternativas descartadas:** `transform: translateZ(0)`/`will-change: transform` para promover a
camada — **quebraria o menu mobile**: o overlay é `fixed inset-0` e vive dentro do `<header>`, e
`transform` faria o header virar containing block dele. `will-change: opacity` promove sem criar
containing block. Verificado: o overlay continua 390×844 a partir de (0,0).
**Impacto:** some o número mágico `79` acoplado à altura do header (`py-md` + logo 55px), que
quebraria silenciosamente a qualquer mudança no logo ou no padding.

---

### [2026-08-11] — Remoção do event handler no next/image e dos ícones nativos do lucide-react no Footer
**Contexto:** ao refatorar o `<Footer />` (Server Component estático), inseri um evento `onError` na tag de imagem da logo para lidar com fallbacks e utilizei ícones de marca (`Youtube`, `Instagram`, `Facebook`) nativos do `lucide-react`. Ao rodar o build, o Next.js falhou em pré-renderizar a home (`Element type is invalid...`) e a página Sobre (`Event handlers cannot be passed to Client Component props`).
**Decisão:** (a) Remover o `onError` da logo (o next/image não suporta handlers em Server Components); (b) Reverter o uso de `lucide-react` para os ícones de mídias sociais no Footer, invocando novamente o componente `<SocialLinks />`, que mapeia de forma robusta e usa os SVGs inline da própria biblioteca do projeto (decisão já registrada ontem).
**Alternativas descartadas:** Mudar o Footer para "use client" (perda grave de performance SEO global só por causa de um icone e um evento de erro).
**Impacto:** Manteve-se a solidez SSR do Footer. Reitera a importância de não usar events como `onClick`/`onError` em componentes SSR e reforça a proibição do uso direto de redes sociais pelo Lucide.

## [2026-08-12] Remoção do Sanity CMS
- **Contexto:** O cliente decidiu que não utilizará mais o Sanity CMS. O site terá um painel próprio para gerenciar Projetos, Blog e Linhas de Atração.
- **Decisão:** Sanity CMS removido do escopo. O projeto utilizará um painel customizado. As rotas dinâmicas serão desenvolvidas com mocks estruturados para integração posterior pelo time de back-end.

---

### [2026-08-12] — `legacy-peer-deps=true` no `frontend/.npmrc` (desbloqueio do deploy na Vercel)
**Contexto:** o deploy na Vercel falhava na instalação. Reproduzido localmente com `npm install`
sem flags: `ERESOLVE` — `react-simple-maps@3.0.0` declara `peer react@"^16.8.0 || 17.x || 18.x"`
e o projeto roda `react@19.1.0` (exigência do Next 15). A biblioteca **não** é descartável: além do
Sandbox, o `<ProjectMap />` é usado em `src/components/sections/projetos-mapa.jsx`, que entra na
rota de produção `/projetos`. Por isso foi mantida, não removida.
**Decisão:** criar `frontend/.npmrc` com `legacy-peer-deps=true`. O arquivo fica **versionado**
(conferido com `git check-ignore`) — se não subir para o repositório, a Vercel não o lê e o deploy
volta a quebrar.
**Alternativas descartadas:** remover `react-simple-maps` (quebraria o mapa de projetos em
produção); passar `--legacy-peer-deps` no *Install Command* da Vercel (a configuração viveria no
painel, invisível para quem clona o repo, e o `npm install` local continuaria falhando).
**Impacto e risco assumido:** a flag desliga a checagem de peer dependencies **do projeto inteiro**,
não só dessa lib — uma incompatibilidade real futura passa a instalar em silêncio. A alternativa
cirúrgica, se um dia incomodar, é trocar a flag por `overrides` no `package.json` mirando só o
`react-simple-maps`. Continua valendo o registro anterior: `react-simple-maps@3` não tem suporte
oficial a React 19; a saída definitiva é substituí-lo por SVG próprio.
**Verificação:** instalação limpa (só `package.json` + `package-lock.json` + `.npmrc`, sem
`node_modules`) → `npm ci` com `added 347 packages`, exit 0. O mesmo diretório **sem** o `.npmrc` →
`ERESOLVE`. `npm run build` compila 24/24 páginas, com `/projetos` estática.
