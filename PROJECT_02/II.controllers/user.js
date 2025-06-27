
const userModel = require("../I.models/user");

const bcrypt = require('bcrypt');

const {v4 : uuidv4 } = require("uuid"); //for creating the sessionID
const jwt = require("jsonwebtoken"); ////for creating the JWT Token


//handle Login -
async function handleLoginPostUser(req, res) {

  //Steps:
  //Our User exists or not with its credentials email and password verification
  //Generate the token or session id for each new logginned user
  
  const {email, password} = req.body ;

  try {

    const user =  await userModel.findOne({email : email})
    // await userModel.findOne({email, password}) ; //AND operator(,) means jab dono mile tavi allow.

    if(!user) return res.render("login.ejs", {loginErr : "Invalid Username Please Check!"})

    //if(!user) return res.status(404).json({loginErr : "User not found!"})
    const matchPassword = await bcrypt.compare(password, user.password);// as stored password is hashed password and user password is normal.

    if(!matchPassword) return res.render("login.ejs", {loginErr : "Invalid Password Please Check!"})
    //if(!matchPassword) return res.status(400). json({loginErr : "Invalid Credentials!"})  
     

    //If everything went good, we create a sessionID for new each loginned user.

    // const sessionId= uuidv4();

    //Now If everthing right of user login credentials, we create token for that perticular user -
    const jwtToken = jwt.sign( {email : user.email, id : user._id } , process.env.SECRET_KEY); //{ expiresIn: '1h' } // We assigning a token to each loggined user with their email and id, to generate the token.

    // res.cookie("sessionId", sessionId);
    res.cookie("jwtToken", jwtToken);
    res.redirect("/");

    // res.status(201).json({user : user, token : token})

    

    
  } catch (error) {

      console.log("Error : ", error);
      // res.status(500).json({message :"Something went wrong!"});
      res.render('login.ejs', {loginErr : "Something went wrong..!"});
    
  }
 
    
}


//handle Signup -
async function handleCreateNewPostUser(req, res){

  //Steps -
  //Existing User Check
  //Hashed Password(For user passsword save in encrpted form, we used 'bcrypt' library package we used.)
  //User Creation
  //Token Generate(using jwt)

  const {name, email, password} = req.body ; 
  if(!req.body) return res.render('signup.ejs', {signupError : "Please Fill all the input fields "})

  try {

    //Step1 :Existing User Check
    const existingUser = await userModel.findOne({email : email});

    if(existingUser) return res.render('signup.ejs', {signupError : "User already exists..Please Login with your username and password!"});

    // if(existingUser) return res.status(400).json({message : "User already exists"}); //for sending as json response for backend developer.

    //Step2 :Hashed User Password -
    const hashedPassword = await bcrypt.hash(password, 12); //1st paramter is user password and 2nd parameter is saltRounds we specified; salt to used in encrption, It specified as number to be more secure the hashed password as hasing password generates after 10 rounds running for more secure.
    
    // Hashing: Transforms data into a fixed-size string of characters, typically used for verifying the integrity of data and securely storing passwords. 
    //Salting: Adds random data to a password before hashing, providing increased protection from attacks like rainbow table lookups.


    //Step3 :User Creation -
    
    const newUser=  await userModel.create({
        name : name ,
        email : email,
        password :  hashedPassword});

    //Step4 : Token Generation(JWT Tokens)
    // const token = jwt.sign( {email : newUser.email, id : newUser._id } , process.env.SECRET_KEY )
 //whenever we have to generate any new token we use .sign() method with 1st Paramter= {payload data} what we want to store and Second Parameter = Secrete Key provide.

      // res.status(201).json({user : newUser, token : token});
      res.render('login.ejs', {signupSuccessMsg: "User Signup Successfully..Please login..!"});

    
  } catch (error) {
    
    console.log("Error : ", error);
    // res.status(500).json({message :"Something went wrong!"});
    res.render('signup.ejs', {signupError : "Something went wrong..!"});

  }

}





module.exports = {handleCreateNewPostUser, handleLoginPostUser}