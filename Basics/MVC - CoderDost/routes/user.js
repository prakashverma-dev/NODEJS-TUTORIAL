// Create routes folder on the Project base folder hirachy--

//We keep all the routes here of our application -
const express = require("express")
const userController = require("../controller/user.js"); //we received all exported data in the form of an object, we can do object destruciting or one by one data access.


//Express Router Middleware to attach to main app Server -
const userRouter = express.Router(); // this middleware used in index.js


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
userRouter
      .get("/", userController.getProducts)
      .get("/:id", userController.getProduct)
      .post("/", userController.createProduct)
      .put("/:id", userController.replaceProduct)
      .patch("/:id", userController.editProduct)
      .delete("/:id", userController.deleteProduct); //Did the chaining on the server(now on 'productRouter') at once.

      
module.exports = {userRouter} ;