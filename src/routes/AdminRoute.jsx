
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin,isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading/>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;

