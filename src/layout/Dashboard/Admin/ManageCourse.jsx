import axios from "axios";
import { useState } from "react";
import { HiCheck, HiX } from "react-icons/hi";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading";
import useCourse from "../../../hooks/useCourse";
import Modal from "../Modal";
const ManageCourse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [denyId,setDenyId] = useState('')
  const [courses, isLoading, refetch] = useCourse();
  const filterCourses = courses?.filter(course => course.status !== "deny")
  const courseApproved = (id) => {
    axios.patch(`https://artistry-server-side.vercel.app/courseApproved/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Approved Class Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "Error",
          title: "Oops something is wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const courseDeny = (e) => {
    e.preventDefault()
    const form = e.target;
    const message = form.message.value;
     const feedback ={message}
    axios.post(`https://artistry-server-side.vercel.app/courseDeny/${denyId}`,feedback)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Deny Course Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
          setIsOpen(false);
        } else {
          Swal.fire({
            position: "center",
            icon: "Error",
            title: "Opps something is worng",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="w-full p-4 h-full ">
          <h2 className="text-3xl font-semibold text-center py-5">
            Manage Course
          </h2>
          <div className="overflow-x-auto w-full my-3">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-white text-[16px]">
                  <th>Course Image</th>
                  <th>Course Name</th>
                  <th>InstructorName</th>
                  <th>Seats</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Approved</th>
                  <th>Deny</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filterCourses?.map((course, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={course?.courseImage}
                        alt=""
                      />
                    </td>
                    <td>{course?.courseTitle}</td>
                    <td>{course?.instructorName}</td>
                    <td>20</td>
                    <td>${course?.coursePrice}</td>
                    <td>
                      <button className="btn btn-xs bg-gradient-to-r from-rose-500 to-pink-500 border-none text-white">
                        {course.status ? course.status : "pending"}
                      </button>
                    </td>
                    <td>
                      {course?.status === "approved" || course?.status === "deny" ? (
                        <>
                          <button disabled className="p-2 bg-gray-500 rounded">
                            <HiCheck className="w-4 h-4"></HiCheck>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => courseApproved(course._id)}
                            className="p-2 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded"
                          >
                            <HiCheck className="w-4 h-4"></HiCheck>
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      {course?.status === "approved" || course?.status === "deny" ? (
                        <>
                          <button disabled className=" bg-gray-500 p-2 rounded">
                            <HiX className="w-4 h-4"></HiX>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => [setIsOpen(!isOpen),setDenyId(course._id)]}
                            className=" bg-rose-600 p-2 rounded"
                          >
                            <HiX className="w-4 h-4"></HiX>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title={"Why Deny The Course?"}
            >
              <form onSubmit={courseDeny} className="space-y-3 mt-5">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Feedback"
                  className="border border-gray-500 w-full p-2 rounded focus:outline-none"
                ></textarea>
                <button className="py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white flex gap-1 justify-center items-center">Submit</button>
              </form>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageCourse;
