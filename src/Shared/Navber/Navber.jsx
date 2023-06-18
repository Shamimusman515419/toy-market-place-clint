import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { FaAlignJustify } from "react-icons/fa";

import useAdmin from "../../Hooks/Admin/useAdmin";
import useInstractor from "../../Hooks/useInstruct/useInstractor";
import Container from "../../Hooks/Container/Container";


const Navber = () => {
     const [Admin, AdminLoading] = useAdmin();
     const [Instructor, isLoading] = useInstractor();
     // const Admin = true
     // const Instructor = true

     const { LogOut } = useContext(AuthContact)
     const { user } = useContext(AuthContact);
     const [acctive, setAcctive] = useState(false)
     const handleLogOut = () => {
          LogOut().then(result => {
               console.log(result);
          }).catch(error => {
               console.log(error);
          })
     }

     const NavOptions = <>
          <NavLink className={({ isActive }) =>
               isActive ? " text-xl mx-4 font-semibold text-blue-500 " : " text-black text-xl mx-4 font-semibold "
          } to={'/'}>Home</NavLink>
          <NavLink className={({ isActive }) =>
               isActive ? " text-xl mx-4 text-blue-500  font-semibold" : " text-black font-semibold text-xl mx-4 "
          }  to={'/instructors'}>Instructors </NavLink>
          <NavLink className={({ isActive }) =>
               isActive ? " text-xl mx-4 text-blue-500 font-semibold  " : "text-xl text-black  font-semibold  mx-4 "
          }  to={'/classes'}>Classes</NavLink>

          {
               user ? <NavLink className={({ isActive }) =>
               isActive ? " text-xl font-semibold  mx-4 text-blue-500 " : "text-xl mx-4 text-black font-semibold "
          }  to={`/dashboard/${Admin == true ? "admindashboard" : Instructor == true ? "insreuctordashboard" : "userdashboard"}`}>Dashboard</NavLink> : ""
          }
          
     </>


     return (
          <div>
               <Container>
                    <div>
                         <div className="navbar bg-[#fff]   left-0 right-0   shadow-sm   fixed  w-full top-0  z-50    ">
                              <div className="navbar-start">
                                   <div className="dropdown">
                                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                             {NavOptions}
                                        </ul>
                                   </div>
                                   <Link to={'/'} className=" text-black     text-3xl font-bold ">Music School</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1">
                                        {NavOptions}

                                   </ul>
                              </div>
                              <div className="navbar-end">
                                   {
                                        user ? <>
                                             <div className="  relative">
                                                  <div onClick={() => setAcctive(!acctive)} className=" relative flex gap-1 pl-3 pr-1 py-1 cursor-pointer   items-center justify-center border-2 rounded-2xl">
                                                       <FaAlignJustify className=" text-lg"></FaAlignJustify>
                                                       <img className=" border-2 border-[#D59578] h-8 w-8 rounded-full" src={user?.photoURL} alt="" />
                                                  </div>
                                                  <div className={` ${acctive ? '  block' : "  hidden"} absolute   h-[200px] px-12  shadow-lg  top-10 bg-white p-4 rounded   right-1 `}>
                                                       <button onClick={handleLogOut} className={`    px-4 py-1 rounded-md text-start  text-black  text-3xl font-semibold`}> Logout</button>
                                                  </div>
                                             </div> </> : <>  <Link to={'/login'}> Login</Link></>
                                   }

                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Navber;