import SelectTitle from "../../../Hooks/SelectTitle/SelectTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

// import required modules
// import { Pagination } from "swiper";

const Popularclass = () => {

     const { data } = useQuery({
          queryKey: ["className"],
          queryFn: async () => {
               const res = await fetch('Classes.json');
               return res.json();
          }
     })
  

     const popular = data?.filter(item => item.category == "popular");


     return (
          <div className="">
               <SelectTitle subtitle=" Dedication to Teaching" HadersTitle=" Popular Class "></SelectTitle>

               <div>
  
                     <Swiper
                         slidesPerView={3}
                         spaceBetween={10}
                         pagination={{
                              clickable: true,
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                    >
                         {
                              popular?.map((item, index) => <SwiperSlide key={index}>
                                   <div className="  relative    ">
                                        <img className="  relative  h-96 w-full" src={item.image} alt="" />
                                         <h1 className=" hidden  md:block  absolute bottom-2  left-0  bg-[#d59578d3] px-2 py-1 text-white    text-2xl font-semibold"> {item?.name} </h1>
                                   </div>

                              </SwiperSlide>)
                         }


                    </Swiper>

               </div>


          </div>
     );
};

export default Popularclass;