const port=process.env.PORT || 5000;
const app=require("./app.js");
app.listen(port,()=>{
    console.log("Server is listening at port "+port);
})