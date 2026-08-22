/**
 * Dados centrais do site. Mudou telefone, WhatsApp ou um numero de
 * prova social? Muda aqui e vale para o site inteiro.
 *
 * ATENCAO — itens marcados com PENDENTE sao suposicoes de trabalho
 * que precisam ser confirmadas pela Aucom antes de publicar.
 */

export const empresa = {
  nome: 'Aucom',
  nomeCompleto: 'Aucom Informática',
  cidade: 'Bauru',
  uf: 'SP',
  /**
   * Dados juridicos, confirmados pela Aucom em 22/08/2026.
   * Sao exigencia da verificacao de negocio da Meta (WhatsApp Business API):
   * a razao social e o endereco registrado precisam estar visiveis no site,
   * batendo com o cartao CNPJ. O CEP foi conferido na base dos Correios
   * (ViaCEP): 17012-120 cobre a faixa "de 13/14 ao fim" da rua, onde cai a
   * quadra 15, no Jardim Nasralla. O endereco antigo (Alpheu Jose Ribas
   * Sampaio) esta descartado de vez.
   */
  razaoSocial: 'AUCOM INFORMATICA LTDA ME',
  cnpj: '69.159.903/0001-16',
  endereco: {
    logradouro: 'Rua Vivaldo Guimarães, 15-55',
    complemento: 'Sala 82',
    bairro: 'Jardim Nasralla',
    cep: '17012-120',
  },
  anos: 30,
  telefone: '(14) 98211-2211',
  telefoneLink: '+5514982112211',
  /**
   * E-mail comercial, definido pela Aucom em 22/08/2026. E o endereco que
   * aparece no site inteiro. Precisa ser do proprio dominio: a Meta usa a
   * correspondencia entre e-mail e dominio para ligar a empresa ao site.
   */
  email: 'comercial@aucom.com.br',
  /**
   * Numero do botao de WhatsApp do site inteiro.
   * ATENCAO (22/08/2026): a Aucom vai levar para a API oficial da Meta um
   * TERCEIRO numero, usado na operacao, que nao e este nem o `telefone` acima.
   * Quando a API entrar no ar, este campo precisa apontar para o numero da API,
   * senao o site continua jogando contato em uma caixa de WhatsApp comum, fora
   * do atendimento oficial. Trocar aqui vale para o site todo.
   * Lembrete: numero que entra na API oficial para de funcionar no aplicativo
   * comum do WhatsApp. Quem usa esse numero no dia a dia precisa saber disso
   * antes da migracao.
   */
  whatsapp: '5514982270077',
  /**
   * Area do cliente. Desde 22/08/2026 e uma pagina DO PROPRIO SITE
   * (src/pages/cliente.astro), no lugar da tela de 2020 que vivia solta em
   * public_html/cliente/index.html.
   * Caminho relativo agora: a integracao de prefixo-base cuida do ambiente de
   * teste. O subdominio cliente.aucom.com.br nao existe, nao usar.
   */
  areaCliente: '/cliente/',
  horario: 'Segunda a sexta, das 8h às 18h',
  sociais: {
    linkedin: 'https://www.linkedin.com/company/aucom-informatica',
    instagram: 'https://www.instagram.com/aucom.informatica',
    youtube: 'https://www.youtube.com/channel/UCgOEpB1P0La2Ts1ie8A30dg',
    facebook: 'https://www.facebook.com/aucom.informatica',
  },
};

/**
 * O endereco em uma linha, do jeito que a Meta espera achar no rodape.
 * Serve tambem para a pagina de contato, o /sobre/ e as paginas legais.
 */
export const enderecoLinha = [
  `${empresa.endereco.logradouro}`,
  `${empresa.endereco.complemento}`,
  `${empresa.endereco.bairro}`,
  `${empresa.cidade}/${empresa.uf}`,
  `CEP ${empresa.endereco.cep}`,
].join(', ');

/**
 * Codigo da verificacao de dominio da Meta (Central de Negocios >
 * Seguranca da Marca > Dominios). A Meta entrega uma string; ela entra aqui
 * e vira <meta name="facebook-domain-verification"> em todas as paginas.
 * Enquanto estiver vazia, a tag simplesmente nao e gerada.
 * So funciona no dominio de verdade (aucom.com.br), nao no ambiente de teste.
 */
export const metaVerificacaoDominio = '';

/**
 * ID do contêiner do Google Tag Manager, no formato GTM-XXXXXXX.
 * Enquanto estiver vazio, nenhuma tag do Google e carregada: o site continua
 * empurrando os 7 eventos para o dataLayer, e eles ficam parados ali.
 * Preencher aqui liga a medicao no site inteiro, de uma vez.
 * O mapa dos eventos e o passo a passo estao em ../gtm-do-zero.md.
 */
export const gtmId = 'GTM-NG7B7XLW';

/** Identificacao legal completa: razao social mais CNPJ. */
export const identificacaoLegal = `${empresa.razaoSocial}, CNPJ ${empresa.cnpj}`;

/**
 * Monta o link do WhatsApp com a mensagem ja escrita.
 * E a melhoria de maior impacto e custo zero: o vendedor abre a
 * conversa ja sabendo de qual pagina a pessoa veio.
 */
export function zap(mensagem: string): string {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * A faixa de numeros so entra na pagina quando houver numero real para mostrar.
 * Hoje 1 de 4 e real (1995): tres travessoes com "PENDENTE" ocupando meia tela
 * fazem a pagina parecer inacabada, que e o oposto do que a faixa deveria provar.
 *
 * Quando a Aucom mandar os dados: preencher `provas` abaixo, apagar as notas
 * "PENDENTE" e virar esta chave para true.
 */
export const mostrarProvas = false;

/** PENDENTE: numeros reais de operacao, a confirmar com a Aucom. */
export const provas = [
  { rotulo: 'No mercado desde', valor: '1995', nota: 'mais de 30 anos' },
  { rotulo: 'Transportadoras atendidas', valor: '—', nota: 'PENDENTE: número real' },
  { rotulo: 'CT-e emitidos por mês', valor: '—', nota: 'PENDENTE: número real' },
  { rotulo: 'Cliente mais antigo', valor: '—', nota: 'PENDENTE: anos de casa' },
];

export type Modulo = {
  slug: string;
  nome: string;
  titulo: string;
  chamada: string;
  resumo: string;
  selo?: string;
};

/** Os modulos do TMS. Alimentam o menu, a grade da home e as paginas-filhas. */
export const modulos: Modulo[] = [
  {
    slug: 'emissao-cte-mdfe',
    nome: 'CT-e e MDF-e',
    titulo: 'Emissão de CT-e e MDF-e',
    chamada: 'Emita CT-e e MDF-e sem retrabalho e sem rejeição',
    resumo:
      'CT-e, DACTE e MDF-e integrados à SEFAZ, com conferência antes do envio e contingência quando a SEFAZ cai.',
  },
  {
    slug: 'importacao-xml-nfe',
    nome: 'Importação de XML',
    titulo: 'Importação de XML de nota fiscal',
    chamada: 'Importe o XML da nota e gere o CT-e sem digitar',
    resumo:
      'O XML da nota do embarcador entra no sistema e vira conhecimento de transporte. Sem digitação, sem erro de digitação.',
    selo: 'novo',
  },
  {
    slug: 'ciot-pagamento-de-frete',
    nome: 'CIOT',
    titulo: 'CIOT e pagamento de frete',
    chamada: 'CIOT emitido junto com a viagem, não depois dela',
    resumo:
      'Declaração de CIOT, pagamento eletrônico de frete ao motorista autônomo e controle de adiantamento e saldo.',
    selo: 'novo',
  },
  {
    slug: 'gestao-de-frota',
    nome: 'Frota e agregados',
    titulo: 'Gestão de frota e agregados',
    chamada: 'Saiba quanto cada caminhão realmente dá de lucro',
    resumo:
      'Custo por veículo e por viagem, manutenção, pneus, combustível e acerto de agregados no mesmo lugar.',
  },
  {
    slug: 'controle-de-jornada',
    nome: 'Jornada do motorista',
    titulo: 'Controle de jornada do motorista',
    chamada: 'Jornada dentro da Lei, sem planilha paralela',
    resumo:
      'Registro de jornada, escala, espera, horas extras e descanso conforme a Lei do Motorista, ligado à folha.',
  },
  {
    slug: 'roteirizacao-e-rastreamento',
    nome: 'Rotas e rastreamento',
    titulo: 'Roteirização e rastreamento',
    chamada: 'A carga na tela, do embarque à entrega',
    resumo:
      'Montagem de rota, integração com rastreadores e registro de ocorrência no momento em que ela acontece.',
  },
  {
    slug: 'coleta-e-entrega',
    nome: 'Coleta e entrega',
    titulo: 'Coleta e entrega',
    chamada: 'Do pedido de coleta ao canhoto digitalizado',
    resumo:
      'Ordem de coleta, romaneio, ocorrência de entrega e comprovante digital, com o canhoto ligado ao CT-e.',
  },
  {
    slug: 'portal-do-embarcador',
    nome: 'Portal do embarcador',
    titulo: 'Portal do embarcador',
    chamada: 'Seu cliente acompanha a carga sem ligar para você',
    resumo:
      'O embarcador entra, consulta a situação da carga e baixa os documentos. Menos telefone no seu atendimento.',
  },
];

export const modulosRisco = [
  {
    slug: 'cadastro-de-motoristas',
    nome: 'Cadastro e consulta de motoristas',
    resumo:
      'Cadastro do motorista e do veículo, consulta antes da viagem e histórico de quem já rodou para você.',
  },
  {
    slug: 'monitoramento-de-cargas',
    nome: 'Monitoramento de cargas',
    resumo:
      'Regras por tipo de carga e por rota, acompanhamento da viagem e registro das ocorrências.',
  },
];

/** Perguntas frequentes da pagina de TMS. Viram FAQPage no schema. */
export const faqTms = [
  {
    p: 'Vou parar de emitir CT-e durante a troca de sistema?',
    r: 'Não. A implantação é feita em paralelo: o sistema novo é configurado e testado enquanto o atual continua rodando. A virada acontece em data combinada, com acompanhamento da nossa equipe no dia.',
  },
  {
    p: 'Vocês migram os dados do sistema que eu uso hoje?',
    r: 'Sim. Cadastro de clientes, motoristas, veículos, tabelas de frete e histórico de documentos são migrados. O que é possível trazer depende do formato em que o sistema atual permite exportar. Avaliamos isso no diagnóstico, antes de fechar.',
  },
  {
    p: 'Quantos veículos preciso ter para valer a pena?',
    r: 'A partir de 5 veículos o ganho de tempo na emissão de documentos já paga o sistema. As faixas de investimento acompanham o porte da operação.',
  },
  {
    p: 'Funciona na nuvem ou preciso de servidor na empresa?',
    r: 'As duas formas. Transportadora com escritório único costuma preferir nuvem; quem tem filial ou internet instável em algum ponto às vezes prefere servidor local. A decisão é sua.',
  },
  {
    p: 'Quanto tempo leva a implantação?',
    r: 'Entre 2 e 6 semanas, dependendo do tamanho da operação e do volume de dados a migrar. O prazo é fechado no diagnóstico e não muda depois.',
  },
  {
    p: 'Quem atende quando dá problema na hora de emitir?',
    r: 'Nossa equipe, por telefone e WhatsApp, no horário comercial. Somos de Bauru e atendemos transportadora há 30 anos. Quem responde conhece transporte, não é central de atendimento genérica.',
  },
];

/** PENDENTE: precos reais, a definir com a Aucom. */
export const planos = [
  {
    nome: 'Operação enxuta',
    porte: 'até 10 veículos',
    resumo: 'Emissão de documentos, frota e financeiro do transporte.',
    itens: ['CT-e, DACTE e MDF-e', 'Importação de XML de NF-e', 'Cadastro de frota e motoristas', 'Financeiro do frete'],
  },
  {
    nome: 'Operação em crescimento',
    porte: '11 a 50 veículos',
    resumo: 'Tudo do anterior, mais agregados, jornada e coleta e entrega.',
    itens: ['Tudo da faixa anterior', 'CIOT e pagamento de frete', 'Agregados e acerto de viagem', 'Jornada do motorista', 'Coleta, entrega e canhoto'],
    destaque: true,
  },
  {
    nome: 'Operação consolidada',
    porte: 'acima de 50 veículos',
    resumo: 'Operação completa, com risco e portal para o embarcador.',
    itens: ['Tudo das faixas anteriores', 'Gerenciamento de risco integrado', 'Portal do embarcador', 'Integrações sob medida', 'Rastreamento e roteirização'],
  },
];

export const menu = [
  { texto: 'TMS', href: '/tms/' },
  { texto: 'Gerenciamento de risco', href: '/gerenciamento-de-risco/' },
  { texto: 'ERP', href: '/erp/' },
  { texto: 'Planos', href: '/planos/' },
  // Clientes desativada em 19/08/2026 a pedido da Aucom. A pagina continua no
  // repositorio como src/pages/_clientes.astro (o prefixo _ impede o Astro de
  // gerar a rota). Para reativar: tirar o _ do arquivo e devolver esta linha,
  // mais o item do Rodape.astro e o redirect em public/_htaccess-modelo.
  { texto: 'Contato', href: '/contato/' },
];
