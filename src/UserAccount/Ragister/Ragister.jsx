import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../FirebaseConfig/Firebase.config";
import SocalLogin from "../SocalLogin/SocalLogin";
import axios from "axios";
import Swal from "sweetalert2";


const Ragister = () => {

     const [machEorro, setMachError] = useState('')
     const { CreateUser } = useContext(AuthContact);
     const [showpass,setShowpass]=useState('password')
     const navigete=useNavigate()
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const handlechage=(event)=>{
           if(event.target.checked){
               setShowpass("text")
           }else{
               setShowpass("password")
                
           }
     }
     
     const onSubmit = data => {
          const auth = getAuth(app);
          const name = data.fistName + " " + data.lastName;
     
          if (data.password == data.ConfirmPassword) {
               CreateUser(data.email, data.password).then(result => {
                    console.log(result.user);
                    updateProfile(auth.currentUser, {
                         displayName: name, photoURL: data.photo
                    }).then((result) => {
                         const user = { email: data.email, name}
                         axios.post('https://music-school-server.vercel.app/users', user)
                              .then(result => {
                                   if (result.data.insertedId) {
                                        Swal.fire({
                                             position: 'top-end',
                                             icon: 'success',
                                             title: 'User created successfully.',
                                             showConfirmButton: false,
                                             timer: 1000
                                        });
                                   }

                              }).catch(error => {
                                   Swal.fire({
                                        icon: 'error',
                                        title: `${error.massage}`,
                                        text: 'Something went wrong!',

                                   })
                              })

                         reset()
                         navigete('/')
                    }).catch((error) => {
                         console.log(error.message);
                    });
               }).catch(error => {
                    console.log(error.message);
               })

          } else {
               return setMachError(" password not mach")
          }
     }

     return (
          <div className=" bg-[#72626227] md:p-4">
               <div className=' pt-20 grid    md:grid-cols-2 gap-7 items-center justify-center'>
                    <div>
                         <img src="https://i.ibb.co/k3TZ7G8/image-upload-landing-page-concept-23-2148316780.jpg" alt="" />
                    </div>

                    <div className='rounded-md   my-9 p-3 '>
                         <h1 className='  text-center text-2xl font-bold   uppercase   u underline  text-color '> Ragistion</h1>
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <div className=" md:flex gap-2 justify-start">
                                   <div className=' w-full'>
                                        <label className=' text-xl font-bold my-2  font-color' htmlFor="Email"> Fist Name:</label>
                                        <input  {...register("fistName", { required: true })} name='fistName' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" name" id="" />
                                        {errors.name && <span className="text-red-500">Fist Name is required</span>}
                                   </div>
                                   <div className=' w-full'>
                                        <label className=' text-xl font-bold my-2  font-color' htmlFor="Email">Last Name:</label>
                                        <input  {...register("lastName", { required: true })} name='lastName' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" name" id="" />
                                        {errors.name && <span className="text-red-500"> Last Name is required</span>}
                                   </div>
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email"> Photo:</label>
                                   <input  {...register("photo", { required: true })} name='photo' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" photo" id="" />
                                   {errors.photo && <span className="text-red-500">photo is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email"> Email:</label>
                                   <input  {...register("email", { required: true })} aria-invalid={errors.mail ? "true" : "false"} name='email' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="email" placeholder=" email" id="" />
                                   {errors.email && <span className="text-red-500">email is required</span>}

                              </div>


                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email"> Password:</label>
                                   <input  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                   })} name='password' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type={`${showpass}`} placeholder=" password" id="" />


                              </div>

                              {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                              {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                              {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email">Confirm Password:</label>
                                   <input  {...register("ConfirmPassword", {

                                   })} name='ConfirmPassword' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type={`${showpass}`} placeholder=" password" id="" />


                              </div>
                              <div>
                                  <input onChange={handlechage} type="checkbox" name="checkbox" id="" /> <span> show password</span>
                              </div>
                              {machEorro ? <p className="  text-red-500"> {machEorro}</p> : ""}
                              <label className="label">
                                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>

                              <div className=' mt-7'>
                                   <button type='submit' className=' py-2 bg-color text-white text-2xl font-medium block w-full rounded-lg  '> Sing in</button>
                              </div>
                              <div>
                                   <h1 className=' text-lg mt-3  font-color text-center font-semibold'> Already registered? <Link to={'/login'} className=' text-color'> Go to log in</Link> </h1>
                              </div>
                              <div>
                                   <p className=' text-base my-5  font-medium text-center'>Or sign in with</p>
                              </div>

                         </form>
                         <SocalLogin></SocalLogin>


                    </div>
               </div>


          </div>
     );
};

export default Ragister;