
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import useInstractor from "../../Hooks/useInstruct/useInstractor";


const InstructorRoute = ({ children }) => {
     const location = useLocation()
   
     const [Instructor, isLoading] = useInstractor();
     if (isLoading) {
          return <p className=" h-[100vh] w-full flex gap-2 items-center justify-center "> Loading... </p>
     }


     if (Instructor) {
          return children
     }
     return <Navigate to={'/login'} state={{ from: location }}></Navigate>
};

export default InstructorRoute;