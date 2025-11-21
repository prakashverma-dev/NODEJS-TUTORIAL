const mongoose = require('mongoose');


// URL Schema-
const urlSchema = new mongoose.Schema({

    //We generate a unique id each time of new url visit and save it corrsponding to the same unique id.
    uniqueID : {
        type : String,
        required : true,
        unique : true
    },

    originalURL : {
        type : String,
        required : true,
    },

    visitHistory : [{timestamp : {type : String}}] //Array of Objects


}, {timestamps : true});

//Model-
const urlModel = mongoose.model("url", urlSchema); // keep the name of collection under database/ If you keep colletion name in capital letter and singular form, mongoose automcatically converts the collection name in all lowercase and with its plural form while registering at the database.

module.exports = urlModel;