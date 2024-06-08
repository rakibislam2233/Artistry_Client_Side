import axios from "axios";
import { FaUserSecret } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading";
import useUsers from "../../../hooks/useUsers";
const ManageUser = () => {
  const [users, isLoading, refetch] = useUsers();
  const makeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Make Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://artistry-server-side.vercel.app/makeAdmin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Make a  admin successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  const makeInstructor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Make Instructor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Make Instructor",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://artistry-server-side.vercel.app/makeInstructor/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Make a  instructor successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-5 h-full">
          <h2 className="text-3xl font-semibold text-center py-5">
            Manage User
          </h2>
          <div className="overflow-x-auto w-full my-3">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-white text-[16px]">
                  <th>UserPhoto</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Role</th>
                  <th>Make A Admin</th>
                  <th>Make A Instructor</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <th>{user.role ? user.role : "student"}</th>
                    <td>
                      {user?.role === "admin" || user?.role === "instructor" ? (
                        <>
                          <button disabled className="p-2 rounded bg-gray-500">
                            <FaUserSecret className="w-6 h-6"></FaUserSecret>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => makeAdmin(user._id)}
                            className="p-2 rounded bg-gradient-to-r from-[#1DC1B3] to-green-500"
                          >
                            <FaUserSecret className="w-6 h-6"></FaUserSecret>
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      {user?.role === "instructor" || user?.role === "admin" ? (
                        <>
                          <button disabled className="p-2 rounded bg-gray-500">
                            <GiTeacher className="w-6 h-6"></GiTeacher>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => makeInstructor(user._id)}
                            className="p-2 rounded bg-gradient-to-r from-[#1DC1B3] to-green-500"
                          >
                            <GiTeacher className="w-6 h-6"></GiTeacher>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageUser;
