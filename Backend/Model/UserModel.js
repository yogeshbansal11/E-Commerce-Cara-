const mongoose = require("mongoose")

const userschema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
  role:{
    type:String,
    default:"buyer"
  }
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("user",userschema)