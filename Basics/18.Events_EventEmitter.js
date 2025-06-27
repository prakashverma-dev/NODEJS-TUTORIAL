/*

Events : In Nodejs or in any other programming langauage all things are event based means for some event i.e action we see some output. It is mosly use in javascript and html.

It is nodejs inbuilt module.

Event means to perform action i.e event emits an signal means once we click on any events we sends an signal to perform some action/output.

Event Emitter : A things that generate/produce an event known as event emitter.e.g: In HTML, buttom is the event emitter.

According to the official documentation of Node.js, Nodejs is an asynchronous event-driven JavaScript runtime. Node.js has an event-driven architecture which can perform asynchronous tasks.

------------------------------------------------------

Node.js is event-driven applications

Every action on a computer is an event. Like when a connection is made or a file is opened.

Node.js has a built-in module, called "events", where you can create-, fire-, and listen for- your own events.

To include the built-in 'events' module use the require('events') method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object instance like this -

const events = require('events');
const eventEmitter = new events.EventEmitter();




*/

const express = require("express");
const server = express();

const events = require("events");
const eventEmitter = new events.EventEmitter();

let count = 0;
server.get("/",(req, res)=>{

    res.send('Home API Called');
    eventEmitter.emit('countAPI'); //we created our own event name as 'countAPI and emmited this event inside this function once it trigered we hold the evemt action in event handler function.
 
  })
server.get("/search",(req, res)=>{
    
    res.send('Search API Called');
    eventEmitter.emit('countAPI');
 
  })
server.get("/update",(req, res)=>{
    
    res.send('Update API Called');
    eventEmitter.emit('countAPI');
 
  })

//We want to count how many api getting called and we store in database.

//To Handle the Registered event -

eventEmitter.on("countAPI", ()=>{

    count = count+1; //count++ ;
    console.log(`API Called : ${count}`);

})










 
  
  
server.listen(8000, ()=> console.log("Server started on 8000!"))