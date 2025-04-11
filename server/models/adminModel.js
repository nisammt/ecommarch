const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        miniLength: 3,
        maxLength: 20,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,

    },
    mobile:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        miniLength: 3,
      },
      isActive: {
        type: Boolean,
        default: true,
      },
      role:{
        type:String,
        enum:["seller", "admin"],
        default:"admin",
      },
      resetToken: {
        type: String,
        default: null,
      },
      resetTokenExpires: {
        type: String,
        default: null,
      },
      


},{timestamps:true})

module.exports = new mongoose.model("admin",AdminSchema)