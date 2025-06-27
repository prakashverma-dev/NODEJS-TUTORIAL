//Take input from user in Nodejs from CLI, we have serveral options with modules like nodejs inbuilt 'readline' module or external NPM modules like 'prompt' and 'prompt-sync'  -


/*  #1. NPM 'prompt' module : - prompts the user for input 
                                supports validation and defaults
                                hides passwords
                                this method returns always string value

    To use this module, use prompt.get() method of it as shown -

     const prompt = require('prompt');

        Start the prompt
        prompt.start(); //optional //Check

  // Get two properties from the user: username and password  -

        prompt.get(['name', "password"], (err, result)=>{
                if(err){
                    console.warn(err);
                }

            console.log("Your Name is : ", result.name);
            console.log("Your Password is : ", result.password);
        })

// If no callback is passed to prompt.get(schema), then it returns a Promise, so you can also write: -

// const {username, email} = await prompt.get(['username', 'email']);


*/




// #2. NPM 'prompt-sync' module : - Works exactly same like Javascript 'prompt' function. How to use 'prompt-sync' as shown -

const prompt = require("prompt-sync")(); //takes always a string, just like js prompt.
//Just like browser's prompt(), In Nodejs prompt-sync module of NPM works means takes the input from the user and always return the value in string datatype. so,if user want the number datatype as output value then he has to convert string datatype into number datatype to work with number values.

// const name = prompt("Enter your name : "); 
// const age = prompt("Enter your name : ");

// console.log("Your Name is : ", name);
// console.log("Your Age is : ", age);
// console.log(typeof name); //string 
// console.log(typeof age);  //string

//Example: Take two number from user and display the sum of it -

//  const num1 = parseInt( prompt("Enter First Number : ")); 
//  const num2 = parseInt(prompt("Enter Second Number : "));

//  const num1 = parseFloat( prompt("Enter First Number : ")); 
//  const num2 = parseFloat(prompt("Enter Second Number : "));

 const num1 = Number( prompt("Enter First Number ", 20)); 
 const num2 = Number(prompt("Enter Second Number ", 20 ));
 

//  Note: The Second Paramter takes as default value if user doesnot enter any value.

//  const num1 = +( prompt("Enter First Number : ")); 
//  const num2 = +(prompt("Enter Second Number : "));


console.log("the sum is :",num1+num2)

