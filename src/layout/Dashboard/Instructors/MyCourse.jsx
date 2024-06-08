import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { ImSpinner6 } from "react-icons/im";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading";
import NoDataFound from "../../../components/Shared/NoDataFound";
import useInstructorCourse from "../../../hooks/useInstructorCourse";
import Modal from "../Modal";
const MyCourse = () => {
  const [InstructorCourse, isInstructorCourseLoading, refetch] =
    useInstructorCourse();
    const [loading,setLoading] = useState(false)
  const [updateCourse, setUpdateCourse] = useState({});
  const [updateId, setUpdateId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [feedback, setFeedback] = useState("");
  const courseTitleRef = useRef();
  const instructorNameRef = useRef();
  const instructorEmailRef = useRef();
  const courseDurationRef = useRef();
  const coursePriceRef = useRef();
  const availableSeatsRef = useRef();
  const imageRef = useRef();
  const [disable, setDisable] = useState(false);
  const handleRemoveCourse = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't remove this course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://artistry-server-side.vercel.app/deleteCourse/${id}`).then((res) => {
          if (res) {
            refetch();
            Swal.fire("Deleted!", "Your course has been deleted.", "success");
          }
        });
      }
    });
  };
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    const courseTitle = courseTitleRef.current?.value;
    const instructorName = instructorNameRef.current?.value;
    const instructorEmail = instructorEmailRef.current?.value;
    const courseDuration = courseDurationRef.current?.value;
    const coursePrice = coursePriceRef.current?.value;
    const availableSeats = availableSeatsRef.current?.value;
    const image = imageRef.current.value;
    const updateCourseInfo = {
      
      courseTitle,
      instructorName,
      instructorEmail,
      instructorImage: updateCourse?.instructorImage,
      courseImage: image,
      coursePrice,
      courseDuration,
      availableSeats: parseInt(availableSeats),
      status: "pending",
      role: "instructor",
      feedback: "",
    };
    axios
      .put(`https://artistry-server-side.vercel.app/updateCourse/${updateId}`, updateCourseInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          setLoading(false)
          toast.success("Update Course Successfully");
          setIsOpen(false);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleChange = (e) => {
    const courseTitle = courseTitleRef.current?.value;
    const instructorName = instructorNameRef.current?.value;
    const courseDuration = courseDurationRef.current?.value;
    const coursePrice = coursePriceRef.current?.value;
    const availableSeats = availableSeatsRef.current?.value;
    if (e.target.value) {
      setDisable(true);
      if (
        courseTitle === updateCourse?.courseTitle &&
        instructorName === updateCourse?.instructorName &&
        courseDuration === updateCourse?.courseDuration &&
        coursePrice === updateCourse?.coursePrice &&
        availableSeats == updateCourse?.availableSeats
      ) {
        setDisable(false);
      }
    }
  };
  if (isInstructorCourseLoading) {
    return <Loading />;
  }
  return (
    <>
      {InstructorCourse?.length === 0 ? (
        <NoDataFound />
      ) : (
        <div className="w-full p-5 h-full">
          <h3 className="text-3xl font-semibold text-center">My Course</h3>
          <div className="overflow-x-auto w-full my-3">
            <table className="table w-full ">
              {/* head */}
              <thead>
                <tr className="text-white text-[16px]">
                  <th>Image</th>
                  <th>Course Title</th>
                  <th>Price</th>
                  <th>Seats</th>
                  <th>Status</th>
                  <th>Enrolled</th>
                  <th>Feedback</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {InstructorCourse?.map((course, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={course.courseImage}
                        alt=""
                      />
                    </td>
                    <td>{course.courseTitle}</td>
                    <td>${course.coursePrice}</td>
                    <td>
                      {course.availableSeats >= 0 ? course.availableSeats : 0}
                    </td>
                    <td className="font-semibold">{course.status}</td>
                    <td>{course?.enrolled ? course?.enrolled : "0"}</td>
                    <td>
                      {course?.feedback === "" || !course?.feedback ? (
                        "nothing"
                      ) : (
                        <button
                          onClick={() => [
                            setIsOpen1(!isOpen1),
                            setFeedback(course?.feedback),
                          ]}
                          className="btn btn-xs bg-gradient-to-r from-[#1DC1B3] to-green-500 border-none text-white"
                        >
                          See More
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveCourse(course._id)}
                        className=" bg-rose-600 p-2 rounded"
                      >
                        <HiTrash className="w-6 h-6"></HiTrash>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setIsOpen(!isOpen),
                            setUpdateCourse(course),
                            setUpdateId(course._id);
                        }}
                        className=" bg-gradient-to-r from-[#1DC1B3] to-green-500 p-2 rounded"
                      >
                        <HiPencilAlt className="w-6 h-6"></HiPencilAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal
              isOpen={isOpen1}
              setIsOpen={setIsOpen1}
              title={"Why The Course Was Deny?"}
            >
              <h3 className="text-xl py-5 text-rose-600">{feedback}</h3>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen1(false)}
                  className="py-2 px-8 bg-gradient-to-r from-[#1DC1B3] to-green-500 text-white rounded"
                >
                  Ok
                </button>
              </div>
            </Modal>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <form
                onSubmit={handleSubmit}
                className="w-full border border-gray-700 px-8 py-3 rounded-2xl"
              >
                <div>
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="text-white font-semibold">
                        Course Title <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      ref={courseTitleRef}
                      placeholder="Course Title"
                      onChange={handleChange}
                      className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                      defaultValue={updateCourse?.courseTitle}
                      required
                    />
                  </div>
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="text-white font-semibold">
                        Instructor Name <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      ref={instructorNameRef}
                      onChange={handleChange}
                      defaultValue={updateCourse?.instructorName}
                      placeholder="Instructor name"
                      className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="text-white font-semibold">
                      Instructor Email <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    ref={instructorEmailRef}
                    placeholder="example@gmail.com"
                    defaultValue={updateCourse?.instructorEmail}
                    className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                    required
                    readOnly
                  />
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="text-white font-semibold">
                      Course Duration <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    ref={courseDurationRef}
                    onChange={handleChange}
                    placeholder="5 weeks"
                    className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                    defaultValue={updateCourse?.courseDuration}
                    required
                  />
                </div>
                <div className="md:flex justify-between gap-5">
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="text-white font-semibold">
                        Course Price <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Price"
                      ref={coursePriceRef}
                      onChange={handleChange}
                      defaultValue={updateCourse?.coursePrice}
                      className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                      required
                    />
                  </div>
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="text-white font-semibold">
                        Available seats <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <input
                      type="number"
                      ref={availableSeatsRef}
                      onChange={handleChange}
                      placeholder="Available seats"
                      className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                      defaultValue={updateCourse?.availableSeats}
                      required
                    />
                  </div>
                </div>

                <div className="form-control py-2">
                  <label className="label">
                    <span className="text-white font-semibold">
                      Course Image <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <input
                    ref={imageRef}
                    className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
                    defaultValue={updateCourse?.courseImage}
                    required
                    type="text"
                    name="image"
                  />
                  {}
                </div>
                <div className="flex justify-end py-3 gap-4">
                  <div
                    onClick={() => setIsOpen(false)}
                    className="py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white cursor-pointer"
                  >
                    Cancle
                  </div>
                  {disable ? (
                    <button className="py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white">
                      {loading ? (
                        <span className="flex justify-center text-center">
                          <ImSpinner6 className="w-6 h-6 animate-spin" />{" "}
                          Loading..
                        </span>
                      ) : (
                        "Update"
                      )}
                    </button>
                  ) : (
                    <button
                      disabled
                      className={`py-2 px-7 rounded font-semibold  text-white bg-gray-500 `}
                    >
                      Update
                    </button>
                  )}
                </div>
              </form>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCourse;
