import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";
import ClassesCard from "../ClassesCard/ClassesCard";


const Classes = () => {
     const token=localStorage.getItem('access-token')
   
     const { data } = useQuery({
          queryKey: ["classes"],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/classes', {
                    headers:{
                         authorization: ` bearer ${token}`
                     }
               });
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