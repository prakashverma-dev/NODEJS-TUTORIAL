
/*
Note : We make file names under any MVC folder, with the database collection name measn kiska controller hai 'user' or kisi aur ka, we keep same name as collection name from database.(Note In Database, Collection names we keep as plural as collection indicate collection of documents i.e object, Here in Mongoose Model singular name get converted to pluar or look for pluaral.)


//In Controllers We keep only the handler for the each APIs i.e we keep the all logic here In form of each functions and then we export -

//Controllers consist of functions, which handles the logic for end point hitting.

//Naming File Name : user.js   ---> Means 'user ka controller'.

*/

//Importing the userModel From Model Folder -
const userModel = require("../models/user")



//All Users Get -
async function handleGetAllUsers (req, res){

    const users = await userModel.find({}); 
    return res.json(users);
}

//Single User Get By ID -
async function handleGetUserById(req, res){

    const paramsId = req.params.id ; //string datatype
    const user = await userModel.findById(paramsId) ;// Here, user(singular) indicate single object.

    // Note : findOne({_id : paramsId}) is same as findById(paramsId) , use any.

    return res.json(user); //single user(singular) object get returned.

}

//Single User Update By ID - (Patch)
async function handleUpdateUserById(req, res){

        // const id = req.params.id; //string
        await userModel.findByIdAndUpdate(req.params.id, {email : req.body.email} )
    
        res.json({msg  : "Success at Modifying Data..!"})
    
}

//Single User Delete By ID -
async function handleDeleteUserById(req, res){
 
    const id = req.params.id; //string
    await userModel.findByIdAndDelete(id);

    res.json({msg : "Deleted User Succefully..!"})

}


//Single USer Create - (Post)
async function handleCreateNewUser(req, res){


    try{

    const bodyObj = req.body ; //we receive all the key-value paired passed inside body of request HTTP
    // console.log("BodyObject : "+ bodyObj);

    if( !bodyObj || !bodyObj.first_name || !bodyObj.last_name || !bodyObj.email || !bodyObj.gender || !bodyObj.job_title ){

        return res.status(400).json({msg : "All fields are required... "})
    }

     //Using Async - Await to handle UserModel.create() Promise -
     const result = await userModel.create({

        firstName : bodyObj.first_name,
        lastName : bodyObj.last_name,
        gender : bodyObj.gender,
        email : bodyObj.email,
        jobTitle : bodyObj.job_title,
    })

    //Here, result is the saved data from the database i.e newly inserted data with database crated _id.

    console.log("Yesss"); //If we using the Asyn await then if error happening in not fetching the data then await keyword stops there means further code of line get stops executing.

    console.log(result);
    return res.status(201).json({msg : `New Data Inserted with id -`, id : result._id})

    }catch(err){
        throw err;
    }
    

};

// handleCreateNewUser().catch((err)=> console.log("Error is : "+err))

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}
