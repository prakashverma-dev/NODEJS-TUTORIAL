

/*  #Client-Server Architecture : We have two elements in this i.e client side/User's Browser and other side is Web Server Side like each website have their own server like google have their own server and each website have their own server to communicate with client side for getting the data from the respective web server side.

So, How Client side i.e browser communicate with respective web server, the answer is via HTTP or HTTPs Protocol, that's the only way user's browser can communicate with his own server which might be eastlish in nodejs/php etc. 


Web server also connected with database server for accessing desired date from their. 

How Works Communication : Always Client makes the initiating for the communication with server via sending the request first then server reads the data needed for the client side so after proccess the required information, then server respond to client via Response way.SO here we conclude -

Request(req) : always Clients sends the request to server for wanting some information (sends via https or http).

Response(res) : via response way server sends back the desired response to client, which needed by client(vai same path i.e https or http)

Note : Port Number of https protocol is 443 .

# As Clinet Do the HTTP Request(in the HTTP request Line), then server sends the HTTP Response(in the HTTP response Line) with a 'Status Code' which implies the request wanting either fullfilled or rejected or get some problem either from client error or our own error(server error).

Thus, HTTP Response Line can have following either one 'Satus Code' : -

i) 2xx (Success Code) : 2xx means jo client request kiya tha via HTTP Request, woh succefully fullfilled kar diya gaya hai with either following success code -

200 - "OK"  (OK means everthing is succefull means jo bola tha woh ho gaya)
201 - "Created" (Data has been created succefully, that's user Request)
202 - "Accepted" (Jo Bola tha woh accept karke success ho gaya hai)

ii) 3xx (Request Redirections) : Server Respond these code to client/browser when there will be any Redirection happened, like such codes -

301  -  MOoved Permanently
302  - Found
304 -  Not Modified

iii) 4xx (Client Side Error) : 4xx matalab jo request kiya gaya the user dwara woh server par found nahi hai or. wrong request hai or, request authorized nahi hai or, kuch gadbad hai client side me hi(like wrong HTTP method or syntax error), aur Server REJECT kar deta hai request with response with either one code below -

400 - Bad Request
401  - Unauthorised Request
403 - Forbidden Request
404 - Not Found At Server
405 - Method Not Allowed

Server if sends anyone of above status code to client browser measn client has done some mistake in asking the request which server can't fullfill and Rejects.


iv) 5xx (Server Erorr) : 5xx matlab bhai client ki galati nahi hai, meri galati hai means Client jo HTTP Request kiya hai, meri galati ke karan main apki request fullfill nahi kar paa rha, aur HTTP response me either one code Server sends -

500  -  Internal Server Error
502  -  Bad Gateway



## Note:- To see all the status code in browser : Go to dev tools i.e Developer Tools and switch to Network Tab and you can do the throttling i.e controlling the speed the http loading and getting back the response from web server.

You can make slow 3G , offline 2G etc. 

#We can see the total number of request for a perticular domain or domain with path, under the Network tab.. So no of request always = no of response. 

# Browser has classified all the type of content for request and response in filter section like all, Js, document, font, css, js etc which are possible request and response content type could be for a https request.


# Context-Type : It the Type of Content that server delibertly sends or want to set before sending his content to client so that client understands wht kind of data server sent me.

// It could be of any type below : -

Syntax: Content-Type : <media-type>

Content-Type : text/html (for sending html document type)
               text/javascript (for sending js file type)
               application/json (for sending JSON string data)  
               text/css (for sending css file type)
               image/png (for sending image type)
               multipart/form-data (for sending form data type)



*/

//We have http module in nodejs(which nodejs inbuilt module) for working up with http and creating server -

const http = require("http");

// createServer() takes a request listener function which is callback function responsible for handling each time request from client side means whenever user refresh the page on browser/client side then this callback function get runs. Here, callback function takes two argument i.e req and res for working with request recieved by client and for sending response(as some data) from server to client side.

// and this method Returns created <http.Server>

// Server is a type of function which runs on each request entered by user from client side i.e browser side.

// Creating a local server -

const data = {age : 5} ; //JS object
const createdServer = http.createServer((req, res)=>{

    console.log("Server Started");


    //Wants to see or access and work with recieved request from client side -
    console.log(req.url);

    // Wants to send data to client side in form of response (res can have multiple methods) -
    res.setHeader("dummy", "dummyValue"); //setting up a new dummy header response from server side to send it to client side, takes key-value pair as argument seperated with space.

    // Wants to send the JSON string to client -
    // res.setHeader("Content-Type", "application/json"); 

    //Sending the content type to the browser, to specify which type of content we sending -
    res.setHeader("Content-Type", "text/html");


    //Note : At the end we means once we done with all other info that we want to send to client we end the res.end() at the last line so it will send it out.
    // res.end(JSON.stringify(data)) ; //ending the response with providing some data to display on client UI, It is optional as res.end() require to end the server means sending it back to client side, thus shows completion of request and response of http protocol.

    res.end("Ram");

}) ; 


createdServer.listen(8000) ; //We binded the created server on port number 8080 to see the response their.


// # JSON.stringify() ; takes JS object and transfer it into JSON string type.

// # JSON.parse() ; takes JSON string and convert to Javascript object type.

// NOte : When server get started then it render two times first for the our URL request to server side and 2nd server request is done by browser itself bydefault for its favicon.icon which ask the info/data about the favicon to the server side and if we handled that favicon request by browser then we can see the favicon after url hit means got the response for /favicon.icon url path.

//  https://wwww.google.com/about 

// Here:  /about is kwnown as url path name.

// www.google.com is a server or host and after this kwown as url for http request by browser/client.

// NOte : http request se bhi data access kar sakte hai jo browser ke side se aaya hai aur http response se data bhej sakte hai.
