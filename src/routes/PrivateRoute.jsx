import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Components/Utils/Spinner";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const notify = ()=> toast('Please login to visit the page.')

  if(loading){
    return <Spinner />
  }else {
    if(user){
      return children
    }else {
      notify()
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
    

};

export default PrivateRoute;