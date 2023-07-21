const jwt=require("jsonwebtoken");

const jwtAuth=(req,res,next)=>{
    const token=(req.cookies && req.cookies.token)|| null;
    if(!token){
        return res.status(400).json({
            success:false,
            message:"Unauthorized"
        });
    }
    try{
        const payload=jwt.verify(token,process.env.SECRET);
        req.user={id:payload.id,email:payload.email};
        console.log(payload.id,payload.email);
    }catch(e){
        return res.status(400).json({
            success:false,
            message:"Unauthorized"
        });
    }
    next();
}

module.exports=jwtAuth;