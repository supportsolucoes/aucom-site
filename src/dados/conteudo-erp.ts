/**
 * Conteudo das paginas do ERP.
 * Fica em modulo separado porque o Astro executa getStaticPaths
 * isolado do resto do frontmatter — dado declarado na propria
 * pagina nao existe la dentro.
 */

export type PaginaErp = {
  nome: string;
  title: string;
  descricao: string;
  h1: string;
  abertura: string;
  itens: { t: string; d: string }[];
  zap: string;
  foto: 'loja' | 'posto';
};

export const paginasErp: Record<string, PaginaErp> = {
  'varejo-e-atacado': {
    nome: 'Varejo e atacado',
    title: 'ERP para Varejo, Atacado e Distribuidora | Aucom',
    descricao:
      'Sistema de gestão para loja, atacado e distribuidora: estoque, vendas, compras, fiscal e financeiro integrados, com app de vendas e integração com e-commerce.',
    h1: 'ERP para varejo, atacado e distribuidora',
    abertura:
      'Do balcão à distribuição: um sistema que controla o que entra, o que sai, quanto custa e quanto sobra — sem planilha paralela para fechar o mês.',
    itens: [
      { t: 'Vendas e balcão', d: 'PDV, NFC-e, orçamento, pedido e condição de pagamento por cliente.' },
      { t: 'Estoque', d: 'Entrada, saída, inventário, custo médio e controle por lote quando o produto exige.' },
      { t: 'Compras', d: 'Cotação, pedido, entrada por XML da nota do fornecedor e conferência.' },
      { t: 'Tabela de preço', d: 'Preço por cliente, por região e por volume, com margem calculada.' },
      { t: 'Representantes', d: 'Aplicativo de vendas com estoque e preço atualizados, e comissão apurada no sistema.' },
      { t: 'Fiscal', d: 'NF-e, NFC-e, SPED e as obrigações acessórias do seu regime.' },
      { t: 'Financeiro', d: 'Contas a pagar e receber, fluxo de caixa, boleto e conciliação bancária.' },
      { t: 'E-commerce', d: 'Integração via API para a loja virtual usar o mesmo estoque e faturamento.' },
    ],
    zap: 'Olá! Vim pela página de ERP para varejo e atacado e quero saber mais.',
    foto: 'loja',
  },

  'postos-de-combustivel': {
    nome: 'Postos de combustível',
    title: 'Sistema para Posto de Combustível | Aucom ERP',
    descricao:
      'Gestão para posto de combustível: bombas, tanques, aferição, conveniência, fiscal do combustível e financeiro em um sistema só.',
    h1: 'Sistema para posto de combustível',
    abertura:
      'Posto é um negócio de margem apertada e fiscalização pesada. O sistema precisa fechar bomba com tanque, tanque com nota e nota com o caixa — todo dia, sem sobra e sem falta.',
    itens: [
      { t: 'Bombas e encerrantes', d: 'Leitura por bico, fechamento de turno e conferência com o que foi vendido.' },
      { t: 'Tanques', d: 'Estoque por tanque, recebimento de carga e controle de perda por evaporação.' },
      { t: 'Aferição', d: 'Registro das aferições exigidas, com histórico para a fiscalização.' },
      { t: 'Conveniência', d: 'PDV da loja com estoque próprio, integrado ao mesmo financeiro.' },
      { t: 'Frentistas e turnos', d: 'Fechamento por frentista e por turno, com diferença apontada na hora.' },
      { t: 'Fiscal do combustível', d: 'As obrigações específicas do segmento, acompanhadas por quem atende posto há décadas.' },
      { t: 'Financeiro', d: 'Caixa, cartões, prazo, boletos e conciliação.' },
      { t: 'Frota de clientes', d: 'Abastecimento a prazo por empresa conveniada, com fechamento mensal.' },
    ],
    zap: 'Olá! Vim pela página de sistema para posto de combustível e quero saber mais.',
    foto: 'posto',
  },
};
