const express=require("express");
const {signup,signin,getuser, logOut}=require("../controllers/AuthController.js");
const jwtAuth = require("../middlewares/jwtAuth.js");
const controller=express.Router();
controller.post("/signup", signup);
controller.post("/signin",signin);
controller.get("/user",jwtAuth,getuser);
controller.get("/logout",jwtAuth,logOut);
module.exports=controller;