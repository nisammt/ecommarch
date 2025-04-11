import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
console.log("Cardproduct",product);
 
  return (

    <>
    
    <div className="container max-h-auto px-10 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
       
           <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden  ">
              <img
               className="w-full h-48 object-cover"
               src={product.image}
               alt="Card Image"
               />
                   <div className="p-4">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-600">
                         {product.description}
                       </p>
                       <p>$: {product.price}</p>
                      <button className="mt-2 px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
                      Go somewhere
                 </button>
        
            </div>
       </div>
        
     </div>
 </div>

    </>
     
  )
}

export default ProductCard
