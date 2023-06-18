import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUsers = () => {
     const [axiosSecure] = useAxiosSecure()
     const { data: users, refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const result = await axiosSecure.get('/users')
               return result.data;
          }
     })
     const handleAdmin = (item) => {

          axiosSecure.patch(`/users/admin/${item}`)
               .then(result => {
                    if (result.data) {
                         refetch()
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Your work Update Success',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               })
     }
     const handleInstractor = (item) => {

          axiosSecure.patch(`/users/instructor/${item}`)
               .then(result => {
                    if (result.data) {
                         refetch()
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Your work Update Success',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               })
     }

     const handleDelete = (item) => {

          axiosSecure.delete(`/users/${item}`)
             .then(data => {
                    if (data.data.deletedCount) {
                         refetch();
                         Swal.fire({
                              position: 'mid',
                              icon: 'success',
                              title: `${users.name} is an Delete Now!`,
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }

               })
     }
     return (
          <div>

               <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Manage Users"></SelectTitle>


               <div>
                    <h1 className=" text-3xl  ml-6 font-semibold my-3"> Total Users:  {users?.length} </h1>
                    <div>
                         <div className="overflow-x-auto">
                              <table className="table w-full">
                                   {/* head */}
                                   <thead>
                                        <tr>
                                             <th className=" px-4  text-lg text-black py-3">#</th>
                                             <th className=" px-4  text-lg text-black py-3">Name</th>
                                             <th className=" px-4  text-lg text-black py-3">Email</th>
                                             <th className=" px-4  text-lg text-black py-3">Role</th>
                                             <th className=" px-4  text-lg text-black py-3">Acton</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             users?.map((item, index) =>
                                                  <tr className="text-black  font-normal text-base" key={item._id}>
                                                       <th className="text-black first-letter:font-normal text-base">{index + 1}</th>
                                                       <td className="text-black font-normal text-base">{item.name}</td>
                                                       <td className="text-black font-normal text-base">{item.email}</td>

                                                       <td className="text-black font-normal text-base">
                                                            {
                                                                 item.role == "admin" ? <p className=" text-xl font-medium ">Admin</p> : item.role == "instructor" ? <p className=" text-xl font-medium ">Instructor</p> :
                                                                      <> <button onClick={() => handleAdmin(item._id)} className=" bg-[#D59578] text-white p-2 rounded mx-1">Make Admin</button>
                                                                           <button onClick={() => handleInstractor(item._id)} className=" bg-[#D59578] text-white p-2 rounded mx-1"> Make Instructor</button>
                                                                      </>

                                                            }
                                                       </td>
                                                       <td  className="text-black font-normal text-base">
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
          </div>
     );
};

export default ManageUsers;