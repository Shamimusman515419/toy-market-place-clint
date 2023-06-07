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

     const {data}=useQuery({
           queryKey: ["className"],
           queryFn: async  ()=>{
                const res= await fetch('Classes.json');
                return res.json();
           }
     })
console.log(data);

const popular=data?.filter(item=>  item.category =="popular");
console.log(popular);

     return (
          <div className="">
               <SelectTitle subtitle=" Dedication to Teaching" HadersTitle=" Popular Class "></SelectTitle>

               <div>

                    <Swiper
                         slidesPerView={3}
                         spaceBetween={30}
                         pagination={{
                              clickable: true,
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                    >
                        {
                         popular?.map((item,index)=>  <SwiperSlide key={index}>
                              <div>
                              <img src={item.image} alt="" />
                              </div>
                              
                         </SwiperSlide> )
                        }
{/* 
                        
                         <SwiperSlide>
                         <div>
                              <img src="https://images.pexels.com/photos/15922096/pexels-photo-15922096/free-photo-of-young-woman-in-a-summer-dress-playing-the-electric-guitar.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                              </div>

                         </SwiperSlide>
                         <SwiperSlide>
                         <div>
                              <img src="https://img.freepik.com/free-vector/cultural-happy-vasant-panchami-indian-festival-background-design-vector_1055-12074.jpg?size=626&ext=jpg&ga=GA1.1.294406936.1686068593&semt=ais" alt="" />
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                         <div>
                              <img src="https://img.freepik.com/free-photo/friends-sitting-near-bonfire-smiling-speaking-resting-playing-guitar_176420-4172.jpg?size=626&ext=jpg&ga=GA1.1.294406936.1686068593&semt=ais" alt="" />
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                         <div>
                              <img src="https://img.freepik.com/premium-vector/happy-lohri-celebration-greeting-card-with-vector-illustration_30996-7640.jpg?size=626&ext=jpg&ga=GA1.1.294406936.1686068593&semt=ais" alt="" />
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                         <div>
                              <img src="https://img.freepik.com/premium-photo/teacher-assisting-boyto-play-guitar-classroom_107420-45345.jpg?size=626&ext=jpg&ga=GA1.1.294406936.1686068593&semt=ais" alt="" />
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                         <div>
                              <img src="https://img.freepik.com/premium-photo/band-adult-guitarists-rehearsing-studio_201836-2701.jpg?size=626&ext=jpg&ga=GA1.1.294406936.1686068593&semt=ais" alt="" />
                              </div>
                         </SwiperSlide> */}
                       
                    </Swiper>

               </div>


          </div>
     );
};

export default Popularclass;