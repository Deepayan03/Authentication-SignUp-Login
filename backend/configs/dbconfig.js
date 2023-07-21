const mongoose=require("mongoose");
const url=process.env.URL;
const DBconnection=async ()=>{
    try{
        await mongoose.connect(url);
        console.log("Database connected");
    }
    catch(err){
        console.log(err);
    }
};

module.exports=DBconnection;