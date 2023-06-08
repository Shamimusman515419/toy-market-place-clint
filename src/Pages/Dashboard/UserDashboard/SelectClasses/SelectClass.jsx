import { useContext } from "react";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";

import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";




const SelectClass = () => {
     const [axiosSecure] = useAxiosSecure();

     const { user } = useContext(AuthContact)
     const { data, refetch } = useQuery({
          queryKey: ['cards', user?.email],
          queryFn: async () => {
               const res = await axiosSecure(`/cards?email=${user?.email}`)
               return res.data
          }
     })

     const total = data?.reduce((sum, item) => sum + item.price, 0)
     const token = localStorage.getItem('access-token')
     const handleDelete = (id) => {

          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/cards/${id}`,{
                         headers:{
                              authorization: ` bearer ${token}`
                            }
                    })
                    .then(result=>{
                         if(result.data.deletedCount){
                              refetch()
                              Swal.fire(
                                   'Deleted!',
                                   'Your file has been deleted.',
                                   'success'
                                 )
                         }  
                    })
                    
                    }
          })



     }

     return (
          <div className=" w-full ">
               <SelectTitle subtitle=" Dedication to Teaching" HadersTitle="My Select Classes"></SelectTitle>

               <div className="  my-7 py-1 px-4 md:flex  justify-around items-center">

                    <h1 className=" text-2xl font-medium"> Total Classes : {data && data.length} </h1>
                    <h1 className=" text-2xl font-medium">Total price : $ {total} </h1>

                    <button className=" text-3xl font-medium   text-white py-1 px-5 rounded-md bg-[#D59578] flex justify-center items-center ">Pay</button>

               </div>

               <div>
                    <div className="overflow-x-auto w-full">
                         <table className="table w-full">
                              {/* head */}
                              <thead className="bg-[#D59578] ">
                                   <tr className="bg-[#D59578] ">
                                        <th>
                                             #
                                        </th>
                                        <th>Image items</th>
                                        <th>Name items</th>
                                        <th>Price items</th>
                                        <th>Action</th>

                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        data?.map((item, index) => (
                                             <tr key={item._id}>
                                                  <th>
                                                       {index + 1}
                                                  </th>
                                                  <td>
                                                       <div className="avatar">
                                                            <div className="w-20 rounded">
                                                                 <img src={item.image} />
                                                            </div>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <p className=" text-xl font-semibold"> {item.name}</p>
                                                  </td>
                                                  <td> ${item.price}</td>
                                                  <th>
                                                       <button onClick={() => handleDelete(item._id)} className=" bg-[#ea1919] text-white p-2 rounded"><FaTrashAlt></FaTrashAlt></button>
                                                  </th>
                                             </tr>
                                        ))
                                   }


                              </tbody>



                         </table>
                    </div>
               </div>
          </div>
     );
};

export default SelectClass;