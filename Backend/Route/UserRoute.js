const express = require("express")
const usercontroller = require("../Controller/Usercontroller")
const router = express.Router();

router.post("/signup",usercontroller.signup)
router.post("/login",usercontroller.login)
router.post("/user",usercontroller.getuser)


module.exports = router; 