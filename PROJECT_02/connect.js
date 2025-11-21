const mongoose = require("mongoose")

// //mongoose Connection with Local Database -
// async function mongoDBConnect(params) {
    
//     await mongoose.connect("mongodb://127.0.0.1:27017/url"); //keep the name of database
//     console.log("Connected With Database..!");

// } 
// mongoDBConnect().catch((err)=> console.log("Error : ", err));


//mongoose Connection with Mongodb Atlas Database -
async function mongoDBConnect() {
    
    await mongoose.connect("mongodb+srv://admin:root@cluster0.jfemea5.mongodb.net/url_shortener?appName=Cluster0"); //must add the name of database
    console.log("MongoDB atlas Database Connected Succefully!");

} 


module.exports = {mongoDBConnect} ;

