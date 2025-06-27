 const express = require("express");
 const server = express();
 const path= require("path");
 const mongoose = require('mongoose');
 const URI = `mongodb://127.0.0.1:27017/eCommerce`;
//  const URI = `mongodb+srv://theverma:Prakash%407676@cluster0.vqswr.mongodb.net/`

const product2Model = require("./models/1.SearchAPI.js");




server.use(express.urlencoded({extended : false}));

//  server.set("view engine", 'ejs');
//  server.set("views", path.resolve("./views") );

server.get("/", async (req, res)=>{

   const allProducts = await product2Model.find({})

    res.send(allProducts);
    
 })

server.get("/search/:key", async (req, res)=>{

  const key =   +req.params.key ;
  const searchProducts = await product2Model.find({ $or : 
      [
        {first_name : {$regex : key}},
        {last_name : {$regex : key}},
        {ratings : {$regex : key }},
        {gender : {$regex : key}},
        {email : {$regex : key}}
           
      ]
    })


    res.send(searchProducts);
    
 })


 //Database Connection to mongodb cloud -

 mongoose.connect(URI)
//  mongoose.connect("mongodb://localhost:27017")
 .then(()=>{

   console.log("Connected To MongoDB Database Succefully!");

   server.listen(8000, ()=> console.log("Server started on 8000!"));

 })
 .catch((error)=>{

   console.log(error);

 })

 //1. Connnection of Database with Mongodb Clound
 //2. JWT TOken impletentation with login and signup
 //3. Search API, ratings fields accepting the Number but we put the string as url give us string data.

 

