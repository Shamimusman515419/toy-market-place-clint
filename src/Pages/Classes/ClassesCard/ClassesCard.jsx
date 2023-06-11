import { useContext } from "react";
import { AuthContact } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { motion } from 'framer-motion';

const ClassesCard = ({ card }) => {
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const { user } = useContext(AuthContact)
  const { image, price, name, InstructorName, description } = card;

  const navigate = useNavigate();

  const handleSelet = (card) => {
    const { name, seats, price, InstructorName, category, description, image } = card;
    const data = { name, seats, price, InstructorName, category, description, image, email: user?.email }
    if (user && user?.email) {
      axiosSecure.post('http://localhost:5000/cards', data)
        .then(result => {
          if (result.data) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1000
            })
          }
        }).catch(error => {
          console.log(error.message);
        })


    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }

  }



  return (
    <div className=" w-full">
       <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>Welcome to My Animation</h1>
    
      <div className="  relative  bg-white shadow-lg rounded-lg overflow-hidden">
        <img className=" relative w-full h-80" src={image} alt='img-fluid' />
        <div className="p-4 text-center relative">
          <h1 className=" text-2xl text-blue-500 font-semibold my-2 italic"> {name} </h1>
          <h1 className=" text-base font-semibold my-2 D59578"> Instructor: {InstructorName} </h1>

          <p className=" font-color text-sm "> {description} </p>
          <button onClick={() => handleSelet(card)} className="mt-2   text-white bg-[#D59578]  max-w-xs  w-full font-bold py-2 px-4 rounded">
            Select
          </button>

        </div>
        <p className=" left-0 text-lg absolute top-0  font-semibold text-white  bg-[#D59578] px-4 py-1 ">${price}</p>
      </div>

      </motion.div>

    </div>
  );
};

export default ClassesCard;