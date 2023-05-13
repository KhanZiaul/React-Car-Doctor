import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateProvider = ({children}) => {
    const {loading , user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <progress className="progress w-56"></progress> ;
    }

    if(user){
        return children ;
    }

    return <Navigate to='/login' state={{ from:location }} replace></Navigate>
};

export default PrivateProvider;