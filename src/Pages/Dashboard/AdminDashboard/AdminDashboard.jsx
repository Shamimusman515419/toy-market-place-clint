import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { FaBook, FaChessKing, FaUsers, FaWallet } from "react-icons/fa";


const AdminDashboardAdmin = () => {
     const [axiosSecure] = useAxiosSecure()
     const { data: state = [], isLoading } = useQuery({
          queryKey: ['adminstate'],
          queryFn: async () => {
               const res = await axiosSecure.get('/adminstate');
               return res.data;
          }
     })

     console.log(state);
     const users = state.users;
     const classes = state.classes;
     const instructor = state.instructor;
     const payments = state.payments;

  const total= payments?.reduce((sum,item)=> sum + item.price ,0)

     return (
          <div className=" m-2">

               <div>
                    <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Admin Dashboard"></SelectTitle>
               </div>

               <div className="  grid md:grid-cols-3 gap-6 ">
                    <div className=" bg-[#de20be36]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaChessKing className=" text-3xl text-[#a817d0] "></FaChessKing>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Instructor: {instructor ? instructor : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#2046de40]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaBook className=" text-3xl text-[#a817d0] "></FaBook>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Classes: {classes ? classes : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#20de4956]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaUsers className=" text-3xl text-[#a817d0] "></FaUsers>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold text-black "> Users: {users ? users : 0}</h1>

                         </div>
                    </div>
                    <div className=" bg-[#ded52056]  p-5 rounded flex gap-5 items-center  justify-around ">
                         <div>
                              <FaWallet className=" text-3xl text-[#a817d0] "></FaWallet>
                         </div>
                         <div>
                              <h1 className=" text-3xl font-bold  text-black "> Total Price: {total ? total : 0}</h1>

                         </div>
                    </div>

                 
               </div>
          </div>
     );

};

export default AdminDashboardAdmin;