/* eslint-disable react/prop-types */
import { BsBook} from "react-icons/bs";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
const InstructorDetails = ({ instructor }) => {
  const {_id, fullName, imageUrl,email, numberOfCourses } =
    instructor;
  return (
    <div className="rounded-xl h-full border border-gray-700  shadow-xl">
      <div className="overflow-hidden rounded-t-xl">
        <img
          className="w-full h-48 rounded-t hover:scale-125 transition-all duration-300"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="px-5 py-2  text-center">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{fullName}</h3>
          <button className="btn btn-xs bg-green-500 border-none text-white">Instructor</button>
          {numberOfCourses && (
            <h1 className="flex justify-center items-center gap-2">
              <BsBook className="text-green-500 w-5 h-5" /> Course :
              {numberOfCourses}
            </h1>
          )}
          <h3>{email}</h3>
            <div className="flex gap-2 justify-center items-center py-2">
              <button className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer">
                <FiFacebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer">
                <FiTwitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer">
                <FiInstagram className="w-4 h-4" />
              </button>
            </div>
        </div>
        <div className="flex justify-center items-center py-3">
          <Link to={`/instructor-details/${_id}`}>
            <Button title={"See More"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
