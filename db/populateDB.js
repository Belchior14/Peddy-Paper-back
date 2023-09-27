// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// Require the Product model in order to interact with the database
const Product = require("../models/Product.model");



// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hms3dprinting";

  const products = [{
    name: "Charmander",
    price: 25,
    link: "https://www.vinted.pt/items/2760787148-pokemon-charmander",
    description: "Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable.",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695823848/HMS/charmanderFrontal_ecvbuz.jpg", "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/charmanderDireita_tocbhk.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/charmanderEsquerda_fbztgt.jpg"]
  },
  {
    name: "Squirtle",
    price: 10,
    link: "https://www.vinted.pt/items/2760790987-pokemon-squirtle",
    description: "O primeiro pokemon de água",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleFrontal_hwdk1m.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleDireita_jgcbwv.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823815/HMS/squirtleEsquerda_fayqmt.jpg" ]
  },
  {
    name: "Bulbasaur",
    price: 37,
    link: "https://www.vinted.pt/items/2760794577-pokemon-bulbasaur",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695823913/HMS/bulbasaurFrontal_lttkri.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823912/HMS/bulbasaurDireita_yvubd7.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695823896/HMS/bulbasaurEsquerda_se0imx.jpg"] 
  },
  {
    name: "Apoio de comando MasterChief de Halo",
    price: 37,
    link: "https://www.vinted.pt/items/2771666628-apoio-comando-halo-master-chief",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695824285/HMS/apoioComandoHalo_en5ad0.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824286/HMS/apoioComandoHalo2_oamd1m.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824286/HMS/apoioComandoHalo3_oe9yze.jpg"] 
  },
  {
    name: "Capa de dock Nintendo Switch Nuvens",
    price: 37,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695824772/HMS/caaDockNintedoSwitch_ftsxk3.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824766/HMS/caaDockNintedoSwitch2_htabzs.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695824766/HMS/caaDockNintedoSwitch3_al63n9.jpg"] 
  },
  {
    name: "Fox Kurama - Naruto",
    price: 37,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695825488/HMS/foxKurama_rvlgko.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825487/HMS/foxKurama2_dqzp6w.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825487/HMS/foxKurama3_gu2zsn.jpg"] 
  },
  {
    name: "Sauron de Lord of the Rings",
    price: 69,
    link: "https://www.vinted.pt/items/3085106316-figura-sauron-de-lord-of-the-rings",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695825660/HMS/sauronLTR_oyyrtt.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825633/HMS/sauronLTR2_io2p8n.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825632/HMS/sauronLTR3_n7shyf.jpg"] 
  },
  {
    name: "Sephiroth Final Fantasy VII",
    price: 69,
    link: "https://www.vinted.pt/items/3172844416-sephiroth-final-fantasy-vii",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695825806/HMS/sephiroth_itreoz.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825856/HMS/sephiroth2_qsgrsl.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695825857/HMS/sephiroth3_tdjhbb.jpg"] 
  },
  {
    name: "Separador de livros Book Nook The Hobbit",
    price: 75,
    link: "https://www.vinted.pt/items/3289182313-book-nook-the-hobbit",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826013/HMS/separadorLivros_h2drzz.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826012/HMS/separadorLivros2_zjrc94.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826011/HMS/separadorLivros3_qck1xf.jpg"] 
  },
  {
    name: "Kyogre vs Groudon mega figuras Pokemon",
    price: 75,
    link: "https://www.vinted.pt/items/3352145552-kyogre-vs-groudon-mega-figuras-pokemon",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826432/HMS/kyogre_v65gfx.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826430/HMS/kyogre2_unkhlw.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826430/HMS/kyogre2_unkhlw.jpg"] 
  },
  {
    name: "Crachás Pokémon Go",
    price: 4,
    link: "https://www.vinted.pt/items/3289058352-crachas-pokemon-go",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dmbxv880g/image/upload/v1695826621/HMS/crachas_bad9fr.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826620/HMS/crachas2_mxnium.jpg" , "https://res.cloudinary.com/dmbxv880g/image/upload/v1695826544/HMS/crachas3_eevsv0.jpg"] 
  },
  ]

mongoose
  .connect(MONGO_URI)
  .then( async (x) => {
    await Product.insertMany(products)
    console.log(`Products inserted on the DB`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
