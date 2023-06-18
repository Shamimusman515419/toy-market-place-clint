import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import Ragister from "../../UserAccount/Ragister/Ragister";
import Login from "../../UserAccount/Login/Login";
import Instructors from "../../Pages/Instructors/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes/Classes";
import AdminDashboard from "../../Pages/Dashboard/AdminDashboard/AdminDashboard";

import Dashboard from "../../Layout/Dashboard/Dashboard";
import PriveteRoute from "../PrivetRoute/PriveteRoute";
import SelectClass from "../../Pages/Dashboard/UserDashboard/SelectClasses/SelectClass";
import Payment from "../../Pages/Payment/payment/payment";
import PaymentHistroy from "../../Pages/Dashboard/UserDashboard/PaymentHistroy/PaymentHistroy";
import ManageClass from "../../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClass";
import ManageUsers from "../../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import RouteAddmin from "../AddminRoutes/AddminRoute";
import InstructorClasses from "../../Pages/Dashboard/InstactorDashboard/InstructorClasses/InstructorClasses";
import Myclass from "../../Pages/Dashboard/InstactorDashboard/myClass/Myclass";
import Errorpage from "../../Hooks/ErrorPage/Errorpage";
import InstactorHome from "../../Pages/Dashboard/InstactorDashboard/InstactorHome/InstactorHome";
import UserHome from "../../Pages/Dashboard/UserDashboard/UserHome/UserHome";
import InstructorRoute from "../InstructorRoute/InstructorRoute";
import Feedback from "../../Pages/Dashboard/AdminDashboard/Feedback/Feedback";



const Route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            errorElement:<Errorpage></Errorpage>,
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
            element: <PriveteRoute> <Dashboard></Dashboard> </PriveteRoute>,
            children: [

                  {
                        path: 'userDashboard',
                        element: <PriveteRoute> <UserHome></UserHome></PriveteRoute>
                  },
                  {
                        path: 'admindashboard',
                        element: <RouteAddmin> <AdminDashboard></AdminDashboard> </RouteAddmin> 
                  },
                  {
                        path: 'selectClass',
                        element: <PriveteRoute> <SelectClass></SelectClass> </PriveteRoute>
                  },
                  {
                        path: 'history',
                        element: <PriveteRoute> <PaymentHistroy></PaymentHistroy> </PriveteRoute>
                  },
                  {
                        path: 'manageclassas',
                        element: <RouteAddmin> <ManageClass></ManageClass> </RouteAddmin>
                  },
                  {
                        path: 'manageusers',
                        element: <RouteAddmin> <ManageUsers></ManageUsers> </RouteAddmin>
                  },
                  {
                        path: 'addclasses',
                        element: <InstructorRoute> <InstructorClasses></InstructorClasses> </InstructorRoute>
                  },
                  {
                        path: 'insreuctordashboard',
                        element: <InstructorRoute> <InstactorHome></InstactorHome> </InstructorRoute>
                  },
                  {
                        path: 'userdashboard',
                        element: <PriveteRoute> <UserHome></UserHome> </PriveteRoute>
                  },
                  {
                        path:'feedback/:id',
                        element: <PriveteRoute> <Feedback></Feedback> </PriveteRoute>,
                        loader:({params})=> fetch(`https://music-school-server.vercel.app/classes/feedback/${params.id}`)
                        
                  },
                  {
                        path: 'myclass',
                        element: <InstructorRoute> <Myclass></Myclass> </InstructorRoute>
                  },
                
                  {
                        path: 'payment/:id',
                        element: <PriveteRoute> <Payment></Payment></PriveteRoute>,
                        loader: ({ params }) => fetch(`https://music-school-server.vercel.app/payment/${params.id}`)
                  }


            ]
      }
])

export default Route;