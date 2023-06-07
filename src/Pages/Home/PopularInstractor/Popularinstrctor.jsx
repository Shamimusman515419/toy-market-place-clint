import { useQuery } from "@tanstack/react-query";
import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";
import Popularcard from "./Popularcard";


const Popularinstrctor = () => {

     const { data } = useQuery({
          queryKey: ["popularInstacort"],
          queryFn: async () => {
               const res = await fetch('Instrator.json');
               return res.json();
          }
     })
     const popular = data?.filter(item => item.category == "popular");
     function compareByPriceDescending(a, b) {
          return b.numStudents - a.numStudents;
        }
        
 
     const sortPopular = popular?.sort(compareByPriceDescending);
     // console.log(sortPopular);
     return (
          <div className="mt-16">
               <SelectTitle subtitle="Dedication to Teaching" HadersTitle="Popular Instructors "></SelectTitle>
               <div className=" m-2 grid md:grid-cols-3 gap-8 ">
                    {
                         sortPopular?.map((item, index) => <Popularcard key={index} card={item}></Popularcard>)
                    }
               </div>

          </div>
     );
};

export default Popularinstrctor;