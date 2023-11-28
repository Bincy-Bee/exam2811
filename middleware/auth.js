const { user } = require("../models/user.model")

const auth = async(req,res,next)=>{
    const{id} = req.cookies
    if(id){
        let data = await user.findById(id);
        if(data){
            next();
        }
        else{
            res.send({message :"please login first"})
        }
    }
}
module.exports={auth}