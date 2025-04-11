const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require:true,

    }
    ,
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "products",
        require: true,
    },
    rating : {
        type: Number,
        require: true,
        minLength : 1,
        maxLenth: 5,

    },
    comment:{
        type: String,
        trim : true,
        maxLenth:500,

    }

})
module.exports = new mongoose.model("reviews", reviewSchema)