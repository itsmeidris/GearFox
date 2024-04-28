//Define routes for registration, login, and any other user-related actions you want to implement.

const {signUp ,signIn ,userVerification} = require("../controllers/userController");
const router = require("express").Router();

router.post("/signup" ,signUp);
router.post("/signin" ,signIn);
router.post("/" ,userVerification);

module.exports = router;