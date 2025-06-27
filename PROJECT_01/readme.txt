
//PROJECT_01 : Creation/Designing of REST API using ExpressJS Framework -

step1: git init -y (to initialize the project with package.json)
step2: npm i express
step3 : work inside index.js with require("express)
step4 : We need data from database which we dont have, we used the hardcore data from the website https://www.mockaroo.com/ as per requirement and downloaded in json formate.

https://www.mockaroo.com/   - Generates Fake Data for Testing Purpose.

Note : To run this project, created a start script in the package.json, To run : npm start (npm <script_name>)


#Tasks of Designing REST API - JSON 

//Routes -

GET /users   - Return the HTML Document Reader Page(SSR)  - (TASK-0)

GET /api/users   - List all users JSON data    (TASK-1)
GET /api/users/1   - Get/List the user with ID 1
GET /api/users/2   - Get/List the user with ID 2

Dynamic Path(:id) Parameters-
GET /api/users/:id  - Get the user with ID=id (Here, :id -> Dynamic i.e Variable )                                     (TASK-2)

Static Path(id) Parameters-
GET /api/users/id  - Get the user with ID=1or2 (Here, id -> Static i.e Fixed/Same)


POST /api/users  - Create a new user data    (TASK-3)


PATCH /api/users/1  -  Edit the user with ID 1
PATCH /api/users/2  -  Edit the user with ID 2
PATCH /api/users/:id  -  Edit the user with ID=id(as id is variable)  (TASK-4)

DELETE /api/users/1 - Delete the user with ID 1
DELETE /api/users/2 - Delete the user with ID 2
DELETE /api/users/:id - Delete the user with ID=id(as id is variable)  (TASK-5)



Note : i) Before creating a new user, Remember to use the body Parser so that Express will able to read HTTP request body data.

ii) Before Using Router directly, Remember to connect Router with 
server.use("/base_url", yourRouter) middle ware, so express will understand that i have to user 'Router' varible on the server. 

//In SHORT -
iii) Dont forget to use middle wares in project while working with HTTP Request body data and when using any routes for express.Router() method,i.e followings -

    server.use(express.json()); //For JSON Data Parsing from HTTP Request Body
    server.use(express.urlencoded({extended : false}));//For Form Data Parsing from HTTP Request Body

    server.use("/url", urlRouter); //For Backend URL Routes
    server.use("/", frontendRouter); //For Frontend URL Routes
