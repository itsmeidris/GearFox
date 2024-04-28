const userModel = require('../models/userModel');

const adminUsers = [
    {
        email : "idriiss02@gmail.com",
        username : "edris02",
        password : "edris123456",
        isAdmin : true

    },
    {
        email : "moumen02@gmail.com",
        username : "moumen02",
        password : "moumen123456",
        isAdmin : true

    },
    {
        email : "chamss01@gmail.com",
        username : "chamss01",
        password : "chamss123456",
        isAdmin : true

    }
];
const seedAdminUsers = async () =>{
    try{
        for(const adminUser of adminUsers){
            const existingAdmin = await userModel.findOne({email : adminUser.email});

            if (!existingAdmin) {
                const newAdmin = new userModel(adminUser);
                await newAdmin.save()
                console.log(`Admin user added successfully.`);
              } else {
                // console.log(`Admin user already exists, skipping.`);
                continue
              }
            }
          } 
          catch (e) {
            console.log(e);
          }
};

module.exports = {seedAdminUsers ,adminUsers};