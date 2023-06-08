import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import Ragister from "../../UserAccount/Ragister/Ragister";
import Login from "../../UserAccount/Login/Login";
import Instructors from "../../Pages/Instructors/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes/Classes";
import AdminDashboard from "../../Pages/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../../Pages/Dashboard/UserDashboard/UserDashboard";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import PriveteRoute from "../PrivetRoute/PriveteRoute";
import SelectClass from "../../Pages/Dashboard/UserDashboard/SelectClasses/SelectClass";


const Route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/ragister',
                        element: <Ragister></Ragister>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/instructors',
                        element: <Instructors></Instructors>
                  },
                  {
                        path: '/classes',
                        element: <Classes></Classes>
                  },


            ]
      },
      {
            path: 'dashboard',
            element: <PriveteRoute> <Dashboard></Dashboard> </PriveteRoute>  ,
            children: [

                  {
                        path: 'userDashboard',
                        element:  <PriveteRoute> <UserDashboard></UserDashboard></PriveteRoute> 
                  },
                  {
                        path: 'adminDashboard',
                        element: <AdminDashboard></AdminDashboard>
                  },
                  {
                        path: 'selectClass',
                        element: <PriveteRoute> <SelectClass></SelectClass> </PriveteRoute> 
                  }


            ]
      }
])

export default Route;