/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineFieldTime,
} from "react-icons/ai";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CourseDetails = ({ course }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    _id,
    courseTitle,
    courseImage,
    instructorName,
    instructorImage,
    coursePrice,
    courseDuration,
    availableSeats,
    rating,
    role,
  } = course;
  return (
    <div className="rounded-xl h-full border border-gray-800">
        <div className="overflow-hidden rounded-t-xl">
          <img className="w-full h-56 rounded-t hover:scale-125 transition-all duration-300" src={courseImage} alt="" />
        </div>
      <div className="px-5 pt-5 pb-5 space-y-3">
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={instructorImage}
              alt=""
            />
            <div>
              <h2 className="font-semibold">{instructorName}</h2>
              <p>{role}</p>
            </div>
          </div>
          <button>
            <AiFillHeart className="w-6 h-6 text-gray-400 hover:text-rose-500 " />
          </button>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{courseTitle}</h3>
          <h3 className="font-semibold">Available Seats : {availableSeats}</h3>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Price : ${coursePrice}</p>
            <p className="flex gap-1 justify-center items-center">
              <AiOutlineFieldTime className="w-6 h-6" /> {courseDuration}
            </p>
          </div>
          <Rating style={{ maxWidth: 100 }} readOnly value={rating} />
          <div className="flex justify-center items-center mt-5">
            <Link to={`/single-course/${_id}`}><Button title={'See More'}/></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
