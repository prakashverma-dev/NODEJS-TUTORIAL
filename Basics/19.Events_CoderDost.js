// Event : A style of programming is event, and event is nodejs core architecture and module. An event has an action and a listener to listen.

// Nodejs is event-driven architecture 

// Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

const EventEmitter = require("events");

//To Create our own Event in nodejs file -

// In Nodejs, events module have a base class name as 'EventEmitter()" to create instance of this class as object for registering the events.

const em = new EventEmitter();

// To Regisrer a our own event, we use 'em' with the .emit() method to emit the i.e generate the new mentioned event name. 

em.emit("SpeakLoud", {name : "Dummy Name"}); //I named our own event name as 'SpeakLoud' //.emit() method accepts two argument, 1st Arg(Required) : Mention The Event Name and 2nd Arg(optional) : The Data(in form of an object) we want to send when this event get listened or triggered.

//TO listen our created event, we need to handle with .on() method on em -
//.on() method accepts two argument, 1st : EventName (to listen); 2nd : a callback function to get executed when that event get triggered or hitted, if data is also sent by emit() method, then we can accept with argument providing to callback.

em.on("SpeakLoud", ()=>{

    console.log("Hey Prakash I'm Listening You..Please Speak Something!")
});

em.on("SpeakLoud", (data)=>{

    console.log("Hey Prakash I'm Listening You..Your Data is + ", data); //{name : "Dummy Name"}

});

// To use/Run this Register event and listern, call this file as top level global require as require("./19.Events.js"); at the server running file.


//The two Best example of Event based architecture is -

// a) streams(nodjes inbuilt libray) and 
// b) sockets - soket.io (external library)


// a) streams : streams are an event based EventEmitter class, object used for readingStream files in chunks, writingstream files in chunks, or both files in chunks.

const fs = require("fs");
const readFile = fs.readFileSync("./README.md");
console.log(readFile)

const chunkFile = fs.createReadStream("./README.md"); //we can create limited buffer size to read file in limited size.

chunkFile.on('data', (c)=>{
    console.log(c)
    // res.end(c)
}) //We appply on(), emit(), etc on the eventEmitter(em) object created from the instance of EventEmitter() Class.

chunkFile.on('end', (c)=>{
    console.log(c)
})

// Note : stream event emitter have the different their own defined "event names" are there for working with Stream Event Emitter object. e.g : data,end, error, resume, readable etc...

// b) sockets : To work with sockets we have the external library name socket.io which helps in communicating with client and server without using http methods i.e request and response.

// websocket : Websocket doesnot run on the request-response mechanism of http, it runs on a kind of permanent connection between client machine and server machine, here we can interchange data without request and response, basically create a tunnel in websocket.

//Socket.IO provides the Bidirectional and low-latency communication for every platform

//Socket.IO enables real-time bidirectional event-based communication. It consists of: a Node.js server (this socket.io) and a Javascript client library for the browser (or a Node.js client).

/*TO work with websocket -

 Install: >npm i socket.io

 To integrate socket.io with express -

    const app = require('express')();
    const server = require('http').createServer(app);

    const io = require('socket.io')(server);
    
    io.on('connection', () => { 
        
        });
    server.listen(3000);



*/
