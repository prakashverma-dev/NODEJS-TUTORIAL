

// Mongoose library : Mongoose is an Object Data Modeling(ODM) library for Nodejs. It makes store our datbase in form of javascript object for easy operation.

//Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

const mongoose = require('mongoose');
const {Schema} = mongoose;  //OR, use mangoose.Schema()
// OR, mongoose.Schema
//DB Connection -

// mongoose.connect('mongodb://127.0.0.1:27017/test'); //local mongodb data connection string //test is the default <database name>

// mongoose.connect("mongodb://localhost:27017/eCommerce"); //here 'eCommerce' is the one database under our MongoDB database.


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  console.log("Connected To MongoDB Database Succefully!")
}

main().catch(err => console.log(err));


// Schema In Mongoose : Scheme is the bluprint of our collection data how it will be. A schema defines the structure of your collection documents. A Mongoose schema maps directly to a MongoDB collection.


//Let's Create a Schema for mongoose for our database -

const productSchema = new Schema({ //Schema is Construction function for creating collection.

  title: String, // String is shorthand for {type: String}
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  images: [String]

});

//The permitted SchemaTypes are ie Its datatype allowed by mongoose are: ,

/*  Many types of data are allowed in Mongoose Schema. The common SchemaTypes are:

String
Number
Date
Boolean
Mixed
ObjectId
Array
Buffer 
Decimal128
Map UUID .


You can put a lot of conditions inside the Schema object. e.g :

  age: { type: Number, default:18, min: 18, max: 65, required :true }

  //Here, default value of Number is 18 and should be between 18-65, and can't be null or empty
  

*/
//Let's Create A Model from the Schema blueprint -
const productModel = mongoose.model("Product", productSchema); //this prodcut2 is a collection of all the schema data.


//USing ExpressJS - Doing CRUD Operation - Creating RESTfull API -
const express = require("express");
const server = express();

//READ -
server.get('/products', async (req, res)=>{

  const products = await productModel.find({price : {$gt:10}});
  res.send(products)


})

//CREATE -

server

server.listen(8009, ()=> console.log("Server started at port 8009!"))


/*

#TO Perform Queries/Fetching On Mongoose Data -

Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()

A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.

A query also has a .then() function, and thus can be used as a promise.


///In General, Operation on Mongoose Model -

Model()
Model.$where()
Model.aggregate()
Model.applyDefaults()
Model.applyVirtuals()
Model.bulkSave()
Model.bulkWrite()
Model.castObject()
Model.cleanIndexes()
Model.countDocuments()
Model.create()    -- For Creating a new Entry i. POST Method
Model.createCollection()
Model.createIndexes()
Model.createSearchIndex()
Model.db
Model.deleteMany()
Model.deleteOne()
Model.diffIndexes()
Model.discriminator()
Model.distinct()
Model.dropSearchIndex()
Model.ensureIndexes()
Model.estimatedDocumentCount()
Model.events
Model.exists()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.hydrate()
Model.init()
Model.insertMany()
Model.inspect()
Model.listIndexes()
Model.listSearchIndexes()
Model.populate()
Model.prototype.$model()
Model.prototype.$where
Model.prototype.base
Model.prototype.baseModelName
Model.prototype.collection
Model.prototype.collection
Model.prototype.db
Model.prototype.deleteOne()
Model.prototype.discriminators
Model.prototype.increment()
Model.prototype.model()
Model.prototype.modelName
Model.prototype.save()
Model.recompileSchema()
Model.replaceOne()
Model.schema
Model.startSession()
Model.syncIndexes()
Model.translateAliases()
Model.updateMany()
Model.updateOne()
Model.updateSearchIndex()
Model.validate()
Model.watch()
Model.where()






*/