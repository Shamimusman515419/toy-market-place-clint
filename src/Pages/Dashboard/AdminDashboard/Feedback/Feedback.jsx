import { useForm } from "react-hook-form";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const Feedback = () => {
     const updateData = useLoaderData();
     const [axiosSecure] = useAxiosSecure();
     console.log(updateData._id);
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = (data) => {
          const feedback = data;
          console.log(feedback);
          axiosSecure.patch(`/classes/feedback/${updateData._id}`, feedback).then(result => {
               if(result.data.modifiedCount){
                    reset();
                 Swal.fire('Feedback success')
               }
          })
     }
     return (
          <div>

               <div>
                    <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Feedback Section"></SelectTitle>
               </div>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" mx-auto text-center flex justify-center">
                         <div className='  w-full md:w-1/2 '>
                              <label className=' text-blue-500  text-3xl text-center mx-auto font-bold my-2  ' htmlFor="feedback"> Feedback:</label>
                              <input  {...register("feedback", { required: true })} name='feedback' className=' mt-2 outline-purple-600  border-2 p-2    border-[#0000007d] rounded-md  focus:outline-blue-500 block w-full' type="text" placeholder="your feedback" id="" />
                              {errors.name && <span className="text-red-500">feedback  is required</span>}
                         </div>

                    </div>
                    <div className=' mt-7 text-center'>
                         <button type='submit' className='  mx-auto md:w-1/4 py-2 bg-[#D59578] text-white text-2xl font-medium block w-full rounded-lg  '> Send Feedback</button>
                    </div>
               </form>

          </div>
     );
};

export default Feedback;