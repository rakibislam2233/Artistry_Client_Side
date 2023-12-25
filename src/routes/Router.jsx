import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Dashboard from "../layout/Dashboard/Dashboard";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import InstructorsPage from "../page/InstructorsPage";
import CoursePage from "../page/CoursePage";
import BlogsPage from "../page/BlogsPage";
import ContactPage from "../page/ContactPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import ManageCourse from "../layout/Dashboard/Admin/ManageCourse";
import ManageUser from "../layout/Dashboard/Admin/ManageUser";
import AdminHome from "../layout/Dashboard/Admin/AdminHome";
import AddCourse from "../layout/Dashboard/Instructors/AddCourse";
import MyCourse from "../layout/Dashboard/Instructors/MyCourse";
import InstructorHome from "../layout/Dashboard/Instructors/InstructorHome";
import StudentHome from "../layout/Dashboard/Student/StudentHome";
import SingleCourse from "../components/Course/SingleCourse";
import SelectedCourse from "../layout/Dashboard/Student/SelectedCourse";
import EnrolledCourse from "../layout/Dashboard/Student/EnrolledCourse";
import PaymentHistory from "../layout/Dashboard/Student/PaymentHistory";
import SingleInstructor from "../components/Instructor/SingleInstructor";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h3>Error Page</h3>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
      {
        path:'/instructor-details/:id',
        element:<SingleInstructor/>
      },
      {
        path: "/course",
        element: <CoursePage />,
      },
      {
        path:'/single-course/:id',
        element: <SingleCourse/>,
      },
      {
        path: "/Blogs",
        element: <BlogsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  //register page routes
  {
    path:"/register",
    element:<RegisterPage/>
  },
  //login page routes
  {
    path:"/login",
    element:<LoginPage/>
  },
  //dashboard routes
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <h3>Error Page</h3>,
    children: [
      {
        path: "admin-home",
        element: <AdminRoute><AdminHome/></AdminRoute> ,
      },
      {
        path:"manage-users",
        element:<AdminRoute><ManageUser/></AdminRoute> ,
      },
      {
        path:"manage-course",
        element:<AdminRoute><ManageCourse/></AdminRoute>,
      },
      {
        path:"instructor-home",
        element:<InstructorRoute><InstructorHome/></InstructorRoute>,
      },
      {
        path:"add-class",
        element:<InstructorRoute><AddCourse/></InstructorRoute>, 
      },
      {
        path:"my-class",
        element:<InstructorRoute> <MyCourse/></InstructorRoute>,
      },
      //student routes here
      {
        path: "student-home",
        element: <StudentHome/>,
      },
      {
        path: "selected-class",
        element: <SelectedCourse/>,
      },
      {
        path: "enrolled-class",
        element: <EnrolledCourse/>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory/>,
      },
      {
        path:'setting',
        element:<h2>Setting</h2>
      }
    ],
  },
]);

export default router;
