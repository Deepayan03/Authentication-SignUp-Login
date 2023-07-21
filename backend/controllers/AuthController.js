const { json } = require("express");
const userModel=require("../model/userSchema.js");
const emailValidator=require("email-validator");
const bcrypt=require("bcrypt");
const signup=async(req,res,next)=>{
    const { name, email, password, confirmPassword } = req.body;

    console.log(name,email,password,confirmPassword);
    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({
            success:false,
            data:"Every field is required"
        });
    }

    if(password!=confirmPassword){
        return res.status(400).json({
            success:true,
            data: "Password and Confirm Password doesn't match"
        });
    }

    const validate=emailValidator.validate(email);
    if(!validate){
        return res.status(400).json({
            success:false,
            data:"Enter correct email !!"
        });
    }
    try{
    const userInfo = new userModel(req.body);
    const result=await userInfo.save();
    return res.status(200).json({
        success:true,
        data:result
    });
    }
    catch(err){
        console.log(err);
        if(err.code===11000){
            return res.status(400).json({
                success:false,
                data:"Account already exists"
            })
        }
        return res.status(400).json({
            success:false,
            data:err
        })
    }
}


const signin=async (req,res,next)=>{
    const {email,password}=req.body;
    console.log(email,password);
    if(!email || !password){
        return res.status(400).json({
            success:false,
            data:"Every field is Mandatory"
        });
    }
    try {
    const user=await userModel.findOne({email}).select("+password");
    console.log(user);
    if(!bcrypt.compare(user.password,password)|| !user){
        return res.status(400).json({
            success:false,
            data:"Invalid Credentials"
        });
    }
    const token=user.jwttoken();
    user.password=undefined;
    const cookieOption={
        maxAge:24*60*60*1000,
        httpOnly:true
    }
    res.cookie("token",token,cookieOption);
    return res.status(200).json({
        success:true,
        message:"Successfully logged in",
        data:user
    }); 
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        });
    }
    
}

const getuser=async (req,res,next)=>{
    const userId=req.user.id;
    try {
        const user=await userModel.findById(userId);
        return res.status(200).json({
            success:true,
            data:user
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const logOut=(req,res,next)=>{
    try{
        const cookieOption={
            expires:new Date(),
            httpOnly:true
        }
        res.cookie("token",null,cookieOption);
        return res.status(200).json({
            success:true,
            message:"Successfully logged out"
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Some error occured....Please try again"
        });
    }
}
module.exports={signup,signin,getuser,logOut};