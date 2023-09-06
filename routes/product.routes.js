const express = require("express");
const router = express.Router();

// Require the Product model in order to interact with the database
const Product = require("../models/Product.model");


router.get("/", async (req, res, next) => {

    const products = await Product.find()

  res.status(200).json({products})
});


router.get("/:id" , async (req,res,next) => {

  const {id} = req.params

  const product = await Product.findById(id)

  res.status(200).json({product})

})

module.exports = router;
