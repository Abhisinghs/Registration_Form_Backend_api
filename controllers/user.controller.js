//In this file we write our logic part only 

//import the userSchema in controller file 
const User = require('../models/user.model')


//define logic to store user data into database 
const RegisterUser = async(req,res)=>{
    try{
        await User.create(req.body)
        res.status(200).json({message:`User Registered Successfully`})
    }catch(err){
        res.status(500).json({message:`Error occur while registration`})
    }
}

//define logic to check when user login 
const loginUser =async(req,res)=>{
    const {email,password} = req.body;

    try {
        const userData= await User.findOne({email});
        if(userData){
            // checking password provided by user is correct or not
            if(userData.password === password){
                res.status(200).send({msg:"User Login Successfully"})
            }else{
                res.status(401).send({msg:"Password Incorrect Try Agian!"})
            }
        }else{
            res.status(404).send({msg:"No Account Find associated to this email"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})   
    }
}


//export the createuser to route 
module.exports = {RegisterUser,loginUser}