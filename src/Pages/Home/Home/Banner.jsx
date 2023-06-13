
const Banner = () => {
     return (

          <div>
               <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                         <img src="https://img.freepik.com/premium-photo/nursery-children-playing-with-musical-instruments-classroom_53876-82782.jpg?size=626&ext=jpg&uid=R105814829&ga=GA1.2.294406936.1686068593&semt=ais" className="w-full" />

                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Rabindra Sangeet </h1>
                                   <button className=' bg-[#0359e3eb] mt-3 text-white px-6 py-2  text-xl hover:bg-[rgba(143,11,138,0.52)] rounded-sm  '> See more</button>
                              </div>
                         </div>

                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                         <img src="https://img.freepik.com/free-photo/friends-with-guitar-party_23-2148115746.jpg?size=626&ext=jpg&uid=R105814829&ga=GA1.2.294406936.1686068593&semt=ais" className="w-full" />
                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Baul Music </h1>
                                   <button className=' bg-[#0359e3eb] mt-3 text-white px-6 py-2  text-xl hover:bg-[rgba(143,11,138,0.52)] rounded-sm  '> See more</button>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                         <img src="https://img.freepik.com/free-photo/high-angle-kids-singing-sunday-school_23-2149613759.jpg?size=626&ext=jpg&uid=R105814829&ga=GA1.2.294406936.1686068593&semt=ais" className="w-full" />
                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Sari Music </h1>
                                   <button className=' bg-[#0359e3eb] mt-3 text-white px-6 py-2  text-xl hover:bg-[rgba(143,11,138,0.52)] rounded-sm  '> See more</button>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                         <img src="https://img.freepik.com/free-vector/abstract-music-notes-design-music-background_206725-621.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" className="w-full" />
                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Bangla Five </h1>
                                   <button className=' bg-[#0359e3eb] mt-3 text-white px-6 py-2  text-xl hover:bg-[rgba(3,13,120,0.62)] rounded-sm  '> See more</button>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;