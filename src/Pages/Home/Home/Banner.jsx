import bannerimage1 from '../../../../src/assets/image/music-1106439_960_720 (1).jpg'

const Banner = () => {
     return (

          <div>
               <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                         <img src={bannerimage1} className="w-full" />

                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Rabindra Sangeet </h1>
                                   <button className=' bg-color text-white px-4 py-1 text-xl hover:bg-[rgba(3,13,120,0.99)] rounded-lg '> See more</button>
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
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Rabindra Sangeet </h1>
                                   <button className=' bg-color text-white px-4 py-1 text-xl hover:bg-[rgba(3,13,120,0.99)] rounded-lg '> See more</button>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                         <img src="https://cdn.pixabay.com/photo/2022/10/18/07/28/guitar-7529502_1280.jpg" className="w-full" />
                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Rabindra Sangeet </h1>
                                   <button className=' bg-color text-white px-4 py-1 text-xl hover:bg-[rgba(3,13,120,0.99)] rounded-lg '> See more</button>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                         <img src="https://media.istockphoto.com/id/1412978803/photo/young-stylish-happy-man-and-excited-girl-dancing-hip-hop-at-studio-on-blue-and-pink-trendy.jpg?s=1024x1024&w=is&k=20&c=qFPSi1u01pzt7X0c1wRKKYJE9No9eD67KamBU9OXtvM=" className="w-full" />
                         <div className=" absolute   flex  flex-col  w-full  h-full      items-center  justify-center  ">
                              <div className='text-center'>
                                   <h1 className=" md:text-7xl text-3xl  text-color  font-semibold  my-3  "> Rabindra Sangeet </h1>
                                   <button className=' bg-color text-white px-4 py-1 text-xl hover:bg-[rgba(3,13,120,0.99)] rounded-lg '> See more</button>
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