import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";
import InstructorCard from "./InstructorCard";


const Instructors = () => {

     const { data } = useQuery({
          queryKey: ["instractor"],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/instractor');
               return res.json();
          }
     })

     console.log(data);
     return (
          <div className=" mt-[100px]">

               <div className=" my-5">
                    <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Al Instructors" ></SelectTitle>
               </div>


             <div className=" grid md:grid-cols-2 gap-6">
               {
                     data?.map((item,index)=> <InstructorCard key={index} card={item}></InstructorCard>)
               }
             </div>

          </div>
     );
};

export default Instructors;