const Review  = require('../models/reviewModel');
const Product = require('../models/productModel');
const addRivew = async (req, res) =>{
    try {
        const {productId, rating, comment} =req.body;
        const uid = req.user.id;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(400).json({message: "product not found"});
        };
        if(rating > 5 || rating < 1){
            return res.status(400).json({message :" Please Enter propper  rating"});
        };
        const review = await Review.findAndUpdate({uid,productId}, {rating, comment},{ new:true, upsert: trure});
        review.save()
        
        res.status(201).json({ message: "review created", data: review });

        
    } catch (error) {
        res.status(500).json({ message: "something went wrong please try again", error });
    };
};
const  getallReviews = async (req, res)=>{
    try {
        const {productId} =req.params;

        const reviews = await Review.find({productId}).populate("uId", "name").sort({createdAt: -1 });
      if (!reviews.length) {
            return res.status(404).json({ message: "No reviews found" });
        }

        res.status(200).json({ message: "course reviews fetched", data: reviews });
        

    } catch (error) {
        res.status(500).json({ message: "something went wrong please try again", error });
    };
};


module.exports ={addRivew, getallReviews}