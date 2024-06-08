import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useInstructorCourse = () => {
    const {user} = useAuth();
    const {
      data: InstructorCourse,
      isLoading: isInstructorCourseLoading,
      refetch,
    } = useQuery({
      queryKey: ["InstructorCourse", user?.email],
      enabled: user?.email !== "",
      queryFn: async () => {
        const res = await axios(`https://artistry-server-side.vercel.app/getInstructorCourse/${user?.email}`);
        return res.data;
      },
    });
    return [InstructorCourse,isInstructorCourseLoading,refetch];
}

export default useInstructorCourse
