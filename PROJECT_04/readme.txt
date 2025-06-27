

#PROJECT_04 : - Stablishing a chat-app with socket.io library -

//Some dependencies we need -

>Install i express socket.io

//TO work on frontend side we can use ejs, But here we use simple js i.e in public folder we create the index.html, and include this in main index.js with a middleware -

server.use(express.static("./public")) ; //to enable the simple static frontend js files. 


//TODO: 

    [+] Create NPM project 

    [+] Create Index, Css, Js files

    [+] Install dependancies. express, nodemon(dev dep.)

    [+] Create a express server (server.js)

    [+] do frontend part

    [+] Install socket.io, Setup socket.io in server.js and client client.js

    [+] Client send message logic in client.js

    [+] Recieve message on server and broadcast to all clients

    [+] Recieve message on client and display it. scrollToBottom etc...
    