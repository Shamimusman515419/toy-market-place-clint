import { useQuery } from "@tanstack/react-query";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Myclass = () => {

     const { user } = useContext(AuthContact);
     const [axiosSecure] = useAxiosSecure();
  
     const { data } = useQuery({
          queryKey: ['myclass', user?.email],
          queryFn: async () => {
               const result = await axiosSecure.get(`/classes/${user?.email}`);
               return result.data;
          }
     })
     
    
   
   

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
                                                       <th className=" text-base font-medium">{index + 1}</th>
                                                       <td > <img className=" h-[60px] w-[60px] rounded-xl" src={item.image} alt="" /></td>
                                                       <td  className=" text-base font-medium">{item.name}</td>
                                                       <td  className=" text-base font-medium">{item.Enrolled}</td>

                                                       <td>
                                                        <p  className=" text-base font-medium"> {item.role} </p>
                                                       </td>
                                                       <td>
                                                        <p  className=" text-base font-medium"> { item?.feedback ? item?.feedback : "nul"} </p>
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