import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";
import ClassesCard from "../ClassesCard/ClassesCard";


const Classes = () => {
     const { data } = useQuery({
          queryKey: ["popularInstacort"],
          queryFn: async () => {
               const res = await fetch('Classes.json');
               return res.json();
          }
     })

     return (
          <div className=" mt-[100px]">
               <div className=" mt-8">
               <SelectTitle subtitle=" Dedication to Teaching" HadersTitle=" All Classes "></SelectTitle>  
               </div>

               <div className=" grid md:grid-cols-3 gap-4 items-center justify-center">
                    {
                         data?.map((item,index)=> <ClassesCard key={index} card={item}></ClassesCard> )
                    }
               </div>
          </div>
     );
};

export default Classes;