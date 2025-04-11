import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast"
const ProductDetail = () => {

  const {id} = useParams();
  const { productId } = useParams();

   console.log("hello id",id)
   console.log("Product ID", productId);
   
   


  
  const [productDeatais, setProductdetails] = useState({});
    
   const handleAddToCart = async () =>{
    try {
      
      const response = await axiosInstance({
        method: "POST",
        url:"cart/addcart",
        data: {id },

      });
      console.log("response", response);
      
    toast.success("Product added Cart"); 

    } catch (error) {

      console.log(error);

      toast.error( error?.response?.data?.message || "failed - add to cart");
      
    }
   }

  const loadProductdetails = async()=>{
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `product/products/${ id }`
      })
      setProductdetails(response?.data?.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(()=>{
    loadProductdetails()
  },[])

 console.log("product detaild",productDeatais);
 

  return (
    <div className='container max-auto px-20'> 
      <div className=" bg-base-200 mt-20">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={productDeatais?.image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <div>
        <h1 className='text-2xl'>{productDeatais?.title}</h1>
      </div>
      <div>
        <h1 className='text-lg'> Price : $ {productDeatais?.price}</h1>
      </div>

      <div className=' w-2/3'>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

      </div>
      
      
      <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default ProductDetail
