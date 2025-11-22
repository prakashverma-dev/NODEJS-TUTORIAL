const mongoose = require("mongoose")
require("dotenv").config()
// //mongoose Connection with Local Database -
// async function mongoDBConnect(params) {
    
//     await mongoose.connect("mongodb://127.0.0.1:27017/url"); //keep the name of database
//     console.log("Connected With Database..!");

// } 
// mongoDBConnect().catch((err)=> console.log("Error : ", err));


//mongoose Connection with Mongodb Atlas Database -
async function mongoDBConnect() {
    
    await mongoose.connect(process.env.MONGO_URI); //must add the name of database
    console.log("MongoDB atlas Database Connected Succefully!");

} 


module.exports = {mongoDBConnect} ;

