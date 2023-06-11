import { useForm } from "react-hook-form";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { useContext } from "react";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const InstructorClasses = () => {
const [axiosSecure]=useAxiosSecure();
     const { user } = useContext(AuthContact);

     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => {

          const { name, image, price, email,InstructorName, seats, description, category } = data
          const Classes = { name, image, price : parseFloat(price) ,email, InstructorName, seats: parseFloat(seats), description, category };

          axiosSecure.post('/classes', Classes)
          .then(data=>{
                console.log(data);
                if(data.data.insertedId){
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'Your work has been saved',
                         showConfirmButton: false,
                         timer: 1500
                       })
                }
          })

          
     };
     return (
          <div className=" p-2">

               <div>
                    <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Add a Classes"> </SelectTitle>
               </div>


               <div>
                    <form onSubmit={handleSubmit(onSubmit)}>


                         <div className=" grid md:grid-cols-2 gap-3">

                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email"> Name:</label>
                                   <input  {...register("name", { required: true })} name='name' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" name" id="" />
                                   {errors.name && <span className="text-red-500">  Name is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email">InstructorName:</label>
                                   <input value={user?.displayName}  {...register("InstructorName", { required: true })} name='InstructorName' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" id="" />
                                   {errors.InstructorName && <span className="text-red-500"> InstructorName is required</span>}
                              </div>

                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="Email">seats:</label>
                                   <input  {...register("seats", { required: true })} name='seats' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="number" placeholder=" seats" id="" />
                                   {errors.seats && <span className="text-red-500"> seats is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="price">price:</label>
                                   <input  {...register("price", { required: true })} name='price' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="number" placeholder=" price" id="" />
                                   {errors.price && <span className="text-red-500"> InstructorName is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="image">Category:</label>
                                   <select className=" w-full py-2 border-2 border-blue500  mt-2  text-xl" defaultValue={"popular"} {...register("category")}>
                                        <option value="popular">popular</option>
                                        <option value="Normal">Normal</option>
                                        <option value="other">other</option>
                                   </select>
                              </div>

                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="image">image:</label>
                                   <input  {...register("image", { required: true })} name='image' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder=" image" id="" />
                                   {errors.image && <span className="text-red-500"> image is required</span>}
                              </div>

                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="email">email:</label>
                                   <input value={user?.email}  {...register("email", { required: true })} name='email' className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" id="" />
                                   {errors.email && <span className="text-red-500"> email is required</span>}
                              </div>
                              <div className=' w-full'>
                                   <label className=' text-xl font-bold my-2  font-color' htmlFor="description">image:</label>
                                   <textarea  {...register("description", { required: true })} className=' mt-2  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' name="description" cols={10} />
                                   {errors.description && <span className="text-red-500"> image is required</span>}
                              </div>

                         </div>





                         {errors.exampleRequired && <span>This field is required</span>}

                         <div className=' mt-7'>
                              <button type='submit' className=' py-2 bg-[#D59578] text-white text-2xl font-medium block w-full rounded-lg  '> Add Classes</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default InstructorClasses;