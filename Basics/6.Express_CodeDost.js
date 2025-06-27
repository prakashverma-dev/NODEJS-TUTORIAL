

const express = require("express"); //returns an function.

//Creating Server using ExpressJS is so easy -

const server1 = express(); //server1 created. //server start Part


//We write our code here for sending response to client -

server1.get("/", (req, res)=>{

    //i. Send string or HTML code -
    // res.send("Hello Prakash") ;//Sends the HTTP response(if sending string then send() method sets the Content-Type : "text/html" bydefault.)

        // res.sendFile("G:\My Work - Mphasis Laptop\NODEJS TUTORIAL\Basics\Web Server\Example\II.static.html") ; //Provide the file path 

        // res.json(); //for sending json data //Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

        
    /*
    NOte :  i) When the parameter is a String, the send() method sets the Content-Type to “text/html” by default -

        res.send('<p>some html</p>') ; //when string data it sends as HTML doc to client i.e sets Content-Type : “text/html” by default for string input. 


        ii) When the parameter is an Array or Object, Express responds with the JSON representation:

        res.send({ user: 'tobi' }); //if input is array or object sends as json formate.
        res.send([1, 2, 3])
        
        iii) res.json([body])
        
        Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

        The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.

        res.json(null)
        res.json({ user: 'tobi' })
        res.status(500).json({ error: 'message' })

        iv) res.set( "field" , "value") -->  Sets the response’s HTTP header field to value. To set multiple fields at once, pass an object as the parameter. e.g: 
                res.set({
                        'Content-Type': 'text/plain',
                        'Content-Length': '123',
                        ETag: '12345'
                        })

                res.set('Content-Type', 'text/plain')
                
        v) res.get("field")  --> Returns the HTTP response header specified by field. The match is case-insensitive.

                    res.get('Content-Type'); // text/plain

        vi) res.status(code) --> Sets the HTTP status for the response. It is a chainable alias as res.status(code).<chain_methods>

            res.status(code);
            res.status(403).end()
            res.status(400).send('Bad Request')
            res.status(404).sendFile('/absolute/path/to/404.png')

            can Also, res.sendStatus(404);

        vii) res.redirect(status, urlPath or static Path) -->  Redirects to the URL specified at path parameter, with optional first paramter as status code. If status code is not specified, status defaults to “302 “Found”.

            res.redirect(301, 'http://example.com')
            res.redirect('http://google.com'); //redirecting to different site.

            Redirects can be relative to the root of the host name. For example, if application is on http://example.com/admin/post/new, the following would redirect to the URL http://example.com/admin-

            res.redirect('/admin'); //Redirected to root url from relative API URL.

            res.redirect('post/new'); //redirected to upper relative URL from current URL/API.

            res.redirect('/foo/bar')           
            res.redirect('../login')
            

       viii) res.render(view [, locals] [, callback])  ---> Renders a view and sends the rendered HTML string to the client. Optional parameters:  
        // send the rendered view to the client
            res.render('index')   


        ix) res.end([data] [, encoding]) : Ends the response process. This method actually comes from Node core, specifically the response.end() method of http.ServerResponse.

        Use to quickly end the response without any data. If you need to respond with data, instead use methods such as res.send() and res.json().

            res.end()
            res.status(404).end()    


    */

            // res.status(201).send("Hey Prakash..........This is GET Method!")
            res.status(201).send({ye_hai : "Hey Prakash..........This is GET Method!"})
});


//Testing other HTTP Request methods on same end point/url with help of PostMan(which allowing us to send POST, PUT, PATCH, DELETE MEthods as well) -

//Web API or API / End Point / Route - all these we called below -
server1.post("/", (req, res) =>{

    res.send({ye_hai : "POST Method"})
})
server1.put("/", (req, res) =>{

    res.send({ye_hai : "PUT Method"})
})
server1.patch("/", (req, res) =>{

    res.send({ye_hai : "PATCH Method"})
})
server1.delete("/", (req, res) =>{

    res.send({ye_hai : "DELETE Method"})
})





// to listen the server on port -
server1.listen(8011, ()=> console.log("Server started on 8011")); //Server end part

