
#PROJECT_02 : URL Shortener Project with JWT Authentication : -

Design a URL shortener service that takes in a valid URL and returns a shortened URL, redirecting the user to the previously provided URL.

Also, keep track of total visits/clicks on the URL.


Routes -

POST /URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id.(For Creating the Short-URL)

GET /:id - Redirects the user to the original URL(For Getting to the Orginal Site with generated Short URL)

GET /URL/analytics/:id - Returns the clicks for  the provided short id.



SOLUTION :-

step1 : >npm init -y (for setup the project)

We need the some dependencies to work with Project -

>npm i express
>npm i mongoose
>npm i nodemon
>npm i short-unique-id(for generating a unique id every time on http request)
>npm i ejs (for dynamic templating)

>npm i bcrypt (for user password hashing with saltRounds i.e encrypt)
>npm i jsonwebtoken(for jwt token generation for auto login with recognizing user)

>npm i dotenv (for storing our secret keys so it will not go to deplyoment)

>npm i cookie-parser (installed third party middleware for parsing the cookie data from HTTP Client Request machine )



Note : What is payload in api ?

payload in api is nothing but the body of the http request or http response when data either sends from client or received from server, the data is being transmitted through the payload i.e payload holds the data for either sending from client or receiving from the client.

The payload of an API is the data you are interested in transporting to the server when you make an API request. Simply put, it is the body of your HTTP request and response message. 

In short, In the context of REST APIs, a “payload” refers to the actual data that is being transferred between the client and the server. It is the body of the HTTP request or response, containing the information that needs to be sent to or received from the server.

 