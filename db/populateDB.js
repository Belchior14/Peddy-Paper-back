// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// Require the Product model in order to interact with the database
const Product = require("../models/Product.model");

require("dotenv").config();

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI; /* || "mongodb://127.0.0.1:27017/hms3dprinting" */

const products = [
  {
    name: "Charmander",
    price: 22,
    quantity: 1,
    link: "https://www.vinted.pt/items/2760787148-pokemon-charmander",
    description: [
      "Figura de Charmander impressa em 3D com 10x10x14 centímetros, cuidadosamente pintada à mão.",
      "É uma representação encantadora e detalhada do popular Pokémon de fogo, com sua chama na cauda e uma pose cativante.",
      "É um item perfeito para qualquer fã de Pokémon ou colecionador.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823848/HMS/charmanderFrontal_ecvbuz.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/charmanderDireita_tocbhk.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/charmanderEsquerda_fbztgt.jpg",
    ],
  },
  {
    name: "Squirtle",
    price: 22,
    quantity: 1,
    link: "https://www.vinted.pt/items/2760790987-pokemon-squirtle",
    description: [
      "Figura de Squirtle impressa em 3D com 10x10x14 centímetros, cuidadosamente pintada à mão.",
      "É uma representação encantadora e detalhada do popular Pokémon de água, com seus carismáticos óculos de sol numa praia.",
      "É um item perfeito para qualquer fã de Pokémon ou colecionador.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleFrontal_hwdk1m.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleDireita_jgcbwv.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleEsquerda_fayqmt.jpg",
    ],
  },
  {
    name: "Bulbasaur",
    price: 22,
    quantity: 1,
    link: "https://www.vinted.pt/items/2760794577-pokemon-bulbasaur",
    description: [
      "Figura de Bulbasaur impressa em 3D com 10x10x14 centímetros, cuidadosamente pintada à mão.",
      "É uma representação encantadora e detalhada do popular Pokémon de Erva, com um ar ameacador.",
      "É um item perfeito para qualquer fã de Pokémon ou colecionador.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/bulbasaurFrontal_lttkri.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823912/HMS/bulbasaurDireita_yvubd7.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823896/HMS/bulbasaurEsquerda_se0imx.jpg",
    ],
  },
  {
    name: "Pikachu",
    price: 22,
    quantity: 1,
    link: "https://www.vinted.pt/items/3712216826-figura-de-cloud-strife-de-final-fantasy-7",
    description: [
      "Esta encantadora figura do Pikachu, meticulosamente pintada à mão, captura a essência vibrante do adorado Pokémon.",
      "Com dimensões de 10x10x14cm, ela apresenta detalhes impressionantes que dão vida à expressão travessa do Pikachu, tornando-a uma peça única e cativante para qualquer coleção de fãs.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124360/HMS/pikachu1_gcir1k.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124358/HMS/pikachu2_vnnfdg.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124358/HMS/pikachu3_nyoshr.jpg",
    ],
  },
  {
    name: "Apoio de comando MasterChief de Halo",
    price: 30,
    quantity: 1,
    link: "https://www.vinted.pt/items/2771666628-apoio-comando-halo-master-chief",
    description: [
      "Apresentamos o Apoio de Comando Halo: Master Chief segura seu controle de PlayStation ou Xbox. Impresso em 3D e pintado à mão para fãs de Halo que valorizam funcionalidade com estilo.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125847/HMS/hallo1_xgh50m.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125852/HMS/hallo3_d4epyr.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125855/HMS/hallo2_z1rnfn.jpg",
    ],
  },
  {
    name: "Apoio de comando God of War",
    price: 24,
    quantity: 1,
    link: "https://www.vinted.pt/items/2771666628-apoio-comando-halo-master-chief",
    description: [
      "Apoio de controle temático God of War para PlayStation ou Xbox, impresso em 3D com o machado de Kratos.",
      "Detalhes pintados à mão para um toque autêntico.",
      "Organize seus controles com estilo épico."
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125568/HMS/godOfWar_hityd0.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125572/HMS/godOfWar2_z3zkch.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125570/HMS/godOfWar3_ooeqv9.jpg",
    ],
  },
  /*   {
    name: "Capa de dock Nintendo Switch Nuvens",
    price: 37,
    quantity: 1,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    quantity: 1,
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695824772/HMS/caaDockNintedoSwitch_ftsxk3.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824766/HMS/caaDockNintedoSwitch2_htabzs.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824766/HMS/caaDockNintedoSwitch3_al63n9.jpg"] 
  }, */
  /*  {
    name: "Fox Kurama - Naruto",
    price: 37,
    quantity: 1,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695825488/HMS/foxKurama_rvlgko.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825487/HMS/foxKurama2_dqzp6w.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825487/HMS/foxKurama3_gu2zsn.jpg"] 
  }, */
  {
    name: "Sauron de Lord of the Rings",
    price: 62,
    quantity: 1,
    link: "https://www.vinted.pt/items/3085106316-figura-sauron-de-lord-of-the-rings",
    description: [
      "Impressionante figura de Sauron, o Senhor do Escuro de J.R.R. Tolkien, meticulosamente reproduzida em 3D e pintada à mão.",
      "Com uma altura de 20 centímetros, esta representação de Sauron captura todos os detalhes icônicos do personagem.",
      "Esta peça é uma verdadeira obra de arte para os fãs de O Senhor dos Anéis e uma lembrança impressionante do poder malévolo que dominou a Terra Média.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124233/HMS/sauron3_ub30e3.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124231/HMS/sauron2_cxgupl.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124230/HMS/sauron1_qrafeb.jpg",
    ],
  },
  {
    name: "Sephiroth Final Fantasy VII",
    price: 65,
    quantity: 1,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: [
      "A figura 3D de Sephiroth, inspirada em Final Fantasy 7, é uma mistura de arte manual e tecnologia.",
      "Feita com impressão 3D, tem dimensões de 31x31x31cm, capturando cada detalhe do personagem, desde a imponente espada até a pintura cuidadosa da roupa.",
      "Ideal para fãs, é uma adição marcante para qualquer coleção.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124095/HMS/sephiroth1_wxaupu.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124093/HMS/sephiroth2_rzqz0z.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124093/HMS/sephiroth3_oxytpz.jpg",
    ],
  },
  {
    name: "Separador de livros Book Nook The Hobbit",
    price: 59,
    quantity: 1,
    link: "https://www.vinted.pt/items/3289182313-book-nook-the-hobbit",
    description: [
      `Explore a magia de "The Hobbit" em sua estante com nosso Separador de Livros impresso em 3D, destacando o icônico dragão Smaug em Erebor.`,
      "Pintado à mão para um toque artesanal, é a adição perfeita para os amantes da obra de Tolkien.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125151/HMS/separadorLivros2_wotuzw.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125154/HMS/separadorLivros1_ym8dt2.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125152/HMS/separadorLivros3_x67twj.jpg",
    ],
  },
  /*   {
    name: "Kyogre vs Groudon mega figuras Pokemon",
    price: 75,
    quantity: 1,
    link: "https://www.vinted.pt/items/3352145552-kyogre-vs-groudon-mega-figuras-pokemon",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826432/HMS/kyogre_v65gfx.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826430/HMS/kyogre2_unkhlw.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826430/HMS/kyogre2_unkhlw.jpg"] 
  }, */
  /*   {
    name: "Crachás Pokémon Go",
    price: 4,
    quantity: 1,
    link: "https://www.vinted.pt/items/3289058352-crachas-pokemon-go",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826621/HMS/crachas_bad9fr.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826620/HMS/crachas2_mxnium.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826544/HMS/crachas3_eevsv0.jpg"] 
  }, */
  {
    name: "Cloud - Final Fantasy 7",
    price: 65,
    quantity: 1,
    link: "https://www.vinted.pt/items/3712216826-figura-de-cloud-strife-de-final-fantasy-7",
    description: [
      "Uma figura em 3D do Cloud de Final Fantasy 7, com 28cm de altura.",
      "A pintura à mão destaca os detalhes da espada e da armadura, criando uma peça única para fãs e colecionadores.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702123832/HMS/cloudFrente_dt6php.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702123832/HMS/cloudEsq_hl3cus.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702123832/HMS/cloudDirei_htpept.jpg",
    ],
  },
  {
    name: "Voldemort",
    price: 74,
    quantity: 1,
    link: "https://www.vinted.pt/items/3289085692-figura-voldemort-e-nagini",
    description: [
      "Esta figura 3D meticulosamente pintada à mão retrata Voldemort, o temido bruxo das trevas, junto com sua leal serpente, Nagini.",
      "Com uma altura impressionante de 28cm, cada detalhe é cuidadosamente reproduzido, desde as características distintivas de Voldemort até os padrões intricados na pele de Nagini.",
      "Uma peça única que captura a essência da magia sombria no universo de Harry Potter.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702123993/HMS/vold1_rvikuv.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702123993/HMS/vold2_ri3ioh.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702123994/HMS/vold3_vt7skl.jpg",
    ],
  },
  {
    name: "Grogu",
    price: 30,
    quantity: 1,
    link: "https://www.vinted.pt/items/3234731897-grogu-the-mandalorian",
    description: [
      "Admire a incrível figura 3D de Grogu da série 'The Mandalorian'.",
      "Com uma altura impressionante de 18cm, esta peça única foi cuidadosamente pintada à mão, capturando cada detalhe adorável do personagem.",
      "Uma adição encantadora para qualquer coleção de fãs, esta representação meticulosa de Grogu certamente atrairá olhares de admiração.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257684/HMS/GroguFrente_hlfgul.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257685/HMS/GroguEsquerda_vqtgqs.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257684/HMS/GroguDireita_pi5oxo.jpg",
    ],
  },
  {
    name: "Master Sword de The Legend of Zelda",
    price: 70,
    quantity: 1,
    link: "https://www.vinted.pt/items/3712252693-adereco-espada-de-legend-of-zelda-master-sword",
    description: [
      "Reprodução da Master Sword de The Legend of Zelda, meticulosamente impressa em 3D e habilmente pintada à mão.",
      "Esta imponente espada, com seus impressionantes 1,20 metros de comprimento, captura cada detalhe icônico da lendária arma.",
      "Sinta a energia lendária enquanto segura esta peça única, que combina a precisão da tecnologia 3D com a arte artesanal para criar uma obra de arte verdadeiramente impressionante.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257906/HMS/espada3_gr0xdd.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257905/HMS/espada2_qlzo9z.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257904/HMS/espada1_xjfpqj.jpg",
    ],
  },
  {
    name: "Suporte esponja Homer Simpson",
    price: 9,
    quantity: 1,
    link: "https://www.vinted.pt/items/3712230356-suporte-de-esponja-de-cozinha-de-the-simpsons",
    description: [
      "Um suporte de esponja para lava-louça do Homer Simpson, impresso em 3D e pintado à mão para adicionar um toque de diversão à sua cozinha.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124890/HMS/homer1_pchxxn.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124887/HMS/homer2_vyozc3.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702124887/HMS/homer3_jxttrv.jpg",
    ],
  },
  {
    name: "Capa de Nintendo Switch Minecraft",
    price: 20,
    quantity: 1,
    link: "https://www.vinted.pt/items/3712188324-capa-de-nintendo-switch-minecraft",
    description: [
      "Conjunto exclusivo de apoios de Dock para Nintendo Switch, cada um uma obra de arte única.",
      "Impressos em 3D, esses suportes são meticulosamente pintados à mão para refletir detalhes impressionantes.",
      "Escolha entre uma variedade de estilos, incluindo o mundo pixelado do Minecraft,  um mundo cristalizado , a alegria do Super Mario, o mistério do Octopus, as majestosas  nuvens e o encanto épico de Legend of Zelda.",
      "Eleve sua experiência de jogo com esses suportes personalizados que combinam funcionalidade e estética.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701519112/HMS/baseNintendoMineCraftLado_yu9ksy.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701519114/HMS/baseNintendoMineCraftFrente_wcvriy.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701519110/HMS/baseNintendoMineCraftConsola_txpjrv.jpg",
    ],
  },
  {
    name: "Capa de dock de Nintendo Switch Octopus",
    price: 20,
    quantity: 1,
    link: "https://www.vinted.pt/items/3712206601-capa-de-dock-de-nintendo-switch-octopus",
    description: [
      "Conjunto exclusivo de apoios de Dock para Nintendo Switch, cada um uma obra de arte única.",
      "Impressos em 3D, esses suportes são meticulosamente pintados à mão para refletir detalhes impressionantes.",
      "Escolha entre uma variedade de estilos, incluindo o mundo pixelado do Minecraft,  um mundo cristalizado , a alegria do Super Mario, o mistério do Octopus, as majestosas  nuvens e o encanto épico de Legend of Zelda.",
      "Eleve sua experiência de jogo com esses suportes personalizados que combinam funcionalidade e estética.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701518854/HMS/baseNintendo1Frente_imjzxf.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701518851/HMS/baseNintendo1Tr%C3%A1s_m2btjt.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701518852/HMS/baseNintendo1Consola_bhynba.jpg",
    ],
  },
  {
    name: "Capa de dock da Nintendo Switch Super Mario",
    price: 20,
    quantity: 1,
    link: "https://www.vinted.pt/items/3545176775-capa-de-dock-da-nintendo-switch-super-mario",
    description: [
      "Conjunto exclusivo de apoios de Dock para Nintendo Switch, cada um uma obra de arte única.",
      "Impressos em 3D, esses suportes são meticulosamente pintados à mão para refletir detalhes impressionantes.",
      "Escolha entre uma variedade de estilos, incluindo o mundo pixelado do Minecraft,  um mundo cristalizado , a alegria do Super Mario, o mistério do Octopus, as majestosas  nuvens e o encanto épico de Legend of Zelda.",
      "Eleve sua experiência de jogo com esses suportes personalizados que combinam funcionalidade e estética.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701519672/HMS/baseNintendoSuperMarioFrente_bbjg93.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701519673/HMS/baseNintendoSuperMarioFrenteII_mgkttk.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701519676/HMS/baseNintendoSuperMarioFrenteIII_vmmwgn.jpg",
    ],
  },
  {
    name: "Frostmourne",
    price: 120,
    quantity: 1,
    link: "1",
    description: [
      "Adquira a impressionante réplica da espada Frostmourne em 3D, com impressionantes 120cm de comprimento.",
      ,
      "Cada detalhe meticuloso é destacado pela habilidade artesanal, resultando em uma peça única e imponente.",
      "Pintada à mão com precisão, esta espada traz à vida a icônica arma do universo de hallocraft, perfeita para colecionadores e entusiastas que buscam uma peça autêntica e visualmente impressionante.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701886760/HMS/frostmourneFrente_q5uge4.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701886760/HMS/frostmourneFrente2_ygh0pu.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701886760/HMS/frostmourneCorpo_a3buns.jpg",
    ],
  },
  {
    name: "Esfera Disney",
    price: 12,
    quantity: 1,
    link: "https://www.vinted.pt/items/3452439439-decoracao-de-natal-luminosa-disney",
    description: [
      "Ilumine sua coleção com a esfera Disney em litografia, uma obra de arte em miniatura com 8 cm de diâmetro.",
      ,
      "Cada detalhe mágico é acentuado pela técnica de litografia, proporcionando uma experiência visual encantadora.",
      "Esta peça única é uma adição deslumbrante para os fãs da Disney, capturando a magia em um formato compacto e brilhante, perfeito para exibir com orgulho em qualquer espaço.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701887099/HMS/esferaDisney2_nkpdg5.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701887098/HMS/esferaDisney3_ssf61n.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701887098/HMS/esferaDisney_b4gnlh.jpg",
    ],
  },
  {
    name: "Decorações de Natal",
    price: 3.5,
    quantity: 1,
    link: "https://www.vinted.pt/items/3545146882-decoracao-natal",
    description: [
      "Decore sua árvore com charme personalizado!",
      ,
      "Nossas decorações de Natal são pintadas à mão e podem ser personalizadas com o nome que escolher.",
      "Adicione um toque especial e único à sua celebração.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701887611/HMS/decora%C3%A7%C3%A3oNatal3_oz8bvv.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701887610/HMS/decora%C3%A7%C3%A3oNatal2_lktydz.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701887610/HMS/decora%C3%A7%C3%A3oNatal1_rrdgnv.jpg",
    ],
  },
  {
    name: "Decorações de Natal Harry Potter",
    price: 30,
    quantity: 1,
    link: "https://www.vinted.pt/items/3545142042-decoracao-natal-harry-potter",
    description: [
      "Decore sua árvore com encanto mágico de Harry Potter.",
      ,
      "Conjunto de ornamentos temáticos icónicos para uma celebração natalicia cheia de magia.",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701888122/HMS/decora%C3%A7%C3%A3oHarry_pgipec.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701888121/HMS/decora%C3%A7%C3%A3oHarry3_ytbzbk.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1701888121/HMS/decora%C3%A7%C3%A3oHarry2_ntpodp.jpg",
    ],
  },
  {
    name: "Decorações de Natal Pokémon",
    price: 4.5,
    quantity: 1,
    link: "https://www.vinted.pt/items/3545142042-decoracao-natal-harry-potter",
    description: [
      "Encante sua árvore de Natal com nossas decorações Pokémon. Gengar, Pikachu, Squirtle, Pichu e Bulbasaur, impressos em 3D e pintados à mão, trazem a magia de Pokémon para a sua celebração. Para um Natal cheio de diversão e estilo!",
    ],
    images: [
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125048/HMS/dcora%C3%A7%C3%A3oPokemon3_ctm55h.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125051/HMS/dcora%C3%A7%C3%A3oPokemon_xnnouj.jpg",
      "https://res.cloudinary.com/dmbxv880g/image/upload/v1702125047/HMS/dcora%C3%A7%C3%A3oPokemon2_hczwxx.jpg",
    ],
  },
];

console.log(MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(async (x) => {
    await Product.deleteMany();
    console.log("products deleted");
  })
  .then(async (x) => {
    await Product.insertMany(products);
    console.log(`Products inserted on the DB`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
