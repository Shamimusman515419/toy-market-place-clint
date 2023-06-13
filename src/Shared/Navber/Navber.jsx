import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { FaAlignJustify } from "react-icons/fa";
import UseToggle from "../../Hooks/useToggle/usetoggle";
import useAdmin from "../../Hooks/Admin/useAdmin";
import useInstractor from "../../Hooks/useInstruct/useInstractor";


const Navber = () => {
     // const [Admin, AdminLoading] = useAdmin();
     // const [Instructor, isLoading] = useInstractor();
     const Admin =true
     const Instructor =true

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
          <li> <Link to={'/'}>Home</Link> </li>
          <li> <Link to={'/instructors'}>Instructors </Link> </li>
          <li> <Link to={'/classes'}>Classes</Link> </li>

          {
               user ? <li> <Link to={`/dashboard/${Admin==true?"admindashboard":Instructor==true?"insreuctordashboard":"userdashboard"}`}>Dashboard</Link> </li> : ""
          }
          <li>  <UseToggle></UseToggle></li>

     </>


     return (
          <div>
               <div>
                    <div className="navbar bg-[#fff]     shadow-sm   fixed max-w-screen-xl top-0  z-50    ">
                         <div className="navbar-start">
                              <div className="dropdown">
                                   <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                   </label>
                                   <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        {NavOptions}
                                   </ul>
                              </div>
                              <a className="btn btn-ghost normal-case text-xl">Music School</a>
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
                                                  <img  className=" border-2 border-[#D59578] h-8 w-8 rounded-full" src={user?.photoURL} alt="" />
                                             </div>
                                             <div className={` ${acctive ? '  block' : "  hidden"} absolute   h-[200px] px-12  top-10 bg-[#D59578] p-4 rounded   right-1 `}>
                                                  <button onClick={handleLogOut} className={`  bg-[#d31e9dc6]  px-4 py-1 rounded-md text-start text-white text-2xl font-semibold`}> Logout</button>
                                             </div>
                                        </div> </> : <>  <Link to={'/login'}> Login</Link></>
                              }

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navber;