import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Popularcard = ({ card }) => {

     const { img, name,numStudents ,email} = card
     return (
          <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
        
       
          <div>
               <div className="card w-96 bg-base-100 shadow">
                    <figure><img className=" h-80 w-full" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title font-bold text-3xl  font-color">{name}</h2>
                         <p className=" font-color  text-lg font-medium"> Student : {numStudents} </p>
                          <p className=" font-color text-base"> {email} </p>
                          <Link className=" text-blue-500 underline "> learn more </Link> 
                    </div>
               </div>
          </div>
          </motion.button>
     );
};

export default Popularcard;