
const express = require("express");
const userRouter = express.Router();

const {handleCreateNewPostUser, handleLoginPostUser} = require("../II.controllers/user");

//PoST -  For User Form Data Registration i.e Creation -
userRouter.post("/signup", handleCreateNewPostUser ) ;
userRouter.post("/login", handleLoginPostUser ) ;


module.exports = {userRouter} 