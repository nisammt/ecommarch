import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Darkmode from '../shared/Darkmode'
import { Search, User } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { axiosInstance } from '../../config/axiosInstance';
import { Navigate } from 'react-router-dom';


const UserLoginHeader = () => {
  let navigate = useNavigate();
   const handilLogout = async ()=>{
    try {
      const responce = await axiosInstance({
        method:"POST",
        url:"user/logout"
      });
      //console.log("response", responce)
      if(responce){
        navigate("/")
      }

      
    } catch (error) {
      console.log(error);
      
    }
   }

  return (
   <>
     <header className='h-20 shadow-md  bg-white'> 
      <div className='h-full  max-auto flex items-center px-4 justify-between'>
        <div className='p-10'>
          <Link to={"/"}>  <button className=''>logo</button></Link>
         
        </div>
        <div className='hidden lg:flex items-center w-96 h-10 justify-between max-sm border rounded-full pl-3  focus-within:shadow' > 
           <input type="text"placeholder='search' className='w-full outline-none '/>
             <div className='text-lg min-w-[50px] h-10 flex items-center justify-center bg-green-600 rounded-r-full text-white' >
                <Search /> 
            </div>
        </div>

          <div className='flex items-center gap-6 pl-10'>
            <div className='text-3xl cursor-pointer'>
            <CircleUserRound />
            </div >
            <div className='relative'>
            <span><ShoppingCart/></span> 
              <div className='bg-green-600 text-white w-5 p-1 flex items-center justify-center rounded-full absolute -top-2 -right-3'>
                <p className='text-sm'>0</p>
              </div>
            </div>   
             
           <div>
            
            <Link to={"/login"}>
            <button className='bg-green-600 hover:bg-green-600 rounded-full text-white px-3 py-1' onClick={handilLogout}>Logout</button>
            </Link>
           
           </div>  

          
            <div>
            <Darkmode/>
             </div>
             
           </div>
         
  
     </div>
       
      
    </header>
     
   </>
  )
}

export default UserLoginHeader
