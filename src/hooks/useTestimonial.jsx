import axios from "axios";
import { useQuery } from "react-query";

const useTestimonial = () => {
  const {
    data: testimonials,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axios(`https://artistryserverside-production.up.railway.app/allTestimonial`);
      return res.data;
    },
  });
  return [testimonials, isLoading, refetch];
};

export default useTestimonial;
