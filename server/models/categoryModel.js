const mongoose = require("mongoose");


const categorySchema = new  mongoose.Schema({
    name:{
      type: String,
      minLength :3,
      maxLenth : 30,
     },
     image:{
       type: String,
       default :"",
     },
     createdby:{
      type:mongoose.Types.ObjectId, ref:"admin",
       }
     
},{timestamps:true})

module.exports = new mongoose.model("categories",categorySchema);
//const category = mongoose.model("categories", categorySchema)
//module.exports={category}
