import { FaBook, FaChessKing, FaUsers, FaWallet } from "react-icons/fa";
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";
import { useContext } from "react";
import { AuthContact } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const InstactorHome = () => {
     const { user } = useContext(AuthContact);
     const [axiosSecure] = useAxiosSecure();
  
     const { data } = useQuery({
          queryKey: ['myclass', user?.email],
          queryFn: async () => {
               const result = await axiosSecure.get(`/classes/${user?.email}`);
               return result.data;
          }
     })
const totalPrice= data?.reduce((sum,item)=> sum + item.price , 0)
const totalStudent= data?.reduce((sum,item)=> sum + item.Enrolled , 0)
const totalSeats= data?.reduce((sum,item)=> sum + item.seats , 0)
      
console.log(data);



return (
          <div>
             <div>
                    <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Instructor Dashboard"></SelectTitle>
               </div> 

               <div className="  grid md:grid-cols-3 gap-6 ">
                    <div className=" bg-[#de20be36]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaChessKing className=" text-3xl text-[#a817d0] "></FaChessKing>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Seats: {totalSeats ? totalSeats : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#2046de40]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaBook className=" text-3xl text-[#a817d0] "></FaBook>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Classes: {data?.length ? data?.length : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#20de4956]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaUsers className=" text-3xl text-[#a817d0] "></FaUsers>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Student: {totalStudent ? totalStudent : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#ded52056]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaWallet className=" text-3xl text-[#a817d0] "></FaWallet>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Total Price: {totalPrice ? totalPrice : 0}</h1>

                         </div>
                    </div>

                 
               </div>


                
          </div>
     );
};

export default InstactorHome;