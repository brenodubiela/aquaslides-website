---
version: 1.0
name: Aqua Slides
description: >
  Sistema visual de uma fabricante de equipamentos aquáticos que vende para investidores
  de lazer. Azul (#09aae0) carrega a leitura técnica — botões, títulos de card, indicadores
  de prova social; amarelo (#facc01) carrega a energia de parque — logo sobre foto, ícones
  de validação, eyebrows, banda de newsletter. Headlines em Riope (geométrica monoline de
  peso único, 400 apenas) e informação técnica em Montserrat. Duas assinaturas recorrentes:
  palavra-chave destacada em cor dentro do headline, e botão-pílula com halo — anel externo
  em tom claro que substitui sombra. O sistema não usa elevação, usa contorno. Sete linhas
  de produto têm cor própria e a página de vertical roda como template único parametrizado
  por cor. Light mode apenas.

colors:
  # --- Marca ---
  primary: "#09aae0"
  primary-dark: "#0a88b2"
  primary-tint: "#e3f5fc"
  secondary: "#facc01"
  secondary-dark: "#fea02e"
  secondary-tint: "#fff8e0"

  # --- Verticais (linhas de produto) ---
  ball: "#ff443b"
  ball-dark: "#c9352e"
  fresh: "#1384ec"
  fresh-dark: "#116bbe"
  ramp: "#7c62ff"
  ramp-dark: "#5642bc"
  free-fall: "#01b2bc"
  free-fall-dark: "#00858d"
  playground: "#2cc05e"
  playground-dark: "#1e8c43"
  toboagua: "#0f2cd8"
  toboagua-dark: "#0a1f9c"
  complexos: "#f99e0d"
  complexos-dark: "#a96c0b"

  # --- Superfície ---
  canvas: "#f8f8f8"
  surface: "#f2f2f2"
  surface-strong: "#e6e6e6"
  surface-white: "#ffffff"
  surface-warm: "#fff5ea"

  # --- Texto ---
  ink: "#3d3d3d"
  body: "#4d4d4d"
  muted: "#6c6c6c"

  # --- Hairlines ---
  hairline: "#e5e5e5"
  hairline-soft: "#ebebeb"

  # --- Semântica (derivada da paleta de verticais) ---
  destructive: "#ff443b"
  success: "#2cc05e"
  warning: "#f99e0d"

  # --- On-surface ---
  on-primary: "#ffffff"
  on-secondary: "#3d3d3d"
  on-dark: "#ffffff"

typography:
  h1:
    fontFamily: "Riope, Quicksand, 'Trebuchet MS', sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.5px
  h2:
    fontFamily: "Riope, Quicksand, 'Trebuchet MS', sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.25px
  h3:
    fontFamily: "Riope, Quicksand, 'Trebuchet MS', sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  card-h:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  lead:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  p:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  card-p:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  small:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  muted:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    color: "{colors.muted}"
  blockquote:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
    fontStyle: italic
  inline-code:
    fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  button-sm:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  nav-link:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  eyebrow:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1.4px
    textTransform: uppercase
  spec-label:
    fontFamily: "Montserrat, -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1px
    textTransform: uppercase

typography-mobile:
  h1:
    fontSize: 40px
    lineHeight: 1.15
  h2:
    fontSize: 32px
    lineHeight: 1.2
  h3:
    fontSize: 24px
    lineHeight: 1.25
  p:
    fontSize: 16px
    lineHeight: 1.6
  card-p:
    fontSize: 14px
    lineHeight: 1.5

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 32px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  block: 64px
  section: 96px

effects:
  halo-primary: "0 0 0 6px {colors.primary-tint}"
  halo-secondary: "0 0 0 6px {colors.secondary-tint}"
  halo-vertical: "0 0 0 6px color-mix(in srgb, {vertical} 18%, white)"

components:
  nav-transparent:
    position: absolute
    backgroundColor: transparent
    height: 88px
    paddingX: "{spacing.section}"
    logoFill: "{colors.secondary}"
    linkColor: "{colors.on-dark}"
    linkActiveColor: "{colors.secondary}"
  nav-solid:
    backgroundColor: "{colors.primary}"
    height: 88px
    logoFill: "{colors.secondary}"
    linkColor: "{colors.on-primary}"
    linkActiveColor: "{colors.secondary}"
  nav-link:
    typography: "{typography.nav-link}"
    color: "{colors.ink}"
    activeColor: "{colors.secondary-dark}"
  button-primary:
    backgroundColor: "{colors.primary}"
    color: "{colors.on-primary}"
    typography: "{typography.button-md}"
    borderRadius: "{rounded.full}"
    paddingY: "{spacing.md}"
    paddingX: "{spacing.lg}"
    height: 44px
    iconAffix: "arrow-up-right"
  button-primary-halo:
    extends: button-primary
    boxShadow: "{effects.halo-primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    color: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    borderRadius: "{rounded.full}"
    paddingY: "{spacing.md}"
    paddingX: "{spacing.lg}"
    height: 44px
    hoverShadow: "{effects.halo-secondary}"
  button-soft:
    backgroundColor: "{colors.primary-tint}"
    color: "{colors.primary}"
    border: "1px solid {colors.primary}"
    typography: "{typography.button-md}"
    borderRadius: "{rounded.full}"
    height: 44px
  button-warm:
    backgroundColor: "{colors.surface-warm}"
    color: "{colors.secondary-dark}"
    typography: "{typography.button-sm}"
    borderRadius: "{rounded.full}"
    height: 44px
    width: "100%"
  button-vertical:
    backgroundColor: "{vertical}"
    color: "{colors.on-primary}"
    typography: "{typography.button-md}"
    borderRadius: "{rounded.full}"
    boxShadow: "{effects.halo-vertical}"
  icon-button-circle-filled:
    backgroundColor: "{colors.secondary}"
    color: "{colors.ink}"
    size: 40px
    borderRadius: "{rounded.full}"
  icon-button-circle-outline:
    backgroundColor: transparent
    border: "1px solid {colors.secondary}"
    color: "{colors.secondary-dark}"
    size: 40px
    borderRadius: "{rounded.full}"
  eyebrow:
    typography: "{typography.eyebrow}"
    color: "{colors.secondary-dark}"
    colorOnDark: "{colors.secondary}"
  headline-highlight:
    color: "{colors.primary}"
    colorOnDark: "{colors.secondary}"
  check-item:
    iconColor: "{colors.secondary}"
    iconBackground: "{colors.secondary-tint}"
    iconSize: 20px
    typography: "{typography.small}"
    color: "{colors.body}"
  spec-row:
    iconColor: "{colors.muted}"
    typography: "{typography.small}"
    color: "{colors.body}"
  spec-label:
    typography: "{typography.spec-label}"
    color: "{colors.secondary-dark}"
  card-vertical-tile:
    borderRadius: "{rounded.md}"
    aspectRatio: "16/10"
    overlayTypography: "{typography.h3}"
    overlayColor: "{colors.on-dark}"
  card-modelo:
    backgroundColor: "{colors.surface}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.base}"
    imageRadius: "{rounded.md}"
    titleTypography: "{typography.h3}"
    titleColor: "{colors.primary}"
    bodyTypography: "{typography.card-p}"
    bodyColor: "{colors.body}"
  card-processo:
    backgroundColor: "{colors.surface}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    titleTypography: "{typography.h3}"
    titleColor: "{colors.primary}"
    bodyTypography: "{typography.card-p}"
  card-mvv:
    backgroundColor: "{colors.surface}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    iconBackground: "{colors.secondary}"
    iconSize: 48px
    iconRadius: "{rounded.md}"
    titleTypography: "{typography.h3}"
    titleColor: "{colors.primary}"
  card-projeto:
    backgroundColor: "{colors.surface-strong}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    titleTypography: "{typography.card-h}"
    titleColor: "{colors.ink}"
    metaTypography: "{typography.small}"
    metaColor: "{colors.muted}"
    action: "{components.icon-button-circle-outline}"
  card-projeto-active:
    extends: card-projeto
    action: "{components.icon-button-circle-filled}"
  card-depoimento:
    backgroundColor: "{colors.surface-strong}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.base}"
    avatarSize: 32px
    nameTypography: "{typography.button-sm}"
    bodyTypography: "{typography.small}"
    starColor: "{colors.secondary-dark}"
  card-blog:
    backgroundColor: transparent
    imageRadius: "{rounded.md}"
    titleTypography: "{typography.card-h}"
    titleColor: "{colors.ink}"
    bodyTypography: "{typography.small}"
    bodyColor: "{colors.muted}"
    action: "{components.button-warm}"
  card-blog-featured:
    extends: card-blog
    imageAspectRatio: "16/9"
    titleFontSize: 28px
  power-numbers:
    iconBackground: "{colors.secondary}"
    iconSize: 40px
    iconRadius: "{rounded.sm}"
    numberTypography: "{typography.h3}"
    numberColor: "{colors.primary}"
    labelTypography: "{typography.body}"
    labelColor: "{colors.ink}"
  timeline-rail:
    lineColor: "{colors.hairline}"
    lineWidth: 1px
    dotColor: "{colors.complexos}"
    dotSize: 10px
  timeline-item:
    chipBackground: "{colors.surface-warm}"
    chipBorder: "1px solid {colors.secondary-dark}"
    chipRadius: "{rounded.full}"
    chipTypography: "{typography.small}"
    chipColor: "{colors.secondary-dark}"
    titleTypography: "{typography.h3}"
    titleColor: "{colors.primary}"
    bodyTypography: "{typography.small}"
  faq-item:
    backgroundColor: "{colors.surface}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    titleTypography: "{typography.card-h}"
    titleFontSize: 18px
    titleColor: "{colors.ink}"
    chevronColor: "{colors.muted}"
  faq-item-open:
    backgroundColor: "{colors.surface-white}"
    border: "1px solid {colors.primary}"
    borderRadius: "{rounded.md}"
    titleColor: "{colors.primary}"
    chevronColor: "{colors.primary}"
  faq-answer:
    typography: "{typography.small}"
    color: "{colors.body}"
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.md}"
  logo-strip:
    itemBackground: "{colors.surface}"
    itemRadius: "{rounded.sm}"
    itemHeight: 72px
    arrow: "{components.icon-button-circle-outline}"
  cta-band-brand:
    backgroundColor: "{colors.primary}"
    patternOverlay: "{components.pattern-overlay}"
    titleTypography: "{typography.h2}"
    titleColor: "{colors.on-primary}"
    action: "{components.button-secondary}"
  newsletter-band:
    backgroundColor: "{colors.secondary}"
    borderRadius: "{rounded.xl}"
    paddingY: "{spacing.block}"
    patternOverlay: "{components.pattern-overlay}"
    titleTypography: "{typography.h2}"
    titleColor: "{colors.ink}"
    highlightColor: "{colors.primary}"
  gallery-grid:
    columns: 3
    gap: "{spacing.base}"
    itemRadius: "{rounded.md}"
    itemAspectRatio: "4/3"
  form-input:
    backgroundColor: "{colors.surface-white}"
    border: "1px solid {colors.hairline}"
    borderRadius: "{rounded.full}"
    height: 52px
    paddingX: "{spacing.lg}"
    typography: "{typography.body}"
    labelTypography: "{typography.body}"
    labelColor: "{colors.body}"
  form-input-focus:
    backgroundColor: "{colors.secondary-tint}"
    border: "1px solid {colors.secondary}"
    borderRadius: "{rounded.full}"
  form-select:
    extends: form-input
    chevronColor: "{colors.muted}"
  map-projects:
    landFill: "{colors.surface-strong}"
    backgroundColor: "{colors.canvas}"
  map-marker:
    fill: "{colors.secondary}"
    ringColor: "{colors.secondary-dark}"
    size: 16px
  map-project-panel:
    backgroundColor: "{colors.surface}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    imageRadius: "{rounded.sm}"
    eyebrow: "{components.eyebrow}"
    titleTypography: "{typography.h3}"
    titleColor: "{colors.primary}"
    closeColor: "{colors.primary}"
    action: "{components.button-primary-halo}"
  footer:
    backgroundColor: "{colors.canvas}"
    paddingY: "{spacing.block}"
    dividerColor: "{colors.hairline}"
    logoFill: "{colors.primary}"
    taglineTypography: "{typography.small}"
    taglineColor: "{colors.muted}"
  footer-link-column:
    headingTypography: "{typography.button-sm}"
    headingColor: "{colors.primary}"
    linkTypography: "{typography.small}"
    linkColor: "{colors.body}"
    gap: "{spacing.md}"
  social-icon-row:
    iconColor: "{colors.primary}"
    iconSize: 20px
    gap: "{spacing.base}"
  hero-page:
    minHeight: 560px
    scrimGradient: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 70%)"
    contentMaxWidth: 640px
    eyebrow: "{components.eyebrow}"
    titleTypography: "{typography.h1}"
    titleColor: "{colors.on-dark}"
  pattern-overlay:
    asset: "pattern-ondas.svg"
    opacity: 0.08
    blendMode: "overlay"
  page-vertical:
    accentToken: "{vertical}"
    sections:
      - hero-page
      - product-block
      - gallery-grid
      - models-grid
      - cta-band-brand
      - faq
      - newsletter-band
---

# Aqua Slides — Design System

## Overview

A Aqua Slides projeta, fabrica e instala equipamentos aquáticos, e o sistema visual precisa sustentar duas leituras ao mesmo tempo: a experiência de lazer que o equipamento entrega no parque e a decisão de investimento que o comprador toma antes da obra. A paleta divide esse trabalho de forma explícita. O azul `{colors.primary}` responde pela leitura técnica — ocupa todo botão de ação, todo título de card, todo indicador de prova social e todo dado de engenharia. O amarelo `{colors.secondary}` responde pela energia do parque — assina o logo sobre foto, os ícones de validação, os eyebrows de seção e a única banda de cor sólida da página. Tipograficamente o sistema contraria a convenção do setor de engenharia: headlines em Riope, uma geométrica monoline de peso único e terminais arredondados que traz o vocabulário do lazer para o topo da página, com Montserrat sustentando toda a informação técnica abaixo — especificação de fibra, norma ABNT, metragem, capacidade de usuários. Duas assinaturas se repetem em todas as treze telas: a palavra-chave destacada em cor dentro do headline, e o botão-pílula com halo, um anel externo em tom claro da própria cor que substitui integralmente o uso de sombra. O sistema não trabalha com elevação, trabalha com contorno. A decisão mais incomum é a paleta de sete verticais: cada linha de produto tem cor própria e a página roda como template único trocando apenas o accent, tratando cada linha como submarca em vez de comprimir tudo no azul institucional.

O público comprador são proprietários e gestores de parques aquáticos, resorts e hotéis — perfil técnico e investidor, decisão pautada por segurança operacional e retorno. Isso explica por que o sistema nunca deixa o amarelo assumir um CTA de página de conteúdo: a cor da diversão sinaliza, a cor da engenharia converte.

## Colors

### Marca

`{colors.primary}` `#09aae0` é a cor operante do sistema. Não é decorativa — ela marca onde o usuário pode agir e onde há um dado que sustenta a decisão de compra. Todo botão primário, todo link de rodapé ativo, todo número da banda de prova social ("+70 Projetos Entregues", "100% Território Nacional") e todo título de card em Riope usam esse azul. `{colors.primary-dark}` `#0a88b2` é a variação de profundidade, usada em superfícies azuis grandes e estados pressionados.

`{colors.secondary}` `#facc01` é a cor de sinalização. Ela aparece com muita frequência mas quase nunca em posição de conversão: assina o logo quando ele está sobre foto ou sobre azul, preenche os quadrados de ícone da banda de números, os checks de validação, a banda inteira de newsletter e o botão de CTA quando o fundo já é azul (`{components.cta-band-brand}` — nesse contexto o azul não teria contraste, então o amarelo assume). `{colors.secondary-dark}` `#fea02e` puxa para o laranja e cobre um papel distinto: micro-labels. Eyebrows sobre fundo claro, rótulos de especificação, chips de ano na timeline, setas circulares e estrelas de avaliação.

A regra prática: se o texto é pequeno e está sobre fundo claro, use `{colors.secondary-dark}` — o `{colors.secondary}` puro não tem contraste suficiente em corpo pequeno sobre `{colors.canvas}`.

### Verticais

Sete linhas de produto, cada uma com um par claro/escuro:

| Linha | Token | Claro | Escuro |
|---|---|---|---|
| Aqua Ball | `{colors.ball}` | `#ff443b` | `#c9352e` |
| Aqua Fresh | `{colors.fresh}` | `#1384ec` | `#116bbe` |
| Aqua Ramp | `{colors.ramp}` | `#7c62ff` | `#5642bc` |
| Aqua Free Fall | `{colors.free-fall}` | `#01b2bc` | `#00858d` |
| Aqua Playground | `{colors.playground}` | `#2cc05e` | `#1e8c43` |
| Aqua Toboágua | `{colors.toboagua}` | `#0f2cd8` | `#0a1f9c` |
| Aqua Complexos | `{colors.complexos}` | `#f99e0d` | `#a96c0b` |

Essas cores só operam dentro do escopo da própria vertical. Na página Aqua Toboágua, o CTA do hero é `{colors.toboagua}` e não `{colors.primary}`; na Aqua Playground é `{colors.playground}`. Fora da página da linha — na home, no rodapé, no blog — a vertical só aparece no logo da submarca e no chip identificador do card de projeto. Nunca misture duas verticais no mesmo bloco.

O halo do botão acompanha: `{effects.halo-vertical}` calcula o anel a partir da própria cor da linha, mantendo a assinatura de interação idêntica em todas as sete peles.

### Superfície e texto

O sistema opera sobre `{colors.canvas}` `#f8f8f8`, um branco levemente quebrado — não é `#ffffff`. Isso importa porque `{colors.surface-white}` puro é reservado para dois usos específicos: input de formulário em repouso e item de FAQ aberto. Nesses dois casos o branco puro é o que sinaliza "este elemento está ativo", já que o sistema não usa sombra.

`{colors.surface}` `#f2f2f2` é o cinza de card padrão — modelos, processo, missão/visão/valores, FAQ fechado, painel de mapa. `{colors.surface-strong}` `#e6e6e6` é meio tom mais escuro e cobre cards que precisam se destacar sobre outro card ou sobre canvas em blocos densos: card de projeto e card de depoimento. `{colors.surface-warm}` `#fff5ea` é o creme usado no botão "Ver artigo completo" e no chip de ano da timeline — é o único tom quente de superfície do sistema.

Texto em três níveis: `{colors.ink}` `#3d3d3d` para headline e título; `{colors.body}` `#4d4d4d` para parágrafo corrido; `{colors.muted}` `#6c6c6c` para metadados, legendas e link de rodapé secundário. Nenhum preto puro em lugar nenhum.

### Semântica

As cores semânticas não foram desenhadas — nenhuma tela contém estado de erro, sucesso ou alerta. Em vez de introduzir cor externa, o sistema reaproveita a paleta de verticais, o que mantém o vocabulário cromático fechado: `{colors.destructive}` reusa o vermelho de Aqua Ball, `{colors.success}` reusa o verde de Aqua Playground, `{colors.warning}` reusa o laranja de Aqua Complexos.

Uma consequência a observar: em páginas de vertical, a cor semântica pode colidir com o accent da linha. Na página Aqua Playground, uma mensagem de sucesso em `{colors.success}` fica visualmente indistinta do CTA. Nesses casos, prefira sinalizar sucesso com ícone e texto em `{colors.ink}` sobre `{colors.surface}` em vez de cor de fundo.

## Typography

### Riope — headlines

Riope é a fonte proprietária da marca e o motivo pelo qual as páginas não parecem catálogo de engenharia. É uma geométrica monoline de terminais arredondados, derivada da mesma construção que gerou o logotipo e o grafismo de ondas. Todo `{typography.h1}`, `{typography.h2}` e `{typography.h3}` usa Riope, incluindo os títulos de card em azul.

**Riope tem um único peso: 400.** Isso não é uma limitação de licença, é a fonte — o arquivo declara `usWeightClass 400` e contém apenas o estilo Regular. Nunca aplique `font-weight: 600` ou `700` a um elemento Riope. O browser vai sintetizar um faux-bold que engrossa os traços de forma irregular e destrói exatamente a qualidade monoline que justifica a escolha da fonte. Se um headline precisa de mais presença, aumente o `fontSize` ou mude a cor da palavra-chave — não o peso.

Hierarquia dentro do headline não vem de peso, vem de cor. É por isso que `{components.headline-highlight}` existe: o headline da home é "Atrações aquáticas completas, **do projeto à operação**", com a segunda metade em `{colors.secondary}` porque está sobre foto escura. Sobre fundo claro o destaque vira `{colors.primary}` — "Experiências aquáticas **que elevam o seu empreendimento**".

Riope cobre Latin Extended completo, incluindo todos os acentos e cedilha do português brasileiro. Verificado no arquivo — não haverá glifo faltando em "ç", "ã", "õ", "â", "ê".

### Montserrat — informação

Todo o resto é Montserrat: parágrafo, label de formulário, item de FAQ, rótulo de botão, link de navegação, especificação técnica. A escolha faz sentido no contexto — a página precisa comunicar "estrutura metálica galvanizada à fogo", "gel isoftálico com agentes Anti-UV", "927 usuários", "altura máxima 15,4 mt". Isso é conteúdo de manual, e Montserrat entrega neutralidade e legibilidade em corpo pequeno sem competir com Riope no topo.

Montserrat usa dois pesos: 400 para leitura e 700 para rótulo de botão, título de card em `{typography.card-h}`, eyebrow e nome em depoimento. O 600 aparece só em `{typography.nav-link}`.

### Título de card — dois padrões, ambos válidos

O sistema usa duas construções de título de card, e a distinção é semântica, não estilística:

- **Riope em `{colors.primary}`** (`{typography.h3}`) para conteúdo institucional e de produto — card de modelo, card de processo, card de missão/visão/valores, item de timeline, painel de projeto no mapa. É a voz da marca falando sobre si mesma.
- **Montserrat 700 em `{colors.ink}`** (`{typography.card-h}`) para conteúdo indexável e listável — card de projeto, card de blog. É a voz do conteúdo, onde o título precisa se comportar como manchete e suportar três ou quatro linhas sem perder legibilidade.

A regra ao criar um card novo: se o card descreve a Aqua Slides ou um produto dela, título em Riope azul. Se o card aponta para um item de uma lista que cresce com o tempo, título em Montserrat ink.

### Nota sobre a fonte

**Riope é a tipografia oficial e primária. Não substitua no site.** O pacote da marca inclui `Riope.woff2` e `Riope.woff` prontos para self-host — carregue via `@font-face` com `font-display: swap` e declare apenas o peso 400. Antes de subir para produção, confirme com o cliente o registro de licença de webfont junto à Envato Elements, que é onde a fonte foi licenciada.

**Quicksand é fallback, não alternativa.** Ela entra apenas na cadeia `font-family` para cobrir a janela de carregamento e o caso de falha do arquivo. É a open-source mais próxima do Riope — geométrica monoline com terminais arredondados — mas as diferenças são visíveis: o Quicksand tem `a` de dois andares onde o Riope tem uma construção mais fechada, contraformas mais abertas e altura-x menor. Headline longo em Quicksand ocupa cerca de 4% a mais de largura. Se um headline quebra linha de forma diferente entre ambiente de dev e produção, essa é a causa.

## Layout

### Grid e container

Largura máxima de conteúdo em 1400px centrado, sobre viewport de referência de 1920px. Isso deixa cerca de 260px de respiro de cada lado nas telas grandes. As bandas de cor sólida (`{components.cta-band-brand}`) sangram até a borda do viewport; a banda de newsletter (`{components.newsletter-band}`) não sangra — ela vive dentro do container com `{rounded.xl}`, e essa diferença é deliberada: a banda azul é ambiente, a banda amarela é um objeto.

Estruturas recorrentes:

- **Bloco de produto:** duas colunas, texto à esquerda (~45%) e mídia à direita (~55%). O bloco de checklist fica sempre entre o parágrafo e os CTAs.
- **Grid de modelos:** 3 colunas com `{spacing.base}` de gutter, cards de altura igual.
- **Galeria:** 3 colunas × 2 linhas, `{components.gallery-grid}`.
- **Rodapé:** logo e tagline à esquerda ocupando ~40%, três colunas de link à direita.
- **Formulário de contato:** duas colunas, headline à esquerda e formulário à direita sobre o hero — o formulário fica dentro da área de imagem, não abaixo dela.

### Espaçamento

Base de 4px. Padding vertical de seção em `{spacing.section}` (96px) para blocos editoriais e `{spacing.block}` (64px) para blocos de listagem densa. Padding interno de card em `{spacing.lg}` (24px), com `{spacing.base}` (16px) quando o card contém imagem sangrada no topo.

O sistema é generoso na vertical e apertado na horizontal: o gutter entre cards fica em 16px enquanto o respiro entre seções chega a 96px. Isso faz cada seção ler como uma unidade fechada, o que importa numa página de vertical que empilha sete blocos distintos.

### Filosofia de espaço em branco

A página alterna deliberadamente entre densidade e respiro. O hero é escuro e apertado, a banda de números logo abaixo é larga e vazia, o grid de verticais volta a ser denso. Esse ritmo evita que uma página de 6.000px de altura leia como um catálogo contínuo. Ao criar uma seção nova, verifique o que vem antes: se a anterior era densa, a nova precisa de `{spacing.section}` e menos elementos.

## Elevation

**O sistema não tem sombra.** Nenhuma das treze telas usa `box-shadow` no sentido tradicional. Profundidade é comunicada por três mecanismos:

1. **Halo** — o anel externo em tom claro da própria cor, aplicado a botões em estado ativo, ao submit de formulário e ao CTA do painel de mapa. Tecnicamente é um `box-shadow` de spread sem blur e sem offset (`{effects.halo-primary}`), o que produz contorno, não sombra. É a única forma de destaque de interação no sistema.

2. **Diferencial de superfície** — um card sobre `{colors.canvas}` usa `{colors.surface}`; um card que precisa se destacar em contexto já cinza usa `{colors.surface-strong}`. Elementos ativos vão para `{colors.surface-white}`.

3. **Contorno** — `{components.faq-item-open}` ganha 1px de borda em `{colors.primary}`, `{components.form-input-focus}` ganha 1px em `{colors.secondary}`. Estados de foco são bordas coloridas, nunca ring de glow.

Ao gerar um componente novo que "precisa de profundidade", não introduza sombra. Suba um degrau de superfície ou aplique halo.

## Components

### Navegação

**`nav-transparent`** — A barra padrão da maioria das páginas. Fica absoluta sobre o hero, sem fundo, com o logo em `{colors.secondary}` e links em branco. O link ativo fica amarelo. Existe porque quase toda página abre com foto de parque em tela cheia, e uma barra sólida cortaria a imagem.

**`nav-solid`** — Variante em `{colors.primary}` para páginas que não abrem com hero fotográfico. Mesma estrutura, logo permanece amarelo.

**`nav-link` / `nav-link-active`** — Em `{typography.nav-link}`. O estado ativo troca a cor para `{colors.secondary-dark}` sobre fundo claro e `{colors.secondary}` sobre fundo escuro. Não há sublinhado nem indicador de barra — a cor é o único sinal.

**`nav-dropdown`** — "Linhas de Atrações" abre com chevron. Lista as sete verticais.

### Botões

**`button-primary`** — Pílula azul, texto branco, sufixo de seta diagonal (↗). É o CTA padrão de todo o sistema: "Solicite seu Projeto", "Contato", "Ver Todas as Notícias". Altura 44px, raio completo.

**`button-primary-halo`** — A mesma pílula com `{effects.halo-primary}`. Aparece no submit do formulário de contato, no CTA do painel de mapa e no hero. Trate como estado ativo/hover — é o que o sistema usa no lugar de elevação em hover.

**`button-secondary`** — Pílula amarela com texto em `{colors.on-secondary}`. Usada quando o fundo já é azul e o CTA precisa contrastar, principalmente em `{components.cta-band-brand}`: "Quero ser o Próximo Case de Sucesso".

**`button-soft`** — Fundo `{colors.primary-tint}` com borda e texto azuis. É o CTA secundário, sempre pareado à direita de um `button-primary`: "Ver projetos", "Clique na categoria e saiba mais". Costuma carregar chevron para baixo em vez de seta diagonal quando a ação é de rolagem, não de navegação.

**`button-warm`** — Fundo creme `{colors.surface-warm}` com texto em `{colors.secondary-dark}`, largura total do card. Existe exclusivamente para "Ver artigo completo" nos cards de blog. É o botão de menor peso do sistema, deliberadamente — não deve competir com o CTA comercial da página.

**`button-vertical`** — O `button-primary` com a cor da linha ativa. Sete skins. O halo acompanha via `{effects.halo-vertical}`.

**`icon-button-circle-filled` / `icon-button-circle-outline`** — Botão circular de 40px com seta diagonal. A versão preenchida em amarelo marca o item ativo de uma lista; a versão outline marca os inativos. Aparece nos cards de projeto da home e nas setas do carrossel de logos.

### Átomos tipográficos

**`eyebrow`** — Rótulo uppercase com tracking de 1.4px acima de praticamente toda seção. Sobre fundo claro usa `{colors.secondary-dark}`, sobre escuro usa `{colors.secondary}`. É o elemento mais repetido do sistema e o que dá ritmo à leitura de páginas longas: "ESPECIALISTAS EM EQUIPAMENTOS AQUÁTICOS", "NOSSAS SOLUÇÕES", "MODELOS", "DEPOIMENTOS".

**`headline-highlight`** — Span colorido dentro do headline. Não é decoração: ele carrega a proposta de valor. O padrão é destacar a segunda metade da frase, onde está o benefício.

**`check-item`** — Ícone de check em `{colors.secondary}` sobre círculo `{colors.secondary-tint}`, seguido de label. Usado nas listas de garantia técnica: "Segurança Jurídica e Técnica", "Entrega Completa", "Suporte Vitalício", e na lista de processo de fabricação de cada vertical.

**`spec-row` / `spec-label`** — A dupla que carrega ficha técnica. O label uppercase laranja ("ATRAÇÕES", "ESPECIFICAÇÕES") encabeça uma coluna de linhas com ícone à esquerda: metragem, número de usuários, idade mínima. É onde o comprador técnico realmente lê.

### Cards

**`card-vertical-tile`** — Foto em `{rounded.md}` com o nome da linha em Riope branco sobreposto e centralizado. Seis tiles no grid de soluções da home. Sem escurecimento de fundo além do que a própria foto oferece — algumas ficam com contraste baixo, ver Known Gaps.

**`card-modelo`** — O card mais denso do sistema. Superfície `{colors.surface}`, imagem no topo com raio próprio e padding em volta, título em Riope azul, parágrafo descritivo, e abaixo duas colunas de `{components.spec-row}` com seus labels. Aparece em grid de 3 em todas as sete páginas de vertical.

**`card-processo`** — Card simples empilhado: título em Riope azul e parágrafo. Usado na página institucional para "Engenharia & Projetos", "Fabricação Própria", "Instalação & Start".

**`card-mvv`** — Missão, visão e valores. Diferencia-se pelo quadrado de ícone amarelo de 48px no topo, seguido de eyebrow, título em Riope azul e corpo.

**`card-projeto` / `card-projeto-active`** — Lista de cases na home. Superfície `{colors.surface-strong}`, logo da vertical no topo, título em Montserrat, localização em `{colors.muted}` e botão circular à direita. O item selecionado usa a variante preenchida do botão — é assim que o sistema indica qual case está sendo exibido na imagem ao lado.

**`card-depoimento`** — Avatar circular 32px, nome em Montserrat 700, corpo em 14px e linha de estrelas em `{colors.secondary-dark}`. Larguras variáveis num carrossel horizontal.

**`card-blog` / `card-blog-featured`** — Imagem em `{rounded.md}`, título em Montserrat 700 ink, resumo em `{colors.muted}`, e `{components.button-warm}` de largura total no rodapé do card. A variante featured cresce o título e usa proporção 16/9.

### Blocos de seção

**`power-numbers`** — Três colunas com quadrado de ícone amarelo, número em Riope azul e label em Montserrat ink. Aparece logo abaixo do hero na home, na institucional e no blog. É a primeira prova social da página: "+70 Projetos Entregues", "100% Território Nacional Atendido", "4 Anos no Mercado".

**`timeline-rail` / `timeline-item`** — Trilho vertical central de 1px em `{colors.hairline}` com pontos em `{colors.complexos}`, e itens alternando esquerda/direita. Cada item tem chip de ano com fundo creme e borda laranja, título em Riope azul e corpo. Usado na história da empresa.

**`faq-item` / `faq-item-open`** — Fechado: superfície `{colors.surface}`, título em Montserrat 700 a 18px, chevron cinza. Aberto: fundo branco, borda azul de 1px, título e chevron em azul. A resposta renderiza **fora** do card, direto sobre o canvas em `{typography.small}` — não dentro do container. É uma decisão incomum e precisa ser respeitada, senão o acordeão perde a leveza que tem no design.

**`logo-strip`** — Carrossel de logos de clientes em containers `{colors.surface}` de altura fixa, com setas circulares outline nas extremidades.

**`cta-band-brand`** — Banda azul sangrada com pattern de ondas em overlay, foto à direita, e à esquerda eyebrow, headline branco com destaque amarelo, parágrafo, checklist e `{components.button-secondary}`. É o bloco de conversão que fecha quase toda página.

**`newsletter-band`** — Bloco amarelo de `{rounded.xl}` com pattern de ondas em overlay sutil, headline em ink com destaque azul, e input inline com botão azul embutido dentro da pílula. É o único bloco amarelo de página inteira do sistema e sempre precede o rodapé.

**`gallery-grid`** — Grid 3×2 de fotos do produto instalado, raio `{rounded.md}`. Nas páginas de vertical, entre o bloco de produto e o grid de modelos.

### Formulário

**`form-input`** — Pílula branca com borda hairline e 52px de altura, label em Montserrat acima do campo (não dentro, não flutuante). Raio completo — os campos são pílulas, o que é incomum e é parte da assinatura.

**`form-input-focus`** — O estado de foco troca o fundo para `{colors.secondary-tint}` e a borda para `{colors.secondary}`. É o único lugar do sistema onde o amarelo indica estado de interação em vez de sinalização. Sem ring, sem glow.

**`form-select`** — Idêntico ao input com chevron em `{colors.muted}` à direita.

### Mapa

**`map-projects`** — Mapa de projetos com massa de terra em `{colors.surface-strong}` plana sobre `{colors.canvas}`. Sem relevo, sem fronteiras, sem rótulo de país.

**`map-marker`** — Ponto amarelo de 16px com anel em `{colors.secondary-dark}`.

**`map-project-panel`** — Painel lateral que abre ao clicar num marker: fechar em azul no topo, foto, eyebrow laranja com o tipo de empreendimento, título em Riope azul, localização em muted e `{components.button-primary-halo}`.

### Rodapé e utilitários

**`footer`** — Sobre `{colors.canvas}`, sem contraste de cor. Logo em azul (a única aplicação do logo em azul no sistema — em todos os outros contextos ele é amarelo ou branco), tagline em muted abaixo, três colunas de link à direita. Divisor hairline separa a linha de copyright.

**`footer-link-column`** — Cabeçalho em `{colors.primary}` e links em `{colors.body}`. Três colunas fixas: Navegação, Linhas de Atrações, Empresa.

**`social-icon-row`** — Ícones em azul, 20px, no canto direito da linha de copyright.

**`whatsapp-fab`** — Botão flutuante fixo no canto inferior direito, verde WhatsApp. É o único elemento do sistema que usa cor externa à paleta, porque a cor pertence à plataforma e não à marca. Não tokenize.

### Superfícies

**`hero-page`** — Foto em tela cheia com gradiente escuro da esquerda para a direita, conteúdo limitado a 640px à esquerda. Em páginas de vertical, o logo da submarca aparece acima do headline.

**`pattern-overlay`** — O grafismo de ondas do brandbook, aplicado com opacidade baixa sobre bandas de cor sólida. Nunca sobre foto, nunca sobre superfície clara — só sobre azul ou amarelo chapado.

**`page-vertical`** — Template único das sete linhas. A sequência de seções é fixa: hero, bloco de produto com checklist, galeria, grid de modelos, banda de CTA, FAQ, newsletter. O único parâmetro que muda é o token de cor da vertical, que propaga para o CTA do hero, o botão de produto e o halo. Não crie sete páginas — crie uma e injete a cor.

## Responsive Behavior

| Nome | Largura | Mudanças principais |
|---|---|---|
| Mobile | < 768px | Nav colapsa para logo + hambúrguer; grids de 3 colunas viram 1; hero reduz para ~420px de altura e o gradiente vira vertical; formulário de contato desce para baixo do headline; timeline vira coluna única com trilho à esquerda; power-numbers empilha; rodapé colapsa para 1 coluna |
| Tablet | 768–1024px | Nav mantém links visíveis sem CTA; grids de 3 viram 2; bloco de produto empilha texto sobre mídia; galeria vira 2×3; cards de depoimento em carrossel de 2 |
| Desktop | 1024–1440px | Layout completo; container acompanha o viewport com padding lateral de 48px |
| Wide | > 1440px | Container trava em 1400px; bandas de cor continuam sangrando; gutters absorvem o excedente |

**Esta tabela é inferência, não design validado.** Nenhuma tela mobile ou tablet foi desenhada no Figma — as treze páginas entregues são todas de 1920px de largura. Os breakpoints e o comportamento de colapso acima seguem padrões Tailwind/shadcn e a lógica estrutural das telas desktop. Valide com o cliente antes de tratar como especificação.

O que **não** é inferência: a escala tipográfica mobile em `typography-mobile` veio dos tokens exportados do Figma e é dado real da marca.

### Alvos de toque

Botões primários têm 44px de altura, no limite do recomendado para toque. Os botões circulares de 40px (`{components.icon-button-circle-filled}`) ficam abaixo do ideal e devem crescer para 48px em mobile. Os inputs de 52px estão confortáveis.

## Known Gaps

- **Estados não desenhados.** Não existe error, disabled, loading ou skeleton em nenhuma tela. O formulário de contato não tem estado de validação, o que é relevante porque ele é o principal ponto de conversão do site. As cores semânticas documentadas são derivadas, não validadas visualmente.

- **Hover não documentado.** O `{components.button-primary-halo}` está sendo interpretado como estado ativo/hover, mas o Figma não rotula os frames por estado — a leitura vem da posição em que cada variação aparece nas telas. Confirme com o designer antes de amarrar o halo a `:hover` em produção.

- **Mobile inteiramente inferido.** Nenhuma das treze páginas tem versão mobile ou tablet. O brandbook mostra um mockup de iPhone da home, mas em tamanho não legível para extração de layout. Tudo na tabela de breakpoints precisa de validação.

- **Contraste em `card-vertical-tile`.** O título branco sobre foto não tem scrim. Nos tiles de Playground e Fresh a foto é clara e o texto perde legibilidade — visível na home entregue. Precisa de um overlay escuro ou text-shadow, e isso não foi resolvido no design.

- **Licença de webfont pendente.** O Riope veio licenciado via Envato Elements. O pacote inclui `.woff` e `.woff2`, mas o registro de uso para web precisa ser confirmado com o cliente antes do deploy.

- **Cinzas consolidados.** As telas originais usam quatro cinzas de superfície quase idênticos (`#f2f2f2`, `#f5f1f1`, `#e6e6e6`, `#e8e8e8`). Foram consolidados em dois tokens por decisão de escopo. Se o designer tinha intenção nessa distinção, ela se perdeu aqui.

- **Escala de radius e spacing inferida.** Nenhum dos dois existe nos tokens exportados. Os valores documentados foram medidos nas telas e arredondados para uma escala coerente.

- **Ícones sem biblioteca definida.** Os ícones de spec-row (régua, usuários, idade), os quadrados de `power-numbers` e os ícones de `card-mvv` aparecem nas telas mas não há biblioteca declarada nem set exportado. Presumir Lucide como padrão até definição contrária.

- **Blog em lorem ipsum.** A página individual de blog não tem conteúdo real, então a tipografia de artigo longo — hierarquia de H2/H3 dentro do corpo, tratamento de lista, citação, imagem inline — não pôde ser extraída. `{typography.blockquote}` e `{typography.inline-code}` são inferência.

- **Copy herdada em duas telas.** Na página Aqua Toboágua o título da seção de modelos diz "Conheça os Modelos de Playground". Na banda de newsletter o eyebrow diz "FAQ". São erros de conteúdo, não de design, mas quem implementar vai reproduzi-los se não for avisado.

- **Páginas ainda não desenhadas.** Não existem: listagem de projetos com filtro, página 404, política de privacidade e termos de uso (linkados no rodapé), e página de resultado de busca do blog.