import { AiFillSetting } from "react-icons/ai";
import { HiBookOpen, HiClipboard, HiHome, HiOutlineViewBoards } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const StudentNavlink = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <NavLink
          to="/dashboard/student-home"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiHome className="w-5 h-5"></HiHome>Student Home
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/selected-class"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiBookOpen className="w-5 h-5"></HiBookOpen> Selected Course
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/enrolled-class"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiOutlineViewBoards className="w-5 h-5"></HiOutlineViewBoards>Enrolled Course
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/payment-history"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiClipboard className="w-5 h-5"></HiClipboard>Payment History
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/setting"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <AiFillSetting className="w-5 h-5"></AiFillSetting>Setting
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default StudentNavlink;
