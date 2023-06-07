import  { useContext } from 'react';
import { AuthContact } from '../../Pages/AuthProvider/AuthProvider';
import { FaGoogle,FaFacebook,FaGithub } from 'react-icons/fa';

const SocalLogin = () => {
     const { GoogelSing } = useContext(AuthContact);


     const handleGoogle = () => {
          GoogelSing().then(result=>{
                console.log(result.user);
          }).catch(error=>{
               console.log(error);
          })
     }
     return (
          <div>
               <div>
                    <div className=' my-3 px-2 flex gap-6  justify-center items-center'>

                         <FaGoogle install react-icons  onClick={handleGoogle} className='   cursor-pointer text-[#cf7d03] text-2xl'></FaGoogle>
                         <FaGithub className=' cursor-pointer text-2xl'></FaGithub>
                         <FaFacebook className=' cursor-pointer text-[#4450d5] text-2xl'></FaFacebook>
                    </div>
               </div>
          </div>
     );
};

export default SocalLogin;