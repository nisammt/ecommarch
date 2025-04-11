import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet,useLocation } from 'react-router-dom'
import { axiosInstance } from '../config/axiosInstance'
import { clearAdminData, saveAdminData } from '../redux/features/adminSlice'
import AdminHeader from '../componets/admin/AdminHeader'
import Header from '../componets/user/Header'
import Footer from '../componets/user/Footer'

const AdminLayout = () => {
const {isAdminAuth} = useSelector((state)=>state.admin);
const location = useLocation();
const dispatch = useDispatch();

  const checkAdmin = async ()=>{
    try {
      const responce = await axiosInstance({
       method :"GET",
       url:"admin/check-admin",
       
      });
      console.log("reaceccccc");
      
      console.log("admin check new", responce)
         
      dispatch(saveAdminData(responce.data));
      
    } catch (error) {
      console.log(error);
      dispatch(clearAdminData());
      //console.log(" catch reched");
      
      
    }
  };
  useEffect(()=>{
    checkAdmin();
  },[location.pathname])

  console.log("admin auth new", isAdminAuth)
    
  return (
    <div>
      {isAdminAuth?<AdminHeader/>:<Header/>}
      
      <div className='min-h-96'>
        <Outlet/>
      </div>
    <Footer/>
    </div>
  )
}

export default AdminLayout
