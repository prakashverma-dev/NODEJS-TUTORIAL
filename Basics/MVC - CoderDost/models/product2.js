
const mongoose = require('mongoose');
const {Schema} = mongoose;  //OR, use mangoose.Schema()

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
    console.log("Connected To MongoDB Database Succefully!")
  }
  
main().catch(err => console.log(err));


  //Schema
  const product2Schema = new Schema({ //Schema is Construction function for creating collection.

        title: {type : String, required : true, unique : true} ,// String is shorthand for {type: String}
        description: String,
        category:{type : String, required : true},
        price: {type : Number, min : [0, "wrng price"], required : true},
        discountPercentage: {type : Number, min : [0, "min wrng discount"] , max : [50, "max wrng discount"]},
        rating: {type : Number, min : [0, "min wrng rating"] , max : [5, "max wrng rating"]},
        images: [String],
        brand : {type : String, required : true},
        thumbnail :{type : String, required : true},
      
  
  });

  //Model 
const product2Model = mongoose.model("Product2", product2Schema); //this prodcut2 is a collection of all the schema data.


// exports.module = product2Model ; //HUGE BLundeerr Mistake

module.exports = product2Model ;
