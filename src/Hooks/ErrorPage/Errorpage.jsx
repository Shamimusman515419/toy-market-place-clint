import Lottie from 'react-lottie';
import animationData from '../../../public/errorpage.json'; 
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const Errorpage = () => {
     const animationOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData
     };

     return (
          <div className=' mx-auto text-center mt-7'>
                 <Link className=' mt-9 text-white  px-10 bg-[#D59578] text-xl font-bold py-2  rounded-sm ' to={'/'}>   Go Home </Link>
               <div className=" mx-auto md:w-2/3  md:max-h-[600px]">
                <Lottie options={animationOptions}   />
                    
               </div>
             
           
          </div>
     );

};

export default Errorpage;