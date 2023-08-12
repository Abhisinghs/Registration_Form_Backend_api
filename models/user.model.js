//import the mongoose module to create model 
//In this file we only do stucture our data not to store 
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
    
},{
    timestamps:true
})

const userData = mongoose.model('user',userSchema)

//exports the schema module so other file can access 
module.exports = userData