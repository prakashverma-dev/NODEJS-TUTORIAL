/*
A stream is an abstract interface for working with streaming data in Node.js. The node:stream module provides an API for implementing the stream interface.

Streams can be readable, writable, or both. All streams are instances of EventEmitter.

Node.js streams are a key part of handling I/O operations efficiently. They provide a way to read or write data continuously, allowing for efficient data processing, manipulation, and transfer.

The stream module in Node.js provides an abstraction for working with streaming data. Streams are a powerful feature that allows handling data in chunks rather than loading it all at once, which is efficient for both memory usage and performance.

Why we need the stream, what was the problem we facing while reading/writing files with fs module ?

TO see this we have a external package : 'express-status-monitor'  -> which tells the our express's server memory uses i.e consumption and CPU uses i.e utilization.

'express-status-monitor', a self-hosted module based on Socket.io and Chart.js to report realtime server metrics for Express-based node servers.

Installation & setup of 'express-status-monitor' : -

Install : >npm i express-status-monitor --save

To add to Project, req :-
const status = require(''express-status-monitor'')

Before any other middleware or router add following line: -
app.use(status());

Run server and go to /status

Advantages of Streams over fs module methods data handling methods:-

Time Efficient: We don’t have to wait until entire file has been transmitted. We can start processing data as soon as we have it.

Memory Efficient: We don’t have to load huge amount of data in memory before we start processing.

#Types of Streams in Node.js: -  There are four fundamental stream types within Node.js -

i) Readable: We can read data from these streams. e.g., fs.createReadStream().

ii) Writable: We can write data to these streams. e.g., fs.createWriteStream().

iii) Duplex: Streams that are both Readable as well as Writable. e.g., net.socket.

iv) Transform: Streams that can modify or transform the data as it is written and read.  e.g., zlib.createDeflate.

Additionally, this module includes the utility functions stream.duplexPair(), stream.pipeline(), stream.finished() stream.Readable.from(), and stream.addAbortSignal().


To access the node:stream module:

const stream = require('stream'); 


#Streams Promises API : -

The stream/promises API provides an alternative set of asynchronous utility functions for streams that return Promise objects rather than using callbacks. The API is accessible via require('node:stream/promises') or require('node:stream').promises.


*/
const express = require('express');
const server = express();
const fs = require("fs");

const status = require("express-status-monitor");
server.use(status());

//Task1 : We trying to read a file with fs module -
server.get("/", (req, res)=>{

    //Here, we first load the data completely and save it to our CPU memory, and then we send it back to client ie on sever hit once the complete data get loaded then only we able to see on client side i.e static file loading -
        fs.readFile("./demo.txt", (err, dataa)=>{
        // res.end(dataa);
        console.log(dataa)
        
     })

     //Rather Reading the file, we can do the streaming of file which loads the data in chunks and we see data in parts and once it get loaded we can see it completly, It save our server memory and server cpu uses.

     //basically in streams we create a pipeline, which handles the sending and recieving data at a time rather loading the complete data.

     //We basically created a readStream pipeline -
     const readStream = fs.createReadStream("./demo.txt"); //All streams are instances of EventEmitter, so all metods of em are applicable on streams.and on stream em have their own defined 'eventName' like e.g : data, end, error, resume, readable etc...

     readStream.on("data", (result)=>{

        res.write(result); //By default, when we use res.write(), express set the response header with, Transfer-Encoding: chunked (which is neccesary for sending data in chunks else data going there as complete at once.) and at the beginning of each chunk or while Transfer-Encoding: chunked, the response Content-Length header is omitted. 

        //Note : Untill we dont set the response headers key-value as Transfer-Encoding: chunked, then our stream data will not go in chunks, NOTED.


        // Transfer-Encoding: chunked --> means telling browser data is going in chuncks dont stop the request untill complete file get sent.

        // Chunked transfer encoding is a streaming data transfer mechanism available in Hypertext Transfer Protocol (HTTP) version 1.1, defined in RFC 9112 §7.1. In chunked transfer encoding, the data stream is divided into a series of non-overlapping "chunks". The chunks are sent out and received independently of one another.

        //Note : Data is sent in a series of chunks. The Content-Length header is omitted in this case and at the beginning of each chunk

     /*     Transfer-Encoding: chunked
            Transfer-Encoding: compress
            Transfer-Encoding: deflate
            Transfer-Encoding: gzip

        // Several values can be listed, separated by a comma -

            Transfer-Encoding: gzip, chunked

          */
        
        // console.log(result);


     })

     //when read stream get ended, then we need to call 'end' event to end the req-res cycle, else response will not end.. -
     readStream.on("end", (result)=>{

        res.end();
     })

});

//Task 2: To read a file and make a .zip of it and then send back to client.

// Ways1 : 
//400MB File  --> 400MB at Memory(.zip) --> 400MB Write i.e Send (Our memory uses 800MB)

// Ways2 : 
//Stream 400MB File  --> 400MB at Memory(.zip) --> 400MB Write i.e Send (Our memory uses 800MB)

//Ways3: using 'zlib' nodejs built-in module which basically compress the file into .zip file without memory uses i.e we zip the file and we send it to client without storing into server memory.

//Using ways3 -
const zlib = require("zlib");
const readStream = fs.createReadStream("./demo.txt")

//Stream Read(demo.txt)  --> Zipper ---> fs write stream
readStream.pipe(
    zlib.createGzip().pipe(fs.createWriteStream('./sample.zip'))

);

// pipe() method of stream object create a pipe for operation rather using memory!

// zlib.createGzip() method create the stream file object into .zip file.



server.listen(8000, ()=> console.log("Server started on 8000!"));

