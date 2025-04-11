const carouselDb = require("../models/carouselModel");
const admindb = require("../models/adminModel");
const { cloudinaryInstance } = require('../config/cloudneryconfig');

const addCarousel = async(req, res) =>{
    try {
          const {title, color} = req.body;
          
          console.log("req.body",req.body);
          

          if( !title || !color){

            return res.status(400).json({ message: "All fields rquired" });

          };
           
          
          const adminId = req.user.id;
          
          console.log("admin id" , adminId);
            

          const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
          
         console.log("Upload Result", uploadResult);
         
      

          const carousel = new carouselDb({
            title,
            color,
            image:uploadResult.url,
            admin:adminId,
            
          });

          await carousel.save();

          await admindb.findOneAndUpdate(
            {
              _id:adminId
            },
            {$push:{carousel:carousel._id}},
            {new:true}

          );
         

          res.status(200).json({ message: "carousel  added sucessfully", data:carousel });

       
        
    } catch (error) {

        res.status(error.status || 500).json({error: error.message || "internal server error" })        
        
    }
};

const getCarousel = async(req, res)=>{
  try {

    const carousel = await  carouselDb.find();

    if(!carousel.length){
      return res.status(404).json({message:"No carousel image "})
    }
    
    res.status(200).json({message:"Carousel fetched", data:carousel})
    
  } catch (error) {

    res.status(error.status || 500).json({error: error.message || "internal server error" }) 
    
  }
};

const searchCarousel = async (req, res)=>{
  try {
     const {searchValue} = req.body;

     if(!searchValue || searchValue.trim()===""){

      return res.status(400).json({message: "Key word not found"});
     }

    
  } catch (error) {

    res.status(error.status || 500).json({error: error.message || "internal server error" }) 

    
  }
}

module.exports ={addCarousel,getCarousel}