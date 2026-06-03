const ALBUM_CONFIG = {
  titulo: 'Da Cozinha ao Solo',
  subtitulo: 'Álbum Educativo sobre Fertilizantes Orgânicos',
  totalFigurinhas: 36,
  figurinhasPorPacote: 3,
  pacotesIniciais: 3,
  storageKey: 'album_da_cozinha_ao_solo_v6'
};

const PAGINAS = [
  { titulo:'Capa', tipo:'capa', texto:'Ciência, sustentabilidade e reaproveitamento de resíduos para nutrir a vida.', figurinhas:[] },
  { titulo:'Preparação dos Resíduos', texto:'A jornada começa com a seleção correta dos resíduos orgânicos. Cascas, borra, ossos e folhas deixam de ser lixo e passam a ser matéria-prima para biofertilizantes.', figurinhas:[1,2,3,4,5,6] },
  { titulo:'Extrações Minerais', texto:'O vinagre de álcool ajuda a extrair minerais presentes nas cascas de ovos e nos ossos. O processo deve ser feito em recipiente de vidro e com saída para gases.', figurinhas:[7,8,9,10,11,12] },
  { titulo:'Fermentações Naturais', texto:'Cascas de banana, borra de café, folhas saudáveis e açúcar mascavo participam de processos simples de fermentação que geram concentrados nutritivos.', figurinhas:[13,14,15,16,17,18] },
  { titulo:'Diluição e Uso Correto', texto:'Os concentrados são fortes e precisam ser diluídos antes do uso. A aplicação correta é feita no solo ao redor das plantas, evitando excesso.', figurinhas:[19,20,21,22,23,24] },
  { titulo:'Resultados nas Plantas', texto:'Com manejo adequado, os fertilizantes fortalecem o solo, favorecem raízes, folhas, flores e frutos, além de estimular vida no chão.', figurinhas:[25,26,27,28,29,30] },
  { titulo:'Horta e Educação Ambiental', texto:'O projeto ganha força quando chega à escola, à horta pedagógica e à comunidade, transformando ciência em aprendizagem prática.', figurinhas:[31,32,33,34,35,36] },
  { titulo:'Contracapa', tipo:'contracapa', texto:'Transformar resíduos em nutrientes é transformar conhecimento em prática. Pequenas ações podem gerar grandes mudanças.', figurinhas:[] }
];

const FIGURINHAS = [
  {id:1,titulo:'Do Resíduo ao Nutriente',resumo:'Visão geral da transformação dos resíduos em fertilizantes naturais.',detalhes:'Esta figurinha apresenta a ideia central do álbum: resíduos domésticos como casca de ovo, casca de banana, borra de café, ossos e folhas podem ser reaproveitados como fonte de nutrientes para o solo e para as plantas. O objetivo é mostrar que aquilo que seria descartado pode virar conhecimento, economia e sustentabilidade.'},
  {id:2,titulo:'Cascas sem Película',resumo:'Remoção da película interna para evitar mau cheiro.',detalhes:'Antes de usar cascas de ovos na extração de cálcio, é importante retirar a película interna. Essa película pode acelerar o mau cheiro durante o processo. As cascas devem ser lavadas, secas e preparadas com cuidado para melhorar a qualidade do extrato.'},
  {id:3,titulo:'Cascas Quebradas',resumo:'Cascas quebradas em pedaços pequenos aumentam a área de contato.',detalhes:'As cascas de ovos devem ser quebradas em pedaços pequenos. Quanto maior a área de contato com o vinagre, melhor será a reação. Esse preparo facilita a extração do cálcio e torna o processo mais eficiente dentro da garrafa de vidro.'},
  {id:4,titulo:'Cálcio no Vidro',resumo:'Garrafa de vidro com 15% de cascas e vinagre até completar.',detalhes:'Para a extração de cálcio, use uma garrafa de vidro de aproximadamente 300 ml. Coloque cerca de 15% do volume da garrafa com cascas de ovos quebradas e complete até em cima com vinagre de álcool. O recipiente deve ser de vidro, pois o processo gera reação e liberação de gás.'},
  {id:5,titulo:'Reação por 5 Dias',resumo:'Tampa apenas encostada para liberar o gás gerado.',detalhes:'A mistura de casca de ovo com vinagre deve reagir por 5 dias. A tampa não deve ser fechada com força; ela deve ficar apenas encostada para permitir a saída do gás gerado durante a reação. Esse cuidado evita pressão dentro do recipiente.'},
  {id:6,titulo:'Extrato de Cálcio',resumo:'Concentrado mineral obtido das cascas de ovos.',detalhes:'Após o período de reação, o extrato de cálcio fica concentrado e deve ser usado apenas diluído em água. O cálcio auxilia no fortalecimento das plantas, ajuda na estrutura vegetal e contribui para o desenvolvimento saudável.'},
  {id:7,titulo:'Ossos Preparados',resumo:'Ossos de boi limpos e quebrados para extração mineral.',detalhes:'Os ossos de boi podem ser reaproveitados como fonte mineral. Eles devem estar limpos, secos e quebrados em pedaços pequenos antes de serem colocados no vinagre. A proposta é aproveitar minerais que normalmente seriam descartados.'},
  {id:8,titulo:'Ossos + Vinagre',resumo:'Mesmo processo das cascas de ovos, em vidro.',detalhes:'A extração de fósforo dos ossos segue lógica semelhante à extração do cálcio. Em uma garrafa de vidro de 300 ml, coloque cerca de 15% de ossos quebrados e complete com vinagre de álcool. Use vidro e mantenha saída para gases.'},
  {id:9,titulo:'Extração de Fósforo',resumo:'Reação dos ossos com vinagre durante 5 dias.',detalhes:'Os ossos em vinagre devem permanecer por aproximadamente 5 dias, com a tampa apenas encostada. O processo ajuda a liberar minerais importantes, especialmente associados ao fortalecimento das raízes e ao desenvolvimento das plantas.'},
  {id:10,titulo:'Fósforo Pronto',resumo:'Concentrado mineral para diluição e uso no solo.',detalhes:'O extrato de fósforo é um concentrado e não deve ser aplicado puro. Após coar, deve ser armazenado e diluído em água antes da aplicação. O fósforo é associado ao desenvolvimento radicular e à energia da planta.'},
  {id:11,titulo:'4 Cascas de Banana',resumo:'Proporção de 4 cascas para 1 litro de água.',detalhes:'Para produzir o extrato de potássio, use 4 cascas de banana para 1 litro de água. A banana é um resíduo comum e pode contribuir para o vigor das plantas quando usada corretamente no processo de fermentação.'},
  {id:12,titulo:'Balde com Saída de Ar',resumo:'Fermentação em recipiente plástico tampado.',detalhes:'A fermentação da casca de banana deve ser feita em recipiente plástico, como um balde tampado, com uma pequena saída de ar. Esse detalhe permite a liberação dos gases produzidos durante a fermentação e evita pressão interna.'},
  {id:13,titulo:'Potássio por 3 Dias',resumo:'Fermentação em água durante 3 dias.',detalhes:'As cascas de banana devem ficar em água por cerca de 3 dias. Ao final do processo, o líquido deve ser coado e usado como concentrado. O potássio está relacionado ao vigor, florescimento e frutificação das plantas.'},
  {id:14,titulo:'Extrato de Potássio',resumo:'Concentrado obtido da casca de banana.',detalhes:'O extrato de potássio é resultado da fermentação das cascas de banana em água. Ele precisa ser diluído antes da aplicação. Usado com equilíbrio, contribui para plantas mais vigorosas e produtivas.'},
  {id:15,titulo:'Borra de Café',resumo:'4 colheres de sopa de borra para 1 litro de água.',detalhes:'A borra de café pode ser usada na produção de um extrato associado ao nitrogênio e à matéria orgânica. A proporção indicada é 4 colheres de sopa de borra de café para 1 litro de água.'},
  {id:16,titulo:'Fermentação do Café',resumo:'Mesmo sistema do potássio, em recipiente plástico.',detalhes:'A borra de café pode fermentar em água usando o mesmo sistema do potássio: recipiente plástico tampado com pequena saída de ar. O processo deve ser controlado e o produto final precisa ser diluído antes de ir ao solo.'},
  {id:17,titulo:'Extrato de Nitrogênio',resumo:'Concentrado da borra de café para plantas folhosas.',detalhes:'O extrato produzido com borra de café é associado ao fornecimento de nitrogênio e matéria orgânica. O nitrogênio é importante para o crescimento vegetativo, especialmente folhas e parte aérea das plantas.'},
  {id:18,titulo:'Folhas Saudáveis',resumo:'1 kg de folhas picadas para captar microrganismos.',detalhes:'Folhas de plantas saudáveis podem ser usadas para produzir microrganismos naturais. O ideal é escolher folhas com boa aparência, picar cerca de 1 kg e usar como base para o processo de fermentação com açúcar mascavo.'},
  {id:19,titulo:'Açúcar Mascavo',resumo:'1 kg de folhas picadas com 1 kg de açúcar mascavo.',detalhes:'A mistura de 1 kg de folhas picadas com 1 kg de açúcar mascavo em recipiente de vidro de 2 litros ajuda a ativar microrganismos naturais. O açúcar funciona como alimento para os microrganismos durante o processo.'},
  {id:20,titulo:'Uma Semana de Fermentação',resumo:'Microrganismos naturais em vidro por 7 dias.',detalhes:'A produção de microrganismos naturais deve ficar em repouso por cerca de uma semana. O recipiente indicado é de vidro, com capacidade aproximada de 2 litros. O resultado é um concentrado biológico que ajuda a vida do solo.'},
  {id:21,titulo:'Microrganismos Naturais',resumo:'Concentrado biológico para solo vivo.',detalhes:'Os microrganismos naturais colaboram com a decomposição da matéria orgânica, a atividade biológica do solo e o equilíbrio do ambiente de cultivo. Eles não substituem o manejo correto, mas fortalecem a vida do solo.'},
  {id:22,titulo:'Diluição 1 por 1000',resumo:'1 ml de concentrado para 1000 ml de água.',detalhes:'Todos os concentrados devem ser diluídos antes do uso. Uma referência segura é usar 1 ml de concentrado para 1000 ml de água. A diluição evita excesso de nutrientes e reduz risco de prejudicar as plantas.'},
  {id:23,titulo:'Tampinha para 5 Litros',resumo:'Uma tampinha PET de cada concentrado em 5 litros de água.',detalhes:'Na prática, pode-se usar uma tampinha de garrafa PET de cada concentrado em 5 litros de água. A mistura deve ser usada para regar o solo ao redor das plantas, sempre com equilíbrio e observação.'},
  {id:24,titulo:'Rega no Solo',resumo:'Aplicação ao redor da planta, não nas folhas.',detalhes:'O fertilizante diluído deve ser aplicado no solo, ao redor da planta. A ideia é nutrir a região das raízes, onde os minerais serão absorvidos aos poucos. Evite exageros e observe a resposta das plantas.'},
  {id:25,titulo:'Ação no Solo',resumo:'Imagem tipo raio X mostrando nutrientes e raízes.',detalhes:'Esta figurinha mostra, de forma ilustrativa, como o fertilizante age no solo. Os nutrientes diluídos se espalham ao redor das raízes, enquanto microrganismos e matéria orgânica ajudam a melhorar a estrutura e a vida do solo.'},
  {id:26,titulo:'Minhocas no Chão',resumo:'Solo vivo, escuro e rico em organismos.',detalhes:'A presença de minhocas é sinal de solo com vida. Elas ajudam a arejar a terra, movimentar matéria orgânica e melhorar a estrutura do solo. Um solo vivo favorece plantas mais saudáveis.'},
  {id:27,titulo:'Tomate Cereja',resumo:'Pés de tomate cereja sendo regados.',detalhes:'O tomate cereja pode ser usado como planta demonstrativa para observar os efeitos dos fertilizantes orgânicos. A rega deve ocorrer ao redor da planta, com produto diluído, acompanhando o vigor das folhas e frutos.'},
  {id:28,titulo:'Pimentão Amarelo',resumo:'Planta produtiva recebendo nutrição orgânica.',detalhes:'O pimentão amarelo representa culturas que exigem solo bem nutrido. A aplicação equilibrada de extratos minerais e biológicos pode ajudar no desenvolvimento saudável da planta e na produção dos frutos.'},
  {id:29,titulo:'Pimentão Vermelho',resumo:'Cultivo com frutos vermelhos e solo nutrido.',detalhes:'O pimentão vermelho mostra a importância da nutrição adequada para frutos bem formados. O manejo com fertilizantes orgânicos deve ser feito com diluição correta, respeitando a resposta da planta.'},
  {id:30,titulo:'Pimentão Verde',resumo:'Planta saudável em canteiro orgânico.',detalhes:'O pimentão verde simboliza o resultado de um solo equilibrado e bem manejado. A observação do crescimento, cor das folhas e frutificação ajuda a avaliar o efeito do fertilizante.'},
  {id:31,titulo:'Cebolinha',resumo:'Folhosa simples para horta escolar ou doméstica.',detalhes:'A cebolinha é uma cultura fácil de observar em projetos escolares. Seu crescimento foliar permite acompanhar visualmente a resposta ao manejo do solo e ao uso de fertilizantes orgânicos diluídos.'},
  {id:32,titulo:'Cheiro-Verde',resumo:'Salsinha e cebolinha em solo fértil.',detalhes:'O cheiro-verde reúne plantas muito usadas na alimentação diária. Ele representa a ligação entre horta, cozinha e sustentabilidade, mostrando como o reaproveitamento de resíduos pode retornar em forma de alimento.'},
  {id:33,titulo:'Frutíferas em Geral',resumo:'Frutíferas sendo regadas com regador no solo.',detalhes:'Frutíferas como acerola, goiaba, mamão e citros também podem receber fertilizante orgânico diluído. A aplicação deve ser feita com regador ao redor da base da planta, no solo, favorecendo a absorção pelas raízes.'},
  {id:34,titulo:'Horta Pedagógica',resumo:'Espaço escolar de aprendizagem prática.',detalhes:'A horta pedagógica transforma o conteúdo em experiência. Nela, os estudantes podem observar o solo, preparar fertilizantes, acompanhar as plantas e relacionar ciência, alimentação e meio ambiente.'},
  {id:35,titulo:'Aprendendo na Horta',resumo:'Estudantes cuidando das plantas e registrando resultados.',detalhes:'Aprender na horta fortalece o protagonismo estudantil. Os alunos podem medir, comparar, registrar e apresentar resultados, desenvolvendo pensamento científico e responsabilidade ambiental.'},
  {id:36,titulo:'Horta Comunitária',resumo:'Comunidade participando do cultivo sustentável.',detalhes:'A horta comunitária amplia o impacto do projeto para além da escola. Ela envolve famílias, estudantes e moradores, promovendo alimentação saudável, educação ambiental e cooperação social.'}
];

const SIMULADOS = [
  {id:'s1',titulo:'Simulado 1 — Resíduos e Sustentabilidade',perguntas:[
    ['Qual é a ideia central do projeto?', ['Transformar resíduos orgânicos em fertilizantes naturais','Jogar resíduos no lixo comum','Comprar adubo químico industrial','Substituir todas as plantas por artificiais'],0],
    ['Qual resíduo é usado para extrair cálcio?', ['Casca de ovo','Plástico','Papelão','Vidro'],0],
    ['Por que reaproveitar resíduos orgânicos?', ['Reduz o lixo e gera nutrientes','Aumenta o desperdício','Impede o cultivo','Não tem utilidade'],0],
    ['O álbum digital serve para:', ['Divulgar o conhecimento de forma educativa','Guardar senhas','Vender produtos químicos','Substituir a feira'],0],
    ['Qual prática combina com educação ambiental?', ['Reaproveitar materiais orgânicos','Queimar lixo no quintal','Desperdiçar alimentos','Misturar tudo no esgoto'],0],
    ['A borra de café pode contribuir com:', ['Matéria orgânica e nutrientes','Plástico no solo','Metal pesado','Areia limpa'],0],
    ['O solo vivo depende de:', ['Organismos, matéria orgânica e equilíbrio','Apenas cimento','Somente pedras','Produtos sem diluição'],0],
    ['Qual material vem da cozinha e pode virar fertilizante?', ['Casca de banana','Pilhas usadas','Óleo de motor','Tinta'],0],
    ['O projeto une:', ['Ciência, sustentabilidade e educação','Somente decoração','Apenas esporte','Somente matemática financeira'],0],
    ['O melhor destino para resíduos orgânicos aproveitáveis é:', ['Reuso em compostos e biofertilizantes','Descarte sem separação','Queima','Abandono na rua'],0]
  ]},
  {id:'s2',titulo:'Simulado 2 — Cálcio e Fósforo',perguntas:[
    ['A película da casca de ovo deve ser retirada para:', ['Evitar mau cheiro','Aumentar o plástico','Colorir o vinagre','Impedir reação'],0],
    ['O recipiente indicado para casca de ovo com vinagre é:', ['Vidro','Papel','Isopor aberto','Saco plástico fino'],0],
    ['Na garrafa de 300 ml, as cascas ocupam cerca de:', ['15% do volume','100% do volume','Metade exata','Apenas a tampa'],0],
    ['A tampa deve ficar apenas encostada porque:', ['Há liberação de gás','Precisa entrar inseto','O líquido evapora todo','Não existe reação'],0],
    ['O tempo sugerido para a reação com vinagre é:', ['5 dias','5 minutos','50 dias','1 ano'],0],
    ['Ossos de boi podem fornecer principalmente:', ['Fósforo e cálcio','Açúcar','Sal de cozinha','Óleo'],0],
    ['O vinagre atua como:', ['Meio de extração mineral','Inseticida obrigatório','Corante','Semente'],0],
    ['O extrato mineral deve ser aplicado:', ['Diluído em água','Puro e em excesso','Direto nas folhas ao sol','Sem controle'],0],
    ['O fósforo está ligado ao desenvolvimento de:', ['Raízes','Plástico','Vidro','Ferrugem'],0],
    ['A extração de ossos também deve usar:', ['Recipiente de vidro','Papel molhado','Caixa de papelão','Saco fechado sem saída'],0]
  ]},
  {id:'s3',titulo:'Simulado 3 — Potássio e Nitrogênio',perguntas:[
    ['A proporção do extrato de banana é:', ['4 cascas para 1 litro de água','1 casca para 10 litros de óleo','10 cascas sem água','4 cascas para areia seca'],0],
    ['O recipiente do potássio pode ser:', ['Balde plástico tampado com saída de ar','Garrafa totalmente lacrada','Papelão molhado','Panela no fogo o tempo todo'],0],
    ['O tempo de fermentação da casca de banana é:', ['3 dias','3 minutos','30 anos','Meio segundo'],0],
    ['O potássio ajuda principalmente em:', ['Vigor, flores e frutos','Queima de folhas','Secagem do solo','Ausência de raízes'],0],
    ['A borra de café usa a proporção:', ['4 colheres de sopa para 1 litro de água','1 saco de cimento para 1 litro','10 litros de óleo','Nenhuma água'],0],
    ['A borra de café é associada ao:', ['Nitrogênio e matéria orgânica','Plástico e tinta','Vidro e metal','Sal e gasolina'],0],
    ['O extrato de café deve ser:', ['Fermentado e diluído','Aplicado seco em excesso sempre','Misturado com gasolina','Usado sem controle'],0],
    ['O nitrogênio favorece:', ['Crescimento vegetativo e folhas','Enferrujamento','Secagem completa','Morte do solo'],0],
    ['A saída de ar no balde serve para:', ['Liberar gases da fermentação','Entrar sujeira','Evaporar tudo','Impedir fermentação'],0],
    ['Todo concentrado deve ser usado com:', ['Diluição e observação','Excesso diário','Mistura com cloro','Sem água'],0]
  ]},
  {id:'s4',titulo:'Simulado 4 — Microrganismos e Diluição',perguntas:[
    ['Para produzir microrganismos naturais, usam-se:', ['Folhas saudáveis e açúcar mascavo','Plástico e tinta','Água sanitária e sal','Areia seca e óleo'],0],
    ['A proporção indicada é:', ['1 kg de folhas + 1 kg de açúcar mascavo','1 folha para 10 kg de sal','2 litros de óleo','Sem folhas'],0],
    ['O recipiente indicado é:', ['Vidro de 2 litros','Papelão aberto','Saco rasgado','Metal enferrujado'],0],
    ['O tempo de fermentação dos microrganismos é:', ['1 semana','1 minuto','1 hora exata','10 anos'],0],
    ['Microrganismos ajudam:', ['A vida do solo e decomposição','A matar todas as raízes','A secar a terra','A produzir plástico'],0],
    ['A diluição segura citada é:', ['1 ml para 1000 ml de água','1 litro puro em uma muda','Sem água','100 ml para 1 gota'],0],
    ['Na prática, pode-se usar:', ['Uma tampinha PET em 5 litros de água','Uma garrafa inteira pura','Um balde de sal','Óleo diesel'],0],
    ['A aplicação deve ser feita:', ['No solo ao redor da planta','Somente nas flores ao meio-dia','Em folhas com excesso','No cimento'],0],
    ['Diluir é importante para:', ['Evitar excesso e proteger a planta','Aumentar mau cheiro','Impedir absorção','Eliminar água'],0],
    ['O concentrado biológico contribui para:', ['Solo mais vivo','Solo morto','Mais lixo','Menos aprendizagem'],0]
  ]},
  {id:'s5',titulo:'Simulado 5 — Horta e Aplicação',perguntas:[
    ['Tomate cereja pode ser usado para:', ['Observar resultados da adubação','Guardar vinagre fechado','Substituir o solo','Produzir plástico'],0],
    ['Pimentões representam:', ['Culturas que respondem à nutrição equilibrada','Objetos sem vida','Ferramentas de corte','Resíduos perigosos'],0],
    ['Cebolinha e cheiro-verde são úteis porque:', ['Permitem observar crescimento foliar','Não precisam de solo','São feitos de vidro','Não têm relação com horta'],0],
    ['Frutíferas devem receber o produto:', ['Com regador no solo ao redor da base','Com carrinho de insumos secos sempre','Direto no tronco sem diluição','Sobre cimento'],0],
    ['Minhocas indicam:', ['Solo vivo e equilibrado','Solo de plástico','Ausência de matéria orgânica','Falta total de vida'],0],
    ['A imagem tipo raio X mostra:', ['Nutrientes alcançando raízes','Plantas sem solo','Apenas decoração','Um carrinho de compras'],0],
    ['A horta pedagógica serve para:', ['Aprender ciência na prática','Apenas enfeitar parede','Guardar lixo','Impedir pesquisa'],0],
    ['A horta comunitária fortalece:', ['Cooperação e sustentabilidade','Isolamento','Desperdício','Queima de resíduos'],0],
    ['O registro de resultados ajuda a:', ['Comparar crescimento e observar efeitos','Apagar dados','Evitar aprendizagem','Misturar respostas'],0],
    ['O projeto final apresenta:', ['Pesquisa, prática e álbum educativo','Somente desenho sem conteúdo','Apenas venda de produto','Só brincadeira'],0]
  ]}
];
