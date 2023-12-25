
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import useAuth from "../hooks/useAuth";
// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading/>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivetRoute;

