import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContact } from "../../../AuthProvider/AuthProvider";

const PaymentHistroy = () => {
const {user}=useContext(AuthContact)
const {data}=useQuery({
       queryKey:['paymentHistory'],
       queryFn: async ()=>{
          const res = await fetch(`http://localhost:5000/paymentHistory?email=${user.email}`);
          return res.json();
       }
})

console.log(data);
     return (
          <div>
              <h1> payment history</h1>  
          </div>
     );
};

export default PaymentHistroy;