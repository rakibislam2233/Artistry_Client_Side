import axios from "axios";
import toast from "react-hot-toast";
import { HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading";
import NoDataFound from "../../../components/Shared/NoDataFound";
import useCart from "../../../hooks/useCart";

const SelectedCourse = () => {
  const [selectedCourse, isLoading, refetch] = useCart();
  const totalPrice = selectedCourse?.reduce(
    (sum, course) => parseFloat(course.coursePrice) + sum,
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't remove this course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://artistry-server-side.vercel.app/deleteAddToCartCourse/${id}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire(
                  "Deleted!",
                  "Your course has been deleted.",
                  "success"
                );
              }
            });
        }
      })
      .catch((err) => toast.error(err.message));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {selectedCourse?.length === 0 ? (
        <NoDataFound />
      ) : (
        <div>
          <h1 className="text-3xl font-semibold text-center py-5">
            Selected Course
          </h1>
          <div className="flex justify-between gap-4 p-4">
            <h1 className="text-xl font-semibold">
              Total Cours : {selectedCourse?.length}
            </h1>
            <h2 className="text-xl font-semibold">
              Total Price : ${totalPrice?.toFixed(2)}
            </h2>
            <button className="py-2 px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold">
              Payment
            </button>
          </div>
          <div className="overflow-x-auto w-full my-3">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-white text-[16px]">
                  <th>Image</th>
                  <th>CourseName</th>
                  <th>InstructorName</th>
                  <th>InstructorEmail</th>
                  <th>AvaiableSeats</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse?.map((course, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={course?.courseImage}
                        alt=""
                      />
                    </td>
                    <td>{course?.courseTitle}</td>
                    <td>{course?.instructorName}</td>
                    <td>{course?.instructorEmail}</td>
                    <td>{course?.availableSeats}</td>
                    <td>${course?.coursePrice}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(course?._id)}
                        className="p-2 bg-rose-500 rounded"
                      >
                        <HiTrash className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedCourse;
