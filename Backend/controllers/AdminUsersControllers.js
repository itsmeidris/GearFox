
const getAllUsers = (User) => async (req ,res) =>{
    try{
        const users = await User.find();
        res.status(201).json({users , message : "Users fetched successfully."});
    }catch(e){
        console.log(`Error : ${e}`);
        res.status(500).json(`Cannot get users.`);
    }
}

const deleteUser = (User) => async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ successMessage: "User deleted successfully" });
    } else {
      res.status(404).json({ errorMessage : "User not found" });
    }
};

module.exports = {getAllUsers ,deleteUser};