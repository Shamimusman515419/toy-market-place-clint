import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";


const AboutSection = () => {
     return (
          <div className=" my-5">
               <SelectTitle subtitle="Dedication to Teaching" HadersTitle="About Section"></SelectTitle>
               <div className=" mt-5 grid md:grid-cols-2 ">
                    <div>
                         <img src="https://images.pexels.com/photos/8363027/pexels-photo-8363027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className=" p-4  ">
                         <div className=" md:mt-14 md:max-w-[350px]  md:ms-12">
                         <h1 className=" text-5xl text-[#2F2F2F]  font-bold my-4">ART OF MUSIC </h1>
                         <p className=" text-lg  font-normal space-y-2"> Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend um auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Du is sed odio site amet nibh vulputate cursus a sit amet.</p>
                            <div>
                              <button className=" hover:bg-[#c72691]  bg-[#D59578] text-white uppercase mt-6  py-2 px-6  "> Lead more</button>
                            </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutSection;