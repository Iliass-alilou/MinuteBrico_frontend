import Cookies from 'js-cookie';
import React, { useContext }  from 'react'
import { Redirect, Route } from "react-router-dom"
import AuthContext from './componants/context/AuthContext';

const ProtectedRoute = ({ children , path }) => {
   
    //const { authToken } =  useContext(AuthContext);
    const authToken = Cookies.get("token");
    if(!authToken){
        console.log(path + "hicham");
        return(
            <Redirect to="/login" />
        )
    }
    return (
        <Route path={path}>{children}</Route>
    )
}
export default ProtectedRoute;