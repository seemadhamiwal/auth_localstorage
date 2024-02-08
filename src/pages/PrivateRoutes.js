import { Children, useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Signin from "./Signin";
import ThemeContext from "./SynchedData";



function PrivateRoutes({children}){
    // const {value} = useContext(ThemeContext);
    const navigate = useNavigate();
    // const logInUser = useContext(ThemeContext);
    // console.log('themecontext',!logInUser)
    
    const userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
    const isAllowed=userLoggedIn ? true:false
    
    if(isAllowed === false){
        navigate("/Signin" ,{replace:true})
        // <Navigate to="/Signin" replace/>
    } 
    else{
        return children
    }
}
export default PrivateRoutes;