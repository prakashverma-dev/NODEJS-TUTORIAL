const axios = require('axios');

const express = require('express')
const server = express();
const PORT = 3000;

// server.get("/", (req, res)=>{

//     res.json("heyy")

// });

// Fetching -

// Your API key is: 196949bfb82b49c8973db1749ea35091

// Our END Point to Hit : https://newsapi.org/v2/top-headlines?country=us&apiKey=196949bfb82b49c8973db1749ea35091

const API_KEY = "196949bfb82b49c8973db1749ea35091" ;

server.get("/", async (req, res)=>{

    const countryName = req.query.country ;
    // const countryName = req.query.country || "in" ; //by default country code

    const NEWS_API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=${API_KEY}` ;
    // console.log(NEWS_API_ENDPOINT);

    try {
        //Calling our NEWS API END Point here -
        // const data = await axios.get(NEWS_API_ENDPOINT);
        // res.status(200).json(data.data) ;


        //Using inbuilt method of javascript i.e fetch method
        const result = await fetch(NEWS_API_ENDPOINT);
        const data = await result.json();
        res.status(200).json(data) ;


        
    } catch (error) {

        res.status(500).json({message : error})
        
    }

});


server.listen(PORT, ()=> console.log("Serverted started on Port : "+ PORT));