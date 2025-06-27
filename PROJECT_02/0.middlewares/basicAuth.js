
const userModel = require("../I.models/user");

const auth = async (req, res, next)=>{

    try {

        const {email, password} = req.body;
        const user =   await userModel.findOne({email, password});
        if(!user){

            return res.render("login.ejs", {loginErr : "Please Login and Password with Username or Password"})
            // return res.redirect("/login");
        }

        next();
        
    } catch (error) {

        console.log("Error in Auth Func : ", error);
        
    }
   


}


// server.use(auth);

module.exports = auth ;