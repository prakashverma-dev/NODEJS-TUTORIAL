

const express = require("express");
const productRouter = express.Router();

const {getAllProducts, getProduct, updateProduct, deleteProduct, replaceProduct, createProduct} = require("../controller/product2")


//Get All Products and Post a new Product i.e Create a new product -
productRouter.route("/").get(getAllProducts).post(createProduct);

//Get a Single Pruduct by id , Update a Product By Id, Delete a product by id -
productRouter.route("/:id").get(getProduct).put(replaceProduct).patch(updateProduct).delete(deleteProduct);

// console.log(getAllProducts)
module.exports = productRouter ;