import axios from "axios";
import { useQuery } from "react-query";

const useInstructors = () => {
  const {
    data: instructors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axios(`https://artistryserverside-production.up.railway.app/allInstructor`);
      return res.data;
    },
  });
  return [instructors,isLoading,refetch];
};

export default useInstructors;
