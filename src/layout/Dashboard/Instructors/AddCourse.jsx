import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";

const AddCourse = () => {
  const [loading,setLoading] = useState(false)
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    const {
      courseTitle,
      instructorName,
      instructorEmail,
      coursePrice,
      courseDuration,
      availableSeats,
    } = data;
    const image = data.courseImage[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=9d44eaf618447b8f95c8ff98785d99c3`;
    axios.post(url, formData).then((res) => {
      const imageUrl = res.data.data.display_url;
      const courseData = {
        courseTitle,
        instructorName,
        instructorEmail,
        instructorImage: user?.photoURL ,
        courseImage: imageUrl,
        coursePrice,
        courseDuration,
        availableSeats: parseInt(availableSeats),
        status: "pending",
        role: "instructor",
      };
      axios
        .post(
          `https://artistryserverside-production.up.railway.app/addedCourse`,
          courseData
        )
        .then((res) => {
          if (res.data.insertedId) {
            setLoading(false)
            toast.success("Added Course Successfully")
            reset();
          }
        });
    });
  };
  return (
    <div className="w-full md:w-[75%] mx-auto  text-white py-5">
      <h2 className="text-center text-3xl font-semibold pb-5">Add A Course</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
              placeholder="Course Title"
              className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
              {...register("courseTitle", { required: true })}
            />
            {errors.courseTitle && (
              <span className="text-rose-500">Please Enter Course Title</span>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="text-white font-semibold">
                Instructor Name <span className="text-rose-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Instructor name"
              className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
              {...register("instructorName", { required: true })}
              defaultValue={user?.displayName}
              readOnly
            />
            {errors.instructorName && (
              <span className="text-rose-500">
                Please Enter Instructor name
              </span>
            )}
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
            placeholder="example@gmail.com"
            className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
            {...register("instructorEmail", { required: true })}
            defaultValue={user?.email}
            readOnly
          />
          {errors.instructorEmail && (
            <span className="text-rose-500">Please Enter Instructor Email</span>
          )}
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="text-white font-semibold">
              Course Duration <span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="5 weeks"
            className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
            {...register("courseDuration", { required: true })}
          />
          {errors.courseDuration && (
            <span className="text-rose-500">Please Enter Course Duration</span>
          )}
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
              className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
              {...register("coursePrice", { required: true })}
            />
            {errors.coursePrice && (
              <span className="text-rose-500">Please Enter Course Price</span>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="text-white font-semibold">
                Available seats <span className="text-rose-500">*</span>
              </span>
            </label>
            <input
              type="number"
              placeholder="Available seats"
              className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && (
              <span className="text-rose-500">
                Please Enter Available seats
              </span>
            )}
          </div>
        </div>

        <div className="form-control py-2">
          <label className="label">
            <span className="text-white font-semibold">
              Course Image <span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="file"
            name=""
            {...register("courseImage", { required: true })}
          />
          {errors.courseImage && (
            <span className="text-rose-500">Please Upload Course Image</span>
          )}
        </div>
        <div className="form-control mt-6">
        <button className="w-full py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white">
            {loading ? <span className="flex justify-center text-center"><ImSpinner6 className="w-6 h-6 animate-spin"/> Loading..</span> : "Add Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
