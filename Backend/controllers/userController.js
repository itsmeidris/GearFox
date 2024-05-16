//Define the functions for user-related operations like registration...

const userModel = require('../models/userModel');
const createSecretToken = require('../utils/secretToken');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile_pics', // Folder where the images will be stored in Cloudinary
    format: async (req, file) => 'png', // Format of the image (you can change it based on your requirements)
    public_id: (req, file) => file.fieldname + '-' + Date.now()
  }
});
const upload = multer({storage: storage});

const signUp = async (req, res) => {
  try {
    const { email, password, username ,createdAt} = req.body;

    if(!req.file){
      return res.status(400).json({message : 'Please upload a profile picture'});
    }

    const profilePic = req.file.path;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists." });
    }

    const user = await userModel.create({ email, password, username, profilePic ,createdAt});
    const token = createSecretToken(user._id);
    
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log(`Error : ${err}`);
        return;
      }
      console.log('Hashed password:', hash);
    });
    
    await user.save();

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user : {email ,username ,profilePic}
    });

  } catch (e) {
    console.log(`Error  : ${e}`);
  }
}

const signIn = async (req ,res) =>{
  try{
      const {email ,password} = req.body;
      if(email === "" || password === ""){
          return res.json({message : "All fileds are required"});
      }

      const user = await userModel.findOne({email});
      if(!user){
          return res.json({message:'Incorrect password or email' });
      }

      const auth = await bcrypt.compare(password ,user.password);
      if(!auth){
          return res.json({message:'Incorrect password or email' });
      }

      const isAdmin = user.isAdmin;
      if(isAdmin){
        return res.status(201).json({
          message : `Welcome Admin ${user.username}`,
          success : true,
          isAdmin :true
        });
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
      });
      res.status(201).json({ 
          message: `Welcome ${user.username}`, 
          success: true,
          isAdmin :false
      });

  }catch(e){
      console.log(`Error : ${e}`);
      res.json({ message: "An error occurred during login" });
  }
}

const userVerification = (req ,res) =>{
  const token = req.cookies.token;
  if(!token){
      return res.json({status : false});
  }

  jwt.verify(token ,process.env.TOKEN_KEY ,async (err ,data) =>{
      if(err){
          return res.json({status : false});
      }else{
          const user = await userModel.findById(data.id);
          if(user){
              return res.json({status : true ,user : user.username});
          }else{
              return res.json({status : false});
          }
      }
  });
}

module.exports = {signUp ,signIn ,userVerification};