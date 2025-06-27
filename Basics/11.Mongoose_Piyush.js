/*

Mongoose : - It have  Schema and Model 

Schema  - Inside Scheme Constructor_Function/Class We Define Structure of Data.
Model - Using Schema We define the Models i.e Collections.

CRUD Operation - using this Individual Model We do the CRUD Operation.

////Mongoose DB setup :-
const mongoose = require("mongoose");

const yourSchema = new mongoose.Schema({ name: String, size: String });

const Tank = mongoose.model('Tank', yourSchema);

Tank.find({}); //Model.find({})

The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.

Note: The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()


*/
 
//Mongoose DB setup -
const mongoose = require("mongoose");

//Schema -

const userSchema = new mongoose.Schema({

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


}, 

{timestamps : true} //It adds the two extra fields i.e createdAt and updatedAt with its value while each time we insert data. 

);

//Model
const User = mongoose.model("user", userSchema); //Here, we kept our collection name as 'user' for this model.//The first arg is collection name we give it in singular name, so mongoose create or search a plural collection with lowercase ie users even if we added it as USER(in string) and second arg is the defined schema.


//Connecting Mongoose to Our MongoDB local database as of now -

//mongoose.connect() method returns an promise so we need to handle using .then() and .catch() coz promise returns for asynchormous programming.

mongoose.connect('mongodb://localhost:27017/youtubeApp') //Here youtube is database name we inserted newly // database -> collection1, collection2..  -> fetch data(At each collection)
.then(()=> console.log("MongoDB Connected Succefully!"))
.catch((err)=> console.log("Mongo Error", err) );


//REST API - USing ExpressJs -
const express = require("express");
const app = express();
const PORT = 8000;

//HTTP Request Body Parser -
app.use(express.urlencoded()); // We used Middleware Function, To tell express to handler client HTTP Request Body Data.

//CREATE API -
app.post("/api/users", async  (req, res)=>{

    const bodyObj = req.body ; //we receive all the key-value paired passed inside body of request HTTP
    // console.log(bodyObj);

    if( !bodyObj || !bodyObj.first_name || !bodyObj.last_name || !bodyObj.email || !bodyObj.gender || !bodyObj.job_title ){

        return res.status(400).json({msg : "All fields are required... "})
    }

    //Pushing the Received key-value data from REQUEST body to Model Database -
    // User.create({...req.body})
    
    // .then(()=>{

    //     res.status(201).json({msg : "Data Inserted Succefully..!"})
    // })
    // .catch((err)=> {

    //     console.log("Error IS : "+ err);
    //     res.status(400).json({msg : "Some Errorr Happend : "+ err })

    // } )


    // ------------------------------------------------
    //Using Async - Await to handle User.create() Promise -

    const result = await User.create({
        firstName : bodyObj.first_name,
        lastName : bodyObj.last_name,
        gender : bodyObj.gender,
        email : bodyObj.email,
        jobTitle : bodyObj.job_title,
    })

    console.log("Yesss"); //If we using the Asyn await then if error happening in not fetching the data then await keyword stops there means further code of line get stops executing.
    console.log(result);
    return res.status(201).json({msg : "Data Inserted Succefully..!"})
    
    
})

app.listen(PORT, ()=> console.log("Server Listen at Port : " + PORT));
