

// #2. Router-level middleware : On Each specific route '/about' can be middleware. Associated with specific routes using router.use() or router.METHOD() and executes for routes defined within that router.

// This middleware function only applied to selected route path, not allowd for all path, returned to client -

//Authentication Making Middle Ware -
const express = require("express");
const server = express();

//Auth Middle Ware Funtion -
const auth = (req, res, next)=> {

    console.log(req.query);

    if(req.query.password=="12345"){

        next();//to pass the current middle ware.

    }else{

        res.sendStatus(401); //401 used for unauthorised client side error.

    }

};

// server.use(auth); //Applied to entire app server i.e auth middle ware added to all path of client request.

// We want Auth middle ware only on some specific route then, It is called as Router Level Middleware, can apply with following way -


// Applying on the specific route with GET Method -
server.get("/", auth, (req, res)=>{

    res.send("Response From Server..! GET Request"); 

});

server.post("/", auth, (req, res)=>{

    res.send("Response From Server..! POST Request"); 

});

server.listen(8001);

