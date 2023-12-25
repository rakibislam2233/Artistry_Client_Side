import { AiFillSetting } from "react-icons/ai";
import { HiAcademicCap, HiBookOpen, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const InstructorsNavlink = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <NavLink
          to="/dashboard/instructor-home"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiHome className="w-5 h-5"></HiHome> Instructor Home
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add-class"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiBookOpen className="w-5 h-5"></HiBookOpen>Add Course
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-class"
         className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <span className="flex items-center gap-2">
            <HiAcademicCap className="w-5 h-5"></HiAcademicCap>My Course
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

export default InstructorsNavlink;
