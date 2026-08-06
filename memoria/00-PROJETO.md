# 📇 00 — FICHA DO PROJETO

> Preenchido no Onboarding. Muda pouco. Se mudar, registre o motivo em `03-DECISOES.md`.

## Cliente
- **Nome / Empresa:** Aqua Slides Equipamentos Aquaticos Ltda - ME
- **Nome fantasia:** Aqua Slides
- **Domínio final:** https://aquaslides.com.br/
- **Responsável do lado do cliente:** [ a definir ]

## Identidade visual
- **Cores institucionais:** azul `#09aae0` (primary — leitura técnica, CTAs, dados) e amarelo
  `#facc01` (secondary — sinalização, logo sobre foto, checks, banda de newsletter).
  Sete verticais com cor própria: Ball `#ff443b`, Fresh `#1384ec`, Ramp `#7c62ff`,
  Free Fall `#01b2bc`, Playground `#2cc05e`, Toboágua `#0f2cd8`, Complexos `#f99e0d`.
- **Tipografia:** Riope (headlines, peso único 400) + Montserrat (informação técnica).
  Fallback oficial do Riope: Quicksand — em uso até o arquivo licenciado chegar.
- **Fonte da verdade:** `DESIGN.md` (este arquivo só registra o resumo)

## Escopo
- **Páginas:** Home, Sobre, Serviços, Contato, Verticais (template único × 7 linhas), Projetos,
  Blog (listagem), Artigo (interna)
- **Blog / CMS:** sim → Fases 5 e 6 **dentro** do escopo (Sanity)
- **Idioma:** pt-BR

## Integrações
- **Formulário:** envio direto para e-mail (Route Handler `src/app/api/contato/route.js` na Fase 7;
  o endereço de destino fica em variável de ambiente, nunca no código)
- **Analytics:** [ a definir ]
- **Outros:** WhatsApp FAB (`whatsapp-fab` no DESIGN.md) — (47) 99151-6680

## Dados legais (para `src/data/legal-texts.js`)
- **Razão social:** Aqua Slides Equipamentos Aquaticos Ltda - ME
- **CNPJ:** 46.186.936/0001-50
- **Endereço:** R. Norberto da Maia, 565 - Volta Redonda, Araquari - SC, 89245-000
- **E-mail:** [ a definir — pendência com o cliente ]
- **Telefone:** (47) 99151-6680

## Ambiente
- **Sanity dataset:** production
- **Vercel — Root Directory:** `frontend`

> ⚠️ Nunca escreva chaves, tokens ou senhas aqui. Segredos vivem só em `.env.local` (não versionado).
