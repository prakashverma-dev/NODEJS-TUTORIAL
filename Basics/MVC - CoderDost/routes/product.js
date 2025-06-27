// Create routes folder on the Project base folder hirachy--

//We keep all the routes here of our application -
const express = require("express")
const productController = require("../controller/product.js"); //we received all exported data in the form of an object, we can do object destruciting or one by one data access.


//Express Router Middleware to attach to main app Server -
const productRouter = express.Router(); // this middleware used in index.js


// The SiX-APIs :-

// server
// productRouter
//       .get("/products", productController.getProducts)
//       .get("/products/:id", productController.getProduct)
//       .post("/products", productController.createProduct)
//       .put("/products/:id", productController.replaceProduct)
//       .patch("/products/:id", productController.editProduct)
//       .delete("/products/:id", productController.deleteProduct); //Did the chaining on the server(now on 'productRouter') at once.


//New Path
productRouter
      .get("/", productController.getProducts)
      .get("/:id", productController.getProduct)
      .post("/", productController.createProduct)
      .put("/:id", productController.replaceProduct)
      .patch("/:id", productController.editProduct)
      .delete("/:id", productController.deleteProduct); //Did the chaining on the server(now on 'productRouter') at once.

      
module.exports = {productRouter} ;