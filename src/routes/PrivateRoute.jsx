import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Components/Utils/Spinner";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

  if(loading){
    return <Spinner />
  }else {
    if(user){
      return children
    }else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
    

};

export default PrivateRoute;