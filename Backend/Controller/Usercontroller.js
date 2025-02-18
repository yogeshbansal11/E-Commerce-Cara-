const usermodel = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.secretKey



const signup = async (req, res) => {
  const { name, email, password , confirmPassword ,role} = req.body;

  try {
    console.log(name,email,password,confirmPassword);
    
    if (!(name && email && password && confirmPassword )) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password != confirmPassword) {
      return res.status(404).json({ message: "Incoreect Password" });
    }

    const userEmail = await usermodel.findOne({ email });
    if (userEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);               

    const user = new usermodel({
      name,
      email,
      password: hash,
      role
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("User not saved:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ _id: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, _id: user._id, message: "User login successful" });
  } catch (error) {
    console.error("Error in user login:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getuser = async(req,res)=>{
  try{
    const {id} = req.params;
    const user = await usermodel.findOne({ _id:id });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  }catch (error) {
    return res.status(500).json({ message: "Internal server error" });
}
}

module.exports = { signup, login, getuser };
