
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
// eslint-disable-next-line react/prop-types
const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor,isInstructorLoading] = useInstructor();
  const location = useLocation();
  if (loading || isInstructorLoading) {
    return <Loading/>;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default InstructorRoute;

