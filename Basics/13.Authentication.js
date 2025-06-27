/*  What is Authentication at Server Side Developer i.e SSR or Backend Developer ?

Authentication : Authentication is an important aspect of web development, which ensures that users accessing an application are who they claim to be. In Express, several authentication strategies are available that help you secure your applications by verifying user identities.

Authentication is the process of verifying the identity of a user or entity. It ensures that the user claiming to be a particular person or entity is indeed who they say they are. In web applications, authentication is typically performed when a user tries to access protected resources or perform privileged actions.

#Authentication Pattern : Two Types of Authentication Patterns -

    i) Statefull Authentication : Which maintains the state or data on the server side.
    ii) Stateless Authentication : which has no state or data on the server side.

#There are several commonly used authentication mechanisms: -

Some Stateless authentication strategies in ExpressJS are -

Basic Authentication
Token-Based Authentication
OAuth Authentication (when implemented with stateless tokens)

Stateful authentication uses cookies to identify the user with their request. In Express.js Authentication strategies such as-

Passport.js authentication
Middleware-based authentication (It can be stateful or stateless depending on the use case and implementation chosen by developers.)



#Statefull - Stores some data of user and generate a ticket and give it to user for getting it back.


In Nodejs Artictecture -

a)While Registeration or User SignUp for the first time -

Client  -----(username/password)------------> Server
Client  <-----uuid(session uid)------------- Server

Here, Server keeps a track of each id and returns to client as uid=367 which client machine holds.

#Ways to transfer uid to client - 
i) in form of response 
ii) in form of cookies(for mostly for SSR) 
iii) in form of headers(for mostly for REST api).



b) While Login After Registration  -

Client(uid:367)  ------GET /users | uid : 367 ------------> Server(Checks the uui = 367 user, if exist already then returns the all response else reject)


Client(uid:367) <------ Response : users ------------- Server(once verifying uuid no.)

#Express Flow of Authentiction -

Client  ----------> Auth MiddleWare----------->  Endpoint Route(at Server)

Here, Auth Middleware purpose is to check the cookie value i.e uuid(if we send uuid into cookie from server), if valid calls next() else rejects the request.


#Problem of Statefull Authentication : (Using session uuid we impletemated), i)i) Here, In statefull auth if our server restart or somehow we lost the state then we need to login again i.e on server restart we lost our state in statfull auth and we need to again login to access.

ii) Statefull auth uses our server memory i.e it is memory intensive.


// User Authentication : We use a unique token to allow user use the service with just validating the token for the same user rather validating the complete username and password. Basically we create a token for logined user and from next time when user ttying to login use just check the token and allow the service for the user to get logined.




#StateLess Authentication : We keep our data/state inside the payload and we make an stamp.

We used JWT(JSon web token) for statless auth -

#jwt Token : It is a json web token used to store the payloads from the server side to send it back to client side either in header or cookie of client request with a user unique secrete key by which someone can read or encrypt the token data.

JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

JWT.IO allows you to decode, verify and generate JWT.

In Short, json web token store our login credentials (in form of token with screcet code encoded) for not using our login and password again and again.

Install : >npm install jsonwebtoken

To Generate a jwt Token -
const jwtToken = jwt.sign({ username : 'theverma' }, 'shhhhh'); //1st paramter : the payloads we send from server side to client and 2nd Paramter : A Seceret key.

 To verify generated jwttoken -
const decoded = jwt.verify(jwttoken, 'shhhhh'); //1st paramter : same generated token previously and 2nd Paramter : The same kept secret key.

console.log(decoded.username) // theverma



FLow of Authentication using jwt token  -

Client --------SignUp-----------> Server
Client <--------Token(stored info emailid or userid)----------- Server

After that-

Client ------------(Token)-------------------> Server(Validated the TOken i.e Decrypt for getting userid and send the responses)

In General, In JWT(Json web token) Token we keep two things i.e pay load and second a secret key(to encrpty the token)


*/