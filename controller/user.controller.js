const { task } = require("../models/task.model");
const { user } = require("../models/user.model")

const home = (req,res)=>{
    res.send({message : "Welcome to task api"})
}

const signup = async(req,res)=>{
    const {email, password}= req.body;
    try {
        let data = await user.findOne({email : email})
        if(data){
            return res.send({message : "user already exist"})
        }
        else{
            data = await user.create(req.body);
            return res.cookie("id", data.id).send(data)
        }
    } catch (error) {
        return res.send(error.message)
    }
}

const login= async(req,res)=>{
    const {email, password}= req.body;
    try {
        let data = await user.findOne({email : email})
        if(!data){
            return res.send({message: "user not exist"})
        }
        if(data.password != password){
            return res.send({message :"password inccorect"})
        }
        return res.cookie("id", data.id).send({message: "Login succesfully"})
    } catch (error) {
        return res.send(error.message)
    }
}

const getsignup = (req,res)=>{
    res.render("signup")
}

const taskcreate=async(req,res)=>{
    try {
        const {id} = req.cookies;
        let data = await user.findById(id);
        req.body.createdby = data.username
        let cretaetask = await task.create(req.body)
        res.send(cretaetask)
    } catch (error) {
        return res.send(error.message)
    }
}
module.exports={home, getsignup, signup, login, taskcreate}