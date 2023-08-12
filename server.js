// In this file we only store startup function 

//configure the dotenv
require('dotenv').config()

const mongoose = require('mongoose');
//use the routes 
const app = require('./routes/user.route')

//define PORT
const PORT = process.env.PORT || 8000;

// define hostname 
const hostname = "localhost"



// connect to mongodb database by mongoose 
const connectToDb = async()=>{
    mongoose.connect(process.env.mongoUrl)
    .then((conn)=>{
        console.log(`Database connected successfully with ${conn.connection.host}`);
        
        //server run 
        app.listen(PORT,()=>{
            console.log(`server running at ${hostname} : ${PORT}`);
        })
    }).catch((err)=>{
        console.log(`Error occurr while connect to db ${err.message}`);
    })
}


//call the function to connect and run ther server 
connectToDb()