/*

#1). We have two types of Databases in software development -

    i) SQL Database (SQL - Structure Query Language Database e.g MySQL, Postgresh are SQL databases which works on Relation i.e on Tables)
    ii) No-SQL Database (No-SQL Database like Mongodb are works on documents and collections)

#2). What is MongoDB ?

MongoDb is No-SQL database, used for storing data and working with data in documents formate rather in table formate like SQL database.

MongoDB is a document database. It stores data in BSON format which a type of JSON fomate.

A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.

i) No-SQL document Based Database
ii) Strong Support for Aggregation pipes
iii) Works on BSON format(Similar like JSON)
iv) Best for Node Application 

#3). No-SQL DataBAse Structure/Architecture, How it works : -

Firt We have the -  "DB Server(Mongo Server)"   >    DataBase(Container Type)    > Collections(Array1 for project1, Array2 for project2,) > Documents(object) for each collections i.e Array! 

In Other Word, We have the DB Host which carries one application one Database> Collections > Document  E.g : University Dababase have collections of students data, Course data, teacher data and each students have their documents.

Note : In NOSQL database documents store data in BSON type which JSON type.

BSON : BSON stands for Binary JSON i.e Binary Javascript Object Notation. It is binary encoded data interchange format that's based on JSON(Javscript Object Noation). Due to Binary Encoded BSON traversed more quickly than JSON. BSON used to store and transfer data in MONGODB.


Primary Key in Documents : It is database concept tells that every documents must have unique id so that It will searchable and indexable easily. In MOngoDB Primary key known as objectID.

Douments Example In BSON formate : 
{ objecId : "345fhj5fj44f", (Primary Key)
 name : "Prakash",
 age : 30,
 course : "nodejs"
}


#4). SQL DataBase Structure/Architecture : It has - DB Server > Database(Container) > Table(students, matches) > Tuples (row of table) 

SQL is rigid, coz whenevr we have to create new tuple i.e row It is hard than creating document in NOSQL. Coz Documents just work like JSON string data easily workable with nodejs and javascript.



#5). MongoDB Installation and Setup : We need to install first 'MongoDB Community Server(.msi) after that we need one client to interact with MongoDB server, we have two options as client for mongodb server - a) MongoShell(Command Line tool) and second b) MongoCompass(UI Tool) , These Both will work same but In MongoCompass UI It will easy to work with databases! Although we have to learn both!


Instalation : Install the MongoDB Community Server Sofware In .msi file   > Install With Default Check(Note: MongoDB Service Auto Started in Backgrund & MongoCompass Auto Checked To Installed, Dont Intall MongoCompass, UnCheck) > Install MongoDB Shell(From MongoDB Tool Options on Website) To Work with MongoDB Server Database OR,  Can install MongoDB Compass for Database Management on UI rather on the mongoDB shell.

Note : After Installation of MongoDB Community Server, Sometimes we need to set mongodb server bin path to our system local envirnment path coz we can access the mongodb server and mongoShell from our Window Command line directly after setting up the envirnental variable.

MongoD as a service : If it is enable in our system, then only we able to communicate with the installed Mongodb server i.e If is enable as soon as we open windows mongodb server get started in background.

To Setup MongoD as a service manually In system : Search Services > MongoDB Database Server > Right Click Stop or Start (If we stop then we cant connect to mongodb server, we get an connection error.) 

To Check MongoDB and MongoShell Installed or Not :-

>mongod --version 
>mongosh --version

MongoShell : In short Mongosh, in mongodb after installtion.

To enter into the MongoDB Server and MongoShell Server /Inside its REPL -

> mongod  (entered into mongoDB server, check if mongoDB server dont get crash by some error, usually it get crash coz in absence of one folder i.e Data directory C:\\data\\db\\ not found.  we can fixed this in two ways -  a) create a folder name 'db' and redirect to this 'db' folder location by > mongod --dbpath <db_folder_pathe>

OR, create a folder name 'data' inside c-directive then>create a folder name 'db'

Now, Our MongoDB server wont get crashed! )


> mongosh (first time ask the ask the mongoDB server URI for connection if Mongodb server succeffuly installed on local system ) 


We can access mongoshell in two ways - a) First Inside Installed mongosh folder > mongosh.exe  OR, b) From windows command line (if environmental variable has been setup)




MongoShell : It is the mongoclient allow us to interact with mongodb server.

MongoDB Compass : We can see the database in UI rather than Command line or mongoshell. It is official graphical user interface for mongodb which allow us to fetch data from mongodb server.

We have other tool for seeing the database on UI, But Momgo Compass is open soucre given by mongodb.

#6). Conecting MongoDB Server to the MongoDB database :-

Before Connecting MongoDb Server to MongoDB database, we need to first start MongoDb server either by two ways - a) Run >mongod      OR,   b) Open service in system> start the MongoDB server  (Now we get ready for working with client side with conncting to started MongoDB server)

In Mongoshell : Once we hit >mongosh     (it automactically connect to default URL of Mongodb server or else we can specify the mongodb server)

In MongoCompass : By tap on the NEW Connection : It auto shows URI : mongodb://localhost:27017 (which default URI of  mongodb server) > Hit Connect.
 
Note : MongoDB Default Server look likes -

mongodb://localhost:27017

where, mongodb is the protocol for mongoDb datbase, same we have http  is protocol of web.

localhost : domain name where database server locally running on system and lastly the port : 27017 is the default port for which mongodb server runs which can change it later but mongo provies this port as default.


Note : MongoShell and MongoCompass both are client side of MongoDB Server, the difference between mongoShell & MongoCompass is that MongoShell is the terminal client to mange mongodb server all database and MongoCompass is the UI based to manage mongodb server all database.


#7). Working Up with Mongoshell Command Line : Some Commands Are -

>show dbs or show databases   -->   to show all database present in the mongodb server.

>use <database_name>   --> To use the database name

>show collections   --> for showing up all collections/arrays

>db.<collection_name>.find() --> To see selected collection all documents or specify document only (  db.<collection_name>.find( {category: "News"} )  )
 
C.R.U.D. Operation IN MongoDB database : -

i.) Create Database :  To Create a new database i.e each Application database - 

>use <database_name>  then must insert some collection, else this new database will not create.

Note : 'use' keyword used also for swicthing the database and can creating a new database.

Remember: In MongoDB, a database is not actually created until it gets content!

ii.) Create Collection : To Create a new collection under any database -

It is in two ways -

>db.<collection_name>.insertOne({"field" : 'value' })  Note : db is the reserved keyword for mongodb server.

OR,

> db.createCollection("<collection__name")

Remember: In MongoDB, a collection is not actually created until it gets content!

There are 2 methods to insert documents into a collection -

To insert a single document, use the .insertOne({single_object1}) method.
This method inserts a single object into collection.

To insert multiple documents at once, use .insertMany([{object1}, {object2}]) method. This method inserts an array of objects into the collection. 


iii.) Read Documents Under collection : -

There are 2 methods to see documents from desired collection, find() and findOne().

.find()  - returns an array having documents a object.
.findOne()  - return only one document i.e an single object.

IV.) Read Documents Under collection With Filtering Contraints :-

To See a specific documents under the collection - use .find({}), .findOne({}) methods, both accepts a query object. 


.find({key : "value"})  - Insert a key-value pair to filter the complete collection and return an array having single filtered object. 
find() method can returns many objects/documents in the array. 

.findOne({key : "value"})  - Insert a key-value pair to filter the complete collection and return an object i.e document directly rather showing up an array as we have used .findOne() method which returns a single document i.e object. 
findOne() method will only return the first document match it finds from the collection as document type.


Note : Each Data Entry i.e a Document Entry In Collection, MongoDB creates a unique id i.e known as primary id in database, MogoDB name it as 'objectId' for primary key. 

Note : To display the results in a formatted way, you can use pretty() method -
Syntax
>db.COLLECTION_NAME.find().pretty()


V.) Filtering Documents Based o Query Operator used in Mongodb : -

There are many query operators that can be used to compare and filter out desired document/documents based on give conditional operator used.

Syntax : .find( {key : {operator : "value"}  })  

Note: bydefault operator is $eq means key must be equal to is value. E.g :

db.products.find({price:9.99}) is same as  

db.products.find({price:{$eq: 9.99} })


Note : - There are many query operators -
a)Comparison Query Operator :-
The following operators can be used in queries to compare values:

$eq: Values are equal
$ne: Values are not equal
$gt: Value is greater than another value
$gte: Value is greater than or equal to another value
$lt: Value is less than another value
$lte: Value is less than or equal to another value
$in: Value is matched within an array


b)Logical Query Operator : -
The following operators can logically compare multiple queries.

$and: Returns documents where both queries match 
$or: Returns documents where either query matches
$nor: Returns documents where both queries fail to match
$not: Returns documents where the query does not match


c)Evaluation Query Operator :-
The following operators assist in evaluating documents.

$regex: Allows the use of regular expressions when evaluating field values
$text: Performs a text search
$where: Uses a JavaScript expression to match documents

d) MongoDB Update Operators: There are many update operators that can be used during document updates.

Over Fields Update Operators : The following operators can be used to update fields:

$currentDate: Sets the field value to the current date
$inc: Increments the field value
$rename: Renames the field
$set: Sets the value of a field
$unset: Removes the field from the document


Over Array Update Operators : The following operators assist with updating arrays.

$addToSet: Adds distinct elements to an array
$pop: Removes the first or last element of an array
$pull: Removes all elements from an array that match the query
$push: Adds an element to an array









#8. Logical Query Operator Operation With MongoDb database -

a)  $and : Give the result of provided two or more expression matches.  $and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.

NOTE: MongoDB provides an implicit/bydefault AND operation when specifying a comma(,) separated list of expressions, byDefault.

db.products2.find({ express1, express2 })
e.g: db.products2.find({ ratings : {$gt:4},  id: {$gte :20} })

Synatax : 

{ $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }

where, expression = rating : {$gt : 4}

e.g  db.products2.find({$and :    [{obj1Expess}, {obj2Expres}  ]  })
e.g:  db.products2.find({$and : [ {ratings : {$gt:4}}  , {id:{$gte:20}}    ]})


b) $or operator : The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.

Give the result based on either of the expression get true. Ex: With provided names, gives the result based on provided names means whichever names matches give us the result.(Matlab Diya hua naam me se jo jo naam match kare sab list kar do )

Syntax : 

{ $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }

c) $not Logical Operator : $not performs a logical NOT operation on the specified <operator-expression> and selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.

Syntax : { field: { $not: { <operator-expression> } } }

e.g : db.inventory.find( { price: { $not: { $gt: 1.99 } } } )



#9. Cursor Methods : This method further added on the query methods i.e fetching/reading database for some specific result. 

E.g: db.products.find().sort(); or db.products.find().pretty();

These methods modify the way that the underlying query is executed.

There are many Cursor function which can channeable over find() method to fetch db, which are -

sort(), limit(), pretty(), count() etc.

a) sort() method : sort({price : 1 }) method use for accending or decendeing order of some ratings, price or any number.(1 used for accending and -1 used for deccending order)

Ex: db.products2.find({$or : [ {first_name :"Pavel" }  , {first_name : "Libby"}  ]  }).sort({id : 1});      - accending order 

db.products2.find({$or : [ {first_name :"Pavel" }  , {first_name : "Libby"}  ]  }).sort({ratings : -1});  - Decending order

b) limit() method : limit(2) method limit the result documents i.e limit the size/document of a cursor's result set. For Example : We want product with rating greater than or equal to 4 and only display the top3 result to us.

eg : db.products2.find().sort({ratings : -1}).limit(3)

Note : limit() method usually apply with sort() method after chaining.

c) count() or countDocuments() method : count() metods, counnts the total number of documents present in the collection, we can apply some condition as well to see the count based on some condition.

e.g: db.products2.find().count()   - retun the total no of documents present in the collection.

db.products2.count({ratings :5}) - count can be directly use on the collection.

db.products2.countDocuments({ratings :5})  

Note : count or countDocuments can be used interchangably.

#10) Projection of Specific Data : From the documents we limit only required key-value rather complete document value for each which sometimes we do not 
need.

find() and findOne() both methods accept a second parameter called projection.
This parameter is an object that describes which key-value to include in the results.

Note: This parameter is optional. If omitted, all fields will be included in the results, that is bydefault case.

syntax : db.products.find( {} , {id: 1, first_name : 1})

syntax : db.products.find( {filerting} , {project fields seperated with comma with value 1 or 0}) 

 db.products2.find( {ratings : {$gte:5}  } , {first_name : 1, last_name:1})

 db.products2.find( {ratings : {$gte:5}  } , {first_name : 1, last_name:1, _id : 0})


Note : We use a 1 to include a field and 0 to exclude a field.
Note : Notice that _id :  ObjectId('66f7a3ebf0c7dbc3c4c73bf8') field is also included bydefault by MongoDb database for each documents. This field is always included unless specifically/purposely excluded, we can use _id : 0 for not including in our result.



#11). Update Database : Want to update/change the rating of id=1, so we pick by either id or object_id, then we manipulate it -

To update an existing document we can use the updateOne() or updateMany() methods.

a) updateOne({}) : db.collection.updateOne(filter, update, options)

 syntax : db.products.updateOne( { filerting ie selecting }, { $set: { field: value } } ) 

syntax with 3rd Argument(optional) : db.products.updateOne( { filerting ie selecting }, { $set: { field: value } }, {upsert : true} ) 

Note : we use $set operator to set either any new field to exiting document or if same filed name present then It will update with the new field value. Remember to check the field name before updating exiting field else a new field will get created.

The first argument is a query object to define which document or documents should be updated. and The second parameter is an object defining the updated data. and the third argument(optinal)is the upsert field object with value either true or false, if true - the condition/filtering wouldnot get macthed so can insert the new document with provided objects. (bydefault upsert : false value means if privided condition/filter doesnot match then it woulnd update anything.)


(upsert= update +insert) If you would like to insert the document if it is not found, you can use the upsert option as an optional third argument to either updateOne() or updateMany().


Ex: db.products2.updateOne({id:1}, {$set : {ratings : 5} });
{
  acknowledged: true,
  insertedId: null,  (No new insert happen as field parameter)
  matchedCount: 1,  (got one macthed)
  modifiedCount: 1,  (got one modified data)
  upsertedCount: 0   (there's no upserted)
}

Ex:  db.products2.updateOne({id:0}, {$set : {price : 5000} }, {upsert : true});
{
  acknowledged: true,
  insertedId: ObjectId('66f8cdd5320d2cb301d3ddb4'),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1 (measn one new document has inserted)
}

b) updateMany({}) : db.collection.updateMany(filter, update, options)

Update the data at a time to more than one documents present in the collection with provided condition/filtering. 

updateMany() method will update all documents that match the provided query.

Ex: db.products2.updateMany({id:{$gte : 25}}, { $set: { ratings : 4 } } ) - changing the ratings field of selected all document to 4 only to the docuemtns which id are greater than equal to 25.

db.products2.updateMany({}, {$set : {category : "student"} }  - To add a new filed(static field to every documents in the collection)


c) replaceOne({}) :  db.collection.replaceOne(filter, replacement, options)

replaceOne({}) method Replacing a perticular documents with a new completly new document/object. This method works on a single object only the reason name is replaceeOne({}) which deleted the exiting object and replace with our new object.

Ex:  db.products2.replaceOne({id:0}, {name : "Prakash Verma", who_is_He : "FearLess Rowdy", chins_up : "yess" })


Note : _id : ObjectId('66f8cdd5320d2cb301d3ddb4') i.e the default mongoDb id will be same for new entry document with replacing old one. These methods accept a query object. The matching documents will be deleted


#12. Delete Databse : We can delete documents by using the methods deleteOne() or deleteMany() with provided any mateched condition i.e a field value.

deleteOne({}) :  deleteOne({}) method will delete the first document that matches the query provided. It only deletes one document based on mateched Condition.

Ex: db.products2.deleteOne({_id :ObjectId("66f7e82b6533e039bbc73bf8")})

deleteMany({}) : deleteMany({}) method will delete all documents that match the query provided. It deletes more than one documents based on mateched Condition.

Ex: db.products2.deleteMany({job_title :"Statistician II"})  - all the similar field matched get deleted from the collection.

db.products2.find({job_title :"Statistician II"}).count()  -   0






#13). Note : Some Important Commands for working up with Mongodb shell -

>show dbs   // >show databases

>use <db_name>    -> Switch to database

>show collections  

>db.<collection_name>.find() or db.<collection_name>.find({})    --> returns the documents i.e array documents i.e array of documents. 

>db.<collection_name>.insertMany([{} ,{}])  

>db.<collection_name>.insertOne({})

>db.<collection_name>.find( {category: "News"} ) -> To filter out a object/objects based on given constrains.
>db.<collection_name>.findOne( {category: "News"} ) -> To filter out a single object which got matches up first in the collection.




#14. Working Up all MongoDB Opration Not In CLI, NOw in UI Tool ie MongoCompass-

Type a query at top box, like {} whichever we would have been writing IN CLI, will works same.

Ex : {id :1}   - filter the id=1 document from the current collection we are!






#15.) MongoDB Query API : -

The MongoDB Query API is the way you will interact with your data.

The MongoDB Query API can be used two ways:

a)CRUD Operations
b) Aggregation Pipelines

MongoDB Query API Uses : You can use the MongoDB Query API to perform-

i) Adhoc queries with mongosh, Compass, VS Code, or a MongoDB driver for the programming language you use.
ii) Data transformations using aggregation pipelines.
iii) Document join support to combine data from different collections.
iv) Graph and geospatial queries.
v) Full-text search.
vi) Indexing to improve MongoDB query performance.
vii) Time series analysis.


#16.) MOngoDB Data backup and restoring -

Mongodump and Mongorestore : These utilities comes with community server and can be found in CMD/terminal. They are not the part of Mongo CLI client.

Mongodump command is used to take backup of complete database or some collections
>mongodump  --db accounts 
Above command takes backup of database accounts and stores into a directory named dump

Mongorestore command is used to restore database
>mongorestore --db accounts dump/accounts
Above command restore your database accounts from backup directory dump


#17.) MongoDB Aggregation : Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. 

How does the MongoDB aggregation pipeline/stages work -

Input/Collection --> $match --> $group --> $sort -->  $project  ---> Output

The input of the pipeline can be a single collection, where others can be merged later down the pipeline.

The pipeline then performs successive transformations on the data until our goal is achieved.

This way, we can break down a complex query into easier stages, in each of which we complete a different operation on the data. So, by the end of the query pipeline, we will have achieved all that we wanted.

This approach allows us to check whether our query is functioning properly at every stage by examining both its input and the output. 

Note :  The output of each stage will be the input of the next.

syntax : db.COLLECTION.aggregate(pipeline, options); //Pipeline is an array of different operation at different stages.

where COLLECTION – is the name of a collection,
pipeline – is an array that contains the aggregation stages,
options – optional parameters for the aggregation 

This is an example of the aggregation pipeline syntax:-

pipeline = [
        { $match : { … } },
        { $group : { … } },
        { $sort : { … } }
       ]


MongoDB aggregation stage limits : Aggregation works in memory. Each stage can use up to 100 MB of RAM. You will get an error from the database if you exceed this limit.

If it becomes an unavoidable problem you can opt to page to disk, with the only disadvantage that you will wait a little longer because it is slower to work on the disk rather than in memory. To choose the page to disk method, you just need to set the option allowDiskUse to true like this:

db.collectionName.aggregate(pipeline, { allowDiskUse : true })     

pipeline Operations : 

i) $match

 db.teachers.aggregate([

    {$match : {gender : "male"}} //first pipeline operation statge-I

])

ii) Groupe Teachers by age : -

 db.teachers.aggregate([

    {$group : {gender : "male"}} //first pipeline operation statge-I

])











*/