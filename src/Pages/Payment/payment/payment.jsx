import { Elements } from "@stripe/react-stripe-js";
import Chackout from "../Chakout/Chackout";
import { loadStripe } from "@stripe/stripe-js";

import { useLoaderData } from "react-router-dom";


const Payment = () => {
     const classData = useLoaderData();
     console.log(import.meta.env.PAYMENT_SECRET_KEY);
     const stripePromise = loadStripe('pk_test_51NEGeNGO16nc6gMPydwjPCMfVK7VSAJj5bqVJ1QDwytY7jarGEYbT6tQBZyTqgpY1c7o0UPYCHqUBEanvs1rZyoa00F2Fw14aY')
   


         console.log(classData);
     const price = classData.price;
     const id= classData._id
     return (
          <div className=" mt-[100px]">
               <div>
                    <Elements stripe={stripePromise}>
                         <Chackout price={price} id={id}></Chackout>
                    </Elements>

               </div>
          </div>
     );
};

export default Payment;