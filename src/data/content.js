// Site content, taken from the current www.apsinesalgarve.pt.
export const OLD = "https://www.apsinesalgarve.pt";

// Main navigation. `path` is the URL in the new site.
export const ROUTES = [
  { id: "inicio", path: "/", label: "Início" },
  { id: "aps", path: "/aps", label: "A APS" },
  { id: "portos", path: "/portos", label: "Portos" },
  { id: "estatisticas", path: "/estatisticas", label: "Estatísticas" },
  { id: "sistemas", path: "/sistemas", label: "Sistemas" },
  { id: "noticias", path: "/noticias", label: "Notícias" },
  { id: "galeria", path: "/galeria", label: "Galeria" },
  { id: "contactos", path: "/contactos", label: "Contactos" }
];
export const EXTRA = [
  { path: "/portos/sines", label: "Porto de Sines" },
  { path: "/portos/faro", label: "Porto de Faro" },
  { path: "/portos/portimao", label: "Porto de Portimão" },
  { path: "/aps/governo", label: "Governo da Sociedade" },
  { path: "/contactos/visitas", label: "Visitas" },
  { path: "/recrutamento", label: "Recrutamento" }
];

// Photos for the Galeria page. Files live in public/gallery/.
// { file: "sines-01.jpg", caption: "…", port: "sines" | "portimao" | "faro" | null }
export const GALLERY = [
  { file: "sines-vista-aerea.jpg", caption: "Vista aérea do Porto e da cidade de Sines", port: "sines" },
  { file: "sines-terminal-xxi.jpg", caption: "Porta-contentores no Terminal XXI, Sines", port: "sines" },
  { file: "portimao-cruzeiros.jpg", caption: "Navios de cruzeiro no Porto de Portimão", port: "portimao" },
  { file: "faro-cais.jpg", caption: "Cais comercial do Porto de Faro", port: "faro" },
  { file: "sines-metaneiro.jpg", caption: "Navio metaneiro no Terminal de GNL, Sines", port: "sines" },
  { file: "sines-terminal-xxi-ferrovia.jpg", caption: "Terminal XXI e ligação ferroviária, Sines", port: "sines" },
  { file: "sines-multiusos.jpg", caption: "Pás eólicas no Terminal Multiusos, Sines", port: "sines" },
  { file: "sines-petroleiro.jpg", caption: "Petroleiro no Terminal de Granéis Líquidos, Sines", port: "sines" },
  { file: "sines-gnl-sede.jpg", caption: "Terminal de GNL e edifício-sede da APS, Sines", port: "sines" },
  { file: "sines-zal.jpg", caption: "Zona de Atividades Logísticas de Sines", port: "sines" },
  { file: "sines-sede.jpg", caption: "Edifício-sede da APS, visto de cima", port: "sines" }
];

export const PORTS = {
  sines: { name: "Sines", tint: [243, 146, 0], color: "var(--sines)", coord: "37°57′07″N 8°52′35″W", tag: "Águas profundas", hue: ["#0B3B8C", "#061527"],
    lead: "O Porto de Sines é um porto de águas profundas, líder nacional na quantidade de mercadorias movimentadas e apresenta condições naturais ímpares na costa portuguesa para acolher todos os tipos de navios.",
    short: "Porto de águas profundas, líder nacional em carga e contentores.",
    specs: [["Carga movimentada", "1.º em Portugal"], ["Contentores", "1.º em Portugal"], ["Terminais especializados", "5"], ["ZILS na retaguarda", "> 2.000 ha"], ["Em operação desde", "1978"], ["Rede TEN-T", "Corredor Atlântico"]],
    points: ["Líder nacional no total de carga movimentada nos portos nacionais e o porto português que mais contentores movimenta.", "Com equipamentos de última geração e recursos humanos altamente qualificados, apresenta elevados índices de produtividade.", "Fundamental no abastecimento energético do país, com a receção de crude e gás natural.", "Com ligações diretas aos principais mercados de produção e consumo mundiais, oferece às empresas do seu hinterland maior competitividade nos mercados externos."],
    terminals: ["Granéis Líquidos", "Petroquímico", "Multipurpose", "GNL", "Contentores"],
    link: ["portodesines.pt", "http://www.portodesines.pt"] },
  portimao: { name: "Portimão", tint: [0, 145, 207], color: "var(--portimao)", coord: "37°07′36″N 8°31′51″W", tag: "Cruzeiros", hue: ["#0E6C8A", "#061527"],
    lead: "O porto comercial de Portimão detém uma vocação essencialmente turística e tem-se afirmado como destino de cruzeiros, atraindo mais visitantes para a região do Algarve.",
    short: "Vocação turística, destino de cruzeiros entre o Mediterrâneo e o Atlântico.",
    specs: [["Cais", "330 m + Ro-Ro"], ["Terrapleno", "≈ 22.000 m²"], ["Navio até", "215 m"], ["Calado", "8 m"], ["Passageiros", "até 2.000"], ["Arqueação", "50.000 GT"]],
    points: ["Situado entre o Mediterrâneo e o Oceano Atlântico, tem uma localização estratégica para os navios de cruzeiro que navegam nestas rotas.", "Tem também capacidade para carga geral, com condicionantes de acessibilidade terrestre pela sua inserção na malha urbana.", "Restrito a cargas limpas compatíveis com as atividades marítimas de lazer.", "O Algarve é uma das zonas turísticas mais famosas do planeta, atraindo turistas de todo o mundo."],
    terminals: ["Cais de cruzeiros", "Cais Ro-Ro", "2 gruas"],
    link: null },
  faro: { name: "Faro", tint: [120, 172, 28], color: "var(--faro)", coord: "37°00′15″N 7°55′18″W", tag: "Carga regional", hue: ["#245E7A", "#061527"],
    lead: "O Porto de Faro apresenta-se com uma forte componente regional para o fomento da economia do Algarve.",
    short: "A escolha natural das empresas do Algarve para exportar.",
    specs: [["Cais", "200 m"], ["Terrapleno", "≈ 14.000 m²"], ["Navio até", "120 m"], ["Calado", "6,4 m"], ["Porte", "7.500 DWT"], ["Armazém", "1.000 m²"]],
    points: ["O cimento produzido na cimenteira da Cimpor, em Loulé, é a principal carga exportada, principalmente para a Argélia e para Cabo Verde.", "Movimenta também pedra, ferro e telha para Gibraltar, alfarroba para Inglaterra, sal de Olhão, sal-gema de Loulé e atum para o Japão.", "Equipado com 3 gruas, 2 empilhadores e 1 armazém de 1.000 m².", "Com uma forte importância regional, é a escolha natural das empresas localizadas no Algarve para exportar os seus produtos."],
    terminals: ["3 gruas", "2 empilhadores", "Armazém 1.000 m²"],
    link: null }
};

export const NEWS_RAW = [
  ["20/10", "Conferência - Ambiente, Proteção e Segurança – Do Risco à Resiliência | 28 e 29 de outubro"],
  ["19/10", "Portos de Sines e do Algarve reforçam parceria com a Comunidade Escolar e atribuem Bolsas de Estudo"],
  ["14/10", "Porto de Sines presente no 28º Congresso de Logística da APLOG"],
  ["12/10", "Porto de Sines em Madrid para promover segmento da carga refrigerada"],
  ["2/10", "Porto de Sines recebe a 9ª Conferência da APIBARRA"],
  ["29/9", "Porto de Sines recebe grupo de trabalho no âmbito do 13º Encontro Informal de Autoridades de Transporte da CIMAL"],
  ["27/9", "Porto de Sines marca presença no encerramento do Projeto MAGPIE"],
  ["22/9", "APS distinguida nos Prémios Alentejo 2026"],
  ["18/9", "Comunicado - Clube Náutico de Sines"],
  ["17/9", "Porto de Sines sublinha contributo da ferrovia para a competitividade na I Conferência Ibérica de Intermodalidade"],
  ["15/9", "APS integra Missão dos Portos Portugueses a Antuérpia e Roterdão"],
  ["4/9", "Mobilidade elétrica reforça resposta operacional no Porto de Sines"],
  ["2/9", "Comunicado - Novo Terminal de Carga Geral"],
  ["10/8", "Novo recorde de passageiros assinala fim de semana histórico no Porto de Portimão"],
  ["6/8", "Porto de Sines alcança novo máximo mensal em contentores e projeta crescimento do total de mercadorias"],
  ["27/7", "APS lança concurso de 4M de euros para a requalificação da Avenida Circular Sul e Porto de Serviços em Sines"],
  ["24/7", "Porto de Sines reforça compromisso com a excelência e segurança"],
  ["21/7", "Amarração do cabo submarino “Nuvem” destaca Sines na conectividade global"],
  ["15/7", "APS e Faculdade de Direito de Lisboa reforçam parceria para formação especializada em Direito Marítimo e Portuário"],
  ["30/6", "Porto de Sines presente na cerimónia de encerramento do Projeto NEXOMAR em Huelva"],
  ["24/6", "Porto de Sines assinala conclusão da Agenda NEXUS com a entrega de todos os produtos previstos"],
  ["22/6", "VIII Corrida do Porto reforça ligação entre o porto e a comunidade"],
  ["19/6", "Porto de Sines reforça presença internacional na Breakbulk Europe 2026"],
  ["9/6", "Sines passa a ter Alfândega própria"],
  ["3/6", "Arrancam novas formações na Port Cyber Arena no âmbito da Cibersegurança"],
  ["2/6", "Porto de Sines e Luanda reforçam cooperação estratégica em inovação, sustentabilidade e logística"],
  ["1/6", "APS investe em melhorias das infraestruturas portuárias do Porto de Sines"],
  ["1/6", "Edital nº644/2026 - Licença de Utilização Privativa do Domínio Público Hídrico"],
  ["29/5", "APS presente no 60º Torneio de Futebol da EMPA"],
  ["28/5", "APS reforça compromisso com a igualdade e inclusão no Fórum iGen"],
  ["25/5", "Porto de Sines reforça cooperação com o Brasil em missão integrada na AgroBrasília 2026"],
  ["18/5", "Porto de Sines recebe Missão Portuária Empresarial do Estado da Bahia"],
  ["14/5", "APS e ISEL estreitam colaboração entre academia e setor portuário"],
  ["13/5", "Porto de Sines reforça papel como motor económico do sul do país"],
  ["8/5", "APS e AES reforçam cooperação em prol do desenvolvimento da região de Sines"],
  ["7/5", "Comissão de Infraestruturas, Mobilidade e Habitação visita Porto de Sines"],
  ["29/4", "Nova subestação de alta tensão do Porto de Sines entra em funcionamento"],
  ["28/4", "Porto de Sines recebe visita da Embaixadora dos Países Baixos em Portugal"],
  ["27/4", "Diretor-Geral da Autoridade Marítima em visita ao Porto de Sines"],
  ["22/4", "Porto de Sines com presença reforçada na 20ª Edição da Singapore Maritime Week"],
  ["20/4", "Porto de Sines reforça presença no mercado brasileiro na Intermodal South America 2026"],
  ["13/4", "Concluídas as dragagens de manutenção no Porto de Portimão antes da data prevista"],
  ["10/4", "Portos de Sines e do Algarve destacam-se nas áreas da Conciliação, Bem-estar e Responsabilidade Social"],
  ["10/4", "Porto de Sines recebe a visita dos alunos da Escola Superior Náutica Infante D.Henrique"],
  ["23/3", "APS participa no H2-Diplo Dialogue e sublinha papel de Sines na transição energética europeia"],
  ["12/3", "Concessão do Serviço Público de Reboque e Amarração nos Portos de Sines e de Portimão"],
  ["11/3", "Porto de Sines posiciona-se como hub ibérico do hidrogénio no primeiro Fórum Hispano-Luso do Hidrogénio Verde"],
  ["9/3", "Remoção de Embarcações – Canal de Navegação da Bacia de Ferragudo"],
  ["2/3", "Arrancam dragagens no Porto de Portimão"],
  ["26/2", "APS anfitriã do lançamento de obra sobre responsabilidades das autoridades portuárias no serviço de pilotagem"],
  ["19/2", "Sines e Portimão mais próximos dos Portos de Cabo Verde"],
  ["10/2", "Sines corrige fundos e aprimora condições de operacionalidade no Terminal XXI"]
];
export const NEWS_CATS = ["Todas", "Sines", "Algarve", "Institucional", "Avisos"];
export const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
export const catOf = t => /^(Comunicado|Edital)/.test(t) ? "Avisos" : /Portimão|Faro|Algarve|Ferragudo/.test(t) ? "Algarve" : /Sines/.test(t) ? "Sines" : "Institucional";
export const TOPIC = t => /hidrog|energ|subesta|elétric|descarbon/i.test(t) ? "Energia" : /Conferência|Congresso|Fórum|Week|Europe|Intermodal|Missão|AgroBras/i.test(t) ? "Eventos" : /dragag|obra|infraestrutur|requalifica|Terminal|fundos/i.test(t) ? "Obras" : null;
export const NEWS = NEWS_RAW.map(([d, t], i) => { const [dd, mm] = d.split("/"); return { i, day: dd.padStart(2, "0"), m: MONTHS[+mm - 1], mi: +mm, t, c: catOf(t), topic: TOPIC(t) }; });
export const THUMBS = [["#FDC300", "#3A2A06"], ["#F39200", "#3A1E06"], ["#0091CF", "#06263A"], ["#78AC1C", "#1E2A08"], ["#A4A4AE", "#26262B"]];

export const RECIPIENTS = ["Geral APS", "Sistemas de Informação", "Comunicação", "Pilotagem, Controlo e Operações Marítimas", "Centro de Despacho de Navios", "Porto de Recreio de Sines", "Concessões e Áreas Dominiais", "ZALSINES", "Qualidade", "Ambiente", "Segurança", "ISPS", "Financeira e Económica", "Recursos Humanos", "Assuntos Jurídicos", "Infraestruturas e Ordenamento", "Provedor do Cliente", "Encarregado/a de Proteção de Dados (EPD)"];

export const GOV_DOCS = ["Estratégia", "Portos 5+", "Sistema Integrado de Gestão", "Código de Ética e de Conduta", "Prevenção de Riscos de Compliance", "Relatórios de Gestão e Contas", "Relatório do Governo Societário", "Relatórios de Sustentabilidade", "Planos de Atividades e Orçamento", "Procedimentos de Contratação", "Informação Trimestral de Gestão", "Plano para a Igualdade", "Igualdade Remuneratória", "Outra Informação"];


export const PORT_IDS = ["sines", "portimao", "faro"];

export const SOCIAL = [
  ["Facebook", "https://www.facebook.com/portosdesinesedoalgarve/"],
  ["LinkedIn", "https://www.linkedin.com/company/aps---administra%C3%A7%C3%A3o-dos-portos-de-sines-e-do-algarve-s.a./"],
  ["Instagram", "https://www.instagram.com/portodesines1971/"],
  ["YouTube", "https://www.youtube.com/channel/UCDwlu_-UoOaoDTgcDs4QElw"],
  ["X", "https://twitter.com/apsinesalgarve"],
  ["Flickr", "https://www.flickr.com/photos/146404026@N03/albums"]
];
