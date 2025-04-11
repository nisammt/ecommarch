import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [productlist, setProductlist]= useState([]);
    const renderProduct = async ()=>{
      try {
        const response = await axiosInstance({
        
            method:"GET",
            url:"/product/getproduct"
        })
       // console.log("response",response)
        setProductlist(response?.data?.data);
        //console.log("productlist",productlist);
        
  
        
      } catch (error) {
        console.log(error);
        
      }
   
     
  
    };
  
    useEffect(()=>{
      renderProduct();
  
    },[])

    return (
     <>
       <div className="container mx-auto px-20 mt-20">
      <div className="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productlist.map((productlist, index) => (

          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className='p-6 w-full h-96'>
            <img
              className="w-full h-50 mt-34 object-cover "
              src={productlist.image}
              alt={productlist.title}
            />

            </div>
           
            <div className="p-4">
              <div>

              <h2 className="text-lg font-semibold text-gray-800">{productlist.title}</h2>
                {/* // <p className="text-gray-600 mt-2">{product.description}</p> */}
              <p className="text-xl font-bold text-gray-900 mt-2">${productlist.price}</p>

              </div>
             

              <div className="flex justify-between mt-4  ">
            <Link to={`products-details/${productlist._id}`}>
                <button className="md:px-4 py-2  bg-green-600 text-white rounded hover:bg-red-600 transition">
                  View Details
                </button>
                </Link>
                <button className="px-4 py-2  bg-green-900 text-white rounded hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     
     </>
    )
  
}

export default Home
