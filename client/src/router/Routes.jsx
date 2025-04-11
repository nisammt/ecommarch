import {
  createBrowserRouter
  
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/user/Home";
import Cart from "../pages/user/Cart";
import Login from "../pages/shared/Login";
import Order from "../pages/user/Order";
import Signup from "../pages/shared/Signup";
import Errorpage from "../pages/shared/Errorpage";
import ProductDetail from "../pages/user/ProductDetail";
import ForgotPassword from "../pages/shared/ForgotPassword";
import { ProtectedRouteAdmin } from "./ProtectedAdminRouter";
import AdminHome from "../pages/admin/AdminHome";
import AdminLayout from "../layout/AdminLayout";

import UserProfile from "../pages/user/UserProfile";




const router = createBrowserRouter([

  {
    path:"",
    element : <UserLayout/>,
    errorElement:<Errorpage/>,
    children :[
      {
        path: "",
        element:<Home/>

        },
        {
          path: "about",
          element: <Home/>
        },

        {
          path: "login",
          element: <Login/>

        },
        {
          path:"order",
          element:<Order/>
        },
        {
       
          path:"products-details/:id",
          element:<ProductDetail/>
        },
        { 
          path: "signup",
          element:<Signup/>

        },
        {
          path:"forgot-password",
          element:<ForgotPassword/>
        },
       
        {
          path:"user",
          element:<ProtectedRoute/>,
          children:[
            {
              path:"userprofile",
              element:<UserProfile/>
            },
        
          ],

        },
        {
          path:"admin",
          element:<ProtectedRouteAdmin/>,
          children:[
            {
              path:"admin-home",
              element:<AdminHome/>
            }
          ]

        },
    ],
  },
],
)






    
export default router




