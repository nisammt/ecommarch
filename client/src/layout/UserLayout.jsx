import React, { useEffect } from 'react'
import Header from '../componets/user/Header'
import Footer from '../componets/user/Footer'
import { Outlet,useLocation} from 'react-router-dom'
import UserLoginHeader from '../componets/user/UserLoginHeader'
import { axiosInstance } from '../config/axiosInstance'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser, saveUser } from '../redux/features/UserSlice'




const UserLayout = () => {
  
 
  const {isuserAuth} = useSelector((state) => state.user);
  const location = useLocation();
  
  const dispatch = useDispatch();
  
  const userCheking = async ()=>{
    try {
      
      const responce = await axiosInstance({
        method:"GET",
        url:"user/user-check",
     
      });
      console.log("check user", responce.data);

      dispatch(saveUser(responce.data.data));


    } catch (error) {
      console.log(error);
      console.log("clear user reached");
      
      dispatch(clearUser());
      
    }
  };
 useEffect(()=>{ 
  
  userCheking()
   
  },[location.pathname])
 console.log("user auth" , isuserAuth)
  return (
   
    <div>
      {isuserAuth ?<UserLoginHeader/> : <Header/> }
    
        <div className='min-h-96'>
        <Outlet/>
        </div>
       <Footer/>
      

    </div>
  )
}

export default UserLayout
