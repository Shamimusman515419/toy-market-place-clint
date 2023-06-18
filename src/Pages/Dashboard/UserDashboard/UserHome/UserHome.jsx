import { FaBook,  FaPaypal, FaWallet } from "react-icons/fa";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import useCard from "../../../../Hooks/useCard/useCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContact } from "../../../AuthProvider/AuthProvider";

const UserHome = () => {
     const [axiosSecure] = useAxiosSecure()
     const { user } = useContext(AuthContact)
     const { data: payment =[]} = useQuery({
          queryKey: ['paymentHistory'],
          queryFn: async () => {
               const result = axiosSecure.get(`https://music-school-server.vercel.app/paymentHistory?email=${user?.email}`);
               return (await result).data;
          }
     })

     const  [data,refetch]= useCard()

     const total = data?.reduce((sum, item) => sum + item.price, 0)
     const totalpayment = payment?.reduce((sum, item) => sum + item.price, 0)
     
     return (
          <div className=" m-3">
                <div>
                    <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Users Dashboard"></SelectTitle>
               </div> 

               <div className="  grid md:grid-cols-3 gap-6 ">
                    <div className=" bg-[#de20be36]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaBook className=" text-3xl text-[#a817d0] "></FaBook>
                         </div>
                         <div>
                          <h1 className=" text-black  text-3xl font-bold"> Classes: {data?.length ?  data?.length : 0}</h1>

                         </div>
                    </div>
                   
                    <div className=" bg-[#20de4956]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaPaypal className=" text-3xl text-[#a817d0] "></FaPaypal>
                         </div>
                         <div>
                              <h1 className="text-black   text-3xl font-bold"> Payment: {payment?.length ? payment?.length : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#ded52056]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaWallet className=" text-3xl text-[#a817d0] "></FaWallet>
                         </div>
                         <div>
                              <h1 className=" text-3xl text-black  font-bold"> Payment Price: {totalpayment ? totalpayment : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#ded52056]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaWallet className=" text-3xl text-[#a817d0] "></FaWallet>
                         </div>
                         <div>
                              <h1 className=" text-3xl text-black  font-bold"> Card Price: {total ? total : 0}</h1>

                         </div>
                    </div>

                 
               </div>
          </div>
     );
};

export default UserHome;