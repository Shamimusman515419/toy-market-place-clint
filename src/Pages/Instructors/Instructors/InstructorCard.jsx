
import { motion } from 'framer-motion';
const InstructorCard = ({card}) => {
     const {name,email,img,category,numStudents,description}=card
     return ( 
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
    <div className=" m-1  rounded-xl   shadow overflow-hidden  ">
                <div className=" md:grid grid-cols-2 gap-5 items-center justify-center ">
                    <div className=" w-full overflow-hidden  h-80">
                         <img className=" w-full h-full" src={img} alt="" />
                    </div>
                    <div className=" space-y-2">
                        <h1 className=" text-3xl font-semibold text-[#0771e3]"> {name} </h1>
                         <p className=" text-2xl  text-[#323742] font-semibold "> Student : {numStudents} </p>
                          <p className=" text-base font-medium text-[#323742]  "> Email : {email} </p>
                         <p className=" text-lg font-medium text-[#323742] "> {description} </p>
                    <button className=" bg-[#D59578] text-white px-6 text-lg py-1"> learn more </button>
                    </div>
                </div>
          </div>
          </motion.div>
     );
};

export default InstructorCard;