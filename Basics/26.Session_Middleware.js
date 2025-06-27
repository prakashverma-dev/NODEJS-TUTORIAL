

/*

# express-session : This is external library of npm, works as a middleware to create the session for user login and signup .

What is Server session : Client sends some data (e.g session.name) to server to store, in real world client sends some session id to server to store and server recognize the client by that store data i.e by that session id. so we dont store much data on server for heavy load. When server sends i.e response to client in cookie.

To create server session we can use express-session middle ware : -

>npm i session-express

#Note Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

#Note Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work. This module now directly reads and writes cookies on req/res. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.


*/ 
const express = require('express');
const app = express();

const session = require("express-session");
// app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge : 60000 } //60,000 ms - cookie will destroy
}))

app.get("/",(req, res)=>{

    if(req.session.testValue ){
        req.session.testValue ++ ;
    }else{
        req.session.testValue  = 1 ;
    }

    res.send(req.session.testValue.toString());
})

app.listen(8000, ()=> console.log('server started on 8000!'));