import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { FaBook, FaBookOpen, FaBox, FaCcApplePay, FaCreativeCommonsBy, FaHome, FaShirtsinbulk, FaUsers, FaWallet } from "react-icons/fa";
import useAdmin from "../../Hooks/Admin/useAdmin";

import useInstractor from "../../Hooks/useInstruct/useInstractor";


const Dashboard = () => {
     const { user } = useContext(AuthContact);
     const [Admin, AdminLoading] = useAdmin();
     const [Instructor, isLoading] = useInstractor();

     return (
          <div>
               <Navber></Navber>
               <div className="drawer lg:drawer-open mt-[72px]">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                         <Outlet></Outlet>
                         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>


                         <ul className="menu p-4 w-80 h-full bg-[#d59578b8] ">
                              <div className=" text-center  flex  flex-col justify-center items-center mx-auto ">
                                   <img className=" max-w-[150px] max-h-[150px] rounded-full border-2 border-[#D59578]" src={user?.photoURL} alt="" />
                                   <h1 className=" text-xl font-bold"> {user?.displayName} </h1>
                              </div>
                              {/* Sidebar content here */}

                              {Admin == true ? <>

                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/admindashboard"> <FaHome></FaHome>  <span> admin Home</span> </NavLink>

                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/manageclassas"> <FaBookOpen></FaBookOpen>  <span> Manage  Classes </span> </NavLink>

                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/manageusers"> <FaUsers></FaUsers> <span> Manage Users</span></NavLink>

                              </> : Instructor == true ? <>
                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/insreuctordashboard"> <FaHome></FaHome>  <span> Instructor Home</span> </NavLink>

                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/addclasses"> <FaBox></FaBox>  <span> Add a Class</span> </NavLink>


                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/myclass"><FaBook></FaBook>  <span> My Classes</span> </NavLink>
                              </> : <>
                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/userDashboard"> <FaHome></FaHome>  <span> User Home</span> </NavLink>

                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"
                                   } to="/dashboard/selectClass"> <FaShirtsinbulk></FaShirtsinbulk>  <span>  Selected Classes</span> </NavLink>


                                   <NavLink className={({ isActive }) =>
                                        isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                                   } to="/dashboard/history"><FaCcApplePay></FaCcApplePay> Payment History</NavLink>
                              </>

                              }
                              <div className="divider">OR</div>
                              <NavLink className={({ isActive }) =>
                                   isActive ? " text-white flex gap-3 items-center bg-blue-600  my-3 text-xl font-medium py-1   rounded-md px-5" : " text-xl gap-3   rounded-md flex items-center  font-medium py-1 px-5"

                              } to="/"> <FaHome></FaHome>  <span>  Home</span> </NavLink>


                         </ul>

                    </div>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Dashboard;