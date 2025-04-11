import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate} from "react-router-dom";
import {axiosInstance} from "../../config/axiosInstance";
import toast from 'react-hot-toast';



const Login = ({ role = "user" }) => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
   
  } = useForm()
                  
                                          
    const user ={
    role : "user",
    login_api :"/user/login",
    user_signup:"/user/signup",
    profile: "/user/userprofile",
    home_page: "/",
    //forgotPassword:"/user/forgotpwd"

    };

   if(role === "admin")
   {
    user.role ="admin",
    user.login_api="/admin/admin-login",
    user.user_signup="/admin/admin-signup",
    user.home_page ="admin/admin-home"
   
   }



  const onSubmit = async (data)=>{
    try {
      console.log("User data" , data);
      
      const response = await axiosInstance({
        method: "POST",
        url: user.login_api,
        withCredentials:true,
        data,
            });
          //console.log("response",response);
          if(response)
          {
            const {token,role} = response.data;

            if (token) {

              localStorage.setItem("token", token);
              toast.success("Login successfull")
          }
          

          navigate(user.home_page);
        
        }
      
    } catch (error) {
      console.log(error);

      toast.error("Login faild")
      
    }
  }


  return (
    <>
      
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-s">
                {/* <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="mx-auto h-10 w-auto"
                /> */}
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-700">
                  Sign in to your account
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                  <h3 className="mt-2 fw-bold text-black">Login test {role}</h3>
                  
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        //id="email"
                        //name="email"
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
                      <div className="text-sm">
                        <Link to={"/forgot-password"}>
                        <a href="#" className="font-semibold text-green-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                        </Link>
                      </div>
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
      
                  <div>
                    <button
                    
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                    </button>
                  </div>
                </form>
      
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                  Not a member?{' '}
                  <Link to={"/signup"}>
                  <button className="font-semibold text-green-600 hover:text-green-800">  Sing up now</button>
                  </Link>
                  
                 
                 
                </p>
              </div>
            </div>
      
    </>
  )
}



  


export default Login
