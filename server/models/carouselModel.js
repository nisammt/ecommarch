const mongoose = require('mongoose')

const carouselSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        maxLength: 100,
      },
  
      color: {
        type: String,
        enum: ["black", "yellow"],
        required: true,
        maxLength: 10,
      },
  
      image: {
        type: String,
        default: "",
      },
  
      admin: {
        type:mongoose.Schema.ObjectId,

        ref: "Admin",
      },
    },
    { timestamps: true }
  );
  module.exports = new mongoose.model("carousels",carouselSchema)