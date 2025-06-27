 const express = require("express");
 const server = express();
 const path= require("path");
 const multer = require("multer");

 //using Multer Module of Npm, we can able to recieve the uploaded any file from client machine such as profile photo, resume, image, doc, video etc to our server side in a folder using multer module.

 //we use multer to upload files in nodejs.

// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

// NOTE: Multer will not process any form which is not multipart (multipart/form-data).

// Install : >npm install --save multer
/* Usage
Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

Basic usage example:

Don't forget the enctype="multipart/form-data" in your form.


*/

 server.use(express.urlencoded({extended : false}));

 server.set("view engine", 'ejs');
 server.set("views", path.resolve("./views") );

 const receiveFile =   multer({

      storage : multer.diskStorage(({

         destination : function(req, file, cb){
            cb(null, "./uploads"); //foldername of desnation.
         },

         filename : function(req, file, cb){
            cb(null, `${Date.now()} - ${file.originalname}`) //filename naming
         }

      }))
   })
  
//const upload = receiveFile.single("profileImg") ; //For single file upload  

const upload = receiveFile.fields([
   {name : "profileImg", maxCount: 1 },
   {name : "coverImg", maxCount: 2}
]) ; // For More than one file upload 
 
//For static Frontend POST Method UI, So we send data from there -

 server.get("/profile",(req, res)=>{
    
   res.render('IV.multer.ejs');

 })

 server.post("/profile", upload, (req, res)=>{
    
   console.log(req.body);
   console.log(req.body.name);

   console.log(req.file); //we receiving the single file upload in 'file' key

   console.log(req.files); //we receiving the multiple file upload in 'files' key


   res.json({msg : "Post Request Done!"})

 })


 server.listen(8000, ()=> console.log("Server started on 8000!"))