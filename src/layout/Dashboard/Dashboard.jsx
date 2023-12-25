import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import Loading from "../../components/Shared/Loading";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading,refetch] = useInstructor();
  return (
    <>
      {isAdminLoading || isInstructorLoading ? (
        <Loading />
      ) : (
        <div className="w-full overflow-hidden">
          <div className="w-full container  mx-auto  grid grid-cols-1 md:grid-cols-12 gap-8 p-5">
            <div className=" md:h-screen md:col-span-3 shadow-lg rounded bg-gray-900 scroll-smooth">
              <Sidebar isAdmin={isAdmin} isInstructor={isInstructor} refetch={refetch} />
            </div>
            <div className=" md:col-span-9 shadow-lg rounded  bg-gray-900 ">
              <Outlet />
            </div>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
};

export default Dashboard;
