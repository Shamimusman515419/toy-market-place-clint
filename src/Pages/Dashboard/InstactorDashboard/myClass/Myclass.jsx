import { useQuery } from "@tanstack/react-query";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { FaTrashAlt } from "react-icons/fa";

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
     console.log(data);

     const handleDelete=(item)=>{
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
                                             <th>Name</th>
                                             <th>Email</th>
                                             <th>Role</th>
                                             <th>Acton</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             data?.map((item, index) =>
                                                  <tr key={item._id}>
                                                       <th>{index + 1}</th>
                                                       <td>{item.name}</td>
                                                       <td>{item.email}</td>

                                                       <td>
                                                       <button  className=" bg-[#D59578] text-white p-2 rounded mx-1"> Make Instructor</button> 
                                                       </td>
                                                       <td>
                                                            <button onClick={() => handleDelete(item._id)} className=" bg-[#ea1919] text-white p-2 rounded"><FaTrashAlt></FaTrashAlt></button>
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