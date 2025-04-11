const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema(
      {
    userId:{ type:mongoose.Types.ObjectId, ref: "users", require :true, },

    product:[
        {
            productId: {

                type:mongoose.Schema.ObjectId, ref:"products", require: true,
                               
                
            },
            price :{
                type:Number,
                require: true,

            }
            ,
            quantity:{
                type: Number,
                default:0,
                require:true,

            },

        }
    ],
    totalPrice:{
        type:Number,
        require: true,
        default: 0,
    }

    

},{timestamps: true})

cartSchema.methods.calculateTotalPrice = function () {
    this.totalPrice = this.product.reduce((total, product) => total + product.price, 0)
}

//cartSchema.methods.calculateTotalPrice = function() {
   // this.totalPrice= this.product.reduce(

        //(total, product)=> total + product.price * product.quantity,0);
//};

module.exports = new mongoose.model("cart",cartSchema)



