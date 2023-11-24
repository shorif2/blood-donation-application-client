import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRouter = ({children}) => {
    const location = useLocation();

    const {user, loading } = useContext(AuthContext)
    

    if(loading){
        return <div className="w-full flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user){
        return children
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

    
};

export default PrivetRouter;