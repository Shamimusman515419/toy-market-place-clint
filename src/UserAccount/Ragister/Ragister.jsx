import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";


import Lottie from "react-lottie";
const Ragister = () => {
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit =data=>{
           console.log(data);
     }
     
     return (
          <div>
          <div className=' pt-20 grid    md:grid-cols-2 gap-7 items-center justify-center'>
               <div>
                <img src="https://i.ibb.co/k3TZ7G8/image-upload-landing-page-concept-23-2148316780.jpg" alt="" />
               </div>

               <div className='rounded-md shadow-md   my-9 p-3 '>
                    <h1 className='  text-center text-2xl font-bold  text-color '> Ragistion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className=' w-full'>
                              <label className=' text-xl font-bold my-2  font-color' htmlFor="Email"> Name:</label>
                              <input  {...register("name", { required: true })} name='name' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" name" id="" />
                              {errors.name && <span className="text-red-500">Name is required</span>}
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
                              })} name='password' className=' mt-2  border-2 p-2   border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="password" placeholder=" password" id="" />
                           
                              <label className="label">
                                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                         </div>


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


               </div>
          </div>


     </div>
     );
};

export default Ragister;