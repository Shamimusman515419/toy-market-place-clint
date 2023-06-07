import { useContext } from "react";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PriveteRoute = ({children}) => {
     const {user,loading}=useContext(AuthContact);


     if(loading){
           return <p className=" h-[100vh] w-full flex gap-2 items-center justify-center "> Loading... </p>
     }


     if(user){
           return children
     }
     return <Navigate to={'/login'}></Navigate>
};

export default PriveteRoute;