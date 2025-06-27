
/*

#MiddleWare In NodeJS/Express : It is work just like in middle of getting request from client to before sending the desire response to client, there middle ware do his work. Middle Wares are nothing but functions defined before reaching out to response feedback by server.

Middleware Common concept of nodeJs or Server-Client Concept.

Express serves as a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.

Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler. As the name specified, Middleware appears in the middle between an initial request and final intended route. In stack, middleware functions are always invoked in the order in which they are added.

Different type Middleware Functions can be -/ Following is a list of possibly used middleware in Express.js / you should choose the middleware on the basis of functionality required -

i) Application-level middleware : Applied on entirely whole server label, Bound to the entire application using app.use() or app.METHOD() and executes for all routes.

ii) Router-level middleware : On Each specific route '/about' can be middleware. Associated with specific routes using router.use() or router.METHOD() and executes for routes defined within that router.

iii)Error-handling middleware : Handles errors during the request-response cycle. Defined with four parameters (err, req, res, next).

iv) Built-in middleware : Provided by Express (e.g., express.static, express.json, etc.).

v) Third-party middleware : Developed by external packages (e.g., body-parser, morgan, etc.)


#Purpose/Work Done by middlewares can be followings  -
Middleware functions can perform the following tasks-

i) Execute any code.
ii) Make changes to the request and the response objects.
iii) End the request-response cycle.(e.g: Only allowed request from some country and bypass else end the respone cyle)

iv) Call the next middleware function in the stack.(e.g: To pass to next middle ware in the queue in order wise)

Note : Sequence of midddleware of code from top to bottom matters for sending the response or not to client.

#Syntax or How to create middleware/ Middleware function -
The basic syntax for the middleware functions is:

app.get(path, (req, res, next) => {}, (req, res) => {}) ;

Middleware functions take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle, i.e., two objects and one function.

Middleware functions execute some code that can have side effects on the app and usually add information to the request or response objects. They are also capable of ending the cycle by sending a response when some condition is satisfied. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, next().






*/

const express = require("express");
const server = express();

//Creating Middleware in core concept -

server.use((req, res, next)=>{

    console.log("You Entered in Middle Ware Function..");

    //Exploring some http request methods -
    console.log(req.method, req.ip, req.hostname);

    //Generating a log and fetching client browser User-Agent information -
    //Loger Middle Ware -

    console.log(new Date(), req.get("User-Agent")); //req.get() use to fetch some key value from client side.


    // Note : untill we dont call next() function to pass http request to out of middle ware function, just next in the order.
    //If we dont call next(), next code wouldnot get executed and client wait for the response as It woundnot fullfill. 

    console.log("Middle Ware Function..ended up here");
    next();
    // res.end("wow 5")
})

console.log("heyy")

server.get("/", (req, res)=>{
    
    res.send("Wow 1"); //Note: when sending back the response to client in first encounter, life-cyle of response body get end.
} );


server.get("/", (req, res)=>{
    
    res.send("Wow 2"); //If reaches here in nodejs then server would get crashed by express handled it by not crashing and ending up the response in the first call.//res.end() or res.send() or res.json() all these response method who send back "response body" to client, and server life cycle get ends after all these method encounters.
} );

server.listen(8000);




