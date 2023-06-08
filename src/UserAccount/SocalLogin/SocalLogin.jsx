import  { useContext } from 'react';
import { AuthContact } from '../../Pages/AuthProvider/AuthProvider';
import { FaGoogle,FaFacebook,FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

const SocalLogin = () => {
     const { GoogelSing } = useContext(AuthContact);


     const handleGoogle = () => {
          GoogelSing().then(result=>{
                console.log(result.user);
                if(result.user){
                    const user=result.user;
                    const data= {email:user.email, name:user.displayName}
                    axios.post('http://localhost:5000/users', data)
                    .then(result => {
                         if (result.data.insertedId) {
                              Swal.fire({
                                   position: 'top-end',
                                   icon: 'success',
                                   title: 'User created successfully.',
                                   showConfirmButton: false,
                                   timer: 1000
                              });
                         }

                    }).catch(error => {
                         Swal.fire({
                              icon: 'error',
                              title: `${error.massage}`,
                              text: 'Something went wrong!',

                         })
                    })
                }
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