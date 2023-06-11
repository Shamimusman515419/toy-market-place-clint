import { useQuery } from "@tanstack/react-query";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Myclass = () => {

     const { user } = useContext(AuthContact);
     const [axiosSecure] = useAxiosSecure();
     console.log(user);
     const { data } = useQuery({
          queryKey: ['myclass', user.email],
          queryFn: async () => {
               const result = await axiosSecure.get(`/classes/${user.email}`);
               return result.data;
          }
     })
     const { data: orderState, refetch } = useQuery({
          queryKey: ['/order-stats',],
          queryFn: async () => {
               const result = await axiosSecure.get(`/order-stats`);
               return result.data;
          }
     })
     console.log(data);
     console.log(orderState);
     const countNumber= orderState?.filter(item=> item.id == "6486022212f29561a2dc1d51" );
     console.log(countNumber);
 
   

     const handleUpdate=(item)=>{
           console.log(item);
     }

     return (
          <div>
              <div>
               <SelectTitle subtitle="Dedication to Teaching" HadersTitle="My Classes">  </SelectTitle>
              </div>



              <div>
                         <div className="overflow-x-auto">
                              <table className="table w-full">
                                   {/* head */}
                                   <thead>
                                        <tr>
                                            <th>#</th>
                                             <th>Image</th>
                                             <th>Name</th>
                                             <th>Total Enrolled Students</th>
                                             <th>Role</th>
                                             <th>Feedback </th>
                                             <th>Acton</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             data?.map((item, index) =>
                                                  <tr key={item._id}>
                                                       <th>{index + 1}</th>
                                                       <td> <img className=" h-[60px] w-[60px] rounded-xl" src={item.image} alt="" /></td>
                                                       <td>{item.name}</td>
                                                       <td>0</td>

                                                       <td>
                                                        <p> {item.role} </p>
                                                       </td>
                                                       <td>
                                                        <p> {"null"} </p>
                                                       </td>
                                                       <td>
                                                            <button onClick={() => handleUpdate(item._id)} className="  bg-[#375cd67c]  text-2xl  p-2 rounded"><FaEdit></FaEdit></button>
                                                       </td>
                                                  </tr>
                                             )
                                        }


                                   </tbody>
                              </table>
                         </div>
                    </div>
          </div>
     );
};

export default Myclass;