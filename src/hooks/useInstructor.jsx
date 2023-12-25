import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const {user} = useAuth();
  const {
    data: isInstructor,
    isLoading: isInstructorLoading,
    refetch,
  } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: user?.email !== "",
    queryFn: async () => {
      const res = await axios(`https://artistryserverside-production.up.railway.app/isInstructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor,isInstructorLoading,refetch];
};
export default useInstructor;
