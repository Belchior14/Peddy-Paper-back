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
    images: ["https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/charmanderFrontal_zc3dru.jpg", "https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/charmanderEsquerda_sez6wl.jpg" , "https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/charmanderDireita_r2hrha.jpg"]
  },
  {
    name: "Squirtle",
    price: 10,
    link: "https://www.vinted.pt/items/2760790987-pokemon-squirtle",
    description: "O primeiro pokemon de água",
    images: ["https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/squirtleFrontal_q39fhw.jpg" , "https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/squirtleEsquerda_do9nha.jpg" , "https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/squirtleDireita_lqduuh.jpg" ]
  },
  {
    name: "Bulbasaur",
    price: 37,
    link: "https://www.vinted.pt/items/2760794577-pokemon-bulbasaur",
    description: "O primeiro pokemon de erva",
    images: ["https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/bulbasaurFrontal_suvhtz.jpg" , "https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/bulbasaurEsquerda_iywgav.jpg" , "https://res.cloudinary.com/dswjf3cpk/image/upload/v1693926358/HMS/bulbasaurDireita_zk2jvt.jpg"] 
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
