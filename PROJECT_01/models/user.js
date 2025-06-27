
//WWe keep all database logic here in model folder, Here user.js --> model of user.js


const mongoose = require("mongoose");


//MongoDB Connection with Mongoose -


//Using Promise Based Chaining -
// mongoose.connect("mongodb://127.0.0.1:27017/youtubeApp")
// .then(()=> console.log("MongoDB Connected Succefuuly..!"))
// .catch(err => console.log("Error : "+err));


//Using Async-Await to handle asynchronous operation -
async function connectMongoDB() {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/youtubeApp"); //if It not stop further execution get stops.
        console.log("MongoDB Connected Succefully..!");


    } catch(err) {

        console.log("The Error Is : "+err)

    }

}

// connectMongoDB().catch(err => console.log(err));
connectMongoDB();


//Mongoose Setup- Schema, Model -

//Schema -
const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, //Means firstName is required unless entry will not insert to database.
    },

    lastName: {
        type: String, //HEre, We didnt pass required so bydefault it accepst false means user LASTName we can keep it as optional to insert.
    },
    email: {
        type: String,
        required: true,
        unique: true  //Same email can't exist anywhere in database, measn cant insert duplicate emailID. //Before Inserting email id provided by user, unique : true make sure to check it again in the database that it is exist or not.
    },

    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }

}, { timestamps: true } //It adds the two extra fields i.e createdAt and updatedAt with its value while each time we insert data. 

)

//Model -
const userModel = mongoose.model('user', schema);  //Here, We named model name as 'user' which treated as collection name(if there fine not created newly) while model converts it to pluaral and lower cased collection name as "users".




module.exports = userModel;