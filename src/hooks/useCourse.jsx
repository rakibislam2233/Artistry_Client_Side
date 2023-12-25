import axios from "axios";
import { useQuery } from "react-query";

const useCourse = () => {
  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios(`https://artistryserverside-production.up.railway.app/allCourse`);
      return res.data;
    },
  });
  return [courses,isLoading,refetch];
};

export default useCourse;
