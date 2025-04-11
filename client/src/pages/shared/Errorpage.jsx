
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Errorpage = () => {
 const navigate = useNavigate();

  return (
    <>
  
    <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center contactdiv h-full">
    <h2 className="text-5xl text-black text-center">Page not found</h2>

     <Link to={'/'}>
     <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 mt-3 rounded items-center">Back to Home</button>
     
     </Link>
  
 
 
 
   </div>
    </>
    
  )
  
}

export default Errorpage
