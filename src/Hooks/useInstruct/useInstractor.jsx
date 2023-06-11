import { useContext } from "react";
import { AuthContact } from "../../Pages/AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstractor = () => {

     const { user } = useContext(AuthContact);
     const [axiosSecure] = useAxiosSecure();

     const { data:Instructor, isLoading } = useQuery({
          queryKey: ['instructor', user.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/users/instructor/${user.email}`)
               return res.data.Instructor;
          }
     })
    
     return [Instructor,isLoading]
};

export default useInstractor;