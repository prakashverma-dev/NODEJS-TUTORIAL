
const mongoose = require("mongoose");

//mongoose Connection with Local Database

async function mongoDBConnect(params) {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/url"); //keep the name of database
    console.log("Connected With Database..!");

}

mongoDBConnect().catch((err)=> console.log("Error : ", err));


//Schema-
const urlSchema = new mongoose.Schema({

    shortenerId : {
        type : String,
        required : true,
        unique : true
    },

    redirectURL : {
        type : String,
        required : true,
    },

    visitHistory : [{timestamp : {type : String}}] //Array of Objects


}, {timestamps : true});

//Model-
const urlModel = mongoose.model("urlshortener", urlSchema); // keep the name of collection under database/ If you keep colletion name in capital letter and singular form, mongoose automcatically converts the collection name in all lowercase and with its plural form while registering at the database.

module.exports = urlModel;