
//ALl APIS Here - GET API, POST API, PUT API, DELETE API.

//i.) Creating GET API with MySQL database connection -

const express = require("express");
const server = express();

const con = require("./0.config");

server.use(express.json());
server.use(express.urlencoded({extended : "false"}));

server.get("/", (req, res)=>{
    
    // res.send("hey");
    con.query("SELECT * FROM personal", (err, result)=>{
        if(err){
            res.status(404).json({msg : err})
        }else{
            res.status(200).json(result);
        }
    });

});

//ii.) To post data i.e create a new data inside the database i.e insert one data into mysql database -
//Defining POST route for POSTing i.e Insering a new data to database -
//NOte: If methods are different then same routes works coz end point hit will be different coz of method change. Here, GET and POST end point i.e hit route can be same.
server.post("/", (req, res)=>{

    //Using Static Data in form of an Object-
    // const dataObj ={
    //     name : "Dipwanita",
    //     birth_date : "2000-02-13",
    //     phone : "342442344",
    //     gender : "F"

    // }

    //Dynamic Data from Form(client side recieing in body of req -)
    const dataObj = req.body; //we have to express.json() middleware.

    con.query("INSERT INTO personal SET ? ", dataObj, (err, result)=>{

        if(err) return res.status(404).json({msg : err});

        res.status(200).json( {msg : `one new record inserted succefully!`} );
    
    });

});

//iii>) To update the data -
server.put("/", (req, res)=>{

    const data = ["Divya Sharma", "12345678", 1]; //updated values in array.
    
    con.query("UPDATE personal SET name = ?, phone=? WHERE id=?", data, (err, result)=>{
        if(err) return res.status(404).json({msg : err});

        res.status(200).json( {msg : `one existing record updated succefully!`} );
    } )



});

//To update the data Dynamically from client form -
server.put("/:id", (req, res)=>{

    const id = req.params.id ;
    const {name, phone} = req.body;
    const data = [name, phone, id]; //updated values in array.

    con.query("UPDATE personal SET name = ?, phone=? WHERE id=?", data, (err, result)=>{
        if(err) return res.status(404).json({msg : err});

        res.status(200).json( {msg : `one existing record updated succefully!`, result : result} );
    } )



});

//iv.) To delete any record with unique id or any unique parameter but we use id as unique -
server.delete("/:id", (req, res)=>{

    const id = req.params.id ;
    con.query("DELETE FROM personal WHERE id=?",id, (err, result)=>{
        if(err) return res.status(404).json({msg : err});
        
        res.status(200).json( {msg : `one existing record deleted succefully!`, result : result} );
    })
})


server.listen(5000, ()=>{

    console.log("Server listening on Port 5000!");

} );