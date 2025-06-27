/* 

#cluster Module : - Using cluster we distributes our server work loads to differnt PID(proccess indentifier or process ID.) i.e workers.

Clustering in Node refers to a technique used to enhance the performance and scalability of NodeJS applications by utilizing the capabilities of multi-core systems. With clustering, you can create multiple instances of the NodeJS process, known as workers, each running on a separate CPU core. By distributing the workload across these workers, applications can handle a higher volume of requests and utilize the available system resources more efficiently.

Clustering allows NodeJS applications to take advantage of the inherent parallel processing capabilities of modern hardware. Instead of running a single NodeJS process to handle all incoming requests, clustering enables you to create multiple identical worker processes that can share the incoming workload. Each worker operates independently, listening for incoming connections and processing requests concurrently.


// we use Cluster  to scale our nodejs application.

//Problem : When after production of application, when many users interact with same server, due to single server the loads get increase on the server coz of at a time many con-current users making their request i.e hitting some request to same server.

//Solution : To solve above problem, we can use nodejs inbuilt cluster module to divide the server loads to multiple server processing based on user system no of cores available.

Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.

The cluster module allows easy creation of child processes that all share server ports.

We will share the same port with available pid(proccess id of system) of the system with different workers.

The cluster module allows you to create a cluster of worker processes, manage communication between them, and handle process lifecycle events such as worker creation, termination, and message passing.

#To Implement Clustering in Node -

Require nodejs builtin'cluster' in application --> check total no. of CPU cores in our system  --->  


//To know how many workers we want to create which decides by system os total number of cores -

console.log(require('os').cpus().length );  //4 - No of core in browser!

#Cluster Properties and Methods :-

Method	Description
disconnect()	Disconnects all workers
exitedAfterDisconnect	Returns true if a worker was exited after disconnect, or the kill method

fork()  ->	Creates a new worker, from a master

id	A unique id for a worker
isConnected	Returns true if the worker is connected to its master, otherwise false
isDead	Returns true if the worker's process is dead, otherwise false

isMaster  ->	Returns true if the current process is master, otherwise false
isWorker  -> 	Returns true if the current process is worker, otherwise false

kill()	Kills the current worker
process	Returns the global Child Process
schedulingPolicy	Sets or gets the schedulingPolicy
send()	sends a message to a master or a worker
settings	Returns an object containing the cluster's settings
setupMaster()	Changes the settings of a cluster
worker	Returns the current worker object
workers	Returns all workers of a master

//


*/

const os = require('os');
const express = require('express');

const cluster = require("cluster");
const totalCPU = os.cpus().length; //4

// console.log(totalCPU);

// const totalCPU = os.availableParallelism(); //4


if (cluster.isPrimary) {

    console.log(`I'm a Primary i.e Master of ProcessID : ${process.pid} is running!`);
    // cluster.isPrimary --> On application run, checks top-bottom if it is primary cluster or not means is it master proccess ID i.e the first Proccess ID for this nodejs application, if yes i.e true then we create the works to handle our server loads into multiple workers i.e multiple pids.

    //Creating Workers i.e Fork Workers(In cluster module language) as per os core number means that many times we run cluster.fork(); means we assigned that times  -

    for (let i = 0; i < totalCPU; i++) {

        cluster.fork();//created workers as many times of cpu core numbers.
    }


    //If any case, any created worker get die, then we managing again -
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });


} else {

 //Else I will run my express server -

    console.log(`I'm a Worker of ProcessID : ${process.pid} is running!`);

    const server = express();
    const PORT = 8000

    server.get("/", (req, res) => {
        res.json({
            
            message : `Hello from server with ProcessID : ${process.pid}`});

    })
    
    server.listen(PORT, () => console.log("Server running on 8000!"));


}

//Note : we use cluster to hanlde concurrent users at a time smoothly and fastly on same server.

// Note : What is process ID used in os for?
// PID, is a unique numerical identifier assigned to each running process in an operating system. It helps in managing and controlling processes, allowing the system to allocate resources and prioritize tasks effectively.

// PIDs help to distinguish between concurrent processes on os.