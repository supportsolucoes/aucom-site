import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

/**
 * Prefixa os links internos com o caminho base do GitHub Pages.
 *
 * Por que existe: no Pages de projeto o site fica em
 * /aucom-site/, mas as paginas escrevem href="/tms/" — que apontaria
 * para a raiz do dominio. Em vez de espalhar helper por ~100 links
 * (e ter de desfazer isso na hora de publicar no dominio real), a
 * reescrita acontece uma vez, no HTML ja gerado.
 *
 * No dominio proprio a base e "/" e a integracao nao faz nada.
 */
export default function prefixoBase() {
  return {
    name: 'aucom:prefixo-base',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
        if (!base) {
          logger.info('sem BASE_PATH: links mantidos na raiz');
          return;
        }

        const raiz = dir.pathname.replace(/^\/([A-Za-z]:)/, '$1');
        let arquivos = 0;

        async function percorrer(pasta) {
          for (const item of await readdir(pasta, { withFileTypes: true })) {
            const caminho = join(pasta, item.name);
            if (item.isDirectory()) {
              await percorrer(caminho);
            } else if (extname(item.name) === '.html') {
              const original = await readFile(caminho, 'utf8');

              // so links internos: ignora //, http, mailto:, tel:, #
              const novo = original.replace(
                /(href|src|srcset|action|content)="(\/(?!\/)[^"]*)"/g,
                (todo, atributo, valor) => {
                  if (valor.startsWith(base + '/')) return todo;
                  if (atributo === 'srcset') {
                    const partes = valor
                      .split(',')
                      .map((p) => p.trim().replace(/^\//, `${base}/`))
                      .join(', ');
                    return `${atributo}="${partes}"`;
                  }
                  return `${atributo}="${base}${valor}"`;
                }
              );

              if (novo !== original) {
                await writeFile(caminho, novo, 'utf8');
                arquivos++;
              }
            }
          }
        }

        await percorrer(raiz);
        logger.info(`links prefixados com "${base}" em ${arquivos} paginas`);
      },
    },
  };
}
