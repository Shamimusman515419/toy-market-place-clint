import { useContext } from "react";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useCard = () => {

     const [axiosSecure] = useAxiosSecure();

     const { user } = useContext(AuthContact)
     const { data, refetch } = useQuery({
          queryKey: ['cards', user?.email],
          queryFn: async () => {
               const res = await axiosSecure(`/cards?email=${user?.email}`)
               return res.data;
          }
     })


     return [data,refetch]
};

export default useCard;