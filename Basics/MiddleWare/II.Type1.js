

// #1. Application-level middleware :- Applied on entirely whole server label, Bound to the entire application using app.use() or app.METHOD() and executes for all routes.

const express = require("express");
const server = express();

//Application-level middleware
server.use((req, res, next)=>{

    //Loger Middle Ware (which will applied to entire server level with all path route)

    console.log(req.method, req.ip, req.hostname, new Date(), req.get("User-Agent")); 

    next();

});

server.get("/", (req, res)=>{
    
    res.send("Response From Server..!"); 
} );

server.listen(8000, ()=> console.log('server started at 8000'))


