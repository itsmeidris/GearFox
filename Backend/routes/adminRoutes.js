//Define routes for registration, login, and any other user-related actions you want to implement.
const {getAllUsers, deleteUser} = require("../controllers/AdminUsersControllers");
const User = require('../models/userModel');
const adminRouter = require("express").Router();

adminRouter.get('/users' ,getAllUsers(User));
adminRouter.delete('/users/:id' ,deleteUser(User));

module.exports = adminRouter;