const { cloudinaryInstance } = require('../config/cloudneryconfig');
const category = require('../models/categoryModel')

const createCategory = async (req, res)=>{
  try {
    const {name, image } = req.body;

     console.log("req body",req.body);
     



    if(!name){
        return(res.status(400).json({message: "All field are require"}));
    };
    const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);


     const newCategory = new category({name,image:uploadResult.url})
     //console.log(newCategory);
     await newCategory.save();
    res.status(200).json({ message: "Category created successfully", data: newCategory });

    
  } catch (error) {
     res.status(error.status || 500).json({error: error.message || "internal server error" }) 
  };

};
const getCategory = async(req , res)=>{
    try {
        const categoryList = await category.find();
        res.status(200).json({ message: "Category list fetched", data: categoryList });
        
    } catch (error) 
    {
        res.status(500).json({message: " something went wrong please try again"});}
}

module .exports ={createCategory, getCategory}