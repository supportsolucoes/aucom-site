/**
 * Conteudo das paginas-filhas do TMS.
 * Cada modulo tem o texto escrito no vocabulario do transportador —
 * e o titulo/descricao que vao para o Google.
 */

export type Recurso = { titulo: string; texto: string };
export type ConteudoModulo = {
  title: string;
  descricao: string;
  h1: string;
  abertura: string;
  dor: { titulo: string; texto: string };
  recursos: Recurso[];
  fechamento?: string;
  faq?: { p: string; r: string }[];
  zap: string;
};

export const conteudo: Record<string, ConteudoModulo> = {
  'emissao-cte-mdfe': {
    title: 'Emissor de CT-e e MDF-e para Transportadoras | Aucom TMS',
    descricao:
      'Emita CT-e, MDF-e e DACTE integrados à SEFAZ, com conferência antes do envio e contingência automática. Menos rejeição e menos caminhão parado esperando documento.',
    h1: 'Emissão de CT-e e MDF-e sem retrabalho e sem rejeição',
    abertura:
      'O documento é o que libera o caminhão. Quando ele trava, para tudo: o motorista espera, o cliente cobra e o faturamento atrasa. A emissão no Aucom TMS foi feita para o documento sair certo na primeira tentativa.',
    dor: {
      titulo: 'Rejeição da SEFAZ com o caminhão carregado no pátio',
      texto:
        'Erro de CFOP, tomador errado, peso divergente, destinatário sem inscrição — a rejeição quase sempre vem de um dado que já estava errado antes do envio. O sistema confere isso antes, não depois.',
    },
    recursos: [
      {
        titulo: 'CT-e modelo 57 e CT-e OS',
        texto:
          'Emissão para carga fracionada, lotação, redespacho e subcontratação, com o tipo de tomador certo em cada caso.',
      },
      {
        titulo: 'MDF-e junto com a viagem',
        texto:
          'O manifesto é montado a partir dos CT-e da viagem, com veículo, motorista e percurso já preenchidos. Encerramento do MDF-e controlado, sem manifesto esquecido em aberto.',
      },
      {
        titulo: 'Conferência antes de transmitir',
        texto:
          'O sistema verifica os campos que mais causam rejeição e avisa antes do envio, com a mensagem em português — não com o código da SEFAZ.',
      },
      {
        titulo: 'Contingência quando a SEFAZ cai',
        texto:
          'A emissão continua em contingência e a transmissão é regularizada sozinha quando o serviço volta. O caminhão não fica esperando o governo.',
      },
      {
        titulo: 'DACTE impresso e por e-mail',
        texto:
          'DACTE gerado na hora, enviado ao tomador por e-mail e guardado junto do CT-e para consulta de qualquer estação.',
      },
      {
        titulo: 'Carta de correção e cancelamento',
        texto:
          'CC-e e cancelamento dentro do prazo legal, com histórico de quem fez e quando — o que salva na hora da fiscalização.',
      },
      {
        titulo: 'Guarda dos XML',
        texto:
          'Todos os XML emitidos e recebidos organizados por período, prontos para a contabilidade e para os 5 anos de guarda exigidos.',
      },
      {
        titulo: 'Série e numeração sob controle',
        texto:
          'Várias séries, numeração por filial e aviso de quebra de sequência antes que ela vire problema no fisco.',
      },
    ],
    faq: [
      {
        p: 'O sistema emite CT-e OS além do CT-e normal?',
        r: 'Sim. CT-e modelo 57 para transporte de carga e CT-e OS para prestação de serviço de transporte, cada um com as regras fiscais próprias.',
      },
      {
        p: 'Como funciona quando a SEFAZ está fora do ar?',
        r: 'A emissão entra em contingência automaticamente e você continua carregando. Quando o serviço volta, o sistema regulariza as transmissões pendentes sem que ninguém precise lembrar disso.',
      },
      {
        p: 'Consigo emitir de mais de uma filial?',
        r: 'Sim, com série e numeração próprias por filial, e visão consolidada da matriz.',
      },
    ],
    zap: 'Olá! Vim pela página de emissão de CT-e e MDF-e e quero saber mais sobre o sistema.',
  },

  'importacao-xml-nfe': {
    title: 'Importar XML de NF-e e Gerar CT-e sem Digitar | Aucom TMS',
    descricao:
      'Importe o XML da nota fiscal do embarcador e gere o CT-e sem digitação. Peso, valor, destinatário e chave da NF-e já preenchidos, com conferência automática.',
    h1: 'Importe o XML da nota e gere o CT-e sem digitar',
    abertura:
      'Toda transportadora conhece esta cena: a nota chega, alguém digita remetente, destinatário, peso, valor e a chave de 44 dígitos — e depois confere tudo de novo. É o trabalho mais repetitivo do escritório e o que mais gera rejeição.',
    dor: {
      titulo: 'Digitar nota por nota para emitir o conhecimento',
      texto:
        'Cada nota redigitada custa alguns minutos e abre espaço para erro de digitação. Numa carga fracionada com 30 notas, isso vira uma tarde inteira — e um CT-e rejeitado no fim do dia.',
    },
    recursos: [
      {
        titulo: 'O XML entra e vira CT-e',
        texto:
          'Importe o arquivo enviado pelo embarcador e o sistema preenche remetente, destinatário, peso, volume, valor da mercadoria e a chave da NF-e.',
      },
      {
        titulo: 'Várias notas em um conhecimento',
        texto:
          'Carga fracionada com muitas notas para o mesmo destino vira um CT-e só, com todas as chaves vinculadas corretamente.',
      },
      {
        titulo: 'Importação em lote',
        texto:
          'Selecione a pasta com os XML do dia e importe tudo de uma vez, com relatório do que entrou e do que precisa de atenção.',
      },
      {
        titulo: 'Conferência automática',
        texto:
          'O sistema compara peso e valor declarados, avisa nota duplicada e aponta divergência antes de gerar o conhecimento.',
      },
      {
        titulo: 'Cálculo do frete pela tabela',
        texto:
          'Com os dados da nota já no sistema, o frete é calculado pela tabela do cliente — por peso, valor, volume ou faixa de quilometragem.',
      },
      {
        titulo: 'Romaneio direto das notas',
        texto:
          'Da importação sai também o romaneio de carregamento, na ordem de entrega, sem redigitar nada.',
      },
    ],
    fechamento:
      'É o módulo que costuma pagar o sistema sozinho: o tempo que o escritório deixa de gastar digitando nota volta como capacidade de emitir mais, com menos erro.',
    faq: [
      {
        p: 'E se o embarcador não mandar o XML?',
        r: 'Dá para buscar a nota pela chave de acesso, quando ela está disponível, ou lançar manualmente. Mas na maioria das operações o embarcador envia o XML — e aí o ganho é imediato.',
      },
      {
        p: 'O sistema aceita XML de qualquer emissor?',
        r: 'Sim, o XML da NF-e segue layout nacional da SEFAZ. Não importa qual sistema o seu cliente usa para emitir.',
      },
    ],
    zap: 'Olá! Vim pela página de importação de XML de nota fiscal e quero saber como gerar CT-e sem digitar.',
  },

  'ciot-pagamento-de-frete': {
    title: 'Sistema para Emitir CIOT e Pagar Frete de Autônomo | Aucom',
    descricao:
      'Declaração de CIOT, pagamento eletrônico de frete ao motorista autônomo, adiantamento, saldo e prestação de contas da viagem — dentro do mesmo TMS.',
    h1: 'CIOT emitido junto com a viagem, não depois dela',
    abertura:
      'Contratar autônomo sem CIOT é multa na estrada e dor de cabeça na fiscalização. Quando a declaração é feita em sistema separado, ela sempre atrasa — e alguém descobre o problema com o caminhão já rodando.',
    dor: {
      titulo: 'CIOT feito depois, em outro sistema, por outra pessoa',
      texto:
        'A viagem sai, o CIOT fica para o fim do dia e o pagamento do autônomo vira uma planilha à parte. Quando alguém confere, adiantamento e saldo não batem com a viagem.',
    },
    recursos: [
      {
        titulo: 'CIOT gerado a partir da viagem',
        texto:
          'A operação de transporte já tem motorista, veículo, rota e valor do frete. A declaração do CIOT sai daí, sem redigitar.',
      },
      {
        titulo: 'Pagamento eletrônico de frete',
        texto:
          'Adiantamento, quitação e saldo do autônomo controlados por viagem, com o comprovante amarrado ao CIOT e ao CT-e.',
      },
      {
        titulo: 'Cadastro do autônomo e do agregado',
        texto:
          'RNTRC, dados bancários, veículo e histórico de viagens de quem já rodou para você.',
      },
      {
        titulo: 'Prestação de contas da viagem',
        texto:
          'Pedágio, abastecimento, adiantamento e despesas confrontados com o acerto final, para saber quanto sobrou de verdade.',
      },
      {
        titulo: 'Vale-pedágio junto',
        texto:
          'Controle do vale-pedágio obrigatório dentro da mesma viagem, sem controle paralelo.',
      },
      {
        titulo: 'Histórico para fiscalização',
        texto:
          'Cada CIOT com data, valor, viagem e responsável, pronto para apresentar quando a fiscalização pedir.',
      },
    ],
    faq: [
      {
        p: 'Quando o CIOT é obrigatório?',
        r: 'Sempre que a transportadora contrata transportador autônomo (TAC) para uma operação de transporte remunerado. A declaração precisa existir antes de o veículo rodar — por isso ela nasce junto da viagem no sistema.',
      },
      {
        p: 'O pagamento sai pelo sistema?',
        r: 'O sistema controla adiantamento, saldo e a prestação de contas, e se integra à instituição de pagamento usada pela transportadora. Quem opera o pagamento é a instituição; o controle e o vínculo com a viagem ficam aqui.',
      },
    ],
    zap: 'Olá! Vim pela página de CIOT e quero saber como funciona o pagamento de frete no sistema.',
  },

  'gestao-de-frota': {
    title: 'Sistema de Gestão de Frota para Transportadoras | Aucom',
    descricao:
      'Custo por veículo e por viagem, manutenção preventiva, pneus, combustível e acerto de agregados. Saiba quanto cada caminhão realmente dá de lucro.',
    h1: 'Gestão de frota própria e de agregados',
    abertura:
      'Faturamento alto e lucro baixo quase sempre têm a mesma explicação: um pedaço da frota trabalha no vermelho e ninguém sabe qual. Só dá para descobrir medindo veículo por veículo.',
    dor: {
      titulo: 'Saber o faturamento, mas não o custo por caminhão',
      texto:
        'Combustível, manutenção, pneu, pedágio e motorista entram no caixa geral. No fim do mês fecha, mas ninguém sabe qual rota paga e qual consome.',
    },
    recursos: [
      {
        titulo: 'Custo por veículo e por viagem',
        texto:
          'Cada despesa amarrada à placa e à viagem: combustível, manutenção, pneu, pedágio, motorista e agregado.',
      },
      {
        titulo: 'Manutenção preventiva',
        texto:
          'Plano por quilometragem ou por tempo, com aviso antes de vencer. Manutenção programada custa uma fração de quebrar na estrada.',
      },
      {
        titulo: 'Controle de pneus',
        texto:
          'Vida do pneu por posição no veículo, rodízio, recapagem e custo por quilômetro rodado.',
      },
      {
        titulo: 'Abastecimento e consumo',
        texto:
          'Média de consumo por veículo e por motorista, com desvio sinalizado — é onde aparece o abastecimento que não fecha.',
      },
      {
        titulo: 'Agregados e terceiros',
        texto:
          'Acerto de viagem do agregado, descontos, adiantamento e saldo, com o mesmo controle da frota própria.',
      },
      {
        titulo: 'Documentação do veículo',
        texto:
          'Licenciamento, seguro, rastreador e vistoria com data de vencimento e aviso antecipado.',
      },
    ],
    zap: 'Olá! Vim pela página de gestão de frota e quero saber mais sobre controle de custo por veículo.',
  },

  'controle-de-jornada': {
    title: 'Controle de Jornada do Motorista — Lei 13.103 | Aucom TMS',
    descricao:
      'Registro de jornada, escala, tempo de espera, horas extras e descanso conforme a Lei do Motorista, integrado à operação de transporte e à folha.',
    h1: 'Controle de jornada do motorista dentro da Lei',
    abertura:
      'A Lei do Motorista transformou jornada em risco trabalhista. Sem registro organizado, a transportadora descobre o problema na reclamação — e aí a conta já está formada.',
    dor: {
      titulo: 'Jornada em papel, planilha ou memória',
      texto:
        'Espera em cliente, descanso na estrada e hora extra ficam registrados de forma solta. Quando vira processo, a empresa não tem como provar o que aconteceu.',
    },
    recursos: [
      {
        titulo: 'Registro de jornada',
        texto:
          'Início, intervalos, espera, direção e descanso registrados no formato exigido, com o motorista identificado.',
      },
      {
        titulo: 'Tempo de espera',
        texto:
          'Espera em cliente registrada separadamente da direção — é a diferença que costuma pesar na apuração.',
      },
      {
        titulo: 'Escala e revezamento',
        texto:
          'Montagem de escala respeitando descanso obrigatório, inclusive em viagem com dois motoristas.',
      },
      {
        titulo: 'Horas extras e adicional noturno',
        texto:
          'Apuração automática do que é extra, noturno e de descanso não gozado, pronta para a folha.',
      },
      {
        titulo: 'Integração com a folha',
        texto: 'O que foi apurado vai para o cálculo sem redigitação e sem planilha intermediária.',
      },
      {
        titulo: 'Histórico que serve de prova',
        texto:
          'Registro guardado por motorista e por período, com trilha de alterações — o que a empresa precisa apresentar se for questionada.',
      },
    ],
    zap: 'Olá! Vim pela página de controle de jornada e quero saber como o sistema atende a Lei do Motorista.',
  },

  'roteirizacao-e-rastreamento': {
    title: 'Roteirização e Rastreamento de Cargas | Aucom TMS',
    descricao:
      'Montagem de rota de entrega, integração com rastreadores, acompanhamento da viagem e registro de ocorrências no momento em que acontecem.',
    h1: 'A carga na tela, do embarque à entrega',
    abertura:
      'Cliente que liga perguntando onde está a carga custa caro: ocupa o atendimento e passa insegurança. Quando a viagem está na tela, a resposta sai em segundos — ou o cliente consulta sozinho.',
    dor: {
      titulo: 'Descobrir o problema da entrega só quando o cliente reclama',
      texto:
        'Atraso, desvio de rota e entrega recusada aparecem tarde demais, quando já viraram reclamação e retrabalho.',
    },
    recursos: [
      {
        titulo: 'Montagem de rota',
        texto:
          'Sequência de entregas por região e por janela de recebimento, aproveitando melhor a capacidade do veículo.',
      },
      {
        titulo: 'Integração com rastreadores',
        texto:
          'A posição do veículo dos principais rastreadores do mercado aparece dentro do TMS, junto da viagem e do CT-e.',
      },
      {
        titulo: 'Acompanhamento da viagem',
        texto: 'Situação de cada carga em tempo real, com previsão de chegada e alerta de atraso.',
      },
      {
        titulo: 'Ocorrências registradas na hora',
        texto:
          'Cliente ausente, recusa, avaria ou atraso registrados pelo motorista, com foto e horário.',
      },
      {
        titulo: 'Histórico por rota e por cliente',
        texto:
          'Quais rotas atrasam sempre e quais clientes concentram ocorrência — informação para renegociar o frete com base em fato.',
      },
    ],
    zap: 'Olá! Vim pela página de roteirização e rastreamento e quero saber mais sobre o acompanhamento das cargas.',
  },

  'coleta-e-entrega': {
    title: 'Coleta, Entrega e Canhoto Digital para Transportadoras | Aucom',
    descricao:
      'Ordem de coleta, romaneio de carregamento, ocorrência de entrega e comprovante digital com o canhoto ligado ao CT-e.',
    h1: 'Do pedido de coleta ao canhoto digitalizado',
    abertura:
      'O ciclo só fecha quando o comprovante volta. Enquanto o canhoto está no bolso do motorista, a transportadora não fatura com segurança e não responde ao cliente.',
    dor: {
      titulo: 'Canhoto extraviado e cobrança travada',
      texto:
        'Sem comprovante de entrega, a cobrança fica em aberto e a discussão com o cliente não tem como ser resolvida.',
    },
    recursos: [
      {
        titulo: 'Ordem de coleta',
        texto:
          'Pedido do cliente registrado, distribuído ao veículo e acompanhado até virar conhecimento.',
      },
      {
        titulo: 'Romaneio de carregamento',
        texto: 'Carga montada na ordem de entrega, com conferência do que embarcou.',
      },
      {
        titulo: 'Comprovante digital',
        texto:
          'O motorista registra a entrega com assinatura e foto do canhoto pelo aplicativo, e o comprovante já fica ligado ao CT-e.',
      },
      {
        titulo: 'Ocorrência de entrega',
        texto:
          'Recusa, ausência, avaria e devolução com motivo padronizado — o que permite medir e cobrar melhoria.',
      },
      {
        titulo: 'Consulta pelo cliente',
        texto: 'O tomador acessa o comprovante sem precisar ligar para o seu atendimento.',
      },
    ],
    zap: 'Olá! Vim pela página de coleta e entrega e quero saber sobre o canhoto digital.',
  },

  'portal-do-embarcador': {
    title: 'Portal do Embarcador para Transportadoras | Aucom TMS',
    descricao:
      'Seu cliente acompanha a carga, consulta documentos e baixa comprovantes sozinho, sem ligar para o seu atendimento.',
    h1: 'Seu cliente acompanha a carga sem ligar para você',
    abertura:
      'Boa parte das ligações que chegam à transportadora é sempre a mesma pergunta: "cadê minha carga?". Cada uma dessas ligações ocupa alguém do seu time por alguns minutos e não gera receita nenhuma.',
    dor: {
      titulo: 'Atendimento parado respondendo status de carga',
      texto:
        'Quanto maior a operação, mais o telefone toca — e quem atende deixa de fazer o que realmente precisa ser feito.',
    },
    recursos: [
      {
        titulo: 'Acompanhamento pelo tomador',
        texto: 'O embarcador entra com login próprio e vê a situação de cada carga dele.',
      },
      {
        titulo: 'Documentos disponíveis',
        texto: 'DACTE, XML e comprovante de entrega para baixar sem pedir a ninguém.',
      },
      {
        titulo: 'Solicitação de coleta',
        texto: 'O cliente pede a coleta pelo portal e o pedido já entra na sua operação.',
      },
      {
        titulo: 'Menos telefone, mais serviço percebido',
        texto:
          'Transportadora com portal passa imagem de operação organizada — e isso ajuda na hora de disputar contrato com embarcador grande.',
      },
    ],
    zap: 'Olá! Vim pela página do portal do embarcador e quero saber como funciona para os meus clientes.',
  },
};
