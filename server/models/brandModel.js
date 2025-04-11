const mongoose = require("mongoose");

const brandSchema = new  mongoose.Schema({
 name:{
    type: String,
    minLength : 3,
    maxLength: 50,

 },
 image:{
    type: String,
    default :"",
  },
    createdby:{
        type:mongoose.Types.ObjectId, ref:"admin",
 }


},{timestamps: true})

module.exports = new mongoose.model("brands", brandSchema)