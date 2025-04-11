const mongoose =require('mongoose')
 

const ProductSchema = new mongoose.Schema({
    
    title:{
            type: String,
            require : true
        },
        description:{
            type: String,
            //required: true,
            miniLength: 5,
            maxLength: 100,
            
        },

        price:{
            type: Number,
            require: true
            
        },
        stock:{
            type: Number,
            default :0
          },
        image:{
            type: String,
            default :"",

        },

       categoty:{ type:mongoose.Types.ObjectId, ref: "categories"},

       createdby :{type :mongoose.Types.ObjectId, ref: "admin"},
      
        
},

{timestamps: true})

module.exports = new mongoose.model("products",ProductSchema)