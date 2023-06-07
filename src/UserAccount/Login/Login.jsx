import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import SocalLogin from "../SocalLogin/SocalLogin";
;


const Login = () => {
     const { Login } = useContext(AuthContact)
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = (data) => {

          Login(data.email, data.password).then(result => {
               reset()
               console.log(result);
          }).catch(error => {
               console.log(error.message);
          })
     }

     return (
          <div className="  md:p-4">
               <div className=' pt-20'>
                    <div>
                         <div className=" bg-[#EEF6F7] h-screen overflow-hidden flex items-center justify-center">
                              <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
                                   <div className="bg-button-color absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                                             <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                        </svg>
                                   </div>
                                   <form onSubmit={handleSubmit(onSubmit)} className="p-12 md:p-24">

                                        <div>
                                             <div className="flex items-center text-lg mb-6 md:mb-8">
                                                  <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                                                       <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                                                  </svg>
                                                  <input  {...register("email", { required: true })} aria-invalid={errors.mail ? "true" : "false"} name='email' id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Your Email" type="email" />
                                             </div>
                                             {errors.email && <span className="text-red-500">email is required</span>}
                                        </div>
                                        <div>
                                             <div className="flex items-center text-lg mb-6 md:mb-8">
                                                  <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                                                       <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                                                  </svg>
                                                  <input {...register('password', { required: true })} aria-invalid={errors.password ? "true" : "false"} type="password" id="password" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />

                                             </div>
                                             {errors.password && <span className="text-red-500">password is required</span>}
                                        </div>

                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        <button className=" bg-button-color  font-medium p-2 md:p-4 text-white uppercase w-full">Login</button>
                                        <div>
                                             <h1 className=' text-lg mt-3  font-color text-center font-semibold'> New here? <Link to={'/ragister'} className=' text-color'> Create a New Account</Link> </h1>
                                        </div>
                                        <div>
                                             <p className=' text-base my-5  font-medium text-center'>Or sign in with</p>
                                        </div>
                                        <div className="divider">OR</div>
                                        <SocalLogin></SocalLogin>
                                   </form>
                                  
                              </div>
                         </div>
                    </div>

               </div>


          </div>
     );
};

export default Login;