/* eslint-disable react/prop-types */
import axios from "axios";
import { BsBoxArrowRight } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../../components/Shared/Button";
import useAuth from "../../../hooks/useAuth";
import AdminNavlink from "./AdminNavlink";
import InstructorsNavlink from "./InstructorsNavlink";
import StudentNavlink from "./StudentNavlink";
const Sidebar = ({ isAdmin, isInstructor,refetch }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const makeInstructor = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to be a instructor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://artistry-server-side.vercel.app/instructor/${user?.email}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Instructor has been successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-full  flex flex-col px-5  gap-8 py-4 ">
      <div className="px-5 pt-10 flex gap-4 items-center">
        <img
          className="w-14 h-14 rounded-full ring-4 ring-green-500"
          src={user?.photoURL}
          alt=""
        />
        <div className="space-y-2">
          <h1 className="font-semibold text-xl">{user?.displayName}</h1>
          <h3>{isAdmin?"Admin" : isInstructor? "Insturctor" : "Student"}</h3>
        </div>
      </div>
      {isAdmin || isInstructor ? (
        ""
      ) : (
        <div className="flex justify-center">
          <div onClick={()=>makeInstructor()}>
            <Button title={"Become a Instructor"} />
          </div>
        </div>
      )}
      <div className="space-y-3">
        {isAdmin ? (
          <AdminNavlink />
        ) : isInstructor ? (
          <InstructorsNavlink />
        ) : (
          <StudentNavlink />
        )}
        <hr />
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              to={"/"}
              className="flex gap-2 py-2 px-5 cursor-pointer hover:bg-gray-700 rounded"
            >
              <HiHome className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li>
            <button
              className="w-full flex gap-2 py-2 px-5 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => [logOut(), navigate("/login")]}
            >
              <BsBoxArrowRight className="w-5 h-5" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
