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
