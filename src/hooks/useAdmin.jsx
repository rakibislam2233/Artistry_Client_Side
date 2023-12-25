import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const {user} = useAuth();
  const {
    data: isAdmin,
    isLoading: isAdminLoading,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: user?.email !== "",
    queryFn: async () => {
      const res = await axios(`https://artistryserverside-production.up.railway.app/isAdmin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin,isAdminLoading,refetch];
};
export default useAdmin;
