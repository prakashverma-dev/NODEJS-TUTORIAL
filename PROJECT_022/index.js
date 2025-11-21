
const express = require("express");
const server = express();
const PORT = 8000;
const path = require("path");



// Setup of EJS template -
server.set('view engine', "ejs");
server.set("views", path.resolve("./I.views"));

server.get("/", (req, res)=>{

    res.render('home.ejs');

});

server.listen(PORT, ()=> console.log("Server Started On "+PORT))