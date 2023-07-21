const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const cookieParser=require("cookie-parser");
const authRoute=require("./Routers/AuthRoute");
const DBconnection=require("./configs/dbconfig.js");
const cors=require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}));
DBconnection();
app.use("/api/auth",authRoute);
app.use("/login",(req,res)=>{
    res.status(200).json({data: "This is Deepayans server"});
});
console.log("App is working");
module.exports=app;
