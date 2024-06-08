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
      const res = await axios(`https://artistry-server-side.vercel.app/allCourse`);
      return res.data;
    },
  });
  return [courses,isLoading,refetch];
};

export default useCourse;
