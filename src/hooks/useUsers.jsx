import axios from "axios";
import { useQuery } from "react-query";
const useUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios(`https://artistry-server-side.vercel.app/allUsers`);
      return res.data;
    },
  });
  return [users,isLoading,refetch];
};

export default useUsers;
