//pass= PPvW6RAI1PUBcOwW

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app = express();

//Middleware
app.use(express.json());
app.use("/register",router);


mongoose.connect("mongodb+srv://admin:PPvW6RAI1PUBcOwW@cluster0.cdmpb.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(3000);
})
.catch((err)=> console.log((err)));
//Register
//call Register Model
require("./Model/Register");
const User = mongoose.model("Register");
app.post("/register" ,async(req,res) =>{
    const {name,email,password} = req.body;
    try{
        await User.create({
            name,
            email,
            password,
        })
        res.send({status:"Ok"});
    }catch(err){
        res.send({status:"err"});
    }
});

//Login-----------
 app.post("/login", async (req, res) =>{
    const {gmail,password} = req.body;
    try{
        const user = await User.findOne({gmail});
        if(!user){
            return res.json({err:"user Not found"})
        }
        if(user.password === password){
            return res.send({status:"Ok"});
        }else{
            return res.json({err: "Incorrect Password"})
        }
    }catch(err){
        console.error(err);
        re.status(500).json({err:"server Err"})
    }
 });