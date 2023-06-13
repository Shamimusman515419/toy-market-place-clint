import { useQuery } from "@tanstack/react-query";
import { AuthContact } from "../../../AuthProvider/AuthProvider";

import { useContext } from 'react'
import Swal from "sweetalert2";
import { motion } from 'framer-motion';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
const ManageClass = () => {


     const { user } = useContext(AuthContact);
     const [axiosSecure] = useAxiosSecure();

     const { data, refetch } = useQuery({
          queryKey: ['classes'],
          queryFn: async () => {
               const result = await axiosSecure.get('https://music-school-server.vercel.app/classes')
               return result.data;
          }
     })


     const handleApprob = (item) => {
          axiosSecure.patch(`classes/approved/${item}`)
               .then(result => {
                    console.log(result.data);
                    if (result.data.modifiedCount > 0) {
                         refetch();
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Your work has been saved',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               })

     }

     const handleDenid = (item) => {
          axiosSecure.patch(`classes/denied/${item}`)
               .then(result => {
                    if (result.data.modifiedCount > 0) {
                         refetch();
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Your work has been saved',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }

               })

     }

     return (
          <div>
               <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
               >

              

               {
                    data?.map(item => <div key={item._id}>
                         <div key={item._id} className="  p-1 m-2  rounded-lg shadow  md:grid grid-cols-2 gap-3 items-center justify-center">

                              <div>
                                   <img className=" h-[400px] w-full" src={item.image} alt="" />
                                   <h1 className=" text-xl font-medium my-3">
                                        Name:  {item.name} </h1>

                              </div>
                              <div>
                                   <div className=" space-y-3">
                                        <h1 className=" text-3xl  font-semibold"> InstructorName:  {item.InstructorName}
                                        </h1>
                                        <h2 className=" text-2xl  font-semibold">Email: {item.email ? item.email : "shamimusman515419@gmail.com"}</h2>
                                        <p className=" text-2xl font-semibold">Price : ${item.price}</p>
                                        <p className=" text-2xl font-semibold">Seats: {item.seats}</p>
                                        <p className=" text-2xl font-semibold">Category: {item.category}</p>
                                        <p className=" text-2xl font-semibold">State: {item.role ? item.role : 'pending'}</p>
                                   </div>
                                   <div className=" mt-9 flex gap-4  items-start justify-center ">
                                        <button className=" bg-[#D59578] rounded-md text-white py-1 px-3 text-xl"> Pending </button>
                                        <button disabled={item.role == "denied"} onClick={() => handleDenid(item._id)} className=" bg-[#D59578]  rounded-md text-white py-1 px-3 text-xl"> Denied </button>
                                        <button disabled={item.role == "approved"} onClick={() => handleApprob(item._id)} className=" bg-[#D59578] rounded-md  text-white py-1 px-3 text-xl"> Approved </button>
                                   </div>
                              </div>

                         </div>
                    </div>)
               }
 </motion.div>
          </div>
     );
};

export default ManageClass;