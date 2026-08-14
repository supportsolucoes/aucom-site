# Site novo da Aucom

Site institucional reposicionado para **TMS e gerenciamento de risco de transportadoras**,
conforme o plano do relatório de diagnóstico (`../relatorio/`).

**Status:** publicado como ambiente de teste em
https://supportsolucoes.github.io/aucom-site/ (com `noindex`, para não concorrer com o site
real da Aucom no Google).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
```

## Como publicar o teste

```powershell
$env:SITE_URL="https://supportsolucoes.github.io"; $env:BASE_PATH="/aucom-site"
npm run build
$env:SITE_URL=$null; $env:BASE_PATH=$null
```

Depois criar `dist/.nojekyll`, sobrescrever `dist/robots.txt` com `Disallow: /` e enviar o
conteúdo de `dist` para a branch `gh-pages`. O deploy automático está pronto em
`docs/workflow-pages.yml.txt`, mas exige `gh auth refresh -s workflow` para poder subir.

> O Pages leva de 30 s a alguns minutos para propagar. Nesse intervalo ele serve HTML novo
> com CSS antigo e a página aparece quebrada — confirme o conteúdo no ar antes de mostrar
> para alguém.

## Stack e por quê

| Escolha | Motivo |
|---|---|
| **Astro** (site estático) | Ninguém do lado do cliente vai manter o site. Estático não é invadido, não quebra sozinho e continua no ar sem atenção. |
| **Sem CMS** | Painel que ninguém usa é superfície de ataque sem retorno. Conteúdo vive em `src/dados/`. |
| **Archivo variável** (peso + largura) | Uma família, um arquivo de 90 KB. Títulos usam a largura expandida; corpo, a normal. Servida do próprio domínio. |
| **Zero JS de framework** | O site entrega 0 KB de JavaScript de biblioteca. Só há scripts próprios curtos (menu, formulário, horário do WhatsApp). |

## Peso da home (celular)

| Item | KB |
|---|---:|
| HTML com CSS embutido | 67 |
| Fonte | 87 |
| Imagem do topo (WebP, versão de 900px) | 24 |
| JavaScript de biblioteca | 0 |
| **Total** | **~180** |

Para comparação, o site antigo carrega **790 KB só na imagem do topo**, mais ~330 KB de
Bootstrap 3 + jQuery.

## Estrutura

```
src/
├── dados/                    conteúdo e configuração — é aqui que se edita texto
│   ├── site.ts               telefone, WhatsApp, módulos, planos, FAQ, prova social
│   ├── conteudo-modulos.ts   texto das 8 páginas de módulo do TMS
│   ├── conteudo-erp.ts       texto das páginas de ERP
│   └── texto.ts              impede "CT-e" de quebrar no fim da linha
├── layouts/
│   ├── Base.astro            <head> completo, GTM, captura de gclid, eventos
│   └── Campanha.astro        landing pages de anúncio (sem menu)
├── componentes/              cabeçalho, rodapé, formulário, FAQ, ícones, WhatsApp
├── imagens/                  fotos processadas pelo Astro (viram WebP com srcset)
└── pages/                    28 páginas
public/
├── fontes/archivo.woff2
├── marca/                    logos da Aucom
├── robots.txt
└── _htaccess-modelo          regras de servidor: renomear para .htaccess ao publicar
```

## O que já está resolvido do diagnóstico

- `lang="pt-BR"`, canonical em todas as páginas, Open Graph completo
- JSON-LD: `Organization` em todo o site, `SoftwareApplication` na home, `FAQPage` onde há FAQ
- `/obrigado/` com `noindex` e evento de conversão — a página que faltava para medir
- Clique de WhatsApp e de telefone empurrados para o `dataLayer`
- `gclid` e UTMs capturados e enviados junto do formulário (base da conversão offline)
- Formulário com campo de porte da frota, honeypot e validação com mensagem em português
- WhatsApp com **mensagem diferente por página** e texto que muda fora do horário comercial
- `robots.txt` bloqueando `/lp/` e `/obrigado/`; sitemap gerado no build
- Imagens em WebP com `srcset`; fonte com preload e métricas de fallback
- 404 útil, com atalhos

## Como o formulário funciona hoje

Não há backend. Ao enviar, o formulário:

1. registra a conversão no `dataLayer` (**antes** de sair do site — se dependesse do envio no
   WhatsApp, todo contato que não vira conversa sumiria);
2. abre `wa.me` numa aba nova, com a mensagem montada a partir dos campos;
3. leva a aba atual para `/obrigado/`, que repete o link com a mesma mensagem — necessário
   porque o navegador pode bloquear a janela nova.

Consequência: existe a **contagem** de contatos (GA4/Ads), mas não a **lista** com nome e
telefone — ela vive nas conversas do WhatsApp. Para lead gravado e conversão offline, é
preciso o backend (ver `../arquitetura.md`); a troca fica no `submit` de
`src/componentes/Formulario.astro`.

## O que falta (depende do cliente)

1. **Container do GTM** — o espaço está marcado em `src/layouts/Base.astro`. Sem ele, nada é medido.
2. **Backend do formulário**, quando quiserem lead gravado em banco/CRM e conversão offline.
3. **Números reais** da faixa de prova social (`src/dados/site.ts` → `provas`).
4. **Clientes e cases** — `/clientes/` está montada mas sem conteúdo real, e por isso fora do menu.
5. **Política de preço** — decidir o que publicar em `/planos/`.
6. **Fotos próprias** da operação e **capturas de tela do sistema**. As fotos atuais são do Pexels
   (licença livre para uso comercial): rodovia do interior paulista e carreta em rodovia brasileira.
7. **Logo horizontal em vetor** — hoje usamos a versão clara sobre a barra escura.
8. Dados para fechar `/sobre/`, `/contato/` e as páginas legais (CNPJ, endereço, razão social, DPO).

Os pontos 3, 4, 5 e 8 aparecem no próprio site como blocos tracejados marcados
"Para a Aucom preencher", para não passarem despercebidos na revisão.

## Cuidados ao editar

- **Nunca** editar arquivos `.astro` com `Get-Content`/`Set-Content` do PowerShell: corrompe a
  acentuação (lê como ANSI). Usar editor com UTF-8.
- `getStaticPaths` roda isolado no Astro: dados usados lá precisam vir de `import`, não de
  `const` declarada na própria página.
