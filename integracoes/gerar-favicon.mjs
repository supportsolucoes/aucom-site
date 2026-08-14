/**
 * Gera os icones de aba a partir do simbolo do logo da Aucom.
 *
 * O favicon do site antigo esta quebrado: o arquivo em
 * /images/favicon.png devolve a pagina de erro em HTML, e por isso a
 * aba do navegador aparece sem icone ha anos.
 *
 * Uso: node integracoes/gerar-favicon.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const ORIGEM = '../marca/logo4.png'; // simbolo + palavra, 1288x1288
const DESTINO = 'public';

// o simbolo ocupa a parte de cima do arquivo; a palavra "AUCOM" fica
// embaixo e nao cabe num icone de 32px
const RECORTE = { left: 90, top: 90, width: 1110, height: 900 };

const tamanhos = [
  { arquivo: 'favicon-32.png', px: 32, margem: 1 },
  { arquivo: 'favicon-48.png', px: 48, margem: 2 },
  { arquivo: 'favicon-192.png', px: 192, margem: 8 },
  { arquivo: 'favicon-512.png', px: 512, margem: 22 },
  { arquivo: 'apple-touch-icon.png', px: 180, margem: 22, fundo: '#FFFFFF' },
];

await mkdir(DESTINO, { recursive: true });

for (const t of tamanhos) {
  const interno = t.px - t.margem * 2;

  const simbolo = await sharp(ORIGEM)
    .extract(RECORTE)
    .resize(interno, interno, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: t.px,
      height: t.px,
      channels: 4,
      background: t.fundo
        ? { r: 255, g: 255, b: 255, alpha: 1 }
        : { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: simbolo, gravity: 'center' }])
    .png()
    .toFile(`${DESTINO}/${t.arquivo}`);

  console.log(`gerado: ${t.arquivo} (${t.px}px)`);
}

// Nao geramos versao SVG: o simbolo tem facetas em varios tons de azul
// e redesenha-lo a mao produziria uma marca parecida, nao a marca.
// Quando a Aucom enviar o logo em vetor, e so trocar por ele.
