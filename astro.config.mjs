// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import prefixoBase from './integracoes/prefixo-base.mjs';

/**
 * Dois cenarios:
 *  - producao no dominio do cliente: sem variavel de ambiente.
 *  - teste no GitHub Pages: SITE_URL e BASE_PATH definidos pelo workflow,
 *    e o site sai bloqueado para buscadores (ver TESTE abaixo).
 */
const SITE = process.env.SITE_URL || 'https://aucom.com.br';
const BASE = process.env.BASE_PATH || undefined;
export const TESTE = Boolean(process.env.BASE_PATH);

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',

  // O mapa de 301 das URLs antigas fica no servidor, nao aqui:
  // redirect gerado como pagina estatica vira meta refresh, que o
  // Google trata pior que um 301 de verdade. Ver public/_htaccess-modelo.
  integrations: [
    sitemap({
      // /cliente/ e area de acesso, nao conteudo: fica fora do sitemap e sai
      // com noindex, como o /obrigado/.
      filter: (page) =>
        !page.includes('/obrigado') && !page.includes('/lp/') && !page.includes('/cliente'),
    }),
    prefixoBase(),
  ],

  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
