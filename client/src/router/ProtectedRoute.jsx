import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  // Get user authentication status
   const {isuserAuth} = useSelector((state) => state.user);

  // Config navigate
  const navigate = useNavigate();

  
    if (!isuserAuth) {
    return  navigate("/login");
    }
  

  return isuserAuth && <Outlet /> 
};