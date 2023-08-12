//import the express module 
const express = require('express')
const {RegisterUser,loginUser}=require('../controllers/user.controller')

//make instance of express module 
const routes = express()


//define middle ware 
routes.use(express.json())
routes.use(express.urlencoded({extended:true}))

//routes to /
routes.get('/',(req,res)=>{
    res.json(`Hello world!`)
})

//routes to register endpoint 
routes.post('/register',RegisterUser)

//routes to login page 
routes.post('/login',loginUser)

//exports the routes so other file can easily use 
module.exports = routes