import { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

import {AuthContact} from '../../Pages/AuthProvider/AuthProvider'
import { useQuery } from "@tanstack/react-query";
const useAdmin = () => {
     const { user, loading } = useContext(AuthContact)
  const [axiosSecure] = useAxiosSecure();
     const { data: Admin, isLoading: AdminLoading } = useQuery({
          queryKey: ['users', user?.email],
          enabled: !loading,
          queryFn: async () => {
               const res = await axiosSecure.get(`/users/admin/${user?.email}`);
               return res.data.admin;
          },
     })
     return [Admin, AdminLoading];
};

export default useAdmin;