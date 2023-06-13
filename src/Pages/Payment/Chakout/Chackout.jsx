import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContact } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCard from "../../../Hooks/useCard/useCard";
import { useQuery } from "@tanstack/react-query";


const Chackout = ({ classData }) => {
     const { user } = useContext(AuthContact);
     const { data: classes } = useQuery({
          queryKey: ["classes"],
          queryFn: async () => {
               const res = await fetch('https://music-school-server.vercel.app/classes');
               return res.json();
          }
     })

     const { price, _id } = classData;

     const classesData = classes?.find(item => item._id == classData.id);

     const [data, refetch] = useCard();
     const Navigete = useNavigate();
     const stripe = useStripe();
     const elements = useElements();
     const [axiosSecure] = useAxiosSecure();
     const [CardError, setCardError] = useState('')

  const UpdateClasses= {seats: classData?.seats -1, Enrolled: classData.Enrolled + 1};



     const [clientSecret, setClientSecret] = useState('');

     useEffect(() => {
          if (price > 0) {
               axiosSecure.post('/create-payment-intent', { price })
                    .then(res => {

                         setClientSecret(res.data.clientSecret);
                    })
          }
     }, [price, axiosSecure])



     const handleSubmit = async (event) => {
          event.preventDefault()



          if (!stripe || !elements) {
               return;
          }
          const card = elements.getElement(CardElement)
          if (card == null) {
               return;
          }


          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: "card",
               card
          })
          if (error) {
               console.log(error);
               setCardError(error.message)
          }
          if (paymentMethod) {
               setCardError('')
               // console.log("paymentMethod", paymentMethod);
          }

          const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
               clientSecret,
               {
                    payment_method: {
                         card: card,
                         billing_details: {
                              email: user.email || "unknown",
                              name: user.displayName || "anonymous"
                         },
                    },
               },
          );

          if (paymentError) {
               setCardError(paymentError.message)
               console.log(paymentError);
          }

          if (paymentIntent.status === "succeeded") {

               const payment = {

                    email: user?.email,
                    name: user?.name,
                    price,
                    image: classData.image,
                    name: classData.name,
                    id: classData._id,
                    transactionId: paymentIntent.id,
                    date: new Date(),

               }

               axiosSecure.post('/payment', payment)
                    .then(result => {
                         console.log(result);
                         if (result.data.insertedId) {

                              axiosSecure.put(`classes/${classesData._id}`,UpdateClasses).then(data => {
                                   console.log(data);
                              })

                              axiosSecure.delete(`/payment/${classData._id}`)
                                   .then(data => {
                                        if (data.data) {
                                             refetch();
                                             Navigete('/dashboard/userDashboard')
                                             Swal.fire({
                                                  position: 'mid',
                                                  icon: 'success',
                                                  title: ' Payment success ',
                                                  showConfirmButton: false,
                                                  timer: 1500
                                             })
                                        }

                                   })


                         }

                    })

          }



     }

     return (
          <div className=' w-2/3 mx-auto'>
               <form onSubmit={handleSubmit}>
                    <CardElement
                         options={{
                              style: {
                                   base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                             color: '#aab7c4',
                                        },
                                   },
                                   invalid: {
                                        color: '#9e2146',
                                   },
                              },
                         }}
                    />
                    <button disabled={!clientSecret || !stripe} className=' mt-3 block  rounded-md py-1 px-4 mx-auto bg-[#0c3ae1] text-white font-medium text-xl  text-center' type="submit" >
                         Pay
                    </button>
               </form>
                  <p className=" text-xl font-medium text-red-500"> {CardError} </p>
          </div>
     );
};

export default Chackout;