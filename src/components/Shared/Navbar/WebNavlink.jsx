import { FaOpencart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useInstructor from "../../../hooks/useInstructor";
import Button from "../Button";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const nav = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/instructors",
    title: "Instructors",
  },
  {
    path: "/course",
    title: "Courses",
  },
  {
    path: "/blogs",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const WebNavlink = () => {
  const [show, setShow] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [selectedCourse, , refetch] = useCart();
  refetch();
  return (
    <div className="gap-20">
      <ul
        className={`w-full h-[100vh] lg:w-auto lg:h-auto bg-gray-900 lg:bg-transparent text-center  duration-500 lg:duration-0  flex flex-col lg:flex-row gap-5 absolute lg:static  items-center z-[1000] pt-5 md:pt-0 ${
          show ? "top-[80px] space-y-1 left-0 " : "top-[80px]  left-[-700px]"
        }`}
      >
        {nav.map(({ path, title }) => (
          <li key={path} onClick={() => setShow(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-emerald-500 border-b border-emerald-500" : "")}
              to={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
        {isAdmin || isInstructor || !user ? (
          ""
        ) : (
          <li className="relative">
            <Link to={"/dashboard/selected-class"}>
              <FaOpencart className="w-6 h-6 text-green-500 "></FaOpencart>
            </Link>
            <h1 className="absolute -top-2 -right-4 bg-gradient-to-r from-[#1DC1B3] to-green-500 w-4 h-4 text-white  rounded-full  flex justify-center items-center font-semibold  text-[12px]">
              {!selectedCourse ? "0" : selectedCourse?.length}
            </h1>
          </li>
        )}
        <div>
          {user ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-16 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  // tabIndex={0}
                  className="mt-3 space-y-3 ml-3 border border-gray-700 py-5 shadow menu menu-sm dropdown-content z-30 bg-gray-950 rounded-box w-52 p-3"
                >
                  <label className="avatar ">
                    <div className="w-14 h-14 mx-auto rounded-full">
                      <img className="" src={user?.photoURL} />
                    </div>
                  </label>
                  <h2 className="text-center font-semibold text-xl ">
                    {user?.displayName}
                  </h2>
                  {
                    <Link
                      to={`${
                        isAdmin
                          ? "/dashboard/admin-home"
                          : isInstructor
                          ? "/dashboard/instructor-home"
                          : "/dashboard/student-home"
                      }`}
                    >
                      <button className="w-full py-2  px-10 cursor-pointer bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white">
                        My Account
                      </button>
                    </Link>
                  }

                  <button
                    onClick={() => [logOut(), navigate("/login")]}
                    className="w-full bg-gray-700 rounded  text-white p-2"
                  >
                    Log Out
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <div className={`flex gap-3 items-center `}>
              <Link to="/login">
                <Button title={"Login"} />
              </Link>
            </div>
          )}
        </div>
      </ul>
      <>
        <button
          className="lg:hidden duration-500"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <HiX className="w-8 h-8"></HiX>
          ) : (
            <HiMenuAlt3 className="w-8 h-8"></HiMenuAlt3>
          )}
        </button>
      </>
    </div>
  );
};

export default WebNavlink;
