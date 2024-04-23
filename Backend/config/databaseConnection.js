//Configuring the database connection 

const mongoose = require('mongoose');
require("dotenv").config();

const uri = process.env.URI;
const connectToDatabase = async () =>{
    try{
        await mongoose.connect(uri);
        console.log(`Connected to database`)
    }catch(e){
        console.log(`Error : ${e}`)
    }
}

module.exports = connectToDatabase;