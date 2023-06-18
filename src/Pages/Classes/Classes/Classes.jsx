import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";
import ClassesCard from "../ClassesCard/ClassesCard";


const Classes = () => {

 const { data } = useQuery({
          queryKey: ["classes"],
          queryFn: async () => {
               const res = await fetch('https://music-school-server.vercel.app/classes');
               return res.json();
          }
   })
console.log(data);

const approvedData=data?.filter(item=> item.role ==="approved");

     return (
          <div className=" mt-[100px]">
               <div className=" mt-8">
                    <SelectTitle subtitle=" Dedication to Teaching" HadersTitle=" All Classes "></SelectTitle>
               </div>

               <div className=" grid md:grid-cols-3 gap-4 justify-center">
                    {
                         approvedData?.map((item) => <ClassesCard key={item._id} card={item}></ClassesCard>)
                    }
               </div>
          </div>
     );
};

export default Classes;