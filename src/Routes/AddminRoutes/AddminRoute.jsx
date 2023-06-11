
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {AuthContact} from '../../Pages/AuthProvider/AuthProvider'
import useAdmin from "../../Hooks/Admin/useAdmin";

const RouteAddmin = ({ children  }) => {
     const { user,loading } = useContext(AuthContact);
     const location=useLocation();
     const [Admin, AdminLoading] = useAdmin();
     if (loading || AdminLoading) {
          return <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
               <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                         <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                              <span className="sr-only">Loading...</span>
                         </div>
                    </div>
               </div>
          </div>
     }

     if(user && Admin){
           return children 
     }

 return  <Navigate to={'/login'}   state={{from: location}}></Navigate>
};

export default RouteAddmin;