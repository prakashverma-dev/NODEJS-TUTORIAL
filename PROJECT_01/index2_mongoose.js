const express = require("express");
const mongoose = require("mongoose");

//Mongoose Setup- Schema, Model -
//Schema -
const schema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true, //Means firstName is required unless entry will not insert to database.
    },

    lastName : {
        type : String, //HEre, We didnt pass required so bydefault it accepst false means user LASTName we can keep it as optional to insert.
    },
    email :{
        type : String,
        required : true,
        unique : true  //Same email can't exist anywhere in database, measn cant insert duplicate emailID. //Before Inserting email id provided by user, unique : true make sure to check it again in the database that it is exist or not.
    },

    jobTitle :{
        type : String
    },
    gender : {
        type : String
    }

}, {timestamps : true} //It adds the two extra fields i.e createdAt and updatedAt with its value while each time we insert data. 

)

//Model -
const usersModel = mongoose.model('user', schema);  //Here, We named model name as 'user' which treated as collection name(if there fine not created newly) while model converts it to pluaral and lower cased collection name as "users".

//MongoDB Connection with Mongoose -
mongoose.connect("mongodb://127.0.0.1:27017/youtubeApp")
.then(()=> console.log("MongoDB Connected.."))
.catch(err => console.log("Error : "+err));


//Beigns WIth RESTAPI using ExpressJS -
const server = express();
const PORT = 8007;


//TASK-0(General Printing Some Data From All Users)
server.get("/users", async (req, res)=>{

    const users = await usersModel.find({}); 
    const html = `<ul> 

                <!-- want to render each firt_name from DB here in <li></li> -->
                        ${users.map(item => `<li>${item.firstName} - ${item.email}</li>` ).join("") }

                </ul>` ;
// join("") ; means array ke each item ko kaise join karana hai string me, we used empty string to join.

    res.send(html) //.send() methods sends any string data as text/html ;
           
           
});

// TASK-1(Get all Users)  :  GET  "/api/users"
server.get("/api/users", async (req, res)=>{

    const users = await usersModel.find({}); 
    return res.json(users);
});

// TASK-2(Get a User based on ID)   : GET  "/api/users/:id"
server.get("/api/users/:id", async (req, res)=>{

    const paramsId = req.params.id ; //string datatype
    const user = await usersModel.findById(paramsId) ;// Here, user(singular) indicate single object.

    // Note : findOne({_id : paramsId}) is same as findById(paramsId) , use any.
 
    return res.json(user); //single user(singular) object get returned.

});

// TASK-3:  POST  "/api/users"  
// (We can do the POST, PATCH, DELETE Request From Postman, as Browser bydeault do the GET Request.)

server.use(express.urlencoded({extended: false})) ; //We used Middleware Function, To tell express to handler client HTTP Request Body Data. 

server.post("/api/users", async (req, res)=>{

    const bodyObj = req.body ; //we receive all the key-value paired passed inside body of request HTTP
    // console.log(bodyObj);

    if( !bodyObj || !bodyObj.first_name || !bodyObj.last_name || !bodyObj.email || !bodyObj.gender || !bodyObj.job_title ){

        return res.status(400).json({msg : "All fields are required... "})
    }
     //Using Async - Await to handle User.create() Promise -

     const result = await usersModel.create({
        firstName : bodyObj.first_name,
        lastName : bodyObj.last_name,
        gender : bodyObj.gender,
        email : bodyObj.email,
        jobTitle : bodyObj.job_title,
    })

    console.log("Yesss"); //If we using the Asyn await then if error happening in not fetching the data then await keyword stops there means further code of line get stops executing.

    console.log(result);
    return res.status(201).json({msg : "Data Inserted Succefully..!"})
    

});

//TASK-4(Modifying any user data based on ID) : PATCH "/api/users/:id"

//We will fix the email address of first _id="66faac1c08d0464283a84628" from "rowwdy1423@gmail.com" to "rowdy720@gmail.com" // we send the patch/modifying data in the body of HTTP Request, under form section.

server.patch("/api/users/:id", async (req, res)=>{

    //Edit User with id
    // const id = req.params.id; //string
    await usersModel.findByIdAndUpdate(req.params.id, {email : req.body.email} )

    // Note : findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...)

    res.json({msg  : "Success at Modifying Data..!"})


});



//TASK-5(Deleting any user based on ID) : DELETE "/api/users/:id" 

//Want to delete Jane User with her _id = 66fac87ab1abd54820012bcb -
server.delete("/api/users/:id",async (req, res)=>{

    //Delete a User with id -
    const id = req.params.id; //string
    await usersModel.findByIdAndDelete(id);

    // Note : In other words, findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).

    res.json({msg : "Deleted User Succefully..!"})

})

server.listen(PORT, ()=> console.log(`Server Started At Port : ${PORT}`))

