
//In Nodejs, using ExpressJS we do SSR rendering using either using an Template Engine Service for our code easly workable. So we will use the most popular javascript template engine(ejs) for making dynamic pages.

//ejs makes server side rendering easy, it provides the template engine.

// <%= EJS %>  -->  Embedded JavaScript templating.

//How to make dynamic Page :using template engine we can able to make any dynamic pages in expressjs easily.

//EJS (Embedded JavaScript) is a popular templating engine for Node.js that allows you to generate HTML markup with plain JavaScript. It is particularly useful for creating dynamic web pages, as it enables you to embed JavaScript logic directly within your HTML.

//Alternative of ejs is pugjs templating and handlebarsjs templating. 

/*EJS Setup before Use -

step1: Install EJS :  >npm i ejs

step2 : Set EJS as templating engine in index.js file -
         app.set('view engine', 'ejs');


step3 : Create the EJS Template : Similar Like HTML Page but with minor difference while redering the varaibles -

Note : The default behavior of EJS is that it looks all the views files i.e .ejs files inside the ‘views’ name folder only under the base project folder, for the templates to render. So, let’s make a ‘views’ folder in our main node project folder and make a file named “home.ejs” which is to be served on some desired requests in our node project. The content of this page is: 


        <!-- Home.ejs -->

        <!DOCTYPE html>
        <html>
        <head>
            <title>Home Page</title>

            <style type="text/css" media="screen">
                body {
                    background-color: skyblue;
                    text-decoration-color: white;
                    font-size: 7em;
                }
            </style>
        </head>

        <body>
            <center>This is our home page.</center>
        </body>
        </html>
        Now, we will render this page on a certain request by the user: 


        app.get('/', (req, res) => {

            // The render method takes the name of the HTML
            // page to be rendered as input
            // This page should be in the views folder only in the root directory.

            res.render('home');

            // We can pass multiple properties and values as an object, here we are passing the only name -
            res.render('home', { name: 'Akashdeep' });

             let data = {
                    name: 'Akashdeep',
                    hobbies: ['playing football', 'playing chess', 'cycling']
                }
             res.render('home', { data: data });


        });

  step 4 :  to embbed the common files into ejs template -
    
    we need some common file for the page, that we create under common folder under the views folder.
        
    # EJS Template Common Syntax : -   
    
      <%= %>  - For assigning i.e disaplying the varibale value into the template 

       <%  %>  - 'Scriptlet' tag, for enclosing the control-flow, no output, for executing js code with no output.

       
       <%- %> -  Outputs the unescaped value into the template

       <%#  %>  - Single Line Comment tag, no execution, no output

       <% /* %>  - Multi Line Comment tag, no execution, no output and we have to close i.e with   

       <%- include('common/header')  %>  --> for emebbeding the another .ejs file into some .ejs file



*/

const express = require('express');
const server = express();

// Set EJS as templating engine
server.set("view engine", "ejs");

server.get("/profile", (req, res)=>{
    const userData = {
        name : "Prakash Verma",
        email : "prakash123@gmail.com",
        city :"kolkata",
        skills : ["php", "js", "c++", "javascript", "nodejs", "wow2"]
    }

    // res.render('I.profile'); // for static ejs rendering; first argument takes the folder name with or without .ejs 

    // res.render('I.profile', {name2 : "Prakash Deverakonda"} ); //we sent via 'name2' key, to access there use <%= name2 %>

    // res.render('II.profile2.ejs', {user : userData } ); //access there as user

            // OR,

    res.render('II.profile2.ejs', {userData} ); //access there as userData


    //the second parameter is object which takes by render() method for ejs dynamic data rendering which we sent from here to ejs template file.
    //To add dynamic content this render method takes a second parameter which is an object. This is done as:

});

//For Common page embedding into ejs file -
server.get("/login", (_, res)=>{

    res.render("III.login.ejs") ;//here we include the 2nd parameter if we sending some data from here to temple file specified at 1st Parameter.

})

server.listen(8000, ()=> console.log("Server Started at 8000"))


