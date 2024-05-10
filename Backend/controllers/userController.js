const User = require("../models/userModel");
const asyncHandler = require("../middlewares/asyncHandler");

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Request body ", req.body);
  if (!username || !email || !password) {
    res.status(400).json("Please fill all the inputs.");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).send("User already exist");
  }
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      isAdmn: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data  ");
  }
});

module.exports = { createUser };
