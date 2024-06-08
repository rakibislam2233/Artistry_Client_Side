import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const {user,loading} = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const token = localStorage.getItem("jwt_token");
  const {
    data: selectedCourse,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart",user?.email],
    enabled: user?.email !== '' || loading,
    queryFn: async () => {
      const res = await axios.get(`https://artistry-server-side.vercel.app/getAddToCartCourse/${user?.email}`,{
        headers:{
          authorization: `Bearer ${token}`
        }
      });
      return res.data;
    },
  });
  return [selectedCourse,isLoading,refetch];
}

export default useCart
