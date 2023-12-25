import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const AdminNavlink = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <AiOutlineUser className="w-5 h-5"></AiOutlineUser>Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-users"
          className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : "py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded"
          }
        >
          <HiOutlineUsers className="w-5 h-5"></HiOutlineUsers> Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-course"
          className={({ isActive }) =>
            isActive
              ? "py-2 px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded text-white flex gap-2 "
              : " py-2 px-5 flex gap-2 cursor-pointer hover:bg-gray-700 rounded  "
          }
        >
          <HiOutlineUsers className="w-5 h-5"></HiOutlineUsers> Manage Class
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminNavlink;
