import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateProvider = ({children}) => {
    const {loading , user} = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress> ;
    }

    if(user){
        return children ;
    }

    <Navigate to='/login'></Navigate>
};

export default PrivateProvider;