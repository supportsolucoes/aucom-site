/**
 * Impede que os termos fiscais quebrem no meio do hifen.
 * "CT-e" partido em "CT-" / "e" no fim da linha fica ilegivel para
 * quem convive com esses documentos todo dia.
 *
 * Usa <span> com nowrap em vez de hifen nao-quebravel (U+2011) de
 * proposito: o texto continua identico ao que a pessoa digita no
 * Google, sem trocar caractere.
 */
const TERMOS = ['CT-e OS', 'CT-e', 'MDF-e', 'NF-e', 'NFC-e', 'DACTE', 'CC-e'];

export function semQuebra(texto: string): string {
  let saida = texto;
  for (const termo of TERMOS) {
    saida = saida.replaceAll(termo, `<span class="nb">${termo}</span>`);
  }
  return saida;
}
