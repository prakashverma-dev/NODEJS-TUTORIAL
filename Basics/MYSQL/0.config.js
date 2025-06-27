//Using mysql driver for nodejs programming lang provided by mysql community -

const mysql= require("mysql");

// Creating mysql connection - 
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "test4"
 
});

con.connect((err)=>{
    if(err) throw err;
    console.log("MySQL Succefully Connected With Nodejs APP..!")
})

module.exports = con;