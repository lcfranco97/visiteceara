

export async function GET() {
  const pontos = [
    {
      nome: "Praia de Jericoacoara",
      coords: [-2.7956, -40.5123],
      descricao: "Jericoacoara é uma praia localizada na vila homônima, no município de Jijoca de Jericoacoara, no estado do Ceará, no Brasil. Está localizada a 295 km a oeste da capital do estado, Fortaleza. Foi eleita em 1994 pelo jornal estadunidense The Washington Post uma das dez praias mais bonitas do planeta.",
      categoria: "Praia",
      imagem: "https://montesclarosecoturismo.com.br/wp-content/uploads/2023/11/lagoaazul.jpg"
    },
    {
        nome: "Praia da Beira Mar",
        coords: [-3.7183, -38.5057],
        descricao: "A Praia de Iracema, praia do Meireles e praia do Mucuripe formam a região da Beira Mar de Fortaleza. Essa área é conhecida por sua orla, que inclui um calçadão largo, restaurantes, hotéis e a Feirinha da Beira Mar. É um local popular para caminhadas, prática de esportes e atividades de lazer. ",
        categoria: "Praia",
        imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3097328:1692634373/beira-mar-Fortaleza.jpeg?f=default&$p$f=b8387b2"
    },
    {
      nome: "Canoa Quebrada",
      coords: [-4.5271, -37.7083],
      descricao: "Canoa Quebrada é uma praia localizada no litoral leste do Estado do Ceará, Distante 163 km de Fortaleza e 12 km da sede do município de Aracati, à qual pertence. A sua paisagem é caracterizada por dunas e falésias avermelhadas de até trinta metros acima do nível do mar.",
      categoria: "Praia",
      imagem: "https://tourfacil.s3.amazonaws.com/tour-facil/servicos/tour-praia-de-canoa-quebrada-6695bd7bed83b-large.jpg?quality=75"
    },
    {
      nome: "Praia do Futuro",
      coords: [-3.7550, -38.4700],
      descricao: "A Praia do Futuro é uma praia famosa em Fortaleza, conhecida por suas grandes barracas de praia, ondas fortes e atividades esportivas como kitesurf e surfe. É um destino popular tanto para moradores quanto para turistas, especialmente nos fins de semana, devido à sua estrutura e atmosfera animada. ",
      categoria: "Praia",
      imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1d/92/71/praia-do-futuro.jpg?w=1200&h=-1&s=1"
    },
    {
      nome: "Centro Dragão do Mar de Arte e Cultura",
      coords: [-3.7184, -38.5433],
      descricao: "O Centro Dragão do Mar de Arte e Cultura (CDMAC) é um centro cultural, um dos maiores do Brasil, localizado em Fortaleza, Ceará. São 30 mil metros quadrados de área dedicada à arte e à cultura, com atrações como o Museu da Cultura Cearense, o Museu de Arte Contemporânea do Ceará, Planetário Rubens de Azevedo, Teatro Dragão do Mar, Salas do Cinema do Dragão, Anfiteatro Sérgio Mota, Espaço Rogaciano Leite Filho, Biblioteca Leonilson, Auditório, Multigalerias e espaços para exposições itinerantes e a Praça Verde, que abriga mais de quatro mil pessoas e também grandes shows nacionais e internacionais.[1]",
      categoria: "Cultura",
      imagem: "https://www.ceara.gov.br/wp-content/uploads/2019/04/Arquitetura-Drag%C3%A3o_Luiz-Alves-180-of-243.jpg"
    },
    {
      nome: "Mercado Central de Fortaleza",
      coords: [-3.7227, -38.5277],
      descricao: "O Mercado Central de Fortaleza é um mercado especializado em produtos artesanais cearenses localizado na cidade de Fortaleza, Ceará, Brasil. É de propriedade da prefeitura municipal. Está localizado no Centro da cidade ao lado da Catedral de Fortaleza e da Fortaleza de Nossa Senhora da Assunção, e foi construído ao lado da margem esquerda do Riacho Pajeú, que corta a região.",
      categoria: "Cultura",
      imagem: "https://praiasdoceara.com.br/wp-content/uploads/2025/01/mercado-central-de-fortaleza-3.webp"
    },
    {
      nome: "Beach Park",
      coords: [-3.8423, -38.3934],
      descricao: "Beach Park é um destino turístico do litoral do Nordeste do Brasil, na praia de Porto das Dunas, município de Aquiraz, a 15 minutos de Fortaleza. Seu parque aquático é considerado o maior da América Latina, distribuído numa área total de 20.000 m² e 13 km² de área específica do parque aquático.",
      categoria: "Aventura",
      imagem: "https://www.umviajante.com.br/wp-content/uploads/2018/11/beach-park-fortaleza-ceara.jpg"
    },
    {
      nome: "Parque Nacional de Ubajara",
      coords: [-3.8671, -40.9183],
      descricao: "O Parque Nacional de Ubajara é Unidade de Conservação de Proteção Integral localizada na região da Serra da Ibiapaba, no estado do Ceará, Brasil. Possui uma área de 6 299 ha. O perímetro do parque é de 63 604,263 m.",
      categoria: "Aventura",
      imagem: "https://universodosparques.com.br/wp-content/uploads/2025/05/parque-nacional-de-ubajara.webp"
    },
    {
      nome: "Pedra Furada",
      coords: [-2.8026, -40.5114],
      descricao: "A Pedra Furada é o grande símbolo de Jericoacoara. Trata-se de uma grande rocha em forma de arco, esculpida pela ação das ondas. Ela fica na Região Rochosa de Jeri, que se estende por cerca de dois quilômetros de litoral, entre a Praia da Malhada e a Pedra do Frade. No mês de julho, o sol se põe direitinho atrás da fenda, proporcionando um espetáculo bem especial.",
      categoria: "Natureza",
      imagem: "https://static.wixstatic.com/media/d543fb_8576918511d14f87b08d2d79a92ce967~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/d543fb_8576918511d14f87b08d2d79a92ce967~mv2.jpg"
    },
    {
      nome: "Lagoa do Paraíso",
      coords: [-2.8717, -40.4056],
      descricao: "A Lagoa do Paraíso é um famoso ponto turístico em Jericoacoara, conhecido por suas águas cristalinas e calmas, ideais para banho e relaxamento. Fica localizada em Jijoca de Jericoacoara, a cerca de 30 minutos da vila de Jericoacoara, e faz parte dos passeios de buggy pelo lado leste da região. A lagoa oferece uma boa estrutura para receber visitantes, com restaurantes e bares à beira da água, além de redes dentro da lagoa para relaxar. ",
      categoria: "Natureza",
      imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3120772:1628546232/Lagoa.jpg?f=default&$p$f=5bbbc15"
    },
    {
        nome: "Cascata do Crato",
        coords: [-7.2283, -39.4107],
        descricao: "Bela queda d'água na Serra do Araripe, excelente para trilhas e banhos.",
        categoria: "Natureza",
        imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.1704909:1590179270/image/image.jpg?f=16x9&h=574&w=1020&$p$f$h$w=3c48500"
    },

    {
      nome: "Morro Branco",
      coords: [-4.1492, -38.0637],
      descricao: "Morro Branco é um praia brasileira localizada na cidade de Beberibe no estado do Ceará. É conhecido pelas diversas colorações de areias, usadas no trabalho de silicografia.",
      categoria: "Natureza",
      imagem: "https://passagenspromo.com.br/blog/wp-content/uploads/2020/11/praia-de-morro-branco-740x415.jpg"
    },
    {
      nome: "Lagoinha",
      coords: [-3.6277, -39.2658],
      descricao: "A Praia da Lagoinha, localizada no município de Paraipaba, a cerca de 110 km de Fortaleza, Ceará, é conhecida por suas paisagens paradisíacas, com mar calmo e diversas lagoas de água doce. É um destino popular para quem busca tranquilidade, beleza natural e atividades como passeios de buggy e banhos em águas cristalinas. ",
      categoria: "Praia",
      imagem: "https://deferiasnoceara.com.br/wp-content/uploads/2021/08/De-Ferias-no-Ceara-Lagoinha-1.jpg"
    },
    {
      nome: "Icaraí de Amontada",
      coords: [-3.0269, -39.6002],
      descricao: "Icaraí de Amontada ou Icaraizinho é um praia brasileira do município de Amontada no litoral oeste do estado do Ceará. Também conhecida como Icaraizinho de Amontada, fica a 200km de Fortaleza e cerca de 135 km de Jericoacoara.",
      categoria: "Praia",
      imagem: "https://www.temporadalivre.com/uploads/editor/pictures/b7ce1912d263/content_Icaraizinho-Luftansicht-vom-Strand_608x404-ID2090474-7c173b0b80dbecd9434e659f2e45e643.jpg"
    },
     {
      nome: "Catedral Metropolitana",
      coords: [-3.7286, -38.5427],
      descricao: "A Catedral Metropolitana de Fortaleza é um templo católico da cidade de Fortaleza, capital do estado brasileiro do Ceará. É a sede da Arquidiocese de Fortaleza, construída no local da antiga Igreja da Sé. A obra demorou quarenta anos para ser concluída, tendo sido iniciada em 1938 e inaugurada em 1978.",
      categoria: "Cultura",
      imagem: "https://comshalom.org/wp-content/uploads/2023/12/catedral-fortaleza.jpg"
    },
    {
      nome: "Theatro José de Alencar",
      coords: [-3.7295, -38.5309],
      descricao: "O Theatro José de Alencar é um teatro brasileiro, localizado na cidade de Fortaleza, no Ceará. É referência artística, turística e arquitetônica no país, além de ser tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional.",
      categoria: "Cultura",
      imagem: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2020/02/Fachada-Vitral-Gentil-Barreira-1200x880.jpg"
    },
    {
      nome: "Fortaleza de Nossa Senhora da Assunção",
      coords: [-3.7148, -38.5209],
      descricao: "A Fortaleza de Nossa Senhora da Assunção localiza-se à margem esquerda da foz do riacho Pajeú, sobre o monte Marajaitiba, na cidade de Fortaleza, no litoral do estado brasileiro do Ceará. Atualmente abriga a sede da 10ª Região Militar do Exército Brasileiro.",
      categoria: "Cultura",
      imagem: "https://www.praiasdefortaleza.net/wp-content/uploads/2016/08/fortaleza-de-nossa-senhora-da-ssuncao-ce.jpg"
    },
     {
      nome: "Trilha das Falésias",
      coords: [-4.5350, -37.7200],
      descricao: "A Trilha das Falésias, em Morro Branco, Beberibe, Ceará, é um percurso de caminhada de aproximadamente 2,9 km, considerado fácil e com duração média de 40 minutos. A trilha integra o Monumento Natural das Falésias de Beberibe, famoso pelas formações geológicas coloridas, e oferece uma experiência única de contato com a natureza, incluindo dunas, falésias, mar e paisagens diversificadas. ",
      categoria: "Aventura",
      imagem: "https://www.pftur.com.br/wp-content/uploads/2023/12/IMG_2597.jpg"
    },
    {
      nome: "Passeio de Buggy nas Dunas de Jericoacoara",
      coords: [-2.7960, -40.5120],
      descricao: "O passeio de buggy nas dunas de Jericoacoara é uma atividade turística popular, oferecendo vistas deslumbrantes e experiências emocionantes. Os passeios podem ser feitos pelo lado oeste ou leste de Jericoacoara, com paradas em pontos como a Praia do Preá, Buraco Azul, Lagoa do Paraíso e Tatajuba. Os passeios geralmente duram cerca de 6 horas e podem ser feitos em grupos de até quatro pessoas por buggy. ",
      categoria: "Aventura",
      imagem: "https://imgmd.net/images/v1/guia/1702967/passeios-em-jericoacoara.jpg"
    },
    {
      nome: "Rapel na Serra de Baturité",
      coords: [-4.3318, -38.8830],
      descricao: "Opção de aventura com vista para a Mata Atlântica cearense.",
      categoria: "Aventura",
      imagem: "https://cearaselvagem.com/wp-content/uploads/2024/05/rapel-quixada.jpg"
    },
     {
      nome: "Cachoeira do Boi Morto",
      coords: [-4.0600, -39.4500],
      descricao: "Queda d'água escondida na serra, ideal para trilhas e banhos naturais.",
      categoria: "Natureza",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cachoeira_do_Boi_Morto_-_Ubajara-CE_%283702359628%29.jpg/2560px-Cachoeira_do_Boi_Morto_-_Ubajara-CE_%283702359628%29.jpg"
    },
    {
      nome: "Serra de Guaramiranga",
      coords: [-4.2625, -38.9367],
      descricao: "A Serra de Guaramiranga, também conhecida como Maciço de Baturité ou Serra de Baturité, é uma formação montanhosa no estado do Ceará, no Brasil. Localizada no centro-norte do estado, a região é conhecida por suas paisagens serranas, clima ameno e rica vegetação da Mata Atlântica, atraindo turistas interessados em atividades ao ar livre como trilhas e cachoeiras. ",
      categoria: "Natureza",
      imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/c0/45/11/pousada-cabanas-da-serra.jpg?w=900&h=-1&s=1"
    },
    {
      nome: "Cachoeira da Missão Velha",
      coords: [-7.2393, -39.1433],
      descricao: "Localizado no Sítio Cachoeira, a 3km da sede do Município de Missão Vela, este geossítio caracteriza-se por quedas d'água, com aproximadamente 12 metros de altura, formadas pelo Rio Salgado.",
      categoria: "Natureza",
      imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.1696201:1590224835/Image-0-Artigo-2195711-1.jpg?f=default&$p$f=b132ecd"
    },

    //GASTRONOMIA

    {
    nome: "Mercado dos Peixes",
    coords: [-3.7265, -38.4822],
    descricao: "Local tradicional para comer frutos do mar frescos à beira-mar em Fortaleza.",
    categoria: "Gastronomia",
    imagem: "https://viagemeturismo.abril.com.br/wp-content/uploads/2024/07/mercado-dos-peixes-fortaleza.jpg?crop=1&resize=1212,909"
    },
    {
    nome: "Restaurante Colher de Pau",
    coords: [-3.7390, -38.4997],
    descricao: "Famoso pela carne de sol com macaxeira e pratos típicos cearenses.",
    categoria: "Gastronomia",
    imagem: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/colher-pau-resto-jarbas-oliv.jpg?quality=70&strip=info&w=920&w=636"
    },
    {
    nome: "Feirinha da Beira Mar",
    coords: [-3.7181, -38.5056],
    descricao: "Além de artesanato, é possível encontrar muitas barracas de comidas típicas cearenses.",
    categoria: "Gastronomia",
    imagem: "https://portalterradaluz.com.br/wp-content/uploads/2023/10/feirinha-beira-mar-marina-nottingham_23.jpg"
    },
    {
    nome: "Centro das Tapioqueiras",
    coords: [-3.8401, -38.4756],
    descricao: "Ponto famoso em Fortaleza para saborear diferentes tipos de tapiocas.",
    categoria: "Gastronomia",
    imagem: "https://blogdajor72.wordpress.com/wp-content/uploads/2013/06/domingo-o-melhor-movimento.jpg"
    },
    {
    nome: "Restaurante Coco Bambu",
    coords: [-3.7375, -38.4978],
    descricao: "Rede famosa originada em Fortaleza, especializada em frutos do mar e pratos regionais.",
    categoria: "Gastronomia",
    imagem: "https://static.barato.com.br/2019/0212/21065/g_coco-bambu-beira-mar96ac8572b4.jpg"
    },



  ];

  return new Response(JSON.stringify(pontos), {
    headers: { "Content-Type": "application/json" },
  });
}