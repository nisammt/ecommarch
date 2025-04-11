import React from 'react';
import { useForm } from "react-hook-form";
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

  const user = {
    role: "user",
    signup_api: "/user/signup",
    login_route: "/login",
  };

  const onSubmit= async (data)=>{
   // console.log("data", data);
    
    try {
      const response = await axiosInstance({
        method: "POST",
        url: user.signup_api,
        withCredentials:true,
        data,

      });

      console.log("Responce", response);
      

      if(response){
        toast.success("User Register Successful");
        
        navigate(user.login_route)
      }

      
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
   <section id='signup'>
    <div className="flex min-h-f flex-1 flex-col justify-center px-6 py-3 lg:px-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"{...register("name")}
              
                  required 
                  
                  autoComplete=""
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Mobile
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="text"{...register("mobile")}
                  required
                  autoComplete=""
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"{...register("email")}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"{...register("password")}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Confirm Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"{...register("confirmPassword")}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>



            <div>
              <button
                type="submit"
                className=" mt-5 flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

        </div>
      </div>
 

   </section>
  )
}

export default Signup
