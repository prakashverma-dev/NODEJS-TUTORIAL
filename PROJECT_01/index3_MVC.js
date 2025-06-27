
//In index3_MVC.js : We will seperate all our logic from folder 'index2_mongoose.js' to MVC Pattern With Routes Folder as well, We Generall Keep such folder names - models, controllers, views, routes, connection, middlewares etc. 

//and the General, index.js have the flow our project i.e over-view of our project working.


/* MVC - Model View Controller : Way of Arranging our Project Code In This Design Architecture for all code refractoring, maintainbility and accessibilty in MVC Pattern.



        View         <----      MODEL        <-----       Controller




Here, Controller Manipulate the Model and then Model Updates the View. 

MVC is concept to maintain our large code into three different section so that all our code will not pollute at one file. We will refractor using MVC Concept.

MVC is a way of Refractoring our complete code about project.

*/

//This Folder i.e index3_MVC.js folder reflects the flow of our project, that one developer first visit here and can get all the logic and structure about this project from reading top to buttom. SO this file is consider as base file to understand project flow.

const express = require("express");
const server = express();
const userRouter = express.Router(); //we used a middle level router rather than on main server.
const PORT = 8007;
const {handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser} = require("./controllers/user");

const logReqRes = require("./middlewares/userLog");    

//   "../"  --> One Level Up from Current
//   "./"  --> On Same Level We are

//MiddleWare for http Request bodyparsing -
server.use(express.urlencoded({extended:false}));

//MidleWare for UserClient LogFile -
server.use(logReqRes("./middlewares/log.txt"));

//Note: app.use([path], [middleware_callback_function] );

//We use app.use() method to Mount the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.

//1st argment is the path at which middle ware executes(Default path "/" root path) if user skip the first argument and 2nd argument is can be a callback middleware function or function.



//Routes -(of user) -

//Get ALL Users -
userRouter.get("/", handleGetAllUsers);

//Get a Single User By Id -
userRouter.get("/:id", handleGetUserById);

//Update a Single User By Id -
userRouter.patch("/:id", handleUpdateUserById);

//Delete a Single USer By Id-
userRouter.delete("/:id", handleDeleteUserById);

//Create a New User and Insert i.e Post -
userRouter.post("/", handleCreateNewUser);

// Note : From the Above the routes which are same, we can collab them using method of router i.e .route("path") then in get we only write the handlerFunction as parameter we pass coz path taken by the route("path") method-

//Only Get All Users and Post i.e Create a new User -
// userRouter.route("/").get(handleGetAllUsers).post(handleCreateNewUser) ;

//Rest Are Under targted by ID -
// userRouter.route("/:id").get(handleGetUserById).patch(handleUpdateUserById).delete(handleDeleteUserById) ;


//Middleware for user Routes -
server.use("/api/users", userRouter); //means userRouter Middle ware get execute at first root path as "/api/users" then the followed by userrouter Path i.e at end It renders at "/api/users/<router_path>"


// NOTE : The Flow of Project : First calls "api/users" -->  calls userRouter(Reach To Routes folder if used)  --> used further Route path "/" as per method catch  --> Calls Controller as Second paramter as per Methods catch --> Calls the model for insertion or fetching.

server.listen(PORT, ()=> console.log(`Server Started At Port : ${PORT}`));



