
const express = require("express");
const server = express(); //server can be created once for our project
const port = 8080;

const productRouter = require("./routes/product2");

//Body Parser for getting HTTP Request Body -
server.use(express.json());

server.use("/api/products", productRouter);


server.listen(port, ()=> console.log("Server Started at Port : ", port));

