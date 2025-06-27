
/* To access a MySQL database with Node.js, you need a MySQL driver. Install "mysql" module from the NPM in nodejs Project -

>npm install mysql

Require it : const mysql = require('mysql');

Step1: Create Connection with mysql - To Connect mysql database with nodejs -

    const con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
        database : "yourdatabaseName" //Optional
    });

To check Created Connection connected or not -

    con.connect(function(err) {
        if (err) throw err;
        console.log("Nodejs Connected with MYSQL database!");
    });

Run After that : >node index.js


Step2 : After Establishing the connection, WE now able to do any MYSQL Queries over the selected Database with query method  -

    con.query("SELECT * FROM personal", (err, result)=>{

        if (err) throw err;
        console.warn("Result: " + result);

    });

Here, query method takes 1st paramter as "sql statements" and 2nd paramter as callback function with error and result argument for displaying the result.    




*/
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test4'
});

//To check mysql database connected with nodejs or not -
con.connect((err) => {
    if (err) throw err;

    console.warn("Connected to MySQL database")
});

//To do some queries over 'personal' table under the 'test4' database -
con.query("SELECT * FROM personal", (err, result) => {

    if (err) throw err;
    console.log("Result of SQL: " + JSON.stringify(result));

});

// const result = [{ "id": 22, "name": "Prakash Verma", "birth_date": "1997-03-28T18:30:00.000Z", "phone": "2345678902", "gender": "M" }, { "id": 21, "name": "Rahul Verma", "birth_date": "1998-03-28T18:30:00.000Z", "phone": "234563402", "gender": "M" }, { "id": 1, "name": "Divya Verma", "birth_date": "2000-03-19T18:30:00.000Z", "phone": "2334563402", "gender": "F" }, { "id": 2, "name": "Hiya Verma", "birth_date": "1999-03-19T18:30:00.000Z", "phone": "2334363402", "gender": "F" }, { "id": 2, "name": "Rohan Verma", "birth_date": "2002-03-19T18:30:00.000Z", "phone": "2334344402", "gender": "M" }, { "id": 21, "name": "Rahul Verma", "birth_date": "1998-03-28T18:30:00.000Z", "phone": "234563402", "gender": "" }, { "id": 21, "name": "Rahul Verma", "birth_date": "1998-03-28T18:30:00.000Z", "phone": "234563402", "gender": "" }]


//config.js file : We create a seperate config file for only for connection purpose,and whenever we need this mysql connection we just use it. For Connection code resuability. 

config.js 