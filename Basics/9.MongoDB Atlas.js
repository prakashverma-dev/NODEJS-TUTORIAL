
/*

#MongoDB Atlas : It is a cloud based MongoDB database means we use the mongodb cloud to store and manipulate our data.

In General, We use cloud database coz It will be safe than system database and Most important when we deploying our project at tht time we need the cloud database rather than system database. 

Steps to Procced with MongoDB atlas i.e cloud db -

Step1 : Register/Login with google account -

https://www.mongodb.com/cloud/atlas/register

step2 : Create a new Project 
step3 : Go to Created new Project
step4 : In Security > Setup the Database Access and Netword Access
step5 : GO To Clusters under the Database and create one.
step 6 : With new created cluster, we can now connect our cloud database with following options -

a) MongoDB's Shell : the mongodb shell i.e Mongosh CLI, from there rather executing our database operation on our system storage now we can able to do same on MongoDB cloud storage, by follwownging -

Connect the mongosh command with provided 'Connection string' of cloud mongodb -

>mongosh "mongodb+srv://cluster0.vqswr.mongodb.net/" --apiVersion 1 --username theverma

Now succefully our cloud MongoDB connected to the Mongosh CLI.

b) MongoDB Compass : Can also connect with MongoDB official GUI -

Use this connection string in your application

mongodb+srv://theverma:<db_password>@cluster0.vqswr.mongodb.net/


Here, Replace <db_password> with the password for the theverma user.

c) MongoDB's Drivers : Acces the atlas data using MongoDB's native drivers for nodejs, java, php programming languages.

i. Select your driver and version
We recommend installing and using the latest driver version.

Driver - Select Nodejs/Php

Version - Select Version

ii. Install your driver
Run the following on the command line
npm install mongodb

View MongoDB Node.js Driver installation instructions.
iii. Add your connection string into your application code
Use this connection string in your application-

mongodb+srv://theverma:<db_password>@cluster0.vqswr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



i.e const uri = "mongodb+srv://theverma:<db_password>@cluster0.vqswr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

Here, Replace <db_password> with the password for the theverma database user.

d) Using Mongoose Library/Module of NodeJs : Mongoose is a database manipulation package, we will install to make our nodejs database easy to work with and It is easiler than MongoDB driver using.

Using MongoDB Driver for Nodejs, we can able to connect to MongoDB Database, But using Mongodb driver module in our nodejs project, we need to connect to our Mongodb database again and again with MongoDB Client and also we need to End MongoDB Client Connection at end of each operation of Database in mongoDB.

MongoDB Nodejs Driver allows Nodejs applications to connect to MongoDB and work woth data.

Whereas,

Mongoose : NPM Mongoose library Package makes us easy to connect to MongoDB database only once for our project and then we can able to work with database.

-------------------------------------------------------------------------------

#Mongoose : -  Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).


What is Mongoose?
Many who learn MongoDB get introduced to it through the very popular library, Mongoose. Mongoose is described as “
elegant MongoDB object modeling for Node.js.
”
Mongoose is an ODM (Object Data Modeling) library for MongoDB. While you don’t need to use an Object Data Modeling (ODM) or Object Relational Mapping (ORM) tool to have a great experience with MongoDB, some developers prefer them. Many Node.js developers choose to work with Mongoose to help with data modeling, schema enforcement, model validation, and general data manipulation. And Mongoose makes these tasks effortless.

Install Mongoose Library -

npm install mongoose


















-----------------------------------------------------------------------------

#MongoDB Drivers : The MongoDB Shell (mongosh) is great, but generally you will need to use MongoDB in your application. To do this, MongoDB has many language drivers.

The language drivers allow you to interact with your MongoDB database using the methods you've learned so far in `mongosh` but directly in your application.

These are the current officially supported drivers by MongoDB Database :
C
C++
C#
Go
Java
Node.js
PHP
Python
Ruby
Rust
Scala
Swift


# MongoDB Node.js Driver Installation : -

To use MongoDB with Node.js, you will need to install the mongodb package in your Node.js project.

Use the following command in your terminal to install the mongodb package:

>npm install mongodb

We can now use this package to connect to a MongoDB database.

Create an index.js file in your project directory -

const { MongoClient } = require('mongodb');

*/