const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    customer:{
        type:Schema.Types.ObjectId,
        ref: "users",
        require: true,
        minLenth: 3 ,
        maxLenth: 40,
    },
    address: {
        type: String,
        require: true,
        minLenth: 20,
    },
    cartitem:[{type: mongoose.ObjectId, ref:"cart"}],

    status: {
        enum: ["Pending","Cancelld","Deliverd"]

    },
    paymetid:{
        type: String,
        
    }

},{timestamps: true})

module.exports = new mongoose.Schema("orders",orderSchema)