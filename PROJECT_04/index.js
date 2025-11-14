
const express = require("express");
const server = express();

//Here we dont listen directly on server.listen() - XXX, in websocket connection establishation, we need to attach websocket with express so we need/require the core http module -

const http = require("http");
//Then we need to create a http server using http module and we pass the exprees server inside the createServer() method of http -
const httpServer = http.createServer(server);

server.use(express.static('public'))

//Static HTML file servering(we can use express middleware to serve it better, which is used above without any server END point called.. dammm)
// server.get("/", (req, res)=>{

//     // res.send("heyy");
//     // res.send(__dirname); // G:\My Work - Mphasis Laptop\NODEJS TUTORIAL\PROJECT_04

//     //res.send(__filename); // G:\My Work - Mphasis Laptop\NODEJS TUTORIAL\PROJECT_04\index.js
//     res.sendFile(__dirname+'/public/index.html');
// });


// Integrating Socket.IO with HTTP Server -

//Then we require the 'Server' Class  from socket.io and we create a io instance of socket and we pass the myHttpServer inside Server() class - 

const {Server} = require("socket.io"); //'Server is class of socket.io libraby

const ioSocketServer = new Server(httpServer); //io is the server of socket.io which handles all http request in bidirectional.


//NOte : all my http request handle by express Server and all socket.io request handle by ioSocketServer -
ioSocketServer.on('connection', (socketClient)=>{

    console.log("A new client user connected with socketId : "+socketClient.id);

    socketClient.on('sendTextToServer', (receiveMsg)=>{

        // console.log("A new user connected with Message : "+ receiveMsg);

        //We want that user message send back to every user of client, so we use all io(input-output) -
        ioSocketServer.emit('sendTextToALLClients', receiveMsg);

    })
    
})

// Note : Notice that I initialize a new instance of socket.io by passing the server (the HTTP server) object. Then I listen on the connection event for incoming sockets and log it to the console.

// Note : In socket world, we call each client i.e user as indivisual socket with their unique id which socket creates internally.




//Now, we dont listen on server.listen() whereas we listen on myHttpServer -

httpServer.listen(9000, ()=> console.log("Server started on 9000 PORT!"))

