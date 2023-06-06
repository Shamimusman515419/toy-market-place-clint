import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import Ragister from "../../UserAccount/Ragister/Ragister";


const Route = createBrowserRouter([
     {
           path:'/',
           element:<Main></Main>,
           children:[
               {
                     path:'/',
                     element:<Home></Home>
               },
               {
                     path:'/ragister',
                     element:<Ragister></Ragister>
               }
           ]
     }
])

export default Route;