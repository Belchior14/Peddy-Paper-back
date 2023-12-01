// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// Require the Product model in order to interact with the database
const Product = require("../models/Product.model");

require("dotenv").config();



// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  /* process.env.MONGODB_URI || */ "mongodb://127.0.0.1:27017/hms3dprinting";

  const products = [{
    name: "Charmander",
    price: 22,
    quantity:1,
    link: "https://www.vinted.pt/items/2760787148-pokemon-charmander",
    description: ["Figura de Charmander impressa em 3D com 10x10x14 centímetros, cuidadosamente pintada à mão.", "É uma representação encantadora e detalhada do popular Pokémon de fogo, com sua chama na cauda e uma pose cativante.","É um item perfeito para qualquer fã de Pokémon ou colecionador."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695823848/HMS/charmanderFrontal_ecvbuz.jpg", "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/charmanderDireita_tocbhk.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/charmanderEsquerda_fbztgt.jpg"]
  },
  {
    name: "Squirtle",
    price: 22,
    quantity:1,
    link: "https://www.vinted.pt/items/2760790987-pokemon-squirtle",
    description: ["Figura de Squirtle impressa em 3D com 10x10x14 centímetros, cuidadosamente pintada à mão.", "É uma representação encantadora e detalhada do popular Pokémon de água, com seus carismáticos óculos de sol numa praia.","É um item perfeito para qualquer fã de Pokémon ou colecionador."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleFrontal_hwdk1m.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleDireita_jgcbwv.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleEsquerda_fayqmt.jpg" ]
  },
  {
    name: "Bulbasaur",
    price: 22,
    quantity:1,
    link: "https://www.vinted.pt/items/2760794577-pokemon-bulbasaur",
    description: ["Figura de Bulbasaur impressa em 3D com 10x10x14 centímetros, cuidadosamente pintada à mão.","É uma representação encantadora e detalhada do popular Pokémon de Erva, com um ar ameacador.","É um item perfeito para qualquer fã de Pokémon ou colecionador."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/bulbasaurFrontal_lttkri.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823912/HMS/bulbasaurDireita_yvubd7.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823896/HMS/bulbasaurEsquerda_se0imx.jpg"] 
  },
  {
    name: "Pikachu",
    price: 22,
    quantity:1,
    link: "https://www.vinted.pt/items/3712216826-figura-de-cloud-strife-de-final-fantasy-7",
    description: ["Esta encantadora figura do Pikachu, meticulosamente pintada à mão, captura a essência vibrante do adorado Pokémon.", "Com dimensões de 10x10x14cm, ela apresenta detalhes impressionantes que dão vida à expressão travessa do Pikachu, tornando-a uma peça única e cativante para qualquer coleção de fãs."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700257018/HMS/pikachuFrente_cmzmme.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257018/HMS/pikachuEsquerda_j0clij.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257017/HMS/pikachuDireita_muzuz8.jpg"] 
  },
/*   {
    name: "Apoio de comando MasterChief de Halo",
    price: 30,
    link: "https://www.vinted.pt/items/2771666628-apoio-comando-halo-master-chief",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695824285/HMS/apoioComandoHalo_en5ad0.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824286/HMS/apoioComandoHalo2_oamd1m.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824286/HMS/apoioComandoHalo3_oe9yze.jpg"] 
  }, */
/*   {
    name: "Capa de dock Nintendo Switch Nuvens",
    price: 37,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695824772/HMS/caaDockNintedoSwitch_ftsxk3.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824766/HMS/caaDockNintedoSwitch2_htabzs.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824766/HMS/caaDockNintedoSwitch3_al63n9.jpg"] 
  }, */
 /*  {
    name: "Fox Kurama - Naruto",
    price: 37,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695825488/HMS/foxKurama_rvlgko.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825487/HMS/foxKurama2_dqzp6w.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825487/HMS/foxKurama3_gu2zsn.jpg"] 
  }, */
  {
    name: "Sauron de Lord of the Rings",
    price: 62,
    quantity:1,
    link: "https://www.vinted.pt/items/3085106316-figura-sauron-de-lord-of-the-rings",
    description: ["Impressionante figura de Sauron, o Senhor do Escuro de J.R.R. Tolkien, meticulosamente reproduzida em 3D e pintada à mão." , "Com uma altura de 20 centímetros, esta representação de Sauron captura todos os detalhes icônicos do personagem." , "Esta peça é uma verdadeira obra de arte para os fãs de O Senhor dos Anéis e uma lembrança impressionante do poder malévolo que dominou a Terra Média."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700256642/HMS/SauronFrente_ach547.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700256642/HMS/SauronEsquerda_rgvl6e.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700256642/HMS/SauronDireita_ylheia.jpg"] 
  },
  {
    name: "Sephiroth Final Fantasy VII",
    price: 65,
    quantity:1,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: ["A figura 3D de Sephiroth, inspirada em Final Fantasy 7, é uma mistura de arte manual e tecnologia.", "Feita com impressão 3D, tem dimensões de 31x31x31cm, capturando cada detalhe do personagem, desde a imponente espada até a pintura cuidadosa da roupa." , "Ideal para fãs, é uma adição marcante para qualquer coleção."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700256447/HMS/sephirothFrente_liwqgp.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700256447/HMS/sephirothLado_htzrod.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700256447/HMS/sephirothTr%C3%A1s_ekvdv4.jpg"] 
  },
/*   {
    name: "Separador de livros Book Nook The Hobbit",
    price: 75,
    link: "https://www.vinted.pt/items/3289182313-book-nook-the-hobbit",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826013/HMS/separadorLivros_h2drzz.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826012/HMS/separadorLivros2_zjrc94.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826011/HMS/separadorLivros3_qck1xf.jpg"] 
  }, */
/*   {
    name: "Kyogre vs Groudon mega figuras Pokemon",
    price: 75,
    link: "https://www.vinted.pt/items/3352145552-kyogre-vs-groudon-mega-figuras-pokemon",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826432/HMS/kyogre_v65gfx.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826430/HMS/kyogre2_unkhlw.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826430/HMS/kyogre2_unkhlw.jpg"] 
  }, */
/*   {
    name: "Crachás Pokémon Go",
    price: 4,
    link: "https://www.vinted.pt/items/3289058352-crachas-pokemon-go",
    description: ["O primeiro pokemon de erva"],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826621/HMS/crachas_bad9fr.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826620/HMS/crachas2_mxnium.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826544/HMS/crachas3_eevsv0.jpg"] 
  }, */
  {
    name: "Cloud - Final Fantasy 7",
    price: 65,
    quantity:1,
    link: "https://www.vinted.pt/items/3712216826-figura-de-cloud-strife-de-final-fantasy-7",
    description: ["Uma figura em 3D do Cloud de Final Fantasy 7, com 28cm de altura.", "A pintura à mão destaca os detalhes da espada e da armadura, criando uma peça única para fãs e colecionadores."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700256312/HMS/cloudFrente_wkl4hc.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700256312/HMS/cloudEsquerda_vigd46.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700256312/HMS/cloudDireita_txbjmx.jpg"] 
  },
  {
    name: "Voldemort",
    price: 74,
    quantity:0,
    link: "https://www.vinted.pt/items/3289085692-figura-voldemort-e-nagini",
    description: ["Esta figura 3D meticulosamente pintada à mão retrata Voldemort, o temido bruxo das trevas, junto com sua leal serpente, Nagini.", "Com uma altura impressionante de 28cm, cada detalhe é cuidadosamente reproduzido, desde as características distintivas de Voldemort até os padrões intricados na pele de Nagini." , "Uma peça única que captura a essência da magia sombria no universo de Harry Potter."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700257190/HMS/voldmortFrente_rlfqgb.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257188/HMS/voldmortEsquerda_mr686w.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257190/HMS/voldmortDireita_ka5uuh.jpg"] 
  },
  {
    name: "Grogu",
    price: 30,
    quantity:1,
    link: "https://www.vinted.pt/items/3234731897-grogu-the-mandalorian",
    description: ["Admire a incrível figura 3D de Grogu da série 'The Mandalorian'.", "Com uma altura impressionante de 18cm, esta peça única foi cuidadosamente pintada à mão, capturando cada detalhe adorável do personagem." , "Uma adição encantadora para qualquer coleção de fãs, esta representação meticulosa de Grogu certamente atrairá olhares de admiração."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700257684/HMS/GroguFrente_hlfgul.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257685/HMS/GroguEsquerda_vqtgqs.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257684/HMS/GroguDireita_pi5oxo.jpg"] 
  },
  {
    name: "Master Sword de The Legend of Zelda",
    price: 70,
    quantity:1,
    link: "https://www.vinted.pt/items/3712252693-adereco-espada-de-legend-of-zelda-master-sword",
    description: ["Reprodução da Master Sword de The Legend of Zelda, meticulosamente impressa em 3D e habilmente pintada à mão.", "Esta imponente espada, com seus impressionantes 1,20 metros de comprimento, captura cada detalhe icônico da lendária arma." , "Sinta a energia lendária enquanto segura esta peça única, que combina a precisão da tecnologia 3D com a arte artesanal para criar uma obra de arte verdadeiramente impressionante."],
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1700257906/HMS/espada3_gr0xdd.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257905/HMS/espada2_qlzo9z.jpg", "https://res.cloudinary.com/dmbxv880g/image/upload/v1700257904/HMS/espada1_xjfpqj.jpg"] 
  }

  
  ]

  console.log(MONGO_URI)

mongoose
  .connect(MONGO_URI)
  .then( async (x) => {
    await Product.insertMany(products)
    console.log(`Products inserted on the DB`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
