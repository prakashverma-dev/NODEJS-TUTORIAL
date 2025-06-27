

const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json"); //users(plural) always must be return an array containing all the indivisual data as each object, STANDARDS of JSON.

//console.log(users, typeof users); //return an array having object datatype

const app = express();
const port = 8000;

//Routes 


// TASK-0
app.get("/users", (req, res)=>{

    const html = `<ul>

                 <!-- want to render each firt_name from DB here in <li></li> -->
                        ${users.map(item => `<li>${item.first_name}</li>` ).join("")}

                </ul>` ;
// join("") ; means array ke each item ko kaise join karana hai string me, we used empty string to join.

           res.send(html) //.send() methods sends any string data as text/html  ;  
});


//REST API Points -
// TASK-1  :  GET  "/api/users"
app.get("/api/users", (req, res)=>{

    return res.json(users);
});

// TASK-2   : GET  "/api/users/:id"
app.get("/api/users/:id", (req, res)=>{

    const id = Number(req.params.id) ; //converted into number from string id
    const user = users.find(item=> item.id===id) ; //Here, user(singular) indicate single object.

    return res.json(user); //single user(singular) object get returned.

});

// TASK-3:  POST  "/api/users"  (We can do the POST, PATCH, DELETE Request From Postman, as Browser bydeault do the GET Request.)
app.use(express.urlencoded({extended: false})) ; //We used Middleware Function, To tell express to handler client HTTP Request Body Data. 

//NOte : urlencoded() method takes an object having key name 'extended' and its value either false/true. When passed body values is either string or array, then set {extended : false} and If body passed value is any type, set {extended : true}.

app.post("/api/users", (req, res)=>{

    //We send the POST data in the Request Body via Postman(Request Body > x-www-form-unlencoded(Form Data usually we receive in it, new way)  > add data key-value pair there to send)

    console.log(req.body); //To parse frontend Request body data we used MiddleWare.

    //Generally We do not get 'id' in the received data from Frontend, so we need to generate by using : id : jsondata_array.length+1 ; //Or when using Database then DB auto generate for us.

    users.push({...req.body, id : users.length+1});

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=> {

        if(err) throw err;
        res.json(`File is saved Succefully with id= ${users.length}`);

    } )

});

//TASK-4 : PATCH "/api/users/:id"

app.patch("/api/users/:id", (req, res)=>{
        //Edit User with id
     const id = req.params.id; //string
     const user = users.find(item => item.id=== +(id)) ; //object

     const userIndex = users.findIndex(item => item.id=== +(id)); //object Index
    
     //We will fix the email address of id=1001 from "rowwdy13@gmail.com" to "rowdy861@gmail.com" // we send the patch/edit data in the body of HTTP Request, under form section.

     editwithIndex(users, userIndex, {...user, ...req.body});

    // Writting FileSystem Update with writeFile -
     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=> {

        if(err) throw err;
        res.json(`File Edited Succefully at Id = ${id}`);

    })

    // res.json("edited")
    
    
})

function editwithIndex(arr, index, obj) {

    //Task In an array of objects, at specific index, we want to change some property values of that index number object in that array --
  
    for(let i=0; i<arr.length; i++){

        if(i=== index){
            arr[i] = obj ;
            break;
        }

     }
    
}


//TASK-5
app.delete("/api/users/:id", (req, res)=>{

    //Delete User with id -

    const id = req.params.id; //string
    const userIndex = users.findIndex(item => item.id=== +(id)); 

    users.splice(userIndex, 1);

    //Writting FileSystem Update with writeFile -
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=> {

        if(err) throw err;
        res.json(`File Deleted Succefully at Id = ${id}`);

    })

})



// # Short_Cut/HTTP Methods Chaining : Whenever we have the common path to operate on HTTP Request methods, we can use the .route() and then we can do the methods chaining one by one, It works same as normal. 

// app.route("/api/users/:id") //Implies on route if It is get do, if it is patch do, if it is delete do,..so on on the same route with can add i.e chaining.
//     .get( (req, res)=>{
//         //read user with id
//         const id = Number(req.params.id) ; //converted into number from string id
//         const user = users.find(item=> item.id===id) ; //Here, user(singular) indicate single object.
    
//         return res.json(user); //single user(singular) object get returned.
    
//     })
//     .patch((req, res)=>{
//         //edit user with id
//         return res.json("Pending")
//     })
//     .delete((req, res)=>{
//         //delete user with id
//         return res.json("Pending")
//     });





//Port Listening -
app.listen(8000, ()=> console.log(`Server Started at PORT : ${port}`));