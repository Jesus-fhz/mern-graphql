import React,{useContext} from "react";
import { AuthContext } from "../context/auth";
import { Navigate } from 'react-router-dom'


//We receive component and its attributes
function AuthRoute({children}){
    const { user } =  useContext(AuthContext);
    return (
        //Wi will show its children components if user logged in if not we redirect them
         user ? <Navigate to="/" /> : children
    )
}

export default AuthRoute