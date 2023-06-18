import { useContext, useState } from "react";
import { AuthContact } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { motion } from 'framer-motion';
import { FaAsterisk } from "react-icons/fa";
import useAdmin from "../../../Hooks/Admin/useAdmin";
import useInstractor from "../../../Hooks/useInstruct/useInstractor";

const ClassesCard = ({ card }) => {
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const [Admin] = useAdmin();
  const [Instructor] = useInstractor();
  const { user } = useContext(AuthContact)
  const { image, price, Enrolled, seats, name, InstructorName, description } = card;

  // console.log(Enrolled );
  // console.log(seats);

  const active = Enrolled >= seats ? true : false;







  const handleSelet = (card) => {
    
    const { name, seats, price, _id, Enrolled, InstructorName, category, description, image } = card;

    const data = { name, seats, price, id: _id, Enrolled, InstructorName, category, description, image, email: user?.email }
    if (user && user?.email) {
      axiosSecure.post('https://music-school-server.vercel.app/cards', data)
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
        <div className={` ${active ? "bg-[#ac1010f7]" : ""}  relative  bg-white shadow-lg rounded-lg overflow-hidden`}>
          <img className=" relative w-full h-80" src={image} alt='img-fluid' />
          <div className="p-4 text-center relative">
            <h1 className=" text-2xl text-blue-500 font-semibold my-2 italic"> {name} </h1>
            <h1 className=" text-base font-semibold my-2 D59578"> Instructor: {InstructorName} </h1>

            <p className=" font-color text-sm "> {description} </p>
            <button disabled={active || Admin || Instructor} onClick={() => handleSelet(card)} className="mt-2   text-white bg-[#D59578]  max-w-xs  w-full font-bold py-2 px-4 rounded">
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