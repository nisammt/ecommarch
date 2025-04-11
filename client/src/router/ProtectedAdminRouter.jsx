import {useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";


export const ProtectedRouteAdmin =()=>{

    const navigate = useNavigate();
    const {isAdmnAuth} = useSelector((state)=> state.admin);

       if(!isAdmnAuth){
        
        navigate("admin/admin-login")
        return ;
       }
       console.log("reached proteted route");
       
       return isAdmnAuth && <Outlet/>;
};