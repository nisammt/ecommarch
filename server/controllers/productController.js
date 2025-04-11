
const { cloudinaryInstance } = require('../config/cloudneryconfig');

const productmodel = require('../models/productModel');



const createProduct = async(req, res)=>{
   try {
    const {title, description, price, stock, image} = req.body;
    


    if(!title || !description || !price || !stock )
    {
        return(res.status(400).json({message: "All field are require"}));

    };    

      const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);

      // console.log("uploadfile",uploadResult);
   
     const newProduct = new productmodel({title , price, stock, image:uploadResult.url});
      console.log(newProduct)
       await newProduct.save();
       res.status(200).json({ message: "Product created successfully", data: newProduct });
    
    
   } catch (error) {
    res.status(error.status || 500).json({error: error.message || "internal server error" })  
   } 
   };
   
   const getAllproduct = async (req, res)=>{
    try {
         const product = await productmodel.find({});
          res.status(200).json({message: "Product List", data:product})
    } catch (error) {
      res.status(500).json({message: "something went wrong please try again"});
    }
      
    };
   

    const productDetails = async (req, res)=>{
        try { 
      
             const product_id = req.params.id;
          // console.log(product_id);
            //console.log(req.params);
            const productdt = await productmodel.findById(product_id)
            
            if(!product_id){
              return res.status(400).json({message : "product not fund"})
            }
                     
            res.status(200).json({message: "product details",data: productdt});
                     
                        
        } catch (error) {
            res.status(500).json({message: " something went wrong please try again"});
        }
    };

    const updateProduct = async(req , res)=>{
     try {
         const id = req.params.id;
        // console.log(id);
         const newproductdata = {title , price, stock, image} = req.body;
        // console.log(newproductdata);
         const newproduct ={$set:newproductdata};
        //console.log("update data",newproduct);
        const updateprodumodel = await productmodel.findByIdAndUpdate({'_id':id},newproduct,{new:true})
       // console.log(updateprodumodel);
        res.status(200).json({message:"product Updated successfully", data:updateprodumodel});            
    
     } catch (error) {
      res.status(500).json({message: "something went wrong please try again"});
     }
    }
    const deleteProduct = async(req, res)=>{
     try {
       const id = req.params.id;
       //console.log(id);
       const deleteitem = await productmodel.findByIdAndDelete(id);
       
        res.status(200).json({message: "product deleted succesfully", data:deleteitem})
      
     } catch (error) {
      res.status(500).json({message: "something went wrong please try again"});
     }
     
    }

   module.exports = {createProduct, getAllproduct, productDetails, updateProduct,deleteProduct}
