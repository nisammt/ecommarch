const mongoose = require('mongoose');
const AdminSchema = new  mongoose.Schema({

        name: {
            type: String,
            required: true,
            miniLength: 3,
            maxLength: 20,

          email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
          },
          mobile: {
            type: String,
            unique: true,
            required: true,
          },
          password: {
            type: String,
            required: true,
            miniLength: 3,
          },
          role: {
            type: String,
            enum: ["seller", "admin"],
            default: "admin",
          },
          isActive: {
            type: Boolean,
            default: true,
          },
          resetToken: {
            type: String,
            default: null,
          },
          resetTokenExpires: {
            type: String,
            default: null,
          },
          profilePicture: {
            type: String,
            default:
              "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
          },
          products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
          carousels: [{ type: mongoose.Schema.Types.ObjectId, ref: "carousel" }],
        },
        
    
},{timestamps:true})


module.exports = new mongoose.model("admin",AdminSchema)