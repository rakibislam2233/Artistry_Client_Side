import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useUserCourse = () => {
    const {user} = useAuth();
    const {
      data: myCourse,
      isLoading: ismyCourseCourseLoading,
      refetch,
    } = useQuery({
      queryKey: ["InstructorCourse", user?.email],
      enabled: user?.email !== "",
      queryFn: async () => {
        const res = await axios(`https://artistry-server-side.vercel.app/allCourse/${user?.email}`);
        return res.data;
      },
    });
    return [myCourse,ismyCourseCourseLoading,refetch];
}

export default useUserCourse
