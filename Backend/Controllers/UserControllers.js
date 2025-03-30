const User = require("../Model/Register");

const getAllUsers = async (req, res, next) => {

    let Users;

    try{
        Users = await User.find();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!Users){
        return res.status(404).json({message:"User not found"});
    }
    //Display all users
    return res.status(200).json({Users});
};

const addUsers = async (req,res,next) => {

    const{name,email,password} = req.body;

    let users;

    try{
        users = new User({name,email,password});
        await users.save();
    }catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "unable to add users"});
    }
    return res.status(200).json({users});
};

//get by id
const getById = async (req,res,next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch (err){
        console.log(err);
    }
    //not availble user
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user});

};

//update user detils
const updateUser = async(req, res, next) => {
    const id = req.params.id;
    const{name,gmail,age,address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,
            {name: name, gmail: gmail, age: age, address: address});
            users = await users.save();
    }catch(err){
        console.log(err);
    }
    //unable update
    if(!users){
        return res.status(404).json({message: "Unabale to update user details"});
    }
    return res.status(200).json({users});

};
//delete user details
const deleteUser = async(req, res, next) =>{
    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    //unable to remove
    if(!user){
        return res.status(404).json({message: "Unabale to remove user details"});
    }
    return res.status(200).json({user});
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;