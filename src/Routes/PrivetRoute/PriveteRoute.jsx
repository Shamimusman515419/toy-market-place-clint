import { useContext } from "react";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({children}) => {
      const location=useLocation()
     const {user,loading}=useContext(AuthContact);


     if(loading){
           return <p className=" h-[100vh] w-full flex gap-2 items-center justify-center "> Loading... </p>
     }


     if(user){
           return children
     }
     return <Navigate to={'/login'}   state={{from: location}}></Navigate>
};

export default PriveteRoute;