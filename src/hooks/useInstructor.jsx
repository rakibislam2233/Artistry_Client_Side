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
      const res = await axios(`https://artistry-server-side.vercel.app/isInstructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor,isInstructorLoading,refetch];
};
export default useInstructor;
