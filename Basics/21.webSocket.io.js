/*
# Websocket : We can implement websocket connection using socket.io library. Basically in simple http request-response, everytime the connection get closed after one req-res cycle ends.(here, we need to end the response once we recieve a request so client can read) But, In websocket once we make a http connection with websocket i.e http websocket(wb) connection which is with the help of upgrade header. 

Thus, Websocket connection is bi-directional means anytime client-server can communicates in any number of request or response from any sides.

//Webscoket is/sets bi-direction communication protocol where connnection not ends untill client doesnt ends.

//Socket.IO enables real-time bidirectional event-based communication.

//Polling vs Websocket(In Chat) : Polling normal HTTP req-res cycle which ends at each once cyle, here users has to poll/request each time to server for response without knwing that whether server has that response or not which user wants so in this case user time get wasted as user every time poll for his response and wait, Which websocket solves the problem and make a http websocket connection with server which not end untill client/user doesnt want to end i.e leave the connection.

//Working and setup of websocket connection with http request :-

Initially we send a http request and tells in http header request that we want its http request to upgrade to websocket and then server handles this request and establish a websocket connection for us.

What is Upgrade in HTTP Headers :  The HTTP 1.1 (only) Upgrade header can be used to upgrade an already established client/server connection to a different protocol (over the same transport protocol). For example, it can be used by a client to upgrade a connection from HTTP 1.1 to HTTP 2.0 OR, From HTTP or HTTPS connection into a WebSocket.

The Upgrade header field may be used by clients to invite a server to switch to one (or more) of the listed protocols, in descending preference order.

For example, the client might send a GET request as shown, listing the preferred protocols to switch to (in this case "example/1" and "foo/2"):

        GET /index.html HTTP/1.1
        Host: www.example.com
        Connection: upgrade
        Upgrade: example/1, foo/2

The server can choose to ignore the request, for any reason, in which case it should just respond as though the Upgrade header had not been sent (for example, with a 200 OK).

If the server decides to upgrade the connection, it must:

 a) Send back a 101 Switching Protocols response status with an Upgrade header that specifies the protocol(s) being switched to. For example:


        HTTP/1.1 101 Switching Protocols
        Upgrade: foo/2
        Connection: Upgrade

 b) Send a response to the original request using the new protocol (the server may only switch to a protocol with which it can complete the original request).   
 
 #Syntax : -

    Connection: upgrade
    Upgrade: protocol_name[/protocol_version]

    Example: 

    Connection: upgrade
    Upgrade: websocket

Note : TO establish the websoket connection in nodejs, we have a library name scoket.io which makes easy to handle websocket with nodejs application.

socket.io library Some implementations in other languages are also available:

Java
C++
Swift
Dart
Python
.NET
Rust
PHP

To start socket.io with nodejs :-

Install : >npm i socket.io


To see the example and working in PROJECT_04 -




*/