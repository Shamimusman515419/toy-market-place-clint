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
import Payment from "../../Pages/Payment/payment/payment";
import PaymentHistroy from "../../Pages/Dashboard/UserDashboard/PaymentHistroy/PaymentHistroy";
import ManageClass from "../../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClass";
import ManageUsers from "../../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import RouteAddmin from "../AddminRoutes/AddminRoute";
import InstructorClasses from "../../Pages/Dashboard/InstactorDashboard/InstructorClasses/InstructorClasses";
import Myclass from "../../Pages/Dashboard/InstactorDashboard/myClass/Myclass";


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
            element: <PriveteRoute> <Dashboard></Dashboard> </PriveteRoute>,
            children: [

                  {
                        path: 'userDashboard',
                        element: <PriveteRoute> <UserDashboard></UserDashboard></PriveteRoute>
                  },
                  {
                        path: 'adminDashboard',
                        element: <AdminDashboard></AdminDashboard>
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
                        element: <PriveteRoute> <ManageUsers></ManageUsers> </PriveteRoute>
                  },
                  {
                        path: 'addclasses',
                        element: <PriveteRoute> <InstructorClasses></InstructorClasses> </PriveteRoute>
                  },
                  {
                        path: 'myclass',
                        element: <PriveteRoute> <Myclass></Myclass> </PriveteRoute>
                  },
                  {
                        path: 'payment/:id',
                        element: <PriveteRoute> <Payment></Payment></PriveteRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/payment/${params.id}`)
                  }


            ]
      }
])

export default Route;