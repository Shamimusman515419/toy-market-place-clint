import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { FaWallet } from "react-icons/fa";
import useAdmin from "../../Hooks/Admin/useAdmin";

import useInstractor from "../../Hooks/useInstruct/useInstractor";


const Dashboard = () => {
     const { user } = useContext(AuthContact);
     const [Admin, AdminLoading] = useAdmin();
     const [Instructor, isLoading] = useInstractor();
     console.log(Instructor);
     console.log(Admin);
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


                         <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                              <div className=" text-center  flex  flex-col justify-center items-center mx-auto ">
                                   <img className=" max-w-[150px] max-h-[150px] rounded-full border-2 border-[#D59578]" src={user?.photoURL} alt="" />
                                   <h1 className=" text-xl font-bold"> {user?.displayName} </h1>
                              </div>
                              {/* Sidebar content here */}

                              {
                                   Admin == true ? <>
                                        <li> <NavLink className={({ isActive }) =>
                                             isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                        } to="/dashboard/manageclassas"> Manage  Classes </NavLink>

                                        </li>
                                        <li><NavLink className={({ isActive }) =>
                                             isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                        } to="/dashboard/manageusers"><FaWallet></FaWallet> Manage Users</NavLink></li>

                                   </> : Instructor == true ? <>
                                        <li> <NavLink className={({ isActive }) =>
                                             isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                        } to="/dashboard/addclasses"> Add a Class </NavLink>

                                        </li>
                                        <li><NavLink className={({ isActive }) =>
                                             isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                        } to="/dashboard/myclass"><FaWallet></FaWallet> My Classes</NavLink></li>
                                   </> : <>
                                        <li> <NavLink className={({ isActive }) =>
                                             isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                        } to="/dashboard/selectClass"> Selected Classes: </NavLink>

                                        </li>
                                        <li><NavLink className={({ isActive }) =>
                                             isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                        } to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                   </>


                                   // Admin ? <>
                                   //           <li> <NavLink className={({ isActive }) =>
                                   //                isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                   //           } to="/dashboard/manageclassas"> Manage  Classes </NavLink>

                                   //           </li>
                                   //           <li><NavLink className={({ isActive }) =>
                                   //                isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                   //           } to="/dashboard/manageusers"><FaWallet></FaWallet> Manage Users</NavLink></li>

                                   //      </> : <>
                                   //           <li> <NavLink className={({ isActive }) =>
                                   //                isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                   //           } to="/dashboard/selectClass"> Selected Classes: </NavLink>

                                   //           </li>
                                   //           <li><NavLink className={({ isActive }) =>
                                   //                isActive ? " text-white bg-blue-600 text-xl font-medium py-1 px-5" : " text-xl font-medium py-1 px-5"

                                   //           } to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                   //      </>
                              }

                         </ul>

                    </div>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Dashboard;