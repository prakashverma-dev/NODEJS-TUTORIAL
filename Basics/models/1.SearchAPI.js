
const mongoose = require('mongoose');



 //Schema
  const product2Schema = new mongoose.Schema({

        first_name: {type : String, required : true} ,
        last_name: {type : String, required : true} ,
        gender: {type : String, required : true} ,
        job_title : {type : String, required : true} ,
        email : {type : String, required : true, unique : true} ,
  });

  //Model 
const product2Model = mongoose.model("product2", product2Schema);


// exports.module = product2Model ; //HUGE BLundeerr Mistake

module.exports = product2Model ;