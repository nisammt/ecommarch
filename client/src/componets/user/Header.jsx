import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Darkmode from '../shared/Darkmode';
import { Search, User } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import {AlignJustify}  from 'lucide-react';
import {X} from 'lucide-react';

const Header = () => {
  // State to manmge the navbar visiblity
    const [nav ,setNave] = useState(false);

    const handileNave = () =>{

      setNave(!nav)
    };

  return (
    <>
    <header className='h-20 shadow-md  bg-white fixed w-full top-0 left-0'> 
      <div className='h-full  max-auto flex items-center px-4 justify-between'>
        <div className='p-10'>
          <Link to={"/"}>  <button className=''>logo</button></Link>
         
        </div>
        <div>
 
      

        </div>
        <div className='hidden md:flex items-center w-96 h-10 justify-between max-sm border rounded-full pl-3  focus-within:shadow' > 
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
            <button className='bg-green-600 hover:bg-green-600 rounded-full text-white px-3 py-1'>Login</button>
            </Link>
           
           </div>  

          
            <div className='hidden lg:flex items-center'>
            <Darkmode/>
             </div>
             
           </div>

         <div onClick={handileNave} className='block md:hidden'>
          {nav?   <X  size={30}/>:  <AlignJustify  size={30}/> }
         </div>
  
     </div>
       {/* Mobile Navigation Menu */} 
        <div className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-500': 'ease-in-out w-[60%] duration-500 fixed top-0 botton-0 left-[-100%]'} >


        <div>
          {/* Mobile Logo */}

           <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>My Cart</h1>
         </div>
         <div className='flex items-center bg-slate-200 border rounded-full   focus-within:shadow' >
             <input type="text" placeholder='Search' className='w-full h-full p-2 border rounded-full outline-none' />
             <div className='text-lg min-w-[50px] h-10 flex items-center justify-center bg-green-600 rounded-r-full text-white ' >
                <Search /> 
            </div>
         </div>
         
        </div>

        
        
    </header>
     
    </>
  )
}

export default Header
