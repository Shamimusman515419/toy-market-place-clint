import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import moment from "moment/moment";

const PaymentHistroy = () => {
     const [axiosSecure] = useAxiosSecure()
     const { user } = useContext(AuthContact)
     const { data } = useQuery({
          queryKey: ['paymentHistory'],
          queryFn: async () => {
               const result = axiosSecure.get(`http://localhost:5000/paymentHistory?email=${user.email}`);
               return (await result).data;
          }
     })

     console.log(data);
     return (
          <div>
               <h1> payment history</h1>


               <section className="container mx-auto p-6 font-mono">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                         <div className="w-full overflow-x-auto">
                              <table className="w-full">
                                   <thead>
                                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                             <th className="px-4 py-3">Name</th>
                                             <th className="px-4 py-3">Price</th>
                                             <th className="px-4 py-3">Email</th>
                                             <th className="px-4 py-3">Date</th>
                                        </tr>
                                   </thead>
                                   <tbody className="bg-white">
                                        {
                                             data?.map(item => 
                                                  <tr key={item._id} className="text-gray-700">
                                                       <td className="px-4 py-3 border">
                                                            <div className="flex items-center text-sm">
                                                                 <div className="relative w-8 h-8 mr-3 rounded-full">
                                                                      <img className="object-cover w-full h-full rounded-full" src={item.image} alt="" loading="lazy" />
                                                                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                 </div>
                                                                 <div>
                                                                      <p className="font-semibold">{item.name}</p>
                                                                    
                                                                 </div>
                                                            </div>
                                                       </td>
                                                       <td className="px-4 py-3 border text-md font-semibold">{item.price}</td>
                                                       <td className="px-4 py-3 border text-xs">
                                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-[#d5957841] rounded-sm"> {item.email} </span>
                                                       </td>
                                                       <td className="px-4 py-3 border text-sm">
                                                       {
                                                             moment(item.date).format("dddd, MMMM Do YYYY, h:mm a")
                                                       }
                                                       </td>
                                                  </tr>
                                             )
                                        }


                                   </tbody>
                              </table>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default PaymentHistroy;